window.questionsData2 = [
  {
    "id": 1,
    "question": "データエンジニアが以下のjoin操作を最適化し、小さいデータフレームをクラスタ内のすべてのエグゼキュータノードに送信できるようにしたいと考えています：\nlargeDF.join(smallerDF, [\"key\"], \"inner\")\nどの関数を使用すると、データフレームをメモリ上のすべてのエグゼキュータに対応できるサイズであることを示すことができますか？",
    "choices": [
      {
        "text": "pyspark.sql.functions.shuffle",
        "is_correct": false
      },
      {
        "text": "pyspark.sql.functions.distribute",
        "is_correct": false
      },
      {
        "text": "pyspark.sql.functions.explode",
        "is_correct": false
      },
      {
        "text": "pyspark.sql.functions.broadcast",
        "is_correct": true
      }
    ],
    "explanation": "<p><code>pyspark.sql.functions.broadcast</code>関数は、ブロードキャストjoinで使用するのに十分な小ささのデータフレームをマークします。</p><p>ブロードキャストjoinは、小さいデータフレームをすべてのエグゼキュータノードにコピーし、大きなデータフレームの各パーティションと局所的にjoinを実行することで、シャッフルオペレーションを回避し、パフォーマンスを大幅に向上させる最適化技法です。</p><p><code>broadcast()</code>を使用することで、Sparkオプティマイザは小さいデータフレームがメモリに適合することを認識し、最適なjoin戦略を選択できます。</p><p>他のオプションについて：</p><ul><li><strong>shuffle</strong> - データを再パーティション化しますが、ブロードキャストjoinの目的とは異なります</li><li><strong>distribute</strong> - このような関数は存在しません</li><li><strong>explode</strong> - 配列または構造化データを複数の行に展開する関数で、ブロードキャストjoinとは無関係です</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "broadcast関数を使用して小さいデータフレームをすべてのエグゼキュータノードにブロードキャストすることで、join操作を最適化できます。"
  },
  {
    "id": 2,
    "question": "データエンジニアがDatabricksの失敗したマルチタスク ジョブ実行を修復しました。「修復実行」をクリックする前に、修復実行ダイアログでタスク パラメータ値を変更しました。\nこの変更の効果を最も適切に説明しているのはどれですか？",
    "choices": [
      {
        "text": "ジョブパラメータが常に実行のパラメータを上書きするため、この変更は無視されます。",
        "is_correct": false
      },
      {
        "text": "更新されたパラメータ値がジョブ設定に永続的に保存されます。",
        "is_correct": false
      },
      {
        "text": "この機能は新しいパラメータの追加のみをサポートしており、既存のパラメータの更新をサポートしていないため、修復実行は失敗します。",
        "is_correct": false
      },
      {
        "text": "更新されたパラメータは現在の修復実行にのみ適用され、ジョブの保存されたパラメータは変更されません。",
        "is_correct": true
      }
    ],
    "explanation": "<p>Databricksで失敗したジョブに対して「Repair run」機能を使用する場合、修復実行ダイアログではその特定の実行に対してパラメータを調整することができます。これらの変更はジョブの元の設定を上書きしません。修復実行にのみ適用されます。</p><p>パラメータの変更を永続的にするには、ジョブの設定自体を更新する必要があります。</p>",
    "tags": "デプロイとデバッグ",
    "summary": "修復実行ダイアログで変更したパラメータは、その実行にのみ適用され、ジョブの設定には保存されません。"
  },
  {
    "id": 3,
    "question": "データエンジニアリングチームは「users」という名前のDelta テーブルを保有しています。最近、以下のコマンドを使用してテーブルにCHECK制約が追加されました：\nALTER TABLE users\nADD CONSTRAINT valid_age CHECK (age > 0);\nチームは新しいレコードのバッチをテーブルに挿入しようとしましたが、一部のレコードに負の年齢値が含まれており、制約違反が原因で書き込みが失敗しました。\nこのバッチ挿入の結果を説明するのはどのステートメントですか？",
    "choices": [
      {
        "text": "テーブル制約に違反しないすべてのレコードがテーブルに挿入されました。制約に違反するレコードは無視されました。",
        "is_correct": false
      },
      {
        "text": "テーブル制約に違反しないすべてのレコードがテーブルに挿入されました。制約に違反するレコードはトランザクションログに記録されました。",
        "is_correct": false
      },
      {
        "text": "最初の違反するレコードに到達する前に処理されたレコードのみがテーブルに挿入されました。",
        "is_correct": false
      },
      {
        "text": "テーブルにはレコードが挿入されていません。",
        "is_correct": true
      }
    ],
    "explanation": "<p>制約違反が原因で書き込み操作が失敗しました。しかし、Delta Lake のACID保証により、すべてのトランザクションはアトミックです。つまり、完全に成功するか、完全に失敗するかのいずれかです。この場合、制約に違反しないレコードを含め、これらのレコードのいずれもテーブルに挿入されていません。</p><p><strong>重要なポイント：</strong></p><ul><li>Delta Lake はACIDトランザクション特性を提供します</li><li>アトミック性により、トランザクション内のすべての操作が成功するか、すべて失敗するかのいずれかになります</li><li>制約違反が発生すると、バッチ全体の挿入が失敗します</li><li>有効なレコードのみを選別して挿入することはできません</li></ul>",
    "summary": "Delta Lake のACID保証によりトランザクションはアトミックであり、制約違反が発生するとバッチ全体が失敗します。",
    "tags": "セキュリティとコンプライアンス"
  },
  {
    "id": 4,
    "question": "中佐のデータエンジニアが、以下のコードを使用してストリーミングの汚いデータを重複排除し、ターゲットDeltaテーブルに挿入しています：\nspark.readStream\n        .table(\"orders_raw\")\n        .dropDuplicates([\"order_id\", \"order_timestamp\"])\n    .writeStream\n        .option(\"checkpointLocation\", \"dbfs:/checkpoints\")\n        .table(\"orders_unique\")\nシニアエンジニアが、遅延して到着し、重複したレコードがある場合、この方法ではターゲットテーブル内で一意のレコードを確保するのに十分ではないと指摘しました。\nこの指摘が当てはまる理由を説明しているのはどれですか？",
    "choices": [
      {
        "text": "各非オーバーラップ区間ごとに重複排除を適用するために、ウィンドウ関数を使用する必要があります。",
        "is_correct": false
      },
      {
        "text": "挿入対象となるレコードを、事前にテーブルに挿入したデータに対しても重複排除する必要があります。",
        "is_correct": true
      },
      {
        "text": "最新のレコードだけを処理することを保証するために、ランク付け関数を使用する必要があります。",
        "is_correct": false
      },
      {
        "text": "レコードの遅延を予想できるウィンドウ期間だけ状態情報を追跡するために、ウォーターマーキングを追加する必要があります。",
        "is_correct": false
      }
    ],
    "explanation": "<p>ストリーミングの重複排除を実施するために、<code>dropDuplicates()</code>関数を使用して各マイクロバッチ内で重複レコードを削除します。しかし、挿入対象となるレコードがすでにターゲットテーブルに存在しないことを確保する必要があります。</p><p><strong>重複排除の両層的な屏障：</strong></p><ul><li>第1層：マイクロバッチ内での重複排除 - <code>dropDuplicates()</code>で実施</li><li>第2層：ターゲットテーブル内の残存データとの重複排除 - insert-only mergeを使用して実施</li></ul><p>この両方を組み合わせることで、遅延して残り、重複を含むレコードが正確に除外されます。</p>",
    "tags": "データ処理コードの開発",
    "summary": "ストリーミングの重複排除では、マイクロバッチ内の重複排除と、ターゲットテーブル内の残存データとの重複排除の両方が必要です。"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "Delta Sharingサーバーを介してクエリリクエストを分散し、テーブルを複製します。"
      },
      {
        "is_correct": true,
        "text": "クラウドストレージからの一時セキュリティ認証気を作成して、プロバイダー側の共有Deltaテーブルのルートディレクトリに限定します。"
      },
      {
        "is_correct": false,
        "text": "テーブルの素性クローンを実施して、トランザクションログだけを共有します。"
      },
      {
        "is_correct": false,
        "text": "Delta Sharingサーバーのディスクキャッシュを活用し、ソーステーブルへの直接アクセスをことに粗いパフォーマンスを実現します。"
      }
    ],
    "explanation": "<p>Databricks間のテーブル共有は、<code>WITH HISTORY</code>句を使用して履歴共有を有効化することで、クエリパフォーマンスを改善できます。</p><p><strong>WITH HISTORYを使用した場合の利点：</strong></p><ul><li>クラウドストレージからの一時セキュリティ認証気を活用します</li><li>セキュリティ認証気をプロバイダー側の共有テーブルのルートディレクトリに限定します</li><li>結果として、ソーステーブルへの直接アクセスをことに粗いパフォーマンスを實現できます</li></ul>",
    "id": 5,
    "question": "小売业公社のデータエンジニアが、大型のDeltaテーブルを外部の分析会社と共有していますが、履歴なしのDelta Sharingを使用しているため、共有データをクエリするときにパフォーマンスが遅いことがありました。\nシニアエンジニアが、以下のコマンドを使用して履歴付きでデータを共有し、クエリパフォーマンスを改善しようと提案しました：\nALTER SHARE sales_share ADD TABLE products WITH HISTORY;\n<code>WITH HISTORY</code>を使用した場合、どのような利点が得られますか？",
    "summary": "Delta Sharingで<code>WITH HISTORY</code>を使用すると、一時セキュリティ認証気を作成してクォードストレージを直接アクセスできるため、パフォーマンスが改善します。",
    "tags": "コストとパフォーマンスの最適化"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "GRANT SELECT, MODIFY, CREATE, READ_METADATA ON TABLE employees TO hr_team"
      },
      {
        "is_correct": false,
        "text": "GRANT FULL PRIVILEGES ON TABLE employees TO hr_team"
      },
      {
        "is_correct": true,
        "text": "GRANT ALL PRIVILEGES ON TABLE employees TO hr_team"
      },
      {
        "is_correct": false,
        "text": "GRANT ALL PRIVILEGES ON TABLE hr_team TO employees"
      }
    ],
    "explanation": "<p><code>ALL PRIVILEGES</code> は、ユーザーまたはユーザーグループにオブジェクトに対する完全な権限を付与するために使用されます。以下のすべての権限に変換されます：</p><ul><li><code>SELECT</code></li><li><code>CREATE</code></li><li><code>MODIFY</code></li><li><code>USAGE</code></li><li><code>READ_METADATA</code></li></ul><p><strong>正しいコマンド：</strong></p><p><code>GRANT ALL PRIVILEGES ON TABLE employees TO hr_team</code></p><p>このコマンドは、hr_teamグループに対して employees テーブルのすべての権限を付与します。</p><p><strong>他の選択肢が正解でない理由：</strong></p><ul><li>最初のオプションは個別の権限を列挙していますが、USAGE権限を含んでいません</li><li>2番目のオプションは「FULL PRIVILEGES」という構文はサポートされていません</li><li>4番目のオプションは権限とテーブル/グループが逆転しており、正しくない文法です</li></ul>",
    "id": 6,
    "question": "データエンジニアは、hr_team に対して employees テーブルに対するすべての権限を付与するために、以下のどのコマンドを使用できますか？",
    "summary": "ALL PRIVILEGES を使用することで、SELECT、CREATE、MODIFY、USAGE、READ_METADATA を含むすべての権限を一度に付与できます。",
    "tags": "セキュリティとコンプライアンス"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "オープンソース Delta Sharing サーバーのカスタマーマネージド実装"
      },
      {
        "is_correct": false,
        "text": "リストされたオプションの中に、これらのアセットの共有をサポートするものはありません"
      },
      {
        "is_correct": true,
        "text": "Databricks間共有プロトコル"
      },
      {
        "is_correct": false,
        "text": "Databricks オープン共有プロトコル"
      }
    ],
    "explanation": "<p>Databricks間共有プロトコルは、静的な Delta テーブルだけでなく、Unity Catalog Volumes、Unity Catalog Models、Notebooks などの追加的な Unity Catalog アセットの共有もサポートしている唯一の Delta Sharing 実装です。このプロトコルはオープン Delta Sharing 標準を拡張し、Databricks エコシステム内の Databricks ワークスペース間および組織間でのシームレスなコラボレーションとガバナンスを実現します。</p><p><strong>各実装の比較：</strong></p><ul><li><strong>Databricks間共有プロトコル</strong> - Delta テーブル、Volumes、Models、Notebooks を含む包括的な共有が可能</li><li><strong>オープン Delta Sharing プロトコル</strong> - 静的な Delta テーブルのみに制限</li><li><strong>カスタマーマネージド実装</strong> - 静的な Delta テーブルのみに制限、Unity Catalog アセットは非対応</li></ul><p>つまり、Unity Catalog Volumes、Models、Notebooks を含むアセットを共有したい場合は、Databricks間共有プロトコルを使用する必要があります。</p>",
    "id": 7,
    "question": "次のうち、静的な Delta テーブルに加えて、Unity Catalog Volumes、Unity Catalog Models、および Notebook の共有もサポートしている Delta Sharing 実装はどれですか？",
    "summary": "Databricks間共有プロトコルは、Delta テーブルだけでなく Unity Catalog Volumes、Models、Notebook も共有できる唯一の実装です。",
    "tags": "セキュリティとコンプライアンス"
  },
  {
    "choices": [
      {
        "is_correct": false,
        "text": "VACUUMコマンドが実行されるまで、テーブルは削除されません"
      },
      {
        "is_correct": false,
        "text": "テーブルのメタデータだけがカタログから削除され、データファイルはストレージに保持されます"
      },
      {
        "is_correct": true,
        "text": "テーブルのメタデータとデータファイルの両方が削除されます"
      },
      {
        "is_correct": false,
        "text": "テーブルが customers テーブルからディープクローンされているため、エラーが発生します"
      }
    ],
    "explanation": "<p>このテーブルは <code>LOCATION</code> 句を指定せずに作成されています。これは、これが管理されているテーブルであることを意味します。</p><p><strong>管理されているテーブルと外部テーブルの違い：</strong></p><ul><li><strong>管理されているテーブル</strong> - メタデータとデータの両方が Databricks によって管理されます。<code>DROP TABLE</code> 実行時には、メタデータとデータファイルの両方が削除されます</li><li><strong>外部テーブル</strong> - <code>LOCATION</code> 句で指定されています。<code>DROP TABLE</code> 実行時には、メタデータだけが削除され、データファイルはストレージに保持されます</li></ul><p>この場合、<code>LOCATION</code> 句がありません。したがって customers_clone は管理されているテーブルで、<code>DROP TABLE</code> でメタデータとデータファイルの両方が削除されます。</p>",
    "id": 8,
    "question": "データエンジニアリングチームが以下のクエリで Delta Lake テーブルを作成しました：\nCREATE TABLE customers_clone\nAS SELECT * FROM customers\nデータエンジニアが以下のクエリでテーブルを削除します：\nDROP TABLE customers_clone\nこの DROP コマンドを実行した場合、結果を説明しているのはどれですか？",
    "summary": "LOCATION句なしで作成された管理されているテーブルが DROP されると、メタデータとデータファイルの両方が削除されます。",
    "tags": "データ処理コードの開発"
  },
  {
    "choices": [
      {
        "is_correct": true,
        "text": "タイムスタンプは UTC です。"
      },
      {
        "is_correct": false,
        "text": "タイムスタンプはジョブをトリガーしたユーザーのローカル時刻に基づいています。"
      },
      {
        "is_correct": false,
        "text": "タイムスタンプはクラスタ仮想マシンのローカル時刻に基づいています。"
      },
      {
        "is_correct": false,
        "text": "タイムスタンプはワークスペースクラウド領域のローカル時刻に基づいています。"
      }
    ],
    "explanation": "<p>Databricks ジョブでは、すべての時間ベースの参照は UTC タイムゾーンのタイムスタンプに基づいています。これには以下が含まれます：</p><ul><li><code>is_weekday</code></li><li><code>iso_weekday</code></li><li><code>iso_datetime</code></li><li><code>iso_date</code></li></ul><p><strong>UTC タイムスタンプの利点：</strong></p><ul><li>地域、クラスタ、ユーザーのローカルタイムゾーンに関わらず、全体で一貫性を保証します</li><li>動的参照を使用したジョブ構成では、タイムゾーン差異による混乱を排除します</li><li>複数のリージョン、複数のユーザーにまたがる分散環境での信頼性を確保します</li></ul><p>したがって、<code>{{job.start_time.iso_datetime}}</code> の参照は、ジョブをトリガーしたユーザーや実行環境に関わらず、常に UTC で時刻を返します。</p>",
    "id": 9,
    "question": "データエンジニアがジョブのタスクパラメータの値を構成するために、動的参照 <code>{{job.start_time.iso_datetime}}</code> を使用しています。\n返されるタイムスタンプのタイムゾーンについて、正しく説明しているのはどれですか？",
    "summary": "Databricks ジョブの時間ベース参照はすべて UTC タイムゾーンに基づいており、地域やユーザーのローカルタイムゾーンに関わらず一貫性を保ちます。",
    "tags": "デプロイとデバッグ"
  },
  {
    "id": 10,
    "question": "Databricks JobsにおけるCron構文について、以下のうちどれが正しく説明していますか？",
    "choices": [
      {
        "text": "ジョブの実行タイムアウトを表現するための式である",
        "is_correct": false
      },
      {
        "text": "ジョブのリトライポリシーを表現するための式である",
        "is_correct": false
      },
      {
        "text": "ジョブの最大同時実行数を表現するための式である",
        "is_correct": false
      },
      {
        "text": "プログラマティックに定義可能な複雑なジョブスケジュールを表現するための式である",
        "is_correct": true
      }
    ],
    "explanation": "<p>Databricksジョブのスケジュール定義には2つの方法があります。1つは対話的に期間と開始時刻を指定する方法で、もう1つはCron Syntax式を記述する方法です。</p><p><strong>Cron Syntax</strong>は、複雑なジョブスケジュールをプログラマティックに定義することができる強力な表現方式です。これにより、標準的なCron形式を使用して、柔軟で複雑なスケジュール要件を指定できます。</p><p>Cron Syntaxは以下のような用途には使用されません：</p><ul><li>実行タイムアウトの設定</li><li>リトライポリシーの定義</li><li>最大同時実行数の制限</li></ul><p>これらは別の設定パラメータで管理される機能です。</p>",
    "tags": "デプロイとデバッグ",
    "summary": "Cron構文はDatabricks Jobsにおいて、複雑なスケジュール要件をプログラマティックに定義するための標準的な表現方式です。"
  },
  {
    "id": 11,
    "question": "データエンジニアリングチームがUnity Catalogに保存されたユーザーアクティビティイベントテーブルで作業しており、クエリではuser_idとevent_dateなど複数の列でのフィルタリングが頻繁に行われています。\nコストの高いテーブルスキャンを避けるために、チームが実装すべきデータレイアウト技術はどれですか？",
    "choices": [
      {
        "text": "event_date列でパーティショニングを使用する",
        "is_correct": false
      },
      {
        "text": "user_id列でZ-orderインデックスを使用する",
        "is_correct": false
      },
      {
        "text": "user_idとevent_dateの組み合わせでLiquid Clusteringを使用する",
        "is_correct": true
      },
      {
        "text": "user_id列でパーティショニングを行い、event_date列でZ-orderインデックスを使用する",
        "is_correct": false
      }
    ],
    "explanation": "<p>このシナリオでは、user_idとevent_dateの組み合わせにLiquid Clusteringを使用することが、コストの高いテーブルスキャンを避けるための最適な選択肢です。この技術は両列に基づいてデータレイアウトを段階的に最適化し、これらの列でのフィルタリングを効率的にサポートし、高コストのテーブルスキャンを回避します。</p><p>その他のアプローチの課題：</p><ul><li><strong>event_date列のみでのパーティショニング</strong> - 日付でフィルタリングするクエリには効果的ですが、user_idでのフィルタリング最適化には対応せず、パーティション内での全スキャンの可能性があります</li><li><strong>user_id列でのZ-orderインデックス</strong> - user_idでのフィルタリングを最適化しますが、event_dateでのフィルタリングを無視するため、日付フィルタ時に非効率なスキャンが発生します</li><li><strong>user_id列でのパーティショニング + event_date列でのZ-orderインデックス</strong> - 両列でのフィルタリングに対応しますが、ユーザー数が多い場合は多数の小さなパーティションが作成され、管理とパフォーマンスの問題につながります</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "Liquid Clusteringは複数列での頻繁なフィルタリングに最適化されたデータレイアウト技術で、パーティショニングやZ-orderインデックスよりも柔軟かつ効率的です。"
  },
  {
    "id": 12,
    "question": "データエンジニアリングチームが、様々なソースからストリーミングされる製品データをクリーニング・検証するLDP パイプラインを構築しています。bronze_productsテーブルの一部のレコードに無効な価格値が含まれていることに気付きました。具体的には、ゼロまたは負の価格がある場合があり、これはビジネスルールに違反しています。\nこの問題に対処するため、以下のLDPコードを実装しました：\n@dlt.table\n@dlt.expect_or_drop(\"positive_price\", \"price > 0\")\ndef silver_products():\n    return spark.readStream.table(\"bronze_products\")\n\n@dlt.table\n@dlt.expect_or_drop(\"invalid_price\", \"price <= 0\")\ndef quarantine_products():\n    return spark.readStream.table(\"bronze_products\")\nこのパイプラインの実行結果を正しく説明しているのはどれですか？",
    "choices": [
      {
        "text": "正の価格を持つレコードはsilver_productsテーブルに読み込まれ、ゼロまたは負の価格を持つレコードはquarantine_productsテーブルに読み込まれます。",
        "is_correct": true
      },
      {
        "text": "すべてのレコードはbronze_productsテーブルで更新され、\"quarantine_products\"フラグが追加されて価格が有効かどうかが示されます。",
        "is_correct": false
      },
      {
        "text": "すべてのレコードはsilver_productsテーブルに読み込まれ、\"quarantine_products\"フラグが追加されて価格が有効かどうかが示されます。",
        "is_correct": false
      },
      {
        "text": "正の価格を持つレコードはsilver_productsテーブルに読み込まれ、ゼロまたは負の価格を持つレコードはbronze_productsテーブルから削除されます。",
        "is_correct": false
      }
    ],
    "explanation": "<p>このLDPパイプラインは、無効なレコードを隔離するための一般的なパターンを使用しており、無効なレコードを保存する第2のテーブルを作成しています。</p><p><strong>silver_productsテーブル</strong>は<code>@dlt.expect_or_drop(\"positive_price\", \"price > 0\")</code>を使用しており、これは条件<code>price > 0</code>を満たすレコードのみが保持され、ゼロまたは負の価格を持つレコードはドロップされることを意味します。その結果、silver_productsテーブルには価格が正の有効な製品レコードのみが含まれ、ダウンストリームプロセスがクリーンでビジネスルールに準拠したデータを受け取ることが保証されます。</p><p>一方、<strong>quarantine_productsテーブル</strong>は<code>@dlt.expect_or_drop(\"invalid_price\", \"price <= 0\")</code>で定義されており、ゼロまたは負の価格を持つレコードのみがこの期待を満たし、保持されることを意味します。これにより、すべての無効な価格レコードが隔離テーブルにルーティングされ、さらなる検査または修正が可能になります。</p><p>元のbronze_productsテーブルは変更されず、レコードは削除されません。</p>",
    "tags": "データ処理コードの開発",
    "summary": "DLT の@dlt.expect_or_dropデコレーターは条件に基づいてレコードを異なるテーブルにルーティングし、データの検証と隔離を実現します。"
  },
  {
    "id": 13,
    "question": "以下のStructured Streamingクエリが与えられています：\n(spark.readStream\n        .table(\"orders\")\n    .writeStream\n        .option(\"checkpointLocation\", checkpointPath)\n        .table(\"Output_Table\")\n)\nこのクエリのトリガー間隔はどれですか？",
    "choices": [
      {
        "text": "30分ごと",
        "is_correct": false
      },
      {
        "text": "クエリはバッチモードで実行され、利用可能なすべてのデータを一度に処理した後、トリガーが停止します。",
        "is_correct": false
      },
      {
        "text": "30秒ごと",
        "is_correct": false
      },
      {
        "text": "0.5秒ごと",
        "is_correct": true
      }
    ],
    "explanation": "<p>デフォルトでは、トリガー間隔を明示的に指定しない場合、データは0.5秒（500ミリ秒）ごとに処理されます。これは<code>trigger(processingTime=\"500ms\")</code>を指定することと同等です。</p><p>Structured Streamingのデフォルトトリガー動作：</p><ul><li>トリガー間隔が指定されていない場合、システムはデータが到着するとすぐに処理を開始します</li><li>デフォルトのマイクロバッチ処理時間は0.5秒（500ミリ秒）に設定されています</li><li>これにより、ほぼリアルタイムに近いデータ処理が実現されます</li></ul><p>明示的にトリガーを指定することで、この動作をカスタマイズできます。例えば、<code>.trigger(processingTime=\"1 minute\")</code>で1分ごとの処理に変更することもできます。</p>",
    "tags": "データ処理コードの開発",
    "summary": "Structured Streamingのデフォルトトリガー間隔は0.5秒（500ミリ秒）であり、明示的に指定されない場合はこの間隔でマイクロバッチが処理されます。"
  },
  {
    "id": 14,
    "question": "データエンジニアが既存のDataFrameに新しい列を追加する変換パイプラインをテストしており、結果のDataFrameが期待される出力と一致することを確認したいと考えています。\nDataFrameの等価性を検証するために、データエンジニアが使用できる関数はどれですか？",
    "choices": [
      {
        "text": "assert(actual_df = expected_df)",
        "is_correct": false
      },
      {
        "text": "assertDataFrameEqual(actual_df, expected_df)",
        "is_correct": true
      },
      {
        "text": "assertEqual(actual_df, expected_df)",
        "is_correct": false
      },
      {
        "text": "verifyEquality(actual_df, expected_df)",
        "is_correct": false
      }
    ],
    "explanation": "<p>PySparkで2つのDataFrameの等価性を検証するために使用する正しい関数は<code>pyspark.testing.assertDataFrameEqual(actual, expected)</code>です。この関数は2つのDataFrameを要素ごとに比較し、デフォルトで完全な等価性をチェックします。</p><p><strong>assertDataFrameEqual()の特徴：</strong></p><ul><li>2つのDataFrameの内容を厳密に比較します</li><li><code>ignoreColumnOrder</code>や<code>ignoreNullable</code>などのオプションパラメータにより、比較動作を制御できます</li><li>DataFrameが一致しない場合、<code>PySparkAssertionError</code>を発生させます</li><li>差分の詳細情報を含むエラーメッセージを提供します</li></ul><p>その他の関数では機能しません：</p><ul><li><code>assert()</code> - Python の標準的なアサーション文で、DataFrameの比較には不適切です</li><li><code>assertEqual()</code> - unittest モジュールの関数で、PySpark DataFramesには使用できません</li><li><code>verifyEquality()</code> - PySpark/Spark のテスティング APIには存在しません</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "PySparkでDataFrameの等価性を検証するには、pyspark.testing.assertDataFrameEqual()関数を使用し、要素ごとの比較と詳細なエラー報告が可能です。"
  },
  {
    "id": 15,
    "question": "データエンジニアリングチームがSCD Type 1のDelta Lakeテーブルを管理しており、ジュニアデータエンジニアがテーブルディレクトリ内に「_change_data」というフォルダを発見しました。このフォルダの用途について理解したいと考えています。\nこのフォルダの目的を説明しているのはどれですか？",
    "choices": [
      {
        "text": "CDF機能がテーブルで有効になっています。「_change_data」フォルダはCDFデータが保存される場所です。",
        "is_correct": true
      },
      {
        "text": "すべてのSCD Type 1テーブルには、テーブルのデータに適用された更新を追跡するための「_change_data」フォルダがあります。",
        "is_correct": false
      },
      {
        "text": "Optimized Writes機能がテーブルで有効になっています。「_change_data」フォルダは最適化されたデータが保存される場所です。",
        "is_correct": false
      },
      {
        "text": "「_change_data」フォルダはスキーマ定義の進化を追跡するためのデフォルトディレクトリです。",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricksは、UPDATE、DELETE、およびMERGE操作に対する変更データをテーブルディレクトリ下の<code>_change_data</code>フォルダに記録します。</p><p><strong>Change Data Feed（CDF）について：</strong></p><ul><li>CDFは、Delta Lakeテーブルに対する変更（UPDATE、DELETE、MERGE）を追跡する機能です</li><li>CDFが有効になっているテーブルでは、すべての変更データが<code>_change_data</code>フォルダに保存されます</li><li>このフォルダは、テーブルのレコード履歴を追跡したり、ダウンストリームシステムと同期したりするために使用されます</li></ul><p><strong>重要な注意事項：</strong></p><ul><li><code>_change_data</code>フォルダ内のファイルはテーブルの保持ポリシーに従います</li><li>VACUUMコマンドを実行すると、変更データフィードデータも削除されます</li><li>すべてのSCD Type 1テーブルがこのフォルダを必ず持つわけではなく、CDFが有効になっている場合のみ作成されます</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "「_change_data」フォルダはChange Data Feed（CDF）機能が有効なDelta Lakeテーブルに作成され、UPDATE、DELETE、MERGE操作の変更データを保存します。"
  },
  {
    "id": 16,
    "question": "データエンジニアリングチームはordersというDelta Lakeテーブルを管理しており、Delta Lakeのデフォルトトランザクションログ保持期間と同じ期間、テーブルの履歴データにタイムトラベルでアクセスできることを確認したいと考えています。\n以下のコマンドのうち、この要件を満たすのはどれですか？",
    "choices": [
      {
        "text": "ALTER TABLE orders SET TBLPROPERTIES ('delta.deletedFileRetentionDuration' = 'interval 30 days')",
        "is_correct": true
      },
      {
        "text": "ALTER TABLE orders SET TBLPROPERTIES ('delta.deletedFileRetentionDuration' = 'interval 7 days')",
        "is_correct": false
      },
      {
        "text": "ALTER TABLE orders SET TBLPROPERTIES ('delta.deletedFileRetentionDuration' = 'interval 90 days')",
        "is_correct": false
      },
      {
        "text": "ALTER TABLE orders SET TBLPROPERTIES ('delta.deletedFileRetentionDuration' = 'interval 365 days')",
        "is_correct": false
      }
    ],
    "explanation": "<p>Delta Lakeのデフォルトトランザクションログ保持期間は30日であり、これはタイムトラベルで利用可能な履歴データがどのくらい保持されるかを決定します。永久削除されるまでの期間です。</p><p><strong>トランザクションログ保持とファイル保持について：</strong></p><ul><li>Delta Lakeのデフォルトトランザクションログ保持期間は30日です</li><li>テーブルプロパティ<code>delta.deletedFileRetentionDuration</code>は、削除されたデータファイルが保持される期間を制御します</li><li>タイムトラベル機能でアクセス可能な履歴データの期間は、この保持期間に依存します</li></ul><p><strong>必要な設定：</strong></p><p>削除されたファイルの保持期間をデフォルトのトランザクションログ保持期間（30日）と一致させるには、以下のコマンドを実行します：</p><p><code>ALTER TABLE orders SET TBLPROPERTIES ('delta.deletedFileRetentionDuration' = 'interval 30 days')</code></p><p>他の保持期間（7日、90日、365日など）では、削除されたファイルの保持期間がトランザクションログの保持期間と異なるため、タイムトラベルのアクセス可能期間が要件と一致しません。</p>",
    "tags": "データ処理コードの開発",
    "summary": "Delta Lakeのデフォルトトランザクションログ保持期間は30日であり、タイムトラベル機能と削除ファイルの保持期間を一致させるにはdelta.deletedFileRetentionDurationを30日に設定する必要があります。"
  },
  {
    "id": 17,
    "question": "ジュニアデータエンジニアがLakeflow Declarative Pipeline（LDP）にデータ品質検証を実装するよう指示されました。受信データセットがさらに処理される前に特定の基準を満たすことを確認するために、複数の期待関数を追加しました。ジュニアエンジニアがプルリクエストを提出した後、シニアデータエンジニアはコードレビューを開始し、検証に使用されている関数呼び出しの1つが正しくないことに気付きました。\nレビューの一環として、シニアエンジニアはパイプラインで使用されているすべての期待関数がDatabricksドキュメントに従って有効であることを確認したいと考えています。\n以下のうち、Lakeflow Declarative Pipelinesで有効ではない期待関数の呼び出しはどれですか？",
    "choices": [
      {
        "text": "dlt.expect",
        "is_correct": false
      },
      {
        "text": "dlt.expect_or_fail",
        "is_correct": false
      },
      {
        "text": "dlt.expect_or_warn",
        "is_correct": true
      },
      {
        "text": "dlt.expect_or_drop",
        "is_correct": false
      }
    ],
    "explanation": "<p><code>dlt.expect_or_warn</code>はLakeflow Declarative Pipelines（LDP）でサポートされていない期待関数です。</p><p><strong>LDPでサポートされている期待関数：</strong></p><ul><li><code>dlt.expect</code> - 無効な行をターゲットに書き込みます（警告セマンティクス）</li><li><code>dlt.expect_or_drop</code> - ターゲットに書き込む前に無効な行をドロップします</li><li><code>dlt.expect_or_fail</code> - 違反が発生した場合、更新を失敗させます</li></ul><p><code>dlt.expect_or_warn</code>という関数は存在しないため、コードで使用すると実行時エラーが発生します。</p><p><strong>期待関数の選択ガイド：</strong></p><ul><li>警告として記録したい場合 → <code>dlt.expect</code></li><li>無効なレコードを除外したい場合 → <code>dlt.expect_or_drop</code></li><li>違反時にパイプラインを停止したい場合 → <code>dlt.expect_or_fail</code></li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "LDPでサポートされている期待関数はdlt.expect、dlt.expect_or_drop、dlt.expect_or_failの3つであり、dlt.expect_or_warnは存在しません。"
  },
  {
    "id": 18,
    "question": "データエンジニアリングチームは、Lakehouseで管理しているテーブルがオーバーパーティショニングされていないかを知りたいと考えています。\n Delta Lakeテーブルがオーバーパーティショニングされていることを示す指標は、以下のうちどれですか？",
    "choices": [
      {
        "text": "テーブル内のデータが無期限に到着し続ける場合",
        "is_correct": false
      },
      {
        "text": "テーブル内のほとんどのパーティションが1GB未満のデータを持つ場合",
        "is_correct": true
      },
      {
        "text": "テーブル内のパーティション数が多すぎない場合",
        "is_correct": false
      },
      {
        "text": "テーブル内のほとんどのパーティションが1GB以上のデータを持つ場合",
        "is_correct": false
      }
    ],
    "explanation": "<p>オーバーパーティショニングまたは不適切なパーティショニングされたデータは、パフォーマンスに大きな影響を与えます。パーティション境界を越えてファイルを結合または圧縮できないため、パーティション分割された小規模なテーブルはストレージコストとスキャン対象のファイル総数を増加させます。これにより、ほとんどの一般的なクエリのパフォーマンスが低下します。</p><p><strong>オーバーパーティショニングの問題：</strong></p><ul><li>多数の小さなファイルが作成され、ストレージ管理が複雑になります</li><li>クエリ実行時にスキャンする必要があるファイル数が増加します</li><li>ファイル圧縮（compaction）の効率が低下します</li><li>メタデータ管理のオーバーヘッドが増加します</li></ul><p><strong>オーバーパーティショニングの指標：</strong></p><p>テーブル内のほとんどのパーティションが<strong>1GB未満のデータ</strong>を持つ場合、そのテーブルはオーバーパーティショニングされている可能性が高いです。一般的には、各パーティションが数ギガバイト以上のデータを含むことが推奨されます。</p><p><strong>パーティショニング戦略の最適化：</strong></p><ul><li>各パーティションが最低1GB以上のデータを持つように設計する</li><li>パーティション列を慎重に選択し、クエリパターンと合致させる</li><li>必要に応じてパーティション戦略を再評価・調整する</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "Delta Lakeテーブルがオーバーパーティショニングされている場合、ほとんどのパーティションが1GB未満のデータを保有し、これはストレージコスト増加とクエリパフォーマンス低下につながります。"
  },
  {
    "id": 19,
    "question": "既存のクラスターを起動し、ノートブックをアタッチするために、データエンジニアが必要とする最小限のパーミッションを説明しているのはどれですか？",
    "choices": [
      {
        "text": "クラスター作成の許可 + クラスターに対する「Can Restart」権限",
        "is_correct": false
      },
      {
        "text": "クラスターに対する「Can Attach To」権限",
        "is_correct": false
      },
      {
        "text": "クラスターに対する「Can Manage」権限",
        "is_correct": false
      },
      {
        "text": "クラスターに対する「Can Restart」権限",
        "is_correct": true
      }
    ],
    "explanation": "<p>Databricksでは2つのタイプのクラスターパーミッションを設定できます：</p><ul><li><strong>クラスター作成の許可（Allow cluster creation）</strong> - クラスターを作成する能力を制御する権利</li><li><strong>クラスターレベルのパーミッション</strong> - 特定のクラスターを使用および変更する能力を制御します</li></ul><p><strong>クラスターレベルのパーミッション種類：</strong></p><ul><li><strong>No Permissions</strong> - パーミッションなし</li><li><strong>Can Attach To</strong> - クラスターへのアタッチのみ可能</li><li><strong>Can Restart</strong> - クラスターの再起動とノートブックのアタッチが可能</li><li><strong>Can Manage</strong> - クラスターの完全な管理が可能</li></ul><p><strong>既存クラスターへのアタッチと起動：</strong></p><p>既存のクラスターを起動してノートブックをアタッチするには、<strong>「Can Restart」権限</strong>が最小限必要です。この権限があれば、クラスターの起動（再起動）とノートブックのアタッチの両方の操作が可能になります。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "既存クラスターを起動してノートブックをアタッチするには、「Can Restart」権限が最小限必要であり、これによりクラスターの再起動とアタッチ操作が可能になります。"
  },
  {
    "id": 20,
    "question": "データエンジニアが、employee_name、department、salaryの列を持つPySpark DataFrameを持っています。各従業員に対して、給与に基づいて部門内でティアを割り当てたいと考えており、給与が同じ場合でも各従業員は一意のティア番号を持つ必要があります。\n部門でウィンドウを定義し、給与を降順で並べ替えてウィンドウ仕様を作成しました：\nwindow_spec = Window.partitionBy(\"department\").orderBy(df[\"salary\"].desc())\n以下のうち、このウィンドウを使用してティア列を正しく計算する関数はどれですか？",
    "choices": [
      {
        "text": "df.withColumn(\"tier\", dense_rank().over(window_spec))",
        "is_correct": false
      },
      {
        "text": "df.withColumn(\"tier\", row_number().over(window_spec))",
        "is_correct": true
      },
      {
        "text": "df.withColumn(\"tier\", percent_rank().over(window_spec))",
        "is_correct": false
      },
      {
        "text": "df.withColumn(\"tier\", rank().over(window_spec))",
        "is_correct": false
      }
    ],
    "explanation": "<p>期待される出力では、給与が同じ場合でも各従業員が部門内で一意のティア番号を持つ必要があります。これを達成するには、<code>row_number()</code>関数を使用する必要があります。</p><p><strong>row_number()関数の特徴：</strong></p><ul><li>指定されたウィンドウ内の各行に対して連続した番号を生成します</li><li>重複する値（この場合は給与）に関わらず、一意性が保証されます</li><li>部門内で給与の降順に1、2、3、...と割り当てられます</li></ul><p><strong>他のウィンドウ関数との比較：</strong></p><ul><li><strong>rank()</strong> - 同じ給与の従業員に同じ番号を割り当て、その後の番号をスキップします。一意性がありません</li><li><strong>dense_rank()</strong> - 同じ給与の従業員に同じ番号を割り当てます。一意性がありません</li><li><strong>percent_rank()</strong> - 0から1の間の小数値を生成するため、整数のティア番号の要件に合いません</li></ul><p>したがって、各従業員に一意のティア番号を割り当てるには、<code>row_number().over(window_spec)</code>が唯一の適切な選択肢です。</p>",
    "tags": "データ処理コードの開発",
    "summary": "一意のティア番号を各従業員に割り当てるには、row_number()ウィンドウ関数を使用する必要があります。これにより、同じ給与値でも各行に一意の連続番号が生成されます。"
  },
  {
    "id": 21,
    "question": "小売企業がDatabricks Unity Catalog内のDeltaテーブルに販売データを保存しており、異なるクラウドプロバイダー上のDatabricksを使用している外部監査企業と、特定のテーブルを安全に共有する必要があります。\nデータの複製なしでこのタスクを実現できるのは、以下のうちどれですか？",
    "choices": [
      {
        "text": "Shallow clone",
        "is_correct": false
      },
      {
        "text": "Unity Catalogの外部スキーマ",
        "is_correct": false
      },
      {
        "text": "Databricks間Delta Sharing",
        "is_correct": true
      },
      {
        "text": "Databricks Connect",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricks間Delta Sharingは、アカウントやクラウドホストに関わらず、Unity Catalogが有効なワークスペースへのアクセス権を持つ任意のDatabricksクライアントとデータを安全に共有できます。</p><p><strong>Databricks間Delta Sharingの特徴：</strong></p><ul><li>異なるDatabricksアカウント間でのデータ共有を可能にします</li><li>異なるクラウドプロバイダー間での共有に対応しています</li><li>データの複製なしにリアルタイムアクセスを提供します</li><li>Unity Catalogが有効なワークスペースであれば利用可能です</li><li>パーミッションベースのアクセス制御により、セキュアな共有を実現します</li></ul><p><strong>他のオプションの制限：</strong></p><ul><li><strong>Shallow clone</strong> - 同一アカウント内でのみ利用可能で、異なるクラウドプロバイダー間では使用できません</li><li><strong>External schema in Unity Catalog</strong> - 外部データソースへのアクセスであり、Databricksアカウント間の共有には適しません</li><li><strong>Databricks Connect</strong> - リモートコンピュートへの接続用であり、データ共有メカニズムではありません</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Databricks間Delta Sharingは、異なるクラウドプロバイダー上のDatabricksアカウント間でのセキュアなデータ共有を、データ複製なしに実現します。"
  },
  {
    "id": 22,
    "question": "データエンジニアが、外部APIからDatabricksワークスペースへのデータ統合を必要とするプロジェクトに取り組んでいます。セキュリティ上の理由から、APIキーをノートブックに直接ハードコードしないことに決めました。代わりに、Databricks Secretsを使用して機密認証情報を安全に保存・管理しました：\ndatabricks secrets create-scope api_scope\ndatabricks secrets put-secret api_scope api_key\nこれでDatabricksノートブックからAPIキーを読み取り、外部APIエンドポイントにクエリしたいと考えています。\n以下のコード行のうち、データエンジニアがこのタスクを実現できるのはどれですか？",
    "choices": [
      {
        "text": "api_key = dbutils.secrets.get(\"api_scope\", \"api_key\")",
        "is_correct": true
      },
      {
        "text": "api_key = dbutils.secrets.get(\"api_key\", \"api_scope\")",
        "is_correct": false
      },
      {
        "text": "api_key = dbutils.secrets.read(\"api_key\", \"api_scope\")",
        "is_correct": false
      },
      {
        "text": "api_key = dbutils.secrets.read(\"api_scope\", \"api_key\")",
        "is_correct": false
      }
    ],
    "explanation": "<p><code>dbutils.secrets.get(SCOPE, KEY)</code>は、シークレットを安全に取得するために使用される正しいメソッドです。</p><p><strong>メソッドの構文：</strong></p><ul><li>第1引数：スコープ名（<code>api_scope</code>）</li><li>第2引数：シークレットキー（<code>api_key</code>）</li></ul><p><strong>Databricks Secretsの使用方法：</strong></p><ul><li><code>dbutils.secrets.get()</code>メソッドを使用してシークレットを取得します</li><li>スコープとキーの順序が重要です。スコープを最初に、キーを次に指定します</li><li><code>dbutils.secrets.read()</code>メソッドは存在しません</li></ul><p><strong>その他のオプションの誤り：</strong></p><ul><li><code>dbutils.secrets.get(\"api_key\", \"api_scope\")</code> - 引数の順序が逆です。スコープが最初である必要があります</li><li><code>dbutils.secrets.read()</code> - このメソッドはDatabricks SecretsのAPIに存在しません</li></ul><p>したがって、正しいコードは<code>api_key = dbutils.secrets.get(\"api_scope\", \"api_key\")</code>です。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Databricks Secretsから機密情報を取得するには、dbutils.secrets.get(scope, key)メソッドを使用し、第1引数にスコープ名、第2引数にシークレットキーを指定する必要があります。"
  },
  {
    "id": 23,
    "question": "Delta Lakeの削除ベクトル（Deletion Vectors）を最も適切に説明しているのはどれですか？",
    "choices": [
      {
        "text": "Delta Lakeテーブル内のすべてのデータファイルから削除された行を永続的に削除するデータ構造",
        "is_correct": false
      },
      {
        "text": "ファイルを物理的に書き直すことなく、データファイル内のどの行が論理的に削除されたかを追跡するメタデータ構造",
        "is_correct": true
      },
      {
        "text": "削除された行が「_deletion_log」と呼ばれる個別のテーブルパーティションにアーカイブされるまで保存する一時ファイル",
        "is_correct": false
      },
      {
        "text": "削除された行の物理的な位置をUnity Catalogボリュームに直接保存することで、削除された行に対するクエリを加速するインデックス",
        "is_correct": false
      }
    ],
    "explanation": "<p>Delta Lakeにおいて、削除ベクトル（Deletion Vectors）は行レベルの削除と更新を効率的に処理するために導入されたパフォーマンス最適化機能です。</p><p><strong>削除ベクトルの特徴：</strong></p><ul><li>行が削除または更新された場合、Parquetファイル全体を書き直す必要がなくなります</li><li>どの行がデータファイル内で論理的に削除されたかをメタデータ構造で追跡します</li><li>このメタデータはデータファイルとは別に保存されます</li><li>クエリは自動的にこれらの削除された行をスキップします。元のParquetファイルは変更されたままです</li><li>DELETE、UPDATE、MERGEの頻繁な操作に対するパフォーマンスを大幅に向上させます</li></ul><p><strong>削除ベクトルのメリット：</strong></p><ul><li>ファイルの物理的な書き直しを回避するため、I/Oコストが削減されます</li><li>ストレージ効率が向上します</li><li>更新操作が迅速に完了します</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "削除ベクトルはDelta Lakeのメタデータ構造であり、ファイルの物理的な書き直しなしに行の論理的な削除を追跡し、DELETE/UPDATE/MERGE操作のパフォーマンスを大幅に向上させます。"
  },
  {
    "id": 24,
    "question": "データエンジニアがAuto Loaderを使用してJPEG形式のX線画像ファイルをDeltaテーブルに取り込む必要があります。\n以下のコードスニペットのうち、データエンジニアがこのタスクを実現できるのはどれですか？",
    "choices": [
      {
        "text": "df = spark.readStream.format(\"cloudFiles\") \\\n          .option(\"cloudFiles.format\", \"binaryFile\") \\\n          .load(\"/source/x-ray/*.jpg\")",
        "is_correct": false
      },
      {
        "text": "df = spark.readStream.format(\"cloudFiles\") \\\n          .option(\"cloudFiles.format\", \"jpg\") \\\n          .load(\"/source/x-ray\")",
        "is_correct": false
      },
      {
        "text": "df = spark.readStream.format(\"cloudFiles\") \\\n          .option(\"cloudFiles.format\", \"image\") \\\n          .option(\"pathGlobfilter\", \"*.jpg\") \\\n          .load(\"/source/x-ray\")",
        "is_correct": false
      },
      {
        "text": "df = spark.readStream.format(\"cloudFiles\") \\\n          .option(\"cloudFiles.format\", \"binaryFile\") \\\n          .option(\"pathGlobfilter\", \"*.jpg\") \\\n          .load(\"/source/x-ray\")",
        "is_correct": true
      }
    ],
    "explanation": "<p>Auto Loaderを使用して画像ファイルを取り込む場合、重要な設定があります。</p><p><strong>必要な設定：</strong></p><ul><li><code>cloudFiles.format</code>オプションに<code>\"binaryFile\"</code>を指定します。画像はバイナリデータであるため、テキスト形式ではなくバイナリ形式で読み込む必要があります</li><li><code>pathGlobfilter</code>オプションを使用して、ワイルドカードパターン（<code>*.jpg</code>）に基づいて入力ファイルをフィルタリングします</li></ul><p><strong>その他のオプションの問題：</strong></p><ul><li><code>cloudFiles.format</code>として<code>\"jpg\"</code>を指定することはできません。サポートされている形式はテキスト形式（csv、json、textなど）またはバイナリ形式に限られます</li><li><code>cloudFiles.format</code>として<code>\"image\"</code>を指定することはできません。この形式はAuto Loaderでサポートされていません</li><li>グロブパターンはload()メソッド内のパスに含めるのではなく、<code>pathGlobfilter</code>オプションで指定する必要があります</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Auto Loaderで画像ファイルを取り込むには、cloudFiles.formatに「binaryFile」を指定し、pathGlobfilterオプションで対象ファイルをフィルタリングする必要があります。"
  },
  {
    "id": 25,
    "question": "以下のマルチタスクジョブが与えられています。\nタスク1に関連するノートブック1でエラーが発生した場合、このジョブの実行結果を説明しているのはどれですか？",
    "choices": [
      {
        "text": "タスク1は部分的に失敗します。タスク2とタスク3はスキップされます。",
        "is_correct": true
      },
      {
        "text": "タスク1は完全に失敗します。タスク2とタスク3はスキップされます。",
        "is_correct": false
      },
      {
        "text": "タスク1は部分的に失敗します。タスク2とタスク3は実行されて成功します。",
        "is_correct": false
      },
      {
        "text": "タスク1は完全に失敗します。タスク2とタスク3は実行されて成功します。",
        "is_correct": false
      }
    ],
    "explanation": "<p>ジョブ実行中にタスクが失敗すると、そのタスクに依存するすべてのタスクはスキップされます。</p><p><strong>タスクの失敗の性質：</strong></p><ul><li>タスクの失敗は常に部分的なものです</li><li>ノートブック内でコード失敗の前に実行された操作は正常に実行されてコミットされます</li><li>コード失敗後の操作はスキップされます</li></ul><p><strong>マルチタスクジョブの依存関係処理：</strong></p><ul><li>タスク1が失敗すると、タスク1に依存するすべてのダウンストリームタスク（この場合はタスク2とタスク3）がスキップされます</li><li>タスク1自体は部分的に失敗します。つまり、エラーが発生する前のコードは実行されていますが、エラー後の操作は実行されません</li><li>ジョブ全体の状態は失敗として記録されます</li></ul><p>このメカニズムにより、依存タスクが無意味に実行されることを防ぎ、リソースを節約できます。</p>",
    "tags": "デプロイとデバッグ",
    "summary": "Databricks Jobsでタスクが失敗すると、依存タスクはスキップされ、失敗したタスク自体は失敗前の操作がコミットされる部分的な失敗状態となります。"
  },
  {
    "id": 26,
    "question": "データエンジニアがforeachBatchロジックを使用してターゲットDeltaテーブルにデータをアップサートしています。\n各新しいマイクロバッチ処理で呼び出される関数を以下に示します。ブランク部分があります：\ndef upsert_data(microBatchDF, batch_id):\n    microBatchDF.createOrReplaceTempView(\"sales_microbatch\")\n\n    sql_query = \"\"\"\n      MERGE INTO sales_silver a\n      USING sales_microbatch b\n      ON a.item_id=b.item_id AND a.item_timestamp=b.item_timestamp\n      WHEN NOT MATCHED THEN INSERT *\n    \"\"\"\n\n    ________________\nDatabricks Runtime 10.5以上の最新版がインストールされたクラスター上で、このSQLクエリを実行するために、ブランクを正しく埋めるオプションはどれですか？",
    "choices": [
      {
        "text": "spark.sql(sql_query)",
        "is_correct": false
      },
      {
        "text": "microBatchDF._jdf.sparkSession().sql(sql_query)",
        "is_correct": false
      },
      {
        "text": "microBatchDF.sparkSession.sql(sql_query)",
        "is_correct": true
      },
      {
        "text": "microBatchDF.sql(sql_query)",
        "is_correct": false
      }
    ],
    "explanation": "<p>通常、SQLクエリを実行するには<code>spark.sql()</code>関数を使用します。しかし、このケースではマイクロバッチプロセス内からグローバルなsparkセッションにアクセスできません。代わりに、マイクロバッチDataFrameからローカルのsparkセッションにアクセスする必要があります。</p><p><strong>Databricks Runtime 10.5以上での構文：</strong></p><p>Databricks Runtime 10.5以上のクラスターでは、ローカルsparkセッションにアクセスする構文は以下の通りです：</p><p><code>microBatchDF.sparkSession.sql(sql_query)</code></p><p><strong>各オプションの説明：</strong></p><ul><li><code>spark.sql(sql_query)</code> - foreachBatch内ではグローバルspark参照にアクセスできないため失敗します</li><li><code>microBatchDF._jdf.sparkSession().sql(sql_query)</code> - Java APIの内部実装を使用しており、推奨されません</li><li><code>microBatchDF.sparkSession.sql(sql_query)</code> - microBatchDataFrameから直接sparkSessionプロパティを介してアクセスし、SQLクエリを実行します（推奨）</li><li><code>microBatchDF.sql(sql_query)</code> - DataFrameオブジェクトにはsql()メソッドがないため失敗します</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Structured StreamingのforeachBatch内でSQLクエリを実行するには、microBatchDF.sparkSession.sql()を使用してマイクロバッチDataFrameからローカルsparkセッションにアクセスする必要があります。"
  },
  {
    "id": 27,
    "question": "Databricks SQLのQuery Profileビュー内に含まれていないパネルは、以下のうちどれですか？",
    "choices": [
      {
        "text": "Query source",
        "is_correct": true
      },
      {
        "text": "Top operators",
        "is_correct": false
      },
      {
        "text": "Query text",
        "is_correct": false
      },
      {
        "text": "Details",
        "is_correct": false
      }
    ],
    "explanation": "<p>Query Profileビューは3つのパネルで構成されており、クエリ実行に関する詳細な情報を提供します。</p><p><strong>Query Profileビューに含まれるパネル：</strong></p><ul><li><strong>Details</strong> - クエリ実行メトリクスと詳細な実行情報を表示します</li><li><strong>Top operators</strong> - クエリ実行に関わる主要な操作を表示し、パフォーマンスボトルネックの特定に役立ちます</li><li><strong>Query text</strong> - 実行されたSQL コードそのものを表示します</li></ul><p><strong>Query sourceパネルについて：</strong></p><p>「Query source」というパネルはQuery Profileビューに含まれていません。これはBIツールやアプリケーション内での他の機能でクエリの発行元情報を表示する場合には使用されることもありますが、Query Profile内には実装されていません。</p>",
    "tags": "モニタリングとアラート",
    "summary": "Databricks SQLのQuery Profileビューには、Details、Top operators、Query textの3つのパネルが含まれており、Query sourceパネルは含まれていません。"
  },
  {
    "id": 28,
    "question": "データエンジニアがAuto Loaderを使用してストリーミング取り込みパイプラインを設計しており、パイプラインはスキーマ変更で失敗しないという要件があり、同時に到着する新しい列をキャプチャして後で検査できる必要があります。\n エンジニアが使用すべき設定はどれですか？",
    "choices": [
      {
        "text": "addNewColumns",
        "is_correct": false
      },
      {
        "text": "none",
        "is_correct": false
      },
      {
        "text": "failOnNewColumns",
        "is_correct": false
      },
      {
        "text": "rescue",
        "is_correct": true
      }
    ],
    "explanation": "<p>rescueモードは、スキーマが進化しないようにしるため、新しい列が追加されてもストリームは失敗しません。代わりに、新しい列はrescued dataカラムに保存され、ストリームを中断することなく後で検査できます。</p><p><strong>rescueモードの特徴：</strong></p><ul><li>スキーマは固定のままで変更されません</li><li>予期しない新しい列が到着しても、パイプラインは失敗しません</li><li>新しい列は<code>_rescued_data</code>という特別なカラムに保存されます</li><li>後で<code>_rescued_data</code>の内容を検査して、スキーマ進化の必要性を判断できます</li></ul><p><strong>各モードの説明：</strong></p><ul><li><code>addNewColumns</code> - 新しい列が到着するとスキーマを自動的に進化させます。検査の要件には合いません</li><li><code>none</code> - 新しい列が到着するとエラーが発生し、パイプラインが失敗します</li><li><code>failOnNewColumns</code> - 新しい列が到着するとパイプラインが失敗します</li><li><code>rescue</code> - 新しい列をキャプチャしながらパイプラインの失敗を防ぎます（推奨）</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Auto Loaderのrescueモードは、スキーマ変更時にパイプラインを失敗させずに、新しい列を_rescued_dataカラムにキャプチャして後で検査できます。"
  },
  {
    "id": 29,
    "question": "Lakeflow Declarative Pipelineの権限を、最小権限から最大権限の順に正しく並べたのはどれですか？",
    "choices": [
      {
        "text": "CAN VIEW → CAN RUN → CAN MANAGE",
        "is_correct": true
      },
      {
        "text": "CAN VIEW → CAN MANAGE → CAN RUN",
        "is_correct": false
      },
      {
        "text": "CAN MANAGE → CAN VIEW → CAN RUN",
        "is_correct": false
      },
      {
        "text": "CAN RUN → CAN VIEW → CAN MANAGE",
        "is_correct": false
      }
    ],
    "explanation": "<p>権限の階層では、最小権限から最大権限への順序は、最小限のアクセスから始まり、完全な制御で終わります。</p><p><strong>各権限レベルの説明：</strong></p><ul><li><strong>CAN VIEW</strong> - パイプラインの詳細、Spark UI、ドライバーログの表示のみが可能です。最小限の権限です</li><li><strong>CAN RUN</strong> - パイプラインの実行が可能ですが、パイプラインの修正はできません。中程度の権限です</li><li><strong>CAN MANAGE</strong> - 実行、編集、削除、権限管理を含む完全な制御が可能です。最大限の権限です</li></ul><p><strong>権限階層の概念：</strong></p><p>権限は累積的です。CAN MANAGE権限を持つユーザーは、CAN RUNおよびCAN VIEWの操作も実行できます。これはジョブの権限にも同じ概念が適用されます。</p>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "LDPの権限は最小権限から最大権限へ「CAN VIEW → CAN RUN → CAN MANAGE」の順序で段階的に増加し、各レベルはより高度な操作を許可します。"
  },
  {
    "id": 30,
    "question": "Unity Catalogのマネージドテーブルで予測最適化（Predictive Optimization）を有効にすることの利点を説明しているのは、以下のうちどれですか？2つを選択してください：",
    "choices": [
      {
        "text": "テーブル列の欠落値を自動的に予測することで、データプロファイリングを改善します。",
        "is_correct": false
      },
      {
        "text": "テーブルにデータが書き込まれる際に統計情報を収集することで、クエリパフォーマンスを向上させます。",
        "is_correct": true
      },
      {
        "text": "ストレージ使用量を予測し、階層間でデータを再配置することで、全体的なコストを削減します。",
        "is_correct": true
      },
      {
        "text": "テーブルに対して自動的にメンテナンス操作を実行することで、メンテナンスを簡素化します。",
        "is_correct": false
      },
      {
        "text": "書き込み時にデータを自動的に暗号化し、機密列をマスクすることで、データプライバシーを向上させます。",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricks Unity CatalogのPredictive Optimizationは、Unity Catalog内のマネージドテーブルを自動的に最適化します。</p><p><strong>Predictive Optimizationが実現する主な利点：</strong></p><ul><li><strong>自動メンテナンス</strong> - VACUUM、OPTIMIZE、ANALYZEなどのバックグラウンドメンテナンスタスクを自動実行し、フラグメンテーション削減とパフォーマンス向上を実現します</li><li><strong>統計情報の自動収集</strong> - 書き込み時にテーブル統計を自動収集し、クエリオプティマイザーがより適切な判断を下すことを支援し、クエリパフォーマンスを向上させます</li></ul><p><strong>その他のオプションの説明：</strong></p><ul><li>データプロファイリングでの欠落値予測 - Predictive Optimizationの機能ではありません</li><li>ストレージ階層間のデータ再配置 - Predictive Optimizationは統計収集と自動メンテナンスに焦点を当てており、階層間のデータ移動は含まれません</li><li>自動暗号化とマスキング - これはセキュリティ機能であり、Predictive Optimizationの範囲外です</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "Predictive Optimizationは、Unity Catalogのマネージドテーブルに対してVACUUM、OPTIMIZE、ANALYZEなどの自動メンテナンスを実行し、統計情報を自動収集することでクエリパフォーマンスを向上させます。"
  },
  {
    "id": 31,
    "question": "データエンジニアリングチームがKafkaソースデータをマルチプレックスbroadzeテーブルに取り込むパイプラインを運用しており、このDeltaテーブルはtopicとmonth列に基づいてパーティション分割されています。\n新しいデータエンジニアが、'user_activity'トピックに個人識別情報（PII）が含まれており、会社のService-Level Agreement（SLA）に基づいて2ヶ月ごとに削除する必要があることに気付きました。\nこの要件を満たすために、テーブルパーティショニングがどのように役立つかを説明しているのはどれですか？",
    "choices": [
      {
        "text": "テーブルパーティショニングは削除後のPIIデータへのタイムトラベルを許可しません",
        "is_correct": false
      },
      {
        "text": "テーブルパーティショニングは大きなデータファイルを削除する際にクエリレイテンシを削減します",
        "is_correct": false
      },
      {
        "text": "テーブルパーティショニングはVACUUMコマンドを実行せずに即座にファイルを削除できます",
        "is_correct": false
      },
      {
        "text": "テーブルパーティショニングは削除クエリがパーティション境界を活用できるようにします",
        "is_correct": true
      }
    ],
    "explanation": "<p>日時列でのパーティショニングは、テーブルから特定の年齢より古いデータを削除する際に活用できます。例えば、前月のデータを削除することを決定できます。この場合、ファイル削除はパーティション境界に沿って整理され、クリーンに実行されます。</p><p><strong>パーティショニングによるPII削除の利点：</strong></p><ul><li><strong>効率的なファイル削除</strong> - パーティション境界に沿ったデータ削除により、不要なファイルをターゲット指定して削除できます</li><li><strong>パーティション単位の削除</strong> - monthパーティションを活用することで、2ヶ月前のパーティション全体を一度に削除できます</li><li><strong>クエリの最適化</strong> - 削除クエリはパーティション境界をスキャンするだけで済み、テーブル全体をスキャンする必要がありません</li><li><strong>ストレージコストの削減</strong> - 同様に、古いデータをパーティション境界でより安価なストレージ階層にアーカイブ・バックアップできます</li></ul><p><strong>その他のオプションの誤り：</strong></p><ul><li>タイムトラベル制限 - パーティショニングはタイムトラベル機能に影響しません</li><li>クエリレイテンシ削減 - これはパーティショニングの主な目的ではありません</li><li>VACUUM不要 - VACUUMコマンドは削除マークを付けられたファイルのクリーンアップに依然として必要です</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "テーブルパーティショニングにより、削除クエリはパーティション境界を活用して効率的にPIIデータを削除でき、SLA要件への準拠を支援します。"
  },
  {
    "id": 32,
    "question": "金融サービス企業がOracleデータベース内に極めて機密性の高いクライアント投資ポートフォリオを管理しており、Microsoft SQL Serverでトランザクショナルな市場データを保持しています。HIPAA規制により、データはその場に留まる必要があり、不要に複製または エクスポートされてはいけません。しかし、内部監査チームはアクセス制御を厳しく維持しながら、Databricksで両システムにまたがる統一レポートを生成する必要があります。\nデータの複製なしにこれらのデータベースへの直接クエリを可能にするために、データチームが使用すべきソリューションはどれですか？",
    "choices": [
      {
        "text": "Shallow clone",
        "is_correct": false
      },
      {
        "text": "Partner Connect",
        "is_correct": false
      },
      {
        "text": "Lakehouse Federation",
        "is_correct": true
      },
      {
        "text": "Delta Sharing",
        "is_correct": false
      }
    ],
    "explanation": "<p>Lakehouse Federationは、OracleやSQL Serverなどの外部データベース内のデータに対して、データの複製、取り込み、移動を必要とせずに直接クエリすることを可能にするDatabricksの機能です。</p><p><strong>Lakehouse Federationの特徴：</strong></p><ul><li>複数のデータソース上に統合分析レイヤーを提供します</li><li>様々なプラットフォームからのデータを単一の論理ビューに結合できるフェデレートクエリをサポートします</li><li>データの物理的な移動やレプリケーションが不要です</li><li>外部データベースへの直接アクセスにより、データはオンプレミスまたは元のクラウド環境に留まります</li></ul><p><strong>企業の要件への適合性：</strong></p><ul><li><strong>規制要件への準拠</strong> - HIPAA規制の下で、データを移動またはレプリケートすることなく、元の場所に保持します</li><li><strong>統一レポート生成</strong> - OracleとSQL Serverの両方のデータに対して単一のDatabricksプラットフォームからクエリできます</li><li><strong>アクセス制御</strong> - Databricksのアクセス制御メカニズムを通じて、きめ細かいパーミッション管理が可能です</li></ul><p><strong>その他のオプションの制限：</strong></p><ul><li><code>Shallow clone</code> - Delta Lake内でのみ機能し、外部データベースへのアクセスに対応していません</li><li><code>Partner Connect</code> - パートナー統合ソリューションであり、直接クエリ機能には対応していません</li><li><code>Delta Sharing</code> - Databricks間でのデータ共有機能であり、OracleやSQL Serverなどのレガシーデータベースには対応していません</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Lakehouse Federationは、OracleやSQL Serverなどの外部データベースに対してDatabricksから直接クエリを実行でき、データの複製なしにHIPAA規制要件に準拠しながら統一レポートを生成できます。"
  },
  {
    "id": 33,
    "question": "Delta Lake Change Data Feed（CDF）の保持ポリシーに関する以下のステートメントのうち、正しいのはどれですか？",
    "choices": [
      {
        "text": "テーブルに対してVACUUMコマンドを実行してもCDFデータは削除されません",
        "is_correct": false
      },
      {
        "text": "CDFデータファイルはVACUUM CHANGESコマンドを実行することでパージできます",
        "is_correct": false
      },
      {
        "text": "テーブルに対してVACUUMコマンドを実行するとCDFデータも削除されます",
        "is_correct": true
      },
      {
        "text": "テーブルに対してVACUUMコマンドを実行してもCASCADE句がtrueに設定されていない限り、CDFデータは削除されません",
        "is_correct": false
      }
    ],
    "explanation": "<p>Databricksは、UPDATE、DELETE、MERGE操作に対する変更データをテーブルディレクトリ下の<code>_change_data</code>フォルダに記録します。</p><p><strong>CDFデータの保持ポリシー：</strong></p><ul><li><code>_change_data</code>フォルダ内のファイルはテーブルの保持ポリシーに従います</li><li>テーブルに対してVACUUMコマンドを実行すると、Change Data Feed（CDF）データも一緒に削除されます</li><li>CDFデータはテーブルの通常のデータと同じ保持期間に基づいて管理されます</li></ul><p><strong>VACUUMコマンドの動作：</strong></p><ul><li>VACUUMは、テーブルのトランザクションログで参照されなくなったファイルを削除します</li><li>このファイル削除操作は<code>_change_data</code>フォルダ内のファイルにも適用されます</li><li>特別なコマンドやフラグは必要なく、標準的なVACUUMコマンドでCDFデータも削除されます</li></ul><p><strong>その他のオプションの誤り：</strong></p><ul><li><code>VACUUM CHANGES</code>というコマンドは存在しません</li><li>CASCADEオプションはVACUUMのCDF削除には関連していません</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Delta LakeのCDFデータは_change_dataフォルダに保存され、テーブルの保持ポリシーに従うため、VACUUMコマンド実行時にCDFデータも削除されます。"
  },
  {
    "id": 34,
    "question": "Apache SparkでPandas UDFの実行パフォーマンスを向上させるために使用されるフォーマットは、以下のうちどれですか？",
    "choices": [
      {
        "text": "Apache Arrow",
        "is_correct": true
      },
      {
        "text": "Apache Kafka",
        "is_correct": false
      },
      {
        "text": "Delta Lake",
        "is_correct": false
      },
      {
        "text": "Apache Iceberg",
        "is_correct": false
      }
    ],
    "explanation": "<p>Apache Arrowは、JVMとPythonプロセス間でデータを転送する際にシリアライゼーションオーバーヘッドなしに、効率的なカラムナーインメモリデータ形式を提供します。</p><p><strong>Pandas UDFとApache Arrowの関係：</strong></p><ul><li><strong>効率的なデータ転送</strong> - Apache Arrowのカラムナー形式により、行ベース形式と比較してデータ転送がより効率的です</li><li><strong>シリアライゼーション削減</strong> - JVMとPython間でのシリアライゼーションオーバーヘッドが大幅に削減されます</li><li><strong>パフォーマンス向上</strong> - 標準的なUDFと比較して、Pandas UDFはApache Arrowを使用することで大幅なパフォーマンス改善が実現します</li><li><strong>ベクトル化処理</strong> - Apache Arrowフォーマットにより、バッチ単位でのベクトル化されたデータ処理が可能になります</li></ul><p><strong>その他のオプションについて：</strong></p><ul><li><code>Apache Kafka</code> - メッセージングシステムであり、UDFパフォーマンス向上に関連していません</li><li><code>Delta Lake</code> - ストレージフォーマットであり、Pandas UDFのデータ転送には直接関連していません</li><li><code>Apache Iceberg</code> - テーブル形式であり、Pandas UDFのパフォーマンス向上には使用されていません</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "Pandas UDFはApache Arrowのカラムナーインメモリ形式を使用することで、JVMとPython間のシリアライゼーション削減により、標準的なUDFと比較して大幅なパフォーマンス向上を実現します。"
  },
  {
    "id": 35,
    "question": "「Delta Lakeに組み込まれた機能で、Delta Lakeテーブルに関するCDCフィードを自動的に生成できる」\n上記のステートメントで説明されているのはどれですか？",
    "choices": [
      {
        "text": "Change Data Feed（CDF）",
        "is_correct": true
      },
      {
        "text": "Auto Optimize",
        "is_correct": false
      },
      {
        "text": "Optimized writes",
        "is_correct": false
      },
      {
        "text": "Slowly Changing Dimension（SCD）",
        "is_correct": false
      }
    ],
    "explanation": "<p>Change Data Feed（CDF）は、Delta Lakeに組み込まれた新しい機能であり、Delta Lakeテーブルに関するCDC（Change Data Capture）フィードを自動的に生成できます。</p><p><strong>Change Data Feed（CDF）の特徴：</strong></p><ul><li>Delta Lakeテーブルに書き込まれたすべてのデータに対する行レベルの変更を記録します</li><li>行データと、その行が挿入、削除、または更新されたかを示すメタデータを含みます</li><li>INSERT、UPDATE、DELETE操作によって変更されたデータをトラッキングします</li><li>タイムトラベルと組み合わせて、特定の時点での変更を確認できます</li></ul><p><strong>各オプションの説明：</strong></p><ul><li><code>Auto Optimize</code> - テーブルの最適化を自動的に実行する機能ですが、CDCフィードの生成ではありません</li><li><code>Optimized writes</code> - 書き込み操作を最適化する機能で、CDCとは無関係です</li><li><code>Slowly Changing Dimension（SCD）</code> - データモデリングパターンであり、CDFとは異なる概念です</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Change Data Feed（CDF）はDelta Lakeの組み込み機能であり、テーブルへの変更（INSERT、UPDATE、DELETE）を自動的に追跡し、行レベルの変更メタデータを記録します。"
  },
  {
    "id": 36,
    "question": "Apache Sparkのダイナミックファイルプルーニング（Dynamic File Pruning）を最も適切に説明しているのはどれですか？",
    "choices": [
      {
        "text": "データファイルをワーカーノード間で複製し、データローカリティとクエリパフォーマンスを向上させる最適化技術",
        "is_correct": false
      },
      {
        "text": "ランタイム時にファイルを小さなチャンクに動的に再パーティション化し、エグゼキューター間のワークロードバランスを取る最適化技術",
        "is_correct": false
      },
      {
        "text": "Sparkジョブ実行中に大きなファイルを自動的に圧縮し、ストレージ使用量を削減する最適化技術",
        "is_correct": false
      },
      {
        "text": "ランタイムフィルター情報に基づいてクエリ実行中に関連性のないデータファイルの読み取りをスキップする最適化技術",
        "is_correct": true
      }
    ],
    "explanation": "<p>Apache Sparkのダイナミックファイルプルーニング（Dynamic File Pruning）は、ランタイムフィルター情報を活用してクエリ実行中に関連性のないデータファイルの読み取りをスキップする最適化技術です。</p><p><strong>ダイナミックファイルプルーニングの特徴：</strong></p><ul><li>クエリの述語（WHERE句の条件など）に基づいて、スキャン対象外のファイルを実行時に特定します</li><li>クエリ述語に一致しないファイルの読み取りを回避することで、I/Oを削減します</li><li>ランタイムに動的に情報が収集されるため、静的なパーティション情報だけでなく、より細粒度の最適化が可能です</li><li>クエリのパフォーマンスを大幅に向上させ、スキャン対象のデータ量を削減します</li></ul><p><strong>その他のオプションの説明：</strong></p><ul><li>データファイルの複製 - ダイナミックファイルプルーニングではなく、データレプリケーション戦略です</li><li>ランタイムの再パーティション化 - 動的パーティショニングですが、ダイナミックファイルプルーニングとは異なる概念です</li><li>自動ファイル圧縮 - ファイル圧縮機能であり、ダイナミックファイルプルーニングではありません</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "ダイナミックファイルプルーニングはランタイムフィルター情報を活用してクエリに不要なファイルの読み取りをスキップし、I/Oを削減してクエリパフォーマンスを向上させます。"
  },
  {
    "id": 37,
    "question": "データエンジニアがSpark UIを通じてSparkジョブを分析しており、特定のステージの完了した27個のタスクについて以下のサマリーメトリクスを確認しています。\n これらの統計情報からデータエンジニアが導き出せる結論はどれですか？",
    "choices": [
      {
        "text": "複数のタスクがほぼ空のパーティション上で動作しています",
        "is_correct": true
      },
      {
        "text": "すべてのタスクが空またはほぼ空のパーティション上で動作しています",
        "is_correct": false
      },
      {
        "text": "複数のタスクが大量にスキューされたデータを含むパーティション上で動作しています",
        "is_correct": false
      },
      {
        "text": "すべてのタスクが均等な量のデータを含むパーティション上で動作しています",
        "is_correct": false
      }
    ],
    "explanation": "<p>通常、計算がタスク間で完全に対称的である場合、すべての統計情報が50パーセンタイル値の周辺にクラスタリングされているはずです。</p><p><strong>メトリクス分析：</strong></p><ul><li>最小値（Min）がゼロに近い値が複数見られます</li><li>これはいくつかのパーティションがほぼ空である、または完全に空であることを示唆しています</li><li>中央値（Median）と最大値（Max）の値は妥当な範囲内にありますが、最小値と中央値の間に大きなギャップが存在します</li></ul><p><strong>パーティションスキューの診断：</strong></p><ul><li>最小値がゼロに近い複数のタスクの存在は、パーティション分割が不均等であることを示します</li><li>一部のパーティションにはデータがほとんど含まれていないのに対し、他のパーティションには通常のデータ量が含まれています</li><li>これはパーティションスキューの古典的なパターンです</li></ul><p><strong>パフォーマンスへの影響：</strong></p><ul><li>空のパーティションは処理時間を浪費します</li><li>リソースを効率的に使用できていない状態です</li><li>パーティション戦略の見直しが必要です</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "Spark UIのメトリクスで最小値がゼロに近い複数のタスクが見られる場合、一部のパーティションがほぼ空であり、パーティションスキューが発生していることを示しています。"
  },
  {
    "id": 38,
    "question": "データエンジニアが以下のストリーミングクエリを持っており、ブランク部分があります：\nspark.readStream\n  .table(\"orders_cleaned\")\n  .groupBy(\n    ___________________________,\n    \"author\")\n  .agg(\n    count(\"order_id\").alias(\"orders_count\"),\n    avg(\"quantity\").alias(\"avg_quantity\"))\n  .writeStream\n  .option(\"checkpointLocation\", \"dbfs:/path/checkpoint\")\n  .table(\"orders_stats\")\n\nこのクエリで、15分の重複しないタイムウィンドウごとに、注文数と平均数量を計算したいと考えています。\nこの要件を満たすためにブランクを正しく埋めるオプションはどれですか？",
    "choices": [
      {
        "text": "withWindow(\"order_timestamp\", \"15 minutes\")",
        "is_correct": false
      },
      {
        "text": "withWatermark(\"order_timestamp\", \"15 minutes\")",
        "is_correct": false
      },
      {
        "text": "window(\"order_timestamp\", \"15 minutes\")",
        "is_correct": true
      },
      {
        "text": "trigger(processingTime=\"15 minutes\")",
        "is_correct": false
      }
    ],
    "explanation": "<p>PySpark.sql.functions.window関数は、指定されたタイムスタンプ列を基準として、行を1つ以上の時間ウィンドウにバケット化します。</p><p><strong>window()関数の特徴：</strong></p><ul><li>タイムスタンプ列を指定の間隔でウィンドウに分割します</li><li>非重複的な時間間隔を作成する場合に使用します</li><li>groupBy()内で他の列と組み合わせて使用できます</li><li>15分の間隔で自動的に時間ウィンドウを生成します</li></ul><p><strong>各オプションの説明：</strong></p><ul><li><code>withWindow()</code> - このメソッドは存在しません</li><li><code>withWatermark()</code> - 遅延したデータを処理するためのウォーターマーク設定であり、ウィンドウ定義ではありません</li><li><code>window()</code> - タイムスタンプ列を指定の期間でバケット化し、集計用のウィンドウを作成します（推奨）</li><li><code>trigger()</code> - ストリーミングジョブのトリガー間隔を制御するもので、ウィンドウ定義ではありません</li></ul><p><strong>window()関数の構文：</strong></p><p><code>window(timeColumn, windowDuration)</code>は、指定されたタイムスタンプ列を基準に、windowDurationで指定された期間のウィンドウを作成します。</p>",
    "tags": "データ処理コードの開発",
    "summary": "ストリーミングクエリで非重複的な時間ウィンドウを作成するには、groupBy()内でwindow()関数を使用して、タイムスタンプ列と時間間隔を指定する必要があります。"
  },
  {
    "id": 39,
    "question": "以下のうち、Databricksでマルチタスクジョブを作成することを許可しない方法はどれですか？",
    "choices": [
      {
        "text": "Workspace UI",
        "is_correct": false
      },
      {
        "text": "Databricks Asset Bundles（DABs）",
        "is_correct": false
      },
      {
        "text": "REST API",
        "is_correct": false
      },
      {
        "text": "Lakeflow Declarative Pipelines",
        "is_correct": true
      }
    ],
    "explanation": "<p>Databricksでマルチタスクジョブを作成することを許可しない方法は、Lakeflow Declarative Pipelinesです。</p><p><strong>Lakeflow Declarative Pipelinesの特徴：</strong></p><ul><li>変換ロジックを宣言的な方法（SQL/Python）で定義するツールです</li><li>ジョブ内の単一タスクとして機能することができます</li><li>マルチタスクジョブそのものを作成するためのメカニズムではありません</li><li>パイプライン定義のための宣言的フレームワークです</li></ul><p><strong>マルチタスクジョブを作成できる方法：</strong></p><ul><li><strong>Workspace UI</strong> - DatabricksのWebインターフェース上でジョブを直接定義でき、複数のタスクを追加できます</li><li><strong>REST API</strong> - Jobs APIを使用してプログラム的にマルチタスクジョブを定義・作成できます</li><li><strong>Databricks Asset Bundles（DABs）</strong> - YAMLベースの設定ファイルを使用してマルチタスクジョブ定義をパッケージ化し、デプロイできます</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "Lakeflow Declarative Pipelinesは変換ロジック定義用のフレームワークであり、マルチタスクジョブを直接作成する機能ではなく、ジョブ内の単一タスクとして利用されます。"
  },
  {
    "id": 40,
    "question": "データエンジニアがLDPパイプラインで以下のデータ品質制約を定義しています：\nCONSTRAINT valid_id EXPECT (id IS NOT NULL) _____________\n\nこの制約に違反するレコードをターゲットテーブルに書き込みながら、メトリクスで報告されるように、ブランクを正しく埋めるクローズはどれですか？",
    "choices": [
      {
        "text": "ON VIOLATION句を追加する必要はありません。デフォルトでは、制約に違反するレコードは保持され、パイプラインメトリクスで無効として報告されます。",
        "is_correct": true
      },
      {
        "text": "ON VIOLATION NULL",
        "is_correct": false
      },
      {
        "text": "ON VIOLATION WARNING",
        "is_correct": false
      },
      {
        "text": "ON VIOLATION ADD ROW",
        "is_correct": false
      }
    ],
    "explanation": "<p>デフォルトでは、制約に違反するレコードはターゲットテーブルに書き込まれ、パイプラインメトリクスで無効として報告されます。</p><p><strong>LDP制約のデフォルト動作：</strong></p><ul><li>ON VIOLATION句を明示的に指定する必要はありません</li><li>制約に違反するレコードは自動的にターゲットテーブルに含まれます</li><li>違反は<code>pipeline_metrics</code>で無効レコードとして記録されます</li><li>データは破棄されず、品質メトリクスで追跡可能です</li></ul><p><strong>制約定義の構文：</strong></p><ul><li><code>CONSTRAINT valid_id EXPECT (id IS NOT NULL)</code> - このシンプルな形式で十分です</li><li>追加のON VIOLATION句なしで、デフォルトの動作が適用されます</li></ul><p><strong>その他のオプションについて：</strong></p><ul><li><code>ON VIOLATION NULL</code> - このキーワードは有効なLDP構文ではありません</li><li><code>ON VIOLATION WARNING</code> - このキーワードは有効なLDP構文ではありません</li><li><code>ON VIOLATION ADD ROW</code> - このキーワードは有効なLDP構文ではありません</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "LDP（Lakeflow Declarative Pipelines）の制約は、ON VIOLATION句を指定せずにデフォルトのままにすることで、違反するレコードをターゲットテーブルに書き込みながらメトリクスで報告できます。"
  },
  {
    "id": 41,
    "question": "以下のうち、ユニットテスト（Unit Testing）を正しく説明しているのはどれですか？",
    "choices": [
      {
        "text": "アプリケーションの各機能がビジネス要件に従って動作するかを検証するアプローチ",
        "is_correct": false
      },
      {
        "text": "アプリケーションの信頼性、速度、スケーラビリティ、および応答性を測定するアプローチ",
        "is_correct": false
      },
      {
        "text": "アプリケーションのサブシステム間の相互作用をテストし、モジュールがグループとして適切に動作することを確認するアプローチ",
        "is_correct": false
      },
      {
        "text": "コードの個別ユニットをテストして、将来それらに加えられた新しい変更後も期待通りに動作するかを確認するアプローチ",
        "is_correct": true
      }
    ],
    "explanation": "<p>ユニットテストは、関数などのコードユニットをテストするアプローチです。将来これらに変更を加える場合、ユニットテストを使用して、期待通りに動作し続けるかどうかを判断できます。</p><p><strong>ユニットテストの特徴：</strong></p><ul><li>個別の関数やメソッドなどの最小単位のコードをテストします</li><li>コードの変更が既存の機能を損なわないことを確認します</li><li>開発プロセス中に素早く問題を検出できます</li><li>コードの品質と信頼性を向上させます</li></ul><p><strong>アサーション（Assertion）の使用：</strong></p><p>ユニットテストではアサーションを使用して、開発中に特定の仮定が真のままであるかを確認します：</p><p><code>assert func() == expected_value</code></p><p><strong>各オプションの説明：</strong></p><ul><li>ビジネス要件の検証 - 機能テスト（Functional Testing）です</li><li>信頼性や速度の測定 - パフォーマンステスト（Performance Testing）です</li><li>サブシステム間の相互作用テスト - 統合テスト（Integration Testing）です</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "ユニットテストは、関数やメソッドなどのコードの個別ユニットをテストするアプローチであり、将来の変更後もコードが期待通りに動作することを確認するために使用されます。"
  },
  {
    "id": 42,
    "question": "ジュニアデータエンジニアが「orders」テーブルのコピーとして「orders_backup」テーブルを作成しました。最近、チームはorders_backupテーブルのクエリ実行時にエラーが発生し、一部のデータファイルが存在しないことを示しています。ordersテーブルのトランザクションログには、最近のVACUUMコマンドの実行が記録されています。\n以下のうち、データエンジニアがorders_backupテーブルをどのように作成したかを説明しているのはどれですか？",
    "choices": [
      {
        "text": "orders_backupテーブルはordersテーブルからCTAS文を使用して作成された",
        "is_correct": false
      },
      {
        "text": "orders_backupテーブルはDelta LakeのDEEP CLONE機能を使用してordersテーブルから作成された",
        "is_correct": false
      },
      {
        "text": "orders_backupテーブルはDelta LakeのSHALLOW CLONE機能を使用してordersテーブルから作成された",
        "is_correct": true
      },
      {
        "text": "orders_backupテーブルはordersテーブルからCRAS文を使用して作成された",
        "is_correct": false
      }
    ],
    "explanation": "<p>Shallow Cloneを使用する場合、Deltaトランザクションログをコピーするだけでテーブルのコピーを作成します。</p><p><strong>Shallow Cloneの特徴：</strong></p><ul><li>Shallow Clone作成時にはデータが移動しません</li><li>元のテーブルとクローンテーブルは同じデータファイルを参照しています</li><li>トランザクションログのみがコピーされます</li></ul><p><strong>VACUUMコマンドとの相互作用：</strong></p><ul><li>ソーステーブル上でVACUUMコマンドを実行すると、クローンのトランザクションログで参照されているデータファイルが削除される可能性があります</li><li>この場合、クローンテーブルをクエリすると、一部のデータファイルが存在しないというエラーが発生します</li><li>Shallow Cloneは共有ストレージを参照するため、ソーステーブルのVACUUM操作の影響を受けます</li></ul><p><strong>各オプションの説明：</strong></p><ul><li><code>CTAS（Create Table As Select）</code> - 新しいテーブルに実データをコピーします。VACUUMの影響を受けません</li><li><code>DEEP CLONE</code> - 完全なコピーを作成し、独立したデータファイルを持ちます。VACUUMの影響を受けません</li><li><code>SHALLOW CLONE</code> - トランザクションログのみをコピーし、元のデータファイルを参照します。VACUUMの影響を受けます（推奨）</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Shallow Cloneはトランザクションログのみをコピーするため、ソーステーブルのVACUUMコマンド実行時にクローンが参照するデータファイルが削除され、エラーが発生する可能性があります。"
  },
  {
    "id": 43,
    "question": "データエンジニアがUnity Catalogマネージドテーブルにパスワードを安全に保存したいと考えており、保存前にSHA2(password, 256)を使用してユーザーパスワードをハッシュ化する必要があります。適切な保存を確保するために、エンジニアはハッシュ値全体に対応するための列長制約も設定する必要があります。\nエンジニアがパスワード「spark123」と「ApacheSpark111」をハッシュ化してテストします。\n結果のハッシュ長についてエンジニアが気付くことは何でしょうか？",
    "choices": [
      {
        "text": "「spark123」のハッシュは「ApacheSpark111」のハッシュより短くなります",
        "is_correct": false
      },
      {
        "text": "入力サイズに関わらず、両方のハッシュの長さは同じになります",
        "is_correct": true
      },
      {
        "text": "「ApacheSpark111」のハッシュは「spark123」のハッシュより短くなります",
        "is_correct": false
      },
      {
        "text": "ハッシュ長は数値文字の数に依存するため、両方のハッシュの長さは同じになります",
        "is_correct": false
      }
    ],
    "explanation": "<p>両方のハッシュが同じ長さになる理由は、暗号学的ハッシュ関数の設計方法に由来します。</p><p><strong>SHA-256ハッシュ関数の特性：</strong></p><ul><li>SHA-256は入力の長さや短さに関わらず、常に256ビットの出力を生成します</li><li>これは暗号学的ハッシュ関数の基本的な特性であり、任意のサイズの入力を固定長の出力にマップします</li><li>16進数文字列として表現すると（ハッシュ保存の標準形式）、256ビットハッシュは常に64文字の長さになります</li></ul><p><strong>ハッシュ化の例：</strong></p><ul><li><code>SELECT sha2('spark123', 256);</code><br/>結果: <code>92f55da1cdca0fd9811daa0bc97455c9e9e2b16d29e4e142c56e5924a1446175</code></li><li><code>SELECT sha2('ApacheSpark111', 256);</code><br/>結果: <code>5385cb3eb8907791fe9efad61f847bb9af6145a6db5689f7687bf7f1c3e25086</code></li></ul><p><strong>結果の分析：</strong></p><ul><li>「spark123」は8文字の短い入力です</li><li>「ApacheSpark111」は14文字の長い入力です</li><li>しかし、両方のハッシュは64文字の16進数で表現されています</li><li>データエンジニアは列制約を64文字に設定する必要があります</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "SHA-256ハッシュ関数は入力サイズに関わらず常に256ビット（16進数で64文字）の固定長出力を生成するため、すべてのハッシュは同じ長さになります。"
  },
  {
    "id": 44,
    "question": "Change Data Feed（CDF）が有効になっているDeltaテーブル「customers」に対する以下のクエリが与えられています：\nspark.read\n        .option(\"readChangeFeed\", \"true\")\n        .option(\"startingVersion\", 0)\n        .table (\"customers\")\n        .filter (col(\"_change_type\").isin([\"update_postimage\"]))\n    .write\n        .mode(\"append\")\n        .table(\"customers_updates\")\n\nこのクエリを実行するたびに、その結果を説明しているのはどれですか？",
    "choices": [
      {
        "text": "新たに更新されたレコードがターゲットテーブルに追加されます",
        "is_correct": false
      },
      {
        "text": "更新されたレコード全体の履歴がターゲットテーブルを各実行時に上書きします",
        "is_correct": false
      },
      {
        "text": "更新されたレコード全体の履歴が各実行時にターゲットテーブルに追加され、重複エントリが生じます",
        "is_correct": true
      },
      {
        "text": "新たに更新されたレコードがターゲットテーブルを上書きします",
        "is_correct": false
      }
    ],
    "explanation": "<p>CDFでキャプチャされたテーブルの変更をspark.readを使用して読み取ることは、それらを静的ソースとして読み取ることを意味します。</p><p><strong>spark.readによる変更データ読み取りの特性：</strong></p><ul><li>クエリを実行するたびに、指定されたstartingVersionから始まる、テーブルのすべての変更が読み取られます</li><li>static batch readのため、毎回同じデータが読み取られます</li><li>キャッシュやチェックポイント機構がない限り、すべての履歴データが再度読み取られます</li></ul><p><strong>append モードでの書き込みの影響：</strong></p><ul><li>クエリで<code>mode(\"append\")</code>を使用しているため、毎回読み取られたデータはターゲットテーブルに追加されます</li><li>クエリを複数回実行すると、同じ変更データが何度も追加されます</li><li>結果として、ターゲットテーブルに重複エントリが発生します</li></ul><p><strong>重複を避けるための対策：</strong></p><ul><li>バッチクエリの場合は、チェックポイント機構を実装する必要があります</li><li>または、Structured Streamingを使用してストリーミング方式で変更を処理することが推奨されます</li><li>チェックポイントにより、既に処理された変更の重複読み取りを防ぐことができます</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "spark.readでCDFを読み取る場合、毎回すべての履歴変更が読み取られるため、appendモードで書き込むと実行するたびに重複エントリが生じます。"
  },
  {
    "id": 45,
    "question": "データエンジニアが自動Liquid Clusteringを有効にして「orders」というDeltaテーブルを作成するために使用できるコマンドは、以下のうちどれですか？",
    "choices": [
      {
        "text": "CREATE OR REPLACE TABLE orders(id int, updated date, value double)\nCLUSTER BY NONE;",
        "is_correct": false
      },
      {
        "text": "CREATE OR REPLACE TABLE orders(id int, updated date, value double)\nCLUSTER BY (id, updated, value);",
        "is_correct": false
      },
      {
        "text": "CREATE OR REPLACE TABLE orders(id int, updated date, value double)\nCLUSTER BY AUTO;",
        "is_correct": true
      },
      {
        "text": "CREATE OR REPLACE TABLE orders(id int, updated date, value double)\nCLUSTER BY ALL;",
        "is_correct": false
      }
    ],
    "explanation": "<p>Delta Lakeの自動Liquid Clusteringは<code>CLUSTER BY AUTO</code>を使用して有効にされます。</p><p><strong>自動Liquid Clusteringの特徴：</strong></p><ul><li>Deltaが自動的にクエリパターンとデータ分布に基づいてクラスタリングを管理します</li><li>列を手動で指定する必要がありません</li><li>クラスタリング戦略は自動的に最適化されます</li></ul><p><strong>各オプションの説明：</strong></p><ul><li><code>CLUSTER BY NONE</code> - Liquid Clusteringを明示的に無効にします</li><li><code>CLUSTER BY (id, updated, value)</code> - クラスタリング列を手動で指定しているため、自動Liquid Clusteringではなく、手動クラスタリングです</li><li><code>CLUSTER BY AUTO</code> - 自動Liquid Clusteringを有効にします（推奨）</li><li><code>CLUSTER BY ALL</code> - これはDelta Lake構文として有効ではありません</li></ul><p><strong>自動vs手動クラスタリング：</strong></p><ul><li>自動Liquid Clusteringは、データエンジニアが列を指定する手間を削減します</li><li>Deltaが動的にクラスタリング戦略を調整するため、データ特性の変化に自動的に対応します</li><li>手動クラスタリングは、特定の列を指定して明示的にクラスタリングを制御します</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "Delta Lakeの自動Liquid Clusteringは「CLUSTER BY AUTO」を使用して有効にされ、Deltaが自動的にクエリパターンとデータ分布に基づいてクラスタリングを最適化します。"
  },
  {
    "id": 46,
    "question": "更新前後のDelta Lakeテーブルの以下の2つのバージョンが与えられています：\n更新前：\n更新後：\nこのテーブルはどのSCD（Slowly Changing Dimension）タイプですか？",
    "choices": [
      {
        "text": "SCD Type 1",
        "is_correct": false
      },
      {
        "text": "Type 0とType 2 SCDの組み合わせ",
        "is_correct": false
      },
      {
        "text": "SCD Type 2",
        "is_correct": true
      },
      {
        "text": "SCD Type 0",
        "is_correct": false
      }
    ],
    "explanation": "<p>Slowly Changing Dimension（SCD）は、時間経過に伴うデータの変更を追跡するためのデータモデリング技術です。</p><p><strong>SCD Type 2の特徴：</strong></p><ul><li>データが変更されると、新しいレコードが追加されます</li><li>新しいレコードが現在のアクティブレコードになります</li><li>古いレコードは非アクティブとしてマークされます</li><li>変更の完全な履歴が保持されます</li></ul><p><strong>SCD Type 2の実装方法：</strong></p><ul><li>通常、有効期間を示すための開始日（effective_date）と終了日（end_date）のカラムが使用されます</li><li>または、<code>is_active</code>フラグを使用して現在のレコードを示します</li><li>古いレコードの終了日が更新され、新しいレコードが挿入されます</li></ul><p><strong>その他のSCDタイプの説明：</strong></p><ul><li><strong>SCD Type 0</strong> - 変更を一切記録しません（固定参照データ）</li><li><strong>SCD Type 1</strong> - 既存レコードを上書きして、変更前の値は保持しません</li><li><strong>SCD Type 2</strong> - 変更の完全な履歴を保持し、複数の時系列レコードを持ちます（推奨）</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "SCD Type 2は、データ変更時に新しいレコードを追加して有効期間をマークし、変更の完全な履歴を保持するモデリング技術です。"
  },
  {
    "id": 47,
    "question": "データエンジニアリングチームがKafkaソースからマルチプレックスbrokenzeテーブルを作成したいと考えており、Deltaテーブルは以下のスキーマを持っています：\nkey BINARY, value BINARY, topic STRING, partition LONG, offset LONG, timestamp LONG\n\n「value」列の一部のトピックには個人識別情報（PII）が含まれているため、チームはパーティション境界でアクセス制御リスト（ACL）を適用して、このPIIデータへのアクセスを制限したいと考えています。\n\n上記のスキーマと指定された要件に基づいて、パーティショニングの良い候補はどの列ですか？",
    "choices": [
      {
        "text": "partition",
        "is_correct": false
      },
      {
        "text": "key",
        "is_correct": false
      },
      {
        "text": "timestamp",
        "is_correct": false
      },
      {
        "text": "topic",
        "is_correct": true
      }
    ],
    "explanation": "<p>テーブルパーティショニングはセキュリティ向上に役立ちます。機密データと非機密データを異なるパーティションに分離し、機密データに異なるセキュリティ制御を適用することができます。</p><p><strong>topicパーティショニングの利点：</strong></p><ul><li>Kafkaソースの各トピックには異なるデータが含まれます</li><li>一部のトピックにはPIIが含まれ、他のトピックには含まれない可能性があります</li><li>topicでパーティショニングすることで、PIIを含むトピックと含まないトピックを物理的に分離できます</li><li>PII含有トピックのパーティションに対してのみ、より厳格なアクセス制御を適用可能です</li></ul><p><strong>個人識別情報（PII）について：</strong></p><ul><li>PIIとは、個人を直接または間接的に識別可能にする情報を指します</li><li>ユーザー名、メールアドレス、電話番号、住所など多くのデータ種類が該当します</li><li>PIIの保護は規制要件（GDPR、HIPAA等）で義務付けられています</li></ul><p><strong>その他のパーティション候補の評価：</strong></p><ul><li><code>partition</code> - Kafkaパーティション番号であり、トピック内のデータ特性を反映していません</li><li><code>key</code> - バイナリキーであり、センシティブデータの区分には適していません</li><li><code>timestamp</code> - 時間情報ですが、トピック別のセンシティブデータ分離には適していません</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "topicでテーブルをパーティショニングすることにより、PIIを含むトピックと含まないトピックを物理的に分離し、PIIデータに対して選別的にアクセス制御を適用できます。"
  },
  {
    "id": 48,
    "question": "データエンジニアがAutoLoaderを使用して入力データをターゲットテーブルに取り込み、新しいフィールドが検出されたときにテーブルのスキーマを自動的に進化させたいと考えています。\n以下のクエリをブランク部分があるままで使用しています：\nspark.readStream\n        .format(\"cloudFiles\")\n        .option(\"cloudFiles.format\", \"json\")\n        .option(\"cloudFiles.schemaLocation\", checkpointPath)\n        .load(source_path)\n    .writeStream\n        .option(\"checkpointLocation\", checkpointPath)\n        .___________\n        .start(\"target_table\")\n\n指定された要件を満たすためにブランクを正しく埋めるオプションはどれですか？",
    "choices": [
      {
        "text": "option(\"cloudFiles.mergeSchema\", True)",
        "is_correct": false
      },
      {
        "text": "option(\"mergeSchema\", True)",
        "is_correct": true
      },
      {
        "text": "schema(schema_definition, mergeSchema=True)",
        "is_correct": false
      },
      {
        "text": "option(\"cloudFiles.schemaEvolutionMode\", \"addNewColumns\")",
        "is_correct": false
      }
    ],
    "explanation": "<p>スキーマ進化は、検出された新しいフィールドをテーブルに追加することができる機能です。</p><p><strong>スキーマ進化の有効化：</strong></p><ul><li><code>.option('mergeSchema', 'true')</code>を<code>.write</code>または<code>.writeStream</code>のSparkコマンドに追加することで有効化されます</li><li>このオプションは、新しい列が検出されたときにスキーマを自動的にマージします</li></ul><p><strong>Autoloaderとスキーマ進化の連携：</strong></p><ul><li>Autoloaderは新しいフィールドを自動検出します</li><li><code>mergeSchema</code>オプションにより、これらの新しいフィールドをテーブルスキーマに追加します</li><li>スキーマ進化中に古いレコードには新しい列に対してnull値が設定されます</li></ul><p><strong>各オプションの説明：</strong></p><ul><li><code>option(\"cloudFiles.mergeSchema\", True)</code> - <code>cloudFiles</code>プレフィックスは不正であり、正しくありません</li><li><code>option(\"mergeSchema\", True)</code> - スキーマ進化を有効にする正しいオプションです（推奨）</li><li><code>schema(schema_definition, mergeSchema=True)</code> - 静的スキーマを定義するもので、自動スキーマ進化には対応していません</li><li><code>option(\"cloudFiles.schemaEvolutionMode\", \"addNewColumns\")</code> - このオプションは存在しません</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "Autoloaderを使用したスキーマ進化は、writeStream内に<code>option(\"mergeSchema\", True)</code>を追加することで、新しく検出されたフィールドを自動的にテーブルスキーマに追加できます。"
  },
  {
    "id": 49,
    "question": "データエンジニアは自分の組織のDatabricks環境でデータワークフローの管理とオーケストレーションを担当しており、Databricks Asset Bundlesを使用してevents_process_jobというジョブをデプロイしました。このジョブを実行するために、エンジニアはターミナルから以下のコマンドを実行します：\ndatabricks bundle run events_process_job\n\nコマンドを観察した後、シニアデータエンジニアは、コマンド実行時に-tオプションを追加することで実行プロセスを改善できることを提案しました。\n\nこのオプションの主な目的を説明しているのはどれですか？",
    "choices": [
      {
        "text": "ジョブ実行のターゲット環境を選択する",
        "is_correct": true
      },
      {
        "text": "ジョブ実行中に一時的なログを有効にする",
        "is_correct": false
      },
      {
        "text": "ジョブ実行のターゲットクラスターサイズを指定する",
        "is_correct": false
      },
      {
        "text": "実際にデータを処理せずにジョブのドライランをトリガーする",
        "is_correct": false
      }
    ],
    "explanation": "<p>databricks bundle runコマンドの<code>-t</code>オプションの主な目的は、ジョブ実行のターゲット環境を選択することです。</p><p><strong>-t（--target）オプションの機能：</strong></p><ul><li>データエンジニアがDatabricks Asset Bundlesを使用してジョブを実行する際、どの環境でジョブを実行するかを指定できます</li><li>開発（development）、ステージング（staging）、本番（production）など複数の環境に対応できます</li><li>コマンド例：<code>databricks bundle run events_process_job -t prod</code></li></ul><p><strong>ターゲット環境選択の利点：</strong></p><ul><li>ジョブが正しいリソースとデータセットに対して実行されることを保証します</li><li>誤った環境での処理や予期しない変更を防ぎます</li><li>複数環境でのデプロイメントワークフローを簡素化します</li><li>環境間での安全な昇格プロセスを実現します</li></ul><p><strong>各オプションの説明：</strong></p><ul><li>一時的なログ有効化 - ロギング制御は別のオプションで管理されます</li><li>クラスターサイズ指定 - クラスター設定はDAB設定ファイルで管理されます</li><li>ドライラン実行 - これは異なるフラグで制御されます</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "databricks bundle runの-t（--target）オプションは、ジョブを実行する対象環境（開発、ステージング、本番など）を指定するもので、環境間での安全なワークフロー管理を実現します。"
  },
  {
    "id": 50,
    "question": "組織がAWS、Azure、GCPにまたがる複数のクライアントへの大規模データセットアクセスを有効にするためにDelta Sharingを使用する計画を立てており、シニアデータエンジニアはデータ共有プロセスを開始する前に、データセットをCloudflare R2オブジェクトストレージに移行することを推奨しています。\nこのDelta Sharingセットアップでは、Cloudflare R2はどのような利点を提供しますか？",
    "choices": [
      {
        "text": "クラウドベンダーロックインを回避するための標準APIを提供する",
        "is_correct": false
      },
      {
        "text": "動的データマスキングのネイティブサポートを提供する",
        "is_correct": false
      },
      {
        "text": "アウトバウンドデータ転送のクラウドプロバイダーエグレス費用を排除する",
        "is_correct": true
      },
      {
        "text": "自動チェックポイント機能を備えたストリーミングデータの組み込みサポートを提供する",
        "is_correct": false
      }
    ],
    "explanation": "<p>Cloudflare R2は、クラウド環境間でのデータ共有時のコスト削減に大きな利点をもたらします。</p><p><strong>Cloudflare R2の主な利点：</strong></p><ul><li>エグレス料金が無料です（データ転送コストなし）</li><li>クラウドプロバイダー間でのデータ転送時の費用を排除します</li><li>複数のクラウドプロバイダー（AWS、Azure、GCP）にまたがるデータ共有コストを大幅に削減できます</li></ul><p><strong>Delta Sharingでの使用効果：</strong></p><ul><li>大規模データセットを複数クライアントで共有する場合、エグレス費用の削減により総所有コスト（TCO）が大幅に低下します</li><li>クラウド間のデータ転送がより経済的になります</li><li>データレジデンシー要件を満たしながら、複数環境でのデータアクセスを実現できます</li></ul><p><strong>各オプションの説明：</strong></p><ul><li>標準API提供 - S3互換APIは提供していますが、これが主な利点ではありません</li><li>動的データマスキング - Cloudflare R2のネイティブ機能ではなく、アプリケーション層で実装されます</li><li>ストリーミングデータサポート - R2はオブジェクトストレージであり、ストリーミング用には設計されていません</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "Cloudflare R2はエグレス費用を完全に排除するため、複数のクラウドプロバイダー間でのDelta Sharingによるデータ共有コストを大幅に削減できます。"
  },
  {
    "id": 51,
    "question": "データエンジニアがDatabricks REST APIを使用してrun_idを使用してジョブ実行のメタデータを取得したいと考えています。\n以下のうち、この要件を満たすREST APIコールはどれですか？",
    "choices": [
      {
        "text": "エンドポイント「api/2.2/jobs/runs/get」にPOSTリクエストを送信する",
        "is_correct": false
      },
      {
        "text": "エンドポイント「api/2.2/jobs/runs/get-output」にGETリクエストを送信する",
        "is_correct": false
      },
      {
        "text": "エンドポイント「api/2.2/jobs/runs/get」にGETリクエストを送信する",
        "is_correct": true
      },
      {
        "text": "エンドポイント「api/2.2/jobs/runs/get-metadata」にGETリクエストを送信する",
        "is_correct": false
      }
    ],
    "explanation": "<p>エンドポイント「/api/2.2/jobs/runs/get」にGETリクエストを送信することで、run_idを使用してジョブ実行のメタデータを取得できます。</p><p><strong>Jobs Runs Get APIの特徴：</strong></p><ul><li>HTTPメソッド：<code>GET</code></li><li>エンドポイント：<code>/api/2.2/jobs/runs/get</code></li><li>必須パラメーター：<code>run_id</code></li><li>ジョブ実行の詳細なメタデータを返します</li></ul><p><strong>取得できるメタデータ情報：</strong></p><ul><li>ジョブ実行ID（run_id）</li><li>ジョブID（job_id）</li><li>実行状態（state）</li><li>開始時刻と終了時刻</li><li>実行結果と出力情報</li><li>クラスター情報</li></ul><p><strong>各オプションの説明：</strong></p><ul><li><code>POST /api/2.2/jobs/runs/get</code> - GETメソッドが正しいため、POSTは誤りです</li><li><code>GET /api/2.2/jobs/runs/get-output</code> - このエンドポイントはジョブの出力結果を取得するもので、メタデータではありません</li><li><code>GET /api/2.2/jobs/runs/get</code> - ジョブ実行メタデータを取得する正しいAPIコールです（推奨）</li><li><code>GET /api/2.2/jobs/runs/get-metadata</code> - このエンドポイントは存在しません</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "Databricks REST APIで「GET /api/2.2/jobs/runs/get」エンドポイントを使用することで、run_idを使用してジョブ実行の詳細なメタデータを取得できます。"
  },
  {
    "id": 52,
    "question": "データエンジニアリングチームが、クラスターが起動するたびに特定のPythonライブラリが利用可能であることを確認したいと考えています。\nこの目標を最も効果的に達成するアプローチはどれですか？",
    "choices": [
      {
        "text": "Databricks CLIを使用してクラスター起動後にライブラリファイルをクラスターにアップロードする",
        "is_correct": false
      },
      {
        "text": "Pythonノートブック実行時にライブラリをインストールする",
        "is_correct": false
      },
      {
        "text": "クラスター起動のたびにドライバーノードにライブラリを手動でインストールする",
        "is_correct": false
      },
      {
        "text": "initスクリプトを使用してクラスター起動時にライブラリをインストールする",
        "is_correct": true
      }
    ],
    "explanation": "<p>最適なアプローチは、initスクリプトを使用してクラスター起動時にライブラリをインストールすることです。</p><p><strong>Initスクリプトの利点：</strong></p><ul><li>クラスターが起動するたびに自動的に実行されます</li><li>ジョブやノートブックが実行される前に、すべてのノードにPythonライブラリが一貫してインストールされることを確認できます</li><li>手動介入が不要で、確実性が高まります</li><li>複数のクラスターに対して統一された環境を構築できます</li></ul><p><strong>各アプローチの制限：</strong></p><ul><li><strong>CLIを使用したアップロード</strong> - クラスター起動後の手動操作が必要で、エラーが発生しやすく、スケーラビリティに欠けます</li><li><strong>ノートブック内でのインストール</strong> - ノートブック実行時に毎回インストールが発生し、効率的ではなく、他のジョブで使用不可です</li><li><strong>手動インストール</strong> - エラーが発生しやすく、非効率で、一貫性が失われます</li></ul><p><strong>Initスクリプトの実装：</strong></p><ul><li>クラスター構成時にinitスクリプトのパスを指定します</li><li>スクリプトには<code>pip install</code>や<code>conda install</code>などのインストールコマンドを含めます</li><li>クラスター起動時に自動的に実行されます</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "Initスクリプトはクラスター起動時に自動的に実行されるため、Pythonライブラリを確実かつ一貫してインストールする最も効果的な方法です。"
  },
  {
    "id": 53,
    "question": "データエンジニアリングチームがUnity Catalogで「employees」というDelta Lakeテーブルを管理しており、id、name、salary、regionの列を持っています。このテーブルに行フィルタリングを適用して、HRチームのメンバーのみがすべてのレコードにアクセスでき、HRチーム以外のメンバーがクエリする場合はFrance（FR）地域のレコードのみを表示するようにしたいと考えています。この目標を達成するために、以下のユーザー定義関数を実装しました：\nCREATE FUNCTION fr_filter(region STRING)\nRETURN IF(IS_ACCOUNT_GROUP_MEMBER('hr_team'), true, region='FR');\n\n以下のうち、この関数をテーブルに行フィルタとして適用するために使用できるコマンドはどれですか？",
    "choices": [
      {
        "text": "ALTER TABLE employees SET ROW FILTER fr_filter ON (region);",
        "is_correct": true
      },
      {
        "text": "ALTER TABLE employees ALTER COLUMN region SET ROW FILTER fr_filter;",
        "is_correct": false
      },
      {
        "text": "ALTER TABLE employees SET ROW FILTER fr_filter;",
        "is_correct": false
      },
      {
        "text": "SET ROW FILTER fr_filter ON TABLE employees TO COLUMN region",
        "is_correct": false
      }
    ],
    "explanation": "<p>Delta Lakeテーブルに行フィルタとして関数を適用する正しいコマンドは以下の通りです：</p><p><code>ALTER TABLE employees SET ROW FILTER fr_filter ON (region);</code></p><p><strong>行フィルタの実装方法：</strong></p><ul><li>このコマンドは、ユーザー定義関数<code>fr_filter</code>をemployeesテーブルのregion列に関連付けます</li><li>テーブルがクエリされるとき、フィルタリング関数のロジックに基づいて行へのアクセスが制限されます</li></ul><p><strong>動作の詳細：</strong></p><ul><li>ユーザーがhr_teamアカウントグループに属している場合：すべての行が表示されます</li><li>hr_team以外のユーザー：region列が「FR」に等しい行のみが表示されます</li></ul><p><strong>各オプションの説明：</strong></p><ul><li><code>ALTER TABLE employees ALTER COLUMN region SET ROW FILTER fr_filter;</code> - 列修正構文であり、行フィルタ適用には正しくありません</li><li><code>ALTER TABLE employees SET ROW FILTER fr_filter;</code> - ON句がないため、フィルタリング対象の列が指定されていません</li><li><code>SET ROW FILTER fr_filter ON TABLE employees TO COLUMN region</code> - Unity Catalogの行フィルタ構文として正しくありません</li></ul><p><strong>行フィルタの特徴：</strong></p><ul><li>Unity Catalogの動的アクセス制御機能です</li><li>ユーザーのロール、グループ、属性に基づいて行レベルのアクセスを制限します</li><li>機密データの保護に効果的です</li></ul>",
    "tags": "セキュリティとコンプライアンス",
    "summary": "Unity CatalogのDelta Lakeテーブルに行フィルタを適用するには、「ALTER TABLE table_name SET ROW FILTER function_name ON (column_name);」構文を使用し、フィルタリング対象の列を明示的にON句で指定する必要があります。"
  },
  {
    "id": 54,
    "question": "小売企業のデータアナリストが、複数の地域と製品カテゴリ全体の売上パフォーマンスに関する日次レポートの生成を担当しています。企業はLakeflow Declarative Pipelinesを使用してオンラインストアから継続的にトランザクションデータを取り込んでいます。アナリストは、総売上、平均注文額、カテゴリ別販売単位などのビジネスレベルの集計を効率的に事前計算して保存できるリレーショナルオブジェクトを作成する必要があります。これにより、ダウンストリームのレポートとダッシュボードが毎回再計算することなく迅速にデータにアクセスできるようにします。\n\n以下のうち、このユースケースに最も適したオブジェクトはどれですか？",
    "choices": [
      {
        "text": "マテリアライズドビュー",
        "is_correct": true
      },
      {
        "text": "ストリーミングテーブル",
        "is_correct": false
      },
      {
        "text": "標準ビュー",
        "is_correct": false
      },
      {
        "text": "テンポラリビュー",
        "is_correct": false
      }
    ],
    "explanation": "<p>このユースケースに最も適したオブジェクトはマテリアライズドビューです。</p><p><strong>マテリアライズドビューの特徴：</strong></p><ul><li>ビジネスレベルの集計（総売上、平均注文額、カテゴリ別販売単位など）を事前計算して保存します</li><li>計算結果を永続化するため、ダウンストリームのレポートとダッシュボードが迅速にアクセスできます</li><li>毎回再計算する必要がないため、クエリパフォーマンスが大幅に向上します</li><li>定期的に自動的に更新されます</li></ul><p><strong>各オブジェクトタイプの比較：</strong></p><ul><li><strong>標準ビュー</strong> - クエリのたびに計算が実行されるため、毎回同じ集計を再計算する必要があります。ダッシュボードアクセスのたびに計算負荷が発生します</li><li><strong>テンポラリビュー</strong> - セッション中のみ存在し、永続化されません。ダウンストリームでの継続的なアクセスには不適切です</li><li><strong>ストリーミングテーブル</strong> - リアルタイムイベントストリームの処理を目的としており、事前集計されたサマリーデータには設計されていません</li></ul><p><strong>パフォーマンスと効率性：</strong></p><ul><li>マテリアライズドビューは計算結果をDelta Lakeテーブルとして保存します</li><li>ダッシュボードやレポートは直接テーブルからデータを読み取ります</li><li>複雑な集計の再計算が排除されます</li></ul>",
    "tags": "コストとパフォーマンスの最適化",
    "summary": "マテリアライズドビューはビジネスレベルの集計を事前計算して永続化し、ダウンストリームのレポートとダッシュボードが毎回再計算することなく迅速にアクセスできるため、このユースケースに最適です。"
  },
  {
    "id": 55,
    "question": "データエンジニアがストリーミングジョブを持っており、ストリーミングDeltaテーブル「activity_logs」と静的Deltaテーブル「users」のジョイン結果によって「user_activities」というDeltaテーブルを更新しています。\n「users」テーブルに新しいユーザーを追加してもそのユーザーのアクティビティが「activity_logs」テーブルに存在する場合でさえ、「user_activities」テーブルが自動的に更新されないことに気付きました。\n\n以下のうち、この問題の原因として最も可能性が高いのはどれですか？",
    "choices": [
      {
        "text": "このストリーム-静的ジョイントはデフォルトではステートフルではなく、Spark設定delta.statefulStreamStaticJoinをtrueに設定しない限りステートフルになりません",
        "is_correct": false
      },
      {
        "text": "ストリーム-静的ジョインのストリーミング部分がジョインプロセスを駆動します。ジョインのストリーミング側に現れた新しいデータのみが処理をトリガーします",
        "is_correct": true
      },
      {
        "text": "静的部分がストリーム-静的ジョインプロセスを駆動し、バッチモードでのみ処理されます",
        "is_correct": false
      },
      {
        "text": "usersテーブルはこのジョインの各マイクロバッチごとにREFRESH TABLEコマンドで更新される必要があります",
        "is_correct": false
      }
    ],
    "explanation": "<p>ストリーム-静的ジョインでは、ジョインのストリーミング部分がジョインプロセスを駆動します。</p><p><strong>ストリーム-静的ジョインの動作メカニズム：</strong></p><ul><li>ストリーミング側に現れた新しいデータのみが処理をトリガーします</li><li>静的テーブル（users）に新しいレコードを追加しても、ジョインプロセスは自動的にトリガーされません</li><li>処理は常にストリーミング側の新規データ到着に基づいて実行されます</li></ul><p><strong>このユースケースでの問題：</strong></p><ul><li>「users」テーブルに新しいユーザーを追加しました</li><li>「activity_logs」ストリームには既に当該ユーザーのアクティビティデータがあります</li><li>しかし、usersテーブルの更新だけではストリーム処理がトリガーされません</li><li>新しいアクティビティがactivity_logsに到着したときに初めてジョインが実行されます</li></ul><p><strong>各オプションの説明：</strong></p><ul><li>ステートフル設定 - このオプションは存在しません</li><li>バッチモード駆動 - ストリーム-静的ジョインはバッチではなくストリーミングモードで動作します</li><li>REFRESH TABLEコマンド - マイクロバッチごとの手動更新は必要ありません</li></ul><p><strong>ベストプラクティス：</strong></p><ul><li>ストリーム-静的ジョインでは、参照テーブル（静的テーブル）の更新は新しいストリーミングデータの到着時に反映されます</li><li>静的テーブルの変更だけでは結果テーブルが更新されないことを理解する必要があります</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "ストリーム-静的ジョインではストリーミング側が処理を駆動するため、静的テーブルへのデータ追加だけではジョインプロセスがトリガーされず、ストリーミング側に新しいデータが到着した時にのみ結果が更新されます。"
  },
  {
    "id": 56,
    "question": "データエンジニアがAll-purposeクラスターに接続されたSQLノートブックで以下のCTAS文を実行しました：\nCREATE TABLE course_students\nAS ( \tSELECT c.course_name, t.student_id, t.student_name\n        FROM courses c\n        LEFT JOIN (\n            SELECT s.student_id, s.student_name, e.course_id\n            FROM students s\n            INNER JOIN enrollments e\n            ON s.student_id = e.student_id\n        ) t\n        ON c.course_id = t.course_id\n        WHERE c.active = true\n)\n\n生成されたcourse_studentsテーブルを説明しているのはどれですか？",
    "choices": [
      {
        "text": "セッションスコープのテーブルです。SELECT文はテーブル作成時に実行されますが、その出力は現在のアクティブなSparkセッションのキャッシュに保存されます",
        "is_correct": false
      },
      {
        "text": "クラスタースコープのテーブルです。SELECT文はテーブル作成時に実行されますが、その出力は現在アクティブなクラスターのメモリに保存されます",
        "is_correct": false
      },
      {
        "text": "Delta Lakeテーブルです。SELECT文はテーブル作成時に実行され、その出力は基盤となるストレージにDelta形式で保存されます",
        "is_correct": true
      },
      {
        "text": "物理データを持たない仮想テーブルです。SELECT文はcourse_studentsテーブルがクエリされるたびに実行されます",
        "is_correct": false
      }
    ],
    "explanation": "<p>CREATE TABLE AS SELECT文（CTAS文）は新しいDeltaテーブルを作成し、SELECT文の出力を使用してそのテーブルに値を入力します。</p><p><strong>CTAS文の特徴：</strong></p><ul><li>SELECT文はテーブル作成時に一度だけ実行されます</li><li>クエリ結果は新しく作成されたテーブルのディレクトリ内にDelta形式で保存されます</li><li>テーブルは永続的なDeltaテーブルとして作成されます</li></ul><p><strong>テーブル作成プロセス：</strong></p><ul><li>coursesテーブルからcourseデータを取得します</li><li>studentおよびenrollmentテーブルのジョインを実行します</li><li>WHERE句で条件フィルタリングを適用します</li><li>結果をDelta形式でマネージドテーブルディレクトリに保存します</li></ul><p><strong>各オプションの説明：</strong></p><ul><li>セッションスコープテーブル - テンポラリビューの特性であり、CTASで作成されたテーブルではありません</li><li>クラスタースコープテーブル - クラスターメモリ上での一時的なストレージではなく、永続的なストレージに保存されます</li><li>Delta Lakeテーブル - CTAS文で作成されるテーブルの正しい説明です（推奨）</li><li>仮想テーブル - ビューの特性であり、CTASで作成されたテーブルではありません</li></ul><p><strong>メタデータ情報：</strong></p><ul><li>テーブルはUnity Catalogのメタストアに登録されます</li><li>テーブルの統計情報やスキーマ情報が保存されます</li><li>後続のクエリはこのDeltaテーブルから直接データを読み取ります</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "CTAS文（CREATE TABLE AS SELECT）は、SELECT文の実行結果を新しいDeltaテーブルとして基盤ストレージに永続的に保存し、テーブル作成時に一度だけ実行されます。"
  },
  {
    "id": 57,
    "question": "MERGE INTOコマンド使用時の制限として考えられるのは、以下のうちどれですか？",
    "choices": [
      {
        "text": "1つのソース行が複数のターゲット行と一致し、テーブル内の複数行を変更しようとする場合、マージは実行できません",
        "is_correct": false
      },
      {
        "text": "ウォーターマーキングを使用しない限り、ストリーミングジョブではマージは実行できません",
        "is_correct": false
      },
      {
        "text": "マージはレコード削除をサポートしていません。アップサート操作のみをサポートしています",
        "is_correct": false
      },
      {
        "text": "複数のソース行が同じターゲット行と一致し、その行を変更しようとする場合、マージは実行できません",
        "is_correct": true
      }
    ],
    "explanation": "<p>マージ操作は、複数のソース行が同じターゲット行と一致し、その行を変更しようとする場合は実行できません。</p><p><strong>複数ソース行マッチングの問題：</strong></p><ul><li>複数のソース行が1つのターゲット行にマッチする場合、結果が曖昧になります</li><li>どのソース行を使用してターゲット行を更新または削除するべきかが不明確になります</li><li>データの一貫性と正確性が損なわれる可能性があります</li></ul><p><strong>解決策：</strong></p><ul><li>ソーステーブルを事前処理して、複数マッチングの可能性を排除する必要があります</li><li>集計関数（MAX、ROW_NUMBER等）を使用して一意のレコードを選択します</li><li>ソーステーブルのデータを重複排除して、マッチングの一意性を確保します</li></ul><p><strong>各オプションの説明：</strong></p><ul><li>1つのソース行が複数ターゲット行にマッチ - この場合のマージは実行可能です。複数行が更新されます</li><li>ストリーミングジョブでのマージ - ウォーターマーキングなしでもストリーミングマージは実行可能です</li><li>削除操作 - マージはDELETEキーワードをサポートしており、削除操作も可能です</li><li>複数ソース行が同一ターゲット行にマッチ - マージは実行できません（推奨）</li></ul><p><strong>エラーと対応：</strong></p><ul><li>エラーメッセージ：<code>delta_multiple_source_row_matching_target_row_in_merge</code></li><li>このエラーが発生した場合、ソーステーブルの前処理が必須です</li></ul>",
    "tags": "データ処理コードの開発",
    "summary": "MERGE INTOコマンドは複数のソース行が同じターゲット行と一致する場合に実行できないため、ソーステーブルの事前処理で重複排除または集計を行う必要があります。"
  },
  {
    "id": 58,
    "question": "本番環境のStructured Streamingジョブでは、以下のうちどのリトライポリシーの使用が推奨されていますか？",
    "choices": [
      {
        "text": "リトライなし、最大並行実行数1",
        "is_correct": false
      },
      {
        "text": "無制限リトライ、無制限並行実行",
        "is_correct": false
      },
      {
        "text": "無制限リトライ、最大並行実行数1",
        "is_correct": true
      },
      {
        "text": "リトライなし、無制限並行実行",
        "is_correct": false
      }
    ],
    "explanation": "<p>本番環境のStructured Streamingジョブで障害時にクエリを再起動するために、以下のジョブ設定が推奨されます：</p><p><strong>推奨されるジョブ設定：</strong></p><ul><li><strong>リトライ：</strong>無制限に設定します</li><li><strong>最大並行実行数：</strong>1に設定します。各クエリのインスタンスは同時に1つのみアクティブである必要があります</li><li><strong>クラスター：</strong>常に新しいジョブクラスターを使用し、最新のSparkバージョン（またはバージョン2.1以上）を使用します。Spark 2.1以上で起動されたクエリは、クエリおよびSparkバージョンのアップグレード後も復旧可能です</li><li><strong>通知：</strong>障害時にメール通知を希望する場合は設定します</li><li><strong>スケジュール：</strong>スケジュールを設定しません</li><li><strong>タイムアウト：</strong>タイムアウトを設定しません。Structured Streamingクエリは無期限に実行されます</li></ul><p><strong>各オプションの説明：</strong></p><ul><li>リトライなし、最大並行実行数1 - 障害時に自動復旧しないため、本番環境では不適切です</li><li>無制限リトライ、無制限並行実行 - 複数のクエリインスタンスが同時に実行されると、データの重複処理やアップサートの矛盾が発生します</li><li>無制限リトライ、最大並行実行数1 - 本番環境で推奨される設定です（推奨）</li></ul><p><strong>高可用性の重要性：</strong></p><ul><li>Structured Streamingジョブは長時間実行されるため、障害からの自動復旧が必須です</li><li>1つのインスタンスのみアクティブにすることで、データの正確性と一貫性を保証します</li><li>無制限リトライにより、一時的な障害から自動的に復旧できます</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "本番環境のStructured Streamingジョブでは、無制限リトライと最大並行実行数1の組み合わせが推奨され、障害からの自動復旧と単一インスタンス実行によるデータ一貫性を実現します。"
  },
  {
    "id": 59,
    "question": "スケジュール済みジョブがアップストリームデータソースの問題により失敗しました。問題を解決した後、データエンジニアはJobs APIを使用して次のスケジュール実行を待たずに同じジョブを再度トリガーしたいと考えています。\n\n以下のうち、この要件を満たすREST APIコールはどれですか？",
    "choices": [
      {
        "text": "エンドポイント「/api/2.2/jobs/run」にGETリクエストを送信する",
        "is_correct": false
      },
      {
        "text": "エンドポイント「/api/2.2/jobs/run」にPOSTリクエストを送信する",
        "is_correct": false
      },
      {
        "text": "エンドポイント「/api/2.2/jobs/start」にPOSTリクエストを送信する",
        "is_correct": false
      },
      {
        "text": "エンドポイント「/api/2.2/jobs/run-now」にPOSTリクエストを送信する",
        "is_correct": true
      }
    ],
    "explanation": "<p>エンドポイント「/api/2.2/jobs/run-now」にPOSTリクエストを送信することで、job_idを使用してジョブ実行をトリガーできます。</p><p><strong>Jobs Run Now APIの特徴：</strong></p><ul><li>HTTPメソッド：<code>POST</code></li><li>エンドポイント：<code>/api/2.2/jobs/run-now</code></li><li>必須パラメーター：<code>job_id</code></li><li>スケジュールされた次の実行を待たずに、即座にジョブを実行します</li></ul><p><strong>使用シナリオ：</strong></p><ul><li>アップストリームデータソースの問題を解決した後の即時実行</li><li>テストや検証目的でのオンデマンド実行</li><li>スケジュール外の急な必要性に対応する場合</li></ul><p><strong>各オプションの説明：</strong></p><ul><li><code>GET /api/2.2/jobs/run</code> - GETメソッドはジョブ情報の取得に使用され、トリガーには不適切です</li><li><code>POST /api/2.2/jobs/run</code> - このエンドポイントは存在しません</li><li><code>POST /api/2.2/jobs/start</code> - このエンドポイント名は正確ではありません</li><li><code>POST /api/2.2/jobs/run-now</code> - ジョブをオンデマンドでトリガーする正しいAPIコールです（推奨）</li></ul><p><strong>その他のJobs APIメソッド：</strong></p><ul><li><code>GET /api/2.2/jobs/get</code> - ジョブのメタデータ取得</li><li><code>POST /api/2.2/jobs/create</code> - 新しいジョブ作成</li><li><code>POST /api/2.2/jobs/update</code> - ジョブ設定の更新</li></ul>",
    "tags": "デプロイとデバッグ",
    "summary": "Databricks Jobs APIで「POST /api/2.2/jobs/run-now」エンドポイントを使用することで、スケジュールを待たずにジョブを即座にトリガーできます。"
  }
];
