window.questionsDataDbxg5 = [
  {
    "id": 1,
    "question": "Generative AIエンジニアが、関連ドキュメントを取得してユーザークエリに回答するpipelineをデプロイするよう依頼されています。retrieval精度を向上させるために重要なコンポーネントはどれですか？",
    "choices": [
      {
        "text": "事前学習済みの応答生成テンプレート。",
        "is_correct": false
      },
      {
        "text": "ドメイン固有のデータで学習された高品質なembeddingモデル。",
        "is_correct": true
      },
      {
        "text": "より短いドキュメントチャンクの長さ。",
        "is_correct": false
      },
      {
        "text": "ファインチューニングされた分類モデル。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ドメイン固有のデータで学習された高品質なembeddingモデル。</div><p class='explanation-text'>正解：ドメイン固有のembeddingモデルは、embeddingをユーザークエリに整合させることでドキュメントretrievalの精度を向上させます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 事前学習済みの応答生成テンプレート。</div><p class='explanation-text'>不正解：応答生成テンプレートはretrieval精度に直接影響しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より短いドキュメントチャンクの長さ。</div><p class='explanation-text'>不正解：チャンク長は有益ですが、embedding品質よりも二次的な要素です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ファインチューニングされた分類モデル。</div><p class='explanation-text'>不正解：分類モデルはこのコンテキストではretrieval精度を向上させません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ドメイン固有のembeddingモデルを使用することで、embeddingがドキュメントとクエリの両方に整合し、retrieval精度が向上します。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "retrieval精度向上に最も重要なコンポーネントは、ドメイン固有データで学習された高品質なembeddingモデル。チャンク長より品質が優先。"
  },
  {
    "id": 2,
    "question": "Generative AIエンジニアが、英語のみのクエリに対応するRAGシステムのために多言語ドキュメントを前処理する必要があります。一貫性を確保する前処理ステップは何ですか？",
    "choices": [
      {
        "text": "言語を識別せずにすべてのドキュメントを処理する。",
        "is_correct": false
      },
      {
        "text": "潜在的な多言語機能を提供するためにすべてのドキュメントを保持する。",
        "is_correct": false
      },
      {
        "text": "さらなる処理の前にすべての非英語コンテンツを英語に翻訳する。",
        "is_correct": false
      },
      {
        "text": "言語検出ツールを使用して非英語ドキュメントを検出してフィルタリングする。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 言語検出ツールを使用して非英語ドキュメントを検出してフィルタリングする。</div><p class='explanation-text'>正解：フィルタリングにより英語ドキュメントのみが残り、データセットをシステムの要件に整合させます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 言語を識別せずにすべてのドキュメントを処理する。</div><p class='explanation-text'>不正解：言語の一貫性を無視すると、無関係または不正確な出力のリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 潜在的な多言語機能を提供するためにすべてのドキュメントを保持する。</div><p class='explanation-text'>不正解：非英語ドキュメントは英語のみの応答の品質を妨げる可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ さらなる処理の前にすべての非英語コンテンツを英語に翻訳する。</div><p class='explanation-text'>不正解：翻訳は追加のオーバーヘッドと潜在的な不正確さをもたらします。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>非英語ドキュメントをフィルタリングすることで、データセットがシステムの言語要件に整合し、無関係な応答を避けることができます。</p></div>",
    "tags": "データ準備",
    "summary": "英語専用RAGシステムの多言語ドキュメント前処理では、翻訳より言語検出ツールで非英語ドキュメントをフィルタリングするのが最善。"
  },
  {
    "id": 3,
    "question": "Generative AIエンジニアが、10,000語以上の政府レポートを要約するためのチャンキング戦略を選択する必要があります。最善のアプローチは何ですか？",
    "choices": [
      {
        "text": "すべてのチャンクを200tokenオーバーラップさせる。",
        "is_correct": false
      },
      {
        "text": "ドキュメント全体を1つのチャンクとして処理する。",
        "is_correct": false
      },
      {
        "text": "「イントロダクション」や「調査結果」などのセクションに基づいてチャンクし、各チャンクがtokenの上限内に収まるようにする。",
        "is_correct": true
      },
      {
        "text": "ドキュメントを1,000tokenの均等サイズのチャンクに分割する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 「イントロダクション」や「調査結果」などのセクションに基づいてチャンクし、各チャンクがtokenの上限内に収まるようにする。</div><p class='explanation-text'>正解：セクションベースのチャンキングにより、ドキュメント構造に整合した一貫性と関連性が維持されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ すべてのチャンクを200tokenオーバーラップさせる。</div><p class='explanation-text'>不正解：オーバーラップはコンテキストを改善しますが、論理的なドキュメントセクションとは整合しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ドキュメント全体を1つのチャンクとして処理する。</div><p class='explanation-text'>不正解：長いドキュメントを1つのチャンクとして処理するほとんどのモデルのtokenの上限を超えます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ドキュメントを1,000tokenの均等サイズのチャンクに分割する。</div><p class='explanation-text'>不正解：任意の分割は論理的なセクションを壊すリスクがあり、要約品質が低下します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>セクションごとのチャンキングにより論理的な流れが保持され、モデルがtoken制約内でコンテンツを効果的に処理できます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "10,000語超の政府レポート要約には、均等分割よりもセクション(イントロ・調査結果等)に基づいてtokenの上限内でチャンクするのが最善。"
  },
  {
    "id": 4,
    "question": "Generative AIエンジニアが、採用推薦を提供するRAGアプリケーションのバイアスのあるデータを処理する必要があります。データセットのバイアスに対処するための最善のアプローチは何ですか？",
    "choices": [
      {
        "text": "データセットの潜在的なバイアスを分析し、公平性を確保するためにバイアスのあるエントリを削除または再重み付けする。",
        "is_correct": true
      },
      {
        "text": "事前学習済みモデルのみを使用し、データセットの変更を避ける。",
        "is_correct": false
      },
      {
        "text": "モデルはユーザークエリに基づいて出力を生成するため、バイアスを無視する。",
        "is_correct": false
      },
      {
        "text": "潜在的にバイアスのある情報を除外するためにデータセットのサイズを削減する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ データセットの潜在的なバイアスを分析し、公平性を確保するためにバイアスのあるエントリを削除または再重み付けする。</div><p class='explanation-text'>正解：前処理中にバイアスを識別して対処することで、モデルが公平で偏りのない出力を提供することが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 事前学習済みモデルのみを使用し、データセットの変更を避ける。</div><p class='explanation-text'>不正解：事前学習済みモデルでも元のデータセットに存在するバイアスを反映する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルはユーザークエリに基づいて出力を生成するため、バイアスを無視する。</div><p class='explanation-text'>不正解：バイアスを無視するとシステムの不公平さを持続させるリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 潜在的にバイアスのある情報を除外するためにデータセットのサイズを削減する。</div><p class='explanation-text'>不正解：単にデータセットのサイズを削減してもバイアスの除去は保証されません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>データセットのバイアスを分析して対処することで、アプリケーションの公平性が確保され、差別を持続させるリスクが軽減されます。</p></div>",
    "tags": "ガバナンス",
    "summary": "採用推薦RAGのバイアス対処には、データセットサイズ削減ではなく、バイアスエントリの分析・削除または再重み付けによる公平性確保が最善。"
  },
  {
    "id": 5,
    "question": "Generative AIエンジニアが、retrieval型アプリケーションのためにスキャンされたPDFとして保存された請求書を処理しています。テキストには請求書ID、金額、日付などの数値の詳細が含まれています。このコンテンツを抽出するのに最適なPythonパッケージはどれですか？（2つ選択）",
    "choices": [
      {
        "text": "PyPDF2",
        "is_correct": false
      },
      {
        "text": "PyTesseract",
        "is_correct": true
      },
      {
        "text": "Textract",
        "is_correct": true
      },
      {
        "text": "Tika",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ PyTesseract</div><p class='explanation-text'>正解：PyTesseractはOCRを使用してスキャンされたPDFからテキストを抽出し、数値の詳細や構造化データを含みます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ Textract</div><p class='explanation-text'>正解：TextractはスキャンされたPDF向けのOCRをサポートし、数値データの効果的な抽出も可能です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ PyPDF2</div><p class='explanation-text'>不正解：PyPDF2はテキストベースのPDFのみで動作し、スキャンされた画像ベースのPDFでは機能しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Tika</div><p class='explanation-text'>不正解：Tikaはテキスト抽出をサポートしますが、PyTesseractやTextractの高度なOCR機能がありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>PyTesseractとTextractはスキャンされたPDFから数値とテキストの詳細を抽出するのに最適で、正確なOCRベースのテキストretrievalを提供します。</p></div>",
    "tags": "データ準備",
    "summary": "スキャン済みPDF請求書から数値データを抽出するには、テキストベースPDF専用のPyPDF2ではなく、OCR対応のPyTesseractとTextractが最適。"
  },
  {
    "id": 6,
    "question": "Generative AIエンジニアが、研究論文を要約するための新しいLLMを評価する必要があります。評価では精度と情報量を優先する必要があります。最も適切な指標とツールは何ですか？（2つ選択）",
    "choices": [
      {
        "text": "モデルの応答速度を測定するlatency。",
        "is_correct": false
      },
      {
        "text": "生成された要約と参照要約間のコンテンツ重複を測定するROUGE。",
        "is_correct": true
      },
      {
        "text": "関連性と情報量のための人間による定性的評価。",
        "is_correct": true
      },
      {
        "text": "計算コストを評価するtokenの使用量。",
        "is_correct": false
      },
      {
        "text": "要約の流暢さを評価するperplexity。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 生成された要約と参照要約間のコンテンツ重複を測定するROUGE。</div><p class='explanation-text'>正解：ROUGEはコンテンツ重複の品質を効果的に評価します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 関連性と情報量のための人間による定性的評価。</div><p class='explanation-text'>正解：人間による評価は要約品質について微妙なインサイトを提供します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルの応答速度を測定するlatency。</div><p class='explanation-text'>不正解：latencyはパフォーマンスを測定しますが、要約品質は測定しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 計算コストを評価するtokenの使用量。</div><p class='explanation-text'>不正解：tokenの使用量は精度や情報量とは無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約の流暢さを評価するperplexity。</div><p class='explanation-text'>不正解：perplexityは流暢さを評価しますが、情報量は測定しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ROUGEと人間による定性的評価を組み合わせることで、要約品質の定量的・定性的両面をキャプチャする評価が確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "研究論文要約LLMの精度・情報量評価には、コンテンツ重複を測定するROUGEと人間による定性的評価の組み合わせが最適。"
  },
  {
    "id": 7,
    "question": "Generative AIエンジニアが、FAQretrievalのためのembeddingモデルを選択する必要があります。システムは高速なルックアップと高い精度をサポートする必要があります。最適なパフォーマンスを確保する戦略は何ですか？（2つ選択）",
    "choices": [
      {
        "text": "セマンティック類似度ベンチマークで高い精度のembeddingモデルを選択する。",
        "is_correct": true
      },
      {
        "text": "コストを節約するために小さなembeddingモデルを使用する。",
        "is_correct": false
      },
      {
        "text": "速度よりtokenの長さを優先する。",
        "is_correct": false
      },
      {
        "text": "より高速なルックアップのために近似最近傍（ANN）検索を使用する。",
        "is_correct": true
      },
      {
        "text": "embeddingの代わりに応答生成に生成モデルを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ セマンティック類似度ベンチマークで高い精度のembeddingモデルを選択する。</div><p class='explanation-text'>正解：高い類似度精度により、FAQとクエリが効果的に整合されます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ より高速なルックアップのために近似最近傍（ANN）検索を使用する。</div><p class='explanation-text'>正解：ANN検索は速度と精度のバランスをとり、大規模なデータセットに最適です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コストを節約するために小さなembeddingモデルを使用する。</div><p class='explanation-text'>不正解：小さなモデルは精度を損なう可能性があり、全体的なパフォーマンスが低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 速度よりtokenの長さを優先する。</div><p class='explanation-text'>不正解：tokenの長さは短いFAQには無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embeddingの代わりに応答生成に生成モデルを使用する。</div><p class='explanation-text'>不正解：生成モデルはretrieval精度を直接最適化しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>高いセマンティック類似度精度とANN検索を組み合わせることで、FAQシステムで高速かつ正確なretrievalが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "FAQretrievalの高速・高精度を実現するには、セマンティック類似度ベンチマーク高精度のembeddingモデルとANN（近似最近傍）検索の組み合わせが最善。"
  },
  {
    "id": 8,
    "question": "Generative AIエンジニアが、ドキュメントretrievalにベクトルストアを使用するLLMアプリケーションをデプロイする任務を担っています。アプリケーションは低latencyとスケーラビリティを確保する必要があります。どのインフラを優先すべきですか？",
    "choices": [
      {
        "text": "ベクトルストアに高性能なデータベースを備えたスケーラブルなクラウドインフラにアプリケーションをデプロイする。",
        "is_correct": true
      },
      {
        "text": "コストを最小化するためにベクトルデータにローカルストレージを使用する。",
        "is_correct": false
      },
      {
        "text": "複雑さを最小化するためにシングルノードサーバーにアプリケーションをデプロイする。",
        "is_correct": false
      },
      {
        "text": "ベクトルストアの使用をスキップし、直接LLMクエリ処理に頼る。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ベクトルストアに高性能なデータベースを備えたスケーラブルなクラウドインフラにアプリケーションをデプロイする。</div><p class='explanation-text'>正解：クラウドのスケーラビリティにより増大するワークロードを処理でき、高性能データベースによりベクトルクエリのlatencyが削減されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コストを最小化するためにベクトルデータにローカルストレージを使用する。</div><p class='explanation-text'>不正解：ローカルストレージはコストを削減できますが、本番システムのスケーラビリティとlatencyを損なわせます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 複雑さを最小化するためにシングルノードサーバーにアプリケーションをデプロイする。</div><p class='explanation-text'>不正解：シングルノードサーバーは高需要アプリケーションのスケーラビリティが不足しています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ベクトルストアの使用をスキップし、直接LLMクエリ処理に頼る。</div><p class='explanation-text'>不正解：ベクトルストアなしでは、retrieval品質とlatencyが低下します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>高性能なベクトルストアを備えたスケーラブルなクラウドインフラにより、本番グレードシステムの低latencyと効率的なスケーリングが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "低latencyとスケーラビリティを要するLLMアプリには、ローカルストレージやシングルノードではなく、高性能ベクトルストアを備えたスケーラブルなクラウドインフラが最適。"
  },
  {
    "id": 9,
    "question": "Generative AIエンジニアが、カスタマーサービス向けの会話型AIを設計しています。AIはクエリを処理し、会話のコンテキストに基づいてアクションを推薦する必要があります。プロンプト設計で何を優先すべきですか？",
    "choices": [
      {
        "text": "創造性を促進するために例を避ける。",
        "is_correct": false
      },
      {
        "text": "会話のトーンのみを指定する。",
        "is_correct": false
      },
      {
        "text": "簡潔な応答を生成するために簡潔さに集中する。",
        "is_correct": false
      },
      {
        "text": "明確なコンテキストと望ましい出力を含める。例：「ユーザーは遅延配送について質問しています。問題を解決するための次のステップを推薦してください。」",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 明確なコンテキストと望ましい出力を含める。例：「ユーザーは遅延配送について質問しています。問題を解決するための次のステップを推薦してください。」</div><p class='explanation-text'>正解：コンテキストを提供し出力を指定することで、会話に基づいた関連性のあるアクション可能な応答が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 創造性を促進するために例を避ける。</div><p class='explanation-text'>不正解：例はAIがタスクを理解して一貫した応答を生成するのに役立ちます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 会話のトーンのみを指定する。</div><p class='explanation-text'>不正解：トーンはユーザーエクスペリエンスを向上させますが、必要な出力についてAIを誘導しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 簡潔な応答を生成するために簡潔さに集中する。</div><p class='explanation-text'>不正解：簡潔さだけでは関連性やユーザーニーズとの整合が確保されません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>明確なコンテキストと期待される出力を提供することで、カスタマーサービスインタラクションにおけるモデルの正確でユーザー関連の推薦生成が誘導されます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "会話型AIのプロンプト設計では、トーンや簡潔さではなく、明確なコンテキストと望ましい出力を含めることで関連性の高い応答が得られる。"
  },
  {
    "id": 10,
    "question": "Generative AIエンジニアが、サポートチームのために顧客クエリを要約するチャットボットに取り組んでいます。チャットボットは要約で機密データを漏洩することがあります。最も効果的なガードレール技術は何ですか？",
    "choices": [
      {
        "text": "機密データの漏洩を避けるためにチャットボットのトレーニングに頼る。",
        "is_correct": false
      },
      {
        "text": "要約のばらつきを制限するためにモデルのtemperatureを下げる。",
        "is_correct": false
      },
      {
        "text": "生成された出力から機密情報を検出して削除する後処理フィルターを使用する。",
        "is_correct": true
      },
      {
        "text": "共有前に機密データについてすべての要約を手動でレビューする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 生成された出力から機密情報を検出して削除する後処理フィルターを使用する。</div><p class='explanation-text'>正解：後処理により、共有される前に要約から機密データが削除されることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 機密データの漏洩を避けるためにチャットボットのトレーニングに頼る。</div><p class='explanation-text'>不正解：トレーニングだけでは機密情報の除外を保証できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約のばらつきを制限するためにモデルのtemperatureを下げる。</div><p class='explanation-text'>不正解：temperatureの調整は機密データ漏洩のリスクに対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 共有前に機密データについてすべての要約を手動でレビューする。</div><p class='explanation-text'>不正解：手動レビューは大規模なアプリケーションには実用的ではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>後処理フィルターにより機密データが識別され要約から削除され、ユーザーの信頼とコンプライアンスが維持されます。</p></div>",
    "tags": "ガバナンス",
    "summary": "要約チャットボットの機密データ漏洩防止には、temperatureや手動レビューではなく、生成後に機密情報を検出・削除する後処理フィルターが最も効果的。"
  },
  {
    "id": 11,
    "question": "Generative AIエンジニアが、カスタマーサポートチャットボットで機密ユーザー情報をマスクする任務を担っています。これを達成するための最も効果的なアプローチは何ですか？",
    "choices": [
      {
        "text": "処理前にユーザー入力を手動でフィルタリングする。",
        "is_correct": false
      },
      {
        "text": "機密情報を除外するために要約モデルを使用する。",
        "is_correct": false
      },
      {
        "text": "機密出力の生成を避けるためにLLMのトレーニングに頼る。",
        "is_correct": false
      },
      {
        "text": "電話番号やクレジットカード情報などの機密データを識別してマスクするためにregexベースのパターンを実装する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 電話番号やクレジットカード情報などの機密データを識別してマスクするためにregexベースのパターンを実装する。</div><p class='explanation-text'>正解：regexパターンにより機密情報を効率的に検出してマスクし、データプライバシーを向上させます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 処理前にユーザー入力を手動でフィルタリングする。</div><p class='explanation-text'>不正解：手動フィルタリングは大規模なアプリケーションには実用的ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 機密情報を除外するために要約モデルを使用する。</div><p class='explanation-text'>不正解：要約モデルはすべての機密情報を確実に識別できない場合があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 機密出力の生成を避けるためにLLMのトレーニングに頼る。</div><p class='explanation-text'>不正解：LLMは明示的な前処理なしには機密データの除外を保証できません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>regexベースのマスキングにより機密データが識別され安全にマスクされ、プライバシー基準への準拠が維持されます。</p></div>",
    "tags": "ガバナンス",
    "summary": "チャットボットでの機密ユーザー情報マスクには、手動フィルタや要約モデルではなく、電話番号・クレジットカード等を検出するregexベースのパターンが最も効果的。"
  },
  {
    "id": 12,
    "question": "Generative AIエンジニアが、法的ドキュメントのエンティティ認識を実行するためにマーケットプレイスからモデルを選択する任務を担っています。モデルのメタデータで何を優先すべきですか？（2つ選択）",
    "choices": [
      {
        "text": "多言語機能。",
        "is_correct": false
      },
      {
        "text": "エンティティ認識ベンチマークでのパフォーマンス。",
        "is_correct": true
      },
      {
        "text": "応答生成速度。",
        "is_correct": false
      },
      {
        "text": "トレーニングパラメータ数。",
        "is_correct": false
      },
      {
        "text": "法的データセットのファインチューニング機能。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ エンティティ認識ベンチマークでのパフォーマンス。</div><p class='explanation-text'>正解：ベンチマークでの高いパフォーマンスにより、モデルが法的ドキュメントのエンティティを正確に識別できることが確保されます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 法的データセットのファインチューニング機能。</div><p class='explanation-text'>正解：ファインチューニングにより、モデルが法的ドキュメント処理の特定の要件に整合されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 多言語機能。</div><p class='explanation-text'>不正解：多言語機能は英語の法的ドキュメントのような単言語タスクには不要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答生成速度。</div><p class='explanation-text'>不正解：応答速度はエンティティ認識タスクでは精度と比べてあまり重要ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トレーニングパラメータ数。</div><p class='explanation-text'>不正解：パラメータ数はタスク固有のパフォーマンスよりも二次的です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>エンティティ認識ベンチマークとファインチューニング機能に集中することで、モデルが法的ドキュメントタスクに効果的であることが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "法的ドキュメントのエンティティ認識モデル選択では、多言語機能やパラメータ数より、ベンチマーク精度と法的データセットのファインチューニング機能を優先。"
  },
  {
    "id": 13,
    "question": "Generative AIエンジニアが、学生向けに長い学術論文を簡潔な要約に変換するシステムを設計する任務を担っています。システムは主要な論点と結論を強調する必要があります。最も効果的なLLM設定は何ですか？",
    "choices": [
      {
        "text": "ファインチューニングなしの汎用LLMを使用する。",
        "is_correct": false
      },
      {
        "text": "学術テキストで要約LLMをファインチューニングして簡潔な要約を生成する。",
        "is_correct": true
      },
      {
        "text": "簡潔さを確保するためにモデルの応答長を短縮する。",
        "is_correct": false
      },
      {
        "text": "より多様な要約を生成するためにモデルのtemperatureを上げる。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 学術テキストで要約LLMをファインチューニングして簡潔な要約を生成する。</div><p class='explanation-text'>正解：ドメイン固有のデータでのファインチューニングにより、学術コンテンツに合わせた正確で関連性の高い要約が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ファインチューニングなしの汎用LLMを使用する。</div><p class='explanation-text'>不正解：汎用モデルはドメイン固有のインサイトが欠けた要約を生成する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 簡潔さを確保するためにモデルの応答長を短縮する。</div><p class='explanation-text'>不正解：応答長の短縮は意味のある要約を保証しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より多様な要約を生成するためにモデルのtemperatureを上げる。</div><p class='explanation-text'>不正解：temperatureを上げるとランダム性が生まれ、要約精度が低下する可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>要約LLMのファインチューニングにより、生成された要約が主要な論点と結論を正確にキャプチャすることが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "学術論文の主要論点・結論を強調する要約システムには、汎用LLMよりも学術テキストでファインチューニングされた要約LLMが最も効果的。"
  },
  {
    "id": 14,
    "question": "Generative AIエンジニアが、法的ドキュメントで学習されたRAGシステムのパフォーマンスを評価する必要があります。どの指標とツールを使用すべきですか？（2つ選択）",
    "choices": [
      {
        "text": "ランキング品質を測定するNDCG（Normalized Discounted Cumulative Gain）。",
        "is_correct": true
      },
      {
        "text": "クエリ処理速度を測定するlatency。",
        "is_correct": false
      },
      {
        "text": "出力テキスト類似度を評価するBLEUスコア。",
        "is_correct": false
      },
      {
        "text": "関連ドキュメントがどれだけ取得されるかを測定するrecall。",
        "is_correct": true
      },
      {
        "text": "計算コストを追跡するtokenの使用量。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ランキング品質を測定するNDCG（Normalized Discounted Cumulative Gain）。</div><p class='explanation-text'>正解：NDCGは取得されたドキュメントの関連性とランキング順序を評価します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 関連ドキュメントがどれだけ取得されるかを測定するrecall。</div><p class='explanation-text'>正解：recallはシステムがすべての関連ドキュメントを取得する能力を評価するために不可欠です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリ処理速度を測定するlatency。</div><p class='explanation-text'>不正解：latencyは応答時間を測定しますが、retrieval関連性は測定しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 出力テキスト類似度を評価するBLEUスコア。</div><p class='explanation-text'>不正解：BLEUはテキスト生成タスクに使用され、ドキュメントretrievalには使用しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 計算コストを追跡するtokenの使用量。</div><p class='explanation-text'>不正解：tokenの使用量はretrieval性能を直接測定しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>recallとNDCGを組み合わせることで、システムが関連ドキュメントを効率的に取得し正確にランク付けすることが確保されます。</p></div>",
    "tags": "データ準備",
    "summary": "法的ドキュメントRAGシステムの評価には、BLEUやlatencyではなく、ランキング品質を測定するNDCGと関連ドキュメントの取得率を測定するrecallが適切。"
  },
  {
    "id": 15,
    "question": "Generative AIエンジニアが、多言語カスタマーサポートシステムの本番LLMアプリケーションを監視する任務を担っています。どの重要な指標を追跡すべきですか？（2つ選択）",
    "choices": [
      {
        "text": "各言語のファインチューニング精度。",
        "is_correct": false
      },
      {
        "text": "入出力の長さの比率。",
        "is_correct": false
      },
      {
        "text": "多言語応答のBLEUスコア。",
        "is_correct": false
      },
      {
        "text": "latency、応答精度、言語カバレッジ。",
        "is_correct": true
      },
      {
        "text": "tokenの使用量とクエリあたりのコスト。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ latency、応答精度、言語カバレッジ。</div><p class='explanation-text'>正解：これらの指標により、応答性、正確性、複数言語を効果的に処理するシステムの能力が確保されます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ tokenの使用量とクエリあたりのコスト。</div><p class='explanation-text'>正解：tokenの使用量とコストを追跡することで、本番環境でのシステムの効率を最適化するのに役立ちます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 各言語のファインチューニング精度。</div><p class='explanation-text'>不正解：ファインチューニング指標はトレーニングには関連しますが、デプロイメント監視には関連しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 入出力の長さの比率。</div><p class='explanation-text'>不正解：入出力の長さの比率はアプリケーションパフォーマンスや言語カバレッジについての直接的なインサイトを提供しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 多言語応答のBLEUスコア。</div><p class='explanation-text'>不正解：BLEUは言語生成品質を評価しますが、全体的な監視には重要ではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>latency、精度、言語カバレッジ、コストを追跡することで、多言語カスタマーサポートLLMの包括的な監視が確保されます。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "多言語カスタマーサポートLLMの本番監視では、BLEUやファインチューニング精度ではなく、latency・応答精度・言語カバレッジとtoken使用量・コストを追跡する。"
  },
  {
    "id": 16,
    "question": "Generative AIエンジニアが、会社の財務レポートに関する質問に答えるRAGシステムを開発しています。ユーザーから回答が曖昧で引用が不足しているというクレームがありました。エンジニアはどのようにシステムを改善すべきですか？",
    "choices": [
      {
        "text": "より創造的な応答を促すためにモデルのtemperatureを上げる。",
        "is_correct": false
      },
      {
        "text": "財務レポートデータセットでモデルをファインチューニングする。",
        "is_correct": false
      },
      {
        "text": "財務データを簡素化するために要約モデルを使用する。",
        "is_correct": false
      },
      {
        "text": "取得したコンテンツに関連する引用を含めるステップをpipelineに追加する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 取得したコンテンツに関連する引用を含めるステップをpipelineに追加する。</div><p class='explanation-text'>正解：引用を含めることで応答の透明性が確保され、ユーザーの信頼が構築されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より創造的な応答を促すためにモデルのtemperatureを上げる。</div><p class='explanation-text'>不正解：temperatureを上げるとばらつきが生まれますが、引用の精度は向上しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 財務レポートデータセットでモデルをファインチューニングする。</div><p class='explanation-text'>不正解：ファインチューニングは全体的な関連性を向上させるかもしれませんが、引用の問題を本質的には解決しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 財務データを簡素化するために要約モデルを使用する。</div><p class='explanation-text'>不正解：簡素化は曖昧な回答や引用不足の問題には対処しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>引用を追加することで透明性と信頼性が向上し、曖昧な回答に関するユーザーの懸念に対処します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "財務レポートRAGの回答が曖昧で引用不足という問題には、pipelineに引用を含めるステップを追加することで透明性と信頼性を向上させる。"
  },
  {
    "id": 17,
    "question": "Generative AIエンジニアが、基盤モデル APIを使用するLLMアプリケーションをデプロイする必要があります。アプリケーションはドキュメント要約を処理してretrieval機能を統合する必要があります。アプリケーションを効果的にデプロイするためにどの順序に従うべきですか？",
    "choices": [
      {
        "text": "まずエンドポイントをデプロイし、後でembeddingモデルを設定する。",
        "is_correct": false
      },
      {
        "text": "retrieralサポートなしに事前学習済みの要約モデルを使用する。",
        "is_correct": false
      },
      {
        "text": "embedding作成をスキップしてドキュメントのメタデータに頼る。",
        "is_correct": false
      },
      {
        "text": "retrieval機能をスキップして要約のためにLLMのみに頼る。",
        "is_correct": false
      },
      {
        "text": "基盤モデル APIアクセスを設定し、ドキュメントのembeddingを作成し、ベクトルストアを構築してからエンドポイントをデプロイする。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 基盤モデル APIアクセスを設定し、ドキュメントのembeddingを作成し、ベクトルストアを構築してからエンドポイントをデプロイする。</div><p class='explanation-text'>正解：この順序により、ドキュメントretrievalと要約がLLMと効果的に統合されることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ まずエンドポイントをデプロイし、後でembeddingモデルを設定する。</div><p class='explanation-text'>不正解：シームレスな機能のために、デプロイ前にembeddingを設定する必要があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ retrieralサポートなしに事前学習済みの要約モデルを使用する。</div><p class='explanation-text'>不正解：事前学習済みの要約モデルはアプリケーションに必要な動的retrievalの機能が不足しています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embedding作成をスキップしてドキュメントのメタデータに頼る。</div><p class='explanation-text'>不正解：embedding作成はベクトル検索とセマンティックretrievalに不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ retrieval機能をスキップして要約のためにLLMのみに頼る。</div><p class='explanation-text'>不正解：retrieval機能は要約の精度と関連性を向上させます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>API、embedding、ベクトルストアを設定することで、LLMアプリケーションが要約とretrievalをシームレスに処理することが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "基盤モデル APIを用いた要約・retrieval統合LLMアプリのデプロイ順序は、APIアクセス設定→embedding作成→ベクトルストア構築→エンドポイントデプロイ。"
  },
  {
    "id": 18,
    "question": "Generative AIエンジニアが、FAQretrievalシステム向けのLLMを選択する必要があります。システムは精度、コスト効率、スケーラビリティのバランスを取る必要があります。選択プロセスを導く基準はどれですか？（3つ選択）",
    "choices": [
      {
        "text": "計算コストを管理するためのモデルサイズとアーキテクチャ。",
        "is_correct": true
      },
      {
        "text": "ユーザークエリへのリアルタイム応答性を確保するためのlatency指標。",
        "is_correct": true
      },
      {
        "text": "コスト追跡のためのクエリあたりのtoken使用量。",
        "is_correct": false
      },
      {
        "text": "流暢で自然な出力を確保するための応答perplexity。",
        "is_correct": true
      },
      {
        "text": "より良い汎化のためのトレーニングデータセットの多様性。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 計算コストを管理するためのモデルサイズとアーキテクチャ。</div><p class='explanation-text'>正解：最適化された小さなモデルはスケーラビリティを維持しながら推論コストを削減できます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ ユーザークエリへのリアルタイム応答性を確保するためのlatency指標。</div><p class='explanation-text'>正解：低latencyによりシステムが応答性高くユーザーフレンドリーであることが確保されます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 流暢で自然な出力を確保するための応答perplexity。</div><p class='explanation-text'>正解：低いperplexityはモデルが一貫した読みやすい応答を生成していることを示し、ユーザー満足度を高めます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コスト追跡のためのクエリあたりのtoken使用量。</div><p class='explanation-text'>不正解：tokenの使用量はコストに影響しますが、モデルの精度やスケーラビリティを直接反映しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より良い汎化のためのトレーニングデータセットの多様性。</div><p class='explanation-text'>不正解：トレーニングデータはモデルの汎化に影響しますが、デプロイコストやスケーラビリティには直接影響しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>latency、モデルサイズ、perplexityのバランスをとることで、FAQシステムが正確でコスト効率が良くスケーラブルであることが確保されます。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "FAQretrievalシステムのLLM選択基準は、精度・コスト・スケーラビリティのバランスを取るため、モデルサイズ・latency指標・応答perplexityの3つを優先。"
  },
  {
    "id": 19,
    "question": "Generative AIエンジニアが、RAGシステムでのretrievalを最適化するために法的ドキュメントのチャンキング戦略を選択する任務を担っています。ドキュメントには長い段落と脚注が含まれています。どの戦略を採用すべきですか？",
    "choices": [
      {
        "text": "段落に基づいてドキュメントを論理的なセクションに分割し、チャンクがtokenの上限内に収まるようにする。",
        "is_correct": true
      },
      {
        "text": "コンテンツ構造を考慮せずにドキュメントを均等サイズのチャンクに分割する。",
        "is_correct": false
      },
      {
        "text": "すべてのチャンクを200tokenオーバーラップさせる。",
        "is_correct": false
      },
      {
        "text": "ドキュメント全体を1つのチャンクとして処理する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 段落に基づいてドキュメントを論理的なセクションに分割し、チャンクがtokenの上限内に収まるようにする。</div><p class='explanation-text'>正解：論理的なチャンキングにより、token制約を守りながら一貫性が維持され、retrieval品質が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンテンツ構造を考慮せずにドキュメントを均等サイズのチャンクに分割する。</div><p class='explanation-text'>不正解：均等サイズのチャンクは意味のあるセクションを壊すリスクがあり、関連性が低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ すべてのチャンクを200tokenオーバーラップさせる。</div><p class='explanation-text'>不正解：オーバーラップは冗長性を生みますが、必ずしもretrieval性能が向上するわけではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ドキュメント全体を1つのチャンクとして処理する。</div><p class='explanation-text'>不正解：1つのチャンクはtokenの上限を超えることが多く、処理が実行不可能になります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>論理的なチャンキングにより、セクションが意味を持ちtokenの上限に収まることが確保され、retrieval結果が最適化されます。</p></div>",
    "tags": "データ準備",
    "summary": "長い段落と脚注を含む法的ドキュメントのRAG向けチャンキングには、均等分割やオーバーラップより段落に基づく論理セクション分割が最善。"
  },
  {
    "id": 20,
    "question": "Generative AIエンジニアが、DatabricksにデプロイされたいたデプロイされたRAGアプリケーションのLLMコストを管理する任務を担っています。どの戦略を実装すべきですか？（2つ選択）",
    "choices": [
      {
        "text": "すべてのクエリに対して最大のモデルのファインチューニングに頼る。",
        "is_correct": false
      },
      {
        "text": "頻繁に取得された出力をキャッシュすることでAPI呼び出しを制限する。",
        "is_correct": false
      },
      {
        "text": "複雑でないクエリには小さなLLMを使用し、重要なタスクには大きなモデルを確保する。",
        "is_correct": true
      },
      {
        "text": "各クエリの入出力の長さを最小化するためにtokenの使用量を最適化する。",
        "is_correct": true
      },
      {
        "text": "より包括的な出力のためにcontext lengthを増やす。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 複雑でないクエリには小さなLLMを使用し、重要なタスクには大きなモデルを確保する。</div><p class='explanation-text'>正解：クエリの複雑さに基づいて適切なモデルサイズを選択することでコスト効率が最適化されます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 各クエリの入出力の長さを最小化するためにtokenの使用量を最適化する。</div><p class='explanation-text'>正解：tokenの使用量を削減することで推論コストが直接削減されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ すべてのクエリに対して最大のモデルのファインチューニングに頼る。</div><p class='explanation-text'>不正解：すべてのタスクに大きなモデルをファインチューニングするのはコストが高く非効率です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 頻繁に取得された出力をキャッシュすることでAPI呼び出しを制限する。</div><p class='explanation-text'>不正解：出力のキャッシュはlatencyを削減しますが、LLM推論コストに大きな影響を与えません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より包括的な出力のためにcontext lengthを増やす。</div><p class='explanation-text'>不正解：context lengthを増やすとtokenの使用量が増加し、コストが上昇します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>tokenの使用量の最適化とタスクの複雑さに基づくモデル選択は、DatabricksでのLLMコスト管理に効果的な戦略です。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "DatabricksのRAGアプリLLMコスト管理には、複雑さに応じたモデルサイズ選択（シンプルなクエリには小モデル）とtoken使用量の最適化が有効。"
  },
  {
    "id": 21,
    "question": "Generative AIエンジニアが、会社のポリシーに関するユーザークエリに答えて特定のポリシーセクションを引用するシステムのチェーンコンポーネントを選択する必要があります。どのコンポーネントが不可欠ですか？",
    "choices": [
      {
        "text": "ポリシートピック別にユーザークエリを分類する分類モデル。",
        "is_correct": false
      },
      {
        "text": "関連するポリシーセクションを取得するretrieverと引用付きで応答を生成するLLM。",
        "is_correct": true
      },
      {
        "text": "ユーザーをポリシーの回答に誘導するデシジョンツリー。",
        "is_correct": false
      },
      {
        "text": "ポリシードキュメントを要約する要約モデル。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 関連するポリシーセクションを取得するretrieverと引用付きで応答を生成するLLM。</div><p class='explanation-text'>正解：retrieverは関連コンテンツの取得を確保し、LLMは引用付きで正確な回答を動的に生成します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ポリシートピック別にユーザークエリを分類する分類モデル。</div><p class='explanation-text'>不正解：分類は引用や詳細な回答の必要性には対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーをポリシーの回答に誘導するデシジョンツリー。</div><p class='explanation-text'>不正解：デシジョンツリーは硬直的で動的なクエリや引用をサポートしません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ポリシードキュメントを要約する要約モデル。</div><p class='explanation-text'>不正解：要約は引用やクエリ処理に必要な具体性が不足しています。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>retrieverとLLMを組み合わせることで、適切に引用されたポリシー参照とともに正確なクエリ応答が確保されます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "ポリシーQ&Aシステムで特定セクションの引用付き回答を実現するには、ポリシーセクションを取得するretrieverと引用付き応答生成LLMの組み合わせが不可欠。"
  },
  {
    "id": 22,
    "question": "Generative AIエンジニアが、科学論文のナレッジベース向けにVector Searchインデックスをデプロイする必要があります。システムは低latencyでリアルタイムクエリをサポートする必要があります。どのツールとリソースの組み合わせを使用すべきですか？（3つ選択）",
    "choices": [
      {
        "text": "ベクトルインデックスの作成とクエリのためのFAISS。",
        "is_correct": true
      },
      {
        "text": "低latency計算のための高性能GPU。",
        "is_correct": true
      },
      {
        "text": "科学データセットで学習された要約モデル。",
        "is_correct": false
      },
      {
        "text": "生のドキュメントを保存するための分散データベース。",
        "is_correct": true
      },
      {
        "text": "コストを削減するための軽量CPUインフラ。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ベクトルインデックスの作成とクエリのためのFAISS。</div><p class='explanation-text'>正解：FAISSは効率的なインデックス化とクエリ機能を提供し、リアルタイムVector Searchに最適です。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 低latency計算のための高性能GPU。</div><p class='explanation-text'>正解：GPUはベクトル類似度計算を高速化し、リアルタイムクエリの高速応答を可能にします。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 生のドキュメントを保存するための分散データベース。</div><p class='explanation-text'>正解：分散データベースは大規模なナレッジベースのスケーラブルなストレージを確保し、生データとインデックス化されたベクトルを分離します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 科学データセットで学習された要約モデル。</div><p class='explanation-text'>不正解：下流タスクに有用ですが、要約モデル自体はベクトルインデックスには必要ありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コストを削減するための軽量CPUインフラ。</div><p class='explanation-text'>不正解：CPUは計算集約的なベクトル検索タスクの処理には不十分です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Vector Searchインデックスの構築には、効率的なインデックス化のためのFAISS、低latencyクエリのためのGPU、スケーラブルなドキュメントストレージのための分散データベースが必要です。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "科学論文ナレッジベースのリアルタイムVector Searchには、効率インデックス化のFAISS・低latency計算のGPU・生ドキュメント保存の分散データベースの3つが必要。"
  },
  {
    "id": 23,
    "question": "metapromptはLLMアプリケーションでのプライベートデータ露出をどのように軽減できますか？",
    "choices": [
      {
        "text": "metapromptはすべての数値出力をブロックする。",
        "is_correct": false
      },
      {
        "text": "metapromptはリスクの低い応答のためにtemperatureを調整する。",
        "is_correct": false
      },
      {
        "text": "metapromptは情報露出を最小化するために応答長を短縮する。",
        "is_correct": false
      },
      {
        "text": "metapromptはモデルが出力に特定の種類の機密情報を含めないように指示できる。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ metapromptはモデルが出力に特定の種類の機密情報を含めないように指示できる。</div><p class='explanation-text'>正解：metapromptはモデルがプライベートデータを含む出力を認識して避けるように誘導します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ metapromptはすべての数値出力をブロックする。</div><p class='explanation-text'>不正解：数値出力をブロックすることは過度に制限的であり、プライバシー保護とは関係ありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ metapromptはリスクの低い応答のためにtemperatureを調整する。</div><p class='explanation-text'>不正解：temperatureの調整はプライベートデータの露出には直接対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ metapromptは情報露出を最小化するために応答長を短縮する。</div><p class='explanation-text'>不正解：応答長の短縮は機密情報の漏洩を防ぎません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>metapromptは指示にルールやセーフガードを明示的に定義することで、LLMがプライベートデータを露出しないよう誘導するのに役立ちます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "metapromptによるプライベートデータ露出の軽減は、temperature調整や応答長短縮ではなく、機密情報を含めないよう指示するルール定義によって実現できる。"
  },
  {
    "id": 24,
    "question": "Generative AIエンジニアが、法的ドキュメントの要約pipelineの成功を評価する必要があります。生成された要約は簡潔で重要な法的ポイントをすべて含む必要があります。どの指標を優先すべきですか？",
    "choices": [
      {
        "text": "速度と流暢さを追跡するlatencyとperplexity。",
        "is_correct": false
      },
      {
        "text": "コンテンツの関連性とカバレッジを測定するROUGEとrecall。",
        "is_correct": true
      },
      {
        "text": "精度と簡潔さを測定するBLEUと応答長。",
        "is_correct": false
      },
      {
        "text": "入力を最適化するprecisionとretrieval精度。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ コンテンツの関連性とカバレッジを測定するROUGEとrecall。</div><p class='explanation-text'>正解：ROUGEは参照要約との重複を評価し、recallは重要なポイントが含まれていることを確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 速度と流暢さを追跡するlatencyとperplexity。</div><p class='explanation-text'>不正解：latencyとperplexityはコンテンツの関連性やカバレッジを直接評価しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 精度と簡潔さを測定するBLEUと応答長。</div><p class='explanation-text'>不正解：BLEUは類似度を測定しますが、応答長だけではコンテンツの関連性を確保しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 入力を最適化するprecisionとretrieval精度。</div><p class='explanation-text'>不正解：precisionとretrieval指標は要約品質を評価しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ROUGEとrecallにより、要約が簡潔で関連性があり包括的であることが確保され、法的ドキュメント分析の要件が満たされます。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "法的ドキュメント要約pipelineの評価には、latencyやBLEUではなく、コンテンツ重複を測定するROUGEと重要ポイントのカバレッジを測定するrecallを優先。"
  },
  {
    "id": 25,
    "question": "Generative AIエンジニアが、会話型エージェント向けに基盤モデル APIをデプロイする必要があります。API使用量が急速に増加することが予想されます。エンジニアはスケーラビリティのためにどのように最適化すべきですか？",
    "choices": [
      {
        "text": "インフラをスケーリングせずにレート制限を実装する。",
        "is_correct": false
      },
      {
        "text": "計算リソースを節約するためにcontext lengthを短縮する。",
        "is_correct": false
      },
      {
        "text": "ピーク需要に対応するために固定数のコンピューティングリソースを使用する。",
        "is_correct": false
      },
      {
        "text": "変動するワークロードに対応するためにautoscalingポリシーによる水平スケーリングを実装する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 変動するワークロードに対応するためにautoscalingポリシーによる水平スケーリングを実装する。</div><p class='explanation-text'>正解：autoscalingポリシーによる水平スケーリングにより、システムが増加する需要に効率的に適応できることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ インフラをスケーリングせずにレート制限を実装する。</div><p class='explanation-text'>不正解：レート制限は使用量を制御しますが、スケーラビリティは向上しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 計算リソースを節約するためにcontext lengthを短縮する。</div><p class='explanation-text'>不正解：context lengthを短縮すると応答品質が低下する可能性があり、スケーラビリティには対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ピーク需要に対応するために固定数のコンピューティングリソースを使用する。</div><p class='explanation-text'>不正解：固定リソースは変動するワークロード時に過少利用またはシステム過負荷につながる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>水平スケーリングにより、インフラが変化するワークロードに適応しながら高パフォーマンスと信頼性が維持されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "急増するAPI使用量への対応には、固定リソースやレート制限ではなく、autoscalingポリシーによる水平スケーリングがスケーラビリティ最適化の正解。"
  },
  {
    "id": 26,
    "question": "Generative AIエンジニアが、retrieralシステムで使用する前に法的契約書を前処理する必要があります。retrieval精度向上に最も重要なステップは何ですか？",
    "choices": [
      {
        "text": "条項や付属文書などの論理的なセクションで契約書をチャンクし、チャンクがモデルのtokenの上限内に収まるようにする。",
        "is_correct": true
      },
      {
        "text": "契約書を均等サイズのチャンクに分割する。",
        "is_correct": false
      },
      {
        "text": "冗長なセクションをランダムに削除する。",
        "is_correct": false
      },
      {
        "text": "契約書全体を1つのドキュメントとして保持する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 条項や付属文書などの論理的なセクションで契約書をチャンクし、チャンクがモデルのtokenの上限内に収まるようにする。</div><p class='explanation-text'>正解：論理的なチャンキングによりドキュメントの構造が保持され、チャンクがモデルで処理可能であることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 契約書を均等サイズのチャンクに分割する。</div><p class='explanation-text'>不正解：任意の分割は意味のあるセクションを壊す可能性があり、retrieval品質が低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 冗長なセクションをランダムに削除する。</div><p class='explanation-text'>不正解：ランダムな削除は重要な情報を除外するリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 契約書全体を1つのドキュメントとして保持する。</div><p class='explanation-text'>不正解：大きなドキュメントはtokenの上限を超えることが多く、効率的な処理を妨げます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>法的契約書を論理的なセクションでチャンクすることで、retrieralシステムがコンテキストを維持し正確な応答を提供することが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "法的契約書のretrieval精度向上には、均等分割やドキュメント全体保持ではなく、条項・付属文書などの論理的セクションに基づくチャンキングが最重要。"
  },
  {
    "id": 27,
    "question": "Generative AIエンジニアが、リアルタイムカスタマーサポート向けに基盤モデル APIを使用してLLMアプリケーションをデプロイする必要があります。最適なserving（サービング）のために何を考慮する必要がありますか？",
    "choices": [
      {
        "text": "無制限クエリを許可するためにAPIレート制限をスキップする。",
        "is_correct": false
      },
      {
        "text": "十分なコンピューティングリソースを確保し、APIレート制限を管理し、latencyを監視する。",
        "is_correct": true
      },
      {
        "text": "コストを最小化するためにコンピューティングリソースを削減する。",
        "is_correct": false
      },
      {
        "text": "latencyやコンピューティングリソースを監視せずに基盤モデル APIを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 十分なコンピューティングリソースを確保し、APIレート制限を管理し、latencyを監視する。</div><p class='explanation-text'>正解：これらの考慮事項により、効率的で信頼性が高く応答性の高いアプリケーションパフォーマンスが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 無制限クエリを許可するためにAPIレート制限をスキップする。</div><p class='explanation-text'>不正解：制限のないクエリはシステムを圧倒し、信頼性を低下させる可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コストを最小化するためにコンピューティングリソースを削減する。</div><p class='explanation-text'>不正解：リソースを削減するとパフォーマンスと応答時間が低下する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ latencyやコンピューティングリソースを監視せずに基盤モデル APIを使用する。</div><p class='explanation-text'>不正解：リソース管理を怠るとパフォーマンスのボトルネックが生じる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>コンピューティングリソース、APIレート制限、latencyを管理することで、リアルタイムアプリケーションでの最適なパフォーマンスとユーザー満足度が確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "リアルタイムカスタマーサポート向け基盤モデル APIデプロイでは、十分なコンピューティングリソース確保・APIレート制限管理・latency監視の3点が最適化の鍵。"
  },
  {
    "id": 28,
    "question": "Generative AIエンジニアが、医療専門家を支援するQAシステムを構築しています。システムは医療ガイドラインから回答を取得して説明を提供する必要があります。どのチェーンコンポーネントが必要ですか？",
    "choices": [
      {
        "text": "ガイドラインセクションを取得するretrieverと説明付きで応答を生成するLLM。",
        "is_correct": true
      },
      {
        "text": "ガイドラインコンテンツを要約する要約モデル。",
        "is_correct": false
      },
      {
        "text": "クエリをガイドラインセクションにマッピングするルールベースシステム。",
        "is_correct": false
      },
      {
        "text": "トピック別にクエリを分類する分類モデル。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ガイドラインセクションを取得するretrieverと説明付きで応答を生成するLLM。</div><p class='explanation-text'>正解：retrieverは関連コンテンツのretrievalを確保し、LLMはコンテキスト的に正確な説明を作成します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ガイドラインコンテンツを要約する要約モデル。</div><p class='explanation-text'>不正解：要約は特定の質問に答える能力がありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリをガイドラインセクションにマッピングするルールベースシステム。</div><p class='explanation-text'>不正解：ルールベースシステムは動的なクエリには硬直的すぎます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トピック別にクエリを分類する分類モデル。</div><p class='explanation-text'>不正解：分類は詳細な応答や説明を提供しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>retrieverとLLMを使用することで、システムが医療ガイドラインから動的に回答を取得して説明できることが確保されます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "医療専門家向けQAシステムでガイドラインからの回答取得と説明生成を実現するには、ガイドラインセクションを取得するretrieverと説明付き応答を生成するLLMが必須。"
  },
  {
    "id": 29,
    "question": "Generative AIエンジニアが、長い研究論文を処理する検索エンジン向けのembeddingモデルを選択する任務を担っています。最も重要な要素は何ですか？（2つ選択）",
    "choices": [
      {
        "text": "推論コスト。",
        "is_correct": false
      },
      {
        "text": "embeddingモデルがサポートするcontext length。",
        "is_correct": true
      },
      {
        "text": "セマンティック類似度精度。",
        "is_correct": true
      },
      {
        "text": "トレーニングデータセットのサイズ。",
        "is_correct": false
      },
      {
        "text": "tokenの多様性。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ embeddingモデルがサポートするcontext length。</div><p class='explanation-text'>正解：長いcontext lengthにより、長い研究論文のより良い表現が可能になります。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ セマンティック類似度精度。</div><p class='explanation-text'>正解：高い精度により、検索クエリが最も関連性の高い結果を取得することが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 推論コスト。</div><p class='explanation-text'>不正解：重要ですが、コストは長いドキュメントのモデルパフォーマンスに直接影響しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トレーニングデータセットのサイズ。</div><p class='explanation-text'>不正解：データセットサイズはタスク固有の評価指標よりも二次的です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ tokenの多様性。</div><p class='explanation-text'>不正解：tokenの多様性はembeddingに関連する指標ではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>長いcontext lengthのサポートと高いセマンティック類似度精度により、長い研究論文を処理するための効果的なembeddingが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "長い研究論文を処理する検索エンジンのembeddingモデル選択では、推論コストよりも長文書表現に必要なcontext lengthとセマンティック類似度精度を優先。"
  },
  {
    "id": 30,
    "question": "Generative AIエンジニアが、ドキュメント要約のためにembeddingとLLMの両方を必要とするモデルをデプロイしています。モデルはリアルタイムクエリに対して高いthroughputを処理する必要があります。どのインフラを優先すべきですか？",
    "choices": [
      {
        "text": "embedding storageをスキップして要約のためにLLMのみに頼る。",
        "is_correct": false
      },
      {
        "text": "コストを節約するためにCPUのみのリソースを持つローカルサーバーを使用する。",
        "is_correct": false
      },
      {
        "text": "モデル推論のためのGPUアクセラレーションとembeddingのストレージ最適化を備えた分散クラウドインフラにデプロイする。",
        "is_correct": true
      },
      {
        "text": "最小限のスケーリング機能を持つ単一のクラウドインスタンスにモデルをデプロイする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ モデル推論のためのGPUアクセラレーションとembeddingのストレージ最適化を備えた分散クラウドインフラにデプロイする。</div><p class='explanation-text'>正解：分散クラウドインフラによりスケーラビリティが確保され、GPUアクセラレーションにより推論速度が向上し、ストレージ最適化によりretrieval性能が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embedding storageをスキップして要約のためにLLMのみに頼る。</div><p class='explanation-text'>不正解：embedding storageはセマンティックな理解と効率的なretrievalに不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コストを節約するためにCPUのみのリソースを持つローカルサーバーを使用する。</div><p class='explanation-text'>不正解：CPUのみのリソースは高throughput要件を効果的に処理できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 最小限のスケーリング機能を持つ単一のクラウドインスタンスにモデルをデプロイする。</div><p class='explanation-text'>不正解：最小限のスケーリングはリアルタイムの高throughput需要には不十分です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>GPUと最適化されたストレージを備えた分散クラウドインフラにより、リアルタイム要約タスクのスケーラビリティとパフォーマンスが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "高throughputのリアルタイムドキュメント要約には、CPUローカルや単一インスタンスではなく、GPUアクセラレーションとストレージ最適化を備えた分散クラウドインフラが最適。"
  },
  {
    "id": 31,
    "question": "Generative AIエンジニアが、医療に関する質問に答えるRAGシステムのトレーニング用ソースドキュメントを選択しています。ドキュメント選択を導く基準は何ですか？",
    "choices": [
      {
        "text": "多様だが非専門的な医療コンテンツのドキュメントを選択する。",
        "is_correct": false
      },
      {
        "text": "トレーニングデータサイズを最大化するために長いドキュメントを優先する。",
        "is_correct": false
      },
      {
        "text": "関連性に関わらず公開されているすべての医療テキストを含める。",
        "is_correct": false
      },
      {
        "text": "対象ドメインに関連する高品質な医療情報を持つドキュメントを選択する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 対象ドメインに関連する高品質な医療情報を持つドキュメントを選択する。</div><p class='explanation-text'>正解：高品質で関連性の高いドキュメントにより、信頼性が高く正確なシステム応答が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 多様だが非専門的な医療コンテンツのドキュメントを選択する。</div><p class='explanation-text'>不正解：一般的なコンテンツは医療アプリケーションに必要な専門性が不足している可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トレーニングデータサイズを最大化するために長いドキュメントを優先する。</div><p class='explanation-text'>不正解：長さだけでは関連性や品質は確保されません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 関連性に関わらず公開されているすべての医療テキストを含める。</div><p class='explanation-text'>不正解：無関係なテキストはシステムの精度を希薄化させます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>高品質で関連性の高い医療ドキュメントを選択することで、RAGシステムが医療クエリに整合した正確な回答を取得することが確保されます。</p></div>",
    "tags": "データ準備",
    "summary": "医療RAGシステムのソースドキュメント選択では、公開テキスト網羅や長さより、対象ドメインに関連する高品質な医療情報を持つドキュメントの選択を優先。"
  },
  {
    "id": 32,
    "question": "Generative AIエンジニアが、ユーザー入力に基づいてプロンプトを動的に拡張する必要があります。ユーザーがカスタマーサポートチャットボットに「配送遅延」について質問しています。これを処理する最善の方法は何ですか？",
    "choices": [
      {
        "text": "事前に書かれた応答のみに頼る。",
        "is_correct": false
      },
      {
        "text": "「問題を説明してください。」のような汎用プロンプトを使用する。",
        "is_correct": false
      },
      {
        "text": "プロンプトを簡潔に保つためにすべてのコンテキスト情報を除外する。",
        "is_correct": false
      },
      {
        "text": "注文日、ID、予定配送時間などの関連コンテキストをプロンプトに含める。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 注文日、ID、予定配送時間などの関連コンテキストをプロンプトに含める。</div><p class='explanation-text'>正解：重要な詳細を追加することで、LLMが正確で関連性の高い応答を生成するのに役立ちます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 事前に書かれた応答のみに頼る。</div><p class='explanation-text'>不正解：事前に書かれた応答は特定のユーザー入力に動的に適応できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 「問題を説明してください。」のような汎用プロンプトを使用する。</div><p class='explanation-text'>不正解：汎用プロンプトはコンテキストが不足しており、応答精度が低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ プロンプトを簡潔に保つためにすべてのコンテキスト情報を除外する。</div><p class='explanation-text'>不正解：コンテキストを除外すると無関係または役に立たない応答が生成されるリスクがあります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>関連コンテキストでプロンプトを拡張することで、LLMが正確でユーザー固有の応答を生成することが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "配送遅延クエリへの動的プロンプト拡張では、汎用プロンプトではなく注文日・ID・予定配送時間などの関連コンテキストをプロンプトに含めることが最善。"
  },
  {
    "id": 33,
    "question": "Generative AIエンジニアが、MLflow PyFuncモデルの前処理・後処理pipelineを作成しています。このアプローチが有用な理由は何ですか？",
    "choices": [
      {
        "text": "入力をバッチ処理することでAPIコストを最小化する。",
        "is_correct": false
      },
      {
        "text": "モデル推論の前後にデータを変換でき、互換性と最適化された出力を確保する。",
        "is_correct": true
      },
      {
        "text": "モデルの再トレーニングの必要性を減らす。",
        "is_correct": false
      },
      {
        "text": "モデルのハイパーパラメータチューニングを自動化する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ モデル推論の前後にデータを変換でき、互換性と最適化された出力を確保する。</div><p class='explanation-text'>正解：前処理・後処理pipelineは入力の正規化と出力のフォーマット化を処理し、システムパフォーマンスを向上させます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 入力をバッチ処理することでAPIコストを最小化する。</div><p class='explanation-text'>不正解：APIコストの最適化は前処理・後処理ロジックとは無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルの再トレーニングの必要性を減らす。</div><p class='explanation-text'>不正解：前処理・後処理pipelineはモデル改善のための再トレーニングに取って代わりません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルのハイパーパラメータチューニングを自動化する。</div><p class='explanation-text'>不正解：ハイパーパラメータチューニングには別の最適化プロセスが必要です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>前処理・後処理pipelineは入力と出力を変換することでワークフローを合理化し、互換性とシステム効率を向上させます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "MLflow PyFuncモデルの前処理・後処理pipelineが有用な理由は、モデル推論の前後にデータを変換して互換性と出力品質を確保できるから。"
  },
  {
    "id": 34,
    "question": "Generative AIエンジニアが、重要なポイントを強調してドキュメントの要約を箇条書きで出力するドキュメント要約システムのプロンプトを設計する必要があります。プロンプトに何を含めるべきですか？",
    "choices": [
      {
        "text": "ドキュメントの主要なアイデアを簡潔な段落で強調する。",
        "is_correct": false
      },
      {
        "text": "概要のためにドキュメントのアブストラクトを作成する。",
        "is_correct": false
      },
      {
        "text": "ドキュメントの要約を生成する。",
        "is_correct": false
      },
      {
        "text": "重要なポイントを強調しながらドキュメントを箇条書きで要約する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 重要なポイントを強調しながらドキュメントを箇条書きで要約する。</div><p class='explanation-text'>正解：このプロンプトは出力フォーマットと含めるべき重要な要素を明示的に定義し、正確な結果を確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ドキュメントの主要なアイデアを簡潔な段落で強調する。</div><p class='explanation-text'>不正解：この指示は箇条書きではなく段落スタイルの要約につながる可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 概要のためにドキュメントのアブストラクトを作成する。</div><p class='explanation-text'>不正解：アブストラクトは重要なポイントや箇条書きフォーマットに特化していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ドキュメントの要約を生成する。</div><p class='explanation-text'>不正解：この指示は箇条書きフォーマットに関する具体性が不足しています。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>フォーマット（箇条書き）とコンテンツ要件の両方を定義する明示的なプロンプトにより、要約システムが整合した結果を出力することが確保されます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "箇条書きで重要ポイントを出力する要約システムのプロンプトには、フォーマット（箇条書き）と内容要件を明示的に定義した指示を含めることが最善。"
  },
  {
    "id": 35,
    "question": "Generative AIエンジニアが、ローン審査を予測するMLflow PyFuncモデルをデプロイしています。モデルには前処理・後処理が必要です。使いやすさを確保するためにどのようなステップを取るべきですか？",
    "choices": [
      {
        "text": "後処理なしに前処理のみを使用する。",
        "is_correct": false
      },
      {
        "text": "より高速な予測のために生の入力を直接モデルに渡す。",
        "is_correct": false
      },
      {
        "text": "後処理をスキップして生のモデルスコアを返す。",
        "is_correct": false
      },
      {
        "text": "入力を前処理（データのクリーニングと標準化など）し、MLflow PyFuncモデルで予測を実行し、ユーザーの明確さのために出力（「承認」または「拒否」など）をフォーマットする。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 入力を前処理（データのクリーニングと標準化など）し、MLflow PyFuncモデルで予測を実行し、ユーザーの明確さのために出力（「承認」または「拒否」など）をフォーマットする。</div><p class='explanation-text'>正解：前処理・後処理によりモデルが入力を効果的に処理し、出力をユーザーフレンドリーなフォーマットで提示することが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 後処理なしに前処理のみを使用する。</div><p class='explanation-text'>不正解：後処理はモデル出力を解釈可能にするために不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より高速な予測のために生の入力を直接モデルに渡す。</div><p class='explanation-text'>不正解：前処理はデータ品質を確保し、予測の信頼性を向上させます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 後処理をスキップして生のモデルスコアを返す。</div><p class='explanation-text'>不正解：生のスコアはユーザーを混乱させる可能性があり、アクション可能なインサイトが不足しています。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>前処理、MLflow PyFuncの予測、後処理を組み合わせたワークフローにより、正確でユーザーフレンドリーなローン審査結果が確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "ローン審査MLflow PyFuncモデルの使いやすさ確保には、入力の前処理→モデル予測→結果の後処理（承認・拒否などのフォーマット化）の3ステップが必要。"
  },
  {
    "id": 36,
    "question": "Generative AIエンジニアが、法的ドキュメントを正確に要約するpipelineを設計する任務を担っています。要約モデルの有効性をどのように評価すべきですか？",
    "choices": [
      {
        "text": "ユーザーフィードバックのみに集中する。",
        "is_correct": false
      },
      {
        "text": "ROUGEやBLEUスコアなどの指標を使用して要約品質を測定する。",
        "is_correct": true
      },
      {
        "text": "応答latencyのみを測定する。",
        "is_correct": false
      },
      {
        "text": "tokenカウントを使用して要約の長さを測定する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ROUGEやBLEUスコアなどの指標を使用して要約品質を測定する。</div><p class='explanation-text'>正解：ROUGEとBLEUは参照テキストとの比較で要約の精度と関連性を評価します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーフィードバックのみに集中する。</div><p class='explanation-text'>不正解：ユーザーフィードバックは有用ですが主観的であり、モデル評価には十分ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答latencyのみを測定する。</div><p class='explanation-text'>不正解：latencyは要約品質を直接示しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ tokenカウントを使用して要約の長さを測定する。</div><p class='explanation-text'>不正解：tokenカウントは生成された要約の精度や関連性を評価しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ROUGEとBLEUは要約モデルの精度と品質を評価するために広く使用されている指標であり、信頼できるパフォーマンスを確保します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "法的ドキュメント要約pipelineの評価には、ユーザーフィードバックやlatencyではなく、参照テキストとの精度・関連性を測定するROUGEとBLEUスコアが適切。"
  },
  {
    "id": 37,
    "question": "Generative AIアプリケーションにおけるガードレールの主な目的は何ですか？",
    "choices": [
      {
        "text": "モデル推論のlatencyを削減する。",
        "is_correct": false
      },
      {
        "text": "クリエイティブタスクの応答の多様性を向上させる。",
        "is_correct": false
      },
      {
        "text": "モデル出力を固定長に制限する。",
        "is_correct": false
      },
      {
        "text": "出力が安全で正確であり、アプリケーション要件に整合していることを確保する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 出力が安全で正確であり、アプリケーション要件に整合していることを確保する。</div><p class='explanation-text'>正解：ガードレールはハルシネーション、有害な応答、プライバシー侵害などのリスクを軽減するのに役立ちます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデル推論のlatencyを削減する。</div><p class='explanation-text'>不正解：ガードレールはlatencyのようなパフォーマンス最適化には直接対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クリエイティブタスクの応答の多様性を向上させる。</div><p class='explanation-text'>不正解：ガードレールは応答の多様性ではなく、安全性と精度に焦点を当てています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデル出力を固定長に制限する。</div><p class='explanation-text'>不正解：ガードレールは主に長さの制御のために設計されていません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ガードレールにより、Generative AIアプリケーションが安全で倫理的であり、特定の品質要件を満たす出力を生成することが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "Generative AIアプリケーションにおけるガードレールの主な目的は、latency削減や多様性向上ではなく、ハルシネーション・有害応答・プライバシー侵害を防ぐ安全・正確な出力の確保。"
  },
  {
    "id": 38,
    "question": "Generative AIエンジニアが、retrieverのドキュメントを512tokenずつチャンクするLLMベースのアプリケーションを作成しています。エンジニアは品質よりもコストとlatencyを優先しています。どの設定がニーズを満たしますか？",
    "choices": [
      {
        "text": "context length 32768；最小モデルサイズ 14GB；embedding次元 4096。",
        "is_correct": false
      },
      {
        "text": "context length 2048；最小モデルサイズ 11GB；embedding次元 2560。",
        "is_correct": false
      },
      {
        "text": "context length 512；最小モデルサイズ 0.13GB；embedding次元 384。",
        "is_correct": true
      },
      {
        "text": "context length 514；最小モデルサイズ 0.44GB；embedding次元 768。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ context length 512；最小モデルサイズ 0.13GB；embedding次元 384。</div><p class='explanation-text'>正解：チャンクサイズと一致し、最小モデルを使用することでコストとlatencyの両方を最小化します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ context length 32768；最小モデルサイズ 14GB；embedding次元 4096。</div><p class='explanation-text'>不正解：この設定は過剰に大きく、コストやlatencyの優先事項と整合しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ context length 2048；最小モデルサイズ 11GB；embedding次元 2560。</div><p class='explanation-text'>不正解：より大きなcontext lengthとembeddingサイズはlatencyとコストを増加させます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ context length 514；最小モデルサイズ 0.44GB；embedding次元 768。</div><p class='explanation-text'>不正解：514のcontext lengthはチャンクサイズを超え、不必要なモデルの複雑さを追加します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>512のcontext lengthはアプリケーションのチャンクサイズと完全に一致し、より小さなモデルサイズによりコストとlatencyが削減されます。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "512tokenチャンクのRAGアプリでコスト・latency優先の設定は、チャンクサイズに一致するcontext length 512・最小モデル0.13GB・embedding次元384の組み合わせ。"
  },
  {
    "id": 39,
    "question": "Generative AIエンジニアが、長い技術マニュアルを要約するためのチャットボットをトレーニングする任務を担っています。多くのマニュアルにはデータセットサイズを膨らませる冗長な例が含まれています。前処理中に何を優先すべきですか？",
    "choices": [
      {
        "text": "冗長な例をプレースホルダーで置き換える。",
        "is_correct": false
      },
      {
        "text": "ユニークで意味のあるコンテンツを保持しながら冗長な例を削除する。",
        "is_correct": true
      },
      {
        "text": "完全性のためにすべての例を保持する。",
        "is_correct": false
      },
      {
        "text": "冗長性を含むマニュアル全体を除外する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ユニークで意味のあるコンテンツを保持しながら冗長な例を削除する。</div><p class='explanation-text'>正解：冗長性を除去することでデータセットサイズが削減され、モデルがユニークなコンテンツに集中し、要約品質が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 冗長な例をプレースホルダーで置き換える。</div><p class='explanation-text'>不正解：コンテンツをプレースホルダーで置き換えても明確さが増さず、モデルを混乱させる可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 完全性のためにすべての例を保持する。</div><p class='explanation-text'>不正解：冗長な例を含めることで価値を追加せずにデータセットが不必要に膨らみます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 冗長性を含むマニュアル全体を除外する。</div><p class='explanation-text'>不正解：マニュアル全体を除外すると冗長性と一緒に価値あるコンテンツも削除するリスクがあります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>冗長な例を排除することで簡潔で高品質な入力が確保され、要約モデルのトレーニングが向上します。</p></div>",
    "tags": "データ準備",
    "summary": "冗長な例を含む技術マニュアルの前処理では、プレースホルダー置換やマニュアル全体の除外ではなく、ユニークで意味のあるコンテンツを保持しながら冗長例を削除する。"
  },
  {
    "id": 40,
    "question": "Generative AIエンジニアが、カスタマーサポートシステムの基本的なRAGアプリケーションをデプロイする必要があります。アプリケーションはベクトル検索のembeddingモデル、ドキュメントルックアップのretriever、応答生成のLLMを必要とします。このアプリケーションをデプロイするためのステップは何ですか？",
    "choices": [
      {
        "text": "まずLLMをデプロイし、デプロイ後にretrieverとembeddingを設定する。",
        "is_correct": false
      },
      {
        "text": "ストレージとretrievalにembeddingモデルを使用し、retrieverを完全にスキップする。",
        "is_correct": false
      },
      {
        "text": "retrieverのみを設定してLLMに直接接続して応答を生成する。",
        "is_correct": false
      },
      {
        "text": "依存関係をインストールし、embeddingモデルを準備し、retrieverを設定し、Model Servingを使用してエンドポイントをデプロイする。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 依存関係をインストールし、embeddingモデルを準備し、retrieverを設定し、Model Servingを使用してエンドポイントをデプロイする。</div><p class='explanation-text'>正解：この順序により、embeddingからデプロイメントまでのすべてのコンポーネントが正しく設定・統合されることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ まずLLMをデプロイし、デプロイ後にretrieverとembeddingを設定する。</div><p class='explanation-text'>不正解：LLMのデプロイメントは効果的な応答のためにembeddingとretrieverの適切な統合に従う必要があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ストレージとretrievalにembeddingモデルを使用し、retrieverを完全にスキップする。</div><p class='explanation-text'>不正解：retrieverはRAGシステムでの精密なドキュメントルックアップに不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ retrieverのみを設定してLLMに直接接続して応答を生成する。</div><p class='explanation-text'>不正解：retrieverだけではベクトル検索やembeddingを処理できず、retrieval品質が制限されます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>embedding、retriever、エンドポイントデプロイメントを含む適切な順序により、機能的で最適化されたRAGアプリケーションが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "カスタマーサポートRAGアプリのデプロイ手順は、依存関係インストール→embeddingモデル準備→retriever設定→Model Servingでエンドポイントデプロイの順序が正しい。"
  },
  {
    "id": 41,
    "question": "Generative AIエンジニアが、推薦システムのembeddingモデルを選択する任務を担っています。システムは製品説明と顧客レビューを処理する必要があります。embeddingモデルを選択する最も重要な要素は何ですか？",
    "choices": [
      {
        "text": "計算コストを削減するためのtokenization効率。",
        "is_correct": false
      },
      {
        "text": "事前学習済みLLMとの互換性。",
        "is_correct": false
      },
      {
        "text": "公開されている事前学習済みembeddingの可用性。",
        "is_correct": false
      },
      {
        "text": "製品説明とレビューのcontext lengthとセマンティックな理解。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 製品説明とレビューのcontext lengthとセマンティックな理解。</div><p class='explanation-text'>正解：より長いcontext lengthと強力なセマンティックな理解を持つembeddingモデルは複雑な入力においてより良いパフォーマンスを発揮します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 計算コストを削減するためのtokenization効率。</div><p class='explanation-text'>不正解：重要ですが、tokenizationはセマンティックな理解に直接影響しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 事前学習済みLLMとの互換性。</div><p class='explanation-text'>不正解：互換性は関連する入力を処理するembeddingモデルの能力ほど重要ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 公開されている事前学習済みembeddingの可用性。</div><p class='explanation-text'>不正解：事前学習済みembeddingもドメイン固有の要件に整合する必要があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>長いcontext lengthと堅牢なセマンティックな理解を持つembeddingモデルにより、システムがレビューを製品説明に整合させる能力が向上します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "製品説明と顧客レビューを処理する推薦システムのembeddingモデル選択では、tokenization効率やLLM互換性より、context lengthとセマンティックな理解力を優先。"
  },
  {
    "id": 42,
    "question": "Generative AIエンジニアが、社内ヘルプデスクコールセンターチームが関連チケットをより迅速に見つけて解決策を提供できるようにするためのチャットボットを開発する責任を担っています。このアプリケーションで使用できるデータソースを計画しています。候補データソースは次のとおりです：call_rep_history（担当者IDと通話IDを主キーとするDeltaテーブル。担当者の通話解決率を計算するために維持）、transcript Volume（すべての録音のwavファイルとtxtテキスト文字起こしを含むUnity Catalog Volume）、call_cust_history（顧客IDと通話IDを主キーとするDeltaテーブル。社内顧客のヘルプデスク使用状況を追跡）、call_detail（1時間ごとに更新される全通話詳細のスナップショットを含むDeltaテーブル。root_causeとresolutionフィールドを含むが、まだ対応中の通話ではこれらが空の場合がある）、maintenance_schedule（ヘルプデスクアプリケーションの障害と計画メンテナンスを含むDeltaテーブル）。チケットの根本原因と解決策を最もよく識別するためのコンテキストを追加できるソースはどれですか？（2つ選択）",
    "choices": [
      {
        "text": "call_detail",
        "is_correct": true
      },
      {
        "text": "call_rep_history",
        "is_correct": false
      },
      {
        "text": "call_cust_history",
        "is_correct": false
      },
      {
        "text": "maintenance_schedule",
        "is_correct": false
      },
      {
        "text": "transcript Volume",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ call_detail</div><p class='explanation-text'>正解：このテーブルにはroot_causeとresolutionフィールドが含まれており、チケットの解決策を特定するための主要ソースとなります。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ transcript Volume</div><p class='explanation-text'>正解：テキスト文字起こしは通話に関する詳細なコンテキストのインサイトを提供し、根本原因と解決策の特定に役立ちます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ call_rep_history</div><p class='explanation-text'>不正解：このテーブルは担当者のパフォーマンス指標を追跡しており、解決コンテキストを提供しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ call_cust_history</div><p class='explanation-text'>不正解：顧客使用状況データはサービス使用の追跡に焦点を当てており、チケットの根本原因や解決策の特定には役立ちません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ maintenance_schedule</div><p class='explanation-text'>不正解：障害や計画メンテナンスを追跡しますが、この情報は特定のチケットの根本原因や解決策を直接特定するのに役立ちません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>構造化フィールド（root_causeとresolution）を持つcall_detailと詳細な通話コンテキストのtranscript Volumeを使用することで、チャットボットがチケットを効率的に解決するための包括的なデータが確保されます。</p></div>",
    "tags": "ガバナンス",
    "summary": "ヘルプデスクチャットボットのチケット根本原因・解決策特定には、root_cause/resolutionフィールドを持つcall_detailと通話コンテキストを含むtranscript Volumeが最適な2ソース。"
  },
  {
    "id": 43,
    "question": "Generative AIエンジニアが、カスタマーサポートチャットボットのマルチステップ推論pipelineを開発する任務を担っています。チャットボットは意図を識別し、関連ドキュメントを取得し、詳細な応答を生成する必要があります。pipelineの重要な設計原則は何ですか？",
    "choices": [
      {
        "text": "複雑さを減らすためにツールの数を最小化する。",
        "is_correct": false
      },
      {
        "text": "ドキュメントretrievalにルールベースシステムを使用する。",
        "is_correct": false
      },
      {
        "text": "ツールが相互運用可能であり、ステージ間でデータをシームレスに共有できることを確保する。",
        "is_correct": true
      },
      {
        "text": "retrievalなしに応答生成に集中する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ツールが相互運用可能であり、ステージ間でデータをシームレスに共有できることを確保する。</div><p class='explanation-text'>正解：相互運用可能なツールにより、意図識別、retrieval、応答生成ステージ間のスムーズな移行が可能になり、ボトルネックが回避されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 複雑さを減らすためにツールの数を最小化する。</div><p class='explanation-text'>不正解：ツールを減らすと、マルチステップ推論を必要とする複雑なタスクを処理するチャットボットの能力が制限される可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ドキュメントretrievalにルールベースシステムを使用する。</div><p class='explanation-text'>不正解：ルールベースシステムは硬直的であり、多様なクエリに効果的に適応できない可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ retrievalなしに応答生成に集中する。</div><p class='explanation-text'>不正解：retrievalは関連ドキュメントに応答を根拠づけるために不可欠です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>マルチステップ推論システムは相互運用可能なツールに依存して効率的なワークフローを可能にし、意図識別、retrieval、応答生成などのタスク間のスムーズな移行を確保します。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "マルチステップ推論pipelineの重要な設計原則は、ツール数の最小化ではなく、意図識別・retrieval・応答生成ステージ間でデータをシームレスに共有できる相互運用性の確保。"
  },
  {
    "id": 44,
    "question": "Generative AIエンジニアが、パーソナライズされた財務アドバイスを生成するためにマーケットプレイスからモデルを選択する必要があります。システムは精度とコンプライアンスを優先する必要があります。モデルの選択を導く属性は何ですか？（2つ選択）",
    "choices": [
      {
        "text": "流暢さを確保するために低いperplexityのモデルを選択する。",
        "is_correct": false
      },
      {
        "text": "トレーニングドメインとファインチューニングの詳細についてモデルのメタデータを評価する。",
        "is_correct": true
      },
      {
        "text": "財務データセットで高い精度を持つモデルを優先する。",
        "is_correct": true
      },
      {
        "text": "リアルタイム応答のために低latencyのモデルを選択する。",
        "is_correct": false
      },
      {
        "text": "より良いパフォーマンスのためにより大きなパラメータ数のモデルに集中する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ トレーニングドメインとファインチューニングの詳細についてモデルのメタデータを評価する。</div><p class='explanation-text'>正解：メタデータにより、財務タスクへのモデルの適合性についてのインサイトが得られます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 財務データセットで高い精度を持つモデルを優先する。</div><p class='explanation-text'>正解：高い精度により信頼性とユーザーニーズへの整合が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 流暢さを確保するために低いperplexityのモデルを選択する。</div><p class='explanation-text'>不正解：流暢さはドメイン精度とコンプライアンスよりも二次的です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ リアルタイム応答のために低latencyのモデルを選択する。</div><p class='explanation-text'>不正解：latencyはコンプライアンスと精度にとってあまり重要ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より良いパフォーマンスのためにより大きなパラメータ数のモデルに集中する。</div><p class='explanation-text'>不正解：パラメータ数だけではドメインの関連性や精度が保証されません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>メタデータを確認してドメイン固有の精度を優先することで、選択されたモデルがパーソナライズされた財務アドバイスの要件を満たすことが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "財務アドバイス生成モデルの選択では、perplexityやlatencyよりも、トレーニングドメイン・ファインチューニング詳細のメタデータ評価と財務データセットでの高精度を優先。"
  },
  {
    "id": 45,
    "question": "Generative AIエンジニアが、製品のユーザーレビューを要約する任務を担っています。要約は共通テーマとセンチメントを強調する必要があります。最も適したモデルタスクは何ですか？",
    "choices": [
      {
        "text": "固有表現認識（Named entity recognition）",
        "is_correct": false
      },
      {
        "text": "テキスト分類（Text classification）",
        "is_correct": false
      },
      {
        "text": "テキスト要約（Text summarization）",
        "is_correct": true
      },
      {
        "text": "感情分析（Sentiment analysis）",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ テキスト要約（Text summarization）</div><p class='explanation-text'>正解：要約はユーザーレビューを簡潔な概要に凝縮し、共通テーマとセンチメントをキャプチャします。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 固有表現認識（Named entity recognition）</div><p class='explanation-text'>不正解：NERは名前や場所などのエンティティを識別しますが、レビューを要約しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ テキスト分類（Text classification）</div><p class='explanation-text'>不正解：分類はレビューをカテゴリに割り当てますが、そのコンテンツを要約しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 感情分析（Sentiment analysis）</div><p class='explanation-text'>不正解：感情分析は感情的なトーンを識別しますが、共通テーマを要約しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>テキスト要約はユーザーレビューの本質を効果的にキャプチャし、テーマとセンチメントについての簡潔なインサイトを提供します。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "共通テーマとセンチメントを強調したユーザーレビュー要約には、感情分析やNERではなく、レビューを簡潔な概要に凝縮するテキスト要約が最も適したモデルタスク。"
  }
];
