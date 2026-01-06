# DBMLA 試験問題 - ビルドスクリプト
# 分割されたファイルを1つのHTMLファイルに結合します

$outputFile = "../DBMLA_pre_exam_all.html"
$cssFile = "exam_style.css"
$appFile = "exam_app.js"
$indexFile = "index.html"
$jsonFiles = @(
    "../database/dbxes_exam1.json",
    "../database/dbxes_exam2.json",
    "../database/dbxes_exam3.json",
    "../database/dbxes_exam4.json"
)

Write-Host "ビルド開始..." -ForegroundColor Green

# ファイルの存在確認
$files = @($cssFile, $appFile, $indexFile) + $jsonFiles
foreach ($file in $files) {
    if (-not (Test-Path $file)) {
        Write-Host "エラー: $file が見つかりません" -ForegroundColor Red
        exit 1
    }
}

# CSSファイルを読み込み
$css = Get-Content $cssFile -Raw

# JavaScriptファイルを読み込み
$appJs = Get-Content $appFile -Raw

# JSONファイルを読み込んでJavaScript変数として結合
$jsonData = @"
// 埋め込み問題データ
window.EMBEDDED_QUESTIONS = {
    exam1: $(Get-Content $jsonFiles[0] -Raw),
    exam2: $(Get-Content $jsonFiles[1] -Raw),
    exam3: $(Get-Content $jsonFiles[2] -Raw),
    exam4: $(Get-Content $jsonFiles[3] -Raw)
};
"@

# exam_app.jsを修正してfetchの代わりに埋め込みデータを使用
$appJs = $appJs -replace 'const response1 = await fetch\(.*?\);[\s\S]*?const questions1 = await response1\.json\(\);', 'const questions1 = window.EMBEDDED_QUESTIONS.exam1;'
$appJs = $appJs -replace 'const response2 = await fetch\(.*?\);[\s\S]*?const questions2 = await response2\.json\(\);', 'const questions2 = window.EMBEDDED_QUESTIONS.exam2;'
$appJs = $appJs -replace 'const response3 = await fetch\(.*?\);[\s\S]*?const questions3 = await response3\.json\(\);', 'const questions3 = window.EMBEDDED_QUESTIONS.exam3;'
$appJs = $appJs -replace 'const response4 = await fetch\(.*?\);[\s\S]*?const questions4 = await response4\.json\(\);', 'const questions4 = window.EMBEDDED_QUESTIONS.exam4;'

# HTMLファイルを読み込み
$html = Get-Content $indexFile -Raw

# CSSリンクをインライン化
$html = $html -replace '<link rel="stylesheet" href="exam_style.css">', "<style>`n$css`n    </style>"

# JavaScriptファイルをインライン化（JSONデータを先に、次にアプリケーションロジック）
$html = $html -replace '<script src="exam_app.js"></script>', "<script>`n$jsonData`n`n$appJs`n    </script>"

# Prism.jsのCDNリンクはそのまま維持（外部依存）
# 必要に応じてPrism.jsもダウンロードしてインライン化できます

# 出力ファイルに書き込み
$html | Out-File -FilePath $outputFile -Encoding UTF8

Write-Host "ビルド完了!" -ForegroundColor Green
Write-Host "出力ファイル: $outputFile" -ForegroundColor Cyan
Write-Host ""
Write-Host "配布用ファイルが生成されました。" -ForegroundColor Yellow
Write-Host "このファイルをSharePoint/OneDriveで共有できます。" -ForegroundColor Yellow
Write-Host ""
Write-Host "注意: Prism.js（シンタックスハイライト）はCDNから読み込まれます。" -ForegroundColor Gray
Write-Host "      オフライン環境で使用する場合は、Prism.jsもインライン化してください。" -ForegroundColor Gray
