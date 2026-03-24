import json
import yaml
from strands import Agent


# YAMLファイルからデータを読み込む関数（前処理用）
def load_yaml_questions(file_path: str) -> list:
    """
    Load questions from a YAML file.

    Args:
        file_path (str): Path to the YAML file

    Returns:
        list: List of question dictionaries with id, contents, and explain
    """
    with open(file_path, "r", encoding="utf-8") as f:
        data = yaml.safe_load(f)
    return data


# 特定のIDの問題を取得する関数（前処理用）
def get_question_by_id(questions: list, question_id: int) -> dict:
    """
    Get a specific question by its ID from the questions list.

    Args:
        questions (list): List of question dictionaries
        question_id (int): The ID of the question to retrieve

    Returns:
        dict: The question data with id, contents, and explain
    """
    for question in questions:
        if question.get("id") == question_id:
            return question

    return {"error": f"Question with ID {question_id} not found"}


# 処理済みのIDを取得する関数
def get_processed_ids(output_path: str) -> set:
    """
    既存のJSONファイルから処理済みのIDを取得する

    Args:
        output_path (str): 出力JSONファイルのパス

    Returns:
        set: 処理済みのIDのセット
    """
    import os
    if os.path.exists(output_path):
        with open(output_path, "r", encoding="utf-8") as f:
            existing_data = json.load(f)
        return {item["id"] for item in existing_data if "id" in item}
    return set()


# 結果をJSONファイルに追加保存する関数（後処理用）
def append_to_json(data: dict, output_path: str) -> str:
    """
    Append translated question data to a JSON file.

    Args:
        data (dict): The translated question data to append
        output_path (str): Path to the output JSON file

    Returns:
        str: Success message with the file path
    """
    import os

    # 既存のデータを読み込む（ファイルが存在する場合）
    if os.path.exists(output_path):
        with open(output_path, "r", encoding="utf-8") as f:
            existing_data = json.load(f)
    else:
        existing_data = []

    # 新しいデータを追加
    existing_data.append(data)

    # ファイルに保存
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(existing_data, f, ensure_ascii=False, indent=2)

    return f"Successfully appended to {output_path} (total: {len(existing_data)} questions)"

# model_version = "us.anthropic.claude-3-5-haiku-20241022-v1:0"
model_version = "us.anthropic.claude-haiku-4-5-20251001-v1:0"


# エージェントを作成（ツールなし、翻訳のみ）
agent = Agent(
    model=model_version
)


