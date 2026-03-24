# GenAI 試験問題 英日翻訳プロンプト

## タスク概要

指定された `docs/dbxg_exam_dataN.js`（N は番号）内の問題データ（英語）を日本語に翻訳し、
同フォーマットの `docs/dbxg_exam_dataN_ja.js` として出力してください。
変数名 `window.questionsDataDbxgN` はファイルに合わせてそのまま維持します。

**使い方の例:**
- 「dbxg_exam_data2.js を翻訳して」→ 入力: `docs/dbxg_exam_data2.js`、出力: `docs/dbxg_exam_data2_ja.js`
- 「全ファイルを翻訳して」→ `dbxg_exam_data1.js` 〜 `dbxg_exam_data6.js` をそれぞれ翻訳

## 翻訳対象フィールド

| フィールド | 翻訳方針 |
|---|---|
| `question` | 全文翻訳。コードブロックは原文維持 |
| `choices[].text` | 全文翻訳。コード・固有名詞は下記ルール参照 |
| `explanation` | HTML構造を維持しつつ、テキスト部分のみ翻訳 |
| `tags` | 下記ドメイン対訳表に従い置換 |
| `summary` | 全文翻訳。30〜60文字程度で要点を凝縮 |

## 翻訳しないもの（原文維持）

- HTMLタグ・属性（`<div class='...'>`、`<h4>`、`<p>` 等）
- CSS クラス名（`explanation-container` 等）
- コードスニペット（`{"key": "value"}` 等の JSON 例、Python コード）
- モデル名・プロダクト名（下記「固有名詞」参照）
- 数値・日付・メールアドレス・URL

---

## ドメイン（tags）対訳表

| 英語 | 日本語 |
|---|---|
| Design Applications | アプリケーション設計 |
| Application Development | アプリケーション開発 |
| Data Preparation | データ準備 |
| Assembling and Deploying Applications | アプリケーションの構築とデプロイ |
| Evaluation and Monitoring | 評価とモニタリング |
| Governance | ガバナンス |

---

## 専門用語・固有名詞 対訳ガイド

### Databricks / MLflow 関連（原文維持）
- Databricks、MLflow、Delta Lake、Delta Sharing、Unity Catalog
- MLflow PyFunc / PyFunc モデル → `MLflow PyFunc モデル`（PyFuncは維持）
- Model Serving → `Model Serving`(そのまま)
- Feature Serving → `Feature Serving`(そのまま)
- Vector Search → `Vector Search`（そのまま）
- Auto Loader → `Auto Loader`（そのまま）
- DatabricksIQ → `DatabricksIQ`（そのまま）
- DBRX → `DBRX`（そのまま）

### LLM・AI 技術用語
| 英語 | 日本語訳 |
|---|---|
| Large Language Model (LLM) | 大規模言語モデル（LLM） |
| RAG (Retrieval-Augmented Generation) | RAG（検索拡張生成） |
| Foundation Model | 基盤モデル |
| Foundation Model APIs | 基盤モデル API |
| Embedding / Embedding model | 埋め込み / 埋め込みモデル |
| Vector Store | ベクトルストア |
| Agent / Agent-based | エージェント / エージェントベース |
| Tool (in agent context) | ツール |
| Retriever / Retrieval system | レトリーバー / 検索システム |
| Fine-tuning | ファインチューニング |
| Prompt Engineering | プロンプトエンジニアリング |
| System prompt | システムプロンプト |
| Context window | コンテキストウィンドウ |
| Token | トークン |
| Chunking / Chunk | チャンキング / チャンク |
| Chunk size | チャンクサイズ |
| Guardrail | ガードレール |
| Hallucination | ハルシネーション |
| Preprocessing / Postprocessing | 前処理 / 後処理 |
| Provisioned throughput | プロビジョニングスループット |
| Pay-per-token | トークン課金（従量制） |
| Semantic search | セマンティック検索 |
| Cosine similarity | コサイン類似度 |
| Perplexity | パープレキシティ |
| ROUGE | ROUGE（そのまま） |
| BLEU | BLEU（そのまま） |
| LLM-as-a-judge | LLM-as-a-judge（そのまま）|
| Multi-step workflow | マルチステップワークフロー |

### モデル名（そのまま維持）
- LangChain、LlamaIndex、OpenAI GPT-4、Llama2-70B、MPT-30B、CodeLlama-34B、
  DistilBERT、BGE-large、Dolly 1.5B、DBRX

---

## explanation フィールドの HTML 翻訳ルール

- `explanation-badge` 内のテキストのみ翻訳（選択肢テキストと対応）
- `explanation-section-header` の見出しテキストは以下の固定訳を使用：
  - `✅ 正解の選択肢` → そのまま維持（既に日本語）
  - `❌ 不正解の選択肢` → そのまま維持（既に日本語）
  - `📌 全体的な解説` → そのまま維持（既に日本語）
- HTML 属性値（`class=`、`id=`）は翻訳しない
- `Correct:` → `正解：`、`Incorrect:` → `不正解：` に統一

---

## summary の作成ガイド

- 30〜60文字程度
- 「問題を見て正答を導ける」レベルのヒントになること
- 曖昧な表現（「重要」「知っておく」だけ）は避ける
- 具体的なアプローチ・手法名・理由を含める
- 例：「RAGアプリはprompt・retriever・LLMの組み合わせで最小コスト・最小工数を実現する」

---

## 出力フォーマット

入力ファイル名に `_ja` を付けたファイルとして出力（例: `dbxg_exam_data3.js` → `dbxg_exam_data3_ja.js`）。
形式は既存の `docs/exam_data1.js` に準拠：

```js
window.questionsDataDbxgN = [  // N は入力ファイルの番号に合わせる
  {
    "id": 1,
    "question": "（日本語問題文）",
    "choices": [
      { "text": "（日本語選択肢）", "is_correct": false },
      ...
    ],
    "explanation": "（HTML維持・テキスト翻訳済み）",
    "tags": "（対訳表に従った日本語ドメイン）",
    "summary": "（30〜60文字の日本語要約）"
  },
  ...
];
```

## 品質チェックリスト

翻訳後、以下を確認してください：

- [ ] 全 45 問が含まれている
- [ ] `is_correct` の真偽値が変わっていない
- [ ] HTML タグ・属性が破損していない
- [ ] モデル名・プロダクト名が原文維持されている
- [ ] JSON 構文エラーがない（クォートのエスケープ等）
- [ ] `tags` がドメイン対訳表通りになっている
- [ ] `summary` が 30〜60 文字に収まっている
