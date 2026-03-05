# CatAlyze - CLAUDE.md

## プロジェクト概要

**Databricks Engineer Professional 練習問題サイト**（静的Webアプリ）。
GitHub Pages等でホスティングし、試験対策として問題を解くことができる。
将来的には問題ジャンルの拡張・UI改善を予定。

---

## フォルダ構成

```
catalyze/
├── .claude/CLAUDE.md          ← このファイル
├── create_quiz_agent.py       # YAML→JSON変換AIエージェント（strands-agents使用）
├── database/                  # 問題データ（JSON・マスターデータ）
│   ├── dbxes_exam1.json
│   ├── dbxes_exam2.json
│   ├── dbxes_exam3.json
│   └── dbxes_exam4.json
├── dbxes_exam1.yaml           # 問題ソース（英語の生データ）
├── dbxes_exam2.yaml
├── dbxes_exam3.yaml
├── dbxes_exam4.yaml
├── docs/                      # 公開Webアプリ本体（GitHub Pages対象ディレクトリ）
│   ├── index.html             # エントリポイント・フィルタUI
│   ├── exam_app.js            # アプリロジック全体
│   ├── exam_style.css         # スタイル
│   ├── exam_data1.js          # ビルド生成物（直接編集しない）
│   ├── exam_data2.js
│   ├── exam_data3.js
│   ├── exam_data4.js
│   ├── exam_data_rules.md     # 問題データ形式の仕様書
│   ├── convert_json_to_js.ps1 # JSON→JS変換スクリプト
│   └── build.ps1              # 単一HTMLビルドスクリプト
└── requirements.txt           # strands-agents>=1.0.0
```

---

## データフロー

```
YAML（英語原文）
    ↓ python create_quiz_agent.py <yaml> （Claude Haiku-4.5で日本語翻訳）
database/*.json（マスターデータ・手動編集もここ）
    ↓ docs/convert_json_to_js.ps1 を PowerShell で実行
docs/exam_data*.js（window.questionsData1 〜 4 のグローバル変数）
    ↓ index.html で読み込み
ブラウザで動作
```

---

## 問題データ形式（database/*.json）

各問題オブジェクトのスキーマ：

```json
{
  "id": 1,                        // 連番（同一ファイル内で重複不可）
  "tags": "データ処理コードの開発", // ドメイン（下記5カテゴリから1つ）
  "question": "問題文（プレーンテキスト、\\nで改行）",
  "summary": "30〜60文字の要点（解答のヒントになるレベル）",
  "choices": [
    {"text": "選択肢A", "is_correct": false},
    {"text": "選択肢B", "is_correct": true},   // 正解は必ず1つ
    {"text": "選択肢C", "is_correct": false},
    {"text": "選択肢D", "is_correct": false}
  ],
  "explanation": "<p>HTML形式の解説（1行）</p><ul><li><strong>A:</strong> 理由</li></ul>",
  "code": "コードブロック（任意）"  // Python構文ハイライト対象
}
```

### ドメイン（tags）の5カテゴリ
- `データ処理コードの開発`
- `コストとパフォーマンスの最適化`
- `モニタリングとアラート`
- `セキュリティとコンプライアンス`
- `デプロイとデバッグ`

新カテゴリ追加時は `index.html` のドメインフィルタも更新が必要。

---

## アプリアーキテクチャ（exam_app.js）

### データ管理
- `allQuestions[]` - 全問題セット統合配列（uniqueId = `"${examSet}-${id}"`）
- `selectedChoices{}` - 回答履歴（uniqueId → 選択インデックス）
- `questionTags{}` - ★タグ（uniqueId → boolean）
- 進捗はlocalStorageに保存（キー: `dbmla_progress_set1` 〜 `set4`）

### UIの主要機能
- 左ペイン: フィルタ（問題セット・ステータス・ドメイン・タグ）+ 問題カード一覧
- 右ペイン: 問題詳細（選択肢・解説・要点）
- 固定「次の問題→」ボタン
- キーボードショートカット（N/P: 前後移動、A〜E/1〜5: 選択肢選択、T: タグ、R: リセット、?: ヘルプ）
- 苦手対策シートダウンロード（タグ付き・不正解問題のsummaryをまとめたテキスト）
- Prism.js（CDN）でPythonコードブロックのシンタックスハイライト

---

## 開発コマンド

### JSON → JS変換（問題データ更新後に必須）
```powershell
cd docs
.\convert_json_to_js.ps1
```

### 単一HTML生成（SharePoint等での配布用）
```powershell
cd docs
.\build.ps1
# → ../DBMLA_pre_exam_all.html が生成される
```

### AI翻訳（YAML → JSON）
```bash
python create_quiz_agent.py dbxes_exam1.yaml
# → output/dbxes_exam1.json に保存
# 途中中断後の再実行は処理済みIDをスキップ
```

---

## 既知の不具合

### localStorage の保存対象がset1〜3のみ（set4が未保存）
- **場所**: `exam_app.js` の `loadFromLocalStorage()` と `saveToLocalStorage()`
- **原因**: `for (let set = 1; set <= 3; set++)` と3までしかループしていない
- **影響**: 過去問4の回答・タグがページリロード後に消える
- **修正方法**: `<= 3` を `<= 4` に変更する

---

## 将来の拡張方針

- 問題ジャンル（試験種別）の追加: 現在はDatabricks Engineer Professionalのみ
  - 追加時はindex.htmlの「問題セット」フィルタと対応するJSONファイルを追加
  - exam_app.js の `loadAllQuestions()` にも新セットのロード処理を追記
- UI改善: レスポンシブ対応強化、ダークモード等
- 進捗データのエクスポート/インポート機能

---

## 技術スタック

| 領域 | 技術 |
|------|------|
| フロントエンド | Vanilla JS / HTML / CSS（フレームワークなし） |
| シンタックスハイライト | Prism.js 1.29.0（CDN） |
| データ生成 | Python + strands-agents（Claude Haiku-4.5） |
| ビルド/変換 | PowerShell |
| ホスティング | GitHub Pages（`docs/` ディレクトリ） |
