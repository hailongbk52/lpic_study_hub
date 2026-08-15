// ========== JNCIA Study Hub - App Logic (Minimax Layout + Antigravity Data) ==========

const STATE = {
  questions: QUESTIONS, // loaded from questions.js
  topics: TOPICS,       // loaded from questions.js
  currentTopic: 'all',
  currentPage: 1,
  pageSize: 10,
  shuffle: false,
  known: new Set(JSON.parse(localStorage.getItem('jncia_known_v3') || '[]')),
  quiz: null,
  lang: 'both' // 'en', 'vi', 'both'
};

const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

// ===== Helpers =====
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

function shuffleArray(a) {
  const arr = [...a];
  for (let i = arr.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

function escapeHtml(unsafe) {
  if (typeof unsafe !== 'string') return '';
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getLocText(content) {
  if (typeof content === 'string') return escapeHtml(content);
  if (!content) return '';
  
  if (STATE.lang === 'both') {
    return `
      <div class="lang-vi"><strong>🇻🇳 </strong> ${escapeHtml(content.vi)}</div>
      <div class="lang-en" style="margin-top: 4px; color: var(--text-secondary); font-size: 0.9em;"><strong>🇺🇸 </strong> ${escapeHtml(content.en)}</div>
    `;
  } else if (STATE.lang === 'en') {
    return escapeHtml(content.en);
  } else {
    return escapeHtml(content.vi);
  }
}

function saveKnown() {
  localStorage.setItem('jncia_known_v3', JSON.stringify([...STATE.known]));
}
function isKnown(id) { return STATE.known.has(id); }
function toggleKnown(id) {
  if (STATE.known.has(id)) STATE.known.delete(id);
  else STATE.known.add(id);
  saveKnown();
}

function getFiltered() {
  let qs = STATE.questions;
  if (STATE.currentTopic !== 'all') {
    qs = qs.filter(q => q.topicId === parseInt(STATE.currentTopic));
  }
  if (STATE.shuffle) qs = shuffleArray(qs);
  return qs;
}

function getTopicById(id) {
  return STATE.topics.find(t => t.id === id) || { name: { vi: 'Other', en: 'Other' }, description: { vi: '', en: '' } };
}

// ===== Language Toggle =====
function setLanguage(lang) {
  STATE.lang = lang;
  $$('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Re-render everything dependent on language
  const currentPane = $('.tab.active').dataset.pane;
  if (currentPane === 'study') renderCurrent();
  else if (currentPane === 'topics') renderTopics();
  else if (currentPane === 'quiz' && STATE.quiz) renderQuizQ();
}

// ===== RENDER QUESTION CARD =====
function renderQuestionCard(q, opts = {}) {
  const knownClass = isKnown(q.id) ? 'btn-ok' : 'btn-ghost';
  const knownText = isKnown(q.id) ? '✓ Đã biết' : 'Đánh dấu';
  const topicObj = getTopicById(q.topicId);
  const topicName = STATE.lang === 'en' ? topicObj.name.en : topicObj.name.vi;
  
  const imgs = q.image ? `<img class="q-img" src="${q.image}" alt="Exhibit Q${q.id}" loading="lazy">` : '';

  const optsHtml = q.options.map((optText, idx) => {
    const letter = letters[idx];
    return `<div class="opt" data-idx="${idx}" onclick="selectStudyOpt(this, ${q.id}, ${idx}, ${q.multiSelect})">
      <span class="opt-letter">${letter}</span>
      <span>${optText}</span>
    </div>`;
  }).join('');

  const correctLetters = q.correct.map(idx => letters[idx]).join(', ');
  const multiStr = q.multiSelect ? `<span style="color:var(--warn);font-size:0.85em;margin-left:8px;">(Chọn nhiều đáp án)</span>` : '';

  return `<div class="q-card" id="q-${q.id}">
    <div class="q-head">
      <div>
        <span class="q-num">Câu ${q.id}</span>
        <span class="q-topic">${escapeHtml(topicName)}</span>
      </div>
      <div class="q-actions">
        <button class="btn ${knownClass}" onclick="toggleKnown(${q.id});renderCurrent();">
          ${knownText}
        </button>
        <button class="btn btn-warn" onclick="toggleAnswer(${q.id})">
          👁️ Đáp án
        </button>
      </div>
    </div>
    <div class="q-text">${escapeHtml(q.question)} ${multiStr}</div>
    ${imgs}
    <div class="opts">${optsHtml}</div>
    <div class="answer-section" id="ans-${q.id}">
      <div class="correct-ans">✅ Đáp án đúng: ${correctLetters}</div>
      <div class="explanation">
        ${getLocText(q.explanation)}
      </div>
    </div>
  </div>`;
}

window.selectStudyOpt = function(el, qid, idx, isMulti) {
  if ($('#ans-' + qid).classList.contains('show')) return;
  if (!isMulti) {
    document.querySelectorAll(`#q-${qid} .opt`).forEach(o => o.classList.remove('selected'));
  }
  el.classList.toggle('selected');
}

window.toggleAnswer = function(qid) {
  const el = $('#ans-' + qid);
  if (!el) return;
  
  const isShowing = el.classList.contains('show');
  const q = STATE.questions.find(x => x.id === qid);
  const optsNodes = document.querySelectorAll(`#q-${qid} .opt`);
  
  if (!isShowing) {
    let allCorrect = true;
    let selectedCount = 0;
    
    optsNodes.forEach(opt => {
      const idx = parseInt(opt.dataset.idx);
      const isSelected = opt.classList.contains('selected');
      const isCorrect = q.correct.includes(idx);
      
      if (isSelected) selectedCount++;
      
      if (isCorrect) {
        opt.classList.add('correct');
      } else if (isSelected && !isCorrect) {
        opt.classList.add('wrong');
        allCorrect = false;
      }
      
      if (isCorrect && !isSelected) {
        allCorrect = false;
      }
      opt.classList.remove('selected');
    });
    
    if (q.multiSelect && selectedCount !== q.correct.length) {
      allCorrect = false;
    }
    
    if (allCorrect && selectedCount > 0 && !isKnown(qid)) {
      toggleKnown(qid);
      const btn = document.querySelector(`#q-${qid} .q-actions button:first-child`);
      if (btn) {
        btn.classList.remove('btn-ghost');
        btn.classList.add('btn-ok');
        btn.textContent = '✓ Đã biết';
      }
    }
  } else {
    optsNodes.forEach(opt => {
      opt.classList.remove('correct', 'wrong', 'selected');
    });
  }
  
  el.classList.toggle('show');
}

// ===== STUDY PANE =====
window.renderCurrent = function() {
  const all = getFiltered();
  const total = all.length;
  const totalPages = Math.max(1, Math.ceil(total / STATE.pageSize));
  if (STATE.currentPage > totalPages) STATE.currentPage = totalPages;
  const start = (STATE.currentPage-1) * STATE.pageSize;
  const page = all.slice(start, start + STATE.pageSize);
  $('#questionsList').innerHTML = page.length
    ? page.map(q => renderQuestionCard(q)).join('')
    : '<div class="empty">Không có câu hỏi nào trong chủ đề này.</div>';
  $('#pageInfo').textContent = `Trang ${STATE.currentPage} / ${totalPages} — ${total} câu`;
  $('#prevBtn').disabled = STATE.currentPage <= 1;
  $('#nextBtn').disabled = STATE.currentPage >= totalPages;
  $('#prevBtnBottom').disabled = STATE.currentPage <= 1;
  $('#nextBtnBottom').disabled = STATE.currentPage >= totalPages;
}

// ===== TOPICS PANE =====
window.renderTopics = function() {
  const grid = $('#topicsGrid');
  grid.innerHTML = STATE.topics.map(t => {
    const total = STATE.questions.filter(q => q.topicId === t.id).length;
    const known = STATE.questions.filter(q => q.topicId === t.id && STATE.known.has(q.id)).length;
    const pct = total ? Math.round(known*100/total) : 0;
    const tName = STATE.lang === 'en' ? t.name.en : t.name.vi;
    const tDesc = STATE.lang === 'en' ? t.description.en : t.description.vi;
    return `<div class="topic-card" onclick="filterTopic('${t.id}')">
      <div class="topic-name">${escapeHtml(tName)}</div>
      <div class="topic-desc">${escapeHtml(tDesc)}</div>
      <div class="topic-meta">
        <span>📝 ${total} câu</span><span>✓ ${known}/${total} (${pct}%)</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
}

window.filterTopic = function(id) {
  STATE.currentTopic = id;
  STATE.currentPage = 1;
  $('#topicFilter').value = id;
  switchPane('study');
  renderCurrent();
}

// ===== PROGRESS PANE =====
window.renderProgress = function() {
  const total = STATE.questions.length;
  const known = STATE.known.size;
  const pct = total ? Math.round(known*100/total) : 0;
  $('#progressStats').innerHTML = `
    <div class="stat"><div class="stat-val">${total}</div><div class="stat-lbl">Tổng câu hỏi</div></div>
    <div class="stat"><div class="stat-val">${known}</div><div class="stat-lbl">Đã đánh dấu biết</div></div>
    <div class="stat"><div class="stat-val">${pct}%</div><div class="stat-lbl">Hoàn thành</div></div>
  `;
  // Per-topic
  $('#topicProgress').innerHTML = '<h4 style="margin:14px 0 10px">Theo chủ đề:</h4>' +
    STATE.topics.map(t => {
      const qTotal = STATE.questions.filter(q => q.topicId === t.id).length;
      const k = STATE.questions.filter(q => q.topicId === t.id && STATE.known.has(q.id)).length;
      const p = qTotal ? Math.round(k*100/qTotal) : 0;
      const tName = STATE.lang === 'en' ? t.name.en : t.name.vi;
      return `<div style="margin-bottom:10px">
        <div style="display:flex;justify-content:space-between;font-size:.9em;margin-bottom:4px">
          <span><b>${escapeHtml(tName)}</b></span><span>${k}/${qTotal} (${p}%)</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${p}%"></div></div>
      </div>`;
    }).join('');
}

// ===== QUIZ PANE =====
window.startQuiz = function() {
  const topicId = $('#quizTopic').value;
  const count = parseInt($('#quizCount').value);
  let pool = STATE.questions;
  if (topicId !== 'all') {
    pool = pool.filter(q => q.topicId === parseInt(topicId));
  }
  pool = shuffleArray(pool).slice(0, count);
  if(pool.length === 0) {
      alert("Không có câu hỏi nào!"); return;
  }
  STATE.quiz = { pool, idx: 0, score: 0, answers: [] };
  $('#quizSetup').style.display = 'none';
  $('#quizArea').style.display = 'block';
  $('#quizResult').style.display = 'none';
  renderQuizQ();
}

window.renderQuizQ = function() {
  const { pool, idx } = STATE.quiz;
  const q = pool[idx];
  const total = pool.length;
  const pct = Math.round(idx*100/total);
  $('#quizProg').style.width = pct + '%';
  
  const topicObj = getTopicById(q.topicId);
  const topicName = STATE.lang === 'en' ? topicObj.name.en : topicObj.name.vi;
  
  const imgs = q.image ? `<img class="q-img" src="${q.image}">` : '';
  const multiStr = q.multiSelect ? `<span style="color:var(--warn);font-size:0.85em;margin-left:8px;">(Chọn ${q.correct.length} đáp án)</span>` : '';

  $('#quizQuestion').innerHTML = `
    <div class="q-head">
      <div>
        <span class="q-num">Câu ${idx+1}/${total}</span>
        <span class="q-topic">${escapeHtml(topicName)}</span>
      </div>
    </div>
    <div class="q-text">${escapeHtml(q.question)} ${multiStr}</div>
    ${imgs}
    <div class="opts">${q.options.map((o, i) =>
      `<div class="opt" data-idx="${i}" onclick="selectQuizOpt(this, ${i}, ${q.multiSelect})">
        <span class="opt-letter">${letters[i]}</span>
        <span>${o}</span>
      </div>`).join('')}
    </div>`;
  $('#quizSubmitBtn').style.display = 'inline-block';
  $('#quizNextBtn').style.display = 'none';
  
  STATE.quiz.currentSelection = new Set();
}

window.selectQuizOpt = function(el, idx, isMulti) {
  if (!isMulti) {
    document.querySelectorAll('#quizQuestion .opt').forEach(o => o.classList.remove('selected'));
    STATE.quiz.currentSelection.clear();
  }
  
  if (STATE.quiz.currentSelection.has(idx)) {
    STATE.quiz.currentSelection.delete(idx);
    el.classList.remove('selected');
  } else {
    STATE.quiz.currentSelection.add(idx);
    el.classList.add('selected');
  }
}

window.submitQuizAnswer = function() {
  const q = STATE.quiz.pool[STATE.quiz.idx];
  if (STATE.quiz.currentSelection.size === 0) { 
      alert('Vui lòng chọn đáp án!'); return; 
  }
  if (q.multiSelect && STATE.quiz.currentSelection.size !== q.correct.length) {
      alert(`Vui lòng chọn đủ ${q.correct.length} đáp án!`); return;
  }
  
  const selectedArr = Array.from(STATE.quiz.currentSelection).sort();
  const correctArr = [...q.correct].sort();
  const isCorrect = JSON.stringify(selectedArr) === JSON.stringify(correctArr);
  
  if (isCorrect) STATE.quiz.score++;
  STATE.quiz.answers.push({
      qid: q.id, 
      picked: selectedArr, 
      correct: correctArr, 
      ok: isCorrect
  });

  document.querySelectorAll('#quizQuestion .opt').forEach(o => {
    const idx = parseInt(o.dataset.idx);
    if (correctArr.includes(idx)) {
        o.classList.add('correct');
        o.classList.remove('selected');
    } else if (selectedArr.includes(idx) && !isCorrect) {
        o.classList.add('wrong');
        o.classList.remove('selected');
    }
  });

  if (isCorrect) {
      STATE.known.add(q.id);
      saveKnown();
  }

  $('#quizSubmitBtn').style.display = 'none';
  $('#quizNextBtn').style.display = 'inline-block';
}

window.nextQuizQ = function() {
  STATE.quiz.idx++;
  if (STATE.quiz.idx >= STATE.quiz.pool.length) showQuizResult();
  else renderQuizQ();
}

window.showQuizResult = function() {
  $('#quizArea').style.display = 'none';
  const total = STATE.quiz.pool.length;
  const pct = Math.round(STATE.quiz.score*100/total);
  $('#quizResult').style.display = 'block';
  
  const wrongHtml = STATE.quiz.answers.filter(a => !a.ok).map(a => {
    const q = STATE.questions.find(x => x.id === a.qid);
    const pickedStr = a.picked.map(i => letters[i]).join(', ');
    const correctStr = a.correct.map(i => letters[i]).join(', ');
    return `<div style="background:#fdedec;padding:10px;border-radius:6px;margin-bottom:8px">
      <b>Q${a.qid}:</b> ${escapeHtml(q.question).slice(0,80)}...<br>
      <span style="color:var(--bad)">Bạn chọn: ${pickedStr}</span> |
      <span style="color:var(--ok)">Đúng: ${correctStr}</span>
    </div>`;
  }).join('');

  $('#quizResult').innerHTML = `
    <div class="quiz-result">
      <h3>🎉 Kết quả</h3>
      <div class="score-circle" data-pct="${pct}%" style="--pct:${pct}%"></div>
      <p>Bạn đúng <b>${STATE.quiz.score}/${total}</b> câu (${pct}%)</p>
      <div style="margin-top:18px;text-align:left">
        ${wrongHtml || '<p style="color:var(--ok)">🎊 Hoàn hảo! Bạn trả lời đúng hết!</p>'}
      </div>
      <button class="btn btn-pri" onclick="restartQuiz()" style="margin-top:14px">↻ Làm lại</button>
    </div>`;
}

window.restartQuiz = function() {
  $('#quizResult').style.display = 'none';
  $('#quizSetup').style.display = 'block';
  STATE.quiz = null;
}

// ===== TAB SWITCHING =====
window.switchPane = function(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.pane === name));
  document.querySelectorAll('.pane').forEach(p => p.classList.toggle('active', p.id === name));
  if (name === 'topics') renderTopics();
  if (name === 'progress') renderProgress();
}

// ===== INIT =====
function init() {
  // Populate topic selects
  const getTopicOptionHtml = (id, nameEn, nameVi) => {
      const name = STATE.lang === 'en' ? nameEn : nameVi;
      return `<option value="${id}">${escapeHtml(name)}</option>`;
  };
  
  const buildTopicSelects = () => {
      let html = `<option value="all">Tất cả (${STATE.questions.length})</option>`;
      STATE.topics.forEach(t => {
          html += getTopicOptionHtml(t.id, t.name.en, t.name.vi);
      });
      $('#topicFilter').innerHTML = html;
      $('#quizTopic').innerHTML = html;
  };
  buildTopicSelects(); // init first time
  
  // Update select dropdowns when language changes
  const originalSetLang = setLanguage;
  window.setLanguage = function(lang) {
      originalSetLang(lang);
      buildTopicSelects();
  };

  // Lang Toggle clicks
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Tab clicks
  document.querySelectorAll('.tab').forEach(t => {
    t.addEventListener('click', () => switchPane(t.dataset.pane));
  });

  // Study controls
  $('#topicFilter').addEventListener('change', e => {
    STATE.currentTopic = e.target.value; STATE.currentPage = 1; renderCurrent();
  });
  $('#pageSize').addEventListener('change', e => {
    STATE.pageSize = parseInt(e.target.value); STATE.currentPage = 1; renderCurrent();
  });
  $('#shuffleBtn').addEventListener('click', () => {
    STATE.shuffle = !STATE.shuffle;
    $('#shuffleBtn').textContent = STATE.shuffle ? '🔀 Đang xáo trộn' : '🔀 Xáo trộn';
    STATE.currentPage = 1; renderCurrent();
  });
  $('#prevBtn').addEventListener('click', () => {
    if (STATE.currentPage > 1) { STATE.currentPage--; renderCurrent(); window.scrollTo({top: 0, behavior: 'smooth'}); }
  });
  $('#nextBtn').addEventListener('click', () => {
    const total = Math.ceil(getFiltered().length / STATE.pageSize);
    if (STATE.currentPage < total) { STATE.currentPage++; renderCurrent(); window.scrollTo({top: 0, behavior: 'smooth'}); }
  });
  $('#prevBtnBottom').addEventListener('click', () => {
    if (STATE.currentPage > 1) { STATE.currentPage--; renderCurrent(); window.scrollTo({top: 0, behavior: 'smooth'}); }
  });
  $('#nextBtnBottom').addEventListener('click', () => {
    const total = Math.ceil(getFiltered().length / STATE.pageSize);
    if (STATE.currentPage < total) { STATE.currentPage++; renderCurrent(); window.scrollTo({top: 0, behavior: 'smooth'}); }
  });
  $('#topBtnBottom').addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
  $('#startQuizBtn').addEventListener('click', startQuiz);
  $('#quizSubmitBtn').addEventListener('click', submitQuizAnswer);
  $('#quizNextBtn').addEventListener('click', nextQuizQ);
  $('#resetBtn').addEventListener('click', () => {
    if (confirm('Reset toàn bộ tiến độ?')) {
      STATE.known.clear(); saveKnown(); renderProgress(); renderTopics(); renderCurrent();
    }
  });

  renderCurrent();
}

document.addEventListener('DOMContentLoaded', init);
