const initialState = {
    stage: "intro",
    aspectScores: { Time: 0, Space: 0, Void: 0, Light: 0, Mind: 0, Heart: 0, Rage: 0, Hope: 0, Doom: 0, Life: 0, Blood: 0, Breath: 0 },
    classScores: { Heir: 0, Seer: 0, Prince: 0, Bard: 0, Thief: 0, Rogue: 0, Sylph: 0, Maid: 0, Page: 0, Knight: 0, Mage: 0, Witch: 0 },
    currentIndex: 0,
    currentClassIndex: 0
};

let state = JSON.parse(JSON.stringify(initialState));
let stateHistory = [];
let isProcessing = false;
let viewingClass = "";
let viewingAspect = "";

window.onload = () => { renderIntro(); };

function renderIntro() {
    const introBox = document.getElementById('intro-container');
    const diagPanel = document.getElementById('dialogue-panel');
    const resultDisplay = document.getElementById('result-display');
    const bottomUI = document.querySelector('.bottom-interaction-area');
    
    if (diagPanel) diagPanel.classList.add('hide-ui');
    if (resultDisplay) resultDisplay.classList.add('hide-ui');
    if (bottomUI) bottomUI.classList.add('hide-ui');
    if (!introBox) return;

    introBox.style.display = 'flex';
    let content = "Análise de Classpect.";
    if (typeof classpectDescriptions !== 'undefined' && classpectDescriptions["UI_Intro"]) {
        content = classpectDescriptions["UI_Intro"].replace(/<button.*?>.*?<\/button>/gi, '');
    }
    introBox.innerHTML = `
        <div class="intro-screen entry-anim">
            <div class="intro-text">${content}</div>
            <button class="btn-bora-ver" onclick="start()">Bora ver.</button>
        </div>`;
}

function start() {
    localStorage.removeItem('sburbState');
    state = JSON.parse(JSON.stringify(initialState)); 
    stateHistory = []; 
    document.getElementById('intro-container').style.display = 'none';
    
    const diagPanel = document.getElementById('dialogue-panel');
    const bottomUI = document.querySelector('.bottom-interaction-area');
    const resultDisplay = document.getElementById('result-display');
    
    if (diagPanel) diagPanel.classList.remove('hide-ui');
    if (bottomUI) bottomUI.classList.remove('hide-ui');
    if (resultDisplay) resultDisplay.classList.add('hide-ui');
    
    state.stage = "aspect_quiz";
    renderElysium();
}

function save() { localStorage.setItem('sburbState', JSON.stringify(state)); }

