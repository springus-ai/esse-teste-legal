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
    
    if (diagPanel) diagPanel.classList.add('hide-ui');
    if (resultDisplay) resultDisplay.classList.add('hide-ui');
    if (!introBox) return;

    introBox.style.display = 'flex';
    let content = classpectDescriptions["UI_Intro"] ? classpectDescriptions["UI_Intro"].replace(/<button.*?>.*?<\/button>/gi, '') : "Análise de Classpect.";
    
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
    
    if (diagPanel) { diagPanel.style.display = 'flex'; diagPanel.classList.remove('hide-ui'); }
    if (bottomUI) bottomUI.classList.remove('hide-ui');
    
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
    sDiv.textContent = q.scenario;
    history.appendChild(sDiv);
    sDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

    let delay = 1;
    q.voices.forEach(v => {
        setTimeout(() => {
            const vDiv = document.createElement('div');
            vDiv.className = 'voice-block entry-anim';
            vDiv.innerHTML = `<div class="voice-header" style="color: var(--aspect-${v.aspect.toLowerCase()}) !important;">▶ ${v.aspect.toUpperCase()}</div><div class="voice-text">"${v.text}"</div>`;
            history.appendChild(vDiv);
            history.scrollTo({ top: history.scrollHeight, behavior: 'smooth' });
        }, delay * 500);
        delay++;
    });

    setTimeout(() => {
        q.options.forEach((opt, idx) => {
            const b = document.createElement('div');
            b.className = 'option-item entry-anim';
            b.innerHTML = `<span>${idx + 1}. ${opt.dialogue}</span>`;
            b.onclick = () => { if(!isProcessing) handleChoice(opt, true); };
            options.appendChild(b);
        });
        options.classList.remove('disabled');
        isProcessing = false;
    }, delay * 550);
}

function handleChoice(opt, isAspectPhase) {
    stateHistory.push(JSON.parse(JSON.stringify(state)));
    const history = document.getElementById('history-container');
    const choiceDiv = document.createElement('div');
    choiceDiv.className = 'player-choice-block entry-anim';
    choiceDiv.innerHTML = `VOCÊ — ${opt.dialogue}`;
    history.appendChild(choiceDiv);

    const weights = opt.weights || {};
    for (let key in weights) {
        if (isAspectPhase) state.aspectScores[key] += weights[key];
        else state.classScores[key] += weights[key];
    }

    if (isAspectPhase) { state.currentIndex++; renderElysium(); }
    else { state.currentClassIndex++; renderClassQuiz(); }
    save();
}

function finishAspectPhase() {
    const scores = Object.entries(state.aspectScores).sort((a, b) => b[1] - a[1]);
    state.dominantAspect = scores[0][0]; 
    state.stage = "aspect_result";
    save();
    
    // Mostra o resultado na ESQUERDA
    const resultDisplay = document.getElementById('result-display');
    resultDisplay.style.display = 'flex';
    resultDisplay.classList.remove('hide-ui');

    const aspect = state.dominantAspect;
    const suaDescricao = classpectDescriptions[aspect] || "Descrição pendente."; 
    resultDisplay.innerHTML = `
        <img src="vamover/${aspect}.png" class="aspect-png" onerror="this.style.opacity='0'">
        <div class="result-text-main entry-anim">
            <h1 style="color: var(--aspect-${aspect.toLowerCase()})">${aspect}</h1>
            <div class="descricao-usuario">${suaDescricao}</div>
            <button class="btn-bora-ver" onclick="startClassPhase()" style="margin-top:20px;">Quero descobrir a minha Classe.</button>
        </div>`;

    // O Chat na DIREITA continua visível
    const history = document.getElementById('history-container');
    history.innerHTML += `<div class="scenario-block" style="border-color: var(--aspect-${aspect.toLowerCase()})">▶ SINCRONIZAÇÃO DE ASPECTO CONCLUÍDA: ${aspect}</div>`;
    history.scrollTo({ top: history.scrollHeight, behavior: 'smooth' });
}

