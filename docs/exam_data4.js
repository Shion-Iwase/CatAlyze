window.questionsData4 = [
  {
    "id": 1,
    "question": "あるIoT企業は、数千台のデバイスからのライブセンサー読み取り値をストリーミングパイプラインで処理しています。デバイスが時々、スキーマ検証に失敗する破損したまたは不完全なイベントを送信します。エンジニアリングチームは、クリーンなデータに依存する本番分析ダッシュボードがリアルタイムで更新され続けることを確認する必要があります。ただし、破損したレコードは、最小限のコンピューティングリソースを使用して、後の調査のためにキャプチャする必要があります。\nこれらの要件を満たすためにエンジニアは何をすべきですか？",
    "choices": [
      {
        "text": "メインストリームにすべてのデータ（有効・無効を問わず）を含め、フラグを使用して破損したレコードをマーク付けする",
        "is_correct": false
      },
      {
        "text": "有効および無効の両方のデータを同じDeltaテーブルにマージし、ダウンストリームクエリを使用して、データ品質ルールを適用してダッシュボードから無効なエントリを除外する",
        "is_correct": false
      },
      {
        "text": "メインストリームにリトライロジックを追加して、破損したメッセージが成功するまで再処理を試行する",
        "is_correct": false
      },
      {
        "text": "メインのリアルタイムストリームから破損したイベントをフィルタリングし、有効なレコードのみを本番テーブルに書き込む。破損したメッセージを定期的に読み取り、分析用に保存する軽量プロセスを別途作成する",
        "is_correct": true
      }
    ],
    "explanation": "<p>エンジニアは、メインのリアルタイムストリーミングパイプラインから破損したまたは不完全なイベントをフィルタリングし、有効なレコードのみを本番分析テーブルに書き込むべきです。これにより、ダッシュボードが正確に遅延なく更新され続けることを保証します。同時に、破損したメッセージを定期的に収集して保存する別個の軽量プロセスを実装する必要があります。これはデバッグや監査などの後の調査に使用されます。</p><p>この設計は、以下の点でメリットがあります：</p><ul><li><strong>リアルタイム分析システムの整合性とパフォーマンスを保持</strong> - 無効なデータがダッシュボードに影響を与えることを防ぎます</li><li><strong>すべての受信データを保持</strong> - オフライン分析のために、すべての受信データが保存されます</li><li><strong>効率的なリソース管理</strong> - コンピューティングリソースへの過負荷をかけずに、メインパイプラインの複雑さを増やしません</li></ul><p>他のオプション（フラグの使用、同じテーブルへのマージ、リトライロジック）は、ダッシュボードのパフォーマンスと信頼性を低下させるか、不要なリソース消費につながるため、適切ではありません。</p>",
    "tags": "データ処理コードの開発",
    "summary": "破損したデータを本番パイプラインから分離し、リアルタイムダッシュボードの信頼性を保ちながら、破損レコードを別プロセスで効率的に保存することが重要です。"
  },
  {
    "id": 2,
    "question": "データエンジニアは、Databricks SQLのQuery Profileを使用して、パフォーマンスが低下しているSQLクエリを調査しています。クエリ内のどの操作が最も時間を消費しているかを確認したいと考えています。\nQuery Profileのどのセクションが、クエリ内の最もコストの高い操作をハイライト表示し、最適化の機会を特定するのに役立ちますか？",
    "choices": [
      {
        "text": "Query wall-clock duration",
        "is_correct": false
      },
      {
        "text": "Aggregated task time",
        "is_correct": false
      },
      {
        "text": "Query status",
        "is_correct": false
      },
      {
        "text": "Top operators",
        "is_correct": true
      }
    ],
    "explanation": "<p>正解は<strong>Top operators</strong>です。Databricks SQLのQuery Profileの<strong>Top operators</strong>セクションは、クエリ内の最もコストの高い操作をハイライト表示します。このセクションは、どの特定の操作（ジョイン、スキャン、集約など）が最も多くの時間を消費しているかを示します。</p><p>これにより、データエンジニアは以下を実現できます：</p><ul><li><strong>パフォーマンスボトルネックを特定</strong> - 時間を消費している具体的な操作を把握できます</li><li><strong>最適化の焦点を絞る</strong> - 全体的な実行時間に最も影響を与えるクエリの部分を優先的に最適化できます</li><li><strong>効率的なチューニング</strong> - 最も効果的な最適化機会に集中できます</li></ul><p>他のセクション（Query wall-clock duration、Aggregated task time、Query status）は、全体的な実行時間やステータス情報は提供しますが、どの操作が最もコストが高いかを特定するには十分ではありません。</p>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "Query ProfileのTop operatorsセクションを使用することで、クエリ内で最も時間を消費している操作を特定し、効率的な最適化機会を見つけることができます。"
  },
  {
    "id": 3,
    "question": "本番環境のDatabricksジョブに対して、以下のクラスタータイプのうち、どれを使用することが推奨されていますか？",
    "choices": [
      {
        "text": "All-purpose clusters",
        "is_correct": false
      },
      {
        "text": "Job clusters",
        "is_correct": true
      },
      {
        "text": "Production clusters",
        "is_correct": false
      },
      {
        "text": "On-premises clusters",
        "is_correct": false
      }
    ],
    "explanation": "<p><strong>Job clusters</strong>は、ジョブまたはタスク実行専用のクラスターです。Job clusterはジョブ完了後に自動的に終了するため、All-purpose clustersと比べてコストを削減できます。</p><p>さらに、Databricksは本番環境でJob clustersを使用することを推奨しています。その理由は以下の通りです：</p><ul><li><strong>完全な分離</strong> - 各ジョブは完全に分離された環境で実行されます</li><li><strong>コスト効率</strong> - ジョブ終了後にクラスターが自動的に終了するため、不要なリソース消費を避けられます</li><li><strong>セキュリティ</strong> - ジョブ間でのリソースやメモリの共有がなく、セキュリティが向上します</li><li><strong>リソース管理</strong> - 各ジョブは必要なリソースのみを使用できます</li></ul><p>All-purpose clustersは対話的な作業や開発用途に適していますが、本番ジョブには適切ではありません。Production clustersやOn-premises clustersはDatabricksの標準的なクラスタータイプではありません。</p>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "本番環境ではJob clustersを使用することで、完全な分離、コスト削減、セキュリティの向上を実現できます。"
  },
  {
    "id": 4,
    "question": "データガバナンスチームが、異なるビジネスユニットが同じ列に対して独自バージョンのマスキングポリシーを実装していることに気付きました。Unity Catalogはこの状況をどのように改善しますか？",
    "choices": [
      {
        "text": "開発中の柔軟性を向上させるため、テスト目的でマスキングを無効にすることをチームに許可する",
        "is_correct": false
      },
      {
        "text": "各チームが独自のマスキングルールバージョンを管理できるようにし、データプライバシーに対するコントロールを強化する",
        "is_correct": false
      },
      {
        "text": "チームがデータオブジェクト権限を活用して、異なるグループに対して異なる方法でデータをマスキングすることを可能にする",
        "is_correct": false
      },
      {
        "text": "マスキング関数の単一の情報源を提供し、一貫性のない露出を防止する",
        "is_correct": true
      }
    ],
    "explanation": "<p>Unity Catalogは、マスキング関数の<strong>単一の情報源</strong>を提供することでこの状況を改善します。これにより、すべてのビジネスユニットが同じデータ列に対して一貫性のある、一元的に管理されたマスキングポリシーを使用するようになります。</p><p>Unity Catalogでは、マスキングロジックをユーザー定義関数（UDF）として実装・管理できます。これにより、以下のメリットが得られます：</p><ul><li><strong>再利用可能で標準化されたコード</strong> - マスキングルールがUDF内にカプセル化され、すべてのチームで共有できます</li><li><strong>一貫性の確保</strong> - 各チームが独自のマスキングルールを作成する代わりに、単一の検証済みUDFを登録・参照します</li><li><strong>セキュリティリスクの低減</strong> - 組織全体で機密情報の露出が一貫して防止されます</li><li><strong>コンプライアンス強化</strong> - 一元的で統一されたデータガバナンスが実現できます</li></ul><p>他のオプション（テスト時の無効化、各チームの独立管理、グループごとの異なるマスキング）は、データ保護とガバナンスの一貫性を損なうため、適切ではありません。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Unity Catalogは、マスキング関数を一元的に管理するため、組織全体で統一されたデータ保護ポリシーを確保し、機密情報の一貫性のある露出防止を実現します。"
  },
  {
    "id": 5,
    "question": "データエンジニアが以下のSQLクエリを使用しています：\nGRANT MODIFY ON TABLE employees TO hr_team\nMODIFY権限によって与えられる能力について、以下のうちどれが正しく説明していますか？",
    "choices": [
      {
        "text": "テーブルからデータを追加する能力を与える",
        "is_correct": false
      },
      {
        "text": "リストされたすべての能力がMODIFY権限によって与えられる",
        "is_correct": true
      },
      {
        "text": "テーブル内のデータを変更する能力を与える",
        "is_correct": false
      },
      {
        "text": "テーブルからデータを削除する能力を与える",
        "is_correct": false
      }
    ],
    "explanation": "<p><strong>MODIFY権限</strong>は、オブジェクトに対してデータを追加、削除、および変更する能力を与えます。</p><p>具体的には、MODIFY権限を持つユーザーまたはグループは以下のすべての操作を実行できます：</p><ul><li><strong>データの追加（INSERT）</strong> - テーブルに新しいレコードを挿入できます</li><li><strong>データの変更（UPDATE）</strong> - テーブル内の既存のデータを更新できます</li><li><strong>データの削除（DELETE）</strong> - テーブルからレコードを削除できます</li></ul><p>したがって、<code>GRANT MODIFY ON TABLE employees TO hr_team</code>コマンドは、hr_teamグループに対してemployeesテーブル上でこれらすべての操作を実行する権限を付与します。MODIFY権限は、テーブルのデータを完全に操作するための包括的な権限です。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "MODIFY権限は、データの追加、変更、削除のすべての操作を含む包括的なデータ操作権限です。"
  },
  {
    "id": 6,
    "question": "データエンジニアリングチームは、機密性の高い財務データを処理するための新しいDatabricksジョブを作成しました。財務アナリストがチームに対して、このジョブの「Owner」権限を「finance」グループに譲渡するよう依頼しました。\nジョブに対して「CAN MANAGE」権限を持つジュニアデータエンジニアが、Databricks Job UIを使用してこの権限譲渡を試みていますが、常に失敗します。\n以下のうちどれがこの失敗の原因を説明していますか？",
    "choices": [
      {
        "text": "グループはDatabricksジョブのオーナーになることはできません。オーナーは個別のユーザーである必要があります。",
        "is_correct": true
      },
      {
        "text": "「CAN MANAGE」権限では、グループに「Owner」権限を付与するのに十分ではありません。データエンジニアが現在のジョブのオーナーである必要があります。",
        "is_correct": false
      },
      {
        "text": "「Owner」権限はジョブ作成時に作成者に割り当てられ、変更することはできません。「finance」グループの認証情報を使用してジョブを再作成する必要があります。",
        "is_correct": false
      },
      {
        "text": "「CAN MANAGE」権限では、グループに「Owner」権限を付与するのに十分ではありません。データエンジニアがワークスペース管理者である必要があります。",
        "is_correct": false
      }
    ],
    "explanation": "<p>ジョブのオーナーとしてグループを設定することはできません。グループをジョブのオーナーとして設定しようとすると、「Groups can not be owners」というエラーが発生します。</p><p>Databricksジョブの所有権に関する重要なポイント：</p><ul><li><strong>オーナーは個別ユーザーのみ</strong> - ジョブのオーナーは、グループではなく個別のユーザーアカウントである必要があります</li><li><strong>グループベースの権限付与は不可</strong> - グループに対して直接オーナー権限を付与することはできません</li><li><strong>代替手段</strong> - グループのメンバーに対して個別にアクセス権限を付与するか、グループ内の特定のユーザーをオーナーとして設定することができます</li></ul><p>この制限は、ジョブの責任の所在を明確にし、監査とアクセス制御を効果的に管理するためのDatabricksの設計です。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Databricksジョブのオーナーは必ず個別のユーザーである必要があり、グループをオーナーとして設定することはできません。"
  },
  {
    "id": 7,
    "question": "データエンジニアが、S3バケットからJSONデータを取り込むために、以下のDatabricks Auto Loaderストリームを設定しています：\nspark.readStream \\\n  .format(\"cloudFiles\") \\\n  .option(\"cloudFiles.format\", \"json\") \\\n  .option(\"cloudFiles.schemaLocation\", \"s3://shop/checkpoints/orders\")\n  .option(\"cloudFiles.schemaEvolutionMode\", \"_______________\") \\\n  .load(\"s3://shop/raw/orders/json/\") \\\n  .writeStream \\\n  .option(\"checkpointLocation\", \"s3://shop/checkpoints/orders\") \\\n  .start(\"orders_table\")\n\nパイプラインは、受信データで新しい列が検出された場合に失敗する必要がありますが、その新しい列をスキーマに追加して、後続の実行が更新されたスキーマで正常に再開できるようにする必要があります。既存の列はそのデータ型を保持する必要があります。\n\n指定された要件を満たすために、空欄を正しく埋めるオプションはどれですか？",
    "choices": [
      {
        "text": "rescue",
        "is_correct": false
      },
      {
        "text": "failOnNewColumns",
        "is_correct": false
      },
      {
        "text": "none",
        "is_correct": false
      },
      {
        "text": "addNewColumns",
        "is_correct": true
      }
    ],
    "explanation": "<p><strong>addNewColumns</strong>モードは、Auto Loaderのデフォルトスキーマ進化動作です。このモードでは、新しい列が検出されると、ストリームは失敗しますが、新しい列はスキーマに追加されます。</p><p>このオプションの動作と利点：</p><ul><li><strong>新しい列の検出時の失敗</strong> - 受信データで予期しない新しい列が検出されると、ストリームは失敗します。これにより、データの変更を認識できます</li><li><strong>スキーマへの列追加</strong> - 失敗する前に、新しい列がスキーマに自動的に追加されます</li><li><strong>ジョブの再開</strong> - ジョブを再起動すると、更新されたスキーマで処理を続行できます</li><li><strong>既存列の保護</strong> - 既存の列のデータ型は変更されず、そのまま保持されます</li></ul><p>他のオプション（rescue、failOnNewColumns、none）は、この要件を満たしていません。addNewColumnsは、スキーマの進化を制御しながら、ストリーミングパイプラインの信頼性を保つための標準的なアプローチです。</p>",
    "tags": "データ処理コードの開発",
    "summary": "addNewColumnsスキーマ進化モードを使用することで、新しい列検出時の失敗を制御しながら、スキーマを自動更新し、既存列のデータ型を保護できます。"
  },
  {
    "id": 8,
    "question": "データエンジニアがforeachBatchロジックを使用してターゲットDeltaテーブルのデータをアップサートしています。\n各新しいマイクロバッチ処理で呼び出される関数が以下に表示されており、空欄があります：\ndef upsert_data(microBatchDF, batch_id):\n    microBatchDF.createOrReplaceTempView(\"sales_microbatch\")\n    sql_query = \"\"\"\n                MERGE INTO sales_silver a\n                USING sales_microbatch b\n                ON a.item_id=b.item_id\n                    AND a.item_timestamp=b.item_timestamp\n                WHEN NOT MATCHED THEN INSERT *\n                \"\"\"\n    ________________\n\nDatabricks Runtime 10.5未満のクラスタで関数内のSQLクエリを実行するために、空欄を正しく埋めるオプションはどれですか？",
    "choices": [
      {
        "text": "microBatchDF.sql(sql_query)",
        "is_correct": false
      },
      {
        "text": "microBatchDF.sparkSession.sql(sql_query)",
        "is_correct": false
      },
      {
        "text": "microBatchDF._jdf.sparkSession().sql(sql_query)",
        "is_correct": true
      },
      {
        "text": "spark.sql(sql_query)",
        "is_correct": false
      }
    ],
    "explanation": "<p>通常、SQLクエリを実行するには<code>spark.sql()</code>関数を使用します。しかし、このforeachBatchの特殊なケースでは、マイクロバッチ処理内から<strong>グローバルsparkセッションにアクセスできません</strong>。代わりに、マイクロバッチDataFrameからローカルSparkセッションにアクセスする必要があります。</p><p>Databricks Runtimeバージョン10.5未満のクラスタでは、ローカルSparkセッションにアクセスする構文は以下の通りです：</p><ul><li><strong><code>microBatchDF._jdf.sparkSession().sql(sql_query)</code></strong> - microBatchDataFrameの内部Java表現を通じてSparkセッションにアクセスし、SQLクエリを実行します</li></ul><p>他のオプションが機能しない理由：</p><ul><li><code>microBatchDF.sql()</code> - このメソッドは存在しません</li><li><code>microBatchDF.sparkSession.sql()</code> - Runtime 10.5以降で使用されますが、それ以前では利用できません</li><li><code>spark.sql()</code> - foreachBatch内ではグローバルsparkセッションにアクセスできません</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Databricks Runtime 10.5未満では、foreachBatch内でSQLクエリを実行する際に、microBatchDF._jdf.sparkSession().sql()構文を使用してマイクロバッチDataFrameからローカルSparkセッションにアクセスする必要があります。"
  },
  {
    "id": 9,
    "question": "「運用オーバーヘッドを最小化しながら、インクリメンタルなデータ処理を実装するための宣言的ETLフレームワーク。テーブルの依存関係を管理し、データ品質を維持する。」\n上記の説明は、以下のどのテクノロジーを指しているでしょうか？",
    "choices": [
      {
        "text": "LDP",
        "is_correct": true
      },
      {
        "text": "DAB",
        "is_correct": false
      },
      {
        "text": "DBU",
        "is_correct": false
      },
      {
        "text": "ETL",
        "is_correct": false
      }
    ],
    "explanation": "<p>説明されているテクノロジーは<strong>LDP（Lakeflow Declarative Pipelines）</strong>です。LDPは、インクリメンタルなデータ処理を効率的に処理するために特に設計された宣言的ETLフレームワークです。</p><p>LDPの主な特徴：</p><ul><li><strong>宣言的アプローチ</strong> - ユーザーはデータ変換とワークフローを宣言的に定義でき、手続き的なコーディングが不要です</li><li><strong>自動オーケストレーション</strong> - テーブル間の依存関係が自動的に管理され、正しく処理されます</li><li><strong>運用オーバーヘッドの最小化</strong> - 従来のETLパイプライン開発と比べて、管理の複雑さを大幅に軽減します</li><li><strong>データ品質の維持</strong> - パイプライン全体を通じて高いデータ品質を保証します</li><li><strong>保守性と拡張性</strong> - パイプラインの保守、スケーリング、監視が容易になります</li></ul><p>注記：Databricksは最近この解決策をオープンソース化し、Apache Sparkエコシステムに<strong>Spark Declarative Pipelines（SDP）</strong>として統合しました。</p>",
    "tags": "データ処理コードの開発",
    "summary": "LDP（Lakeflow Declarative Pipelines）は、宣言的なアプローチでインクリメンタルなデータ処理を実装し、テーブル依存関係の管理とデータ品質の維持を自動化するフレームワークです。"
  },
  {
    "id": 10,
    "question": "以下のStructured Streamingクエリが与えられています：\n(spark.table(\"orders\")\n        .withColumn(\"total_after_tax\", col(\"total\")+col(\"tax\"))\n    .writeStream\n        .option(\"checkpointLocation\", checkpointPath)\n        .outputMode(\"append\")\n        ._____________\n        .table(\"new_orders\")\n)\n空欄を埋めて、クエリが2分ごとにマイクロバッチを実行してデータを処理するようにしてください。",
    "choices": [
      {
        "text": "processingTime(\"2 minutes\")",
        "is_correct": false
      },
      {
        "text": "trigger(\"2 minutes\")",
        "is_correct": false
      },
      {
        "text": "trigger(once=\"2 minutes\")",
        "is_correct": false
      },
      {
        "text": "trigger(processingTime=\"2 minutes\")",
        "is_correct": true
      }
    ],
    "explanation": "<p>Spark Structured Streamingでは、ユーザーが指定した間隔でマイクロバッチ処理を実行するために、<strong><code>trigger(processingTime=...)</code></strong>メソッドを使用します。このメソッドにより、時間間隔を文字列として指定できます。</p><p>processingTime triggerの詳細：</p><ul><li><strong>用途</strong> - 一定時間間隔でマイクロバッチを処理する際に使用されます</li><li><strong>パラメータ形式</strong> - <code>trigger(processingTime=\"2 minutes\")</code>のように指定します</li><li><strong>デフォルト値</strong> - デフォルトでは「500ms」に設定されています</li><li><strong>柔軟な時間指定</strong> - 「1 minute」、「30 seconds」、「1 hour」など、様々な時間単位を指定できます</li></ul><p>他のオプションが正しくない理由：</p><ul><li><code>processingTime(\"2 minutes\")</code> - 正しいメソッド名ではなく、<code>trigger()</code>でラップする必要があります</li><li><code>trigger(\"2 minutes\")</code> - キーワード引数が不足しており、構文エラーになります</li><li><code>trigger(once=\"2 minutes\")</code> - <code>once</code>トリガーは単一のマイクロバッチのみを処理し、時間間隔を指定するものではありません</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Spark Structured Streamingで定期的なマイクロバッチ処理を実装するには、trigger(processingTime=\"時間間隔\")メソッドを使用して、処理間隔を指定します。"
  },
  {
    "id": 11,
    "question": "既存のクラスターのメトリクスとSpark UIを表示するために、データエンジニアが必要とする最小限の権限について説明しているのは、以下のどれですか？",
    "choices": [
      {
        "text": "クラスターに対する「Can Manage」権限",
        "is_correct": false
      },
      {
        "text": "クラスター作成許可 + クラスターに対する「Can Attach To」権限",
        "is_correct": false
      },
      {
        "text": "クラスターに対する「Can Attach To」権限",
        "is_correct": true
      },
      {
        "text": "クラスターに対する「Can Restart」権限",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricksのクラスター権限は2つのレベルで構成されています：</p><ul><li><strong>クラスター作成許可（Allow cluster creation）</strong> - クラスターを作成する能力を制御します</li><li><strong>クラスターレベルの権限</strong> - 特定のクラスターの使用と変更能力を制御します</li></ul><p>クラスターには4つの権限レベルがあります：</p><ul><li><strong>No Permissions</strong> - 権限なし</li><li><strong>Can Attach To</strong> - クラスターに接続して実行できます。メトリクスとSpark UIの閲覧が可能です</li><li><strong>Can Restart</strong> - クラスターの再起動ができます</li><li><strong>Can Manage</strong> - クラスターの完全な管理ができます</li></ul><p>メトリクスとSpark UIを表示するだけであれば、<strong>「Can Attach To」権限</strong>で十分です。これは最小限の権限で、クラスターに接続し、実行状況を監視できるレベルの権限です。「Can Manage」や「Can Restart」などのより高い権限は必要ありません。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "既存クラスターのメトリクスとSpark UIを表示するには、「Can Attach To」権限があれば十分です。"
  },
  {
    "id": 12,
    "question": "以下のクエリが与えられています：\nspark.table(\"stream_sink\")\n        .filter(\"recent = true\")\n        .dropDuplicates([\"item_id\", \"item_timestamp\"])\n    .write\n        .mode (\"overwrite\")\n        .table(\"stream_data_stage\")\nこのクエリを実行した結果について、正しく説明しているのはどれですか？",
    "choices": [
      {
        "text": "インクリメンタルジョブが、前回の実行以降に追加されたstream_sinkからの重複排除レコードでstream_data_stageテーブルを上書きする",
        "is_correct": false
      },
      {
        "text": "バッチジョブが、stream_sinkテーブル内のすべての「recent」アイテムから計算された重複排除レコードでstream_data_stageテーブルを上書きする",
        "is_correct": true
      },
      {
        "text": "インクリメンタルジョブが、前回の実行以降に追加されたstream_data_stageからの重複排除レコードでstream_sinkテーブルを上書きする",
        "is_correct": false
      },
      {
        "text": "バッチジョブが、前回の実行以降に追加されたstream_sinkからの重複排除レコードでstream_data_stageテーブルを上書きする",
        "is_correct": false
      }
    ],
    "explanation": "<p><code>spark.table()</code>関数を使用してDeltaテーブルを読み込む場合、これは<strong>静的ソース</strong>として読み込まれることを意味します。したがって、クエリを実行するたびに、現在のバージョンの「stream_sink」テーブル内の<strong>すべてのレコード</strong>が読み込まれ、フィルタリングされ、重複排除されます。</p><p>重要なポイント：</p><ul><li><strong>バッチ処理</strong> - このクエリはバッチジョブであり、インクリメンタル処理ではありません。毎回実行時に完全にテーブル全体を処理します</li><li><strong>spark.table()とspark.read.table()の同等性</strong> - <code>spark.read.table()</code>は内部的に<code>spark.table()</code>を呼び出すため、両者に違いはありません</li><li><strong>全データの処理</strong> - 前回の実行以降の変更に関係なく、各実行時に「recent = true」のすべてのレコードが処理されます</li><li><strong>Overwriteモード</strong> - mode(\"overwrite\")によってテーブルは完全に上書きされます。前の内容は削除されます</li></ul><p>したがって、正解はバッチジョブがstream_sinkテーブル内のすべての「recent」アイテムから計算された重複排除レコードでstream_data_stageテーブルを上書きするというものです。</p>",
    "tags": "データ処理コードの開発",
    "summary": "spark.table()で読み込むと静的ソースとして毎回全データを処理するバッチジョブとなり、overwriteモードでテーブル全体が置き換わります。"
  },
  {
    "id": 13,
    "question": "データエンジニアが、Spark Structured Streamingで重複を処理するために以下のロジックを使用しています：\n(spark.readStream\n       .table(\"bronze\")\n       .filter(\"topic = 'orders'\")\n       .select(F.from_json(F.col(\"value\").cast(\"string\"), schema).alias(\"v\"))\n       .select(\"v.*\")\n       .withWatermark(\"order_timestamp\", \"30 seconds\")\n       .dropDuplicates([\"order_id\", \"order_timestamp\"]))\n\nしかし、ウォーターマーク閾値より後に到着するイベントに対しては、このロジックは重複を防ぐのに十分ではないことに気付きました。\n\nデータエンジニアがforeachBatch関数に含めることができるコードスニペットのうち、ストリーミング重複を完全に処理できるのはどれですか？",
    "choices": [
      {
        "text": "(spark.readStream\n.table(\"microbatch\")\n.withWatermark(\"order_timestamp\", \"7 days\")\n.dropDuplicates([\"order_id\", \"order_timestamp\"]))",
        "is_correct": false
      },
      {
        "text": "MERGE INTO orders_silver a\nUSING microbatch b\nON a.order_id=b.order_id AND a.order_timestamp=b.order_timestamp\nWHEN NOT MATCHED THEN INSERT *",
        "is_correct": true
      },
      {
        "text": "APPLY CHANGES INTO orders_silver a\nFROM STREAM(microbatch)\nKEYS (order_id, order_timestamp)\nSEQUENCE BY order_timestamp\nCOLUMNS *",
        "is_correct": false
      },
      {
        "text": "COPY INTO orders_silver\nFROM microbatch\nDISTINCT ALL\nCOPY_OPTIONS ('mergeSchema' = 'true');",
        "is_correct": false
      }
    ],
    "explanation": "<p>Spark Structured Streamingでは、<strong>ウォーターマーク付きのdropDuplicates</strong>は、定義されたイベント時間閾値内に到着する重複のみを削除します。例えば、order_timestampの30秒以内に到着するレコードのみが対象です。ただし、その閾値より後に到着するレコードは「遅すぎる」と見なされ、Sparkのメモリ内状態によって重複排除されません。</p><p>遅延到着データを含むすべてのデータの完全な重複排除を確保するには、foreachBatchシンクは<strong>Delta LakeのMERGE操作を使用したべき等書き込みパターン</strong>を使用する必要があります。</p><p>MERGE INTO操作の利点：</p><ul><li><strong>ユニークキーに基づく比較</strong> - 各マイクロバッチの受信データ（microbatch）をターゲットDeltaテーブル（orders_silver）と比較します。比較のキーはorder_idとorder_timestampです</li><li><strong>重複の防止</strong> - ターゲットテーブルに既に存在しない行のみが挿入されるため、マイクロバッチ間やレート遅延を含む重複を防止します</li><li><strong>エンドツーエンドの信頼性</strong> - ストリーム内重複排除（リアルタイム性能用）とMERGEベースの重複排除（完全性と正確性用）の組み合わせにより、ストリーミングパイプラインで重複を処理する信頼できる方法を提供します</li></ul><p>他のオプション（ウォーターマーク拡張、APPLY CHANGES、COPY INTO）では、遅延到着データによる重複を完全には処理できません。</p>",
    "tags": "データ処理コードの開発",
    "summary": "Spark Structured Streamingで遅延到着データを含む完全な重複排除を実現するには、foreachBatch内でDelta LakeのMERGE操作を使用するべき等書き込みパターンを実装する必要があります。"
  },
  {
    "id": 14,
    "question": "データエンジニアリングチームが、以下のスキーマを持つ大規模なDeltaテーブル「user_messages」を保有しています：\nmsg_id INT, user_id INT, msg_time TIMESTAMP, msg_title STRING, msg_body STRING\n\nmsg_bodyフィールドはユーザーのフリーテキスト形式のメッセージを表します。このフィールドでのフィルタクエリ実行時にパフォーマンス問題が発生しています。\n\nこのパフォーマンス問題の原因として、以下のうち正しく説明しているのはどれですか？",
    "choices": [
      {
        "text": "msg_body列でパーティショニングされていないため、テーブルはファイルスキップを活用できていない",
        "is_correct": false
      },
      {
        "text": "msg_body列でZ-ORDERによる最適化が行われていないため、テーブルはファイルスキップを活用できていない",
        "is_correct": false
      },
      {
        "text": "カーディナリティが非常に高い文字列フィールドの場合、Delta Lake統計は情報量が少ないため、テーブルはファイルスキップを活用できていない",
        "is_correct": true
      },
      {
        "text": "STRING型の列ではDelta Lake統計が取得されないため、テーブルはファイルスキップを活用できていない",
        "is_correct": false
      }
    ],
    "explanation": "<p>Delta Lakeは、テーブルに追加された各データファイルについて、トランザクションログに統計情報を自動的に取得します。デフォルトでは、Delta Lakeは各テーブルの最初の32列に対して統計を収集します。</p><p>ただし、統計情報の取得における重要なポイント：</p><ul><li><strong>高カーディナリティ文字列フィールド</strong> - ユーザーメッセージやプロダクトレビューなどのフリーテキストフィールドなど、カーディナリティが非常に高い文字列フィールドでは、統計情報は情報量が少なく（uninformative）、ファイルスキップに効果的に活用できません</li><li><strong>統計計算のコスト</strong> - フリーテキストフィールドの統計計算は時間がかかるため、最適化のためには除外することが推奨されます</li><li><strong>スキーマ設計の最適化</strong> - 高カーディナリティ文字列フィールドをスキーマの最初の32列の後に配置することで、これらのフィールドを統計収集から除外できます</li></ul><p>他のオプションが正しくない理由：</p><ul><li>パーティショニングやZ-ORDERはファイルスキップに役立ちますが、主な原因ではありません</li><li>STRING型の列自体は統計が取得されないわけではなく、高カーディナリティの場合に統計が効果的でないという点が重要です</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "高カーディナリティのフリーテキスト文字列フィールドはDelta Lake統計の情報量が少ないため、ファイルスキップが効果的に機能しない場合があります。"
  },
  {
    "id": 15,
    "question": "データエンジニアリングチームが新しいワークスペースを作成し、自動的にUnity Catalogが有効になっています。デフォルトのワークスペースカタログとデフォルトスキーマが含まれていることに気付きました。\n\nこのカタログとスキーマに対してワークスペースユーザーが持つデフォルト権限について、正しく説明しているのはどれですか？",
    "choices": [
      {
        "text": "ワークスペースユーザーは、ワークスペース管理者が明示的に必要な権限を付与しない限り、デフォルトスキーマに対して権限を持っていない",
        "is_correct": false
      },
      {
        "text": "ワークスペースユーザーは、デフォルトスキーマに対してCREATE TABLE、CREATE VOLUME、CREATE FUNCTION、USE SCHEMAの権限を主に持ち、ワークスペースカタログに対してはUSE CATALOGの権限を持つ",
        "is_correct": true
      },
      {
        "text": "ワークスペースユーザーは、デフォルトスキーマに対してALL PRIVILEGESを持ち、ワークスペースカタログに対してはUSE CATALOGの権限を持つ",
        "is_correct": false
      },
      {
        "text": "ワークスペースユーザーは、ワークスペースカタログに対してALL PRIVILEGESを持つ",
        "is_correct": false
      }
    ],
    "explanation": "<p>Unity Catalogが有効になった新しいワークスペースが作成されると、Databricksはデフォルトのワークスペースカタログとデフォルトスキーマを自動的にプロビジョニングします。また、ユーザーが一般的なデータエンジニアリングタスクをそのスキーマ内で実行できるようにするための基本的な権限セットも割り当てられます。</p><p>ワークスペースユーザーが持つデフォルト権限：</p><ul><li><strong>ワークスペースカタログに対する権限</strong> - USE CATALOG</li><li><strong>デフォルトスキーマに対する権限</strong> - 以下を含みます：</li></ul><ul style=\"margin-left: 20px;\"><li>CREATE TABLE</li><li>CREATE VOLUME</li><li>CREATE FUNCTION</li><li>CREATE MATERIALIZED VIEW</li><li>CREATE MODEL</li><li>USE SCHEMA</li></ul><p>これらの権限により、ユーザーはデフォルトスキーマ内で基本的なデータ管理操作を実行できますが、カタログレベルでのすべての操作に対する権限は持っていません。また、ALL PRIVILEGESも自動的には付与されません。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Unity Catalog有効時のデフォルトワークスペースユーザーは、デフォルトスキーマでテーブルやボリュームなどを作成・使用する基本的な権限と、カタログの参照権限を持ちます。"
  },
  {
    "id": 16,
    "question": "データエンジニアリングチームが、Delta LakeのSHALLOW CLONE機能を使用して、テーブル「orders」からテーブル「orders_backup」を作成しました。最近、「orders_backup」テーブルをクエリする際に、一部のデータファイルが見つからないというエラーが発生し始めました。\n\nこのエラーを正しく説明しているのはどれですか？",
    "choices": [
      {
        "text": "ordersテーブルに対してOPTIMIZEコマンドが実行された",
        "is_correct": false
      },
      {
        "text": "orders_backupテーブルに対してOPTIMIZEコマンドが実行された",
        "is_correct": false
      },
      {
        "text": "orders_backupテーブルに対してVACUUMコマンドが実行された",
        "is_correct": false
      },
      {
        "text": "ordersテーブルに対してVACUUMコマンドが実行された",
        "is_correct": true
      }
    ],
    "explanation": "<p><strong>Shallow Clone</strong>の仕組み：</p><ul><li><strong>トランザクションログのコピー</strong> - Shallow Cloneは、Deltaトランザクションログをコピーするだけでテーブルのコピーを作成します</li><li><strong>データの移動なし</strong> - Shallow Clone中にデータファイルは移動しません。クローンテーブルはソーステーブルのデータファイルを参照しています</li></ul><p>エラーの原因：</p><ul><li><strong>ソーステーブルでのVACUUM実行</strong> - ソーステーブル（orders）に対してVACUUMコマンドを実行すると、ソーステーブルのトランザクションログで参照されているデータファイルが削除される可能性があります</li><li><strong>クローンテーブルへの影響</strong> - Shallow Cloneであるorders_backupのトランザクションログには、削除されたデータファイルへの参照が残ります。その結果、クエリ実行時に「ファイルが見つからない」というエラーが発生します</li></ul><p>重要なポイント：</p><ul><li>Shallow Cloneはメタデータのみをコピーするため、ソーステーブルへの依存性が高い</li><li>ソーステーブルの維持管理操作（特にVACUUM）は、Shallow Cloneの完全性に影響を与えます</li><li>OPTIMIZEコマンドはファイルの圧縮/再構成のみで、ファイルの削除は行わないため、エラーの原因にはなりません</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "Shallow Cloneはソーステーブルのデータファイルのみをコピーするため、ソーステーブルに対してVACUUMを実行するとクローンテーブルが参照するファイルが削除され、クエリエラーが発生します。"
  },
  {
    "id": 17,
    "question": "ジョブのすべての正常完了実行をリストアップできるDatabricks CLIコマンドはどれですか？",
    "choices": [
      {
        "text": "databricks jobs list-runs --job-id <job-id> --completed-only",
        "is_correct": true
      },
      {
        "text": "databricks jobs list-runs --job-id <job-id> --completed",
        "is_correct": false
      },
      {
        "text": "databricks jobs list-runs --job-id <job-id> --success",
        "is_correct": false
      },
      {
        "text": "databricks jobs list-runs --job-id <job-id> --success-only",
        "is_correct": false
      }
    ],
    "explanation": "<p>ジョブの正常完了実行のみをリストアップするための正しいDatabricks CLIコマンドは以下の通りです：</p><p><code>databricks jobs list-runs --job-id &lt;job-id&gt; --completed-only</code></p><p>このコマンドの詳細：</p><ul><li><strong>--completed-onlyフラグ</strong> - このパラメータは、結果に完了した実行のみを含めるための正しいフラグです</li><li><strong>デフォルト動作</strong> - このフラグを使用しない場合、コマンドはアクティブな実行と完了した実行の両方をリストアップします</li><li><strong>ジョブID指定</strong> - &lt;job-id&gt;には、対象となる特定のジョブのIDを指定します</li></ul><p>他のオプションが正しくない理由：</p><ul><li><code>--completed</code> - これは有効なフラグではなく、期待される結果を得られません</li><li><code>--success</code>、<code>--success-only</code> - これらのフラグはDatabricks CLIで認識される標準的なパラメータではありません</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "databricks jobs list-runs --job-id <job-id> --completed-onlyコマンドを使用することで、ジョブの完了した実行のみをフィルタリングしてリストアップできます。"
  },
  {
    "id": 18,
    "question": "データエンジニアリングチームが、「year」列でパーティション分割された大規模なDelta Lakeテーブル「user_posts」を持っています。このテーブルはストリーミングジョブでストリーミングソースとして使用されています。以下はストリーミングクエリで、空欄があります：\nspark.readStream\n  .table(\"user_posts\")\n  ________________\n  .groupBy(\"post_category\", \"post_date\")\n  .agg(\n    count(\"psot_id\").alias(\"posts_count\"),\n    sum(\"likes\").alias(\"total_likes\"))\n  .writeStream\n    .option(\"checkpointLocation\", \"dbfs:/path/checkpoint\")\n    .table(\"psots_stats\")\n\nチームは、ストリーミングソースの追記のみ要件を破らずに、テーブルから過去2年のデータを削除したいと考えています。\n\nパーティション削除後もテーブルからのストリーム処理を有効にするために、空欄を正しく埋めるオプションはどれですか？",
    "choices": [
      {
        "text": ".window(\"year\", \"INTERVAL 2 YEARS\")",
        "is_correct": false
      },
      {
        "text": ".withWatermark(\"year\", \"INTERVAL 2 YEARS\")",
        "is_correct": false
      },
      {
        "text": ".option(\"ignoreDeletes\", True)",
        "is_correct": true
      },
      {
        "text": ".option(\"ignoreDeletes\", \"year\")",
        "is_correct": false
      }
    ],
    "explanation": "<p>日時列でのパーティション分割は、一定の経過時間より古いデータをテーブルから削除する際に活用できます。例えば、過去の年のデータを削除する決定ができます。この場合、ファイル削除はパーティション境界に沿ってクリーンに行われます。</p><p>ただし、このテーブルをストリーミングソースとして使用している場合、データ削除はストリーミングソースの<strong>追記のみ要件</strong>を破ります。これにより、テーブルはストリーム可能ではなくなります。</p><p>この問題を回避するために、<strong><code>ignoreDeletes</code>オプション</strong>を使用できます：</p><ul><li><strong>オプション形式</strong> - <code>.option(\"ignoreDeletes\", True)</code></li><li><strong>機能</strong> - このオプションはパーティション削除を伴うDeltaテーブルからのストリーム処理を可能にします</li><li><strong>動作</strong> - 削除されたデータを無視し、ストリーミングを継続します</li></ul><p>他のオプションが正しくない理由：</p><ul><li><code>window()</code>とウォーターマーク - これらはストリーミング処理の時間ウィンドウ管理用で、パーティション削除対応ではありません</li><li><code>.option(\"ignoreDeletes\", \"year\")</code> - ignoreDeletesは真偽値である必要があり、文字列ではありません</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "ignoreDeletesオプションをTrueに設定することで、パーティション削除を伴うDelta Lakeテーブルからのストリーム処理を継続でき、ストリーミングソースの追記のみ要件を保持できます。"
  },
  {
    "id": 19,
    "question": "データエンジニアリングチームが、以下の定義を持つダイナミックビューを作成しました：\nCREATE VIEW students_vw AS\nSELECT * FROM students\nWHERE\n    CASE\n        WHEN is_member(\"instructors\") THEN TRUE\n        ELSE is_active IS FALSE\n    END\n\nこのビューをクエリした結果について、正しく説明しているのはどれですか？",
    "choices": [
      {
        "text": "instructorsグループのメンバーのみが、アクティブかどうかに関わらずすべての学生レコードを表示できます。指定されたグループのメンバーでないユーザーは、非アクティブな学生のレコードのみ表示できます",
        "is_correct": true
      },
      {
        "text": "instructorsグループのメンバーはアクティブな学生のレコードのみ表示できます。指定されたグループのメンバーでないユーザーは、非アクティブな学生のレコードのみ表示できます",
        "is_correct": false
      },
      {
        "text": "instructorsグループのメンバーはアクティブな学生のレコードのみ表示できます。指定されたグループのメンバーでないユーザーは、非アクティブな学生のレコードに対してNULL値を表示します",
        "is_correct": false
      },
      {
        "text": "instructorsグループのメンバーのみが、アクティブかどうかに関わらずすべての学生レコードを表示できます。指定されたグループのメンバーでないユーザーは、非アクティブな学生のレコードに対してNULL値を表示します",
        "is_correct": false
      }
    ],
    "explanation": "<p>このダイナミックビューのWHERE条件を分析します：</p><ul><li><strong>instructorsグループのメンバーの場合</strong> - <code>is_member(\"instructors\")</code>がTRUEを返すため、CASE式全体がTRUEになります。したがって、<strong>すべての学生レコード</strong>がフィルタリング条件に関わらず返されます</li><li><strong>instructorsグループのメンバーでない場合</strong> - CASE式のELSE句が評価され、<code>is_active IS FALSE</code>の条件が適用されます。つまり、<strong>非アクティブな学生のレコードのみ</strong>が返されます</li></ul><p>ビューの動作原理：</p><ul><li><strong>ダイナミックビューの特性</strong> - ビューにアクセスするユーザーに応じて、異なるデータセットを返します</li><li><strong>is_member()関数</strong> - 現在のユーザーが指定されたグループのメンバーかどうかを判定します</li><li><strong>行フィルタリング</strong> - WHERE条件により、ユーザーのグループ所属に基づいて行レベルのアクセス制御が実現されます</li></ul><p>重要なポイント：</p><ul><li>NULL値が返されるのではなく、条件を満たさない行は単に結果セットから除外されます</li><li>instructorsグループメンバーは完全なアクセス権を持ちます</li><li>その他のユーザーには限定されたアクセスのみが許可されます</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "ダイナミックビューのCASE式とis_member()関数を使用することで、ユーザーのグループ所属に基づいた行レベルのアクセス制御を実装できます。"
  },
  {
    "id": 20,
    "question": "Spark UIのクエリ詳細ページに表示されるSQLメトリクスは、以下のどれですか？",
    "choices": [
      {
        "text": "Query duration",
        "is_correct": false
      },
      {
        "text": "Succeeded Jobs",
        "is_correct": false
      },
      {
        "text": "Spill size",
        "is_correct": true
      },
      {
        "text": "Query execution time",
        "is_correct": false
      }
    ],
    "explanation": "<p>Spark UIのクエリ詳細ページには、クエリ実行時間、期間、関連ジョブのリスト、クエリ実行DAGなどの一般的な情報が表示されます。</p><p>SQLメトリクスの詳細：</p><ul><li><strong>表示位置</strong> - 物理オペレータのブロックに表示されます</li><li><strong>目的</strong> - 各オペレータの実行詳細を詳しく調べるときに有用です</li><li><strong>利用例</strong> - 「出力行数」でFilter オペレータ後に出力された行数を確認したり、「Spill size」でオペレータからメモリがディスクにスピルされたバイト数を確認できます</li></ul><p>主要なSQLメトリクスの例：</p><ul><li><strong>Spill size</strong> - メモリからディスクにスピルされたバイト数</li><li><strong>Number of output rows</strong> - オペレータが出力した行数</li><li><strong>Elapsed time</strong> - オペレータの実行時間</li></ul><p>他のオプションについて：</p><ul><li>「Query duration」と「Query execution time」はクエリの総実行時間を表す用語で、SQLメトリクスではなく、全体的な統計情報です</li><li>「Succeeded Jobs」はクエリに関連するジョブの情報であり、SQLメトリクスではありません</li></ul>",
    "tags": "モニタリングとアラート",
    "summary": "Spark UIのクエリ詳細ページに表示されるSQLメトリクスは、各物理オペレータの実行詳細を示すもので、Spill sizeなどのメトリクスでパフォーマンス分析が可能です。"
  },
  {
    "id": 21,
    "question": "データエンジニアリングチームは、予測最適化が有効になっているUnity Catalogテーブルを管理しています。予測最適化の自動メンテナンスの一部として、どの操作が自動的に実行されるのか確信が持てません。\n\n有効になっているテーブルに対して、予測最適化によって自動的に処理されない操作は、以下のどれですか？",
    "choices": [
      {
        "text": "OPTIMIZE",
        "is_correct": false
      },
      {
        "text": "VACUUM",
        "is_correct": false
      },
      {
        "text": "ANALYZE",
        "is_correct": false
      },
      {
        "text": "ZORDER",
        "is_correct": true
      }
    ],
    "explanation": "<p>Z-orderインデックスは、Unity Catalogテーブルに対して予測最適化によって自動的に処理されません。</p><p>予測最適化の自動メンテナンス機能：</p><ul><li><strong>自動処理される操作</strong> - 予測最適化は以下のタスクを自動的に管理し、テーブルのパフォーマンスを維持します：</li></ul><ul style=\"margin-left: 20px;\"><li><strong>OPTIMIZE</strong> - ファイルの圧縮と再構成</li><li><strong>ANALYZE</strong> - テーブル統計の収集と更新</li><li><strong>VACUUM</strong> - 不要なファイルの削除</li></ul><ul><li><strong>自動処理されない操作</strong> - ZORDER操作は予測最適化の自動メンテナンスに含まれません。また、既存のZ-orderファイルは予測最適化の実行時に無視されます</li></ul><p>重要なポイント：</p><ul><li>予測最適化は、一般的なテーブルメンテナンスタスクを自動化しますが、カスタムインデックス戦略であるZ-orderは対象外です</li><li>Z-orderが必要な場合は、手動で実行する必要があります</li><li>予測最適化はクエリパフォーマンスを自動的に最適化する包括的なソリューションですが、すべての最適化オプションをカバーしているわけではありません</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "予測最適化はOPTIMIZE、VACUUM、ANALYZEは自動実行しますが、Z-ORDER操作は自動処理されず、手動で実行する必要があります。"
  },
  {
    "id": 22,
    "question": "データエンジニアが、大規模なUC管理Delta テーブル（約750GB）がCDCフィード処理時に遅くなっていることに気付きました。\n\nパフォーマンスを向上させるために、データエンジニアが取るべき対応は、以下のどれですか？",
    "choices": [
      {
        "text": "テーブルで削除ベクトルを有効にし、プライマリキーに対してZ-orderインデックスを適用する",
        "is_correct": false
      },
      {
        "text": "テーブルで削除ベクトルを有効にし、プライマリキーを使用してliquid clusteringを適用する",
        "is_correct": true
      },
      {
        "text": "テーブルをパーティション分割し、プライマリキーを使用してliquid clusteringを適用する",
        "is_correct": false
      },
      {
        "text": "テーブルをパーティション分割し、プライマリキーに対してZ-orderインデックスを適用する",
        "is_correct": false
      }
    ],
    "explanation": "<p>Change Data Capture（CDC）は更新と削除の処理を伴うため、CDC フィードが遅い大規模Deltaテーブルのパフォーマンスを向上させるには、データエンジニアは<strong>削除ベクトルを有効化</strong>し、<strong>プライマリキーを使用してliquid clusteringを適用</strong>する必要があります。</p><p>推奨ソリューションの利点：</p><ul><li><strong>削除ベクトルの有効化</strong> - Deltaは削除または更新された行を効率的に追跡・管理でき、基盤となるファイルの完全な書き換えが不要になります。これにより、CDC操作のオーバーヘッドが大幅に削減されます</li><li><strong>Liquid Clustering の適用</strong> - CDCマージキーに基づいてデータを物理的に構成し、関連レコードが同じ場所に配置されるようにします。これにより、更新・削除時にスキャンするデータ量が最小化されます</li></ul><p>これらの最適化の効果：</p><ul><li>インジェクションとクエリのパフォーマンスを高く維持</li><li>CDCワークロードのレイテンシを削減</li><li>大規模テーブルの管理性を向上</li></ul><p>他のオプションが最適でない理由：</p><ul><li>Z-orderはCDC操作に対して削除ベクトルほど効果的ではありません</li><li>パーティション分割単独では、CDC効率の大幅な改善にはつながりません</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "大規模テーブルのCDC処理性能を向上させるには、削除ベクトルを有効化し、liquid clusteringでプライマリキーに基づくデータの物理的配置を最適化する必要があります。"
  },
  {
    "id": 23,
    "question": "Databricksでファイルをノートブックとして確立するのは、以下のどれですか？",
    "choices": [
      {
        "text": "ファイルのソースコードでSparkSession.builder.getOrCreate()を使用してSparkセッションを作成する",
        "is_correct": false
      },
      {
        "text": "ファイルのソースコードの最初の行に魔法コマンド%databricksを記述する",
        "is_correct": false
      },
      {
        "text": "ファイルのソースコードの最初の行にコメント「# Databricks notebook source」を記述する",
        "is_correct": true
      },
      {
        "text": "ファイルのソースコードにdbutils.notebookモジュールをインポートする",
        "is_correct": false
      }
    ],
    "explanation": "<p>Python、SQL、Scala、Rスクリプトをシングルセルノートブックに変換するには、ファイルの最初のセルに特定のコメントを追加することで実現できます。</p><p>ノートブック化の方法：</p><ul><li><strong>コメント要件</strong> - <code># Databricks notebook source</code>というコメントをファイルの最初の行に追加します</li><li><strong>対応言語</strong> - Python、SQL、Scala、Rのすべての言語で使用できます</li><li><strong>効果</strong> - このコメントをファイルに追加すると、Databricksはそのファイルをノートブックとして認識し、ノートブック機能（セル分割、可視化サポート、ノートブック固有のコマンドなど）を使用できるようになります</li></ul><p>他のオプションが正しくない理由：</p><ul><li><strong>SparkSession の作成</strong> - これはPythonスクリプトでの通常のプラクティスですが、ファイルをノートブックとして確立しません</li><li><strong>%databricks魔法コマンド</strong> - これは有効なDatabricks魔法コマンドではありません</li><li><strong>dbutils.notebookモジュールのインポート</strong> - これはノートブックコンテキストで実行される場合に機能しますが、ファイル自体をノートブックとして確立するものではありません</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "ファイルの最初の行に「# Databricks notebook source」というコメントを追加することで、PythonやSQLなどのスクリプトファイルをDatabricksノートブックとして確立できます。"
  },
  {
    "id": 24,
    "question": "データエンジニアがLDPパイプラインで以下のデータ品質制約を定義しました：\nCONSTRAINT valid_id EXPECT (id IS NOT NULL) _____________\n\nレコードがこの制約に違反した場合に実行を直ちに停止するために、空欄を正しく埋めるクローズは、どれですか？",
    "choices": [
      {
        "text": "ON VIOLATION FAIL UPDATE",
        "is_correct": true
      },
      {
        "text": "ON VIOLATION STOP",
        "is_correct": false
      },
      {
        "text": "ON VIOLATION FAIL PIPELINE",
        "is_correct": false
      },
      {
        "text": "ON VIOLATION DROP ROW",
        "is_correct": false
      }
    ],
    "explanation": "<p>空欄を埋める正しいクローズは<strong>ON VIOLATION FAIL UPDATE</strong>です。</p><p>このクローズの機能：</p><ul><li><strong>制約違反時の処理</strong> - valid_id制約に違反するレコードが発見されると、更新の実行が阻止されます</li><li><strong>データ品質の厳格化</strong> - 無効なレコードの下流処理を防ぎ、厳密なデータ品質を維持します</li><li><strong>パイプラインの停止</strong> - 違反が発生すると、パイプラインの実行が直ちに停止します</li></ul><p>重要なポイント：</p><ul><li><strong>手動介入の必要性</strong> - パイプラインが期待値違反により失敗した場合、無効なデータを適切に処理してからパイプラインを再実行する必要があります</li><li><strong>単一フロー失敗</strong> - この期待値違反により単一のフローのみが失敗し、パイプライン内の他のフローが失敗することはありません</li><li><strong>厳格な品質管理</strong> - パイプライン実行前に品質基準が満たされていることを確認する仕組みが実現されます</li></ul><p>他のオプションについて：</p><ul><li>ON VIOLATION STOP - このクローズは標準的なLDP構文ではありません</li><li>ON VIOLATION FAIL PIPELINE - パイプライン全体を失敗させてしまいます</li><li>ON VIOLATION DROP ROW - 違反したレコードを削除してしまい、データ品質を確認できません</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "LDPパイプラインのON VIOLATION FAIL UPDATEクローズは、制約違反時にパイプル実行を直ちに停止し、厳密なデータ品質管理を実現します。"
  },
  {
    "id": 25,
    "question": "ALL PRIVILEGES権限に含まれていない権限は、以下のどれですか？",
    "choices": [
      {
        "text": "MODIFY",
        "is_correct": false
      },
      {
        "text": "BROWSE",
        "is_correct": false
      },
      {
        "text": "EXECUTE",
        "is_correct": false
      },
      {
        "text": "MANAGE",
        "is_correct": true
      }
    ],
    "explanation": "<p><strong>MANAGE権限</strong>はALL PRIVILEGES権限に含まれていません。ALL PRIVILEGESはEXECUTE、BROWSE、MODIFYなどの包括的な権限セットを付与しますが、データ流出や権限昇格を防止するために、明示的にMANAGEを除外しています。</p><p>MANAGE権限の特性：</p><ul><li><strong>権限管理</strong> - ユーザーが権限を表示・管理できます</li><li><strong>オブジェクト管理</strong> - オブジェクトの所有権移譲、削除、名前変更が可能です</li><li><strong>オブジェクト所有権に相当</strong> - オブジェクト所有権と類似しており、ユーザーは必要に応じて自分自身に追加の権限を付与できます</li><li><strong>自動的な権限継承なし</strong> - MANAGE権限を持つだけでは、そのオブジェクト上のすべての権限が自動的に付与されるわけではありません</li></ul><p>ALL PRIVILEGESに含まれる権限：</p><ul><li>EXECUTE - オブジェクトの実行</li><li>BROWSE - オブジェクトの表示</li><li>MODIFY - オブジェクトの変更</li></ul><p>セキュリティへの意味：</p><ul><li>MANAGE権限を意図的に除外することで、権限の過度な集中化を防止します</li><li>所有権やMANAGE権限の付与は、管理者レベルで慎重に制御される必要があります</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "ALL PRIVILEGES権限にはMODIFY、BROWSE、EXECUTEが含まれますが、MANAGE権限は意図的に除外され、権限の過度な集中化やセキュリティ関連のリスクを防止しています。"
  },
  {
    "id": 26,
    "question": "多国籍企業が販売分析データを、異なる国に位置する内部のDatabricksチームと外部のコンサルティングパートナーの両者と共有したいと考えています。内部チームはDatabricks間共有（D2D）を介してデータにアクセスし、外部パートナーはオープンDelta Sharing（D2O）プロトコルを使用します。\n\nこのシナリオでは、D2D共有とD2Oプロトコル間で認証はどのように異なりますか？",
    "choices": [
      {
        "text": "Databricks間共有（D2D）とオープンDelta Sharing（D2O）は同じ認証方法を使用するため、違いはない",
        "is_correct": false
      },
      {
        "text": "Databricks間共有（D2D）はOIDCフェデレーションに依存し、オープンDelta Sharing（D2O）はベアラートークンによる認証が必要",
        "is_correct": false
      },
      {
        "text": "Databricks間共有（D2D）はシングルサインオン（SSO）を備えた統合ログインに依存し、オープンDelta Sharing（D2O）はOIDCフェデレーションを使用した外部ログイン",
        "is_correct": false
      },
      {
        "text": "Databricks間共有（D2D）はトークン交換なしの組み込み認証を使用し、オープンDelta Sharing（D2O）はベアラートークンまたはOIDCフェデレーションによる外部認証が必要",
        "is_correct": true
      }
    ],
    "explanation": "<p>Databricks間共有（D2D）とオープンDelta Sharing（D2O）は異なる認証メカニズムを採用しています。</p><p><strong>Databricks間共有（D2D）の認証：</strong></p><ul><li><strong>組み込み認証</strong> - Databricks環境内で組み込まれた認証メカニズムを使用します</li><li><strong>トークン交換なし</strong> - 外部トークン交換が不要で、シームレスなアクセスが可能です</li><li><strong>内部チーム用</strong> - 同じ組織内の異なるDatabricksワークスペース間でのデータ共有に最適化されています</li></ul><p><strong>オープンDelta Sharing（D2O）の認証：</strong></p><ul><li><strong>外部認証</strong> - 外部パートナーや外部システムのアクセスを想定した認証が必要です</li><li><strong>ベアラートークン</strong> - APIベースの認証にベアラートークンを使用できます</li><li><strong>OIDCフェデレーション</strong> - OpenID Connect（OIDC）による標準的なフェデレーション認証もサポートしています</li><li><strong>外部パートナー用</strong> - 組織外のパートナーへのセキュアなデータ共有に適しています</li></ul><p>主な違い：</p><ul><li>D2Dは信頼できる内部組織間の共有であり、組み込み認証で十分です</li><li>D2Oは信頼できない外部パートナーへの共有であり、明示的なトークンまたはフェデレーション認証が必要です</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "D2D共有は組み込み認証でトークン交換なしに内部チーム間でシームレスにアクセスできる一方、D2OはベアラートークンやOIDCフェデレーションによる外部認証で、外部パートナーへのセキュアなアクセスを実現します。"
  },
  {
    "id": 27,
    "question": "ユニットテストにおけるアサーション（assertion）を正しく説明しているのは、以下のどれですか？",
    "choices": [
      {
        "text": "アサーションは、コード内で行われた仮定が開発中も真のままであるかを確認するブール式",
        "is_correct": true
      },
      {
        "text": "アサーションは、2つのコードブロックが論理的に統合され、グループとして相互作用しているかを確認するブール式",
        "is_correct": false
      },
      {
        "text": "アサーションは、失敗したコード単位をログに記録し、後でデバッグと分析を行うコマンド",
        "is_correct": false
      },
      {
        "text": "アサーションは、コード単位の現在のバージョンと最後に編集されたバージョンの差分を表示するコマンド",
        "is_correct": false
      }
    ],
    "explanation": "<p>アサーション（assertion）は、コード内で行われた仮定をテストするためのブール式です。ユニットテストで特定の仮定が真のままであるかを確認するために使用されます。</p><p>アサーションの特性：</p><ul><li><strong>ブール式</strong> - 真（True）または偽（False）の値を返す式です</li><li><strong>仮定の検証</strong> - コード開発中に、特定の条件が期待通りであることを確認します</li><li><strong>テスト自動化</strong> - ユニットテストフレームワークの中核的な要素として機能します</li><li><strong>使用例</strong> - <code>assert func() == expected_value</code>のように、関数の戻り値が期待値と一致することを確認できます</li></ul><p>アサーションの役割：</p><ul><li><strong>開発時の検証</strong> - コード開発中に、期待通りに機能しているかをリアルタイムで確認できます</li><li><strong>バグの早期発見</strong> - 仮定が成立しない場合、直ちに開発者に通知されます</li><li><strong>テストの信頼性向上</strong> - コードの動作が確実に期待値を満たしていることを保証します</li></ul><p>他のオプションが正しくない理由：</p><ul><li>コードブロックの統合検証 - これは統合テストの概念で、アサーションの目的ではありません</li><li>本番環境でのログ記録 - アサーションは開発・テスト環境での検証用です</li><li>バージョン比較 - これはバージョン管理ツールの機能で、アサーションとは無関係です</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "アサーションはユニットテストで使用されるブール式であり、コード開発中に仮定が真のままであることを確認し、バグを早期に発見するための重要なツールです。"
  },
  {
    "id": 28,
    "question": "Auto Loaderを最もよく説明しているのは、以下のどれですか？",
    "choices": [
      {
        "text": "Auto Loaderは、ソースのDeltaテーブルをターゲット先に特定のバージョンでクローン化できる",
        "is_correct": false
      },
      {
        "text": "Auto Loaderは、ストレージレイヤーを追加してデータ信頼性を向上させることで、効率的な挿入、更新、削除、ロールバック機能を実現する",
        "is_correct": false
      },
      {
        "text": "Auto Loaderは、ソースロケーションを監視してファイルが蓄積されるのを検出し、コマンド実行のたびに新しく到着したファイルのみを特定してインジェストする。一方、以前の実行でインジェストされたファイルはスキップされる",
        "is_correct": true
      },
      {
        "text": "Auto Loaderは、Change Data Capture（CDC）フィードを適用して、ソースデータで取得された変更に基づいてテーブルを更新できる",
        "is_correct": false
      }
    ],
    "explanation": "<p>Auto Loaderはクラウドストレージに到着した新しいデータファイルをインクリメンタルかつべき等で処理し、ターゲットDelta Lakeテーブルにロードします。</p><p>Auto Loaderの主要な特性：</p><ul><li><strong>ソース監視</strong> - ファイルが蓄積されるソースロケーションを継続的に監視します</li><li><strong>新規ファイル検出</strong> - 新しく到着したファイルのみを自動的に特定します</li><li><strong>インクリメンタル処理</strong> - コマンド実行のたびに、前回処理済みのファイルはスキップされ、新しいファイルのみが処理されます</li><li><strong>べき等性</strong> - 同じファイルが複数回処理されても、重複や不整合が生じない仕組みが備わっています</li><li><strong>効率的なデータ取得</strong> - すべてのファイルを毎回スキャンするのではなく、必要なファイルのみを処理するため、コスト効率が良好です</li></ul><p>使用シナリオ：</p><ul><li>クラウドストレージに定期的に到着するデータの自動インジェスト</li><li>リアルタイムまたは準リアルタイムのデータパイプライン構築</li><li>手動管理不要な継続的なデータ更新</li></ul><p>他のオプションが正しくない理由：</p><ul><li>クローン化 - これはDelta Lake CloneまたはShallow Cloneの機能です</li><li>ストレージレイヤー - これはDelta Lakeそのものの概念です</li><li>CDC適用 - これはChange Data Captureの機能で、Auto Loaderとは異なります</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Auto Loaderはソースロケーションを監視して新しく到着したファイルのみをインクリメンタルに検出・インジェストし、既処理ファイルをスキップすることで効率的なデータパイプラインを実現します。"
  },
  {
    "id": 29,
    "question": "ノートブックの現在の作業ディレクトリを表示するコマンドは、以下のどれですか？",
    "choices": [
      {
        "text": "os.environ['PYTHONPATH']",
        "is_correct": false
      },
      {
        "text": "print(sys.path)",
        "is_correct": false
      },
      {
        "text": "%sh pwd",
        "is_correct": true
      },
      {
        "text": "os.path.abspath()",
        "is_correct": false
      }
    ],
    "explanation": "<p><strong>%sh pwd</strong>コマンドがノートブック内で現在の作業ディレクトリを表示する正しい方法です。</p><p>コマンド詳細：</p><ul><li><strong>%sh魔法コマンド</strong> - ノートブック内でシェルコードを実行できる特別なコマンドです</li><li><strong>pwd</strong> - 「print working directory」（作業ディレクトリを表示）の頭文字です</li><li><strong>用途</strong> - 現在のシェル環境における作業ディレクトリパスを表示します</li></ul><p>他のオプションについて：</p><ul><li><strong>os.environ['PYTHONPATH']</strong> - Python環境変数のパスを表示しますが、現在の作業ディレクトリではありません</li><li><strong>print(sys.path)</strong> - Pythonモジュール検索パスを表示しますが、現在の作業ディレクトリではありません</li><li><strong>os.path.abspath()</strong> - Pythonで絶対パスを取得できますが、Databricksノートブック環境の作業ディレクトリ確認には適切ではなく、特定のパスを指定する必要があります</li></ul><p>Databricksノートブック環境：</p><ul><li>%shで始まるセルはシェルコマンドを実行できます</li><li>このアプローチはファイルシステムの操作や環境確認に便利です</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "%sh pwdコマンドはDatabricksノートブック内でシェルの「print working directory」を実行し、現在の作業ディレクトリを表示します。"
  },
  {
    "id": 30,
    "question": "Spark Structured Streamingのチェックポイント処理に関する以下の記述のうち、正しくないのはどれですか？",
    "choices": [
      {
        "text": "チェックポイント処理により、ストリーミングエンジンはストリーム処理の進捗を追跡できる",
        "is_correct": false
      },
      {
        "text": "チェックポイントはストリーミングジョブの現在の状態をクラウドストレージに保存する",
        "is_correct": false
      },
      {
        "text": "チェックポイントは複数の独立したストリーム間で共有できる",
        "is_correct": true
      },
      {
        "text": "ライトアヘッドログメカニズムを備えたチェックポイント処理は、フォールトトレランスストリーム処理を保証する",
        "is_correct": false
      }
    ],
    "explanation": "<p>チェックポイントは<strong>複数の独立したストリーム間で共有することはできません</strong>。</p><p>チェックポイントの重要な特性：</p><ul><li><strong>独立したチェックポイントディレクトリ</strong> - 各ストリームは、処理保証を確保するために独自のチェックポイントディレクトリを保有する必要があります</li><li><strong>ストリーム固有の情報</strong> - チェックポイントには、特定のストリームの状態、オフセット、処理済みレコードの情報が含まれており、他のストリームと共有すると矛盾が生じます</li><li><strong>処理保証への影響</strong> - チェックポイントを共有すると、exactly-once、at-least-once、at-most-once保証が破綻する可能性があります</li></ul><p>チェックポイント処理の正しい機能：</p><ul><li><strong>進捗追跡</strong> - ストリーミングエンジンは処理済みデータの位置を追跡できます</li><li><strong>状態保存</strong> - ストリーミングジョブの現在の状態をクラウドストレージに安全に保存します</li><li><strong>フォールトトレランス</strong> - ライトアヘッドログ（WAL）メカニズムにより、障害発生時の復旧を可能にします</li></ul><p>ベストプラクティス：</p><ul><li>各ストリーミングクエリには一意のチェックポイントロケーションを指定する必要があります</li><li>異なるストリーム間でチェックポイントを共有しないことが重要です</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Spark Structured Streamingの各ストリームは独自のチェックポイントディレクトリを保有する必要があり、複数ストリーム間でチェックポイントを共有することはできません。"
  },
  {
    "id": 31,
    "question": "2人のジュニアデータアナリストがDatabricksノートブックを使用してデータ分析プロジェクトで協業しています。現在、彼らはDatabricks内の組み込みノートブックバージョニング機能を使用して変更を管理し、ある程度のバージョン管理を行っています。この方法は小規模な個人作業では機能しますが、複数の人が同時にノートブックを編集するときにチームは課題に直面しています。これを観察したシニアデータエンジニアは、ノートブックの組み込みバージョニングシステムだけに依存するのではなく、ソース管理にGitフォルダの使用を検討することを提案しました。\n\n協業チーム作業においてDatabricksノートブックバージョニングよりもGitフォルダが推奨される理由として、以下のうち正しいのはどれですか？",
    "choices": [
      {
        "text": "Gitフォルダはコミットやプッシュを必要としずに、すべてのプロジェクトノートブックを自動的に同期することで、チームが常に最新のノートブックバージョンを持つことを保証する",
        "is_correct": false
      },
      {
        "text": "Gitフォルダは開発作業用のブランチを作成・管理できるため、意図しない上書きを防止し、複数のチームメンバーが同時に機能開発できる",
        "is_correct": true
      },
      {
        "text": "Gitフォルダは自動的にマージコンフリクトを解決できるため、異なるチームメンバーの貢献を統合する際の手作業を削減できる",
        "is_correct": false
      },
      {
        "text": "Gitフォルダは他のチームメンバーの貢献とコーディングパターンを分析して、AI生成コード提案を提供し、開発者が互換性のあるコードを書く支援をする",
        "is_correct": false
      }
    ],
    "explanation": "<p>協業チーム作業においてGitフォルダがDatabricksノートブックバージョニングより推奨される主な理由は、<strong>開発作業用のブランチを作成・管理できる</strong>ことです。</p><p>Gitフォルダを使用した協業の利点：</p><ul><li><strong>ブランチ管理</strong> - 各チームメンバーが同じリモートGitリポジトリにリンクされた独自のGitフォルダを作成し、個人ブランチ内で作業できます</li><li><strong>独立した作業</strong> - 変更を独立して行えるため、他のメンバーに影響を与えません</li><li><strong>意図しない上書き防止</strong> - ブランチの分離により、複数メンバーが同時に作業してもファイル競合を回避できます</li><li><strong>機能開発の並列化</strong> - 異なるブランチで異なる機能を同時に開発できます</li><li><strong>構造化された協業</strong> - プルリクエストやコードレビューによる正式なワークフローが可能になります</li></ul><p>他のオプションが正しくない理由：</p><ul><li><strong>自動同期</strong> - Gitはコミット・プッシュによる明示的な同期が必要です。自動同期は実装されていません</li><li><strong>自動マージ解決</strong> - Gitマージコンフリクトは通常手動解決が必要で、複雑なコンフリクトは自動解決できません</li><li><strong>AI生成提案</strong> - これはGitの標準機能ではなく、外部ツールの機能です</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Gitフォルダはブランチ管理機能により、チームメンバーが独立して作業でき、意図しない上書きを防止し、構造化された協業を実現できるため、Databricksノートブック組み込みバージョニングよりも推奨されます。"
  },
  {
    "id": 32,
    "question": "ジュニアデータエンジニアが、15個のノートブックタスクで構成されるDatabricksジョブを作成しました。各タスクは15個の異なるテーブルに対して同じデータ検証ロジックを実行します。各タスクは前のタスクの完了に依存しており、ワークフローが長く、保守が難しくなっています。\n\nこのユースケースにおいて、より効率的でスケーラブルなソリューションは何ですか？",
    "choices": [
      {
        "text": "ForEachタスクを使用して、テーブル名をパラメータとして渡し、同じ検証ノートブックを各テーブルに対して並列実行する",
        "is_correct": true
      },
      {
        "text": "15個のノートブックタスクを並列実行するように構成し、各タスクに個別のクラスタ構成を設定する",
        "is_correct": false
      },
      {
        "text": "すべてのテーブル検証を1つの大きなノートブックに統合し、すべてのテーブルを順次ループする",
        "is_correct": false
      },
      {
        "text": "1つのジョブに複数のタスクを持つのではなく、15個の独立したジョブをスケジュール設定する",
        "is_correct": false
      }
    ],
    "explanation": "<p>このシナリオにおける、より効率的でスケーラブルなソリューションは<strong>ForEachタスク</strong>を使用することです。</p><p>ForEachタスクの機能：</p><ul><li><strong>ループ処理</strong> - ネストされたタスクをループ内で実行し、各イテレーションに異なるパラメータを渡せます</li><li><strong>パラメータ化</strong> - この場合、各テーブル名をパラメータとして渡すことができます</li><li><strong>並列実行</strong> - 同じ検証ノートブックをすべてのテーブルに対して並列実行でき、順序依存を回避します</li></ul><p>ForEachタスク使用のメリット：</p><ul><li><strong>保守性向上</strong> - 検証ロジックを1つのノートブックで管理するため、メンテナンスオーバーヘッドが削減されます</li><li><strong>スケーラビリティ</strong> - テーブル数が増加しても、ノートブックの追加は不要で、パラメータリストを拡張するだけです</li><li><strong>実行時間短縮</strong> - 15個の順序依存タスクの順次実行ではなく、並列実行により全体の実行時間が大幅に短縮されます</li><li><strong>管理の容易性</strong> - ワークフロー構造がシンプルになり、監視とデバッグが容易になります</li></ul><p>他のオプションが最適でない理由：</p><ul><li><strong>並列クラスタ構成</strong> - タスクは依然として15個必要で、保守性が向上しません</li><li><strong>大規模ノートブック</strong> - 順次ループはボトルネックを生じ、拡張性が低下します</li><li><strong>独立したジョブ</strong> - 管理がより複雑になり、リソース効率が低下します</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "ForEachタスクを使用することで、同じ検証ロジックを異なるテーブルに対して効率的に並列実行でき、ワークフローの保守性とスケーラビリティが向上します。"
  },
  {
    "id": 33,
    "question": "データエンジニアリングチームが、社会保障番号を含むデータセットを外部の分析ベンダーと共有する必要があります。元の値を公開しないようにしながら、ベンダーがマッチング操作を実行できるようにしたいと考えています。これを実現するために、以下のコードを実装しました：\ndf_masked = df_original.withColumn(\"ssn_hash\", sha2(\"ssn\", 256))\ndf_masked.write.saveAsTable(\"masked_analytics\")\n\nしかし、このコードは依然として元の値を公開しています。\n\nこの動作の理由を正しく説明しているのは、以下のどれですか？",
    "choices": [
      {
        "text": "コードは元の値をオーバーライドする代わりに、df_maskedに新しい列を追加しているため、代わりにwithColumn(\"ssn\", sha2(\"ssn\", 256))を使用する必要があります",
        "is_correct": true
      },
      {
        "text": "sha2関数はPySparkで利用できません。テーブルmasked_analyticsはSpark SQLでCTAS文を使用して作成する必要があります",
        "is_correct": false
      },
      {
        "text": "sha2関数は数値に適用されません。代わりにwithColumn(\"ssn_hash\", sha1(\"ssn\"))を使用する必要があります",
        "is_correct": false
      },
      {
        "text": "コードは元の値をドロップせずに新しい列をdf_maskedに追加しているため、その後に.drop(\"ssn_hash\")コマンドを実行する必要があります",
        "is_correct": false
      }
    ],
    "explanation": "<p>PySparkの<code>withColumn</code>関数は、与えられた式に基づいてDataFrameに新しい列を作成するか、既存の列を置き換えます。この問題のコードは新しい列（ssn_hash）をdf_maskedに追加しますが、元のssn列を削除または上書きしないため、元の社会保障番号がテーブルに残ったままです。</p><p>問題の詳細：</p><ul><li><strong>列の追加のみ</strong> - <code>withColumn(\"ssn_hash\", sha2(\"ssn\", 256))</code>はハッシュ値を新しい列として追加するだけです</li><li><strong>元の列の保持</strong> - 元のssn列は変更されず、テーブルに公開されたままになります</li><li><strong>セキュリティ問題</strong> - マスキングの目的が達成されず、機密データが依然として露出しています</li></ul><p>正しい解決策：</p><ul><li><strong>方法1：列の上書き</strong> - <code>withColumn(\"ssn\", sha2(\"ssn\", 256))</code>を使用して、元のssn列をハッシュ値で置き換えます</li><li><strong>方法2：列の削除</strong> - ハッシュ列を追加した後、元のssn列を削除します：<code>df_masked.drop(\"ssn\").withColumn(...)</code></li></ul><p>他のオプションが正しくない理由：</p><ul><li>sha2関数はPySparkで利用可能で、CTAS文は不要です</li><li>sha2関数は数値型にも適用可能です</li><li>削除すべき列はssn_hashではなく、元のssn列です</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "PySparkのwithColumn関数で新しいハッシュ列を追加しても元の列は削除されないため、セキュリティを確保するには元の列を上書きするか削除する必要があります。"
  },
  {
    "id": 34,
    "question": "データエンジニアがGithubにプッシュされた各DatabricksPythonファイルのソースコードの最初の行に「# Databricks notebook source」というコメントに気付きました。\n\nこのコメントの目的を説明しているのは、以下のどれですか？",
    "choices": [
      {
        "text": "このコメントはPythonの自動生成ドキュメントに使用される",
        "is_correct": false
      },
      {
        "text": "このコメントは、Databricksから生成されたコードの出所を人間が理解しやすくする",
        "is_correct": false
      },
      {
        "text": "このコメントはPythonファイルをDatabricksノートブックとして確立する",
        "is_correct": true
      },
      {
        "text": "このコメントはPythonファイルをDatabricksワークスペースの検索インデックスに追加する",
        "is_correct": false
      }
    ],
    "explanation": "<p>「# Databricks notebook source」というコメントをファイルの最初の行に追加することで、PythonスクリプトをDatabricksノートブックに変換できます。</p><p>このコメントの機能：</p><ul><li><strong>ノートブック認識</strong> - Databricksプラットフォームがこのファイルをノートブックとして認識し、ノートブック機能を有効にします</li><li><strong>対応言語</strong> - Python、SQL、Scala、Rのすべてのスクリプト言語に対応しています</li><li><strong>シングルセルノートブック化</strong> - このコメントがあるファイルは、自動的にシングルセルのノートブックに変換されます</li></ul><p>このコメント追加の効果：</p><ul><li><strong>ノートブック機能の利用可能化</strong> - セル分割、可視化、ノートブック固有の魔法コマンド（%sh、%pyなど）が使用可能になります</li><li><strong>Databricks環境での実行</strong> - DatabricksワークスペースでノートブックとしてGitから同期・実行できるようになります</li><li><strong>統合環境での開発</strong> - ローカルのGitリポジトリとDatabricksワークスペース間での統合開発が可能です</li></ul><p>他のオプションが正しくない理由：</p><ul><li><strong>自動生成ドキュメント</strong> - このコメントはPython docstringではなく、Databricks固有の標識です</li><li><strong>コード出所説明</strong> - これは人間向けの説明ではなく、Databricksシステム向けの指示です</li><li><strong>検索インデックス追加</strong> - 検索インデックスの機能とは無関係です</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "ファイルの最初の行に「# Databricks notebook source」というコメントを追加することで、PythonスクリプトをDatabricksノートブックとして確立し、ノートブック機能を有効にできます。"
  },
  {
    "id": 35,
    "question": "タイムスタンプ列から日付を抽出するために使用する、以下のSparkファンクションのうち、有効でないのはどれですか？",
    "choices": [
      {
        "text": "TO_DATE(ts)",
        "is_correct": false
      },
      {
        "text": "CAST(ts AS DATE)",
        "is_correct": false
      },
      {
        "text": "date_trunc('day', ts)",
        "is_correct": false
      },
      {
        "text": "date_part('day', ts)",
        "is_correct": true
      }
    ],
    "explanation": "<p>タイムスタンプ列から日付を抽出するための有効なSparkファンクション：</p><ul><li><strong>CAST(ts AS DATE)</strong> - タイムスタンプを日付に変換し、時間部分を削除します<br/>例：「2025-10-21 15:42:30」は「2025-10-21」になります</li><li><strong>TO_DATE(ts)</strong> - タイムスタンプから日付部分のみを抽出します<br/>例：「2025-10-21 15:42:30」は「2025-10-21」になります</li><li><strong>date_trunc('day', ts)</strong> - タイムスタンプを指定された単位の開始時刻に切り詰めます<br/>例：ts = 「2025-10-21 15:42:30」の場合、date_trunc('day', ts)は「2025-10-21 00:00:00」を返します</li></ul><p><strong>date_part('day', ts)が有効でない理由：</strong></p><ul><li><strong>数値成分を返す</strong> - date_partは完全な日付型に変換するのではなく、数値成分（例：day = 21）を返します</li><li><strong>用途の違い</strong> - 日付全体を抽出するのではなく、日付の一部（日、月、年など）を取得するための関数です</li><li><strong>戻り値の型</strong> - date_partは日付オブジェクトではなく、整数値を返すため、日付抽出には不適切です</li></ul><p>関数の選択基準：</p><ul><li>完全な日付が必要な場合 → TO_DATE()またはCAST(ts AS DATE)</li><li>タイムスタンプの切り詰めが必要な場合 → date_trunc()</li><li>日付の特定成分（日、月など）が必要な場合 → date_part()</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "date_part('day', ts)は日付の日の部分を数値で抽出する関数であり、完全な日付を返さないため、タイムスタンプから日付を抽出する際には使用できません。"
  },
  {
    "id": 36,
    "question": "データエンジニアが、削除ベクトルが有効になっている大規模なDelta Lakeテーブルで作業しています。Delta Lakeの基礎的な仕組みと更新操作の処理方法を考慮すると、このテーブルディレクトリ内の更新操作がどのように動作するかを最も正確に説明しているのは、以下のどれですか？",
    "choices": [
      {
        "text": "影響を受ける行は削除ベクトルで削除済みとしてフラグ付けされ、更新された行は新しいParquetファイルとして書き込まれる",
        "is_correct": true
      },
      {
        "text": "更新操作は既存のParquetファイルを直接インプレース修正し、新しいファイルを作成しない",
        "is_correct": false
      },
      {
        "text": "削除ベクトルが有効になっている場合、更新操作は完全に無視される",
        "is_correct": false
      },
      {
        "text": "各更新は影響を受けたデータを含むすべてのParquetファイルの完全な書き直しをトリガーする",
        "is_correct": false
      }
    ],
    "explanation": "<p>Delta Lakeテーブルで削除ベクトルが有効になっている場合、更新操作はParquetファイル全体を書き直すか、インプレース修正することはありません。</p><p>削除ベクトルを使用した更新操作の仕組み：</p><ul><li><strong>ソフト削除フラグ</strong> - 修正が必要な行は、データファイルから物理的に削除されるのではなく、削除ベクトル内で削除済みとしてフラグ付けされます</li><li><strong>新しいファイル書き込み</strong> - 更新された行のバージョンは、新しいデータファイルとして書き込まれます</li><li><strong>効率的な処理</strong> - この方法により、コストのかかるファイル書き直しを回避できます</li></ul><p>削除ベクトルの利点：</p><ul><li><strong>パフォーマンス向上</strong> - ファイル全体を再生成する代わりに、メタデータのみを更新するため、大規模データセットでの更新・削除操作が高速化されます</li><li><strong>ACID保証の維持</strong> - トランザクション性とデータ一貫性が保持されます</li><li><strong>ストレージ効率</strong> - 削除済み行はメタデータで追跡されるため、不要なストレージ使用を最小化できます</li></ul><p>削除ベクトルなしの従来の方法との比較：</p><ul><li>従来：ファイル全体の書き直しが必要</li><li>削除ベクトルあり：メタデータ更新と新ファイル追加のみ</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "削除ベクトルが有効なDelta Lakeテーブルの更新操作では、影響を受ける行を削除ベクトルでフラグ付けし、更新データを新しいファイルに書き込むことで、効率的で高速な更新を実現します。"
  },
  {
    "id": 37,
    "question": "データエンジニアがDatabricks REST APIを使用して、エンドポイント「api/2.1/jobs/runs/get」にGETリクエストを送信し、run_idを使用してマルチタスクジョブのrun メタデータを取得しています。\n\nこのAPI呼び出しのレスポンス構造を正しく説明しているのは、以下のどれですか？",
    "choices": [
      {
        "text": "このジョブ実行の各タスクは、一意のorchestration_idを持つ",
        "is_correct": false
      },
      {
        "text": "このジョブ実行の各タスクは、一意のjob_idを持つ",
        "is_correct": false
      },
      {
        "text": "このジョブ実行の各タスクは、一意のrun_idを持つ",
        "is_correct": true
      },
      {
        "text": "このジョブ実行の各タスクは、一意のtask_idを持つ",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricks REST APIの「api/2.1/jobs/runs/get」エンドポイントからのレスポンス構造について：</p><ul><li><strong>各タスクのrun_id</strong> - マルチタスクジョブの各タスクは、一意のrun_idを保有しています</li><li><strong>出力取得用途</strong> - 各タスクのrun_idは、エンドポイント「api/2.1/jobs/runs/get-output」を使用してタスクの出力を取得する際に使用されます</li><li><strong>階層構造</strong> - ジョブレベルのrun_idとは異なり、各タスクは独立したrun_idを持つことで、個別の実行管理が可能になります</li></ul><p>API呼び出しの構造：</p><ul><li><strong>ジョブ実行情報取得</strong> - 「api/2.1/jobs/runs/get」でジョブ全体の実行メタデータを取得</li><li><strong>タスク出力取得</strong> - 各タスクのrun_idを使用して「api/2.1/jobs/runs/get-output」で個別の出力を取得</li></ul><p>他のIDについて：</p><ul><li><strong>job_id</strong> - ジョブ全体に対して一意です。すべてのタスクが同じjob_idを共有します</li><li><strong>task_id</strong> - 各タスクを識別しますが、複数のrun内で再利用される場合があります</li><li><strong>orchestration_id</strong> - これはDatabricks REST APIの標準的なレスポンスフィールドではありません</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "Databricks REST APIの「api/2.1/jobs/runs/get」レスポンスでは、マルチタスクジョブの各タスクが一意のrun_idを持ち、個別の出力取得に使用されます。"
  },
  {
    "id": 38,
    "question": "ある国際学校のデータエンジニアが、以下のPySparkコードを実装しました：\nfrom pyspark.sql.window import Window\nfrom pyspark.sql.functions import avg, col\nwindow_spec = Window.partitionBy(\"student_id\").orderBy(\"exam_date\")\\\n                .rowsBetween(Window.unboundedPreceding, Window.currentRow)\ndf_new = df_student_results.withColumn(\"avg_score\", avg(\"score\").over(window_spec))\n\nこのコードが行うことを正しく説明しているのは、以下のどれですか？",
    "choices": [
      {
        "text": "各学生の全体的な平均スコアを表示する列を追加し、試験日でソートする",
        "is_correct": false
      },
      {
        "text": "各試験の全体的な平均スコアを表示する列を追加し、学生に関わらず表示する",
        "is_correct": false
      },
      {
        "text": "最初に登録した学生から現在の学生までの、各試験の累積平均スコアを表示する列を追加する",
        "is_correct": false
      },
      {
        "text": "各学生の最初の試験から現在の試験までの、累積平均スコアを表示する列を追加する",
        "is_correct": true
      }
    ],
    "explanation": "<p>このPySparkコードはWindow関数を使用して、各学生の累積的な（実行中の）平均スコアを計算します。</p><p><strong>Window.partitionBy(\"student_id\")</strong></p><ul><li>データをstudent_idに基づいてパーティション（グループ）に分割します</li><li>平均計算は各学生の結果セット内で独立して実行されます</li></ul><p><strong>.orderBy(\"exam_date\")</strong></p><ul><li>各学生のパーティション内の行を試験日でソートします（古い順から新しい順へ）</li><li>これは累積計算にとって重要です</li></ul><p><strong>.rowsBetween(Window.unboundedPreceding, Window.currentRow)</strong></p><ul><li>ウィンドウのフレーム（範囲）を定義します</li><li><strong>Window.unboundedPreceding</strong> - フレームは現在の学生のパーティション内の最初の行（最初の試験）から始まります</li><li><strong>Window.currentRow</strong> - フレームは処理中の現在の行（現在の試験）で終わります</li><li>この組み合わせにより、任意の行について、すべての先行行と現在の行が含まれ、効果的に累積データセットが定義されます</li></ul><p><strong>avg(\"score\").over(window_spec)</strong></p><ul><li>avg(\"score\")関数がwindow_specで定義されたウィンドウに適用されます</li><li>ウィンドウはstudent_idでパーティション化され、試験日にわたる累積であるため、新しいavg_score列の結果は、その特定の学生のその特定の試験日までの累積平均スコアになります</li></ul><p>結果の動作：</p><ul><li>最初の試験：その試験の1つのスコアが平均になります</li><li>2番目の試験：最初と2番目の試験の2つのスコアの平均が表示されます</li><li>n番目の試験：1番目からn番目の試験までのすべてのスコアの平均が表示されます</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Window関数のpartitionBy、orderBy、rowsBetweenを組み合わせることで、各学生の最初の試験から現在の試験までの累積平均スコアを計算できます。"
  },
  {
    "id": 39,
    "question": "Unity CatalogでDelta Shareを作成・管理できるユーザーは、以下のどれですか？（2つ選択）",
    "choices": [
      {
        "text": "Metastore管理者",
        "is_correct": true
      },
      {
        "text": "ワークスペース管理者",
        "is_correct": false
      },
      {
        "text": "メタストアに対するCREATE SHARE権限を持つユーザー",
        "is_correct": true
      },
      {
        "text": "アカウント管理者",
        "is_correct": false
      },
      {
        "text": "メタストアに対するMANAGE権限を持つユーザー",
        "is_correct": false
      }
    ],
    "explanation": "<p>Unity CatalogでDelta Shareを作成・管理できるのは、以下の2つのユーザータイプです：</p><ul><li><strong>Metastore管理者</strong> - メタストア全体に対する管理権限を持つため、Delta Shareの作成と管理が可能です</li><li><strong>メタストアに対するCREATE SHARE権限を持つユーザー</strong> - 明示的にCREATE SHARE権限が付与されたユーザーは、Delta Shareを作成・管理できます</li></ul><p>正しくないオプションの理由：</p><ul><li><strong>ワークスペース管理者</strong> - ワークスペースレベルの管理権限はありますが、Unity CatalogのメタストアレベルでのDelta Share管理権限は自動的には付与されません</li><li><strong>アカウント管理者</strong> - アカウントレベルの管理権限がありますが、Delta Shareの作成・管理に必要な具体的な権限ではありません</li><li><strong>メタストアに対するMANAGE権限</strong> - MANAGE権限は権限管理やオブジェクト管理に関連していますが、Delta Shareの作成・管理に必要なCREATE SHARE権限とは異なります</li></ul><p>権限構造：</p><ul><li>Delta Share管理には明示的な権限が必要です</li><li>Metastore管理者またはCREATE SHARE権限が最も直接的です</li><li>他の管理者権限では自動的にこの機能は付与されません</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Unity CatalogでDelta Shareを作成・管理できるのは、Metastore管理者またはメタストアに対するCREATE SHARE権限を明示的に持つユーザーです。"
  },
  {
    "id": 40,
    "question": "データエンジニアが、以下のクエリを使用してコメント付きで新しいテーブルを作成しました：\nCREATE TABLE payments\nCOMMENT \"This table contains sensitive information\"\nAS SELECT * FROM bank_transactions\n\nデータエンジニアがテーブルのコメントを確認できるコマンドは、以下のどれですか？",
    "choices": [
      {
        "text": "SHOW TBLPROPERTIES payments",
        "is_correct": false
      },
      {
        "text": "DESCRIBE TABLE payments",
        "is_correct": false
      },
      {
        "text": "DESCRIBE EXTENDED payments",
        "is_correct": true
      },
      {
        "text": "SHOW COMMENTS payments",
        "is_correct": false
      }
    ],
    "explanation": "<p><strong>DESCRIBE EXTENDED</strong>（または<strong>DESCRIBE TABLE EXTENDED</strong>）コマンドを使用することで、テーブルのコメントを確認できます。</p><p>DESCRIBE EXTENDED の機能：</p><ul><li><strong>テーブルコメント表示</strong> - CREATE TABLEで指定したコメントを表示します</li><li><strong>列コメント表示</strong> - 各列に設定されたコメントも表示されます</li><li><strong>カスタムテーブルプロパティ表示</strong> - その他のメタデータ情報も表示されます</li><li><strong>包括的な情報</strong> - テーブルの詳細なメタデータ情報をすべて確認できます</li></ul><p>他のコマンドとの比較：</p><ul><li><strong>SHOW TBLPROPERTIES</strong> - テーブルプロパティを表示しますが、コメント情報の表示方法が限定的です</li><li><strong>DESCRIBE TABLE</strong> - 列情報を表示しますが、テーブルレベルのコメントは表示されません</li><li><strong>SHOW COMMENTS</strong> - このコマンドはDelta Lake標準SQLに存在しません</li></ul><p>使用例：</p><ul><li><code>DESCRIBE EXTENDED payments</code> を実行すると、テーブルのコメント「This table contains sensitive information」が表示されます</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "DESCRIBE EXTENDED コマンドを使用することで、テーブルのコメント、列のコメント、およびその他のカスタムテーブルプロパティを確認できます。"
  },
  {
    "id": 41,
    "question": "データエンジニアは、外部のPostgreSQLデータベースに保存されたテーブルを、データを移動またはレプリケートせずにDatabricksから直接クエリできるようにアナリストとデータサイエンティストに対応する必要があります。Lakehouse FederationとUnity Catalogを使用して、外部データへのシームレスなアクセスのための外部カタログをセットアップする予定です。\n\nこのプロセスでデータエンジニアが最初に取るべき手順は、以下のどれですか？",
    "choices": [
      {
        "text": "メタストア管理者にメタストアのCREATE SHAREおよびCREATE RECIPIENT権限を付与する",
        "is_correct": false
      },
      {
        "text": "アカウント管理者としてアカウントコンソールに移動し、「Allow Delta Sharing with parties outside your organization」オプションを有効にする",
        "is_correct": false
      },
      {
        "text": "Unity Catalogで接続を構成して、PostgreSQLデータベースに安全に接続し、必要な認証情報とネットワークアクセスを確立する",
        "is_correct": true
      },
      {
        "text": "Unity Catalogで外部ロケーションとストレージ認証情報を構成して、PostgreSQLの基盤となるストレージに安全に接続する",
        "is_correct": false
      }
    ],
    "explanation": "<p>データエンジニアが最初に取るべき手順は、<strong>Unity Catalogで接続を構成してPostgreSQLデータベースに安全に接続し、必要な認証情報とネットワークアクセスを確立する</strong>ことです。</p><p>Lakehouse Federationのセットアップの重要性：</p><ul><li><strong>基礎となる接続</strong> - 外部カタログを作成する前に、Databricksが外部PostgreSQLデータベースに認証済みアクセスを確立することが必須です</li><li><strong>セキュアな認証</strong> - 接続は認証情報（ユーザー名、パスワード、またはAPIキー）をセキュアに管理する必要があります</li><li><strong>ネットワークアクセス</strong> - Databricksワークスペースから外部データベースへのネットワーク接続が適切に構成されている必要があります</li><li><strong>前提条件</strong> - この接続なしに、外部カタログ、スキーマ、テーブルの作成はできません</li></ul><p>プロセスの順序：</p><ol><li>Unity Catalogで接続を構成（最初のステップ）</li><li>接続を検証してネットワークアクセスを確認</li><li>その後、外部カタログを作成</li><li>外部テーブルを定義</li><li>権限を設定</li></ol><p>他のオプションが適切でない理由：</p><ul><li><strong>Delta Sharing権限</strong> - これはデータ共有用であり、Lakehouse Federationでは不要です</li><li><strong>Delta Sharing外部組織設定</strong> - この設定はLakehouse Federationに関連しません</li><li><strong>外部ロケーション</strong> - PostgreSQLはオブジェクトストレージではなく、リレーショナルデータベースであるため、外部ロケーション構成は該当しません</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Lakehouse FederationでPostgreSQLデータベースをDatabricksと統合する最初のステップは、Unity Catalogでセキュアな接続を構成し、認証情報とネットワークアクセスを確立することです。"
  },
  {
    "id": 42,
    "question": "ジュニアデータエンジニアが%sh魔法コマンドを使用してレガシーコードを実行しています。シニアデータエンジニアは、コードをリファクタリングするよう推奨しています。\n\nデータエンジニアが%sh魔法コマンドの使用を避ける必要がある理由として、以下のどれが説明できますか？",
    "choices": [
      {
        "text": "リストされたすべての理由が、%shを避ける必要がある理由を説明している",
        "is_correct": false
      },
      {
        "text": "%shはストレージにアクセスして出力を保持できない",
        "is_correct": false
      },
      {
        "text": "%shはシェルコードをローカルドライバーマシンのみで実行するため、パフォーマンスのオーバーヘッドが大きくなる",
        "is_correct": true
      },
      {
        "text": "%shはPythonインタープリターを再起動する。これにより、ノートブックで宣言されたすべての変数がクリアされる",
        "is_correct": false
      }
    ],
    "explanation": "<p>%sh魔法コマンドを避ける必要がある主な理由は、<strong>%shがシェルコードをローカルドライバーマシンのみで実行し、ワーカーノードで実行されないため、パフォーマンスのオーバーヘッドが発生する</strong>ことです。</p><p>%sh魔法コマンドの特性：</p><ul><li><strong>ドライバー実行のみ</strong> - %shコマンドはApache Sparkドライバーのみで実行され、ワーカーノードでは実行されません</li><li><strong>スケーラビリティの欠如</strong> - 分散処理ができないため、大規模データセット処理に適していません</li><li><strong>リソース集中</strong> - すべての処理がドライバーに集中するため、ボトルネックが生じます</li><li><strong>パフォーマンス低下</strong> - クラスタの並列処理能力が活用されないため、実行時間が増加します</li></ul><p>%sh使用時の制限事項：</p><ul><li><strong>分散処理不可</strong> - シェルコマンドはクラスタ全体で並列実行できません</li><li><strong>大規模データ処理に非効率</strong> - ドライバーの計算リソースが限定的です</li><li><strong>スケーリングの問題</strong> - データセットサイズの増加に対応できません</li></ul><p>他のオプションについて：</p><ul><li><strong>ストレージアクセス</strong> - %shでもストレージにアクセスしてファイルを保持できます</li><li><strong>Pythonインタープリター再起動</strong> - %shはPythonインタープリターを再起動しません。ノートブック変数は保持されます</li></ul><p>推奨事項：</p><ul><li>PySpark、Scala、SQLなどの分散処理対応言語を使用</li><li>必要な場合のみ%shを使用し、軽量なユーティリティコマンドに限定</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "%sh魔法コマンドはApache Sparkドライバーのみで実行されるため、分散処理ができず、大規模データセット処理時にパフォーマンスのボトルネックが生じます。"
  },
  {
    "id": 43,
    "question": "データエンジニアリングチームがLakehouseで作成するすべての新しいDelta Lakeテーブルに対してLOCATIONキーワードを使用しています。\n\nこのケースでLOCATIONキーワードを使用する目的を説明しているのは、以下のどれですか？",
    "choices": [
      {
        "text": "LOCATIONキーワードは、作成されたDelta Lakeテーブルを外部テーブルとして構成するために使用される",
        "is_correct": true
      },
      {
        "text": "LOCATIONキーワードは、作成されたDelta Lakeテーブルを外部データベースで定義するために使用される",
        "is_correct": false
      },
      {
        "text": "LOCATIONキーワードは、作成されたDelta Lakeテーブルをマネージドテーブルとして構成するために使用される",
        "is_correct": false
      },
      {
        "text": "LOCATIONキーワードは、作成されたDelta Lakeテーブルのデフォルトスキーマとチェックポイントロケーションを設定するために使用される",
        "is_correct": false
      }
    ],
    "explanation": "<p>LOCATIONキーワードは、Delta Lakeテーブルをマネージドテーブルから外部テーブル（アンマネージドテーブル）に変更するために使用されます。</p><p><strong>外部テーブル（外部テーブル）の特性：</strong></p><ul><li><strong>LOCATION句の使用</strong> - LOCATIONキーワードを使用してデータの外部ストレージパスを指定します</li><li><strong>データ所有権</strong> - データはDatabricksの制御下にではなく、外部のストレージロケーションに保存されます</li><li><strong>メタデータのみ管理</strong> - テーブルのメタデータのみがDatabricksで管理されます</li></ul><p><strong>マネージドテーブルとの比較：</strong></p><ul><li><strong>マネージドテーブル</strong> - LOCATIONを指定しない場合、データはDatabricksの管理下にあるデフォルトロケーション（通常はウェアハウスディレクトリ）に保存されます</li><li><strong>外部テーブル</strong> - LOCATIONを指定した場合、データは指定されたカスタムパスに保存されます</li></ul><p><strong>LOCATIONキーワード使用例：</strong></p><ul><li><code>CREATE TABLE my_table LOCATION '/mnt/external/path'</code> - このコマンドは外部テーブルを作成します</li><li>データは指定されたロケーション「/mnt/external/path」に保存されます</li></ul><p><strong>利点：</strong></p><ul><li>既存のデータソースと統合</li><li>異なるワークスペース間でのデータ共有</li><li>クラウドストレージの柔軟な利用</li></ul><p>他のオプションが正しくない理由：</p><ul><li>外部データベース定義 - LOCATIONはクラウドストレージパスを指定するもので、データベースではありません</li><li>マネージドテーブル - LOCATIONを指定すると外部テーブルになります</li><li>スキーマとチェックポイント - LOCATIONはデータストレージパスのみを指定します</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "LOCATIONキーワードはDelta Lakeテーブルを外部テーブルとして構成し、データを外部ストレージパスに保存させることで、Databricksの管理下から独立したデータ管理を実現します。"
  },
  {
    "id": 44,
    "question": "グローバルバンクのデータエンジニアが、customer_id、name、account_number、credit_cardの列を持つDelta Lakeテーブル「customer_accounts」を管理しています。credit_card列にマスクを適用し、不正検出部門のアナリストのみが実際の値を表示できるようにしたいと考えています。これを実現するために、以下のユーザー定義関数を実装しました：\nCREATE FUNCTION card_mask(credit_card STRING)\nRETURN CASE WHEN is_account_group_member('FraudDetectionDept') THEN credit_card\n        ELSE '****-****-****-****' END;\n\nこの関数をテーブルの列マスクとして適用するために、データエンジニアが使用できるコマンドはどれですか？",
    "choices": [
      {
        "text": "SET MASK card_mask ON TABLE customer_accounts TO COLUMN credit_card;",
        "is_correct": false
      },
      {
        "text": "ALTER TABLE customer_accounts ALTER COLUMN credit_card SET MASK card_mask;",
        "is_correct": true
      },
      {
        "text": "ALTER TABLE customer_accounts SET MASK card_mask ON (credit_card);",
        "is_correct": false
      },
      {
        "text": "ALTER TABLE customer_accounts SET MASK card_mask;",
        "is_correct": false
      }
    ],
    "explanation": "<p>クレジットカード番号を不正検出部門のアナリストのみが表示でき、他のユーザーにはマスクされた値が表示されるようにするために、データエンジニアはマスク関数を特定の列に直接適用する必要があります。</p><p><strong>正しいコマンド：</strong></p><ul><li><code>ALTER TABLE customer_accounts ALTER COLUMN credit_card SET MASK card_mask;</code></li></ul><p>このコマンドは、既存のcredit_card列を修正し、card_mask関数を関連付けます。</p><p><strong>マスク関数の動作：</strong></p><ul><li><strong>条件付きアクセス制御</strong> - card_mask関数は、ユーザーのグループメンバーシップに基づいてデータを表示またはマスクします</li><li><strong>グループベース認可</strong> - <code>is_account_group_member('FraudDetectionDept')</code>がtrueの場合、実際のクレジットカード番号が表示されます</li><li><strong>デフォルトマスク</strong> - 不正検出部門に属していないユーザーには、「****-****-****-****」という形式でマスクされた値が表示されます</li></ul><p><strong>列マスクの特性：</strong></p><ul><li><strong>動的マスキング</strong> - ユーザーのアイデンティティに基づいて、リアルタイムにデータが表示またはマスクされます</li><li><strong>セキュリティの透明性</strong> - マスクされたデータはユーザーからはわからないため、機密データ保護が実現されます</li><li><strong>列レベルのセキュリティ</strong> - 特定の列に対するきめ細かいアクセス制御が可能です</li></ul><p><strong>他のオプションが正しくない理由：</strong></p><ul><li>「SET MASK ON TABLE」 - このSQLシンタックスは有効ではありません</li><li>「SET MASK ON (column)」 - 括弧の形式は正しくありません</li><li>「SET MASK」のみ - 対象となる列を指定していません</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "ALTER TABLE customer_accounts ALTER COLUMN credit_card SET MASK card_maskコマンドを使用することで、ユーザーのグループメンバーシップに基づいて条件付きでクレジットカード列をマスクできます。"
  },
  {
    "id": 45,
    "question": "データエンジニアが既存のDatabricksジョブを持っており、Databricks Asset Bundlesを使用してそれを管理したいと考えています。ジョブのYAML定義を既に生成し、参照されたアーティファクトをダウンロードしました。しかし、バンドルのYAMLの更新が新しいジョブを作成するのではなく、既存のジョブを修正することを確認したいと考えています。\n\nデータエンジニアがこれを実現できるコマンドはどれですか？",
    "choices": [
      {
        "text": "databricks bundle deployment bind <bundle_job> <remote-job-id>",
        "is_correct": true
      },
      {
        "text": "databricks bundle deployment link <bundle_job> <remote-job-id>",
        "is_correct": false
      },
      {
        "text": "databricks bundle deployment match <bundle_job> <remote-job-id>",
        "is_correct": false
      },
      {
        "text": "databricks bundle deployment mirror <bundle_job> <remote-job-id>",
        "is_correct": false
      }
    ],
    "explanation": "<p>正しいコマンドは<code>databricks bundle deployment bind &lt;bundle_job&gt; &lt;remote-job-id&gt;</code>です。</p><p><strong>bindコマンドの機能：</strong></p><ul><li><strong>既存ジョブのリンク</strong> - リモートの既存ジョブをDatabricks Asset Bundle内の定義されたリソースにリンクします</li><li><strong>一対一マッピング</strong> - バンドルの対象リソースと既存のリモートジョブを相互に関連付けます</li><li><strong>更新による修正</strong> - バンドルのYAML定義への更新が、新しいジョブの作成ではなく、リンクされたジョブを修正します</li></ul><p><strong>bindコマンドを使用する手順：</strong></p><ul><li>既存ジョブのjob_idを確認する</li><li><code>databricks bundle deployment bind &lt;bundle_job_name&gt; &lt;job_id&gt;</code>を実行する</li><li>バンドルのYAML定義に変更を加える</li><li>デプロイするとリンクされたジョブが更新される</li></ul><p><strong>bindの利点：</strong></p><ul><li><strong>既存リソース保護</strong> - 誤ってジョブを複製することを防止</li><li><strong>構成管理</strong> - YAML定義を通じた統一的なジョブ管理</li><li><strong>バージョン管理</strong> - Asset Bundlesとバージョン管理ツール（Git等）の統合</li></ul><p><strong>他のオプションが正しくない理由：</strong></p><ul><li><strong>link</strong> - Databricks CLIの標準コマンドではありません</li><li><strong>match</strong> - バンドル管理用の標準コマンドではありません</li><li><strong>mirror</strong> - バンドル管理用の標準コマンドではありません</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "databricks bundle deployment bindコマンドは、既存のリモートジョブをDatabricks Asset Bundle内のリソースにリンクし、YAML更新時に新しいジョブを作成するのではなく既存ジョブを修正することを確保します。"
  },
  {
    "id": 46,
    "question": "Spark UIのSQL/DataFrameタブを正しく説明しているのは、以下のどれですか？",
    "choices": [
      {
        "text": "提出されたすべてのSparkジョブのリストを提供し、開始時刻、終了時刻、ステータス、関連するステージ、タスクメトリクスについての詳細情報を表示し、ユーザーが個別のタスクパフォーマンスにドリルダウンできるようにする",
        "is_correct": false
      },
      {
        "text": "メモリとディスク上でキャッシュまたは永続化されたすべてのRDDとDataFrameを表示し、サイズ、ストレージレベル、ブロックロケーションを示し、メモリ使用量の監視とキャッシング戦略の最適化を支援する",
        "is_correct": false
      },
      {
        "text": "すべてのステージの詳細ビューを表示し、依存関係、タスク実行時間、シャッフル読み取り/書き込みメトリクス、ワーカーノード間のタスク分散を示し、ステージレベルのパフォーマンスに関する洞察を提供する",
        "is_correct": false
      },
      {
        "text": "実行されたオペレーション（クエリプラン、実行メトリクス、物理プラン、論理プラン、DAG可視化、ステージとタスク内訳、パフォーマンス統計など）を表示し、クエリの監視とデバッグを支援する",
        "is_correct": true
      }
    ],
    "explanation": "<p>Spark UIの<strong>SQL/DataFrameタブ</strong>は、Spark SQLとDataFrameオペレーションに特化した詳細な情報を提供します。</p><p><strong>SQL/DataFrameタブの機能：</strong></p><ul><li><strong>クエリプラン表示</strong> - 論理プランと物理プランの両方を表示し、クエリ最適化の過程を理解できます</li><li><strong>DAG可視化</strong> - 操作の有向非巡回グラフを可視化し、 операション間の依存関係を明示します</li><li><strong>実行メトリクス</strong> - ステージごとの実行時間、入出力データ量などの詳細なメトリクスを提供します</li><li><strong>ステージ・タスク内訳</strong> - 各ステージとタスクの実行詳細を表示し、ボトルネック分析が可能です</li><li><strong>パフォーマンス統計</strong> - クエリ全体のパフォーマンス統計を提供し、最適化の指針となります</li></ul><p><strong>Spark UIの他のタブとの比較：</strong></p><ul><li><strong>Jobs（ジョブ）タブ</strong> - 提出されたSparkジョブのリスト、開始終了時刻、ステータス、関連ステージ、タスクメトリクスを表示します</li><li><strong>Stages（ステージ）タブ</strong> - ステージの依存関係、タスク実行時間、シャッフル読み取り/書き込みメトリクス、ワーカーノード分散を表示します</li><li><strong>Storage（ストレージ）タブ</strong> - キャッシュまたは永続化されたRDDとDataFrameを表示し、サイズ、ストレージレベル、ブロックロケーションを示します</li></ul><p><strong>SQL/DataFrameタブの利用シーン：</strong></p><ul><li>複雑なSQLクエリのデバッグ</li><li>DataFrame操作の最適化</li><li>クエリプランの理解と改善</li><li>クエリパフォーマンス分析</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "Spark UIのSQL/DataFrameタブは、クエリプラン、DAG可視化、実行メトリクス、パフォーマンス統計を表示し、Spark SQLやDataFrame操作の監視とデバッグに特化しています。"
  },
  {
    "id": 47,
    "question": "データエンジニアがクラウドストレージからJSONファイルの大量インクリメンタルインジェストを行うため、以下のAuto Loaderストリームを実装しました：\n(spark.readStream.format(\"cloudFiles\")\n        .option(\"cloudFiles.format\", \"json\")\n        ____________________________\n        .load(\"/path/to/files\")\n)\n\nデフォルトでは、Auto Loaderは最初の50 GBまたは1000ファイルをサンプリングしてスキーマを推測します。しかし、データエンジニアは後続の実行での再サンプリングを回避し、スキーマ推測のコストを削減したいと同時に、時間経過に伴うスキーマ変更を追跡し続けたいと考えています。\n\n指定された要件を満たすために、空白を正しく埋めるオプションはどれですか？",
    "choices": [
      {
        "text": ".option(\"cloudFiles.schemaEvolutionMode\", \"addNewColumns\")",
        "is_correct": false
      },
      {
        "text": ".option(\"mergeSchema\", true)",
        "is_correct": false
      },
      {
        "text": ".option(\"checkpointLocation\", \"/path/to/checkpoint\")",
        "is_correct": false
      },
      {
        "text": ".option(\"cloudFiles.schemaLocation\", \"/path/to/checkpoint\")",
        "is_correct": true
      }
    ],
    "explanation": "<p>空白を埋める正しいオプションは<code>.option(\"cloudFiles.schemaLocation\", \"/path/to/checkpoint\")</code>です。</p><p><strong>cloudFiles.schemaLocationオプションの機能：</strong></p><ul><li><strong>スキーマ保存</strong> - Auto Loaderが推測したスキーマを指定されたロケーションに保存します</li><li><strong>再サンプリング回避</strong> - 後続の実行では、保存されたスキーマを再利用するため、ファイルの再サンプリングが不要になります</li><li><strong>コスト削減</strong> - スキーマ推測処理が省略されるため、ストレージI/Oとコンピュート費用が大幅に削減されます</li><li><strong>スキーマ追跡</strong> - 保存されたスキーマを参照点として、新しいファイルの構造変更を検出できます</li></ul><p><strong>使用例とメリット：</strong></p><ul><li>初回実行：ファイルをサンプリングしてスキーマを推測し、ロケーションに保存</li><li>後続実行：保存されたスキーマを読み込み、新しいファイルに適用</li><li>スキーマ進化：新しいカラムが検出された場合、自動的にスキーマが更新されます</li></ul><p><strong>他のオプションが不適切な理由：</strong></p><ul><li><strong>schemaEvolutionMode</strong> - スキーマ変更の処理方法を指定しますが、再サンプリングを回避しません</li><li><strong>mergeSchema</strong> - Parquetファイルのスキーママージ用で、Auto Loaderのスキーマ推測を最適化しません</li><li><strong>checkpointLocation</strong> - ストリーミングの進捗状態を保存するもので、スキーマ推測とは別の機能です</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "cloudFiles.schemaLocationオプションを使用することで、Auto Loaderが推測したスキーマを保存し、後続の実行での再サンプリングを回避しながら、スキーマ変更を追跡できます。"
  },
  {
    "id": 48,
    "question": "データエンジニアはUnity Catalogでブロンズ層のDelta Lakeテーブルを管理しています。データ整合性の維持とガバナンスポリシーの強制として、UPDATEおよびDELETE操作を無効にしてテーブルの変更を制限したいと考えています。\n\nこの制限を強制するためにデータエンジニアが使用できるコマンドはどれですか？",
    "choices": [
      {
        "text": "ALTER TABLE bronze_raw SET TBLPROPERTIES ('delta.preventModification' = true);",
        "is_correct": false
      },
      {
        "text": "ALTER TABLE bronze_raw SET TBLPROPERTIES ('delta.disableUpdate' = true, 'delta.disableDelete' = true);",
        "is_correct": false
      },
      {
        "text": "ALTER TABLE bronze_raw SET TBLPROPERTIES ('delta.appendOnly' = true);",
        "is_correct": true
      },
      {
        "text": "ALTER TABLE bronze_raw SET TBLPROPERTIES ('delta.disableUpdate' = true);\nALTER TABLE bronze_raw SET TBLPROPERTIES ('delta.disableDelete' = true);",
        "is_correct": false
      }
    ],
    "explanation": "<p>ブロンズDelta Lakeテーブルに対するUPDATEおよびDELETE操作を無効にするには、テーブルを追記専用モードに設定する必要があります。</p><p><strong>正しいコマンド：</strong></p><ul><li><code>ALTER TABLE bronze_raw SET TBLPROPERTIES ('delta.appendOnly' = true);</code></li></ul><p><strong>delta.appendOnlyプロパティの機能：</strong></p><ul><li><strong>追記のみモード</strong> - テーブルを追記専用に設定し、INSERT操作のみを許可します</li><li><strong>UPDATE禁止</strong> - 既存データの更新操作を自動的に禁止します</li><li><strong>DELETE禁止</strong> - 既存データの削除操作を自動的に禁止します</li><li><strong>データ不変性</strong> - 一度書き込まれたデータは変更できず、ガバナンス要件を満たします</li></ul><p><strong>他のプロパティが有効でない理由：</strong></p><ul><li><strong>delta.preventModification</strong> - このプロパティはDelta Lakeの公式な認識プロパティではありません</li><li><strong>delta.disableUpdate / delta.disableDelete</strong> - これらは個別の公式プロパティではなく、delta.appendOnlyで一括制御します</li></ul><p><strong>appendOnly設定の利点：</strong></p><ul><li>データの完全性保証</li><li>監査要件への対応</li><li>ガバナンスポリシーの強制</li><li>ブロンズ層の不変性保証</li></ul><p><strong>使用シーン：</strong></p><ul><li>ブロンズ層テーブル（イミュータブル）</li><li>監査ログテーブル</li><li>規制要件による変更禁止テーブル</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "delta.appendOnly = trueプロパティを設定することで、Delta Lakeテーブルを追記専用モードに設定し、UPDATEおよびDELETE操作を自動的に禁止してデータガバナンスを強制できます。"
  },
  {
    "id": 49,
    "question": "データエンジニアが以下のAuto Loaderストリームを使用して、大規模なJSONファイルのインクリメンタルインジェストを行っています。これらのファイルは長いマイクロバッチ処理時間とメモリ問題を引き起こしています：\ndf = (spark.readStream\n  .format(\"cloudFiles\")\n  .option(\"cloudFiles.format\", \"json\")\n  _________________________________\n  .load(\"s3://project/source/\"))\n\nデータの一部をマイクロバッチごとに処理し、安定性を向上させ、バッチ処理時間を予測可能に保ちたいと考えています。\n\nマイクロバッチごとに128 MBのデータのみを処理するために、空白を正しく埋めるオプションはどれですか？",
    "choices": [
      {
        "text": ".option('batchSize', '128mb')",
        "is_correct": false
      },
      {
        "text": ".option('triggerInterval', '128mb')",
        "is_correct": false
      },
      {
        "text": ".option('cloudFiles.maxBytesPerTrigger', '128mb')",
        "is_correct": true
      },
      {
        "text": ".option('cloudFiles.maxDataPerTrigger', '128mb')",
        "is_correct": false
      }
    ],
    "explanation": "<p>Auto Loaderでマイクロバッチごとに処理するデータ量を制御するには、<code>cloudFiles.maxBytesPerTrigger</code>オプションを使用します。</p><p><strong>cloudFiles.maxBytesPerTriggerオプションの機能：</strong></p><ul><li><strong>マイクロバッチサイズ制御</strong> - 各トリガーで処理する最大データ量をバイト単位で指定します</li><li><strong>メモリ安定性向上</strong> - 処理するデータ量を制限することで、メモリ問題を軽減します</li><li><strong>バッチ時間の予測可能性</strong> - 各マイクロバッチが一貫したサイズであるため、処理時間が安定化します</li><li><strong>大規模ファイルの段階的処理</strong> - 大きなJSONファイルを複数のマイクロバッチに分割して処理できます</li></ul><p><strong>使用例：</strong></p><ul><li><code>.option('cloudFiles.maxBytesPerTrigger', '128mb')</code> - 各トリガーで最大128 MBを処理</li><li><code>.option('cloudFiles.maxBytesPerTrigger', '256mb')</code> - 各トリガーで最大256 MBを処理</li></ul><p><strong>利点：</strong></p><ul><li>リソース効率の向上</li><li>メモリ使用量の予測可能性</li><li>ストリーミングジョブの安定性向上</li><li>大規模データセットの効率的な処理</li></ul><p><strong>他のオプションが正しくない理由：</strong></p><ul><li><strong>batchSize</strong> - Auto Loader認識オプションではありません</li><li><strong>triggerInterval</strong> - 時間間隔を指定するもので、データサイズではありません</li><li><strong>cloudFiles.maxDataPerTrigger</strong> - 正しいプロパティ名はmaxBytesPerTriggerです</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "cloudFiles.maxBytesPerTriggerオプションを128mbに設定することで、Auto Loaderが各マイクロバッチで処理するデータ量を制限し、メモリ安定性とバッチ処理時間の予測可能性を向上させます。"
  },
  {
    "id": 50,
    "question": "コールセンターのデータエンジニアがチケット量とステータス変更を追跡するためのSQLアラートを実装する必要があります。ticketsテーブルの複数の列に基づいてアラートを設定したいと考えています。アラートは以下の両方の条件が満たされた場合にトリガーされる必要があります：\n\n新規チケットの数が200を超える\n処理中のチケットの数が150を超える\n\nこのアラートロジックを正しく実装しているSQLクエリはどれですか？",
    "choices": [
      {
        "text": "SELECT\n  SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) AS new_tickets,\n  SUM(CASE WHEN status = 'in_progress' THEN 1 ELSE 0 END) AS under_processing\nFROM tickets\nWHERE new_tickets > 200\nAND under_processing > 150",
        "is_correct": false
      },
      {
        "text": "SELECT new_tickets, under_processing\nFROM (\n  SELECT\n    SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) AS new_tickets,\n    SUM(CASE WHEN status = 'in_progress' THEN 1 ELSE 0 END) AS under_processing\n  FROM tickets\n) statistics\nWHERE new_tickets > 200\nAND under_processing > 150",
        "is_correct": false
      },
      {
        "text": "SELECT CASE\n  WHEN new_tickets > 200 AND under_processing > 150 THEN 1\n    ELSE 0\n  END\nFROM (\n  SELECT\n    SUM(CASE WHEN status = \"new\" THEN 1 ELSE 0 END) AS new_tickets,\n    SUM(CASE WHEN status = \"in_progress\" THEN 1 ELSE 0 END) AS under_processing\n  FROM tickets\n) statistics",
        "is_correct": true
      },
      {
        "text": "SELECT new_tickets + under_processing\nFROM (\n  SELECT\n    SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) AS new_tickets,\n    SUM(CASE WHEN status = 'in_progress' THEN 1 ELSE 0 END) AS under_processing\n  FROM tickets\n) statistics\nWHERE new_tickets + under_processing > 350",
        "is_correct": false
      }
    ],
    "explanation": "<p>このクエリはアラートロジックを正しく実装しており、両方の条件が満たされた場合にトリガーされます。</p><p><strong>正しいクエリの構造：</strong></p><ul><li><strong>サブクエリによる集計</strong> - ticketsテーブルから新規チケット数と処理中チケット数をそれぞれ集計します</li><li><strong>CASE WHEN式による条件結合</strong> - 複数の条件を1つのアラートフィールドに統合します</li><li><strong>論理演算子AND</strong> - 両方の条件が同時に満たされる場合にのみアラートをトリガーします</li></ul><p><strong>Databricksアラートの重要な特性：</strong></p><ul><li><strong>単一フィールド評価</strong> - Databricksのアラートは1つのフィールドのみを評価できます</li><li><strong>複数条件の統合</strong> - CASE WHEN式を使用して、複数の条件を1つのフィールドに結合する必要があります</li><li><strong>数値出力</strong> - アラート評価用に数値（0または1）を返します</li></ul><p><strong>他のオプションが正しくない理由：</strong></p><ul><li><strong>1番目のオプション</strong> - WHERE句で集計結果の列名を直接参照しており、SQLシンタックスエラーです。WHERE句は集計後のフィルタリングには使用できません</li><li><strong>2番目のオプション</strong> - 複数の列を返すため、アラート条件が明確でなく、Databricksアラートの単一フィールド要件を満たしません</li><li><strong>4番目のオプション</strong> - 両方の条件を「AND」で結合せず、合計値で比較するため、ロジックが異なります。新規チケット150、処理中150の場合、合計300で条件を満たしませんが、本来は満たすべきではない場合です</li></ul><p><strong>アラートとしての出力：</strong></p><ul><li>両方の条件が満たされた場合：1を返す（アラート発火）</li><li>条件が満たされない場合：0を返す（アラート非発火）</li></ul>",
    "tags": "モニタリングとアラート",
    "summary": "Databricksアラートは単一フィールドのみ評価可能なため、CASE WHEN式で複数の条件をAND演算子で統合し、1つのアラートフィールドに変換する必要があります。"
  },
  {
    "id": 51,
    "question": "以下のうち、有効でないDelta Lakeファイル統計情報はどれですか？",
    "choices": [
      {
        "text": "追加されたデータファイル内のレコードの総数",
        "is_correct": false
      },
      {
        "text": "最初の32列の各列における最小値と最大値",
        "is_correct": false
      },
      {
        "text": "最初の32列の各列における平均値",
        "is_correct": true
      },
      {
        "text": "最初の32列の各列におけるnull値の数",
        "is_correct": false
      }
    ],
    "explanation": "<p>Delta Lakeは、テーブルに追加された各データファイルについて、トランザクションログに統計情報を自動的にキャプチャします。これらの統計情報はファイルごとに以下を示します：</p><ul><li><strong>レコード総数</strong> - ファイル内のレコード総数</li><li><strong>最小値</strong> - テーブルの最初の32列の各列における最小値</li><li><strong>最大値</strong> - テーブルの最初の32列の各列における最大値</li><li><strong>null値カウント</strong> - テーブルの最初の32列の各列におけるnull値の数</li></ul><p><strong>Delta Lakeファイル統計情報に含まれないもの：</strong></p><ul><li><strong>平均値</strong> - 列の平均値はDelta Lake統計情報の一部ではありません</li></ul><p><strong>統計情報の32列制限の理由：</strong></p><ul><li>統計情報のストレージオーバーヘッドを制限するため</li><li>トランザクションログのサイズを管理するため</li><li>クエリ最適化パフォーマンスのバランスを取るため</li></ul><p><strong>統計情報の用途：</strong></p><ul><li>述語プッシュダウンによるクエリ最適化</li><li>不要なファイルのスキップ</li><li>クエリプランの改善</li><li>パフォーマンス向上</li></ul><p><strong>平均値が統計情報に含まれない理由：</strong></p><ul><li>クエリ最適化に平均値は通常必要ではありません</li><li>最小値と最大値で十分なため、ストレージを節約できます</li><li>計算コスト削減</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "Delta Lakeのファイル統計情報には、レコード総数、最小値、最大値、null値カウントが含まれますが、平均値は統計情報には含まれません。"
  },
  {
    "id": 52,
    "question": "既存のクラスタの権限を変更するために、データエンジニアが必要とする最小限の権限はどれですか？",
    "choices": [
      {
        "text": "クラスタ作成許可 + クラスタに対する「Can Manage」権限",
        "is_correct": false
      },
      {
        "text": "クラスタに対する「Can Manage」権限",
        "is_correct": true
      },
      {
        "text": "クラスタに対する「Can Restart」権限",
        "is_correct": false
      },
      {
        "text": "クラスタ作成許可 + クラスタに対する「Can Restart」権限",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricksではクラスタ権限は2つのタイプに分類されます。</p><p><strong>クラスタ権限の種類：</strong></p><ul><li><strong>クラスタ作成権限（Allow cluster creation）</strong> - クラスタを新規作成できる能力を制御する全体的なエンタイトルメント</li><li><strong>クラスタレベル権限</strong> - 特定のクラスタの使用と変更に対する能力を制御する個別の権限</li></ul><p><strong>クラスタレベル権限の4つのレベル：</strong></p><ul><li><strong>No Permissions</strong> - クラスタへのアクセスなし</li><li><strong>Can Attach To</strong> - クラスタにアタッチして計算ジョブを実行可能</li><li><strong>Can Restart</strong> - クラスタの再起動が可能</li><li><strong>Can Manage</strong> - クラスタの完全な管理が可能（権限変更を含む）</li></ul><p><strong>権限変更に必要な最小権限：</strong></p><ul><li><strong>Can Manage権限が必須</strong> - クラスタの権限を変更するには、そのクラスタに対する「Can Manage」権限が必要です</li><li>クラスタ作成権限は不要 - 既存クラスタの権限変更には、新規作成権限は不要です</li></ul><p><strong>権限変更のシナリオ：</strong></p><ul><li>クラスタの権限を他のユーザーに付与する場合</li><li>既存の権限レベルを変更する場合</li><li>ユーザーを追加または削除する場合</li></ul><p><strong>他のオプションが正しくない理由：</strong></p><ul><li><strong>クラスタ作成許可不要</strong> - 新しいクラスタを作成するわけではないため</li><li><strong>Can Restart不十分</strong> - クラスタの再起動のみ可能で、権限の変更は不可</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "既存クラスタの権限を変更するには、そのクラスタに対する「Can Manage」権限のみが必要です。クラスタ作成権限は不要です。"
  },
  {
    "id": 53,
    "question": "データエンジニアがDatabricks REST APIを使用してジョブ「process-sales」を作成したいと考えていました。\n\nしかし、誤ってエンドポイント「api/2.2/jobs/create」に対して2つのPOSTリクエストを送信してしまいました。\n\nこれらのリクエストの結果を説明するのはどれですか？",
    "choices": [
      {
        "text": "ワークスペースには最初のジョブのみが作成されます。2番目のリクエストは、「process-sales」という名前のジョブが既に存在することを示すエラーで失敗します",
        "is_correct": false
      },
      {
        "text": "ワークスペースに2つのジョブが作成されますが、2番目のジョブは「process-sales (1)」に名前変更されます",
        "is_correct": false
      },
      {
        "text": "「process-sales」という名前の2つのジョブがワークスペースに作成されますが、異なるjob_idを持ちます",
        "is_correct": true
      },
      {
        "text": "2番目のジョブが最初のリクエストで作成された前のジョブを上書きします",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricks REST APIの「api/2.2/jobs/create」エンドポイントに同じジョブ定義で複数のPOSTリクエストを送信した場合の動作について：</p><p><strong>リクエストの結果：</strong></p><ul><li><strong>複数ジョブの作成</strong> - 各リクエストごとに新しいジョブが作成されます</li><li><strong>独立した存在</strong> - 各ジョブは独立したエンティティであり、互いに影響しません</li><li><strong>同じ名前で複数作成可能</strong> - Databricksでは同じ名前を持つ複数のジョブの作成が許可されています</li><li><strong>一意のjob_id</strong> - 各ジョブは一意のjob_idを自動的に割り当てられます</li></ul><p><strong>ジョブの一意性について：</strong></p><ul><li>ジョブ名は一意である必要はありません</li><li>job_idがジョブの一意の識別子です</li><li>同じ名前で複数のジョブを作成できます</li></ul><p><strong>具体例：</strong></p><ul><li>1番目のPOSTリクエスト → 「process-sales」ジョブ作成（job_id: 123）</li><li>2番目のPOSTリクエスト → 「process-sales」ジョブ作成（job_id: 124）</li><li>結果：同じ名前で異なるjob_idを持つ2つのジョブ</li></ul><p><strong>他のオプションが正しくない理由：</strong></p><ul><li><strong>エラーで失敗</strong> - 同じ名前のジョブ作成はエラーではなく、許可されています</li><li><strong>自動名前変更</strong> - Databricksは名前を自動変更しません</li><li><strong>上書き</strong> - 2番目のリクエストは既存のジョブを上書きせず、新しいジョブを作成します</li></ul><p><strong>job_idでの操作：</strong></p><ul><li>ジョブの操作や削除にはjob_idを使用します</li><li>job_idを指定することで、正確なジョブを識別できます</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "Databricks REST APIの「api/2.2/jobs/create」エンドポイントに複数のPOSTリクエストを送信すると、同じ名前でも異なるjob_idを持つ複数のジョブが作成されます。"
  },
  {
    "id": 54,
    "question": "データエンジニアリングチームは、毎晩ソースシステムから受け取った新しいデータで完全に上書きされるDelta Lakeテーブル「daily_activities」を持っています。\n\n監査目的で、チームはDelta Lake Time Travel機能を使用して、テーブルの新しいバージョンと前のバージョンの差分を決定する後処理タスクをセットアップしたいと考えています。彼らはこのコードで現在のテーブルバージョンを取得することから始めます：\ncurrent_version = spark.sql(\"SELECT max(version) FROM (DESCRIBE HISTORY daily_activities)\").collect()[0][0]\n\nチームがこのタスクを完了するために使用できるクエリはどれですか？",
    "choices": [
      {
        "text": "SELECT * FROM daily_activities\nINTERSECT\nSELECT * FROM daily_activities AS VERSION = {current_version-1}",
        "is_correct": false
      },
      {
        "text": "SELECT * FROM daily_activities\nMINUS\nSELECT * FROM daily_activities AS VERSION = {current_version-1}",
        "is_correct": false
      },
      {
        "text": "SELECT * FROM daily_activities\nEXCEPT\nSELECT * FROM daily_activities@v{current_version-1}",
        "is_correct": true
      },
      {
        "text": "SELECT * FROM daily_activities\nUNION\nSELECT * FROM daily_activities AS VERSION = {current_version-1}",
        "is_correct": false
      }
    ],
    "explanation": "<p>Delta Lakeテーブルを変更する各操作は新しいテーブルバージョンを作成します。現在のバージョンと前のバージョンの差分を取得するには、Delta Lake Time Travel機能とセット演算子を組み合わせる必要があります。</p><p><strong>Delta Lake Time Travelの構文：</strong></p><ul><li><strong>バージョン番号を指定する方法：</strong><ul><li><code>SELECT * FROM my_table@v36</code> - アットシンボルを使用した短い構文</li><li><code>SELECT * FROM my_table VERSION AS OF 36</code> - VERSIONキーワードを使用</li></ul></li><li><strong>タイムスタンプを指定する方法：</strong><ul><li><code>SELECT * FROM my_table TIMESTAMP AS OF \"2019-01-01\"</code></li></ul></li></ul><p><strong>正しいクエリの構造：</strong></p><ul><li><code>SELECT * FROM daily_activities</code> - 現在のバージョン（current_version）</li><li><code>EXCEPT</code> - 集合差演算子</li><li><code>SELECT * FROM daily_activities@v{current_version-1}</code> - 前のバージョン</li></ul><p><strong>EXCEPTセット演算子の機能：</strong></p><ul><li>最初のクエリ結果から2番目のクエリ結果に含まれていない行を返します</li><li>新しいバージョンに追加された、または変更されたデータを識別できます</li><li>監査とトラッキング用途に適しています</li></ul><p><strong>他のオプションが正しくない理由：</strong></p><ul><li><strong>INTERSECT</strong> - 両方のバージョンに共通する行を返すため、差分ではなく共通部分を取得します</li><li><strong>MINUS</strong> - EXCEPTと同じ機能ですが、構文が間違っています（AS VERSION構文は無効）</li><li><strong>UNION</strong> - 両方のバージョンの行を結合するため、差分ではなく合計を取得します</li></ul><p><strong>Time Travel構文の重要性：</strong></p><ul><li><code>@v{current_version-1}</code> - アットシンボルとvプレフィックスは正しい構文</li><li><code>AS VERSION</code - 別の有効な構文ですが、このクエリでは使用されていません</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Delta Lake Time Travelで異なるバージョンを比較し、EXCEPTセット演算子を使用して新旧バージョン間の差分データを取得できます。"
  },
  {
    "id": 55,
    "question": "エンタープライズ組織のデータエンジニアリングチームが、Databricks Asset Bundleプロジェクトの新規セットアップを完了しました。バンドルをCI/CDシステムで正常に構成した後、チームは今後の自動デプロイが本番環境でスムーズかつ確実に実行されることを保証したいと考えています。\n\nこのシナリオで、CI/CDパイプラインが後続のデプロイ中に再実行を避けるべきコマンドはどれですか？",
    "choices": [
      {
        "text": "databricks bundle init",
        "is_correct": true
      },
      {
        "text": "databricks bundle run",
        "is_correct": false
      },
      {
        "text": "databricks bundle deploy",
        "is_correct": false
      },
      {
        "text": "databricks bundle validate",
        "is_correct": false
      }
    ],
    "explanation": "<p>CI/CDパイプラインは、後続のデプロイ中に<code>databricks bundle init</code>コマンドの再実行を避けるべきです。</p><p><strong>databricks bundle initコマンドの特性：</strong></p><ul><li><strong>初期化用途のみ</strong> - 新しいDatabricks Asset Bundleプロジェクトを初回に初期化するためのコマンドです</li><li><strong>一度限りの操作</strong> - プロジェクトの構成とディレクトリ構造を作成します</li><li><strong>再実行の危険性</strong> - 既存の構成を上書きするか、プロジェクトセットアップをリセットする可能性があります</li><li><strong>CI/CDでの不適切性</strong> - 自動デプロイパイプラインでは使用されるべきではありません</li></ul><p><strong>各コマンドの役割：</strong></p><ul><li><strong>databricks bundle validate</strong> - バンドル構成を検証するコマンド。毎回実行して設定の妥当性を確認します</li><li><strong>databricks bundle deploy</strong> - バンドルを本番環境にデプロイするコマンド。自動デプロイの中核です</li><li><strong>databricks bundle run</strong> - バンドル内のワークフローを実行するコマンド。定期実行に適しています</li></ul><p><strong>CI/CDパイプラインでの推奨実行順序：</strong></p><ol><li><code>databricks bundle validate</code> - 構成の妥当性確認</li><li><code>databricks bundle deploy</code> - リソースのデプロイ</li><li><code>databricks bundle run</code> - ワークフロー実行（必要に応じて）</li></ol><p><strong>databricks bundle initを避けるべき理由：</strong></p><ul><li>初期セットアップ時に1回だけ実行される設計です</li><li>既存プロジェクト構成に対して破壊的な操作となり得ます</li><li>自動パイプラインでの再実行は予期しない動作を引き起こします</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "databricks bundle initコマンドはプロジェクト初期化用のため、一度だけ実行され、CI/CDパイプラインの後続デプロイでは避けるべきです。代わりにvalidate、deploy、runコマンドの繰り返し実行が適切です。"
  },
  {
    "id": 56,
    "question": "データエンジニアリングチームは、本番ワークスペースに機密シークレットを含む「prod-scope」という名前のシークレットスコープを持っています。\n\nチームのデータエンジニアがセキュリティとコンプライアンスドキュメントを作成しており、このシークレットスコープ内のシークレットを使用できるユーザーについて説明したいと考えています。\n\n指定されたシークレットスコープ内のシークレットを使用できるのは、以下のどのロールですか？",
    "choices": [
      {
        "text": "シークレット作成者",
        "is_correct": false
      },
      {
        "text": "ワークスペース管理者",
        "is_correct": false
      },
      {
        "text": "上記に挙げたすべてのロールがシークレットスコープ内のシークレットを使用できる",
        "is_correct": true
      },
      {
        "text": "シークレットスコープに対するREADまたはMANAGE権限を持つユーザー",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricksシークレットは、管理者、シークレット作成者、およびアクセス権限を付与されたユーザーが使用できます。</p><p><strong>シークレットアクセス権限の構造：</strong></p><ul><li><strong>MANAGE権限</strong> - ACLの変更、およびこのシークレットスコープへの読み取りと書き込みが可能</li><li><strong>WRITE権限</strong> - このシークレットスコープへの読み取りと書き込みが可能</li><li><strong>READ権限</strong> - このシークレットスコープの読み取りと利用可能なシークレットの一覧表示が可能</li></ul><p><strong>権限レベルの関係性：</strong></p><ul><li>各権限レベルは前のレベルの権限のサブセットです</li><li>WRITE権限を持つプリンシパルは、READ権限が必要なすべての操作を実行できます</li><li>MANAGE権限を持つプリンシパルは、WRITE権限が必要なすべての操作を実行できます</li></ul><p><strong>シークレットスコープを使用できるユーザー：</strong></p><ul><li><strong>ワークスペース管理者</strong> - ワークスペース内のすべてのシークレットスコープに対してMANAGE権限を自動的に持ちます</li><li><strong>シークレット作成者</strong> - シークレットスコープを作成したユーザーは、そのスコープに対するMANAGE権限を持ちます</li><li><strong>権限付与ユーザー</strong> - READ、WRITE、またはMANAGE権限を明示的に付与されたユーザー</li></ul><p><strong>正解の理由：</strong></p><ul><li>ワークスペース管理者はすべてのシークレットスコープに対してMANAGE権限を持つため、シークレットを使用できます</li><li>シークレット作成者は、作成したスコープに対するMANAGE権限を持つため、シークレットを使用できます</li><li>権限を付与されたユーザーも、READ以上の権限があれば、シークレットを読み取り可能です</li><li>結果的に、上記すべてのロールが、指定されたシークレットスコープ内のシークレットを使用できます</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Databricksシークレットスコープは、ワークスペース管理者、シークレット作成者、およびアクセス権限を付与されたユーザーの3つのカテゴリすべてがシークレットにアクセスして使用できます。"
  },
  {
    "id": 57,
    "question": "以下のうち、初期化スクリプトの保存に使用できなくなったソースロケーションはどれですか？",
    "choices": [
      {
        "text": "DBFS",
        "is_correct": true
      },
      {
        "text": "ワークスペースファイル",
        "is_correct": false
      },
      {
        "text": "ボリューム",
        "is_correct": false
      },
      {
        "text": "クラウドストレージ",
        "is_correct": false
      }
    ],
    "explanation": "<p>最近のDatabricksアップデートにより、DBFS（Databricks File System）はクラスタ初期化スクリプトの保存に使用できなくなりました。</p><p><strong>DBFS廃止の理由：</strong></p><ul><li><strong>信頼性の懸念</strong> - DBFSルート（/dbfs/）の信頼性と安定性に問題がありました</li><li><strong>セキュリティの懸念</strong> - セキュリティ上の理由によるDBFS根のサポート廃止</li><li><strong>移行政策</strong> - より安全で信頼性の高いストレージオプションへの段階的な移行</li></ul><p><strong>初期化スクリプトに使用可能なロケーション：</strong></p><ul><li><strong>ボリューム</strong> - Unity Catalogのボリューム内に初期化スクリプトを保存可能</li><li><strong>クラウドストレージ</strong> - AWS S3、Azure Blob Storage、Google Cloud Storageなどのクラウドストレージに保存可能</li><li><strong>ワークスペースファイル</strong> - ワークスペース内のファイルシステムに保存可能</li></ul><p><strong>移行ガイドライン：</strong></p><ul><li>既存のDBFSベースの初期化スクリプトは、上記の推奨ロケーションに移行する必要があります</li><li>新規プロジェクトではDBFSを使用せず、推奨ロケーションを選択してください</li><li>セキュリティとパフォーマンスの観点から、ボリュームまたはクラウドストレージの使用が推奨されます</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Databricksは信頼性とセキュリティ上の理由からDBFSを初期化スクリプトの保存場所として廃止し、ボリューム、クラウドストレージ、ワークスペースファイルへの移行を推奨しています。"
  },
  {
    "id": 58,
    "question": "データエンジニアがリキッドクラスタリングが有効になっているDelta Lakeテーブルを管理しています。リキッドクラスタリングがインクリメンタルに動作することを理解していますが、新しいデータがテーブルに取り込まれるときにクラスタリング操作をトリガーする方法について確信がありません。\n\n新しく追加されたデータをクラスタリングするために実行すべきコマンドはどれですか？",
    "choices": [
      {
        "text": "VACUUM",
        "is_correct": false
      },
      {
        "text": "ANALYZE",
        "is_correct": false
      },
      {
        "text": "OPTIMIZE",
        "is_correct": true
      },
      {
        "text": "ZORDER",
        "is_correct": false
      }
    ],
    "explanation": "<p>リキッドクラスタリングが有効になっているDelta Lakeテーブルに新しく追加されたデータをクラスタリングするには、<code>OPTIMIZE</code>コマンドを実行する必要があります。</p><p><strong>OPTIMIZEコマンドの機能：</strong></p><ul><li><strong>クラスタリングトリガー</strong> - OPTIMIZEコマンドはクラスタリング操作を開始し、データファイルを物理的に再編成します</li><li><strong>パフォーマンス向上</strong> - データファイルの最適化により、クエリパフォーマンスが向上します</li><li><strong>リキッドクラスタリング連携</strong> - リキッドクラスタリング定義に従い、指定されたカラムでデータを自動的に整理します</li></ul><p><strong>各コマンドの役割との比較：</strong></p><ul><li><strong>VACUUM</strong> - 削除されたデータファイルをクリーンアップし、ストレージを最適化するコマンド。クラスタリングとは無関係です</li><li><strong>ANALYZE</strong> - テーブルの統計情報を計算するコマンド。クエリ最適化に使用されますが、クラスタリングはトリガーしません</li><li><strong>ZORDER</strong> - 非リキッドクラスタリング環境でのデータ配置最適化に使用されるコマンド。リキッドクラスタリングとは異なる手法です</li></ul><p><strong>リキッドクラスタリングのワークフロー：</strong></p><ul><li>テーブル作成時にCLUSTERED BY句でクラスタリングカラムを定義</li><li>新しいデータが追加される</li><li>OPTIMIZEコマンドを実行してクラスタリングを実行</li><li>データファイルが定義されたカラムに従い整理される</li></ul><p><strong>使用例：</strong></p><ul><li><code>OPTIMIZE my_table</code> - テーブル全体を最適化</li><li><code>OPTIMIZE my_table WHERE date >= '2024-01-01'</code> - パーティション化された最適化</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "リキッドクラスタリングが有効なDelta Lakeテーブルでは、OPTIMIZEコマンドを実行することで新しく追加されたデータをクラスタリング定義に従い物理的に再編成し、クエリパフォーマンスを向上させます。"
  },
  {
    "id": 59,
    "question": "データエンジニアが以下のDatabricks Asset Bundle（DAB）プロジェクトを持っています：\nresources:\n  apps:\n    bookstore_app:\n      name: \"bookstore_demo\"\n      source_code_path: ../src/bookstore\n  volumes:\n    bookstore_volume:\n      name: \"bookstore\"\n      catalog_name: demo_catalog\n      schema_name: demo_schema\n      grants:\n        - principal: ${resources.apps.bookstore_app.id}\n        privileges:\n          - READ_VOLUME\n          - WRITE_VOLUME\n\nこのDABプロジェクトをデプロイした結果を正しく説明しているのはどれですか？",
    "choices": [
      {
        "text": "参照${resources.apps.bookstore_app.id}が正しくないため、エラーが発生し、代わりに${resources.apps.bookstore_demo.id}であるべきです",
        "is_correct": false
      },
      {
        "text": "ボリュームbookstore_volumeとサービスプリンシパルbookstore_appをデプロイし、ボリュームへの読み取りと書き込みアクセスを付与します",
        "is_correct": false
      },
      {
        "text": "カタログdemo_catalog、スキーマdemo_schema、ボリュームbookstore_volume、およびDatabricksアプリbookstore_appを3レベルの名前空間を使用してデプロイし、ボリュームへのアクセスを付与します",
        "is_correct": false
      },
      {
        "text": "Databricksアプリbookstore_appとボリュームbookstore_volumeをデプロイし、デプロイされたDatabricksアプリに関連付けられたサービスプリンシパルにボリュームへの読み取りと書き込みアクセスを付与します",
        "is_correct": true
      }
    ],
    "explanation": "<p>このDatabricks Asset Bundle（DAB）プロジェクトがデプロイされる場合、正確に2つのリソースが作成されます。</p><p><strong>デプロイされるリソース：</strong></p><ul><li><strong>Databricksアプリ</strong> - bookstore_appという識別子で作成され、表示名は「bookstore_demo」です</li><li><strong>ボリューム</strong> - bookstore_volumeという名前で、指定されたカタログdemo_catalogとスキーマdemo_schema内に作成されます</li></ul><p><strong>権限付与の仕組み：</strong></p><ul><li><strong>参照の正確性</strong> - ${resources.apps.bookstore_app.id}はDatabricksアプリのリソース識別子を正しく参照します</li><li><strong>サービスプリンシパル自動関連付け</strong> - デプロイされたDatabricksアプリには、自動的にサービスプリンシパル（サービス用のセキュリティ識別子）が関連付けられます</li><li<strong>権限委譲</strong> - grant設定により、このサービスプリンシパルにREAD_VOLUMEおよびWRITE_VOLUME権限が自動的に付与されます</li></ul><p><strong>デプロイ後の状態：</strong></p><ul><li>Databricksアプリはボリュームからデータを読み取ることができます</li><li>Databricksアプリはボリュームにデータを書き込むことができます</li><li>これにより、アプリケーションの運用ワークフロー内でボリュームにアクセスできるようになります</li></ul><p><strong>他のオプションが正しくない理由：</strong></p><ul><li><strong>参照エラー説</strong> - ${resources.apps.bookstore_app.id}は正しい参照構文です。bookstore_appはリソースキー、bookstore_demoはディスプレイ名です</li><li><strong>カタログ・スキーマ作成説</strong> - DABはボリュームのみを作成し、カタログやスキーマを作成しません。これらは事前に存在する必要があります</li><li><strong>サービスプリンシパルのみ説</strong> - サービスプリンシパルが明示的に作成されるのではなく、Databricksアプリに自動関連付けされます</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "Databricks Asset Bundleをデプロイすると、Databricksアプリとボリュームが作成され、アプリの関連サービスプリンシパルに対して定義された権限が自動的に付与されます。"
  }
];