function renderElysium() {
    const history = document.getElementById('history-container');
    const options = document.getElementById('options-container');
    options.innerHTML = '';

    if (typeof aspectQuestions === 'undefined' || state.currentIndex >= aspectQuestions.length) {
        finishAspectPhase();
        return;
    }

    isProcessing = true;
    options.classList.add('disabled');
    const q = aspectQuestions[state.currentIndex];
    
    const sDiv = document.createElement('div');
    sDiv.className = 'scenario-block entry-anim';
    sDiv.textContent = q.scenario || q.t || "Cenário não encontrado.";
    history.appendChild(sDiv);

    sDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

    let delay = 1;
    if (q.voices && Array.isArray(q.voices)) {
        q.voices.forEach(v => {
            setTimeout(() => {
                const vDiv = document.createElement('div');
                vDiv.className = 'voice-block entry-anim';
                const aspectColor = `var(--aspect-${v.aspect.toLowerCase()})`;
                vDiv.innerHTML = `
                    <div class="voice-header" style="color: ${aspectColor} !important;">
                        ▶ ${v.aspect.toUpperCase()} [${v.checkName || v.check || 'Sensor'}]
                    </div>
                    <div class="voice-text">"${v.text}"</div>
                `;
                history.appendChild(vDiv);
                history.scrollTo({ top: history.scrollHeight, behavior: 'smooth' });
            }, delay * 500);
            delay++;
        });
    }

    setTimeout(() => {
        const optsArray = q.options || q.opts || [];
        optsArray.forEach((opt, idx) => {
            const b = document.createElement('div');
            b.className = 'option-item entry-anim';
            b.innerHTML = `<span>${idx + 1}. ${opt.dialogue}</span>`;
            b.onclick = () => { if(!isProcessing) handleChoice(opt, true); };
            options.appendChild(b);
        });

        const skipBtn = document.createElement('div');
        skipBtn.className = 'option-item entry-anim';
        skipBtn.innerHTML = `<span>${optsArray.length + 1}. Nenhuma das anteriores.</span>`;
        skipBtn.onclick = () => { if(!isProcessing) handleChoice({ dialogue: "Nenhuma das anteriores.", weights: {} }, true); };
        options.appendChild(skipBtn);

        if (stateHistory.length > 0) {
            const backBtn = document.createElement('div');
            backBtn.className = 'option-item entry-anim';
            backBtn.style.color = '#ff6666'; 
            backBtn.innerHTML = `<span>[ VOLTAR PARA A PERGUNTA ANTERIOR ]</span>`;
            backBtn.onclick = () => { if(!isProcessing) goBack(); };
            options.appendChild(backBtn);
        }

        options.classList.remove('disabled');
        isProcessing = false;
        setTimeout(() => { sDiv.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
    }, delay * 550);
}

function handleChoice(opt, isAspectPhase) {
    stateHistory.push(JSON.parse(JSON.stringify(state)));
    const history = document.getElementById('history-container');
    const txt = opt.dialogue || opt.txt || "Opção escolhida";
    
    const choiceDiv = document.createElement('div');
    choiceDiv.className = 'player-choice-block entry-anim';
    choiceDiv.innerHTML = `VOCÊ — ${txt}`;
    history.appendChild(choiceDiv);

    const weights = opt.weights || opt.w || {};
    for (let key in weights) {
        if (isAspectPhase && state.aspectScores[key] !== undefined) {
            state.aspectScores[key] += weights[key];
        } else if (!isAspectPhase && state.classScores[key] !== undefined) {
            state.classScores[key] += weights[key];
        }
    }

    if (isAspectPhase) {
        state.currentIndex++;
        save();
        renderElysium();
    } else {
        state.currentClassIndex++;
        save();
        renderClassQuiz();
    }
}

function goBack() {
    if (stateHistory.length === 0) return;
    state = stateHistory.pop();
    save();
    if (state.stage === "aspect_quiz") renderElysium();
    else if (state.stage === "class_quiz") renderClassQuiz();
}

function finishAspectPhase() {
    const scores = Object.entries(state.aspectScores).sort((a, b) => b[1] - a[1]);
    state.dominantAspect = scores[0][0]; 
    state.stage = "aspect_result";
    save();
    
    // MUDANÇA AQUI: Esconde o painel de chat para não encavalar
    const diagPanel = document.getElementById('dialogue-panel');
    if (diagPanel) diagPanel.classList.add('hide-ui');

    const resultDisplay = document.getElementById('result-display');
    const bottomUI = document.querySelector('.bottom-interaction-area');
    if (bottomUI) bottomUI.classList.add('hide-ui');

    if (resultDisplay) {
        resultDisplay.classList.remove('hide-ui');
        resultDisplay.style.display = 'flex';
        const suaDescricao = classpectDescriptions[state.dominantAspect] || "Descrição pendente."; 
        resultDisplay.innerHTML = `
            <img src="vamover/${state.dominantAspect}.png" class="aspect-png" onerror="this.style.opacity='0'; this.src=''">
            <div class="result-text-main entry-anim">
                <h1 style="color: var(--aspect-${state.dominantAspect.toLowerCase()})">${state.dominantAspect}</h1>
                <div class="descricao-usuario">${suaDescricao}</div>
                <button class="btn-bora-ver" onclick="startClassPhase()">Quero descobrir a minha Classe.</button>
            </div>
        `;
    }
}

function startClassPhase() {
    state.stage = "class_quiz";
    save();
    
    // MUDANÇA AQUI: Esconde o resultado e devolve o painel de chat
    document.getElementById('result-display').classList.add('hide-ui');
    
    const diagPanel = document.getElementById('dialogue-panel');
    if (diagPanel) diagPanel.classList.remove('hide-ui');
    
    const bottomUI = document.querySelector('.bottom-interaction-area');
    if (bottomUI) bottomUI.classList.remove('hide-ui');
    
    renderClassQuiz();
}

function renderClassQuiz() {
    const history = document.getElementById('history-container');
    const options = document.getElementById('options-container');
    options.innerHTML = '';

    const classQuestionsBlock = questionsByAspect[state.dominantAspect];
    if (!classQuestionsBlock || state.currentClassIndex >= classQuestionsBlock.length) {
        finishClassPhase();
        return;
    }

    isProcessing = true;
    options.classList.add('disabled');
    const q = classQuestionsBlock[state.currentClassIndex];

    const sDiv = document.createElement('div');
    sDiv.className = 'scenario-block entry-anim';
    sDiv.textContent = q.scenario || q.t || "Cenário não encontrado.";
    history.appendChild(sDiv);

    sDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

    let delay = 1;
    if (q.voices && Array.isArray(q.voices)) {
        q.voices.forEach(v => {
            setTimeout(() => {
                const vDiv = document.createElement('div');
                vDiv.className = 'voice-block entry-anim';
                const classColor = `var(--aspect-${v.aspect.toLowerCase()})`;
                vDiv.innerHTML = `
                    <div class="voice-header" style="color: ${classColor} !important;">▶ ${v.aspect.toUpperCase()}</div>
                    <div class="voice-text">"${v.text}"</div>
                `;
                history.appendChild(vDiv);
                history.scrollTo({ top: history.scrollHeight, behavior: 'smooth' });
            }, delay * 500);
            delay++;
        });
    }

    setTimeout(() => {
        const optsArray = q.options || q.opts || [];
        optsArray.forEach((opt, idx) => {
            const b = document.createElement('div');
            b.className = 'option-item entry-anim';
            b.innerHTML = `<span>${idx + 1}. ${opt.dialogue}</span>`;
            b.onclick = () => { if(!isProcessing) handleChoice(opt, false); };
            options.appendChild(b);
        });

        const skipBtn = document.createElement('div');
        skipBtn.className = 'option-item entry-anim';
        skipBtn.innerHTML = `<span>${optsArray.length + 1}. Nenhuma das anteriores.</span>`;
        skipBtn.onclick = () => { if(!isProcessing) handleChoice({ dialogue: "Nenhuma das anteriores.", weights: {} }, false); };
        options.appendChild(skipBtn);

        if (stateHistory.length > 0) {
            const backBtn = document.createElement('div');
            backBtn.className = 'option-item entry-anim';
            backBtn.style.color = '#ff6666'; 
            backBtn.innerHTML = `<span>[ VOLTAR PARA A PERGUNTA ANTERIOR ]</span>`;
            backBtn.onclick = () => { if(!isProcessing) goBack(); };
            options.appendChild(backBtn);
        }

        options.classList.remove('disabled');
        isProcessing = false;
        setTimeout(() => { sDiv.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
    }, delay * 550);
}

function finishClassPhase() {
    const classScores = Object.entries(state.classScores).sort((a, b) => b[1] - a[1]);
    const aspectScores = Object.entries(state.aspectScores).sort((a, b) => b[1] - a[1]);

    state.dominantClass = classScores[0][0];
    viewingClass = state.dominantClass;
    viewingAspect = state.dominantAspect;

    state.stage = "final_result";
    save();
    
    // MUDANÇA AQUI: Esconde o chat no resultado final também
    const diagPanel = document.getElementById('dialogue-panel');
    if (diagPanel) diagPanel.classList.add('hide-ui');
    
    const bottomUI = document.querySelector('.bottom-interaction-area');
    if (bottomUI) bottomUI.classList.add('hide-ui');
    
    updateResultDisplay();
    // (Opcional) Você pode manter o histórico visível se quiser, 
    // mas para evitar o erro da imagem, o melhor é esconder o painel.
}

function changeViewAspect(newAspect) { viewingAspect = newAspect; updateResultDisplay(); }
function changeViewClass(newClass) { viewingClass = newClass; updateResultDisplay(); }

function updateResultDisplay() {
    const resultDisplay = document.getElementById('result-display');
    if (!resultDisplay) return;

    resultDisplay.classList.remove('hide-ui');
    resultDisplay.style.display = 'flex';

    const aspectLower = viewingAspect.toLowerCase();
    const descKey = `${viewingClass}:${viewingAspect}`;
    let suaDescricao = classpectDescriptions[descKey];

    if (!suaDescricao) {
         const descClass = classpectDescriptions[viewingClass];
         const descAspect = classpectDescriptions[viewingAspect];
         suaDescricao = (descClass || "") + (descAspect || "");
    }

    resultDisplay.innerHTML = `
        <img src="vamover/${viewingAspect}.png" class="aspect-png" onerror="this.style.opacity='0'">
        <div class="result-text-main entry-anim">
            <h1 style="color: var(--aspect-${aspectLower})">${viewingClass.toUpperCase()} OF ${viewingAspect.toUpperCase()}</h1>
            <div class="descricao-usuario">${suaDescricao}</div>
        </div>
    `;
}
