"""
Extract all questions from questions.js into a structured JSON for review.
"""
import sys, io, json, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

import os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

with open(os.path.join(ROOT, 'questions.js'), encoding='utf-8') as f:
    content = f.read()

# Strip JS wrapper and parse the QUESTIONS array
m = re.search(r'const QUESTIONS = (\[.*?\]);', content, re.DOTALL)
questions = json.loads(m.group(1))

print(f"Total questions: {len(questions)}")
for q in questions:
    print(f"\n--- Q{q['id']} (topic {q['topicId']}) {'[FILL]' if q.get('fillBlank') else '[MC]'}")
    print(f"  Q: {q['question'][:100]}")
    if q.get('fillBlank'):
        print(f"  A: {q['answer']}")
    else:
        correct_letters = [chr(65+i) for i in q['correct']]
        opts = [f"  {chr(65+i)}) {o[:60]}" for i, o in enumerate(q['options'])]
        print('\n'.join(opts))
        print(f"  Correct: {', '.join(correct_letters)}")
    print(f"  Explanation: '{q['explanation']['vi'][:40] if q['explanation']['vi'] else '(empty)'}'")
