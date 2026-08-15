"""
Parse LPIC ExamTopics HTML files and generate questions.js
"""
import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
import json
import re
import os
from bs4 import BeautifulSoup

# ─── CONFIG ────────────────────────────────────────────────────────────────────
SOURCE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(os.path.dirname(SOURCE_DIR), "questions.js")

HTML_FILES = [
    ("101_500.html",          "101-500", "LPIC-1 Exam 101"),
    ("101_500_120q_FULL.html","101-500", "LPIC-1 Exam 101"),
    ("102_500.html",          "102-500", "LPIC-1 Exam 102"),
    ("102_500_120q.html",     "102-500", "LPIC-1 Exam 102"),
]

# LPIC-1 topic map (exam → topicId base)
LPIC_TOPIC_MAP = {
    "101-500": {
        "name_en": "LPIC-1 Exam 101 (101-500)",
        "name_vi": "LPIC-1 Kỳ thi 101 (101-500)",
        "desc_en": "System Architecture, Linux Installation, GNU & Unix Commands, Devices, Filesystems, Shell & Scripting",
        "desc_vi": "Kiến trúc hệ thống, Cài đặt Linux, Lệnh GNU & Unix, Thiết bị, Filesystems, Shell & Scripting",
        "icon": "🐧",
        "color": "#00C9A7",
        "topicId": 1,
    },
    "102-500": {
        "name_en": "LPIC-1 Exam 102 (102-500)",
        "name_vi": "LPIC-1 Kỳ thi 102 (102-500)",
        "desc_en": "Shells & Scripting, Interfaces & Desktops, Administrative Tasks, Essential System Services, Networking, Security",
        "desc_vi": "Shells & Scripting, Giao diện & Màn hình, Tác vụ quản trị, Dịch vụ hệ thống, Mạng, Bảo mật",
        "icon": "🖥️",
        "color": "#6C63FF",
        "topicId": 2,
    },
}

def clean_text(text):
    """Strip whitespace and normalise."""
    if text is None:
        return ""
    return re.sub(r'\s+', ' ', text.strip())

def letter_to_index(letter):
    """Convert 'A' → 0, 'B' → 1, etc."""
    return ord(letter.strip().upper()) - ord('A')

def parse_html_file(filepath, exam_code):
    """Parse one HTML file and return a list of question dicts."""
    with open(filepath, encoding="utf-8", errors="replace") as f:
        soup = BeautifulSoup(f, "html.parser")

    questions = []
    cards = soup.find_all("div", class_="exam-question-card")

    for card in cards:
        try:
            # ── Question number ──────────────────────────────────────────────
            header = card.find("div", class_="card-header")
            if not header:
                continue
            header_text = clean_text(header.get_text())
            q_num_match = re.search(r'Question\s*#(\d+)', header_text, re.IGNORECASE)
            q_num = int(q_num_match.group(1)) if q_num_match else 0

            # ── Question body ────────────────────────────────────────────────
            body = card.find("div", class_="question-body")
            if not body:
                continue

            # Question text – first <p class="card-text"> that is NOT the answer block
            question_text = ""
            for p in body.find_all("p", class_="card-text"):
                if "question-answer" in p.get("class", []):
                    continue
                question_text = clean_text(p.get_text())
                if question_text:
                    break

            if not question_text:
                continue

            # ── Detect fill-in-the-blank ─────────────────────────────────────
            is_fill_blank = question_text.upper().startswith("FILL BLANK")

            # ── Answer choices ───────────────────────────────────────────────
            choices_container = body.find("div", class_="question-choices-container")

            if is_fill_blank or not choices_container:
                # Fill-blank: no options list; answer is the text in correct-answer span
                answer_block = body.find("p", class_="question-answer")
                if not answer_block:
                    continue
                correct_span = answer_block.find("span", class_="correct-answer")
                if not correct_span:
                    continue
                fill_answer = clean_text(correct_span.get_text())
                if not fill_answer:
                    continue

                # Strip leading "FILL BLANK -" prefix from question text
                q_clean = re.sub(r'^FILL\s+BLANK\s*[-\u2013\u2014]?\s*', '', question_text, flags=re.IGNORECASE).strip()

                questions.append({
                    "exam": exam_code,
                    "q_num": q_num,
                    "question": q_clean,
                    "options": [],
                    "correct": [],
                    "multiSelect": False,
                    "fillBlank": True,
                    "answer": fill_answer,
                    "explanation": {"en": "", "vi": ""},
                })
                continue

            # ── Multiple choice ──────────────────────────────────────────────
            options = []
            correct_indices = []

            items = choices_container.find_all("li", class_="multi-choice-item")
            for idx, item in enumerate(items):
                # Remove the letter span text before grabbing option text
                letter_span = item.find("span", class_="multi-choice-letter")
                if letter_span:
                    letter_span.extract()
                # Remove badge text
                for badge in item.find_all("span", class_="badge"):
                    badge.extract()
                option_text = clean_text(item.get_text())
                options.append(option_text)

                if "correct-hidden" in item.get("class", []):
                    correct_indices.append(idx)

            # Fall back: read the "Correct Answer: X" block
            if not correct_indices:
                answer_block = body.find("p", class_="question-answer")
                if answer_block:
                    correct_span = answer_block.find("span", class_="correct-answer")
                    if correct_span:
                        letters_raw = clean_text(correct_span.get_text())
                        for ch in letters_raw.split():
                            ch = ch.strip(",. ")
                            if ch:
                                idx = letter_to_index(ch)
                                if 0 <= idx < len(options):
                                    correct_indices.append(idx)

            if not options or not correct_indices:
                continue

            multi = len(correct_indices) > 1

            questions.append({
                "exam": exam_code,
                "q_num": q_num,
                "question": question_text,
                "options": options,
                "correct": sorted(set(correct_indices)),
                "multiSelect": multi,
                "fillBlank": False,
                "answer": "",
                "explanation": {"en": "", "vi": ""},
            })

        except Exception as e:
            print(f"  Warning: Error parsing card in {os.path.basename(filepath)}: {e}")
            continue

    fill_count = sum(1 for q in questions if q.get("fillBlank"))
    mc_count = len(questions) - fill_count
    print(f"  OK {os.path.basename(filepath)}: {len(questions)} questions ({mc_count} MC + {fill_count} fill-blank)")
    return questions


