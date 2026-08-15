// ========== LPIC-1 Study Hub - App Logic ==========

const STATE = {
  questions: QUESTIONS, // loaded from questions.js
  topics: TOPICS,       // loaded from questions.js
  currentTopic: 'all',
  currentPage: 1,
  pageSize: 10,
  shuffle: false,
  // Study pane: câu đã đánh dấu "Đã biết" thủ công
  known: new Set(JSON.parse(localStorage.getItem('lpic1_known_v1') || '[]')),
  // Quiz pane: câu đã trả lời đúng trong quiz (độc lập với phần Học)
  quizKnown: new Set(JSON.parse(localStorage.getItem('lpic1_quiz_known_v1') || '[]')),
  mistakes: JSON.parse(localStorage.getItem('lpic1_mistakes') || '{}'),
  quiz: null,
  lang: 'both', // 'en', 'vi', 'both'
  aiConfig: JSON.parse(localStorage.getItem('lpic1_ai_config') || 'null') || { baseUrl: "", model: "", apiKey: "", modelMML: "", chatHeight: 600 },
  chatHistories: {}
};

const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

// ===== Helpers =====
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

function shuffleArray(a) {
  const arr = [...a];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
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
  localStorage.setItem('lpic1_known_v1', JSON.stringify([...STATE.known]));
}
function saveQuizKnown() {
  localStorage.setItem('lpic1_quiz_known_v1', JSON.stringify([...STATE.quizKnown]));
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
// ===== RENDER QUESTION CARD =====
function renderQuestionCard(q, opts = {}) {
  const knownClass = isKnown(q.id) ? 'btn-ok' : 'btn-ghost';
  const knownText = isKnown(q.id) ? '✓ Đã biết' : 'Đánh dấu';
  const topicObj = getTopicById(q.topicId);
  const topicName = STATE.lang === 'en' ? topicObj.name.en : topicObj.name.vi;

  const imgs = q.image
    ? `<img class="q-img" src="${q.image}" alt="Exhibit Q${q.id}" loading="lazy">`
    : '';

  let optsHtml = '';
  let correctLetters = '';
  if (q.fillBlank) {
    optsHtml = `
      <div class="fill-blank-container">
        <input type="text" class="fill-blank-input" placeholder="Nhập câu trả lời của bạn..." id="fb-${q.id}" onkeypress="if(event.key==='Enter') toggleAnswer(${q.id})">
      </div>
    `;
    correctLetters = escapeHtml(q.answer);
  } else {
    optsHtml = q.options.map((optText, idx) => {
      const letter = letters[idx];
      return `
        <div
          class="opt"
          data-idx="${idx}"
          onclick="selectStudyOpt(this, ${q.id}, ${idx}, ${q.multiSelect})"
        >
          <span class="opt-letter">${letter}</span>
          <span>${optText}</span>
        </div>
      `;
    }).join('');

    correctLetters = q.correct
      .map(idx => letters[idx])
      .join(', ');
  }

  const multiStr = q.fillBlank
    ? `<span style="color:var(--info);font-size:0.85em;margin-left:8px;">(Điền từ/lệnh còn thiếu)</span>`
    : (q.multiSelect
      ? `<span style="color:var(--warn);font-size:0.85em;margin-left:8px;">(Chọn nhiều đáp án)</span>`
      : '');

  return `
    <div class="q-card" id="q-${q.id}">

      <div class="q-head">
        <div>
          <span class="q-num">Câu ${q.id}</span>
          <span class="q-topic">${escapeHtml(topicName)}</span>
        </div>

        <div class="q-actions">
          <button
            class="btn ${knownClass}"
            onclick="toggleKnown(${q.id});renderCurrent();"
          >
            ${knownText}
          </button>
        </div>
      </div>

      <div class="q-text">
        ${escapeHtml(q.question)}
        ${multiStr}
      </div>

      ${imgs}

      <div class="opts">
        ${optsHtml}
      </div>

      <!-- NÚT ĐÁP ÁN CHUYỂN XUỐNG ĐÂY -->
      <div class="answer-actions">
        <button
          class="btn btn-warn"
          onclick="toggleAnswer(${q.id})"
        >
          👁️ Đáp án
        </button>
      </div>

      <div class="answer-section" id="ans-${q.id}">
        <div class="correct-ans">
          ✅ Đáp án đúng: ${correctLetters}
        </div>

        <div class="explanation">
          ${getLocText(q.explanation)}
        </div>

        <div class="ai-wrapper">
          <button
            class="ai-chat-btn"
            onclick="toggleAIChat(${q.id})"
          >
            🤖 Hỏi AI
          </button>
        </div>
      </div>

    </div>
  `;
}

window.selectStudyOpt = function (el, qid, idx, isMulti) {
  if ($('#ans-' + qid).classList.contains('show')) return;
  if (!isMulti) {
    document.querySelectorAll(`#q-${qid} .opt`).forEach(o => o.classList.remove('selected'));
  }
  el.classList.toggle('selected');
}

window.toggleAnswer = function (qid) {
  const el = $('#ans-' + qid);
  if (!el) return;

  const isShowing = el.classList.contains('show');
  const q = STATE.questions.find(x => x.id === qid);

  if (q.fillBlank) {
    const inputEl = $('#fb-' + qid);
    if (!isShowing) {
      const userAns = inputEl.value.trim();
      const isCorrect = userAns.toLowerCase() === q.answer.toLowerCase();
      if (isCorrect) {
        inputEl.classList.add('correct');
        inputEl.classList.remove('wrong');
        if (!isKnown(qid)) {
          toggleKnown(qid);
          const btn = document.querySelector(`#q-${qid} .q-actions button:first-child`);
          if (btn) {
            btn.classList.remove('btn-ghost');
            btn.classList.add('btn-ok');
            btn.textContent = '✓ Đã biết';
          }
        }
      } else {
        inputEl.classList.add('wrong');
        inputEl.classList.remove('correct');
      }
    } else {
      inputEl.classList.remove('correct', 'wrong');
    }
    el.classList.toggle('show');
    return;
  }

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
window.renderCurrent = function () {
  const all = getFiltered();
  const total = all.length;
  const totalPages = Math.max(1, Math.ceil(total / STATE.pageSize));
  if (STATE.currentPage > totalPages) STATE.currentPage = totalPages;
  const start = (STATE.currentPage - 1) * STATE.pageSize;
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
window.renderTopics = function () {
  const grid = $('#topicsGrid');
  grid.innerHTML = STATE.topics.map(t => {
    const total = STATE.questions.filter(q => q.topicId === t.id).length;
    const known = STATE.questions.filter(q => q.topicId === t.id && STATE.known.has(q.id)).length;
    const pct = total ? Math.round(known * 100 / total) : 0;
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

window.filterTopic = function (id) {
  STATE.currentTopic = id;
  STATE.currentPage = 1;
  $('#topicFilter').value = id;
  switchPane('study');
  renderCurrent();
}

// ===== PROGRESS PANE =====
window.renderProgress = function () {
  const total = STATE.questions.length;

  // ---- STUDY section ----
  const known = STATE.known.size;
  const pct = total ? Math.round(known * 100 / total) : 0;
  $('#progressStats').innerHTML = `
    <div class="stat"><div class="stat-val">${total}</div><div class="stat-lbl">Tổng câu hỏi</div></div>
    <div class="stat"><div class="stat-val">${known}</div><div class="stat-lbl">Đã đánh dấu biết</div></div>
    <div class="stat"><div class="stat-val">${pct}%</div><div class="stat-lbl">Hoàn thành</div></div>
  `;
  $('#topicProgress').innerHTML = '<h4 style="margin:14px 0 10px">Theo chủ đề:</h4>' +
    STATE.topics.map(t => {
      const qTotal = STATE.questions.filter(q => q.topicId === t.id).length;
      const k = STATE.questions.filter(q => q.topicId === t.id && STATE.known.has(q.id)).length;
      const p = qTotal ? Math.round(k * 100 / qTotal) : 0;
      const tName = STATE.lang === 'en' ? t.name.en : t.name.vi;
      return `<div style="margin-bottom:10px">
        <div style="display:flex;justify-content:space-between;font-size:.9em;margin-bottom:4px">
          <span><b>${escapeHtml(tName)}</b></span><span>${k}/${qTotal} (${p}%)</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${p}%"></div></div>
      </div>`;
    }).join('');

  // ---- QUIZ section ----
  const qKnown = STATE.quizKnown.size;
  const qPct = total ? Math.round(qKnown * 100 / total) : 0;
  $('#quizProgressStats').innerHTML = `
    <div class="stat"><div class="stat-val">${total}</div><div class="stat-lbl">Tổng câu hỏi</div></div>
    <div class="stat"><div class="stat-val">${qKnown}</div><div class="stat-lbl">Đã trả lời đúng</div></div>
    <div class="stat"><div class="stat-val">${qPct}%</div><div class="stat-lbl">Hoàn thành</div></div>
  `;
  $('#quizTopicProgress').innerHTML = '<h4 style="margin:14px 0 10px">Theo chủ đề:</h4>' +
    STATE.topics.map(t => {
      const qTotal = STATE.questions.filter(q => q.topicId === t.id).length;
      const k = STATE.questions.filter(q => q.topicId === t.id && STATE.quizKnown.has(q.id)).length;
      const p = qTotal ? Math.round(k * 100 / qTotal) : 0;
      const tName = STATE.lang === 'en' ? t.name.en : t.name.vi;
      // Color the bar differently for quiz (amber/orange tone)
      return `<div style="margin-bottom:10px">
        <div style="display:flex;justify-content:space-between;font-size:.9em;margin-bottom:4px">
          <span><b>${escapeHtml(tName)}</b></span><span>${k}/${qTotal} (${p}%)</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${p}%;background:var(--warn)"></div></div>
      </div>`;
    }).join('');
}

// ===== QUIZ PANE =====
window.startQuiz = function () {
  const topicId = $('#quizTopic').value;
  const count = parseInt($('#quizCount').value);
  const skipKnown = $('#quizSkipKnown') && $('#quizSkipKnown').checked;

  let pool = STATE.questions;

  // Filter by topic (excluding AI smart quiz)
  if (topicId !== 'all' && topicId !== 'smart') {
    pool = pool.filter(q => q.topicId === parseInt(topicId));
  }

  // Filter out already-correct questions if option is enabled (dùng quizKnown, không liên quan phần Học)
  if (skipKnown) {
    const beforeCount = pool.length;
    pool = pool.filter(q => !STATE.quizKnown.has(q.id));
    if (pool.length === 0) {
      const topicLabel = topicId === 'all' ? 'tất cả chủ đề' : 'chủ đề này';
      alert(`🎉 Tuyệt vời! Bạn đã trả lời đúng tất cả ${beforeCount} câu trong ${topicLabel}!\n\nBỏ chọn "Bỏ qua câu đã đúng" nếu bạn muốn ôn lại toàn bộ.`);
      return;
    }
  }

  pool = shuffleArray(pool).slice(0, count);
  if (pool.length === 0) {
    alert("Không có câu hỏi nào!"); return;
  }
  STATE.quiz = { pool, idx: 0, score: 0, answers: [], skipKnown, _topicId: topicId };
  $('#quizSetup').style.display = 'none';
  $('#quizArea').style.display = 'block';
  $('#quizResult').style.display = 'none';
  renderQuizQ();
}

window.renderQuizQ = function () {
  const { pool, idx } = STATE.quiz;
  const q = pool[idx];
  const total = pool.length;
  const pct = Math.round(idx * 100 / total);
  $('#quizProg').style.width = pct + '%';

  const topicObj = getTopicById(q.topicId);
  const topicName = STATE.lang === 'en' ? topicObj.name.en : topicObj.name.vi;

  const imgs = q.image ? `<img class="q-img" src="${q.image}">` : '';

  let multiStr = '';
  let contentHtml = '';
  if (q.fillBlank) {
    multiStr = `<span style="color:var(--info);font-size:0.85em;margin-left:8px;">(Điền từ/lệnh còn thiếu)</span>`;
    contentHtml = `
      <div class="fill-blank-container" style="margin-top: 14px;">
        <input type="text" class="fill-blank-input" placeholder="Nhập câu trả lời của bạn..." id="quiz-fb" onkeypress="if(event.key==='Enter') submitQuizAnswer()">
      </div>
    `;
  } else {
    multiStr = q.multiSelect ? `<span style="color:var(--warn);font-size:0.85em;margin-left:8px;">(Chọn ${q.correct.length} đáp án)</span>` : '';
    contentHtml = `
      <div class="opts">${q.options.map((o, i) =>
      `<div class="opt" data-idx="${i}" onclick="selectQuizOpt(this, ${i}, ${q.multiSelect})">
          <span class="opt-letter">${letters[i]}</span>
          <span>${o}</span>
        </div>`).join('')}
      </div>
    `;
  }

  $('#quizQuestion').innerHTML = `
    <div class="q-head">
      <div>
        <span class="q-num">Câu ${idx + 1}/${total}</span>
        <span class="q-topic">${escapeHtml(topicName)}</span>
      </div>
    </div>
    <div class="q-text">${escapeHtml(q.question)} ${multiStr}</div>
    ${imgs}
    ${contentHtml}
  `;
  $('#quizSubmitBtn').style.display = 'inline-block';
  $('#quizNextBtn').style.display = 'none';

  STATE.quiz.currentSelection = new Set();
}

window.selectQuizOpt = function (el, idx, isMulti) {
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

window.submitQuizAnswer = function () {
  const q = STATE.quiz.pool[STATE.quiz.idx];

  if (q.fillBlank) {
    const inputEl = $('#quiz-fb');
    const userAns = inputEl.value.trim();
    if (!userAns) {
      alert('Vui lòng nhập đáp án!'); return;
    }
    const isCorrect = userAns.toLowerCase() === q.answer.toLowerCase();

    if (isCorrect) STATE.quiz.score++;
    STATE.quiz.answers.push({
      qid: q.id,
      picked: userAns,
      correct: q.answer,
      ok: isCorrect
    });

    if (isCorrect) {
      inputEl.classList.add('correct');
      STATE.quizKnown.add(q.id);
      saveQuizKnown();
    } else {
      inputEl.classList.add('wrong');
      const feedback = document.createElement('div');
      feedback.style.color = 'var(--ok)';
      feedback.style.fontWeight = 'bold';
      feedback.style.marginTop = '10px';
      feedback.innerHTML = `✅ Đáp án đúng: ${escapeHtml(q.answer)}`;
      inputEl.parentNode.appendChild(feedback);
    }

    $('#quizSubmitBtn').style.display = 'none';
    $('#quizNextBtn').style.display = 'inline-block';
    return;
  }

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
    // Chỉ lưu vào quizKnown (độc lập với phần Học)
    STATE.quizKnown.add(q.id);
    saveQuizKnown();
  }

  $('#quizSubmitBtn').style.display = 'none';
  $('#quizNextBtn').style.display = 'inline-block';
}

window.nextQuizQ = function () {
  STATE.quiz.idx++;
  if (STATE.quiz.idx >= STATE.quiz.pool.length) showQuizResult();
  else renderQuizQ();
}

window.showQuizResult = function () {
  $('#quizArea').style.display = 'none';
  const total = STATE.quiz.pool.length;
  const pct = Math.round(STATE.quiz.score * 100 / total);
  // Tính số câu bỏ qua dựa trên quizKnown
  const skippedCount = STATE.quiz.skipKnown
    ? Array.from(STATE.quizKnown).filter(id => {
        const q = STATE.questions.find(x => x.id === id);
        return q && (STATE.quiz._topicId === 'all' || q.topicId === parseInt(STATE.quiz._topicId));
      }).length
    : 0;
  $('#quizResult').style.display = 'block';

  const wrongHtml = STATE.quiz.answers.filter(a => !a.ok).map(a => {
    const q = STATE.questions.find(x => x.id === a.qid);
    const pickedStr = q.fillBlank ? escapeHtml(a.picked) : a.picked.map(i => letters[i]).join(', ');
    const correctStr = q.fillBlank ? escapeHtml(a.correct) : a.correct.map(i => letters[i]).join(', ');
    return `<div style="background:#fdedec;padding:10px;border-radius:6px;margin-bottom:8px">
      <b>Q${a.qid}:</b> ${escapeHtml(q.question).slice(0, 80)}...<br>
      <span style="color:var(--bad)">Bạn chọn: ${pickedStr}</span> |
      <span style="color:var(--ok)">Đúng: ${correctStr}</span>
    </div>`;
  }).join('');

  const hasWrong = STATE.quiz.answers.some(a => !a.ok);
  const skippedBadge = skippedCount > 0
    ? `<p style="font-size:0.85em;color:var(--text-secondary);margin-top:4px">⚡ Đã bỏ qua <b>${skippedCount}</b> câu đã trả lời đúng trước đó</p>`
    : '';

  const retryWrongBtn = hasWrong
    ? `<button class="btn btn-warn" onclick="retryWrongOnly()" style="margin-top:14px">🔁 Ôn lại câu sai (${STATE.quiz.answers.filter(a=>!a.ok).length} câu)</button>`
    : '';

  $('#quizResult').innerHTML = `
    <div class="quiz-result">
      <h3>🎉 Kết quả</h3>
      <div class="score-circle" data-pct="${pct}%" style="--pct:${pct}%"></div>
      <p>Bạn đúng <b>${STATE.quiz.score}/${total}</b> câu (${pct}%)</p>
      ${skippedBadge}
      <div style="margin-top:18px;text-align:left">
        ${wrongHtml || '<p style="color:var(--ok)">🎊 Hoàn hảo! Bạn trả lời đúng hết!</p>'}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:14px">
        <button class="btn btn-pri" onclick="restartQuiz()">↻ Về trang chọn</button>
        ${retryWrongBtn}
      </div>
    </div>`;
}

window.retryWrongOnly = function () {
  const wrongIds = new Set(STATE.quiz.answers.filter(a => !a.ok).map(a => a.qid));
  const pool = shuffleArray(STATE.questions.filter(q => wrongIds.has(q.id)));
  if (pool.length === 0) { restartQuiz(); return; }
  STATE.quiz = { pool, idx: 0, score: 0, answers: [], skipKnown: false };
  $('#quizResult').style.display = 'none';
  $('#quizArea').style.display = 'block';
  renderQuizQ();
}

window.restartQuiz = function () {
  $('#quizResult').style.display = 'none';
  $('#quizSetup').style.display = 'block';
  STATE.quiz = null;
}

// ===== TAB SWITCHING =====
window.switchPane = function (name) {
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
    $('#quizTopic').innerHTML = html + '<option value="smart">🧠 AI Smart Quiz (Ôn tập điểm yếu)</option>';
  };
  buildTopicSelects(); // init first time

  // Update select dropdowns when language changes
  const originalSetLang = setLanguage;
  window.setLanguage = function (lang) {
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
    if (STATE.currentPage > 1) { STATE.currentPage--; renderCurrent(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
  $('#nextBtn').addEventListener('click', () => {
    const total = Math.ceil(getFiltered().length / STATE.pageSize);
    if (STATE.currentPage < total) { STATE.currentPage++; renderCurrent(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
  $('#prevBtnBottom').addEventListener('click', () => {
    if (STATE.currentPage > 1) { STATE.currentPage--; renderCurrent(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
  $('#nextBtnBottom').addEventListener('click', () => {
    const total = Math.ceil(getFiltered().length / STATE.pageSize);
    if (STATE.currentPage < total) { STATE.currentPage++; renderCurrent(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
  $('#topBtnBottom').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  $('#startQuizBtn').addEventListener('click', startQuiz);
  $('#quizSubmitBtn').addEventListener('click', submitQuizAnswer);
  $('#quizNextBtn').addEventListener('click', nextQuizQ);
  $('#resetBtn').addEventListener('click', () => {
    if (confirm('Reset toàn bộ tiến độ phần Học?\n(Không ảnh hưởng tiến độ Quiz)')) {
      STATE.known.clear(); saveKnown(); renderProgress(); renderTopics(); renderCurrent();
    }
  });
  $('#resetQuizBtn').addEventListener('click', () => {
    if (confirm('Reset toàn bộ tiến độ phần Quiz?\n(Không ảnh hưởng tiến độ Học)')) {
      STATE.quizKnown.clear(); saveQuizKnown(); renderProgress();
    }
  });

  renderCurrent();
}

document.addEventListener('DOMContentLoaded', init);

// ===== AI TUTOR LOGIC =====

window.openSettings = function () {
  if (!STATE.aiConfig) STATE.aiConfig = {};

  // Clean up legacy multi-provider config if it exists
  if (STATE.aiConfig.providers) {
    STATE.aiConfig = {
      baseUrl: "",
      model: "",
      apiKey: "",
      modelMML: "",
      chatHeight: 600
    };
    localStorage.setItem('lpic1_ai_config', JSON.stringify(STATE.aiConfig));
  }

  // Ensure new fields exist for old configs
  if (typeof STATE.aiConfig.modelMML === 'undefined') {
    STATE.aiConfig.modelMML = "";
  }
  if (typeof STATE.aiConfig.chatHeight === 'undefined') {
    STATE.aiConfig.chatHeight = 600;
  }

  $("#aiBaseUrl").value = STATE.aiConfig.baseUrl || "";
  $("#aiModel").value = STATE.aiConfig.model || "";
  $("#aiApiKey").value = STATE.aiConfig.apiKey || "";
  $("#aiModelMML").value = STATE.aiConfig.modelMML || "";
  $("#aiChatHeight").value = STATE.aiConfig.chatHeight || 600;

  const modal = $("#settingsModal");
  if (modal) modal.classList.add("active");
  else console.error("Modal not found");
}

window.closeSettings = function () {
  const modal = $("#settingsModal");
  if (modal) modal.classList.remove("active");
}

window.saveSettings = function () {
  if (!STATE.aiConfig) STATE.aiConfig = {};
  STATE.aiConfig.baseUrl = $("#aiBaseUrl").value.trim();
  STATE.aiConfig.model = $("#aiModel").value.trim();
  STATE.aiConfig.apiKey = $("#aiApiKey").value.trim();
  STATE.aiConfig.modelMML = $("#aiModelMML").value.trim();
  STATE.aiConfig.chatHeight = parseInt($("#aiChatHeight").value) || 600;
  localStorage.setItem("lpic1_ai_config", JSON.stringify(STATE.aiConfig));
  closeSettings();
  alert("Đã lưu cài đặt AI!");
}

window.toggleAIChat = function (qid) {
  if (!STATE.aiConfig || !STATE.aiConfig.baseUrl || !STATE.aiConfig.apiKey) {
    alert("Vui lòng vào ⚙️ Cài đặt (Icon bánh răng ở góc trên trái) để điền Base URL và API Key trước khi dùng tính năng này.");
    openSettings();
    return;
  }

  // Check if popup already exists
  let popup = $("#ai-popup-" + qid);
  let overlay = $("#ai-popup-overlay-" + qid);

  if (!popup) {
    // Create popup structure
    overlay = document.createElement("div");
    overlay.id = "ai-popup-overlay-" + qid;
    overlay.className = "ai-popup-overlay";

    popup = document.createElement("div");
    popup.id = "ai-popup-" + qid;
    popup.className = "ai-popup";

    // Apply custom height from settings
    const customHeight = STATE.aiConfig.chatHeight || 600;
    popup.style.height = customHeight + "px";

    popup.innerHTML = `
      <div class="ai-popup-header">
        <div class="ai-popup-title">🤖 Hỏi AI về câu ${qid}</div>
        <button class="ai-popup-close" onclick="toggleAIChat(${qid})">✕</button>
      </div>
      <div class="ai-popup-content">
        <div class="ai-history" id="ai-hist-${qid}">
          <div class="ai-msg bot">Xin chào! Tôi là trợ lý AI chuyên về Linux và LPIC-1. Bạn cần tôi giải thích thêm phần nào về câu hỏi này?</div>
        </div>
        <div class="ai-input-row">
          <input type="text" id="ai-inp-${qid}" placeholder="Hỏi AI về câu này..." onkeypress="if(event.key===\'Enter\') sendAIMsg(${qid})">
          <button onclick="sendAIMsg(${qid})">➤</button>
        </div>
      </div>
    `;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // Close on overlay click
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) toggleAIChat(qid);
    });

    // Auto-send "Hãy giải thích đáp án"
    setTimeout(() => {
      const inp = $("#ai-inp-" + qid);
      if (inp) {
        inp.value = "Hãy giải thích đáp án";
        sendAIMsg(qid);
      }
    }, 300);
  }

  overlay.classList.toggle("active");
}

window.sendAIMsg = async function (qid) {
  const inp = $("#ai-inp-" + qid);
  const text = inp.value.trim();
  if (!text) return;
  inp.value = "";
  const hist = $("#ai-hist-" + qid);

  const userMsg = document.createElement("div");
  userMsg.className = "ai-msg user";
  userMsg.textContent = text;
  hist.appendChild(userMsg);
  hist.scrollTop = hist.scrollHeight;

  const loadMsg = document.createElement("div");
  loadMsg.className = "ai-msg loading";
  loadMsg.textContent = "Đang suy nghĩ...";
  hist.appendChild(loadMsg);
  hist.scrollTop = hist.scrollHeight;

  const q = STATE.questions.find(x => x.id === qid);
  const sysPrompt = `You are a helpful LPIC-1 Linux instructor. The user is asking about Question ${q.id}.
Question: ${q.question}
Options: ${q.options.join(" | ")}
Correct answer: indices ${q.correct.join(", ")}
Explanation: ${q.explanation.en} / ${q.explanation.vi}
Please explain in Vietnamese clearly and concisely, focusing on Linux system administration concepts for the LPIC-1 exam. 
IMPORTANT: Format your response in PLAIN TEXT without markdown formatting. DO NOT use special characters like *, #, $, or any markdown syntax. Just use plain text with line breaks and simple formatting. Do not give direct answers if the user is asking for a hint.`;

  if (!STATE.chatHistories[qid]) {
    // For Gemini/Google AI Studio: wrap system prompt as a user message
    // since Gemini's OpenAI-compat endpoint may not support role:"system"
    STATE.chatHistories[qid] = [
      { role: "user", content: sysPrompt },
      { role: "assistant", content: "Hiểu rồi, tôi sẽ giải thích câu hỏi này bằng tiếng Việt về LPIC-1." }
    ];
  }
  STATE.chatHistories[qid].push({ role: "user", content: text });

  try {
    let url = STATE.aiConfig.baseUrl.trim();
    if (!url.endsWith("/chat/completions")) {
      url = url.replace(/\/+$/, "") + "/chat/completions";
    }

    // Use MML model if available and question has image
    const useMML = STATE.aiConfig.modelMML && q.image;
    const selectedModel = useMML ? STATE.aiConfig.modelMML : (STATE.aiConfig.model || "gpt-3.5-turbo");

    // Prepare messages with image content for MML model
    let messages = [...STATE.chatHistories[qid]];
    if (useMML) {
      // Convert last user message to contain image
      const lastMsg = messages[messages.length - 1];
      if (lastMsg && lastMsg.role === "user") {
        lastMsg.content = [
          { type: "text", text: lastMsg.content },
          { type: "image_url", image_url: { url: q.image } }
        ];
      }
    }

    // Detect if endpoint likely supports streaming (non-Google endpoints)
    // Google AI Studio OpenAI-compat does not support SSE streaming reliably
    const isGoogleEndpoint = url.includes("googleapis.com") || url.includes("generativelanguage");
    const useStream = !isGoogleEndpoint;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + STATE.aiConfig.apiKey },
      body: JSON.stringify({
        model: selectedModel,
        messages: messages,
        stream: useStream
      })
    });

    console.log("[AI] Request URL:", url);
    console.log("[AI] Model:", selectedModel);
    console.log("[AI] Stream:", useStream);

    if (!res.ok) {
      let errBody = "";
      try { errBody = await res.text(); } catch(_) {}
      let errDetail = "";
      try {
        const errJson = JSON.parse(errBody);
        errDetail = errJson?.error?.message || errJson?.message || errBody;
      } catch(_) { errDetail = errBody; }
      throw new Error(`Lỗi API ${res.status}: ${errDetail || res.statusText}`);
    }

    loadMsg.remove();
    const botMsg = document.createElement("div");
    botMsg.className = "ai-msg bot";
    hist.appendChild(botMsg);

    const contentType = res.headers.get("content-type") || "";
    let reply = "";

    if (contentType.includes("text/event-stream")) {
      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const dataStr = line.slice(6).trim();
            if (dataStr === "[DONE]") continue;
            try {
              const data = JSON.parse(dataStr);
              if (data.choices && data.choices.length > 0 && data.choices[0].delta && data.choices[0].delta.content) {
                reply += data.choices[0].delta.content;
                botMsg.innerHTML = escapeHtml(reply).replace(/\n/g, "<br>");
                hist.scrollTop = hist.scrollHeight;
              }
            } catch (e) { }
          }
        }
      }
    } else {
      const data = await res.json();
      if (data.choices && data.choices.length > 0) {
        reply = data.choices[0].message.content;
        botMsg.innerHTML = escapeHtml(reply).replace(/\n/g, "<br>");
        hist.scrollTop = hist.scrollHeight;
      } else {
        throw new Error("Phản hồi từ API không đúng định dạng chuẩn OpenAI.");
      }
    }

    STATE.chatHistories[qid].push({ role: "assistant", content: reply });
  } catch (err) {
    loadMsg.remove();
    const botMsg = document.createElement("div");
    botMsg.className = "ai-msg bot";
    botMsg.style.color = "var(--bad)";

    let errText = "Lỗi khi gọi AI: " + err.message;
    if (err.message === "Failed to fetch") {
      errText = "Lỗi mạng hoặc CORS (Trình duyệt chặn kết nối). Hãy kiểm tra kết nối mạng hoặc thử cài extension cho phép CORS. (Chi tiết: Failed to fetch)";
    }
    botMsg.textContent = errText;

    hist.appendChild(botMsg);
    hist.scrollTop = hist.scrollHeight;
  }
}
