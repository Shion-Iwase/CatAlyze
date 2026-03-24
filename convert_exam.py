#!/usr/bin/env python3
"""
変換レシピ: dbxg_exam1.md → docs/dbxg_exam_data1.js
MDフォーマット構造:
  問題N
  未回答
  [問題文]
  [選択肢テキスト]  ← マーカーなし = 不正解
  説明
  [選択肢の説明]
  正解             ← 次の選択肢が正解(単一)
  正しい選択       ← 次の選択肢が正解(複数選択)
  [選択肢テキスト]
  説明
  [選択肢の説明]
  全体的な説明
  [全体解説テキスト]
  ドメイン
  [ドメイン/タグ]
"""

import re
import json

MARKERS = {'問題', '未回答', '説明', '正解', '正しい選択', '全体的な説明', 'ドメイン'}

def is_question_header(line):
    return re.match(r'^問題\d+$', line) is not None

def escape_html(text):
    return (text
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;'))

def build_explanation_html(choices_with_exp, overall):
    """選択肢ごとの説明 + 全体解説 を HTML に変換"""
    html = "<div class='explanation-container'>"

    # 選択肢ごとの解説
    correct_items = [(t, e) for t, e, c in choices_with_exp if c]
    incorrect_items = [(t, e) for t, e, c in choices_with_exp if not c]

    if correct_items:
        html += "<h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4>"
        html += "<div class='explanation-box solution'>"
        for text, exp in correct_items:
            html += "<div class='explanation-item'>"
            html += f"<div class='explanation-badge correct'>✓ {escape_html(text)}</div>"
            if exp:
                html += f"<p class='explanation-text'>{escape_html(exp)}</p>"
            html += "</div>"
        html += "</div>"

    if incorrect_items:
        html += "<h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4>"
        html += "<div class='explanation-box incorrect'>"
        for text, exp in incorrect_items:
            html += "<div class='explanation-item'>"
            html += f"<div class='explanation-badge incorrect'>✗ {escape_html(text)}</div>"
            if exp:
                html += f"<p class='explanation-text'>{escape_html(exp)}</p>"
            html += "</div>"
        html += "</div>"

    if overall:
        html += "<h4 class='explanation-section-header problem'>📌 全体的な解説</h4>"
        html += f"<p class='explanation-box problem'>{escape_html(overall)}</p>"

    html += "</div>"
    return html


def parse_md(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        raw_lines = f.read().split('\n')

    # 空行・空白のみの行を除去
    lines = [l.strip() for l in raw_lines]
    lines = [l for l in lines if l]

    questions = []
    i = 0
    qid = 0

    while i < len(lines):
        if not is_question_header(lines[i]):
            i += 1
            continue

        qid += 1
        i += 1  # skip 問題N

        # skip 未回答
        if i < len(lines) and lines[i] == '未回答':
            i += 1

        # 問題文
        question_text = lines[i] if i < len(lines) else ''
        i += 1

        # 選択肢パース
        choices_raw = []   # (text, is_correct, explanation)
        overall_exp = ''
        domain = ''
        is_correct_next = False

        while i < len(lines) and not is_question_header(lines[i]):
            line = lines[i]

            if line == '正解' or line == '正しい選択':
                is_correct_next = True
                i += 1

            elif line == '説明':
                i += 1
                exp_text = lines[i] if i < len(lines) else ''
                if choices_raw:
                    text, correct, _ = choices_raw[-1]
                    choices_raw[-1] = (text, correct, exp_text)
                i += 1

            elif line == '全体的な説明':
                i += 1
                overall_exp = lines[i] if i < len(lines) else ''
                i += 1

            elif line == 'ドメイン':
                i += 1
                domain = lines[i] if i < len(lines) else ''
                i += 1
                break  # 問題終了

            else:
                # 選択肢テキスト
                choices_raw.append((line, is_correct_next, ''))
                is_correct_next = False
                i += 1

        # choices (JS形式)
        choices = [
            {"text": text, "is_correct": correct}
            for text, correct, _ in choices_raw
        ]

        # explanation HTML (選択肢説明 + 全体解説)
        choices_with_exp = [(text, exp, correct) for text, correct, exp in choices_raw]
        explanation_html = build_explanation_html(choices_with_exp, overall_exp)

        questions.append({
            "id": qid,
            "question": question_text,
            "choices": choices,
            "explanation": explanation_html,
            "tags": domain,
            "summary": overall_exp
        })

    return questions


def to_js(questions, var_name):
    indent = '  '
    lines = [f'window.{var_name} = [']
    for i, q in enumerate(questions):
        comma = '' if i == len(questions) - 1 else ','
        lines.append(indent + '{')
        lines.append(f'{indent}  "id": {q["id"]},')
        lines.append(f'{indent}  "question": {json.dumps(q["question"], ensure_ascii=False)},')
        lines.append(f'{indent}  "choices": [')
        for j, c in enumerate(q["choices"]):
            c_comma = '' if j == len(q["choices"]) - 1 else ','
            lines.append(f'{indent}    {{')
            lines.append(f'{indent}      "text": {json.dumps(c["text"], ensure_ascii=False)},')
            lines.append(f'{indent}      "is_correct": {"true" if c["is_correct"] else "false"}')
            lines.append(f'{indent}    }}{c_comma}')
        lines.append(f'{indent}  ],')
        lines.append(f'{indent}  "explanation": {json.dumps(q["explanation"], ensure_ascii=False)},')
        lines.append(f'{indent}  "tags": {json.dumps(q["tags"], ensure_ascii=False)},')
        lines.append(f'{indent}  "summary": {json.dumps(q["summary"], ensure_ascii=False)}')
        lines.append(f'{indent}}}{comma}')
    lines.append('];')
    return '\n'.join(lines)


if __name__ == '__main__':
    import sys
    input_md = sys.argv[1] if len(sys.argv) > 1 else 'dbxg_exam1.md'
    output_js = sys.argv[2] if len(sys.argv) > 2 else 'docs/dbxg_exam_data1.js'
    var_name  = sys.argv[3] if len(sys.argv) > 3 else 'questionsDataDbxg1'

    questions = parse_md(input_md)
    js_content = to_js(questions, var_name)

    with open(output_js, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"✓ {len(questions)} 問を変換 → {output_js} (変数: window.{var_name})")
