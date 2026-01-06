# database/*.json 問題追加ルール

## 概要
このドキュメントは、DBMLA練習問題アプリケーションに新しい問題を追加する際のルールと形式を定義します。

## ファイル構造

問題データは `database` フォルダ内のJSONファイルで管理されます：
- `database/dbxes_exam1.json`
- `database/dbxes_exam2.json`
- `database/dbxes_exam3.json`
- `database/dbxes_exam4.json`

```json
[
  {
    // 問題オブジェクト
  },
  {
    // 問題オブジェクト
  }
  // ...
]
```

## 問題オブジェクトの必須フィールド

各問題オブジェクトは以下のフィールドを含む必要があります：

### 1. id (必須)
- **型**: `number`
- **説明**: 問題ID（連番）
- **例**: `1`, `2`, `3`...
- **ルール**:
  - 1から開始
  - 連続した整数
  - 同一ファイル内で重複不可

### 2. tags (必須)
- **型**: `string`
- **説明**: 問題のドメイン/カテゴリ
- **既存ドメイン**:
  - `"データ処理コードの開発"`
  - `"コストとパフォーマンスの最適化"`
  - `"モニタリングとアラート"`
  - `"セキュリティとコンプライアンス"`
  - `"デプロイとデバッグ"`
- **ルール**:
  - 上記の5つのカテゴリから1つを選択
  - 統一性を保つため、既存ドメインを優先的に使用
  - 新しいドメインを追加する場合は、`index.html`のドメインフィルタにも追加すること

### 3. question (必須)
- **型**: `string`
- **説明**: 問題文
- **例**: `"データエンジニアリングチームが大規模なデータセットに対して複雑な分析クエリを実行していますが..."`
- **ルール**:
  - 明確で簡潔な日本語
  - 質問形式（「〜ですか？」など）
  - HTMLタグは使用しない（プレーンテキスト）
  - 改行が必要な場合は `\n` を使用

### 4. summary (必須)
- **型**: `string`
- **説明**: 問題の要約（50文字程度）
- **例**: `"ディスクスピル問題の解決には、CPUコア増加ではなくメモリ増加やパーティション最適化が効果的です。"`
- **ルール**:
  - 30～60文字程度
  - 問題の核心を簡潔に表現
  - 苦手対策シートで使用される
  - 読めば「問題だけを見て正答を導ける」レベルのヒント

#### summary の記載ガイド

- **目的**: summaryを読めば「問題だけを見て正答を導ける」レベルのヒントにする。
- **形式**: 具体的かつ行動指向（例: 関数名、メソッド名、必須引数、使うべきAPIなどを含める）。
- **長さ**: 30～60文字目安（過度に長くならないこと）。
- **文体**: 説明文または命令形。曖昧な語（"重要"や"知っておく"のみ）は避ける。
- **例**:
  - 良い例: "filter(col('discount') < 0)で該当行を抽出する"
  - 良い例: "VectorAssemblerで入力列をfeaturesベクトルにまとめる"
  - 悪い例: "色々な方法がある"（解答の助けにならない）

注: 新しい問題を追加する際は、summaryが問題の解答に十分なヒントかをセルフチェックしてください。

### 5. choices (必須)
- **型**: `array` (オブジェクトの配列)
- **説明**: 選択肢のリスト
- **形式**:
```json
"choices": [
  {
    "text": "選択肢1のテキスト",
    "is_correct": false
  },
  {
    "text": "選択肢2のテキスト",
    "is_correct": true
  }
]
```
- **ルール**:
  - 配列の長さは通常4-5個
  - 各選択肢は `text` と `is_correct` を持つオブジェクト
  - `text`: 選択肢の文字列（HTMLタグは使用しない）
  - `is_correct`: 正解の場合は `true`、不正解の場合は `false`
  - **必ず1つの選択肢のみ `is_correct: true` であること**
  - 正解は含めるが、明らかすぎないようにバランスを取る
### 6. explanation (必須)
- **型**: `string` (HTML文字列)
- **説明**: 正解の解説
- **形式**:
```json
"explanation": "<p>解説の本文...</p><p>追加の説明...</p><ul><li><strong>選択肢A:</strong> 理由...</li><li><strong>選択肢B:</strong> 理由...</li></ul>"
```
- **ルール**:
  - HTML形式（改行なし、1行の文字列）
  - 使用可能なHTMLタグ:
    - `<p>`: 段落
    - `<ul>`, `<li>`: リスト
    - `<strong>`: 強調
    - `<code>`: インラインコード
    - `<br>`: 改行
  - 推奨構造:
    1. 正解の理由説明（`<p>`タグ）
    2. 追加説明（`<p>`タグ）
    3. 不正解の理由（`<ul>`と`<li>`タグ）
  - コードブロックが必要な場合は `<code>` タグを使用
  - JSON文字列なので、ダブルクォート(`"`)はエスケープ不要（そのまま記述）

## 問題追加の手順

### 1. 既存問題の確認
対象のJSONファイル（例: `database/dbxes_exam1.json`）を開き、最後の問題IDを確認：
```json
[
  // ...
  {
    "id": 50,  // 最後の問題
    // ...
  }
]
```

