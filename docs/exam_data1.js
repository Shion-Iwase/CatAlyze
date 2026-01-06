window.questionsData1 = [
  {
    "id": 1,
    "question": "データエンジニアリングチームが大規模なデータセットに対して複雑な分析クエリを実行していますが、クエリの実行によって大幅なディスクスピルが発生し、パフォーマンスが著しく低下していることに気付きました。\nこの問題を最小化するための効果的な解決策ではないものはどれですか？",
    "choices": [
      {
        "text": "CPUコア数を増やす",
        "is_correct": true
      },
      {
        "text": "シャッフルパーティション数を増やす",
        "is_correct": false
      },
      {
        "text": "Sparkパーティションのサイズを縮小する",
        "is_correct": false
      },
      {
        "text": "メモリサイズを増やす",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header problem'>📌 問題の本質</h4><p class='explanation-box problem'>この問題は<strong>ディスクスピル</strong>（Disk Spill）です。処理データがメモリに収まらない場合、Sparkは中間データをディスクに書き込みます。これにより、インメモリ処理と比較してパフォーマンスが<strong>大幅に低下</strong>します。</p><h4 class='explanation-section-header solution'>✅ 効果的な解決策（3つ）</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ Sparkパーティションのサイズを縮小する</div><p class='explanation-text'>パーティションを小さくすることで、<strong>各タスクが処理するデータ量が減少</strong>し、メモリに収まりやすくなります。これによりタスクあたりのメモリ負荷が軽減されます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ メモリサイズを増やす</div><p class='explanation-text'>コア対メモリ比率を改善することで、Sparkは<strong>より多くのデータをメモリ内に保持</strong>でき、ディスクへの書き込み（スピル）が減少します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ シャッフルパーティション数を増やす</div><p class='explanation-text'>シャッフルパーティションを増やすと、データが<strong>より多くのタスクに分散</strong>され、個々のタスクのメモリ負荷が軽減されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 効果がない解決策</h4><div class='explanation-box incorrect'><div class='explanation-badge incorrect'>✗ CPUコア数を増やす（正解）</div><p class='explanation-text'><strong>CPUコアを増やしても</strong>並列実行タスク数は増えますが、<strong>各タスクが必要とするメモリ量は変わりません</strong>。タスクあたりのメモリが不足している状況では、ディスクスピルは依然として発生します。</p><p class='explanation-highlight'><strong>💡 重要ポイント：</strong>ディスクスピルは<strong>メモリ不足の問題</strong>であり、CPU処理能力の問題ではありません。</p></div></div>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "ディスクスピル問題の解決には、CPUコア増加ではなくメモリ増加やパーティション最適化が効果的です。"
  },
  {
    "id": 2,
    "question": "既存のクラスターの設定を編集するためにデータエンジニアが必要とする最小限の権限を説明しているものは次のうちどれですか？",
    "choices": [
      {
        "text": "クラスター作成許可 + クラスターに対する「Can Manage」権限",
        "is_correct": false
      },
      {
        "text": "クラスターに対する「Can Manage」権限",
        "is_correct": true
      },
      {
        "text": "管理者のみが既存クラスターの設定を編集できる",
        "is_correct": false
      },
      {
        "text": "クラスターに対する「Can Restart」権限",
        "is_correct": false
      }
    ],
    "explanation": "<p>クラスター権限には2つのタイプを設定できます：</p><ul><li><strong>「Allow cluster creation」エンタイトルメント</strong> - クラスターを作成する能力を制御します</li><li><strong>クラスターレベル権限</strong> - 特定のクラスターを使用および変更する能力を制御します</li></ul><p>クラスターには4つの権限レベルがあります：</p><ul><li><strong>No Permissions</strong>（権限なし）</li><li><strong>Can Attach To</strong>（アタッチ可能）</li><li><strong>Can Restart</strong>（再起動可能）</li><li><strong>Can Manage</strong>（管理可能）</li></ul><p>既存のクラスターの設定を編集するには、そのクラスターに対する<strong>「Can Manage」権限</strong>が必要です。この権限により、クラスターの設定変更、削除、権限管理などの管理機能をすべて実行できます。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "既存クラスターの設定編集には、そのクラスターに対する「Can Manage」権限が必要です。"
  },
  {
    "id": 3,
    "question": "医療機関がDatabricks Unity Catalog内に機密性の高い患者データを保存しています。このデータを、Databricksを使用していない外部の分析ベンダーと共有する必要があります。\nこのデータアクセスを実現するための最も安全で効率的な方法は何ですか？",
    "choices": [
      {
        "text": "直接アクセスのために外部テーブルにデータを保存する",
        "is_correct": false
      },
      {
        "text": "データを保護されたExcelファイルとしてダウンロードし、SFTP経由でアップロードする",
        "is_correct": false
      },
      {
        "text": "オープン共有プロトコルでDelta Sharingを使用する",
        "is_correct": true
      },
      {
        "text": "外部使用のためのデータベース保存ビューを作成する",
        "is_correct": false
      }
    ],
    "explanation": "<p><strong>Delta Sharing</strong>は、オープンプロトコルを使用してプラットフォーム間でデータを安全に共有するために設計されています。ベンダーがDatabricksを使用していないため、Delta Sharingは手動エクスポートやサードパーティの回避策を必要とせず、安全でリアルタイムなアクセスを確保します。</p><p>Delta Sharingの主な利点：</p><ul><li><strong>クロスプラットフォーム対応</strong> - Databricksを使用していない外部組織でもアクセス可能</li><li><strong>セキュリティ</strong> - データを物理的にコピーせずに安全な共有を実現</li><li><strong>リアルタイム性</strong> - データの最新版に常にアクセス可能</li><li><strong>オープンプロトコル</strong> - 標準化された共有方法で互換性を確保</li></ul>",
    "summary": "外部組織との安全なデータ共有には、オープンプロトコルを使用するDelta Sharingが最適です。",
    "tags": "セキュリティとコンプライアンス"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "クエリはフルテーブルスキャンを実行し、ストレージからすべてのデータファイルを読み取る"
      },
      {
        "is_correct": false,
        "text": "クエリはテーブルメタデータのみを読み取る（すべてのカラム統計が含まれているため）"
      },
      {
        "is_correct": false,
        "text": "クエリはダイナミックファイルプルーニングがデフォルトで有効なため、ほとんどのファイルをスキップする"
      },
      {
        "is_correct": false,
        "text": "クエリはフィルターカラムが最初の32カラムに含まれているため、データスキッピングを活用する"
      }
    ],
    "explanation": "<p>パーティショニングやZ-Orderインデックシングが適用されていない大規模な未最適化テーブルでは、フィルターカラムに関連するデータが多くのファイルに散らばっている可能性が高く、エンジンはすべてまたはほぼすべてのテーブルファイルを読み取る必要があります。</p><p>このシナリオでは：</p><ul><li><strong>パーティショニングなし</strong> - <code>birth_date</code>カラムでパーティション化されていないため、ファイルレベルでの絹り込みができない</li><li><strong>Z-Orderインデックシングなし</strong> - データスキッピングの効果を高める最適化がされていない</li><li><strong>データの散らばり</strong> - 異なる生年月日のデータが多くのファイルに散在している</li></ul><p>結果として、クエリエンジンは条件に合致するレコードを見つけるために、テーブル全体の<strong>フルスキャン</strong>を実行する必要があり、これはパフォーマンスの大幅な低下を意味します。</p>",
    "id": 4,
    "question": "データエンジニアが、顧客ID、名前、生年月日、メール、国などの個人情報を含む数百万の顧客レコードを保存するcustomersという名前のDeltaテーブルから、人口統計セグメントを分析しています。チームは1970年1月1日以前に生まれた顧客をターゲットとしたマーケティングキャンペーンのために「シニア顧客」セグメントを作成したいと考えています。エンジニアは以下のクエリを作成しました：\n\nSELECT *\nFROM customers\nWHERE birth_date <= '1970-01-01';\n\nしかし、テーブルはbirth_dateカラムでパーティション化されておらず、Z-Orderインデックシングも適用されていません。\n\nこの設定では、クエリパフォーマンスの観点から何が起こる可能性が最も高いでしょうか？",
    "summary": "パーティショニングやZ-Order最適化がない大規模テーブルでのフィルタークエリはフルテーブルスキャンを引き起こします。",
    "tags": "コストとパフォーマンスの最適化"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "デフォルトでは、Delta Lakeは各テーブルの最初の16カラムについて統計情報をトランザクションログに収集する"
      },
      {
        "is_correct": true,
        "text": "デフォルトでは、Delta Lakeは各テーブルの最初の32カラムについて統計情報をトランザクションログに収集する"
      },
      {
        "is_correct": false,
        "text": "デフォルトでは、Delta Lakeは各テーブルの最初の32カラムについて統計情報をHive metastoreに収集する"
      },
      {
        "is_correct": false,
        "text": "デフォルトでは、Delta Lakeは各テーブルの最初の16カラムについて統計情報をHive metastoreに収集する"
      }
    ],
    "explanation": "<p>Delta Lakeは、テーブルに追加される各データファイルに対して、トランザクションログに統計情報を自動的に収集します。<strong>デフォルトでは、Delta Lakeは各テーブルの最初の32カラム</strong>について統計情報を収集します。</p><p>これらの統計情報はファイルごとに以下を示します：</p><ul><li><strong>レコードの総数</strong></li><li><strong>最小値</strong> - テーブルの最初の32カラムの各カラムの最小値</li><li><strong>最大値</strong> - テーブルの最初の32カラムの各カラムの最大値</li><li><strong>NULL値の数</strong> - テーブルの最初の32カラムの各カラムのNULL値の数</li></ul><p>これらの統計情報は、クエリフィルターに基づいた<strong>データスキッピング</strong>に活用され、不要なファイルの読み取りを回避してクエリパフォーマンスを向上させます。</p>",
    "id": 5,
    "question": "Delta Lakeファイル統計に関する正しい説明はどれですか？",
    "summary": "Delta Lakeはデフォルトでテーブルの最初の32カラムの統計情報をトランザクションログに収集し、データスキッピングに活用します。",
    "tags": "コストとパフォーマンスの最適化"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "spark.readStream\n    .format(\"cloudFiles\")\n    .option (\"cloudFiles.format\", \"json\")\n    .load(source_path)\n.writeStream\n    .trigger(availableNow=True)\n    .start(\"target_table\")"
      },
      {
        "is_correct": false,
        "text": "spark.readStream\n    .format(\"autoloader\")\n    .option (\"autoloader.format\", \"json\")\n    .load(source_path)\n.writeStream\n    .option(\"checkpointLocation\", checkpointPath)\n    .start(\"target_table\")"
      },
      {
        "is_correct": true,
        "text": "spark.readStream\n    .format(\"cloudFiles\")\n    .option (\"cloudFiles.format\", \"json\")\n    .load(source_path)\n.writeStream\n    .option(\"checkpointLocation\", checkpointPath)\n    .start(\"target_table\")"
      },
      {
        "is_correct": false,
        "text": "spark.readStream\n    .format(\"autoloader\")\n    .option (\"autoloader.format\", \"json\")\n    .load(source_path)\n.writeStream\n    .option(\"checkpointLocation\", checkpointPath)\n    .trigger(real-time=True)\n    .start(\"target_table\")"
      }
    ],
    "explanation": "<p>入力JSONデータをターゲットのDeltaテーブルに取り込むためには、<strong>Auto Loader</strong>を使用します。Auto LoaderはSpark Structured Streamingをベースとしており、<code>cloudFiles</code>と呼ばれるStructured Streamingソースを提供します。</p><p>データの取り込みをニアリアルタイムで増分的に行いたい場合は、デフォルトのトリガーメソッド<code>trigger(processingTime=\"500ms\")</code>を使用できます。これにより、0.5秒の固定間隔でマイクロバッチによるデータ処理が可能になります。</p><p>正解の選択肢の要点：</p><ul><li><strong><code>format(\"cloudFiles\")</code></strong> - Auto Loaderの正しいフォーマット指定</li><li><strong><code>option(\"cloudFiles.format\", \"json\")</code></strong> - JSONフォーマットの指定</li><li><strong><code>option(\"checkpointLocation\", checkpointPath)</code></strong> - ストリーミング処理の継続性確保に必要</li><li><strong>デフォルトトリガー</strong> - 明示的なトリガー指定なしでニアリアルタイム処理を実現</li></ul><p>他の選択肢の問題点：</p><ul><li><code>trigger(availableNow=True)</code> - 一回限りの処理でストリーミングではない</li><li><code>format(\"autoloader\")</code> - 存在しないフォーマット名</li><li><code>trigger(real-time=True)</code> - 存在しないトリガーオプション</li></ul>",
    "id": 6,
    "question": "データエンジニアが入力JSONデータをターゲットのDeltaテーブルに取り込みたいと考えています。データの取り込みをニアリアルタイムで増分的に行いたいと思っています。\n指定された要件を正しく満たすオプションはどれですか？",
    "summary": "Auto LoaderでJSONデータをニアリアルタイムで増分取り込みするには、cloudFilesフォーマットとcheckpointLocationの指定が必要です。",
    "tags": "データ処理コードの開発"
  },
  {
    "id": 7,
    "question": "大手分析会社のデータエンジニアリングチームが、Databricks環境全体でのデータガバナンスとカタログ化の改善に取り組んでいます。この取り組みの一環として、リードデータエンジニアは、データの発見と管理を容易にするために、会社のDelta Lake内のいくつかのテーブルに説明的なタグを適用するタスクを任されています。ドキュメントをレビューしている間に、エンジニアはDatabricksでテーブルにタグを設定するための複数のSQLコマンド形式に遭遇し、どのコマンド構文が有効かを確認したいと考えています。\n以下のうち、Databricksでテーブルにタグを設定するための正しいコマンドではないものはどれですか？",
    "choices": [
      {
        "text": "ALTER TABLE table_name SET TAGS ('tag_key1' = 'tag_value1', 'tag_key2' = 'tag_value2');",
        "is_correct": false
      },
      {
        "text": "SET TAG ON TABLE table_name tag_key = tag_value;",
        "is_correct": false
      },
      {
        "text": "SET TAG ON TABLE table_name tag_key;",
        "is_correct": false
      },
      {
        "text": "ALTER TABLE table_name SET TAG tag_key = tag_value;",
        "is_correct": true
      }
    ],
    "explanation": "<p>Databricks SQLでは、テーブルにタグを設定するための2つの形式があります：</p><p><strong>複数形</strong> - <code>ALTER TABLE ... SET TAGS (...)</code>を使用し、1つまたは複数のタグを一度に設定できます：</p><ul><li><code>ALTER TABLE table_name SET TAGS ('tag_key1' = 'tag_value1', 'tag_key2' = 'tag_value2');</code></li><li><code>ALTER TABLE table_name SET TAGS ('tag_key' = 'tag_value');</code></li></ul><p><strong>単数形</strong> - <code>SET TAG ON TABLE ...</code>を使用し、個別のタグを設定します：</p><ul><li><code>SET TAG ON TABLE table_name tag_key = tag_value;</code></li></ul><p><strong>注意：</strong> <code>tag_value</code>はオプションの識別子です。指定しない場合、タグの割り当てはキーのみとして設定されます：</p><ul><li><code>SET TAG ON TABLE table_name tag_key;</code></li></ul><p><strong>不正解の理由：</strong> <code>ALTER TABLE table_name SET TAG tag_key = tag_value;</code>は正しい構文ではありません。<code>ALTER TABLE</code>では<code>SET TAGS</code>（複数形）を使用する必要があり、<code>SET TAG</code>（単数形）は使用できません。</p>",
    "tags": "データ処理コードの開発",
    "summary": "Databricksではテーブルタグ設定に「ALTER TABLE ... SET TAGS」や「SET TAG ON TABLE」の正しい構文を使用します。"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "チームがテーブルに対して安定したクラスタリングキーを特定している"
      },
      {
        "is_correct": false,
        "text": "テーブルが一貫した小さな日付範囲セットによって頻繁にフィルタリングされている"
      },
      {
        "is_correct": true,
        "text": "テーブルが複数のカラムにわたって多様で頻繁に変化するクエリフィルターを経験しており、予測不可能なアクセスパターンを持っている"
      },
      {
        "is_correct": false,
        "text": "上記の選択肢はすべて正しくない。Automatic Liquid Clusteringはマネージドテーブルには適用できない"
      }
    ],
    "explanation": "<p><strong>Automatic Liquid Clustering</strong>は、最近のクエリフィルターに基づいてデータを継続的に再編成することで、進化し予測不可能なクエリパターンに動的に適応するように設計されています。これは、複数のカラムにわたってクエリ述語が頻繁に変更される場合に特に有益で、パーティショニングやZ-Orderingなどの静的戦略をあまり効果的でなくします。</p><p>各戦略の適用場面：</p><ul><li><strong>パーティショニング</strong> - フィルターが安定しており予測可能な場合（多くの場合、日付/時刻カラム）に最も効果的です</li><li><strong>Z-Ordering</strong> - 一貫したフィルタリングが行われる既知の高カーディナリティカラムに対してクラスタリングを最適化します</li><li><strong>Automatic Liquid Clustering</strong> - クエリフィルターが多様で予測不可能な場合に、手動調整なしでパフォーマンスを改善する俊敏性を提供します</li></ul><p>したがって、アクセスパターンが予測不可能で、複数のカラムにわたってフィルター条件が頻繁に変化する場合、Automatic Liquid Clusteringが最も推奨される選択肢となります。</p>",
    "id": 8,
    "question": "データエンジニアリングチームがUnity Catalog内の成長しているマネージドDeltaテーブルの最適なデータレイアウト戦略について議論しています。クエリパフォーマンスを向上させるために、パーティショニング、Z-ordering、Liquid Clusteringを検討しています。\nAutomatic Liquid Clusteringが推奨される選択肢であることを最もよく示すシナリオはどれですか？",
    "summary": "Automatic Liquid Clusteringは、複数カラムにわたって予測不可能で頻繁に変化するクエリフィルターを持つテーブルに最適です。",
    "tags": "コストとパフォーマンスの最適化"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "DESCRIBE EXTENDED sales"
      },
      {
        "is_correct": false,
        "text": "DESCRIBE DETAIL sales"
      },
      {
        "is_correct": false,
        "text": "SHOW TBLPROPERTIES sales"
      },
      {
        "is_correct": false,
        "text": "DESCRIBE TABLE sales"
      }
    ],
    "explanation": "<p><strong><code>DESCRIBE TABLE EXTENDED</code></strong>または簡単に<strong><code>DESCRIBE EXTENDED</code></strong>を使用することで、「Table Properties」フィールドに追加されたテーブル制約を表示できます。これにより、CHECK制約の名前と実際の条件の両方が表示されます。</p><p>さらに、<strong><code>DESCRIBE EXTENDED</code></strong>では以下の情報を確認できます：</p><ul><li><strong>各カラムのコメント</strong> - カラムレベルで設定されたコメントを表示</li><li><strong>テーブル自体のコメント</strong> - テーブルレベルのコメントを表示</li><li><strong>テーブル属性</strong> - CHECK制約を含むテーブルの詳細情報を表示</li></ul><p>他のコマンドの機能：</p><ul><li><strong><code>DESCRIBE DETAIL</code></strong> - テーブルのメタデータ情報（ファイル数、サイズ等）を表示するが、制約やコメントは表示しない</li><li><strong><code>SHOW TBLPROPERTIES</code></strong> - テーブルプロパティのみを表示し、カラム情報やコメントは含まない</li><li><strong><code>DESCRIBE TABLE</code></strong> - 基本的なテーブル情報のみを表示し、制約や詳細なコメントは表示しない</li></ul>",
    "id": 9,
    "question": "データエンジニアが以下のコマンドを使用してsalesテーブルにCHECK制約を追加しました：\n\nALTER TABLE sales ADD CONSTRAINT valid_date CHECK (item_date >= '2024-01-01');\n\nさらに、以下のコマンドを使用してitem_dateカラムにコメントを追加しました：\n\nALTER TABLE sales ALTER COLUMN item_date COMMENT \"Date must be newer than Jan 1, 2024\";\n\n以下のコマンドのうち、制約とカラムコメントの両方がテーブルに正常に追加されたことを確認できるものはどれですか？",
    "summary": "DESCRIBE EXTENDEDコマンドは、テーブルのCHECK制約とカラムコメントの両方を確認できる唯一のコマンドです。",
    "tags": "デプロイとデバッグ"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "Databricks Assistantを活用してカラムの説明を生成し、ALTER TABLEコマンドを通じて適用する"
      },
      {
        "is_correct": false,
        "text": "Delta Lake生成カラムを使用して、既存データに基づいて自動的にカラムの説明を作成する"
      },
      {
        "is_correct": true,
        "text": "Unity Catalog ExplorerのAI生成カラムコメント機能を使用する"
      },
      {
        "is_correct": false,
        "text": "Lakeflow Declarative Pipelinesを通じてテーブルを作成することで、カラムドキュメンテーションを自動化する"
      }
    ],
    "explanation": "<p><strong>Unity Catalog Explorer</strong>では、<strong>AI生成カラムコメント機能</strong>を提供しています。この機能は大規模言語モデル（LLM）を活用して、カラム名、データ型、サンプル値、データパターンに基づいて、カラムの説明的なコメントを自動的に下書きします。</p><p>この機能の主な利点：</p><ul><li><strong>自動化</strong> - 手動でのドキュメント作成作業を大幅に削減</li><li><strong>一貫性</strong> - AI生成により、記述スタイルの統一性を確保</li><li><strong>効率性</strong> - 数百のテーブルとカラムに対して迅速に対応</li><li><strong>精度</strong> - カラム名、データ型、実際のデータサンプルを分析して適切な説明を生成</li></ul><p>他の選択肢の問題点：</p><ul><li><strong>Databricks Assistant</strong> - カラム説明の生成は可能だが、手動でのALTER TABLEコマンド実行が必要で、完全自動化ではない</li><li><strong>Delta Lake生成カラム</strong> - 計算カラムを作成する機能であり、カラムコメント生成とは異なる</li><li><strong>Lakeflow Declarative Pipelines</strong> - データパイプラインの定義であり、既存テーブルのカラムコメント自動生成には適さない</li></ul>",
    "id": 10,
    "question": "小売企業のデータエンジニアリングチームは、Unity Catalogテーブルからインサイトを生成するために、ビジネスアナリストと頻繁に協力しています。時間が経つにつれて、アナリストたちは、既存の会社のドキュメントが古いため、主要なテーブルのいくつかのカラムについて混乱があると報告しています。効率を改善し、誤解を減らすために、チームリーダーはすべてのテーブルカラムに明確な説明を追加することを推奨しています。しかし、数百のテーブルとカラムを手動でドキュメント化することは時間がかかり、不整合を引き起こす可能性があります。\n以下のアプローチのうち、チームがこのタスクを自動的に達成できるものはどれですか？",
    "summary": "Unity Catalog ExplorerのAI生成カラムコメント機能は、カラム名、データ型、サンプル値を分析して自動的に説明的なコメントを生成します。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "access_control"
      },
      {
        "is_correct": true,
        "text": "permissions"
      },
      {
        "is_correct": false,
        "text": "job_settings"
      },
      {
        "is_correct": false,
        "text": "roles"
      }
    ],
    "explanation": "<p><strong><code>permissions</code></strong>マッピングは、ジョブのアクセス制御リスト（ACL）を指定するために使用され、どのユーザーまたはグループがどのレベルのアクセス（<code>CAN_MANAGE</code>や<code>CAN_VIEW</code>など）を持つかを定義します。</p><p>Databricks Asset Bundlesでのジョブ権限設定の構成：</p><ul><li><strong><code>permissions</code></strong> - ジョブのアクセス制御を定義するメインセクション</li><li><strong><code>group_name</code></strong> - アクセス権限を付与するグループ名</li><li><strong><code>level</code></strong> - 権限レベル（CAN_MANAGE、CAN_VIEW等）</li></ul><p>主な権限レベル：</p><ul><li><strong>CAN_MANAGE</strong> - ジョブの編集、実行、削除、権限管理が可能</li><li><strong>CAN_VIEW</strong> - ジョブの設定や実行結果の閲覧のみ可能</li><li><strong>CAN_MANAGE_RUN</strong> - ジョブの実行と実行結果の管理が可能</li></ul><p>この構成により、<code>devops-team</code>グループはジョブの完全な管理権限を持ち、<code>qa-team</code>グループは閲覧権限のみを持つことになります。</p>",
    "id": 11,
    "question": "データエンジニアがDatabricks Asset Bundlesを使用してジョブを設定し、許可されたユーザーのみにアクセスを制限したいと考えています。以下のジョブ定義にはタスクとジョブクラスターが含まれていますが、エンジニアはどのユーザーグループがジョブを管理または閲覧できるかを定義する必要があります。\n\nresources:\n    jobs:\n        my-job:\n            name: analytics-job\n            tasks: [...]\n            job_clusters: [...]\n            __________:\n                - group_name: devops-team\n                  level: CAN_MANAGE\n                - group_name: qa-team\n                  level: CAN_VIEW\n\n指定された要件を満たすために空白を正しく埋めるオプションはどれですか？",
    "summary": "Databricks Asset Bundlesでジョブのアクセス制御を設定するには、permissionsセクションでグループと権限レベルを定義します。",
    "tags": "セキュリティとコンプライアンス"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "ALTER SHARE sales_share ADD TABLE products WITH HISTORY;"
      },
      {
        "is_correct": false,
        "text": "ALTER SHARE sales_share ADD TABLE products WITH CDF;"
      },
      {
        "is_correct": false,
        "text": "ALTER SHARE sales_share ADD TABLE products WITH (CDF AND TIME TRAVEL);"
      },
      {
        "is_correct": false,
        "text": "ALTER SHARE sales_share ADD TABLE products WITH TIME TRAVEL;"
      }
    ],
    "explanation": "<p>Databricks Delta Sharingでは、<strong><code>WITH HISTORY</code></strong>オプションでテーブルを追加することで、外部の受信者がタイムトラベルクエリとChange Data Feed（有効になっている場合）の両方を利用できるようになります。</p><p><strong><code>WITH HISTORY</code></strong>オプションの機能：</p><ul><li><strong>完全なテーブルディレクトリの公開</strong> - テーブルの履歴情報を含む全体のディレクトリへのアクセスを提供</li><li><strong>CDF消費の有効化</strong> - <code>table_changes()</code>関数を使用した増分変更の取得が可能</li><li><strong>タイムトラベルクエリのサポート</strong> - 特定の時点またはバージョンでのデータ参照が可能</li></ul><p>使用可能な機能：</p><ul><li><strong><code>table_changes()</code>関数</strong> - CDFが有効なテーブルの変更履歴を取得</li><li><strong>タイムトラベル構文</strong> - <code>SELECT * FROM table@v1</code>や<code>SELECT * FROM table TIMESTAMP AS OF '2024-01-01'</code>など</li><li><strong>履歴データの参照</strong> - 過去のスナップショットや変更履歴へのアクセス</li></ul><p>他のオプションの制限：</p><ul><li><strong><code>WITH CDF</code></strong> - 正しい構文ではなく、CDFのみを指定する方法がない</li><li><strong><code>WITH TIME TRAVEL</code></strong> - タイムトラベルのみでCDF機能は含まれない</li><li><strong><code>WITH (CDF AND TIME TRAVEL)</code></strong> - 無効な構文</li></ul>",
    "id": 12,
    "question": "データエンジニアがChange Data Feed（CDF）が有効にDelta Lakeテーブル「products」を持っています。このテーブルをDelta Sharingを使用して外部の受信者と共有し、受信者が以下を実行できるようにしたいと考えています：\ntable_changes()関数を使用して増分変更を消費する。\nテーブルに対してタイムトラベルクエリを実行する。\n\nこれを達成するためにデータエンジニアが実行すべきコマンドは次のうちどれですか？",
    "summary": "Delta SharingでCDFとタイムトラベルの両方を有効にするには、WITH HISTORYオプションでテーブルを共有します。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "activity_date"
      },
      {
        "is_correct": false,
        "text": "activity_type"
      },
      {
        "is_correct": false,
        "text": "user_id"
      },
      {
        "is_correct": false,
        "text": "activity_time"
      }
    ],
    "explanation": "<p>パーティション分割カラムを選択する際には、特定の値を持つレコード（特定のユーザーのアクティビティなど）が無期限に継続して到着するという事実を考慮することが重要です。このような場合、<strong>日時カラム</strong>をパーティション分割に使用します。</p><p><strong><code>activity_date</code></strong>が最適な選択肢である理由：</p><ul><li><strong>パーティションの最適化</strong> - 日付ベースのパーティション分割により、クエリ性能が向上します</li><li><strong>データの管理</strong> - 過去の期間のパーティションを必要に応じて簡単にアーカイブできます</li><li><strong>クエリの効率性</strong> - 多くの分析クエリが日付範囲でフィルタリングされるため、パーティションプルーニングが効果的に機能します</li><li><strong>データの均等分散</strong> - 日付による分割は、一般的にデータを比較的均等に分散させます</li></ul><p>他のカラムが適さない理由：</p><ul><li><strong><code>user_id</code></strong> - 高カーディナリティで、特定のユーザーのデータが継続的に蓄積され、パーティションサイズが不均等になる</li><li><strong><code>activity_type</code></strong> - 低カーディナリティで、少数の大きなパーティションになりがち</li><li><strong><code>activity_time</code></strong> - TIMESTAMP型は粒度が細かすぎて、多数の小さなパーティションを生成する可能性がある</li></ul><p>日付ベースのパーティション分割は、時系列データの管理において業界のベストプラクティスであり、特にログデータやアクティビティデータに適しています。</p>",
    "id": 13,
    "question": "データエンジニアが、ウェブサイトのユーザーアクティビティを保存するためのDelta Lakeテーブルを作成したいと考えています。テーブルは以下のスキーマを持ちます：\nuser_id LONG, page STRING, activity_type LONG, ip_address STRING, activity_time TIMESTAMP, activity_date DATE\n\n上記のスキーマに基づいて、Delta Tableのパーティション分割に適したカラムはどれですか？",
    "summary": "ユーザーアクティビティのような時系列データでは、継続的なデータ蓄積とクエリ効率を考慮してactivity_dateカラムでのパーティション分割が最適です。",
    "tags": "コストとパフォーマンスの最適化"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "3分オフセットされた、重複しない10分間隔でサーバーごとにメトリクスを計算する"
      },
      {
        "is_correct": false,
        "text": "10分オフセットされた、重複しない3分間隔でサーバーごとにメトリクスを計算する"
      },
      {
        "is_correct": false,
        "text": "10分オフセットで、10分ごとにスライドする3分間隔でサーバーごとにメトリクスを計算する"
      },
      {
        "is_correct": false,
        "text": "10分オフセットで、3分ごとにスライドする10分間隔でサーバーごとにメトリクスを計算する"
      }
    ],
    "explanation": "<p>Spark SQLの<strong>window関数</strong>のシグネチャは以下の通りです：</p><p><code>window(time_column, window_size, slide_interval, starting_offset)</code></p><ul><li><strong>window_size</strong> - 各ウィンドウの継続時間</li><li><strong>slide_interval（ステップとも呼ばれる）</strong> - 新しいウィンドウが開始される間隔</li><li><strong>starting_offset</strong> - すべてのウィンドウを時間軸上で前後にシフトする</li></ul><p>この問題では、関数は以下のように使用されています：</p><p><code>window(event_time, '10 minutes', '10 minutes', '3 minutes')</code></p><ul><li><strong>window_size = '10 minutes'</strong> → 各ウィンドウは10分間継続</li><li><strong>slide_interval = '10 minutes'</strong> → ウィンドウは10分ごとにスライド（重複なし）</li><li><strong>starting_offset = '3 minutes'</strong> → ウィンドウは自然な配置から3分遅れて開始</li></ul><p>つまり、このクエリは各サーバーに対して<strong>3分オフセットされた10分間のウィンドウ</strong>を計算し、各ウィンドウ内でCPU使用率のMINとMAXを集約しています。</p><p>具体例：</p><ul><li>通常のウィンドウ：00:00-00:10、00:10-00:20、00:20-00:30...</li><li>3分オフセット後：00:03-00:13、00:13-00:23、00:23-00:33...</li></ul><p>この設定により、チームはサーバーの異常なCPU使用率のスパイクや低下を検出し、必要に応じてアラートをトリガーすることができます。</p>",
    "id": 14,
    "question": "大手クラウドサービス企業のデータエンジニアリングチームは、数百台のサーバーの高可用性とパフォーマンスを確保する責任を負っています。潜在的な問題を示す可能性があるCPU使用率の異常なスパイクや低下を事前に検出するため、チームはサーバーCPU使用量を分析することにしました。各サーバーについて、事前定義された間隔での最小・最大CPU使用量を取得し、高使用率または低使用率のパターンを迅速に特定し、必要に応じてアラートをトリガーできるようにしたいと考えています。\n\nチームは以下のクエリを作成しました：\n\nSELECT\n    server_id,\n    window.start AS window_start,\n    window.end AS window_end,\n    MIN(cpu_usage) AS min_cpu,\n    MAX(cpu_usage) AS max_cpu\nFROM server_metrics\nGROUP BY server_id,\n         window(event_time, '10 minutes', '10 minutes', '3 minutes')\nORDER BY server_id,\n         window_start;\n\nデータエンジニアリングチームの目標との関連で、このクエリの主要な目的は何ですか？",
    "summary": "Spark SQLのwindow関数は、window_size、slide_interval、starting_offsetの3つのパラメータで時間窓を定義し、この例では3分オフセットされた10分間の非重複ウィンドウでメトリクスを集約します。",
    "tags": "モニタリングとアラート"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "SEQUENCE BY (transaction_timestamp, version_number)"
      },
      {
        "is_correct": false,
        "text": "ORDER BY STRUCT (transaction_timestamp, version_number)"
      },
      {
        "is_correct": true,
        "text": "SEQUENCE BY STRUCT (transaction_timestamp, version_number)"
      },
      {
        "is_correct": false,
        "text": "ORDER BY transaction_timestamp, version_number"
      }
    ],
    "explanation": "<p>Lakeflow Declarative Pipelinesでは、<strong><code>SEQUENCE BY</code></strong>を使用してCDCストリームの処理順序を定義し、<strong><code>STRUCT</code></strong>を使用することで複数のカラムの複合キーを指定できます。</p><p><strong>SEQUENCE BY STRUCT</strong>の機能：</p><ul><li><strong>複合キーのサポート</strong> - 複数のカラムを組み合わせて順序を定義</li><li><strong>遅延データの適切な処理</strong> - 遅れて到着するデータを正しい順序で処理</li><li><strong>優先度付きソート</strong> - 最初にtransaction_timestamp、同値の場合はversion_numberでソート</li></ul><p>この例での処理順序：</p><ol><li><strong>transaction_timestamp</strong>で最初にソート</li><li>同じtimestampの場合、<strong>version_number</strong>でセカンダリソート</li><li>これにより、遅延データや重複データを正しい順序で処理</li></ol><p>他のオプションが適さない理由：</p><ul><li><strong><code>SEQUENCE BY (transaction_timestamp, version_number)</code></strong> - STRUCTなしでは複合キーとして機能しない</li><li><strong><code>ORDER BY STRUCT (...)</code></strong> - ORDER BYはCDC処理のシーケンシングに使用されない</li><li><strong><code>ORDER BY transaction_timestamp, version_number</code></strong> - 通常のSQL構文であり、LakeflowのCDCシーケンシングではない</li></ul><p><strong>注意：</strong> Databricksは最近、このソリューションをオープンソース化し、Spark Declarative Pipelines（SDP）としてApache Sparkエコシステムに統合しています。</p>",
    "id": 15,
    "question": "データエンジニアがLakeflow Declarative PipelinesのAUTO CDC APIを使用して、以下のCDCデータ処理を設定しています：\n\nCREATE FLOW cdc_flow AS AUTO CDC INTO silver_transactions\nFROM stream(bronze_transactions)\nKEYS (transaction_id)\n_________________________\nCOLUMNS *\n\nエンジニアは、ソースレコードの処理順序を定義し、複数のカラムの複合キーを使用して遅延到着データを処理したいと考えています。最初にtransaction_timestampでソートし、同値の場合はversion_numberでソートしたいと考えています。\n\nこの要件を満たすために空白を正しく埋めるオプションはどれですか？",
    "summary": "Lakeflow Declarative PipelinesでCDCストリームの処理順序を定義するには、SEQUENCE BY STRUCTを使用して複数カラムの複合キーを指定します。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "spark.readStreamを使用してinventory_updatesテーブルを直接消費し、新しい更新を下流テーブルに増分的に伝播する"
      },
      {
        "is_correct": true,
        "text": "spark.readStreamを使用してinventory_updatesテーブルのCDFを消費し、AUTO CDC APIを使用して変更を下流テーブルに適用する"
      },
      {
        "is_correct": false,
        "text": "spark.readを使用してinventory_updatesテーブルのCDFを消費し、MERGE INTOを使用して変更を下流テーブルにマージする"
      },
      {
        "is_correct": false,
        "text": "spark.readStreamを使用してskipChangeCommitsでinventory_updatesテーブルを消費し、新しく追加されたデータを下流テーブルに増分的に伝播する"
      }
    ],
    "explanation": "<p><code>inventory_updates</code>テーブルには更新や削除が含まれているため、標準的なストリーミングテーブルのappend-only要件を満たしません。このため、ベーステーブルから直接ストリームしたり、単に変更コミットをスキップしたりすることはできません。</p><p><strong>正しいアプローチ</strong>：Change Data Feed（CDF）が有効になっているため、<code>spark.readStream</code>を使用して、挿入、更新、削除を含むすべての在庫変更をCDF出力から消費し、<strong>AUTO CDC API</strong>（以前はAPPLY CHANGES APIと呼ばれていた）を使用して下流に適用します。</p><p><strong>CDFからのデータ読み取り方法</strong>：</p><pre><code>(spark.readStream\n      .option(\"readChangeFeed\", \"true\")\n      .table(\"inventory_updates\")\n)</code></pre><p>テーブルの変更データフィードを読み取るためには、ストリーム読み取りを設定する際に<code>readChangeFeed</code>オプションを<code>true</code>に設定する必要があります。</p><p><strong>他の選択肢が不適切な理由</strong>：</p><ul><li><strong><code>spark.read</code>の使用</strong> - バッチ処理であり増分処理ではないため、毎回完全なテーブルリフレッシュが必要になる</li><li><strong>MERGE INTOコマンド</strong> - Lakeflow Declarative Pipelinesではサポートされておらず、増分変更伝播には適さない</li><li><strong>ベーステーブルからの直接ストリーム</strong> - 更新や削除が含まれるためappend-only制約に違反</li><li><strong>skipChangeCommits</strong> - 変更コミットをスキップするため、更新や削除を正しく処理できない</li></ul>",
    "id": 16,
    "question": "サプライチェーン企業のデータエンジニアリングチームは、Lakeflow Declarative Pipelinesを使用して在庫データを管理しています。チームはChange Data Feed（CDF）が有効になったストリーミングテーブル「inventory_updates」を維持しています。このテーブルは製品在庫レベルのリアルタイム変更をキャプチャし、product_id、quantity、update_timestampのカラムを持ちます。\n\nチームは、inventory_updatesテーブルから下流層にすべての在庫変更を増分的に伝播する必要があります。\n\nこの要件を正しく満たす実装アプローチはどれですか？",
    "summary": "CDFが有効なテーブルからの増分変更伝播には、spark.readStreamでCDFを消費し、AUTO CDC APIで下流に適用することが正しいアプローチです。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "誤り、新しいテーブルやビューにはSELECT権限を個別に付与する必要がある"
      },
      {
        "is_correct": true,
        "text": "正しい、カタログレベルでの権限付与は、そのカタログ内の現在および将来のオブジェクトに適用されるため"
      },
      {
        "is_correct": false,
        "text": "正しい、ただしビューのみに適用され、テーブルには適用されない"
      },
      {
        "is_correct": false,
        "text": "正しい、ただしテーブルのみに適用され、ビューには適用されない"
      }
    ],
    "explanation": "<p><strong>Unity Catalog継承モデル</strong>では、ユーザーにカタログまたはスキーマ上のSELECT権限を付与すると、そのカタログまたはスキーマ内のすべての現在および将来のテーブルとビューに対してSELECT権限が自動的に付与されます。</p><p>Unity Catalogの権限継承の特徴：</p><ul><li><strong>階層構造</strong> - カタログ > スキーマ > テーブル/ビューの階層で権限が継承される</li><li><strong>現在のオブジェクト</strong> - 権限付与時点で存在するすべてのテーブルとビューに適用</li><li><strong>将来のオブジェクト</strong> - 将来作成されるすべてのテーブルとビューにも自動的に適用</li><li><strong>包括的な適用</strong> - テーブルとビューの両方に同様に適用される</li></ul><p>この継承モデルの利点：</p><ul><li><strong>管理効率の向上</strong> - 個別のテーブルやビューごとに権限を設定する必要がない</li><li><strong>一貫性の確保</strong> - 新しいオブジェクトが作成されても権限設定を忘れるリスクがない</li><li><strong>スケーラビリティ</strong> - 大量のテーブルやビューを持つ環境でも効率的に管理可能</li><li><strong>セキュリティの維持</strong> - 権限の付与漏れを防ぎ、一貫したアクセス制御を実現</li></ul><p>したがって、データエンジニアの主張は正しく、HRカタログにSELECT権限を付与することで、来月追加される新しいテーブルやビューに対しても自動的にアクセス権限が付与されます。</p>",
    "id": 17,
    "question": "データエンジニアが、HRカタログにレポーティングチームへのSELECT権限を付与すれば、来月そのカタログに追加される新しいテーブルやビューに対しても自動的にSELECTアクセス権を持つことになると主張しています。エンジニアは、各新しいテーブルやビューに個別にアクセス権を付与する必要がないため、このアプローチは時間を節約できると論じています。\nこの主張の正確性はどの程度ですか？",
    "summary": "Unity Catalogの継承モデルでは、カタログレベルでのSELECT権限付与により、現在および将来のすべてのテーブルとビューに自動的に権限が適用されます。",
    "tags": "セキュリティとコンプライアンス"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "多数のタスクが空またはほぼ空のパーティションで動作している"
      },
      {
        "is_correct": false,
        "text": "すべてのタスクが均等なデータ量を持つパーティションで動作している"
      },
      {
        "is_correct": true,
        "text": "多数のタスクがデータ量が偏ったより大きなパーティションで動作している"
      },
      {
        "is_correct": false,
        "text": "すべてのタスクがデータ量が偏ったより大きなパーティションで動作している"
      }
    ],
    "explanation": "<p>通常、タスク間で計算が完全に対称である場合、すべての統計値は50パーセンタイル値の近くに密集しているのが見られます。</p><p>このケースでは、<strong>「Max」メトリクスのタスクは75パーセンタイルのタスクと比較して、10倍の時間を要し、約5倍のデータを読み取っています</strong>。これは、データ量が偏ったより大きなパーティションで動作する多数の「遅れタスク（straggler tasks）」の存在を示唆しています。</p><p><strong>データスキュー（偏り）の典型的な兆候</strong>：</p><ul><li><strong>大きなパフォーマンス差</strong> - 最大値と中央値や上位パーセンタイルの大きな乱離</li><li><strong>実行時間の不均衡</strong> - 一部のタスクが他のタスクよりも大幅に遅い</li><li><strong>データ読み取り量の差</strong> - 特定のタスクが他のタスクよりも大量のデータを処理</li><li><strong>リソース使用量の不均衡</strong> - 一部のノードに負荷が集中</li></ul><p><strong>対応策</strong>：</p><ul><li>パーティションキーの見直し</li><li>パーティション数の調整</li><li>データの再分散</li><li>Adaptive Query Execution (AQE)の活用</li></ul><p>このパターンはSparkアプリケーションのパフォーマンスボトルネックを示しており、特に大規模データ処理では最適化が重要です。</p>",
    "id": 18,
    "question": "データエンジニアがSpark UIを介してSparkジョブを分析しています。特定のステージで完了した27個のタスクに関して、以下のサマリメトリクスがあります。\n\n上記の統計からデータエンジニアが導き出せる結論はどれですか？",
    "summary": "Spark UIのメトリクスで最大値が中央値や上位パーセンタイルよりも大幅に大きい場合、データスキューによる遅れタスクの存在を示します。",
    "tags": "デプロイとデバッグ"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "Query Profileでは、クエリ内の問題をインタラクティブに修正するために、クエリプランの特定の部分を直接編集して再実行できる"
      },
      {
        "is_correct": false,
        "text": "Query Profileは各クエリ演算子と関連メトリクス（実行時間、メモリ使用量、処理行数など）を可視化する"
      },
      {
        "is_correct": false,
        "text": "Query Profileは爆発的なjoinやフルテーブルスキャンなどの一般的なSQLパフォーマンス問題の発見に役立つ"
      },
      {
        "is_correct": false,
        "text": "Query Profileはクエリ実行の最も遅い部分を特定し、クエリの修正の影響を評価するのに役立つ"
      }
    ],
    "explanation": "<p>Databricksの<strong>Query Profile</strong>は、クエリ演算子、実行メトリクス、パフォーマンスボトルネックを表示する診断および可視化ツールで、ユーザーがクエリを理解し最適化するのに役立ちます。しかし、<strong>クエリプランの部分を直接編集や実行することはできません</strong>。</p><p><strong>Query Profileの主な機能</strong>：</p><ul><li><strong>クエリ演算子の可視化</strong> - クエリの各ステップをグラフィカルに表示</li><li><strong>メトリクスの表示</strong> - 実行時間、メモリ使用量、処理行数などの詳細情報</li><li><strong>パフォーマンス問題の発見</strong> - 爆発的なjoin、フルテーブルスキャンなどの問題特定</li><li><strong>ボトルネックの特定</strong> - クエリ実行の最も遅い部分を明確に表示</li><li><strong>最適化の影響評価</strong> - クエリ修正の効果を評価するためのベースライン提供</li></ul><p><strong>Query Profileでできないこと</strong>：</p><ul><li><strong>直接編集</strong> - クエリプランの部分を直接変更することはできない</li><li><strong>インタラクティブな修正</strong> - リアルタイムでのクエリプランの変更や再実行はサポートされていない</li><li><strong>部分的な再実行</strong> - クエリの特定の部分のみを単独で実行することはできない</li></ul><p>Query Profileはあくまで<strong>診断ツール</strong>であり、ユーザーはこの情報を基に別途SQLクエリを修正して再実行する必要があります。</p>",
    "id": 19,
    "question": "Databricks SQLのQuery Profileについての以下の記述のうち、正しくないものはどれですか？",
    "summary": "Databricks SQLのQuery Profileはクエリの診断と可視化を行うツールであり、クエリプランの直接編集や部分的な再実行はできません。",
    "tags": "デプロイとデバッグ"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "item_idフィールドが一意でない。dropDuplicates関数を使用してitem_idでレコードを重複削除する必要がある"
      },
      {
        "is_correct": false,
        "text": "クエリの出力を表示できない。spark.writeStreamを使用してクエリ結果を永続化する必要がある"
      },
      {
        "is_correct": false,
        "text": "ウォーターマーキングが不足している。時間ウィンドウの状態情報を追跡できるようにするために追加する必要がある"
      },
      {
        "is_correct": true,
        "text": "非時間ベースのウィンドウ操作はストリーミングDataFrameではサポートされていない。代わりにforeachBatchロジック内で実装する必要がある"
      }
    ],
    "explanation": "<p>ストリーミングDataFrameに対してこのようなウィンドウ操作を呼び出そうとすると、<strong>\"Non-time-based window operations are not supported on streaming DataFrames\"</strong>（非時間ベースのウィンドウ操作はストリーミングDataFrameではサポートされていません）というエラーが発生します。</p><p><strong>問題の詳細</strong>:</p><ul><li><strong>制限の理由</strong> - ストリーミング処理では無限のデータストリームを扱うため、任意のパーティション（この場合item_id）でのランキングやウィンドウ関数は状態管理が複雑になる</li><li><strong>時間ベースvs非時間ベース</strong> - 時間ベースのウィンドウ（例：過去1時間のデータ）は自然に境界を持つが、item_idベースのパーティショニングは無制限に状態を蓄積する可能性がある</li><li><strong>メモリとパフォーマンス</strong> - 非時間ベースのウィンドウ操作は潜在的に無制限の状態を保持する必要があり、メモリ不足やパフォーマンス低下を引き起こす可能性がある</li></ul><p><strong>解決策 - foreachBatchの使用</strong>:</p><pre><code>def process_batch(batch_df, batch_id):\n    window = Window.partitionBy(\"item_id\").orderBy(F.col(\"item_time\").desc())\n    \n    result_df = (batch_df\n                .withColumn(\"rank\", F.rank().over(window))\n                .filter(\"rank == 1\")\n                .drop(\"rank\")\n                )\n    \n    # バッチごとの結果を処理\n    result_df.show()\n    \nquery = (spark.readStream\n             .table(\"sales\")\n             .writeStream\n             .foreachBatch(process_batch)\n             .start()\n        )</code></pre><p><strong>foreachBatchの利点</strong>:</p><ul><li><strong>バッチ処理として実行</strong> - 各マイクロバッチ内で通常のDataFrame操作を使用可能</li><li><strong>柔軟性</strong> - 複雑なウィンドウ操作や集約を含む任意のDataFrame操作を実行可能</li><li><strong>状態管理</strong> - 各バッチごとに独立して処理されるため、無制限の状態蓄積を回避</li></ul><p>この制限は、ストリーミング処理の性質と効率性を保つためのSpark Structured Streamingの重要な設計上の制約です。</p>",
    "id": 20,
    "question": "ジュニアデータエンジニアが、前回のテーブル更新以降に'sales'テーブルに追加された各アイテムの最新エントリを取得するために、以下のコードブロックをテストしています。\n\nfrom pyspark.sql import functions as F\nfrom pyspark.sql.window import Window\n \nwindow = Window.partitionBy(\"item_id\").orderBy(F.col(\"item_time\").desc())\n \nranked_df = (spark.readStream\n                    .table(\"sales\")\n                    .withColumn(\"rank\", F.rank().over(window))\n                    .filter(\"rank == 1\")\n                    .drop(\"rank\")\n            )\n \ndisplay(ranked_df)\n\nしかし、このコマンドは実行時に失敗します。\nこの失敗の原因を説明する文はどれですか？",
    "summary": "ストリーミングDataFrameでは非時間ベースのウィンドウ操作（パーティションやランキング）がサポートされておらず、foreachBatchロジック内で実装する必要があります。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "MERGE INTOを使用して、各customer_idの最新エントリをテーブルにupsertする"
      },
      {
        "is_correct": false,
        "text": "ターゲットテーブルでDelta LakeのChange Data Feed (CDF)を有効にして、受信したCDCフィードを自動的にマージする"
      },
      {
        "is_correct": false,
        "text": "dropDuplicates関数を使用してcustomer_idで重複を削除し、重複レコードをテーブルにマージする"
      },
      {
        "is_correct": false,
        "text": "update_timeで操作の適用順序を指定するためにSEQUENCE BY句を伴うMERGE INTOを使用する"
      }
    ],
    "explanation": "<p><strong>MERGE INTO</strong>コマンドは、ソーステーブル、ビュー、またはDataFrameからターゲットのDeltaテーブルにデータをupsertすることを可能にします。Delta Lakeはマージ操作での挿入、更新、削除をサポートしています。</p><p><strong>CDCデータ処理におけるMERGE INTOの使用方法</strong>：</p><ul><li><strong>最新データの特定</strong> - 同一バッチ内で同じcustomer_idに対して複数の変更がある場合、update_timeでソートして最新のレコードを選択</li><li><strong>条件付きマージ</strong> - customer_idでマッチングし、メタデータに基づいて挿入、更新、削除を実行</li><li><strong>アトミック操作</strong> - 一回のMERGE操作ですべての変更を一貫して適用</li></ul><p><strong>他の選択肢が適さない理由</strong>：</p><ul><li><strong>CDFの有効化</strong> - CDFは変更を記録する機能であり、CDCフィードを自動マージする機能はない</li><li><strong>dropDuplicates</strong> - 単純な重複削除では、CDCメタデータや時間順序を考慮した適切な処理ができない</li><li><strong>SEQUENCE BYとMERGE INTO</strong> - SEQUENCE BY句はAUTO CDCやAPPLY CHANGES INTOでのみ使用可能で、MERGE文では使用できず、使用すると構文エラーが発生する</li></ul><p><strong>MERGE INTOの基本構文例</strong>：</p><pre><code>MERGE INTO target_table\nUSING source_view\nON target_table.customer_id = source_view.customer_id\nWHEN MATCHED AND source_view.operation = 'DELETE' THEN DELETE\nWHEN MATCHED THEN UPDATE SET *\nWHEN NOT MATCHED AND source_view.operation != 'DELETE' THEN INSERT *</code></pre><p>このアプローチにより、CDCデータの複雑な操作（挿入、更新、削除）を適切な順序でターゲットテーブルに反映できます。</p>",
    "id": 21,
    "question": "データエンジニアリングチームは、ソースシステムから顧客データを変更データキャプチャ（CDC）フィードとして受信するパイプラインを構築したいと考えています。ソースでログされたCDCイベントには、メタデータ情報と共にレコードのデータが含まれています。このメタデータは、指定されたレコードが挿入、更新、または削除されたかを示しています。さらに、変更が発生した順序を示すupdate_timeフィールドによって識別されるタイムスタンプカラムもあります。各レコードはcustomer_idフィールドで識別される主キーを持っています。\n\n同じバッチ内で、同じ顧客に対して異なるupdate_timeを持つ複数の変更が受信される可能性があります。チームは、ターゲットのDelta Lakeテーブルに各顧客の最新情報のみを保存したいと考えています。\n\nこれらの要件を満たすソリューションは次のうちどれですか？",
    "summary": "CDCデータの処理では、MERGE INTOコマンドを使用して各顧客の最新エントリをupsertすることで、挿入、更新、削除を適切に処理できます。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "マジックフィックスボタンを使用して変更を自動的にマージする"
      },
      {
        "is_correct": true,
        "text": "すべての受信変更または現在の変更を受け入れる"
      },
      {
        "is_correct": false,
        "text": "変更を新しいブランチに移動する"
      },
      {
        "is_correct": false,
        "text": "競合するブランチを削除する"
      },
      {
        "is_correct": true,
        "text": "変更を手動で編集し、競合マーカーを削除する"
      }
    ],
    "explanation": "<p>マージ競合は、2人以上のGitユーザーがファイルの同じ行への変更を共通ブランチにマージしようとし、Gitが適用すべき「正しい」変更を選択できない場合に発生します。マージ競合は、ユーザーが未コミットの変更があるブランチに他のブランチからの変更をプルまたはマージしようとする場合にも発生する可能性があります。</p><p>Git folderのUIには、マージ競合を解決するための2つのオプションがあります：</p><ul><li><strong>すべての受信変更または現在の変更を受け入れる</strong><br>現在または受信のすべての変更のみを受け入れたいことが分かっている場合、<code>Keep all current changes</code>または<code>Take all incoming changes</code>を選択できます。これにより、手動編集なしで迅速な解決が可能になります。</li><li><strong>変更を手動で編集し、競合マーカーを削除する</strong><br>競合があるファイルの内容を直接編集することで競合を解決できます。保持したいコード行を選択し、Gitマージ競合マーカー（<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>、<code>=======</code>、<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>）を含むその他すべてを削除します。この手動競合解決により、両方のバージョンから望ましい行を決定できます。</li></ul><p>マージ競合解決の一般的な手順：</p><ol><li><strong>競合の特定</strong> - Gitが競合マーカーでマークしたファイルを確認</li><li><strong>内容の確認</strong> - 現在のブランチと受信ブランチの変更内容を比較</li><li><strong>解決方法の選択</strong> - 全体的な受け入れまたは手動編集のいずれかを選択</li><li><strong>テストとコミット</strong> - 解決後のコードをテストし、変更をコミット</li></ol><p>これらのオプションにより、開発者は状況に応じて効率的かつ正確にマージ競合を解決できます。</p>",
    "id": 22,
    "question": "データエンジニアがGitフォルダーでフィーチャーブランチで作業し、プロジェクトリポジトリのメインブランチにプルリクエストを作成しようとしています。しかし、Gitがフィーチャーブランチとメインブランチ間で競合する変更を検出し、マージ競合が発生しました。\n\nGitフォルダーUIがマージ競合を解決するために提供する2つのオプションはどれですか？\n\n2つの答えを選択してください：",
    "summary": "DatabricksのGit folder UIでは、マージ競合の解決に「すべての変更を受け入れる」オプションと「手動編集で競合マーカーを削除する」オプションの2つが提供されます。",
    "tags": "デプロイとデバッグ"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "df = (spark.readStream\n            .format(\"cloudFiles\")\n            .option(\"cloudFiles.format\", \"json\")\n            .option(\"badRecordsPath\", \"s3://project/quarantine\")\n            .schema(\"id int, value double\")\n            .load(\"s3://project/source/\"))"
      },
      {
        "is_correct": false,
        "text": "df = (spark.readStream\n            .format(\"cloudFiles\")\n            .option(\"cloudFiles.format\", \"json\")\n            .schema(\"id int, value double\")\n            .rescue(\"s3://project/quarantine\")\n            .load(\"s3://project/source/\"))"
      },
      {
        "is_correct": false,
        "text": "df = (spark.readStream\n            .format(\"cloudFiles\")\n            .option(\"cloudFiles.format\", \"json\")\n            .option(\"cloudFiles.schemaEvolutionMode\", \"rescue\", \"s3://project/quarantine\")\n            .schema(\"id int, value double\")\n            .load(\"s3://project/source/\"))"
      },
      {
        "is_correct": false,
        "text": "df = (spark.readStream\n            .format(\"cloudFiles\")\n            .option(\"cloudFiles.format\", \"json\")\n            .option(\"cloudFiles.schemaLocation\", \"s3://project/schema\")\n            .option(\"pathGlobFilter\", \"*.json\", \"s3://project/quarantine\")\n            .load(\"s3://project/source/\"))"
      }
    ],
    "explanation": "<p><strong><code>badRecordsPath</code></strong>オプションは、Auto Loaderで不正レコードを処理するための標準設定です：</p><p><strong>1. 不正な形式のファイルの処理（構文エラーなど）</strong></p><p><code>badRecordsPath</code>オプションは、JSONフォーマット（およびCSVなどの他のフォーマット）のSpark標準です。設定すると、不正な構文（非JSONコンテンツ、括弧の欠落、余分なカンマなど）のためにパースできないファイルは、指定されたパスに移動され、不正な形式のJSONを除外する要件を満たします。</p><p><strong>2. スキーマ不一致の処理（データ型エラー、フィールドの欠落など）</strong></p><p><code>badRecordsPath</code>が設定されている場合、パーシング中にエラーを引き起こすレコード（型キャストの失敗などのスキーマ不一致エラーを含む）は、ストリームをドロップしたり失敗させたりする代わりに、指定された隔離場所に自動的に書き込まれます。</p><p><strong>badRecordsPathの主な機能</strong>：</p><ul><li><strong>エラーハンドリング</strong> - 構文エラーやスキーマ不一致を自動的に処理</li><li><strong>データ品質の維持</strong> - 問題のあるデータをメインパイプラインから除外</li><li><strong>トラブルシューティング</strong> - 問題のあるファイルを別途保存して後で検査可能</li><li><strong>ストリームの継続性</strong> - エラーが原因でストリームが停止することを防ぐ</li></ul><p><strong>他のオプションが適さない理由</strong>：</p><ul><li><strong><code>rescue()</code></strong> - 存在しないメソッド</li><li><strong><code>cloudFiles.schemaEvolutionMode</code></strong> - スキーマ進化の設定であり、不正レコードの処理とは異なる</li><li><strong><code>pathGlobFilter</code></strong> - ファイルフィルタリングの設定であり、エラーハンドリングとは関係ない</li></ul><p>この設定により、Auto Loaderは堅牢で信頼性の高いデータ取り込みパイプラインを実現できます。</p>",
    "id": 23,
    "question": "データエンジニアがDatabricks Autoloaderを使用して、S3バケットからターゲットのDeltaテーブルにJSONファイルを取り込むストリーミングパイプラインを構築しています。エンジニアは、パイプラインが問題のあるファイルを自動的に処理し、後で検査できるように別途保存することを望んでいます。具体的には、エンジニアは以下を実現したいと考えています：\n\n不正な形式のJSONファイルを除外する。\n期待されるスキーマと一致しないファイルを除外する。\n\n指定された要件を満たすコードブロックは次のうちどれですか？",
    "summary": "Databricks Autoloaderで問題のあるファイルを処理するには、badRecordsPathオプションを使用して不正なJSONやスキーマ不一致のファイルを隔離場所に移動します。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "df.mapInPandas(\"store_id\", calculate_sales, schema)"
      },
      {
        "is_correct": false,
        "text": "pandas_udf(calculate_sales, returnType=Series)"
      },
      {
        "is_correct": true,
        "text": "df.groupBy(\"store_id\").applyInPandas(calculate_sales, schema)"
      },
      {
        "is_correct": false,
        "text": "df.selectExpr(\"calculate_sales(store_id)\")"
      }
    ],
    "explanation": "<p><strong><code>applyInPandas</code></strong>関数は、<code>groupBy</code>操作の後に使用され、まさにこのシナリオのために設計されています：Spark DataFrame内の各データグループに対して、Pandas DataFrameを受け取り返すPython関数を適用しながら、各グループの処理ロジックにローカルな状態変数を保持することができます。</p><p><strong>applyInPandasの主な特徴</strong>：</p><ul><li><strong>グループ処理</strong> - 各store_idグループごとに関数を適用</li><li><strong>Pandasの活用</strong> - ローリングウィンドウなどのPandasの便利な機能を使用可能</li><li><strong>Sparkの効率性を保持</strong> - 分散処理のメリットを保持しながらグループ単位でPandas処理を実行</li><li><strong>状態管理</strong> - 7日間のローリング平均など、グループ内での継続的な計算に必要な状態を保持</li></ul><p><strong>使用例</strong>：</p><pre><code>def calculate_sales(pandas_df):\n    # pandas_dfは各store_idグループのデータ\n    pandas_df = pandas_df.sort_values('date')\n    pandas_df['rolling_avg'] = pandas_df['sales_amount'].rolling(window=7).mean()\n    return pandas_df\n\n# スキーマ定義\nschema = \"store_id int, date date, sales_amount double, rolling_avg double\"\n\n# 適用\nresult = df.groupBy(\"store_id\").applyInPandas(calculate_sales, schema)</code></pre><p><strong>他のオプションが適さない理由</strong>：</p><ul><li><strong><code>mapInPandas</code></strong> - グループ化の機能がなく、全データを一度に処理する</li><li><strong><code>pandas_udf</code></strong> - UDFとして登録する方法であり、直接的なグループ処理ではない</li><li><strong><code>selectExpr</code></strong> - SQL式での関数呼び出しであり、Pandas DataFrameを扱うカスタム関数には適さない</li></ul><p>このアプローチにより、各店舗ごとに7日間のローリング平均を効率的に計算でき、Sparkの分散処理のメリットとPandasの使いやさを両立させることができます。</p>",
    "id": 24,
    "question": "小売企業のデータエンジニアが、数百の店舗にわたる日々の売上トレンドを分析するタスクを任されています。生のPySpark DataFrameにはstore_id、date、sales_amountのカラムが含まれています。エンジニアは、便利なローリングウィンドウ操作のためにPandasを活用して、店舗ごとの7日間ローリング平均売上を計算したいと考えています。このタスクを達成するために、エンジニアは「calculate_sales」というカスタムPython関数を作成しました。この関数の入力と出力はどちらもpandas.DataFrameです。\n\nSparkの効率性を保ちながら、store_idの各グループにこの関数を適用できるのは次のうちどれですか？",
    "summary": "Sparkでグループ化したDataFrameに対してPandas関数を適用するには、groupBy().applyInPandas()を使用して効率性を保ちながらグループ単位で処理します。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "CREATE FUNCTION us_filter(region STRING)\nRETURN CASE\nWHEN IS_ACCOUNT_GROUP_MEMBER('finance_team') THEN region='US'\nELSE true END"
      },
      {
        "is_correct": true,
        "text": "CREATE FUNCTION us_filter(region STRING)\nRETURN IF(IS_ACCOUNT_GROUP_MEMBER('finance_team'), true, region='US');"
      },
      {
        "is_correct": false,
        "text": "CREATE FUNCTION us_filter(region STRING)\nRETURN IF(IS_ACCOUNT_GROUP_MEMBER('finance_team'), region='US', true);"
      },
      {
        "is_correct": false,
        "text": "CREATE FUNCTION us_filter(region STRING)\nRETURN CASE\nWHEN IS_ACCOUNT_GROUP_MEMBER('finance_team') THEN true\nELSE region END"
      }
    ],
    "explanation": "<p>正しいユーザー定義関数は以下の通りです：</p><pre><code>CREATE FUNCTION us_filter(region STRING)\nRETURN IF(IS_ACCOUNT_GROUP_MEMBER('finance_team'), true, region='US');</code></pre><p>この関数は、望ましい行レベルセキュリティロジックを適切に実装しています。まず、<code>IS_ACCOUNT_GROUP_MEMBER('finance_team')</code>を使用して現在のユーザーがfinance_teamグループに属しているかどうかを確認します。ユーザーがメンバーの場合、関数は<code>true</code>を返し、制限なしですべての取引レコードを表示できるようにします。財務チームの一部ではないその他のユーザーについては、関数はregion値が'US'と等しいかどうかを評価し、それにより米国の取引のみに可視性を制限します。</p><p><strong>関数の動作ロジック</strong>：</p><ul><li><strong>finance_teamメンバー</strong>：<code>IS_ACCOUNT_GROUP_MEMBER('finance_team')</code>が<code>true</code>を返す場合、関数は<code>true</code>を返し、すべてのレコードにアクセス可能</li><li><strong>その他のユーザー</strong>：<code>region='US'</code>の結果を返し、US地域のレコードのみにアクセス制限</li></ul><p><strong>他のオプションが適さない理由</strong>：</p><ul><li><strong>1番目</strong>：財務チームメンバーに対して<code>region='US'</code>を返し、その他のユーザーに<code>true</code>を返すため、逆のロジックになっている</li><li><strong>3番目</strong>：財務チームメンバーに対して<code>region='US'</code>を返し、その他のユーザーに<code>true</code>を返すため、逆のロジックになっている</li><li><strong>4番目</strong>：その他のユーザーに対して<code>region</code>値を返すため、フィルタリング機能を果たさない</li></ul><p><strong>行レベルセキュリティの適用</strong>：</p><p>この関数をテーブルに適用するためには、以下のようにROW FILTERを設定します：</p><pre><code>ALTER TABLE transactions SET ROW FILTER us_filter ON (region);</code></pre><p>これにより、ユーザーの権限に基づいて自動的にデータアクセスが制御されます。</p>",
    "id": 25,
    "question": "金融分析チームが、Unity Catalogで「transactions」と呼ばれるDelta Lakeテーブルを管理しています。このテーブルにはid、amount、region、account_managerのカラムがあります。彼らはこのテーブルに行フィルタリングを適用して、以下を実現したいと考えています：\n\n財務チームメンバーはすべての取引を表示でき、\nその他のユーザーは米国地域のレコードのみを表示できる。\n\nこれを達成するのに役立つユーザー定義関数は次のうちどれですか？",
    "summary": "Unity Catalogでの行レベルセキュリティは、IS_ACCOUNT_GROUP_MEMBER()関数とIF文を使用して、ユーザーグループに基づいた条件付きデータアクセス制御を実現します。",
    "tags": "セキュリティとコンプライアンス"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "特定されたレコードはcustomersテーブルとdelete_requestsテーブルの両方から削除されるが、VACUUMコマンドが実行されるまではテーブル履歴でアクセス可能である"
      },
      {
        "is_correct": false,
        "text": "特定されたレコードはcustomersテーブルから削除され、関連するデータファイルはテーブルディレクトリから完全に削除される"
      },
      {
        "is_correct": false,
        "text": "特定されたレコードはcustomersテーブルとdelete_requestsテーブルの両方から削除され、関連するデータファイルは両方のテーブルディレクトリから完全に削除される"
      },
      {
        "is_correct": true,
        "text": "特定されたレコードはcustomersテーブルから削除されるが、VACUUMコマンドが実行されるまではテーブル履歴でアクセス可能である"
      }
    ],
    "explanation": "<p>削除要求（忘れられる権利の要求としても知られる）は、ユーザーの名前やメールアドレスなど、個人識別情報（PII）を表すユーザーデータの削除を必要とします。</p><p><strong>Delta Lakeテーブルのタイムトラベル実装の仕組み</strong>により、削除された値は古いバージョンのデータにまだ存在しています。<strong>重要な点として、データの削除はテーブルディレクトリからデータファイルを削除するわけではありません</strong>。代わりに、削除されたレコードを除いた影響を受けるファイルのコピーを作成します。</p><p><strong>DELETE操作の動作</strong>：</p><ul><li><strong>論理削除</strong> - 指定された条件に合致するレコードが論理的に削除される</li><li><strong>ファイルの複製</strong> - 影響を受けるデータファイルから削除対象レコードを除いた新しいファイルが作成される</li><li><strong>古いファイルの保持</strong> - 元のファイルは削除されず、テーブル履歴として保持される</li><li><strong>メタデータの更新</strong> - テーブルのメタデータが更新され、新しいバージョンが作成される</li></ul><p><strong>完全な削除のプロセス</strong>：</p><ol><li><strong>DELETE文の実行</strong> - 論理的にレコードを削除</li><li><strong>VACUUMコマンドの実行</strong> - 物理的にファイルを削除して完全に削除を確定</li></ol><pre><code>-- 削除操作\nDELETE FROM customers WHERE customer_id IN (SELECT customer_id FROM delete_requests)\n\n-- 物理削除の確定\nVACUUM customers RETAIN 0 HOURS</code></pre><p><strong>GDPR（一般データ保護規則）への準拠</strong>：</p><ul><li><strong>忘れられる権利</strong> - ユーザーが自分の個人データの削除を要求する権利</li><li><strong>完全削除の必要性</strong> - PII情報は履歴からも完全に削除される必要がある</li><li><strong>VACUUMの重要性</strong> - 規制要件を満たすためには物理削除が必須</li></ul><p><strong>注意点</strong>：</p><ul><li>この問題では<code>delete_requests</code>テーブルは変更されない</li><li>削除されるのは<code>customers</code>テーブルのレコードのみ</li><li>タイムトラベル機能により、VACUUM実行前は履歴でアクセス可能</li></ul><p>したがって、これらの削除を完全に確定するには、<code>customers</code>テーブルに対してVACUUMコマンドを実行する必要があります。</p>",
    "id": 26,
    "question": "データエンジニアリングチームが、顧客の忘れられる権利の要求を処理するために以下のクエリを使用しています：\n\nDELETE FROM customers\nWHERE customer_id IN\n(SELECT customer_id FROM delete_requests)\n\nこのクエリの実行結果を説明する文はどれですか？",
    "summary": "Delta Lakeでの削除操作は論理削除であり、削除されたレコードはVACUUMコマンドが実行されるまでテーブル履歴に残り続け、完全な削除にはVACUUMが必要です。",
    "tags": "セキュリティとコンプライアンス"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "dbutils.notebook"
      },
      {
        "is_correct": false,
        "text": "dbutils.secrets"
      },
      {
        "is_correct": false,
        "text": "dbutils.library"
      },
      {
        "is_correct": true,
        "text": "dbutils.widgets"
      }
    ],
    "explanation": "<p><strong><code>dbutils.widgets</code></strong>を使用することで、ノートブックにパラメータを追加できます。</p><p><strong>使用例</strong>：'param1'という名前のパラメータを追加する場合</p><pre><code># パラメータの定義（デフォルト値付き）\ndbutils.widgets.text(\"param1\", \"default\")\n\n# パラメータ値の取得\nparam1 = dbutils.widgets.get(\"param1\")</code></pre><p><strong>Databricks Jobでのパラメータ渡し</strong>：</p><p>定義されたパラメータは、タスク設定のParametersセクションに追加することでDatabricks Jobから渡すことができます。</p><p><strong>dbutils.widgetsの主な機能</strong>：</p><ul><li><strong>パラメータの作成</strong>：<code>dbutils.widgets.text()</code>、<code>dbutils.widgets.dropdown()</code>など</li><li><strong>パラメータ値の取得</strong>：<code>dbutils.widgets.get()</code></li><li><strong>パラメータの削除</strong>：<code>dbutils.widgets.remove()</code>、<code>dbutils.widgets.removeAll()</code></li><li><strong>パラメータ一覧の表示</strong>：<code>dbutils.widgets.getAll()</code></li></ul><p><strong>他のdbutilsモジュールの用途</strong>：</p><ul><li><strong><code>dbutils.notebook</code></strong> - 他のノートブックの実行や結果の取得</li><li><strong><code>dbutils.secrets</code></strong> - Azure Key VaultやDatabricks Secretの管理</li><li><strong><code>dbutils.library</code></strong> - ライブラリのインストールや管理</li></ul><p><strong>実用的な使用例</strong>：</p><pre><code># 複数のパラメータを定義\ndbutils.widgets.text(\"source_path\", \"/default/path\")\ndbutils.widgets.text(\"target_table\", \"default_table\")\ndbutils.widgets.dropdown(\"environment\", \"prod\", [\"dev\", \"staging\", \"prod\"])\n\n# Jobから渡されたパラメータを取得\nsource_path = dbutils.widgets.get(\"source_path\")\ntarget_table = dbutils.widgets.get(\"target_table\")\nenvironment = dbutils.widgets.get(\"environment\")\n\n# 取得したパラメータを使用して処理を実行\ndf = spark.read.parquet(source_path)\ndf.write.saveAsTable(f\"{environment}.{target_table}\")</code></pre><p>この機能により、Databricks Jobで異なる環境や設定で同じノートブックを再利用でき、柔軟性と保守性を向上させることができます。</p>",
    "id": 27,
    "question": "データエンジニアがDatabricks Jobからノートブックに複数のパラメータを渡したいと考えています。エンジニアはすでにジョブの設定で各パラメータのキーと値を設定済みです。\n\nノートブック内で渡されたパラメータを読み取るためにデータエンジニアが使用できるユーティリティは次のうちどれですか？",
    "summary": "Databricks Jobからノートブックにパラメータを渡すには、dbutils.widgetsを使用してパラメータを定義・取得します。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "文字列「REDACTED」が出力される"
      },
      {
        "is_correct": false,
        "text": "パスワードの文字列値がプレーンテキストで出力される"
      },
      {
        "is_correct": false,
        "text": "エラーメッセージ「Secrets can not be printed」が表示される"
      },
      {
        "is_correct": false,
        "text": "ノートブックにインタラクティブな入力ボックスが表示される"
      }
    ],
    "explanation": "<p><strong>Databricks Secrets</strong>を使用することで、認証情報を安全に保存し、ノートブックやジョブで参照することができます。シークレットを標準出力バッファに誤って出力したり、変数代入時に値を表示したりすることを防ぐために、Databricksは<code>dbutils.secrets.get()</code>を使用して読み取られたシークレット値を編集（redact）します。</p><p><strong>シークレットの編集機能</strong>：</p><ul><li><strong>自動編集</strong> - ノートブックセルの出力でシークレット値が<code>[REDACTED]</code>文字列に置き換えられる</li><li><strong>セキュリティ保護</strong> - 機密情報の意図しない漏洩を防止</li><li><strong>ログ保護</strong> - コンソール出力やログファイルに機密情報が記録されることを防ぐ</li><li><strong>デバッグ時の安全性</strong> - 開発者がシークレットをprintでデバッグしようとしても実際の値は表示されない</li></ul><p><strong>シークレットの正しい使用方法</strong>：</p><pre><code># シークレットの取得（出力時にREDACTEDと表示）\ndb_password = dbutils.secrets.get(scope=\"dev\", key=\"database_password\")\n\n# シークレットを直接使用（実際の値が使用される）\njdbc_url = f\"jdbc:mysql://hostname:3306/database?user=username&password={db_password}\"\n\n# シークレットを使用した接続\ndf = spark.read \\\n  .format(\"jdbc\") \\\n  .option(\"url\", jdbc_url) \\\n  .option(\"dbtable\", \"table_name\") \\\n  .load()</code></pre><p><strong>重要なポイント</strong>：</p><ul><li>シークレット値は実際には正しく使用されるが、表示されるときは編集される</li><li><code>print()</code>、<code>display()</code>、ノートブックセルの出力などで<code>[REDACTED]</code>と表示</li><li>シークレットはscopeとkeyの組み合わせで管理される</li><li>アクセス制御により、許可されたユーザーのみがシークレットにアクセス可能</li></ul><p>この機能により、開発者は機密情報を安全に使用でき、セキュリティインシデントのリスクを大幅に減らすことができます。</p>",
    "id": 28,
    "question": "ノートブックの以下のコードブロックが与えられたとします。\n\ndb_password = dbutils.secrets.get(scope=\"dev\", key=\"database_password\")\n \nprint (db_password)\n\n上記のコードを実行したときに何が起こるかを説明する文はどれですか？",
    "summary": "Databricks Secretsでは、シークレット値をprintや表示しようとしたときにセキュリティ保護のために[REDACTED]という文字列に置き換えられます。",
    "tags": "セキュリティとコンプライアンス"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "SCD Type 0"
      },
      {
        "is_correct": false,
        "text": "SCD Type 2"
      },
      {
        "is_correct": false,
        "text": "Type 0とType 2 SCDの組み合わせ"
      },
      {
        "is_correct": true,
        "text": "SCD Type 1"
      }
    ],
    "explanation": "<p><strong>Type 1 SCDテーブル</strong>では、新しいデータが既存のデータを上書きします。したがって、既存のデータは他の場所に保存されていないため、失われます。</p><p><strong>SCD（Slowly Changing Dimension）タイプの概要</strong>：</p><ul><li><strong>Type 0</strong> - データの変更を一切許可しない（不変データ）</li><li><strong>Type 1</strong> - 新しいデータで既存データを上書き（履歴の保持なし）</li><li><strong>Type 2</strong> - 履歴データを保持し、新しいレコードとして追加</li></ul><p><strong>Type 1 SCDの特徴</strong>：</p><ul><li><strong>上書き更新</strong> - 既存のレコードの値が直接更新される</li><li><strong>履歴の非保持</strong> - 過去の値は保存されず、失われる</li><li><strong>シンプルな構造</strong> - テーブル構造が単純で、管理が容易</li><li><strong>ストレージ効率</strong> - 重複データがないため、ストレージ容量が節約される</li><li><strong>最新情報のみ</strong> - 各エンティティの最新の有効な情報のみを保持</li></ul><p><strong>Type 1 SCDの実装例</strong>：</p><pre><code>-- 既存データの更新\nUPDATE customers_silver \nSET address = '新しい住所', \n    phone = '新しい電話番号',\n    updated_at = current_timestamp()\nWHERE customer_id = '12345';\n\n-- または MERGE 操作での上書き\nMERGE INTO customers_silver AS target\nUSING customer_updates AS source\nON target.customer_id = source.customer_id\nWHEN MATCHED THEN UPDATE SET *;</code></pre><p><strong>使用ケース</strong>：</p><ul><li><strong>マスタデータ管理</strong> - 顧客情報、製品情報などの最新状態を保持</li><li><strong>参照データ</strong> - コードテーブルや設定テーブル</li><li><strong>リアルタイムダッシュボード</strong> - 常に最新情報を表示するアプリケーション</li><li><strong>シンプルなレポーティング</strong> - 複雑な時間範囲や履歴分析が不要な場合</li></ul><p><strong>注意点</strong>：</p><ul><li>履歴データが失われるため、監査やコンプライアンス要件がある場合は不適切</li><li>データの変更理由やタイミングを追跡する必要がある場合はType 2を検討</li></ul><p>例えば、<code>customers_silver</code>テーブルはType 1 SCDとして作成され、各顧客の最新の有効な情報のみを含んでいます。</p>",
    "id": 29,
    "question": "Delta Lakeテーブルの更新前と更新後の2つのバージョンが与えられたとします：\n\n更新前：\n更新後：\n\nこのテーブルはSCDのどのタイプですか？",
    "summary": "SCD Type 1では新しいデータが既存データを上書きし、履歴は保持されず最新情報のみが保存されます。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "機密なPII列のアクセスを取り消すためにテーブルオブジェクト権限を使用する"
      },
      {
        "is_correct": true,
        "text": "きめ細かいアクセス制御を設定するためにカラムマスクを適用する"
      },
      {
        "is_correct": false,
        "text": "機密なPII列を編集するためにダイナミックビューを使用する"
      },
      {
        "is_correct": false,
        "text": "地域固有の顧客へのアクセスを制限するために行レベルフィルターを使用する"
      }
    ],
    "explanation": "<p>Unity Catalog の<strong>カラムマスク</strong>は、クエリを実行するユーザーの身元や役割に基づいて、特定の列の機密データの可視性を動的に制御するセキュリティ機能です。SQL ユーザー定義関数（UDF）として実装されるカラムマスクは、クエリ実行時に元の列の値を置き換えたり変換したりすることで、権限のないユーザーには編集された、または匿名化されたデータが表示されるようにします。</p><p><strong>カラムマスクの実装例</strong>：</p><pre><code>-- マスク関数の作成\nCREATE FUNCTION mask_ssn(ssn STRING)\nRETURN CASE WHEN is_member('hr_team')\nTHEN ssn ELSE '***-**-****' END;\n\n-- カラムマスク付きテーブルの作成\nCREATE TABLE persons(name STRING, ssn STRING MASK mask_ssn);</code></pre><p>この例では、人事部門（hr_team）のユーザーには完全な社会保障番号（SSN）が表示され、その他のユーザーには***-**-****のようなマスクされた値が表示されます。</p><p><strong>カラムマスクの主な特徴</strong>：</p><ul><li><strong>動的制御</strong> - ユーザーの権限に基づいてリアルタイムで値を変更</li><li><strong>透明性</strong> - アプリケーションレベルでの変更が不要</li><li><strong>きめ細かい制御</strong> - 列レベルでの精密なアクセス制御</li><li><strong>宣言的実装</strong> - MASK句を使用した簡単な適用</li></ul><p><strong>他のオプションが不適切な理由</strong>：</p><ul><li><strong>ダイナミックビューによる機密PII列の編集</strong><br>ダイナミックビューもマスキングに使用できますが、Unity Catalogのカラムレベルマスキングはこの目的により効率的で組み込まれています。ダイナミックビューでは追加のビューを手動で作成・維持する必要があります。</li><li><strong>機密PII列のアクセスを取り消すテーブルオブジェクト権限</strong><br>テーブルオブジェクト権限はテーブル全体へのアクセスを制御するものであり、特定の列に対してではありません。これはPIIを選択的に隠すのではなく、アクセスを完全に防ぐことになります。</li><li><strong>地域固有の顧客へのアクセス制限のための行レベルフィルター</strong><br>行レベルフィルタリングはユーザーが見ることができる行を制御しますが、権限のないユーザーから特定の列（メールや電話番号など）を保護するものではありません。</li></ul><p><strong>実用的な使用例</strong>：</p><pre><code>-- メール用のマスク関数\nCREATE FUNCTION mask_email(email STRING)\nRETURN CASE \n  WHEN IS_ACCOUNT_GROUP_MEMBER('data_analysts') THEN email \n  ELSE REGEXP_REPLACE(email, '^(.{2}).*(@.*)$', '$1****$2') \nEND;\n\n-- 電話番号用のマスク関数\nCREATE FUNCTION mask_phone(phone STRING)\nRETURN CASE \n  WHEN IS_ACCOUNT_GROUP_MEMBER('customer_service') THEN phone \n  ELSE '***-***-' || RIGHT(phone, 4) \nEND;\n\n-- 顧客テーブルの作成\nCREATE TABLE customers(\n  customer_id STRING,\n  name STRING,\n  email STRING MASK mask_email,\n  phone STRING MASK mask_phone,\n  region STRING\n);</code></pre><p>このアプローチにより、組織は<strong>効率的で包括的なPII保護</strong>を実現し、適切な権限を持つユーザーのみが機密情報にアクセスできるようになります。</p>",
    "id": 30,
    "question": "データエンジニアが、複数の地域にわたってメールアドレスや電話番号などの顧客情報を含むUnity Catalogテーブルの作成を任されています。組織は、ユーザーがテーブルにクエリを実行できるようにしたいが、適切なアクセス権を持たない人には個人識別情報（PII）が公開されないようにしたいと考えています。\n\nエンジニアがこの要件を効率的に実現するために使用すべき方法はどれですか？",
    "summary": "Unity CatalogのカラムマスクはPII保護に最適で、ユーザーの権限に基づいて列レベルで動的にデータの可視性を制御し、機密情報を編集または匿名化して表示します。",
    "tags": "セキュリティとコンプライアンス"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "新しく更新されたレコードがターゲットテーブルに追加される"
      },
      {
        "is_correct": false,
        "text": "更新されたレコードの全履歴が各実行でターゲットテーブルを上書きする"
      },
      {
        "is_correct": false,
        "text": "新しく更新されたレコードがターゲットテーブルを上書きする"
      },
      {
        "is_correct": false,
        "text": "更新されたレコードの全履歴が各実行でターゲットテーブルに追加され、重複エントリが発生する"
      }
    ],
    "explanation": "<p>このクエリは<code>spark.readStream</code>を使用して、<strong>CDF（Change Data Feed）</strong>によってキャプチャされたテーブルの変更をストリーミングソースとして読み取ります。これにより、<strong>チェックポイント機能</strong>を活用してストリーム処理の進行状況を追跡し、前回の実行で停止した場所からストリームを継続できます。</p><p><strong>クエリの動作詳細</strong>：</p><ul><li><strong><code>readChangeFeed</code> オプション</strong> - Change Data Feedからデータを読み取ることを指定</li><li><strong><code>startingVersion</code> オプション</strong> - バージョン0から読み取りを開始</li><li><strong><code>filter(col(\"_change_type\").isin([\"update_postimage\"]))</code></strong> - 更新後の状態（update_postimage）のレコードのみをフィルタリング</li><li><strong><code>trigger(availableNow=True)</code></strong> - 利用可能なすべてのデータを一度に処理するワンタイム実行</li></ul><p><strong>ストリーミング処理の特徴</strong>：</p><ul><li><strong>チェックポイントによる継続性</strong> - <code>checkpointLocation</code>により、処理済みのデータを記録し、次回実行時は新しいデータのみを処理</li><li><strong>デフォルトの書き込みモード</strong> - 明示的な書き込みモードの指定がない場合、デフォルトで'append'モードが使用される</li><li><strong>増分処理</strong> - 各実行では前回の実行以降の新しい変更のみが処理される</li></ul><p><strong>実行フロー</strong>：</p><ol><li><strong>初回実行</strong> - バージョン0からの全ての<code>update_postimage</code>レコードを処理</li><li><strong>2回目以降</strong> - チェックポイント以降の新しい<code>update_postimage</code>レコードのみを処理</li><li><strong>データ追加</strong> - 処理されたレコードは<code>customers_updates</code>テーブルに追加される</li><li><strong>チェックポイント更新</strong> - 処理完了後、チェックポイントが更新される</li></ol><p><strong>重要なポイント</strong>：</p><ul><li>各実行で<strong>新しい更新レコードのみ</strong>がターゲットテーブルに追加される</li><li>重複は発生しない（チェックポイント機能により処理済みデータは除外される）</li><li>全履歴の再処理は行われない（効率的な増分処理）</li><li><code>availableNow=True</code>により、バッチ的な一括処理が実行される</li></ul><p>このアプローチにより、Change Data Feedを使用した<strong>効率的な増分データ処理</strong>が実現され、更新されたレコードの履歴を段階的に構築できます。</p>",
    "id": 31,
    "question": "Change Data Feedが有効になっているDeltaテーブル'customers'に対する以下のクエリが与えられたとします：\n\nspark.readStream\n        .option(\"readChangeFeed\", \"true\")\n        .option(\"startingVersion\", 0)\n        .table(\"customers\")\n        .filter(col(\"_change_type\").isin([\"update_postimage\"]))\n    .writeStream\n        .option(\"checkpointLocation\", \"dbfs:/checkpoints\")\n        .trigger (availableNow=True)\n        .table(\"customers_updates\")\n\nこのクエリを実行するたびに何が起こるかを説明する文はどれですか？",
    "summary": "Change Data Feedを使用したストリーミングクエリでは、チェックポイント機能により前回実行以降の新しい更新レコードのみがターゲットテーブルに追加され、重複や全履歴の再処理は発生しません。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "Live table"
      },
      {
        "is_correct": true,
        "text": "Streaming table"
      },
      {
        "is_correct": false,
        "text": "Materialized view"
      },
      {
        "is_correct": false,
        "text": "Temporary view"
      }
    ],
    "explanation": "<p>このユースケースに最も適したオブジェクトは<strong>Streaming table</strong>です。Streaming tableは、ニアリアルタイムデータの取り込みと増分処理を扱うように設計されており、Lakeflow Declarative Pipelinesが Auto Loader を介して到着する新しいレコードを継続的にキャプチャして処理し、高いパフォーマンスと信頼性を確保できるようにします。</p><p><strong>Streaming tableの主な特徴</strong>：</p><ul><li><strong>継続的なリアルタイム更新</strong> - 最新のデータフレッシュネスが要求されるパイプラインに最適</li><li><strong>Auto Loaderとの統合</strong> - 新しいファイルが到着すると自動的に検出・処理</li><li><strong>増分処理</strong> - 新しいデータのみを効率的に処理</li><li><strong>低レイテンシ</strong> - ニアリアルタイムでのデータ更新を実現</li><li><strong>状態管理</strong> - ストリーミング処理の状態を適切に管理</li></ul><p><strong>他のオプションが適さない理由</strong>：</p><ul><li><strong>Materialized view（以前はLive tableと呼ばれていた）</strong> - バッチ指向またはスケジュールされた増分処理を提供するため、継続的なリアルタイム処理には適さない</li><li><strong>Temporary view</strong> - 一時的なものであり、永続的で増分的なストリーミングワークロードには適さない</li><li><strong>Live table</strong> - 現在はMaterialized viewに名称変更されており、バッチ処理により適している</li></ul><p><strong>Streaming tableの使用例</strong>：</p><pre><code>CREATE OR REFRESH STREAMING TABLE raw_events\nAS SELECT * FROM cloud_files(\"s3://bucket/events/\", \"json\",\n  map(\"cloudFiles.inferColumnTypes\", \"true\"))\n\nCREATE OR REFRESH STREAMING TABLE processed_events\nAS SELECT \n  event_id,\n  event_type,\n  timestamp,\n  user_id\nFROM STREAM(raw_events)\nWHERE event_type IS NOT NULL</code></pre><p><strong>注意</strong>：Databricksは最近、この解決策をオープンソース化し、Spark Declarative Pipelines（SDP）という名前でApache Sparkエコシステムに統合しています。</p><p>Streaming tableは特に<strong>継続的なリアルタイム更新をサポート</strong>しており、最新のデータフレッシュネスが必要なパイプラインに最適です。Auto Loaderと組み合わせることで、ファイルベースのデータソースから効率的かつ信頼性の高いニアリアルタイムデータ取り込みを実現できます。</p>",
    "id": 32,
    "question": "データエンジニアが、ニアリアルタイムデータ取り込みを効率的に処理するために、Lakeflow Declarative Pipelinesを使用してETLパイプラインを設計することを任されています。目標は、Auto Loaderを使用して入力データストリームを増分処理し、高いパフォーマンスと信頼性を維持しながら、新しいレコードが到着すると継続的にキャプチャして読み込めるデータパイプラインを確保することです。\n\nこの要件を踏まえて、エンジニアは増分的でニアリアルタイムなデータ取り込みと処理を最もよくサポートできる適切なタイプのオブジェクトを選択する必要があります。\n\nこの特定のユースケースに最も適したオブジェクトは次のうちどれですか？",
    "summary": "ニアリアルタイムデータ取り込みと増分処理には、継続的なリアルタイム更新をサポートし、Auto Loaderと効率的に統合できるStreaming tableが最適です。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "ウォーターマーキングを使用してすべてのバッチのレコードを重複削除し、結果でターゲットテーブルを上書きする"
      },
      {
        "is_correct": false,
        "text": "各バッチ内でレコードを重複削除し、結果をターゲットテーブルに追加する"
      },
      {
        "is_correct": true,
        "text": "各バッチ内でレコードを重複削除し、insert-onlyマージを使用して結果をターゲットテーブルにマージする"
      },
      {
        "is_correct": false,
        "text": "各バッチ内でレコードを重複削除し、結果をランク付けして、rank = 1のレコードのみをターゲットテーブルに挿入する"
      }
    ],
    "explanation": "<p>ストリーミング重複削除を実行するには、<code>dropDuplicates()</code>関数を使用して各新しいマイクロバッチ内の重複レコードを除去します。さらに、挿入されるレコードがターゲットテーブルに既に存在しないことを確保する必要があります。これは<strong>insert-onlyマージ</strong>を使用することで実現できます。</p><p><strong>ストリーミング重複削除の正しいアプローチ</strong>：</p><ol><li><strong>バッチ内重複削除</strong> - 各マイクロバッチで<code>dropDuplicates()</code>を使用して重複を除去</li><li><strong>Insert-onlyマージ</strong> - ターゲットテーブルに既存しないレコードのみを挿入</li></ol><p><strong>実装例</strong>：</p><pre><code>def upsert_to_delta(microBatchDF, batchId):\n    # バッチ内の重複を除去\n    dedupedDF = microBatchDF.dropDuplicates([\"key_column\"])\n    \n    # Insert-onlyマージを実行\n    dedupedDF.createOrReplaceTempView(\"updates\")\n    \n    spark.sql(\"\"\"\n        MERGE INTO target_table AS t\n        USING updates AS s\n        ON t.key_column = s.key_column\n        WHEN NOT MATCHED THEN INSERT *\n    \"\"\")\n\n# ストリーミングクエリ\nquery = (spark.readStream\n         .table(\"source_table\")\n         .writeStream\n         .foreachBatch(upsert_to_delta)\n         .start())</code></pre><p><strong>他のアプローチが適切でない理由</strong>：</p><ul><li><strong>全バッチでの重複削除＋上書き</strong> - ストリーミング処理では全履歴を保持する必要があり、毎回上書きすると非効率的で、既存データが失われる可能性がある</li><li><strong>バッチ内重複削除＋単純追加</strong> - ターゲットテーブルとの重複チェックを行わないため、既存レコードとの重複が発生する可能性がある</li><li><strong>ランク付けによる挿入</strong> - ランク付けアプローチは複雑で、ストリーミング環境では状態管理が困難。また、既存テーブルとの重複チェックが不十分</li></ul><p><strong>Insert-onlyマージの利点</strong>：</p><ul><li><strong>重複回避</strong> - 既存レコードを確実にチェックして重複を防止</li><li><strong>効率性</strong> - 新しいレコードのみを挿入するため効率的</li><li><strong>データ整合性</strong> - ターゲットテーブルの一意性制約を維持</li><li><strong>ストリーミング適応性</strong> - 連続的なマイクロバッチ処理に適した設計</li></ul><p><strong>重要なポイント</strong>：</p><ul><li>各マイクロバッチで<code>dropDuplicates()</code>を使用してバッチ内重複を除去</li><li>MERGE文の<code>WHEN NOT MATCHED</code>句により既存テーブルとの重複を防止</li><li>この方法により、ストリーミング環境での効率的で信頼性の高い重複削除が実現</li></ul>",
    "id": 33,
    "question": "ストリーミング重複削除を正しく実行するためのアプローチは次のうちどれですか？",
    "summary": "ストリーミング重複削除では、各バッチ内でdropDuplicates()を使用して重複を除去し、insert-onlyマージでターゲットテーブルとの重複を防ぎながらレコードを挿入する必要があります。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "databricks secrets create-secret api_secrets\ndatabricks secrets put-scope api_secrets api_key"
      },
      {
        "is_correct": true,
        "text": "databricks secrets create-scope api_scope\ndatabricks secrets put-secret api_scope api_key"
      },
      {
        "is_correct": false,
        "text": "databricks secrets create-secret api_secrets\ndatabricks secrets put-scope api_key api_secrets"
      },
      {
        "is_correct": false,
        "text": "databricks secrets create-scope api_scope\ndatabricks secrets put-secret api_key api_scope"
      }
    ],
    "explanation": "<p>Databricks Secretsにシークレットを安全に保存するための正しいDatabricks CLIコマンドは以下の通りです：</p><p><strong>1. 新しいシークレットスコープを作成する：</strong></p><pre><code>databricks secrets create-scope SCOPE</code></pre><p><strong>2. そのスコープにシークレットを追加する：</strong></p><pre><code>databricks secrets put-secret SCOPE KEY</code></pre><p><strong>Databricks Secretsの管理フロー</strong>：</p><ol><li><strong>スコープの作成</strong> - 関連するシークレットをグループ化するための名名空間</li><li><strong>シークレットの保存</strong> - スコープ内にキーと値のペアで機密情報を保存</li><li><strong>ノートブックでの使用</strong> - <code>dbutils.secrets.get()</code>でシークレットにアクセス</li></ol><p><strong>実用的な使用例</strong>：</p><pre><code># 1. スコープの作成\ndatabricks secrets create-scope api_scope\n\n# 2. APIキーの保存\ndatabricks secrets put-secret api_scope api_key\n# コマンド実行後、エディタが開き、シークレット値を入力\n\n# 3. ノートブックでの使用\napi_key = dbutils.secrets.get(scope=\"api_scope\", key=\"api_key\")</code></pre><p><strong>セキュリティのメリット</strong>：</p><ul><li><strong>ハードコーディングの回避</strong> - ノートブックやコードに機密情報を直接記述しない</li><li><strong>中央集中管理</strong> - すべての機密情報を一元管理</li><li><strong>アクセス制御</strong> - スコープレベルでの権限管理が可能</li><li><strong>編集機能</strong> - シークレット値は表示時に自動的に編集される</li></ul><p><strong>他のオプションが不正解な理由</strong>：</p><ul><li><strong><code>create-secret</code></strong> - 存在しないコマンド。正しくは<code>create-scope</code>と<code>put-secret</code>を使用</li><li><strong><code>put-scope</code></strong> - 存在しないコマンド。スコープの作成は<code>create-scope</code>を使用</li><li><strong>パラメータの順序間違い</strong> - <code>put-secret</code>は<code>SCOPE KEY</code>の順序で指定する必要がある</li></ul><p><strong>追加の管理コマンド</strong>：</p><pre><code># スコープ一覧の表示\ndatabricks secrets list-scopes\n\n# スコープ内のシークレット一覧の表示\ndatabricks secrets list-secrets api_scope\n\n# シークレットの削除\ndatabricks secrets delete-secret api_scope api_key</code></pre><p>このアプローチにより、機密認証情報をノートブックにハードコーディングすることなく、安全に管理できることが保証されます。</p>",
    "id": 34,
    "question": "データエンジニアが、外部APIのデータをDatabricksワークスペースに統合する必要があるプロジェクトに取り組んでいます。セキュリティ上の理由から、APIキーをノートブックに直接ハードコーディングしたくありません。代わりに、Databricks Secretsを使用して機密認証情報を安全に保存・管理したいと考えています。\n\nこの目標を達成するために使用すべきDatabricks CLIコマンドはどれですか？",
    "summary": "Databricks Secretsで機密情報を安全に管理するには、まずdatabricks secrets create-scopeでスコープを作成し、次にdatabricks secrets put-secretでシークレットを保存します。",
    "tags": "セキュリティとコンプライアンス"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "カタログのシステムテーブルとその基盤データファイルを管理する機能を提供する"
      },
      {
        "is_correct": false,
        "text": "カタログのクエリ実行とパフォーマンス設定を制御する機能を提供する"
      },
      {
        "is_correct": false,
        "text": "デフォルトストレージロケーションを含むカタログ設定を管理する機能を提供する"
      },
      {
        "is_correct": true,
        "text": "権限の付与や取り消しを行うことで、カタログのアクセス権限を制御する機能を提供する"
      }
    ],
    "explanation": "<p>Unity Catalogにおいて、<strong>MANAGE権限</strong>は、完全な管理者権限を与えることなく、ユーザーまたはグループに権限管理を委任することを可能にします。</p><p><strong>MANAGE権限の主な機能</strong>：</p><ul><li><strong>権限の付与</strong> - 他のユーザーやグループに対してGRANTコマンドで権限を与えることができる</li><li><strong>権限の取り消し</strong> - REVOKEコマンドで既存の権限を取り消すことができる</li><li><strong>アクセス制御の管理</strong> - カタログレベルでのアクセス制御ポリシーを設定・変更できる</li><li><strong>権限の委任</strong> - 管理者でなくても、権限管理を任せることができる</li></ul><p><strong>MANAGE権限の使用例</strong>：</p><pre><code>-- hr_teamにMANAGE権限を付与\nGRANT MANAGE ON CATALOG hr_catalog TO hr_team\n\n-- hr_teamが他のグループに権限を付与可能になる\n-- （hr_teamのメンバーが実行）\nGRANT SELECT ON CATALOG hr_catalog TO finance_team\nGRANT CREATE SCHEMA ON CATALOG hr_catalog TO data_engineers</code></pre><p><strong>MANAGE権限でできること</strong>：</p><ul><li>カタログ内のオブジェクト（スキーマ、テーブル等）への権限管理</li><li>新しいユーザーやグループへの権限付与</li><li>既存権限の変更や取り消し</li><li>権限の階層的な管理</li></ul><p><strong>MANAGE権限でできないこと</strong>：</p><ul><li>カタログの物理的な設定変更（ストレージロケーション等）</li><li>システムテーブルの管理</li><li>クエリ実行エンジンの設定</li><li>パフォーマンス関連の設定</li></ul><p><strong>セキュリティ上の利点</strong>：</p><ul><li><strong>権限の分離</strong> - 完全な管理者権限を与えずに権限管理を委任</li><li><strong>責任の分散</strong> - 部門ごとに権限管理を分担できる</li><li><strong>最小権限の原則</strong> - 必要最小限の権限のみを付与</li><li><strong>監査性の向上</strong> - 権限変更の責任者が明確になる</li></ul><p>この仕組みにより、組織は<strong>階層的な権限管理体制</strong>を構築でき、セキュリティを維持しながら効率的なデータガバナンスを実現できます。たとえば、HR部門のリーダーにhr_catalogのMANAGE権限を付与することで、HR関連データへのアクセス制御をHR部門内で自律的に管理できるようになります。</p>",
    "id": 35,
    "question": "データエンジニアが以下のSQLクエリを使用しています：\n\nGRANT MANAGE ON CATALOG hr_catalog TO hr_team\n\nMANAGE権限によって与えられる機能を説明しているのは次のうちどれですか？",
    "summary": "Unity CatalogのMANAGE権限は、完全な管理者権限を与えずに権限管理を委任する機能で、権限の付与や取り消しを通じてカタログのアクセス制御を管理できます。",
    "tags": "セキュリティとコンプライアンス"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "コンピュートタイプごとの各ジョブ実行の詳細なDBU消費量を監視する"
      },
      {
        "is_correct": false,
        "text": "ワークスペースごとの各タイプのコンピューティングリソースの詳細なDBU消費量を監視する"
      },
      {
        "is_correct": true,
        "text": "ユーザーごとの各タイプのコンピューティングリソースの詳細なDBU消費量を監視する"
      },
      {
        "is_correct": false,
        "text": "コンピュートタイプごとの各パイプライン実行の詳細なDBU消費量を監視する"
      }
    ],
    "explanation": "<p>このクエリは、ワークロードを実行したユーザー（<code>run_as</code>）と特定のリソースタイプ（<code>sku_name</code>）による日次のDBU使用量を集計しています。</p><p><strong>なぜそうなるかの詳細分析：</strong></p><ul><li><strong><code>system.billing.usage</code></strong> - 課金可能な使用量を詳細に追跡するシステムテーブルです</li><li><strong><code>usage_unit = 'DBU'</code></strong> - コンピューティングの標準消費単位であるDatabricks Units（DBU）で測定された消費量のみを表示するフィルター条件です</li><li><strong><code>identity_metadata.run_as</code></strong> - ワークロードを実行したユーザーまたはサービスプリンシパル（アイデンティティ）を記録するカラムです。これが「ユーザーごと」の要素になります</li><li><strong><code>sku_name</code></strong> - DBUを消費した特定のコンピューティングリソースのタイプ（例：ALL_PURPOSE_COMPUTE、JOBS_COMPUTE、SERVERLESS_SQL）を識別するカラムです。これが「コンピューティングリソースのタイプ」の詳細を提供します</li><li><strong><code>usage_quantity</code></strong> - 実際のDBU消費量です</li><li><strong><code>usage_date</code></strong> - 日次の時系列詳細を提供します</li></ul><p><strong>system.billing.usageテーブルの特徴：</strong></p><ul><li><strong>詳細な課金追跡</strong> - 組織内のすべての課金可能な活動を記録</li><li><strong>ユーザー単位の可視化</strong> - どのユーザーがどれだけのリソースを消費したかを特定可能</li><li><strong>リソース別分析</strong> - 異なるタイプのコンピューティングリソース（オールパーパス、ジョブ、サーバーレスSQL等）の使用状況を個別に追跡</li><li><strong>時系列分析</strong> - 日次、週次、月次の消費傾向を分析可能</li><li><strong>コスト管理</strong> - 予算管理とコスト最適化のための基礎データを提供</li></ul><p><strong>実用的な使用例：</strong></p><ul><li>部門別またはチーム別のコスト配賦</li><li>ユーザーごとの利用状況の監視</li><li>リソースタイプ別の消費パターン分析</li><li>予算超過の早期検知</li><li>コスト効率の悪いワークロードの特定</li></ul><p>このクエリにより、組織は<strong>ユーザーレベルでの詳細なリソース消費パターン</strong>を把握し、効果的なコスト管理とリソース最適化を実現できます。</p>",
    "id": 36,
    "question": "データエンジニアが、組織内のさまざまなワークロードにわたるコンピューティングリソースの消費を追跡・分析するための包括的なダッシュボードを作成することを任されています。これを達成するために、エンジニアは使用量システムテーブルに対して以下のSQLクエリを作成しました：\n\nSELECT\n    identity_metadata.run_as,\n    sku_name,\n    usage_date,\n    usage_quantity\nFROM system.billing.usage\nWHERE usage_unit = 'DBU'\n\nこのクエリの目的と提供される詳細レベルを最も正確に説明しているのは以下のうちどれですか？",
    "summary": "system.billing.usageテーブルを使用してDBU消費量を監視する際、identity_metadata.run_asでユーザーを、sku_nameでコンピューティングリソースタイプを特定し、ユーザーごとの詳細な使用状況を追跡できます。",
    "tags": "モニタリングとアラート"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "sys.path変数には、Pythonインタープリターがモジュールを検索するディレクトリのリストが含まれている"
      },
      {
        "is_correct": false,
        "text": "sys.path変数には、Pythonノートブックの現在の作業ディレクトリの絶対パス名が含まれている"
      },
      {
        "is_correct": false,
        "text": "sys.path変数には、Pythonノートブックに必要なすべての依存関係のリストが含まれている"
      },
      {
        "is_correct": false,
        "text": "sys.path変数には、Pythonノートブックに渡されたすべてのパラメータのリストが含まれている"
      }
    ],
    "explanation": "<p><code>sys.path</code>変数には、<strong>Pythonインタープリターがモジュールを検索するディレクトリのリスト</strong>が含まれています。</p><p><strong>sys.pathの主な特徴と使用方法：</strong></p><ul><li><strong>モジュール検索パス</strong> - Pythonが<code>import</code>文でモジュールを探す場所を指定</li><li><strong>動的なパス追加</strong> - ランタイムに新しいディレクトリを追加可能</li><li><strong>リストオブジェクト</strong> - 文字列のリストとして操作可能</li><li><strong>順序依存</strong> - リストの順番でディレクトリを検索</li></ul><p><strong>別のディレクトリからモジュールをインポートする方法：</strong></p><pre><code>import sys\n# 新しいパスをsys.pathに追加\nsys.path.append(\"/path/to/dir\")\n\n# またはリストの先頭に追加\nsys.path.insert(0, \"/path/to/dir\")\n\n# その後、そのディレクトリからモジュールをインポート可能\nimport my_custom_module</code></pre><p><strong>Databricksワークスペースでの実用例：</strong></p><pre><code>import sys\n\n# 現在のsys.pathの内容を確認\nprint(\"Current sys.path:\")\nfor path in sys.path:\n    print(f\"  {path}\")\n\n# カスタムモジュールのディレクトリを追加\nsys.path.append(\"/Workspace/Shared/custom_modules\")\n\n# これでcustom_modulesディレクトリからモジュールをインポート可能\nfrom data_utils import clean_data\nfrom ml_utils import train_model</code></pre><p><strong>モジュール検索の順序：</strong></p><ol><li>現在のディレクトリ</li><li><code>PYTHONPATH</code>環境変数のディレクトリ</li><li>標準ライブラリのディレクトリ</li><li><code>site-packages</code>ディレクトリ</li><li><code>sys.path</code>に動的に追加されたディレクトリ</li></ol><p><strong>注意事項：</strong></p><ul><li><strong>一時的な変更</strong> - <code>sys.path</code>への変更は現在のPythonセッションのみ有効</li><li><strong>パスの順序</strong> - 早い順番のパスが優先される</li><li><strong>絶対パス推奨</strong> - 相対パスよりも絶対パスの使用が推奨される</li><li><strong>重複回避</strong> - 同じパスを複数回追加しないよう注意</li></ul><p><strong>デバッグとトラブルシューティング：</strong></p><pre><code># モジュールが見つからない場合の確認方法\nimport sys\nimport os\n\n# 現在の作業ディレクトリを確認\nprint(f\"Current working directory: {os.getcwd()}\")\n\n# sys.pathの内容を詳細表示\nprint(\"\\nPython module search paths:\")\nfor i, path in enumerate(sys.path):\n    exists = \"[EXISTS]\" if os.path.exists(path) else \"[NOT FOUND]\"\n    print(f\"{i}: {exists} {path}\")</code></pre><p>この理解により、Databricksノートブックでカスタムモジュールを効果的に使用し、コードの再利用性と保守性を向上させることができます。</p>",
    "id": 37,
    "question": "sys.pathというPython変数について正しく説明している文は次のうちどれですか？",
    "summary": "sys.path変数は、Pythonインタープリターがモジュールを検索するディレクトリのリストを含んでおり、別のディレクトリからモジュールをインポートするにはsys.path.append()でそのパスを追加する必要があります。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "Auto Compactionはテーブルへの書き込み成功後に発生し、ファイルがさらに圧縮可能かチェックし、可能であればZ-Orderingを使用したOPTIMIZEジョブを実行して1GBのファイルサイズを目指す"
      },
      {
        "is_correct": true,
        "text": "Auto Compactionはテーブルへの書き込み成功後に発生し、ファイルがさらに圧縮可能かチェックし、可能であればZ-Orderingを使用しないOPTIMIZEジョブを実行して128MBのファイルサイズを目指す"
      },
      {
        "is_correct": false,
        "text": "Auto Compactionはテーブルへの書き込み成功後に発生し、ファイルがさらに圧縮可能かチェックし、可能であればZ-Orderingを使用したOPTIMIZEジョブを実行して128MBのファイルサイズを目指す"
      },
      {
        "is_correct": false,
        "text": "Auto Compactionはテーブルへの書き込み成功後に発生し、ファイルがさらに圧縮可能かチェックし、可能であればZ-Orderingを使用しないOPTIMIZEジョブを実行して1GBのファイルサイズを目指す"
      }
    ],
    "explanation": "<p><strong>Auto Compaction</strong>は、DatabricksのAuto Optimize機能の一部です。個別の書き込み操作後に、ファイルがさらに圧縮可能かをチェックし、可能であれば標準のOPTIMIZEで使用される1GBファイルサイズではなく、<strong>128MBファイルサイズ</strong>でOPTIMIZEジョブを実行します。</p><p><strong>Auto Compactionの主な特徴：</strong></p><ul><li><strong>自動トリガー</strong> - 各書き込み操作の完了後に自動的に実行される</li><li><strong>128MBターゲット</strong> - 標準OPTIMIZEの1GBではなく、より小さい128MBを目標ファイルサイズとして使用</li><li><strong>Z-Orderingなし</strong> - Z-Orderingは単純な圧縮よりもはるかに高コストなため、Auto CompactionではZ-Orderingをサポートしない</li><li><strong>効率的な処理</strong> - 書き込み直後に実行されるため、小さなファイルの蓄積を防ぐ</li><li><strong>透明性</strong> - ユーザーの介入なしに自動的に動作する</li></ul><p><strong>Auto Optimize機能の構成要素：</strong></p><ul><li><strong>Auto Compaction</strong> - 小さなファイルを自動的に圧縮</li><li><strong>Optimized Writes</strong> - 書き込み時にファイルサイズを最適化</li></ul><p><strong>Z-Orderingが含まれない理由：</strong></p><ul><li><strong>コストの問題</strong> - Z-Orderingは計算集約的な操作で、頻繁に実行すると非効率</li><li><strong>リアルタイム性</strong> - 書き込み直後の自動実行には軽量な操作が適している</li><li><strong>頻度の違い</strong> - Z-Orderingは定期的なバッチ処理で実行するのが適している</li></ul><p><strong>Auto Compactionの有効化：</strong></p><pre><code>-- テーブルレベルでの設定\nALTER TABLE my_table SET TBLPROPERTIES (\n  'delta.autoOptimize.optimizeWrite' = 'true',\n  'delta.autoOptimize.autoCompact' = 'true'\n);\n\n-- または、セッションレベルでの設定\nSET spark.databricks.delta.optimizeWrite.enabled = true;\nSET spark.databricks.delta.autoCompact.enabled = true;</code></pre><p><strong>標準OPTIMIZEとの比較：</strong></p><ul><li><strong>標準OPTIMIZE</strong> - 手動実行、1GBターゲット、Z-Ordering対応、包括的な最適化</li><li><strong>Auto Compaction</strong> - 自動実行、128MBターゲット、Z-Orderingなし、軽量な最適化</li></ul><p><strong>パフォーマンスへの影響：</strong></p><ul><li><strong>クエリ性能向上</strong> - 小さなファイルの数を減らすことでクエリ計画が効率化</li><li><strong>書き込み後処理</strong> - 書き込み操作の完了時間がわずかに延長される可能性</li><li><strong>ストレージ効率</strong> - ファイルの断片化を防ぎ、ストレージ効率を向上</li></ul><p><strong>使用ケース：</strong></p><ul><li><strong>頻繁な小規模書き込み</strong> - ストリーミングや頻繁なバッチ処理</li><li><strong>リアルタイムデータ処理</strong> - 継続的なデータ取り込み環境</li><li><strong>ACID操作の最適化</strong> - トランザクション処理でのファイル管理</li></ul><p>Auto Compactionにより、<strong>手動でのOPTIMIZE実行を削減</strong>しながら、Delta Lakeテーブルのパフォーマンスを自動的に維持できます。ただし、定期的な包括的なOPTIMIZE（Z-Ordering付き）は引き続き推奨されます。</p>",
    "id": 38,
    "question": "Delta Lake Auto Compactionについて最も適切に説明している文は次のうちどれですか？",
    "summary": "Delta Lake Auto Compactionは、テーブルへの書き込み成功後に自動的にファイル圧縮の必要性をチェックし、必要に応じてZ-Orderingを使用せずに128MBのファイルサイズを目標としたOPTIMIZEジョブを実行する機能です。",
    "tags": "コストとパフォーマンスの最適化"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "SYNC orders_archive"
      },
      {
        "is_correct": false,
        "text": "REFRESH orders_archive"
      },
      {
        "is_correct": true,
        "text": "CREATE OR REPLACE TABLE orders_archive\nDEEP CLONE orders"
      },
      {
        "is_correct": false,
        "text": "INSERT OVERWRITE orders_archive\nSELECT * FROM orders"
      }
    ],
    "explanation": "<p><strong>クローニングは増分的に実行可能</strong>です。<code>CREATE OR REPLACE TABLE</code>コマンドを実行することで、ソースからターゲットの場所に変更を同期できます。</p><p><strong>Delta Lake DEEP CLONEの増分同期機能</strong>：</p><ul><li><strong>増分クローニング</strong> - 初回のDEEP CLONE後、同じコマンドを再実行すると変更分のみが同期される</li><li><strong>効率的な更新</strong> - 全体を再作成するのではなく、差分のみを処理するため効率的</li><li><strong>履歴の保持</strong> - クローンテーブル自体の操作履歴が維持される</li><li><strong>メタデータとデータの同期</strong> - スキーマ変更とデータ変更の両方が同期される</li></ul><p><strong>実行結果の確認</strong>：</p><pre><code>-- 同期後に履歴を確認\nDESCRIBE HISTORY orders_archive</code></pre><p>このコマンドを実行すると、テーブルに新しいバージョンのCLONE操作が発生したことが履歴に記録されます。</p><p><strong>他のオプションが適切でない理由</strong>：</p><ul><li><strong><code>SYNC orders_archive</code></strong> - Delta Lakeには存在しないコマンド</li><li><strong><code>REFRESH orders_archive</code></strong> - メタデータの更新のみで、データの同期は行わない</li><li><strong><code>INSERT OVERWRITE</code>アプローチ</strong> - データのみの置き換えで、スキーマ変更やメタデータの同期が不完全。また、クローンの履歴情報が失われる可能性がある</li></ul><p><strong>DEEP CLONEの動作詳細</strong>：</p><ul><li><strong>初回実行時</strong> - ソーステーブルの完全なコピーを作成（データファイル、メタデータ、履歴）</li><li><strong>再実行時</strong> - 前回のクローン以降の変更分のみを同期</li><li><strong>独立性</strong> - クローンはソースから独立したテーブルとして機能</li><li><strong>一貫性</strong> - 同期時点でのソーステーブルの一貫した状態を反映</li></ul><p><strong>実用的な使用例</strong>：</p><pre><code>-- 初回クローン作成\nCREATE TABLE orders_archive\nDEEP CLONE orders\n\n-- ソーステーブルに変更が発生した後の同期\nCREATE OR REPLACE TABLE orders_archive\nDEEP CLONE orders\n\n-- 同期後の確認\nSELECT COUNT(*) FROM orders_archive;\nDESCRIBE HISTORY orders_archive;</code></pre><p><strong>注意点</strong>：</p><ul><li><strong>権限要件</strong> - ソーステーブルへの読み取り権限とターゲット場所への書き込み権限が必要</li><li><strong>ストレージコスト</strong> - 初回は完全コピーのためストレージ使用量が増加</li><li><strong>実行時間</strong> - テーブルサイズに応じて同期時間が変動</li><li><strong>履歴の独立性</strong> - クローン後の変更履歴はソースとターゲットで独立</li></ul><p>この機能により、<strong>本番データのバックアップ作成、開発・テスト環境へのデータ複製、データの段階的移行</strong>などの用途で効率的にDelta Lakeテーブルを管理できます。特に、定期的な同期が必要な環境では、増分クローニング機能により大幅な時間とリソースの節約が可能です。</p>",
    "id": 39,
    "question": "データエンジニアが以下のコマンドを使用して作成された'orders_archive'という名前のDelta Lakeテーブルを持っています：\n\nCREATE TABLE orders_archive\nDEEP CLONE orders\n\nordersテーブルの新しい変更をクローンに同期したいと考えています。\n\nこのタスクを達成するために実行できるコマンドは次のうちどれですか？",
    "summary": "Delta Lake DEEP CLONEで作成されたテーブルを元のテーブルと同期するには、CREATE OR REPLACE TABLE コマンドでDEEP CLONEを再実行することで、変更分のみを効率的に同期できます。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "Sparkは右の入力ストリームのみの過去の入力をストリーミング状態としてバッファリングし、将来の左の入力を過去の右の入力とマッチさせることができる"
      },
      {
        "is_correct": false,
        "text": "Stream-Stream Joinはステートフルではない。Sparkは入力ストリームの過去の入力をストリーミング状態としてバッファリングしない"
      },
      {
        "is_correct": false,
        "text": "Sparkは左の入力ストリームのみの過去の入力をストリーミング状態としてバッファリングし、将来の右の入力を過去の左の入力とマッチさせることができる"
      },
      {
        "is_correct": true,
        "text": "Sparkは両方の入力ストリームの過去の入力をストリーミング状態としてバッファリングし、将来のすべての入力を過去の入力とマッチさせることができる"
      }
    ],
    "explanation": "<p>Stream-Stream Joinを実行する際、<strong>Sparkは両方の入力ストリームの過去の入力をストリーミング状態としてバッファリング</strong>し、将来のすべての入力を過去の入力とマッチさせることができます。この状態はウォーターマークを使用することで制限できます。</p><p><strong>Stream-Stream Joinの状態管理の詳細：</strong></p><ul><li><strong>両方向バッファリング</strong> - 左と右の両ストリームのデータをメモリ内に保持</li><li><strong>継続的マッチング</strong> - 新しいレコードが到着するたびに、過去のレコードとのマッチングを実行</li><li><strong>ステートフルな操作</strong> - 時間経過とともに状態が累積される</li><li><strong>非対称性</strong> - 左ストリームのレコードが右ストリームの過去レコードとマッチし、その逆も同様</li></ul><p><strong>ウォーターマークによる状態管理：</strong></p><ul><li><strong>メモリ使用量の制限</strong> - 古いデータを自動的に破棄してメモリ使用量を制御</li><li><strong>遅延許容範囲</strong> - ウォーターマークで指定された遅延範囲内のデータのみを保持</li><li><strong>結果の一貫性</strong> - ウォーターマークにより結果の一貫性と予測可能性を確保</li></ul><p><strong>Stream-Stream Joinの実装例：</strong></p><pre><code>// ウォーターマーク付きStream-Stream Join\nval ordersWithWatermark = orders\n  .withWatermark(\"order_time\", \"10 minutes\")\n\nval paymentsWithWatermark = payments\n  .withWatermark(\"payment_time\", \"10 minutes\")\n\n// Inner Join\nval joinedStream = ordersWithWatermark\n  .join(paymentsWithWatermark,\n    expr(\"\"\"order_id = payment_order_id AND\n             order_time BETWEEN payment_time - INTERVAL 5 minutes\n             AND payment_time + INTERVAL 5 minutes\"\"\"),\n    \"inner\")</code></pre><p><strong>Joinの種類と状態管理：</strong></p><ul><li><strong>Inner Join</strong> - 両ストリームのマッチするレコードのみ出力、最も効率的な状態管理</li><li><strong>Left/Right Outer Join</strong> - 状態の保持期間が長く、より多くのメモリを消費</li><li><strong>Full Outer Join</strong> - 最も複雑な状態管理、最大のメモリ使用量</li></ul><p><strong>パフォーマンスへの影響：</strong></p><ul><li><strong>メモリ使用量</strong> - 両ストリームのバッファリングにより大量のメモリが必要</li><li><strong>スループット</strong> - 状態のサイズが大きいと処理速度が低下</li><li><strong>レイテンシ</strong> - マッチングのために一定の遅延が発生</li><li><strong>スケーラビリティ</strong> - ウォーターマークの適切な設定が重要</li></ul><p><strong>ベストプラクティス：</strong></p><ul><li><strong>ウォーターマークの設定</strong> - メモリ使用量と結果の完全性のバランスを考慮</li><li><strong>Join条件の最適化</strong> - 適切な時間範囲を指定して状態サイズを制限</li><li><strong>リソース計画</strong> - 十分なメモリとCPUリソースを確保</li><li><strong>監視とチューニング</strong> - 状態サイズと処理メトリクスの継続的な監視</li></ul><p>この理解により、<strong>リアルタイムデータ処理</strong>で複数のストリームを結合する際の設計考慮事項とパフォーマンス最適化手法を適切に適用できます。</p>",
    "id": 40,
    "question": "Stream-Stream Joinにおけるストリーミング状態に関する正しい説明はどれですか？",
    "summary": "Stream-Stream JoinではSparkが両方の入力ストリームの過去データをストリーミング状態としてバッファリングし、新しい入力を過去の入力とマッチさせるため、ウォーターマークで状態サイズを制限できます。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "Task 1は成功する。Task 2は部分的に失敗する。Task 3はスキップされる"
      },
      {
        "is_correct": false,
        "text": "Task 1とTask 3は成功し、Task 2は完全に失敗する"
      },
      {
        "is_correct": false,
        "text": "Task 1は成功する。Task 2は完全に失敗する。Task 3はスキップされる"
      },
      {
        "is_correct": true,
        "text": "Task 1とTask 3は成功し、Task 2は部分的に失敗する"
      }
    ],
    "explanation": "<p>ジョブ実行中にタスクが失敗した場合、<strong>依存関係のあるタスクのみがスキップされ、並列タスクは実行されて完了します</strong>。</p><p><strong>マルチタスクジョブでの障害処理の詳細：</strong></p><ul><li><strong>並列実行の継続</strong> - 失敗したタスクと並列関係にあるタスク（依存関係がないタスク）は正常に実行される</li><li><strong>依存タスクのスキップ</strong> - 失敗したタスクに依存するダウンストリームタスクのみがスキップされる</li><li><strong>部分的な失敗</strong> - タスクの失敗は常に部分的であり、エラー発生前の操作は成功して反映される</li><li><strong>アトミック性の保証</strong> - 各操作単位での一貫性が保たれる</li></ul><p><strong>タスクの部分的失敗の仕組み：</strong></p><ul><li><strong>成功した操作</strong> - コードエラー発生前のノートブック内の操作は正常に実行され、結果がコミットされる</li><li><strong>スキップされた操作</strong> - コードエラー発生後の操作はスキップされ、実行されない</li><li><strong>状態の保持</strong> - 成功した部分の変更内容（データベーステーブルへの書き込み、ファイル作成等）は保持される</li><li><strong>トランザクション境界</strong> - 各セル・コマンドレベルでのトランザクション境界が考慮される</li></ul><p><strong>マルチタスクジョブの実行パターン：</strong></p><pre><code>// 例：3つのタスクを持つジョブ\nTask 1: データ収集（並列実行可能）\nTask 2: データ変換（並列実行可能）\nTask 3: レポート生成（Task 1とTask 2に依存）\n\n// Task 2でエラーが発生した場合：\n- Task 1: 正常に完了（並列実行）\n- Task 2: 部分的に失敗（エラー前の処理は完了）\n- Task 3: 依存関係により正常実行（Task 1の結果を使用）</code></pre><p><strong>ジョブ障害からの復旧：</strong></p><ul><li><strong>失敗したタスクの再実行</strong> - 失敗したタスクのみを個別に再実行可能</li><li><strong>部分的な進行状況の活用</strong> - 成功した部分の結果を活用して効率的に復旧</li><li><strong>依存関係の再計算</strong> - 修正後に依存タスクを自動的に再実行</li><li><strong>段階的な復旧</strong> - 失敗点から段階的にジョブを復旧</li></ul><p><strong>障害の種類と影響：</strong></p><ul><li><strong>コード例外</strong> - プログラムエラー、データ形式不正、接続エラー等により部分失敗</li><li><strong>リソース不足</strong> - メモリ不足、ディスク容量不足等によるタスク失敗</li><li><strong>外部依存関係</strong> - 外部APIやデータベースの障害による処理中断</li><li><strong>タイムアウト</strong> - 長時間実行によるタイムアウトでの処理停止</li></ul><p><strong>ベストプラクティス：</strong></p><ul><li><strong>適切な依存関係設定</strong> - タスク間の論理的な依存関係を正確に定義</li><li><strong>エラーハンドリング</strong> - 予期される例外に対する適切な処理を実装</li><li><strong>チェックポイントの活用</strong> - 長時間実行タスクでの中間結果の保存</li><li><strong>リトライ設定</strong> - 一時的な障害に対する自動リトライ機能の設定</li><li><strong>モニタリング</strong> - タスクの実行状況とエラーの詳細な監視</li></ul><p><strong>ジョブ実行の可視化：</strong></p><pre><code>// ジョブ実行結果の例\nJob Run ID: 12345\n├── Task 1 (データ収集): ✅ 成功 (5分)\n├── Task 2 (データ変換): ⚠️ 部分失敗 (3分で停止)\n│   ├── セル1-5: ✅ 完了\n│   ├── セル6: ❌ エラー発生\n│   └── セル7-10: ⏭️ スキップ\n└── Task 3 (レポート生成): ✅ 成功 (2分)</code></pre><p>この動作により、<strong>ジョブ全体の効率性と回復力</strong>が向上し、一部のタスクエラーが他の独立したタスクの実行を妨げることなく、必要な作業を継続できるワークフロー設計が可能になります。また、部分的失敗により完了した処理内容を無駄にすることなく、効率的な障害復旧が実現できます。</p>",
    "id": 41,
    "question": "以下のマルチタスクジョブが与えられたとします。\n\nTask 2に関連付けられたnotebook 2でエラーが発生した場合、このジョブの実行結果を説明する文はどれですか？",
    "summary": "マルチタスクジョブでタスクが失敗した場合、並列タスクは正常に実行され、失敗したタスクは部分的に失敗（エラー前の操作は完了、エラー後はスキップ）し、依存タスクのみがスキップされます。",
    "tags": "デプロイとデバッグ"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "エンドポイント'api/2.2/jobs/runs/get'にPOSTリクエストを送信する"
      },
      {
        "is_correct": true,
        "text": "エンドポイント'/api/2.2/jobs/runs/list'にGETリクエストを送信する"
      },
      {
        "is_correct": false,
        "text": "エンドポイント'/api/2.2/jobs/runs/list'にPOSTリクエストを送信する"
      },
      {
        "is_correct": false,
        "text": "エンドポイント'api/2.2/jobs/runs/get'にGETリクエストを送信する"
      }
    ],
    "explanation": "<p>エンドポイント<code>'/api/2.2/jobs/runs/list'</code>に<strong>GETリクエストを送信する</strong>ことで、ジョブのすべての実行を取得できます。</p><p><strong>Databricks REST APIにおけるジョブ実行の管理</strong>:</p><ul><li><strong>ジョブ実行一覧の取得</strong> - <code>GET /api/2.2/jobs/runs/list</code>でジョブの全実行履歴を取得</li><li><strong>特定実行の詳細取得</strong> - <code>GET /api/2.2/jobs/runs/get</code>で特定の実行IDの詳細情報を取得</li><li><strong>RESTful設計原則</strong> - データの取得にはGETメソッド、データの作成・更新にはPOSTメソッドを使用</li><li><strong>エンドポイントの命名規則</strong> - listは複数項目の取得、getは単一項目の取得を表す</li></ul><p><strong>主要なジョブ関連APIエンドポイント</strong>:</p><ul><li><code>GET /api/2.2/jobs/list</code> - 全ジョブの一覧取得</li><li><code>GET /api/2.2/jobs/get</code> - 特定ジョブの詳細取得</li><li><code>GET /api/2.2/jobs/runs/list</code> - ジョブ実行履歴の一覧取得</li><li><code>GET /api/2.2/jobs/runs/get</code> - 特定実行の詳細取得</li><li><code>POST /api/2.2/jobs/create</code> - 新規ジョブの作成</li><li><code>POST /api/2.2/jobs/run-now</code> - ジョブの即座実行</li></ul><p><strong>API使用例</strong>:</p><pre><code>// ジョブ実行一覧の取得\ncurl -X GET \\\n  https://&lt;databricks-instance&gt;/api/2.2/jobs/runs/list \\\n  -H \"Authorization: Bearer &lt;access-token&gt;\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"job_id\": 123,\n    \"limit\": 25,\n    \"offset\": 0\n  }'\n\n// レスポンス例\n{\n  \"runs\": [\n    {\n      \"run_id\": 456,\n      \"job_id\": 123,\n      \"state\": {\n        \"life_cycle_state\": \"TERMINATED\",\n        \"result_state\": \"SUCCESS\"\n      },\n      \"start_time\": 1234567890123,\n      \"end_time\": 1234567891123\n    }\n  ],\n  \"has_more\": false\n}</code></pre><p><strong>認証とセキュリティ</strong>:</p><ul><li><strong>Personal Access Token</strong> - Authorizationヘッダーでトークンベース認証</li><li><strong>OAuth 2.0</strong> - サービス間認証での標準的な認証方式</li><li><strong>権限管理</strong> - ジョブへのアクセス権限に基づくAPI利用制限</li><li><strong>HTTPS必須</strong> - すべてのAPI通信はHTTPS経由で実行</li></ul><p><strong>パラメータオプション</strong>:</p><ul><li><code>job_id</code> - 特定ジョブの実行のみをフィルタリング</li><li><code>limit</code> - 取得する実行数の上限設定（デフォルト：25）</li><li><code>offset</code> - ページネーション用のオフセット値</li><li><code>run_type</code> - 実行タイプでのフィルタリング（JOB_RUN、SUBMIT_RUN等）</li><li><code>start_time_from/to</code> - 実行開始時間による期間指定</li></ul><p><strong>エラーハンドリング</strong>:</p><ul><li><strong>HTTP 200</strong> - 正常なレスポンス</li><li><strong>HTTP 401</strong> - 認証エラー（無効なトークン）</li><li><strong>HTTP 403</strong> - 権限エラー（アクセス権なし）</li><li><strong>HTTP 404</strong> - リソース未発見（存在しないジョブID）</li><li><strong>HTTP 429</strong> - レート制限超過</li><li><strong>HTTP 500</strong> - サーバー内部エラー</li></ul><p><strong>自動化とモニタリング活用例</strong>:</p><pre><code>// Python SDKを使用した例\nfrom databricks_cli.sdk.api_client import ApiClient\nfrom databricks_cli.jobs.api import JobsApi\n\n# APIクライアントの初期化\napi_client = ApiClient(host=databricks_host, token=access_token)\njobs_api = JobsApi(api_client)\n\n# ジョブ実行一覧の取得\nruns = jobs_api.list_runs(job_id=123, limit=50)\n\n# 失敗した実行の抽出\nfailed_runs = [\n    run for run in runs['runs'] \n    if run['state']['result_state'] == 'FAILED'\n]\n\n# アラート送信やレポート生成</nfor run in failed_runs:\n    print(f\"Failed run: {run['run_id']} at {run['start_time']}\")</code></pre><p>この<strong>REST APIを活用</strong>することで、ジョブ実行の自動監視、失敗通知システム、パフォーマンス分析、コスト追跡などの包括的なワークフロー管理システムを構築し、Databricksプラットフォーム上でのデータパイプラインの運用効率を大幅に向上させることができます。</p>",
    "id": 42,
    "question": "データエンジニアが、ジョブのすべての実行を取得してそのステータスを確認するために、Databricks REST APIを使用したいと考えています。\n\nこの要件を満たすREST API呼び出しは次のうちどれですか？",
    "summary": "ジョブの実行履歴とステータスを取得するには、Databricks REST APIのエンドポイント'/api/2.2/jobs/runs/list'にGETリクエストを送信します。",
    "tags": "モニタリングとアラート"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "If/else condition"
      },
      {
        "is_correct": false,
        "text": "SQL query"
      },
      {
        "is_correct": false,
        "text": "Python wheel"
      },
      {
        "is_correct": true,
        "text": "REST API call"
      }
    ],
    "explanation": "<p>Databricks Jobsでは、以下のタスクタイプが<strong>有効</strong>です：</p><ul><li><strong>Python wheel</strong> - Python wheelパッケージを実行するため</li><li><strong>SQL query</strong> - SQLコマンドやクエリを実行するため</li><li><strong>If/else condition</strong> - ジョブワークフロー内にブール条件ロジックを追加するため</li></ul><p>しかし、<strong>REST API callはDatabricks Jobsのタスクタイプではありません</strong>。</p><p><strong>Databricks Jobsでサポートされるタスクタイプの完全リスト：</strong></p><ul><li><strong>Notebook</strong> - Databricksノートブックの実行</li><li><strong>JAR</strong> - Java Archiveファイルの実行</li><li><strong>Python wheel</strong> - Pythonパッケージの実行</li><li><strong>Python script</strong> - Pythonスクリプトファイルの実行</li><li><strong>Spark submit</strong> - spark-submitコマンドを使用したSparkアプリケーションの実行</li><li><strong>SQL query/file</strong> - SQLクエリまたはSQLファイルの実行</li><li><strong>dbt</strong> - dbt (data build tool)プロジェクトの実行</li><li><strong>Pipeline (DLT)</strong> - Delta Live Tablesパイプラインの実行</li><li><strong>If/else condition</strong> - 条件分岐ロジック</li><li><strong>For each</strong> - ループ処理ロジック</li></ul><p><strong>ワークフロー制御タスクの詳細：</strong></p><ul><li><strong>If/else condition</strong> - 指定された条件に基づいて実行パスを分岐</li><li><strong>For each</strong> - リストやパラメータセットに対して反復処理を実行</li></ul><p><strong>REST API callがサポートされない理由：</strong></p><ul><li><strong>セキュリティ上の懸念</strong> - 外部APIへの任意の呼び出しはセキュリティリスクを伴う</li><li><strong>信頼性の問題</strong> - 外部サービスの可用性に依存するため、ジョブの信頼性が低下する可能性</li><li><strong>管理の複雑さ</strong> - APIキー、認証情報、エンドポイントの管理が複雑</li><li><strong>エラーハンドリングの困難さ</strong> - HTTPステータスコード、タイムアウト、リトライ等の一般的な処理が困難</li></ul><p><strong>REST API呼び出しの代替手段：</strong></p><ul><li><strong>Python scriptタスク</strong> - requestsライブラリを使用してREST APIを呼び出すPythonコードを実行</li><li><strong>Notebookタスク</strong> - ノートブック内でHTTPリクエストを実行するコードを記述</li><li><strong>外部ワークフローツール</strong> - Apache AirflowやAzure Data Factory等の外部オーケストレーションツールを使用</li></ul>",
    "id": 43,
    "question": "Databricks Jobsで有効でないタスクタイプは次のうちどれですか？",
    "summary": "Databricks JobsではIf/else condition、SQL query、Python wheelなどのタスクタイプがサポートされていますが、REST API callは直接的なタスクタイプとしてはサポートされていません。",
    "tags": "デプロイとデバッグ"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "アプリケーションの信頼性、速度、スケーラビリティ、応答性を測定するアプローチ"
      },
      {
        "is_correct": false,
        "text": "アプリケーションの各機能がビジネス要件に従って動作するかを検証するアプローチ"
      },
      {
        "is_correct": false,
        "text": "アプリケーションのサブシステム間の相互作用をテストし、モジュールがグループとして適切に動作することを確認するアプローチ"
      },
      {
        "is_correct": true,
        "text": "実際のシナリオでアプリケーションが適切に動作することを確認するため、ユーザー体験をシミュレートするアプローチ"
      }
    ],
    "explanation": "<p><strong>エンドツーエンド（End-to-End）テスト</strong>は、アプリケーションが実際のシナリオで適切に動作することを確認するためのアプローチです。このテストの目標は、開始から終了まで実際のユーザー体験をシミュレートすることです。</p><p><strong>エンドツーエンドテストの主な特徴</strong>：</p><ul><li><strong>実世界のシミュレーション</strong> - 実際のユーザーがアプリケーションを使用する方法を模倣</li><li><strong>完全なワークフロー</strong> - システム全体を通じた処理の流れを検証</li><li><strong>統合性の確認</strong> - 複数のコンポーネントが連携して動作することを確認</li><li><strong>ユーザー視点</strong> - エンドユーザーの観点からの検証</li></ul><p><strong>他のテスト手法との違い</strong>：</p><ul><li><strong>パフォーマンステスト</strong> - 信頼性、速度、スケーラビリティ、応答性を測定（負荷テスト、ストレステスト等）</li><li><strong>機能テスト</strong> - 各機能がビジネス要件に従って動作するかを検証</li><li><strong>統合テスト</strong> - サブシステム間の相互作用をテストし、モジュールがグループとして動作するかを確認</li><li><strong>エンドツーエンドテスト</strong> - 実際のユーザー体験を通じてシステム全体の動作を検証</li></ul><p><strong>データエンジニアリングにおけるエンドツーエンドテスト</strong>：</p><ul><li><strong>データパイプライン全体</strong> - データソースから最終的な分析結果まで</li><li><strong>実データでの検証</strong> - サンプルデータではなく実際のデータフローを使用</li><li><strong>依存関係の確認</strong> - 外部システム、API、データベース等の連携確認</li><li><strong>エラー処理</strong> - 障害発生時の復旧機能の検証</li></ul>",
    "id": 44,
    "question": "エンドツーエンドテストについて正しく説明している文は次のうちどれですか？",
    "summary": "エンドツーエンドテストは、実際のユーザー体験をシミュレートして、アプリケーションが実世界のシナリオで適切に動作することを開始から終了まで検証するテスト手法です。",
    "tags": "デプロイとデバッグ"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "sha2(credit_card, 0)"
      },
      {
        "is_correct": true,
        "text": "sha2(credit_card, 128)"
      },
      {
        "is_correct": false,
        "text": "sha2(credit_card, 256)"
      },
      {
        "is_correct": false,
        "text": "sha2(credit_card, 512)"
      }
    ],
    "explanation": "<p>Apache Sparkでは、<code>sha2(expression, bitLength)</code>は式のSHA-2ファミリーのチェックサムを16進文字列として返します。<strong>特定のSHA-2ビット長のみをサポート</strong>しており、サポートされているのは<strong>224、256、384、512</strong>です。128などの他のビット長は無効であり、関数が失敗する原因となります。<code>bitLength</code>が0の場合は256と同等であることに注意してください。</p><p><strong>SHA-2関数でサポートされているビット長</strong>:</p><ul><li><strong>224ビット</strong> - SHA-224ハッシュアルゴリズム</li><li><strong>256ビット</strong> - SHA-256ハッシュアルゴリズム（最も一般的）</li><li><strong>384ビット</strong> - SHA-384ハッシュアルゴリズム</li><li><strong>512ビット</strong> - SHA-512ハッシュアルゴリズム</li><li><strong>0</strong> - デフォルトで256ビット（SHA-256）と同等</li></ul><p><strong>サポートされていないビット長</strong>:</p><ul><li><strong>128ビット</strong> - SHA-2ファミリーには128ビットのバリアントが存在しないため無効</li><li><strong>その他の任意の数値</strong> - 上記以外のビット長は全て無効</li></ul><p><strong>データ匿名化での使用例</strong>:</p><pre><code>-- 有効なSHA-2関数呼び出し\nSELECT \n    customer_id,\n    sha2(credit_card, 256) AS hashed_cc_256,\n    sha2(credit_card, 512) AS hashed_cc_512,\n    sha2(credit_card, 0) AS hashed_cc_default  -- 256と同等\nFROM customers;\n\n-- 無効な関数呼び出し（エラーが発生）\nSELECT sha2(credit_card, 128) AS invalid_hash  -- 失敗する\nFROM customers;</code></pre><p><strong>セキュリティ上の考慮事項</strong>:</p><ul><li><strong>ビット長の選択</strong> - より長いビット長（512）はより高いセキュリティを提供するが、パフォーマンスに影響</li><li><strong>ソルト値の追加</strong> - レインボーテーブル攻撃を防ぐためにソルト値を結合することを推奨</li><li><strong>一意性の確保</strong> - 同じ入力は常に同じハッシュを生成するため、追加の匿名化技術が必要な場合がある</li><li><strong>不可逆性</strong> - SHA-2は一方向関数であり、ハッシュから元のデータを復元することはできない</li></ul><p><strong>実用的な匿名化パターン</strong>:</p><pre><code>-- ソルト値を使用した強化されたハッシュ化\nSELECT \n    customer_id,\n    sha2(CONCAT(credit_card, 'your_salt_value'), 256) AS salted_hash,\n    sha2(CONCAT(ssn, customer_id), 512) AS unique_ssn_hash\nFROM sensitive_data;\n\n-- 複数レベルのハッシュ化\nSELECT \n    sha2(\n        CONCAT(\n            sha2(credit_card, 256), \n            current_date()\n        ), 512\n    ) AS double_hashed_cc\nFROM customers;</code></pre><p><strong>パフォーマンスへの影響</strong>:</p><ul><li><strong>SHA-256</strong> - バランスの取れたセキュリティとパフォーマンス</li><li><strong>SHA-512</strong> - より高いセキュリティだが計算コストが高い</li><li><strong>SHA-224/384</strong> - 特定のセキュリティ要件がある場合に使用</li></ul><p><strong>エラーハンドリング</strong>:</p><pre><code>-- 条件付きハッシュ化（NULL値の処理）\nSELECT \n    CASE \n        WHEN credit_card IS NOT NULL \n        THEN sha2(credit_card, 256)\n        ELSE NULL \n    END AS safe_hashed_cc\nFROM customers;</code></pre><p>したがって、<code>sha2(credit_card, 128)</code>は<strong>サポートされていないビット長</strong>のため失敗します。データの匿名化を行う際は、サポートされているビット長（224、256、384、512、または0）のみを使用し、セキュリティ要件に応じて適切な値を選択することが重要です。</p>",
    "id": 45,
    "question": "データエンジニアリングチームが、ETLパイプラインで機密性の高い顧客データを匿名化する作業を任されています。顧客のクレジットカード番号を保持する列に対してSHA-2ハッシュを生成する必要があります。チームは、SparkのSHA2関数が特定のビット長をサポートしているが、任意の数値は全てサポートしているわけではないことを認識しています。\n\n以下のSHA-2関数呼び出しのうち、無効なビット長のために失敗するものはどれですか？",
    "summary": "Apache SparkのSHA2関数は224、256、384、512ビット（および0は256と同等）のみをサポートしており、128ビットなどの他のビット長は無効でありエラーが発生します。",
    "tags": "セキュリティとコンプライアンス"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "Spark Structured StreamingのforeachBatchロジックを使用して、trigger(processingTime=\"24 hours\")でorders_rawから新しいレコードを処理する"
      },
      {
        "is_correct": false,
        "text": "バッチ上書きロジックを使用してorders_rawの全レコードを再処理し、orders_cleanedテーブルを上書きする"
      },
      {
        "is_correct": false,
        "text": "Delta Lakeのタイムトラベル機能を使用してorders_rawの最新バージョンと一つ前のバージョンを比較し、差分をorders_cleanedテーブルに書き込む"
      },
      {
        "is_correct": true,
        "text": "trigger availableNowオプションを使用してSpark Structured Streamingでorders_rawからの新しいレコードをバッチモードで処理する"
      }
    ],
    "explanation": "<p><code>trigger(availableNow=True)</code>は、一度だけまたはスケジュールされたバッチ実行において<strong>よりコンピュート効率が高く</strong>、利用可能なすべてのデータを一度に処理して停止し、クラスターを継続的に実行するオーバーヘッドを回避できます。一方、<code>processingTime</code>オプションはストリームを継続的にアクティブに保つため、夜間ジョブには非効率です。</p><p><strong>Spark Structured Streamingのトリガーオプションの比較</strong>：</p><ul><li><strong><code>trigger(availableNow=True)</code></strong> - 利用可能なすべてのデータを一度に処理して終了。バッチ処理に最適</li><li><strong><code>trigger(processingTime=\"24 hours\")</code></strong> - 24時間ごとにデータを処理するが、ストリームが継続的に実行状態を維持</li><li><strong><code>trigger(once=True)</code></strong> - 非推奨（新しいDatabricks Runtimeバージョンでは非推奨）</li></ul><p><strong>コスト最適化の観点からの各アプローチの分析</strong>：</p><ul><li><strong>availableNowアプローチ</strong> - 新しいデータのみを効率的に処理、最小のリソース使用量</li><li><strong>processingTimeアプローチ</strong> - クラスターが24時間継続的に実行され、リソースの無駄使用</li><li><strong>全体上書きアプローチ</strong> - 既存の全データを再処理するため、非常に非効率</li><li><strong>タイムトラベルアプローチ</strong> - 手動で管理が必要で、エラーが発生しやすい</li></ul><p><strong>availableNowオプションの実装例</strong>：</p><pre><code># コスト効率的なバッチ処理\nquery = (spark.readStream\n    .format(\"delta\")\n    .table(\"orders_raw\")\n    .filter(\"order_date >= current_date() - 1\")  # 新しいデータのみ\n    .writeStream\n    .format(\"delta\")\n    .option(\"checkpointLocation\", \"/path/to/checkpoint\")\n    .trigger(availableNow=True)  # 一度だけ実行して終了\n    .table(\"orders_cleaned\")\n    .start()\n)\n\n# 処理が完了するまで待機\nquery.awaitTermination()</code></pre><p><strong>非推奨アプローチの問題点</strong>：</p><ul><li><strong>trigger(once=True)</strong> - 新しいバージョンでは非推奨であり、<code>availableNow</code>の使用が推奨される</li><li><strong>継続実行ストリーム</strong> - リソースを無駄に消費し、クラスターのアイドル時間を生み出す</li><li><strong>手動管理</strong> - タイムトラベルアプローチはバージョン管理が複雑で、メンテナンスコストが高い</li></ul><p><strong>ベストプラクティス</strong>：</p><ul><li><strong>増分処理の推奨</strong> - 新しいデータのみを処理してコンピュートコストを最小化</li><li><strong>availableNowの使用</strong> - スケジュールされたバッチジョブに最適</li><li><strong>チェックポイントの活用</strong> - 処理進行状況を追跡し、障害時の復旧を容易に</li><li><strong>リソース管理</strong> - 必要最小限のコンピュートリソースで効率的な処理を実現</li></ul><p><strong>注意</strong>：現在の認定試験では<code>trigger(once=True)</code>オプションをまだ見ることがありますが、Databricksは今後のすべての増分バッチ処理ワークロードにおいて<code>trigger(availableNow=True)</code>の使用を推奨しています。</p><p>このアプローチにより、<strong>コンピュートコストを最小化</strong>しながら、新しいデータのみを効率的に処理し、BronzeからSilverテーブルへのデータ伝播を実現できます。</p>",
    "id": 46,
    "question": "データエンジニアリングチームは、毎夜新しい注文データが追加される'orders_raw'という名前のシングルプレックスBronzeテーブルを持っています。彼らは注文データのより洗練されたビューを提供するために、'orders_cleaned'という名前の新しいSilverテーブルを作成しました。\n\nチームは、orders_rawテーブルに挿入されたすべての新しいレコードを処理し、それらをorders_cleanedテーブルに伝播するバッチ処理パイプラインを作成したいと考えています。\n\nこのバッチデータの伝播においてコンピュートコストを最小化するソリューションはどれですか？",
    "summary": "Spark Structured Streamingのtrigger(availableNow=True)オプションは、利用可能な全データを一度に処理して停止するため、スケジュールされたバッチ処理においてコンピュートコストを最小化でき、processingTimeオプションよりも効率的です。",
    "tags": "コストとパフォーマンスの最適化"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "各変換後にDataFrameを自動的にキャッシュする"
      },
      {
        "is_correct": true,
        "text": "モジュラー、構成可能、テスト可能な変換を可能にする"
      },
      {
        "is_correct": false,
        "text": "変換前にDataFrameをRDDに変換する"
      },
      {
        "is_correct": false,
        "text": "変換が自動的に複数ノードで並列実行されることを保証する"
      }
    ],
    "explanation": "<p>このシナリオで<code>transform</code>関数を使用する主要な利点は、<strong>モジュラー、構成可能、テスト可能な変換を可能にする</strong>ことです。<code>transform</code>を使用することで、再利用可能な関数をDataFrameにクリーンで連鎖可能な方法で適用でき、各変換を自己完結型にして、保守、テスト、結合を容易にし、実行並列性に影響を与えることなく実現できます。</p><p><strong>transform関数の主な利点</strong>:</p><ul><li><strong>モジュラー設計</strong> - 各変換関数を独立したモジュールとして定義し、再利用可能にする</li><li><strong>構成可能性</strong> - 複数の変換を簡潔にチェーンして組み合わせることができる</li><li><strong>テスト容易性</strong> - 各変換関数を個別に単体テストできる</li><li><strong>可読性の向上</strong> - コードがより読みやすく、理解しやすくなる</li><li><strong>保守性</strong> - 各変換ロジックが分離されているため、修正や更新が容易</li></ul><p><strong>transform関数の使用例</strong>:</p><pre><code>def normalize_email(df):\n    return df.withColumn(\"email\", col(\"email\").lower())\n\ndef calculate_total(df):\n    return df.withColumn(\"total_amount\", col(\"quantity\") * col(\"unit_price\"))\n\ndef add_tax(df):\n    return df.withColumn(\"total_with_tax\", col(\"total_amount\") * 1.08)\n\n# 複数の変換をチェーンして適用\norders_transformed = (orders\n    .transform(normalize_email)\n    .transform(calculate_total)\n    .transform(add_tax)\n)</code></pre><p><strong>従来のアプローチとの比較</strong>:</p><pre><code># 従来のアプローチ（transform使用なし）\norders_step1 = orders.withColumn(\"email\", col(\"email\").lower())\norders_step2 = orders_step1.withColumn(\"total_amount\", col(\"quantity\") * col(\"unit_price\"))\norders_final = orders_step2.withColumn(\"total_with_tax\", col(\"total_amount\") * 1.08)\n\n# transformアプローチ（よりクリーンで再利用可能）\norders_transformed = (orders\n    .transform(normalize_email)\n    .transform(calculate_total)\n    .transform(add_tax)\n)</code></pre><p><strong>他のオプションが正しくない理由</strong>:</p><ul><li><strong>自動キャッシュ</strong> - transform関数は自動的にキャッシュを行わない。キャッシュは明示的に指定する必要がある</li><li><strong>RDD変換</strong> - transform関数はDataFrameをRDDに変換しない。DataFrameのまま処理される</li><li><strong>自動並列化</strong> - 並列実行はSpark自体の機能であり、transform関数固有の機能ではない</li></ul><p><strong>テスト容易性の例</strong>:</p><pre><code>import pytest\nfrom pyspark.sql import SparkSession\nfrom pyspark.sql.functions import col\n\ndef test_normalize_email():\n    spark = SparkSession.builder.appName(\"test\").getOrCreate()\n    \n    # テストデータ作成\n    test_df = spark.createDataFrame([\n        (\"USER@EXAMPLE.COM\",),\n        (\"Test@Domain.org\",)\n    ], [\"email\"])\n    \n    # 変換関数をテスト\n    result_df = test_df.transform(normalize_email)\n    \n    # 結果を検証\n    emails = [row.email for row in result_df.collect()]\n    assert emails == [\"user@example.com\", \"test@domain.org\"]\n\ndef test_calculate_total():\n    spark = SparkSession.builder.appName(\"test\").getOrCreate()\n    \n    test_df = spark.createDataFrame([\n        (2, 10.0),\n        (3, 15.5)\n    ], [\"quantity\", \"unit_price\"])\n    \n    result_df = test_df.transform(calculate_total)\n    \n    totals = [row.total_amount for row in result_df.collect()]\n    assert totals == [20.0, 46.5]</code></pre><p><strong>実用的なパターン</strong>:</p><ul><li><strong>条件付き変換</strong> - 特定の条件下でのみ変換を適用する関数を作成</li><li><strong>パラメータ化された変換</strong> - 設定可能な変換関数を作成</li><li><strong>エラーハンドリング</strong> - 各変換関数内でエラー処理を実装</li><li><strong>ログ出力</strong> - 変換の進行状況を追跡するためのログを追加</li></ul><p>このアプローチにより、<strong>コードの品質、保守性、テスト容易性が大幅に向上</strong>し、データ変換パイプラインの開発と運用が効率化されます。</p>",
    "id": 47,
    "question": "データエンジニアがDataFrame ordersをクリーニングし、連鎖変換を使用して新しい列を計算したいと考えています：\n\ndef normalize_email(df):\n    return df.withColumn(\"email\", col(\"email\").lower())\n \ndef calculate_total(df):\n    return df.withColumn(\"total_amount\", col(\"quantity\") * col(\"unit_price\"))\n \norders_transformed = orders.transform(normalize_email).transform(calculate_total)\n\nこのシナリオでtransform関数を使用することの主な利点は何ですか？",
    "summary": "DataFrameのtransform関数を使用することで、モジュラーで構成可能、テスト可能な変換を実現でき、再利用可能な関数をクリーンで連鎖可能な方法で適用して、各変換を自己完結型にし、保守性とテスト容易性を向上させることができます。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "Liquid Clusteringはデータパターンの変化に応じて簡単に進化でき、手動での再パーティションなしに柔軟性を提供する"
      },
      {
        "is_correct": false,
        "text": "Liquid Clusteringは時間の経過とともにデータを効率的に整理できる増分クラスタリング操作をサポートしている"
      },
      {
        "is_correct": false,
        "text": "Liquid Clusteringはデータファイル全体でバランスの取れたクラスタリングを維持することで、データ分散の偏りを減らすのに役立つ"
      },
      {
        "is_correct": true,
        "text": "Liquid ClusteringはZ-orderインデックシングおよびHiveスタイルテーブルパーティションと同一テーブル内で完全に互換性がある"
      }
    ],
    "explanation": "<p><strong>Liquid ClusteringはパーティションとZ-orderingの両方の代替手段</strong>であり、同じDeltaテーブルで同時に使用することはできません。Liquid Clusteringは、従来の固定パーティションやZ-orderingよりも柔軟で効率的なデータクラスタリング方法を提供します。</p><p><strong>Liquid Clusteringの正しい特徴</strong>：</p><ul><li><strong>増分クラスタリング操作</strong> - ZORDERとは異なり、Liquid Clusteringは時間の経過とともにデータを効率的に整理できる増分クラスタリング操作をサポートしています。OPTIMIZEコマンドを使用したクラスタリング操作は増分的であり、変更されたデータファイルのみを再クラスタリングするため、プロセスが効率的で高速です。</li><li><strong>柔軟な進化</strong> - Liquid Clusteringはデータパターンの変化に応じて簡単に進化でき、手動での再パーティションなしに柔軟性を提供します。従来の静的パーティションとは異なり、Liquid Clusteringは新しいクラスタリングキーにシームレスに適応します。</li><li><strong>データスキューの減少</strong> - Liquid Clusteringはデータファイル全体でバランスの取れたクラスタリングを維持することで、データ分散の偏りを減らすのに役立ちます。Liquid Clusteringのようなクラスタリング技術の主な目標は、類似のデータを最小限のデータファイルにグループ化することであり、これは本質的にデータスキューの減少に役立ちます。</li></ul><p><strong>非互換性の理由</strong>：</p><ul><li><strong>Z-orderingとの互換性なし</strong> - Liquid ClusteringとZ-orderingは異なるクラスタリングアプローチであり、同じテーブルで同時に使用できない</li><li><strong>パーティションの置き換え</strong> - Liquid ClusteringはHiveスタイルパーティションの代替手段であり、両方を同時に使用することはできない</li><li><strong>技術的な制約</strong> - Delta Lakeのアーキテクチャ上、これらの最適化手法は排他的であり、一つのテーブルで一つのアプローチのみを使用できる</li></ul><p><strong>Liquid Clusteringの実装手順</strong>：</p><pre><code>-- 既存テーブルでLiquid Clusteringを有効化\nALTER TABLE retail_sales \nCLUSTER BY (product_category, region);\n\n-- 定期的な最適化の実行\nOPTIMIZE retail_sales;</code></pre><p><strong>从来技術との比較</strong>：</p><ul><li><strong>Hiveスタイルパーティション</strong> - 静的で柔軟性に欠け、データパターン変化時の再構成が困難</li><li><strong>Z-ordering</strong> - 非増分的で、毎回全データを処理するためコストが高い</li><li><strong>Liquid Clustering</strong> - 柔軟で増分的、データパターンの変化に適応性が高い</li></ul>",
    "id": 48,
    "question": "小売企業のデータエンジニアリングチームが、1TB未満の既存Deltaテーブルのパフォーマンスを最適化するためにLiquid Clusteringの実装を計画しています。チームはLiquid Clusteringを使用するようにテーブルを変更し、定期的なOPTIMIZEコマンドをスケジュールする予定です。完全なデプロイの前に、チームは既存テーブルでこの最適化技術を有効にすることの主要な特徴と制限を理解したいと考えています。\n\n以下の文のうち、Liquid Clusteringの正しい説明ではないものはどれですか？",
    "summary": "Liquid ClusteringはZ-orderingやHiveスタイルパーティションの代替手段であり、同じDeltaテーブルで同時に使用することはできませんが、増分クラスタリング、柔軟な進化、データスキューの減少などの利点を提供します。",
    "tags": "コストとパフォーマンスの最適化"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "pyspark.sql.DataFrame.distinct"
      },
      {
        "is_correct": false,
        "text": "pyspark.sql.DataFrame.drop"
      },
      {
        "is_correct": true,
        "text": "pyspark.sql.DataFrame.dropDuplicates"
      },
      {
        "is_correct": false,
        "text": "pyspark.sql.DataFrame.dropna"
      }
    ],
    "explanation": "<p><code>pyspark.sql.DataFrame.dropDuplicates</code>関数は、重複行を削除した新しいDataFrameを返します。オプションで特定の列のみを考慮することもできます。</p><p><strong>dropDuplicates関数の主な特徴</strong>：</p><ul><li><strong>複数列での重複削除</strong> - 指定した列の組み合わせに基づいて重複を判定</li><li><strong>柔軟な列指定</strong> - 列名のリストを指定して部分的な重複チェックが可能</li><li><strong>全列での重複削除</strong> - パラメータを省略した場合、全ての列で重複を判定</li><li><strong>非破壊的操作</strong> - 元のDataFrameを変更せず、新しいDataFrameを返す</li></ul><p><strong>使用例</strong>：</p><pre><code># 全列での重複削除\ndf_unique = df.dropDuplicates()\n\n# 特定列での重複削除\ndf_unique = df.dropDuplicates(['customer_id', 'order_date'])\n\n# 単一列での重複削除\ndf_unique = df.dropDuplicates(['email'])</code></pre><p><strong>他の関数との違い</strong>：</p><ul><li><strong><code>distinct()</code></strong> - 全列での重複削除のみで、特定列での重複削除はできない</li><li><strong><code>drop()</code></strong> - 列を削除する関数であり、重複行の削除ではない</li><li><strong><code>dropna()</code></strong> - NULL値を含む行を削除する関数であり、重複行の削除ではない</li><li><strong><code>dropDuplicates()</code></strong> - 特定列を指定した柔軟な重複削除が可能</li></ul><p><strong>実用的な使用ケース</strong>：</p><pre><code># 顧客データの重複削除\ncustomers_unique = customers_df.dropDuplicates(['customer_id'])\n\n# 注文データの日付別重複削除\norders_daily_unique = orders_df.dropDuplicates(['customer_id', 'order_date'])\n\n# 製品マスタの重複削除\nproducts_unique = products_df.dropDuplicates(['product_code', 'category'])</code></pre></li></ul></li></ul></li></ul></li></ul></li></ul></li></ul></li></ul>",
    "id": 49,
    "question": "データエンジニアが複数の列に基づいて、与えられたDataFrameから一意の行を含む新しいDataFrameを返すために使用できる関数は次のうちどれですか？",
    "summary": "pyspark.sql.DataFrame.dropDuplicates関数は、特定の列や全列に基づいて重複行を削除した新しいDataFrameを返し、distinct()よりも柔軟な重複削除が可能です。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": ".window(\"order_timestamp\", \"30 minutes\")"
      },
      {
        "is_correct": false,
        "text": ".awaitWatermark(\"order_timestamp\", \"30 minutes\")"
      },
      {
        "is_correct": false,
        "text": ".trigger(processingTime=\"30 minutes\")"
      },
      {
        "is_correct": true,
        "text": ".withWatermark(\"order_timestamp\", \"30 minutes\")"
      }
    ],
    "explanation": "<p><code>pyspark.sql.DataFrame.withWatermark</code>関数を使用することで、<strong>レコードが遅延する可能性がある時間ウィンドウの間のみ状態情報を追跡</strong>することができます。</p><p><strong>withWatermarkの主な機能</strong>：</p><ul><li><strong>遅延データの処理</strong> - 指定した時間内に到着が予想される遅延レコードを適切に処理</li><li><strong>状態管理の最適化</strong> - 無制限に状態が蓄積されることを防ぎ、メモリ使用量を制限</li><li><strong>ウォーターマークによる境界設定</strong> - 指定した遅延許容時間を超えた古いデータを破棄</li><li><strong>ストリーミング集計の効率化</strong> - 時間ベースの集計処理でのパフォーマンス向上</li></ul><p><strong>他のオプションが適切でない理由</strong>：</p><ul><li><strong><code>.window()</code></strong> - 時間ウィンドウを定義する関数だが、遅延データの状態管理は行わない</li><li><strong><code>.awaitWatermark()</code></strong> - 存在しない関数名</li><li><strong><code>.trigger(processingTime=\"30 minutes\")</code></strong> - 処理トリガーの間隔を設定するもので、遅延データの状態管理とは異なる</li><li><strong><code>.withWatermark()</code></strong> - 遅延データ処理のための状態情報を指定時間だけ保持する正しい関数</li></ul><p><strong>withWatermarkの動作原理</strong>：</p><ul><li><strong>イベント時間の追跡</strong> - ストリームで観測された最大のイベント時間を記録</li><li><strong>ウォーターマーク計算</strong> - 最大イベント時間から遅延許容時間を引いた値をウォーターマークとして設定</li><li><strong>古い状態の清理</strong> - ウォーターマークを下回るイベント時間の状態データを自動的に削除</li><li><strong>遅延データの受け入れ</strong> - ウォーターマーク以上のイベント時間を持つ遅延データは正常に処理</li></ul><p><strong>実用的な使用例</strong>：</p><pre><code># 正しい実装例\nquery = (spark.readStream\n    .table(\"orders_cleaned\")\n    .withWatermark(\"order_timestamp\", \"30 minutes\")  # 30分の遅延許容\n    .groupBy(\n        window(\"order_timestamp\", \"10 minutes\"),  # 10分ウィンドウ\n        \"author\")\n    .agg(\n        count(\"order_id\").alias(\"orders_count\"),\n        avg(\"quantity\").alias(\"avg_quantity\"))\n    .writeStream\n    .option(\"checkpointLocation\", \"dbfs:/path/checkpoint\")\n    .outputMode(\"update\")  # 遅延データ処理では通常updateモード\n    .table(\"orders_stats\")\n)</code></pre><p><strong>遅延データ処理のベストプラクティス</strong>：</p><ul><li><strong>適切な遅延許容時間の設定</strong> - ビジネス要件と技術的制約のバランスを考慮</li><li><strong>出力モードの選択</strong> - 遅延データがある場合はupdateまたはappendモードを使用</li><li><strong>リソース監視</strong> - 状態サイズとメモリ使用量の継続的な監視</li><li><strong>チェックポイントの管理</strong> - 障害時の復旧とパフォーマンス最適化</li></ul></li></ul></li></ul></li></ul>",
    "id": 50,
    "question": "データエンジニアが以下の空欄のあるストリーミングクエリを持っています：\n\nspark.readStream\n       .table(\"orders_cleaned\")\n       ____________________________\n       .groupBy(\n           \"order_timestamp\",\n           \"author\")\n       .agg(\n           count(\"order_id\").alias(\"orders_count\"),\n           avg(\"quantity\").alias(\"avg_quantity\"))\n    .writeStream\n       .option(\"checkpointLocation\", \"dbfs:/path/checkpoint\")\n       .table(\"orders_stats\")\n\n遅延到着データを処理するために、30分間ストリーミング状態情報を維持したいと考えています。\n\nこの要件を満たすために空欄を正しく埋めるオプションはどれですか？",
    "summary": "pyspark.sql.DataFrame.withWatermark関数は、レコードが遅延する可能性がある時間ウィンドウの間のみ状態情報を追跡することで、遅延データの適切な処理とメモリ使用量の最適化を可能にします。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "CDFは各バッチで少数のレコードのみが更新される場合に有用である"
      },
      {
        "is_correct": false,
        "text": "CDFでキャプチャされたテーブルのデータ変更はストリーミングモードでのみ読み取り可能である"
      },
      {
        "is_correct": false,
        "text": "CDFはテーブルがType 2のSlowly Changing Dimension（SCD）の場合に有用である"
      },
      {
        "is_correct": false,
        "text": "CDFは既存テーブルでは有効化できない。新規作成テーブルでのみ有効化可能である"
      }
    ],
    "explanation": "<p>一般的に、<strong>Change Data Feed（CDF）</strong>はマルチホップアーキテクチャでダウンストリームテーブルに増分データ変更を送信するために使用します。したがって、<strong>各バッチで少数のレコードのみが更新される場合にCDFを使用</strong>します。このような更新は通常、外部ソースからCDC形式で受信されます。テーブル内のほとんどのレコードが更新される場合、または問題文のように各バッチでテーブルが上書きされる場合は、CDFを使用しないでください。</p><p><strong>CDFを使用すべきシナリオ</strong>：</p><ul><li><strong>少数のレコード更新</strong> - 大部分のデータが変更されない場合に効率的</li><li><strong>CDCデータの処理</strong> - 外部システムからのChange Data Captureデータを処理する場合</li><li><strong>リアルタイム連携</strong> - 下流システムに変更を素早く伝播する必要がある場合</li><li><strong>マルチホップアーキテクチャ</strong> - Bronze、Silver、Goldテーブル間での増分データ伝播</li></ul><p><strong>CDFを使用すべきでないシナリオ</strong>：</p><ul><li><strong>全体上書き</strong> - Type 1 SCDのようにテーブル全体が上書きされる場合</li><li><strong>大量更新</strong> - テーブルの大部分のレコードが更新される場合</li><li><strong>バッチ上書き処理</strong> - 毎夜全データを置き換えるような処理パターン</li></ul><p><strong>他のオプションが不正解な理由</strong>：</p><ul><li><strong>ストリーミングモードのみ</strong> - CDFデータはバッチモードでも読み取り可能です</li><li><strong>SCD Type 2での有用性</strong> - CDFはType 2 SCDよりもType 1 SCDや小規模更新でより有効です</li><li><strong>既存テーブルでの有効化</strong> - CDFは既存テーブルでもALTER TABLEで有効化可能です</li></ul><p><strong>CDFの有効化と使用方法</strong>：</p><pre><code>-- 既存テーブルでCDFを有効化\nALTER TABLE my_table \nSET TBLPROPERTIES (delta.enableChangeDataFeed = true);\n\n-- バッチでCDFデータを読み取り\nSELECT * \nFROM table_changes('my_table', 2, 5);\n\n-- ストリーミングでCDFデータを読み取り\nspark.readStream\n  .option(\"readChangeFeed\", \"true\")\n  .option(\"startingVersion\", 0)\n  .table(\"my_table\")</code></pre><p><strong>パフォーマンスとコストへの影響</strong>：</p><ul><li><strong>ストレージオーバーヘッド</strong> - CDFは変更情報を追加で保存するため、ストレージ使用量が増加</li><li><strong>小規模更新で効率的</strong> - 少数のレコード更新時は全テーブル処理よりも効率的</li><li><strong>大規模更新で非効率</strong> - 大部分のデータが変更される場合はオーバーヘッドが大きい</li></ul><p><strong>実用的なガイドライン</strong>：</p><ul><li><strong>更新率の評価</strong> - 各バッチで更新されるレコードの割合を評価し、CDFの適用性を判断</li><li><strong>ダウンストリームの要件</strong> - 下流システムが増分更新を必要としているかを確認</li><li><strong>コストベネフィット分析</strong> - CDFのストレージコストと処理効率化のメリットを比較検討</li><li><strong>モニタリング</strong> - CDFのストレージ使用量とパフォーマンスへの影響を継続的に監視</li></ul>",
    "id": 51,
    "question": "データエンジニアリングチームは、ソースシステムから受信した新しいデータで毎夜上書きされるType 1テーブルを管理しています。\n\nジュニアデータエンジニアが、更新、挿入、または削除された行を特定するために、テーブルでChange Data Feed（CDF）機能を有効にすることを提案しました。\n\nジュニアデータエンジニアの提案に対する正しい反応はどれですか？",
    "summary": "Change Data Feed（CDF）は各バッチで少数のレコードのみが更新される場合に有用であり、Type 1 SCDのようにテーブル全体が上書きされる場合や大量のレコードが更新される場合は使用すべきではありません。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "Optimized WritesとAuto Compactionは、将来のMERGE操作の継続時間を短縮するために自動的により小さなデータファイルを生成する"
      },
      {
        "is_correct": false,
        "text": "Auto CompactionはAuto Z-Orderingをサポートしており、これは単純な圧縮よりもコストが高い"
      },
      {
        "is_correct": false,
        "text": "Optimized WritesとAuto Compactionは大規模なDeltaテーブルには効果がない。テーブルをパーティション化してAuto Compactionをパーティションレベルで適用する必要がある"
      },
      {
        "is_correct": false,
        "text": "Optimized WritesとAuto Compactionは外部テーブルには効果がない。ファイルサイズの情報をHiveメタストアに保存するためにテーブルを管理対象にする必要がある"
      }
    ],
    "explanation": "<p><strong>多数の小さなファイルは、マージや削除などの操作中の書き換えを最小限に抑えるのに役立ちます</strong>。このような操作に対して、DatabricksはDeltaテーブルのファイルサイズを自動的に調整できます。その結果、デフォルトの128MBより小さなデータファイルを生成することがあります。これにより、将来のMERGE操作の継続時間を短縮できます。</p><p><strong>ワークロードベースの自動ファイルサイズ調整</strong>：</p><ul><li><strong>適応的サイジング</strong> - DatabricksはワークロードパターンとMERGE頻度に基づいて最適なファイルサイズを動的に決定</li><li><strong>MERGE最適化</strong> - より小さなファイルを保持することで、MERGE操作時の書き換え対象データ量を削減</li><li><strong>削除操作の効率化</strong> - DELETE操作でも同様に、小さなファイルにより影響範囲を限定</li><li><strong>パフォーマンストレードオフ</strong> - 読み取りパフォーマンスと書き込み最適化のバランスを自動調整</li></ul><p><strong>Auto OptimizationとOptimized Writesの動作</strong>：</p><ul><li><strong>インテリジェントサイジング</strong> - 単純に128MBを目標とするのではなく、操作パターンに基づいてファイルサイズを決定</li><li><strong>頻繁なMERGEパターン検出</strong> - テーブルに頻繁なMERGE操作が実行される場合、より小さなファイルサイズが選択される</li><li><strong>書き込み効率の向上</strong> - 新しいデータの書き込み時に将来の操作を考慮した最適化</li><li><strong>自動調整機能</strong> - ユーザーの明示的な設定なしに、ワークロードに応じて自動的に調整</li></ul><p><strong>他のオプションが不正解な理由</strong>：</p><ul><li><strong>Auto Z-Orderingについて</strong> - Auto CompactionはZ-Orderingを自動実行せず、これは別の機能です</li><li><strong>大規模テーブルでの効果</strong> - OptimizationとAuto Compactionは大規模テーブルでも有効で、パーティション化は必須ではありません</li><li><strong>外部テーブルでの動作</strong> - これらの機能は外部Deltaテーブルでも正常に動作し、Hiveメタストアは関係ありません</li></ul><p><strong>実際の動作例</strong>：</p><pre><code>-- テーブルでAuto Optimizationを有効化\nALTER TABLE large_external_table \nSET TBLPROPERTIES (\n  'delta.autoOptimize.optimizeWrite' = 'true',\n  'delta.autoOptimize.autoCompact' = 'true'\n);\n\n-- 頻繁なMERGE操作\nMERGE INTO large_external_table AS target\nUSING source_changes AS source\nON target.id = source.id\nWHEN MATCHED THEN UPDATE SET *\nWHEN NOT MATCHED THEN INSERT *;</code></pre><p><strong>ファイルサイズ最適化の利点</strong>：</p><ul><li><strong>MERGE性能向上</strong> - 小さなファイルにより変更対象データの特定と処理が効率化</li><li><strong>書き換え量削減</strong> - 必要最小限のデータのみを書き換えることで処理時間短縮</li><li><strong>並列性向上</strong> - より多くの小さなタスクで並列処理が可能</li><li><strong>リソース効率</strong> - メモリ使用量とI/Oパターンの最適化</li></ul><p><strong>モニタリングと調整</strong>：</p><ul><li><strong>ファイルサイズ分析</strong> - <code>DESCRIBE DETAIL</code>でファイルサイズ分布を確認</li><li><strong>操作性能監視</strong> - MERGE操作の実行時間とリソース使用量を追跡</li><li><strong>自動調整の検証</strong> - システムが選択したファイルサイズがワークロードに適しているかを評価</li><li><strong>手動調整オプション</strong> - 必要に応じて<code>delta.targetFileSize</code>で手動設定可能</li></ul><p>この<strong>インテリジェントなファイルサイズ調整機能</strong>により、Databricksは読み取りと書き込みのパフォーマンスを動的にバランスし、特に頻繁なMERGE操作があるワークロードで最適なパフォーマンスを実現します。</p>",
    "id": 52,
    "question": "データエンジニアリングチームは、新しい変更が非常に頻繁にマージされる大規模な外部Deltaテーブルを持っています。小さなデータファイルを自動的に128MBサイズのターゲットファイルに圧縮するために、テーブルでOptimized WritesとAuto Compactionを有効にしました。しかし、テーブルディレクトリを確認すると、ほとんどのデータファイルが128MBより小さいことがわかりました。\n\nこれらの小さなファイルサイズを説明する最も可能性の高い理由は次のうちどれですか？",
    "summary": "Optimized WritesとAuto Compactionは、頻繁なMERGE操作があるワークロードでは、将来のMERGE操作の効率を向上させるために128MBより小さなファイルを意図的に生成し、これによりデータの書き換え量を最小限に抑えて操作時間を短縮します。",
    "tags": "コストとパフォーマンスの最適化"
  },
  {
    "id": 53,
    "question": "Delta Lake のファイル統計情報の利点として、正しいものはどれですか？",
    "choices": [
      {
        "text": "Parquetファイルのデータ破損を確認するためのチェックサムとして使用される",
        "is_correct": false
      },
      {
        "text": "Delta Cachingを改善するためのデータ圧縮に活用される",
        "is_correct": false
      },
      {
        "text": "選択的クエリ実行時のプロセス時間予測に活用される",
        "is_correct": false
      },
      {
        "text": "選択的クエリ実行時のデータスキップに活用される",
        "is_correct": true
      }
    ],
    "explanation": "<p>Delta Lake のファイル統計情報は、各ファイルについて以下の情報を示します：</p><ul><li>総レコード数</li><li>テーブルの最初の32列の各列の最小値</li><li>テーブルの最初の32列の各列の最大値</li><li>テーブルの最初の32列の各列のNull値カウント</li></ul><p>これらの統計情報は、クエリフィルターに基づくデータスキップに活用されます。例えば、テーブルのレコード総数を照会する場合、Deltaはすべてのデータファイルをスキャンしてカウントを計算するのではなく、これらの統計情報を活用してクエリ結果を生成します。</p>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "Delta Lake のファイル統計情報は、クエリのパフォーマンスを向上させるためにデータスキップを可能にする"
  },
  {
    "id": 54,
    "question": "データエンジニアリングチームは、次のクエリで作成されたDelta Lakeテーブルを持っています：\nCREATE TABLE target\nAS SELECT * FROM source\nデータエンジニアは、以下のクエリでソーステーブルを削除したいと考えています：\nDROP TABLE source\nこのドロップコマンドを実行した結果を最も正確に説明しているものはどれですか？",
    "choices": [
      {
        "text": "ソーステーブルのみが削除され、ターゲットテーブルはクエリ不可能になる",
        "is_correct": false
      },
      {
        "text": "ソーステーブルのみが削除され、ターゲットテーブルは影響を受けない",
        "is_correct": true
      },
      {
        "text": "ソーステーブルに基づく他のテーブルがあることを示すエラーが発生する",
        "is_correct": false
      },
      {
        "text": "ターゲットとソーステーブルの両方が削除される",
        "is_correct": false
      }
    ],
    "explanation": "<p>CREATE TABLE AS SELECT（CTAS）ステートメントは、新しいDelta Lakeテーブルを作成し、SELECTクエリの出力を使用してデータを設定します。ソーステーブルを削除しても、ターゲットテーブルには影響しません。</p><p>重要なポイント：</p><ul><li>CTASは、ソーステーブルからデータをコピーして新しいテーブルを作成します</li><li>ターゲットテーブルは、ソーステーブルから独立したデータを持っています</li><li>ソーステーブルの削除は、すでに作成されたターゲットテーブルには影響を与えません</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "CREATE TABLE AS SELECTで作成されたテーブルは、ソーステーブルとは独立しており、ソーステーブルの削除の影響を受けません。"
  },
  {
    "id": 55,
    "question": "データエンジニアリングチームは、ホテル予約データをクリーニングおよび検証するためのLDPパイプラインを構築しています。一部の完了した予約には、チェックイン日またはチェックアウト日がNULLであり、これはビジネスルールに違反しています。\n\nこれを処理するために、以下のコードを実装しました:\nrules = {\n    \"valid_check_in\": \"(check_in IS NOT NULL)\",\n    \"valid_check_out\": \"(check_out IS NOT NULL)\",\n}\nquarantine_rules = \"NOT({0})\".format(\" AND \".join(rules.values()))\n \n@dlt.table(partition_cols=[\"is_quarantined\"])\n@dlt.expect_all(rules)\ndef silver_reservations():\nreturn (\n    spark.readStream.table(\"bronze_reservations\")\n                     .withColumn(\"is_quarantined\", expr(quarantine_rules))\n)\nこの関数が行うことを正確に説明しているものはどれですか?",
    "choices": [
      {
        "text": "この関数は、有効なチェックインおよびチェックアウト値を持つ行のみをsilver_reservationsテーブルにストリーミングし、無効な行を別のパーティションに書き込みます。",
        "is_correct": false
      },
      {
        "text": "この関数はbronze_reservationsテーブルをis_quarantined フラグでパーティション分割し、有効なパーティションをsilver_reservationsテーブルにストリーミングし、無効なパーティションを削除します。",
        "is_correct": false
      },
      {
        "text": "この関数は、すべての行をsilver_reservationsテーブルにストリーミングし、チェックインまたはチェックアウト値が欠落している行を検疫済みとしてフラグ付けし、is_quarantinedフラグでテーブルをパーティション分割します。",
        "is_correct": true
      },
      {
        "text": "この関数は、quarantine_rulesに基づいて行をストリーミングし、有効な予約用のsilver_reservations、無効な予約用のis_quarantinedの2つの別々のテーブルを作成します。",
        "is_correct": false
      }
    ],
    "explanation": "<p>この関数は、bronze_reservationsテーブルからすべての行をsilver_reservationsテーブルにストリーミングし、チェックインまたはチェックアウト日が欠落している記録を示す新しいBoolean列「is_quarantined」を追加し、そのフラグによってテーブルをパーティション分割します。</p><p>重要なポイント：</p><ul><li><code>dlt.expect_all(rules)</code>デコレータは、データ品質の期待値を適用しますが、無効な行を削除しません</li><li>無効な記録も同じテーブル内に保持され、データ品質の問題を追跡および修正できます</li><li>この設計は、悪いデータを完全に破棄するのではなく、タグ付けとパーティション分割によって同じデータセット内に隔離する一般的なパターンです</li></ul><p>このアプローチにより、本番データパイプラインにおけるデータの信頼性と監査可能性を確保しながら、ストリーミングデータの継続的な取り込みと検証が可能になります。</p>",
    "summary": "Delta Live Tablesを使用して、すべてのデータをストリーミングしながら、データ品質の問題のある行を検疫し、トレーサビリティを維持します。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "Delta Sharingプロトコルにより、すべての共有データに定額料金が適用される"
      },
      {
        "is_correct": false,
        "text": "クラウド間を走るDelta SharingサーバーのためのDBUコスト"
      },
      {
        "is_correct": false,
        "text": "Delta Sharingがクラウドおよびリージョン間のデータ複製を必要とするためのストレージコスト"
      },
      {
        "is_correct": true,
        "text": "クラウドプロバイダおよびリージョン間のデータ転送時に発生するエグレス手数料"
      }
    ],
    "explanation": "<p>クラウドインフラ構造からデータが異なるクラウドプラットフォームまたは地理的リージョンに転送される場合、クラウドプロバイダは「データエグレス手数料」を適用します。</p><p>これらの手数料は、転送されるデータ量に従って大きく異なる可能性があります。</p><p>このシナリオでは：</p><ul><li>AWSから異なるクラウドプロバイダ（Azure）へのデータ転送</li><li>地理的に異なるリージョン（エリア）間のデータ転送</li></ul><p>これらの転送により、エグレス手数料が発生します。Delta Sharing自体は大きなコストを加えませんが、クラウドプロバイダのデータ転送課金は、特にエグレス課金について、価格増の要因となります。</p>",
    "id": 56,
    "question": "データ分析企業はDelta Sharingを使用してパートナー企業と協業しています。データプロバイダはデータをAWS US-East-1に格納し、パートナーはAzureのエリアにホスティングされています。大規模なデータ共有を開始した後、同社は課金ダッシュボードで予期しなかったコストに気付きました。この予期しなかったコスト増加の最も可能性の高い原因は何ですか？",
    "summary": "異なるクラウドプロバイダおよびリージョン間のデータ転送によるエグレス課金がコスト増加の主な原因となります。",
    "tags": "コストとパフォーマンスの最適化"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "10分間間隔の重複するインターバルごとにビジネスレベルの集約を計算。遅到データのために5分間の増分状態情報を維持"
      },
      {
        "is_correct": false,
        "text": "10分間間隔の重複しないインターバルごとにビジネスレベルの集約を計算。遅到データのために5分間の増分状態情報を維持"
      },
      {
        "is_correct": false,
        "text": "5分間間隔の重複するインターバルごとにビジネスレベルの集約を計算。遅到データのために10分間の増分状態情報を維持"
      },
      {
        "is_correct": true,
        "text": "5分間間隔の重複しないインターバルごとにビジネスレベルの集約を計算。遅到データのために10分間の増分状態情報を維持"
      }
    ],
    "explanation": "<p><code>pyspark.sql.functions.window</code>関数は、タイムスタンプ列を指定して、一つまたは複数のタイムウインドウに行をバケット化します。このクエリでは、非重複の5分間インターバルごとに<code>order_timestamp</code>に関する集約処理を実行しています。</p><p><code>pyspark.sql.DataFrame.withWatermark</code>関数により、遅到データが予想されるタイムウインドウ内で状態情報を設定できます。ここでは10分間のワーターマークを定義しています。</p><p>主要なポイント：</p><ul><li>ストリーミングクエリは非重複の5分間インターバルを使用</li><li>10分間のワーターマークにより、遅到データの状態管理が可能</li></ul>",
    "id": 57,
    "question": "Sparkストリーミングクエリが以下のように定義されています:\n\nspark.readStream\n        .table(\"orders_cleaned\")\n        .withWatermark(\"order_timestamp\", \"10 minutes\")\n        .groupBy(\n            window(\"order_timestamp\", \"5 minutes\").alias(\"time\"),\n            \"author\")\n        .agg(\n            count(\"order_id\").alias(\"orders_count\"),\n            avg(\"quantity\").alias(\"avg_quantity\"))\n    .writeStream\n        .option(\"checkpointLocation\", \"dbfs:/path/checkpoint\")\n        .table(\"orders_stats\")\nこのクエリに関するもっとも適切な説明はどれですか？",
    "summary": "Sparkストリーミングクエリは、5分間の非重複インターバルで集約を実行し、10分間のウォーターマークにより遅延データを管理します。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "df.withColumn(\"tier\", dense_rank().over(window_spec))"
      },
      {
        "is_correct": false,
        "text": "df.withColumn(\"tier\", rank().over(window_spec))"
      },
      {
        "is_correct": false,
        "text": "df.withColumn(\"tier\", row_number().over(window_spec))"
      },
      {
        "is_correct": false,
        "text": "df.withColumn(\"tier\", percent_rank().over(window_spec))"
      }
    ],
    "explanation": "<p><code>dense_rank()</code>関数は、各部門内での並び順に基づいて連続的なランク番号を割り当て、同一の絡が同じランクまたは「ティア」を受けることを保証します。</p><p>ランク付け関数を試してみて説明します：</p><ul><li><code>rank()</code>：同点の後に番号をスキップします。例えば，1、1、3のようになります。</li><li><code>dense_rank()</code>：1、1、2のように連続した順番を生成し、目的の出力に合致します。</li><li><code>row_number()</code>：同一の絤でも各行に一意のランクを付けます。</li><li><code>percent_rank()</code>：0から1の間の小数値を割り当てます。</li></ul><p>したがって、<code>dense_rank()</code>が各部門内で絤に基づいたティアを正しく割り当てる適切な関数です。</p>",
    "id": 58,
    "question": "データエンジニアは、employee_name、department、salaryの列を持つPySpark DataFrameを持っています。各従業員にディレクト内で絤に基づいたティアを割り当て、同一の絤を得る従業員に同じティアを割り当てたいと考えています。\n\nこの目的のために、彙業員を部門ごとにパーティション分割し、絤を降順に並べるウインドウを定義します：\nwindow_spec = Window.partitionBy(\"department\").orderBy(df[\"salary\"].desc())\nこのウインドウを使ってティア列を正しく計算する関数はどれですか？",
    "summary": "dense_rank()関数は、部門内で同一の絤に対して同一のティアを割り当てる最適な関数です。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "/*+ BROADCAST(c) */"
      },
      {
        "is_correct": false,
        "text": "BROADCAST(c)"
      },
      {
        "is_correct": false,
        "text": "-- BROADCAST(c) --"
      },
      {
        "is_correct": false,
        "text": "BROADCAST ON (c)"
      }
    ],
    "explanation": "<p>Spark SQLでは、結合時に小さなテーブルをブロードキャストするヒントを明示的に指示するには、<code>SELECT</code>キーワードの前に<code>/*+ BROADCAST(テーブルエイリアス) */</code>構文を使用します。</p><p>例：</p><pre><code>SELECT /*+ BROADCAST(c) */\n    s.sale_id, s.amount, c.customer_name\nFROM sales AS s\nINNER JOIN customers AS c\nON s.customer_id = c.customer_id;</code></pre><p>このヒントにより、Sparkは以下のことを行います：</p><ul><li>customersテーブル（小さなテーブル）をすべてのワーカーノードにブロードキャストします</li><li>大きなsalesテーブルとの結合を大幅に高速化します</li></ul><p>重要なポイント：</p><ul><li>小さいテーブルをすべてのワーカーノードに送信することで、大きなテーブルの各パーティションがローカルで結合できます</li><li>クラスター間の高コストなシャッフル操作を回避します</li><li>ネットワークI/Oを大幅に削減し、片方のテーブルがもう一方よりもかなり小さい場合に結合を高速化します</li></ul>",
    "id": 59,
    "question": "データエンジニアは、大規模な売上テーブル（約100億レコード）と小規模な顧客テーブル（約500万レコード）を結合するために、次のクエリを使用しています：\n\nSELECT ______________\n    s.sale_id, s.amount, c.customer_name\nFROM sales AS s\nINNER JOIN customers AS c\nON s.customer_id = c.customer_id;\n\nエンジニアは、クエリオプティマイザーに顧客テーブルでブロードキャスト結合を実行するよう指示するためのブロードキャストヒントを追加したいと考えています。\n\nこの目的を達成するために、空白部分を正しく埋めるオプションはどれですか？",
    "summary": "Spark SQLでは、/*+ BROADCAST(テーブルエイリアス) */構文を使用して、小さなテーブルのブロードキャスト結合を最適化できます。",
    "tags": "コストとパフォーマンスの最適化"
  }
];
