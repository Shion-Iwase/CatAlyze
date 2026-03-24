window.questionsDataDbxg6 = [
  {
    "id": 1,
    "question": "Generative AIエンジニアが、ソフトウェア問題のトラブルシューティング用チャットボットを構築しています。チャットボットが有害なアクションを提案しないようにするガードレール戦略は何ですか？",
    "choices": [
      {
        "text": "チャットボットの応答の長さを短くする。",
        "is_correct": false
      },
      {
        "text": "安全でない、または潜在的に有害な応答を除外するための事前定義されたフィルターを使用する。",
        "is_correct": true
      },
      {
        "text": "チャットボットが制限なく応答を生成できるようにする。",
        "is_correct": false
      },
      {
        "text": "精度よりも応答速度を優先する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 安全でない、または潜在的に有害な応答を除外するための事前定義されたフィルターを使用する。</div><p class='explanation-text'>正解：事前定義されたフィルターのようなガードレールにより、チャットボットが安全でない提案を生成しないことが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ チャットボットの応答の長さを短くする。</div><p class='explanation-text'>不正解：応答を短くしても有害なコンテンツが本質的に削減されるわけではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ チャットボットが制限なく応答を生成できるようにする。</div><p class='explanation-text'>不正解：制限のない応答は有害な提案を生成するリスクを増大させます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 精度よりも応答速度を優先する。</div><p class='explanation-text'>不正解：速度は安全性や関連性を確保しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>事前定義されたフィルターはガードレールとして機能し、安全でない提案を防止してチャットボットの信頼性と安全性を確保します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "ソフトウェアトラブルシューティングチャットボットの有害アクション提案防止には、応答長の短縮ではなく、安全でない応答を除外する事前定義フィルターがガードレールとして有効。"
  },
  {
    "id": 2,
    "question": "Generative AIエンジニアが、LangChainを使用してユーザー入力を処理し、関連データを取得し、会話的な応答を生成するチャットボットのチェーンを設計する必要があります。チェーンに何を含めるべきですか？（2つ選択）",
    "choices": [
      {
        "text": "retrieverなしの事前学習済みembedding。",
        "is_correct": false
      },
      {
        "text": "固定応答のためのハードコードされたテンプレート。",
        "is_correct": false
      },
      {
        "text": "ユーザー入力を構造化するためのプロンプトテンプレート、関連データのためのretriever、応答生成のためのLLM。",
        "is_correct": true
      },
      {
        "text": "retrieval用にユーザーの意図を識別する分類モデル。",
        "is_correct": true
      },
      {
        "text": "応答長を短縮するための要約モデル。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ユーザー入力を構造化するためのプロンプトテンプレート、関連データのためのretriever、応答生成のためのLLM。</div><p class='explanation-text'>正解：これらのコンポーネントにより、構造化された入力、正確なretrieval、動的な応答生成が可能になります。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ retrieval用にユーザーの意図を識別する分類モデル。</div><p class='explanation-text'>正解：分類によりユーザーの意図をデータに整合させることでretrievalが向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ retrieverなしの事前学習済みembedding。</div><p class='explanation-text'>不正解：embeddingだけではユーザー入力を動的に取得・処理できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 固定応答のためのハードコードされたテンプレート。</div><p class='explanation-text'>不正解：ハードコードされたテンプレートは多様なユーザークエリへの柔軟性がありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答長を短縮するための要約モデル。</div><p class='explanation-text'>不正解：要約は重要な詳細を削除し、応答品質を低下させる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>プロンプトテンプレート、retriever、LLM、分類モデルを組み合わせることで、LangChainを使用した動的でコンテキスト対応のチャットボットチェーンが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "LangChainチャットボットチェーンには、ユーザー入力構造化のプロンプトテンプレート・関連データのretriever・応答生成LLMに加え、意図識別の分類モデルが必要。"
  },
  {
    "id": 3,
    "question": "Generative AIエンジニアが、複数の公開ソースから法的ドキュメントを取り込むRAGアプリケーションを設計しています。データソースとの法的コンプライアンスを確保するためにどのガバナンス手順を取るべきですか？",
    "choices": [
      {
        "text": "非商用アプリケーションのライセンス確認をスキップする。",
        "is_correct": false
      },
      {
        "text": "確認なしにすべての公開データが商用利用できると仮定する。",
        "is_correct": false
      },
      {
        "text": "ライセンス確認なしにデータを使用するが、アプリケーション出力でソースを引用する。",
        "is_correct": false
      },
      {
        "text": "各データソースのライセンス条件を確認し、商用利用が許可されていることを確保する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 各データソースのライセンス条件を確認し、商用利用が許可されていることを確保する。</div><p class='explanation-text'>正解：適切なライセンスを確保することで、公開データの不正使用に関連する法的リスクが軽減されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 非商用アプリケーションのライセンス確認をスキップする。</div><p class='explanation-text'>不正解：法的コンプライアンスはアプリケーションの商用状況に関わらず重要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 確認なしにすべての公開データが商用利用できると仮定する。</div><p class='explanation-text'>不正解：公開されていることは商用利用の許可と同じではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ライセンス確認なしにデータを使用するが、アプリケーション出力でソースを引用する。</div><p class='explanation-text'>不正解：引用だけでは未確認のデータ使用の法的リスクに対処しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ライセンス条件を確認することで、アプリケーションが法的要件に準拠し、潜在的な責任を回避することが確保されます。</p></div>",
    "tags": "ガバナンス",
    "summary": "公開ソースからの法的ドキュメントを使用するRAGアプリのガバナンスでは、ソース引用やライセンス省略ではなく、各データソースのライセンス条件確認と商用利用許可の確保が必須。"
  },
  {
    "id": 4,
    "question": "Generative AIエンジニアが、テクニカルサポートプラットフォーム向けのQAシステムを設計しています。システムには不正確なトラブルシューティング手順の生成を防ぐセーフガードが必要です。最も効果的なソリューションは何ですか？",
    "choices": [
      {
        "text": "技術マニュアルとサポートガイドでLLMをトレーニングする。",
        "is_correct": false
      },
      {
        "text": "トラブルシューティングガイドを要約するために要約モデルを使用する。",
        "is_correct": false
      },
      {
        "text": "ランダム性を制限するためにモデルのtemperatureを下げる。",
        "is_correct": false
      },
      {
        "text": "検証ステップやretrievalベースの拡張などのLLMガードレールを実装する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 検証ステップやretrievalベースの拡張などのLLMガードレールを実装する。</div><p class='explanation-text'>正解：retrievalベースの拡張などのガードレールにより、システムが正確で検証可能なトラブルシューティング手順を生成することが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 技術マニュアルとサポートガイドでLLMをトレーニングする。</div><p class='explanation-text'>不正解：トレーニングはドメイン知識を向上させますが、不正確さのリスクには対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トラブルシューティングガイドを要約するために要約モデルを使用する。</div><p class='explanation-text'>不正解：要約は生成された出力の不正確さを防ぎません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ランダム性を制限するためにモデルのtemperatureを下げる。</div><p class='explanation-text'>不正解：temperatureの調整はばらつきを減らしますが、精度を本質的には向上させません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>検証とretrievalのようなガードレールを実装することで、正確でコンテキスト的に関連するトラブルシューティング応答が確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "テクニカルサポートQAシステムで不正確なトラブルシューティング手順を防ぐには、temperatureやトレーニングではなく、検証ステップとretrievalベース拡張のLLMガードレールが最も効果的。"
  },
  {
    "id": 5,
    "question": "Generative AIエンジニアが、スキャンされたレシートから抽出した構造化テキストをDelta Lakeテーブルに保存するpipelineを作成する任務を担っています。一貫性と効率性を確保する順序は何ですか？",
    "choices": [
      {
        "text": "スキーマを定義せずに生の抽出テキストをDelta Lakeに書き込む。",
        "is_correct": false
      },
      {
        "text": "スキーマを定義し、OCRを適用してテキストを抽出し、Sparkを使用して構造化データをDelta Lakeに書き込む。",
        "is_correct": true
      },
      {
        "text": "生のテキストにregexを使用し、結果を直接Delta Lakeに書き込む。",
        "is_correct": false
      },
      {
        "text": "手動でデータをクリーニングしてDelta Lakeテーブルにロードする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ スキーマを定義し、OCRを適用してテキストを抽出し、Sparkを使用して構造化データをDelta Lakeに書き込む。</div><p class='explanation-text'>正解：スキーマを定義することで一貫性が確保され、OCRによりテキスト抽出が可能になり、Sparkによりスケーラブルなデータ書き込みが可能になります。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ スキーマを定義せずに生の抽出テキストをDelta Lakeに書き込む。</div><p class='explanation-text'>不正解：スキーマなしで非構造化テキストを書き込むと一貫性の欠如とデータの使いにくさのリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 生のテキストにregexを使用し、結果を直接Delta Lakeに書き込む。</div><p class='explanation-text'>不正解：regexだけではレシートのような構造化テキストのすべての複雑さを処理できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 手動でデータをクリーニングしてDelta Lakeテーブルにロードする。</div><p class='explanation-text'>不正解：手動ステップは大規模なpipelineに対して時間がかかり非効率です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>スキーマ、OCR、Sparkを使用した構造化pipelineにより、Delta Lakeテーブルへの信頼性が高くスケーラブルで効率的なデータ取り込みが確保されます。</p></div>",
    "tags": "データ準備",
    "summary": "スキャンレシートからDelta Lakeへのテキスト保存では、regex手動処理ではなく、スキーマ定義→OCR抽出→Spark書き込みの順序で一貫性と効率性を確保。"
  },
  {
    "id": 6,
    "question": "Generative AIエンジニアが、法的ドキュメント分析用のRAGアプリケーションをデプロイしています。システムは制限された権限でのマルチユーザーアクセスをサポートする必要があります。どのアクセス制御措置を実装すべきですか？",
    "choices": [
      {
        "text": "ユーザーロールに基づいて権限を割り当てるためにロールベースアクセス制御（RBAC）を使用する。",
        "is_correct": true
      },
      {
        "text": "開発を簡素化するためにアクセス制御なしでアプリケーションをデプロイする。",
        "is_correct": false
      },
      {
        "text": "認証なしにネットワークレベルの制限に頼る。",
        "is_correct": false
      },
      {
        "text": "すべてのユーザーに共有アクセスキーを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ユーザーロールに基づいて権限を割り当てるためにロールベースアクセス制御（RBAC）を使用する。</div><p class='explanation-text'>正解：RBACはユーザーアクセスへの細かい制御を提供し、安全なマルチユーザー機能を確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 開発を簡素化するためにアクセス制御なしでアプリケーションをデプロイする。</div><p class='explanation-text'>不正解：アクセス制御はマルチユーザーシステムのセキュリティとコンプライアンスに不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 認証なしにネットワークレベルの制限に頼る。</div><p class='explanation-text'>不正解：ネットワーク制限だけでは堅牢なアクセス制御が提供されません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ すべてのユーザーに共有アクセスキーを使用する。</div><p class='explanation-text'>不正解：共有キーはセキュリティを損なわせ、個別のアクセス追跡ができません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>RBACにより安全で制御されたマルチユーザーアクセスが確保され、法的ドキュメント分析システムの要件が満たされます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "法的ドキュメント分析RAGのマルチユーザーアクセス制御には、共有キーやネットワーク制限ではなく、ユーザーロールに基づいて権限を割り当てるRBACが最適。"
  },
  {
    "id": 7,
    "question": "Generative AIエンジニアが、断片化されたドキュメントシリーズからテキストを準備し、Unity Catalogを使用してチャンク化されたテキストをDelta Lakeテーブルに書き込む必要があります。正しい操作の順序は何ですか？",
    "choices": [
      {
        "text": "データをDelta Lakeテーブルに書き込んだ後にスキーマを定義する。",
        "is_correct": false
      },
      {
        "text": "テキストをチャンク → Delta Lakeスキーマを定義 → チャンクをバッチ処理 → Delta Lakeテーブルに書き込む。",
        "is_correct": true
      },
      {
        "text": "ストレージ前にテキストを前処理するために要約モデルを使用する。",
        "is_correct": false
      },
      {
        "text": "チャンキングなしにすべてのテキストを1つのバッチとしてDelta Lakeテーブルに書き込む。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ テキストをチャンク → Delta Lakeスキーマを定義 → チャンクをバッチ処理 → Delta Lakeテーブルに書き込む。</div><p class='explanation-text'>正解：この順序により、データがチャンク化・構造化され、Delta Lakeテーブルに効率的に書き込まれることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ データをDelta Lakeテーブルに書き込んだ後にスキーマを定義する。</div><p class='explanation-text'>不正解：適切な構造化のために、データを書き込む前にスキーマを定義する必要があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ストレージ前にテキストを前処理するために要約モデルを使用する。</div><p class='explanation-text'>不正解：要約はテキストを凝縮しますが、チャンキングやDelta Lakeの要件には対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ チャンキングなしにすべてのテキストを1つのバッチとしてDelta Lakeテーブルに書き込む。</div><p class='explanation-text'>不正解：非構造化入力は非効率なストレージと処理につながります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>このワークフローにより、Unity CatalogのDelta Lakeテーブルへの効率的なデータ準備、チャンキング、ストレージが確保されます。</p></div>",
    "tags": "データ準備",
    "summary": "断片化ドキュメントのDelta Lake保存の正しい操作順序は、テキストチャンク→スキーマ定義→バッチ処理→Delta Lakeテーブル書き込み。スキーマは書き込み前に定義が必須。"
  },
  {
    "id": 8,
    "question": "Generative AIエンジニアが、DatabricksのRAGアプリケーションにLLMをデプロイする任務を担っています。チームはシステムパフォーマンスとコストの両方を監視する必要があります。どのツールと技術の組み合わせを使用すべきですか？（3つ選択）",
    "choices": [
      {
        "text": "precisionとrecallなどのretrieval指標を追跡するMLflow。",
        "is_correct": true
      },
      {
        "text": "各クエリのtoken使用量と応答latencyを追跡するinference logging。",
        "is_correct": true
      },
      {
        "text": "ハードウェアパフォーマンスを最適化するGPU使用率監視。",
        "is_correct": true
      },
      {
        "text": "token使用量を削減するためにcontext lengthを増やす。",
        "is_correct": false
      },
      {
        "text": "DatabricksでLLMをファインチューニングする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ precisionとrecallなどのretrieval指標を追跡するMLflow。</div><p class='explanation-text'>正解：MLflowはretrieval性能を記録し、チームが関連性を監視・改善できるようにします。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 各クエリのtoken使用量と応答latencyを追跡するinference logging。</div><p class='explanation-text'>正解：inference loggingはコストとシステム応答性についてのインサイトを提供し、パフォーマンスとコストのバランス調整に役立ちます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ ハードウェアパフォーマンスを最適化するGPU使用率監視。</div><p class='explanation-text'>正解：GPUの使用状況を監視することでリソースが効率的に使用され、不必要なコストが削減されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ token使用量を削減するためにcontext lengthを増やす。</div><p class='explanation-text'>不正解：context lengthを増やすとtoken使用量が増加し、コストが上昇する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ DatabricksでLLMをファインチューニングする。</div><p class='explanation-text'>不正解：ファインチューニングは精度を向上させますが、パフォーマンスやコストを直接監視しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>inference logging、MLflow、GPUモニタリングを組み合わせることで、システムパフォーマンスとコストの包括的なビューが提供され、最適化が可能になります。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "DatabricksのRAGアプリでシステムパフォーマンスとコストを監視するには、retrieval指標追跡のMLflow・token/latency追跡のinference logging・GPU使用率監視の3つを組み合わせる。"
  },
  {
    "id": 9,
    "question": "Generative AIエンジニアが、法的ドキュメントから回答を取得するRAGシステムを構築しています。ドキュメントにはケースタイムスタンプや冗長なメタデータなどの余分な情報が含まれています。どの前処理戦略を実装すべきですか？",
    "choices": [
      {
        "text": "メタデータを含むドキュメントを完全に除外する。",
        "is_correct": false
      },
      {
        "text": "前処理中にドキュメントからすべてのメタデータを削除する。",
        "is_correct": false
      },
      {
        "text": "完全性を保持するためにメタデータをフィルタリングせずにすべてのドキュメントを処理する。",
        "is_correct": false
      },
      {
        "text": "ケース名や引用などのケース固有の情報を保持しながら、無関係なメタデータをフィルタリングする。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ケース名や引用などのケース固有の情報を保持しながら、無関係なメタデータをフィルタリングする。</div><p class='explanation-text'>正解：フィルタリングにより関連情報のみが保持され、コンテキストを失わずにretrieval品質が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ メタデータを含むドキュメントを完全に除外する。</div><p class='explanation-text'>不正解：メタデータを含むすべてのドキュメントを破棄すると価値ある法的コンテンツが失われるリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 前処理中にドキュメントからすべてのメタデータを削除する。</div><p class='explanation-text'>不正解：メタデータの削除は有用ですが、ケースタイトルや重要な日付などの一部のメタデータはまだ関連性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 完全性を保持するためにメタデータをフィルタリングせずにすべてのドキュメントを処理する。</div><p class='explanation-text'>不正解：すべてのメタデータを保持するとretrieval精度が低下し、出力品質が低下する可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>余分なメタデータのみを削除することで、RAGシステムが意味のあるコンテンツに集中し、retrievalと生成された回答の両方が向上します。</p></div>",
    "tags": "データ準備",
    "summary": "法的ドキュメントRAGの前処理では、全メタデータ削除やドキュメント除外ではなく、ケース名・引用などの有用情報を保持しながら無関係なメタデータのみをフィルタリング。"
  },
  {
    "id": 10,
    "question": "Generative AIエンジニアが、科学研究論文を分析するマルチユーザーRAGアプリケーションをデプロイする必要があります。アプリケーションは機密データを保護しながら同時クエリをサポートする必要があります。どの対策を実装すべきですか？（2つ選択）",
    "choices": [
      {
        "text": "ユーザー権限を管理するためにロールベースアクセス制御（RBAC）を使用する。",
        "is_correct": true
      },
      {
        "text": "同時実行テストをスキップしてデフォルト設定でデプロイする。",
        "is_correct": false
      },
      {
        "text": "機密コンテンツを保護するために保存中と転送中のデータを暗号化する。",
        "is_correct": true
      },
      {
        "text": "デプロイを簡素化するためにパブリックベクトルストアを使用する。",
        "is_correct": false
      },
      {
        "text": "ユーザー認証に共有アクセスキーを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ユーザー権限を管理するためにロールベースアクセス制御（RBAC）を使用する。</div><p class='explanation-text'>正解：RBACはアプリケーション機能へのロール固有のセキュアなアクセスを確保します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 機密コンテンツを保護するために保存中と転送中のデータを暗号化する。</div><p class='explanation-text'>正解：暗号化により、ストレージと通信中に機密データへの不正アクセスが防止されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 同時実行テストをスキップしてデフォルト設定でデプロイする。</div><p class='explanation-text'>不正解：同時実行テストにより負荷下での信頼できるパフォーマンスが確保されます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ デプロイを簡素化するためにパブリックベクトルストアを使用する。</div><p class='explanation-text'>不正解：パブリックベクトルストアはデータのプライバシーとセキュリティを損なわせる可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザー認証に共有アクセスキーを使用する。</div><p class='explanation-text'>不正解：共有キーはセキュリティが低く、個別のアクセス制御を提供しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>RBACと暗号化により、RAGアプリケーションの機密データへのセキュアで準拠したマルチユーザーアクセスが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "機密データを扱うマルチユーザーRAGアプリの保護には、共有キーやパブリックベクトルストアではなく、ユーザー権限管理のRBACと保存中・転送中のデータ暗号化が必要。"
  },
  {
    "id": 11,
    "question": "Generative AIエンジニアが、顧客クレームを抽出するRAGアプリケーション用のメールデータセットをフィルタリングする必要があります。多くのメールには挨拶、署名、無関係な情報が含まれています。最善の前処理ステップは何ですか？",
    "choices": [
      {
        "text": "前処理中に標準的な挨拶と署名を削除する。",
        "is_correct": true
      },
      {
        "text": "50ワード未満のメールを除外する。",
        "is_correct": false
      },
      {
        "text": "コンテキストを保持するためにすべてのテキストを保持する。",
        "is_correct": false
      },
      {
        "text": "フィルタリング前に類似度スコアに基づいてメールをグループ化する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 前処理中に標準的な挨拶と署名を削除する。</div><p class='explanation-text'>正解：無関係なテキストを削除することで、システムがクレームやクエリなどの意味のあるコンテンツに集中することが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 50ワード未満のメールを除外する。</div><p class='explanation-text'>不正解：長さでフィルタリングすると、簡潔な有効なクレームが削除される可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンテキストを保持するためにすべてのテキストを保持する。</div><p class='explanation-text'>不正解：無関係なテキストを保持するとシステムの効率とretrieval品質が低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ フィルタリング前に類似度スコアに基づいてメールをグループ化する。</div><p class='explanation-text'>不正解：クラスタリングは挨拶や署名などの無関係なセクションの削除には対処しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>挨拶と署名を除去することで、データセットが意味のあるテキストに集中し、RAGシステムの効率と応答品質が向上します。</p></div>",
    "tags": "データ準備",
    "summary": "顧客クレーム抽出RAGのメール前処理では、長さフィルタや全テキスト保持ではなく、挨拶・署名などの定型文を削除して意味のあるクレーム内容に集中させることが最善。"
  },
  {
    "id": 12,
    "question": "Generative AIエンジニアが、eコマース向けの多言語チャットボットを作成する任務を担っています。LLMを選択する際に何を優先すべきですか？",
    "choices": [
      {
        "text": "モデルサイズ。",
        "is_correct": false
      },
      {
        "text": "Latency。",
        "is_correct": false
      },
      {
        "text": "多言語パフォーマンスベンチマーク。",
        "is_correct": true
      },
      {
        "text": "tokenの長さサポート。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 多言語パフォーマンスベンチマーク。</div><p class='explanation-text'>正解：多言語ベンチマークにより、グローバルなオーディエンス向けにモデルが多様な言語を効果的に処理できることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルサイズ。</div><p class='explanation-text'>不正解：大きなモデルが多言語タスクで常に優れたパフォーマンスを発揮するとは限りません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Latency。</div><p class='explanation-text'>不正解：重要ですが、latencyだけでは多言語能力には対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ tokenの長さサポート。</div><p class='explanation-text'>不正解：tokenの長さは短い会話的なインタラクションでは二次的です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>多言語ベンチマークを優先することで、LLMがグローバルなeコマースシナリオで幅広い言語を効果的に処理できることが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "eコマース多言語チャットボットのLLM選択では、モデルサイズやlatencyよりも、グローバルオーディエンスへの対応を確保する多言語パフォーマンスベンチマークを優先。"
  },
  {
    "id": 13,
    "question": "エンドポイントをデプロイする際にモデルのシグネチャを登録する主な利点は何ですか？",
    "choices": [
      {
        "text": "モデルパフォーマンスのリアルタイムロギングを有効にする。",
        "is_correct": false
      },
      {
        "text": "推論中のlatencyを削減する。",
        "is_correct": false
      },
      {
        "text": "モデルが正しいフォーマットで入力を受け取り、出力を返すことを確保する。",
        "is_correct": true
      },
      {
        "text": "モデルのトレーニング効率を向上させる。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ モデルが正しいフォーマットで入力を受け取り、出力を返すことを確保する。</div><p class='explanation-text'>正解：モデルシグネチャは期待される入出力構造を定義し、推論中の互換性を確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルパフォーマンスのリアルタイムロギングを有効にする。</div><p class='explanation-text'>不正解：ロギングはモデルシグネチャの機能とは別個のものです。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 推論中のlatencyを削減する。</div><p class='explanation-text'>不正解：シグネチャは互換性を確保しますが、latencyには直接影響しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルのトレーニング効率を向上させる。</div><p class='explanation-text'>不正解：モデルシグネチャはトレーニングプロセスとは無関係です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>モデルシグネチャは入出力フォーマットを定義し、デプロイメントと推論中にモデルが正しく動作することを確保します。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "エンドポイントデプロイ時にモデルシグネチャを登録する主な利点は、latency削減やロギングではなく、モデルが正しいフォーマットで入力を受け取り出力を返すことの確保。"
  },
  {
    "id": 14,
    "question": "Generative AIエンジニアが、RAGシステムの炎上的な出力に対処することで品質を改善する任務を担っています。攻撃的な出力を軽減するための最も効果的なアクションは何ですか？",
    "choices": [
      {
        "text": "取り込み前に手動レビューを通じてアップストリームデータをキュレーションする。",
        "is_correct": true
      },
      {
        "text": "データソースへのアクセスを限られた数のユーザーに制限する。",
        "is_correct": false
      },
      {
        "text": "RAGの予期される動作についてユーザーに通知する。",
        "is_correct": false
      },
      {
        "text": "アップストリームデータ更新の頻度を増やす。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 取り込み前に手動レビューを通じてアップストリームデータをキュレーションする。</div><p class='explanation-text'>正解：アップストリームデータをキュレーションすることで、トレーニングとretrievalのソースが問題のあるコンテンツを含まないことが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ データソースへのアクセスを限られた数のユーザーに制限する。</div><p class='explanation-text'>不正解：アクセスを制限しても攻撃的な出力を直接防止しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ RAGの予期される動作についてユーザーに通知する。</div><p class='explanation-text'>不正解：ユーザーへの通知は期待値を設定しますが、攻撃的な出力を軽減しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ アップストリームデータ更新の頻度を増やす。</div><p class='explanation-text'>不正解：更新頻度を増やしてもデータ自体の品質には対処しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>適切にキュレーションされたデータは攻撃的な出力を軽減し、RAGシステムの品質を向上させるために不可欠です。</p></div>",
    "tags": "ガバナンス",
    "summary": "RAGシステムの炎上的・攻撃的な出力軽減には、アクセス制限やユーザー通知ではなく、取り込み前の手動レビューによるアップストリームデータのキュレーションが最も効果的。"
  },
  {
    "id": 15,
    "question": "Generative AIエンジニアが、カスタマーサポートチャットボットのマルチターン対話生成pipelineを構築しています。複数のターンにわたるエラーを最小化するアプローチはどれですか？",
    "choices": [
      {
        "text": "応答の多様性を高めるためにランダムサンプリングを使用する。",
        "is_correct": false
      },
      {
        "text": "ターンごとにコンテキストをリセットする。",
        "is_correct": false
      },
      {
        "text": "対話の長さを固定ターン数に制限する。",
        "is_correct": false
      },
      {
        "text": "ターンをまたいでユーザーコンテキストを保持するためにメモリまたはステートトラッキングを使用する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ターンをまたいでユーザーコンテキストを保持するためにメモリまたはステートトラッキングを使用する。</div><p class='explanation-text'>正解：メモリによりチャットボットが関連コンテキストを保持し、エラーを削減して一貫性が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答の多様性を高めるためにランダムサンプリングを使用する。</div><p class='explanation-text'>不正解：ランダムサンプリングは一貫性の欠如と会話の一貫性の低下のリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ターンごとにコンテキストをリセットする。</div><p class='explanation-text'>不正解：コンテキストをリセットすると断片的な会話とユーザーの不満につながります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 対話の長さを固定ターン数に制限する。</div><p class='explanation-text'>不正解：対話の長さを制限すると関連する会話が途中で終わる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ステートトラッキングにより、チャットボットがマルチターンインタラクションを通じて継続性と一貫性を維持することが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "マルチターン対話でのエラー最小化には、ランダムサンプリングやコンテキストリセットではなく、ターンをまたいでユーザーコンテキストを保持するメモリまたはステートトラッキングが有効。"
  },
  {
    "id": 16,
    "question": "マルチターンチャットボットを設計する際、ターンをまたいで会話の状態を追跡することが重要な理由は何ですか？",
    "choices": [
      {
        "text": "コンテキストサイズを制限することで応答の長さを短くするため。",
        "is_correct": false
      },
      {
        "text": "コンテキストよりも速度を優先するため。",
        "is_correct": false
      },
      {
        "text": "応答のランダム性を高めるため。",
        "is_correct": false
      },
      {
        "text": "コンテキストを保持し、一貫性のある関連性の高い応答を実現するため。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ コンテキストを保持し、一貫性のある関連性の高い応答を実現するため。</div><p class='explanation-text'>正解：ステートトラッキングによりチャットボットは前のターンの重要情報を保持し、対話品質が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンテキストサイズを制限することで応答の長さを短くするため。</div><p class='explanation-text'>不正解：ステートトラッキングは本質的に応答の長さを短くしません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンテキストよりも速度を優先するため。</div><p class='explanation-text'>不正解：速度は応答の精度や一貫性を犠牲にすべきではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答のランダム性を高めるため。</div><p class='explanation-text'>不正解：ランダム性は一貫性や関連性に寄与しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>状態の追跡により、チャットボットはコンテキストを意識した応答を生成し、ユーザー満足度とシステム有効性が向上します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "マルチターンチャットボットで状態追跡が重要な理由は、前のターンのコンテキストを保持することで一貫性のある関連性の高い応答を実現するため。"
  },
  {
    "id": 17,
    "question": "Generative AIエンジニアが、本番環境にデプロイされたLLMのパフォーマンス監視を行う必要があります。優先すべき主要指標は何ですか？",
    "choices": [
      {
        "text": "latency、throughput、エラーレート。",
        "is_correct": true
      },
      {
        "text": "精度とF1スコア。",
        "is_correct": false
      },
      {
        "text": "BLEUとperplexity。",
        "is_correct": false
      },
      {
        "text": "トークン使用量と入出力の長さの比率。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ latency、throughput、エラーレート。</div><p class='explanation-text'>正解：これらの指標により、本番環境でのシステムの応答性、処理能力、信頼性が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 精度とF1スコア。</div><p class='explanation-text'>不正解：これらはタスク固有の評価指標であり、一般的なデプロイ監視指標ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ BLEUとperplexity。</div><p class='explanation-text'>不正解：これらの指標は言語品質とトレーニングパフォーマンスに焦点を当てており、運用監視ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トークン使用量と入出力の長さの比率。</div><p class='explanation-text'>不正解：コスト分析には有用ですが、デプロイパフォーマンスを直接監視する指標ではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>latency、throughput、エラーレートはデプロイされたLLMの運用パフォーマンスに関する重要な洞察を提供します。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "本番LLM監視の主要指標はlatency・throughput・エラーレートであり、BLEU/perplexityなどの品質評価指標や精度/F1スコアとは区別する必要がある。"
  },
  {
    "id": 18,
    "question": "Generative AIエンジニアが、LLMに個人向けフィットネスアドバイスを提供するためのプロンプトを設計する必要があります。アドバイスには推奨ワークアウトルーティン、カロリー目標、水分補給のヒントを含める必要があります。最も効果的なプロンプトはどれですか？",
    "choices": [
      {
        "text": "ユーザーデータに基づいてフィットネスアドバイスを生成する。",
        "is_correct": false
      },
      {
        "text": "ユーザー入力に基づいて、ワークアウトルーティン、1日のカロリー目標、水分補給のヒントを含む個人向けフィットネスアドバイスを提供する。",
        "is_correct": true
      },
      {
        "text": "ユーザーのフィットネス目標を実行可能なステップに要約する。",
        "is_correct": false
      },
      {
        "text": "ユーザーに一般的なフィットネスの原則を説明する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ユーザー入力に基づいて、ワークアウトルーティン、1日のカロリー目標、水分補給のヒントを含む個人向けフィットネスアドバイスを提供する。</div><p class='explanation-text'>このプロンプトはワークアウトルーティン、1日のカロリー目標、水分補給のヒントを含む個人向けフィットネスアドバイスの具体的な要件を明確に示しています。LLMが個々のユーザーニーズに合わせた個人向け推奨事項の必要性を理解することを確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーデータに基づいてフィットネスアドバイスを生成する。</div><p class='explanation-text'>このプロンプトは曖昧すぎてフィットネスアドバイスを個人化する方法について明確な指示がありません。ワークアウトルーティン、カロリー目標、水分補給のヒントという効果的な個人向けフィットネスアドバイスの重要な要素が欠けています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーのフィットネス目標を実行可能なステップに要約する。</div><p class='explanation-text'>ユーザーのフィットネス目標を実行可能なステップに要約することは重要ですが、このプロンプトはワークアウトルーティン、1日のカロリー目標、水分補給のヒントの必要性を明示していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーに一般的なフィットネスの原則を説明する。</div><p class='explanation-text'>一般的なフィットネスの原則を説明することは、ワークアウトルーティン、カロリー目標、水分補給のヒントを含む個人向けフィットネスアドバイスの提供とは異なります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>必要なフィールドを詳細に記述した明示的なプロンプトにより、LLMが個人向けで包括的なフィットネスアドバイスを生成することが確保されます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "個人向けフィットネスアドバイス生成には、曖昧なプロンプトではなく、ワークアウトルーティン・カロリー目標・水分補給ヒントを明示した具体的なプロンプト設計が最も効果的。"
  },
  {
    "id": 19,
    "question": "Generative AIエンジニアが、注文状況・配送時間・返金に関するカスタマークエリを自動化するマルチエージェントシステムの設計を担当しています。エージェント機能を効果的に公開するために必要なツールはどれですか？",
    "choices": [
      {
        "text": "注文詳細をセマンティックに表現するためにembeddingを適用する。",
        "is_correct": false
      },
      {
        "text": "各クエリタイプを処理するルールベースシステムをトレーニングする。",
        "is_correct": false
      },
      {
        "text": "要約モデルを使用してカスタマークエリを凝縮する。",
        "is_correct": false
      },
      {
        "text": "エージェントの機能を指定し、各機能の使用例を提供するプロンプトテンプレートを構築する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ エージェントの機能を指定し、各機能の使用例を提供するプロンプトテンプレートを構築する。</div><p class='explanation-text'>正解：明確なプロンプトテンプレートにより、モデルがエージェント機能を正確に公開・使用できます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 注文詳細をセマンティックに表現するためにembeddingを適用する。</div><p class='explanation-text'>不正解：embeddingは検索を支援しますが、機能の公開を処理しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 各クエリタイプを処理するルールベースシステムをトレーニングする。</div><p class='explanation-text'>不正解：ルールベースシステムはマルチエージェントタスクに必要な柔軟性に欠けます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約モデルを使用してカスタマークエリを凝縮する。</div><p class='explanation-text'>不正解：要約はエージェント機能の公開に対応しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>プロンプトテンプレートは明確な指示を提供し、システムがエージェント機能を効果的に公開・活用することを確保します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "マルチエージェントシステムでのエージェント機能公開には、embeddingやルールベースシステムではなく、機能と使用例を明示したプロンプトテンプレートの構築が最も効果的。"
  },
  {
    "id": 20,
    "question": "Generative AIエンジニアが、リアルタイム言語翻訳を実行する生成AIアプリケーションをデプロイする必要があります。LLMを選択する際に最も重要な要素は何ですか？",
    "choices": [
      {
        "text": "多言語トレーニングデータのみ。",
        "is_correct": false
      },
      {
        "text": "高いトークン制限。",
        "is_correct": false
      },
      {
        "text": "大きなモデルサイズ。",
        "is_correct": false
      },
      {
        "text": "低latencyと高い翻訳精度。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 低latencyと高い翻訳精度。</div><p class='explanation-text'>正解：低latencyはリアルタイム応答を確保し、高精度は翻訳品質を確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 多言語トレーニングデータのみ。</div><p class='explanation-text'>不正解：有用ではありますが、トレーニングデータだけではリアルタイムパフォーマンスや精度は保証されません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 高いトークン制限。</div><p class='explanation-text'>不正解：トークン制限は長いドキュメントに有用ですが、翻訳タスクの主要な考慮事項ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 大きなモデルサイズ。</div><p class='explanation-text'>不正解：大きなモデルはlatencyを増加させ、リアルタイムアプリケーションへの適合性を低下させる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>低latencyと精度を優先することで、LLMがこのアプリケーションに適したリアルタイムで高品質な翻訳を提供することが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "リアルタイム言語翻訳のLLM選択では、モデルサイズや多言語トレーニングデータよりも、低latencyと高い翻訳精度を最優先すべき。"
  },
  {
    "id": 21,
    "question": "Generative AIエンジニアが、ユーザーの好みに基づいてパーソナライズされた旅行プランを生成するpipelineの設計を担当しています。システムは予算、希望目的地、アクティビティタイプを考慮する必要があります。最善のアプローチはどれですか？（2つ選択）",
    "choices": [
      {
        "text": "ユーザーを事前定義された旅行プランと照合するルールベースシステムを使用する。",
        "is_correct": false
      },
      {
        "text": "分類モデルを使用してユーザーの好みを旅行タイプ別に分類する。",
        "is_correct": false
      },
      {
        "text": "要約モデルを使用してユーザー入力を簡潔な説明に凝縮する。",
        "is_correct": false
      },
      {
        "text": "embeddingモデルを使用してユーザーの好みと目的地をコンテキスト的に表現する。",
        "is_correct": true
      },
      {
        "text": "LLMを使用してユーザー入力に合わせた完全な旅行プランを生成する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ embeddingモデルを使用してユーザーの好みと目的地をコンテキスト的に表現する。</div><p class='explanation-text'>正解：embeddingはユーザーの好みと利用可能なオプションの関係を捉えます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ LLMを使用してユーザー入力に合わせた完全な旅行プランを生成する。</div><p class='explanation-text'>正解：LLMはコンテキスト情報に基づいて個人向けの旅行プランを動的に作成します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーを事前定義された旅行プランと照合するルールベースシステムを使用する。</div><p class='explanation-text'>不正解：ルールベースシステムはパーソナライゼーションに必要な柔軟性に欠けます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 分類モデルを使用してユーザーの好みを旅行タイプ別に分類する。</div><p class='explanation-text'>不正解：分類は完全な旅行プランを生成しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約モデルを使用してユーザー入力を簡潔な説明に凝縮する。</div><p class='explanation-text'>不正解：要約は詳細なプランを作成しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>embeddingとLLMの組み合わせにより、ユーザーニーズに合わせた動的でコンテキストを意識した旅行プランが確保されます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "個人向け旅行プラン生成には、ルールベースや分類モデルではなく、embeddingモデルによるコンテキスト表現とLLMによる動的生成の組み合わせが最善。"
  },
  {
    "id": 22,
    "question": "チームが法的ドキュメントレビュー支援のためにRAGアプリケーションをデプロイしています。embeddingを使用しているにも関わらず、アプリケーションが頻繁に関連性の低いドキュメントを取得しています。ドキュメント検索精度を向上させるために優先すべき調整は何ですか？",
    "choices": [
      {
        "text": "より良い検索のために事前トレーニング済み分類モデルを追加する。",
        "is_correct": false
      },
      {
        "text": "より多くのコンテキストを含めるためにドキュメントのチャンクサイズを増やす。",
        "is_correct": false
      },
      {
        "text": "多様な検索結果を生成するためにランダムサンプリングを実装する。",
        "is_correct": false
      },
      {
        "text": "セマンティック類似度に最適化されたretrieverを使用し、ドメイン固有のデータでembeddingモデルをトレーニングする。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ セマンティック類似度に最適化されたretrieverを使用し、ドメイン固有のデータでembeddingモデルをトレーニングする。</div><p class='explanation-text'>正解：最適化されたretrieverとドメイン固有のembeddingにより、ドキュメント検索が法的テキストの専門的な言語と構造に合わせられます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より良い検索のために事前トレーニング済み分類モデルを追加する。</div><p class='explanation-text'>不正解：分類モデルは検索タスクのセマンティック類似度を向上させません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より多くのコンテキストを含めるためにドキュメントのチャンクサイズを増やす。</div><p class='explanation-text'>不正解：大きなチャンクは無関係なセクションを含めることで関連性を希薄にする可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 多様な検索結果を生成するためにランダムサンプリングを実装する。</div><p class='explanation-text'>不正解：ランダムサンプリングは無関係なドキュメントが取得される可能性を高めます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ドメイン固有のembeddingと最適化されたretrieverにより検索精度が向上し、関連する法的ドキュメントが効率的に取得されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "法的RAGで無関係ドキュメントが多く取得される場合は、チャンクサイズ増加やランダムサンプリングではなく、セマンティック類似度最適化のretrieverとドメイン固有embeddingが有効。"
  },
  {
    "id": 23,
    "question": "検索ベースのAIシステムが無関係なドキュメントを多数取得しています。エンジニアが優先すべき前処理ステップは何ですか？",
    "choices": [
      {
        "text": "システム負荷を下げるためにドキュメントをランダムに削除する。",
        "is_correct": false
      },
      {
        "text": "トークン数が少ないドキュメントに焦点を当てる。",
        "is_correct": false
      },
      {
        "text": "LLMに渡す前に関連性指標やキーワードに基づいてドキュメントをフィルタリングする。",
        "is_correct": true
      },
      {
        "text": "より多くのコンテキストを含めるためにドキュメントのチャンクサイズを増やす。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ LLMに渡す前に関連性指標やキーワードに基づいてドキュメントをフィルタリングする。</div><p class='explanation-text'>正解：フィルタリングにより、システムが高品質で関連性の高いコンテンツのみを処理し、応答精度が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ システム負荷を下げるためにドキュメントをランダムに削除する。</div><p class='explanation-text'>不正解：ランダムに削除すると有用な情報を廃棄するリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トークン数が少ないドキュメントに焦点を当てる。</div><p class='explanation-text'>不正解：ドキュメントの長さは関連性を保証しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より多くのコンテキストを含めるためにドキュメントのチャンクサイズを増やす。</div><p class='explanation-text'>不正解：大きなチャンクはノイズを増やし関連性を低下させる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>無関係なドキュメントのフィルタリングにより、検索システムが高品質な入力に集中し、下流のAIシステムパフォーマンスが向上します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "検索システムで無関係ドキュメントが多い場合、チャンクサイズ増加やランダム削除ではなく、LLMに渡す前に関連性指標やキーワードでフィルタリングする前処理が有効。"
  },
  {
    "id": 24,
    "question": "Generative AIエンジニアが、異なるチームが同じLLMにアクセスするマルチユーザーアプリケーションの設計を担当しています。適切なアクセス制御をどのように確保できますか？",
    "choices": [
      {
        "text": "アプリケーションの特定の機能へのアクセスを制御するロールベースの権限を割り当てる。",
        "is_correct": true
      },
      {
        "text": "ユーザー固有のクエリにtemperature設定を実装する。",
        "is_correct": false
      },
      {
        "text": "すべてのユーザーがアプリケーション全体にアクセスできるようにする。",
        "is_correct": false
      },
      {
        "text": "暗号化を使用して不正なアクションを制限する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ アプリケーションの特定の機能へのアクセスを制御するロールベースの権限を割り当てる。</div><p class='explanation-text'>正解：ロールベースの権限により、各ユーザーまたはチームが自分のロールに関連するアプリケーションの部分のみにアクセスでき、セキュリティが強化されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザー固有のクエリにtemperature設定を実装する。</div><p class='explanation-text'>不正解：temperature設定はランダム性に影響しますが、アクセス制御には影響しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ すべてのユーザーがアプリケーション全体にアクセスできるようにする。</div><p class='explanation-text'>不正解：全員アクセスはデータ漏洩と不正使用のリスクを高めます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 暗号化を使用して不正なアクションを制限する。</div><p class='explanation-text'>不正解：暗号化は保存中または転送中のデータを保護しますが、アクセス権限は管理しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ロールベースの権限は堅牢なアクセス制御を提供し、ユーザーがニーズに合ったアプリケーションの部分のみにアクセスできることを確保します。</p></div>",
    "tags": "ガバナンス",
    "summary": "複数チームが共有LLMにアクセスするマルチユーザーアプリケーションの適切なアクセス制御には、temperature設定や暗号化ではなく、ロールベース権限（RBAC）の割り当てが最善。"
  },
  {
    "id": 25,
    "question": "Generative AIエンジニアが、ユーザーの好みに基づいて映画を推薦するAI pipelineを作成する必要があります。推薦はジャンル、視聴履歴、評価を考慮する必要があります。pipelineはどのように構成すべきですか？",
    "choices": [
      {
        "text": "要約モデルを使用してユーザーの好みのポイントを強調する。",
        "is_correct": false
      },
      {
        "text": "ユーザーの視聴履歴にretrieverを使用し、LLMで個人向け推薦を生成する。",
        "is_correct": true
      },
      {
        "text": "分類モデルを使用して映画のユーザー評価を予測する。",
        "is_correct": false
      },
      {
        "text": "ルールベースシステムを使用してユーザーと映画を照合する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ユーザーの視聴履歴にretrieverを使用し、LLMで個人向け推薦を生成する。</div><p class='explanation-text'>正解：retrieverは関連データにアクセスし、LLMが動的にパーソナライズされた出力を生成します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約モデルを使用してユーザーの好みのポイントを強調する。</div><p class='explanation-text'>不正解：要約は動的な推薦タスクには不十分です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 分類モデルを使用して映画のユーザー評価を予測する。</div><p class='explanation-text'>不正解：分類は個人向け推薦を生成しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ルールベースシステムを使用してユーザーと映画を照合する。</div><p class='explanation-text'>不正解：ルールベースシステムは多様な好みに対する柔軟性に欠けます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>retrieverとLLMの組み合わせにより、ユーザー入力に基づいた動的でコンテキストを意識した映画推薦が実現します。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "映画推薦AIは、分類モデルやルールベースではなく、視聴履歴検索のretrieverとLLMによる個人向け推薦生成の組み合わせで動的でコンテキスト対応の推薦を実現。"
  },
  {
    "id": 26,
    "question": "Generative AIエンジニアが、会議の議事録を要約するAIツールを構築しています。ツールは主要ポイント、アクションアイテム、決定事項を特定する必要があります。この要件に最適なモデルタスクはどれですか？",
    "choices": [
      {
        "text": "固有表現認識（NER）",
        "is_correct": false
      },
      {
        "text": "テキスト要約",
        "is_correct": true
      },
      {
        "text": "テキスト分類",
        "is_correct": false
      },
      {
        "text": "感情分析",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ テキスト要約</div><p class='explanation-text'>正解：要約は会議の議事録を主要ポイントと決定事項を捉えた簡潔な概要に凝縮します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 固有表現認識（NER）</div><p class='explanation-text'>不正解：NERは名前や日付などのエンティティを特定しますが、コンテンツを要約しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ テキスト分類</div><p class='explanation-text'>不正解：分類はコンテンツをカテゴリにマッピングしますが、会議の議事録を要約できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 感情分析</div><p class='explanation-text'>不正解：感情分析はトーンを判断しますが、決定事項やアクションアイテムなど会議固有の出力を特定しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>テキスト要約は会議の議事録を主要ポイント、決定事項、アクションアイテムなど簡潔で実行可能な出力に凝縮する最適なタスクです。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "会議議事録から主要ポイント・アクションアイテム・決定事項を特定するには、NERや感情分析ではなく、テキスト要約が最も適したモデルタスク。"
  },
  {
    "id": 27,
    "question": "Generative AIエンジニアが、テクニカルマニュアルに関するカスタマーの質問に回答するLangChainのチェーンを作成しています。システムは4,096トークン制限のある長いマニュアルを処理する必要があります。エンジニアはチェーンをどのように構成すべきですか？",
    "choices": [
      {
        "text": "retrieverをスキップしてドキュメント全体を直接クエリする。",
        "is_correct": false
      },
      {
        "text": "クエリ前にマニュアルを短い段落に要約する。",
        "is_correct": false
      },
      {
        "text": "チャンキングを使用してマニュアルを管理可能なセクションに分割し、retrieverで関連チャンクを取得し、LLMで回答を生成する。",
        "is_correct": true
      },
      {
        "text": "チャンキングなしでマニュアル全体を処理する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ チャンキングを使用してマニュアルを管理可能なセクションに分割し、retrieverで関連チャンクを取得し、LLMで回答を生成する。</div><p class='explanation-text'>正解：チャンキングによりトークン制限が守られ、retrieverとLLMにより正確な応答が実現します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ retrieverをスキップしてドキュメント全体を直接クエリする。</div><p class='explanation-text'>不正解：直接クエリは検索メカニズムなしでは非効率かつ精度が低くなります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリ前にマニュアルを短い段落に要約する。</div><p class='explanation-text'>不正解：要約は正確な回答に必要な重要な詳細を失う可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ チャンキングなしでマニュアル全体を処理する。</div><p class='explanation-text'>不正解：チャンキングなしで長いドキュメントを処理するとトークン制限を超え、失敗します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>チャンキング、retrieval、LLMにより、トークン制限が守られ正確で詳細な応答が維持されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "4,096トークン制限のある長いマニュアルへのQAには、直接クエリや全文処理ではなく、チャンキング→retriever→LLMの組み合わせでトークン制限を守りながら正確な応答を実現。"
  },
  {
    "id": 28,
    "question": "Generative AIエンジニアが、会議サマリーを生成するシステムを設計しています。各サマリーには参加者、主要決定事項、次のステップを含める必要があります。最も効果的なプロンプト構造はどれですか？（2つ選択）",
    "choices": [
      {
        "text": "「会議を要約してください」のような汎用プロンプトを使用する。",
        "is_correct": false
      },
      {
        "text": "テキストをより少ない単語に凝縮することに集中する。",
        "is_correct": false
      },
      {
        "text": "例を追加する：参加者：アリス、ボブ；決定事項：予算承認；次のステップ：フォローアップをスケジュール。",
        "is_correct": true
      },
      {
        "text": "高temperature設定を使用してクリエイティブな応答を生成する。",
        "is_correct": false
      },
      {
        "text": "プロンプトにフィールドを指定する：参加者、主要決定事項、次のステップを含むサマリーを提供してください。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 例を追加する：参加者：アリス、ボブ；決定事項：予算承認；次のステップ：フォローアップをスケジュール。</div><p class='explanation-text'>正解：例は明確さを向上させ、モデルを望ましい出力構造に向けてガイドします。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ プロンプトにフィールドを指定する：参加者、主要決定事項、次のステップを含むサマリーを提供してください。</div><p class='explanation-text'>正解：詳細なプロンプトにより、LLMが出力に必要なすべてのフィールドを含めることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 「会議を要約してください」のような汎用プロンプトを使用する。</div><p class='explanation-text'>不正解：汎用プロンプトは主要フィールドを省略したり不完全なサマリーを提供するリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ テキストをより少ない単語に凝縮することに集中する。</div><p class='explanation-text'>不正解：簡潔さは必要な要素すべての包含を確保しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 高temperature設定を使用してクリエイティブな応答を生成する。</div><p class='explanation-text'>不正解：高temperatureは無関係または予測不可能なコンテンツを導入する可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>フィールドの指定と例の提供により、LLMがユーザー要件に沿った構造化された会議サマリーを生成することが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "会議サマリー生成で参加者・決定事項・次のステップを必ず含めるには、汎用プロンプトではなく、フィールド指定と出力例の追加という2つのプロンプト設計が有効。"
  },
  {
    "id": 29,
    "question": "Generative AIエンジニアが、RAGシステムのトレーニング用にスキャンされた法的ドキュメント（PNG形式）のバッチからテキストを抽出する必要があります。このタスクに最適な抽出ツールはどれですか？",
    "choices": [
      {
        "text": "テキスト解析のためのBeautifulSoup。",
        "is_correct": false
      },
      {
        "text": "テキスト解析のためのpdfplumber。",
        "is_correct": false
      },
      {
        "text": "スキャン画像の読み取りのためのPyPDF2。",
        "is_correct": false
      },
      {
        "text": "画像からのOCRベーステキスト抽出のためのpytesseract。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 画像からのOCRベーステキスト抽出のためのpytesseract。</div><p class='explanation-text'>正解：pytesseractはPNGなどのスキャン画像からのテキスト抽出に適した堅牢なOCRツールです。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ テキスト解析のためのBeautifulSoup。</div><p class='explanation-text'>不正解：BeautifulSoupはHTMLの解析に使用されOCRタスクには向きません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ テキスト解析のためのpdfplumber。</div><p class='explanation-text'>不正解：pdfplumberはPDFに対応しており、画像ベースのドキュメントには向きません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ スキャン画像の読み取りのためのPyPDF2。</div><p class='explanation-text'>不正解：PyPDF2はPNGなどの画像ファイルを処理できません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>pytesseractは画像ファイルからの正確なテキスト抽出を可能にし、PNG形式のスキャンされた法的ドキュメントに最適です。</p></div>",
    "tags": "データ準備",
    "summary": "PNG形式のスキャン法的ドキュメントからのテキスト抽出には、BeautifulSoupやpdfplumberやPyPDF2ではなく、OCRベースのpytesseractが最適。"
  },
  {
    "id": 30,
    "question": "Generative AIエンジニアが、データベースクエリを実行するエージェント用のプロンプトテンプレートを設計する必要があります。テンプレートはcreate_record、update_record、delete_recordなどの利用可能な機能を公開する必要があります。最も効果的なプロンプト構造はどれですか？",
    "choices": [
      {
        "text": "データベーススキーマを要約してモデルに機能を推論させる。",
        "is_correct": false
      },
      {
        "text": "トレーニングデータに基づいてモデルにアクションを実行するよう指示する。",
        "is_correct": false
      },
      {
        "text": "「必要に応じてデータベースレコードを操作してください」のような汎用指示を使用する。",
        "is_correct": false
      },
      {
        "text": "利用可能な機能（create_record、update_record、delete_record）の一覧とそれらの使用方法を提供する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 利用可能な機能（create_record、update_record、delete_record）の一覧とそれらの使用方法を提供する。</div><p class='explanation-text'>正解：機能を明示的に列挙することで、モデルが利用可能なアクションとその使用方法を理解できます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ データベーススキーマを要約してモデルに機能を推論させる。</div><p class='explanation-text'>不正解：スキーマの要約は正確な機能使用を保証しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トレーニングデータに基づいてモデルにアクションを実行するよう指示する。</div><p class='explanation-text'>不正解：トレーニングデータに依存すると古いまたは不完全な出力が生じる可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 「必要に応じてデータベースレコードを操作してください」のような汎用指示を使用する。</div><p class='explanation-text'>不正解：汎用指示は明確さに欠け予測不可能な出力を招く可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>機能と指示の明確なリストを提供することで、モデルが要件に従いデータベースを正しく操作できます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "データベース操作エージェントのプロンプトテンプレートには、汎用指示やスキーマ要約ではなく、create_record・update_record・delete_recordの機能一覧と使用方法を明示的に列挙することが最も効果的。"
  },
  {
    "id": 31,
    "question": "Generative AIエンジニアが、デプロイされたRAGアプリケーションをデータガバナンスに関するエンタープライズコンプライアンス基準に準拠させる必要があります。重要なステップはどれですか？（2つ選択）",
    "choices": [
      {
        "text": "エンドポイントのクエリと応答を追跡するために監査ログを使用する。",
        "is_correct": true
      },
      {
        "text": "集中型ガバナンスのためにすべてのモデルをUnity Catalogに登録する。",
        "is_correct": true
      },
      {
        "text": "デプロイされたモデルのメタデータ設定をスキップする。",
        "is_correct": false
      },
      {
        "text": "embeddingモデルなしにLLMのみに依存する。",
        "is_correct": false
      },
      {
        "text": "コスト削減のためにパブリックなベクトルストアを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ エンドポイントのクエリと応答を追跡するために監査ログを使用する。</div><p class='explanation-text'>正解：監査ログはシステム使用状況の可視性を提供し、コンプライアンスとトラブルシューティングを支援します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 集中型ガバナンスのためにすべてのモデルをUnity Catalogに登録する。</div><p class='explanation-text'>正解：Unity Catalogはエンタープライズアプリケーションのガバナンスとコンプライアンス追跡を可能にします。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ デプロイされたモデルのメタデータ設定をスキップする。</div><p class='explanation-text'>不正解：メタデータ設定はガバナンスとコンプライアンス基準の追跡に不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embeddingモデルなしにLLMのみに依存する。</div><p class='explanation-text'>不正解：embeddingと検索システムは効果的なRAGアプリケーションに不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コスト削減のためにパブリックなベクトルストアを使用する。</div><p class='explanation-text'>不正解：パブリックなベクトルストアはデータセキュリティとコンプライアンスを損なう可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>モデルの登録と監査ログの使用により、エンタープライズグレードのRAGアプリケーションのガバナンスとコンプライアンスが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "エンタープライズRAGのコンプライアンス確保には、メタデータスキップやパブリックベクトルストアではなく、Unity Catalogへのモデル登録と監査ログによるエンドポイント追跡が重要。"
  },
  {
    "id": 32,
    "question": "Generative AIエンジニアが、EC（電子商取引）のカスタマーサポート向けにRAG（検索拡張生成）アプリケーションをデプロイする必要があります。このシステムを構築するための重要なステップは何ですか？",
    "choices": [
      {
        "text": "1. retrieverを構築 → 2. カスタマークエリを前処理 → 3. 要約モデルをデプロイ → 4. embeddingをデータベースに保存。",
        "is_correct": false
      },
      {
        "text": "1. カスタマーレビューでLLMをファインチューニング → 2. retrieverを構築 → 3. embeddingを生成 → 4. システムをデプロイ。",
        "is_correct": false
      },
      {
        "text": "1. 商品説明のembeddingを生成 → 2. Vector SearchインデックスにembeddingをStoreする → 3. retrieverをLLMと統合 → 4. pipelineのエンドポイントをデプロイ。",
        "is_correct": true
      },
      {
        "text": "1. 商品カテゴリの分類モデルをトレーニング → 2. retrieverをデプロイ → 3. クエリを要約 → 4. 出力を保存。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 1. 商品説明のembeddingを生成 → 2. Vector SearchインデックスにembeddingをStoreする → 3. retrieverをLLMと統合 → 4. pipelineのエンドポイントをデプロイ。</div><p class='explanation-text'>正解：このシーケンスにより商品説明が検索用にインデックス化され、LLMと組み合わせて動的なカスタマークエリ応答が実現します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 1. retrieverを構築 → 2. カスタマークエリを前処理 → 3. 要約モデルをデプロイ → 4. embeddingをデータベースに保存。</div><p class='explanation-text'>不正解：検索ワークフローではまずembeddingとインデックス化の設定が必要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 1. カスタマーレビューでLLMをファインチューニング → 2. retrieverを構築 → 3. embeddingを生成 → 4. システムをデプロイ。</div><p class='explanation-text'>不正解：効果的な検索のためにembeddingとインデックス化はretriever開発に先立つ必要があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 1. 商品カテゴリの分類モデルをトレーニング → 2. retrieverをデプロイ → 3. クエリを要約 → 4. 出力を保存。</div><p class='explanation-text'>不正解：分類モデルは検索と生成に特化したRAGシステムには不要です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>正しいシーケンスはembedding生成、インデックス化、retrieval統合、エンドポイントデプロイを含み、カスタマークエリに動的に対応します。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "ECカスタマーサポートRAGの構築手順は、embedding生成→Vector Searchインデックス保存→retrieverとLLM統合→エンドポイントデプロイという順序が正しい。"
  },
  {
    "id": 33,
    "question": "Generative AIエンジニアが、技術ドキュメント向けのRAG（検索拡張生成）アプリケーションをデプロイする必要があります。デプロイプロセスの最初のステップは何ですか？",
    "choices": [
      {
        "text": "推論用にエンドポイントを設定する。",
        "is_correct": false
      },
      {
        "text": "Unity CatalogにモデルをRegisterする。",
        "is_correct": false
      },
      {
        "text": "技術ドキュメントのベクトルembeddingを作成する。",
        "is_correct": true
      },
      {
        "text": "要約のためにLLMをファインチューニングする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 技術ドキュメントのベクトルembeddingを作成する。</div><p class='explanation-text'>正解：ドキュメントのembeddingは効果的な類似度ベースの検索を可能にする最初のステップです。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 推論用にエンドポイントを設定する。</div><p class='explanation-text'>不正解：エンドポイントの設定は後のデプロイステップです。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Unity CatalogにモデルをRegisterする。</div><p class='explanation-text'>不正解：登録は後で行われ、検索pipelineの基盤ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約のためにLLMをファインチューニングする。</div><p class='explanation-text'>不正解：ファインチューニングはパフォーマンスを向上させますが、ドキュメントのembeddingに先立つものではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>embeddingの作成は検索プロセスの基盤であり、RAGアプリケーションが関連ドキュメントを効果的に検索・取得できるようにします。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "技術ドキュメントRAGのデプロイ最初のステップは、エンドポイント設定やモデル登録ではなく、ドキュメントのベクトルembedding作成であり、これが検索の基盤となる。"
  },
  {
    "id": 34,
    "question": "Generative AIエンジニアが、会社のブランディングとトーンに合ったユーザークエリへの応答を生成する必要があります。LLMがこれらの要件に合うようにするアプローチはどれですか？（2つ選択）",
    "choices": [
      {
        "text": "希望するクリエイティビティを実現するためにモデルtemperatureを調整する。",
        "is_correct": false
      },
      {
        "text": "希望するトーンとスタイルを明示的に定義するためにmetapromptを使用する。",
        "is_correct": true
      },
      {
        "text": "会社のドキュメントとコミュニケーションガイドラインでLLMをファインチューニングする。",
        "is_correct": true
      },
      {
        "text": "応答を簡略化するために要約モデルを使用する。",
        "is_correct": false
      },
      {
        "text": "トーン別に応答をラベル付けする分類モデルをトレーニングする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 希望するトーンとスタイルを明示的に定義するためにmetapromptを使用する。</div><p class='explanation-text'>正解：metapromptはモデルが会社のブランディングと一致する出力を生成するよう誘導します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 会社のドキュメントとコミュニケーションガイドラインでLLMをファインチューニングする。</div><p class='explanation-text'>正解：ファインチューニングにより、モデルが会社のブランディングとトーンに沿うことが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 希望するクリエイティビティを実現するためにモデルtemperatureを調整する。</div><p class='explanation-text'>不正解：temperature調整はランダム性に影響しますが、トーンやブランディングを強制しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答を簡略化するために要約モデルを使用する。</div><p class='explanation-text'>不正解：要約はトーンやブランディングに対応しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トーン別に応答をラベル付けする分類モデルをトレーニングする。</div><p class='explanation-text'>不正解：分類はブランディングに合わせて応答を変更しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ファインチューニングとmetapromptの組み合わせにより、LLMが会社のトーンとブランディングに沿った応答を生成することが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "企業ブランディングに沿ったLLM応答生成には、temperature調整や要約モデルではなく、metapromptによるトーン定義と会社ドキュメントでのファインチューニングの2つが有効。"
  },
  {
    "id": 35,
    "question": "Generative AIエンジニアが、QAアプリケーション用のDatabricksデプロイLLMシステムのコストパフォーマンスを評価しています。チームはトラフィック増加に対するスケーラビリティを確保する必要があります。コストを監視・最適化する最も効果的な戦略はどれですか？（3つ選択）",
    "choices": [
      {
        "text": "需要に基づいてGPUリソースを動的にスケールする。",
        "is_correct": true
      },
      {
        "text": "より高いthroughputを処理するためにLLMをファインチューニングする。",
        "is_correct": false
      },
      {
        "text": "クエリあたりのトークン使用量を監視してコストの高い操作を特定する。",
        "is_correct": true
      },
      {
        "text": "高トラフィック下でのコストとパフォーマンスの傾向を分析するためにinference loggingを使用する。",
        "is_correct": true
      },
      {
        "text": "精度向上のために検索バッチサイズを増やす。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 需要に基づいてGPUリソースを動的にスケールする。</div><p class='explanation-text'>正解：動的スケーリングにより、リソース割り当てがトラフィックと一致し、低需要時の不要なコストを回避します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ クエリあたりのトークン使用量を監視してコストの高い操作を特定する。</div><p class='explanation-text'>正解：トークン使用量の追跡により、不要なトークンの削減などコストを最適化できる領域が特定されます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 高トラフィック下でのコストとパフォーマンスの傾向を分析するためにinference loggingを使用する。</div><p class='explanation-text'>正解：inference loggingはシステム動作の詳細なビューを提供し、コストとパフォーマンスの調整を可能にします。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より高いthroughputを処理するためにLLMをファインチューニングする。</div><p class='explanation-text'>不正解：ファインチューニングはモデルパフォーマンスを向上させますが、スケーラビリティコストに直接対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 精度向上のために検索バッチサイズを増やす。</div><p class='explanation-text'>不正解：大きなバッチサイズはコストを直接最適化せず、関連性を低下させる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>トークン使用量の監視、inference logging、動的GPU スケーリングにより、高トラフィックアプリケーションのコスト効率の高いスケーラビリティが確保されます。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "高トラフィックQAシステムのコスト最適化には、ファインチューニングやバッチサイズ増加ではなく、動的GPUスケーリング・トークン使用量監視・inference loggingの3つが有効。"
  },
  {
    "id": 36,
    "question": "Generative AIエンジニアが、RAGアプリケーション向けにプロビジョニングスループットのModel Servingエンドポイントを設定しました。現在はマイクロサービスを使用してリクエストとレスポンスをリモートサーバーにログ記録していますが、同じタスクを実行するDatabricksネイティブ機能を探しています。どの機能を使用すべきですか？",
    "choices": [
      {
        "text": "Inference Tables",
        "is_correct": true
      },
      {
        "text": "Lakeview",
        "is_correct": false
      },
      {
        "text": "DBSQL",
        "is_correct": false
      },
      {
        "text": "Vector Search",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ Inference Tables</div><p class='explanation-text'>正解：Inference Tablesはデプロイされたモデルエンドポイントのリクエスト・レスポンスのログ記録と監視のために特別に設計されています。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Lakeview</div><p class='explanation-text'>不正解：LakeviewはDelta Lakeを監視しますが、inference logsを処理しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ DBSQL</div><p class='explanation-text'>不正解：DBSQL（Databricks SQL）はデータクエリ用であり、エンドポイントのログ記録には適していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Vector Search</div><p class='explanation-text'>不正解：Vector Searchはセマンティック検索に使用され、リクエスト・レスポンスのログ記録には使用しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Inference Tablesはリクエスト・レスポンスのログ追跡をネイティブにサポートし、カスタムマイクロサービスの理想的な代替となります。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "RAGエンドポイントのリクエスト・レスポンスをDatabricksネイティブでログ記録するには、LakeviewやDBSQLではなく、Inference Tablesが専用機能として最適。"
  },
  {
    "id": 37,
    "question": "Generative AIエンジニアが、RAGシステム用の学術論文データセットのフィルタリングを担当しています。論文には謝辞や付録などの無関係なセクションが含まれています。最善のアプローチは何ですか？",
    "choices": [
      {
        "text": "完全性のためにすべてのセクションを保持する。",
        "is_correct": false
      },
      {
        "text": "前処理中に謝辞や付録などの無関係なセクションをフィルタリングする。",
        "is_correct": true
      },
      {
        "text": "検索のためのコンテキストを最大化するために論文全体を使用する。",
        "is_correct": false
      },
      {
        "text": "一貫性のためにすべてのセクションを1つのドキュメントにマージする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 前処理中に謝辞や付録などの無関係なセクションをフィルタリングする。</div><p class='explanation-text'>正解：無関係なセクションを削除することでノイズが減少し、検索品質が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 完全性のためにすべてのセクションを保持する。</div><p class='explanation-text'>不正解：無関係なセクションを保持すると検索プロセスに不要なノイズが追加されます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 検索のためのコンテキストを最大化するために論文全体を使用する。</div><p class='explanation-text'>不正解：論文全体を使用すると関連性を希薄にする無関係なコンテンツが含まれるリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 一貫性のためにすべてのセクションを1つのドキュメントにマージする。</div><p class='explanation-text'>不正解：セクションをマージすると明確さと検索効率が低下します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>無関係なセクションをフィルタリングして学術論文を前処理することで、RAGシステムの高品質な検索が確保されます。</p></div>",
    "tags": "データ準備",
    "summary": "RAGシステム向け学術論文データセットの前処理では、全セクション保持や全文使用ではなく、謝辞・付録などの無関係なセクションをフィルタリングして検索品質を向上させる。"
  },
  {
    "id": 38,
    "question": "Generative AIエンジニアが、商品説明を生成するLLMの出力品質を評価する必要があります。どの定性的評価に注目すべきですか？",
    "choices": [
      {
        "text": "使用されたユニークな単語の数。",
        "is_correct": false
      },
      {
        "text": "応答生成速度。",
        "is_correct": false
      },
      {
        "text": "長さとスタイルの一貫性。",
        "is_correct": false
      },
      {
        "text": "関連性、創造性、事実の正確さ。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 関連性、創造性、事実の正確さ。</div><p class='explanation-text'>正解：これらの要因により、生成された商品説明が正確で魅力的であり、入力データと整合していることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 使用されたユニークな単語の数。</div><p class='explanation-text'>不正解：単語の多様性は品質や関連性を確保しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答生成速度。</div><p class='explanation-text'>不正解：商品説明タスクでは速度は品質より二次的です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 長さとスタイルの一貫性。</div><p class='explanation-text'>不正解：有用ではありますが、長さとスタイルだけでは品質を保証しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>関連性、創造性、事実の正確さを評価することで、ユーザーの期待に応える高品質な商品説明が確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "商品説明生成LLMの定性的評価では、単語数・速度・スタイル一貫性ではなく、関連性・創造性・事実の正確さの3つが最も重要な評価軸。"
  },
  {
    "id": 39,
    "question": "Generative AIエンジニアが旅行チャットボットを構築しています。チャットボットは目的地に関するユーザーのクエリに回答し、アクティビティを提案し、宿泊施設を推薦する必要があります。このユースケースに最適なモデルタスクはどれですか？",
    "choices": [
      {
        "text": "RAG（検索拡張生成）",
        "is_correct": true
      },
      {
        "text": "テキスト分類",
        "is_correct": false
      },
      {
        "text": "固有表現認識（NER）",
        "is_correct": false
      },
      {
        "text": "要約",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ RAG（検索拡張生成）</div><p class='explanation-text'>正解：RAGはドキュメント検索と生成を組み合わせ、応答が正確で関連情報に基づいていることを確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ テキスト分類</div><p class='explanation-text'>不正解：分類は入力を分類しますが、応答を生成したり関連ドキュメントを取得したりしません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 固有表現認識（NER）</div><p class='explanation-text'>不正解：NERはエンティティを特定しますが、クエリに回答したり推薦を提供したりできません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約</div><p class='explanation-text'>不正解：要約は情報を凝縮しますが、ユーザーのクエリを全体的に処理しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>RAG（検索拡張生成）により、チャットボットの応答が検索された知識に基づき、ユーザーへの正確でパーソナライズされた推薦が実現します。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "目的地回答・アクティビティ提案・宿泊推薦の旅行チャットボットには、テキスト分類やNERや要約ではなく、検索と生成を組み合わせたRAGが最適なモデルタスク。"
  },
  {
    "id": 40,
    "question": "Generative AIエンジニアが、LangChainを使用してカスタマーデータベースをクエリするシンプルなチェーンのコーディングを担当しています。チェーンはメールIDに基づいてユーザー詳細を抽出する必要があります。必要なコンポーネントはどれですか？",
    "choices": [
      {
        "text": "ハードコードされたメールクエリのためのルールベースシステム。",
        "is_correct": false
      },
      {
        "text": "データベースをクエリするretriever、応答を処理するLLM、クエリ生成のためのプロンプトテンプレート。",
        "is_correct": true
      },
      {
        "text": "クエリ結果を凝縮する要約モデル。",
        "is_correct": false
      },
      {
        "text": "ユーザーメールを分類する分類モデル。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ データベースをクエリするretriever、応答を処理するLLM、クエリ生成のためのプロンプトテンプレート。</div><p class='explanation-text'>正解：これらのコンポーネントにより、ユーザー入力に基づいた効果的なクエリと応答生成が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ハードコードされたメールクエリのためのルールベースシステム。</div><p class='explanation-text'>不正解：ルールベースシステムは動的な入力に対する柔軟性に欠けます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリ結果を凝縮する要約モデル。</div><p class='explanation-text'>不正解：要約はユーザー情報などの特定の詳細を抽出するのに不要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーメールを分類する分類モデル。</div><p class='explanation-text'>不正解：分類はデータベースからユーザー詳細を取得するのに役立ちません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>retriever、LLM、プロンプトテンプレートの組み合わせにより、LangChainを使用した動的なクエリと正確な応答生成が確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "LangChainでメールIDに基づくユーザー詳細抽出チェーンに必要なコンポーネントは、ルールベースや分類モデルではなく、retriever・LLM・プロンプトテンプレートの3つ。"
  },
  {
    "id": 41,
    "question": "Generative AIエンジニアが、フィードバックフォームに基づいてカスタマーレビューを生成するアプリケーションを設計しています。一部の入力には機密データが含まれています。エンジニアはどのように対処すべきですか？",
    "choices": [
      {
        "text": "フィードバックをマスキングなしで直接処理し、出力を監視する。",
        "is_correct": false
      },
      {
        "text": "要約モデルを使用して機密詳細を一般化する。",
        "is_correct": false
      },
      {
        "text": "機密入力を許可するが、モデルが機密出力を生成しないようにする。",
        "is_correct": false
      },
      {
        "text": "処理前に名前や連絡先情報などの機密データをマスキングする。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 処理前に名前や連絡先情報などの機密データをマスキングする。</div><p class='explanation-text'>正解：マスキングにより機密データが除外され、プライバシーとコンプライアンスが維持されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ フィードバックをマスキングなしで直接処理し、出力を監視する。</div><p class='explanation-text'>不正解：マスキングなしでデータを処理すると出力で機密情報が漏洩するリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約モデルを使用して機密詳細を一般化する。</div><p class='explanation-text'>不正解：要約は機密データの削除を保証しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 機密入力を許可するが、モデルが機密出力を生成しないようにする。</div><p class='explanation-text'>不正解：モデルは明示的な前処理なしに機密データを信頼性高く除外できません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>入力段階での機密データのマスキングにより、データ保護基準に対するプライバシーとコンプライアンスが確保されます。</p></div>",
    "tags": "ガバナンス",
    "summary": "フィードバックフォームに機密データが含まれる場合、要約モデルや出力監視ではなく、処理前に名前・連絡先情報などをマスキングする入力段階の前処理がプライバシー保護に最適。"
  },
  {
    "id": 42,
    "question": "Generative AIエンジニアが、商品推薦用LLMをデプロイする必要があります。システムはコスト効率と応答latencyのバランスを取る必要があります。どの戦略を実装すべきですか？",
    "choices": [
      {
        "text": "利用可能な最大の事前トレーニング済みモデルを使用する。",
        "is_correct": false
      },
      {
        "text": "同じクエリを同時に処理するために複数のモデルをデプロイする。",
        "is_correct": false
      },
      {
        "text": "コンピュートリソースを増やすことでlatency削減のみに集中する。",
        "is_correct": false
      },
      {
        "text": "頻繁なクエリをキャッシュしながら推論に小さなファインチューニング済みモデルを使用する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 頻繁なクエリをキャッシュしながら推論に小さなファインチューニング済みモデルを使用する。</div><p class='explanation-text'>正解：小さなモデルはコストとlatencyを削減し、キャッシュは繰り返しクエリのパフォーマンスを向上させます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 利用可能な最大の事前トレーニング済みモデルを使用する。</div><p class='explanation-text'>不正解：大きなモデルはコストが高く、不要なlatencyを増大させる可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 同じクエリを同時に処理するために複数のモデルをデプロイする。</div><p class='explanation-text'>不正解：これは効率を上げることなくコストと複雑さを増加させます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンピュートリソースを増やすことでlatency削減のみに集中する。</div><p class='explanation-text'>不正解：モデルを最適化せずにコンピュートリソースを増やすことはコスト効率が悪いです。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ファインチューニング、モデルサイズの最適化、キャッシュの組み合わせにより、コスト効率の高い低latencyの推薦システムが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "商品推薦LLMのコスト効率と低latencyのバランスには、最大モデルや複数モデル並行デプロイではなく、小さなファインチューニング済みモデル推論と頻繁クエリのキャッシュが最善。"
  },
  {
    "id": 43,
    "question": "Generative AIエンジニアが、法律事務所向けのRAG（検索拡張生成）システムを構築しています。システムは契約書から関連条項を取得し、弁護士向けに要約します。関連条項が確実に取得されるための最も重要なコンポーネントはどれですか？",
    "choices": [
      {
        "text": "条項抽出のためのルールベースシステムを構築する。",
        "is_correct": false
      },
      {
        "text": "条項のセマンティック検索のためのベクトルデータベースを実装する。",
        "is_correct": true
      },
      {
        "text": "キーワードベースの検索アルゴリズムを使用する。",
        "is_correct": false
      },
      {
        "text": "法的ドキュメント用にLLMをファインチューニングする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 条項のセマンティック検索のためのベクトルデータベースを実装する。</div><p class='explanation-text'>正解：ベクトルデータベースはセマンティック検索を可能にし、正確なキーワード一致ではなく意味に基づいて条項を取得します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 条項抽出のためのルールベースシステムを構築する。</div><p class='explanation-text'>不正解：ルールベースシステムは柔軟性に欠け、微妙なクエリを効果的に処理できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ キーワードベースの検索アルゴリズムを使用する。</div><p class='explanation-text'>不正解：キーワード検索は硬直的で、言い換えや同義語を使用した関連条項を見落とす可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 法的ドキュメント用にLLMをファインチューニングする。</div><p class='explanation-text'>不正解：ファインチューニング済みLLMは要約を生成しますが、関連入力には効果的な検索に依存します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ベクトルデータベースはコンテキスト的に関連する条項の取得を確保し、高品質な要約生成のための正確な入力を提供します。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "法的RAGシステムで契約条項を正確に取得するために最も重要なコンポーネントは、ルールベースやキーワード検索ではなく、意味に基づく検索を可能にするベクトルデータベース。"
  },
  {
    "id": 44,
    "question": "Generative AIエンジニアが、MLflowを使用してデプロイされたRAGアプリケーションを評価する必要があります。最も関連性の高い評価指標はどれですか？",
    "choices": [
      {
        "text": "throughputとクエリあたりのコスト。",
        "is_correct": false
      },
      {
        "text": "トレーニング損失と検証精度。",
        "is_correct": false
      },
      {
        "text": "latencyとエラーレート。",
        "is_correct": false
      },
      {
        "text": "precisionとrecallなどの検索関連性指標、およびBLEUやROUGEなどの応答精度指標。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ precisionとrecallなどの検索関連性指標、およびBLEUやROUGEなどの応答精度指標。</div><p class='explanation-text'>正解：これらの指標は検索と生成の品質を総合的に評価し、包括的な評価を確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ throughputとクエリあたりのコスト。</div><p class='explanation-text'>不正解：これらの指標は運用効率を評価するものであり、アプリケーション品質ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トレーニング損失と検証精度。</div><p class='explanation-text'>不正解：これらの指標はモデルトレーニングに関連しており、デプロイ後の評価ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ latencyとエラーレート。</div><p class='explanation-text'>不正解：これらはデプロイパフォーマンス指標であり、品質評価のための評価指標ではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>precision、recall、BLEU/ROUGEはRAGアプリケーションの検索と生成の品質を総合的に評価します。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "MLflowでのRAGアプリケーション評価には、latency/スループット/トレーニング損失ではなく、検索品質のprecision/recallと生成品質のBLEU/ROUGEを組み合わせた指標が最も関連性が高い。"
  },
  {
    "id": 45,
    "question": "Generative AIエンジニアが、ソーシャルメディアモデレーションシステムで有害なコンテンツの生成を防ぐために言語モデル向けのmetapromptを作成する必要があります。metapromptが強調すべき内容は何ですか？",
    "choices": [
      {
        "text": "有害または危険なフレーズをブロックするためのコンテキストフィルタリング。",
        "is_correct": true
      },
      {
        "text": "繰り返しを減らすためのランダムサンプリング。",
        "is_correct": false
      },
      {
        "text": "エンゲージメントを向上させるための応答の多様性。",
        "is_correct": false
      },
      {
        "text": "複雑さを最小化するための短いプロンプト。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 有害または危険なフレーズをブロックするためのコンテキストフィルタリング。</div><p class='explanation-text'>正解：metapromptはモデルが有害な言語を認識してフィルタリングするよう誘導する必要があります。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 繰り返しを減らすためのランダムサンプリング。</div><p class='explanation-text'>不正解：ランダム性は変動性を増加させ、意図せず有害なコンテンツを導入する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ エンゲージメントを向上させるための応答の多様性。</div><p class='explanation-text'>不正解：多様性は毒性防止とは無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 複雑さを最小化するための短いプロンプト。</div><p class='explanation-text'>不正解：短いプロンプトは本質的に有害な出力を防ぎません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>コンテキストフィルタリングを強調するmetapromptにより、モデルが有害または毒性のあるコンテンツの生成を回避することが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "ソーシャルメディアモデレーション向けmetapromptでは、ランダムサンプリングや応答多様性ではなく、有害・危険フレーズをブロックするコンテキストフィルタリングの強調が有毒コンテンツ防止に最も効果的。"
  }
];
