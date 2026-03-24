window.questionsDataDbxg1 = [
  {
    "id": 1,
    "question": "ジェネレーティブAIエンジニアが、メールからフォーマットされたJSONを生成するようLLMに指示したいと考えています。これには、注文ID、日付、送信者メールアドレスという情報を解析・抽出する必要があります。サンプルメールは次の通りです：Date: April 23, 2024 Time: 4:22 PM From: anjali.thayer@example.com To: support@company.com Subject: Shipment details Hey there, I have a shipment (order ID is CD34RFT). Can you please send me an update? Thank you, Anjali エンジニアは、最高レベルの出力精度でJSON形式に関連情報を抽出するプロンプトを作成する必要があります。どのプロンプトが目標を達成しますか？",
    "choices": [
      {
        "text": "顧客メールを受け取り、日付、送信者メールアドレス、注文IDを抽出してください。抽出された情報をJSON形式で返してください。",
        "is_correct": false
      },
      {
        "text": "顧客メールを受け取り、日付、送信者メールアドレス、注文IDを抽出してください。抽出された情報を人間が読みやすい形式で返してください。",
        "is_correct": false
      },
      {
        "text": "顧客メールを受け取り、日付、送信者メールアドレス、注文IDを抽出してください。抽出された情報をJSON形式で返してください。例：{\"date\": \"April 16, 2024\", \"sender_email\": \"john.doe@example.com\", \"order_id\": \"ORD98765\"}。",
        "is_correct": true
      },
      {
        "text": "顧客メールを受け取り、日付、送信者メールアドレス、注文IDを抽出してください。日付、送信者メールアドレス、注文IDの情報をJSON形式で返してください。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 顧客メールを受け取り、日付、送信者メールアドレス、注文IDを抽出してください。抽出された情報をJSON形式で返してください。例：{\"date\": \"April 16, 2024\", \"sender_email\": \"john.doe@example.com\", \"order_id\": \"ORD98765\"}。</div><p class='explanation-text'>正解：このプロンプトには明確な指示とJSON出力例の両方が含まれており、高い精度を確保しています。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 顧客メールを受け取り、日付、送信者メールアドレス、注文IDを抽出してください。抽出された情報をJSON形式で返してください。</div><p class='explanation-text'>不正解：JSONを指定しているものの、例がないため曖昧または一貫性のない出力につながる可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 顧客メールを受け取り、日付、送信者メールアドレス、注文IDを抽出してください。抽出された情報を人間が読みやすい形式で返してください。</div><p class='explanation-text'>不正解：人間が読みやすい形式では、JSONでデータを出力するという要件を満たしていません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 顧客メールを受け取り、日付、送信者メールアドレス、注文IDを抽出してください。日付、送信者メールアドレス、注文IDの情報をJSON形式で返してください。</div><p class='explanation-text'>不正解：JSONを指定していますが、例が提示されていないため、LLMへの明確さが低下する可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>希望するJSON出力形式の例を含めることで、LLMに明確なガイダンスが提供され、高い精度と一貫性が確保されます。</p></div>",
    "tags": "Design Applications",
    "summary": "JSON出力例をプロンプトに含めることでLLMへの明確なガイダンスとなり、高精度・一貫性のある出力が得られる"
  },
  {
    "id": 2,
    "question": "ジェネレーティブAIエンジニアが、法的契約書の潜在的リスクを評価する推論システムの設計を任されています。システムはリスクのある条項を強調表示し、代替表現を提案し、重要な条件を要約する必要があります。どのツールを含めるべきですか？（2つ選択）",
    "choices": [
      {
        "text": "契約条項をセマンティックに分析するための埋め込みモデル。",
        "is_correct": true
      },
      {
        "text": "条項をリスクレベルで分類する分類モデル。",
        "is_correct": false
      },
      {
        "text": "ユーザーが契約セクションを確認するためのデシジョンツリー。",
        "is_correct": false
      },
      {
        "text": "法的先例や代替条項テンプレートを取得するレトリーバー。",
        "is_correct": true
      },
      {
        "text": "リスクのある条項をインタラクティブに強調表示するビジュアライゼーションツール。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 契約条項をセマンティックに分析するための埋め込みモデル。</div><p class='explanation-text'>正解：埋め込みモデルは条項のコンテキストを理解し、リスクを識別するのに役立ちます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 法的先例や代替条項テンプレートを取得するレトリーバー。</div><p class='explanation-text'>正解：レトリーバーは提案する変更のためのサポートコンテンツを提供します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 条項をリスクレベルで分類する分類モデル。</div><p class='explanation-text'>不正解：分類だけでは代替表現や要約を提供できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーが契約セクションを確認するためのデシジョンツリー。</div><p class='explanation-text'>不正解：デシジョンツリーは動的なリスク評価や提案には硬すぎます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ リスクのある条項をインタラクティブに強調表示するビジュアライゼーションツール。</div><p class='explanation-text'>不正解：ビジュアライゼーションはユーザビリティを向上させますが、リスク評価や提案には貢献しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>埋め込みモデルとレトリーバーにより、動的なリスク評価、条項の提案、契約書の要約を効果的に実現できます。</p></div>",
    "tags": "Design Applications",
    "summary": "法的契約リスク評価システムには埋め込みモデルとレトリーバーの組み合わせが必要で、それぞれ条項理解と代替案取得を担う"
  },
  {
    "id": 3,
    "question": "コスト意識の高いがん研究スタートアップが、基盤モデル APIを使用したRAGアプリケーションを構築したいと考えています。コスト効率を維持しながら品質の高いアプリケーションを構築するにはどうすればよいですか？",
    "choices": [
      {
        "text": "検索に利用できる関連ドキュメントの数を制限する。",
        "is_correct": false
      },
      {
        "text": "ドメイン固有の小さいLLMを選択する。",
        "is_correct": true
      },
      {
        "text": "顧客が1日に送信できるクエリ数を制限する。",
        "is_correct": false
      },
      {
        "text": "最高のパフォーマンスのために最大のLLMを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ドメイン固有の小さいLLMを選択する。</div><p class='explanation-text'>正解：小さくドメイン固有のLLMはコストを削減しながら、関連性と精度を維持します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 検索に利用できる関連ドキュメントの数を制限する。</div><p class='explanation-text'>不正解：ドキュメントの可用性を減らすと、アプリケーションの品質が低下する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 顧客が1日に送信できるクエリ数を制限する。</div><p class='explanation-text'>不正解：使用量を減らしますが、アプリケーションの品質とコストのバランスは改善されません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 最高のパフォーマンスのために最大のLLMを使用する。</div><p class='explanation-text'>不正解：大きなモデルはスタートアップのニーズに対して不必要にコストが増加します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>小さくドメイン固有のLLMは、スタートアップの特定のニーズに応えながら、品質とコストのバランスを取ります。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "コスト効率重視のRAGアプリにはドメイン特化の小型LLMが最適で、品質とコストのバランスを両立できる"
  },
  {
    "id": 4,
    "question": "ジェネレーティブAIエンジニアが、SnoPen AIの社内ドキュメントに関する質問に答えるRAGアプリケーションを構築しています。ソースドキュメントには広告や会社固有でない情報などの無関係なコンテンツが含まれている可能性があります。無関係な情報をフィルタリングするために推奨されるアプローチはどれですか？",
    "choices": [
      {
        "text": "RAGアプリケーションが非会社コンテンツについての質問への回答を避けるために、そのコンテンツを理解する必要があるため、すべての記事を保持する。",
        "is_correct": false
      },
      {
        "text": "データフィルタリングが実行されない場合でも、表示される情報はすべてSnoPen AIに関するものであるとシステムプロンプトに含める。",
        "is_correct": false
      },
      {
        "text": "アプリケーションがSnoPen AIに関係のない質問には答えないようにするとシステムプロンプトに含める。",
        "is_correct": true
      },
      {
        "text": "すべてのSnoPen AI関連ドキュメントをベクトルデータベースの単一のチャンクに統合する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ アプリケーションがSnoPen AIに関係のない質問には答えないようにするとシステムプロンプトに含める。</div><p class='explanation-text'>正解：これにより、回答が会社固有のコンテンツに限定されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ RAGアプリケーションが非会社コンテンツについての質問への回答を避けるために、そのコンテンツを理解する必要があるため、すべての記事を保持する。</div><p class='explanation-text'>不正解：無関係なドキュメントを保持するとノイズが増加し、検索品質が低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ データフィルタリングが実行されない場合でも、表示される情報はすべてSnoPen AIに関するものであるとシステムプロンプトに含める。</div><p class='explanation-text'>不正解：システムプロンプトは適切なドキュメントフィルタリングの欠如を補うことはできません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ すべてのSnoPen AI関連ドキュメントをベクトルデータベースの単一のチャンクに統合する。</div><p class='explanation-text'>不正解：ドキュメントの統合は粒度と検索精度を低下させます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>システムプロンプトに制約を含めることで、アプリケーションがSnoPen AI関連の質問のみに焦点を当てることが保証されます。</p></div>",
    "tags": "Design Applications",
    "summary": "システムプロンプトで回答範囲をSnoPen AI関連に限定することが、無関係コンテンツのフィルタリングに最も効果的"
  },
  {
    "id": 5,
    "question": "カスタムコードを使用してプロンプトをLLMに送信する前に前処理する効果的な方法は何ですか？",
    "choices": [
      {
        "text": "プロンプトを前処理するより、LLMの出力を後処理して望ましい結果に合わせる方が効果的である",
        "is_correct": false
      },
      {
        "text": "プロンプトを処理する別の関数を持つMLflow PyFuncモデルを作成する",
        "is_correct": true
      },
      {
        "text": "前処理ステップを含めるためにLLMの内部アーキテクチャを直接変更する",
        "is_correct": false
      },
      {
        "text": "LLMは前処理されたプロンプトの例でトレーニングされていないため、プロンプトの前処理にカスタムコードを導入しない方が良い",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ プロンプトを処理する別の関数を持つMLflow PyFuncモデルを作成する</div><p class='explanation-text'>正解：MLflow PyFuncモデルを使用すると、LLMに送信される前にプロンプトをカスタム前処理でき、柔軟性とタスク整合性が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ プロンプトを前処理するより、LLMの出力を後処理して望ましい結果に合わせる方が効果的である</div><p class='explanation-text'>不正解：後処理は有用ですが、前処理によりLLMに送信される前にプロンプトがタスク要件に合致することが保証されます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 前処理ステップを含めるためにLLMの内部アーキテクチャを直接変更する</div><p class='explanation-text'>不正解：LLMの内部アーキテクチャを変更することは、プロンプトの前処理には不要かつ非現実的です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ LLMは前処理されたプロンプトの例でトレーニングされていないため、プロンプトの前処理にカスタムコードを導入しない方が良い</div><p class='explanation-text'>不正解：プロンプトの前処理は一般的であり、LLMの再トレーニングを必要としません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>MLflow PyFuncモデルはプロンプトの前処理に堅牢でスケーラブルなソリューションであり、カスタムロジックを使って入力を望ましい結果に合わせることができます。</p></div>",
    "tags": "Application Development",
    "summary": "LLMへのプロンプト前処理にはMLflow PyFuncモデルを使用するのが最適で、柔軟なカスタムロジックを組み込める"
  },
  {
    "id": 6,
    "question": "ジェネレーティブAIエンジニアが、大規模な顧客サポートチケットデータセット向けのRAGアプリケーションを開発しています。しかし、アプリケーションが不完全な応答を生成しており、回答が途中で切れたり詳細が不足したりしています。この問題を軽減するためにエンジニアが採用すべき戦略はどれですか？（2つ選択）",
    "choices": [
      {
        "text": "LLMがより管理しやすいコンテキストを確保するために、ドキュメントのチャンクサイズを小さくする。",
        "is_correct": true
      },
      {
        "text": "コンテキストの断片化を減らすために、ドキュメントのチャンクサイズを大きくする。",
        "is_correct": false
      },
      {
        "text": "より大きな埋め込みモデルを使用して、埋め込みとドキュメント検索の品質を向上させる。",
        "is_correct": false
      },
      {
        "text": "応答エラーを最小限にするために、取得するチャンク数を制限する。",
        "is_correct": false
      },
      {
        "text": "取得時のコンテキスト関連性を向上させるために、チャンクにセグメントラベル（セクションヘッダーなど）を追加する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ LLMがより管理しやすいコンテキストを確保するために、ドキュメントのチャンクサイズを小さくする。</div><p class='explanation-text'>正解：チャンクサイズを小さくすることで、LLMがコンテキストウィンドウ内で関連チャンクを完全に処理・取得でき、応答の完全性が向上します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 取得時のコンテキスト関連性を向上させるために、チャンクにセグメントラベル（セクションヘッダーなど）を追加する。</div><p class='explanation-text'>正解：セグメントラベルを含めることでLLMのチャンクされたコンテキストの理解が高まり、不完全または無関係な応答の可能性が減少します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンテキストの断片化を減らすために、ドキュメントのチャンクサイズを大きくする。</div><p class='explanation-text'>不正解：チャンクサイズを大きくすると、LLMのトークン制限を超えるリスクがあり、不完全な応答の問題が悪化します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より大きな埋め込みモデルを使用して、埋め込みとドキュメント検索の品質を向上させる。</div><p class='explanation-text'>不正解：より大きな埋め込みモデルは検索品質を向上させますが、コンテキスト制限による不完全な応答には直接対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答エラーを最小限にするために、取得するチャンク数を制限する。</div><p class='explanation-text'>不正解：取得するチャンク数を減らすと不完全なコンテキストにつながり、問題が悪化する可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>チャンクサイズを小さくするとコンテキストがLLMのトークン制限に収まり、セグメントラベルを追加すると完全な応答を生成するためのより明確な構造が提供されます。</p></div>",
    "tags": "Data Preparation",
    "summary": "不完全な応答にはチャンクサイズの縮小とセグメントラベル追加の組み合わせで対処し、トークン制限とコンテキスト理解を改善する"
  },
  {
    "id": 7,
    "question": "ジェネレーティブAIエンジニアが、オープンソースの大規模言語モデル（LLM）に基づくアプリケーションの開発を任されています。大きなコンテキストウィンドウを持つ基盤LLMが必要です。どのモデルがこのニーズに合いますか？",
    "choices": [
      {
        "text": "Llama2-70B",
        "is_correct": false
      },
      {
        "text": "DistilBERT",
        "is_correct": false
      },
      {
        "text": "DBRX",
        "is_correct": false
      },
      {
        "text": "MPT-30B",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ MPT-30B</div><p class='explanation-text'>正解：MPT-30Bは大きなコンテキストウィンドウを持つオープンソースのLLMであり、広範な入力テキストの処理に適しています。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Llama2-70B</div><p class='explanation-text'>不正解：Llama2-70Bは強力ですが、MPT-30Bほど大きなコンテキストウィンドウを持っていません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ DistilBERT</div><p class='explanation-text'>不正解：DistilBERTはBERTの小型・蒸留版であり、大きなコンテキストウィンドウを持っていません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ DBRX</div><p class='explanation-text'>不正解：DatabricksのDatabricksIQはこのユースケースには適していません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>MPT-30Bは大きなコンテキストウィンドウを必要とするアプリケーション向けに最適化されたオープンソースモデルであり、この要件に最適な選択肢です。</p></div>",
    "tags": "Application Development",
    "summary": "大きなコンテキストウィンドウが必要なオープンソースLLMにはMPT-30Bが最適で、長い入力テキストの処理に優れている"
  },
  {
    "id": 8,
    "question": "ジェネレーティブAIエンジニアが、eコマースプラットフォームの不正検知システムを開発しています。このシステムは、テキスト説明、顧客履歴、取引メタデータに基づいて疑わしい取引にフラグを立てるためにLLMを使用します。エンジニアは複数のモデル実験を追跡し、パフォーマンス指標を記録し、選択したモデルを簡単に本番環境にデプロイできるようにしたいと考えています。どのアプローチを使用すべきですか？",
    "choices": [
      {
        "text": "クラウドベースのドキュメント管理システムを使用して実験とデプロイメントの手順を追跡する。",
        "is_correct": false
      },
      {
        "text": "TensorFlowの組み込みロギングとデプロイメントツールを使用する。",
        "is_correct": false
      },
      {
        "text": "スプレッドシートを使用して実験結果を手動で記録し、モデル設定のログを維持する。",
        "is_correct": false
      },
      {
        "text": "カスタムPythonスクリプトを記述してローカルファイルシステムに実験ログを保存し、Flaskを使用してモデルをデプロイする。",
        "is_correct": false
      },
      {
        "text": "MLflowを使用してモデル実験のログを記録し、パフォーマンス指標を追跡し、本番環境へのデプロイメントを効率化する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ MLflowを使用してモデル実験のログを記録し、パフォーマンス指標を追跡し、本番環境へのデプロイメントを効率化する。</div><p class='explanation-text'>正解：MLflowは機械学習ライフサイクルの管理のために設計されており、実験追跡、アーティファクトのログ記録、簡単なデプロイメントを可能にします。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クラウドベースのドキュメント管理システムを使用して実験とデプロイメントの手順を追跡する。</div><p class='explanation-text'>不正解：クラウドベースのドキュメントシステムは機械学習実験やデプロイメントの追跡のために設計されていません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ TensorFlowの組み込みロギングとデプロイメントツールを使用する。</div><p class='explanation-text'>不正解：TensorFlowのツールはディープラーニングモデルに有用ですが、MLflowのような汎用ライフサイクル管理機能が欠けています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ スプレッドシートを使用して実験結果を手動で記録し、モデル設定のログを維持する。</div><p class='explanation-text'>不正解：手動追跡はエラーが発生しやすく、非効率で、本番レベルのワークフローには適していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ カスタムPythonスクリプトを記述してローカルファイルシステムに実験ログを保存し、Flaskを使用してモデルをデプロイする。</div><p class='explanation-text'>不正解：カスタムスクリプトは追跡とデプロイメントのためにMLflowが提供する堅牢性とスケーラビリティに欠けています。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>MLflowは実験追跡、パフォーマンス指標のログ記録、選択したモデルのデプロイのための完全なソリューションを提供し、機械学習システムの効率的な構築とデプロイに最適です。</p></div>",
    "tags": "Application Development",
    "summary": "MLflowは実験追跡・指標記録・デプロイを一元管理でき、機械学習ライフサイクル全体を効率化する標準ツール"
  },
  {
    "id": 9,
    "question": "ジェネレーティブAIエンジニアが、RAGアプリケーション向けに法的テキストをチャンキングしてインデックス化する作業を任されています。法的テキストにはトークン制限を超える長いセクションが含まれています。最適なチャンキング戦略は何ですか？",
    "choices": [
      {
        "text": "コンテキストの保持を確保するために、すべてのチャンクを30%オーバーラップさせる。",
        "is_correct": false
      },
      {
        "text": "見出しとサブ見出しに基づいてテキストを論理セクションに分割し、チャンクがトークン制限内に収まるようにする。",
        "is_correct": true
      },
      {
        "text": "各ドキュメントを単一のチャンクとして処理する。",
        "is_correct": false
      },
      {
        "text": "構造を考慮せずにテキストを均等サイズのチャンクに分割する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 見出しとサブ見出しに基づいてテキストを論理セクションに分割し、チャンクがトークン制限内に収まるようにする。</div><p class='explanation-text'>正解：論理的なチャンキングはコンテキストを保持し、トークン制約への準拠を確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンテキストの保持を確保するために、すべてのチャンクを30%オーバーラップさせる。</div><p class='explanation-text'>不正解：過度のオーバーラップは関連性を必ずしも向上させずに冗長性を生み出します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 各ドキュメントを単一のチャンクとして処理する。</div><p class='explanation-text'>不正解：トークン制限を超える単一チャンクは検索と処理に実行不可能です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 構造を考慮せずにテキストを均等サイズのチャンクに分割する。</div><p class='explanation-text'>不正解：均等サイズのチャンクは意味のあるセクションを分断するリスクがあり、関連性が低下します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>論理的なチャンキングにより、トークン制限を守りながら意味のあるコンテンツが保持され、検索品質が最適化されます。</p></div>",
    "tags": "Data Preparation",
    "summary": "法的文書のチャンキングは見出し・サブ見出しに基づく論理的な分割が最適で、コンテキスト保持とトークン制限遵守を両立"
  },
  {
    "id": 10,
    "question": "ジェネレーティブAIエンジニアが、レストランのオンライン予約カスタマーエクスペリエンスを向上させるLLMベースのソリューションを構築しようとしています。このソリューションの目標は、パーソナライズされたインタラクションを維持しながら、人間の介入や電話へのエスカレーションを最小限に抑えることです。エンジニアはLLMへの入力データとLLMが実行すべきタスクを定義する必要があります。目標をサポートする入力/出力ペアはどれですか？",
    "choices": [
      {
        "text": "入力：オンラインチャットログ；出力：予約詳細の選択肢を表すボタン",
        "is_correct": true
      },
      {
        "text": "入力：顧客レビュー；出力：レビュー感情の分類",
        "is_correct": false
      },
      {
        "text": "入力：オンラインチャットログ；出力：キャンセルオプション",
        "is_correct": false
      },
      {
        "text": "入力：オンラインチャットログ；出力：ユーザーごとにチャットログをグループ化し、各ユーザーのインタラクションを要約する",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 入力：オンラインチャットログ；出力：予約詳細の選択肢を表すボタン</div><p class='explanation-text'>オンラインチャットログを入力として予約詳細の選択肢を表すボタンを生成することは、パーソナライズされたインタラクションを維持しながら人間の介入や電話へのエスカレーションを最小限に抑えるという目標に沿っています。定義済みの選択肢を提供することで、一般的な問い合わせへの応答を自動化し、顧客を予約プロセスに誘導できます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 入力：顧客レビュー；出力：レビュー感情の分類</div><p class='explanation-text'>顧客レビューに基づいてレビュー感情を分類することは、予約に関するオンラインカスタマーエクスペリエンス向上の文脈で人間の介入や電話を最小限に抑えるという目標とは直接関連していません。このタスクは感情分析に重点を置いており、問い合わせへの自動応答ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 入力：オンラインチャットログ；出力：キャンセルオプション</div><p class='explanation-text'>オンラインチャットログを入力としてキャンセルオプションを生成することは、パーソナライズされたインタラクションを維持しながら人間の介入や電話を最小限に抑えるという目標を直接支援しません。キャンセルオプションを提供することは重要ですが、主な焦点は予約に関する一般的な問い合わせへの応答の自動化であるべきです。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 入力：オンラインチャットログ；出力：ユーザーごとにチャットログをグループ化し、各ユーザーのインタラクションを要約する</div><p class='explanation-text'>チャットログをユーザーごとにグループ化してインタラクションを要約することは、パーソナライズされたインタラクションを維持しながら人間の介入や電話を最小限に抑えるという目標を直接支援しません。このタスクはデータの整理に重点を置いており、一般的な問い合わせへの自動応答ではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>予約問い合わせに対してインタラクティブな選択肢を生成することは、パーソナライズを維持しながらエスカレーションを最小限に抑えるという目標に沿っています。</p></div>",
    "tags": "Design Applications",
    "summary": "予約chatbotの目標に沿うには、チャットログを入力として予約選択肢ボタンを出力する設計が人間介入を最小化できる"
  },
  {
    "id": 11,
    "question": "ジェネレーティブAIエンジニアが、最新の株式ニュース記事に関する質問に答えるシステムを構築しています。金融ニュースへの関連性を確保する上で役立たないものはどれですか？",
    "choices": [
      {
        "text": "より高い関連性分析を可能にするために、質問の処理速度を向上させるコンピューティングを増やす。",
        "is_correct": false
      },
      {
        "text": "不適切な言語をスクリーニングするプロファニティフィルターを実装する。",
        "is_correct": true
      },
      {
        "text": "ユーザーに送信する前に問題のある出力を修正するために手動レビューを組み込む。",
        "is_correct": false
      },
      {
        "text": "金融セクターに合わせたコンテンツフィルターのポリシーを含む包括的なガードレールフレームワークを実装する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 不適切な言語をスクリーニングするプロファニティフィルターを実装する。</div><p class='explanation-text'>正解：プロファニティフィルターは金融ニュースへの関連性を高めるものではなく、ドメイン固有のコンテンツではなく言語の安全性に焦点を当てています。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より高い関連性分析を可能にするために、質問の処理速度を向上させるコンピューティングを増やす。</div><p class='explanation-text'>不正解：コンピューティング速度はパフォーマンスを向上させますが、コンテンツの関連性には直接影響しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーに送信する前に問題のある出力を修正するために手動レビューを組み込む。</div><p class='explanation-text'>不正解：手動レビューは出力が具体的で適切であることを確認することで関連性を向上させます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 金融セクターに合わせたコンテンツフィルターのポリシーを含む包括的なガードレールフレームワークを実装する。</div><p class='explanation-text'>不正解：カスタマイズされたコンテンツフィルターは、不適切または無関係なコンテンツをフィルタリングすることで関連性を確保します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>プロファニティフィルターは言語の適切さのみに対処するため、金融ニュース出力の関連性には影響しません。</p></div>",
    "tags": "Governance",
    "summary": "プロファニティフィルターは言語の安全性のみを担保し、金融ニュースへのコンテンツ関連性向上には寄与しない"
  },
  {
    "id": 12,
    "question": "ジェネレーティブAIエンジニアが、カスタムMLflow PyFuncモデルを使用して中間結果を返すアプリケーションのデプロイを任されています。シークレットと認証情報をエンドポイントに渡すにはどのように設定すればよいですか？",
    "choices": [
      {
        "text": "環境変数を使用して認証情報を追加する",
        "is_correct": true
      },
      {
        "text": "Databricks Feature Store APIを使用して変数を渡す",
        "is_correct": false
      },
      {
        "text": "spark.conf.set()を使用する",
        "is_correct": false
      },
      {
        "text": "シークレットをプレーンテキストで渡す",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 環境変数を使用して認証情報を追加する</div><p class='explanation-text'>正解：環境変数はアプリケーションにシークレットや認証情報を渡す安全でスケーラブルな方法です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Databricks Feature Store APIを使用して変数を渡す</div><p class='explanation-text'>不正解：Feature Store APIはフィーチャーデータの管理と取得のために使用されており、シークレットや認証情報の渡し方ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ spark.conf.set()を使用する</div><p class='explanation-text'>不正解：spark.conf.set()は通常Spark設定に使用されており、シークレットや認証情報を安全に渡すには適していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ シークレットをプレーンテキストで渡す</div><p class='explanation-text'>不正解：シークレットをプレーンテキストで渡すことは重大なセキュリティリスクをもたらし、推奨されません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>環境変数はシークレットや認証情報をコードに公開せずに安全に処理することを保証します。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "MLflowエンドポイントへのシークレット・認証情報の渡し方は環境変数が最も安全でスケーラブルな方法"
  },
  {
    "id": 13,
    "question": "ジェネレーティブAIエンジニアが、モンスタートラックチームのためのエージェントベースのLLMシステムを作成しています。このシステムはチームに関するテキストベースの質問に答えたり、APIコールでイベント日程を調べたり、チームの最新順位のテーブルをクエリしたりできます。ジェネレーティブAIエンジニアはこれらの機能をシステムにどのように設計すればよいですか？",
    "choices": [
      {
        "text": "エージェントの利用可能なツールをリストしたシステムプロンプトを作成し、クエリを解決するために複数の呼び出しを実行するエージェントシステムにバンドルする。",
        "is_correct": true
      },
      {
        "text": "クエリに応じて「RAG」、「API」、「TABLE」と返すようLLMに指示し、テキスト解析と条件文を使用してクエリを解決する。",
        "is_correct": false
      },
      {
        "text": "すべての可能なイベント日程とテーブル情報をシステムプロンプトに含めて構築する。一般的なテキスト質問をRAGアーキテクチャで検索し、それ以外はシステムプロンプトの情報を活用する。",
        "is_correct": false
      },
      {
        "text": "モンスタートラックチームに関するPDFドキュメントをベクトルストアに取り込み、RAGアーキテクチャでクエリする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ エージェントの利用可能なツールをリストしたシステムプロンプトを作成し、クエリを解決するために複数の呼び出しを実行するエージェントシステムにバンドルする。</div><p class='explanation-text'>正解：エージェントのツールを定義して異なるクエリを処理することで、システムが多様な質問の種類を効果的に処理できます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリに応じて「RAG」、「API」、「TABLE」と返すようLLMに指示し、テキスト解析と条件文を使用してクエリを解決する。</div><p class='explanation-text'>不正解：この方法はスケーラビリティが欠け、エージェントベースの設計に沿っていません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ すべての可能なイベント日程とテーブル情報をシステムプロンプトに含めて構築する。一般的なテキスト質問をRAGアーキテクチャで検索し、それ以外はシステムプロンプトの情報を活用する。</div><p class='explanation-text'>不正解：すべての情報をシステムプロンプトに含めることは効率性とスケーラビリティを低下させます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モンスタートラックチームに関するPDFドキュメントをベクトルストアに取り込み、RAGアーキテクチャでクエリする。</div><p class='explanation-text'>不正解：このアプローチはテキストベースの質問のみを処理し、APIやテーブルクエリには対応できません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>テキストクエリ、APIルックアップ、テーブルクエリを処理するツールを持つエージェントを使用することで、多様なシステム要件に対して柔軟性とスケーラビリティが確保されます。</p></div>",
    "tags": "Application Development",
    "summary": "複数種の操作（テキスト・API・SQL）を処理するにはエージェントシステムにツールとして設計するのが最も柔軟でスケーラブル"
  },
  {
    "id": 14,
    "question": "ジェネレーティブAIエンジニアが、カスタマーサポートチャットボットのプロンプトと応答ペアを評価する必要があります。モデルのタスクとの整合性を確保するために最も重要な基準はどれですか？（2つ選択）",
    "choices": [
      {
        "text": "クエリのすべての側面に対処する応答の完全性。",
        "is_correct": true
      },
      {
        "text": "コンテキストを提供するためのプロンプトの冗長性。",
        "is_correct": false
      },
      {
        "text": "顧客のクエリに対するプロンプトの関連性。",
        "is_correct": true
      },
      {
        "text": "計算コストを削減するためのトークン使用効率。",
        "is_correct": false
      },
      {
        "text": "多様性のための応答のランダムサンプリング。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ クエリのすべての側面に対処する応答の完全性。</div><p class='explanation-text'>正解：完全な応答はチャットボットの有用性とユーザー満足度を向上させます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 顧客のクエリに対するプロンプトの関連性。</div><p class='explanation-text'>正解：関連性の高いプロンプトにより、システムが意味のある応答を生成することが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンテキストを提供するためのプロンプトの冗長性。</div><p class='explanation-text'>不正解：冗長性はクエリの焦点を薄める可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 計算コストを削減するためのトークン使用効率。</div><p class='explanation-text'>不正解：コストにとって重要ですが、トークン使用量は整合性を確保しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 多様性のための応答のランダムサンプリング。</div><p class='explanation-text'>不正解：ランダムサンプリングは整合性や品質を保証しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>関連性の高いプロンプトと完全な応答により、チャットボットがタスクと整合し、正確で有用な出力を提供することが確保されます。</p></div>",
    "tags": "Data Preparation",
    "summary": "チャットボットのプロンプト-応答ペア評価では、プロンプトの関連性と応答の完全性の2軸が整合性確保に最重要"
  },
  {
    "id": 15,
    "question": "ジェネレーティブAIエンジニアが、LLMとベクトルストアを統合したカスタマーサポート向けRAGアプリケーションをデプロイする任務を負っています。アプリケーションはデータプライバシー規制に準拠する必要があります。どのコンプライアンス対策が重要ですか？（2つ選択）",
    "choices": [
      {
        "text": "機密情報を保護するために、保存中および転送中のデータを暗号化する。",
        "is_correct": true
      },
      {
        "text": "アプリケーションへのアクセスを制御するためにAPIキー認証を使用する。",
        "is_correct": true
      },
      {
        "text": "初期デプロイメント中はアプリケーションへの無制限アクセスを許可する。",
        "is_correct": false
      },
      {
        "text": "暗号化をスキップしてプライベートネットワークアクセスに依存する。",
        "is_correct": false
      },
      {
        "text": "ストレージを簡素化するためにパブリックベクトルストアを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 機密情報を保護するために、保存中および転送中のデータを暗号化する。</div><p class='explanation-text'>正解：暗号化はデータセキュリティを確保し、プライバシー規制を満たします。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ アプリケーションへのアクセスを制御するためにAPIキー認証を使用する。</div><p class='explanation-text'>正解：APIキー認証により、認可されたユーザーのみがシステムにアクセスできることが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 初期デプロイメント中はアプリケーションへの無制限アクセスを許可する。</div><p class='explanation-text'>不正解：無制限アクセスはコンプライアンスとセキュリティを損ないます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 暗号化をスキップしてプライベートネットワークアクセスに依存する。</div><p class='explanation-text'>不正解：プライベートネットワークだけではデータセキュリティやコンプライアンスは保証されません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ストレージを簡素化するためにパブリックベクトルストアを使用する。</div><p class='explanation-text'>不正解：パブリックベクトルストアは機密データを公開することでデータプライバシー規制に違反する可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>暗号化とAPIキー認証は、カスタマーサポートアプリケーションのコンプライアンスとセキュリティを確保するために不可欠です。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "データプライバシー規制準拠には保存・転送中の暗号化とAPIキー認証の2つが必須のコンプライアンス対策"
  },
    {
    "id": 16,
    "question": "ジェネレーティブAIエンジニアが、患者向けの医療チャットボットを開発しています。患者の質問が医療緊急事態でない場合、チャットボットは詳細情報を求め、関連する記事を提案すべきです。質問が緊急の場合は、患者を緊急サービスに誘導すべきです。「2日間にわたって激しい頭痛とめまいを経験しています」という入力に対して、最も適切な応答はどれですか？",
    "choices": [
      { "text": "頭痛はつらいですね。早く良くなってください！", "is_correct": false },
      { "text": "年齢、最近の活動、頭痛とめまいとともに気になっている他の症状を教えてください。", "is_correct": false },
      { "text": "地元の緊急サービスに電話してください。", "is_correct": true },
      { "text": "関連する記事をいくつかご紹介します。読んだ後に質問があればお知らせください。", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 地元の緊急サービスに電話してください。</div><p class='explanation-text'>正解：激しい頭痛とめまいは医療緊急事態を示している可能性があるため、緊急サービスへの誘導が最も適切な応答です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 頭痛はつらいですね。早く良くなってください！</div><p class='explanation-text'>不正解：この応答はカジュアルすぎて、症状の緊急性に対処していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 年齢、最近の活動、頭痛とめまいとともに気になっている他の症状を教えてください。</div><p class='explanation-text'>不正解：詳細情報の収集は有用ですが、潜在的な緊急事態には適切ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 関連する記事をいくつかご紹介します。読んだ後に質問があればお知らせください。</div><p class='explanation-text'>不正解：記事の提供だけでは症状の重大さに対処していません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>症状が潜在的な緊急事態を示唆する場合、チャットボットはユーザーに緊急サービスへの連絡を促すことで安全を優先する必要があります。</p></div>",
    "tags": "Governance",
    "summary": "医療chatbotは激しい頭痛・めまい等の緊急症状には情報収集より緊急サービス誘導を最優先すべき"
  },
  {
    "id": 17,
    "question": "ジェネレーティブAIエンジニアが、社員が社内ナレッジベースから回答を取得するためのRAGアプリケーションを作成しました。現在、システムのパフォーマンスを正式に評価したいと考えています。システムをどのように評価すべきですか？",
    "choices": [
      { "text": "同じデータで複数のLLMをベンチマークし、仕事に最適なLLMを選択する。", "is_correct": false },
      { "text": "コサイン類似度スコアを使用して、最終的に生成された回答の品質を包括的に評価する。", "is_correct": false },
      { "text": "LLM-as-a-judgeを使用して、生成された最終的な回答の品質を評価する。", "is_correct": false },
      { "text": "検索と生成を別々にテストするデータセットを作成する。評価にMLflowの組み込み評価指標を使用する。", "is_correct": true }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 検索と生成を別々にテストするデータセットを作成する。評価にMLflowの組み込み評価指標を使用する。</div><p class='explanation-text'>正解：検索と生成を別々にテストすることで、両方のコンポーネントの包括的な評価が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 同じデータで複数のLLMをベンチマークし、仕事に最適なLLMを選択する。</div><p class='explanation-text'>不正解：LLMのベンチマークは検索固有のパフォーマンスに対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コサイン類似度スコアを使用して、最終的に生成された回答の品質を包括的に評価する。</div><p class='explanation-text'>不正解：コサイン類似度は検索品質を測定しますが、生成された回答を完全に評価しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ LLM-as-a-judgeを使用して、生成された最終的な回答の品質を評価する。</div><p class='explanation-text'>不正解：LLM-as-a-judge評価は主観的で、作成されたデータセットより信頼性が低くなります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>作成されたデータセットとMLflow指標で検索と生成を別々に評価することで、パフォーマンス向上への体系的なアプローチが提供されます。</p></div>",
    "tags": "Evaluation and Monitoring",
    "summary": "RAGシステム評価は検索と生成を分離したデータセットを作成し、MLflow組み込み指標で体系的に行うのが最適"
  },
  {
    "id": 18,
    "question": "ジェネレーティブAIエンジニアが、ユーザークエリに関連する1918年のニュース記事を検索して要約するLLMシステムを作成しています。しかし、要約にはしばしば生成方法の説明が含まれており、望ましくありません。この問題を解決するためにエンジニアはどの変更を実装すべきですか？",
    "choices": [
      { "text": "システムやユーザープロンプトに望ましい出力フォーマットのフューショット例を提供する。", "is_correct": true },
      { "text": "LLMの出力を改行文字で分割して、要約の説明を切り捨てる。", "is_correct": false },
      { "text": "ドキュメントのインジェストロジックを見直し、ニュース記事が適切にインジェストされていることを確認する。", "is_correct": false },
      { "text": "ニュース記事のチャンクサイズを調整するか、異なる埋め込みモデルを試す。", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ システムやユーザープロンプトに望ましい出力フォーマットのフューショット例を提供する。</div><p class='explanation-text'>正解：フューショット例はLLMに望ましい要約フォーマットのみを生成するよう誘導し、不要な説明を軽減します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ LLMの出力を改行文字で分割して、要約の説明を切り捨てる。</div><p class='explanation-text'>不正解：改行で出力を分割すると要約の重要な部分が切れる可能性があり、根本問題に対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ドキュメントのインジェストロジックを見直し、ニュース記事が適切にインジェストされていることを確認する。</div><p class='explanation-text'>不正解：インジェストロジックは入力品質を決定しますが、不要な出力説明には責任がありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ニュース記事のチャンクサイズを調整するか、異なる埋め込みモデルを試す。</div><p class='explanation-text'>不正解：チャンクサイズや埋め込みモデルは検索品質に影響しますが、出力フォーマットには影響しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>フューショット例を提供することで正しいフォーマットが示され、LLMが追加説明なしに簡潔な要約を出力することが確保されます。</p></div>",
    "tags": "Design Applications",
    "summary": "LLMの出力に不要な説明が混入する問題には、フューショット例でフォーマットを明示するのが最も効果的"
  },
  {
    "id": 19,
    "question": "ジェネレーティブAIエンジニアが、リアルタイムのアップデートと分析を提供するLLM搭載のライブスポーツ実況プラットフォームを設計しています。このプラットフォームは古い記事ではなく、ライブのゲームスコアに基づいてサマリーを生成することを目指しています。ゲーム分析のためのリアルタイムデータアクセスを可能にするツールはどれですか？",
    "choices": [
      { "text": "Feature Serving", "is_correct": true },
      { "text": "基盤モデル API", "is_correct": false },
      { "text": "AutoML", "is_correct": false },
      { "text": "DatabricksIQ", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ Feature Serving</div><p class='explanation-text'>正解：Feature Servingはデータへのリアルタイムアクセスを可能にし、ライブコメンタリーと分析に適しています。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 基盤モデル API</div><p class='explanation-text'>不正解：基盤モデル APIはLLM機能を提供しますが、リアルタイムデータの取り込みや提供は行いません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ AutoML</div><p class='explanation-text'>不正解：AutoMLはモデルのトレーニングとデプロイに使用されますが、リアルタイムデータ提供には対応していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ DatabricksIQ</div><p class='explanation-text'>不正解：DatabricksIQはアプリケーション向けのリアルタイムデータ取り込みや提供に特化していません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Feature Servingはリアルタイムデータにアクセスするための理想的なツールであり、プラットフォームがユーザーに最新の分析を提供することを確保します。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "リアルタイムデータ（ライブスコア等）へのアクセスにはFeature Servingが最適で、LLMへのリアルタイム情報供給を実現"
  },
  {
    "id": 20,
    "question": "マルチステップのLLMベースワークフローを構築するための最も適切なライブラリはどれですか？",
    "choices": [
      { "text": "PySpark", "is_correct": false },
      { "text": "TensorFlow", "is_correct": false },
      { "text": "LangChain", "is_correct": true },
      { "text": "Pandas", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ LangChain</div><p class='explanation-text'>正解：LangChainはプロンプト、チェーン、エージェントのためのツールを含む、LLMを含むマルチステップワークフローの構築のために設計されています。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ PySpark</div><p class='explanation-text'>不正解：PySparkは分散コンピューティングフレームワークであり、LLMベースのワークフロー開発を目的としていません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ TensorFlow</div><p class='explanation-text'>不正解：TensorFlowはディープラーニングフレームワークですが、マルチステップのLLMベースワークフローには特化していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Pandas</div><p class='explanation-text'>不正解：Pandasはデータ操作と分析に使用されますが、LLMワークフローの構築はサポートしていません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>LangChainはLLMを使用した複雑なワークフローを作成するために必要なツールを提供し、このタスクに最も適したライブラリです。</p></div>",
    "tags": "Application Development",
    "summary": "マルチステップLLMワークフローの構築にはLangChainが最適で、プロンプト・チェーン・エージェントを統合的に扱える"
  },
  {
    "id": 21,
    "question": "ジェネレーティブAIエンジニアが、本番環境のDeltaテーブルに保存された顧客トランザクションデータを使用するRAGアプリケーションの強化を任されています。チームはセキュリティを損なうことなく、また本番パフォーマンスに影響を与えずに、リアルなデータを使用して開発環境で変更をテストする必要があります。Databricksにおける最善のアプローチは何ですか？",
    "choices": [
      { "text": "リアルタイムテストのために開発環境を本番のDeltaテーブルに直接ポイントする。", "is_correct": false },
      { "text": "本番データのスキーマと一般的な特性を模倣したDatabricks内で生成された合成データセットを使用する。", "is_correct": false },
      { "text": "DatabricksのDelta Sharingを使用して、開発環境から本番Deltaテーブルへの限定クエリアクセスを提供する。", "is_correct": false },
      { "text": "変更なしにDeltaテーブル全体を開発環境にコピーする。", "is_correct": false },
      { "text": "DatabricksのUnity Catalogを使用して、アクセス制御と機密フィールドのデータマスキングを備えた開発専用の本番データビューを作成する。", "is_correct": true }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ DatabricksのUnity Catalogを使用して、アクセス制御と機密フィールドのデータマスキングを備えた開発専用の本番データビューを作成する。</div><p class='explanation-text'>正解：Unity Catalogはセキュアなビューとマスキングルールの作成をサポートし、機密情報を損なうことなく開発が安全にリアルなデータにアクセスできます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ リアルタイムテストのために開発環境を本番のDeltaテーブルに直接ポイントする。</div><p class='explanation-text'>不正解：本番への直接アクセスはライブパフォーマンスへの影響と機密データ侵害リスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 本番データのスキーマと一般的な特性を模倣したDatabricks内で生成された合成データセットを使用する。</div><p class='explanation-text'>不正解：合成データは実世界データのニュアンスを捉えられず、信頼性の低いテストにつながります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ DatabricksのDelta Sharingを使用して、開発環境から本番Deltaテーブルへの限定クエリアクセスを提供する。</div><p class='explanation-text'>不正解：Delta Sharingは外部パートナー向けであり、内部開発ワークフローには適していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 変更なしにDeltaテーブル全体を開発環境にコピーする。</div><p class='explanation-text'>不正解：匿名化せずにデータをコピーすると機密情報公開のリスクがあり、ストレージとコストのオーバーヘッドが増加します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Unity Catalogを使用して本番データのマスクされたビューを作成することで、開発環境が安全でセキュアかつコンプライアンスに準拠しながら、テストのためのリアルなデータが提供されます。</p></div>",
    "tags": "Governance",
    "summary": "開発環境での安全な本番データアクセスにはUnity CatalogのアクセスコントロールとデータマスキングによるViewが最適"
  },
  {
    "id": 22,
    "question": "ジェネレーティブAIエンジニアが、次のコードを使用してベクトルストアのセットアップをテストしています：from databricks.vector_search.client import VectorSearchClient vsc = VectorSearchClient() vsc.create_endpoint( name=\"vector_search_test\", endpoint_type=\"STANDARD\" ) Databricks管理の埋め込みとデフォルト埋め込みモデルを使用する意図があると仮定すると、次に呼び出すべき論理的な関数は何ですか？",
    "choices": [
      { "text": "vsc.similarity_search()", "is_correct": false },
      { "text": "vsc.create_direct_access_index()", "is_correct": false },
      { "text": "vsc.create_delta_sync_index()", "is_correct": true },
      { "text": "vsc.get_index()", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ vsc.create_delta_sync_index()</div><p class='explanation-text'>正解：この関数はDelta同期インデックスを作成し、デフォルト設定でのDatabricks管理ワークフローでの埋め込み管理に最適です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ vsc.similarity_search()</div><p class='explanation-text'>不正解：類似検索は既存のインデックスが必要であり、ワークフローのこの段階では実行できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ vsc.create_direct_access_index()</div><p class='explanation-text'>不正解：一般的な使用には適していますが、Databricks管理の埋め込みに関する問題の意図に沿っていません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ vsc.get_index()</div><p class='explanation-text'>不正解：これは既存のインデックスを取得しますが、まだインデックスが作成されていません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Delta同期インデックスの作成により、DeltaテーブルとのシームレスなEmbedding同期が可能になり、Databricks管理ワークフローとデフォルト埋め込み設定に沿っています。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "Databricks管理の埋め込みでVector Searchエンドポイント作成後の次ステップはcreate_delta_sync_index()の呼び出し"
  },
  {
    "id": 23,
    "question": "ジェネレーティブAIエンジニアが、最新のニュース記事と株価を必要とするアプリケーションを作成しています。システムをどのようにアーキテクチャ設計すべきですか？",
    "choices": [
      { "text": "株価のDeltaテーブルをクエリし、LLMを使用して株価変動分析の検索クエリを生成する。", "is_correct": false },
      { "text": "LLMを使用してニュース記事を要約し、株価ティッカーを調べて株価を取得する。", "is_correct": false },
      { "text": "ニュース記事と株価をダウンロードしてベクトルストアに保存する。RAGアーキテクチャを使用してランタイムで検索・生成を行う。", "is_correct": false },
      { "text": "DeltaテーブルのSQLクエリとウェブ検索のためのツールを持つエージェントを作成する。取得した値をLLMに提供して応答を生成する。", "is_correct": true }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ DeltaテーブルのSQLクエリとウェブ検索のためのツールを持つエージェントを作成する。取得した値をLLMに提供して応答を生成する。</div><p class='explanation-text'>正解：SQLクエリとウェブ検索のツールを持つエージェントシステムは、リアルタイム応答のための構造化・非構造化データの検索を効率的に統合します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 株価のDeltaテーブルをクエリし、LLMを使用して株価変動分析の検索クエリを生成する。</div><p class='explanation-text'>不正解：検索クエリの生成はデータ検索と応答生成を効率化しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ LLMを使用してニュース記事を要約し、株価ティッカーを調べて株価を取得する。</div><p class='explanation-text'>不正解：このプロセスはデータ検索と生成を効率的に統合しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ニュース記事と株価をダウンロードしてベクトルストアに保存する。RAGアーキテクチャを使用してランタイムで検索・生成を行う。</div><p class='explanation-text'>不正解：RAGは検索に効果的ですが、株価のリアルタイム更新を組み込んでいません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>SQLクエリとウェブ検索を組み合わせたエージェントベースアーキテクチャにより、株価とニュースのリアルタイム統合が確保され、包括的な応答が得られます。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "リアルタイム株価とニュース取得にはSQL+ウェブ検索ツールを持つエージェントアーキテクチャが最適設計"
  },
  {
    "id": 24,
    "question": "ジェネレーティブAIエンジニアが、LLMベースの質問応答アプリケーションの構築を依頼されました。アプリケーションは頻繁に公開される新しいドキュメントを考慮する必要があります。最小限のコスト、開発工数、運用コストでこのアプリケーションを構築したいと考えています。これらの要件を満たすチェーニングコンポーネントと設定の組み合わせはどれですか？",
    "choices": [
      { "text": "LLMは最新の回答を提供するために新しいドキュメントで頻繁にファインチューニングされる必要がある。", "is_correct": false },
      { "text": "アプリケーションにはプロンプト、エージェント、ファインチューニングされたLLMが必要です。エージェントはLLMが関連コンテンツを取得するために使用され、それがプロンプトに挿入されてLLMに与えられ、回答が生成されます。", "is_correct": false },
      { "text": "質問応答アプリケーションには、回答を生成するためにプロンプトエンジニアリングとLLMが必要です。", "is_correct": false },
      { "text": "アプリケーションにはプロンプト、レトリーバー、LLMが必要です。レトリーバーの出力がプロンプトに挿入されてLLMに与えられ、回答が生成されます。", "is_correct": true }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ アプリケーションにはプロンプト、レトリーバー、LLMが必要です。レトリーバーの出力がプロンプトに挿入されてLLMに与えられ、回答が生成されます。</div><p class='explanation-text'>正解：このアプローチにより、アプリケーションが最小限の複雑さとコストで関連ドキュメントを動的に取得・処理することが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ LLMは最新の回答を提供するために新しいドキュメントで頻繁にファインチューニングされる必要がある。</div><p class='explanation-text'>不正解：頻繁なファインチューニングはコストがかかり時間を要するため、低コストアプリケーションには実用的ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ アプリケーションにはプロンプト、エージェント、ファインチューニングされたLLMが必要です。</div><p class='explanation-text'>不正解：ファインチューニングはここでは必要なく、不必要に開発工数が増加します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 質問応答アプリケーションには、回答を生成するためにプロンプトエンジニアリングとLLMが必要です。</div><p class='explanation-text'>不正解：この設定では最新ドキュメントの検索ができず、要件を満たしません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>プロンプト、レトリーバー、LLMの構成は、コストと複雑さを最小限に抑えながら動的な応答を実現し、このシナリオに最適な選択です。</p></div>",
    "tags": "Application Development",
    "summary": "RAGアプリはprompt・retriever・LLMの組み合わせで最小コスト・最小工数を実現し、最新ドキュメントにも動的に対応"
  },
  {
    "id": 25,
    "question": "ジェネレーティブAIエンジニアが、現在PDFフォーマットのソースドキュメントから取得したコンテキストに依存するRAGアプリケーションを構築しています。これらのPDFにはテキストと画像の両方が含まれている可能性があります。最小限のコード行数でソリューションを開発したいと考えています。ソースドキュメントからテキストを抽出するために使用すべきPythonパッケージはどれですか？",
    "choices": [
      { "text": "flask", "is_correct": false },
      { "text": "beautifulsoup", "is_correct": false },
      { "text": "numpy", "is_correct": false },
      { "text": "unstructured", "is_correct": true }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ unstructured</div><p class='explanation-text'>正解：unstructured Pythonライブラリはテキストと画像の両方を含むPDFを処理するために特別に設計されており、最小限のコーディング工数で済みます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ flask</div><p class='explanation-text'>不正解：FlaskはWebフレームワークであり、PDFからテキストを抽出できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ beautifulsoup</div><p class='explanation-text'>不正解：BeautifulSoupはHTMLおよびXMLドキュメントの解析に使用されており、PDFには使えません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ numpy</div><p class='explanation-text'>不正解：Numpyは数値計算ライブラリであり、PDFの処理はできません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>unstructuredライブラリは最小限のコードでPDFからテキストやその他の構造化データを効率的に抽出するために設計されています。</p></div>",
    "tags": "Data Preparation",
    "summary": "テキスト・画像混在PDFからの最小コードでのテキスト抽出にはunstructuredライブラリが最適"
  },
  {
    "id": 26,
    "question": "ジェネレーティブAIエンジニアが、詩のような記事サマリー（例：俳句）を生成するシステムを構築しています。出力が望ましいトーンやスタイルに合っていません。応答を改善しないアプローチはどれですか？",
    "choices": [
      { "text": "望ましいトーンとスタイルのデータセットでLLMをファインチューニングする。", "is_correct": false },
      { "text": "ニュートラライザーを使用して基礎となるドキュメントのトーンとスタイルを正規化する。", "is_correct": true },
      { "text": "プロンプトにフューショット例を含める。", "is_correct": false },
      { "text": "望ましいトーンとスタイルでテキストを生成するよう明示的に指示するプロンプトをLLMに提供する。", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ニュートラライザーを使用して基礎となるドキュメントのトーンとスタイルを正規化する。</div><p class='explanation-text'>正解：入力ドキュメントを正規化してもLLMの出力トーンやスタイルには直接対処しません。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 望ましいトーンとスタイルのデータセットでLLMをファインチューニングする。</div><p class='explanation-text'>不正解：ファインチューニングはモデルを望ましいトーンやスタイルで一貫して生成するよう調整します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ プロンプトにフューショット例を含める。</div><p class='explanation-text'>不正解：フューショット例はLLMに望ましいスタイルを模倣させます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 望ましいトーンとスタイルでテキストを生成するよう明示的に指示するプロンプトをLLMに提供する。</div><p class='explanation-text'>不正解：明確なプロンプトは生成されるトーンとスタイルを大幅に改善できます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>入力ドキュメントを正規化することはそのコンテンツに影響しますが、LLMの出力トーンやスタイルを望ましい結果に合わせることはありません。</p></div>",
    "tags": "Application Development",
    "summary": "入力ドキュメントのトーン正規化はLLMの出力スタイルに影響を与えないため、出力トーン改善には寄与しない"
  },
  {
    "id": 27,
    "question": "ジェネレーティブAIエンジニアがDatabricks上でLLMをトレーニングし、デプロイしたいと考えています。Databricks上でモデルをデプロイする最も簡単なプロセスは何ですか？",
    "choices": [
      { "text": "LLMをFlaskアプリにラップし、Gunicornを使用して提供する。", "is_correct": false },
      { "text": "モデルをpickleオブジェクトとしてログに記録し、Unity Catalog Volumeにアップロードし、MLflowに登録し、サービングエンドポイントを起動する。", "is_correct": false },
      { "text": "トレーニング中にMLflowを使用してモデルをログに記録し、MLflow APIを使用してUnity Catalogに直接登録し、サービングエンドポイントを起動する。", "is_correct": true },
      { "text": "モデルをローカルに保存し、Dockerイメージをビルドして、Dockerコンテナを実行する。", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ トレーニング中にMLflowを使用してモデルをログに記録し、MLflow APIを使用してUnity Catalogに直接登録し、サービングエンドポイントを起動する。</div><p class='explanation-text'>正解：これはDatabricks上でモデルをデプロイするための標準的で最も簡単なプロセスです。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ LLMをFlaskアプリにラップし、Gunicornを使用して提供する。</div><p class='explanation-text'>不正解：Flask/Gunicornのセットアップは、管理されたサービングエンドポイントを提供するDatabricksには不要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルをpickleオブジェクトとしてログに記録し、Unity Catalog Volumeにアップロードし、MLflowに登録し、サービングエンドポイントを起動する。</div><p class='explanation-text'>不正解：PickleはDatabricks上でのモデルデプロイの標準フォーマットではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルをローカルに保存し、Dockerイメージをビルドして、Dockerコンテナを実行する。</div><p class='explanation-text'>不正解：機能はしますが、MLflowを使用するよりも複雑なプロセスです。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>MLflowはDatabricksでのモデル登録とサービングプロセスをシームレスに管理し、モデルデプロイを簡素化します。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "DatabricksへのLLMデプロイはMLflowでログ記録→Unity Catalog登録→サービングエンドポイント起動が標準の最短手順"
  },
  {
    "id": 28,
    "question": "ジェネレーティブAIエンジニアが、HTMLベースのユーザーマニュアルのセットからコンテンツを抽出する作業を任されています。マニュアルにはネストされたテーブルに製品の詳細が含まれています。テキスト抽出に最も適したツールはどれですか？（2つ選択）",
    "choices": [
      { "text": "OCRベースのテキスト抽出のためのpytesseract。", "is_correct": false },
      { "text": "大規模なHTMLドキュメントの高速な解析と処理のためのLXML。", "is_correct": true },
      { "text": "HTMLを解析して構造化要素からテキストを抽出するためのBeautifulSoup。", "is_correct": true },
      { "text": "テーブルデータを抽出するためのpdfplumber。", "is_correct": false },
      { "text": "ユーザーマニュアルからテキストを読み取るためのPyPDF2。", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 大規模なHTMLドキュメントの高速な解析と処理のためのLXML。</div><p class='explanation-text'>正解：LXMLは大規模なHTMLの処理効率を向上させます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ HTMLを解析して構造化要素からテキストを抽出するためのBeautifulSoup。</div><p class='explanation-text'>正解：BeautifulSoupはHTMLから構造化コンテンツをナビゲートして抽出するのに理想的です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ OCRベースのテキスト抽出のためのpytesseract。</div><p class='explanation-text'>不正解：pytesseractはHTMLファイルからテキストを抽出するためには不要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ テーブルデータを抽出するためのpdfplumber。</div><p class='explanation-text'>不正解：pdfplumberはHTMLではなくPDF向けに設計されています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーマニュアルからテキストを読み取るためのPyPDF2。</div><p class='explanation-text'>不正解：PyPDF2はHTMLコンテンツを解析しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>BeautifulSoupとLXMLを組み合わせることで、HTMLベースのマニュアルから構造化テキストを堅牢かつ効率的に抽出できます。</p></div>",
    "tags": "Data Preparation",
    "summary": "HTMLベースのドキュメントからのテキスト抽出にはBeautifulSoupとLXMLの組み合わせが最も効率的"
  },
  {
    "id": 29,
    "question": "ジェネレーティブAIエンジニアが、HR PDFドキュメントを使用して従業員のHR質問に答えるLLMベースアプリケーションを設計するよう依頼されました。ジェネレーティブAIエンジニアのシステムが実行すべき高レベルのタスクのセットはどれですか？",
    "choices": [
      { "text": "各HRドキュメントの平均埋め込みを計算し、ユーザークエリと比較して最適なドキュメントを見つける。最適なドキュメントとユーザークエリを大きなコンテキストウィンドウを持つLLMに渡して従業員への応答を生成する。", "is_correct": false },
      { "text": "LLMを使用してHRドキュメントを要約する。ドキュメントの要約とユーザークエリを大きなコンテキストウィンドウを持つLLMに直接提供して、ユーザーへの応答を生成する。", "is_correct": false },
      { "text": "従業員の質問履歴とHRドキュメントのインタラクションマトリックスを作成する。ALSを使用してマトリックスを因数分解し埋め込みを作成する。新しいクエリの埋め込みを計算して最適なHRドキュメントを見つける。取得したドキュメントに基づいてLLMを使用して従業員の質問への応答を生成する。", "is_correct": false },
      { "text": "HRドキュメントをチャンクに分割してベクトルストアに埋め込む。従業員の質問を使用して最適一致のドキュメントチャンクを取得し、取得したドキュメントに基づいてLLMを使用して従業員への応答を生成する。", "is_correct": true }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ HRドキュメントをチャンクに分割してベクトルストアに埋め込む。従業員の質問を使用して最適一致のドキュメントチャンクを取得し、取得したドキュメントに基づいてLLMを使用して従業員への応答を生成する。</div><p class='explanation-text'>HRドキュメントをチャンクに分割してベクトルストアに埋め込むことで、従業員の質問に基づいて関連情報を効率的に取得できます。取得したドキュメントチャンクに基づいてLLMを使用して応答を生成することで、応答がコンテキストに関連した正確なものになります。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 各HRドキュメントの平均埋め込みを計算し、ユーザークエリと比較して最適なドキュメントを見つける。</div><p class='explanation-text'>各HRドキュメントの平均埋め込みを計算してユーザークエリと比較することは効率的な方法ではありません。大きなコンテキストウィンドウを持つLLMの使用も不必要な場合があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ LLMを使用してHRドキュメントを要約する。</div><p class='explanation-text'>LLMを使用してHRドキュメントを要約することは、従業員のHR質問への正確な応答を提供しない可能性があります。要約は元のドキュメントの重要な詳細とコンテキストを失う可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 従業員の質問履歴とHRドキュメントのインタラクションマトリックスを作成する。</div><p class='explanation-text'>インタラクションマトリックスとALSを使用した方法は、従業員のHR質問への応答を生成するための最も効果的なアプローチではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>HRドキュメントをチャンキングしてベクトルストアに埋め込むことで、従業員の質問に対して正確な検索と関連性が確保されます。</p></div>",
    "tags": "Application Development",
    "summary": "HR PDFの質問応答にはチャンキング→ベクトルストア埋め込み→クエリ検索→LLM回答生成のRAGパイプラインが最適"
  },
  {
    "id": 30,
    "question": "ジェネレーティブAIエンジニアが外部チャットボットのためのビジネス要件を受け取りました：チャットボットはユーザーが尋ねる質問の種類を把握し、適切なモデルに質問をルーティングする必要があります。例えば、ユーザーは次回のイベント詳細やチケット購入について尋ねる可能性があります。このようなチャットボットの理想的なワークフローは何ですか？",
    "choices": [
      { "text": "チャットボットは支払い処理のみを行うべきである。", "is_correct": false },
      { "text": "チャットボットはマルチステップLLMワークフローとして実装すべきである。まず尋ねられた質問の種類を識別し、次に適切なモデルに質問をルーティングする。次回のイベントに関する質問であればtext-to-SQLモデルにクエリを送り、チケット購入に関する場合は顧客を決済プラットフォームにリダイレクトする。", "is_correct": true },
      { "text": "異なる種類のユーザークエリを処理するために2つの異なるチャットボットを設けるべきである。", "is_correct": false },
      { "text": "チャットボットは以前のイベント情報のみを参照すべきである。", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ チャットボットはマルチステップLLMワークフローとして実装すべきである。まず尋ねられた質問の種類を識別し、次に適切なモデルに質問をルーティングする。</div><p class='explanation-text'>正解：マルチステップLLMワークフローは多様なユーザークエリを処理する上での柔軟性と効率性を確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ チャットボットは支払い処理のみを行うべきである。</div><p class='explanation-text'>不正解：これはユーザークエリのより広い範囲を無視しています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 異なる種類のユーザークエリを処理するために2つの異なるチャットボットを設けるべきである。</div><p class='explanation-text'>不正解：機能を別々のチャットボットに分けることは非効率で複雑さが増します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ チャットボットは以前のイベント情報のみを参照すべきである。</div><p class='explanation-text'>不正解：チャットボットをイベント履歴に限定することは、チケット購入などの他のクエリタイプを無視します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>マルチステップLLMワークフローにより、チャットボットはクエリの種類を識別して適切にルーティングすることで多様なクエリを効率的に処理できます。</p></div>",
    "tags": "Application Development",
    "summary": "多様なクエリを処理するチャットボットにはクエリ種別識別→適切モデルへのルーティングのマルチステップLLMワークフローが最適"
  },
{
    "id": 31,
    "question": "ジェネレーティブAIエンジニアが、学術研究論文を要約するモデルの適合性を評価する任務を負っています。評価はセマンティック精度とドメイン関連性を考慮する必要があります。どの方法を優先すべきですか？（2つ選択）",
    "choices": [
      { "text": "コストを最適化するためにトークン使用量を評価する。", "is_correct": false },
      { "text": "コンテンツオーバーラップのためのROUGEとセマンティック精度のためのドメイン固有指標を使用する。", "is_correct": true },
      { "text": "流暢性を評価するためにパープレキシティを測定する。", "is_correct": false },
      { "text": "ドメインの正確性についてサマリーを評価するために人間による評価を実施する。", "is_correct": true },
      { "text": "参照テキストとの類似性を測定するためにBLEUを使用する。", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ コンテンツオーバーラップのためのROUGEとセマンティック精度のためのドメイン固有指標を使用する。</div><p class='explanation-text'>正解：ROUGEはコンテンツオーバーラップを評価し、ドメイン固有指標は関連性とセマンティックな忠実度を確保します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ ドメインの正確性についてサマリーを評価するために人間による評価を実施する。</div><p class='explanation-text'>正解：人間による評価は自動化された指標が見逃す可能性のある微妙な洞察を捉えます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コストを最適化するためにトークン使用量を評価する。</div><p class='explanation-text'>不正解：トークン使用量は関連性やセマンティック精度とは無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 流暢性を評価するためにパープレキシティを測定する。</div><p class='explanation-text'>不正解：パープレキシティは言語の流暢性を評価しますが、セマンティック精度やドメイン関連性は評価しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 参照テキストとの類似性を測定するためにBLEUを使用する。</div><p class='explanation-text'>不正解：BLEUは翻訳タスクに適しており、学術的な要約には向いていません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ROUGEと人間による評価を組み合わせることで、学術研究に特化した正確で関連性の高いサマリーが確保されます。</p></div>",
    "tags": "Application Development",
    "summary": "学術論文要約の評価にはROUGE（コンテンツ重複）とドメイン専門家による人間評価の組み合わせが最も適切"
  },
  {
    "id": 32,
    "question": "チームがソフトウェア開発者向けアシスタントとしてコード生成モデルを提供したいと考えています。複数のプログラミング言語をサポートし、品質が最重要目標です。Databricksの基盤モデル APIまたはMarketplaceで利用可能なモデルの中で、最も適したものはどれですか？",
    "choices": [
      { "text": "CodeLlama-34B", "is_correct": true },
      { "text": "BGE-large", "is_correct": false },
      { "text": "MPT-7b", "is_correct": false },
      { "text": "Llama2-70b", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ CodeLlama-34B</div><p class='explanation-text'>正解：CodeLlama-34Bはコード生成のために特別に設計されており、複数のプログラミング言語をサポートし、開発者タスクに高品質な出力を提供します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ BGE-large</div><p class='explanation-text'>不正解：BGE-largeは主に埋め込みモデルであり、コード生成タスクには適していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ MPT-7b</div><p class='explanation-text'>不正解：MPT-7bは汎用言語モデルで容量が小さく、コード生成には特化していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Llama2-70b</div><p class='explanation-text'>不正解：Llama2-70bは強力な汎用モデルですが、コード生成タスクには特化していません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>CodeLlama-34Bは複数のプログラミング言語をサポートする特化型コード生成モデルであり、チームの要件に最も適した選択肢です。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "複数言語対応・高品質なコード生成にはCodeLlama-34Bが最適で、コード生成専用に設計されている"
  },
  {
    "id": 33,
    "question": "ジェネレーティブAIエンジニアが非構造化ドキュメントのチャンク化に成功し、チャンクをVector Searchインデックスに保存したいと考えています。現在のデータフレームには元のドキュメント名とテキストチャンクの配列の列があります。このデータフレームを保存する最もパフォーマンスの高い方法は何ですか？",
    "choices": [
      { "text": "データフレームをチャンクごとに1行にフラット化し、各行に一意の識別子を作成して、Deltaテーブルに保存する。", "is_correct": true },
      { "text": "各チャンクをUnity Catalog Volume内の独立したJSONファイルとして保存する。", "is_correct": false },
      { "text": "最初に各ドキュメントに一意の識別子を作成し、次にDeltaテーブルに保存する。", "is_correct": false },
      { "text": "データをトレインセットとテストセットに分割し、各ドキュメントに一意の識別子を作成して、Deltaテーブルに保存する。", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ データフレームをチャンクごとに1行にフラット化し、各行に一意の識別子を作成して、Deltaテーブルに保存する。</div><p class='explanation-text'>正解：フラット化することでVector Searchインデックスに最適な個々のチャンクの効率的な取得と保存が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 各チャンクをUnity Catalog Volume内の独立したJSONファイルとして保存する。</div><p class='explanation-text'>不正解：Unity CatalogへのJSON保存は、Deltaテーブルに比べて大規模な検索のパフォーマンスが劣ります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 最初に各ドキュメントに一意の識別子を作成し、次にDeltaテーブルに保存する。</div><p class='explanation-text'>不正解：これは個々のチャンクを保存する必要性に対応していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ データをトレインセットとテストセットに分割し、各ドキュメントに一意の識別子を作成して、Deltaテーブルに保存する。</div><p class='explanation-text'>不正解：トレインセットとテストセットへの分割はVector Searchインデックスへの保存には不要です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>データフレームをフラット化して個々のチャンクを一意の識別子とともに保存することで、Vector Searchインデックスでの検索が最適化されます。</p></div>",
    "tags": "Data Preparation",
    "summary": "Vector Search用チャンク保存は1チャンク1行にフラット化しユニークIDを付与してDeltaテーブルに保存するのが最適"
  },
  {
    "id": 34,
    "question": "ジェネレーティブAIエンジニアが、技術的な研究記事のサマリーを生成するLLMアプリケーションを構築しています。サマリーの品質を評価するためにどの指標を使用すべきですか？",
    "choices": [
      { "text": "レイテンシ", "is_correct": false },
      { "text": "ROUGE", "is_correct": true },
      { "text": "BLEU", "is_correct": false },
      { "text": "ワード数", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ROUGE</div><p class='explanation-text'>正解：ROUGE（Recall-Oriented Understudy for Gisting Evaluation）は、生成されたサマリーを参照サマリーと比較することで要約品質を評価するために特別に設計された指標です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ レイテンシ</div><p class='explanation-text'>不正解：レイテンシは応答時間を測定し、サマリーの精度や関連性ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ BLEU</div><p class='explanation-text'>不正解：BLEUは翻訳タスクの評価に使用されており、要約には使いません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ワード数</div><p class='explanation-text'>不正解：ワード数は品質を評価せず、テキストの長さを測定するだけです。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ROUGEは生成されたサマリーと参照サマリー間のリコール、精度、F1スコアのオーバーラップを測定することで要約品質を評価します。このユースケースの標準的な指標です。</p></div>",
    "tags": "Evaluation and Monitoring",
    "summary": "要約品質の評価にはROUGEが標準指標で、参照サマリーとのリコール・精度・F1スコアを測定する"
  },
  {
    "id": 35,
    "question": "ジェネレーティブAIエンジニアが、オンラインゲームプレイ中にユーザーを引き付けるためのゲーム会社向けチャットボットを設計しています。エンゲージメントとリテンションを高めるためにどの指標が役立ちますか？",
    "choices": [
      { "text": "ランダム性", "is_correct": false },
      { "text": "関連性の欠如", "is_correct": false },
      { "text": "応答の多様性", "is_correct": true },
      { "text": "応答の繰り返し", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 応答の多様性</div><p class='explanation-text'>正解：多様な応答はユーザーの興味を維持し、リテンションを高めます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ランダム性</div><p class='explanation-text'>不正解：ランダム性はユーザーを混乱させ、エンゲージメントを低下させる可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 関連性の欠如</div><p class='explanation-text'>不正解：無関係な応答はユーザーをイライラさせ、エンゲージメントを低下させます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答の繰り返し</div><p class='explanation-text'>不正解：繰り返しの応答はユーザーを飽き飽きさせ、リテンションを下げます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>多様な応答はチャットボットを魅力的に保ち、ゲームプレイ中のユーザーの興味を維持してリテンションを向上させます。</p></div>",
    "tags": "Evaluation and Monitoring",
    "summary": "ゲーミングchatbotのエンゲージメント・リテンション向上には応答の多様性が重要で、ランダム性や繰り返しとは異なる"
  },
  {
    "id": 36,
    "question": "ジェネレーティブAIエンジニアが、ユーザークエリを正規化して不要な記号を削除するカスタムLLMアプリケーションの前処理パイプラインを開発する任務を負っています。どのアプローチを使用すべきですか？",
    "choices": [
      { "text": "Delta Live Tableを使用してユーザークエリをLLMに渡す前に前処理する。", "is_correct": false },
      { "text": "Sparkジョブを使用してユーザークエリを正規化・前処理する。", "is_correct": false },
      { "text": "PyFuncモデルを作成して前処理ロジックを実装し、LLMアプリケーションと統合する。", "is_correct": true },
      { "text": "LLMをファインチューニングしてユーザークエリを内部で前処理する。", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ PyFuncモデルを作成して前処理ロジックを実装し、LLMアプリケーションと統合する。</div><p class='explanation-text'>正解：PyFuncモデルはモジュラーで再利用可能なカスタムPythonベースの前処理ステップを可能にし、クエリの正規化に最適です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Delta Live Tableを使用してユーザークエリをLLMに渡す前に前処理する。</div><p class='explanation-text'>不正解：Delta Live Tableは構造化データパイプライン向けに設計されており、リアルタイムのユーザークエリの前処理には適していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Sparkジョブを使用してユーザークエリを正規化・前処理する。</div><p class='explanation-text'>不正解：Sparkは強力ですが、軽量な前処理タスクには過剰であり不必要な複雑さを加えます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ LLMをファインチューニングしてユーザークエリを内部で前処理する。</div><p class='explanation-text'>不正解：LLMのファインチューニングは前処理にはリソース集約的で、PyFuncと比べて実用的ではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>PyFuncはMLflowの機能であり、カスタムの前処理または後処理ロジックを機械学習ワークフローに簡単に統合できます。効率的で再利用可能なクエリ正規化タスクに最適です。</p></div>",
    "tags": "Application Development",
    "summary": "LLMアプリのカスタム前処理パイプラインにはMLflow PyFuncモデルが最適で、モジュラーかつ再利用可能な実装が可能"
  },
  {
    "id": 37,
    "question": "ジェネレーティブAIエンジニアが、会社の小規模な社内専門家グループ向けのRAGアプリケーションを開発する任務を負っています。アプリケーションは社内ナレッジベースを使用して機密・秘密の質問に答える必要があります。高品質な回答が優先事項で、レイテンシとスループットは小規模なユーザーグループのため懸念事項ではありません。規制上の要件により、いかなる情報も第三者に送信することが禁止されています。すべての要件を満たすモデルはどれですか？",
    "choices": [
      { "text": "Dolly 1.5B", "is_correct": false },
      { "text": "OpenAI GPT-4", "is_correct": false },
      { "text": "BGE-large", "is_correct": false },
      { "text": "Llama2-70B", "is_correct": true }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ Llama2-70B</div><p class='explanation-text'>正解：Llama2-70Bはオープンソースの高品質なモデルであり、オンプレミスでのデプロイをサポートしているため、機密性の高い専門家レベルのクエリに対して最高の品質を提供しながらデータの機密性を確保できます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Dolly 1.5B</div><p class='explanation-text'>不正解：Dollyはオープンソースでデータ機密性を確保しますが、品質がLlama2-70Bなどの大型モデルに比べて劣るため、高品質な専門家レベルの回答には適していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ OpenAI GPT-4</div><p class='explanation-text'>不正解：GPT-4は優れた品質を提供しますが、外部APIアクセスが必要なため、データを完全に内部に保つという規制要件に違反します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ BGE-large</div><p class='explanation-text'>不正解：BGE-largeは主にセマンティック検索と取得のための埋め込みモデルであり、高品質で詳細な回答を生成するものではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Llama2-70Bはこのシナリオに最適な選択肢であり、高品質な回答、データ機密性、規制コンプライアンスの要件を満たします。オープンソースで内部デプロイ可能、専門家レベルのアプリケーションに適しています。</p></div>",
    "tags": "Application Development",
    "summary": "第三者送信禁止・高品質・機密要件を全て満たすにはLlama2-70Bのオンプレミスデプロイが最適"
  },
  {
    "id": 38,
    "question": "ジェネレーティブAIエンジニアが、新しいスポーツを学ぶユーザーが技術規則に関する質問に答えるためのRAGアプリケーションを設計しています。このアプリケーションを構築・デプロイするためにどのステップの順序に従うべきですか？",
    "choices": [
      { "text": "ソースからドキュメントを取り込む → ドキュメントをインデックス化してVector Searchに保存する → ユーザーがLLMに対してクエリを送信する → LLMが関連ドキュメントを取得する → LLMが応答を生成する → モデルを評価する → Model Servingを使用してデプロイする。", "is_correct": true },
      { "text": "ソースからドキュメントを取り込む → ドキュメントをインデックス化してVector Searchに保存する → ユーザーがLLMに対してクエリを送信する → LLMが関連ドキュメントを取得する → モデルを評価する → LLMが応答を生成する → Model Servingを使用してデプロイする。", "is_correct": false },
      { "text": "ソースからドキュメントを取り込む → ドキュメントをインデックス化してVector Searchに保存する → モデルを評価する → Model Servingを使用してデプロイする。", "is_correct": false },
      { "text": "ユーザーがLLMに対してクエリを送信する → ソースからドキュメントを取り込む → ドキュメントをインデックス化してVector Searchに保存する → LLMが関連ドキュメントを取得する → LLMが応答を生成する → モデルを評価する → Model Servingを使用してデプロイする。", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ソースからドキュメントを取り込む → インデックス化してVector Searchに保存 → クエリ送信 → ドキュメント取得 → 応答生成 → モデル評価 → Model Servingでデプロイ。</div><p class='explanation-text'>正解：このシーケンスは適切なワークフローに従い、最終デプロイ前に評価が完了することを確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ...モデルを評価する → LLMが応答を生成する → デプロイ。</div><p class='explanation-text'>不正解：このシーケンスはモデルをプロセスの途中で評価しており、パフォーマンスが低いパイプラインをデプロイする可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ...モデルを評価する → Model Servingを使用してデプロイする。（クエリ送信と応答生成が省略）</div><p class='explanation-text'>不正解：クエリ送信と応答生成などの重要なステップが省略されています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーがLLMに対してクエリを送信する → ソースからドキュメントを取り込む...</div><p class='explanation-text'>不正解：このシーケンスは非論理的で、ドキュメントの取り込みとインデックス化の前にクエリを実行しています。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>適切なシーケンスに従うことで、RAGアプリケーションが正しく構築、テスト、デプロイされ、ユーザークエリを効果的に処理できることが確保されます。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "RAGアプリのビルド・デプロイは取り込み→インデックス化→クエリ→取得→生成→評価→デプロイの順序が正しい"
  },
  {
    "id": 39,
    "question": "ジェネレーティブAIエンジニアが、LLMベースの翻訳アプリケーションで生成された翻訳の品質を評価しています。翻訳の精度を評価するためにどの指標を使用すべきですか？",
    "choices": [
      { "text": "BLEU", "is_correct": true },
      { "text": "パープレキシティ", "is_correct": false },
      { "text": "コサイン類似度", "is_correct": false },
      { "text": "ROUGE", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ BLEU</div><p class='explanation-text'>正解：BLEU（Bilingual Evaluation Understudy）は、n-gramオーバーラップを参照翻訳と比較することで機械翻訳の品質を評価する広く使用された指標です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ パープレキシティ</div><p class='explanation-text'>不正解：パープレキシティは言語モデルがテキストをどれだけうまく予測するかを測定しますが、翻訳品質を評価しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コサイン類似度</div><p class='explanation-text'>不正解：コサイン類似度はベクトルの類似性を測定し、翻訳評価の標準指標ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ROUGE</div><p class='explanation-text'>不正解：ROUGEは主に要約タスクに使用されており、翻訳には使いません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>BLEUは生成されたテキストが参照翻訳とどれだけ近いかをn-gram比較で測定することで機械翻訳品質を評価する標準指標です。</p></div>",
    "tags": "Evaluation and Monitoring",
    "summary": "翻訳品質の評価にはBLEUが標準指標で、参照翻訳とのn-gramオーバーラップを測定する"
  },
  {
    "id": 40,
    "question": "ジェネレーティブAIエンジニアが、製品が在庫にある場合は「In Stock」、ない場合は「Out of Stock」を出力するように設計されたLLMとインターフェースを取っています。エンジニアはコール分類ラベルのために出力を正しくフォーマットするプロンプトを実装する必要があります。最も適切なプロンプトはどれですか？",
    "choices": [
      { "text": "顧客の通話記録を受け取り、顧客が製品の在庫について問い合わせています。製品が在庫にある場合は「In Stock」、ない場合は「Out of Stock」と応答してください。", "is_correct": false },
      { "text": "顧客の通話記録を受け取り、顧客が製品の在庫について質問しています。出力は「In Stock」または「Out of Stock」のいずれかです。JSON形式で出力してください。例：{\"call_id\": \"123\", \"label\": \"In Stock\"}。", "is_correct": true },
      { "text": "顧客が製品を要求した場合は「Out of Stock」と応答してください。", "is_correct": false },
      { "text": "顧客が製品を要求した場合は「In Stock」と応答してください。", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 顧客の通話記録を受け取り、顧客が製品の在庫について質問しています。出力は「In Stock」または「Out of Stock」のいずれかです。JSON形式で出力してください。例：{\"call_id\": \"123\", \"label\": \"In Stock\"}。</div><p class='explanation-text'>正解：このプロンプトは明確な指示と必要な出力フォーマットの両方を提供し、コール分類の一貫性と精度を確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 顧客の通話記録を受け取り...「In Stock」または「Out of Stock」と応答してください。</div><p class='explanation-text'>不正解：明確ですが、必要なJSON構造で出力をフォーマットしていません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 顧客が製品を要求した場合は「Out of Stock」と応答してください。</div><p class='explanation-text'>不正解：製品が在庫にある可能性を無視し、完全な分類タスクに対処していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 顧客が製品を要求した場合は「In Stock」と応答してください。</div><p class='explanation-text'>不正解：在庫状況を判断する具体的な指示や応答の構造化方法が欠けています。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>2番目のプロンプトには明確な指示と必要なJSONフォーマットの両方が含まれており、出力が分類ニーズを満たすことが確保されます。</p></div>",
    "tags": "Design Applications",
    "summary": "コール分類ラベル生成には明確な指示とJSONフォーマット例を含むプロンプトが最も高精度な出力を生む"
  },
  {
    "id": 41,
    "question": "ジェネレーティブAIエンジニアが、ユーザーが名前に基づいてパーソナライズされた誕生日詩を生成できるLLMアプリケーションを開発しています。悪意あるユーザー入力の可能性を考慮して、アプリケーションを保護するために最も効果的な技術はどれですか？",
    "choices": [
      { "text": "ユーザーがLLMと対話できる時間を短縮する", "is_correct": false },
      { "text": "入力が悪意あるものであることをLLMがユーザーに伝えるよう依頼するが、会話を続ける", "is_correct": false },
      { "text": "有害な入力を検出するセーフティフィルターを実装し、LLMがサポートできないと応答するよう依頼する", "is_correct": true },
      { "text": "入力処理を高速化するためにLLMを動かすコンピュートを増やす", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 有害な入力を検出するセーフティフィルターを実装し、LLMがサポートできないと応答するよう依頼する</div><p class='explanation-text'>正解：セーフティフィルターは有害な入力を検出して処理するように設計されており、アプリケーションの安全性と責任ある動作を確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーがLLMと対話できる時間を短縮する</div><p class='explanation-text'>不正解：対話時間を短縮しても、悪意ある入力を軽減したりアプリケーションを効果的に保護したりすることはできません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 入力が悪意あるものであることをLLMがユーザーに伝えるよう依頼するが、会話を続ける</div><p class='explanation-text'>不正解：悪意ある入力を特定した後も会話を続けることは、さらなるセキュリティリスクにつながる可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 入力処理を高速化するためにLLMを動かすコンピュートを増やす</div><p class='explanation-text'>不正解：コンピュートを増やすことはパフォーマンスに対処しますが、悪意ある入力に関連するセキュリティ上の懸念には対処しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>セーフティフィルターは有害な入力を検出してLLMによる処理や応答を防止し、安全な動作を確保します。</p></div>",
    "tags": "Governance",
    "summary": "悪意ある入力からLLMアプリを守るには有害入力検出セーフティフィルターを実装し、応答を拒否することが最善策"
  },
  {
    "id": 42,
    "question": "ジェネレーティブAIエンジニアが、ユーザーが提供した食材と食事制限を使用して食事プランを推薦するチャットボットのためにユーザー入力を拡張する任務を負っています。入力をどのように拡張すべきですか？（2つ選択）",
    "choices": [
      { "text": "ユーザー入力を分類するために分類モデルを使用する。", "is_correct": false },
      { "text": "プロンプトにポーションサイズや食事の好みなどの追加コンテキストを含める。", "is_correct": true },
      { "text": "プロンプトに類似した食事プランの例を追加する。", "is_correct": true },
      { "text": "ユーザー入力を要約して重要なポイントを凝縮する。", "is_correct": false },
      { "text": "固定の食事プラン推薦のためにルールベースシステムをトレーニングする。", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ プロンプトにポーションサイズや食事の好みなどの追加コンテキストを含める。</div><p class='explanation-text'>正解：ポーションサイズや好みなどのコンテキスト詳細は食事推薦の品質を向上させます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ プロンプトに類似した食事プランの例を追加する。</div><p class='explanation-text'>正解：例はモデルがよりカスタマイズされた関連性の高い出力を生成するよう誘導します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザー入力を分類するために分類モデルを使用する。</div><p class='explanation-text'>不正解：分類だけでは多様なプランを生成するチャットボットの能力は向上しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザー入力を要約して重要なポイントを凝縮する。</div><p class='explanation-text'>不正解：要約は食事プランに必要な重要な詳細を省略するリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 固定の食事プラン推薦のためにルールベースシステムをトレーニングする。</div><p class='explanation-text'>不正解：ルールベースシステムは動的な入力拡張には柔軟性が欠けます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>コンテキストのあるプロンプトと例により、チャットボットがユーザー入力に基づいてパーソナライズされた正確な食事プランを生成することが確保されます。</p></div>",
    "tags": "Application Development",
    "summary": "食事プランchatbotの入力拡張には追加コンテキスト情報と類似例をプロンプトに加えることが最も効果的"
  },
  {
    "id": 43,
    "question": "ジェネレーティブAIエンジニアがアプリケーションをデプロイしましたが、リクエスト量がプロビジョニングスループットに対して不十分であることがわかりました。デプロイメントのコスト効率を確保するにはどうすればよいですか？",
    "choices": [
      { "text": "コスト保証が伴うため、トークン課金（従量制）スループットを使用してモデルをデプロイする。", "is_correct": true },
      { "text": "レート制限の問題を避けるために、受信リクエストバッチを手動でスロットルする。", "is_correct": false },
      { "text": "ハードウェア制約を減らすために、パラメータ数の少ないモデルに変更する。", "is_correct": false },
      { "text": "代わりにExternal Modelsの使用に切り替える。", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ コスト保証が伴うため、トークン課金（従量制）スループットを使用してモデルをデプロイする。</div><p class='explanation-text'>正解：トークン課金（従量制）はコストが使用量に応じてスケールし、低リクエスト量においてコスト効率が高くなります。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ レート制限の問題を避けるために、受信リクエストバッチを手動でスロットルする。</div><p class='explanation-text'>不正解：スロットリングはリクエスト管理に役立ちますが、コスト効率を最適化しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ハードウェア制約を減らすために、パラメータ数の少ないモデルに変更する。</div><p class='explanation-text'>不正解：モデルサイズを減らすとコストが下がる可能性がありますが、スループット関連のコスト問題には直接対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 代わりにExternal Modelsの使用に切り替える。</div><p class='explanation-text'>不正解：External ModelsはリクエストスループットのコストEfficiencyに対処しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>トークン課金（従量制）スループットはコストが使用量に合わせられるため、低リクエスト量に対する最善の戦略です。</p></div>",
    "tags": "Evaluation and Monitoring",
    "summary": "低リクエスト量でのコスト効率化にはプロビジョニングスループットからトークン課金（従量制）への切り替えが最善策"
  },
  {
    "id": 44,
    "question": "ジェネレーティブAIエンジニアが、新たにスコープされたプロジェクトに最適なチームメンバーを推薦するジェネレーティブAIシステムを構築しています。マッチングはプロジェクトの日程の可用性とプロジェクトスコープとのプロファイル一致を考慮する必要があります。従業員プロファイルとプロジェクトスコープはどちらも非構造化テキストとして保存されています。どのシステムアーキテクチャを使用すべきですか？",
    "choices": [
      { "text": "プロジェクト日程を基にチームメンバーの可用性を見つけるツールと、プロジェクトスコープからキーワードを抽出するLLMを使用するツールを作成する。利用可能なチームメンバーのプロファイルを繰り返し処理してキーワードマッチングを実行し、最適な利用可能なチームメンバーを見つける。", "is_correct": false },
      { "text": "プロジェクト日程を基に利用可能なチームメンバーを見つけるツールを作成する。チームメンバーのプロファイルとプロジェクトスコープの組み合わせの類似スコアを計算できる2番目のツールを作成する。チームメンバーを繰り返し処理してスコアでランク付けし、チームメンバーを選択する。", "is_correct": false },
      { "text": "プロジェクト日程を基に利用可能なチームメンバーを見つけるツールを作成する。すべてのプロジェクトスコープをベクトルストアに埋め込み、チームメンバーのプロファイルを使用して最適なチームメンバーを見つけるために検索を実行する。", "is_correct": false },
      { "text": "プロジェクト日程を基に利用可能なチームメンバーを見つけるツールを作成する。チームプロファイルをベクトルストアに埋め込み、プロジェクトスコープとフィルタリングを使用して検索を実行し、利用可能な最適マッチのチームメンバーを見つける。", "is_correct": true }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ プロジェクト日程を基に利用可能なチームメンバーを見つけるツールを作成する。チームプロファイルをベクトルストアに埋め込み、プロジェクトスコープとフィルタリングを使用して検索を実行し、利用可能な最適マッチのチームメンバーを見つける。</div><p class='explanation-text'>正解：チームプロファイルをベクトルストアに埋め込むことでセマンティックマッチングが可能になり、検索によりスケーラビリティと精度が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ...キーワードマッチングを実行し、最適な利用可能なチームメンバーを見つける。</div><p class='explanation-text'>不正解：キーワードマッチングは単純すぎて非構造化テキストの複雑さを処理できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ...類似スコアを計算...チームメンバーを繰り返し処理してスコアでランク付けする。</div><p class='explanation-text'>不正解：このアプローチは特に大規模なチームでスケーラビリティと効率性が欠けています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ すべてのプロジェクトスコープをベクトルストアに埋め込み、チームメンバーのプロファイルを使用して検索を実行する。</div><p class='explanation-text'>不正解：プロジェクトスコープを埋め込んでプロファイルで検索するより、チームプロファイルを埋め込んでプロジェクトスコープでフィルタリングする方が効果的です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>チームプロファイルをベクトルストアに埋め込んで検索することで、大規模なチームメンバーとプロジェクトスコープのデータセットに対して精密でスケーラブルなマッチングが確保されます。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "非構造化テキストのプロファイルマッチングにはチームプロファイルをベクトルストアに埋め込みプロジェクトスコープで検索する設計が最適"
  },
  {
    "id": 45,
    "question": "ジェネレーティブAIエンジニアが、LangChainでシンプルなプロンプトテンプレートをテストするために以下のコードを使用していますが、エラーが発生しています：from langchain.chains import LLMChain from langchain_community.llms import OpenAI from langchain_core.prompts import PromptTemplate prompt_template = \"Tell me a {adjective} joke\" prompt = PromptTemplate( input_variables=[\"adjective\"], template=prompt_template ) llm = LLMChain(prompt=prompt) llm.generate([{\"adjective\": \"funny\"}]) APIキーが適切に定義されていると仮定した場合、チェーンを修正するためにジェネレーティブAIエンジニアはどの変更を行う必要がありますか？",
    "choices": [
      { "text": "prompt_template = \"Tell me a {adjective} joke\" prompt = PromptTemplate( input_variables=[\"adjective\"], template=prompt_template ) llm = LLMChain(prompt=prompt) llm.generate(\"funny\")", "is_correct": false },
      { "text": "prompt_template = \"Tell me a {adjective} joke\" prompt = PromptTemplate( input_variables=[\"adjective\"], template=prompt_template ) llm = LLMChain(llm=OpenAI(), prompt=prompt) llm.generate([{\"adjective\": \"funny\"}])", "is_correct": true },
      { "text": "prompt_template = \"Tell me a {adjective} joke\" prompt = PromptTemplate( input_variables=[\"adjective\"], template=prompt_template, llm=OpenAI() ) llm = LLMChain(prompt=prompt) llm.generate([{\"adjective\": \"funny\"}])", "is_correct": false },
      { "text": "prompt_template = \"Tell me a {adjective} joke\" prompt = PromptTemplate( input_variables=[\"adjective\"], template=prompt_template ) llm = LLMChain(prompt=prompt.format(\"funny\")) llm.generate()", "is_correct": false }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ prompt_template = &quot;Tell me a {adjective} joke&quot; prompt = PromptTemplate( input_variables=[&quot;adjective&quot;], template=prompt_template ) llm = LLMChain(llm=OpenAI(), prompt=prompt) llm.generate([{&quot;adjective&quot;: &quot;funny&quot;}])</div><p class='explanation-text'>これが正解です。LLMChainはPromptTemplateとLLMインスタンス（OpenAI()）の両方で初期化される必要があります。これにより、チェーンが言語モデルに接続されて適切に実行されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ prompt_template = &quot;Tell me a {adjective} joke&quot; ... llm.generate(&quot;funny&quot;)</div><p class='explanation-text'>generateメソッドで「funny」を直接呼び出しており、入力変数へのマッピングが適切ではありません。チェーン初期化の根本的な問題にも対処していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ prompt_template = &quot;Tell me a {adjective} joke&quot; prompt = PromptTemplate( ... llm=OpenAI() ) ...</div><p class='explanation-text'>PromptTemplateはLLMインスタンス（OpenAI()など）を引数として受け付けないため、別のエラーが発生します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ... llm = LLMChain(prompt=prompt.format(&quot;funny&quot;)) llm.generate()</div><p class='explanation-text'>テンプレートを手動でフォーマットすることはLangChainの構造化プロンプトフレームワークを迂回しており、修正ではなくハックです。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>エラーはLLMChainがLLMインスタンス（OpenAI()など）に適切に接続されていないために発生します。LangChainでは、PromptTemplateがプロンプトの構造と入力変数を定義し、LLMChainがこのテンプレートをLLMに接続して出力を生成します。LLMインスタンスがないと、チェーンはプロンプトを処理して応答を生成できません。正しい解決策はPromptTemplateとLLMの両方でLLMChainを初期化することです。他のアプローチは必要なLLM接続を省略したり、コンポーネントを誤配置したり、プロンプトのフォーマットを誤用したりしており、根本的な問題に対処していません。</p></div>",
    "tags": "Application Development",
    "summary": "LangChainのLLMChainエラーはLLMインスタンス未指定が原因で、LLMChain初期化時にllm=OpenAI()を追加することで解決"
  }
];

