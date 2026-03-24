問題1
未回答
A Generative AI Engineer is tasked with selecting tools for a pipeline that converts text-based user reviews into categorized insights. The categories include product quality, delivery, and customer service. What components are critical?
A retrieval system to fetch similar reviews.
説明
Incorrect: Retrieval does not classify or generate categorized insights.
An embedding model to represent reviews semantically.
説明
Incorrect: While embeddings capture meaning, they do not categorize reviews directly.
A summarization model to condense user reviews.
説明
Incorrect: Summarization does not produce specific categorizations.
正解
A classification model to categorize user reviews based on predefined categories.
説明
Correct: Classification models assign reviews to specific categories effectively.
全体的な説明
A classification model ensures reviews are assigned to the correct categories, enabling actionable insights from user feedback.
ドメイン
Design Applications
問題2
未回答
A Generative AI Engineer at an electronics company just deployed a RAG application for customers to ask questions about products. However, they received feedback that the RAG response often returns information about an irrelevant product. What can the engineer do to improve the relevance of the RAG’s response?
Implement caching for frequently asked questions.
説明
Incorrect: While caching improves speed, it does not address retrieval quality or relevance issues.
Use a different semantic similarity search algorithm.
説明
Incorrect: While this could help, assessing the retrieved context is the first step in diagnosing and improving relevance.
正解
Assess the quality of the retrieved context.
説明
Correct: Checking the quality of retrieved documents ensures only relevant information is fed into the LLM, improving response accuracy.
Use a different LLM to improve the generated response.
説明
Incorrect: The issue lies in retrieval, not the LLM's generative capabilities.
全体的な説明
Evaluating the quality of retrieved context ensures that only accurate and relevant information is passed to the LLM, solving relevance issues effectively.
ドメイン
Evaluation and Monitoring
問題3
未回答
When developing an LLM application, it’s crucial to ensure that the data used for training the model complies with licensing requirements to avoid legal risks. Which action is NOT appropriate to avoid legal risks?
Only use data explicitly labeled with an open license and ensure the license terms are followed.
説明
Incorrect: Following license terms for labeled open data avoids legal risks.
Reach out to the data curators directly before you have started using the trained model to let them know.
説明
Correct: Contacting curators after starting to use their data is inappropriate and exposes you to legal risk. Always clarify terms before use.
正解
Reach out to the data curators directly after you have started using the trained model to let them know.
説明
Correct: Contacting curators after using their data does not retroactively grant permissions and could lead to legal consequences.
Use any available data you personally created which is completely original and you can decide what license to use.
説明
Incorrect: Original data created by you is legally safe as long as you control its licensing.
全体的な説明
Always establish permissions or verify licensing terms before using third-party data in training to avoid legal risks.
ドメイン
Governance
問題4
未回答
A Generative AI Engineer is tasked with building a Vector Search index to handle document queries for a knowledge base. What steps are required to create and query this index?
Use a retrieval model directly on raw documents without embeddings.
説明
Incorrect: Retrievers require embeddings to semantically represent document content for effective search.
Skip preprocessing and store raw document text in a vector store for querying.
説明
Incorrect: Without preprocessing, documents may include noise, degrading retrieval quality.
Use embeddings to encode queries but not documents.
説明
Incorrect: Both documents and queries must be embedded for semantic alignment during search.
正解
Preprocess documents, embed them using an embedding model, store the embeddings in a vector store, and use a retriever for queries.
説明
Correct: Preprocessing, embedding, and retrieval are essential for building and querying an effective Vector Search index.
全体的な説明
Creating a Vector Search index requires preprocessing, embedding, storing in a vector store, and using retrievers for query handling.
ドメイン
Assembling and Deploying Applications
問題5
未回答
A Generative AI Engineer must assess the scalability of a production LLM application in handling increasing query volumes. What metrics are most critical?
Model size and parameter count.
説明
Incorrect: Model size alone does not evaluate scalability.
正解
Throughput and latency under varying workloads.
説明
Correct: These metrics directly assess the system’s ability to handle increasing query volumes efficiently.
Token usage and cost per query.
説明
Incorrect: While important, these metrics do not measure scalability directly.
BLEU and perplexity.
説明
Incorrect: These metrics evaluate language quality, not system scalability.
全体的な説明
Throughput and latency are critical for evaluating how well a production LLM application scales under increasing workloads.
ドメイン
Evaluation and Monitoring
問題6
未回答
A Generative AI Engineer is debugging a system where an LLM provides incomplete responses to user queries. What is the most likely cause?
The user queries are too short.
説明
Incorrect: Query length alone does not guarantee response quality.
The temperature setting is too high.
説明
Incorrect: Higher temperature affects randomness but not completeness.
The model is too large for the task.
説明
Incorrect: Model size does not directly affect response completeness.
正解
The prompt does not provide clear instructions or adequate context.
説明
Correct: Incomplete or unclear prompts often lead to incomplete responses from LLMs.
全体的な説明
Ensuring prompts are detailed and clear helps guide the LLM to generate complete and accurate responses.
ドメイン
Application Development
問題7
未回答
To reduce hallucinations in LLM responses, what is the most effective approach when implementing a retrieval-augmented generation (RAG) pipeline?
Increase the temperature parameter during inference.
説明
Incorrect: Increasing temperature adds randomness and can lead to more hallucinations.
Train the model on a larger dataset.
説明
Incorrect: A larger training dataset does not guarantee reduced hallucinations during inference.
Shorten the length of model responses.
説明
Incorrect: Short responses do not inherently improve factual accuracy.
正解
Use a high-quality document retrieval system to provide accurate context for the model.
説明
Correct: High-quality document retrieval anchors responses in factual data, minimizing hallucinations.
全体的な説明
Grounding model responses in high-quality, retrieved context ensures factual outputs, which is critical for reducing hallucinations.
ドメイン
Application Development
問題8
未回答
A Generative AI Engineer must build a system to generate educational content summaries for students. The summaries should include three fields: key concepts, examples, and practical applications. What is the best pipeline design?
Use a summarization model to condense content into shorter text.
説明
Incorrect: Summarization does not generate structured outputs with specific fields.
正解
Use an LLM to generate summaries dynamically, structured into key concepts, examples, and applications.
説明
Correct: LLMs dynamically generate structured, educational content summaries tailored to user needs.
Use a rule-based system to extract predefined educational elements.
説明
Incorrect: Rule-based systems lack flexibility and adaptability for diverse content.
Use an embedding model to represent educational text semantically.
説明
Incorrect: Embeddings alone do not create structured summaries.
全体的な説明
LLMs dynamically generate structured educational content, aligning with requirements for fields like key concepts and applications.
ドメイン
Design Applications
問題9
未回答
A Generative AI Engineer is optimizing document retrieval for a customer support chatbot. User feedback indicates that irrelevant results frequently appear. What should the engineer focus on improving?
Document length filtering
説明
Document length filtering may help in optimizing document retrieval by filtering out excessively long or short documents. However, the user feedback indicates that irrelevant results frequently appear, which suggests that the issue lies more with the relevance of the results rather than the length of the documents. Therefore, improving document length filtering may not directly address the problem of irrelevant results.
Response generation diversity
説明
Response generation diversity is related to the variety of responses generated by the chatbot. While diversity in responses is important for engaging users and providing a range of answers, the primary issue mentioned in the user feedback is the presence of irrelevant results. Therefore, focusing on response generation diversity may not directly address the problem of irrelevant search results in this context.
Recall
説明
Recall is the measure of the completeness of the retrieved results. While recall is important in ensuring that all relevant results are retrieved, the user feedback specifically mentions irrelevant results appearing frequently. Therefore, the engineer should focus on improving precision rather than recall in this scenario.
正解
Precision
説明
Precision is the measure of the accuracy of the retrieved results. In this case, the engineer should focus on improving precision to ensure that the search results are relevant to the user's query. By increasing precision, the engineer can reduce the number of irrelevant results appearing in the chatbot.
全体的な説明
Focusing on precision ensures the chatbot retrieves only relevant content, improving user satisfaction and system accuracy.
ドメイン
Data Preparation
問題10
未回答
A Generative AI Engineer must register a custom LLM to Unity Catalog using MLflow. What are the key steps in this process?
Register the model directly in Unity Catalog without logging it in MLflow.
説明
Incorrect: MLflow provides critical logging and metadata management capabilities required before registration.
正解
Log the model in MLflow, configure its metadata (e.g., schema and description), and register it to Unity Catalog for governance and discovery.
説明
Correct: Logging and metadata configuration ensure the model is properly tracked and registered for central access and governance.
Use only the MLflow tracking server without registering the model.
説明
Incorrect: Registration to Unity Catalog is required for centralized governance and discovery.
Skip metadata configuration during registration.
説明
Incorrect: Metadata is essential for model discoverability and usage tracking.
全体的な説明
Proper logging, metadata configuration, and registration ensure that the model is discoverable and governed effectively within Unity Catalog.
ドメイン
Assembling and Deploying Applications
問題11
未回答
A Generative AI Engineer is evaluating the retrieval performance of a RAG system. Which metrics are most relevant to this evaluation?
正解
Precision and recall to measure relevance and coverage of retrieved results.
説明
Correct: Precision evaluates the relevance of retrieved documents, while recall assesses how many relevant documents are retrieved.
Perplexity to measure response fluency.
説明
Incorrect: Perplexity evaluates language generation, not retrieval performance.
BLEU scores for retrieval evaluation.
説明
Incorrect: BLEU evaluates text similarity in translation or summarization tasks, not retrieval.
Latency to measure response time.
説明
Incorrect: Latency measures speed but does not assess relevance or accuracy of retrieval.
全体的な説明
Precision and recall are key metrics for evaluating the relevance and coverage of retrieved results in RAG systems.
ドメイン
Data Preparation
問題12
未回答
A Generative AI Engineer is building a chatbot for a travel agency. The chatbot must recommend travel destinations based on weather preferences, budget, and activities. What is the first step in pipeline design?
Create a database of destinations and activities.
説明
Incorrect: Databases support recommendations but require predefined pipeline structure.
Gather feedback on early recommendations.
説明
Incorrect: Feedback is important later for optimization but not during initial pipeline design.
正解
Define input fields like budget, preferred_weather, and activities and output fields like destination and activity_recommendations. Example: Input: { "budget": "$3000", "preferred_weather": "tropical", "activities": "adventure" } → Output: { "destination": "Thailand", "activity_recommendations": "snorkeling, jungle trekking" }.
説明
Correct: Clearly defining inputs and outputs ensures the pipeline aligns with business goals and user requirements.
Select an LLM trained on travel data for recommendations.
説明
Incorrect: Model selection is secondary to defining input-output relationships.
全体的な説明
Clearly defining inputs like budget and outputs like destination recommendations ensures alignment with user requirements and guides the pipeline’s architecture.
ドメイン
Design Applications
問題13
未回答
A Generative AI Engineer needs to extract customer feedback from PDFs containing tables, images, and text. What tool is most appropriate for this task?
pytesseract for OCR extraction.
説明
Incorrect: pytesseract is used for scanned images, not text in PDFs.
正解
pdfplumber for extracting structured text and tables from PDFs.
説明
Correct: pdfplumber is optimized for extracting structured text and tables, making it ideal for processing mixed-content PDFs.
PyPDF2 for reading and extracting PDF content.
説明
Incorrect: PyPDF2 cannot handle tables or images effectively.
BeautifulSoup for parsing PDF content.
説明
Incorrect: BeautifulSoup is designed for HTML, not PDF parsing.
全体的な説明
pdfplumber is the best tool for extracting structured content like text and tables from PDFs, ensuring accurate data retrieval.
ドメイン
Application Development
問題14
未回答
A Generative AI Engineer is designing a prompt for a QA system to answer questions about historical events. The response must include dates, key figures, and outcomes. How should the prompt be structured?
Provide a summary of the historical event.
説明
Incorrect: Summaries may skip critical details like dates or key figures.
Explain the causes of the historical event.
説明
Incorrect: Causes alone do not fulfill the requirement for detailed answers.
正解
Answer the question with details about dates, key figures, and outcomes.
説明
Correct: A clear, specific prompt ensures the inclusion of all required details.
Provide a general overview of historical events.
説明
Incorrect: Overviews are too broad and lack specificity.
全体的な説明
A clear prompt specifying required fields ensures the QA system generates accurate and comprehensive responses.
ドメイン
Design Applications
問題15
未回答
A Generative AI Engineer must generate multiple-choice questions from a large corpus of educational material. The questions should assess conceptual understanding and application of knowledge. What approach should they take?
正解
Use a prompt template that specifies question structure, options, and the correct answer.
説明
Correct: Prompt templates guide the LLM to generate well-structured and accurate multiple-choice questions.
Train a classification model to generate answers from the material.
説明
Incorrect: Classification models are not designed to generate multiple-choice questions.
Use a summarization model to distill the material into key points.
説明
Incorrect: Summarization does not produce structured questions.
Fine-tune the LLM on educational datasets.
説明
Incorrect: Fine-tuning aids domain knowledge but does not ensure multiple-choice question generation.
全体的な説明
Prompt templates ensure that the LLM generates questions aligned with the educational goals, including structured options and correct answers.
ドメイン
Application Development
問題16
未回答
A Generative AI Engineer needs to register a machine learning model in Unity Catalog for deployment. What benefits does this provide?
Automated hyperparameter tuning.
説明
Incorrect: Unity Catalog tracks model metadata but does not handle tuning.
正解
Centralized model governance, versioning, and access control.
説明
Correct: Unity Catalog integrates with MLflow to provide features like tracking, lineage, and governance for machine learning models.
Fine-tuning capabilities for custom tasks.
説明
Incorrect: Fine-tuning is a separate process not handled by Unity Catalog.
Reduced model inference time.
説明
Incorrect: Unity Catalog manages governance and registry but does not impact inference speed.
全体的な説明
Unity Catalog centralizes model governance, enabling tracking, versioning, and access control for robust machine learning workflows.
ドメイン
Assembling and Deploying Applications
問題17
未回答
A Generative AI Engineer needs to evaluate the output of a chatbot that generates legal advice. The outputs often include ambiguous statements. What method should they use to identify and resolve these issues?
Measure BLEU scores for the chatbot’s responses.
説明
Incorrect: BLEU evaluates text similarity but does not address ambiguity or accuracy.
Use a summarization model to shorten responses.
説明
Incorrect: Summarization may remove necessary context, increasing ambiguity.
Train the chatbot on more extensive datasets.
説明
Incorrect: Larger datasets may improve general performance but do not specifically address ambiguity.
正解
Qualitatively assess the responses for clarity and accuracy, then refine prompts to reduce ambiguity.
説明
Correct: Qualitative assessment ensures outputs align with legal standards, and prompt refinement addresses identified issues.
全体的な説明
Qualitative assessments and prompt refinement directly tackle the root causes of ambiguous responses, ensuring improved outputs.
ドメイン
Application Development
問題18
未回答
A Generative AI Engineer must create and query a vector search index for a knowledge management system. What steps are essential to ensure accurate results?
Use only keyword-based matching for queries.
説明
Incorrect: Keyword-based matching lacks the semantic depth provided by vector search.
Rely on raw document storage without embeddings.
説明
Incorrect: Raw document storage cannot support efficient vector search or semantic matching.
正解
Preprocess the documents, create embeddings for the text, store the embeddings in a vector store, and use nearest-neighbor search for queries.
説明
Correct: Preprocessing ensures clean data, embeddings enable semantic understanding, and nearest-neighbor search retrieves accurate results.
Skip document preprocessing and directly create embeddings.
説明
Incorrect: Preprocessing removes noise, improving the quality of embeddings and retrieval.
全体的な説明
A pipeline that preprocesses documents, creates embeddings, and queries using vector search ensures accurate and efficient results.
ドメイン
Assembling and Deploying Applications
問題19
未回答
A Generative AI Engineer is selecting a model for generating secure medical chatbot responses. Which feature is critical for ensuring data privacy?
The model should allow unlimited external API calls.
説明
Incorrect: Unlimited API calls increase the risk of data breaches.
The model should prioritize response diversity.
説明
Incorrect: Response diversity does not directly address data privacy.
正解
The model should not store user input or generate responses based on external data storage.
説明
Correct: Ensuring the model does not store input prevents sensitive data leaks and ensures compliance with privacy standards.
The model should always prioritize speed over accuracy.
説明
Incorrect: Speed does not ensure compliance with privacy standards.
全体的な説明
A model that avoids storing user input and external dependencies ensures compliance with privacy standards in sensitive domains like healthcare.
ドメイン
Application Development
問題20
未回答
A Generative AI Engineer is tasked with building a prompt for a chatbot that answers customer product questions. The chatbot should prioritize factual accuracy over creativity. What should the prompt include?
General guidance like “Answer the query.”
説明
Incorrect: General prompts lack specificity and may lead to inconsistent or inaccurate responses.
Instructions to “Be creative in your response.”
説明
Incorrect: Encouraging creativity could compromise factual accuracy.
正解
Explicit instructions such as “Provide concise, factual answers to customer questions.”
説明
Correct: Clear instructions help the model focus on generating fact-based responses over creative or imaginative ones.
No instructions, relying on the model’s default behavior.
説明
Incorrect: Default behavior may not align with the requirement for factual accuracy.
全体的な説明
Clear and explicit prompts guide the LLM to produce accurate, consistent responses tailored to the application's needs.
ドメイン
Application Development
問題21
未回答
A Generative AI Engineer is tasked with extracting text from HTML files containing product catalogs. What is the most suitable Python package for this task? (Choose two)
正しい選択
LXML for faster and efficient parsing of large HTML files.
説明
Correct: LXML is optimized for parsing large files, making it ideal for high-volume tasks.
pdfplumber for text extraction.
説明
Incorrect: pdfplumber is not relevant for HTML parsing tasks.
正しい選択
BeautifulSoup for parsing HTML content and extracting text.
説明
Correct: BeautifulSoup is designed for HTML parsing and text extraction.
pytesseract for OCR tasks.
説明
Incorrect: OCR tools like pytesseract are unnecessary for HTML files.
PyPDF2 for extracting text from PDFs.
説明
Incorrect: PyPDF2 is not suitable for parsing HTML files.
全体的な説明
Combining BeautifulSoup and LXML ensures robust text extraction from HTML files, meeting the task requirements.
ドメイン
Data Preparation
問題22
未回答
A Generative AI Engineer must preprocess a dataset of forum posts for a support chatbot. Many posts include hyperlinks and embedded media. What preprocessing step should the engineer take?
Summarize posts without removing hyperlinks or media.
説明
Incorrect: Summarization without cleaning may retain noise, reducing dataset quality.
Exclude posts containing hyperlinks or media entirely.
説明
Incorrect: Excluding such posts risks losing valuable textual content alongside irrelevant media.
正解
Remove hyperlinks and embedded media, retaining only the text content.
説明
Correct: Removing non-textual elements ensures the dataset focuses on meaningful language content, which the chatbot can process effectively.
Retain hyperlinks to preserve additional context.
説明
Incorrect: Hyperlinks are typically irrelevant and may confuse the model.
全体的な説明
Removing hyperlinks and media ensures the dataset remains focused on language content, optimizing the chatbot’s training and performance.
ドメイン
Data Preparation
問題23
未回答
A Generative AI Engineer is deploying a chatbot for a healthcare application. How can the engineer ensure the chatbot does not generate private patient information in its outputs?
正解
Use input filtering and response validation to block private data during processing and output generation.
説明
Correct: Filtering inputs and validating outputs ensures that private data is not included in the chatbot's responses, protecting user privacy.
Limit the chatbot's response length to prevent detailed outputs.
説明
Incorrect: Limiting response length does not specifically target private data issues.
Encrypt all chatbot responses before returning them to the user.
説明
Incorrect: Encryption secures responses during transmission but does not prevent private data inclusion.
Train the chatbot on anonymized datasets only.
説明
Incorrect: While helpful, training on anonymized data does not address private data inclusion in inputs.
全体的な説明
Input filtering and response validation ensure that private information is excluded from chatbot outputs, complying with privacy requirements.
ドメイン
Governance
問題24
未回答
A Generative AI Engineer is tasked with registering an LLM to Unity Catalog using MLflow. What information must be configured during registration?
Use only MLflow without registering the model to Unity Catalog.
説明
Incorrect: Unity Catalog provides centralized management and governance for models.
Skip metadata configuration and register the model with default settings.
説明
Incorrect: Default settings lack sufficient information for governance and tracking.
正解
Model metadata such as name, version, schema, and tags for tracking and governance.
説明
Correct: Configuring metadata ensures the model is properly registered and discoverable in Unity Catalog.
Only the model name and version without schema or tags.
説明
Incorrect: Schema and tags are critical for tracking and usability.
全体的な説明
Metadata like schema and tags ensures models are registered with all necessary details for effective governance and tracking.
ドメイン
Assembling and Deploying Applications
問題25
未回答
A Generative AI Engineer is tasked with creating a simple chain in LangChain that processes user queries about product specifications. The chain must return precise answers from a structured product database. What components are required? (Choose two)
A pre-trained classification model for query analysis.
説明
Incorrect: Classification models are not required for this task.
A summarization model to shorten user queries.
説明
Incorrect: Summarization is unnecessary for retrieving specific product specifications.
A rule-based filtering system for product categories.
説明
Incorrect: Rule-based filters are rigid and limit the system’s flexibility.
正しい選択
A structured prompt template to format user queries.
説明
Correct: Structured prompts guide the chain to generate precise responses based on the database.
正しい選択
A database retriever to fetch relevant product specifications.
説明
Correct: A retriever ensures dynamic access to relevant information from the product database.
全体的な説明
Combining retrievers and structured prompts ensures accurate and precise responses for product-related queries.
ドメイン
Assembling and Deploying Applications
問題26
未回答
A Generative AI Engineer must evaluate an LLM for summarizing financial news articles. The system must generate accurate, concise, and timely summaries. What metrics should guide model evaluation and deployment? (Choose Four)
正しい選択
Perplexity to assess the fluency of summaries.
説明
Correct: Perplexity measures the naturalness and readability of the summaries, enhancing user experience.
正しい選択
ROUGE for evaluating content relevance and overlap with reference summaries.
説明
Correct: ROUGE measures the relevance and quality of generated summaries.
正しい選択
BLEU to compare word sequences in generated summaries.
説明
Correct: BLEU evaluates the alignment of generated summaries with reference outputs for accuracy.
Token usage per query to track computational cost.
説明
Incorrect: While cost-related, token usage does not directly evaluate accuracy or timeliness.
正しい選択
Latency to ensure the system delivers summaries quickly.
説明
Correct: Low latency ensures timely delivery, crucial for time-sensitive financial news.
全体的な説明
A combination of latency, ROUGE, BLEU, and perplexity ensures the system is fast, accurate, and user-friendly for financial news summarization.
ドメイン
Evaluation and Monitoring
問題27
未回答
A Generative AI Engineer is tasked with coding a LangChain-based RAG application that queries a large dataset of financial reports. The dataset includes structured and unstructured data. What components should the chain include? (Choose two)
A pre-trained sentiment analysis model.
説明
Incorrect: Sentiment analysis is irrelevant for querying financial reports.
正しい選択
An embedding model to process both structured and unstructured data.
説明
Correct: Embedding models ensure that all data types are semantically represented for retrieval.
A classification model to categorize financial queries.
説明
Incorrect: Classification does not directly aid retrieval in this scenario.
A summarization model to condense retrieval results.
説明
Incorrect: Summarization is not necessary for retrieving precise information from the dataset.
正しい選択
A retriever to fetch relevant data from the vector store.
説明
Correct: Retrievers enable semantic search and retrieval of relevant data.
全体的な説明
Retrievers and embedding models ensure accurate and efficient query handling in the financial reports dataset.
ドメイン
Assembling and Deploying Applications
問題28
未回答
A Generative AI Engineer is developing a customer support chatbot for an e-commerce platform. The chatbot must provide answers to common queries while escalating unresolved issues to human agents. What should the engineer prioritize in the design?
正解
Implement a fallback mechanism to escalate unresolved queries to human agents.
説明
Correct: Fallback mechanisms ensure seamless escalation when the chatbot cannot handle a query.
Train the chatbot on a large dataset of historical conversations.
説明
Incorrect: Training improves general understanding but does not implement escalation mechanisms.
Focus on embedding models to understand user queries semantically.
説明
Incorrect: While embeddings aid query understanding, they do not address unresolved query escalation.
Use rule-based logic for predefined query handling.
説明
Incorrect: Rule-based systems lack flexibility for dynamic customer queries.
全体的な説明
Fallback mechanisms enhance user experience by ensuring unresolved queries are appropriately escalated to human agents.
ドメイン
Application Development
問題29
未回答
A Generative AI Engineer is designing an AI assistant for lawyers. The assistant must retrieve legal documents and generate concise summaries. What is the most important consideration for ensuring accurate retrieval?
Build a rule-based filtering system.
説明
Incorrect: Rule-based systems are inflexible and unsuitable for nuanced legal queries.
Use a keyword-based search algorithm.
説明
Incorrect: Keyword-based retrieval may miss documents that are contextually relevant but lack exact keyword matches.
Fine-tune the LLM on legal datasets.
説明
Incorrect: Fine-tuning improves summarization but does not address document retrieval.
正解
Implement a vector database for semantic search.
説明
Correct: Vector databases enable semantic retrieval, ensuring the system retrieves documents based on meaning rather than exact keywords.
全体的な説明
Semantic search via a vector database ensures the system retrieves relevant legal documents, providing accurate inputs for generating concise summaries.
ドメイン
Design Applications
問題30
未回答
A Generative AI Engineer must create a pipeline that retrieves financial reports and summarizes key performance metrics. The system must handle thousands of reports efficiently. What is the correct sequence for designing this pipeline?
1. Deploy the retriever → 2. Store raw reports in a database → 3. Summarize retrieved reports → 4. Index the database.
説明
Incorrect: Indexing must occur before retrieval for efficient querying.
正解
1. Create embeddings for all financial reports → 2. Store embeddings in a Vector Search index → 3. Build a retriever → 4. Deploy a summarization model for retrieval outputs.
説明
Correct: This sequence ensures that documents are indexed for retrieval before being summarized, optimizing both retrieval and generation processes.
1. Preprocess all reports → 2. Deploy a retriever → 3. Fine-tune a language model → 4. Summarize outputs.
説明
Incorrect: Preprocessing and retrieval must include indexing for effective querying.
1. Fine-tune a summarization model → 2. Generate embeddings → 3. Build a retriever → 4. Deploy to production.
説明
Incorrect: Summarization models are applied after retrieval, not before embedding generation.
全体的な説明
Embedding generation, vector indexing, retrieval, and summarization ensure the pipeline is scalable and optimized for financial document processing.
ドメイン
Assembling and Deploying Applications
問題31
未回答
A Generative AI Engineer must design a prompt for a chatbot that provides software installation instructions. The response should include step-by-step instructions and warnings for common issues. What should the prompt include?
Summarize the installation process for the software.
説明
Incorrect: Summaries may skip critical steps or details.
正解
Provide detailed installation instructions, including common warnings and troubleshooting tips.
説明
Correct: Explicitly asking for detailed steps and warnings ensures the response is comprehensive.
Include only the main steps of the installation process.
説明
Incorrect: Focusing only on main steps may omit important warnings or troubleshooting.
Provide a concise explanation of software features.
説明
Incorrect: Features are unrelated to installation instructions.
全体的な説明
A clear, detailed prompt ensures the chatbot provides step-by-step instructions with warnings, aligning with user expectations.
ドメイン
Design Applications
問題32
未回答
A Generative AI Engineer needs to develop a pipeline that identifies and extracts customer intents from chatbot queries. Which embedding model should they select?
GloVe
説明
Incorrect: GloVe embeddings are pre-trained on word-level data and are less suitable for sentence-level tasks.
正解
Sentence Transformers
説明
Correct: Sentence Transformers are optimized for capturing semantic relationships in text, making them suitable for identifying user intent.
BERT-base for classification
説明
Incorrect: Classification models like BERT-base are not optimized for generating embeddings for semantic search.
Word2Vec
説明
Incorrect: Word2Vec creates embeddings for individual words but does not capture full sentence meaning effectively.
全体的な説明
Sentence Transformers excel in generating embeddings for entire sentences, making them ideal for tasks like intent detection in chatbot queries.
ドメイン
Application Development
問題33
未回答
A Generative AI Engineer is evaluating the performance of a RAG application that retrieves documents and generates summaries. The retrieval step has high recall but low precision. What does this indicate, and how should it be addressed?
The summarization step is producing incomplete summaries.
説明
Incorrect: Summarization quality is unrelated to retrieval metrics like precision and recall.
正解
The system retrieves many relevant documents but also includes irrelevant ones, requiring better filtering or embeddings.
説明
Correct: High recall with low precision indicates the need to refine retrieval to reduce irrelevant results, improving overall relevance.
The system retrieves all relevant documents but excludes others, requiring larger batch sizes.
説明
Incorrect: Recall measures the proportion of relevant documents retrieved, not batch size.
The system has low latency, which reduces retrieval accuracy.
説明
Incorrect: Latency impacts speed, not the balance between precision and recall.
全体的な説明
High recall but low precision means the system retrieves many irrelevant documents, which can be addressed with better embeddings or retrieval filters.
ドメイン
Evaluation and Monitoring
問題34
未回答
A Generative AI Engineer is tasked with building a Retrieval-Augmented Generation (RAG) system for a healthcare organization. The system needs to retrieve patient-specific documents and summarize key findings securely. What are the critical components for building this pipeline? (Choose four)
Classification model for tagging medical conditions.
説明
Incorrect: While classification may help identify conditions, it is not a mandatory component for RAG pipelines.
正しい選択
Low-latency GPU infrastructure for real-time queries.
説明
Correct: GPUs are essential for efficiently handling the computational demands of retrieval and summarization in real-time applications.
正しい選択
Secure document retriever with access controls.
説明
Correct: A secure retriever prevents unauthorized access to sensitive patient data and ensures compliance with privacy regulations like HIPAA.
正しい選択
Embedding model trained on healthcare datasets.
説明
Correct: An embedding model trained on domain-specific data ensures that document embeddings align with medical terminology and user queries.
正しい選択
Summarizer model optimized for clinical reports.
説明
Correct: Summarization models tailored for clinical text ensure concise and relevant outputs for healthcare professionals.
全体的な説明
RAG systems for healthcare require domain-specific embedding models, secure retrievers, summarization capabilities, and high-performance compute resources to ensure accuracy, compliance, and efficiency.
ドメイン
Assembling and Deploying Applications
問題35
未回答
A Generative AI Engineer is designing a pipeline for multi-turn dialogue in a customer support chatbot. The chatbot often forgets earlier turns. What should they implement?
Reset the context after each turn.
説明
Incorrect: Resetting context results in disjointed and unhelpful responses.
Use a lower temperature setting.
説明
Incorrect: Lowering temperature affects randomness but not context retention.
正解
State tracking to retain the context of previous dialogue turns.
説明
Correct: State tracking helps maintain coherence by preserving the context of the conversation.
Increase the token limit.
説明
Incorrect: Token limit affects input size but does not resolve multi-turn context issues.
全体的な説明
State tracking ensures the chatbot remembers previous conversation turns, improving coherence and user experience.
ドメイン
Application Development
問題36
未回答
A Generative AI Engineer is designing a customer service chatbot to handle product return requests. The chatbot must ensure that responses are both accurate and polite. What approach should they use to implement this?
正解
Fine-tune the LLM on a polite tone dataset and return policy information.
説明
Correct: Fine-tuning ensures both tone and domain-specific knowledge align with application needs.
Add politeness rules into the system as post-processing filters.
説明
Incorrect: Filters can flag issues but do not inherently improve response quality or accuracy.
Use a generic pre-trained model for handling responses.
説明
Incorrect: Generic models lack domain knowledge and may not handle tone requirements.
Rely on summarization techniques to handle user inputs.
説明
Incorrect: Summarization does not improve politeness or ensure accuracy for return requests.
全体的な説明
Fine-tuning aligns the LLM’s tone and knowledge base, ensuring polite and accurate responses for customer service scenarios.
ドメイン
Application Development
問題37
未回答
A Generative AI Engineer is evaluating an embedding model for a system that recommends job candidates based on resumes and job descriptions. The model has a 512-token context length. How should they adapt the system for longer resumes?
正解
Chunk resumes into smaller sections within the 512-token limit and process each chunk independently.
説明
Correct: Chunking ensures compliance with token limits while preserving content relevance.
Ignore longer resumes and process only those within the token limit.
説明
Incorrect: Ignoring resumes reduces the system’s effectiveness and fairness.
Train a new embedding model with a longer context length.
説明
Incorrect: Training new models is resource-intensive and not always feasible.
Use a summarization model to reduce resume length.
説明
Incorrect: Summarization risks omitting critical details.
全体的な説明
Chunking resumes into smaller sections allows the system to process longer inputs while adhering to the token limit.
ドメイン
Application Development
問題38
未回答
A Generative AI Engineer is tasked with writing chunked user feedback data into Delta Lake tables. Which operation sequence ensures optimal data preparation and storage?
Chunk the text first → Write the chunks into Delta Lake → Define the schema later.
説明
Incorrect: Schema must be defined before writing to ensure proper organization.
Skip chunking and directly write the feedback into Delta Lake.
説明
Incorrect: Unstructured data without chunking limits downstream processing efficiency.
正解
Define schema for feedback data → Chunk the text → Write chunks into Delta Lake tables.
説明
Correct: Defining the schema first ensures structured data storage, improving accessibility and consistency.
Write all feedback data as one large chunk into Delta Lake.
説明
Incorrect: Storing data as one large chunk reduces query performance and accessibility.
全体的な説明
Defining the schema first ensures data consistency, and chunking facilitates efficient storage and retrieval in Delta Lake tables.
ドメイン
Data Preparation
問題39
未回答
A Generative AI Engineer is tasked with reviewing the licensing requirements of a dataset containing medical records used in a generative application. What steps should they take to ensure legal compliance? (Choose two)
正しい選択
Check the licensing terms to confirm the dataset can be used for commercial purposes.
説明
Correct: Reviewing licensing terms prevents unauthorized use of the dataset.
正しい選択
Verify that the dataset complies with HIPAA or relevant data privacy regulations.
説明
Correct: Ensuring compliance with regulations like HIPAA is critical for handling sensitive medical data.
Assume non-commercial use does not require licensing checks.
説明
Incorrect: Legal compliance is necessary regardless of the intended use case.
Ensure the LLM’s outputs include disclaimers about data origins.
説明
Incorrect: Disclaimers do not replace the need for licensing and privacy compliance.
Use the dataset as long as it is publicly available.
説明
Incorrect: Public availability does not equate to permissible use without verifying licensing and privacy compliance.
全体的な説明
Verifying privacy regulations and licensing terms ensures the dataset is legally compliant and suitable for use in the application.
ドメイン
Governance
問題40
未回答
A Generative AI Engineer is using inference logging to monitor a RAG application. What insights can inference logging provide?
Token usage and model size.
説明
Incorrect: Token usage and model size are unrelated to inference logging insights.
正解
Query patterns, response times, and error occurrences.
説明
Correct: Inference logging tracks query behavior, latency, and errors, offering insights into application performance and user interactions.
BLEU scores and perplexity for language outputs.
説明
Incorrect: BLEU and perplexity assess language quality but are not relevant to inference logging.
Model training loss over time.
説明
Incorrect: Training loss is a metric for model development, not deployment monitoring.
全体的な説明
Inference logging provides actionable data about query patterns, latency, and errors, helping to optimize application performance.
ドメイン
Evaluation and Monitoring
問題41
未回答
Which metric is most suitable for evaluating the accuracy of summaries generated by an LLM?
Perplexity
説明
Incorrect: Perplexity measures language model confidence but not summary quality.
F1 score
説明
Incorrect: F1 is used in classification tasks and is not directly applicable to summaries.
正解
ROUGE score
説明
Correct: ROUGE compares the generated summary with a reference summary to measure overlap and relevance.
BLEU score
説明
Incorrect: BLEU is primarily used for translation tasks, not summarization.
全体的な説明
The ROUGE score is specifically designed to evaluate summarization tasks, making it the best metric for assessing summary accuracy.
ドメイン
Application Development
問題42
未回答
A Generative AI Engineer is working with a dataset containing both primary and secondary healthcare documents for a medical chatbot. What type of documents should they prioritize for ensuring factual accuracy?
Summaries of medical textbooks.
説明
Incorrect: Summaries are secondary sources and may not provide the most up-to-date or comprehensive information.

