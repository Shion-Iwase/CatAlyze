window.questionsDataDbxg4 = [
  {
    "id": 1,
    "question": "Generative AIエンジニアが、テキストベースのユーザーレビューを分類されたインサイトに変換するpipelineのツールを選択する任務を担っています。カテゴリには製品品質、配送、カスタマーサービスが含まれます。重要なコンポーネントはどれですか？",
    "choices": [
      {
        "text": "類似レビューを取得するretrievalシステム。",
        "is_correct": false
      },
      {
        "text": "レビューをセマンティックに表現するembeddingモデル。",
        "is_correct": false
      },
      {
        "text": "ユーザーレビューを凝縮する要約モデル。",
        "is_correct": false
      },
      {
        "text": "事前定義されたカテゴリに基づいてユーザーレビューを分類する分類モデル。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 事前定義されたカテゴリに基づいてユーザーレビューを分類する分類モデル。</div><p class='explanation-text'>正解：分類モデルはレビューを特定のカテゴリに効果的に割り当てます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 類似レビューを取得するretrievalシステム。</div><p class='explanation-text'>不正解：retrievalは分類や分類されたインサイトを生成しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ レビューをセマンティックに表現するembeddingモデル。</div><p class='explanation-text'>不正解：embeddingは意味をキャプチャしますが、レビューを直接分類しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーレビューを凝縮する要約モデル。</div><p class='explanation-text'>不正解：要約は特定の分類を生成しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>分類モデルによりレビューが正しいカテゴリに割り当てられ、ユーザーフィードバックからアクション可能なインサイトが得られます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "レビューを製品品質・配送・カスタマーサービス等のカテゴリに分類するには、事前定義カテゴリに基づく分類モデルが最適なコンポーネント。"
  },
  {
    "id": 2,
    "question": "電子機器会社のGenerative AIエンジニアが、顧客が製品について質問できるRAGアプリケーションをデプロイしました。しかし、RAGの応答が無関係な製品の情報を返すことが多いというフィードバックを受けました。エンジニアはRAGの応答の関連性を改善するために何ができますか？",
    "choices": [
      {
        "text": "よく聞かれる質問のキャッシングを実装する。",
        "is_correct": false
      },
      {
        "text": "異なるセマンティック類似性検索アルゴリズムを使用する。",
        "is_correct": false
      },
      {
        "text": "取得されたコンテキストの品質を評価する。",
        "is_correct": true
      },
      {
        "text": "生成された応答を改善するために異なるLLMを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 取得されたコンテキストの品質を評価する。</div><p class='explanation-text'>正解：取得されたドキュメントの品質を確認することで、関連性の高い情報のみがLLMに供給され、応答の精度が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ よく聞かれる質問のキャッシングを実装する。</div><p class='explanation-text'>不正解：キャッシングは速度を向上させますが、retrieval品質や関連性の問題には対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 異なるセマンティック類似性検索アルゴリズムを使用する。</div><p class='explanation-text'>不正解：これは役立つ可能性がありますが、取得されたコンテキストを評価することが関連性の診断と改善の最初のステップです。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 生成された応答を改善するために異なるLLMを使用する。</div><p class='explanation-text'>不正解：問題はretrieval にあり、LLMの生成能力ではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>取得されたコンテキストの品質を評価することで、正確で関連性の高い情報のみがLLMに渡され、関連性の問題が効果的に解決されます。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "RAGが無関係な製品情報を返す場合、LLMや検索アルゴリズムではなく、まず取得されたコンテキストの品質評価を優先する。"
  },
  {
    "id": 3,
    "question": "LLMアプリケーションを開発する際、法的リスクを回避するためにモデルのトレーニングに使用するデータがライセンス要件に準拠していることを確認することが重要です。法的リスクを避けるために適切でない行動はどれですか？",
    "choices": [
      {
        "text": "オープンライセンスが明示されたデータのみを使用し、ライセンス条項に従うことを確保する。",
        "is_correct": false
      },
      {
        "text": "トレーニング済みモデルの使用を開始する前に、データキュレーターに直接連絡して知らせる。",
        "is_correct": false
      },
      {
        "text": "トレーニング済みモデルの使用を開始した後に、データキュレーターに直接連絡して知らせる。",
        "is_correct": true
      },
      {
        "text": "自分自身が作成した完全にオリジナルのデータを使用し、そのライセンスを自分で決定する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ トレーニング済みモデルの使用を開始した後に、データキュレーターに直接連絡して知らせる。</div><p class='explanation-text'>正解：データを使用した後にキュレーターに連絡しても、遡及的に許可を得ることはできず、法的結果につながる可能性があります。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ オープンライセンスが明示されたデータのみを使用し、ライセンス条項に従うことを確保する。</div><p class='explanation-text'>不正解：ラベル付きオープンデータのライセンス条項に従うことで法的リスクを回避できます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トレーニング済みモデルの使用を開始する前に、データキュレーターに直接連絡して知らせる。</div><p class='explanation-text'>不正解：使用開始後にデータキュレーターに連絡するのは不適切で、法的リスクにさらされます。使用前に必ず条件を明確にしてください。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 自分自身が作成した完全にオリジナルのデータを使用し、そのライセンスを自分で決定する。</div><p class='explanation-text'>不正解：自分が作成したオリジナルデータは、ライセンスを管理している限り法的に安全です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>法的リスクを回避するために、トレーニングに第三者データを使用する前に必ず許可を確立するかライセンス条項を確認してください。</p></div>",
    "tags": "ガバナンス",
    "summary": "LLMトレーニングデータの法的リスク回避では、データキュレーターへの連絡は使用開始前に行う必要があり、使用開始後の連絡は不適切。"
  },
  {
    "id": 4,
    "question": "Generative AIエンジニアが、知識ベースのドキュメントクエリを処理するVector Searchインデックスを構築する任務を担っています。このインデックスを作成・クエリするために必要なステップはどれですか？",
    "choices": [
      {
        "text": "embeddingなしで生のドキュメントに直接retrievalモデルを使用する。",
        "is_correct": false
      },
      {
        "text": "前処理をスキップして、クエリのためにベクトルストアに生のドキュメントテキストを保存する。",
        "is_correct": false
      },
      {
        "text": "クエリにembeddingを使用するがドキュメントには使用しない。",
        "is_correct": false
      },
      {
        "text": "ドキュメントを前処理し、embeddingモデルでembeddingし、ベクトルストアにembeddingを保存し、クエリにretrieverを使用する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ドキュメントを前処理し、embeddingモデルでembeddingし、ベクトルストアにembeddingを保存し、クエリにretrieverを使用する。</div><p class='explanation-text'>正解：前処理、embedding、retrievalは効果的なVector Searchインデックスを構築・クエリするために不可欠です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embeddingなしで生のドキュメントに直接retrievalモデルを使用する。</div><p class='explanation-text'>不正解：retrieverは効果的な検索のためにドキュメントコンテンツをセマンティックに表現するembeddingが必要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 前処理をスキップして、クエリのためにベクトルストアに生のドキュメントテキストを保存する。</div><p class='explanation-text'>不正解：前処理なしでは、ドキュメントにノイズが含まれる可能性があり、retrieval品質が低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリにembeddingを使用するがドキュメントには使用しない。</div><p class='explanation-text'>不正解：検索時のセマンティックアライメントのために、ドキュメントとクエリの両方をembeddingする必要があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Vector Searchインデックスの作成には、前処理、embedding、ベクトルストアへの保存、クエリ処理のためのretriever使用が必要です。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "Vector Searchインデックス構築の正しい手順は、ドキュメント前処理→embedding→ベクトルストア保存→retrieverによるクエリ処理の順。"
  },
  {
    "id": 5,
    "question": "Generative AIエンジニアが、増加するクエリ量を処理する本番LLMアプリケーションのスケーラビリティを評価する必要があります。最も重要なメトリクスはどれですか？",
    "choices": [
      {
        "text": "モデルサイズとパラメータ数。",
        "is_correct": false
      },
      {
        "text": "様々なワークロード下でのthroughputとレイテンシ。",
        "is_correct": true
      },
      {
        "text": "トークン使用量とクエリあたりのコスト。",
        "is_correct": false
      },
      {
        "text": "BLEUとperplexity。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 様々なワークロード下でのthroughputとレイテンシ。</div><p class='explanation-text'>正解：これらのメトリクスは、増加するクエリ量を効率的に処理するシステムの能力を直接評価します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルサイズとパラメータ数。</div><p class='explanation-text'>不正解：モデルサイズだけではスケーラビリティを評価しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トークン使用量とクエリあたりのコスト。</div><p class='explanation-text'>不正解：重要ですが、これらのメトリクスはスケーラビリティを直接測定しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ BLEUとperplexity。</div><p class='explanation-text'>不正解：これらのメトリクスは言語品質を評価し、システムのスケーラビリティは評価しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>throughputとレイテンシは、増加するワークロード下で本番LLMアプリケーションがどれだけスケールするかを評価するために重要です。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "本番LLMアプリケーションのスケーラビリティ評価には、様々なワークロード下でのthroughputとレイテンシが最重要メトリクス。"
  },
  {
    "id": 6,
    "question": "Generative AIエンジニアが、LLMがユーザークエリに不完全な応答を提供するシステムをデバッグしています。最も可能性の高い原因は何ですか？",
    "choices": [
      {
        "text": "ユーザークエリが短すぎる。",
        "is_correct": false
      },
      {
        "text": "temperature設定が高すぎる。",
        "is_correct": false
      },
      {
        "text": "モデルがタスクに対して大きすぎる。",
        "is_correct": false
      },
      {
        "text": "プロンプトに明確な指示や十分なコンテキストが提供されていない。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ プロンプトに明確な指示や十分なコンテキストが提供されていない。</div><p class='explanation-text'>正解：不完全または不明瞭なプロンプトは、LLMから不完全な応答を引き起こすことがよくあります。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザークエリが短すぎる。</div><p class='explanation-text'>不正解：クエリの長さだけでは応答の品質を保証しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ temperature設定が高すぎる。</div><p class='explanation-text'>不正解：高いtemperatureはランダム性に影響しますが、完全性には影響しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルがタスクに対して大きすぎる。</div><p class='explanation-text'>不正解：モデルサイズは応答の完全性に直接影響しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>プロンプトを詳細で明確にすることで、LLMが完全で正確な応答を生成するようにガイドできます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "LLMの不完全な応答の最も可能性の高い原因は、プロンプトに明確な指示や十分なコンテキストが欠けていること。"
  },
  {
    "id": 7,
    "question": "RAG pipelineを実装する際にLLM応答のハルシネーションを減らすための最も効果的なアプローチは何ですか？",
    "choices": [
      {
        "text": "推論中にtemperatureパラメータを上げる。",
        "is_correct": false
      },
      {
        "text": "より大きなデータセットでモデルをトレーニングする。",
        "is_correct": false
      },
      {
        "text": "モデル応答の長さを短縮する。",
        "is_correct": false
      },
      {
        "text": "モデルに正確なコンテキストを提供するために高品質なドキュメントretrievalシステムを使用する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ モデルに正確なコンテキストを提供するために高品質なドキュメントretrievalシステムを使用する。</div><p class='explanation-text'>正解：高品質なドキュメントretrievalは応答を事実データに基づかせ、ハルシネーションを最小化します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 推論中にtemperatureパラメータを上げる。</div><p class='explanation-text'>不正解：temperatureを上げるとランダム性が増し、ハルシネーションが増加する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より大きなデータセットでモデルをトレーニングする。</div><p class='explanation-text'>不正解：より大きなトレーニングデータセットは推論中のハルシネーション削減を保証しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデル応答の長さを短縮する。</div><p class='explanation-text'>不正解：短い応答は本質的に事実の精度を改善しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>高品質な取得済みコンテキストにモデル応答を基づかせることで、事実に基づく出力が確保され、ハルシネーションの削減に重要です。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "RAG pipelineでのハルシネーション削減には、高品質なドキュメントretrievalシステムで正確なコンテキストをモデルに提供することが最効果的。"
  },
  {
    "id": 8,
    "question": "Generative AIエンジニアが、学生向けの教育コンテンツの要約を生成するシステムを構築する必要があります。要約には主要概念、例、実用的な応用の3つのフィールドを含める必要があります。最良のpipeline設計はどれですか？",
    "choices": [
      {
        "text": "要約モデルを使用してコンテンツをより短いテキストに凝縮する。",
        "is_correct": false
      },
      {
        "text": "LLMを使用して、主要概念、例、応用に構造化された要約を動的に生成する。",
        "is_correct": true
      },
      {
        "text": "ルールベースシステムを使用して事前定義された教育要素を抽出する。",
        "is_correct": false
      },
      {
        "text": "embeddingモデルを使用して教育テキストをセマンティックに表現する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ LLMを使用して、主要概念、例、応用に構造化された要約を動的に生成する。</div><p class='explanation-text'>正解：LLMはユーザーニーズに合わせた構造化された教育コンテンツの要約を動的に生成します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約モデルを使用してコンテンツをより短いテキストに凝縮する。</div><p class='explanation-text'>不正解：要約は特定のフィールドを持つ構造化された出力を生成しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ルールベースシステムを使用して事前定義された教育要素を抽出する。</div><p class='explanation-text'>不正解：ルールベースシステムは多様なコンテンツに対して柔軟性と適応性が不足しています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embeddingモデルを使用して教育テキストをセマンティックに表現する。</div><p class='explanation-text'>不正解：embedding単体では構造化された要約を作成しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>LLMは構造化された教育コンテンツを動的に生成し、主要概念や応用などのフィールドの要件に沿います。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "主要概念・例・実用的応用の3フィールドを持つ教育要約生成には、LLMによる動的な構造化生成が最適なpipeline設計。"
  },
  {
    "id": 9,
    "question": "Generative AIエンジニアが、カスタマーサポートチャットボットのドキュメントretrievalを最適化しています。ユーザーフィードバックによると、無関係な結果が頻繁に表示されるとのことです。エンジニアは何を改善することに注力すべきですか？",
    "choices": [
      {
        "text": "ドキュメントの長さフィルタリング",
        "is_correct": false
      },
      {
        "text": "応答生成の多様性",
        "is_correct": false
      },
      {
        "text": "recall",
        "is_correct": false
      },
      {
        "text": "precision",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ precision</div><p class='explanation-text'>precisionは取得結果の精度の尺度です。この場合、エンジニアはprecisionを改善して検索結果がユーザーのクエリに関連していることを確保することに注力すべきです。precisionを向上させることで、チャットボットに表示される無関係な結果の数を減らすことができます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ドキュメントの長さフィルタリング</div><p class='explanation-text'>不正解：ドキュメントの長さフィルタリングは過度に長いまたは短いドキュメントをフィルタリングすることでretrievalを最適化するのに役立つかもしれません。しかし、ユーザーフィードバックは無関係な結果が頻繁に表示されることを示しており、これはドキュメントの長さよりも結果の関連性に問題があることを示唆しています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答生成の多様性</div><p class='explanation-text'>不正解：応答生成の多様性はチャットボットが生成する応答の多様性に関連しています。多様性はユーザーを引き付けるために重要ですが、ユーザーフィードバックの主要な問題は無関係な結果の存在であり、応答生成の多様性に焦点を当てても直接対処できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ recall</div><p class='explanation-text'>不正解：recallは取得結果の完全性の尺度です。recallはすべての関連結果が取得されることを確保するために重要ですが、ユーザーフィードバックは特に無関係な結果が頻繁に表示されることを述べており、このシナリオではrecallよりもprecisionの改善に注力すべきです。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>precisionに焦点を当てることで、チャットボットが関連するコンテンツのみを取得し、ユーザー満足度とシステム精度が向上します。</p></div>",
    "tags": "データ準備",
    "summary": "チャットボットで無関係な結果が頻出する場合、recallではなくprecision（取得結果の関連性の精度）の改善に注力する。"
  },
  {
    "id": 10,
    "question": "Generative AIエンジニアが、MLflowを使用してカスタムLLMをUnity Catalogに登録する必要があります。このプロセスの主要なステップはどれですか？",
    "choices": [
      {
        "text": "MLflowにログせずにUnity Catalogにモデルを直接登録する。",
        "is_correct": false
      },
      {
        "text": "モデルをMLflowにログし、メタデータ（例：スキーマと説明）を設定し、ガバナンスと発見のためにUnity Catalogに登録する。",
        "is_correct": true
      },
      {
        "text": "モデルを登録せずにMLflowトラッキングサーバーのみを使用する。",
        "is_correct": false
      },
      {
        "text": "登録中にメタデータの設定をスキップする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ モデルをMLflowにログし、メタデータ（例：スキーマと説明）を設定し、ガバナンスと発見のためにUnity Catalogに登録する。</div><p class='explanation-text'>正解：ロギングとメタデータの設定により、モデルが適切に追跡され、一元アクセスとガバナンスのために登録されることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ MLflowにログせずにUnity Catalogにモデルを直接登録する。</div><p class='explanation-text'>不正解：MLflowは登録前に必要な重要なロギングとメタデータ管理機能を提供します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルを登録せずにMLflowトラッキングサーバーのみを使用する。</div><p class='explanation-text'>不正解：Unity Catalogへの登録は一元管理されたガバナンスと発見のために必要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 登録中にメタデータの設定をスキップする。</div><p class='explanation-text'>不正解：メタデータはモデルの発見可能性と使用状況の追跡に不可欠です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>適切なロギング、メタデータ設定、登録により、モデルがUnity Catalog内で効果的に発見・管理されることが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "カスタムLLMをUnity Catalogに登録する手順は、MLflowへのログ→スキーマ・説明等のメタデータ設定→Unity Catalog登録の順が正しい。"
  },
  {
    "id": 11,
    "question": "Generative AIエンジニアが、RAGシステムのretrieval パフォーマンスを評価しています。この評価に最も関連するメトリクスはどれですか？",
    "choices": [
      {
        "text": "取得結果の関連性とカバレッジを測定するprecisionとrecall。",
        "is_correct": true
      },
      {
        "text": "応答の流暢さを測定するperplexity。",
        "is_correct": false
      },
      {
        "text": "retrieval評価のためのBLEUスコア。",
        "is_correct": false
      },
      {
        "text": "応答時間を測定するレイテンシ。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 取得結果の関連性とカバレッジを測定するprecisionとrecall。</div><p class='explanation-text'>正解：precisionは取得されたドキュメントの関連性を評価し、recallは関連するドキュメントがどれだけ取得されたかを評価します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答の流暢さを測定するperplexity。</div><p class='explanation-text'>不正解：perplexityは言語生成を評価し、retrieval パフォーマンスは評価しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ retrieval評価のためのBLEUスコア。</div><p class='explanation-text'>不正解：BLEUは翻訳や要約タスクのテキスト類似性を評価し、retrievalは評価しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答時間を測定するレイテンシ。</div><p class='explanation-text'>不正解：レイテンシは速度を測定しますが、retrieval の関連性や精度を評価しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>precisionとrecallはRAGシステムにおける取得結果の関連性とカバレッジを評価するための重要なメトリクスです。</p></div>",
    "tags": "データ準備",
    "summary": "RAGシステムのretrieval性能評価には、取得結果の関連性(precision)とカバレッジ(recall)が最も関連性の高いメトリクス。"
  },
  {
    "id": 12,
    "question": "Generative AIエンジニアが、旅行代理店向けのチャットボットを構築しています。チャットボットは天気の好み、予算、アクティビティに基づいて旅行先を推薦する必要があります。pipeline設計の最初のステップは何ですか？",
    "choices": [
      {
        "text": "旅行先とアクティビティのデータベースを作成する。",
        "is_correct": false
      },
      {
        "text": "初期の推薦についてフィードバックを収集する。",
        "is_correct": false
      },
      {
        "text": "budget、preferred_weather、activitiesなどの入力フィールドと、destinationやactivity_recommendationsなどの出力フィールドを定義する。例：入力：{ \"budget\": \"$3000\", \"preferred_weather\": \"tropical\", \"activities\": \"adventure\" } → 出力：{ \"destination\": \"Thailand\", \"activity_recommendations\": \"snorkeling, jungle trekking\" }。",
        "is_correct": true
      },
      {
        "text": "推薦のために旅行データでトレーニングされたLLMを選択する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ budget、preferred_weather、activitiesなどの入力フィールドと、destinationやactivity_recommendationsなどの出力フィールドを定義する。例：入力：{ \"budget\": \"$3000\", \"preferred_weather\": \"tropical\", \"activities\": \"adventure\" } → 出力：{ \"destination\": \"Thailand\", \"activity_recommendations\": \"snorkeling, jungle trekking\" }。</div><p class='explanation-text'>正解：入力と出力を明確に定義することで、pipelineがビジネス目標とユーザー要件に沿うことが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 旅行先とアクティビティのデータベースを作成する。</div><p class='explanation-text'>不正解：データベースは推薦をサポートしますが、事前定義されたpipeline構造が必要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 初期の推薦についてフィードバックを収集する。</div><p class='explanation-text'>不正解：フィードバックは後の最適化に重要ですが、最初のpipeline設計時ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 推薦のために旅行データでトレーニングされたLLMを選択する。</div><p class='explanation-text'>不正解：モデル選択は入力・出力関係の定義より後で行います。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>予算などの入力と旅行先推薦などの出力を明確に定義することで、ユーザー要件とのアライメントが確保され、pipelineのアーキテクチャがガイドされます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "旅行推薦チャットボットのpipeline設計の最初のステップは、予算・天気・アクティビティ等の入出力フィールドを明確に定義すること。"
  },
  {
    "id": 13,
    "question": "Generative AIエンジニアが、表、画像、テキストを含むPDFから顧客フィードバックを抽出する必要があります。このタスクに最も適したツールはどれですか？",
    "choices": [
      {
        "text": "OCR抽出のためのpytesseract。",
        "is_correct": false
      },
      {
        "text": "PDFから構造化テキストと表を抽出するためのpdfplumber。",
        "is_correct": true
      },
      {
        "text": "PDFコンテンツを読み取り・抽出するためのPyPDF2。",
        "is_correct": false
      },
      {
        "text": "PDFコンテンツをパースするためのBeautifulSoup。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ PDFから構造化テキストと表を抽出するためのpdfplumber。</div><p class='explanation-text'>正解：pdfplumberは構造化テキストと表の抽出に最適化されており、混合コンテンツのPDFの処理に最適です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ OCR抽出のためのpytesseract。</div><p class='explanation-text'>不正解：pytesseractはPDF内のテキストではなく、スキャンされた画像に使用されます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ PDFコンテンツを読み取り・抽出するためのPyPDF2。</div><p class='explanation-text'>不正解：PyPDF2は表や画像を効果的に処理できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ PDFコンテンツをパースするためのBeautifulSoup。</div><p class='explanation-text'>不正解：BeautifulSoupはHTMLのために設計されており、PDFパースではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>pdfplumberはPDFからテキストや表などの構造化コンテンツを抽出するための最良のツールであり、正確なデータretrievalを確保します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "表・画像・テキストが混在するPDFからの構造化データ抽出には、pdfplumberが最適なツール（pytesseractはスキャン画像向け）。"
  },
  {
    "id": 14,
    "question": "Generative AIエンジニアが、歴史的な出来事についての質問に答えるQAシステムのプロンプトを設計しています。応答には日付、主要な人物、結果を含める必要があります。プロンプトはどのように構造化すべきですか？",
    "choices": [
      {
        "text": "歴史的な出来事の要約を提供する。",
        "is_correct": false
      },
      {
        "text": "歴史的な出来事の原因を説明する。",
        "is_correct": false
      },
      {
        "text": "日付、主要な人物、結果の詳細を含めて質問に答える。",
        "is_correct": true
      },
      {
        "text": "歴史的な出来事の一般的な概要を提供する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 日付、主要な人物、結果の詳細を含めて質問に答える。</div><p class='explanation-text'>正解：明確で具体的なプロンプトにより、必要な詳細がすべて含まれることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 歴史的な出来事の要約を提供する。</div><p class='explanation-text'>不正解：要約は日付や主要な人物などの重要な詳細を省略する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 歴史的な出来事の原因を説明する。</div><p class='explanation-text'>不正解：原因だけでは詳細な回答の要件を満たしません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 歴史的な出来事の一般的な概要を提供する。</div><p class='explanation-text'>不正解：概要は広すぎて具体性が不足しています。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>必要なフィールドを指定した明確なプロンプトにより、QAシステムが正確で包括的な応答を生成することが確保されます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "歴史的出来事のQAシステムのプロンプトは、要約や概要ではなく、日付・主要人物・結果の詳細を含めた具体的な構造にすべき。"
  },
  {
    "id": 15,
    "question": "Generative AIエンジニアが、大量の教育資料から多肢選択式の質問を生成する必要があります。質問は概念的理解と知識の応用を評価するものにする必要があります。どのようなアプローチを取るべきですか？",
    "choices": [
      {
        "text": "質問の構造、選択肢、正解を指定するpromptテンプレートを使用する。",
        "is_correct": true
      },
      {
        "text": "資料から回答を生成する分類モデルをトレーニングする。",
        "is_correct": false
      },
      {
        "text": "資料を要点に凝縮する要約モデルを使用する。",
        "is_correct": false
      },
      {
        "text": "教育データセットでLLMをファインチューニングする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 質問の構造、選択肢、正解を指定するpromptテンプレートを使用する。</div><p class='explanation-text'>正解：promptテンプレートはLLMが構造化された正確な多肢選択式の質問を生成するようにガイドします。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 資料から回答を生成する分類モデルをトレーニングする。</div><p class='explanation-text'>不正解：分類モデルは多肢選択式の質問を生成するように設計されていません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 資料を要点に凝縮する要約モデルを使用する。</div><p class='explanation-text'>不正解：要約は構造化された質問を生成しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 教育データセットでLLMをファインチューニングする。</div><p class='explanation-text'>不正解：ファインチューニングはドメイン知識を向上させますが、多肢選択式の質問生成を確保しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>promptテンプレートにより、LLMが構造化された選択肢と正解を含む教育目標に沿った質問を生成することが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "教育資料からの多肢選択式問題生成には、質問構造・選択肢・正解を指定するpromptテンプレートの使用が最も効果的なアプローチ。"
  },
  {
    "id": 16,
    "question": "Generative AIエンジニアが、デプロイのために機械学習モデルをUnity Catalogに登録する必要があります。これによってどのような利点が得られますか？",
    "choices": [
      {
        "text": "自動ハイパーパラメータチューニング。",
        "is_correct": false
      },
      {
        "text": "集中管理されたモデルガバナンス、バージョン管理、アクセス制御。",
        "is_correct": true
      },
      {
        "text": "カスタムタスクのためのファインチューニング機能。",
        "is_correct": false
      },
      {
        "text": "モデル推論時間の短縮。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 集中管理されたモデルガバナンス、バージョン管理、アクセス制御。</div><p class='explanation-text'>正解：Unity CatalogはMLflowと統合し、機械学習モデルのトラッキング、リネージ、ガバナンスなどの機能を提供します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 自動ハイパーパラメータチューニング。</div><p class='explanation-text'>不正解：Unity Catalogはモデルのメタデータを追跡しますが、チューニングは処理しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ カスタムタスクのためのファインチューニング機能。</div><p class='explanation-text'>不正解：ファインチューニングはUnity Catalogでは処理されない別のプロセスです。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデル推論時間の短縮。</div><p class='explanation-text'>不正解：Unity Catalogはガバナンスとレジストリを管理しますが、推論速度には影響しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Unity Catalogはモデルガバナンスを集中管理し、堅牢な機械学習ワークフローのためのトラッキング、バージョン管理、アクセス制御を可能にします。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "Unity Catalogへのモデル登録により、集中管理されたガバナンス・バージョン管理・アクセス制御が利用可能になる（チューニングや推論速度改善は対象外）。"
  },
  {
    "id": 17,
    "question": "Generative AIエンジニアが、法的アドバイスを生成するチャットボットの出力を評価する必要があります。出力には曖昧な記述が含まれることがよくあります。これらの問題を特定・解決するためにどの方法を使用すべきですか？",
    "choices": [
      {
        "text": "チャットボットの応答のBLEUスコアを測定する。",
        "is_correct": false
      },
      {
        "text": "要約モデルを使用して応答を短縮する。",
        "is_correct": false
      },
      {
        "text": "より広範なデータセットでチャットボットをトレーニングする。",
        "is_correct": false
      },
      {
        "text": "応答の明確さと正確さを定性的に評価し、曖昧さを減らすためにプロンプトを改良する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 応答の明確さと正確さを定性的に評価し、曖昧さを減らすためにプロンプトを改良する。</div><p class='explanation-text'>正解：定性的評価により出力が法的基準に沿っていることが確保され、プロンプトの改良で特定された問題に対処します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ チャットボットの応答のBLEUスコアを測定する。</div><p class='explanation-text'>不正解：BLEUはテキスト類似性を評価しますが、曖昧さや正確さには対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約モデルを使用して応答を短縮する。</div><p class='explanation-text'>不正解：要約により必要なコンテキストが除去され、曖昧さが増す可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より広範なデータセットでチャットボットをトレーニングする。</div><p class='explanation-text'>不正解：より大きなデータセットは全体的なパフォーマンスを向上させるかもしれませんが、曖昧さには特に対処しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>定性的評価とプロンプトの改良は曖昧な応答の根本原因に直接取り組み、改善された出力を確保します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "法的アドバイスチャットボットの曖昧な出力には、BLEUスコアやデータ追加ではなく、定性的評価とプロンプト改良で直接対処する。"
  },
  {
    "id": 18,
    "question": "Generative AIエンジニアが、知識管理システムのためのベクトル検索インデックスを作成・クエリする必要があります。正確な結果を確保するための重要なステップはどれですか？",
    "choices": [
      {
        "text": "クエリにキーワードベースのマッチングのみを使用する。",
        "is_correct": false
      },
      {
        "text": "embeddingなしで生のドキュメントストレージに頼る。",
        "is_correct": false
      },
      {
        "text": "ドキュメントを前処理し、テキストのembeddingを作成し、embeddingをベクトルストアに保存し、クエリに最近傍探索を使用する。",
        "is_correct": true
      },
      {
        "text": "ドキュメントの前処理をスキップして直接embeddingを作成する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ドキュメントを前処理し、テキストのembeddingを作成し、embeddingをベクトルストアに保存し、クエリに最近傍探索を使用する。</div><p class='explanation-text'>正解：前処理によりクリーンなデータが確保され、embeddingによりセマンティックな理解が可能になり、最近傍探索で正確な結果が取得されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリにキーワードベースのマッチングのみを使用する。</div><p class='explanation-text'>不正解：キーワードベースのマッチングはベクトル検索が提供するセマンティックな深さを欠いています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embeddingなしで生のドキュメントストレージに頼る。</div><p class='explanation-text'>不正解：生のドキュメントストレージでは効率的なベクトル検索やセマンティックマッチングをサポートできません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ドキュメントの前処理をスキップして直接embeddingを作成する。</div><p class='explanation-text'>不正解：前処理によりノイズが除去され、embeddingとretrievalの品質が向上します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ドキュメントを前処理し、embeddingを作成し、ベクトル検索でクエリするpipelineにより、正確で効率的な結果が確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "ベクトル検索インデックスの正しい手順は、ドキュメント前処理→embedding作成→ベクトルストア保存→最近傍探索によるクエリの順。"
  },
  {
    "id": 19,
    "question": "Generative AIエンジニアが、安全な医療チャットボット応答を生成するためのモデルを選択しています。データプライバシーを確保するために重要な機能はどれですか？",
    "choices": [
      {
        "text": "モデルが無制限の外部APIコールを許可すべきである。",
        "is_correct": false
      },
      {
        "text": "モデルが応答の多様性を優先すべきである。",
        "is_correct": false
      },
      {
        "text": "モデルがユーザー入力を保存したり、外部データストレージに基づいて応答を生成したりすべきでない。",
        "is_correct": true
      },
      {
        "text": "モデルが常に精度よりも速度を優先すべきである。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ モデルがユーザー入力を保存したり、外部データストレージに基づいて応答を生成したりすべきでない。</div><p class='explanation-text'>正解：モデルが入力を保存しないことを確保することで、機密データの漏洩を防ぎ、プライバシー基準への準拠を確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルが無制限の外部APIコールを許可すべきである。</div><p class='explanation-text'>不正解：無制限のAPIコールはデータ侵害のリスクを高めます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルが応答の多様性を優先すべきである。</div><p class='explanation-text'>不正解：応答の多様性はデータプライバシーに直接対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルが常に精度よりも速度を優先すべきである。</div><p class='explanation-text'>不正解：速度はプライバシー基準への準拠を確保しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ユーザー入力の保存を避け外部依存性をなくしたモデルにより、医療などの機密領域でのプライバシー基準への準拠が確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "医療チャットボットのデータプライバシー確保には、ユーザー入力を保存せず外部データストレージに依存しないモデル設計が重要。"
  },
  {
    "id": 20,
    "question": "Generative AIエンジニアが、顧客の製品に関する質問に答えるチャットボット用のプロンプトを構築する任務を担っています。チャットボットは創造性よりも事実の正確さを優先すべきです。プロンプトには何を含めるべきですか？",
    "choices": [
      {
        "text": "「クエリに答えてください」のような一般的なガイダンス。",
        "is_correct": false
      },
      {
        "text": "「応答に創造性を持たせてください」という指示。",
        "is_correct": false
      },
      {
        "text": "「顧客の質問に簡潔で事実に基づいた回答を提供してください」などの明示的な指示。",
        "is_correct": true
      },
      {
        "text": "指示なしで、モデルのデフォルト動作に頼る。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 「顧客の質問に簡潔で事実に基づいた回答を提供してください」などの明示的な指示。</div><p class='explanation-text'>正解：明確な指示はモデルが創造的または想像的なものではなく、事実に基づいた応答の生成に集中するのに役立ちます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 「クエリに答えてください」のような一般的なガイダンス。</div><p class='explanation-text'>不正解：一般的なプロンプトは具体性が不足し、一貫性のない不正確な応答につながる可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 「応答に創造性を持たせてください」という指示。</div><p class='explanation-text'>不正解：創造性を促すことは事実の正確さを損なう可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 指示なしで、モデルのデフォルト動作に頼る。</div><p class='explanation-text'>不正解：デフォルト動作は事実の正確さの要件に沿わない可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>明確で明示的なプロンプトはLLMをガイドし、アプリケーションのニーズに合わせた正確で一貫した応答を生成します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "事実の正確さを優先する製品QAチャットボットには、創造性ではなく簡潔で事実に基づく回答を明示的に指示するプロンプトが必要。"
  },
  {
    "id": 21,
    "question": "Generative AIエンジニアが、製品カタログを含むHTMLファイルからテキストを抽出する任務を担っています。このタスクに最も適したPythonパッケージはどれですか？（2つ選択）",
    "choices": [
      {
        "text": "大きなHTMLファイルのより高速で効率的なパースのためのLXML。",
        "is_correct": true
      },
      {
        "text": "テキスト抽出のためのpdfplumber。",
        "is_correct": false
      },
      {
        "text": "HTMLコンテンツのパースとテキスト抽出のためのBeautifulSoup。",
        "is_correct": true
      },
      {
        "text": "OCRタスクのためのpytesseract。",
        "is_correct": false
      },
      {
        "text": "PDFからテキストを抽出するためのPyPDF2。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 大きなHTMLファイルのより高速で効率的なパースのためのLXML。</div><p class='explanation-text'>正解：LXMLは大きなファイルのパースに最適化されており、大量のタスクに最適です。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ HTMLコンテンツのパースとテキスト抽出のためのBeautifulSoup。</div><p class='explanation-text'>正解：BeautifulSoupはHTMLパースとテキスト抽出のために設計されています。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ テキスト抽出のためのpdfplumber。</div><p class='explanation-text'>不正解：pdfplumberはHTMLパースタスクには関係ありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ OCRタスクのためのpytesseract。</div><p class='explanation-text'>不正解：pytesseractのようなOCRツールはHTMLファイルには不要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ PDFからテキストを抽出するためのPyPDF2。</div><p class='explanation-text'>不正解：PyPDF2はHTMLファイルのパースには適していません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>BeautifulSoupとLXMLを組み合わせることで、HTMLファイルから堅牢なテキスト抽出が確保され、タスク要件を満たします。</p></div>",
    "tags": "データ準備",
    "summary": "HTMLファイルからのテキスト抽出には、BeautifulSoup（HTMLパース特化）とLXML（大容量ファイルの高速パース）の組み合わせが最適。"
  },
  {
    "id": 22,
    "question": "Generative AIエンジニアが、サポートチャットボット用のフォーラム投稿のデータセットを前処理する必要があります。多くの投稿にはハイパーリンクや埋め込みメディアが含まれています。エンジニアはどの前処理ステップを取るべきですか？",
    "choices": [
      {
        "text": "ハイパーリンクやメディアを削除せずに投稿を要約する。",
        "is_correct": false
      },
      {
        "text": "ハイパーリンクやメディアを含む投稿を完全に除外する。",
        "is_correct": false
      },
      {
        "text": "ハイパーリンクと埋め込みメディアを削除し、テキストコンテンツのみを保持する。",
        "is_correct": true
      },
      {
        "text": "追加コンテキストを保持するためにハイパーリンクを残す。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ハイパーリンクと埋め込みメディアを削除し、テキストコンテンツのみを保持する。</div><p class='explanation-text'>正解：テキスト以外の要素を削除することで、データセットが意味のある言語コンテンツに集中し、チャットボットが効果的に処理できることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ハイパーリンクやメディアを削除せずに投稿を要約する。</div><p class='explanation-text'>不正解：クリーニングなしの要約はノイズを保持し、データセットの品質を低下させます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ハイパーリンクやメディアを含む投稿を完全に除外する。</div><p class='explanation-text'>不正解：そのような投稿を除外すると、無関係なメディアとともに価値あるテキストコンテンツが失われるリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 追加コンテキストを保持するためにハイパーリンクを残す。</div><p class='explanation-text'>不正解：ハイパーリンクは通常無関係であり、モデルを混乱させる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ハイパーリンクとメディアを削除することで、データセットが言語コンテンツに集中し、チャットボットのトレーニングとパフォーマンスが最適化されます。</p></div>",
    "tags": "データ準備",
    "summary": "フォーラム投稿のデータセット前処理では、投稿全体を除外するのではなく、ハイパーリンクと埋め込みメディアを削除してテキストコンテンツのみを保持する。"
  },
  {
    "id": 23,
    "question": "Generative AIエンジニアが、医療アプリケーション用のチャットボットをデプロイしています。チャットボットが出力に患者のプライベート情報を生成しないようにするにはどうすればよいですか？",
    "choices": [
      {
        "text": "入力フィルタリングと応答バリデーションを使用して、処理と出力生成中にプライベートデータをブロックする。",
        "is_correct": true
      },
      {
        "text": "詳細な出力を防ぐためにチャットボットの応答の長さを制限する。",
        "is_correct": false
      },
      {
        "text": "ユーザーに返す前にすべてのチャットボット応答を暗号化する。",
        "is_correct": false
      },
      {
        "text": "匿名化されたデータセットのみでチャットボットをトレーニングする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 入力フィルタリングと応答バリデーションを使用して、処理と出力生成中にプライベートデータをブロックする。</div><p class='explanation-text'>正解：入力のフィルタリングと出力のバリデーションにより、プライベートデータがチャットボットの応答に含まれないことが確保され、ユーザーのプライバシーが保護されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 詳細な出力を防ぐためにチャットボットの応答の長さを制限する。</div><p class='explanation-text'>不正解：応答の長さを制限してもプライベートデータの問題には特に対処できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーに返す前にすべてのチャットボット応答を暗号化する。</div><p class='explanation-text'>不正解：暗号化は送信中の応答を保護しますが、プライベートデータの包含を防ぎません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 匿名化されたデータセットのみでチャットボットをトレーニングする。</div><p class='explanation-text'>不正解：有用ですが、匿名化されたデータでのトレーニングは入力でのプライベートデータの包含に対処しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>入力フィルタリングと応答バリデーションにより、チャットボット出力からプライベート情報が除外され、プライバシー要件に準拠します。</p></div>",
    "tags": "ガバナンス",
    "summary": "医療チャットボットが患者プライベート情報を出力しないようにするには、入力フィルタリングと応答バリデーションの組み合わせが最効果的。"
  },
  {
    "id": 24,
    "question": "Generative AIエンジニアが、MLflowを使用してLLMをUnity Catalogに登録する任務を担っています。登録中に設定する必要がある情報はどれですか？",
    "choices": [
      {
        "text": "モデルをUnity Catalogに登録せずにMLflowのみを使用する。",
        "is_correct": false
      },
      {
        "text": "メタデータの設定をスキップして、デフォルト設定でモデルを登録する。",
        "is_correct": false
      },
      {
        "text": "トラッキングとガバナンスのためのモデル名、バージョン、スキーマ、タグなどのモデルメタデータ。",
        "is_correct": true
      },
      {
        "text": "スキーマやタグなしでモデル名とバージョンのみ。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ トラッキングとガバナンスのためのモデル名、バージョン、スキーマ、タグなどのモデルメタデータ。</div><p class='explanation-text'>正解：メタデータを設定することで、モデルがUnity Catalogに適切に登録され発見可能になることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルをUnity Catalogに登録せずにMLflowのみを使用する。</div><p class='explanation-text'>不正解：Unity Catalogはモデルの一元管理とガバナンスを提供します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ メタデータの設定をスキップして、デフォルト設定でモデルを登録する。</div><p class='explanation-text'>不正解：デフォルト設定はガバナンスとトラッキングに十分な情報が不足しています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ スキーマやタグなしでモデル名とバージョンのみ。</div><p class='explanation-text'>不正解：スキーマとタグはトラッキングと使いやすさに不可欠です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>スキーマやタグなどのメタデータにより、効果的なガバナンスとトラッキングのためのすべての必要な詳細とともにモデルが登録されることが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "Unity CatalogへのLLM登録時には、名前・バージョンだけでなく、スキーマ・タグを含むモデルメタデータの完全な設定が必要。"
  },
  {
    "id": 25,
    "question": "Generative AIエンジニアが、製品仕様に関するユーザークエリを処理するLangChainのシンプルなchainを作成する任務を担っています。chainは構造化された製品データベースから正確な回答を返す必要があります。必要なコンポーネントはどれですか？（2つ選択）",
    "choices": [
      {
        "text": "クエリ分析のための事前トレーニング済み分類モデル。",
        "is_correct": false
      },
      {
        "text": "ユーザークエリを短縮する要約モデル。",
        "is_correct": false
      },
      {
        "text": "製品カテゴリのルールベースフィルタリングシステム。",
        "is_correct": false
      },
      {
        "text": "ユーザークエリをフォーマットするための構造化promptテンプレート。",
        "is_correct": true
      },
      {
        "text": "関連する製品仕様を取得するデータベースretriever。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ユーザークエリをフォーマットするための構造化promptテンプレート。</div><p class='explanation-text'>正解：構造化されたpromptはchainをデータベースに基づいた正確な応答を生成するようにガイドします。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 関連する製品仕様を取得するデータベースretriever。</div><p class='explanation-text'>正解：retrieverは製品データベースから関連情報への動的アクセスを確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリ分析のための事前トレーニング済み分類モデル。</div><p class='explanation-text'>不正解：分類モデルはこのタスクには必要ありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザークエリを短縮する要約モデル。</div><p class='explanation-text'>不正解：要約は特定の製品仕様の取得には不要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 製品カテゴリのルールベースフィルタリングシステム。</div><p class='explanation-text'>不正解：ルールベースのフィルターはシステムの柔軟性を制限します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>retrieverと構造化されたpromptを組み合わせることで、製品関連クエリへの正確で精密な応答が確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "製品仕様クエリ処理のLangChain chainには、クエリをフォーマットする構造化promptテンプレートと仕様を取得するデータベースretrieverが必要。"
  },
  {
    "id": 26,
    "question": "Generative AIエンジニアが、財務ニュース記事を要約するLLMを評価する必要があります。システムは正確で簡潔かつタイムリーな要約を生成する必要があります。モデルの評価とデプロイをガイドすべきメトリクスはどれですか？（4つ選択）",
    "choices": [
      {
        "text": "要約の流暢さを評価するためのperplexity。",
        "is_correct": true
      },
      {
        "text": "コンテンツの関連性と参照要約とのオーバーラップを評価するためのROUGE。",
        "is_correct": true
      },
      {
        "text": "生成された要約の語列を比較するためのBLEU。",
        "is_correct": true
      },
      {
        "text": "計算コストを追跡するためのクエリあたりのトークン使用量。",
        "is_correct": false
      },
      {
        "text": "システムが迅速に要約を提供することを確保するためのレイテンシ。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 要約の流暢さを評価するためのperplexity。</div><p class='explanation-text'>正解：perplexityは要約の自然さと読みやすさを測定し、ユーザーエクスペリエンスを向上させます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ コンテンツの関連性と参照要約とのオーバーラップを評価するためのROUGE。</div><p class='explanation-text'>正解：ROUGEは生成された要約の関連性と品質を測定します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 生成された要約の語列を比較するためのBLEU。</div><p class='explanation-text'>正解：BLEUは精度のために生成された要約と参照出力のアライメントを評価します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ システムが迅速に要約を提供することを確保するためのレイテンシ。</div><p class='explanation-text'>正解：低レイテンシはタイムリーな提供を確保し、時間的に機密性の高い財務ニュースに不可欠です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 計算コストを追跡するためのクエリあたりのトークン使用量。</div><p class='explanation-text'>不正解：コスト関連ですが、トークン使用量は精度やタイムリーさを直接評価しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>レイテンシ、ROUGE、BLEU、perplexityの組み合わせにより、財務ニュース要約のシステムが高速・正確でユーザーフレンドリーであることが確保されます。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "財務ニュース要約LLMの評価には、perplexity（流暢さ）・ROUGE（関連性）・BLEU（語列精度）・レイテンシ（速度）の4指標が必要。"
  },
  {
    "id": 27,
    "question": "Generative AIエンジニアが、大量の財務レポートデータセットをクエリするLangChainベースのRAGアプリケーションをコーディングする任務を担っています。データセットには構造化データと非構造化データが含まれています。chainにはどのコンポーネントを含めるべきですか？（2つ選択）",
    "choices": [
      {
        "text": "事前トレーニング済みsentiment analysisモデル。",
        "is_correct": false
      },
      {
        "text": "構造化データと非構造化データの両方を処理するembeddingモデル。",
        "is_correct": true
      },
      {
        "text": "財務クエリを分類する分類モデル。",
        "is_correct": false
      },
      {
        "text": "retrieval結果を凝縮する要約モデル。",
        "is_correct": false
      },
      {
        "text": "ベクトルストアから関連データを取得するretriever。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 構造化データと非構造化データの両方を処理するembeddingモデル。</div><p class='explanation-text'>正解：embeddingモデルによりすべてのデータ型がretrievalのためにセマンティックに表現されることが確保されます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ ベクトルストアから関連データを取得するretriever。</div><p class='explanation-text'>正解：retrieverはセマンティック検索と関連データのretrievalを可能にします。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 事前トレーニング済みsentiment analysisモデル。</div><p class='explanation-text'>不正解：sentiment analysisは財務レポートのクエリには無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 財務クエリを分類する分類モデル。</div><p class='explanation-text'>不正解：分類はこのシナリオではretrievalを直接支援しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ retrieval結果を凝縮する要約モデル。</div><p class='explanation-text'>不正解：要約はデータセットから正確な情報を取得するのに必要ありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>retrieverとembeddingモデルにより、財務レポートデータセットでの正確で効率的なクエリ処理が確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "財務レポートRAGのLangChain chainには、構造化・非構造化データを処理するembeddingモデルとベクトルストアからのretrieverが必須。"
  },
  {
    "id": 28,
    "question": "Generative AIエンジニアが、eコマースプラットフォーム向けのカスタマーサポートチャットボットを開発しています。チャットボットは一般的なクエリに回答しながら、未解決の問題を人間のエージェントにエスカレーションする必要があります。エンジニアは設計で何を優先すべきですか？",
    "choices": [
      {
        "text": "未解決のクエリを人間のエージェントにエスカレーションするフォールバックメカニズムを実装する。",
        "is_correct": true
      },
      {
        "text": "過去の会話の大規模なデータセットでチャットボットをトレーニングする。",
        "is_correct": false
      },
      {
        "text": "ユーザークエリをセマンティックに理解するためにembeddingモデルに集中する。",
        "is_correct": false
      },
      {
        "text": "事前定義されたクエリ処理のためにルールベースのロジックを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 未解決のクエリを人間のエージェントにエスカレーションするフォールバックメカニズムを実装する。</div><p class='explanation-text'>正解：フォールバックメカニズムにより、チャットボットがクエリを処理できない場合のシームレスなエスカレーションが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 過去の会話の大規模なデータセットでチャットボットをトレーニングする。</div><p class='explanation-text'>不正解：トレーニングは全体的な理解を向上させますが、エスカレーションメカニズムを実装しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザークエリをセマンティックに理解するためにembeddingモデルに集中する。</div><p class='explanation-text'>不正解：embeddingはクエリ理解を支援しますが、未解決のクエリのエスカレーションには対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 事前定義されたクエリ処理のためにルールベースのロジックを使用する。</div><p class='explanation-text'>不正解：ルールベースシステムは動的な顧客クエリに対して柔軟性が不足しています。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>フォールバックメカニズムにより、未解決のクエリが適切に人間のエージェントにエスカレーションされ、ユーザーエクスペリエンスが向上します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "未解決クエリを人間にエスカレーションする設計では、データ追加やembeddingより、フォールバックメカニズムの実装を最優先すべき。"
  },
  {
    "id": 29,
    "question": "Generative AIエンジニアが、弁護士向けのAIアシスタントを設計しています。アシスタントは法的ドキュメントを取得して簡潔な要約を生成する必要があります。正確なretrievalを確保するための最も重要な考慮事項は何ですか？",
    "choices": [
      {
        "text": "ルールベースのフィルタリングシステムを構築する。",
        "is_correct": false
      },
      {
        "text": "キーワードベースの検索アルゴリズムを使用する。",
        "is_correct": false
      },
      {
        "text": "法的データセットでLLMをファインチューニングする。",
        "is_correct": false
      },
      {
        "text": "セマンティック検索のためのベクトルデータベースを実装する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ セマンティック検索のためのベクトルデータベースを実装する。</div><p class='explanation-text'>正解：ベクトルデータベースはセマンティックretrievalを可能にし、システムが正確なキーワードではなく意味に基づいてドキュメントを取得することが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ルールベースのフィルタリングシステムを構築する。</div><p class='explanation-text'>不正解：ルールベースシステムは柔軟性がなく、微妙な法的クエリには適していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ キーワードベースの検索アルゴリズムを使用する。</div><p class='explanation-text'>不正解：キーワードベースのretrievalは、コンテキスト的に関連性があっても正確なキーワードマッチがないドキュメントを見逃す可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 法的データセットでLLMをファインチューニングする。</div><p class='explanation-text'>不正解：ファインチューニングは要約を改善しますが、ドキュメントretrievalには対処しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ベクトルデータベースによるセマンティック検索により、関連する法的ドキュメントが取得され、簡潔な要約生成のための正確な入力が提供されます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "弁護士向けAIアシスタントの法的ドキュメントretrieval精度確保には、キーワード検索ではなくセマンティック検索のためのベクトルデータベースが最重要。"
  },
  {
    "id": 30,
    "question": "Generative AIエンジニアが、財務レポートを取得して主要なパフォーマンス指標を要約するpipelineを作成する必要があります。システムは何千ものレポートを効率的に処理する必要があります。このpipelineを設計するための正しい順序はどれですか？",
    "choices": [
      {
        "text": "1. retrieverをデプロイ → 2. 生のレポートをデータベースに保存 → 3. 取得されたレポートを要約 → 4. データベースをインデックス化。",
        "is_correct": false
      },
      {
        "text": "1. すべての財務レポートのembeddingを作成 → 2. embeddingをVector Searchインデックスに保存 → 3. retrieverを構築 → 4. retrieval出力のための要約モデルをデプロイ。",
        "is_correct": true
      },
      {
        "text": "1. すべてのレポートを前処理 → 2. retrieverをデプロイ → 3. 言語モデルをファインチューニング → 4. 出力を要約。",
        "is_correct": false
      },
      {
        "text": "1. 要約モデルをファインチューニング → 2. embeddingを生成 → 3. retrieverを構築 → 4. 本番環境にデプロイ。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 1. すべての財務レポートのembeddingを作成 → 2. embeddingをVector Searchインデックスに保存 → 3. retrieverを構築 → 4. retrieval出力のための要約モデルをデプロイ。</div><p class='explanation-text'>正解：この順序により、要約される前にドキュメントがretrievalのためにインデックス化され、retrievalと生成プロセスの両方が最適化されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 1. retrieverをデプロイ → 2. 生のレポートをデータベースに保存 → 3. 取得されたレポートを要約 → 4. データベースをインデックス化。</div><p class='explanation-text'>不正解：効率的なクエリのために、retrievalの前にインデックス化が行われる必要があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 1. すべてのレポートを前処理 → 2. retrieverをデプロイ → 3. 言語モデルをファインチューニング → 4. 出力を要約。</div><p class='explanation-text'>不正解：前処理とretrievalには効果的なクエリのためのインデックス化が含まれる必要があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 1. 要約モデルをファインチューニング → 2. embeddingを生成 → 3. retrieverを構築 → 4. 本番環境にデプロイ。</div><p class='explanation-text'>不正解：要約モデルはembedding生成の前ではなく、retrieval後に適用されます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>embedding生成、ベクトルインデックス化、retrieval、要約により、財務ドキュメント処理のpipelineがスケーラブルで最適化されることが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "財務レポートのretrieval・要約pipelineの正しい順序は、embedding作成→Vector Searchインデックス保存→retriever構築→要約モデルデプロイ。"
  },
  {
    "id": 31,
    "question": "Generative AIエンジニアが、ソフトウェアインストール手順を提供するチャットボット向けのプロンプトを設計する必要があります。応答にはステップバイステップの手順と一般的な問題に対する警告が含まれる必要があります。プロンプトに何を含めるべきですか？",
    "choices": [
      {
        "text": "ソフトウェアのインストールプロセスを要約する。",
        "is_correct": false
      },
      {
        "text": "一般的な警告とトラブルシューティングのヒントを含む詳細なインストール手順を提供する。",
        "is_correct": true
      },
      {
        "text": "インストールプロセスの主要なステップのみを含める。",
        "is_correct": false
      },
      {
        "text": "ソフトウェア機能の簡潔な説明を提供する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 一般的な警告とトラブルシューティングのヒントを含む詳細なインストール手順を提供する。</div><p class='explanation-text'>正解：詳細なステップと警告を明示的に要求することで、応答が包括的なものとなることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ソフトウェアのインストールプロセスを要約する。</div><p class='explanation-text'>不正解：要約は重要なステップや詳細を省略する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ インストールプロセスの主要なステップのみを含める。</div><p class='explanation-text'>不正解：主要なステップのみに集中すると、重要な警告やトラブルシューティングが省略される可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ソフトウェア機能の簡潔な説明を提供する。</div><p class='explanation-text'>不正解：機能はインストール手順とは無関係です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>明確で詳細なプロンプトにより、チャットボットが警告を含むステップバイステップの手順を提供し、ユーザーの期待に応えることが確保されます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "インストール手順チャットボットのプロンプトには、警告とトラブルシューティングを含む詳細な手順の提供を明示的に指示することが最善。"
  },
  {
    "id": 32,
    "question": "Generative AIエンジニアが、チャットボットのクエリから顧客の意図を識別して抽出するpipelineを開発する必要があります。どのembeddingモデルを選択すべきですか？",
    "choices": [
      {
        "text": "GloVe",
        "is_correct": false
      },
      {
        "text": "Sentence Transformers",
        "is_correct": true
      },
      {
        "text": "分類用BERT-base",
        "is_correct": false
      },
      {
        "text": "Word2Vec",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ Sentence Transformers</div><p class='explanation-text'>正解：Sentence Transformersはテキストのセマンティックな関係性をキャプチャするために最適化されており、ユーザーの意図識別に適しています。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ GloVe</div><p class='explanation-text'>不正解：GloVe embeddingは単語レベルのデータで事前学習されており、文レベルのタスクには適していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 分類用BERT-base</div><p class='explanation-text'>不正解：BERT-baseのような分類モデルは、セマンティック検索のためのembedding生成には最適化されていません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Word2Vec</div><p class='explanation-text'>不正解：Word2Vecは個々の単語のembeddingを作成しますが、文全体の意味を効果的にキャプチャしません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Sentence Transformersは文全体のembedding生成に優れており、チャットボットクエリでの意図検出などのタスクに最適です。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "チャットボットクエリから顧客意図を抽出するembeddingモデルには、文レベルのセマンティック関係をキャプチャするSentence Transformersが最適。"
  },
  {
    "id": 33,
    "question": "Generative AIエンジニアが、ドキュメントを取得して要約を生成するRAGアプリケーションのパフォーマンスを評価しています。retrievalステップのrecallは高いがprecisionが低い場合、これは何を示しており、どう対処すべきですか？",
    "choices": [
      {
        "text": "要約ステップが不完全な要約を生成している。",
        "is_correct": false
      },
      {
        "text": "システムは多くの関連ドキュメントを取得するが、無関係なドキュメントも含んでおり、より良いフィルタリングまたはembeddingが必要。",
        "is_correct": true
      },
      {
        "text": "システムはすべての関連ドキュメントを取得するが他を除外しており、より大きなバッチサイズが必要。",
        "is_correct": false
      },
      {
        "text": "システムのlatencyが低く、retrieval精度が低下している。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ システムは多くの関連ドキュメントを取得するが、無関係なドキュメントも含んでおり、より良いフィルタリングまたはembeddingが必要。</div><p class='explanation-text'>正解：高いrecallと低いprecisionは、無関係な結果を減らすためにretrievalを洗練させる必要があることを示しており、全体的な関連性が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約ステップが不完全な要約を生成している。</div><p class='explanation-text'>不正解：要約の品質はprecisionやrecallなどのretrieval指標とは無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ システムはすべての関連ドキュメントを取得するが他を除外しており、より大きなバッチサイズが必要。</div><p class='explanation-text'>不正解：recallは取得された関連ドキュメントの割合を測定しており、バッチサイズとは関係ありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ システムのlatencyが低く、retrieval精度が低下している。</div><p class='explanation-text'>不正解：latencyはスピードに影響しますが、precisionとrecallのバランスには影響しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>高いrecallと低いprecisionは、システムが多くの無関係なドキュメントを取得していることを意味し、より良いembeddingまたはretrievalフィルタで対処できます。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "RAGのrecall高・precision低は無関係ドキュメントの混入を示す。より良いembeddingまたはretrievalフィルタリングで改善できる。"
  },
  {
    "id": 34,
    "question": "Generative AIエンジニアが、医療機関向けのRAG（Retrieval-Augmented Generation）システムを構築する任務を担っています。システムは患者固有のドキュメントを安全に取得して主要な所見を要約する必要があります。このpipelineを構築するための重要なコンポーネントは何ですか？（4つ選択）",
    "choices": [
      {
        "text": "医療状態にタグ付けするための分類モデル。",
        "is_correct": false
      },
      {
        "text": "リアルタイムクエリのための低latency GPUインフラ。",
        "is_correct": true
      },
      {
        "text": "アクセスコントロール付きのセキュアなドキュメントretriever。",
        "is_correct": true
      },
      {
        "text": "医療データセットで学習されたembeddingモデル。",
        "is_correct": true
      },
      {
        "text": "臨床レポートに最適化された要約モデル。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ リアルタイムクエリのための低latency GPUインフラ。</div><p class='explanation-text'>正解：GPUはリアルタイムアプリケーションにおけるretrievalと要約の計算負荷を効率的に処理するために不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ アクセスコントロール付きのセキュアなドキュメントretriever。</div><p class='explanation-text'>正解：セキュアなretrieverは機密患者データへの不正アクセスを防ぎ、HIPAAなどのプライバシー規制への準拠を確保します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 医療データセットで学習されたembeddingモデル。</div><p class='explanation-text'>正解：ドメイン固有のデータで学習されたembeddingモデルにより、ドキュメントembeddingが医療用語とユーザークエリに整合することが確保されます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 臨床レポートに最適化された要約モデル。</div><p class='explanation-text'>正解：臨床テキスト向けにカスタマイズされた要約モデルにより、医療専門家向けの簡潔で関連性の高い出力が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 医療状態にタグ付けするための分類モデル。</div><p class='explanation-text'>不正解：分類は状態識別に役立つかもしれませんが、RAG pipelineの必須コンポーネントではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>医療向けRAGシステムには、精度・コンプライアンス・効率性を確保するために、ドメイン固有のembeddingモデル・セキュアなretriever・要約機能・高性能コンピューティングリソースが必要です。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "医療向けRAGには、ドメイン固有embeddingモデル・アクセスコントロール付きretriever・臨床要約モデル・低latency GPUインフラの4つが必須コンポーネント。"
  },
  {
    "id": 35,
    "question": "Generative AIエンジニアが、カスタマーサポートチャットボットのマルチターン対話用pipelineを設計しています。チャットボットは以前のターンをよく忘れてしまいます。何を実装すべきですか？",
    "choices": [
      {
        "text": "各ターンの後でコンテキストをリセットする。",
        "is_correct": false
      },
      {
        "text": "低いtemperature設定を使用する。",
        "is_correct": false
      },
      {
        "text": "以前の対話ターンのコンテキストを保持するステートトラッキング。",
        "is_correct": true
      },
      {
        "text": "tokenの上限を増やす。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 以前の対話ターンのコンテキストを保持するステートトラッキング。</div><p class='explanation-text'>正解：ステートトラッキングは会話のコンテキストを保持することで一貫性を維持するのに役立ちます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 各ターンの後でコンテキストをリセットする。</div><p class='explanation-text'>不正解：コンテキストをリセットすると、断片的で役に立たない応答になります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 低いtemperature設定を使用する。</div><p class='explanation-text'>不正解：temperatureを下げるとランダム性に影響しますが、コンテキストの保持には影響しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ tokenの上限を増やす。</div><p class='explanation-text'>不正解：tokenの上限は入力サイズに影響しますが、マルチターンのコンテキスト問題は解決しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ステートトラッキングにより、チャットボットが以前の会話ターンを記憶し、一貫性とユーザーエクスペリエンスが向上します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "マルチターン対話でチャットボットが以前のターンを忘れる問題には、ステートトラッキングで過去の対話コンテキストを保持するのが最善。"
  },
  {
    "id": 36,
    "question": "Generative AIエンジニアが、製品返品リクエストを処理するカスタマーサービスチャットボットを設計しています。チャットボットは正確で礼儀正しい応答を確保する必要があります。これを実装するためにどのアプローチを使用すべきですか？",
    "choices": [
      {
        "text": "丁寧なトーンのデータセットと返品ポリシー情報でLLMをファインチューニングする。",
        "is_correct": true
      },
      {
        "text": "礼儀規則を後処理フィルターとしてシステムに追加する。",
        "is_correct": false
      },
      {
        "text": "応答処理に汎用の事前学習済みモデルを使用する。",
        "is_correct": false
      },
      {
        "text": "ユーザー入力の処理に要約技術を頼る。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 丁寧なトーンのデータセットと返品ポリシー情報でLLMをファインチューニングする。</div><p class='explanation-text'>正解：ファインチューニングにより、トーンとドメイン固有の知識の両方がアプリケーションのニーズに整合されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 礼儀規則を後処理フィルターとしてシステムに追加する。</div><p class='explanation-text'>不正解：フィルターは問題を検出できますが、応答品質や精度を本質的に向上させません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答処理に汎用の事前学習済みモデルを使用する。</div><p class='explanation-text'>不正解：汎用モデルはドメイン知識がなく、トーン要件を処理できない場合があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザー入力の処理に要約技術を頼る。</div><p class='explanation-text'>不正解：要約は礼儀正しさを向上させず、返品リクエストの精度を確保しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ファインチューニングによりLLMのトーンと知識ベースが整合され、カスタマーサービスシナリオで礼儀正しく正確な応答が確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "返品対応チャットボットで正確かつ礼儀正しい応答を実現するには、丁寧なトーンデータと返品ポリシーによるLLMのファインチューニングが最適。"
  },
  {
    "id": 37,
    "question": "Generative AIエンジニアが、履歴書と求人票に基づいて求職者を推薦するシステムのembeddingモデルを評価しています。モデルのコンテキスト長は512tokenです。より長い履歴書に対してシステムをどのように適応させるべきですか？",
    "choices": [
      {
        "text": "512tokenの上限内で履歴書をより小さなセクションにチャンクし、各チャンクを独立して処理する。",
        "is_correct": true
      },
      {
        "text": "長い履歴書を無視し、tokenの上限内のものだけを処理する。",
        "is_correct": false
      },
      {
        "text": "より長いコンテキスト長で新しいembeddingモデルをトレーニングする。",
        "is_correct": false
      },
      {
        "text": "要約モデルを使用して履歴書の長さを短縮する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 512tokenの上限内で履歴書をより小さなセクションにチャンクし、各チャンクを独立して処理する。</div><p class='explanation-text'>正解：チャンキングによりtokenの上限を遵守しながらコンテンツの関連性を保持することが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 長い履歴書を無視し、tokenの上限内のものだけを処理する。</div><p class='explanation-text'>不正解：履歴書を無視するとシステムの有効性と公平性が低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より長いコンテキスト長で新しいembeddingモデルをトレーニングする。</div><p class='explanation-text'>不正解：新しいモデルのトレーニングはリソースを大量に消費し、常に実現可能とは限りません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約モデルを使用して履歴書の長さを短縮する。</div><p class='explanation-text'>不正解：要約は重要な詳細を省略するリスクがあります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>履歴書をより小さなセクションにチャンクすることで、tokenの上限に準拠しながら長い入力をシステムが処理できます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "512tokenのcontext length制限があるembeddingモデルで長い履歴書を処理するには、512token以内にチャンクして各チャンクを独立処理するのが最善。"
  },
  {
    "id": 38,
    "question": "Generative AIエンジニアが、チャンクされたユーザーフィードバックデータをDelta Lakeテーブルに書き込む任務を担っています。最適なデータ準備とストレージを確保する操作の順序はどれですか？",
    "choices": [
      {
        "text": "まずテキストをチャンク → チャンクをDelta Lakeに書き込む → スキーマを後で定義する。",
        "is_correct": false
      },
      {
        "text": "チャンキングをスキップしてフィードバックをDelta Lakeに直接書き込む。",
        "is_correct": false
      },
      {
        "text": "フィードバックデータのスキーマを定義 → テキストをチャンク → チャンクをDelta Lakeテーブルに書き込む。",
        "is_correct": true
      },
      {
        "text": "すべてのフィードバックデータを1つの大きなチャンクとしてDelta Lakeに書き込む。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ フィードバックデータのスキーマを定義 → テキストをチャンク → チャンクをDelta Lakeテーブルに書き込む。</div><p class='explanation-text'>正解：最初にスキーマを定義することで構造化されたデータストレージが確保され、アクセス性と一貫性が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ まずテキストをチャンク → チャンクをDelta Lakeに書き込む → スキーマを後で定義する。</div><p class='explanation-text'>不正解：適切な整理を確保するために、書き込みの前にスキーマを定義する必要があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ チャンキングをスキップしてフィードバックをDelta Lakeに直接書き込む。</div><p class='explanation-text'>不正解：チャンキングなしの非構造化データは、下流の処理効率を制限します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ すべてのフィードバックデータを1つの大きなチャンクとしてDelta Lakeに書き込む。</div><p class='explanation-text'>不正解：データを1つの大きなチャンクとして保存すると、クエリのパフォーマンスとアクセス性が低下します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>最初にスキーマを定義することでデータの一貫性が確保され、チャンキングによりDelta Lakeテーブルでの効率的なストレージとretrievalが容易になります。</p></div>",
    "tags": "データ準備",
    "summary": "Delta Lakeへのフィードバックデータ書き込みの最適順序は、スキーマ定義→テキストチャンキング→Delta Lakeテーブル書き込みの順。"
  },
  {
    "id": 39,
    "question": "Generative AIエンジニアが、生成アプリケーションで使用される医療記録を含むデータセットのライセンス要件を確認する任務を担っています。法的コンプライアンスを確保するためにどのような手順を取るべきですか？（2つ選択）",
    "choices": [
      {
        "text": "データセットが商用目的で使用できることを確認するためにライセンス条件を確認する。",
        "is_correct": true
      },
      {
        "text": "データセットがHIPAAまたは関連するデータプライバシー規制に準拠していることを確認する。",
        "is_correct": true
      },
      {
        "text": "非商用利用はライセンス確認を必要としないと仮定する。",
        "is_correct": false
      },
      {
        "text": "LLMの出力にデータの出所に関する免責事項が含まれていることを確認する。",
        "is_correct": false
      },
      {
        "text": "公開されている限りデータセットを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ データセットが商用目的で使用できることを確認するためにライセンス条件を確認する。</div><p class='explanation-text'>正解：ライセンス条件を確認することで、データセットの不正使用を防止します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ データセットがHIPAAまたは関連するデータプライバシー規制に準拠していることを確認する。</div><p class='explanation-text'>正解：HIPAAなどの規制への準拠を確保することは、機密医療データの取り扱いに不可欠です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 非商用利用はライセンス確認を必要としないと仮定する。</div><p class='explanation-text'>不正解：法的コンプライアンスは意図するユースケースに関わらず必要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ LLMの出力にデータの出所に関する免責事項が含まれていることを確認する。</div><p class='explanation-text'>不正解：免責事項はライセンスとプライバシーコンプライアンスの必要性に取って代わりません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 公開されている限りデータセットを使用する。</div><p class='explanation-text'>不正解：公開されていることは、ライセンスとプライバシーコンプライアンスを確認せずに使用が許可されることを意味しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>プライバシー規制とライセンス条件を確認することで、データセットが法的に準拠しており、アプリケーションでの使用に適していることが確保されます。</p></div>",
    "tags": "ガバナンス",
    "summary": "医療記録データセットの法的コンプライアンス確保には、商用ライセンス条件の確認とHIPAA等のプライバシー規制への準拠確認が必須の2ステップ。"
  },
  {
    "id": 40,
    "question": "Generative AIエンジニアが、RAGアプリケーションを監視するためにinference loggingを使用しています。inference loggingはどのようなインサイトを提供できますか？",
    "choices": [
      {
        "text": "tokenの使用量とモデルサイズ。",
        "is_correct": false
      },
      {
        "text": "クエリパターン、応答時間、エラー発生。",
        "is_correct": true
      },
      {
        "text": "言語出力のBLEUスコアとperplexity。",
        "is_correct": false
      },
      {
        "text": "経時的なモデルのトレーニング損失。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ クエリパターン、応答時間、エラー発生。</div><p class='explanation-text'>正解：inference loggingはクエリの挙動、latency、エラーを追跡し、アプリケーションのパフォーマンスとユーザーインタラクションについてのインサイトを提供します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ tokenの使用量とモデルサイズ。</div><p class='explanation-text'>不正解：tokenの使用量とモデルサイズはinference loggingのインサイトとは無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 言語出力のBLEUスコアとperplexity。</div><p class='explanation-text'>不正解：BLEUとperplexityは言語品質を評価しますが、inference loggingには関係ありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 経時的なモデルのトレーニング損失。</div><p class='explanation-text'>不正解：トレーニング損失はモデル開発の指標であり、デプロイメント監視ではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>inference loggingはクエリパターン、latency、エラーに関するアクション可能なデータを提供し、アプリケーションパフォーマンスの最適化に役立ちます。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "RAGアプリのinference loggingが提供するインサイトは、tokenやBLEUではなく、クエリパターン・応答時間・エラー発生などの運用データ。"
  },
  {
    "id": 41,
    "question": "LLMが生成した要約の精度を評価するのに最も適した指標はどれですか？",
    "choices": [
      {
        "text": "Perplexity",
        "is_correct": false
      },
      {
        "text": "F1スコア",
        "is_correct": false
      },
      {
        "text": "ROUGEスコア",
        "is_correct": true
      },
      {
        "text": "BLEUスコア",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ROUGEスコア</div><p class='explanation-text'>正解：ROUGEは生成された要約と参照要約を比較し、重複と関連性を測定します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Perplexity</div><p class='explanation-text'>不正解：perplexityは言語モデルの確信度を測定しますが、要約の品質は測定しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ F1スコア</div><p class='explanation-text'>不正解：F1は分類タスクで使用され、要約には直接適用できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ BLEUスコア</div><p class='explanation-text'>不正解：BLEUは主に翻訳タスクに使用され、要約には適していません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ROUGEスコアは要約タスクの評価に特化して設計されており、要約精度を評価するための最善の指標です。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "LLMが生成した要約の精度評価には、参照要約との重複・関連性を測定するROUGEスコアが最適。BLEUは翻訳向け、perplexityは流暢さ向け。"
  },
  {
    "id": 42,
    "question": "Generative AIエンジニアが、医療チャットボット向けに一次および二次医療文書を含むデータセットを扱っています。事実の正確性を確保するためにどの種類の文書を優先すべきですか？",
    "choices": [
      {
        "text": "医学教科書の要約。",
        "is_correct": false
      },
      {
        "text": "健康関連のソーシャルメディア投稿。",
        "is_correct": false
      },
      {
        "text": "患者のブログとフォーラムの議論。",
        "is_correct": false
      },
      {
        "text": "査読済みの医学研究論文と政府の健康ガイドライン。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 査読済みの医学研究論文と政府の健康ガイドライン。</div><p class='explanation-text'>正解：査読済みの研究論文と政府ガイドラインは信頼性が高く、正確で信頼できるチャットボットの応答を確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 医学教科書の要約。</div><p class='explanation-text'>不正解：要約は二次ソースであり、最新または包括的な情報を提供しない可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 健康関連のソーシャルメディア投稿。</div><p class='explanation-text'>不正解：ソーシャルメディアのコンテンツは主観的であり、権威ある検証が不足しています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 患者のブログとフォーラムの議論。</div><p class='explanation-text'>不正解：ブログとフォーラムには医療アプリケーションに不適切な未検証情報や個人的な体験談が多く含まれています。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>査読済み論文や政府ガイドラインなどの信頼できるソースを使用することで、信頼性が高く事実に基づいた医療チャットボットの応答が確保されます。</p></div>",
    "tags": "データ準備",
    "summary": "医療チャットボットの事実精度確保には、ソーシャルメディアや患者ブログではなく、査読済み医学研究論文と政府の健康ガイドラインを優先すべき。"
  },
  {
    "id": 43,
    "question": "Generative AIエンジニアが、RAGアプリケーションエンドポイントをデプロイするステップの順序を決める必要があります。正しい順序はどれですか？（2つ選択）",
    "choices": [
      {
        "text": "embeddingやベクトル検索なしにLLMだけに頼る。",
        "is_correct": false
      },
      {
        "text": "retrieverの代わりにハードコードされた応答を使用する。",
        "is_correct": false
      },
      {
        "text": "まずエンドポイントをデプロイし、後でembeddingを設定する。",
        "is_correct": false
      },
      {
        "text": "embeddingモデルをトレーニングし、ドキュメントを前処理し、ベクトルストアを作成してからエンドポイントをデプロイする。",
        "is_correct": true
      },
      {
        "text": "エンドポイントをデプロイする前にドキュメントを前処理してベクトルストアを作成する。",
        "is_correct": true
      },
      {
        "text": "前処理をスキップしてドキュメントを直接エンドポイントにデプロイする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ embeddingモデルをトレーニングし、ドキュメントを前処理し、ベクトルストアを作成してからエンドポイントをデプロイする。</div><p class='explanation-text'>正解：この順序により、データが準備・保存され、エンドポイントを通じて効果的に提供されることが確保されます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ エンドポイントをデプロイする前にドキュメントを前処理してベクトルストアを作成する。</div><p class='explanation-text'>正解：前処理とベクトルストア作成により、エンドポイントデプロイのためのクリーンで取得可能なデータが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embeddingやベクトル検索なしにLLMだけに頼る。</div><p class='explanation-text'>不正解：embeddingとベクトル検索はRAGアプリケーションに不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ retrieverの代わりにハードコードされた応答を使用する。</div><p class='explanation-text'>不正解：ハードコードされた応答は動的クエリに対して柔軟性がありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ まずエンドポイントをデプロイし、後でembeddingを設定する。</div><p class='explanation-text'>不正解：embeddingとベクトルストアはデプロイ前に準備する必要があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 前処理をスキップしてドキュメントを直接エンドポイントにデプロイする。</div><p class='explanation-text'>不正解：前処理はノイズを除去し、retrieval用のクリーンなデータを確保します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>前処理、embedding、ベクトルストア作成は、効果的なRAGアプリケーションエンドポイントをデプロイするための必須ステップです。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "RAGアプリエンドポイントのデプロイ順序は、embeddingモデル準備・ドキュメント前処理・ベクトルストア作成を完了してからエンドポイントをデプロイする。"
  },
  {
    "id": 44,
    "question": "Generative AIエンジニアが、財務レポートを要約する際にLLMからの一貫した応答を確保するプロンプトを作成する必要があります。最も効果的なプロンプト戦略は何ですか？",
    "choices": [
      {
        "text": "プロンプトに明確な指示と例を提供する（例：「主要な財務数値とトレンドを明確かつ簡潔に要約してください。」）。",
        "is_correct": true
      },
      {
        "text": "矛盾する指示を持つ複数のプロンプトを使用する。",
        "is_correct": false
      },
      {
        "text": "モデルがガイダンスなしにタスクを解釈できるようにする。",
        "is_correct": false
      },
      {
        "text": "「レポートを要約してください。」のような短くて漠然としたプロンプトを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ プロンプトに明確な指示と例を提供する（例：「主要な財務数値とトレンドを明確かつ簡潔に要約してください。」）。</div><p class='explanation-text'>正解：具体的な指示と例を含めることでモデルが誘導され、一貫した高品質な応答が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 矛盾する指示を持つ複数のプロンプトを使用する。</div><p class='explanation-text'>不正解：矛盾する指示はモデルを混乱させ、応答品質を低下させます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルがガイダンスなしにタスクを解釈できるようにする。</div><p class='explanation-text'>不正解：ガイダンスなしでは、LLMは不完全または無関係な要約を生成する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 「レポートを要約してください。」のような短くて漠然としたプロンプトを使用する。</div><p class='explanation-text'>不正解：漠然としたプロンプトは明確さが不足しており、一貫性のないまたは無関係な出力につながる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>明示的な指示と例を含む構造化されたプロンプトにより、応答の一貫性が向上し、出力が期待に沿ったものとなります。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "財務レポート要約LLMの一貫した応答確保には、具体的な指示と例を含む明確な構造化プロンプトが最も効果的な戦略。"
  },
  {
    "id": 45,
    "question": "Generative AIエンジニアが、ユーザー提供コンテンツを処理する生成アプリケーションを構築しています。アプリケーションはインジェクション攻撃などの悪意あるユーザー入力から保護する必要があります。どのガードレール技術を使用すべきですか？",
    "choices": [
      {
        "text": "要約モデルを使用してユーザー入力を前処理する。",
        "is_correct": false
      },
      {
        "text": "特殊文字を削除しデータ形式を検証することでユーザー入力をサニタイズする。",
        "is_correct": true
      },
      {
        "text": "疑わしいパターンについてユーザー入力をログに記録して監視する。",
        "is_correct": false
      },
      {
        "text": "柔軟性を促進するために制限のないユーザー入力を許可する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 特殊文字を削除しデータ形式を検証することでユーザー入力をサニタイズする。</div><p class='explanation-text'>正解：入力をサニタイズすることで、SQLインジェクションなどの悪意あるペイロードがアプリケーションによって処理されるのを防ぎます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約モデルを使用してユーザー入力を前処理する。</div><p class='explanation-text'>不正解：要約はインジェクションリスクを軽減する信頼できる方法ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 疑わしいパターンについてユーザー入力をログに記録して監視する。</div><p class='explanation-text'>不正解：監視だけでは悪意ある入力が実行されるのを防ぎません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 柔軟性を促進するために制限のないユーザー入力を許可する。</div><p class='explanation-text'>不正解：制限のない入力はアプリケーションをセキュリティの脆弱性にさらします。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>入力サニタイズにより有害なペイロードが効果的に無力化され、悪意ある入力に対するアプリケーションのセキュリティが確保されます。</p></div>",
    "tags": "ガバナンス",
    "summary": "インジェクション攻撃から生成アプリを保護するガードレールには、特殊文字の削除とデータ形式検証による入力サニタイズが最も効果的。"
  }
];
