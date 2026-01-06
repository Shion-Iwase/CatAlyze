# JSONをJavaScriptファイルに変換するスクリプト

$jsonFiles = @(
    @{src = "../database/dbxes_exam1.json"; dst = "exam_data1.js"; var = "questionsData1"},
    @{src = "../database/dbxes_exam2.json"; dst = "exam_data2.js"; var = "questionsData2"},
    @{src = "../database/dbxes_exam3.json"; dst = "exam_data3.js"; var = "questionsData3"},
    @{src = "../database/dbxes_exam4.json"; dst = "exam_data4.js"; var = "questionsData4"}
)

Write-Host "JSONファイルをJavaScriptに変換中..." -ForegroundColor Cyan

foreach ($file in $jsonFiles) {
    if (-not (Test-Path $file.src)) {
        Write-Host "エラー: $($file.src) が見つかりません" -ForegroundColor Red
        continue
    }

    $json = Get-Content $file.src -Raw -Encoding UTF8
    $js = "// Auto-generated from $($file.src)`nwindow.$($file.var) = $json;"

    # UTF-8 BOMなしで保存（文字化け防止）
    $Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding($False)
    [System.IO.File]::WriteAllText((Resolve-Path $file.dst -ErrorAction SilentlyContinue).Path, $js, $Utf8NoBomEncoding)
    if (-not $?) {
        # ファイルが存在しない場合は絶対パスを生成
        $absolutePath = Join-Path (Get-Location) $file.dst
        [System.IO.File]::WriteAllText($absolutePath, $js, $Utf8NoBomEncoding)
    }

    Write-Host "✓ $($file.dst) を作成しました" -ForegroundColor Green
}

Write-Host "`n変換完了!" -ForegroundColor Green
