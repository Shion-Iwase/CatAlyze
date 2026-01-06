window.questionsData3 = [
  {
    "id": 1,
    "question": "データエンジニアリングチームが3つのデルタテーブル間の以下のジョイン ロジックを保持しています:\ndf_students = spark.table(\"students\")\ndf_courses = spark.table(\"courses\")\ndf_enrollments = spark.table(\"enrollments\")\ndf_join_1 = (df_students.join(df_enrollments, df_students.student_id == df_enrollments.student_id)\n                        .select(df_students.student_id,\n                                df_students.student_name,\n                                df_enrollments.course_id)\n              )\ndf_join_2 = (df_join_1.join(df_courses, df_join_1.course_id == df_courses.course_id)\n                       .select(df_join_1.student_id,\n                               df_join_1.student_name,\n                               df_courses.course_name)\n              )\n(df_join_2.write\n.mode(\"overwrite\")\n.table(\"students_courses_details\"))\n\nこのコードブロックが実行されるたびに、結果がどのように記述されますか？",
    "choices": [
      {
        "text": "ソーステーブルのいずれかに新たに追加されたレコードのみがジョイン操作で考慮されます。マッチしたレコードがstudents_courses_detailsテーブルを上書きします。",
        "is_correct": false
      },
      {
        "text": "ソーステーブルのいずれかに新たに追加されたレコードのみがジョイン操作で考慮されます。マッチしないレコードがstudents_courses_detailsテーブルを上書きします。",
        "is_correct": false
      },
      {
        "text": "ソーステーブルの現在のバージョンのすべてのレコードがジョイン操作で考慮されます。マッチしないレコードがstudents_courses_detailsテーブルを上書きします。",
        "is_correct": false
      },
      {
        "text": "ソーステーブルの現在のバージョンのすべてのレコードがジョイン操作で考慮されます。マッチしたレコードがstudents_courses_detailsテーブルを上書きします。",
        "is_correct": true
      }
    ],
    "explanation": "<p>このコードのこのクエリは、<code>spark.table()</code>関数を使用して3つの静的なデルタテーブルを読み取ります。これは、これらのテーブルの現在のバージョンのすべてのレコードが読み取られ、ジョイン操作で考慮されることを意味します。</p><p><code>spark.table()</code>と<code>spark.read.table()</code>関数に違いはありません。実際のところ、<code>spark.read.table()</code>は内部的に<code>spark.table()</code>を呼び出しています。</p><p><code>pyspark.sql.DataFrame.join()</code>関数は、デフォルトで内部ジョイン操作を実行するため、マッチしたレコードが対象テーブルに書き込まれます。このケースでは、クエリは<code>\"overwrite\"</code>モードでデータを対象テーブルに書き込むため、テーブルが完全に上書きされます。</p>",
    "tags": "データ処理コードの開発",
    "summary": "spark.table()は全レコードを読み取り、デフォルトの内部ジョインはマッチしたレコードのみを返し、overwriteモードは結果でテーブル全体を置き換えます。"
  },
  {
    "id": 2,
    "question": "Spark UIにおいて、ステージの詳細ページに表示されるメトリクスの中で、以下のうちどれが含まれていないものですか？",
    "choices": [
      {
        "text": "Spill (Disk and Memory)",
        "is_correct": false
      },
      {
        "text": "GC time",
        "is_correct": false
      },
      {
        "text": "Duration",
        "is_correct": false
      },
      {
        "text": "DBU Cost",
        "is_correct": true
      }
    ],
    "explanation": "<p>Spark UIのステージ詳細ページは、完了したタスクのサマリーメトリクスを表示します。これには以下が含まれます：</p><ul><li><strong>Duration</strong> - タスクの実行時間</li><li><strong>GC time</strong> - JVM ガベージコレクションの合計時間</li><li><strong>Shuffle spill (memory)</strong> - メモリ内のシャッフルされたデータの非シリアライズ形式のサイズ</li><li><strong>Shuffle spill (disk)</strong> - ディスク上のシリアライズされたデータ形式のサイズ</li></ul><p><strong>DBU Cost はSpark UIの一部ではありません。</strong>DBUはDatabricks Unitの略で、課金目的のための1時間あたりの処理能力の単位です。これはクラスタ構成に依存し、仮想マシンが1時間実行された場合に消費されるDBU数を示し、消費されたDBUごとに料金が発生します。</p>",
    "tags": "モニタリングとアラート",
    "summary": "Spark UIのステージ詳細ページはDuration、GC time、Spillなどのメトリクスを表示しますが、DBU Costはこれに含まれません。"
  },
  {
    "id": 3,
    "question": "データエンジニアは既存のDatabricksジョブを保有しており、Databricks Asset Bundlesを使用してこれを管理したいと考えています。Databricks CLIを使用してジョブのYAML定義を取得し、参照されているアーティファクトをダウンロードしたいと考えています。\nこれを実現できるのは、以下のコマンドのどれですか？",
    "choices": [
      {
        "text": "databricks bundle get job --existing-job-id",
        "is_correct": false
      },
      {
        "text": "databricks bundle download job --existing-job-id",
        "is_correct": false
      },
      {
        "text": "databricks bundle generate job --existing-job-id",
        "is_correct": true
      },
      {
        "text": "databricks bundle clone job --existing-job-id",
        "is_correct": false
      }
    ],
    "explanation": "<p>正しいコマンドは<code>databricks bundle generate</code>です。このコマンドは、Databricksワークスペースにすでに存在するリソースのバンドル設定を生成することができます。このプロセスは、ジョブ、パイプライン、アプリ、またはダッシュボードのYAML定義を生成し、ノートブックなどの参照されているアーティファクトを自動的にダウンロードします。</p>",
    "tags": "デプロイとデバッグ",
    "summary": "databricks bundle generateコマンドは既存リソースのYAML定義を生成し、参照されているアーティファクトを自動的にダウンロードします。"
  },
  {
    "id": 4,
    "question": "以下のコマンドのうち、データエンジニアが挿入専用マージ(insert-only merge)を実行できるのはどれですか？",
    "choices": [
      {
        "text": "MERGE INTO orders\nUSING new_orders\nON orders.orders_id = new_orders.orders_id\nWHEN MATCHED\n    INSERT *",
        "is_correct": false
      },
      {
        "text": "MERGE INTO orders\nUSING new_orders\nON orders.orders_id = new_orders.orders_id\nWHEN NOT MATCHED\n    INSERT *",
        "is_correct": true
      },
      {
        "text": "MERGE INTO orders\nUSING new_orders\nON orders.orders_id = new_orders.orders_id\nWHEN MATCHED\n    INSERT *\nWHEN NOT MATCHED\n    IGNORE *",
        "is_correct": false
      },
      {
        "text": "MERGE INTO orders\nUSING new_orders\nON orders.orders_id = new_orders.orders_id\nWHEN NOT MATCHED\n    INSERT *\nWHEN MATCHED\n    IGNORE *",
        "is_correct": false
      }
    ],
    "explanation": "<p>挿入専用マージの構文は以下の通りです：</p><pre><code>MERGE INTO target_table\nUSING source_table\nON merge_condition\nWHEN NOT MATCHED\n    INSERT *</code></pre><p><code>WHEN NOT MATCHED</code>句のみを指定する必要があります。この句は、マージ条件（マージキー）に基づいて、ソーステーブルの行がターゲットテーブルのどの行にも一致しない場合に行を挿入します。既存のレコードと同じキーを持つレコードは単に無視されます。</p>",
    "tags": "データ処理コードの開発",
    "summary": "挿入専用マージはWHEN NOT MATCHED句のみを使用し、新規レコードを挿入し既存キーを持つレコードは無視します。"
  },
  {
    "id": 5,
    "question": "デルタテーブルの小さなファイルをOPTIMIZEコマンドを手動で実行してコンパクト化する際の、デフォルトのターゲットファイルサイズはどれですか？",
    "choices": [
      {
        "text": "1024 MB",
        "is_correct": true
      },
      {
        "text": "512 MB",
        "is_correct": false
      },
      {
        "text": "128 MB",
        "is_correct": false
      },
      {
        "text": "256 MB",
        "is_correct": false
      }
    ],
    "explanation": "<p><code>OPTIMIZE</code>コマンドは、小さなデータファイルをより大きなファイルにコンパクト化します。デフォルト値は1073741824で、これはサイズを1 GBに設定します。これは1024 MBに相当します。</p>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "OPTIMIZEコマンドのデフォルトターゲットファイルサイズは1 GB（1024 MB）です。"
  },
  {
    "id": 6,
    "question": "データエンジニアリングチームは、「users」という大規模なデルタテーブルを保有しています。最近のテーブルへのクエリで、「age」列に負の値を含むいくつかのエントリが返されました。\nこの問題を回避し、データ品質を強制するため、ジュニアデータエンジニアは以下のコマンドでテーブルにCHECK制約を追加することにしました：\nALTER TABLE users ADD CONSTRAINT valid_age CHECK (age > 0);\nしかし、このコマンドは実行時に失敗しました。\nこの失敗の原因を説明する文はどれですか？",
    "choices": [
      {
        "text": "usersテーブルには既に新しい制約に違反する行が含まれています。制約がテーブルに追加される前に、すべての既存行が制約を満たす必要があります。",
        "is_correct": true
      },
      {
        "text": "CHECK制約を追加するための構文が正しくありません。代わりに、以下のコマンドを使用すべきです：\nALTER TABLE users ADD CONSTRAINT ON COLUMN age (CHECK > 0)",
        "is_correct": false
      },
      {
        "text": "usersテーブルは既に存在しています。CHECK制約はCREATE TABLEコマンドを使用したテーブル作成時にのみ追加できます。",
        "is_correct": false
      },
      {
        "text": "usersテーブルには既に行が含まれています。CHECK制約は空のテーブルにのみ追加できます。",
        "is_correct": false
      }
    ],
    "explanation": "<p><code>ADD CONSTRAINT</code>コマンドは、テーブルに制約を追加する前に、テーブル内のすべての既存行がその制約を満たしていることを検証します。そうでない場合、コマンドはテーブル内のいくつかの行が新しいCHECK制約に違反していることを示すエラーで失敗します。</p><p>このケースでは、ageカラムに負の値が既に存在するため、<code>CHECK (age > 0)</code>制約を追加できません。制約を追加する前に、違反するレコードをクリーニング、修正、または削除する必要があります。</p>",
    "tags": "データ処理コードの開発",
    "summary": "ADD CONSTRAINTコマンドは、既存のすべての行が新しい制約を満たしていることを検証してからでないと、テーブルに制約を追加できません。"
  },
  {
    "id": 7,
    "question": "デルタテーブルで自動液体クラスタリング(Automatic Liquid Clustering)を有効にするために必要な前提条件はどの2つですか？\n2つの答えを選択してください：",
    "choices": [
      {
        "text": "テーブルはUnity Catalog外部テーブルである必要があります",
        "is_correct": false
      },
      {
        "text": "テーブルは予測最適化(Predictive Optimization)を有効にする必要があります",
        "is_correct": true
      },
      {
        "text": "テーブルは日付列でパーティション化される必要があります",
        "is_correct": false
      },
      {
        "text": "テーブルはUnity Catalog管理テーブルである必要があります",
        "is_correct": true
      },
      {
        "text": "テーブルは削除ベクトル(Deletion Vectors)を有効にする必要があります",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricksのデルタテーブルで自動液体クラスタリングを有効にするには、2つの前提条件が必要です：</p><ul><li><strong>テーブルはUnity Catalog管理テーブルである必要があります</strong> - 自動液体クラスタリングはUnity Catalogによって管理されるテーブルでのみ機能します。外部テーブルは現在サポートされていません。</li><li><strong>テーブルは予測最適化を有効にする必要があります</strong> - 予測最適化はアクセスパターンに関する情報をシステムに提供し、液体クラスタリングはこれを活用してデータレイアウトを自動的に最適化します。</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "自動液体クラスタリングを有効にするには、Unity Catalog管理テーブルであることと予測最適化が有効になっていることの2つの前提条件が必要です。"
  },
  {
    "id": 8,
    "question": "データエンジニアは、完了に2時間以上かかる複数のタスクを持つジョブを保有しています。最後の実行では、最終タスクが予期せず失敗しました。\nこの実行を完了させながら、実行時間を最小化するためにデータエンジニアが実行できるアクションはどれですか？",
    "choices": [
      {
        "text": "失敗した実行を保持したまま、ジョブの新しい実行を開始できます",
        "is_correct": false
      },
      {
        "text": "このジョブ実行を修復して、失敗したタスクのみを再実行できます",
        "is_correct": true
      },
      {
        "text": "失敗した実行を削除して、ジョブの新しい実行を開始する必要があります",
        "is_correct": false
      },
      {
        "text": "このジョブ実行を再実行してすべてのタスクを実行できます",
        "is_correct": false
      }
    ],
    "explanation": "<p>失敗したマルチタスクジョブは、失敗したタスクとそれに依存するタスクのサブセットのみを実行することで修復できます。成功したタスクは再実行されないため、この機能は失敗したジョブ実行から回復するのに必要な時間とリソースを削減します。</p><p>修復機能を使用することで、データエンジニアは以下のメリットを得られます：</p><ul><li><strong>実行時間を最小化</strong> - 成功したタスクをスキップし、失敗したタスクのみを再実行</li><li><strong>リソース効率を向上</strong> - 不要な再計算を回避</li><li><strong>ジョブの迅速な復旧</strong> - 全タスクの再実行より大幅に高速</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "ジョブ実行の修復機能により、失敗したタスクのみを再実行することで、実行時間とリソースを大幅に削減できます。"
  },
  {
    "id": 9,
    "question": "グローバル物流企業のデータエンジニアは、Databricksクライアントである外部分析ベンダーに特定のデータセットと分析ノートブックを共有する必要があります。データはUnity Catalogのデルタテーブルとして保存されており、ベンダーは当社のDatabricksアカウントにアクセスできません。\nデータとノートブックを外部ベンダーと共有するための最も効果的でセキュアな方法は何ですか？",
    "choices": [
      {
        "text": "Delta Sharingを使用してデルタテーブルを共有し、組み込みのコラボレーション機能を使用して各ノートブックへのアクセスを付与します",
        "is_correct": false
      },
      {
        "text": "Delta Sharingを使用してデルタテーブルとノートブックを共有します",
        "is_correct": true
      },
      {
        "text": "Delta Sharingを使用してデルタテーブルを共有し、すべてのノートブックを単一のDBCファイルで送信します",
        "is_correct": false
      },
      {
        "text": "Delta Sharingを使用してデルタテーブルを共有し、ノートブックをプログラムでHTMLページとして公開します",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricks間のDelta Sharingは、テーブル、ノートブック、ボリューム、MLモデルを他のDatabricksクライアントと安全にリアルタイムで共有できます。これにより、相手が同じDatabricksアカウントやワークスペースにアクセスしている必要はありません。Unity Catalogを使用すれば、企業は細かい粒度のアクセス制御とガバナンスを確保できます。</p><p>このアプローチの利点：</p><ul><li><strong>セキュリティ</strong> - エンタープライズグレードのセキュリティ標準に準拠</li><li><strong>効率性</strong> - データのコピーが不要で、リアルタイム共有が可能</li><li><strong>スケーラビリティ</strong> - 複数のベンダーとの共有に対応</li><li><strong>ガバナンス</strong> - Unity Catalogによる統一的なアクセス制御</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Delta Sharingは、Databricksクライアント間でテーブルとノートブックを安全にリアルタイムで共有でき、Unity Catalogにより細かい粒度のアクセス制御が可能です。"
  },
  {
    "id": 10,
    "question": "データエンジニアリングチームは、各タスクが複数回再試行される可能性のあるマルチタスクジョブを管理しています。失敗したタスクが再試行される場合、ジョブ通知が送信されないことに気付きました。\n失敗したすべてのタスクに対して失敗通知が送信されることを保証する設定はどれですか？",
    "choices": [
      {
        "text": "ジョブ定義でタスクレベルの通知を使用する",
        "is_correct": true
      },
      {
        "text": "すべてのタスク再試行を無効にしてジョブレベルの通知に依存する",
        "is_correct": false
      },
      {
        "text": "各タスク内にカスタム通知ロジックを実装する",
        "is_correct": false
      },
      {
        "text": "タスクごとに個別のジョブを作成してジョブレベルの再試行を使用する",
        "is_correct": false
      }
    ],
    "explanation": "<p>マルチタスクジョブでは、通知は2つのレベルで設定できます：</p><ul><li><strong>ジョブレベルの通知</strong> - ジョブ全体が成功または失敗した場合にのみトリガーされます。つまり、個別のタスクが失敗しても後で再試行で成功する場合、ジョブ全体が完了または失敗するまで通知は送信されません。</li><li><strong>タスクレベルの通知</strong> - 失敗や成功を含むすべてのタスクイベントに対してトリガーされます。タスクレベルの通知を設定することで、失敗したすべてのタスクに対して通知が送信され、その後再試行された場合でも通知を受け取ります。</li></ul>",
    "tags": "モニタリングとアラート",
    "summary": "タスクレベルの通知を使用することで、再試行されるタスクも含めたすべての失敗に対して確実に通知を受け取ることができます。"
  },
  {
    "id": 11,
    "question": "データエンジニアがLDPパイプラインで以下の関数を定義しています：\n@dlt.table\n@dlt.expect_or_drop(\"quantity_within_range\", \"quantity BETWEEN 0 AND 1000\")\n@dlt.expect_or_drop(\"recent_transaction\", \"transaction_date >= '2025-01-01'\")\n@dlt.expect_or_drop(\"valid_transaction\", \"transaction_id IS NOT NULL\")\ndef silver_sales():\n    return dlt.read_stream(\"bronze_sales\")\n\nこのパイプラインを実行した場合の結果を正しく説明しているのはどれですか？",
    "choices": [
      {
        "text": "定義された期待値に違反する行は、両方のテーブルから削除されます",
        "is_correct": false
      },
      {
        "text": "定義された期待値に違反する行は、silver_salesテーブルにストリーミングされます",
        "is_correct": false
      },
      {
        "text": "定義された期待値に違反する行は、bronze_salesテーブルから削除されます",
        "is_correct": false
      },
      {
        "text": "定義された期待値に違反する行はフィルタリングされ、有効な行のみがsilver_salesに書き込まれます",
        "is_correct": true
      }
    ],
    "explanation": "<p><code>expect_or_drop</code>関数はLDP（以前はDLTとして知られていた）におけるデータ品質強制ルールです：</p><ul><li><strong>expect部分</strong> - 品質制約を定義します（例：「quantity BETWEEN 0 AND 1000」）</li><li><strong>or_drop部分</strong> - 期待値に違反する場合に実行するアクションを定義します。「Drop」は違反している行が破棄（フィルタリング）され、対象テーブル（silver_sales）に書き込まれないことを意味します</li></ul><p>この例では、3つの定義された期待値すべて（quantity_within_range、recent_transaction、valid_transaction）に正常に合格した行のみがsilver_salesテーブルに含まれます。これらのいずれかに違反する行は破棄されます。</p>",
    "tags": "データ処理コードの開発",
    "summary": "expect_or_drop関数は、定義された品質制約に違反する行をフィルタリングし、有効な行のみを対象テーブルに書き込みます。"
  },
  {
    "id": 12,
    "question": "データエンジニアがGitHubで完全に自動化されたCI/CDパイプラインでDatabricks Asset Bundles（DABs）を使用したいと考えています。\nこのシナリオで、DABsをターゲットDatabricksワークスペースに認証するための推奨メソッドは何ですか？",
    "choices": [
      {
        "text": "管理者ユーザーのPersonal Access Token",
        "is_correct": false
      },
      {
        "text": "Databricksサービスプリンシパルに対するOAuthトークンフェデレーション",
        "is_correct": true
      },
      {
        "text": "Databricksサービスプリンシパルに対するOAuthクライアントシークレット",
        "is_correct": false
      },
      {
        "text": "DatabricksサービスプリンシパルのPersonal Access Token",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricks Asset Bundlesはdatabricks CLIの機能です。CLIがDatabricksシークレットを管理することなくDatabricksに認証できるようにするために、ターゲットワークスペース内のDatabricksサービスプリンシパルに対するOAuthトークンフェデレーションを使用することが推奨されます。</p><p>この方法の利点：</p><ul><li><strong>セキュリティ</strong> - シークレットをCI/CDパイプラインに保存する必要がありません</li><li><strong>自動化</strong> - OAuthフローにより完全に自動化された認証が可能です</li><li><strong>ベストプラクティス</strong> - サービスプリンシパルを使用することで、個人の認証情報を共有しません</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "CI/CDパイプラインでDABsを使用する場合、OAuthトークンフェデレーションを使用したサービスプリンシパル認証が推奨される最も安全な方法です。"
  },
  {
    "id": 13,
    "question": "一般的なルールとして、ノートブックを本番環境でスケジュール化する前に、以下のどのコマンドをコードから削除する必要がありますか？",
    "choices": [
      {
        "text": "表示コマンド",
        "is_correct": true
      },
      {
        "text": "マジックコマンド",
        "is_correct": false
      },
      {
        "text": "インポートコマンド",
        "is_correct": false
      },
      {
        "text": "マークアップ言語コマンド",
        "is_correct": false
      }
    ],
    "explanation": "<p>ノートブックを本番環境でスケジュール化する前に、コードをリファクタリングする必要があります。一般的なルールとして、以下をコメントアウトしてください：</p><ul><li><strong>不要なファイル削除またはテーブルドロップコマンド</strong> - 開発中に追加されたこれらのコマンド</li><li><strong>表示アクション またはSQLクエリ</strong> - デバッグ目的で追加された表示コマンド</li></ul><p>表示コマンドは開発やデバッグ時には有用ですが、本番環境では不要な出力を生成し、パフォーマンスに悪影響を与える可能性があるため、削除またはコメントアウトすべきです。</p>",
    "tags": "デプロイとデバッグ",
    "summary": "本番環境のノートブックでは、デバッグ用に追加された表示コマンドやSQLクエリをコメントアウトまたは削除する必要があります。"
  },
  {
    "id": 14,
    "question": "データエンジニアリングチームは、Databricksで外部MySQLデータベースに接続するための新しい接続「mysql_connection」を確立しました。彼らの目標は、Lakehouse Federationを活用してMySQLテーブルをUnity Catalogで利用可能にし、クエリ可能にすることで、ダウンストリームの分析チームがシームレスにこのデータにアクセスできるようにすることです。\n接続がすでに設定されている状況で、チームは次のステップとしてMySQLテーブルをUnity Catalog内に追加して、組織のデータガバナンスポリシーに準拠した、管理およびセキュアな方法でクエリできるようにする必要があります。\nこの目標を達成するため、チームが次に取るべきステップは何ですか？",
    "choices": [
      {
        "text": "既存のmysql_connectionを通じてデフォルトロケーションを定義した外部カタログを作成する",
        "is_correct": false
      },
      {
        "text": "既存のmysql_connectionを使用してUnity Catalogにフォーリンカタログを作成する",
        "is_correct": true
      },
      {
        "text": "既存のmysql_connectionを通じてMySQLデータを参照する外部テーブルを作成する",
        "is_correct": false
      },
      {
        "text": "既存のmysql_connectionを使用してMySQLにUnity Catalogメタストアを設定する",
        "is_correct": false
      }
    ],
    "explanation": "<p>チームが次に取るべきステップは、既存のmysql_connectionを使用してUnity Catalogにフォーリンカタログを作成することです。Databricksのエコシステムにおけるレイクハウスフェデレーションにより、Unity CatalogはMySQLなどの外部データソースをフォーリンカタログとして登録できます。</p><p>フォーリンカタログを使用することの利点：</p><ul><li><strong>データ移動なし</strong> - データを移動することなく、MySQLテーブルに直接アクセス可能</li><li><strong>管理されたセキュアアクセス</strong> - 統一的なガバナンスとアクセス制御が適用される</li><li><strong>シームレスなクエリ</strong> - ダウンストリームの分析チームがUnity Catalog経由で一貫性のある方法でデータをクエリ可能</li><li><strong>ガバナンスの一元化</strong> - 組織のデータガバナンスポリシーに準拠</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Lakehouse Federationを活用するには、既存の接続を使用してUnity Catalogにフォーリンカタログを作成し、外部データソースをセキュアに管理およびクエリ可能にします。"
  },
  {
    "id": 15,
    "question": "既存クラスタを開始および終了するためにデータエンジニアが必要とする最小限のパーミッションを説明しているのはどれですか？",
    "choices": [
      {
        "text": "クラスタの「Can Attach To」権限",
        "is_correct": false
      },
      {
        "text": "クラスタの「Can Manage」権限",
        "is_correct": false
      },
      {
        "text": "クラスタ作成の許可 + クラスタの「Can Restart」権限",
        "is_correct": false
      },
      {
        "text": "クラスタの「Can Restart」権限",
        "is_correct": true
      }
    ],
    "explanation": "<p>クラスタのパーミッションには2つのタイプがあります：</p><ul><li><strong>「Allow cluster creation」権限</strong> - クラスタを作成する能力を制御します</li><li><strong>クラスタレベルのパーミッション</strong> - 特定のクラスタの使用および変更の能力を制御します。クラスタには4つのパーミッションレベルがあります：No Permissions、Can Attach To、Can Restart、Can Manageです</li></ul><p>クラスタを開始および終了するために必要な最小限のパーミッションは「Can Restart」権限です。これにより、データエンジニアは既存のクラスタの再起動（開始および終了）が可能になります。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "既存クラスタを開始および終了するには、クラスタレベルの「Can Restart」権限が最小限の要件です。"
  },
  {
    "id": 16,
    "question": "データエンジニアが以下の列を持つPySparkデータフレームを持っています：employee_name、department、salaryです。各従業員に対して、給与に基づいて部門内でのティアを割り当てたいと考えています。給与が同じである従業員は同じティアを共有します。期待される出力は以下の通りです：\n部門ごとにウィンドウを定義し、給与で降順に並べます：\nwindow_spec = Window.partitionBy(\"department\").orderBy(df[\"salary\"].desc())\nこのウィンドウを使用してティア列を正しく計算する関数はどれですか？",
    "choices": [
      {
        "text": "df.withColumn(\"tier\", rank().over(window_spec))",
        "is_correct": true
      },
      {
        "text": "df.withColumn(\"tier\", percent_rank().over(window_spec))",
        "is_correct": false
      },
      {
        "text": "df.withColumn(\"tier\", row_number().over(window_spec))",
        "is_correct": false
      },
      {
        "text": "df.withColumn(\"tier\", dense_rank().over(window_spec))",
        "is_correct": false
      }
    ],
    "explanation": "<p>使用する正しい関数は<code>rank()</code>です。この関数は、各部門内で同じ給与を持つ従業員に同じランク（またはティア）を割り当て、給与が異なる場合には正しい順序を維持します。このケースでは、同じ給与値を持つ従業員は同じティア番号を共有し、次の一意の給与は先行するエントリの数を考慮したランクを受け取ります。その結果、タイが発生するとティア番号がスキップされます。これは期待される出力と一致します。例えば、HR部門のEveとFrankはいずれも給与が4000で、ティア1を共有し、給与が低いDavidはティア3を取得します。</p><p>他の関数との比較：</p><ul><li><strong>row_number()</strong> - タイに対しても一意のシーケンシャル番号を割り当てるため、期待される結果と一致しません</li><li><strong>dense_rank()</strong> - タイの後で番号をスキップしないため、期待される結果と異なります</li><li><strong>percent_rank()</strong> - 0から1の間の小数ランクを割り当てるため、期待される動作と異なります</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "rank()関数は同じ給与値を持つ従業員に同じティアを割り当て、タイ後のランクをスキップするため、部門内の給与に基づくティア割り当てに最適です。"
  },
  {
    "id": 17,
    "question": "既存クラスタにノートブックをアタッチするためにデータエンジニアが必要とする最小限のパーミッションを説明しているのはどれですか？",
    "choices": [
      {
        "text": "クラスタの「Can Restart」権限",
        "is_correct": false
      },
      {
        "text": "クラスタ作成の許可 + クラスタの「Can Attach To」権限",
        "is_correct": false
      },
      {
        "text": "クラスタの「Can Attach To」権限",
        "is_correct": true
      },
      {
        "text": "クラスタの「Can Manage」権限",
        "is_correct": false
      }
    ],
    "explanation": "<p>クラスタのパーミッションには2つのタイプがあります：</p><ul><li><strong>「Allow cluster creation」権限</strong> - クラスタを作成する能力を制御します</li><li><strong>クラスタレベルのパーミッション</strong> - 特定のクラスタの使用および変更の能力を制御します。クラスタには4つのパーミッションレベルがあります：No Permissions、Can Attach To、Can Restart、Can Manageです</li></ul><p>ノートブックを既存クラスタにアタッチするために必要な最小限のパーミッションは「Can Attach To」権限です。この権限により、データエンジニアは既存のクラスタにノートブックをアタッチして実行できます。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "既存クラスタにノートブックをアタッチするには、クラスタレベルの「Can Attach To」権限が最小限の要件です。"
  },
  {
    "id": 18,
    "question": "以下のスキーマを持つデルタテーブル「products」が与えられています：\nname STRING、category STRING、expiration_date DATE、price FLOAT\n以下のクエリを実行するとき：\nSELECT * FROM products\nWHERE price > 30.5\nクエリオプティマイザーがロードするデータファイルを特定するために、以下のどれが活用されますか？",
    "choices": [
      {
        "text": "デルタトランザクションログ内のファイル統計",
        "is_correct": true
      },
      {
        "text": "Hivメタストア内の列統計",
        "is_correct": false
      },
      {
        "text": "Unity Catalogメタストア内のファイル統計",
        "is_correct": false
      },
      {
        "text": "Parquetファイルのメタデータ内の列統計",
        "is_correct": false
      }
    ],
    "explanation": "<p>トランザクションログで、デルタレイクはテーブルの各データファイルの統計情報をキャプチャします。これらの統計情報はファイルごとに以下を示します：</p><ul><li><strong>レコードの総数</strong></li><li><strong>テーブルの最初の32列の各列の最小値</strong></li><li><strong>テーブルの最初の32列の各列の最大値</strong></li><li><strong>テーブルの最初の32列の各列のNULL値カウント</strong></li></ul><p>選択的なフィルタを含むクエリがテーブルに対して実行されると、クエリオプティマイザーはこれらの統計情報を使用してクエリ結果を生成します。条件付きフィルタに一致するレコードを含む可能性のあるデータファイルを特定するためにそれを活用します。</p><p>この質問のSELECTクエリでは、トランザクションログがpriceカラムの最小値と最大値の統計情報をスキャンされます。</p>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "デルタレイクのトランザクションログはファイルごとの列の最小値・最大値統計を保持し、クエリオプティマイザーはこれらを使用してスキャン対象ファイルを絞り込みます。"
  },
  {
    "id": 19,
    "question": "「デルタレイクの機能の1つで、テーブルへの個別の書き込み中に、テーブルに対して2つの補完的な操作を実行することにより、小さなファイルを自動的にコンパクト化する」\n上記のステートメントで説明されているのは、以下のどれですか？",
    "choices": [
      {
        "text": "Auto Optimize",
        "is_correct": true
      },
      {
        "text": "Auto compaction",
        "is_correct": false
      },
      {
        "text": "OPTIMIZE operation",
        "is_correct": false
      },
      {
        "text": "Optimized writes",
        "is_correct": false
      }
    ],
    "explanation": "<p>Auto Optimizeは、デルタレイクがデルタテーブルの小さなデータファイルを自動的にコンパクト化できるようにする機能です。これはデルタテーブルへの個別の書き込み中に実現できます。</p><p>Auto Optimizeは2つの補完的な操作で構成されます：</p><ul><li><strong>Optimized writes（最適化書き込み）</strong> - この機能を有効にすると、Databricksは各テーブルパーティションに対して128 MBのファイルを書き込もうとします</li><li><strong>Auto compaction（自動コンパクション）</strong> - 個別の書き込み後に、ファイルがさらにコンパクト化できるかどうかを確認します。可能な場合、128 MBのファイルサイズでOPTIMIZEジョブを実行します（標準OPTIMIZEで使用される1 GBのファイルサイズの代わりに）</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "Auto Optimizeは最適化書き込みと自動コンパクションという2つの操作を組み合わせて、書き込み時に小さなファイルを自動的にコンパクト化します。"
  },
  {
    "id": 20,
    "question": "データエンジニアリングチームは、REST APIを使用して本番Databricksワークスペースで利用可能なジョブを取得することで、ジョブモニタリングを自動化し、可観測性を改善したいと考えています。\n以下のどのREST APIコールがこの要件を達成できますか？",
    "choices": [
      {
        "text": "エンドポイント'/api/2.2/jobs/get'にPOSTリクエストを送信する",
        "is_correct": false
      },
      {
        "text": "エンドポイント'/api/2.2/jobs/list'にPOSTリクエストを送信する",
        "is_correct": false
      },
      {
        "text": "エンドポイント'/api/2.2/jobs/list'にGETリクエストを送信する",
        "is_correct": true
      },
      {
        "text": "エンドポイント'/api/2.2/jobs/get'にGETリクエストを送信する",
        "is_correct": false
      }
    ],
    "explanation": "<p>エンドポイント<code>/api/2.2/jobs/list</code>にGETリクエストを送信することで、Databricksワークスペースで利用可能なジョブを取得できます。</p><p>REST APIの正しい使用方法：</p><ul><li><strong>GETリクエスト</strong> - データの取得に使用します</li><li><strong><code>/api/2.2/jobs/list</code>エンドポイント</strong> - ワークスペース内のすべてのジョブを一覧表示するために使用</li></ul><p>このアプローチにより、データエンジニアリングチームはジョブの可観測性を向上させ、モニタリングを自動化できます。</p>",
    "tags": "モニタリングとアラート",
    "summary": "GETリクエストを'/api/2.2/jobs/list'エンドポイントに送信することで、Databricksワークスペース内の利用可能なジョブを取得できます。"
  },
  {
    "id": 21,
    "question": "データエンジニアリングチームはDelta Sharingを使用したいが、Databricks間データ共有（D2D）またはオープンDelta Sharingプロトコル（D2O）のどちらを使用すべきか確信が持てません。\nD2DとD2Oの違いを正しく説明するのは、以下のどのステートメントですか？",
    "choices": [
      {
        "text": "Databricks間データ共有（D2D）は管理テーブルのみでのデータ共有をサポートし、オープン共有プロトコル（D2O）は管理テーブルと外部テーブルの両方をサポートしています",
        "is_correct": false
      },
      {
        "text": "Databricks間データ共有（D2D）はレガシーHiveメタストアを使用し、オープン共有プロトコル（D2O）は新しい実装ではUnity Catalogを基盤にしています",
        "is_correct": false
      },
      {
        "text": "Databricks間データ共有（D2D）はDatabricksクライアント間のみのデータ共有を実現し、オープン共有プロトコル（D2O）はDelta Sharing開放標準を実装するあらゆるプラットフォームが共有データにアクセスできます",
        "is_correct": true
      },
      {
        "text": "Databricks間データ共有（D2D）はDelta Sharing開放標準をサポートするあらゆるプラットフォームとの共有を可能にし、オープン共有プロトコル（D2O）はDatabricksクライアントのみへの共有を制限しています",
        "is_correct": false
      }
    ],
    "explanation": "<p>Delta Sharingを使用してデータを共有する主な2つの方法があります：</p><ul><li><strong>Databricks間データ共有（D2D）</strong> - Unity Catalogが有効なワークスペースから、同じくUnity Catalogが有効なDatabricksワークスペースにアクセスするクライアントにデータを共有できます。このアプローチはDatabricksに組み込まれたDelta Sharingサーバーを使用し、ノートブック共有、Unity Catalogデータガバナンス、監査、プロバイダーと受信者の両方の使用状況追跡をサポートします</li><li><strong>Databricksオープン共有プロトコル（D2O）</strong> - Unity Catalogが有効なDatabricksワークスペースで管理するデータを、あらゆるコンピューティングプラットフォーム上のユーザーと共有できます。このアプローチもDatabricksに組み込まれたDelta Sharingサーバーを使用し、Unity Catalogを使用してデータを管理し、Databricksを使用しないまたはUnity Catalogが有効なDatabricksワークスペースにアクセスできないユーザーと共有したい場合に有用です</li></ul><p>つまり、D2DはDatabricksエコシステム内でのシームレスな共有に最適化されており、D2Oはオープン標準に対応する外部プラットフォームとの相互運用性を拡張します。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "D2DはDatabricksクライアント間のシームレスな共有を提供し、D2Oはオープン標準に対応するあらゆるプラットフォームとのデータ共有を可能にします。"
  },
  {
    "id": 22,
    "question": "データエンジニアが高トラフィックウェブサイトのクリックストリームイベントのデータセットを分析しています。データセットにはuser_id、timestamp、event_type、page_urlなどのフィールドが含まれています。クリックストリームログとユーザープロファイルデータセット（user_idで結合）間の結合操作中に、不均等なデータ分布によってジョブのパフォーマンスが大幅に低下しています。さらなる分析により、少数のユーザーが不釣り合いに多くのイベントを生成することによって引き起こされるデータスキューが確認されました。\n以下のアプローチのうち、このシナリオでスキューを緩和するための適切ではない解決策はどれですか？",
    "choices": [
      {
        "text": "スキューされたキーの個別処理により、高頻度ユーザーを専用ジョブで処理する",
        "is_correct": false
      },
      {
        "text": "スキューされたキーをすべてのワーカーノードにブロードキャストして、結合中のシャッフルを回避する",
        "is_correct": true
      },
      {
        "text": "ソルティングを使用して、スキューされたuser_id値にランダムプレフィックスを付加し、パーティション全体に負荷を分散させる",
        "is_correct": false
      },
      {
        "text": "結合前にクリックストリームデータセットをuser_idで再パーティション化してパーティション数を増やす",
        "is_correct": false
      }
    ],
    "explanation": "<p>ブロードキャストは通常、小さなルックアップデータセットをすべてのエグゼキュータで共有し、シャッフルを引き起こす結合を回避するために使用されます。しかし、スキューされたキー（特に関連するデータが大きい場合）をブロードキャストしても、スキューの問題は解決されず、各エグゼキュータのメモリプレッシャーが増加する可能性があります。</p><p>他のオプションは適切な解決策です：</p><ul><li><strong>ソルティングの使用</strong> - スキューされたuser_id値にランダムプレフィックスを付加してパーティション全体に分散させます。ソルティングはホットキーを複数のパーティションに人工的に分散させることでスキューを緩和する効果的な手法です。</li><li><strong>再パーティション化</strong> - <code>repartition()</code>によってパーティション数を増やしてデータ負荷のバランスを取り、並列処理を強化します。キーをより均等に分散させることでスキューを緩和できます。</li><li><strong>スキューされたキーの個別処理</strong> - スキューされたキーを専門的な処理に分離することで、結合操作全体への影響を防ぎます。このターゲット化されたアプローチは、問題のあるキーにリソースを調整することでパフォーマンスを改善します。</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "ブロードキャストはスキューされたキーの問題解決には適さず、むしろメモリ負荷を増加させます。ソルティング、再パーティション化、個別処理がより効果的です。"
  },
  {
    "id": 23,
    "question": "データエンジニアがLDPパイプラインで以下のデータ品質制約を定義しています：\nCONSTRAINT valid_id EXPECT (id IS NOT NULL) _____________\nこの制約に違反するレコードがドロップされ、メトリクスに報告されるように空白を正しく埋めるクローズはどれですか？",
    "choices": [
      {
        "text": "ON VIOLATION DELETE ROW",
        "is_correct": false
      },
      {
        "text": "ON VIOLATION DROP ROW",
        "is_correct": true
      },
      {
        "text": "ON VIOLATION FAIL UPDATE",
        "is_correct": false
      },
      {
        "text": "ON VIOLATION DISCARD ROW",
        "is_correct": false
      }
    ],
    "explanation": "<p>空白を埋める正しいクローズは<code>ON VIOLATION DROP ROW</code>です。完全な制約は以下のようになります：<code>CONSTRAINT valid_id EXPECT (id IS NOT NULL) ON VIOLATION DROP ROW</code></p><p>この設定により、idがnullであるすべてのレコードがパイプラインから自動的にドロップされながら、パイプラインのメトリクスで追跡されます。これにより、データエンジニアはジョブ全体を失敗させることなく、違反の数を監視できます。</p><p><code>ON VIOLATION DROP ROW</code>の動作：</p><ul><li><strong>レコードの削除</strong> - 制約に違反するレコードは処理対象から削除されます</li><li><strong>メトリクスでの追跡</strong> - 違反したレコードはメトリクスに記録され監視が可能です</li><li><strong>ジョブの継続</strong> - パイプライン全体は失敗せず、処理を続行します</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "ON VIOLATION DROP ROWクローズを使用することで、品質制約に違反するレコードをドロップしながら、メトリクスで違反を追跡できます。"
  },
  {
    "id": 24,
    "question": "Databricksでのパイソンホイールの使用を最も適切に説明しているのは、以下のどのステートメントですか？",
    "choices": [
      {
        "text": "パイソンホイールは、Databricksクラスタにカスタムパイソンコードパッケージをインストールするためのバイナリ配布形式です",
        "is_correct": true
      },
      {
        "text": "パイソンホイールは「pip」の代替パッケージインストーラーツールです",
        "is_correct": false
      },
      {
        "text": "パイソンホイールはDatabricksワークスペース内でパイソンバイナリとアーティファクトをホスト、管理、配布するためのリポジトリです",
        "is_correct": false
      },
      {
        "text": "パイソンホイールはノートブック内のパイソンインタープリタ、ライブラリ、モジュールを他のノートブックから分離するための仮想環境です",
        "is_correct": false
      }
    ],
    "explanation": "<p>パイソンホイール（Python wheel）は、Databricksクラスタにカスタムパイソンコードパッケージをインストールするためのバイナリ配布形式です。</p><p>ホイールの特性：</p><ul><li><strong>ファイル形式</strong> - <code>.whl</code>拡張子を持つZIP形式のアーカイブです</li><li><strong>パッケージ配布</strong> - ソースコードをコンパイルして配布する標準的な方法です</li><li><strong>インストール</strong> - pipを使用してDatabricksクラスタにインストール可能です</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "パイソンホイールは.whl形式のバイナリ配布アーカイブで、カスタムパイソンパッケージをDatabricksクラスタにインストールするために使用されます。"
  },
  {
    "id": 25,
    "question": "データエンジニアが実行に長い時間がかかったクエリを調査するため、このクエリに関連するクエリプロファイラーを使用して、「Total wall-clock duration」メトリクスを確認しています。\n以下のどのステートメントが、このメトリクスが測定する内容を正しく説明していますか？",
    "choices": [
      {
        "text": "実際のクエリ実行に費やされた時間",
        "is_correct": false
      },
      {
        "text": "クエリスケジューリングに費やされた時間",
        "is_correct": false
      },
      {
        "text": "スケジューリング開始からクエリ実行終了までの合計時間",
        "is_correct": true
      },
      {
        "text": "クエリ最適化とファイルプルーニングに費やされた合計時間",
        "is_correct": false
      }
    ],
    "explanation": "<p>「Total wall-clock duration」メトリクスは、スケジューリング開始からクエリ実行終了までの合計時間を測定します。これはクエリ実行全体にかかる期間をカバーしており、スケジューリング、最適化とファイルプルーニング、および実際の実行が含まれます。</p><p>このメトリクスに含まれる要素：</p><ul><li><strong>スケジューリング</strong> - クエリがスケジューラーによって処理される時間</li><li><strong>最適化とファイルプルーニング</strong> - クエリオプティマイザーが最適な実行計画を生成し、不要なファイルを除外する時間</li><li><strong>実際の実行</strong> - クエリが実際に実行される時間</li></ul>",
    "tags": "モニタリングとアラート",
    "summary": "Total wall-clock durationメトリクスはクエリのスケジューリング開始から実行終了までの全体的な経過時間を測定し、すべてのオーバーヘッドと処理時間を含みます。"
  },
  {
    "id": 26,
    "question": "データエンジニアがSpark Structured Streamingで遅延到着データを処理するために使用できるテクニックはどれですか？",
    "choices": [
      {
        "text": "パーティショニング",
        "is_correct": false
      },
      {
        "text": "ウィンドウイング",
        "is_correct": false
      },
      {
        "text": "チェックポイント",
        "is_correct": false
      },
      {
        "text": "ウォーターマーキング",
        "is_correct": true
      }
    ],
    "explanation": "<p>Spark Structured Streamingでは、主にウォーターマーキング（watermarking）を使用して遅延到着データを処理できます。ウォーターマーキングにより、システムはイベント時間の進行状況を追跡し、ウィンドウが完了と見なされるまで遅延データをどのくらい長く待つかを指定できます。</p><p>ウォーターマーキングの機能：</p><ul><li><strong>遅延データの許容</strong> - 指定された時間より後に到着するデータを扱う</li><li><strong>イベント時間の管理</strong> - システムがいつウィンドウを確定するかを制御</li><li><strong>ウィンドウ集計の最適化</strong> - 中途半端な結果を最小化し、最終的な結果の品質を向上</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "ウォーターマーキングはSpark Structured Streamingで遅延到着データを処理し、イベント時間ベースのウィンドウを管理するための主要なテクニックです。"
  },
  {
    "id": 27,
    "question": "データエンジニアが従業員の生産性分析用の夜間バッチジョブを開発するよう依頼されています。このジョブは前日の従業員の生産性イベントを処理し、各従業員のパフォーマンスをデルタテーブル「employees_performance」に保存します。テーブルスキーマは以下の通りです：\n「date DATE、employee_id STRING、rating DOUBLE」\nデータエンジニアリングチームは、従業員のパフォーマンスを時系列で比較できるようにデータをテーブルに保存したいと考えています。\n以下のどのコードブロックがこのタスクを実現しますか？",
    "choices": [
      {
        "text": "performance_df.write.mode(\"append\").saveAsTable(\"employees_performance\")",
        "is_correct": true
      },
      {
        "text": "performance_df.write.mode(\"overwrite\").saveAsTable(\"employees_performance\")",
        "is_correct": false
      },
      {
        "text": "performance_df.write.format(\"delta\").saveAsTable(\"employees_performance\")",
        "is_correct": false
      },
      {
        "text": "performance_df.write.partitionBy(\"date\").saveAsTable(\"employees_performance\")",
        "is_correct": false
      }
    ],
    "explanation": "<p>DataFrameWriter.modeはデータまたはテーブルが既に存在する場合の書き込み動作を定義します。</p><p>利用可能なオプション：</p><ul><li><strong>append</strong> - DataFrameの内容を既存データに追加します</li><li><strong>overwrite</strong> - 既存データを上書きします</li><li><strong>error または errorifexists</strong> - データが既に存在する場合は例外をスローします</li><li><strong>ignore</strong> - データが既に存在する場合、この操作を無視します</li></ul><p>「employees_performance」テーブルはdateカラムを持っています。従業員のパフォーマンスを時系列で比較できるようにするには、新しい日付を持つ新しいバッチデータを<code>append</code>モードを使用してテーブルに追加する必要があります。<code>overwrite</code>モードを使用すると、過去のデータが上書きされて失われてしまい、時系列比較ができなくなります。</p>",
    "tags": "データ処理コードの開発",
    "summary": "時系列でのデータ比較を可能にするには、appendモードを使用して新しいバッチデータを既存テーブルに追加する必要があります。"
  },
  {
    "id": 28,
    "question": "データエンジニアがLakehouse Declarative Pipelinesでの以下のコードを使用してCDCデータを処理しています：\nCREATE OR REFRESH STREAMING TABLE cdc_target;\nCREATE FLOW cdc_flow AS AUTO CDC INTO users_target\nFROM stream(users_raw)\nKEYS (user_id)\nAPPLY AS DELETE WHEN operation = \"DELETE\"\nSEQUENCE BY updated_timestamp\nCOLUMNS *;\nこのコードを実行した後、データエンジニアはusers_targetテーブルに加えてメタストアに2つのオブジェクトが作成されたことに気付きました：\nusers_targetという名前のビュー。\n__apply_changes_storage_users_targetという名前のテーブル。\nこれらのオブジェクトの目的を正しく説明しているのはどれですか？",
    "choices": [
      {
        "text": "ビューusers_targetは生データの具体化されたスナップショットであり、テーブル__apply_changes_storage_users_targetは監査目的でユーザーアクティビティログを保存する",
        "is_correct": false
      },
      {
        "text": "ビューusers_targetはターゲットテーブルの仮想インデックスでクエリを高速化し、__apply_changes_storage_users_targetはusers_targetインデックスのバックアップである",
        "is_correct": false
      },
      {
        "text": "ビューusers_targetとテーブル__apply_changes_storage_users_targetは書き込み最適化用に作成された一時オブジェクトであり、パイプライン実行直後に削除される",
        "is_correct": false
      },
      {
        "text": "これらのオブジェクトはsequence_byと共にトゥームストーンとバージョン管理などの追加情報を活用して、順不同のデータを処理するための内部CDC処理に使用される",
        "is_correct": true
      }
    ],
    "explanation": "<p>Lakehouse Declarative Pipelinesでは、<code>APPLY AS DELETE</code>や<code>SEQUENCE BY</code>などの操作を含むCDC（Change Data Capture）フローを作成する場合、システムは挿入、更新、削除を含む増分更新を管理する方法が必要です。これらの更新はシーケンスキーに基づいてイベントの正しい順序を維持する必要があります。</p><p>内部テーブルの役割：</p><ul><li><strong>__apply_changes_storage_users_targetテーブル</strong> - 削除された行に対するトゥームストーンマーカーと、順不同または遅延到着イベントが正しく適用されることを保証するためのバージョン管理メタデータを含む変更を追跡する内部ストレージテーブルです。このテーブルは直接クエリするためのものではありませんが、CDC一貫性を維持するために不可欠です</li><li><strong>ビューusers_target</strong> - この内部テーブルの上に層として機能する仮想ビューで、データの現在の状態をクリーンでクエリ可能なスナップショットとして提示します。これにより、CDCロジックをカプセル化して透過的に保つことができます</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Lakehouse Declarative PipelinesのCDC処理では、__apply_changes_storage_テーブルが順不同データを処理するための内部メタデータを保持し、ビューがクエリ可能なクリーンなデータスナップショットを提供します。"
  },
  {
    "id": 29,
    "question": "以下の定義のうち、Slowly Changing Dimension Type 0を正しく説明しているのはどれですか？",
    "choices": [
      {
        "text": "変更が許可されないテーブルです",
        "is_correct": true
      },
      {
        "text": "新しく到着したデータが既存のデータを上書きするテーブルです",
        "is_correct": false
      },
      {
        "text": "時間経過に伴い、現在のデータと過去のデータの両方を保存・管理するテーブルです",
        "is_correct": false
      },
      {
        "text": "履歴が追加のカラムに保持されるテーブルです",
        "is_correct": false
      }
    ],
    "explanation": "<p>Type 0のSCDテーブルは変更されることはありません。このタイプのテーブルは通常、静的なデータです。例えば、静的ルックアップテーブルがこれに該当します。</p><p>Type 0の特徴：</p><ul><li><strong>不変性</strong> - 一度作成されたデータは変更されません</li><li><strong>静的データ</strong> - ルックアップテーブルや参照テーブルとして使用されます</li><li><strong>履歴管理なし</strong> - データの変更追跡や履歴保存は不要です</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Slowly Changing Dimension Type 0は、一度作成されたら変更されない静的なテーブルで、主に不変のルックアップデータに使用されます。"
  },
  {
    "id": 30,
    "question": "データエンジニアリングチームは、大きなデルタレイクテーブルの一部をデータサイエンスチームと共有するシンプルなソリューションを探しています。テーブル内の部門固有のカラムのみを共有する必要がありますが、異なる名前で共有します。さらに、共有前にフィルタリングして除外する必要がある機密データが存在します。\n指定された要件を満たすために作成できるのは、以下のどのオブジェクトですか？",
    "choices": [
      {
        "text": "既存テーブルからSHALLOW CLONEを使用して作成された新しいデルタテーブル",
        "is_correct": false
      },
      {
        "text": "既存テーブルからDEEP CLONEを使用して作成された新しいデルタテーブル",
        "is_correct": false
      },
      {
        "text": "既存テーブルに対するCTAS文を使用して作成された新しいデルタテーブル",
        "is_correct": false
      },
      {
        "text": "既存テーブル上の保存ビュー",
        "is_correct": true
      }
    ],
    "explanation": "<p>このユースケースの解決策は、テーブル上にビューを作成することです。ビューでは、必要なカラムをリネームし、WHERE句で機密データをフィルタリングして除外できます。</p><p>ビューを使用するメリット：</p><ul><li><strong>カラムの選択と名前変更</strong> - 必要なカラムのみを選択し、異なる名前で公開できます</li><li><strong>データのフィルタリング</strong> - WHERE句を使用して機密データを除外します</li><li><strong>ストレージ効率</strong> - ビューは新しいデータを保存せず、クエリ時に元のテーブルから生成されます</li><li><strong>保守性</strong> - ビューの定義を更新するだけで、共有されるデータを簡単に変更できます</li></ul><p>一方、CLONEやCTASを使用すると、新しいテーブルを作成するためにストレージスペースが必要になり、データの同期を保つための管理が増加します。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "保存ビューを使用することで、カラムの選択と名前変更、機密データのフィルタリングを効率的に実現でき、追加のストレージを消費しません。"
  },
  {
    "id": 31,
    "question": "以下のステートメントのうち、統合テスト（Integration Testing）を正しく説明しているのはどれですか？",
    "choices": [
      {
        "text": "アプリケーションのサブシステム間の相互作用をテストして、モジュールがグループとして適切に動作することを確認するアプローチです",
        "is_correct": true
      },
      {
        "text": "ユーザーエクスペリエンスをシミュレートして、アプリケーションが実際のシナリオで正常に動作できることを確認するアプローチです",
        "is_correct": false
      },
      {
        "text": "アプリケーションの各機能がビジネス要件に従って動作するかどうかを検証するアプローチです",
        "is_correct": false
      },
      {
        "text": "コードの個々のユニットをテストして、将来的に新しい変更が加えられた場合でも期待通りに動作するかどうかを判定するアプローチです",
        "is_correct": false
      }
    ],
    "explanation": "<p>統合テスト（Integration Testing）は、アプリケーションのサブシステム間の相互作用をテストするアプローチです。ソフトウェアモジュールが論理的に統合され、グループとしてテストされることを確認します。</p><p>統合テストの特徴：</p><ul><li><strong>モジュール間の相互作用</strong> - 個々のユニット単体ではなく、複数のモジュール間の連携をテストします</li><li><strong>インターフェース検証</strong> - モジュール間のデータフローと通信が正しく機能することを確認</li><li><strong>統合の検証</strong> - 個別のコンポーネントが一体として正常に動作することを確認</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "統合テストは複数のモジュール間の相互作用をテストし、それらがグループとして正常に機能することを確認するテスト手法です。"
  },
  {
    "id": 32,
    "question": "Stream-Static結合における静的デルタテーブルに関する以下のステートメントのうち、正しいのはどれですか？",
    "choices": [
      {
        "text": "静的デルタテーブルの最新バージョンはストリーム-スタティック結合の最初のマイクロバッチに対してのみ返され、その後はキャッシュされて以降のマイクロバッチによって使用されます",
        "is_correct": false
      },
      {
        "text": "静的デルタテーブルはクラスタ内のすべてのワーカーノードにブロードキャストするのに十分な小さなサイズである必要があります",
        "is_correct": false
      },
      {
        "text": "静的デルタテーブルの最新バージョンはストリーム-スタティック結合のマイクロバッチによってクエリされるたびに返されます",
        "is_correct": true
      },
      {
        "text": "静的デルタテーブルはストリーム-スタティック結合の各マイクロバッチに対してREFRESH TABLEコマンドで更新される必要があります",
        "is_correct": false
      }
    ],
    "explanation": "<p>Stream-Static結合はデルタレイクの保証を活用します。この保証により、データストリームとの結合操作でクエリされるたびに、静的デルタテーブルの最新バージョンが返されます。</p><p>Stream-Static結合の特徴：</p><ul><li><strong>最新バージョンの自動取得</strong> - マイクロバッチごとに静的テーブルをクエリするたびに、最新バージョンが自動的に返されます</li><li><strong>デルタレイクの保証</strong> - デルタレイクはACIDトランザクションサポートにより、常に最新の一貫性のあるデータを提供</li><li><strong>手動更新不要</strong> - REFRESH TABLEコマンドを実行する必要はなく、デルタレイクが自動的に管理</li><li><strong>キャッシング不要</strong> - 各マイクロバッチで最新データが取得されるため、キャッシュは使用されません</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Stream-Static結合では、デルタレイクの保証により、各マイクロバッチで静的テーブルの最新バージョンが自動的に取得されます。"
  },
  {
    "id": 33,
    "question": "データエンジニアがDatabricks Auto Loaderを使用した以下のストリーミング取り込みコードを実装しました：\nspark.readStream \\\n  .format(\"cloudFiles\") \\\n  .schema(expected_schema) \\\n  .option(\"cloudFiles.format\", \"json\") \\\n  .option(\"cloudFiles.schemaEvolutionMode\", \"failOnNewColumns\") \\\n  .load(\"s3://vendor/raw/sales/json/\") \\\n  .writeStream \\\n  .option(\"checkpointLocation\", \"s3://vendor/checkpoints/sales\") \\\n  .start(\"sales_table\")\n元のスキーマに含まれていない新しいカラムが受信JSONファイルに現れた場合、このストリーミングジョブの予期される動作は何ですか？",
    "choices": [
      {
        "text": "ストリームは失敗しますが、新しいカラムでスキーマを更新した後、自動的に再開します",
        "is_correct": false
      },
      {
        "text": "ストリームは失敗し、すべての新しいカラムは後処理用のレスキューデータカラムに保存されます",
        "is_correct": false
      },
      {
        "text": "ストリームは一時的に失敗しますが、スキーマ更新なしで新しいカラムを無視して続行します",
        "is_correct": false
      },
      {
        "text": "ストリームは失敗し、スキーマが手動で更新されるか、問題のあるデータファイルが削除されるまで再開されません",
        "is_correct": true
      }
    ],
    "explanation": "<p><code>failOnNewColumns</code>モードでは、ストリームは新しいカラムを検出して即座に失敗し、厳密なスキーマの一貫性を強制します。スキーマが手動で新しいカラムを含めるように更新されるか、スキーマ不一致の原因となるデータファイルが削除されるまで、自動的には再開されません。これにより、サイレントなスキーマドリフトを防ぎ、意図的なスキーマ管理を保証します。</p><p><code>failOnNewColumns</code>モードの特徴：</p><ul><li><strong>スキーマ検証</strong> - 受信データが期待されたスキーマと完全に一致することを厳密に検証</li><li><strong>自動修復なし</strong> - 新しいカラムの自動検出と追加は行われません</li><li><strong>明示的なスキーマ管理</strong> - スキーマ変更は意図的かつ明示的に実行する必要があります</li><li><strong>データ品質保証</strong> - スキーマの予期しない変更によるデータ品質の低下を防止</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "failOnNewColumnsモードを使用する場合、新しいカラムが検出されるとストリームは失敗し、スキーマの手動更新が必要になるまで再開されません。"
  },
  {
    "id": 34,
    "question": "データエンジニアがLDPパイプラインのデータ品質結果をプログラム的に関連するイベントログテーブルから抽出する必要があります。\n以下のコードスニペットのうち、このタスクを実現するために使用できるのはどれですか？",
    "choices": [
      {
        "text": "SELECT data_quality\nFROM catalog.schema.event_log\nWHERE event_type = 'metrics'",
        "is_correct": false
      },
      {
        "text": "SELECT expectations\nFROM catalog.schema.event_log\nWHERE event_type = 'metrics'",
        "is_correct": false
      },
      {
        "text": "SELECT details:flow_progress.data_quality.expectations\nFROM catalog.schema.event_log\nWHERE event_type = 'flow_progress'",
        "is_correct": true
      },
      {
        "text": "SELECT expectations\nFROM catalog.schema.event_log\nWHERE event_type = 'flow_progress'",
        "is_correct": false
      }
    ],
    "explanation": "<p>LDPパイプラインのイベントログテーブルでは、データ品質結果は「flow_progress」タイプのイベントの下にログされ、detailsカラム内のネストされたJSON構造に保存されます：</p><ul><li><strong><code>details:flow_progress</code></strong> - パイプラインの実行進行状況に関する情報を含みます</li><li><strong><code>details:flow_progress.data_quality</code></strong> - データ品質結果（expectations、dropped_recordsなど）を含みます</li><li><strong><code>details:flow_progress.data_quality.expectations</code></strong> - 具体的にはexpectationの結果を保持します</li></ul><p>JSON形式のネストされた構造にアクセスするためには、<code>:</code>演算子を使用してパスを指定する必要があります。</p>",
    "tags": "モニタリングとアラート",
    "summary": "LDPパイプラインのイベントログからデータ品質結果を抽出するには、flow_progressイベント内のネストされたdetails:flow_progress.data_quality.expectationsパスをクエリする必要があります。"
  },
  {
    "id": 35,
    "question": "「複雑な集計とBIワークロードのパフォーマンスを向上させるために、事前計算されたクエリ結果を物理的に保存し、スケジュールまたは自動的に更新するオブジェクト」\n上記のステートメントで説明されているのは、以下のどれですか？",
    "choices": [
      {
        "text": "標準ビュー",
        "is_correct": false
      },
      {
        "text": "マテリアライズドビュー",
        "is_correct": true
      },
      {
        "text": "一時ビュー",
        "is_correct": false
      },
      {
        "text": "ストリーミングテーブル",
        "is_correct": false
      }
    ],
    "explanation": "<p>このステートメントはマテリアライズドビューを説明しています。Databricks SQLでは、マテリアライズドビューはクエリ結果を物理的に保存するUnity Catalogで管理されたテーブルです。</p><p>マテリアライズドビューの特徴：</p><ul><li><strong>物理的なデータ保存</strong> - 標準ビューとは異なり、クエリ結果を実際に保存します</li><li><strong>自動または定期更新</strong> - 基盤となるソーステーブルの変更に応じて、スケジュール通りまたは自動的に結果を更新</li><li><strong>パフォーマンス最適化</strong> - 複雑な集計や頻繁に使用されるクエリを事前計算することで、クエリレイテンシとリソース消費を削減</li><li><strong>BI用途に最適</strong> - ダッシュボードのパフォーマンスを加速させるために活用</li></ul><p>その他のオプションが正しくない理由：</p><ul><li><strong>標準ビュー</strong> - データを物理的に保存しません。単なる保存クエリです</li><li><strong>一時ビュー</strong> - セッション期間のみ存在し、永続化されません</li><li><strong>ストリーミングテーブル</strong> - 増分的にデータを取り込みますが、事前計算されたクエリ結果を保存するためのものではありません</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "マテリアライズドビューはクエリ結果を物理的に保存し、スケジュールまたは自動更新により複雑な集計やBIワークロードのパフォーマンスを向上させます。"
  },
  {
    "id": 36,
    "question": "本番環境のS3バケットが毎日異なるフォーマット（.png、.jpg、.gif）の数千のイメージファイルを受け取っています。データエンジニアは以下のストリーミング取り込みスクリプトを変更して、.pngファイルのみが処理されることを確認するよう指示されました。\ndf = spark.readStream.format(\"cloudFiles\") \\\n          .option(\"cloudFiles.format\", \"binaryFile\") \\\n          .option(\"_____________\", \"*.png\") \\\n          .load(\"s3://shop/raw/invoices/\")\n指定された要件を満たすために、空白を正しく埋めるオプションはどれですか？",
    "choices": [
      {
        "text": "fileExtension",
        "is_correct": false
      },
      {
        "text": "cloudFiles.fileExtension",
        "is_correct": false
      },
      {
        "text": "pathGlobFilter",
        "is_correct": true
      },
      {
        "text": "cloudFiles.pathGlobFilter",
        "is_correct": false
      }
    ],
    "explanation": "<p><code>pathGlobFilter</code>オプションを使用すると、Auto Loaderで<code>*.png</code>などのグロブパターンに基づいて入力ファイルをフィルタリングできます。</p><p>pathGlobFilterの特徴：</p><ul><li><strong>グロブパターンマッチング</strong> - ワイルドカード（*）を使用したパターンマッチングでファイルを選択</li><li><strong>ファイル形式フィルタリング</strong> - <code>*.png</code>、<code>*.jpg</code>などの拡張子でファイルを絞り込み</li><li><strong>Auto Loader統合</strong> - Auto Loader（cloudFiles形式）と組み合わせて使用</li><li><strong>効率的なフィルタリング</strong> - S3から取得するファイル数を削減し、パフォーマンスを向上</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "pathGlobFilterオプションを使用することで、Auto Loaderでグロブパターンに基づいてファイルをフィルタリングし、指定されたファイル形式のみを処理できます。"
  },
  {
    "id": 37,
    "question": "自動リキッドクラスタリング（Automatic Liquid Clustering）は、Unity Catalogで管理されるデルタテーブルのクラスタリングキーとして使用するカラムをどのように決定しますか？",
    "choices": [
      {
        "text": "観測されたクエリ動作に基づいて最適なクラスタリングキーを選択するために予測最適化を活用する",
        "is_correct": true
      },
      {
        "text": "テーブル作成時に指定された事前定義されたクラスタリングカラムから、インテリジェントにクラスタリングキーを選択する",
        "is_correct": false
      },
      {
        "text": "スキーマ内のカラム定義の型と順序に基づいて、自動的に最適なクラスタリングキーを決定する",
        "is_correct": false
      },
      {
        "text": "すべてのファイルでデータを均等にバランスさせた後、カラム選択をランダム化する高度なサンプリング戦略を活用する",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricksの自動リキッドクラスタリングは、アクセスパターンとメタデータ統計に基づいてデルタテーブルのデータ物理レイアウトを自動的に最適化するための機能です。クエリ動作分析を使用してクラスタリングキーを動的に選択する予測最適化を活用します。</p><p>自動リキッドクラスタリングの特徴：</p><ul><li><strong>予測最適化の活用</strong> - 実際のクエリパターンを分析してクラスタリング戦略を最適化</li><li><strong>動的キー選択</strong> - 固定的ではなく、ワークロードに応じてクラスタリングキーが動的に選択される</li><li><strong>アクセスパターン分析</strong> - クエリの実行方法を学習し、それに最適化されたレイアウトを作成</li><li><strong>自動最適化</strong> - 手動でのクラスタリング設定が不要になる</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "自動リキッドクラスタリングは予測最適化を活用してクエリ動作を分析し、観測されたアクセスパターンに基づいて最適なクラスタリングキーを動的に選択します。"
  },
  {
    "id": 38,
    "question": "以下のうち、クラスタポリシーを使用する利点ではないのはどれですか？",
    "choices": [
      {
        "text": "特定の時間にクラスタを開始および停止するようにスケジュール設定する",
        "is_correct": true
      },
      {
        "text": "クラスタスコープのライブラリインストールを強制する",
        "is_correct": false
      },
      {
        "text": "クラスタが一貫したシステム設定、環境変数、およびSpark設定で作成されることを確認する",
        "is_correct": false
      },
      {
        "text": "クラスタごとの最大コスト制限によってコストを管理する",
        "is_correct": false
      }
    ],
    "explanation": "<p>クラスタポリシーでは、特定の時間にクラスタを開始および停止するようにスケジュール設定することはサポートされていません。</p><p>クラスタポリシーの主な機能：</p><ul><li><strong>一貫した設定の強制</strong> - システム設定、環境変数、Spark設定を統一</li><li><strong>ライブラリインストールの管理</strong> - クラスタスコープのライブラリインストールを強制</li><li><strong>コスト管理</strong> - クラスタ作成時に制限とデフォルトを設定してコストを管理</li><li><strong>ガバナンス</strong> - クラスタの作成ルールを一元的に管理</li></ul><p>クラスタのスケジューリング機能（起動・停止の自動化）は別の機能として提供されており、クラスタポリシーでは実装されていません。</p>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "クラスタポリシーは設定の統一化やコスト管理には優れていますが、クラスタのスケジュール開始・停止機能はサポートされていません。"
  },
  {
    "id": 39,
    "question": "データエンジニアリングチームは「DataOps-Prod」という名前のシークレットスコープを持っており、本番ワークスペースのDataOpsエンジニアが必要とするすべてのシークレットが含まれています。\nDataOpsエンジニアがこのスコープのシークレットを使用するために必要な最小限の権限は以下のどれですか？",
    "choices": [
      {
        "text": "「DataOps-Prod」スコープ内の各シークレットに対するMANAGE権限",
        "is_correct": false
      },
      {
        "text": "「DataOps-Prod」スコープ内の各シークレットに対するREAD権限",
        "is_correct": false
      },
      {
        "text": "「DataOps-Prod」スコープに対するREAD権限",
        "is_correct": true
      },
      {
        "text": "「DataOps-Prod」スコープに対するMANAGE権限",
        "is_correct": false
      }
    ],
    "explanation": "<p>シークレットアクセス権限は以下の通りです：</p><ul><li><strong>MANAGE</strong> - ACLを変更し、このシークレットスコープの読み取りと書き込みが許可されます</li><li><strong>WRITE</strong> - このシークレットスコープの読み取りと書き込みが許可されます</li><li><strong>READ</strong> - このシークレットスコープの読み取りが許可され、利用可能なシークレットをリストできます</li></ul><p>権限階層：</p><ul><li>各権限レベルは前のレベルの権限のサブセットです</li><li>特定のスコープに対してWRITE権限を持つプリンシパルは、READ権限が必要なすべてのアクションを実行できます</li><li>シークレットを使用するだけであれば、READ権限で十分です</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "シークレットスコープのシークレットを使用するために必要な最小限の権限はスコープレベルのREAD権限です。"
  },
  {
    "id": 40,
    "question": "データエンジニアリングチームは、パーティション分割されたデルタレイクテーブルが大きな問題を抱えていることに気付きました。このテーブルに対するほとんどの一般的なクエリでスローダウンを経験しています。\nチームはテーブルに対してOPTIMIZEコマンドを実行してみましたが、この問題の解決には役に立ちませんでした。\nこれらのスローダウンの原因を最も可能性が高く説明するのは、以下のどれですか？",
    "choices": [
      {
        "text": "テーブル全体にOPTIMIZEコマンドを適用している。各パーティションに対して個別に適用する必要があります",
        "is_correct": false
      },
      {
        "text": "ZORDERなしでOPTIMIZEコマンドを適用している。パーティショニングカラムにはZ-orderingが必要です",
        "is_correct": false
      },
      {
        "text": "テーブルに古いデータファイルが多すぎて、削除する必要がある。代わりにVACUUMコマンドを実行する必要があります",
        "is_correct": false
      },
      {
        "text": "テーブルがオーバーパーティション化またはインコレクトなパーティション化になっている。この問題を解決するには、すべてのデータファイルの完全な書き直しが必要です",
        "is_correct": true
      }
    ],
    "explanation": "<p>オーバーパーティション化またはインコレクトなパーティション化されたデータは大きな問題を引き起こします。</p><p>問題の原因：</p><ul><li><strong>パーティション境界を越えたファイル結合不可</strong> - ファイルをパーティション境界を越えてコンパイルまたはコンパクトできません</li><li><strong>ストレージコスト増加</strong> - パーティション化された小さなテーブルはストレージコストを増加させます</li><li><strong>スキャンファイル数の増加</strong> - 扱うファイルの総数が増加します</li><li><strong>クエリパフォーマンス低下</strong> - ほとんどの一般的なクエリがスローダウンします</li></ul><p>解決方法：</p><ul><li>このような問題を解決するには、すべてのデータファイルを完全に書き直す必要があります</li><li>パーティション戦略を見直し、適切なパーティションキーを選択する必要があります</li><li>OPTIMIZEやVACUUMコマンドではこの根本的な問題を解決できません</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "オーバーパーティション化またはインコレクトなパーティション化はパーティション境界を越えたファイルコンパクションを阻害し、パフォーマンス低下を招くため、すべてのデータファイルの完全な書き直しが必要です。"
  },
  {
    "id": 41,
    "question": "外部パートナーとのデルタシェアリング設定中に、データエンジニアはパートナーに共有識別子の提供を依頼しました。\nDatabricks間データ共有（Databricks-to-Databricks Sharing）の文脈における共有識別子を最も適切に説明するのは、以下のどれですか？",
    "choices": [
      {
        "text": "受信者のUnity Catalogメタストアに対する一意の参照を提供する",
        "is_correct": true
      },
      {
        "text": "受信者のエンドポイントとのAPIコールの認証トークンとして機能する",
        "is_correct": false
      },
      {
        "text": "ファイアウォールホワイトリスト用にパートナーのネットワークIPアドレスを識別する",
        "is_correct": false
      },
      {
        "text": "パートナーのテーブルへのデータ書き込み中に使用される公開暗号化キーとして機能する",
        "is_correct": false
      }
    ],
    "explanation": "<p>デルタシェアリング識別子は、Databricks間データ共有で受信者のUnity Catalogメタストアを識別するために使用される一意の文字列です。この识別子により、データプロバイダーは共有データへのアクセス権を付与できます。</p><p>共有識別子の形式：</p><ul><li><code>&lt;cloud&gt;:&lt;region&gt;:&lt;uuid&gt;</code></li><li>例：<code>aws:us-west-2:19a84bee-54bc-43a2-87de-023d0ec16016</code></li></ul><p>識別子の構成要素：</p><ul><li><strong>aws</strong> - クラウドプロバイダー（Amazon Web Services）を表します</li><li><strong>us-west-2</strong> - 特定のAWSリージョンを表します</li><li><strong>19a84bee-54bc-43a2-87de-023d0ec16016</strong> - 受信者のUnity Catalogメタストアの汎用一意識別子（UUID）</li></ul><p>受信者は、Catalog Explorerを使用するか、<code>SELECT CURRENT_METASTORE();</code>などのSQLクエリを実行することで、Databricksワークスペースから共有識別子を取得できます。この識別子をデータプロバイダーに提供し、プロバイダーはそれを使用して受信者を作成し、共有へのアクセス権を付与します。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "共有識別子はDatabricks間データ共有で受信者のUnity Catalogメタストアを一意に識別する文字列で、クラウド、リージョン、UUIDで構成されます。"
  },
  {
    "id": 42,
    "question": "デルタレイクのファイル統計に関する以下のステートメントのうち、正しくないのはどれですか？",
    "choices": [
      {
        "text": "デルタレイクは追加されたデータファイルごとにトランザクションログに統計情報をキャプチャする",
        "is_correct": false
      },
      {
        "text": "ネストされたフィールドはテーブルの最初の32カラムを決定する際にカウントされない",
        "is_correct": true
      },
      {
        "text": "統計情報は選択的なクエリを実行する際のデータスキップに活用される",
        "is_correct": false
      },
      {
        "text": "統計情報は一般的にカーディナリティが非常に高い文字列フィールドに対して有益性が低い",
        "is_correct": false
      }
    ],
    "explanation": "<p>デルタレイクはテーブルに追加されたデータファイルごとにトランザクションログに統計情報を自動的にキャプチャします。デフォルトでは、デルタレイクは各テーブルの最初の32カラムに対して統計情報を収集します。</p><p>重要なポイント：</p><ul><li><strong>ネストされたフィールドもカウント対象</strong> - ネストされたフィールドは最初の32カラムを決定する際にカウントされます</li><li>例：8つのネストされたフィールドを持つ4つのstructフィールドは、合計32カラムに相当します</li><li><strong>データスキップに活用</strong> - 統計情報は選択的なクエリ実行時のデータスキップをサポート</li><li><strong>高カーディナリティ文字列フィールド</strong> - カーディナリティが非常に高い文字列フィールドの統計情報は一般的に有益性が低い</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "デルタレイクの統計情報ではネストされたフィールドも最初の32カラムのカウントに含まれ、データスキップのパフォーマンス最適化に活用されます。"
  },
  {
    "id": 43,
    "question": "データエンジニアが製品販売データを処理するためのLakehouse Declarative Pipelineを構築しています。パイプラインは以下のデータ品質ルールを強制する必要があります：\nvalid_products = {\"valid_id\": \"products_id IS NOT NULL\", \"recent_sales\": \"date >= '2025-01-01\", \"quantity_within_range\": \"quantity BETWEEN 0 AND 1000\"}\n無効なレコードもターゲットに書き込まれ、これらの違反に関するメトリクスがパイプラインによってキャプチャされる必要があります。\n以下のどの設定がこれらの要件を満たしますか？",
    "choices": [
      {
        "text": "@dlt.table\n@dlt.expect_all(valid_products)\ndef silver_sales():\n    return dlt.read_stream(\"bronze_sales\")",
        "is_correct": true
      },
      {
        "text": "@dlt.table\n@dlt.expect(valid_products)\ndef silver_sales():\n    return dlt.read_stream(\"bronze_sales\")",
        "is_correct": false
      },
      {
        "text": "@dlt.table\n@dlt.expect_or_fail(valid_products)\ndef silver_sales():\n    return dlt.read_stream(\"bronze_sales\")",
        "is_correct": false
      },
      {
        "text": "@dlt.table\n@dlt.expect_or_drop(valid_products)\ndef silver_sales():\n    return dlt.read_stream(\"bronze_sales\")",
        "is_correct": false
      }
    ],
    "explanation": "<p><code>dlt.expect_all</code>は指定されたすべてのデータ品質ルールを強制し、有効なレコードと無効なレコードの両方をターゲットテーブルに書き込み、ルール違反に関するメトリクスをキャプチャします。</p><p>他のオプションが要件を満たさない理由：</p><ul><li><strong>dlt.expect</strong> - 期待値を個別に適用しますが、グループとしてすべてを自動的に強制しません</li><li><strong>dlt.expect_or_fail</strong> - 個々のルール違反時にパイプラインを停止します。要件では無効なレコードをターゲットに書き込む必要があります</li><li><strong>dlt.expect_or_drop</strong> - 個々の無効なレコードを削除します。要件では無効なレコードもターゲットに書き込む必要があります</li></ul><p>複数の期待値をグループ化してその集合的なアクションを指定するために、<code>dlt.expect_all_or_drop</code>および<code>dlt.expect_all_or_fail</code>関数も利用できます。</p>",
    "tags": "データ処理コードの開発",
    "summary": "dlt.expect_allを使用することで、すべてのデータ品質ルールを強制しながら、無効なレコードもターゲットに書き込み、違反メトリクスをキャプチャできます。"
  },
  {
    "id": 44,
    "question": "サプライチェーン企業のデータエンジニアリングチームはLakehouse Declarative Pipelinesを使用してインベントリデータを管理しています。チームはraw inventory statusの情報を保存するappend-onlyストリーミングテーブル「inventory_raw」を保持しており、カラムは以下の通りです：product_id、quantity、event_timestamp。\nデータエンジニアはinventory_rawから製品インベントリレベルの近リアルタイム変更をキャプチャする新しいテーブル「inventory_latest」を作成するよう指示されました。新しいテーブルには以下のカラムが含まれます：product_id、current_quantity、updated_timestamp。\n以下のどのタイプのオブジェクトがinventory_latestテーブルの実装に最も適していますか？",
    "choices": [
      {
        "text": "ストリーミングテーブル",
        "is_correct": true
      },
      {
        "text": "一時ビュー",
        "is_correct": false
      },
      {
        "text": "ライブテーブル",
        "is_correct": false
      },
      {
        "text": "マテリアライズドビュー",
        "is_correct": false
      }
    ],
    "explanation": "<p>inventory_latestテーブルの実装に最も適したオブジェクトはストリーミングテーブルです。ストリーミングテーブルはinventory_rawなどのappend-onlyソースから近リアルタイム変更を継続的にキャプチャおよび更新するために設計されています。</p><p>ストリーミングテーブルを使用する利点：</p><ul><li><strong>リアルタイム更新</strong> - 受信した変更をマージするか、inventory_rawからCDC（Change Data Capture）フィードを適用することで、テーブルが常に製品ごとの最新インベントリ状態を反映</li><li><strong>個別レコード更新</strong> - 各新しいイベント（更新または挿入）がリアルタイムで適用され、current_quantityとupdated_timestampが更新される</li><li><strong>効率性</strong> - テーブル全体を再構築することなく動作</li></ul><p>その他のオプションが適さない理由：</p><ul><li><strong>マテリアライズドビュー</strong> - バッチ指向またはスケジュール済みの増分処理用で、個別レコードのリアルタイム更新には適していません</li><li><strong>一時ビュー</strong> - 一時的で永続的なステート追跡には適していません</li><li><strong>ライブテーブル</strong> - バッチ処理またはスケジュール済みの更新に適しており、継続的なリアルタイム更新には最適ではありません</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "ストリーミングテーブルはappend-onlyソースから近リアルタイム変更を継続的にキャプチャして個別レコードを更新するため、inventory_latestテーブルの実装に最も適しています。"
  },
  {
    "id": 45,
    "question": "データエンジニアリングチームが以下のクエリを使用してデルタレイクテーブルを作成しました：\nCREATE TABLE customers_clone\nLOCATION 'dbfs:/mnt/backup'\nAS SELECT * FROM customers\nデータエンジニアが以下のクエリを使用してテーブルをドロップしたいと考えています：\nDROP TABLE customers_clone\nこのドロップコマンドを実行した結果を説明するのは、以下のどれですか？",
    "choices": [
      {
        "text": "テーブルのメタデータとデータファイルの両方が削除される",
        "is_correct": false
      },
      {
        "text": "テーブルのメタデータのみがカタログから削除され、データファイルはストレージに保持される",
        "is_correct": true
      },
      {
        "text": "テーブルがcustomersテーブルからシャローにクローンされているため、エラーが発生する",
        "is_correct": false
      },
      {
        "text": "VACUUMコマンドが実行されるまで、テーブルはドロップされない",
        "is_correct": false
      }
    ],
    "explanation": "<p>外部（管理されていない）テーブルとは、LOCATION句を使用して外部ストレージパスにデータが保存されているテーブルのことです。</p><p>外部テーブルの特徴：</p><ul><li><strong>LOCATION句の使用</strong> - <code>LOCATION 'dbfs:/mnt/backup'</code>のように外部ストレージパスを指定</li><li><strong>DROP実行時の動作</strong> - テーブルのメタデータのみが削除され、基盤となるデータファイルは保持されます</li><li><strong>データ保護</strong> - 外部テーブルでは、DROP操作後も元のデータが安全に保存されます</li></ul><p>管理テーブルとの違い：</p><ul><li><strong>管理テーブル</strong> - LOCATION句がない場合、DROP時はメタデータとデータファイルの両方が削除されます</li><li><strong>外部テーブル</strong> - LOCATION句がある場合、DROP時はメタデータのみ削除され、データは保持されます</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "LOCATION句で外部パスを指定した外部テーブルをDROPすると、メタデータのみが削除され、基盤となるデータファイルはストレージに保持されます。"
  },
  {
    "id": 46,
    "question": "データエンジニアがPythonホイールを現在のノートブックのセッションにスコープを限定してインストールしたいと考えています。つまり、現在のノートブックとこのノートブックに関連付けられたすべてのジョブのみがそのライブラリにアクセスできるようにしたいのです。\nこのタスクを完了するために、データエンジニアは以下のどのコマンドを使用できますか？",
    "choices": [
      {
        "text": "%whl install my_package",
        "is_correct": false
      },
      {
        "text": "%python install my_package.whl",
        "is_correct": false
      },
      {
        "text": "%pip install my_package.whl",
        "is_correct": true
      },
      {
        "text": "%fs install my_package.whl",
        "is_correct": false
      }
    ],
    "explanation": "<p><code>%pip install</code>を使用することで、Pythonホイールを現在のノートブックのセッションにスコープを限定してインストールできます。このライブラリは現在のノートブックとこのノートブックに関連付けられたすべてのジョブのみでアクセス可能になります。</p><p>%pip installの特徴：</p><ul><li><strong>セッションスコープ</strong> - ライブラリは現在のノートブックセッションのみに限定されます</li><li><strong>ジョブアクセス</strong> - このノートブックに関連付けられたジョブからもアクセス可能です</li><li><strong>他のユーザー/ノートブックへの影響なし</strong> - クラスタ全体には影響を与えません</li><li><strong>Pythonホイール対応</strong> - <code>.whl</code>ファイル形式に対応しています</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "%pip installコマンドを使用することで、Pythonホイールをノートブックセッションにスコープを限定してインストールでき、現在のノートブックと関連ジョブのみでアクセス可能にします。"
  },
  {
    "id": 47,
    "question": "データエンジニアがパイプラインで以下のspark設定を使用して、最適化された書き込みと自動コンパクションを有効にしています：\nspark.conf.set(\"spark.databricks.delta.optimizeWrite.enabled\", True)\nspark.conf.set(\"spark.databricks.delta.autoCompact.enabled\", True)\nさらに、パイプラインのすべてのテーブルでデータスキップを活用するために、自動コンパクションでZ-orderインデックスを有効にしたいと考えています。\n以下のどのソリューションがデータエンジニアがこのタスクを完了することを可能にしますか？",
    "choices": [
      {
        "text": "自動コンパクションはZ-Orderingをサポートしていないため、Z-orderインデックスを自動コンパクションで有効にする方法はありません",
        "is_correct": true
      },
      {
        "text": "Z-orderインデックスを自動コンパクションで有効にするには、各テーブルに対して以下を使用する必要があります：\nALTER TABLE table_name\nSET TBLPROPERTIES (delta.autoOptimize.zorder.enabled = true)",
        "is_correct": false
      },
      {
        "text": "spark.conf.set(\"spark.databricks.delta.autoCompact.zorder.enabled\", True)を使用します",
        "is_correct": false
      },
      {
        "text": "spark.conf.set(\"spark.databricks.delta.autoZorder.enabled\", True)を使用します",
        "is_correct": false
      }
    ],
    "explanation": "<p>自動コンパクション（Auto Compaction）はZ-Orderingをサポートしていません。Z-Orderingはコンパクションよりも計算コストが大幅に高いため、自動コンパクションとの組み合わせはサポートされていません。</p><p>自動コンパクションとZ-Orderingの関係：</p><ul><li><strong>自動コンパクション</strong> - ファイルを自動的にマージしてサイズを最適化します</li><li><strong>Z-Orderingの制限</strong> - 計算コストが高く、自動コンパクションと組み合わせてはサポートされていません</li><li><strong>個別での使用</strong> - Z-Orderingが必要な場合は、自動コンパクションとは別に明示的なOPTIMIZEコマンドを使用します</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "自動コンパクションはZ-Orderingをサポートしていないため、Z-orderインデックスと自動コンパクションを同時に有効にすることはできません。"
  },
  {
    "id": 48,
    "question": "基本的なデータ探索、小規模なデータセットのクエリ、PythonとSQLを使用した分析を実行するアナリティクスプロジェクトに取り組みたい複数のデータアナリストで構成されるチームがあります。彼らはデータエンジニアに対して、彼らのワークロードをサポートするためにインタラクティブクラスタを設定するよう依頼しました。\n以下のどのクラスタアクセスモードをエンジニアが設定すべきですか？",
    "choices": [
      {
        "text": "STANDARD",
        "is_correct": true
      },
      {
        "text": "NO_ISOLATION_SHARED",
        "is_correct": false
      },
      {
        "text": "SINGLE_USER",
        "is_correct": false
      },
      {
        "text": "DEDICATED",
        "is_correct": false
      }
    ],
    "explanation": "<p>探索的分析を実行し、小規模なデータセットをクエリし、PythonとSQLのワークロードを共同で実行するデータアナリストのチームの場合、STANDARDクラスタアクセスモードが最適な選択肢です。</p><p>STANDARDモードの特徴：</p><ul><li><strong>共有アクセス</strong> - クラスタリソースへの共有アクセスを提供し、一般的なワークロード向けに設計</li><li><strong>コスト効率</strong> - コスト効果的なコンピュートオプションを提供</li><li><strong>ユーザーアイソレーション</strong> - ユーザーのワークロードを相互に分離</li><li><strong>Python/SQLのサポート</strong> - PythonとSQLのワークロードを効率的に処理</li></ul><p>他のモードが適さない理由：</p><ul><li><strong>DEDICATED</strong> - 特殊化されたワークロードやグループベースのセキュアコラボレーション向け。標準的なPython/SQLアナリティクスには過剰</li><li><strong>SINGLE_USER</strong> - 単一ユーザーの分離されたワークロード用。チームコラボレーションには設計されていない</li><li><strong>NO_ISOLATION_SHARED</strong> - データアイソレーションが最小限で、マルチユーザー環境ではセキュリティ上の懸念から推奨されない</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "STANDARDモードはデータアナリストのチームが協力して基本的なデータ探索とPython/SQLの分析を行うのに最適で、セキュア、効率的、かつコスト効果的です。"
  },
  {
    "id": 49,
    "question": "Databricks REST APIを使用して既存のジョブを実行するとき、新しくトリガーされたランの全体的に一意の識別子を表すのは、以下のどれですか？",
    "choices": [
      {
        "text": "run_key",
        "is_correct": false
      },
      {
        "text": "job_id",
        "is_correct": false
      },
      {
        "text": "run_id",
        "is_correct": true
      },
      {
        "text": "task_id",
        "is_correct": false
      }
    ],
    "explanation": "<p>エンドポイント「/api/2.2/jobs/run-now」を介して既存のジョブを実行すると、トリガーされたランの<code>run_id</code>が返されます。これは新しくトリガーされたランの全体的に一意の識別子を表します。</p><p>REST APIのジョブ実行における識別子：</p><ul><li><strong>run_id</strong> - トリガーされたランの一意の識別子で、グローバルに重複しない</li><li><strong>job_id</strong> - ジョブ自体の識別子で、複数の実行に対して同じ値</li><li><strong>task_id</strong> - ジョブ内の個別タスクを識別するが、ラン全体の識別子ではない</li><li><strong>run_key</strong> - REST API応答には含まれていない</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "Databricks REST APIでジョブを実行する際、新しくトリガーされたランの全体的に一意の識別子はrun_idで、run-nowエンドポイントから返されます。"
  },
  {
    "id": 50,
    "question": "Change Data Feedが有効になっているデルタテーブル「customers」に対する以下のクエリが与えられました：\nspark.read\n        .option(\"readChangeFeed\", \"true\")\n        .option(\"startingVersion\", 0)\n        .table(\"customers\")\n        .filter(col(\"_change_type\").isin([\"update_postimage\"]))\n    .write\n        .mode(\"overwrite\")\n        .table(\"customers_updates\")\nこのクエリを実行するたびに、その結果を説明するのは以下のどれですか？",
    "choices": [
      {
        "text": "更新されたレコードの完全な履歴が各実行時にターゲットテーブルに追加され、重複エントリが発生します",
        "is_correct": false
      },
      {
        "text": "新しく更新されたレコードがターゲットテーブルに追加されます",
        "is_correct": false
      },
      {
        "text": "新しく更新されたレコードがターゲットテーブルを上書きします",
        "is_correct": false
      },
      {
        "text": "更新されたレコードの完全な履歴が各実行時にターゲットテーブルを上書きします",
        "is_correct": true
      }
    ],
    "explanation": "<p>CDFでキャプチャされたテーブルの変更を<code>spark.read</code>を使用して読み込むと、それらを静的ソースとして読み込んでいることになります。そのため、クエリを実行するたびに、指定されたstartingVersionから始まるテーブルのすべての変更が読み込まれます。</p><p>クエリの動作：</p><ul><li><strong>CDFの読み込み</strong> - startingVersion 0から指定されたカラム条件に基づくすべての変更が読み込まれる</li><li><strong>静的ソース</strong> - spark.readはストリーミングではなく静的な読み込みであるため、毎回全変更履歴を取得</li><li><strong>overwriteモード</strong> - <code>mode(\"overwrite\")</code>によってターゲットテーブルが完全に上書きされる</li><li><strong>実行のたびに完全置換</strong> - 各実行時に更新レコードの完全な履歴がターゲットテーブルを上書き</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "spark.readでCDFを読み込みoverwriteモードで書き込む場合、クエリ実行のたびに指定されたバージョンからのすべての変更履歴がターゲットテーブルを上書きします。"
  },
  {
    "id": 51,
    "question": "データエンジニアリングチームは「sales_cleaned」というシルバーテーブルを持っており、新しい販売データが近リアルタイムで追加されています。\n彼らは「sales_cleaned」テーブルに対してゴールドレイヤーエンティティを作成し、年度累計（YTD）販売額を計算したいと考えています。新しいエンティティは以下のスキーマを持ちます：\ncountry_code STRING、category STRING、ytd_total_sales FLOAT、updated TIMESTAMP\nこれらのメトリクスは1日1回の再計算で十分です。ただし、複数のビジネスチームによって非常に頻繁にクエリされるため、データエンジニアリングチームは結果の具体化に関連する潜在的なコストと遅延を削減したいと考えています。\n以下のどのソリューションがこれらの要件を満たしていますか？",
    "choices": [
      {
        "text": "夜間バッチジョブを設定してメトリクスを再計算し、各更新時に上書きされるテーブルとして保存する",
        "is_correct": true
      },
      {
        "text": "ビジネスチームごとに1つのテーブルを複数作成して、メトリクスを迅速かつ効率的にクエリできるようにする",
        "is_correct": false
      },
      {
        "text": "新しいエンティティをビューとして定義して、メトリクスが再計算されるたびに結果を永続化することを避ける",
        "is_correct": false
      },
      {
        "text": "新しいエンティティをグローバル一時ビューとして定義して、計算リソースを共有するノートブックまたはジョブ間で共有できるようにする",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricksでのビューとテーブルの結果の具体化の違い、および各シナリオに関連する総コンピュートコストとストレージコストを削減する方法をデータエンジニアが理解することが重要です。</p><p>ビューの使用を検討する場合：</p><ul><li><strong>複雑でないクエリ</strong> - ビューはオンデマンドで計算されるため、ビューがクエリされるたびに再計算されます。そのため、結合とサブクエリを含む複雑なクエリを頻繁にクエリするとコンピュートコストが増加します</li><li><strong>ストレージコスト削減</strong> - ビューは追加のストレージリソースを必要としません</li></ul><p>ゴールドテーブルの使用を検討する場合：</p><ul><li><strong>複数の下流クエリ</strong> - 複数の下流クエリがテーブルを使用するため、複雑なアドホッククエリを毎回再計算することを避けたい場合</li><li><strong>増分計算</strong> - クエリ結果を継続的または増分的に成長するデータソースから増分計算すべき場合</li><li><strong>頻繁なクエリアクセス</strong> - 結果が頻繁にクエリされる場合、事前計算されたテーブルは遅延を削減</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "1日1回の計算で十分で複数チームから頻繁にクエリされる場合、夜間バッチで再計算し上書き更新するゴールドテーブルがコストと遅延を最適化します。"
  },
  {
    "id": 52,
    "question": "マーケティング部門のデータサイエンティストがBIカタログの一部であるanalyticsスキーマに位置する「customer_insights」テーブルへの読み取り専用アクセスを必要としています。データは四半期ごとの顧客エンゲージメントレポートの生成に使用されます。最小権限の原則に従い、必要なタスクを実行するために必要な最小限の権限のみを付与する必要があります。\n最小権限でアクセスを正しく付与するSQLコマンドはどれですか？",
    "choices": [
      {
        "text": "GRANT SELECT ON TABLE bi.analytics.customer_insights TO marketing_team;",
        "is_correct": false
      },
      {
        "text": "GRANT SELECT ON TABLE bi.analytics.customer_insights TO marketing_team;\nGRANT USE SCHEMA ON SCHEMA bi.analytics TO marketing_team;",
        "is_correct": false
      },
      {
        "text": "GRANT SELECT ON TABLE bi.analytics.customer_insights TO marketing_team;\nGRANT USE SCHEMA ON SCHEMA bi.analytics TO marketing_team;\nGRANT USE CATALOG ON CATALOG bi TO marketing_team;",
        "is_correct": true
      },
      {
        "text": "GRANT SELECT ON TABLE bi.analytics.customer_insights TO marketing_team;\nGRANT USE CATALOG ON CATALOG bi TO marketing_team;",
        "is_correct": false
      }
    ],
    "explanation": "<p>特定のテーブルにアクセスするには、ユーザーは以下の3つの権限を付与される必要があります：</p><ul><li><strong>SELECT権限</strong> - テーブル自体に対する読み取りアクセス</li><li><strong>USE SCHEMA権限</strong> - テーブルを含むスキーマに対するアクセス</li><li><strong>USE CATALOG権限</strong> - 親カタログに対するアクセス</li></ul><p>Unity Catalogの階層構造：</p><ul><li><code>Catalog（カタログ）</code> - 最上位レベル（例：bi）</li><li><code>Schema（スキーマ）</code> - カタログ内の論理グループ（例：analytics）</li><li><code>Table（テーブル）</code> - スキーマ内のテーブル（例：customer_insights）</li></ul><p>最小権限の原則に従うには、読み取り専用アクセスに必要な3つの権限すべてを付与する必要があります。過剰な権限を付与したり、必要な権限を省略してはいけません。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Unity Catalogでテーブルへの最小限のアクセス権を付与するには、テーブルのSELECT権限、スキーマのUSE SCHEMA権限、カタログのUSE CATALOG権限の3つをすべて付与する必要があります。"
  },
  {
    "id": 53,
    "question": "データエンジニアが最近、Databricksシークレットにアクセス可能なユーザーがノートブック内でシークレット値を表示できる可能性があることを聞きました。\nDatabricksシークレットの値をプレーンテキストで出力するための以下の回避策のうち、どれが考えられますか？",
    "choices": [
      {
        "text": "db_password = dbutils.secrets.get(\"prod-scope\", \"db-password\", redacted=False)\nprint(db_password)",
        "is_correct": false
      },
      {
        "text": "db_password = dbutils.secrets.get(\"prod-scope\", \"db-password\")\nprint(db_password, redacted=False)",
        "is_correct": false
      },
      {
        "text": "db_password = dbutils.secrets.get(\"prod-scope\", \"db-password\")\ndisplay(db_password)",
        "is_correct": false
      },
      {
        "text": "db_password = dbutils.secrets.get(\"prod-scope\", \"db-password\")\nfor char in db_password:\n  print(char)",
        "is_correct": true
      }
    ],
    "explanation": "<p>Databricksは<code>dbutils.secrets.get()</code>を使用して読み込まれたシークレット値をマスキングします。ノートブックセルの出力に表示される場合、シークレット値は[REDACTED]文字列に置き換えられます。</p><p>シークレット値の保護メカニズム：</p><ul><li><strong>自動マスキング</strong> - シークレットはノートブック出力で自動的に[REDACTED]として表示される</li><li><strong>redacted=Falseパラメータ</strong> - このパラメータはdbutils.secrets.get()でサポートされていない</li><li><strong>display()関数</strong> - display()を使用してもシークレットはマスキングされたままです</li></ul><p>回避策：</p><ul><li><strong>文字列イテレーション</strong> - シークレット文字列を反復処理して各文字を個別に出力することで、マスキング機構を回避できます</li><li><strong>セキュリティ上の注意</strong> - これは重大なセキュリティリスクを表しており、このような方法は本番環境では絶対に使用してはいけません</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Databricksシークレットのマスキングを回避するには、シークレット文字列を反復処理して各文字を個別に出力する方法がありますが、これは重大なセキュリティリスクです。"
  },
  {
    "id": 54,
    "question": "データエンジニアが特定の時間以降に開始したジョブのすべてのランをリストするのを可能にするDatabricks CLIコマンドは、以下のどれですか？",
    "choices": [
      {
        "text": "databricks jobs list-runs --job-id <job-id> --start-time-from <time-value>",
        "is_correct": true
      },
      {
        "text": "databricks jobs list-runs --job-id <job-id> --from <time-value>",
        "is_correct": false
      },
      {
        "text": "databricks jobs list-runs --job-id <job-id> --time-from <time-value>",
        "is_correct": false
      },
      {
        "text": "databricks jobs list-runs --job-id <job-id> --start <time-value>",
        "is_correct": false
      }
    ],
    "explanation": "<p>データエンジニアが特定の時間以降に開始したジョブのすべてのランをリストするのを可能にする正しいDatabricks CLIコマンドは<code>databricks jobs list-runs --job-id &lt;job-id&gt; --start-time-from &lt;time-value&gt;</code>です。</p><p><code>--start-time-from</code>パラメータについて：</p><ul><li><strong>正式なパラメータ</strong> - Databricks CLIでジョブランの開始時間に基づいてフィルタリングするための正式なパラメータ</li><li><strong>時間値の指定</strong> - UNIXタイムスタンプまたはISO 8601形式で時間値を指定</li><li><strong>包括的なフィルタリング</strong> - 指定された時間以降に開始したすべてのランを返す</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "Databricks CLIで特定時間以降に開始したジョブランをリストするには、--start-time-fromパラメータを使用したdatabricks jobs list-runsコマンドを実行します。"
  },
  {
    "id": 55,
    "question": "分析企業のデータエンジニアリングチームが大規模データ変換を処理するためにLakehouse Declarative Pipelinesの実装を開始しました。定期的なコードレビューセッション中に、データエンジニアリングリードはクリティカルなベストプラクティスを強調しています。パイプラインの実行前に、パイプラインに関連付けられたノートブックの「Validate」ボタンを常にクリックする必要があります。\nこのプラクティスの主な利点は何ですか？",
    "choices": [
      {
        "text": "実際にデータを処理することなく、パイプラインコード内の構文エラーをチェックする",
        "is_correct": true
      },
      {
        "text": "小規模なデータセットに対してパイプラインを実行して、変換結果をプレビューする",
        "is_correct": false
      },
      {
        "text": "カタログ内にテーブルを作成するアクセス権限をユーザーが持っていることを検証する",
        "is_correct": false
      },
      {
        "text": "すべてのパイプラインコンポーネントでユニットテストを実行して、その正確性を確認する",
        "is_correct": false
      }
    ],
    "explanation": "<p>ノートブック内の「Validate」オプションはパイプライン定義の構文またはコンフィグエラーを実行前に識別します。これによりランタイム障害のリスクまたは不完全なデータの書き込みを削減します。</p><p>Validateの主な機能：</p><ul><li><strong>構文チェック</strong> - パイプライン定義に構文エラーがないかチェック</li><li><strong>設定検証</strong> - パイプラインの設定が正しいかどうかを確認</li><li><strong>データ処理なし</strong> - 実際のデータ処理を行わずに検証を実施</li><li><strong>早期エラー検出</strong> - パイプライン実行前に問題を特定できる</li></ul><p>検証しない場合のリスク：</p><ul><li>ランタイム時の予期しない失敗</li><li>部分的なデータの書き込み</li><li>データの不整合</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "Lakehouse Declarative Pipelinesのノートブックで「Validate」ボタンをクリックすることで、実際にデータを処理することなくパイプラインコードの構文エラーや設定エラーを事前に検出できます。"
  },
  {
    "id": 56,
    "question": "Databricksでのテーブルクローニングに関する以下のステートメントのうち、正しいのはどれですか？",
    "choices": [
      {
        "text": "ディープクローンに加えられた変更はクローン自体のみに影響し、ソーステーブルには影響しません。一方、シャロークローンに加えられた変更はソーステーブルに影響します",
        "is_correct": false
      },
      {
        "text": "ディープクローンとシャロークローンのどちらに加えられた変更もソーステーブルに影響します",
        "is_correct": false
      },
      {
        "text": "シャロークローンに加えられた変更はクローン自体のみに影響し、ソーステーブルには影響しません。一方、ディープクローンに加えられた変更はソーステーブルに影響します",
        "is_correct": false
      },
      {
        "text": "ディープクローンとシャロークローンのどちらに加えられた変更もクローン自体のみに影響し、ソーステーブルには影響しません",
        "is_correct": true
      }
    ],
    "explanation": "<p>ディープクローンでもシャロークローンでも、クローンされたバージョンのテーブルに適用されたデータ修正はソースとは別にトラッキングおよび保存されるため、ソーステーブルには影響しません。</p><p>クローニングの特徴：</p><ul><li><strong>ディープクローン</strong> - すべてのデータをコピーして新しいテーブルを作成し、完全に独立したコピーを形成</li><li><strong>シャロークローン</strong> - メタデータのみをコピーしてデータを参照し、ストレージスペースを節約</li><li><strong>独立した変更追跡</strong> - どちらのクローンでも、変更は独立してトラッキングされる</li><li><strong>ソーステーブルの保護</strong> - クローンへの変更はソーステーブルに影響しない</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Databricksのディープクローンとシャロークローンのどちらでも、クローンに加えられた変更はクローン自体のみに影響し、ソーステーブルには影響しません。"
  },
  {
    "id": 57,
    "question": "以下のツールのうち、データエンジニアがマルチタスクジョブランをプログラム的にトリガーすることを許可しないのはどれですか？",
    "choices": [
      {
        "text": "ワークスペースジョブUI",
        "is_correct": true
      },
      {
        "text": "コマンドラインインターフェース（CLI）",
        "is_correct": false
      },
      {
        "text": "REST API",
        "is_correct": false
      },
      {
        "text": "Databricks SDKs",
        "is_correct": false
      }
    ],
    "explanation": "<p>ワークスペースジョブUIはデータエンジニアがマルチタスクジョブランをプログラム的にトリガーすることを許可していません。これはグラフィカルインターフェースであり、手動操作が必要で、自動化またはコードベースのジョブ実行には使用できません。</p><p>プログラム的なジョブ実行が可能なツール：</p><ul><li><strong>REST API</strong> - エンドポイントを呼び出してジョブをプログラム的にトリガー可能</li><li><strong>Command-line interface（CLI）</strong> - コマンドラインでジョブを実行できるツール</li><li><strong>Databricks SDKs</strong> - 複数の言語でサポートされたプログラムからのジョブ実行</li></ul><p>ワークスペースジョブUIの制限：</p><ul><li>グラフィカルインターフェースのみ</li><li>手動でのクリック操作が必要</li><li>スクリプトやコードからは呼び出せない</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "ワークスペースジョブUIはグラフィカルインターフェースであり、REST API、CLI、Databricks SDKsとは異なりプログラム的なジョブ実行には使用できません。"
  },
  {
    "id": 58,
    "question": "データアーキテクチャにおけるLakehouse Federationの主な目的は何ですか？",
    "choices": [
      {
        "text": "データを移行することなく、複数のデータソースにまたがるダイレクトクエリを可能にする",
        "is_correct": true
      },
      {
        "text": "すべてのデータをDatabricksに移行して、集中処理を実現する",
        "is_correct": false
      },
      {
        "text": "Databricksに保存されているデータのバックアップを作成する",
        "is_correct": false
      },
      {
        "text": "データを圧縮してストレージコストを最適化する",
        "is_correct": false
      }
    ],
    "explanation": "<p>Lakehouse Federationは、ユーザーとアプリケーションがデータレイク、ウェアハウス、データベースなどの多様なデータソースにわたってクエリを実行できるようにします。これはDatabricksへのデータの物理的な移行を必要としません。</p><p>Lakehouse Federationの主な利点：</p><ul><li><strong>データ移行不要</strong> - ソースシステムに保存されたままのデータに対して直接クエリが可能</li><li><strong>データ重複の削減</strong> - 複数のコピーを作成する必要がなくなる</li><li><strong>レイテンシ削減</strong> - データ移行時間が不要</li><li><strong>統合されたクエリ体験</strong> - 分散環境全体での統一的なクエリインターフェース</li><li><strong>アクセスの合理化</strong> - 複数のシステムにまたがるシームレスなデータアクセス</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "Lakehouse Federationはデータの物理的な移行なしに複数のデータソースにまたがるダイレクトクエリを実現し、データ重複やレイテンシを削減します。"
  },
  {
    "id": 59,
    "question": "医療機関のデータエンジニアが、patient_id、name、department、diagnosisカラムを持つデルタレイクテーブル「patient_records」を管理しています。診断カラムをマスキングするユーザー定義関数を作成して、医者のみがそのカラムの値を表示できるようにしたいと考えています。\nこの目的を達成するために、データエンジニアが使用できる関数は以下のどれですか？",
    "choices": [
      {
        "text": "CREATE FUNCTION patient_mask(diagnosis STRING)\nRETURN CASE WHEN is_account_group_member('doctors') THEN diagnosis ELSE 'CONFIDENTIAL' END;",
        "is_correct": true
      },
      {
        "text": "CREATE FUNCTION patient_mask(diagnosis STRING)\nRETURN CASE WHEN diagnosis IS NOT NULL THEN diagnosis ELSE 'CONFIDENTIAL' END;",
        "is_correct": false
      },
      {
        "text": "CREATE FUNCTION patient_mask(doctors STRING)\nRETURN CASE WHEN is_account_group_member('diagnosis') THEN doctors ELSE 'CONFIDENTIAL' END;",
        "is_correct": false
      },
      {
        "text": "CREATE FUNCTION patient_mask(diagnosis STRING)\nRETURN CASE WHEN is_account_group_member('doctors') THEN 'CONFIDENTIAL' ELSE diagnosis END;",
        "is_correct": false
      }
    ],
    "explanation": "<p>正しい関数は以下の通りです：</p><p><code>CREATE FUNCTION patient_mask(diagnosis STRING)<br/>RETURN CASE WHEN is_account_group_member('doctors') THEN diagnosis ELSE 'CONFIDENTIAL' END;</code></p><p>この関数はロールベースアクセス制御を適切に実装しています。</p><p>実装の詳細：</p><ul><li><strong>is_account_group_member('doctors')</strong> - 現在のユーザーが「doctors」グループに属しているかを検証</li><li><strong>医者の場合</strong> - 実際の診断値を表示</li><li><strong>医者でない場合</strong> - 「CONFIDENTIAL」文字列で診断をマスキング</li><li><strong>プライバシー保護</strong> - 機密である患者情報を保護しながら、認可された医療スタッフがアクセス可能</li></ul><p>他のオプションが不適切な理由：</p><ul><li>NULLチェックはロールベースの検証を行わない</li><li>パラメータと関数名が逆になっている</li><li>条件ロジックが逆になっている（医者でない場合に表示）</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "is_account_group_member()関数を使用したロールベースのユーザー定義関数により、医療データの機密性を保ちながら認可されたユーザーのみにアクセスを許可できます。"
  }
];
