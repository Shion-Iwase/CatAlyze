window.questionsDataDbxg3 = [
  {
    "id": 1,
    "question": "Generative AIエンジニアが、カスタマーサポートチャットボット用のLLMを選択する必要があります。チャットボットは、一般的なクエリを効果的に処理しながら、パフォーマンスとコストのバランスを取る必要があります。選択の指針とすべきメトリクスはどれですか？",
    "choices": [
      {
        "text": "LLMのトークン制限。",
        "is_correct": false
      },
      {
        "text": "クエリあたりのレイテンシと推論コスト。",
        "is_correct": true
      },
      {
        "text": "テキスト生成のBLEUスコア。",
        "is_correct": false
      },
      {
        "text": "パラメータ数によるモデルサイズ。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ クエリあたりのレイテンシと推論コスト。</div><p class='explanation-text'>正解：レイテンシは応答性を確保し、推論コストはデプロイの経済的実現可能性を決定します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ LLMのトークン制限。</div><p class='explanation-text'>不正解：トークン制限は入力サイズに影響しますが、パフォーマンスとコストのバランスは取れません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ テキスト生成のBLEUスコア。</div><p class='explanation-text'>不正解：BLEUは言語品質を評価しますが、コストやパフォーマンスのトレードオフには特化していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ パラメータ数によるモデルサイズ。</div><p class='explanation-text'>不正解：モデルサイズだけでは、コストとパフォーマンスのバランスを示すことはできません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>レイテンシと推論コストのメトリクスにより、LLMがカスタマーサポートチャットボットのパフォーマンスとコスト要件を満たすことが保証されます。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "カスタマーサポートチャットボット用LLM選択では、クエリあたりのレイテンシと推論コストのバランスを指針とする。"
  },
  {
    "id": 2,
    "question": "Generative AIエンジニアが、技術ドキュメントの取得とユーザーフレンドリーな回答を生成するRAGシステムを設計する任務を担っています。ユーザーから一部の回答に無関係な詳細が含まれていると報告されています。エンジニアはシステムを改善するために何を優先すべきですか？",
    "choices": [
      {
        "text": "技術クエリデータでモデルをファインチューニングする。",
        "is_correct": false
      },
      {
        "text": "冗長性を減らすためにモデルのtemperatureを上げる。",
        "is_correct": false
      },
      {
        "text": "関連性スコアに基づいて結果をフィルタリングすることで、retrieval戦略を改善する。",
        "is_correct": true
      },
      {
        "text": "要約モデルを使用してretrieval結果を簡略化する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 関連性スコアに基づいて結果をフィルタリングすることで、retrieval戦略を改善する。</div><p class='explanation-text'>正解：retrieval結果をフィルタリングすることで、システムが集中した関連性の高い回答を生成する能力が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 技術クエリデータでモデルをファインチューニングする。</div><p class='explanation-text'>不正解：ファインチューニングは全体的なパフォーマンスを向上させますが、retrievalの問題は修正されません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 冗長性を減らすためにモデルのtemperatureを上げる。</div><p class='explanation-text'>不正解：temperatureの調整はretrieval関連性に対応しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約モデルを使用してretrieval結果を簡略化する。</div><p class='explanation-text'>不正解：簡略化しても無関係な詳細が含まれる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>retrieval戦略を改善することで、システムが最も関連性の高いコンテンツのみを取得し、回答内の無関係な詳細を削減することが保証されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "RAGシステムで無関係な詳細が混入する場合、関連性スコアによるフィルタリングでretrieval戦略を改善するのが最優先。"
  },
  {
    "id": 3,
    "question": "Generative AIエンジニアが、社内ポリシーに関する質問に答えるLLMアプリケーションを開発しました。エンジニアは、アプリケーションがハルシネーションを起こしたり機密データを漏洩したりしないことを確保する必要があります。ハルシネーションや機密データ漏洩を軽減するために使用すべきでない手法はどれですか？",
    "choices": [
      {
        "text": "LLMの出力をユーザーに表示する前にフィルタリングするガードレールを追加する。",
        "is_correct": false
      },
      {
        "text": "モデルがニーズに沿うように強力なsystem promptを使用する。",
        "is_correct": false
      },
      {
        "text": "モデルを自社データでファインチューニングし、何が適切かを学習させることを期待する。",
        "is_correct": true
      },
      {
        "text": "ユーザーのアクセスレベルに基づいて利用可能なデータを制限する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ モデルを自社データでファインチューニングし、何が適切かを学習させることを期待する。</div><p class='explanation-text'>正解：ファインチューニングはハルシネーションを確実に軽減したりデータ漏洩を防止したりする信頼性がなく、単独の解決策としては適切ではありません。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ LLMの出力をユーザーに表示する前にフィルタリングするガードレールを追加する。</div><p class='explanation-text'>不正解：ガードレールは不適切またはハルシネーションされた出力を効果的にフィルタリングします。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルがニーズに沿うように強力なsystem promptを使用する。</div><p class='explanation-text'>不正解：system promptはハルシネーションを防止し、モデルの動作を調整するための明示的な指示を提供します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーのアクセスレベルに基づいて利用可能なデータを制限する。</div><p class='explanation-text'>不正解：データアクセスを制限することで、機密情報の漏洩リスクが減少します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ファインチューニング単体は、ハルシネーションの防止やセキュリティ確保には信頼性がありません。ガードレール、アクセス制御、system promptがより効果的です。</p></div>",
    "tags": "ガバナンス",
    "summary": "ハルシネーションや機密データ漏洩の防止にファインチューニング単体は不十分。ガードレール・アクセス制御・system promptが有効。"
  },
  {
    "id": 4,
    "question": "Generative AIエンジニアが、法的契約書を要約するLLM搭載ツールを設計しています。モデルがハルシネーションした条項を生成することがよくあります。どのような解決策を実装すべきですか？",
    "choices": [
      {
        "text": "より多くのドキュメントコンテンツをキャプチャするためにcontext lengthを増やす。",
        "is_correct": false
      },
      {
        "text": "法的データセットで事前トレーニングされた要約モデルを適用する。",
        "is_correct": false
      },
      {
        "text": "生成された要約を検証するために分類モデルを使用する。",
        "is_correct": false
      },
      {
        "text": "提供されたテキストのみに基づいて要約を生成するようにモデルに指示するmetapromptを書く。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 提供されたテキストのみに基づいて要約を生成するようにモデルに指示するmetapromptを書く。</div><p class='explanation-text'>正解：metapromptはモデルの出力を制約し、ハルシネーションのリスクを軽減するのに役立ちます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より多くのドキュメントコンテンツをキャプチャするためにcontext lengthを増やす。</div><p class='explanation-text'>不正解：context lengthを増やしてもハルシネーションを防止できず、計算コストが増加する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 法的データセットで事前トレーニングされた要約モデルを適用する。</div><p class='explanation-text'>不正解：事前トレーニングされたモデルは品質向上に役立ちますが、本質的にハルシネーションを防止するわけではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 生成された要約を検証するために分類モデルを使用する。</div><p class='explanation-text'>不正解：分類モデルはハルシネーションの根本原因に直接対処しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>metapromptはLLMがソースコンテンツに厳密に集中するよう誘導し、契約書の要約におけるハルシネーションの可能性を軽減します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "法的契約書要約でのハルシネーション対策には、ソーステキストのみに基づく生成を指示するmetapromptが最も効果的。"
  },
  {
    "id": 5,
    "question": "AIモデルが顧客クエリに対する推薦を生成しますが、頻繁に無関係な製品を提案します。エンジニアはどの調整を優先すべきですか？",
    "choices": [
      {
        "text": "クエリと製品のセマンティック類似性をより良くキャプチャするためにembeddingを改善する。",
        "is_correct": true
      },
      {
        "text": "無関係な推薦を避けるために応答の長さを短縮する。",
        "is_correct": false
      },
      {
        "text": "推論中にモデルのtemperatureを上げる。",
        "is_correct": false
      },
      {
        "text": "モデルにさらに多くのパラメータを追加する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ クエリと製品のセマンティック類似性をより良くキャプチャするためにembeddingを改善する。</div><p class='explanation-text'>正解：embeddingを改善することで、顧客クエリと製品提案の間のより良いアライメントが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 無関係な推薦を避けるために応答の長さを短縮する。</div><p class='explanation-text'>不正解：応答を短くしても関連性の向上は保証されません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 推論中にモデルのtemperatureを上げる。</div><p class='explanation-text'>不正解：temperatureを上げるとランダム性が増し、関連性が悪化する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルにさらに多くのパラメータを追加する。</div><p class='explanation-text'>不正解：パラメータの追加はクエリと製品のアライメントを直接改善しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>高品質なembeddingはクエリと製品のセマンティックアライメントを向上させ、推薦の無関連性の問題に対処します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "製品推薦の無関連性を解消するには、クエリと製品のセマンティック類似性をキャプチャするembeddingの改善が最優先。"
  },
  {
    "id": 6,
    "question": "Generative AIエンジニアが、カスタマーサポートチャットボット向けにマルチターン対話機能を提供するシステムを作成する必要があります。チャットボットは会話全体でコンテキストを維持し、フォローアップクエリを処理する必要があります。コンテキストを維持するために不可欠なツールは何ですか？",
    "choices": [
      {
        "text": "関連する過去の会話を取得するretriever。",
        "is_correct": false
      },
      {
        "text": "会話履歴を要約する要約モデル。",
        "is_correct": false
      },
      {
        "text": "過去のインタラクションを保存・取得するためにLLMワークフローに統合されたメモリモジュール。",
        "is_correct": true
      },
      {
        "text": "各クエリのユーザー意図を予測する分類モデル。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 過去のインタラクションを保存・取得するためにLLMワークフローに統合されたメモリモジュール。</div><p class='explanation-text'>正解：メモリモジュールにより、チャットボットが会話履歴を保存し、コンテキストを考慮した応答が可能になります。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 関連する過去の会話を取得するretriever。</div><p class='explanation-text'>不正解：retrieverはコンテンツを取得できますが、本質的に動的にコンテキストを保存しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 会話履歴を要約する要約モデル。</div><p class='explanation-text'>不正解：要約は履歴の詳細を削減し、コンテキストの精度を損なう可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 各クエリのユーザー意図を予測する分類モデル。</div><p class='explanation-text'>不正解：分類は意図の識別を支援しますが、会話コンテキストを維持しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>メモリモジュールは過去のインタラクションの動的な保存と取得を可能にし、継続的なコンテキストを考慮した対話を確保します。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "マルチターン対話でコンテキストを維持するには、LLMワークフローに統合されたメモリモジュールが不可欠。"
  },
  {
    "id": 7,
    "question": "Generative AIエンジニアが、レストラン予約のためのウェブアプリケーションに会話型AIモデルを統合しています。システムはユーザークエリに対して簡潔な応答を返す必要があります。プロンプトをどのように最適化すべきですか？",
    "choices": [
      {
        "text": "LLMのtemperature設定のみに頼って応答の長さを短くする。",
        "is_correct": false
      },
      {
        "text": "ユーザーが動的に応答の長さを選択できるようにする。",
        "is_correct": false
      },
      {
        "text": "修正なしにデフォルトプロンプトを使用する。",
        "is_correct": false
      },
      {
        "text": "プロンプトに応答が簡潔であるべき旨を明記する（例：「予約の確認メッセージを短く提供してください」）。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ プロンプトに応答が簡潔であるべき旨を明記する（例：「予約の確認メッセージを短く提供してください」）。</div><p class='explanation-text'>正解：長さに関する具体的な指示を含めることで、簡潔で関連性の高い応答が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ LLMのtemperature設定のみに頼って応答の長さを短くする。</div><p class='explanation-text'>不正解：temperatureはランダム性に影響しますが、応答の長さを直接制御しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーが動的に応答の長さを選択できるようにする。</div><p class='explanation-text'>不正解：有用ですが、動的な長さ制御はデフォルトシステムの動作を最適化しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 修正なしにデフォルトプロンプトを使用する。</div><p class='explanation-text'>不正解：デフォルトプロンプトは簡潔でない長い応答を生成する可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>プロンプトに応答の長さについての明確な指示を含めることで、システムが簡潔で効果的なメッセージを生成することが保証されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "簡潔な応答を得るには、プロンプトに応答の長さを明示的に指定することが最も効果的。"
  },
  {
    "id": 8,
    "question": "Generative AIエンジニアが、RAGシステム用の大型技術ドキュメントの準備を担当しています。ドキュメントには、タスクに無関係な付録、目次、冗長な脚注が含まれています。エンジニアはどの前処理ステップを取るべきですか？",
    "choices": [
      {
        "text": "前処理中に付録や目次などの無関係なセクションを削除する。",
        "is_correct": true
      },
      {
        "text": "完全性のためにドキュメント全体をそのまま保持する。",
        "is_correct": false
      },
      {
        "text": "無関係なセクションをフラグを立てて強調表示するが、ドキュメント内には残す。",
        "is_correct": false
      },
      {
        "text": "ドキュメントのすべてのセクションを1つのチャンクに統合する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 前処理中に付録や目次などの無関係なセクションを削除する。</div><p class='explanation-text'>正解：不必要なセクションを削除することでノイズが減り、関連コンテンツに集中することでretrievalパフォーマンスが向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 完全性のためにドキュメント全体をそのまま保持する。</div><p class='explanation-text'>不正解：無関係なセクションを残すとretrievalのノイズが増え、パフォーマンスが低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 無関係なセクションをフラグを立てて強調表示するが、ドキュメント内には残す。</div><p class='explanation-text'>不正解：フラグを立ててもシステムパフォーマンスは改善されず、無関係なコンテンツが依然としてスペースを占有します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ドキュメントのすべてのセクションを1つのチャンクに統合する。</div><p class='explanation-text'>不正解：コンテンツを統合すると明確さが低下し、トークン制限を超えるリスクがあります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>前処理により無関係なセクションが削除され、RAGアプリケーションのドキュメントretrieval品質が向上します。</p></div>",
    "tags": "データ準備",
    "summary": "RAGシステム用ドキュメント準備では、付録・目次等の無関係セクションを前処理で削除し、retrieval精度を向上させる。"
  },
  {
    "id": 9,
    "question": "Generative AIエンジニアが、一般的なクエリに基づいて顧客応答テンプレートを生成するシステムを設計する必要があります。テンプレートには挨拶、解決策、フォローアップアクションを含める必要があります。必要なpipelineコンポーネントはどれですか？",
    "choices": [
      {
        "text": "事前定義されたテンプレートを選択するルールベースシステム。",
        "is_correct": false
      },
      {
        "text": "クエリをタイプ別に分類する分類モデル。",
        "is_correct": false
      },
      {
        "text": "クエリに基づいて動的にテンプレートを生成するLLM。",
        "is_correct": true
      },
      {
        "text": "ユーザークエリを要約する要約モデル。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ クエリに基づいて動的にテンプレートを生成するLLM。</div><p class='explanation-text'>正解：LLMは特定のクエリに合わせた詳細なテンプレートを生成できます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 事前定義されたテンプレートを選択するルールベースシステム。</div><p class='explanation-text'>不正解：ルールベースシステムは動的なクエリ処理には柔軟性が不足しています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリをタイプ別に分類する分類モデル。</div><p class='explanation-text'>不正解：分類は完全な応答テンプレートを生成しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザークエリを要約する要約モデル。</div><p class='explanation-text'>不正解：要約は構造化された応答テンプレートを作成しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>LLMは挨拶、解決策、フォローアップを含む構造化されたテンプレートを動的に作成し、ユーザー要件を満たします。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "挨拶・解決策・フォローアップを含む顧客応答テンプレートの動的生成には、LLMが最適なpipelineコンポーネント。"
  },
  {
    "id": 10,
    "question": "Generative AIエンジニアが、LangChainを使用してドキュメントのretrievalと要約を可能にするシンプルなchainをデプロイする必要があります。LangChainがこのタスクに適している理由は何ですか？",
    "choices": [
      {
        "text": "retriever、embeddingモデル、言語モデルを統合pipelineに接続するためのモジュール型ツールを提供する。",
        "is_correct": true
      },
      {
        "text": "retrieval系タスク用にモデルを自動的にファインチューニングする。",
        "is_correct": false
      },
      {
        "text": "embeddingを最適化することで計算コストを削減する。",
        "is_correct": false
      },
      {
        "text": "モデルの出力を暗号化することで機密データのセキュリティを強化する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ retriever、embeddingモデル、言語モデルを統合pipelineに接続するためのモジュール型ツールを提供する。</div><p class='explanation-text'>正解：LangChainはモジュール型コンポーネントを提供することで、retrievalや要約などのタスクのエンドツーエンドchainの作成を簡素化します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ retrieval系タスク用にモデルを自動的にファインチューニングする。</div><p class='explanation-text'>不正解：LangChainはモデルを統合しますが、ファインチューニングは処理しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embeddingを最適化することで計算コストを削減する。</div><p class='explanation-text'>不正解：LangChainはワークフロー設計に焦点を当てており、計算コストの削減ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルの出力を暗号化することで機密データのセキュリティを強化する。</div><p class='explanation-text'>不正解：LangChainはモデル出力のセキュリティ機能を組み込みで提供しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>LangChainのモジュール型ツールにより、開発者は完全なretrievalと要約pipelineを効率的に構築でき、このようなタスクに優れた選択肢となります。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "LangChainはretriever・embeddingモデル・LLMをモジュール型ツールで統合するため、retrieval・要約pipelineの構築に最適。"
  },
  {
    "id": 11,
    "question": "Generative AIエンジニアが、法的ドキュメントを取得して要約を生成するLangChainベースのアプリケーションをデプロイする必要があります。このシステムにおけるLangChainの主な役割は何ですか？",
    "choices": [
      {
        "text": "スケーラブルなデプロイのためのクラウドリソース管理。",
        "is_correct": false
      },
      {
        "text": "アプリケーションのデータフローの可視化。",
        "is_correct": false
      },
      {
        "text": "LLMのファインチューニングの自動化。",
        "is_correct": false
      },
      {
        "text": "retriever、LLM、前処理ステップを接続することでワークフローをオーケストレーションする。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ retriever、LLM、前処理ステップを接続することでワークフローをオーケストレーションする。</div><p class='explanation-text'>正解：LangChainはretrievalや要約などの複雑なワークフローのオーケストレーションを簡素化します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ スケーラブルなデプロイのためのクラウドリソース管理。</div><p class='explanation-text'>不正解：LangChainはワークフローに焦点を当てており、リソース管理ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ アプリケーションのデータフローの可視化。</div><p class='explanation-text'>不正解：LangChainは可視化ツールではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ LLMのファインチューニングの自動化。</div><p class='explanation-text'>不正解：LangChainはモデルをファインチューニングするのではなく、事前トレーニング済みのモデルを統合します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>LangChainはretriever、前処理、LLMを統合pipelineで接続し、モジュール型のretrievalと要約ワークフローの構築に理想的です。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "LangChainの主な役割はretriever・LLM・前処理ステップのオーケストレーションであり、クラウド管理やファインチューニングではない。"
  },
  {
    "id": 12,
    "question": "Generative AIエンジニアが、機密顧客データを扱うチャットボットのガードレールを実装する必要があります。最も重要なステップは何ですか？",
    "choices": [
      {
        "text": "過度な詳細を避けるために応答を短縮する。",
        "is_correct": false
      },
      {
        "text": "より小さなデータセットでチャットボットをトレーニングする。",
        "is_correct": false
      },
      {
        "text": "応答をフィルタリングして潜在的なプライベートデータの漏洩を検出・阻止する。",
        "is_correct": true
      },
      {
        "text": "無制限の応答生成を有効にする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 応答をフィルタリングして潜在的なプライベートデータの漏洩を検出・阻止する。</div><p class='explanation-text'>正解：フィルタリングにより機密情報がチャットボットの応答に含まれることを防ぎ、プライバシーを確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 過度な詳細を避けるために応答を短縮する。</div><p class='explanation-text'>不正解：短い応答は本質的にデータ漏洩を防ぎません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より小さなデータセットでチャットボットをトレーニングする。</div><p class='explanation-text'>不正解：データセットのサイズはプライバシーの懸念に直接対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 無制限の応答生成を有効にする。</div><p class='explanation-text'>不正解：無制限の応答はデータ漏洩のリスクを高めます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>プライベートデータの応答フィルタリングにより、プライバシー基準への準拠と機密データの露出防止が確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "機密顧客データを扱うチャットボットのガードレールとして、応答フィルタリングによるプライベートデータ漏洩の検出・阻止が最重要。"
  },
  {
    "id": 13,
    "question": "Generative AIエンジニアが、技術サポート質問に答えるRAGシステムをトレーニングするためのソースドキュメントを特定する必要があります。どの要素を優先すべきですか？",
    "choices": [
      {
        "text": "無料または公開ドメインのドキュメントの入手可能性。",
        "is_correct": false
      },
      {
        "text": "コンテンツの関連性よりもソースの多様性。",
        "is_correct": false
      },
      {
        "text": "システムの技術サポート要件に基づくコンテンツの関連性と品質。",
        "is_correct": true
      },
      {
        "text": "トレーニングデータを最大化するためのドキュメントの長さ。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ システムの技術サポート要件に基づくコンテンツの関連性と品質。</div><p class='explanation-text'>正解：高品質で関連性の高いコンテンツにより、システムが正確で有用な回答を取得することが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 無料または公開ドメインのドキュメントの入手可能性。</div><p class='explanation-text'>不正解：公開可用性は技術サポートニーズとのアライメントを保証しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンテンツの関連性よりもソースの多様性。</div><p class='explanation-text'>不正解：タスクへの関連性は、多様だが無関係なソースの必要性を上回ります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トレーニングデータを最大化するためのドキュメントの長さ。</div><p class='explanation-text'>不正解：長さだけでは関連性や品質を保証しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>高品質で関連性の高いドキュメントを選択することで、システムが技術サポート要件に沿った正確な回答を取得することが保証されます。</p></div>",
    "tags": "データ準備",
    "summary": "RAGシステムのソースドキュメント選択では、ドキュメントの長さや多様性より、技術サポート要件への関連性と品質を優先する。"
  },
  {
    "id": 14,
    "question": "Generative AIエンジニアが、学術論文を要約するLLMベースのシステムを最適化しています。要約が結果セクションの重要ポイントを見逃すことがよくあります。どの戦略を使用すべきですか？",
    "choices": [
      {
        "text": "コンテキストのために論文全体をプロンプトに含める。",
        "is_correct": false
      },
      {
        "text": "計算を節約するためにプロンプトなしで要約する。",
        "is_correct": false
      },
      {
        "text": "「この論文を要約してください」のような曖昧なプロンプトを使用する。",
        "is_correct": false
      },
      {
        "text": "「結果セクションに焦点を当ててください」などのセクション固有の指示をプロンプトに含める。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 「結果セクションに焦点を当ててください」などのセクション固有の指示をプロンプトに含める。</div><p class='explanation-text'>正解：ターゲットを絞った指示により、モデルがドキュメントの重要な部分を強調することが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンテキストのために論文全体をプロンプトに含める。</div><p class='explanation-text'>不正解：不必要なコンテキストでプロンプトを過負荷にするとパフォーマンスが低下し、コストが増加する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 計算を節約するためにプロンプトなしで要約する。</div><p class='explanation-text'>不正解：プロンプトがないと、非構造化で信頼性の低い要約が生成されます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 「この論文を要約してください」のような曖昧なプロンプトを使用する。</div><p class='explanation-text'>不正解：曖昧なプロンプトは、モデルが重要なセクションを優先するよう誘導できません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>セクション固有の指示を追加することで、モデルが結果セクションなどの重要な情報に集中し、要約の関連性が向上します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "学術論文の要約が特定セクションを見逃す場合、プロンプトにセクション固有の指示（例：結果セクションに焦点）を追加する。"
  },
  {
    "id": 15,
    "question": "Generative AIエンジニアが、RAGアプリケーションにデータを供給するデータセット内の問題のあるテキストを特定する任務を担っています。一部のドキュメントに不適切な言語が含まれています。どの軽減戦略を実装すべきですか？",
    "choices": [
      {
        "text": "取り込まれたドキュメント内の不適切な単語をプレースホルダーに置き換える。",
        "is_correct": false
      },
      {
        "text": "すべてのドキュメントを取り込み、出力モニタリングに頼る。",
        "is_correct": false
      },
      {
        "text": "取り込み前に不適切な言語を検出・除去するフィルタリングツールを使用する。",
        "is_correct": true
      },
      {
        "text": "処理中に不適切な言語を無視するようLLMに頼る。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 取り込み前に不適切な言語を検出・除去するフィルタリングツールを使用する。</div><p class='explanation-text'>正解：フィルタリングにより問題のあるテキストがRAGシステムに入らないことが保証され、品質と倫理的基準が維持されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 取り込まれたドキュメント内の不適切な単語をプレースホルダーに置き換える。</div><p class='explanation-text'>不正解：プレースホルダーへの置換では、問題のあるコンテキストが一部残る可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ すべてのドキュメントを取り込み、出力モニタリングに頼る。</div><p class='explanation-text'>不正解：取り込み後のモニタリングでは、問題のあるコンテンツがシステムに影響することを防げません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 処理中に不適切な言語を無視するようLLMに頼る。</div><p class='explanation-text'>不正解：LLMは明示的な指示なしに問題のあるコンテンツを本質的に区別または除外することはできません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>取り込み前のフィルタリングにより問題のあるテキストが除去され、データセットの品質と倫理的準拠が確保されます。</p></div>",
    "tags": "ガバナンス",
    "summary": "RAGシステムへの不適切なテキスト流入を防ぐには、取り込み前のフィルタリングツールによる検出・除去が最も効果的。"
  },
  {
    "id": 16,
    "question": "Generative AIエンジニアが、言語モデルのトレーニングに使用する前にデータセットの法的リスクを評価する必要があります。考慮すべき重要な要素は何ですか？",
    "choices": [
      {
        "text": "データ利用の許可と制限を規定するライセンス条項。",
        "is_correct": true
      },
      {
        "text": "トレーニング要件を満たすためのデータセットのサイズ。",
        "is_correct": false
      },
      {
        "text": "トレーニングに使用されるモデルアーキテクチャ。",
        "is_correct": false
      },
      {
        "text": "データセット内の機密情報の存在。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ データ利用の許可と制限を規定するライセンス条項。</div><p class='explanation-text'>正解：ライセンス条項は、商業利用や変更に関する制限など、データセットを合法的に使用できる方法を決定します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トレーニング要件を満たすためのデータセットのサイズ。</div><p class='explanation-text'>不正解：データセットのサイズは法的リスクとは無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トレーニングに使用されるモデルアーキテクチャ。</div><p class='explanation-text'>不正解：モデルアーキテクチャはデータセットの法的準拠とは無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ データセット内の機密情報の存在。</div><p class='explanation-text'>不正解：重要ですが、ライセンス条項が主要な法的考慮事項です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ライセンス条項を確認することで、データセットが法的許可に従って使用され、潜在的な紛争や違反を回避することが保証されます。</p></div>",
    "tags": "ガバナンス",
    "summary": "データセットの法的リスク評価では、商業利用・変更等の制限を規定するライセンス条項の確認が最優先。"
  },
  {
    "id": 17,
    "question": "翻訳ユースケースでLLMの応答を定性的に評価する際、LLM出力の安全性を評価するためにどの指標を考慮すべきですか？",
    "choices": [
      {
        "text": "コードで応答を生成する能力",
        "is_correct": false
      },
      {
        "text": "応答のレイテンシと生成されたテキストの長さ",
        "is_correct": false
      },
      {
        "text": "応答の精度と関連性",
        "is_correct": true
      },
      {
        "text": "以前の言語との類似性",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 応答の精度と関連性</div><p class='explanation-text'>正解：精度と関連性は安全性の重要な指標であり、出力がエラーや有害なコンテンツなしにタスク要件を満たすことを保証します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コードで応答を生成する能力</div><p class='explanation-text'>不正解：コード生成は翻訳タスクの安全性評価とは無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答のレイテンシと生成されたテキストの長さ</div><p class='explanation-text'>不正解：レイテンシとテキストの長さはパフォーマンス指標であり、安全性の指標ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 以前の言語との類似性</div><p class='explanation-text'>不正解：安全性は言語的類似性の維持についてではなく、翻訳の関連性と適切さを確保することです。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>正確で関連性の高い出力は、ユーザーのニーズとコンテキストに沿うことで、翻訳ユースケースにおける安全で効果的な応答を確保します。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "翻訳ユースケースでのLLM出力の安全性評価には、レイテンシや言語類似性ではなく、応答の精度と関連性が重要な指標。"
  },
  {
    "id": 18,
    "question": "Generative AIエンジニアが、求人票を候補者評価基準に変換するシステムを設計しています。システムは各求人票に対して構造化されたチェックリストを生成する必要があります。pipelineにはどのコンポーネントを含めるべきですか？",
    "choices": [
      {
        "text": "求人票にembeddingモデルを使用し、評価基準を生成するためにLLMを使用する。",
        "is_correct": true
      },
      {
        "text": "要約モデルを使用して求人票をより短い形式に凝縮する。",
        "is_correct": false
      },
      {
        "text": "分類モデルを使用して求人票をカテゴリ別に分類する。",
        "is_correct": false
      },
      {
        "text": "ルールベースシステムを使用して基準を抽出する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 求人票にembeddingモデルを使用し、評価基準を生成するためにLLMを使用する。</div><p class='explanation-text'>正解：embeddingはセマンティックな意味をキャプチャし、LLMは説明から構造化された出力を生成します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 要約モデルを使用して求人票をより短い形式に凝縮する。</div><p class='explanation-text'>不正解：要約は評価基準に変換されません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 分類モデルを使用して求人票をカテゴリ別に分類する。</div><p class='explanation-text'>不正解：分類は詳細な評価チェックリストを生成しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ルールベースシステムを使用して基準を抽出する。</div><p class='explanation-text'>不正解：ルールベースシステムは多様な求人票に対して柔軟性が不足しています。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>embeddingとLLMを組み合わせることで、pipelineが正確で構造化された評価基準を生成することが保証されます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "求人票から構造化された評価基準を生成するには、embeddingモデルによる意味キャプチャとLLMによる構造化出力生成の組み合わせが最適。"
  },
  {
    "id": 19,
    "question": "Generative AIエンジニアが、デプロイされたモデルservingエンドポイントへのアクセスを制御する必要があります。安全なアクセスを確保するためにどのような技術を使用できますか？",
    "choices": [
      {
        "text": "追加のアクセス制御なしにプライベートネットワークにモデルをデプロイする。",
        "is_correct": false
      },
      {
        "text": "APIキー認証とロールベースアクセス制御（RBAC）を実装する。",
        "is_correct": true
      },
      {
        "text": "特定のIPアドレスへのアクセスを制限するが、認証をスキップする。",
        "is_correct": false
      },
      {
        "text": "すべてのユーザーに共有アクセスキーを持つパブリックエンドポイントを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ APIキー認証とロールベースアクセス制御（RBAC）を実装する。</div><p class='explanation-text'>正解：APIキーとRBACにより、モデルservingエンドポイントへの安全で細かいアクセス制御が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 追加のアクセス制御なしにプライベートネットワークにモデルをデプロイする。</div><p class='explanation-text'>不正解：プライベートネットワークだけでは、外部統合のエンドポイントセキュリティを確保できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 特定のIPアドレスへのアクセスを制限するが、認証をスキップする。</div><p class='explanation-text'>不正解：IP制限だけでは強固な認証メカニズムを提供できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ すべてのユーザーに共有アクセスキーを持つパブリックエンドポイントを使用する。</div><p class='explanation-text'>不正解：共有キーはセキュリティを損ない、個別のアクセス制御を提供しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>APIキーとRBACは強固なセキュリティを提供し、認可されたユーザーのみがデプロイされたモデルエンドポイントにアクセスできることを保証します。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "モデルservingエンドポイントの安全なアクセス制御には、APIキー認証とRBACの組み合わせが最も効果的。"
  },
  {
    "id": 20,
    "question": "Generative AIエンジニアが、本番チャットボットで応答を生成する2つのLLMのコスト効率を評価する必要があります。どのメトリクスを比較すべきですか？（2つ選択）",
    "choices": [
      {
        "text": "パラメータ数によるモデルサイズ。",
        "is_correct": false
      },
      {
        "text": "出力品質のためのBLEUとperplexity。",
        "is_correct": false
      },
      {
        "text": "トークン制限と入力サイズの柔軟性。",
        "is_correct": false
      },
      {
        "text": "クエリあたりのコストとレイテンシ。",
        "is_correct": true
      },
      {
        "text": "高負荷シナリオでのthroughput。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ クエリあたりのコストとレイテンシ。</div><p class='explanation-text'>正解：これらのメトリクスは、運用コストと応答性の直接的な比較を提供します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 高負荷シナリオでのthroughput。</div><p class='explanation-text'>正解：throughputは、スケールでクエリを効率的に処理するシステムの能力を測定します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ パラメータ数によるモデルサイズ。</div><p class='explanation-text'>不正解：モデルサイズだけでは、コスト効率を直接示すことはできません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 出力品質のためのBLEUとperplexity。</div><p class='explanation-text'>不正解：これらのメトリクスは品質を評価しますが、コストは評価しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ トークン制限と入力サイズの柔軟性。</div><p class='explanation-text'>不正解：これらは機能的制約ですが、コスト効率を測定しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>クエリあたりのコスト、レイテンシ、throughputを比較することで、LLMのコスト効率を包括的に評価できます。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "LLMのコスト効率評価には、クエリあたりのコスト・レイテンシ・高負荷シナリオでのthroughputの3指標を比較する。"
  },
  {
    "id": 21,
    "question": "Generative AIエンジニアが、AIチャットボットが機密顧客情報を漏洩しないようにガードレールを実装する必要があります。最も効果的なアプローチは何ですか？",
    "choices": [
      {
        "text": "過度な詳細を避けるために応答のトークン長を短縮する。",
        "is_correct": false
      },
      {
        "text": "機密データの漏洩を検出するためにユーザーのフィードバックに頼る。",
        "is_correct": false
      },
      {
        "text": "推論中に機密データを検出・阻止するためにpromptベースのフィルターを使用する。",
        "is_correct": true
      },
      {
        "text": "出力にtemperatureベースのランダム性を有効にする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 推論中に機密データを検出・阻止するためにpromptベースのフィルターを使用する。</div><p class='explanation-text'>正解：フィルターは機密情報を識別し、応答に含まれることを防ぐことができます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 過度な詳細を避けるために応答のトークン長を短縮する。</div><p class='explanation-text'>不正解：応答の長さを短縮しても機密データ漏洩のリスクに対処できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 機密データの漏洩を検出するためにユーザーのフィードバックに頼る。</div><p class='explanation-text'>不正解：フィードバックに頼ることは事後対応であり、推論中の問題を防ぎません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 出力にtemperatureベースのランダム性を有効にする。</div><p class='explanation-text'>不正解：ランダム性は応答の変動性を高め、機密データを露出させる可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>promptベースのフィルターは機密コンテンツを積極的に監視・阻止し、応答がセキュアでプライバシー基準に準拠していることを確保します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "チャットボットの機密情報漏洩防止には、推論中にpromptベースのフィルターで機密データを検出・阻止するガードレールが最効果的。"
  },
  {
    "id": 22,
    "question": "Generative AIエンジニアが、作者のウェブフォーラムで議論されているファンタジー小説シリーズに関する質問に答えるRAGアプリケーションを開発しました。小説はチャンク化され、ページ番号、チャプタータイトル、書籍名などのメタデータを含むベクトルストアにembeddingされています。ユーザークエリは関連チャンクを取得し、LLMが応答を生成するために処理します。エンジニアは当初、直感でチャンキング戦略と設定を選択しましたが、今後はこれらの設定を最適化するための体系的なアプローチを求めています。チャンキング戦略とパラメータを改善するためにエンジニアが採用すべき2つのアプローチはどれですか？（2つ選択）",
    "choices": [
      {
        "text": "回答を最もよく含む書籍を予測するユーザークエリ用の分類器を追加する。これを使用してretrievalをフィルタリングする。",
        "is_correct": false
      },
      {
        "text": "適切な評価メトリクス（例：recallまたはNDCG）を選択し、段落またはチャプターでチャンクを分割するなどのチャンキング戦略をテストする。最高のパフォーマンスメトリクスを持つ戦略を選択する。",
        "is_correct": true
      },
      {
        "text": "以前の質問が特定のチャンクによってどれだけ答えられているかを評価するLLM-as-a-judgeメトリクスを作成する。このメトリクスを使用してチャンキングパラメータを最適化する。",
        "is_correct": true
      },
      {
        "text": "既知の質問と最良の回答をLLMに渡し、最適なトークン数を特定するよう指示する。要約統計量（平均、中央値など）を使用してチャンクサイズを決定する。",
        "is_correct": false
      },
      {
        "text": "embeddingモデルを変更してパフォーマンスを比較する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 適切な評価メトリクス（例：recallまたはNDCG）を選択し、段落またはチャプターでチャンクを分割するなどのチャンキング戦略をテストする。最高のパフォーマンスメトリクスを持つ戦略を選択する。</div><p class='explanation-text'>正解：評価メトリクスを使用することで、最も効果的なチャンキング戦略を特定するための構造化された方法が提供されます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 以前の質問が特定のチャンクによってどれだけ答えられているかを評価するLLM-as-a-judgeメトリクスを作成する。このメトリクスを使用してチャンキングパラメータを最適化する。</div><p class='explanation-text'>正解：LLM-as-a-judgeアプローチにより、エンジニアはチャンクの関連性とサイズを体系的に評価・改善できます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 回答を最もよく含む書籍を予測するユーザークエリ用の分類器を追加する。これを使用してretrievalをフィルタリングする。</div><p class='explanation-text'>不正解：retrievalを絞り込むのに役立ちますが、分類器はチャンキング戦略自体を最適化しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 既知の質問と最良の回答をLLMに渡し、最適なトークン数を特定するよう指示する。要約統計量（平均、中央値など）を使用してチャンクサイズを決定する。</div><p class='explanation-text'>不正解：LLM駆動のトークン提案は、堅牢なチャンク最適化のための構造化されたアプローチが欠けています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embeddingモデルを変更してパフォーマンスを比較する。</div><p class='explanation-text'>不正解：embeddingモデルの実験はセマンティックアライメントを改善しますが、チャンキング戦略を直接最適化しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>recallやNDCGなどのメトリクスを使用した体系的な評価と、LLM-as-a-judgeメトリクスを組み合わせることで、最適なパフォーマンスのための最良のチャンキング戦略が選択されます。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "RAGのチャンキング戦略最適化には、recall/NDCGなどの評価メトリクスによる戦略テストとLLM-as-a-judgeの組み合わせが有効。"
  },
  {
    "id": 23,
    "question": "Generative AIエンジニアが、RAGアプリケーション用のエンドポイントをデプロイする必要があります。エンドポイントはリアルタイムクエリを処理し、retrieval、embedding、LLMを統合する必要があります。エンジニアが従うべきステップの順序はどれですか？（2つ選択）",
    "choices": [
      {
        "text": "エンドポイントをデプロイする前にLLMをファインチューニングする。",
        "is_correct": false
      },
      {
        "text": "embeddingをトレーニング → ベクトルストアを作成 → retrievalを統合 → エンドポイントをデプロイ。",
        "is_correct": true
      },
      {
        "text": "よりシンプルな実装のためにベクトル検索なしでretrievalを使用する。",
        "is_correct": false
      },
      {
        "text": "embeddingのトレーニングをスキップして直接ベクトルストアを作成する。",
        "is_correct": false
      },
      {
        "text": "embeddingを設定する前にエンドポイントをデプロイする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ embeddingをトレーニング → ベクトルストアを作成 → retrievalを統合 → エンドポイントをデプロイ。</div><p class='explanation-text'>正解：この順序により、すべてのコンポーネントがリアルタイムクエリ処理に向けて準備されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ エンドポイントをデプロイする前にLLMをファインチューニングする。</div><p class='explanation-text'>不正解：ファインチューニングはエンドポイントのデプロイに必須ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ よりシンプルな実装のためにベクトル検索なしでretrievalを使用する。</div><p class='explanation-text'>不正解：ベクトル検索はretrieval品質を向上させるため、不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embeddingのトレーニングをスキップして直接ベクトルストアを作成する。</div><p class='explanation-text'>不正解：embeddingなしでは、ベクトルストアはドキュメントのセマンティクスを表現できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embeddingを設定する前にエンドポイントをデプロイする。</div><p class='explanation-text'>不正解：embeddingはエンドポイントのデプロイ前に準備されている必要があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>適切な順序により、リアルタイムRAGアプリケーション向けの効率的で完全に統合されたエンドポイントが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "RAGエンドポイントのデプロイ順序は、embeddingトレーニング→ベクトルストア作成→retrieval統合→エンドポイントデプロイの順が正しい。"
  },
  {
    "id": 24,
    "question": "Generative AIエンジニアが、パーソナライズされたワークアウトルーティンを生成するシステムを設計する任務を担っています。システムはユーザーの目標、好み、活動履歴を考慮する必要があります。最も効果的なpipeline設計はどれですか？",
    "choices": [
      {
        "text": "ユーザー入力をセマンティックに表現するためにembeddingを使用する。",
        "is_correct": false
      },
      {
        "text": "入力を事前定義されたワークアウトにマッピングするためにルールベースシステムを使用する。",
        "is_correct": false
      },
      {
        "text": "入力に基づいてワークアウトルーティンを生成するLLMを使用し、ユーザーの活動履歴のためのretrieverでサポートする。",
        "is_correct": true
      },
      {
        "text": "ユーザーの好みを分類するために分類モデルを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 入力に基づいてワークアウトルーティンを生成するLLMを使用し、ユーザーの活動履歴のためのretrieverでサポートする。</div><p class='explanation-text'>正解：LLMとretrieverを組み合わせることで、ユーザーの好みと目標に合わせた動的でパーソナライズされた出力が確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザー入力をセマンティックに表現するためにembeddingを使用する。</div><p class='explanation-text'>不正解：embedding単体では実行可能なプランを生成できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 入力を事前定義されたワークアウトにマッピングするためにルールベースシステムを使用する。</div><p class='explanation-text'>不正解：ルールベースシステムは多様なユーザー入力に対して柔軟性が不足しています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザーの好みを分類するために分類モデルを使用する。</div><p class='explanation-text'>不正解：分類はパーソナライズされたワークアウトプランを生成しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>LLMとretrieverの組み合わせにより、ユーザー入力に基づいたパーソナライズされた動的なワークアウトルーティンが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "パーソナライズされたワークアウト生成には、LLMによる動的生成と活動履歴取得のためのretrieverの組み合わせが最適。"
  },
  {
    "id": 25,
    "question": "Generative AIエンジニアが、基盤モデルAPIを使用した会話エージェントを設計しています。システムは可変クエリ負荷を効率的に処理する必要があります。エンジニアはどのようにパフォーマンスを最適化できますか？",
    "choices": [
      {
        "text": "クエリ負荷に基づいて動的にリソースを調整するオートスケーリングを使用する。",
        "is_correct": true
      },
      {
        "text": "ユーザークエリを制限するためにAPIレート制限を減らす。",
        "is_correct": false
      },
      {
        "text": "最大想定負荷でリソース割り当てを固定する。",
        "is_correct": false
      },
      {
        "text": "デプロイを簡素化するためにパフォーマンスメトリクスの監視をスキップする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ クエリ負荷に基づいて動的にリソースを調整するオートスケーリングを使用する。</div><p class='explanation-text'>正解：オートスケーリングにより、リソースの可用性がワークロードの需要に合致し、パフォーマンスが維持されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザークエリを制限するためにAPIレート制限を減らす。</div><p class='explanation-text'>不正解：レート制限はシステムリソースの利用を最適化しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 最大想定負荷でリソース割り当てを固定する。</div><p class='explanation-text'>不正解：固定割り当ては低負荷時の過少利用とスパイク時のボトルネックを招きます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ デプロイを簡素化するためにパフォーマンスメトリクスの監視をスキップする。</div><p class='explanation-text'>不正解：メトリクスの監視はパフォーマンス問題の検出と対処に不可欠です。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>オートスケーリングはワークロードの需要に合わせてリソースを動的に調整し、一貫した効率的なパフォーマンスを確保します。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "基盤モデルAPIを使用した会話エージェントの可変負荷対応には、クエリ負荷に応じて動的にリソースを調整するオートスケーリングが最適。"
  },
  {
    "id": 26,
    "question": "Generative AIエンジニアが、就職面接の質問を生成するプロンプトを作成する任務を担っています。質問は問題解決能力とチームワークの評価に焦点を当てる必要があります。最良のプロンプト構造はどれですか？",
    "choices": [
      {
        "text": "就職面接で評価される一般的なスキルを要約する。",
        "is_correct": false
      },
      {
        "text": "一般的な問題解決シナリオのリストを提供する。",
        "is_correct": false
      },
      {
        "text": "問題解決能力とチームワーク能力を評価する就職面接の質問セットを設計し、明確で簡潔なクエリを提供する。",
        "is_correct": true
      },
      {
        "text": "就職候補者向けの一般的な面接質問を生成する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 問題解決能力とチームワーク能力を評価する就職面接の質問セットを設計し、明確で簡潔なクエリを提供する。</div><p class='explanation-text'>正解：このプロンプトにより、LLMが評価される特定のスキルに合わせた質問を生成することが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 就職面接で評価される一般的なスキルを要約する。</div><p class='explanation-text'>不正解：要約は面接の質問を生成しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 一般的な問題解決シナリオのリストを提供する。</div><p class='explanation-text'>不正解：シナリオのリストアップは構造化された質問を生成しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 就職候補者向けの一般的な面接質問を生成する。</div><p class='explanation-text'>不正解：一般的なプロンプトは問題解決やチームワークスキルに焦点を当てません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>必要なスキルと構造を指定する明示的なプロンプトにより、生成された質問が集中的で関連性の高いものになることが保証されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "特定スキル（問題解決・チームワーク）の面接質問生成には、評価目標と質問構造を明示したプロンプト設計が最効果的。"
  },
  {
    "id": 27,
    "question": "マーケティングエージェンシーが、広告用のキャッチーな見出しを生成するAIツールを必要としています。見出しは「若いプロフェッショナル」や「退職者」などの特定のデモグラフィックをターゲットにする必要があります。最良の結果を得るためにプロンプトに含めるべき内容は何ですか？（2つ選択）",
    "choices": [
      {
        "text": "創造性を促すためにトーンの指定を避ける。",
        "is_correct": false
      },
      {
        "text": "成功した見出しのfew-shotサンプルを提供する。",
        "is_correct": true
      },
      {
        "text": "「広告のキャッチーな見出しを書いてください」のような一般的なプロンプトを使用する。",
        "is_correct": false
      },
      {
        "text": "トーン、ターゲットオーディエンス、望ましい成果を指定する。例：「若いプロフェッショナルをターゲットにした見出しを書いてください。トーン：プロフェッショナルでモチベーショナル。成果：キャリア成長の機会を強調する。」",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 成功した見出しのfew-shotサンプルを提供する。</div><p class='explanation-text'>正解：サンプルは高パフォーマンスな出力を示すことでAIをガイドします。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ トーン、ターゲットオーディエンス、望ましい成果を指定する。例：「若いプロフェッショナルをターゲットにした見出しを書いてください。トーン：プロフェッショナルでモチベーショナル。成果：キャリア成長の機会を強調する。」</div><p class='explanation-text'>正解：トーン、オーディエンス、目標を含めることで、AIがキャンペーンニーズに合わせた見出しを生成することが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 創造性を促すためにトーンの指定を避ける。</div><p class='explanation-text'>不正解：トーンの指示がないと、ターゲットのデモグラフィックとの不一致や一貫性のなさのリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 「広告のキャッチーな見出しを書いてください」のような一般的なプロンプトを使用する。</div><p class='explanation-text'>不正解：一般的なプロンプトは無関係または一貫性のない見出しを生成する可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>明確な指示（トーン、オーディエンス、目標）とサンプルを組み合わせることで、AIが意図したオーディエンスに響く一貫した高品質な見出しを生成することが保証されます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "特定デモグラフィック向け広告見出し生成には、few-shotサンプルの提供とトーン・ターゲット・成果を明示した指示の組み合わせが最良。"
  },
  {
    "id": 28,
    "question": "Generative AIエンジニアが、会議の要約を抽出するプロンプトを設計する必要があります。各要約にはアクションアイテム、参加者、決定事項を含める必要があります。最良のプロンプト設計はどれですか？",
    "choices": [
      {
        "text": "会議の議事録を簡潔なレポートにまとめる。",
        "is_correct": false
      },
      {
        "text": "会議の議論の概要を提供する。",
        "is_correct": false
      },
      {
        "text": "会議のハイライトを箇条書き形式で強調する。",
        "is_correct": false
      },
      {
        "text": "議事録に基づいて、アクションアイテム、参加者、決定事項を含む会議の要約を抽出する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 議事録に基づいて、アクションアイテム、参加者、決定事項を含む会議の要約を抽出する。</div><p class='explanation-text'>正解：このプロンプトは必要な要素を明示的に定義し、モデルが構造化された完全な要約を生成することを保証します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 会議の議事録を簡潔なレポートにまとめる。</div><p class='explanation-text'>不正解：簡潔なレポートはアクションアイテムや参加者などの重要な要素を省略する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 会議の議論の概要を提供する。</div><p class='explanation-text'>不正解：概要はアクション可能な要約のための詳細と構造が不足しています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 会議のハイライトを箇条書き形式で強調する。</div><p class='explanation-text'>不正解：箇条書きだけでは必要なすべてのフィールドが含まれない可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>必要なフィールドを定義する明示的なプロンプトにより、モデルが構造化されたアクション可能な会議要約を生成することが保証されます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "会議要約の抽出には、アクションアイテム・参加者・決定事項を明示的に指定したプロンプト設計が最も構造化された結果を生む。"
  },
  {
    "id": 29,
    "question": "Generative AIエンジニアが、前処理と後処理ステップを含む財務データを処理するpyfuncモデルを設計しています。モデルは入力をクリーニングし、予測を実行し、結果をユーザー向けにフォーマットする必要があります。この機能を確保するワークフローはどれですか？",
    "choices": [
      {
        "text": "最初に予測を適用し、前処理と後処理を別のpipelineで処理する。",
        "is_correct": false
      },
      {
        "text": "生のデータを直接モデルに入力し、クリーニングのために後処理に頼る。",
        "is_correct": false
      },
      {
        "text": "財務データを前処理し（例：値の正規化）、予測モデルを適用し、出力をJSONなどのユーザーフレンドリーな形式に後処理する。",
        "is_correct": true
      },
      {
        "text": "後処理をスキップして生のモデル出力をユーザーに返す。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 財務データを前処理し（例：値の正規化）、予測モデルを適用し、出力をJSONなどのユーザーフレンドリーな形式に後処理する。</div><p class='explanation-text'>正解：このワークフローにより、データがクリーンで予測が正確であり、結果がエンドユーザー向けの構造化された形式で提示されることが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 最初に予測を適用し、前処理と後処理を別のpipelineで処理する。</div><p class='explanation-text'>不正解：ステップを分離するとワークフローの効率と統合性が低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 生のデータを直接モデルに入力し、クリーニングのために後処理に頼る。</div><p class='explanation-text'>不正解：前処理はノイズを除去し入力品質を確保するために不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 後処理をスキップして生のモデル出力をユーザーに返す。</div><p class='explanation-text'>不正解：生の出力はエンドユーザーにとってコンテキストと使いやすさが不足する可能性があります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>前処理、モデル推論、後処理ステップを含めることで、モデルがデータを効果的に処理し、ユーザーに準備の整った結果を出力することが保証されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "財務データ処理のpyfuncモデルでは、前処理(正規化)→予測→後処理(JSON形式化)の順序が正しいワークフロー。"
  },
  {
    "id": 30,
    "question": "Generative AIエンジニアが、小売会社向けのQAシステムを構築する必要があります。システムは製品在庫と在庫状況に関する回答を取得する必要があります。pipelineに含めるべきツールはどれですか？",
    "choices": [
      {
        "text": "在庫データを取得するretrieverと応答を生成するLLM。",
        "is_correct": true
      },
      {
        "text": "在庫データをセマンティックに表現するembeddingモデル。",
        "is_correct": false
      },
      {
        "text": "製品説明を要約する要約モデル。",
        "is_correct": false
      },
      {
        "text": "製品を分類する分類モデル。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 在庫データを取得するretrieverと応答を生成するLLM。</div><p class='explanation-text'>正解：retrieverは関連する在庫データを取得し、LLMは動的に正確な応答を作成します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 在庫データをセマンティックに表現するembeddingモデル。</div><p class='explanation-text'>不正解：embedding単体ではクエリ応答を生成しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 製品説明を要約する要約モデル。</div><p class='explanation-text'>不正解：要約はretrievalや在庫クエリに対応しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 製品を分類する分類モデル。</div><p class='explanation-text'>不正解：分類は動的な質問応答のニーズを満たしません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>retrieverとLLMの組み合わせにより、在庫関連クエリへの正確な回答が確保され、ユーザー要件を満たします。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "小売会社の製品在庫QAシステムには、在庫データを取得するretrieverと動的応答を生成するLLMの組み合わせが必要。"
  },
  {
    "id": 31,
    "question": "Generative AIエンジニアが、ノイズのある文字を除去することで入力テキストを前処理し、結果をJSON構造にフォーマットすることで出力を後処理するPyFuncモデルをデプロイする必要があります。前処理と後処理のステップはどこに実装すべきですか？",
    "choices": [
      {
        "text": "PyFuncモデルの外部にスタンドアロンのPythonスクリプトとして。",
        "is_correct": false
      },
      {
        "text": "Pandasなどのデータ前処理ライブラリを使用して。",
        "is_correct": false
      },
      {
        "text": "PyFuncラッパーのpredict関数の内部に、モデルロジックの一部として。",
        "is_correct": true
      },
      {
        "text": "カスタムAPIラッパーを介してデプロイメントサーバーレベルで。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ PyFuncラッパーのpredict関数の内部に、モデルロジックの一部として。</div><p class='explanation-text'>正解：PyFuncモデルはpredict関数内に前処理と後処理をカプセル化するように設計されており、すべての操作がモデルワークフロー内でシームレスに実行されることが保証されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ PyFuncモデルの外部にスタンドアロンのPythonスクリプトとして。</div><p class='explanation-text'>不正解：外部スクリプトは不必要な複雑さを加え、デプロイ中の一貫性のリスクをもたらします。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ Pandasなどのデータ前処理ライブラリを使用して。</div><p class='explanation-text'>不正解：Pandasはデータ変換に有用ですが、PyFuncモデルワークフローと直接統合することはできません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ カスタムAPIラッパーを介してデプロイメントサーバーレベルで。</div><p class='explanation-text'>不正解：実現可能ですが、これらの操作をサーバーレベルに置くとメンテナンスとデバッグが複雑になります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>PyFuncモデルはpredict関数内にカスタムの前処理・後処理ロジックをカプセル化でき、推論中のシームレスで統合されたワークフローが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "PyFuncモデルの前処理・後処理はPyFuncラッパーのpredict関数内に実装し、モデルロジックとして一体化させるのが正しい設計。"
  },
  {
    "id": 32,
    "question": "Generative AIエンジニアが、システムをクラッシュさせるように設計された敵対的ユーザー入力からGenerative AIアプリケーションを保護する必要があります。最良の防御戦略は何ですか？",
    "choices": [
      {
        "text": "ユーザー入力を監視して不審なアクティビティをログに記録する。",
        "is_correct": false
      },
      {
        "text": "クラッシュリスクを制限するためにモデルの応答の複雑さを下げる。",
        "is_correct": false
      },
      {
        "text": "許容できないパターンとフォーマットを確認するための入力バリデーションルールを実装する。",
        "is_correct": true
      },
      {
        "text": "敵対的入力を処理するように設計されたデータセットでモデルをトレーニングする。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 許容できないパターンとフォーマットを確認するための入力バリデーションルールを実装する。</div><p class='explanation-text'>正解：入力バリデーションは敵対的入力がシステムの安定性とセキュリティを損なうことを防ぎます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ユーザー入力を監視して不審なアクティビティをログに記録する。</div><p class='explanation-text'>不正解：監視は問題の検出に役立ちますが、敵対的入力を防ぎません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クラッシュリスクを制限するためにモデルの応答の複雑さを下げる。</div><p class='explanation-text'>不正解：応答の複雑さの削減は入力ベースの脆弱性に対処しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 敵対的入力を処理するように設計されたデータセットでモデルをトレーニングする。</div><p class='explanation-text'>不正解：トレーニングだけではすべての形式の悪意ある入力攻撃を防ぐことはできません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>入力バリデーションルールにより、アプリケーションが敵対的入力を安全に処理でき、システムの安定性が保護されます。</p></div>",
    "tags": "ガバナンス",
    "summary": "敵対的ユーザー入力によるシステムクラッシュを防ぐには、不正パターン・フォーマットを検出する入力バリデーションルールの実装が最良の防御策。"
  },
  {
    "id": 33,
    "question": "Generative AIエンジニアが、科学的ドキュメントを使用するRAGアプリケーションのretrieval パフォーマンスを評価しています。この評価に最も適したメトリクスはどれですか？",
    "choices": [
      {
        "text": "計算コストを評価するためのトークン使用量。",
        "is_correct": false
      },
      {
        "text": "取得結果の関連性とカバレッジを測定するためのprecisionとrecall。",
        "is_correct": true
      },
      {
        "text": "テキスト類似性を測定するためのBLEU。",
        "is_correct": false
      },
      {
        "text": "retrievalの速度を測定するためのレイテンシ。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 取得結果の関連性とカバレッジを測定するためのprecisionとrecall。</div><p class='explanation-text'>正解：precisionは取得されたドキュメントが関連性を持つことを確認し、recallは関連するドキュメントがどれだけ取得されたかを測定します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 計算コストを評価するためのトークン使用量。</div><p class='explanation-text'>不正解：トークン使用量はretrieval品質とは無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ テキスト類似性を測定するためのBLEU。</div><p class='explanation-text'>不正解：BLEUは翻訳などのタスクのテキスト類似性を評価しますが、retrievalには適しません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ retrievalの速度を測定するためのレイテンシ。</div><p class='explanation-text'>不正解：レイテンシはパフォーマンスを測定しますが、関連性やカバレッジを測定しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>precisionとrecallはRAGアプリケーションにおけるretrieval パフォーマンスの関連性と完全性を評価するための重要なメトリクスです。</p></div>",
    "tags": "データ準備",
    "summary": "RAGアプリケーションのretrieval性能評価には、取得結果の関連性(precision)とカバレッジ(recall)を測定する2指標が最適。"
  },
  {
    "id": 34,
    "question": "Generative AIエンジニアが、製品カタログへのクエリを自動化するLangChainアプリケーションをコーディングする任務を担っています。システムは自然言語クエリに基づいて製品の詳細を取得する必要があります。chainに必要なコンポーネントはどれですか？（2つ選択）",
    "choices": [
      {
        "text": "LLM向けにユーザークエリを構造化するpromptテンプレート。",
        "is_correct": true
      },
      {
        "text": "事前トレーニング済みsentiment analysisモデル。",
        "is_correct": false
      },
      {
        "text": "カタログから製品の詳細を取得するretriever。",
        "is_correct": true
      },
      {
        "text": "結果を凝縮する要約モデル。",
        "is_correct": false
      },
      {
        "text": "クエリを分類するルールベースの分類器。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ LLM向けにユーザークエリを構造化するpromptテンプレート。</div><p class='explanation-text'>正解：promptテンプレートはモデルとの一貫性のある整合的なインタラクションを確保します。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ カタログから製品の詳細を取得するretriever。</div><p class='explanation-text'>正解：retrieverはchainが自然言語クエリに対して関連データにアクセスできることを確保します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 事前トレーニング済みsentiment analysisモデル。</div><p class='explanation-text'>不正解：sentiment analysisは製品の詳細の取得とは無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 結果を凝縮する要約モデル。</div><p class='explanation-text'>不正解：要約は構造化された製品の詳細へのクエリには必要ありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリを分類するルールベースの分類器。</div><p class='explanation-text'>不正解：ルールベースの分類器は動的な製品カタログへのクエリには柔軟性が不足しています。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>retrieverとpromptテンプレートを組み合わせることで、自然言語クエリへの正確で効率的な応答が確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "製品カタログへの自然言語クエリを処理するLangChain chainには、promptテンプレートとretrieverの2コンポーネントが必須。"
  },
  {
    "id": 35,
    "question": "Generative AIエンジニアが、sentiment analysisの前処理と後処理を含むpyfuncモデルを設計しています。エンジニアはどのコンポーネントを含めるべきですか？",
    "choices": [
      {
        "text": "前処理なしで生のテキストをモデルに渡す。",
        "is_correct": false
      },
      {
        "text": "モデルのステップをスキップして前処理のみに頼る。",
        "is_correct": false
      },
      {
        "text": "入力テキストを前処理し（例：テキストのクリーニング、トークン化）、感情予測のためにモデルを呼び出し、出力をユーザーフレンドリーなラベルに後処理する。",
        "is_correct": true
      },
      {
        "text": "後処理なしでモデルの出力をそのまま使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 入力テキストを前処理し（例：テキストのクリーニング、トークン化）、感情予測のためにモデルを呼び出し、出力をユーザーフレンドリーなラベルに後処理する。</div><p class='explanation-text'>正解：前処理と後処理ステップにより、入力テキストがクリーンで出力予測がユーザーが理解できる形式にフォーマットされることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 前処理なしで生のテキストをモデルに渡す。</div><p class='explanation-text'>不正解：生のテキストにはノイズが含まれる可能性があり、予測精度が低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルのステップをスキップして前処理のみに頼る。</div><p class='explanation-text'>不正解：前処理だけではsentiment analysisを実行できません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 後処理なしでモデルの出力をそのまま使用する。</div><p class='explanation-text'>不正解：後処理は生の予測を解釈可能な結果に変換します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>前処理、モデル推論、後処理を組み合わせることで、解釈可能な出力を持つ高品質なsentiment analysisが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "sentiment analysis用pyfuncモデルは、テキスト前処理→感情予測→ユーザーフレンドリーラベルへの後処理の3ステップが必要。"
  },
  {
    "id": 36,
    "question": "Generative AIエンジニアが、医療ガイドラインに関する質問応答システム用のLLMを選択する必要があります。システムは高い精度と説明可能な出力が必要です。どのLLM属性を優先すべきですか？",
    "choices": [
      {
        "text": "モデルサイズとドメイン固有のファインチューニング。",
        "is_correct": true
      },
      {
        "text": "汎用テキストで事前トレーニングされたembedding。",
        "is_correct": false
      },
      {
        "text": "多様な応答を確保するための高いperplexity。",
        "is_correct": false
      },
      {
        "text": "応答速度と低レイテンシ。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ モデルサイズとドメイン固有のファインチューニング。</div><p class='explanation-text'>正解：ドメイン固有のファインチューニングは医療ガイドラインに対する高い精度を確保し、説明可能な出力には集中したモデルが必要です。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 汎用テキストで事前トレーニングされたembedding。</div><p class='explanation-text'>不正解：汎用embeddingは医療の精度に必要なドメイン固有の焦点が欠けています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 多様な応答を確保するための高いperplexity。</div><p class='explanation-text'>不正解：高いperplexityはランダム性をもたらし、医療コンテキストでの信頼性を低下させます。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 応答速度と低レイテンシ。</div><p class='explanation-text'>不正解：医療アプリケーションでは速度よりも精度と説明可能性が優先されます。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ドメイン固有のファインチューニングを優先することで、LLMが医療ガイドラインクエリに対して正確で説明可能な出力を提供することが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "医療ガイドラインQAシステムに高精度・説明可能な出力を求める場合、ドメイン固有のファインチューニングとモデルサイズを優先する。"
  },
  {
    "id": 37,
    "question": "RAGシステムがクエリ中に無関係な過去のデータを取得しています。エンジニアは取得ドキュメントの関連性をどのように改善すべきですか？",
    "choices": [
      {
        "text": "クエリのキーワードマッチに基づいてフィルタリングする。",
        "is_correct": false
      },
      {
        "text": "カバレッジを改善するためにドキュメントのチャンクサイズを増やす。",
        "is_correct": false
      },
      {
        "text": "年齢に関わらずすべてのドキュメントを保持する。",
        "is_correct": false
      },
      {
        "text": "タイムスタンプベースのフィルタリングを適用して古いドキュメントを除外する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ タイムスタンプベースのフィルタリングを適用して古いドキュメントを除外する。</div><p class='explanation-text'>正解：タイムスタンプフィルタリングにより、システムが最新かつコンテキスト的に関連性の高いコンテンツを優先し、精度が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリのキーワードマッチに基づいてフィルタリングする。</div><p class='explanation-text'>不正解：キーワードベースのフィルタリングは、同義語の使用や言い換えられたコンテンツにより、コンテキスト的に関連性の高いドキュメントを見逃す可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ カバレッジを改善するためにドキュメントのチャンクサイズを増やす。</div><p class='explanation-text'>不正解：大きなチャンクは無関係な情報を含む可能性があり、retrieval の関連性が低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 年齢に関わらずすべてのドキュメントを保持する。</div><p class='explanation-text'>不正解：古いドキュメントを含むすべてのドキュメントを保持すると、全体的な関連性と精度が低下します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>タイムスタンプベースのフィルタリングにより、取得されたコンテンツが最新で関連性が高く、古い情報の問題に対処します。</p></div>",
    "tags": "データ準備",
    "summary": "RAGシステムで古いデータが取得される問題には、タイムスタンプベースのフィルタリングで期限切れドキュメントを除外するのが最善策。"
  },
  {
    "id": 38,
    "question": "Generative AIエンジニアが、財務ドキュメント分析のためのLLMベースのRAGアプリケーションをデプロイしています。アプリケーションは長いドキュメントを処理しながらコストを最小化する必要があります。最も効果的な戦略はどれですか？（3つ選択）",
    "choices": [
      {
        "text": "クエリコストを監視するために推論ロギングを有効にする。",
        "is_correct": true
      },
      {
        "text": "長い入力を効率的に処理するために高いcontext length対応の小型LLMを使用する。",
        "is_correct": true
      },
      {
        "text": "処理オーバーヘッドを最小化するためにretrieval セットサイズを削減する。",
        "is_correct": false
      },
      {
        "text": "複数のクエリを1つのリクエストにまとめることでトークン使用量を最適化する。",
        "is_correct": true
      },
      {
        "text": "各クエリのトークン使用量を最大化するためにcontext lengthを増やす。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ クエリコストを監視するために推論ロギングを有効にする。</div><p class='explanation-text'>正解：推論ロギングはコストの要因に関するインサイトを提供し、最適化戦略を可能にします。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 長い入力を効率的に処理するために高いcontext length対応の小型LLMを使用する。</div><p class='explanation-text'>正解：十分なcontext lengthを持つ小型LLMは計算需要を削減し、パフォーマンスを維持しながらコストを下げます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 複数のクエリを1つのリクエストにまとめることでトークン使用量を最適化する。</div><p class='explanation-text'>正解：バッチ処理はAPIコールや推論実行の回数を削減し、コスト効率を向上させます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 処理オーバーヘッドを最小化するためにretrieval セットサイズを削減する。</div><p class='explanation-text'>不正解：retrieval サイズを削減すると取得結果の品質が損なわれる可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 各クエリのトークン使用量を最大化するためにcontext lengthを増やす。</div><p class='explanation-text'>不正解：context lengthを増やすと、トークン使用量の増加とコストの上昇につながります。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>小型モデル、バッチ処理、推論ロギングを組み合わせることで、長い財務ドキュメントを処理するためのコスト効率の高いパフォーマンスが確保されます。</p></div>",
    "tags": "評価とモニタリング",
    "summary": "財務ドキュメント処理RAGのコスト最小化には、小型LLM使用・クエリバッチ処理・推論ロギングの3戦略の組み合わせが最効果的。"
  },
  {
    "id": 39,
    "question": "Generative AIエンジニアが、従業員の離職率を予測するpyfuncモデルをUnity Catalogに登録する必要があります。モデルにはデータ正規化のための前処理と解釈可能な出力のための後処理が含まれています。エンジニアはどのようなステップを取るべきですか？",
    "choices": [
      {
        "text": "MLflowへのロギングをスキップして、モデルをUnity Catalogに直接登録する。",
        "is_correct": false
      },
      {
        "text": "メタデータの設定をスキップして、登録にデフォルト設定を使用する。",
        "is_correct": false
      },
      {
        "text": "モデルをMLflowにログし、メタデータ（例：スキーマ、バージョン、タグ）を設定し、Unity Catalogに登録する。",
        "is_correct": true
      },
      {
        "text": "ロギングにMLflowを使用するが、モデルをUnity Catalogに登録しない。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ モデルをMLflowにログし、メタデータ（例：スキーマ、バージョン、タグ）を設定し、Unity Catalogに登録する。</div><p class='explanation-text'>正解：ロギングとメタデータの設定により、モデルがUnity Catalog内で適切に追跡・ガバナンスされることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ MLflowへのロギングをスキップして、モデルをUnity Catalogに直接登録する。</div><p class='explanation-text'>不正解：MLflowロギングは登録前にモデルの詳細を追跡するために不可欠です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ メタデータの設定をスキップして、登録にデフォルト設定を使用する。</div><p class='explanation-text'>不正解：メタデータは効果的なガバナンスと発見可能性のための重要なコンテキストを提供します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ ロギングにMLflowを使用するが、モデルをUnity Catalogに登録しない。</div><p class='explanation-text'>不正解：Unity Catalogは集中管理されたガバナンスとコンプライアンス追跡を可能にします。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>MLflowへのロギングとUnity Catalogへの登録により、モデルが適切に管理、追跡、ガバナンスされることが確保されます。</p></div>",
    "tags": "アプリケーションの構築とデプロイ",
    "summary": "pyfuncモデルをUnity Catalogに登録する正しい手順は、MLflowへのログ→スキーマ・バージョン・タグ等のメタデータ設定→Unity Catalog登録の順。"
  },
  {
    "id": 40,
    "question": "Generative AIエンジニアが、技術ドキュメントの主要トピックを識別するためのモデルをファインチューニングする任務を担っています。データセットにはタイムスタンプや著者名などの不要なメタデータが含まれています。エンジニアは前処理をどのように処理すべきですか？",
    "choices": [
      {
        "text": "タイムスタンプを含むすべての数値データを除外する。",
        "is_correct": false
      },
      {
        "text": "フィルタリングなしでデータセットを処理する。",
        "is_correct": false
      },
      {
        "text": "コンテキストを提供するためにメタデータを保持する。",
        "is_correct": false
      },
      {
        "text": "前処理中にすべての無関係なメタデータを削除する。",
        "is_correct": true
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 前処理中にすべての無関係なメタデータを削除する。</div><p class='explanation-text'>正解：不必要なメタデータを削除することでノイズが削減され、モデルが実際のドキュメントコンテンツに集中できます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ タイムスタンプを含むすべての数値データを除外する。</div><p class='explanation-text'>不正解：日付などの一部の数値データは関連性がある可能性があり、考慮なしに除外すべきではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ フィルタリングなしでデータセットを処理する。</div><p class='explanation-text'>不正解：無関係なメタデータを無視するとシステム全体のパフォーマンスが低下するリスクがあります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンテキストを提供するためにメタデータを保持する。</div><p class='explanation-text'>不正解：メタデータを保持するとモデルが混乱し、トピック識別のパフォーマンスが低下します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>メタデータを削除することで、関連するドキュメントコンテンツへの集中が維持され、トピック識別の精度が向上します。</p></div>",
    "tags": "データ準備",
    "summary": "技術ドキュメントのトピック識別モデルのファインチューニングでは、タイムスタンプ・著者名等の無関係なメタデータを前処理で削除する。"
  },
  {
    "id": 41,
    "question": "LangChainはLLMとretrievalシステムを統合するために一般的に使用されます。LangChainをこのタスクに理想的にする主な機能はどれですか？",
    "choices": [
      {
        "text": "モデルのファインチューニングへの主要な焦点。",
        "is_correct": false
      },
      {
        "text": "出力比較のための組み込み可視化ツール。",
        "is_correct": false
      },
      {
        "text": "ドキュメントretrievalと生成機能を組み合わせた構造化ワークフローを作成する能力。",
        "is_correct": true
      },
      {
        "text": "オープンソースの事前トレーニング済みembeddingの使用。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ ドキュメントretrievalと生成機能を組み合わせた構造化ワークフローを作成する能力。</div><p class='explanation-text'>正解：LangChainはretrievalベースの入力と生成タスクの組み合わせを簡素化し、アプリケーション設計を改善します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ モデルのファインチューニングへの主要な焦点。</div><p class='explanation-text'>不正解：LangChainはファインチューニングを処理しません。オーケストレーションに焦点を当てています。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 出力比較のための組み込み可視化ツール。</div><p class='explanation-text'>不正解：LangChainは可視化ツールではなく、この機能はretrieval統合とは無関係です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ オープンソースの事前トレーニング済みembeddingの使用。</div><p class='explanation-text'>不正解：LangChainはembeddingを活用できますが、これはその定義的な機能ではありません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>LangChainのretrievalと生成タスク間のワークフローをオーケストレーションする能力は、Generative AIアプリケーションにとって優れた選択肢となります。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "LangChainがLLMとretrievalシステムの統合に最適な理由は、ドキュメントretrievalと生成機能を組み合わせた構造化ワークフローを作成できるため。"
  },
  {
    "id": 42,
    "question": "Generative AIエンジニアが、マーケティングコンテンツを生成するAIツールを開発する任務を担っています。ツールはeコマースプラットフォーム向けに最適化された製品説明を作成する必要があります。プロンプトには何を含めるべきですか？（2つ選択）",
    "choices": [
      {
        "text": "成功した説明のfew-shotサンプルを提供する。",
        "is_correct": true
      },
      {
        "text": "製品の詳細、トーン、長さを指定する。例：「スマートウォッチの説明を作成してください。トーン：プロフェッショナル。長さ：100語。」",
        "is_correct": true
      },
      {
        "text": "「製品説明を書いてください」のような一般的なプロンプトを使用する。",
        "is_correct": false
      },
      {
        "text": "創造性を促すためにトーンの指定を避ける。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ 成功した説明のfew-shotサンプルを提供する。</div><p class='explanation-text'>正解：サンプルはモデルが実績のあるeコマース戦略に沿った説明を生成するのに役立ちます。</p></div><div class='explanation-item'><div class='explanation-badge correct'>✓ 製品の詳細、トーン、長さを指定する。例：「スマートウォッチの説明を作成してください。トーン：プロフェッショナル。長さ：100語。」</div><p class='explanation-text'>正解：製品の詳細、トーン、長さを含めることで、出力がプラットフォームのニーズに最適化されることが確保されます。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 「製品説明を書いてください」のような一般的なプロンプトを使用する。</div><p class='explanation-text'>不正解：一般的なプロンプトはeコマース要件に沿わない一貫性のない結果を生成する可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 創造性を促すためにトーンの指定を避ける。</div><p class='explanation-text'>不正解：トーンの指示はプラットフォームのブランディングとの一貫性とアライメントを確保します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>明確な指示（トーン、長さ、詳細）とサンプルを組み合わせることで、製品説明がプラットフォームに合わせてターゲットオーディエンスに響くことが確保されます。</p></div>",
    "tags": "アプリケーション設計",
    "summary": "eコマース向け製品説明生成には、few-shotサンプルの提供と製品詳細・トーン・長さを明示した指示の組み合わせが最良。"
  },
  {
    "id": 43,
    "question": "Generative AIエンジニアが、RAGアプリケーション用に長い小説をチャンク化する任務を担っています。小説にはチャプター、対話、描写的な場面が含まれています。retrieval品質を最適化するチャンキング戦略はどれですか？",
    "choices": [
      {
        "text": "固定トークンサイズ（例：500トークン）のチャンクにテキストを分割する。",
        "is_correct": false
      },
      {
        "text": "コンテキストを保持するために小説全体を1つのチャンクとして含める。",
        "is_correct": false
      },
      {
        "text": "チャプターでテキストを分割し、各チャプターをさらに段落に基づいてセクションに分割する。",
        "is_correct": true
      },
      {
        "text": "コンテンツの冗長性を確保するために50%のオーバーラップでチャンクを重複させる。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ チャプターでテキストを分割し、各チャプターをさらに段落に基づいてセクションに分割する。</div><p class='explanation-text'>正解：チャプターと段落で分割することで、論理的な構造が維持され、トークン制限に準拠します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 固定トークンサイズ（例：500トークン）のチャンクにテキストを分割する。</div><p class='explanation-text'>不正解：固定サイズのチャンクはコンテキストを途中で切断するリスクがあり、一貫性が低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンテキストを保持するために小説全体を1つのチャンクとして含める。</div><p class='explanation-text'>不正解：小説全体のチャンクはトークン制限を超え、処理の実現可能性が低下します。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ コンテンツの冗長性を確保するために50%のオーバーラップでチャンクを重複させる。</div><p class='explanation-text'>不正解：過度なオーバーラップはretrieval品質を改善せずに冗長なデータを作成します。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>チャプターと段落による論理的なチャンキングにより、retrieval に意味のあるコンテンツとモデル制約とのアライメントが確保されます。</p></div>",
    "tags": "データ準備",
    "summary": "小説のRAG用チャンキングは、固定トークンサイズや全体チャンクではなく、チャプター→段落の論理的な階層構造で分割するのが最適。"
  },
  {
    "id": 44,
    "question": "Generative AIエンジニアが、質問応答retrievalシステム用のembeddingを生成する必要があります。ユーザークエリは短く、ドキュメントは長いです。最も効果的なembeddingモデル戦略はどれですか？",
    "choices": [
      {
        "text": "クエリとドキュメントに別々のembeddingを持つデュアルエンコーダーを使用する。",
        "is_correct": true
      },
      {
        "text": "カスタマイズなしに事前トレーニング済みembeddingに頼る。",
        "is_correct": false
      },
      {
        "text": "クエリとドキュメントの両方に単一エンコーダーを使用する。",
        "is_correct": false
      },
      {
        "text": "embeddingモデルの代わりに分類モデルを使用する。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ クエリとドキュメントに別々のembeddingを持つデュアルエンコーダーを使用する。</div><p class='explanation-text'>正解：デュアルエンコーダーは短いクエリと長いドキュメント表現をアライメントすることでretrievalを最適化します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ カスタマイズなしに事前トレーニング済みembeddingに頼る。</div><p class='explanation-text'>不正解：事前トレーニング済みembeddingは特定のドメインやタスク要件とアライメントしていない可能性があります。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ クエリとドキュメントの両方に単一エンコーダーを使用する。</div><p class='explanation-text'>不正解：単一エンコーダーは入力の長さの大きな違いを処理するのに効果的ではありません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ embeddingモデルの代わりに分類モデルを使用する。</div><p class='explanation-text'>不正解：分類モデルはretrievalタスク向けに設計されていません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>デュアルエンコーダーにより、短いクエリと長いドキュメントの両方が効果的に表現され、retrieval パフォーマンスが向上します。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "短いクエリと長いドキュメントが混在するQA retrievalには、クエリ・ドキュメントそれぞれに最適化されたembeddingを持つデュアルエンコーダーが最適。"
  },
  {
    "id": 45,
    "question": "Generative AIエンジニアが、LLMを販売分析プラットフォームに統合しています。LLMは顧客の購買パターンに基づいてアクションを提案する必要があります。成功のために重要な機能はどれですか？",
    "choices": [
      {
        "text": "より広い機能のために最大の利用可能なLLMを選択する。",
        "is_correct": false
      },
      {
        "text": "修正なしにデフォルトの事前トレーニング済みLLMを使用する。",
        "is_correct": false
      },
      {
        "text": "より良い予測のために購買履歴データでファインチューニングする。",
        "is_correct": true
      },
      {
        "text": "推論機能なしにembeddingのみに頼る。",
        "is_correct": false
      }
    ],
    "explanation": "<div class='explanation-container'><h4 class='explanation-section-header solution'>✅ 正解の選択肢</h4><div class='explanation-box solution'><div class='explanation-item'><div class='explanation-badge correct'>✓ より良い予測のために購買履歴データでファインチューニングする。</div><p class='explanation-text'>正解：ファインチューニングによりLLMがドメイン固有のデータとアライメントし、推薦精度が向上します。</p></div></div><h4 class='explanation-section-header incorrect'>❌ 不正解の選択肢</h4><div class='explanation-box incorrect'><div class='explanation-item'><div class='explanation-badge incorrect'>✗ より広い機能のために最大の利用可能なLLMを選択する。</div><p class='explanation-text'>不正解：大型モデルはドメイン固有でない場合は不要です。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 修正なしにデフォルトの事前トレーニング済みLLMを使用する。</div><p class='explanation-text'>不正解：デフォルトモデルは購買パターン分析に特化していません。</p></div><div class='explanation-item'><div class='explanation-badge incorrect'>✗ 推論機能なしにembeddingのみに頼る。</div><p class='explanation-text'>不正解：embedding単体ではアクション可能な推薦を提供しません。</p></div></div><h4 class='explanation-section-header problem'>📌 全体的な解説</h4><p class='explanation-box problem'>ドメイン固有のデータでのファインチューニングにより、LLMが顧客の購買パターンに沿ったアクション可能なインサイトを生成することが確保されます。</p></div>",
    "tags": "アプリケーション開発",
    "summary": "販売分析プラットフォームで購買パターンに基づくアクション提案をするLLMには、購買履歴データでのファインチューニングが成功の鍵。"
  }
];