def translate_question(question_data: dict) -> dict:
    """1つの問題を取得し、日本語に翻訳してJSONとして返す"""
    message = f"""
あなたはDatabricks認定試験の問題を日本語に翻訳する専門家です。
以下のDatabricks試験問題データを、技術的な正確性を保ちながら自然な日本語に翻訳してください。
JSON形式のみを出力し、それ以外の説明文は一切出力しないでください。

## 前提条件
- これはDatabricks Data Engineer Associate/Professional認定試験の問題です
- Databricks、Delta Lake、Apache Spark、Unity Catalog等の専門用語は適切に翻訳してください
- 技術用語（API名、コマンド名、設定名など）は英語のまま残してください

## 入力データ
{json.dumps(question_data, ensure_ascii=False, indent=2)}

## タスク

上記の問題データを以下のJSON形式に整形し、英語から日本語に翻訳してください:
    - 選択肢に「[←正解]」が付いているものが正解（is_correct: true）です
    - 解説文（explanation）はHTML形式で記述してください（<p>, <ul>, <li>, <strong>, <code>タグを使用）
    - summary（要約）には、この問題で必要となる知識・要点をわかりやすく1~2文でまとめてください
    - tags フィールドには、以下のキーワードから１つ選んでください:
        - データ処理コードの開発
        - コストとパフォーマンスの最適化
        - モニタリングとアラート
        - セキュリティとコンプライアンス
        - デプロイとデバッグ

## 出力JSON形式と例

以下は出力の例です。この形式に従って翻訳してください:

```json
{{
    "id": 1,
    "question": "データエンジニアリングチームが大規模なデータセットに対して複雑な分析クエリを実行していますが、クエリの実行によって大幅なディスクスピルが発生し、パフォーマンスが著しく低下していることに気付きました。\\nこの問題を最小化するための効果的な解決策ではないものはどれですか？",
    "choices": [
        {{"text": "CPUコア数を増やす", "is_correct": true}},
        {{"text": "シャッフルパーティション数を増やす", "is_correct": false}},
        {{"text": "Sparkパーティションのサイズを縮小する", "is_correct": false}},
        {{"text": "メモリサイズを増やす", "is_correct": false}}
    ],
    "explanation": "<p>説明されている問題は、Spark分析クエリ中のディスクスピルです。ディスクスピルは、処理中のデータがタスクに割り当てられたメモリに収まらない場合に発生し、Sparkが中間データをディスクに書き込むため、インメモリ処理よりも大幅に遅くなります。</p><p>以下のオプションはディスクスピルを効果的に削減します：</p><ul><li><strong>Sparkパーティションのサイズを縮小する</strong> - パーティションを小さくすると、各タスクが処理するデータ量が減り、メモリに収まりやすくなります</li><li><strong>メモリサイズを増やす</strong> - メモリが増えると、Sparkはより多くのデータをメモリ内に保持でき、スピルが減少します</li><li><strong>シャッフルパーティション数を増やす</strong> - シャッフルパーティションを増やすと、データがより多くのタスクに分散され、タスクあたりのメモリ負荷が軽減されます</li></ul><p>しかし、<strong>CPUコア数を増やしても</strong>、より多くのタスクを並列実行できますが、各タスクが必要とするメモリ量は減りません。タスクあたりのメモリが不足している場合、ディスクスピルは依然として発生します。したがって、これはディスクスピルに直接対処するものではありません。</p>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "CPUコア増加はメモリ不足によるスピルを解決しない"
}}
```
"""
    result = agent(message)

    # エージェントの出力からJSONを抽出
    response_text = result.message.get("content", [{}])[0].get("text", "")

    # JSON部分を抽出（```json ... ``` または { ... } を探す）
    import re
    json_match = re.search(r'```json\s*([\s\S]*?)\s*```', response_text)
    if json_match:
        json_str = json_match.group(1)
    else:
        # ```なしの場合、{から}までを探す
        json_match = re.search(r'(\{[\s\S]*\})', response_text)
        if json_match:
            json_str = json_match.group(1)
        else:
            raise ValueError(f"JSONが見つかりませんでした: {response_text[:200]}")

    return json.loads(json_str)


if __name__ == "__main__":
    import os
    import argparse
    from pathlib import Path

    # コマンドライン引数のパーサーを作成
    parser = argparse.ArgumentParser(description="Databricks試験問題を日本語に翻訳するツール")
    parser.add_argument(
        "yaml_file",
        type=str,
        help="入力YAMLファイルのパス（例: dbxes_exam1.yaml）"
    )
    args = parser.parse_args()

    # 入力ファイルの存在確認
    yaml_path = Path(args.yaml_file)
    if not yaml_path.exists():
        print(f"エラー: ファイルが見つかりません: {yaml_path}")
        exit(1)

    # 出力ディレクトリを作成
    os.makedirs("output", exist_ok=True)

    # 出力ファイルパス（入力ファイルと同じ名前で拡張子を.jsonに変更）
    output_path = f"output/{yaml_path.stem}.json"

    # 処理済みのIDを取得（中断からの復帰用）
    processed_ids = get_processed_ids(output_path)
    if processed_ids:
        print(f"既存の処理済みID: {sorted(processed_ids)}")

    # 前処理: YAMLファイルから全問題を読み込む
    questions = load_yaml_questions(str(yaml_path))

    total_questions = len(questions)
    skipped_count = 0
    print(f"入力ファイル: {yaml_path}")
    print(f"出力ファイル: {output_path}")
    print(f"全{total_questions}問の翻訳を開始します...")

    # 全問題を順番に処理
    for i, question in enumerate(questions, 1):
        question_id = question["id"]

        # 既に処理済みの場合はスキップ
        if question_id in processed_ids:
            print(f"\n=== 問題 {i}/{total_questions} (ID: {question_id}) は処理済みのためスキップ ===")
            skipped_count += 1
            continue

        print(f"\n=== 問題 {i}/{total_questions} (ID: {question_id}) を処理中 ===")

        # 前処理: 問題データを取得
        question_data = get_question_by_id(questions, question_id)

        # エージェントで翻訳
        translated_data = translate_question(question_data)

        # 後処理: JSONファイルに保存
        append_to_json(translated_data, output_path)
        print(f"    → ID {question_id} を保存しました")

    print(f"\n翻訳が完了しました。")
    print(f"  - スキップ: {skipped_count}問")
    print(f"  - 新規処理: {total_questions - skipped_count}問")
    print(f"  - 結果: {output_path}")