def deduplicate(questions):
    """Remove duplicate questions (same normalised question text)."""
    seen = {}
    result = []
    dup_count = 0
    for q in questions:
        key = re.sub(r'\s+', ' ', q["question"].lower().strip())
        if key not in seen:
            seen[key] = True
            result.append(q)
        else:
            dup_count += 1
    print(f"  ✓ Deduplication: removed {dup_count} duplicates, kept {len(result)} unique questions")
    return result


def build_topics():
    topics_js = []
    for exam_code, info in LPIC_TOPIC_MAP.items():
        topics_js.append({
            "id": info["topicId"],
            "name": {"en": info["name_en"], "vi": info["name_vi"]},
            "icon": info["icon"],
            "description": {"en": info["desc_en"], "vi": info["desc_vi"]},
            "color": info["color"],
        })
    return topics_js


def main():
    print("\n[*] Parsing HTML source files...\n")

    all_questions = []
    for filename, exam_code, _ in HTML_FILES:
        filepath = os.path.join(SOURCE_DIR, filename)
        if not os.path.exists(filepath):
            print(f"  ⚠ File not found: {filename}, skipping.")
            continue
        qs = parse_html_file(filepath, exam_code)
        all_questions.extend(qs)

    print(f"\n[*] Total raw questions across all files: {len(all_questions)}")
    print("\n[*] Deduplicating...")
    unique_qs = deduplicate(all_questions)

    # ── Assign sequential IDs and topicIds ───────────────────────────────────
    print("\n[*] Assigning IDs...")
    final_questions = []
    for i, q in enumerate(unique_qs, start=1):
        topic_id = LPIC_TOPIC_MAP[q["exam"]]["topicId"]
        final_questions.append({
            "id": i,
            "topicId": topic_id,
            "question": q["question"],
            "options": q["options"],
            "correct": q["correct"],
            "multiSelect": q["multiSelect"],
            "fillBlank": q.get("fillBlank", False),
            "answer": q.get("answer", ""),
            "explanation": q["explanation"],
        })

    topics = build_topics()

    # ── Render JS ────────────────────────────────────────────────────────────
    print(f"\n[*] Writing {OUTPUT_FILE}...")

    topics_json = json.dumps(topics, ensure_ascii=False, indent=2)
    questions_json = json.dumps(final_questions, ensure_ascii=False, indent=2)

    js_content = f"""// LPIC-1 Question Bank – auto-generated by parse_questions.py
// Sources: 101-500 and 102-500 from ExamTopics
// Total questions: {len(final_questions)}

const TOPICS = {topics_json};

const QUESTIONS = {questions_json};
"""

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)

    fill_total = sum(1 for q in final_questions if q.get('fillBlank'))
    print(f"\n[OK] Done! {len(final_questions)} questions written to questions.js")
    print(f"     Exam 101-500: {sum(1 for q in final_questions if q['topicId']==1)} questions")
    print(f"     Exam 102-500: {sum(1 for q in final_questions if q['topicId']==2)} questions")
    print(f"     Fill-in-blank: {fill_total} | Multiple-choice: {len(final_questions) - fill_total}")


if __name__ == "__main__":
    main()