### 2. 新しい問題を追加
配列の最後に新しい問題オブジェクトを追加（カンマを忘れずに）：
```json
[
  // ...既存の問題...
  {
    "id": 50,
    // ...
  },
  {
    "id": 51,
    "question": "新しい問題文をここに記述",
    "choices": [
      {
        "text": "選択肢1",
        "is_correct": false
      },
      {
        "text": "選択肢2",
        "is_correct": true
      },
      {
        "text": "選択肢3",
        "is_correct": false
      },
      {
        "text": "選択肢4",
        "is_correct": false
      }
    ],
    "explanation": "<p>正解の説明をここに記述</p><ul><li><strong>選択肢1:</strong> 理由1</li><li><strong>選択肢3:</strong> 理由3</li><li><strong>選択肢4:</strong> 理由4</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "要点を50文字程度で記述"
  }
]
```

### 3. JavaScriptファイルの再生成
JSONファイルを更新したら、JavaScriptファイルを再生成：
```powershell
cd c:\Users\shion.iwase\dev\catalyze\src
$json = Get-Content "../database/dbxes_exam1.json" -Raw -Encoding UTF8
"window.questionsData1 = $json;" | Set-Content "exam_data1.js" -Encoding UTF8
```

または、全ファイルを一度に再生成：
```powershell
cd c:\Users\shion.iwase\dev\catalyze\src
.\convert_json_to_js.ps1
```

### 4. 動作確認
1. ブラウザで `src/index.html` を開く（またはリフレッシュ）
2. 新しい問題が問題一覧に表示されることを確認
3. ドメインフィルタで絞り込めることを確認
4. 問題を解いて正解/不正解が正しく表示されることを確認
5. 解説が適切に表示されることを確認

## チェックリスト

新しい問題を追加する際は、以下を確認してください：

- [ ] `id` は連番で同一ファイル内で重複していない
- [ ] `tags` は既存の5つのカテゴリから選択
- [ ] `question` は明確で簡潔な日本語
- [ ] `summary` は30～60文字程度で要点を表現し、解答のヒントになる
- [ ] `choices` は4-5個のオブジェクトを含む
- [ ] `choices` 内の **必ず1つだけ** `is_correct: true` が設定されている
- [ ] `explanation` はHTML形式で、正解理由と不正解理由を含む（1行の文字列）
- [ ] カンマ（`,`）の位置が正しい（最後の要素の後ろにカンマは不要）
- [ ] JSONの構文エラーがない（VS Codeなどのエディタで確認）
- [ ] JavaScriptファイルを再生成した（`convert_json_to_js.ps1`を実行）

## よくある間違い

### 1. カンマの誤り
```json
// ❌ 間違い: 最後の要素にカンマ
{
  "id": 1,
  "tags": "データ処理コードの開発",
  "summary": "要約",  // 最後の要素
}  // ← このカンマは不要

// ✅ 正しい
{
  "id": 1,
  "tags": "データ処理コードの開発",
  "summary": "要約"  // 最後の要素にはカンマ不要
}
```

### 2. is_correct の重複
```json
// ❌ 間違い: 複数の正解
"choices": [
  {"text": "A", "is_correct": true},
  {"text": "B", "is_correct": true}  // 2つ目の正解はNG
]

// ✅ 正しい: 1つだけ正解
"choices": [
  {"text": "A", "is_correct": true},
  {"text": "B", "is_correct": false}
]
```

### 3. JSON文字列での改行
```json
// ❌ 間違い: explanationで実際の改行を使用
"explanation": "<p>これは
長い説明です</p>"  // JSON文字列では改行不可

// ✅ 正しい: 1行で記述
"explanation": "<p>これは長い説明です</p>"
```

### 4. ダブルクォートのエスケープ忘れ
```json
// ❌ 間違い: 文字列内のダブルクォートをエスケープしていない
"explanation": "<p>この設定は"重要"です</p>"

// ✅ 正しい: バックスラッシュでエスケープ
"explanation": "<p>この設定は\"重要\"です</p>"

// または、シングルクォートを使用
"explanation": "<p>この設定は'重要'です</p>"
```

## サンプルテンプレート

```json
{
  "id": 999,
  "question": "問題文をここに記述？",
  "choices": [
    {
      "text": "選択肢1",
      "is_correct": false
    },
    {
      "text": "選択肢2",
      "is_correct": true
    },
    {
      "text": "選択肢3",
      "is_correct": false
    },
    {
      "text": "選択肢4",
      "is_correct": false
    }
  ],
  "explanation": "<p>正解の説明をここに記述します。</p><ul><li><strong>選択肢1:</strong> 理由を説明</li><li><strong>選択肢3:</strong> 理由を説明</li><li><strong>選択肢4:</strong> 理由を説明</li></ul>",
  "tags": "データ処理コードの開発",
  "summary": "要点を50文字程度で記述"
}
```

## 開発フロー

1. **問題作成**: YAMLファイル（`dbxes_exam1.yaml`など）で問題を作成
2. **翻訳**: `create_quiz_agent.py`を使用してJSONファイルに変換
   ```bash
   python create_quiz_agent.py dbxes_exam1.yaml
   ```
3. **JavaScript生成**: `convert_json_to_js.ps1`でJavaScriptファイルを生成
   ```powershell
   cd src
   .\convert_json_to_js.ps1
   ```
4. **動作確認**: ブラウザで`src/index.html`を開いて確認

## 配布用ビルド

単一のHTMLファイルとして配布する場合：
```powershell
cd src
.\build.ps1
```
これにより、`DBMLA_pre_exam_all.html`が生成されます。

## 参考リンク

- [JSON公式サイト](https://www.json.org/json-ja.html)
- [HTML基本タグ](https://developer.mozilla.org/ja/docs/Web/HTML)

## 更新履歴

- 2026-01-05: JSON形式に更新
- 2025-11-01: 初版作成
