window.questionsDataDbxg2 = [
  {
    "id": 1,
    "question": "あるGenerative AIエンジニアが、保険関連の問い合わせに対応するチャットボットを開発しています。会社のポリシーに従い、チャットボットは政治的な問い合わせに回答せず、代わりに「申し訳ありませんが、その質問にはお答えできません。私は保険に関する質問のみにお答えできるチャットボットです。」という定型メッセージを返す必要があります。この問題を解決するために実装すべきframeworkの種類はどれですか？",
    "choices": [
      {
        "text": "Compliance Guardrail",
        "is_correct": false
      },
      {
        "text": "Safety Guardrail",
        "is_correct": true
      },
      {
        "text": "Security Guardrail",
        "is_correct": false
      },
      {
        "text": "Contextual Guardrail",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ Safety Guardrail</div><p class='explanation-text'>正解：Safety Guardrailは、政治的な回答のような不適切または望ましくない出力を、あらかじめ定義されたメッセージでフィルタリングまたは置き換えることを保証します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Compliance Guardrail</div><p class='explanation-text'>不正解：Compliance Guardrailは法的・規制上の基準への準拠を強制しますが、政治的な回答の制限に特化したものではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Security Guardrail</div><p class='explanation-text'>不正解：Security Guardrailは機密データとインフラの保護に焦点を当てており、出力のフィルタリングではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Contextual Guardrail</div><p class='explanation-text'>不正解：Contextual Guardrailはユーザーのコンテキストに基づいてモデルの出力を調整しますが、特定の種類の質問をフィルタリングするものではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Safety Guardrailは、不適切な出力をブロックまたは変更するために特別に設計されており、政治的な問い合わせへの回答を制限することでチャットボットが会社のポリシーに沿って動作することを保証します。</p></div>",
    "tags": "Governance",
    "summary": "Safety Guardrailは、不適切な出力をブロックまたは変更するために特別に設計されており、政治的な問い合わせへの回答を制限することでチャットボットが会社のポリシーに沿って動作することを保証します。"
  },
  {
    "id": 2,
    "question": "あるGenerative AIエンジニアが、ガバナンスと再現性を向上させるために、MLflowを使ってLLMをUnity Catalogに登録する必要があります。モデルを登録するにはどのような手順を踏むべきですか？",
    "choices": [
      {
        "text": "まずUnity Catalogで入出力フォーマットを定義し、その後MLflowにモデルを登録する。",
        "is_correct": false
      },
      {
        "text": "デプロイ前にUnity CatalogでモデルをFine-tuningする。",
        "is_correct": false
      },
      {
        "text": "学習済みモデルをMLflowにログし、model signatureを追加して、一元管理のためにUnity Catalogに登録する。",
        "is_correct": true
      },
      {
        "text": "モデルを学習し、直接Unity Catalogにアップロードする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 学習済みモデルをMLflowにログし、model signatureを追加して、一元管理のためにUnity Catalogに登録する。</div><p class='explanation-text'>正解：MLflowにモデルをログし、signatureを定義してUnity Catalogに登録することで、ガバナンス、追跡、再現性が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ まずUnity Catalogで入出力フォーマットを定義し、その後MLflowにモデルを登録する。</div><p class='explanation-text'>不正解：モデルの登録はMLflowからUnity Catalogへの流れであり、その逆ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ デプロイ前にUnity CatalogでモデルをFine-tuningする。</div><p class='explanation-text'>不正解：Unity CatalogはモデルのトレーニングやFine-tuningをサポートしていません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルを学習し、直接Unity Catalogにアップロードする。</div><p class='explanation-text'>不正解：Unity CatalogはMLflowとの統合を必要としており、メタデータ、バージョン管理、lineageを効果的に管理します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Unity CatalogへのLLM登録は、MLflowへのモデルのログ、入出力signatureの定義、ガバナンスと管理のための統合という手順で行います。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "Unity CatalogへのLLM登録は、MLflowへのモデルのログ、入出力signatureの定義、ガバナンスと管理のための統合という手順で行います。"
  },
  {
    "id": 3,
    "question": "あるGenerative AIエンジニアが、金融サービス会社向けのアシスタントを設計する任務を受けています。このアシスタントは、ユーザーの収入、支出、目標に基づいてパーソナライズされた貯蓄プランを推奨する必要があります。プロンプトには何を含めるべきですか？（2つ選択）",
    "choices": [
      {
        "text": "収入、支出、目標などの入力詳細を指定し、実行可能な推奨を要求する。例：(収入：500,000円、支出：300,000円。目標：旅行のための貯蓄。貯蓄の推奨を提供してください。)",
        "is_correct": true
      },
      {
        "text": "柔軟性を促すために目標の指定を避ける。",
        "is_correct": false
      },
      {
        "text": "成功した貯蓄プランの例を提供する。",
        "is_correct": true
      },
      {
        "text": "(貯蓄プランを生成してください。)のような汎用プロンプトを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 収入、支出、目標などの入力詳細を指定し、実行可能な推奨を要求する。例：(収入：500,000円、支出：300,000円。目標：旅行のための貯蓄。貯蓄の推奨を提供してください。)</div><p class='explanation-text'>正解：具体的な入力と明確な出力の期待値を提供することで、モデルが実行可能で関連性の高い貯蓄プランを生成することが保証されます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 成功した貯蓄プランの例を提供する。</div><p class='explanation-text'>正解：例を示すことで、モデルの出力を実践的な金融戦略に合わせるよう誘導できます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 柔軟性を促すために目標の指定を避ける。</div><p class='explanation-text'>不正解：目標はパーソナライズされた推奨を生成するために不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ (貯蓄プランを生成してください。)のような汎用プロンプトを使用する。</div><p class='explanation-text'>不正解：汎用的なプロンプトは詳細が不十分で、曖昧または無関係な回答につながる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>入力（収入、支出、目標）を指定し、例を含めることで、ユーザーのニーズに合ったパーソナライズされた実行可能な貯蓄の推奨をモデルが生成することが保証されます。</p></div>",
    "tags": "Design Applications",
    "summary": "入力（収入、支出、目標）を指定し、例を含めることで、ユーザーのニーズに合ったパーソナライズされた実行可能な貯蓄の推奨をモデルが生成することが保証されます。"
  },
  {
    "id": 4,
    "question": "あるGenerative AIエンジニアが、研究論文の要約システムを構築しています。論文には複雑な図や表が含まれることが多くあります。プロンプトを設計する際に何を優先すべきですか？",
    "choices": [
      {
        "text": "図や表を無視し、テキストコンテンツのみの要約を重視する。",
        "is_correct": true
      },
      {
        "text": "アブストラクトセクションのみの要約を優先する。",
        "is_correct": false
      },
      {
        "text": "要約のために図をテキスト説明に変換する。",
        "is_correct": false
      },
      {
        "text": "図や表をプロンプトに直接含める。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 図や表を無視し、テキストコンテンツのみの要約を重視する。</div><p class='explanation-text'>正解：研究論文には、視覚的なコンテンツよりもLLMの処理に適した構造化されたテキストが含まれています。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ アブストラクトセクションのみの要約を優先する。</div><p class='explanation-text'>不正解：アブストラクトのみを要約すると、出力の深さと完全性が低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約のために図をテキスト説明に変換する。</div><p class='explanation-text'>不正解：図の変換はノイズを導入し、情報を歪める可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 図や表をプロンプトに直接含める。</div><p class='explanation-text'>不正解：LLMは視覚情報を処理できないため、図を含めても結果は改善されません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>LLMにテキストに集中するよう指示することで、図のようなサポートされていないコンテンツからのノイズを導入することなく、高品質な要約が保証されます。</p></div>",
    "tags": "Application Development",
    "summary": "LLMにテキストに集中するよう指示することで、図のようなサポートされていないコンテンツからのノイズを導入することなく、高品質な要約が保証されます。"
  },
  {
    "id": 5,
    "question": "あるGenerative AIエンジニアが、在庫詳細に関するユーザークエリからJSON形式のレスポンスを生成するpromptを設計しています。各レスポンスにはitem name、stock level、locationのフィールドが含まれる必要があります。これを実現するpromptはどれですか？",
    "choices": [
      {
        "text": "在庫に関する情報を提供してください。",
        "is_correct": false
      },
      {
        "text": "クエリに基づいて、item_name、stock_level、locationを含むJSONレスポンスを生成してください。",
        "is_correct": true
      },
      {
        "text": "クエリに基づいて在庫の詳細を要約してください。",
        "is_correct": false
      },
      {
        "text": "在庫の詳細を含めてください。ただし、フォーマットは強制しません。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ クエリに基づいて、item_name、stock_level、locationを含むJSONレスポンスを生成してください。</div><p class='explanation-text'>この選択肢は、item name、stock level、locationなどの特定のフィールドを持つJSON形式のレスポンスを生成するという要件に直接対応しています。レスポンス形式が一貫しており、promptで要求されたすべての必要情報が含まれることを保証します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 在庫に関する情報を提供してください。</div><p class='explanation-text'>不正解：この選択肢はレスポンスにitem name、stock level、locationフィールドを含めることを指定していません。汎用的すぎて、特定のフィールドを持つJSON形式のレスポンスを生成するというpromptの要件を満たしていません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリに基づいて在庫の詳細を要約してください。</div><p class='explanation-text'>不正解：クエリに基づいて在庫の詳細を要約することには言及していますが、item name、stock level、locationフィールドの包含を指定していません。特定のフィールドを持つJSON形式のレスポンスを生成するというpromptの要件を満たすための具体性が欠けています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 在庫の詳細を含めてください。ただし、フォーマットは強制しません。</div><p class='explanation-text'>不正解：在庫の詳細を含めることは示唆していますが、特定のフォーマットを強制せず、item name、stock level、locationフィールドの包含にも言及していません。特定のフィールドを持つJSON形式のレスポンスを生成するというpromptの要件に合致していません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>適切に構造化されたpromptは、レスポンスがJSON形式で一貫してフォーマットされ、すべての必須フィールドが含まれることを保証します。</p></div>",
    "tags": "Design Applications",
    "summary": "適切に構造化されたpromptは、レスポンスがJSON形式で一貫してフォーマットされ、すべての必須フィールドが含まれることを保証します。"
  },
  {
    "id": 6,
    "question": "あるGenerative AIエンジニアが、金融規制に関する質問に答えるRAGアプリケーションを開発しています。取得されたコンテンツには無関係なセクションが含まれることが多くあります。検索プロセスを改善するためのアプローチはどれですか？",
    "choices": [
      {
        "text": "より多くのドキュメントを含めるために検索バッチサイズを増やす。",
        "is_correct": false
      },
      {
        "text": "要約モデルを使用して無関係なコンテンツを削減する。",
        "is_correct": false
      },
      {
        "text": "ルールベースのフィルタリングシステムに頼る。",
        "is_correct": false
      },
      {
        "text": "金融テキストでfine-tuningされたembeddingモデルを実装してsemantic relevanceを向上させる。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 金融テキストでfine-tuningされたembeddingモデルを実装してsemantic relevanceを向上させる。</div><p class='explanation-text'>正解：embeddingをfine-tuningすることで、金融規制のクエリとのアライメントが向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より多くのドキュメントを含めるために検索バッチサイズを増やす。</div><p class='explanation-text'>不正解：バッチサイズを大きくすると、relevanceを改善することなくノイズが増加する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約モデルを使用して無関係なコンテンツを削減する。</div><p class='explanation-text'>不正解：要約は検索プロセスを直接改善しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ルールベースのフィルタリングシステムに頼る。</div><p class='explanation-text'>不正解：ルールベースのシステムは多様なクエリへの柔軟性と適応性に欠けます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ドメイン固有のテキストでembeddingモデルをfine-tuningすることで、金融規制のコンテキストに合わせた検索relevanceが向上します。</p></div>",
    "tags": "Application Development",
    "summary": "ドメイン固有のテキストでembeddingモデルをfine-tuningすることで、金融規制のコンテキストに合わせた検索relevanceが向上します。"
  },
  {
    "id": 7,
    "question": "あるGenerative AIエンジニアが、デプロイされたRAGシステムを監視していると、無関係な出力によりユーザー満足度が低下しています。検索システムはlatencyも高い状態です。問題を診断・解決するために、エンジニアはどのmetricsに注目すべきですか？",
    "choices": [
      {
        "text": "コストを最適化するためのtoken使用量とレスポンスの長さ。",
        "is_correct": false
      },
      {
        "text": "需要パターンを特定するためのユーザークエリ頻度。",
        "is_correct": false
      },
      {
        "text": "relevanceを測定してボトルネックを特定するためのprecision、recall、retrieval latency。",
        "is_correct": true
      },
      {
        "text": "出力の流暢さと正確性を評価するためのperplexityとBLEU。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ relevanceを測定してボトルネックを特定するためのprecision、recall、retrieval latency。</div><p class='explanation-text'>正解：Precisionとrecallはrelevanceを評価し、retrieval latencyは検索ステップのパフォーマンスのボトルネックを明らかにします。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コストを最適化するためのtoken使用量とレスポンスの長さ。</div><p class='explanation-text'>不正解：これらのmetricsは検索のrelevanceやlatencyの問題に対応していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 需要パターンを特定するためのユーザークエリ頻度。</div><p class='explanation-text'>不正解：クエリ頻度の情報はrelevanceやパフォーマンスの問題を直接解決しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 出力の流暢さと正確性を評価するためのperplexityとBLEU。</div><p class='explanation-text'>不正解：これらのmetricsは言語生成に焦点を当てており、検索パフォーマンスではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Precision、recall、latencyは、relevanceと検索効率に関する重要な情報を提供し、無関係な出力の問題解決に役立ちます。</p></div>",
    "tags": "Evaluation and Monitoring",
    "summary": "Precision、recall、latencyは、relevanceと検索効率に関する重要な情報を提供し、無関係な出力の問題解決に役立ちます。"
  },
  {
    "id": 8,
    "question": "あるチームが技術的なクエリに回答するRAGシステムを構築しています。堅牢なretrieverを持っているにもかかわらず、システムの回答に具体性が欠けています。回答の品質を改善するにはどうすればよいですか？",
    "choices": [
      {
        "text": "分類タスクのためにretrieverをfine-tuningする。",
        "is_correct": false
      },
      {
        "text": "簡潔さに集中するために小さなLLMを使用する。",
        "is_correct": false
      },
      {
        "text": "より正確で関連性の高い回答を提供するために、context-awareなsummarizerでretrieverを補強する。",
        "is_correct": true
      },
      {
        "text": "retrieverのインデックスサイズを増やす。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ より正確で関連性の高い回答を提供するために、context-awareなsummarizerでretrieverを補強する。</div><p class='explanation-text'>正解：要約モデルは取得されたコンテンツを洗練させ、技術的なクエリに対して具体的かつターゲットを絞った回答を保証します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 分類タスクのためにretrieverをfine-tuningする。</div><p class='explanation-text'>不正解：分類タスクは回答の具体性を直接向上させません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 簡潔さに集中するために小さなLLMを使用する。</div><p class='explanation-text'>不正解：小さいモデルは具体性を向上させるのではなく、回答品質を損なう可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ retrieverのインデックスサイズを増やす。</div><p class='explanation-text'>不正解：インデックスを大きくすると検索オプションは増えますが、回答品質は保証されません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>検索とcontext-aware summarizerを組み合わせることで、回答が具体的かつ関連性の高いものとなり、全体的な回答品質が向上します。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "検索とcontext-aware summarizerを組み合わせることで、回答が具体的かつ関連性の高いものとなり、全体的な回答品質が向上します。"
  },
  {
    "id": 9,
    "question": "ある大規模なeコマースプラットフォームが、ユーザーの購買履歴を使用してパーソナライズされた提案を生成する商品レコメンデーションエンジンを必要としています。このユースケースに最適なpipeline設計はどれですか？",
    "choices": [
      {
        "text": "あらかじめ定義された商品カテゴリにルールベースのフィルターを使用する。",
        "is_correct": false
      },
      {
        "text": "履歴データなしで純粋にgenerativeなアプローチを実装する。",
        "is_correct": false
      },
      {
        "text": "ランダムにサンプリングされた商品に基づいてレコメンデーションを生成する。",
        "is_correct": false
      },
      {
        "text": "購買履歴にembeddingを使用し、similarity scoreに基づいてレコメンデーションを生成する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 購買履歴にembeddingを使用し、similarity scoreに基づいてレコメンデーションを生成する。</div><p class='explanation-text'>正解：embeddingベースのsimilarityにより、パーソナライズされたコンテキスト関連のレコメンデーションが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ あらかじめ定義された商品カテゴリにルールベースのフィルターを使用する。</div><p class='explanation-text'>不正解：ルールベースのフィルターはパーソナライズされたレコメンデーションに必要な柔軟性がありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 履歴データなしで純粋にgenerativeなアプローチを実装する。</div><p class='explanation-text'>不正解：Generativeモデルだけではコンテキストなしにパーソナライズされたレコメンデーションを提供できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ランダムにサンプリングされた商品に基づいてレコメンデーションを生成する。</div><p class='explanation-text'>不正解：ランダムサンプリングはユーザーの好みやニーズに対応していません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>EmbeddingベースのpipelineはユーザーのPreferenceと購買履歴を考慮するため、パーソナライズされたレコメンデーションに最適です。</p></div>",
    "tags": "Application Development",
    "summary": "EmbeddingベースのpipelineはユーザーのPreferenceと購買履歴を考慮するため、パーソナライズされたレコメンデーションに最適です。"
  },
  {
    "id": 10,
    "question": "あるGenerative AIエンジニアが、generativeモデルがレスポンス内で機密データを漏洩しないようにguardrailを実装する必要があります。最も効果的な戦略はどれですか？",
    "choices": [
      {
        "text": "metapromptを使用して、機密データを含めないようモデルに明示的に指示する。",
        "is_correct": true
      },
      {
        "text": "post-processingフィルターを使用して機密情報を削除する。",
        "is_correct": false
      },
      {
        "text": "要約モデルを適用してレスポンスを短縮する。",
        "is_correct": false
      },
      {
        "text": "ランダム性を減らすためにモデルのtemperatureを下げる。",
        "is_correct": false
      }
    ],
    "explanation": "<div class=’explanation-container’><h4 class=’explanation-section-header solution’>✅ 正解の選択肢</h4><div class=’explanation-box solution’><div class=’explanation-item’><div class=’explanation-badge correct’>✓ metapromptを使用して、機密データを含めないようモデルに明示的に指示する。</div><p class=’explanation-text’>正解：Metapromptはモデルの動作を誘導し、データ漏洩を防ぐのに効果的です。</p></div></div><h4 class=’explanation-section-header incorrect’>❌ 不正解の選択肢</h4><div class=’explanation-box incorrect’><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ post-processingフィルターを使用して機密情報を削除する。</div><p class=’explanation-text’>不正解：Post-processingはいくつかの問題を捉えられますが、metapromptよりも事後対応的です。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ 要約モデルを適用してレスポンスを短縮する。</div><p class=’explanation-text’>不正解：要約は機密データの漏洩を直接防ぎません。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ ランダム性を減らすためにモデルのtemperatureを下げる。</div><p class=’explanation-text’>不正解：Temperatureを下げると変動性は減りますが、データ漏洩は防げません。</p></div></div><h4 class=’explanation-section-header problem’>📌 全体的な解説</h4><p class=’explanation-box problem’>Metapromptはモデルの出力に対する事前制御を保証し、機密データの漏洩を効果的に防ぎます。</p></div>",
    "tags": "Application Development",
    "summary": "Metapromptはモデルの出力に対する事前制御を保証し、機密データの漏洩を効果的に防ぎます。"
  },
  {
    "id": 11,
    "question": "あるGenerative AIエンジニアが、金融RAGシステムのトレーニングに高品質なソースドキュメントを優先する必要があります。どのソースに注目すべきですか？",
    "choices": [
      {
        "text": "規制当局への提出書類と公式金融レポート。",
        "is_correct": true
      },
      {
        "text": "金融イベントを要約したニュース記事。",
        "is_correct": false
      },
      {
        "text": "ユーザーが執筆した金融ブログ。",
        "is_correct": false
      },
      {
        "text": "ユーザーが投稿した金融フォーラムの書き込み。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 規制当局への提出書類と公式金融レポート。</div><p class='explanation-text'>正解：これらのソースは権威があり、正確で信頼性の高いトレーニングデータを確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 金融イベントを要約したニュース記事。</div><p class='explanation-text'>不正解：ニュース記事は二次的なソースであり、詳細が欠ける場合があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーが執筆した金融ブログ。</div><p class='explanation-text'>不正解：ブログは不正確な情報や個人的な意見を含む可能性があり、トレーニングには信頼性がありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーが投稿した金融フォーラムの書き込み。</div><p class='explanation-text'>不正解：フォーラムには未検証または偏ったコンテンツが含まれることが多く、トレーニングには不適切です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>規制当局への提出書類のような権威あるソースを使用することで、金融RAGアプリケーションに向けた正確で信頼性の高いデータが確保されます。</p></div>",
    "tags": "Data Preparation",
    "summary": "規制当局への提出書類のような権威あるソースを使用することで、金融RAGアプリケーションに向けた正確で信頼性の高いデータが確保されます。"
  },
  {
    "id": 12,
    "question": "あるGenerative AIエンジニアが、デジタルマーケティング会社でカスタマーサービスの問い合わせ対応を支援するLLMアプリケーションをデプロイしました。アプリケーションの本番パフォーマンスを評価するために監視すべきメトリクスはどれですか？",
    "choices": [
      {
        "text": "単位時間あたりに処理された顧客問い合わせ件数。",
        "is_correct": true
      },
      {
        "text": "クエリあたりのエネルギー使用量。",
        "is_correct": false
      },
      {
        "text": "ベースLLMのHuggingFace Leaderboard値。",
        "is_correct": false
      },
      {
        "text": "モデルトレーニングの最終perplexityスコア。",
        "is_correct": false
      }
    ],
    "explanation": "<div class=’explanation-container’><h4 class=’explanation-section-header solution’>✅ 正解の選択肢</h4><div class=’explanation-box solution’><div class=’explanation-item’><div class=’explanation-badge correct’>✓ 単位時間あたりに処理された顧客問い合わせ件数。</div><p class=’explanation-text’>正解：throughputを監視することで、アプリケーションが予想される量の顧客クエリを効率的に処理できることが保証されます。</p></div></div><h4 class=’explanation-section-header incorrect’>❌ 不正解の選択肢</h4><div class=’explanation-box incorrect’><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ クエリあたりのエネルギー使用量。</div><p class=’explanation-text’>不正解：コスト最適化には有用ですが、このメトリクスはアプリケーションのパフォーマンスを評価しません。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ ベースLLMのHuggingFace Leaderboard値。</div><p class=’explanation-text’>不正解：これらの値は一般的なモデルのベンチマークを評価しますが、デプロイされたアプリケーションのパフォーマンスを示しません。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ モデルトレーニングの最終perplexityスコア。</div><p class=’explanation-text’>不正解：Perplexityはトレーニングの評価に関連しており、本番パフォーマンスではありません。</p></div></div><h4 class=’explanation-section-header problem’>📌 全体的な解説</h4><p class=’explanation-box problem’>Throughputの監視は本番環境において、アプリケーションが顧客の問い合わせをどれだけ効果的に処理しているかを測定するために不可欠です。</p></div>",
    "tags": "Evaluation and Monitoring",
    "summary": "Throughputの監視は本番環境において、アプリケーションが顧客の問い合わせをどれだけ効果的に処理しているかを測定するために不可欠です。"
  },
  {
    "id": 13,
    "question": "LLMをドキュメント要約pipelineに統合する際に、context lengthを評価することが重要な理由は何ですか？",
    "choices": [
      {
        "text": "より短い要約を確保するため。",
        "is_correct": false
      },
      {
        "text": "モデルのトレーニング効率を向上させるため。",
        "is_correct": false
      },
      {
        "text": "token使用量とinferenceコストを削減するため。",
        "is_correct": false
      },
      {
        "text": "モデルが入力ドキュメントをtruncationなく処理でき、重要な情報が保持されることを確保するため。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ モデルが入力ドキュメントをtruncationなく処理でき、重要な情報が保持されることを確保するため。</div><p class='explanation-text'>正解：適切なcontext lengthにより、ドキュメント全体が処理され、重要な詳細の損失を防ぐことができます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より短い要約を確保するため。</div><p class='explanation-text'>不正解：Context lengthは要約の長さを直接制御しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルのトレーニング効率を向上させるため。</div><p class='explanation-text'>不正解：Context lengthはトレーニング効率とは無関係で、inference時の入力処理に影響します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ token使用量とinferenceコストを削減するため。</div><p class='explanation-text'>不正解：Context lengthはコストに影響しますが、主な役割は入力を効果的に処理することです。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Context lengthを評価することで、モデルがtruncationによる重要な詳細の損失なしにドキュメント全体を処理できることが保証されます。</p></div>",
    "tags": "Application Development",
    "summary": "Context lengthを評価することで、モデルがtruncationによる重要な詳細の損失なしにドキュメント全体を処理できることが保証されます。"
  },
  {
    "id": 14,
    "question": "あるGenerative AIエンジニアが、RAGシステムで使用する製品マニュアルから無関係なセクションをフィルタリングする任務を受けています。マニュアルにはマーケティング説明、免責事項、技術仕様が含まれています。どのセクションを保持すべきですか？",
    "choices": [
      {
        "text": "ユーザーのクエリに関連する技術仕様のみを保持する。",
        "is_correct": true
      },
      {
        "text": "すべてのセクションを削除し、pre-trainedモデルの知識のみに依存する。",
        "is_correct": false
      },
      {
        "text": "完全性のためにすべてのセクションを保持する。",
        "is_correct": false
      },
      {
        "text": "免責事項と技術仕様を含める。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ユーザーのクエリに関連する技術仕様のみを保持する。</div><p class='explanation-text'>正解：技術的なセクションに集中することでユーザーのニーズに対応し、retrieval relevanceが向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ すべてのセクションを削除し、pre-trainedモデルの知識のみに依存する。</div><p class='explanation-text'>不正解：すべてのセクションを削除すると、検索に重要なドキュメントコンテキストが失われます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 完全性のためにすべてのセクションを保持する。</div><p class='explanation-text'>不正解：マーケティング説明のような無関係なセクションはノイズを加え、システムパフォーマンスを低下させます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 免責事項と技術仕様を含める。</div><p class='explanation-text'>不正解：免責事項はクエリの解決にほとんど関連しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>マーケティング説明のような無関係なセクションをフィルタリングすることで、RAGシステムが正確なコンテキスト関連情報を取得できるようになります。</p></div>",
    "tags": "Data Preparation",
    "summary": "マーケティング説明のような無関係なセクションをフィルタリングすることで、RAGシステムが正確なコンテキスト関連情報を取得できるようになります。"
  },
  {
    "id": 15,
    "question": "あるGenerative AIエンジニアが、foundation model APIを使用するRAG (Retrieval-Augmented Generation) アプリケーションを提供する必要があります。コスト最適化の主要な考慮事項は何ですか？",
    "choices": [
      {
        "text": "精度を向上させるためにより大きなモデルを使用する。",
        "is_correct": false
      },
      {
        "text": "pipelineを簡素化するためにretrieverを削除する。",
        "is_correct": false
      },
      {
        "text": "API呼び出しを減らすためにinference時に複数のユーザークエリをバッチ処理する。",
        "is_correct": true
      },
      {
        "text": "監視のためにリアルタイムのクエリloggingを有効にする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ API呼び出しを減らすためにinference時に複数のユーザークエリをバッチ処理する。</div><p class='explanation-text'>正解：クエリをバッチ処理することでAPI呼び出し数が減り、パフォーマンスを損なうことなくコストが削減されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 精度を向上させるためにより大きなモデルを使用する。</div><p class='explanation-text'>不正解：大きなモデルはパフォーマンスを向上させますが、コストが大幅に増加します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ pipelineを簡素化するためにretrieverを削除する。</div><p class='explanation-text'>不正解：RetrieverはRAGワークフローに不可欠であり、除外できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 監視のためにリアルタイムのクエリloggingを有効にする。</div><p class='explanation-text'>不正解：Loggingはデバッグには役立ちますが、コストを削減しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>クエリのバッチ処理はAPI呼び出し頻度を削減し、システムパフォーマンスを維持しながらコストを最適化するのに役立ちます。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "クエリのバッチ処理はAPI呼び出し頻度を削減し、システムパフォーマンスを維持しながらコストを最適化するのに役立ちます。"
  },
  {
    "id": 16,
    "question": "あるGenerative AIエンジニアが、RAGシステム向けのニュース記事データセットをクリーニングする必要があります。記事には無関係な広告や冗長なmetadataが含まれています。必要なpreprocessingのステップはどれですか？",
    "choices": [
      {
        "text": "一貫性のためにすべての記事を1つのファイルにマージする。",
        "is_correct": false
      },
      {
        "text": "各記事をより短い形式に要約する。",
        "is_correct": false
      },
      {
        "text": "広告とmetadataを削除して記事の本文のみを保持する。",
        "is_correct": true
      },
      {
        "text": "元の構造を保持するためにデータセットのすべての部分を残す。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 広告とmetadataを削除して記事の本文のみを保持する。</div><p class='explanation-text'>正解：無関係なコンテンツをクリーニングすることで、RAGシステムが有意義な情報を効率的に取得できるようになります。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 一貫性のためにすべての記事を1つのファイルにマージする。</div><p class='explanation-text'>不正解：マージしても不要なコンテンツの問題は解決されません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 各記事をより短い形式に要約する。</div><p class='explanation-text'>不正解：要約は無関係なmetadataや広告の問題に対応していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 元の構造を保持するためにデータセットのすべての部分を残す。</div><p class='explanation-text'>不正解：不要なコンテンツを保持すると検索のrelevanceが低下し、ノイズが増加します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>広告やmetadataのような無関係なコンテンツを削除することでデータセットがクリーンになり、検索とクエリの精度が向上します。</p></div>",
    "tags": "Data Preparation",
    "summary": "広告やmetadataのような無関係なコンテンツを削除することでデータセットがクリーンになり、検索とクエリの精度が向上します。"
  },
  {
    "id": 17,
    "question": "あるGenerative AIエンジニアが、RAGアプリケーションにサードパーティのデータセットを統合しています。データセット内の一部のドキュメントが有害な誤情報を含むとしてフラグが立てられています。どのような軽減戦略を使用すべきですか？",
    "choices": [
      {
        "text": "フラグが立てられたドキュメントを使用するが、出力に免責事項を追加する。",
        "is_correct": false
      },
      {
        "text": "フラグが立てられたドキュメントを許可するが、それらを無視するようにモデルをトレーニングする。",
        "is_correct": false
      },
      {
        "text": "フラグが立てられたドキュメントを保持するが、inference中の影響を監視する。",
        "is_correct": false
      },
      {
        "text": "誤情報がアプリケーションに入り込まないよう、preprocessingの段階でフラグが立てられたドキュメントを除外する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 誤情報がアプリケーションに入り込まないよう、preprocessingの段階でフラグが立てられたドキュメントを除外する。</div><p class='explanation-text'>正解：フラグが立てられたドキュメントを除外することで、データセットの信頼性が維持され、有害な誤情報が含まれないことが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ フラグが立てられたドキュメントを使用するが、出力に免責事項を追加する。</div><p class='explanation-text'>不正解：免責事項は誤情報がシステムに影響するリスクを軽減しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ フラグが立てられたドキュメントを許可するが、それらを無視するようにモデルをトレーニングする。</div><p class='explanation-text'>不正解：モデルはpreprocessingなしでフラグが立てられたコンテンツを確実に除外することができません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ フラグが立てられたドキュメントを保持するが、inference中の影響を監視する。</div><p class='explanation-text'>不正解：監視してもアプリケーションの出力に誤情報が影響するのを防ぐことはできません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>フラグが立てられたドキュメントを除外することで、アプリケーションが誤情報を避けられるようになり、信頼性と倫理的基準が維持されます。</p></div>",
    "tags": "Governance",
    "summary": "フラグが立てられたドキュメントを除外することで、アプリケーションが誤情報を避けられるようになり、信頼性と倫理的基準が維持されます。"
  },
  {
    "id": 18,
    "question": "あるGenerative AIエンジニアが、金融アプリケーション向けにJPG形式のスキャンした請求書からテキストを抽出する必要があります。このタスクに最も適したPythonパッケージはどれですか？",
    "choices": [
      {
        "text": "画像をパースするためのpdfplumber。",
        "is_correct": false
      },
      {
        "text": "pytesserractパッケージを通じたTesseract OCR。",
        "is_correct": true
      },
      {
        "text": "画像からテキストを抽出するためのPyPDF2。",
        "is_correct": false
      },
      {
        "text": "テキストをパースするためのBeautifulSoup。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ pytesserractパッケージを通じたTesseract OCR。</div><p class='explanation-text'>正解：pytesseractはJPG形式を含むスキャン画像からのテキスト抽出に広く使用されています。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 画像をパースするためのpdfplumber。</div><p class='explanation-text'>不正解：pdfplumberはPDFドキュメントからのテキスト抽出用であり、画像向けではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 画像からテキストを抽出するためのPyPDF2。</div><p class='explanation-text'>不正解：PyPDF2はPDF向けであり、画像ファイル向けではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ テキストをパースするためのBeautifulSoup。</div><p class='explanation-text'>不正解：BeautifulSoupはHTMLとXMLのパースに使用され、画像ベースのOCRタスクには向いていません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>pytesseractはJPGのような画像ファイルからのテキスト抽出に強力なOCR機能を提供し、このタスクに最適です。</p></div>",
    "tags": "Data Preparation",
    "summary": "pytesseractはJPGのような画像ファイルからのテキスト抽出に強力なOCR機能を提供し、このタスクに最適です。"
  },
  {
    "id": 19,
    "question": "あるGenerative AIエンジニアが、ナレッジマネジメントシステムのために大規模なvector databaseをクエリする任務を受けています。パフォーマンスと精度のためにクエリプロセスをどのように最適化すべきですか？",
    "choices": [
      {
        "text": "正確な検索のために適切なdistance metricsを用いたnearest-neighbor searchアルゴリズムを使用する。",
        "is_correct": true
      },
      {
        "text": "embeddingの最適化をスキップして生のテキスト検索に頼る。",
        "is_correct": false
      },
      {
        "text": "最大精度のためにbrute-force searchを実行する。",
        "is_correct": false
      },
      {
        "text": "より小さなembeddingモデルを使用してクエリの複雑さを減らす。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 正確な検索のために適切なdistance metricsを用いたnearest-neighbor searchアルゴリズムを使用する。</div><p class='explanation-text'>正解：Nearest-neighbor searchアルゴリズムはvector databaseクエリのパフォーマンスと精度を最適化します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embeddingの最適化をスキップして生のテキスト検索に頼る。</div><p class='explanation-text'>不正解：生のテキスト検索はsemantic matchingのためのvector searchの力を活用しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 最大精度のためにbrute-force searchを実行する。</div><p class='explanation-text'>不正解：Brute-force searchは計算コストが高く、大規模データセットには現実的ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より小さなembeddingモデルを使用してクエリの複雑さを減らす。</div><p class='explanation-text'>不正解：小さいembeddingはsemantic accuracyを低下させる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>最適化されたdistance metricsを用いたnearest-neighbor searchにより、高パフォーマンスで正確なvector databaseクエリが保証されます。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "最適化されたdistance metricsを用いたnearest-neighbor searchにより、高パフォーマンスで正確なvector databaseクエリが保証されます。"
  },
  {
    "id": 20,
    "question": "あるGenerative AIエンジニアが、医療に関する問い合わせを扱うチャットボットにsafety guardrailを実装する必要があります。チャットボットは医療アドバイスを避けつつ、関連情報は提供しなければなりません。最も適切なguardrailの技法はどれですか？",
    "choices": [
      {
        "text": "生成後にリスクのある出力にフラグを立てるclassifierを適用する。",
        "is_correct": false
      },
      {
        "text": "ランダム性を制限するためにモデルのtemperatureを下げる。",
        "is_correct": false
      },
      {
        "text": "中立的な言語のデータセットでLLMをトレーニングする。",
        "is_correct": false
      },
      {
        "text": "医療アドバイスを控えて一般的な情報のみを提供するようチャットボットに指示するmetapromptを使用する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class=’explanation-container’><h4 class=’explanation-section-header solution’>✅ 正解の選択肢</h4><div class=’explanation-box solution’><div class=’explanation-item’><div class=’explanation-badge correct’>✓ 医療アドバイスを控えて一般的な情報のみを提供するようチャットボットに指示するmetapromptを使用する。</div><p class=’explanation-text’>正解：Metapromptはチャットボットの動作を誘導し、関連する情報を提供しながら医療アドバイスを避けることを保証します。</p></div></div><h4 class=’explanation-section-header incorrect’>❌ 不正解の選択肢</h4><div class=’explanation-box incorrect’><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ 生成後にリスクのある出力にフラグを立てるclassifierを適用する。</div><p class=’explanation-text’>不正解：生成後のclassifierは積極的なmetapromptingより効率が劣ります。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ ランダム性を制限するためにモデルのtemperatureを下げる。</div><p class=’explanation-text’>不正解：temperatureの調整は変動性を減らしますが、安全上の懸念には対応しません。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ 中立的な言語のデータセットでLLMをトレーニングする。</div><p class=’explanation-text’>不正解：トレーニングだけでは回答での医療アドバイスの回避を保証できません。</p></div></div><h4 class=’explanation-section-header problem’>📌 全体的な解説</h4><p class=’explanation-box problem’>MetapromptはチャットボットがSafetyと倫理的ガイドラインに準拠することを保証する積極的なguardrailを提供します。</p></div>",
    "tags": "Application Development",
    "summary": "MetapromptはチャットボットがSafetyと倫理的ガイドラインに準拠することを保証する積極的なguardrailを提供します。"
  },
  {
    "id": 21,
    "question": "あるGenerative AIエンジニアがRAGアプリケーション向けのLLMを選定しています。アプリケーションは長いドキュメントを取得し、モデルは主要なセクションを正確に要約する必要があります。LLMの選択を導く要因はどれですか？",
    "choices": [
      {
        "text": "retrieval precisionとrecall。",
        "is_correct": false
      },
      {
        "text": "context length、要約品質、inference speed。",
        "is_correct": true
      },
      {
        "text": "token limitとBLEUスコア。",
        "is_correct": false
      },
      {
        "text": "モデルサイズとトレーニングデータセットの多様性。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ context length、要約品質、inference speed。</div><p class='explanation-text'>正解：これらの要因により、LLMが長いドキュメントを処理し、効果的に要約して、タイムリーな回答を提供できることが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ retrieval precisionとrecall。</div><p class='explanation-text'>不正解：Retrieval metricsはドキュメント検索の品質を評価しますが、LLMの要約パフォーマンスではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ token limitとBLEUスコア。</div><p class='explanation-text'>不正解：BLEUスコアはテキスト生成を評価しますが、要約品質やinference speedには対応していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルサイズとトレーニングデータセットの多様性。</div><p class='explanation-text'>不正解：重要ではありますが、これらの要因は特定のアプリケーション要件と直接対応していません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Context length、要約品質、inference speedにより、LLMがRAGアプリケーションにおける長いドキュメントの要約に適していることが保証されます。</p></div>",
    "tags": "Evaluation and Monitoring",
    "summary": "Context length、要約品質、inference speedにより、LLMがRAGアプリケーションにおける長いドキュメントの要約に適していることが保証されます。"
  },
  {
    "id": 22,
    "question": "大規模言語モデルが創造的で多様な回答を生成するように促すtemperatureの設定値はどれですか？",
    "choices": [
      {
        "text": "temperatureをちょうど0.5に設定する。",
        "is_correct": false
      },
      {
        "text": "temperatureを0に近い値に下げる。",
        "is_correct": false
      },
      {
        "text": "制約のない出力のためにtemperature制御を無効にする。",
        "is_correct": false
      },
      {
        "text": "temperatureを1.0以上のような高い値に上げる。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ temperatureを1.0以上のような高い値に上げる。</div><p class='explanation-text'>正解：高いtemperatureはよりランダムな要素をもたらし、オープンエンドなタスクに適した創造的で多様な出力を実現します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ temperatureをちょうど0.5に設定する。</div><p class='explanation-text'>不正解：中間のtemperatureはランダム性と決定性のバランスを取りますが、創造性を最大化しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ temperatureを0に近い値に下げる。</div><p class='explanation-text'>不正解：低いtemperatureはランダム性を減らし、より決定論的で創造性の低い出力につながります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 制約のない出力のためにtemperature制御を無効にする。</div><p class='explanation-text'>不正解：ほとんどのモデルは創造性とコヒーレンスのバランスを取るためにtemperatureの設定が必要です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Temperatureを上げるとランダム性が促進され、モデルがブレインストーミングやストーリーテリングタスクに最適な多様で創造的な回答を生成できるようになります。</p></div>",
    "tags": "Design Applications",
    "summary": "Temperatureを上げるとランダム性が促進され、モデルがブレインストーミングやストーリーテリングタスクに最適な多様で創造的な回答を生成できるようになります。"
  },
  {
    "id": 23,
    "question": "あるGenerative AIエンジニアが、法的契約書のレビューを支援するマルチステージの推論システムを構築しています。システムは潜在的な問題を特定し、修正案を提示し、重要な条項を強調表示する必要があります。不可欠なツールはどれですか？（2つ選択）",
    "choices": [
      {
        "text": "契約条項をsemanticallyに分析するためのembeddingモデル。",
        "is_correct": true
      },
      {
        "text": "契約テキストを凝縮するための要約モデル。",
        "is_correct": false
      },
      {
        "text": "関連する法的参照や判例を取得するためのretriever。",
        "is_correct": true
      },
      {
        "text": "強調表示された条項を表示するための可視化ツール。",
        "is_correct": false
      },
      {
        "text": "条項をタイプ別にラベル付けするためのclassificationモデル。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 契約条項をsemanticallyに分析するためのembeddingモデル。</div><p class='explanation-text'>Embeddingモデルは契約条項をsemanticallyに分析するために不可欠で、システムがテキストの意味とコンテキストを理解できます。これは法的契約書レビューにおける潜在的な問題の特定と修正案の提示に重要です。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 関連する法的参照や判例を取得するためのretriever。</div><p class='explanation-text'>Retrieverは法的契約書レビューの推論プロセスをサポートするために使用できる関連する法的参照や判例を取得するために必要です。このツールにより、システムがユーザーに正確で十分な情報に基づいた提案を提供できます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 契約テキストを凝縮するための要約モデル。</div><p class='explanation-text'>要約モデルは契約テキストの凝縮に役立ちますが、法的契約書レビューに必要なマルチステージ推論システムにとってembeddingモデルとretrieverほど重要ではありません。要約は読みやすさを向上させますが、問題の特定や修正案の提示には必須ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 強調表示された条項を表示するための可視化ツール。</div><p class='explanation-text'>強調表示された条項を表示する可視化ツールはユーザー体験を向上させる可能性がありますが、法的契約書レビューのマルチステージ推論システムのコア機能にとってembeddingモデルとretrieverほど不可欠ではありません。このツールは結果の提示を改善しますが、システムの機能の根本的な要件ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 条項をタイプ別にラベル付けするためのclassificationモデル。</div><p class='explanation-text'>Classificationモデルは条項のタイプ別ラベル付けに有用ですが、法的契約書レビューに必要なマルチステージ推論システムにとってembeddingモデルとretrieverほど不可欠ではありません。このツールはシステムの機能を強化しますが、コア要件ではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>EmbeddingとretrieverをSemanticallyに組み合わせることで、法的契約書の問題特定と修正案の提示が効果的に行われます。</p></div>",
    "tags": "Design Applications",
    "summary": "EmbeddingとretrieverをSemanticallyに組み合わせることで、法的契約書の問題特定と修正案の提示が効果的に行われます。"
  },
  {
    "id": 24,
    "question": "あるGenerative AIエンジニアがRAGアプリケーション向けにセキュアなエンドポイントをデプロイする必要があります。エンドポイントは機密性の高い法的ドキュメントを扱い、データプライバシー規制に準拠する必要があります。不可欠な対策はどれですか？（2つ選択）",
    "choices": [
      {
        "text": "無制限のアクセスを許可するために認証をスキップする。",
        "is_correct": false
      },
      {
        "text": "機密情報を保護するためにデータを保存時と転送時に暗号化する。",
        "is_correct": true
      },
      {
        "text": "エンドポイントへのアクセスにAPIキーベースの認証を実装する。",
        "is_correct": true
      },
      {
        "text": "アクセスを簡素化するために暗号化なしのパブリックエンドポイントを使用する。",
        "is_correct": false
      },
      {
        "text": "すべてのユーザーに共有アクセスキーを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 機密情報を保護するためにデータを保存時と転送時に暗号化する。</div><p class='explanation-text'>正解：暗号化はデータのセキュリティとプライバシー規制への準拠を保証します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ エンドポイントへのアクセスにAPIキーベースの認証を実装する。</div><p class='explanation-text'>正解：APIキー認証により、許可されたユーザーのみがエンドポイントにアクセスできることが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 無制限のアクセスを許可するために認証をスキップする。</div><p class='explanation-text'>不正解：認証は機密性の高いシステムの保護に不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ アクセスを簡素化するために暗号化なしのパブリックエンドポイントを使用する。</div><p class='explanation-text'>不正解：暗号化なしのパブリックエンドポイントは機密データをセキュリティリスクにさらします。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ すべてのユーザーに共有アクセスキーを使用する。</div><p class='explanation-text'>不正解：共有キーは安全でなく、ユーザー固有の制御がありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>暗号化とAPIキー認証は、セキュアでコンプライアンスに準拠したエンドポイントデプロイのための重要な対策です。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "暗号化とAPIキー認証は、セキュアでコンプライアンスに準拠したエンドポイントデプロイのための重要な対策です。"
  },
  {
    "id": 25,
    "question": "あるGenerative AIエンジニアが、構造化されていないユーザーフィードバックを実行可能なタスクに変換するAI pipelineを設計する任務を受けています。pipelineはフィードバックから優先事項と期限を強調表示する必要があります。最善のアプローチはどれですか？",
    "choices": [
      {
        "text": "フィードバックを凝縮するための要約モデルを使用する。",
        "is_correct": false
      },
      {
        "text": "フィードバックを分類するためのclassificationモデルを使用する。",
        "is_correct": false
      },
      {
        "text": "キーワードを抽出するためのルールベースシステムを使用する。",
        "is_correct": false
      },
      {
        "text": "LLMを使用してユーザーフィードバックを分析し、優先事項と期限を含む構造化された出力を生成する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ LLMを使用してユーザーフィードバックを分析し、優先事項と期限を含む構造化された出力を生成する。</div><p class='explanation-text'>正解：LLMは構造化されていない入力を処理し、実行可能で構造化された出力を効果的に生成します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ フィードバックを凝縮するための要約モデルを使用する。</div><p class='explanation-text'>不正解：要約は優先事項や期限を抽出しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ フィードバックを分類するためのclassificationモデルを使用する。</div><p class='explanation-text'>不正解：分類だけでは実行可能なタスクは生成されません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ キーワードを抽出するためのルールベースシステムを使用する。</div><p class='explanation-text'>不正解：ルールベースシステムは多様なフィードバックへの柔軟性と適応性に欠けます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>LLMは構造化されていないフィードバックを構造化された実行可能な出力に動的に変換し、ビジネス要件を満たします。</p></div>",
    "tags": "Design Applications",
    "summary": "LLMは構造化されていないフィードバックを構造化された実行可能な出力に動的に変換し、ビジネス要件を満たします。"
  },
  {
    "id": 26,
    "question": "あるGenerative AIエンジニアが、技術的なドキュメントを検索してユーザーのクエリに回答するpipelineを構築する任務を受けています。正確な回答を最も確実に保証する戦略はどれですか？",
    "choices": [
      {
        "text": "ドキュメントマッチングにpre-trained embeddingのみを使用する。",
        "is_correct": false
      },
      {
        "text": "ドキュメント固有の詳細を含まない汎用promptに頼る。",
        "is_correct": false
      },
      {
        "text": "ドキュメント検索とコンテキストベースのprompt augmentationを組み合わせて、ユーザークエリに関連する詳細を含める。",
        "is_correct": true
      },
      {
        "text": "利用可能な最小のLLMの使用に集中する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class=’explanation-container’><h4 class=’explanation-section-header solution’>✅ 正解の選択肢</h4><div class=’explanation-box solution’><div class=’explanation-item’><div class=’explanation-badge correct’>✓ ドキュメント検索とコンテキストベースのprompt augmentationを組み合わせて、ユーザークエリに関連する詳細を含める。</div><p class=’explanation-text’>正解：取得されたコンテキストでユーザーのpromptをaugmentすることで、LLMが正確な回答を生成する能力が向上します。</p></div></div><h4 class=’explanation-section-header incorrect’>❌ 不正解の選択肢</h4><div class=’explanation-box incorrect’><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ ドキュメントマッチングにpre-trained embeddingのみを使用する。</div><p class=’explanation-text’>不正解：Embeddingは有用ですが、詳細な回答に必要なコンテキストを提供しません。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ ドキュメント固有の詳細を含まない汎用promptに頼る。</div><p class=’explanation-text’>不正解：汎用promptは重要なコンテキストを除外することで精度を低下させます。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ 利用可能な最小のLLMの使用に集中する。</div><p class=’explanation-text’>不正解：小さいモデルは複雑なクエリを効果的に処理する能力が欠けている場合があります。</p></div></div><h4 class=’explanation-section-header problem’>📌 全体的な解説</h4><p class=’explanation-box problem’>ドキュメント検索とcontext augmentationを組み合わせることで、ユーザークエリに合わせた正確でコンテキストを考慮した回答が保証されます。</p></div>",
    "tags": "Application Development",
    "summary": "ドキュメント検索とcontext augmentationを組み合わせることで、ユーザークエリに合わせた正確でコンテキストを考慮した回答が保証されます。"
  },
  {
    "id": 27,
    "question": "あるGenerative AIエンジニアが、透かしやロゴのような余分な情報を含むスキャンした金融ドキュメントのデータセットをクリーニングする必要があります。最も効果的なpreprocessingステップはどれですか？",
    "choices": [
      {
        "text": "テキスト抽出の前にimage preprocessingの技術を使用して透かしとロゴをフィルタリングする。",
        "is_correct": true
      },
      {
        "text": "テキストが欠けているセクションを削除する。",
        "is_correct": false
      },
      {
        "text": "抽出されたコンテンツを凝縮するための要約モデルを適用する。",
        "is_correct": false
      },
      {
        "text": "ドキュメントの真正性を保持するためにすべてのデータを残す。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ テキスト抽出の前にimage preprocessingの技術を使用して透かしとロゴをフィルタリングする。</div><p class='explanation-text'>正解：画像のpreprocessingにより視覚的なノイズが除去され、テキスト抽出の品質が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ テキストが欠けているセクションを削除する。</div><p class='explanation-text'>不正解：不完全なセクションの削除は余分なコンテンツを対象としていません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 抽出されたコンテンツを凝縮するための要約モデルを適用する。</div><p class='explanation-text'>不正解：要約はテキストを凝縮しますが、クリーニングには対応していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ドキュメントの真正性を保持するためにすべてのデータを残す。</div><p class='explanation-text'>不正解：余分な要素は抽出されたテキストとその後のタスクの品質を低下させます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Image preprocessingによりよりクリーンなテキスト抽出が保証され、その後のタスクの品質が向上します。</p></div>",
    "tags": "Data Preparation",
    "summary": "Image preprocessingによりよりクリーンなテキスト抽出が保証され、その後のタスクの品質が向上します。"
  },
  {
    "id": 28,
    "question": "あるGenerative AIエンジニアが、ユーザーのクエリにパーソナライズされた回答を生成するLangChain chainを作成する必要があります。chainはvector storeからのコンテキストを含み、一貫性のある回答を生成する必要があります。chainに含めるべきコンポーネントはどれですか？（2つ選択）",
    "choices": [
      {
        "text": "ユーザーの意図をラベル付けするためのclassificationモデル。",
        "is_correct": false
      },
      {
        "text": "回答をハードコードするためのルールベースシステム。",
        "is_correct": false
      },
      {
        "text": "ユーザー入力を凝縮するための要約モデル。",
        "is_correct": false
      },
      {
        "text": "LLM向けにユーザークエリを構造化するためのprompt template。",
        "is_correct": true
      },
      {
        "text": "vector storeから関連するコンテキストを取得するためのretriever。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ LLM向けにユーザークエリを構造化するためのprompt template。</div><p class='explanation-text'>正解：Prompt templateはLLMが一貫性のある関連した回答を生成するよう誘導します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ vector storeから関連するコンテキストを取得するためのretriever。</div><p class='explanation-text'>正解：Retrieverはコンテキストへの動的なアクセスを可能にし、回答品質を向上させます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーの意図をラベル付けするためのclassificationモデル。</div><p class='explanation-text'>不正解：意図の検出には有用ですが、classificationはコンテキスト検索や回答生成に直接貢献しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 回答をハードコードするためのルールベースシステム。</div><p class='explanation-text'>不正解：ルールベースシステムは動的なクエリへの柔軟性がありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザー入力を凝縮するための要約モデル。</div><p class='explanation-text'>不正解：要約は一貫性のある回答の生成には必要ありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>RetrieverとPrompt templateを組み合わせることで、LangChainを使用した動的でコンテキスト関連の回答生成が保証されます。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "RetrieverとPrompt templateを組み合わせることで、LangChainを使用した動的でコンテキスト関連の回答生成が保証されます。"
  },
  {
    "id": 29,
    "question": "あるGenerative AIエンジニアが、財務レポートの要約を生成するためのモデルを選定しています。レポートには数値データを含む表が含まれることが多くあります。何を優先すべきですか？",
    "choices": [
      {
        "text": "数値推論と要約タスクに最適化されたモデルを選ぶ。",
        "is_correct": true
      },
      {
        "text": "最も安価なモデルを選択する。",
        "is_correct": false
      },
      {
        "text": "オープンドメインのテキストでトレーニングされたgenerativeモデルを使用する。",
        "is_correct": false
      },
      {
        "text": "最も大きいcontext lengthを持つモデルに集中する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 数値推論と要約タスクに最適化されたモデルを選ぶ。</div><p class='explanation-text'>正解：強力な数値推論を持つモデルはデータリッチなコンテンツをより効果的に処理します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 最も安価なモデルを選択する。</div><p class='explanation-text'>不正解：低コストのモデルは特化したタスクの精度を犠牲にする可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ オープンドメインのテキストでトレーニングされたgenerativeモデルを使用する。</div><p class='explanation-text'>不正解：オープンドメインのトレーニングはドメイン固有のパフォーマンスを保証しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 最も大きいcontext lengthを持つモデルに集中する。</div><p class='explanation-text'>不正解：context lengthは有用ですが、金融データには数値推論がより重要です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>数値推論に最適化されたモデルは、データリッチな財務レポートの正確で意味のある要約を保証します。</p></div>",
    "tags": "Application Development",
    "summary": "数値推論に最適化されたモデルは、データリッチな財務レポートの正確で意味のある要約を保証します。"
  },
  {
    "id": 30,
    "question": "あるGenerative AIエンジニアが、デプロイされたモデルをMLflowを使用してUnity Catalogに登録する必要があります。正しいワークフローはどれですか？",
    "choices": [
      {
        "text": "登録時にmetadataの設定をスキップする。",
        "is_correct": false
      },
      {
        "text": "モデルをMLflowにログするが、Unity Catalogへの登録はスキップする。",
        "is_correct": false
      },
      {
        "text": "MLflowにログせずに直接Unity Catalogにモデルをデプロイする。",
        "is_correct": false
      },
      {
        "text": "モデルをトレーニングし、MLflowにログし、metadataを設定して、Unity Catalogに登録する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ モデルをトレーニングし、MLflowにログし、metadataを設定して、Unity Catalogに登録する。</div><p class='explanation-text'>正解：このワークフローにより、モデルがログされ、アノテーションが付けられ、探索可能性のためにUnity Catalogに適切に統合されることが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 登録時にmetadataの設定をスキップする。</div><p class='explanation-text'>不正解：Metadataはモデル管理と探索可能性のための重要な情報を提供します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルをMLflowにログするが、Unity Catalogへの登録はスキップする。</div><p class='explanation-text'>不正解：Unity Catalogへの登録は一元化されたガバナンスとアクセス制御を保証します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ MLflowにログせずに直接Unity Catalogにモデルをデプロイする。</div><p class='explanation-text'>不正解：MLflowへのログは登録前の適切なmetadataとトラッキングに不可欠です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>MLflowはシームレスなログとmetadata設定を提供し、Unity Catalogはモデルの探索可能性とガバナンスを保証します。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "MLflowはシームレスなログとmetadata設定を提供し、Unity Catalogはモデルの探索可能性とガバナンスを保証します。"
  },
  {
    "id": 31,
    "question": "あるGenerative AIエンジニアが、顧客レビューを取得・要約するpipelineを作成する必要があります。一部のレビューには不適切な表現が含まれています。preprocessingはどのように対応すべきですか？",
    "choices": [
      {
        "text": "要約の前に不適切な表現を検出して削除するフィルタリングを実装する。",
        "is_correct": true
      },
      {
        "text": "コンテキストのために不適切な表現を保持する。",
        "is_correct": false
      },
      {
        "text": "10語を超えるすべてのレビューを除外する。",
        "is_correct": false
      },
      {
        "text": "フィルタリングなしで要約する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 要約の前に不適切な表現を検出して削除するフィルタリングを実装する。</div><p class='explanation-text'>正解：不適切なコンテンツをフィルタリングすることで、要約がエンドユーザーにとって安全で適切な内容に保たれます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンテキストのために不適切な表現を保持する。</div><p class='explanation-text'>不正解：不適切なコンテンツはユーザー体験を損ない、要約には不要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 10語を超えるすべてのレビューを除外する。</div><p class='explanation-text'>不正解：長さに基づいてレビューを除外すると、関連するコンテンツが失われます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ フィルタリングなしで要約する。</div><p class='explanation-text'>不正解：フィルタリングなしの要約は出力に不適切な表現が含まれる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>不適切な表現をフィルタリングすることで、要約が適切な内容に保たれ、ユーザーの期待に応えられます。</p></div>",
    "tags": "Application Development",
    "summary": "不適切な表現をフィルタリングすることで、要約が適切な内容に保たれ、ユーザーの期待に応えられます。"
  },
  {
    "id": 32,
    "question": "あるGenerative AIエンジニアが、医療クエリへのLLMの回答でhallucinationを防ぐ必要があります。最も効果的な技法はどれですか？",
    "choices": [
      {
        "text": "回答の複雑さを制限するために短いpromptを使用する。",
        "is_correct": false
      },
      {
        "text": "多様なデータセットでモデルをトレーニングする。",
        "is_correct": false
      },
      {
        "text": "検証済みの医療ソースに接続したRAG pipelineを使用してLLMの回答をgroundingする。",
        "is_correct": true
      },
      {
        "text": "inference中にtemperatureの設定を下げる。",
        "is_correct": false
      }
    ],
    "explanation": "<div class=’explanation-container’><h4 class=’explanation-section-header solution’>✅ 正解の選択肢</h4><div class=’explanation-box solution’><div class=’explanation-item’><div class=’explanation-badge correct’>✓ 検証済みの医療ソースに接続したRAG pipelineを使用してLLMの回答をgroundingする。</div><p class=’explanation-text’>正解：RAG pipelineはLLMの出力を事実として取得されたデータに固定し、hallucinationを削減します。</p></div></div><h4 class=’explanation-section-header incorrect’>❌ 不正解の選択肢</h4><div class=’explanation-box incorrect’><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ 回答の複雑さを制限するために短いpromptを使用する。</div><p class=’explanation-text’>不正解：短いpromptはモデルのhallination傾向に直接影響しません。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ 多様なデータセットでモデルをトレーニングする。</div><p class=’explanation-text’>不正解：トレーニングの多様性は回答の事実の正確性を保証しません。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ inference中にtemperatureの設定を下げる。</div><p class=’explanation-text’>不正解：Temperatureを下げるとランダム性は減りますが、hallucinationは排除されません。</p></div></div><h4 class=’explanation-section-header problem’>📌 全体的な解説</h4><p class=’explanation-box problem’>RAG pipelineは回答を事実データにgroundingし、医療のような重要なドメインで出力が正確であることを保証し、hallucinationを削減します。</p></div>",
    "tags": "Application Development",
    "summary": "RAG pipelineは回答を事実データにgroundingし、医療のような重要なドメインで出力が正確であることを保証し、hallucinationを削減します。"
  },
  {
    "id": 33,
    "question": "あるGenerative AIエンジニアが、パーソナライズされた旅行のitineraryを生成するLLMをデプロイするpipelineを構築しています。モデルは位置データ、ユーザーの好み、予算制約を処理する必要があります。pipelineに含めるべき主要コンポーネントはどれですか？",
    "choices": [
      {
        "text": "固定された旅行推奨のためのルールベースシステム。",
        "is_correct": false
      },
      {
        "text": "旅行オプションを凝縮するための要約モデル。",
        "is_correct": false
      },
      {
        "text": "ユーザーの好みを分類するためのclassificationモデル。",
        "is_correct": false
      },
      {
        "text": "位置とユーザーの好みを表現するためのembeddingモデル、データクエリのためのretriever、itinerary生成のためのLLM。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 位置とユーザーの好みを表現するためのembeddingモデル、データクエリのためのretriever、itinerary生成のためのLLM。</div><p class='explanation-text'>正解：これらのコンポーネントが連携して入力を動的に処理し、カスタマイズされたitineraryを生成します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 固定された旅行推奨のためのルールベースシステム。</div><p class='explanation-text'>不正解：ルールベースシステムは動的な入力に必要な柔軟性がありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 旅行オプションを凝縮するための要約モデル。</div><p class='explanation-text'>不正解：要約はパーソナライズされたitineraryに重要な詳細を削減します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーの好みを分類するためのclassificationモデル。</div><p class='explanation-text'>不正解：Classificationは包括的でパーソナライズされたitineraryの生成には不十分です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>EmbeddingモデルとretrieverとLLMを組み合わせることで、多様なユーザー入力に基づいた正確でパーソナライズされた旅行プランが生成されます。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "EmbeddingモデルとretrieverとLLMを組み合わせることで、多様なユーザー入力に基づいた正確でパーソナライズされた旅行プランが生成されます。"
  },
  {
    "id": 34,
    "question": "あるGenerative AIエンジニアが、顧客フィードバックシステムで個人を特定できる情報（PII）を扱うためにmasking技術を実装する必要があります。このアプローチの主な利点は何ですか？",
    "choices": [
      {
        "text": "Maskingはデータセットを暗号化してストレージ中に保護する。",
        "is_correct": false
      },
      {
        "text": "Maskingはユーザーデータ処理の応答時間を短縮する。",
        "is_correct": false
      },
      {
        "text": "Maskingはトレーニング中のモデルのoverfittingを防ぐ。",
        "is_correct": false
      },
      {
        "text": "Maskingは機密データを匿名化し、フィードバック処理の分析的価値を維持しながらプライバシーリスクを低減する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ Maskingは機密データを匿名化し、フィードバック処理の分析的価値を維持しながらプライバシーリスクを低減する。</div><p class='explanation-text'>正解：Masking技術は機密情報をプレースホルダーに置き換え、コンテキストを失うことなくプライバシーを確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Maskingはデータセットを暗号化してストレージ中に保護する。</div><p class='explanation-text'>不正解：暗号化とmaskingは異なる目的を果たします。Maskingはデータを匿名化し、暗号化はデータを保護します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Maskingはユーザーデータ処理の応答時間を短縮する。</div><p class='explanation-text'>不正解：応答時間はmasking技術の直接的な影響を受けません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Maskingはトレーニング中のモデルのoverfittingを防ぐ。</div><p class='explanation-text'>不正解：Maskingはプライバシーに焦点を当てており、トレーニングの最適化ではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>MaskingはPIIを匿名化することで機密データを保護し、プライバシーへの準拠を確保しながら顧客フィードバックデータの有用性を維持します。</p></div>",
    "tags": "Governance",
    "summary": "MaskingはPIIを匿名化することで機密データを保護し、プライバシーへの準拠を確保しながら顧客フィードバックデータの有用性を維持します。"
  },
  {
    "id": 35,
    "question": "あるGenerative AIエンジニアが、銀行アプリケーション向けの会話型エージェントを構築しています。エージェントは機密情報を安全に扱う必要があります。データセキュリティを確保するための最善のアプローチはどれですか？",
    "choices": [
      {
        "text": "回答の変動性を制限するためにtemperatureを下げる。",
        "is_correct": false
      },
      {
        "text": "機密データに暗号化を実装し、漏洩を防ぐためにLLM guardrailを使用する。",
        "is_correct": true
      },
      {
        "text": "データ量を削減するための要約モデルを使用する。",
        "is_correct": false
      },
      {
        "text": "匿名化されたデータのデータセットでLLMをトレーニングする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 機密データに暗号化を実装し、漏洩を防ぐためにLLM guardrailを使用する。</div><p class='explanation-text'>正解：暗号化とguardrailを組み合わせることで、会話のコンテキストにおける機密情報の安全な処理が保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 回答の変動性を制限するためにtemperatureを下げる。</div><p class='explanation-text'>不正解：Temperatureの調整はデータセキュリティの懸念に対応しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ データ量を削減するための要約モデルを使用する。</div><p class='explanation-text'>不正解：要約は本質的に機密データを保護しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 匿名化されたデータのデータセットでLLMをトレーニングする。</div><p class='explanation-text'>不正解：匿名化されたデータセットだけでは出力のデータ漏洩を防げません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>LLM guardrailと組み合わせた暗号化により、銀行アプリケーションにおける機密データ処理のための強固なセキュリティが提供されます。</p></div>",
    "tags": "Application Development",
    "summary": "LLM guardrailと組み合わせた暗号化により、銀行アプリケーションにおける機密データ処理のための強固なセキュリティが提供されます。"
  },
  {
    "id": 36,
    "question": "あるGenerative AIエンジニアが、MLflowを使用してRAGアプリケーションのパフォーマンスを評価しています。retrieval effectivenessを評価するために追跡すべきmetricsはどれですか？",
    "choices": [
      {
        "text": "クエリあたりのtoken使用量。",
        "is_correct": false
      },
      {
        "text": "トレーニング中のモデルのperplexity。",
        "is_correct": false
      },
      {
        "text": "テキスト生成を評価するためのBLEUとROUGEスコア。",
        "is_correct": false
      },
      {
        "text": "Precision、recall、NDCG (Normalized Discounted Cumulative Gain)。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ Precision、recall、NDCG (Normalized Discounted Cumulative Gain)。</div><p class='explanation-text'>正解：これらのmetricsは検索品質を評価し、precisionはrelevanceを測定し、recallは完全性を捉え、NDCGはランキングの精度を評価します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリあたりのtoken使用量。</div><p class='explanation-text'>不正解：Token使用量はコスト効率を測定しますが、検索品質ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トレーニング中のモデルのperplexity。</div><p class='explanation-text'>不正解：Perplexityは言語モデルの流暢さを測定しますが、retrieval effectivenessを評価しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ テキスト生成を評価するためのBLEUとROUGEスコア。</div><p class='explanation-text'>不正解：BLEUとROUGEは言語生成を評価しますが、retrieval effectivenessではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Precision、recall、NDCGを追跡することで、RAGアプリケーションのretrieval performanceの包括的な評価が保証されます。</p></div>",
    "tags": "Evaluation and Monitoring",
    "summary": "Precision、recall、NDCGを追跡することで、RAGアプリケーションのretrieval performanceの包括的な評価が保証されます。"
  },
  {
    "id": 37,
    "question": "あるGenerative AIエンジニアが、顧客フィードバック分析に使用されるLLMのguardrailを構築する任務を受けています。システムは不適切な表現を含む回答をブロックする必要があります。最も効果的な実装はどれですか？",
    "choices": [
      {
        "text": "生成後に不適切な回答にフラグを立てるclassifierをトレーニングする。",
        "is_correct": false
      },
      {
        "text": "中立的な言語のデータセットでLLMをfine-tuningする。",
        "is_correct": false
      },
      {
        "text": "ランダムな出力を最小化するためにモデルのtemperatureを下げる。",
        "is_correct": false
      },
      {
        "text": "出力の不適切な表現を検出してブロックするためにcontent filteringを統合する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class=’explanation-container’><h4 class=’explanation-section-header solution’>✅ 正解の選択肢</h4><div class=’explanation-box solution’><div class=’explanation-item’><div class=’explanation-badge correct’>✓ 出力の不適切な表現を検出してブロックするためにcontent filteringを統合する。</div><p class=’explanation-text’>正解：Content filteringにより不適切な出力がブロックされ、システムの信頼性とユーザーの信頼が維持されます。</p></div></div><h4 class=’explanation-section-header incorrect’>❌ 不正解の選択肢</h4><div class=’explanation-box incorrect’><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ 生成後に不適切な回答にフラグを立てるclassifierをトレーニングする。</div><p class=’explanation-text’>不正解：生成後のフラグ立ては、リアルタイムフィルタリングより効率が劣ります。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ 中立的な言語のデータセットでLLMをfine-tuningする。</div><p class=’explanation-text’>不正解：Fine-tuningは出力のトーン改善には役立ちますが、不適切な回答のフィルタリングは保証されません。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ ランダムな出力を最小化するためにモデルのtemperatureを下げる。</div><p class=’explanation-text’>不正解：Temperatureを下げるとランダム性は減りますが、不適切な表現を直接ブロックしません。</p></div></div><h4 class=’explanation-section-header problem’>📌 全体的な解説</h4><p class=’explanation-box problem’>Content filteringはリアルタイムで不適切な表現がブロックされることを保証し、ユーザーの信頼と倫理基準への準拠が維持されます。</p></div>",
    "tags": "Application Development",
    "summary": "Content filteringはリアルタイムで不適切な表現がブロックされることを保証し、ユーザーの信頼と倫理基準への準拠が維持されます。"
  },
  {
    "id": 38,
    "question": "あるGenerative AIエンジニアが、電子機器の技術仕様に関するユーザーの質問に答えるためのLangChain chainを設計しています。このchainはマルチターンの会話を処理し、詳細な回答を取得する必要があります。chainに含めるべき要素はどれですか？（2つ選択）",
    "choices": [
      {
        "text": "ユーザーの満足度を検出するためのsentiment analysisモデル。",
        "is_correct": false
      },
      {
        "text": "vector storeからデバイス仕様を取得するためのretriever。",
        "is_correct": true
      },
      {
        "text": "コンテキストのために会話履歴を維持するprompt template。",
        "is_correct": true
      },
      {
        "text": "繰り返しのクエリに固定された回答を提供するためのルールベースシステム。",
        "is_correct": false
      },
      {
        "text": "長い回答を短縮するための要約モデル。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ vector storeからデバイス仕様を取得するためのretriever。</div><p class='explanation-text'>正解：Retrieverはユーザーのクエリに対する関連する技術データへのアクセスを可能にします。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ コンテキストのために会話履歴を維持するprompt template。</div><p class='explanation-text'>正解：会話履歴を維持することで、chainが一貫性のあるマルチターンの回答を生成することが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーの満足度を検出するためのsentiment analysisモデル。</div><p class='explanation-text'>不正解：Sentiment analysisは技術仕様の取得とは関係ありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 繰り返しのクエリに固定された回答を提供するためのルールベースシステム。</div><p class='explanation-text'>不正解：ルールベースシステムは動的なマルチターンの会話への柔軟性がありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 長い回答を短縮するための要約モデル。</div><p class='explanation-text'>不正解：このコンテキストで必要とされる詳細な回答には要約は不要です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Prompt templateとretrieverにより、LangChainアプリケーションが技術的クエリに対してコンテキストを考慮した詳細な回答を提供することが保証されます。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "Prompt templateとretrieverにより、LangChainアプリケーションが技術的クエリに対してコンテキストを考慮した詳細な回答を提供することが保証されます。"
  },
  {
    "id": 39,
    "question": "あるGenerative AIエンジニアが、医療チャットボットが生成する回答のsafetyを評価する必要があります。最も重要な定性的metricsはどれですか？",
    "choices": [
      {
        "text": "医学的に正確な回答を確保するための事実の正確性。",
        "is_correct": true
      },
      {
        "text": "ユーザーの読みやすさのための回答の長さ。",
        "is_correct": false
      },
      {
        "text": "ユーザー体験を改善するための回答速度。",
        "is_correct": false
      },
      {
        "text": "より良いエンゲージメントのためのスタイル的なトーン。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 医学的に正確な回答を確保するための事実の正確性。</div><p class='explanation-text'>正解：事実の正確性により、チャットボットが安全で信頼性の高い医療アドバイスを提供することが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーの読みやすさのための回答の長さ。</div><p class='explanation-text'>不正解：長さだけでは回答の品質やsafetyは決まりません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザー体験を改善するための回答速度。</div><p class='explanation-text'>不正解：速度は重要ですが、医療アプリケーションでは精度が優先されます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より良いエンゲージメントのためのスタイル的なトーン。</div><p class='explanation-text'>不正解：トーンは有用ですが、医療のコンテキストでは精度が最優先です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>事実の正確性を確保することは、医療アプリケーションで安全で信頼性の高い回答を生成するために不可欠です。</p></div>",
    "tags": "Application Development",
    "summary": "事実の正確性を確保することは、医療アプリケーションで安全で信頼性の高い回答を生成するために不可欠です。"
  },
  {
    "id": 40,
    "question": "あるGenerative AIエンジニアが、パーソナライズされた旅行itineraryを生成するpipelineを設計する必要があります。システムは予算制約、ユーザーの好み、目的地の詳細を組み込む必要があります。重要なコンポーネントはどれですか？（2つ選択）",
    "choices": [
      {
        "text": "ユーザー入力を要点にまとめるための要約モデルを使用する。",
        "is_correct": false
      },
      {
        "text": "目的地をタイプ別に分類するためのclassificationモデルを使用する。",
        "is_correct": false
      },
      {
        "text": "詳細なitineraryを動的に生成するためのLLMを使用する。",
        "is_correct": true
      },
      {
        "text": "ユーザーをあらかじめ定義されたitineraryにマッチングするためのルールベースシステムを使用する。",
        "is_correct": false
      },
      {
        "text": "目的地と好みをsemanticallyに表現するためのembeddingモデルを使用する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 詳細なitineraryを動的に生成するためのLLMを使用する。</div><p class='explanation-text'>正解：LLMはユーザー入力に基づいて旅行プランをカスタマイズし、好みと制約を組み込みます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 目的地と好みをsemanticallyに表現するためのembeddingモデルを使用する。</div><p class='explanation-text'>正解：Embeddingはユーザーの好みと目的地のコンテキスト理解を可能にします。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザー入力を要点にまとめるための要約モデルを使用する。</div><p class='explanation-text'>不正解：要約は詳細なitineraryを作成しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 目的地をタイプ別に分類するためのclassificationモデルを使用する。</div><p class='explanation-text'>不正解：Classificationは分類を支援しますが、itineraryを生成しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーをあらかじめ定義されたitineraryにマッチングするためのルールベースシステムを使用する。</div><p class='explanation-text'>不正解：ルールベースシステムは動的なパーソナライゼーションへの柔軟性がありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>EmbeddingとLLMを組み合わせることで、ユーザーのニーズに合わせた動的でコンテキスト的に正確な旅行itineraryが保証されます。</p></div>",
    "tags": "Design Applications",
    "summary": "EmbeddingとLLMを組み合わせることで、ユーザーのニーズに合わせた動的でコンテキスト的に正確な旅行itineraryが保証されます。"
  },
  {
    "id": 41,
    "question": "あるGenerative AIエンジニアが、大規模にデプロイされたRAGアプリケーションのfeatureを提供するために必要なリソースを特定する必要があります。重要なリソースはどれですか？（2つ選択）",
    "choices": [
      {
        "text": "追加のLLM fine-tuning機能。",
        "is_correct": false
      },
      {
        "text": "低latencyの回答のためのバッチ処理ツール。",
        "is_correct": false
      },
      {
        "text": "embeddingと検索のための十分なコンピューティングパワー、vector dataのストレージ、パフォーマンスのためのモニタリングツール。",
        "is_correct": true
      },
      {
        "text": "Tokenization最適化ツール。",
        "is_correct": false
      },
      {
        "text": "latencyを最小化するための高速インターネット接続。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ embeddingと検索のための十分なコンピューティングパワー、vector dataのストレージ、パフォーマンスのためのモニタリングツール。</div><p class='explanation-text'>正解：コンピューティング、ストレージ、モニタリングはRAGアプリケーションを効率的にスケールするために不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ latencyを最小化するための高速インターネット接続。</div><p class='explanation-text'>正解：ネットワーク速度はリアルタイムの検索と回答パフォーマンスに影響します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 追加のLLM fine-tuning機能。</div><p class='explanation-text'>不正解：Fine-tuningはスケールでのfeature提供には重要ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 低latencyの回答のためのバッチ処理ツール。</div><p class='explanation-text'>不正解：バッチ処理はlatencyを増加させ、リアルタイムのRAGアプリケーションには不向きです。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Tokenization最適化ツール。</div><p class='explanation-text'>不正解：Tokenizationはpreprocessingタスクであり、提供リソースではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>コンピューティングパワー、ストレージ、モニタリング、高速ネットワークにより、効率的でスケーラブルなRAGアプリケーションの提供が保証されます。</p></div>",
    "tags": "Assembling and Deploying Applications",
    "summary": "コンピューティングパワー、ストレージ、モニタリング、高速ネットワークにより、効率的でスケーラブルなRAGアプリケーションの提供が保証されます。"
  },
  {
    "id": 42,
    "question": "あるGenerative AIエンジニアが、不正確な法的アドバイスの生成を防ぐために、法的問い合わせを処理するチャットボットのguardrailを実装する必要があります。最も効果的な技法はどれですか？（2つ選択）",
    "choices": [
      {
        "text": "精度を向上させるために法的データセットでチャットボットをトレーニングする。",
        "is_correct": false
      },
      {
        "text": "出力の変動性を制限するためにモデルのtemperatureを下げる。",
        "is_correct": false
      },
      {
        "text": "法律用語を含むユーザーのクエリをブロックする。",
        "is_correct": false
      },
      {
        "text": "法的アドバイスを避けて一般情報のみに回答を制限するようチャットボットに指示するmetapromptを使用する。",
        "is_correct": true
      },
      {
        "text": "すべてのチャットボットの出力に制限事項を明示する免責事項を追加する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class=’explanation-container’><h4 class=’explanation-section-header solution’>✅ 正解の選択肢</h4><div class=’explanation-box solution’><div class=’explanation-item’><div class=’explanation-badge correct’>✓ 法的アドバイスを避けて一般情報のみに回答を制限するようチャットボットに指示するmetapromptを使用する。</div><p class=’explanation-text’>正解：Metapromptはモデルの動作を誘導し、不正確または不適切な回答を生成するリスクを低減します。</p></div><div class=’explanation-item’><div class=’explanation-badge correct’>✓ すべてのチャットボットの出力に制限事項を明示する免責事項を追加する。</div><p class=’explanation-text’>正解：免責事項はユーザーの期待を設定し、誤用のリスクを最小化します。</p></div></div><h4 class=’explanation-section-header incorrect’>❌ 不正解の選択肢</h4><div class=’explanation-box incorrect’><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ 精度を向上させるために法的データセットでチャットボットをトレーニングする。</div><p class=’explanation-text’>不正解：トレーニングは知識を向上させますが、正確または適切な出力を保証しません。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ 出力の変動性を制限するためにモデルのtemperatureを下げる。</div><p class=’explanation-text’>不正解：Temperatureの調整はランダム性を減らしますが、不正確なアドバイスの核心的な問題には対応しません。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ 法律用語を含むユーザーのクエリをブロックする。</div><p class=’explanation-text’>不正解：クエリのブロックは使いやすさを低下させ、チャットボットの機能を制限します。</p></div></div><h4 class=’explanation-section-header problem’>📌 全体的な解説</h4><p class=’explanation-box problem’>MetapromptとdisclaimerをSemanticallyに組み合わせることで、チャットボットの有用性を維持しながらユーザーの安全が確保されます。</p></div>",
    "tags": "Governance",
    "summary": "MetapromptとdisclaimerをSemanticallyに組み合わせることで、チャットボットの有用性を維持しながらユーザーの安全が確保されます。"
  },
  {
    "id": 43,
    "question": "RAG pipelineの回答生成LLMをGPT-4から、自社でセルフホストするcontext lengthが短いモデルに変更した後、Generative AIエンジニアが次のエラーを受け取っています：{\"error_code\": \"BAD_REQUEST\", \"message\": \"Bad request: rpc error: code = InvalidArgument desc = prompt token count (4595) cannot exceed 4096...\"} 回答生成モデルを変更せずにGenerative AIエンジニアが実装すべき2つの解決策はどれですか？（2つ選択）",
    "choices": [
      {
        "text": "embeddingされたドキュメントのchunk sizeを小さくする",
        "is_correct": true
      },
      {
        "text": "embeddingを生成するために小さいembeddingモデルを使用する",
        "is_correct": false
      },
      {
        "text": "ALiBiを使用して回答生成モデルを再トレーニングする",
        "is_correct": false
      },
      {
        "text": "新しいモデルの最大output tokensを削減する",
        "is_correct": false
      },
      {
        "text": "vector databaseから取得するレコード数を削減する",
        "is_correct": true
      }
    ],
    "explanation": "<div class=’explanation-container’><h4 class=’explanation-section-header solution’>✅ 正解の選択肢</h4><div class=’explanation-box solution’><div class=’explanation-item’><div class=’explanation-badge correct’>✓ embeddingされたドキュメントのchunk sizeを小さくする</div><p class=’explanation-text’>正解：Chunk sizeを小さくすることで、各ドキュメントから取得されるtokenが減り、モデルのcontext limitの範囲内に収まるようになります。</p></div><div class=’explanation-item’><div class=’explanation-badge correct’>✓ vector databaseから取得するレコード数を削減する</div><p class=’explanation-text’>正解：取得するレコード数を制限することで合計token数が減り、問題に効果的に対応できます。</p></div></div><h4 class=’explanation-section-header incorrect’>❌ 不正解の選択肢</h4><div class=’explanation-box incorrect’><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ embeddingを生成するために小さいembeddingモデルを使用する</div><p class=’explanation-text’>不正解：エラーはtoken数がモデルのcontext lengthを超えることに関連しており、embeddingモデルのサイズではありません。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ ALiBiを使用して回答生成モデルを再トレーニングする</div><p class=’explanation-text’>不正解：モデルの再トレーニングはtoken limit問題の解決には不要で複雑すぎます。</p></div><div class=’explanation-item’><div class=’explanation-badge incorrect’>✗ 新しいモデルの最大output tokensを削減する</div><p class=’explanation-text’>不正解：これはoutput tokenの数を制限しますが、vector databaseからの過剰なinput tokenには対応しません。</p></div></div><h4 class=’explanation-section-header problem’>📌 全体的な解説</h4><p class=’explanation-box problem’>embeddingされたドキュメントのchunk sizeを小さくし、取得するレコード数を削減することで、エンジニアはシステムへの大幅な変更なしに合計token数をモデルのcontext length内に収めることができます。</p></div>",
    "tags": "Evaluation and Monitoring",
    "summary": "embeddingされたドキュメントのchunk sizeを小さくし、取得するレコード数を削減することで、エンジニアはシステムへの大幅な変更なしに合計token数をモデルのcontext length内に収めることができます。"
  },
  {
    "id": 44,
    "question": "あるGenerative AIエンジニアが、チャットボットのretrieval performanceを評価する必要があります。システムは多くの無関係なドキュメントを取得する一方で、関連するドキュメントを見落とすこともあります。注目すべきmetricsはどれですか？（4つ選択）",
    "choices": [
      {
        "text": "Sentiment Analysis",
        "is_correct": false
      },
      {
        "text": "F1 Score",
        "is_correct": true
      },
      {
        "text": "Precision",
        "is_correct": true
      },
      {
        "text": "Recall",
        "is_correct": true
      },
      {
        "text": "Cosine Similarity",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ F1 Score</div><p class='explanation-text'>正解：F1 Scoreはprecisionとrecallのバランスを取り、retrieval performanceの総合的な評価を提供します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ Precision</div><p class='explanation-text'>正解：Precisionは取得されたドキュメントのrelevanceを測定し、無関係な出力の削減に役立ちます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ Recall</div><p class='explanation-text'>正解：Recallはシステムがすべての関連ドキュメントを取得することを保証し、見落とされた情報を削減します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ Cosine Similarity</div><p class='explanation-text'>正解：Cosine SimilarityはSemanticアライメントを評価し、取得されたコンテンツのrelevanceの特定に役立ちます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Sentiment Analysis</div><p class='explanation-text'>不正解：Sentiment analysisはトーンを評価しますが、retrieval performanceとは無関係です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>Precision、recall、F1 score、cosine similarityに注目することで、relevanceと完全性の両方に対応したretrieval performanceの包括的な評価が保証されます。</p></div>",
    "tags": "Data Preparation",
    "summary": "Precision、recall、F1 score、cosine similarityに注目することで、relevanceと完全性の両方に対応したretrieval performanceの包括的な評価が保証されます。"
  },
  {
    "id": 45,
    "question": "あるGenerative AIエンジニアが、構造化されていない法的ドキュメントを構造化された要約に変換するpipelineを構築する必要があります。要約は主要な条項、リスク、義務を強調表示する必要があります。pipelineに含めるべきツールはどれですか？",
    "choices": [
      {
        "text": "類似した法的事例を取得するためのretrievalシステム。",
        "is_correct": false
      },
      {
        "text": "一般的なテキストでトレーニングされた要約モデル。",
        "is_correct": false
      },
      {
        "text": "条項を抽出するためのルールベースシステム。",
        "is_correct": false
      },
      {
        "text": "構造化された要約を生成するために法的テキストでfine-tuningされたLLM。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 構造化された要約を生成するために法的テキストでfine-tuningされたLLM。</div><p class='explanation-text'>正解：法的データでのfine-tuningにより、LLMが必要な要素を含むドメイン固有の要約を生成することが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 類似した法的事例を取得するためのretrievalシステム。</div><p class='explanation-text'>不正解：Retrievalだけではコンテンツを効果的に構造化または要約できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 一般的なテキストでトレーニングされた要約モデル。</div><p class='explanation-text'>不正解：汎用モデルはドメイン固有のニュアンスを捉えられない場合があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 条項を抽出するためのルールベースシステム。</div><p class='explanation-text'>不正解：ルールベースシステムは多様な法的テキストへの柔軟性と適応性に欠けます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>法的データでfine-tuningされたLLMにより、システムがドメイン固有の要件に合わせた構造化された要約を生成することが保証されます。</p></div>",
    "tags": "Application Development",
    "summary": "法的データでfine-tuningされたLLMにより、システムがドメイン固有の要件に合わせた構造化された要約を生成することが保証されます。"
  }
];