function startClassPhase() {
    state.stage = "class_quiz";
    save();
    // Limpamos o botão de transição do lado esquerdo, mas mantemos o texto lá
    const btn = document.querySelector('#result-display .btn-bora-ver');
    if (btn) btn.remove();
    
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
    sDiv.textContent = q.scenario;
    history.appendChild(sDiv);
    sDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

    let delay = 1;
    q.voices.forEach(v => {
        setTimeout(() => {
            const vDiv = document.createElement('div');
            vDiv.className = 'voice-block entry-anim';
            vDiv.innerHTML = `<div class="voice-header" style="color: var(--aspect-${v.aspect.toLowerCase()}) !important;">▶ ${v.aspect.toUpperCase()}</div><div class="voice-text">"${v.text}"</div>`;
            history.appendChild(vDiv);
            history.scrollTo({ top: history.scrollHeight, behavior: 'smooth' });
        }, delay * 500);
        delay++;
    });

    setTimeout(() => {
        q.options.forEach((opt, idx) => {
            const b = document.createElement('div');
            b.className = 'option-item entry-anim';
            b.innerHTML = `<span>${idx + 1}. ${opt.dialogue}</span>`;
            b.onclick = () => { if(!isProcessing) handleChoice(opt, false); };
            options.appendChild(b);
        });
        options.classList.remove('disabled');
        isProcessing = false;
    }, delay * 550);
}

function finishClassPhase() {
    const classScores = Object.entries(state.classScores).sort((a, b) => b[1] - a[1]);
    state.dominantClass = classScores[0][0];
    viewingClass = state.dominantClass;
    viewingAspect = state.dominantAspect;
    state.stage = "final_result";
    save();
    
    updateResultDisplay();

    const history = document.getElementById('history-container');
    const aspectScores = Object.entries(state.aspectScores).sort((a, b) => b[1] - a[1]);

    let html = `<div class="scenario-block"><h2>▶ ANÁLISE COMPLETA</h2><p>Identidade: <strong>${viewingClass} of ${viewingAspect}</strong></p></div>`;
    
    html += `<div style="padding:10px;"><h3>COEFICIENTE DE CLASSE:</h3>`;
    classScores.forEach(([cls, pts]) => {
        html += `<div onclick="changeViewClass('${cls}')" style="cursor:pointer; padding:5px; border:1px solid #333; margin:2px; color:var(--aspect-${cls.toLowerCase()})">${cls}: ${pts}</div>`;
    });
    
    html += `<h3 style="margin-top:20px;">COEFICIENTE DE ASPECTO:</h3>`;
    aspectScores.forEach(([asp, pts]) => {
        html += `<div onclick="changeViewAspect('${asp}')" style="cursor:pointer; padding:5px; border:1px solid #333; margin:2px; color:var(--aspect-${asp.toLowerCase()})">${asp}: ${pts}</div>`;
    });
    html += `</div>`;
    
    history.innerHTML += html;
    history.scrollTo({ top: history.scrollHeight, behavior: 'smooth' });
}

function changeViewAspect(asp) { viewingAspect = asp; updateResultDisplay(); }
function changeViewClass(cls) { viewingClass = cls; updateResultDisplay(); }

function updateResultDisplay() {
    const resultDisplay = document.getElementById('result-display');
    const descKey = `${viewingClass}:${viewingAspect}`;
    let suaDescricao = classpectDescriptions[descKey] || (classpectDescriptions[viewingClass] || "") + (classpectDescriptions[viewingAspect] || "");

    resultDisplay.innerHTML = `
        <img src="vamover/${viewingAspect}.png" class="aspect-png" onerror="this.style.opacity='0'">
        <div class="result-text-main entry-anim">
            <h1 style="color: var(--aspect-${viewingAspect.toLowerCase()})">${viewingClass.toUpperCase()} OF ${viewingAspect.toUpperCase()}</h1>
            <div class="descricao-usuario">${suaDescricao}</div>
        </div>
    `;
}