Health-related social media posts.
説明
Incorrect: Social media content is subjective and lacks authoritative validation.

Patient blogs and forum discussions.
説明
Incorrect: Blogs and forums often contain unverified information and personal anecdotes unsuitable for medical applications.

正解
Peer-reviewed medical research papers and government health guidelines.
説明
Correct: Peer-reviewed research papers and government guidelines are credible, ensuring accurate and trustworthy chatbot responses.

全体的な説明
Using credible sources like peer-reviewed papers and government guidelines ensures reliable and factual medical chatbot responses.
ドメイン
Data Preparation
問題43
未回答
A Generative AI Engineer must sequence the steps to deploy a RAG application endpoint. What is the correct order? (Choose two)
Rely only on the LLM without embedding or vector search.
説明
Incorrect: Embeddings and vector search are critical for RAG applications.
Use hardcoded responses instead of a retriever.
説明
Incorrect: Hardcoded responses lack flexibility for dynamic queries.
Deploy the endpoint first and configure embeddings later.
説明
Incorrect: Embeddings and vector stores must be prepared before deployment.
正しい選択
Train the embedding model, preprocess documents, create a vector store, and deploy the endpoint.
説明
Correct: This sequence ensures data is prepared, stored, and served through an endpoint effectively.
正しい選択
Preprocess documents and create a vector store before deploying the endpoint.
説明
Correct: Preprocessing and vector store creation ensure clean and retrievable data for endpoint deployment.
Skip preprocessing and deploy documents directly to the endpoint.
説明
Incorrect: Preprocessing removes noise and ensures clean data for retrieval.
全体的な説明
Preprocessing, embeddings, and vector store creation are essential steps for deploying an effective RAG application endpoint.
ドメイン
Assembling and Deploying Applications
問題44
未回答
A Generative AI Engineer must create a prompt that ensures consistent responses from an LLM when summarizing financial reports. What is the most effective prompt strategy?
正解
Provide clear instructions and examples in the prompt, such as “Summarize the key financial figures and trends clearly and concisely.”
説明
Correct: Including specific instructions and examples helps guide the model, ensuring consistent and high-quality responses.
Use multiple prompts with contradictory instructions.
説明
Incorrect: Contradictory instructions confuse the model and reduce response quality.
Allow the model to interpret the task without guidance.
説明
Incorrect: Without guidance, the LLM may produce incomplete or irrelevant summaries.
Use a short, vague prompt like “Summarize the report.”
説明
Incorrect: Vague prompts lack clarity and can lead to inconsistent or irrelevant outputs.
全体的な説明
A well-structured prompt with explicit instructions and examples improves response consistency and aligns outputs with expectations.
ドメイン
Application Development
問題45
未回答
A Generative AI Engineer is building a generative application for processing user-provided content. The application must protect against malicious user inputs such as injection attacks. What guardrail technique should they use?
Use a summarization model to preprocess user inputs.
説明
Incorrect: Summarization is not a reliable method to mitigate injection risks.
正解
Sanitize user inputs by removing special characters and validating data formats.
説明
Correct: Sanitizing inputs prevents malicious payloads, such as SQL injection, from being processed by the application.
Log and monitor user inputs for suspicious patterns.
説明
Incorrect: Monitoring alone does not prevent malicious inputs from being executed.
Allow unrestricted user inputs to encourage flexibility.
説明
Incorrect: Unrestricted inputs expose the application to security vulnerabilities.
全体的な説明
Input sanitization effectively neutralizes harmful payloads, ensuring application security against malicious inputs.
ドメイン
Governance
