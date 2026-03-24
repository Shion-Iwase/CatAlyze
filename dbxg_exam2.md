問題1
未回答
A Generative AI Engineer is developing a chatbot designed to assist users with insurance-related queries. To comply with company policy, the chatbot must avoid responding to political inquiries and instead provide a standard message: “Sorry, I cannot answer that. I am a chatbot that can only answer questions around insurance.” Which framework type should be implemented to solve this?
Compliance Guardrail
説明
Incorrect: Compliance guardrails enforce adherence to legal and regulatory standards but are not specific to restricting political responses.
正解
Safety Guardrail
説明
Correct: A safety guardrail ensures that inappropriate or undesired outputs, such as political responses, are filtered or replaced with a predefined message.
Security Guardrail
説明
Incorrect: Security guardrails focus on protecting sensitive data and infrastructure, not output filtering.
Contextual Guardrail
説明
Incorrect: Contextual guardrails adjust model outputs based on user context but do not filter specific types of questions.
全体的な説明
Safety guardrails are specifically designed to block or modify inappropriate outputs, ensuring the chatbot aligns with company policy by restricting responses to political inquiries.
ドメイン
Governance
問題2
未回答
A Generative AI Engineer must register an LLM in Unity Catalog using MLflow for better governance and reproducibility. What steps should they follow to register the model?
Define the input-output formats in Unity Catalog first, then register the model in MLflow.
説明
Incorrect: Model registration flows from MLflow to Unity Catalog, not the reverse.
Fine-tune the model in Unity Catalog before deployment.
説明
Incorrect: Unity Catalog does not support model training or fine-tuning.
正解
Log the trained model to MLflow, add the model signature, and register it in Unity Catalog for centralized management.
説明
Correct: Logging the model in MLflow, defining its signature, and registering it in Unity Catalog ensures governance, tracking, and reproducibility.
Train the model and directly upload it to Unity Catalog.
説明
Incorrect: Unity Catalog requires MLflow integration to manage metadata, versioning, and lineage effectively.
全体的な説明
Registering an LLM in Unity Catalog involves logging the model in MLflow, defining its input-output signature, and integrating it for governance and management.
ドメイン
Assembling and Deploying Applications
問題3
未回答
A Generative AI Engineer is tasked with designing an assistant for a financial services company. The assistant must recommend personalized savings plans based on user income, expenses, and goals. What should the prompt include? (Choose two)
正しい選択
Specify input details like income, expenses, and goals, and request an actionable recommendation. Example: "Income: $5000, Expenses: $3000. Goal: Save for a vacation. Provide a savings recommendation."
説明
Correct: Providing specific inputs and clear output expectations ensures the model generates actionable and relevant savings plans.
Avoid specifying goals to encourage flexibility.
説明
Incorrect: Goals are essential for generating personalized recommendations.
正しい選択
Provide an example of a successful savings plan.
説明
Correct: Examples help guide the model to align its output with practical financial strategies.
Use a generic prompt like "Generate a savings plan."
説明
Incorrect: Generic prompts may lack sufficient detail, leading to vague or irrelevant responses.
全体的な説明
Specifying inputs (income, expenses, goals) and including examples ensures the model generates personalized, actionable savings recommendations aligned with user needs.
ドメイン
Design Applications
問題4
未回答
A Generative AI Engineer is building a system for summarizing research papers. The papers often contain complex diagrams and tables. What should they prioritize when designing prompts?
正解
Emphasize summarizing text content only while ignoring diagrams and tables.
説明
Correct: Research papers contain structured text that is more suitable for LLM processing than visual content.
Prioritize summarizing only abstract sections.
説明
Incorrect: Summarizing only abstracts reduces the depth and completeness of the output.
Convert diagrams to text descriptions for summarization.
説明
Incorrect: Converting diagrams introduces noise and may distort the information.
Include diagrams and tables directly in the prompt.
説明
Incorrect: LLMs do not process visual information, and including diagrams will not improve results.
全体的な説明
Prompting the LLM to focus on text ensures high-quality summaries without introducing noise from unsupported content like diagrams.
ドメイン
Application Development
問題5
未回答
A Generative AI Engineer is designing a prompt for generating JSON-based responses from user queries about inventory details. Each response should include fields for item name, stock level, and location. Which prompt will achieve this?
Provide information about the inventory.
説明
This choice does not specify the inclusion of item name, stock level, and location fields in the response. It is too general and does not meet the specific requirements outlined in the prompt for generating JSON-based responses with specific fields.
正解
Generate a JSON response including item_name, stock_level, and location based on the query.
説明
This choice directly addresses the requirement of generating JSON-based responses with specific fields such as item name, stock level, and location. It ensures that the response format is consistent and includes all the necessary information as requested in the prompt.
Summarize the inventory details based on the query.
説明
This choice mentions summarizing inventory details based on the query, but it does not specify the inclusion of item name, stock level, and location fields in the response. It lacks the specificity required to meet the prompt's requirements for generating JSON-based responses with specific fields.
Include details about the stock, but do not enforce a format.
説明
This choice suggests including details about the stock but does not enforce a specific format or mention the inclusion of item name, stock level, and location fields. It does not align with the prompt's requirement for generating JSON-based responses with specific fields.
全体的な説明
A well-structured prompt ensures responses are formatted consistently in JSON and include all required fields.
ドメイン
Design Applications
問題6
未回答
A Generative AI Engineer is developing a RAG application to answer questions about financial regulations. The retrieved content often contains irrelevant sections. What approach can improve the retrieval process?
Increase the retrieval batch size to include more documents.
説明
Incorrect: Larger batch sizes may increase noise without improving relevance.
Use a summarization model to reduce irrelevant content.
説明
Incorrect: Summarization does not address the retrieval process directly.
Rely on a rule-based filtering system.
説明
Incorrect: Rule-based systems lack flexibility and adaptability for diverse queries.
正解
Implement an embedding model fine-tuned on financial text to improve semantic relevance.
説明
Correct: Fine-tuning embeddings ensures better alignment with financial regulation queries.
全体的な説明
Fine-tuning an embedding model on domain-specific text improves retrieval relevance by aligning with the context of financial regulations.
ドメイン
Application Development
問題7
未回答
A Generative AI Engineer is monitoring a deployed RAG system that shows a decline in user satisfaction due to irrelevant outputs. The retrieval system has high latency. What metrics should the engineer focus on to diagnose and resolve the issue?
Token usage and response length to optimize costs.
説明
Incorrect: These metrics do not address relevance or latency issues in retrieval.
User query frequency to identify demand patterns.
説明
Incorrect: Query frequency insights do not directly address relevance or performance issues.
正解
Precision, recall, and retrieval latency to measure relevance and identify bottlenecks.
説明
Correct: Precision and recall assess relevance, while retrieval latency highlights performance bottlenecks in the retrieval step.
Perplexity and BLEU to evaluate output fluency and accuracy.
説明
Incorrect: These metrics focus on language generation, not retrieval performance.
全体的な説明
Precision, recall, and latency provide critical insights into relevance and retrieval efficiency, helping resolve issues with irrelevant outputs.
ドメイン
Evaluation and Monitoring
問題8
未回答
A team is building a RAG system for answering technical queries. Despite having a robust retriever, the system’s responses lack specificity. How can they improve the quality of answers?
Fine-tune the retriever for classification tasks.
説明
Incorrect: Classification tasks do not directly enhance answer specificity.
Use a smaller LLM to focus on brevity.
説明
Incorrect: Smaller models may compromise response quality rather than improve specificity.
正解
Augment the retriever with a context-aware summarizer to provide more precise and relevant answers.
説明
Correct: Summarization models refine retrieved content, ensuring specific and targeted answers to technical queries.
Increase the size of the retriever index.
説明
Incorrect: A larger index increases retrieval options but does not guarantee answer quality.
全体的な説明
Combining retrieval with context-aware summarization ensures that responses are specific and relevant, improving the overall quality of answers.
ドメイン
Assembling and Deploying Applications
問題9
未回答
A large e-commerce platform needs a product recommendation engine that generates personalized suggestions using user purchase histories. Which pipeline design best fits this use case?
Use rule-based filters for predefined product categories.
説明
Incorrect: Rule-based filters lack the flexibility for personalized recommendations.
Implement a purely generative approach without historical data.
説明
Incorrect: Generative models alone cannot provide personalized recommendations without context.
Generate recommendations based on randomly sampled products.
説明
Incorrect: Random sampling does not align with user preferences or needs.
正解
Use embeddings for purchase history and generate recommendations based on similarity scores.
説明
Correct: Embedding-based similarity ensures personalized and contextually relevant recommendations.
全体的な説明
Embedding-based pipelines are ideal for personalized recommendations as they account for user preferences and purchase histories.
ドメイン
Application Development
問題10
未回答
A Generative AI Engineer must implement guardrails to prevent a generative model from leaking sensitive data in its responses. What is the most effective strategy?
正解
Use metaprompts to explicitly instruct the model not to include sensitive data.
説明
Correct: Metaprompts are effective in guiding model behavior and preventing data leakage.
Use post-processing filters to remove sensitive information.
説明
Incorrect: Post-processing may catch some issues but is less proactive than metaprompts.
Apply a summarization model to shorten responses.
説明
Incorrect: Summarization does not directly prevent sensitive data leakage.
Lower the model temperature to reduce randomness.
説明
Incorrect: Lower temperature reduces variability but does not prevent data leakage.
全体的な説明
Metaprompts ensure proactive control over the model’s output, preventing sensitive data leakage effectively.
ドメイン
Application Development
問題11
未回答
A Generative AI Engineer must prioritize high-quality source documents for training a financial RAG system. Which sources should they focus on?
正解
Regulatory filings and official financial reports.
説明
Correct: These sources are authoritative and ensure accurate and reliable training data.
News articles summarizing financial events.
説明
Incorrect: News articles are secondary sources and may lack detail.
User-written financial blogs.
説明
Incorrect: Blogs may contain inaccuracies and personal opinions, making them unreliable for training.
User-submitted financial forum posts.
説明
Incorrect: Forums often contain unverified or biased content unsuitable for training.
全体的な説明
Using authoritative sources like regulatory filings ensures accurate, trustworthy data for financial RAG applications.
ドメイン
Data Preparation
問題12
未回答
A Generative AI Engineer just deployed an LLM application at a digital marketing company that assists with answering customer service inquiries. Which metric should they monitor to evaluate the application’s production performance?
正解
Number of customer inquiries processed per unit of time.
説明
Correct: Monitoring throughput helps ensure the application can handle the expected volume of customer queries efficiently.
Energy usage per query.
説明
Incorrect: While useful for cost optimization, this metric does not assess application performance.
HuggingFace Leaderboard values for the base LLM.
説明
Incorrect: These values assess general model benchmarks but do not indicate the deployed application’s performance.
Final perplexity scores for the training of the model.
説明
Incorrect: Perplexity is relevant for evaluating training, not production performance.
全体的な説明
Throughput monitoring is critical in production environments to measure how effectively the application handles customer inquiries.
ドメイン
Evaluation and Monitoring
問題13
未回答
Why is it essential to evaluate an LLM's context length when integrating it into a document summarization pipeline?
To ensure shorter summaries.
説明
Incorrect: Context length does not directly control summary length.
To improve model training efficiency.
説明
Incorrect: Context length is unrelated to training efficiency; it impacts input handling during inference.
To reduce token usage and inference cost.
説明
Incorrect: While context length affects cost, its primary role is handling input effectively.
正解
To ensure the model can process input documents without truncation, preserving key information.
説明
Correct: Adequate context length ensures the entire document is processed, avoiding loss of critical details.
全体的な説明
Evaluating context length ensures the model can process the full document without losing critical details due to truncation.
ドメイン
Application Development
問題14
未回答
A Generative AI Engineer is tasked with filtering irrelevant sections from product manuals used in a RAG system. The manuals include marketing descriptions, disclaimers, and technical specifications. Which sections should be retained?
正解
Retain only the technical specifications relevant to user queries.
説明
Correct: Focusing on technical sections aligns with user needs and improves retrieval relevance.
Remove all sections and rely solely on pre-trained model knowledge.
説明
Incorrect: Removing all sections eliminates critical document context for retrieval.
Retain all sections for completeness.
説明
Incorrect: Irrelevant sections like marketing descriptions add noise and degrade system performance.
Include disclaimers and technical specifications.
説明
Incorrect: Disclaimers are rarely relevant for query resolution.
全体的な説明
Filtering irrelevant sections like marketing descriptions ensures the RAG system retrieves precise, contextually relevant information.
ドメイン
Data Preparation
問題15
未回答
A Generative AI Engineer needs to serve a Retrieval-Augmented Generation (RAG) application that uses a foundation model API. What is the key consideration for cost optimization?
Use a larger model to improve accuracy.
説明
Incorrect: Larger models may improve performance but increase costs significantly.
Remove retrievers to simplify the pipeline.
説明
Incorrect: Retrievers are essential for RAG workflows and cannot be excluded.
正解
Batch multiple user queries during inference to reduce API calls.
説明
Correct: Batching queries reduces the number of API calls, lowering costs without compromising performance.
Enable real-time query logging for monitoring.
説明
Incorrect: Logging helps with debugging but does not reduce costs.
全体的な説明
Batching queries reduces API call frequency, which helps optimize costs while maintaining system performance.
ドメイン
Assembling and Deploying Applications
問題16
未回答
A Generative AI Engineer must clean a dataset of news articles for a RAG system. The articles include unrelated advertisements and redundant metadata. What preprocessing step is necessary?
Merge all articles into a single file for consistency.
説明
Incorrect: Merging does not resolve the issue of extraneous content.
Summarize each article into a shorter format.
説明
Incorrect: Summarization does not address the issue of irrelevant metadata or advertisements.
正解
Remove advertisements and metadata to retain only the main article content.
説明
Correct: Cleaning irrelevant content ensures the RAG system retrieves meaningful information efficiently.
Retain all parts of the dataset to preserve the original structure.
説明
Incorrect: Retaining extraneous content reduces retrieval relevance and increases noise.
全体的な説明
Removing irrelevant content like advertisements and metadata ensures the dataset is clean, improving retrieval and query accuracy.
ドメイン
Data Preparation
問題17
未回答
A Generative AI Engineer is integrating a third-party dataset into a RAG application. Some documents in the dataset are flagged for containing harmful misinformation. What mitigation strategy should they use?
Use the flagged documents but add disclaimers to outputs.
説明
Incorrect: Disclaimers do not mitigate the risk of misinformation affecting the system.
Allow flagged documents but train the model to ignore them.
説明
Incorrect: Models cannot reliably exclude flagged content without preprocessing.
Retain flagged documents but monitor their impact during inference.
説明
Incorrect: Monitoring does not prevent misinformation from affecting application outputs.
正解
Exclude flagged documents during preprocessing to prevent misinformation from entering the application.
説明
Correct: Excluding flagged documents ensures the dataset remains reliable and free from harmful misinformation.
全体的な説明
Excluding flagged documents ensures the application avoids misinformation, maintaining reliability and ethical standards.
ドメイン
Governance
問題18
未回答
A Generative AI Engineer needs to extract text from scanned invoices in JPG format for a financial application. Which Python package is best suited for this task?
pdfplumber to parse the images.
説明
Incorrect: pdfplumber is designed for extracting text from PDF documents, not images.
正解
Tesseract OCR via the pytesseract package.
説明
Correct: pytesseract is widely used for text extraction from scanned images, including JPG formats.
PyPDF2 for extracting text from images.
説明
Incorrect: PyPDF2 is designed for PDFs, not image files.
BeautifulSoup for parsing text.
説明
Incorrect: BeautifulSoup is used for HTML and XML parsing, not image-based OCR tasks.
全体的な説明
pytesseract enables robust OCR for extracting text from image files like JPGs, making it ideal for this task.
ドメイン
Data Preparation
問題19
未回答
A Generative AI Engineer is tasked with querying a large vector database for a knowledge management system. How should they optimize the query process for performance and accuracy?
正解
Use nearest-neighbor search algorithms with appropriate distance metrics for accurate retrieval.
説明
Correct: Nearest-neighbor search algorithms optimize performance and accuracy in vector database queries.
Skip embedding optimization and rely on raw text retrieval.
説明
Incorrect: Raw text retrieval does not leverage the power of vector search for semantic matching.
Perform brute-force search for maximum precision.
説明
Incorrect: Brute-force search is computationally expensive and impractical for large datasets.
Reduce query complexity by using smaller embedding models.
説明
Incorrect: Smaller embeddings may degrade semantic accuracy.
全体的な説明
Nearest-neighbor search with optimized distance metrics ensures high-performance, accurate vector database querying.
ドメイン
Assembling and Deploying Applications
問題20
未回答
A Generative AI Engineer needs to implement a safety guardrail for a chatbot that handles medical inquiries. The chatbot must avoid giving medical advice but still provide relevant information. What guardrail technique is most appropriate?
Apply a classifier to flag risky outputs post-generation.
説明
Incorrect: Post-generation classifiers are less efficient than proactive metaprompting.
Reduce the model temperature to limit randomness.
説明
Incorrect: Temperature adjustments reduce variability but do not address safety concerns.
Train the LLM on a dataset with neutral language.
説明
Incorrect: Training alone cannot ensure the avoidance of medical advice in responses.
正解
Use metaprompts instructing the chatbot to defer medical advice and only provide general information.
説明
Correct: Metaprompts guide the chatbot’s behavior, ensuring it avoids giving medical advice while providing relevant details.
全体的な説明
Metaprompts provide a proactive guardrail, ensuring the chatbot complies with safety and ethical guidelines.
ドメイン
Application Development
問題21
未回答
A Generative AI Engineer is selecting an LLM for a RAG application. The application retrieves long documents, and the model must summarize key sections accurately. What factors should guide the LLM choice?
Retrieval precision and recall.
説明
Incorrect: Retrieval metrics evaluate document retrieval quality, not LLM summarization performance.
正解
Context length, summarization quality, and inference speed.
説明
Correct: These factors ensure the LLM can process long documents, summarize effectively, and deliver timely responses.
Token limit and BLEU scores.
説明
Incorrect: BLEU scores assess text generation but do not address summarization quality or inference speed.
Model size and training dataset diversity.
説明
Incorrect: While important, these factors do not directly align with the specific application requirements.
全体的な説明
Context length, summarization quality, and inference speed ensure the LLM is suitable for long-document summarization in a RAG application.
ドメイン
Evaluation and Monitoring
問題22
未回答
Which temperature value setting encourages a large language model to generate creative and varied responses?
Set the temperature to exactly 0.5.
説明
Incorrect: A mid-range temperature balances randomness and determinism but does not maximize creativity.
Lower the temperature to a value close to 0.
説明
Incorrect: Lower temperatures reduce randomness, leading to more deterministic and less creative outputs.
Disable temperature controls for unconstrained outputs.
説明
Incorrect: Most models require a temperature setting to balance creativity and coherence.
正解
Increase the temperature to a higher value, like 1.0 or above.
説明
Correct: Higher temperatures introduce more randomness, enabling creative and diverse outputs suitable for open-ended tasks.
全体的な説明
Increasing the temperature encourages randomness, enabling the model to generate varied, creative responses ideal for brainstorming or storytelling tasks.
ドメイン
Design Applications
問題23
未回答
A Generative AI Engineer is building a multi-stage reasoning system to assist users in legal contract reviews. The system should identify potential issues, propose revisions, and highlight key clauses. What tools are essential? (Choose two)
正しい選択
An embedding model to semantically analyze contract clauses.
説明
An embedding model is essential for semantically analyzing contract clauses, allowing the system to understand the meaning and context of the text. This is crucial for identifying potential issues and proposing revisions in legal contract reviews.
A summarization model to condense contract text.
説明
A summarization model can help condense contract text, but it is not as crucial as the embedding model and retriever for the multi-stage reasoning system needed for legal contract reviews. While summarization can improve readability, it is not as vital for identifying potential issues and proposing revisions.
正しい選択
A retriever to fetch relevant legal references and precedents.
説明
A retriever is necessary to fetch relevant legal references and precedents that can be used to support the reasoning process in legal contract reviews. This tool helps the system provide accurate and well-informed suggestions to users.
A visualization tool to display highlighted clauses.
説明
A visualization tool for displaying highlighted clauses may enhance the user experience, but it is not as essential as the embedding model and retriever for the core functionality of the multi-stage reasoning system in legal contract reviews. This tool may improve the presentation of results but is not a fundamental requirement for the system's functionality.
A classification model to label clauses by type.
説明
While a classification model can be useful for labeling clauses by type, it is not as essential as the embedding model and retriever for the multi-stage reasoning system required for legal contract reviews. This tool may enhance the system's capabilities but is not a core requirement.
全体的な説明
Combining embeddings and retrievers ensures effective issue identification and revision proposals for legal contracts.
ドメイン
Design Applications
問題24
未回答
A Generative AI Engineer must deploy a secure endpoint for a RAG application. The endpoint handles sensitive legal documents and must be compliant with data privacy regulations. What measures are essential? (Choose two)
Skip authentication to allow unrestricted access.
説明
Incorrect: Authentication is critical for securing sensitive systems.
正しい選択
Encrypt data at rest and in transit to protect sensitive information.
説明
Correct: Encryption ensures data security and compliance with privacy regulations.
正しい選択
Implement API key-based authentication for endpoint access.
説明
Correct: API key authentication ensures only authorized users can access the endpoint.
Use public-facing endpoints without encryption to simplify access.
説明
Incorrect: Public endpoints without encryption expose sensitive data to security risks.
Rely on a shared access key for all users.
説明
Incorrect: Shared keys are insecure and lack user-specific controls.
全体的な説明
Encryption and API key authentication are critical measures for secure and compliant endpoint deployment.
ドメイン
Assembling and Deploying Applications
問題25
未回答
A Generative AI Engineer is tasked with designing an AI pipeline for translating unstructured user feedback into actionable tasks. The pipeline must highlight priorities and deadlines from the feedback. What is the best approach?
Use a summarization model to condense feedback.
説明
Incorrect: Summarization does not extract priorities or deadlines.
Use a classification model to categorize feedback.
説明
Incorrect: Categorization alone does not produce actionable tasks.
Use a rule-based system to extract keywords.
説明
Incorrect: Rule-based systems lack flexibility and adaptability for diverse feedback.
正解
Use an LLM to analyze user feedback and generate structured outputs with priorities and deadlines.
説明
Correct: LLMs process unstructured input and generate actionable, structured outputs effectively.
全体的な説明
LLMs dynamically translate unstructured feedback into structured, actionable outputs, meeting business requirements.
ドメイン
Design Applications
問題26
未回答
A Generative AI Engineer is tasked with building a pipeline for retrieving technical documents and answering user queries. Which strategy best ensures accurate responses?
Use only pre-trained embeddings for document matching.
説明
Incorrect: Embeddings are helpful but do not provide the required context for detailed responses.
Rely on generic prompts that do not include document-specific details.
説明
Incorrect: Generic prompts reduce accuracy by excluding critical context.
正解
Combine document retrieval with context-based prompt augmentation to include relevant details in user queries.
説明
Correct: Augmenting user prompts with retrieved context improves the LLM’s ability to generate accurate responses.
Focus on using the smallest LLM available.
説明
Incorrect: Smaller models may lack the capabilities to handle complex queries effectively.
全体的な説明
Combining document retrieval with context augmentation ensures accurate and context-aware responses tailored to user queries.
ドメイン
Application Development
問題27
未回答
A Generative AI Engineer must clean a dataset of scanned financial documents containing extraneous information like watermarks and logos. What preprocessing step is most effective?
正解
Use image preprocessing techniques to filter out watermarks and logos before text extraction.
説明
Correct: Preprocessing images removes visual noise, improving text extraction quality.
Remove sections with missing text.
説明
Incorrect: Removing incomplete sections does not target extraneous content.
Apply a summarization model to condense extracted content.
説明
Incorrect: Summarization condenses text but does not address cleaning.
Retain all data to preserve document authenticity.
説明
Incorrect: Extraneous elements degrade the quality of extracted text and downstream tasks.
全体的な説明
Image preprocessing ensures cleaner text extraction, improving the quality of downstream tasks.
ドメイン
Data Preparation
問題28
未回答
A Generative AI Engineer must create a LangChain chain for generating personalized responses to user queries. The chain must include context from a vector store and generate coherent answers. What components should the chain include? (Choose two)
A classification model to label user intents.
説明
Incorrect: While useful for intent detection, classification does not directly contribute to context retrieval or response generation.
A rule-based system to hardcode responses.
説明
Incorrect: Rule-based systems lack flexibility for dynamic queries.
A summarization model for condensing user inputs.
説明
Incorrect: Summarization is not necessary for generating coherent answers.
正しい選択
A prompt template to structure user queries for the LLM.
説明
Correct: Prompt templates guide the LLM in generating coherent and relevant responses.
正しい選択
A retriever for fetching relevant context from the vector store.
説明
Correct: Retrievers enable dynamic access to context, improving response quality.
全体的な説明
Combining retrievers and prompt templates ensures dynamic and contextually relevant response generation using LangChain.
ドメイン
Assembling and Deploying Applications
問題29
未回答
A Generative AI Engineer is selecting a model for generating summaries of financial reports. The reports often contain tables with numerical data. What should they prioritize?
正解
Choose a model optimized for numerical reasoning and summarization tasks.
説明
Correct: Models with strong numerical reasoning handle data-rich content more effectively.
Select the cheapest available model.
説明
Incorrect: Low-cost models may compromise on accuracy for specialized tasks.
Use a generative model trained on open-domain text.
説明
Incorrect: Open-domain training does not guarantee domain-specific performance.
Focus on the model with the largest context length.
説明
Incorrect: While context length is helpful, numerical reasoning is more critical for financial data.
全体的な説明
Models optimized for numerical reasoning ensure accurate and meaningful summaries of data-rich financial reports.
ドメイン
Application Development
問題30
未回答
A Generative AI Engineer must register a deployed model to Unity Catalog using MLflow. What is the correct workflow?
Skip configuring metadata during registration.
説明
Incorrect: Metadata provides critical information for model management and discoverability.
Log the model to MLflow but skip registering it to Unity Catalog.
説明
Incorrect: Unity Catalog registration ensures centralized governance and access control.
Deploy the model directly to Unity Catalog without logging it to MLflow.
説明
Incorrect: MLflow logging is essential for proper metadata and tracking before registration.
正解
Train the model, log it to MLflow, configure metadata, and register it to Unity Catalog.
説明
Correct: This workflow ensures that the model is logged, annotated, and properly integrated with Unity Catalog for discoverability.
全体的な説明
MLflow provides seamless logging and metadata configuration, while Unity Catalog ensures model discoverability and governance.
ドメイン
Assembling and Deploying Applications
問題31
未回答
A Generative AI Engineer must create a pipeline to retrieve and summarize customer reviews. Some reviews contain offensive language. How should they handle preprocessing?
正解
Implement filtering to detect and remove offensive language before summarization.
説明
Correct: Filtering offensive content ensures summaries remain safe and appropriate for end users.
Retain offensive language for context.
説明
Incorrect: Offensive content can harm the user experience and is unnecessary for summaries.
Exclude all reviews containing more than 10 words.
説明
Incorrect: Excluding reviews based on length removes relevant content.
Summarize without filtering.
説明
Incorrect: Summarization without filtering may include offensive language in the output.
全体的な説明
Filtering offensive language ensures that summaries remain appropriate and align with user expectations.
ドメイン
Application Development
問題32
未回答
A Generative AI Engineer must prevent hallucinations in an LLM's responses to medical queries. What is the most effective technique?
Use shorter prompts to limit response complexity.
説明
Incorrect: Shorter prompts do not directly impact the model's hallucination tendencies.
Train the model on diverse datasets.
説明
Incorrect: Training diversity does not guarantee factual accuracy in responses.
正解
Ground the LLM’s responses using a retrieval-augmented generation (RAG) pipeline connected to verified medical sources.
説明
Correct: RAG pipelines anchor LLM outputs in factual, retrieved data, reducing hallucinations.
Lower the temperature setting during inference.
説明
Incorrect: Lowering the temperature reduces randomness but does not eliminate hallucinations.
全体的な説明
A RAG pipeline grounds responses in factual data, ensuring outputs are accurate and reducing hallucinations in critical domains like medicine.
ドメイン
Application Development
問題33
未回答
A Generative AI Engineer is building a pipeline to deploy an LLM that generates personalized travel itineraries. The model needs to handle location data, user preferences, and budget constraints. What key components should the pipeline include?
A rule-based system for fixed travel recommendations.
説明
Incorrect: Rule-based systems lack the flexibility needed for dynamic inputs.
A summarization model to condense travel options.
説明
Incorrect: Summarization reduces detail, which is critical for personalized itineraries.
A classification model to categorize user preferences.
説明
Incorrect: Classification is insufficient for generating comprehensive, personalized itineraries.
正解
An embedding model for location and user preference representation, a retriever for querying data, and an LLM for generating itineraries.
説明
Correct: These components work together to dynamically process inputs and generate tailored itineraries.
全体的な説明
Embedding models, retrievers, and LLMs combine to generate accurate and personalized travel plans based on diverse user inputs.
ドメイン
Assembling and Deploying Applications
問題34
未回答
A Generative AI Engineer must implement masking techniques to handle personally identifiable information (PII) in a customer feedback system. What is the primary advantage of this approach?
Masking encrypts the dataset to protect it during storage.
説明
Incorrect: Encryption and masking serve different purposes; masking anonymizes data, while encryption secures it.
Masking reduces the response time for processing user data.
説明
Incorrect: Response time is not directly impacted by masking techniques.
Masking prevents model overfitting during training.
説明
Incorrect: Masking focuses on privacy, not training optimization.
正解
Masking anonymizes sensitive data, reducing privacy risks while preserving analytical value for feedback processing.
説明
Correct: Masking techniques replace sensitive information with placeholders, ensuring privacy without losing context.
全体的な説明
Masking protects sensitive data by anonymizing PII, ensuring privacy compliance and preserving the usefulness of customer feedback data.
ドメイン
Governance
問題35
未回答
A Generative AI Engineer is building a conversational agent for a banking application. The agent must handle sensitive information securely. What is the best approach to ensure data security?
Lower the temperature to limit variability in responses.
説明
Incorrect: Temperature adjustments do not address data security concerns.
正解
Implement encryption for sensitive data and use LLM guardrails to avoid leakage.
説明
Correct: Combining encryption and guardrails ensures secure handling of sensitive information in conversational contexts.
Use summarization models to reduce data volume.
説明
Incorrect: Summarization does not inherently secure sensitive data.
Train the LLM on datasets with anonymized data.
説明
Incorrect: Anonymized datasets alone do not prevent data leakage in outputs.
全体的な説明
Encryption combined with LLM guardrails provides robust security for handling sensitive data in banking applications.
ドメイン
Application Development
問題36
未回答
A Generative AI Engineer is evaluating the performance of a RAG application using MLflow. What metrics should they track to assess retrieval effectiveness?
Token usage per query.
説明
Incorrect: Token usage measures cost efficiency, not retrieval quality.
Model perplexity during training.
説明
Incorrect: Perplexity measures language model fluency but does not evaluate retrieval.
BLEU and ROUGE scores for evaluating text generation.
説明
Incorrect: BLEU and ROUGE assess language generation, not retrieval effectiveness.
正解
Precision, recall, and NDCG (Normalized Discounted Cumulative Gain).
説明
Correct: These metrics evaluate retrieval quality, with precision measuring relevance, recall capturing completeness, and NDCG assessing ranking accuracy.
全体的な説明
Tracking precision, recall, and NDCG ensures a comprehensive evaluation of retrieval performance in a RAG application.
ドメイン
Evaluation and Monitoring
問題37
未回答
A Generative AI Engineer is tasked with building a guardrail for an LLM used in customer feedback analysis. The system must block responses containing offensive language. What implementation is most effective?
Train a classifier to flag offensive responses after generation.
説明
Incorrect: Post-generation flagging is less efficient than real-time filtering.
Fine-tune the LLM on a dataset with neutral language.
説明
Incorrect: Fine-tuning helps improve output tone but does not guarantee filtering offensive responses.
Reduce the model’s temperature to minimize random outputs.
説明
Incorrect: Lowering temperature reduces randomness but does not directly block offensive language.
正解
Integrate content filtering to detect and block offensive language in outputs.
説明
Correct: Content filtering ensures that offensive outputs are blocked, maintaining system reliability and user trust.
全体的な説明
Content filtering ensures offensive language is blocked in real-time, maintaining user trust and compliance with ethical standards.
ドメイン
Application Development
問題38
未回答
A Generative AI Engineer is designing a chain using LangChain to answer user questions about technical specifications of electronic devices. The chain must handle multi-turn conversations and fetch detailed responses. What elements should the chain include? (Choose two)
A sentiment analysis model to detect user satisfaction.
説明
Incorrect: Sentiment analysis is not relevant to fetching technical specifications.
正しい選択
A retriever to fetch device specifications from a vector store.
説明
Correct: Retrievers enable access to relevant technical data for user queries.
正しい選択
A prompt template that maintains conversation history for context.
説明
Correct: Maintaining conversation history ensures the chain generates coherent multi-turn responses.
A rule-based system to provide fixed answers for repetitive queries.
説明
Incorrect: Rule-based systems lack flexibility for dynamic multi-turn conversations.
A summarization model to shorten long responses.
説明
Incorrect: Summarization is unnecessary for detailed responses required in this context.
全体的な説明
Prompt templates and retrievers ensure the LangChain application provides context-aware and detailed responses for technical queries.
ドメイン
Assembling and Deploying Applications
問題39
未回答
A Generative AI Engineer must evaluate the safety of responses generated by a medical chatbot. What qualitative metric is most critical?
正解
Factual accuracy to ensure medically correct responses.
説明
Correct: Factual accuracy ensures the chatbot provides safe and reliable medical advice.
Length of the response for user readability.
説明
Incorrect: Length alone does not determine the quality or safety of a response.
Response speed to improve user experience.
説明
Incorrect: Speed is important but secondary to accuracy in medical applications.
Stylistic tone for better engagement.
説明
Incorrect: While tone is helpful, accuracy is paramount in medical contexts.
全体的な説明
Ensuring factual accuracy is critical for generating safe and reliable responses in medical applications.
ドメイン
Application Development
問題40
未回答
A Generative AI Engineer must design a pipeline for generating personalized travel itineraries. The system must incorporate budget constraints, user preferences, and destination details. What components are critical? (Choose two)
Use a summarization model to condense user inputs into key points.
説明
Incorrect: Summarization does not create detailed itineraries.
Use a classification model to categorize destinations by type.
説明
Incorrect: Classification aids categorization but does not generate itineraries.
正しい選択
Use an LLM to generate detailed itineraries dynamically.
説明
Correct: LLMs tailor travel plans based on user inputs, incorporating preferences and constraints.
Use a rule-based system to match users with predefined itineraries.
説明
Incorrect: Rule-based systems lack flexibility for dynamic personalization.
正しい選択
Use an embedding model to represent destinations and preferences semantically.
説明
Correct: Embeddings enable contextual understanding of user preferences and destinations.
全体的な説明
Combining embeddings and LLMs ensures dynamic, contextually accurate travel itineraries tailored to user needs.
ドメイン
Design Applications
問題41
未回答
A Generative AI Engineer must identify resources required to serve features for a RAG application deployed at scale. What resources are critical? (Choose two)
Additional LLM fine-tuning capabilities.
説明
Incorrect: Fine-tuning is not critical for serving features at scale.
Batch processing tools for low-latency responses.
説明
Incorrect: Batch processing increases latency, unsuitable for real-time RAG applications.
正しい選択
Sufficient compute power for embeddings and retrieval, storage for vector data, and monitoring tools for performance.
説明
Correct: Compute, storage, and monitoring are vital for scaling RAG applications efficiently.
Tokenization optimization tools.
説明
Incorrect: Tokenization is a preprocessing task, not a serving resource.
正しい選択
High-speed internet connections to minimize latency.
説明
Correct: Network speed affects real-time retrieval and response performance.
全体的な説明
Compute power, storage, monitoring, and high-speed networks ensure efficient, scalable RAG application serving.
ドメイン
Assembling and Deploying Applications
問題42
未回答
A Generative AI Engineer must implement guardrails for a chatbot handling legal inquiries to prevent generating inaccurate legal advice. What technique is most effective? (Choose two)
Train the chatbot on legal datasets to improve accuracy.
説明
Incorrect: Training improves knowledge but does not guarantee accurate or appropriate outputs.
Lower the model temperature to limit output variability.
説明
Incorrect: Temperature adjustments reduce randomness but do not address the core issue of inaccurate advice.
Block user queries containing legal terms.
説明
Incorrect: Blocking queries reduces usability and limits the chatbot's functionality.
正しい選択
Use metaprompts to instruct the chatbot to limit responses to general information, avoiding legal advice.
説明
Correct: Metaprompts guide the model’s behavior, reducing the risk of generating inaccurate or inappropriate responses.
正しい選択
Add a disclaimer in all chatbot outputs clarifying its limitations.
説明
Correct: Disclaimers set user expectations, minimizing the risk of misuse.
全体的な説明
Combining metaprompts with disclaimers ensures user safety while maintaining the chatbot’s utility.
ドメイン
Governance
問題43
未回答
After changing the response-generating LLM in a RAG pipeline from GPT-4 to a model with a shorter context length that the company self-hosts, the Generative AI Engineer is getting the following error: {"error_code": "BAD_REQUEST", "message": "Bad request: rpc error: code = InvalidArgument desc = prompt token count (4595) cannot exceed 4096..."} What TWO solutions should the Generative AI Engineer implement without changing the response-generating model? (Choose two.)
正しい選択
Decrease the chunk size of embedded documents
説明
Correct: Reducing the chunk size ensures fewer tokens are retrieved from each document, helping to stay within the model’s context limit.
Use a smaller embedding model to generate embeddings
説明
Incorrect: The error is related to token count exceeding the model’s context length, not the size of the embedding model.
Retrain the response-generating model using ALiBi
説明
Incorrect: Retraining the model is unnecessary and overly complex for solving a token limit issue.
Reduce the maximum output tokens of the new model
説明
Incorrect: While this limits the output token count, it doesn’t address excessive input tokens from the vector database.
正しい選択
Reduce the number of records retrieved from the vector database
説明
Correct: Limiting the number of retrieved records reduces the total token count, effectively addressing the issue.
全体的な説明
By decreasing the chunk size of embedded documents and reducing the number of retrieved records, the engineer can ensure the total token count remains within the model's context length without requiring significant changes to the system.
ドメイン
Evaluation and Monitoring
問題44
未回答
A Generative AI Engineer must evaluate the retrieval performance of a chatbot. The system retrieves many irrelevant documents but also misses some relevant ones. Which metrics should they focus on? (Choose four)
Sentiment Analysis
説明
Incorrect: Sentiment analysis evaluates tone but is unrelated to retrieval performance.
正しい選択
F1 Score
説明
Correct: The F1 Score balances precision and recall, providing a holistic view of retrieval performance.
正しい選択
Precision
説明
Correct: Precision measures the relevance of retrieved documents, helping reduce irrelevant outputs.
正しい選択
Recall
説明
Correct: Recall ensures the system retrieves all relevant documents, reducing missed information.
正しい選択
Cosine Similarity
説明
Correct: Cosine similarity assesses semantic alignment, helping identify the relevance of retrieved content.
全体的な説明
Focusing on precision, recall, F1 score, and cosine similarity ensures a comprehensive evaluation of retrieval performance, addressing both relevance and completeness.
ドメイン
Data Preparation
問題45
未回答
A Generative AI Engineer must build a pipeline that converts unstructured legal documents into structured summaries. The summaries should highlight key clauses, risks, and obligations. Which tools should be included in the pipeline?
A retrieval system for fetching similar legal cases.
説明
Incorrect: Retrieval alone does not structure or summarize content effectively.
A summarization model trained on general text.
説明
Incorrect: General models may not capture domain-specific nuances.
A rule-based system for extracting clauses.
説明
Incorrect: Rule-based systems lack flexibility and adaptability for diverse legal texts.
正解
An LLM fine-tuned on legal text for generating structured summaries.
説明
Correct: Fine-tuning on legal data ensures the LLM produces domain-specific summaries with required elements.
全体的な説明
Fine-tuned LLMs on legal data ensure the system generates structured summaries tailored to domain-specific requirements.
ドメイン
Application Development
