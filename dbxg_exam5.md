問題1
未回答
A Generative AI Engineer is asked to deploy a pipeline that retrieves relevant documents and answers user queries. Which component is critical for improving retrieval accuracy?
Pre-trained response generation templates.
説明
Incorrect: Response generation templates do not directly impact retrieval accuracy.
正解
A high-quality embedding model trained on domain-specific data.
説明
Correct: Domain-specific embedding models improve the accuracy of document retrieval by aligning embeddings with user queries.
Shorter document chunk lengths.
説明
Incorrect: While helpful, chunk length is secondary to embedding quality.
A fine-tuned classification model.
説明
Incorrect: Classification models do not enhance retrieval accuracy in this context.
全体的な説明
Using a domain-specific embedding model ensures that embeddings align with both documents and queries, improving retrieval accuracy.
ドメイン
Assembling and Deploying Applications
問題2
未回答
A Generative AI Engineer must preprocess multilingual documents for a RAG system that serves English-only queries. What preprocessing step ensures consistency?
Process all documents without identifying their language.
説明
Incorrect: Ignoring language consistency risks irrelevant or incorrect outputs.
Retain all documents to provide potential multilingual functionality.
説明
Incorrect: Non-English documents may interfere with the quality of English-only responses.
Translate all non-English content into English before further processing.
説明
Incorrect: Translation introduces additional overhead and potential inaccuracies.
正解
Detect and filter non-English documents using a language detection tool.
説明
Correct: Filtering ensures only English documents remain, aligning the dataset with the system’s requirements.
全体的な説明
Filtering non-English documents ensures the dataset is aligned with the system’s language requirements, avoiding irrelevant responses.
ドメイン
Data Preparation
問題3
未回答
A Generative AI Engineer must select a chunking strategy for summarizing government reports with 10,000+ words. What is the best approach?
Overlap all chunks by 200 tokens.
説明
Incorrect: Overlapping improves context but does not align with logical document sections.
Process the entire document as a single chunk.
説明
Incorrect: Processing a long document as one chunk exceeds most model token limits.
正解
Chunk based on sections like "Introduction" and "Findings," ensuring each chunk stays within token limits.
説明
Correct: Section-based chunking maintains coherence and relevance, aligning with the document structure.
Split the document into equal-sized chunks of 1,000 tokens.
説明
Incorrect: Arbitrary splitting risks breaking logical sections, reducing summarization quality.
全体的な説明
Chunking by sections preserves the logical flow and ensures the model processes content effectively within token constraints.
ドメイン
Application Development
問題4
未回答
A Generative AI Engineer must handle biased data in a RAG application that delivers hiring recommendations. What is the best approach to address bias in the dataset?
正解
Analyze the dataset for potential biases and remove or reweight biased entries to ensure fairness.
説明
Correct: Identifying and addressing biases during preprocessing ensures the model provides equitable and unbiased outputs.
Use only pre-trained models and avoid modifying the dataset.
説明
Incorrect: Pre-trained models may still reflect the biases present in the original dataset.
Ignore the bias, as the model generates outputs based on user queries.
説明
Incorrect: Ignoring bias risks perpetuating unfairness in the system.
Reduce the dataset size to exclude potentially biased information.
説明
Incorrect: Simply reducing dataset size does not guarantee the removal of biases.
全体的な説明
Analyzing and addressing biases in the dataset ensures fairness in the application and reduces the risk of perpetuating discrimination.
ドメイン
Governance
問題5
未回答
A Generative AI Engineer is processing invoices stored as scanned PDFs for a retrieval-based application. The text includes numerical details like invoice IDs, amounts, and dates. Which Python package is the best fit for extracting this content? (Choose two)
PyPDF2
説明
Incorrect: PyPDF2 works only with text-based PDFs, not scanned image-based PDFs.
正しい選択
PyTesseract
説明
Correct: PyTesseract uses OCR to extract text from scanned PDFs, including numerical details and structured data.
正しい選択
Textract
説明
Correct: Textract supports OCR for scanned PDFs and is also capable of extracting numerical data effectively.
Tika
説明
Incorrect: Tika supports text extraction but lacks the advanced OCR capabilities of PyTesseract and Textract.
全体的な説明
PyTesseract and Textract are ideal for extracting numerical and textual details from scanned PDFs, providing accurate OCR-based text retrieval.
ドメイン
Data Preparation
問題6
未回答
A Generative AI Engineer must evaluate a new LLM for summarizing research papers. The evaluation should prioritize accuracy and informativeness. What metrics and tools are most appropriate? (Choose two)
Latency to measure the model’s response speed.
説明
Incorrect: Latency measures performance but not summary quality.
正しい選択
ROUGE for measuring content overlap between generated summaries and reference summaries.
説明
Correct: ROUGE evaluates the quality of content overlap effectively.
正しい選択
Human qualitative assessment for relevance and informativeness.
説明
Correct: Human evaluation provides nuanced insights into summary quality.
Token usage to evaluate computational cost.
説明
Incorrect: Token usage is unrelated to accuracy or informativeness.
Perplexity for evaluating the fluency of summaries.
説明
Incorrect: Perplexity assesses fluency but does not measure informativeness.
全体的な説明
Combining ROUGE with human qualitative assessments ensures the evaluation captures both quantitative and qualitative aspects of summary quality.
ドメイン
Application Development
問題7
未回答
A Generative AI Engineer must select an embedding model for FAQ retrieval. The system must support fast lookups and high accuracy. What strategy ensures optimal performance? (Choose two)
正しい選択
Choose an embedding model with high accuracy on semantic similarity benchmarks.
説明
Correct: High similarity accuracy ensures that FAQs and queries are aligned effectively.
Use a small embedding model to save costs.
説明
Incorrect: Small models may compromise accuracy, reducing overall performance.
Prioritize token length over speed.
説明
Incorrect: Token length is irrelevant for short FAQs.
正しい選択
Use approximate nearest neighbor (ANN) search for faster lookups.
説明
Correct: ANN search balances speed and accuracy, making it ideal for large datasets.
Use a generative model for response generation instead of embeddings.
説明
Incorrect: Generative models do not directly optimize retrieval accuracy.
全体的な説明
High semantic similarity accuracy combined with ANN search ensures fast and accurate retrieval in FAQ systems.
ドメイン
Application Development
問題8
未回答
A Generative AI Engineer is tasked with deploying an LLM application that uses a vector store for document retrieval. The application must ensure low latency and scalability. What infrastructure should they prioritize?
正解
Deploy the application on a scalable cloud infrastructure with a high-performance database for the vector store.
説明
Correct: Cloud scalability ensures the application can handle growing workloads, while high-performance databases reduce latency for vector queries.
Use local storage for vector data to minimize costs.
説明
Incorrect: Local storage may reduce costs but compromises scalability and latency for production systems.
Deploy the application on a single-node server to minimize complexity.
説明
Incorrect: Single-node servers lack scalability for high-demand applications.
Skip using a vector store and rely on direct LLM query processing.
説明
Incorrect: Without a vector store, retrieval quality and latency will degrade.
全体的な説明
Scalable cloud infrastructure with a high-performance vector store ensures low latency and efficient scaling for production-grade systems.
ドメイン
Assembling and Deploying Applications
問題9
未回答
A Generative AI Engineer is designing a conversational AI for customer service. The AI must process queries and recommend actions based on the conversation’s context. What should the engineer prioritize in the prompt design?
Avoid examples to encourage creativity.
説明
Incorrect: Examples help the AI understand the task and generate consistent responses.
Specify only the tone of the conversation.
説明
Incorrect: While tone improves user experience, it does not guide the AI on the required output.
Focus on brevity to generate concise responses.
説明
Incorrect: Brevity alone does not ensure relevance or alignment with user needs.
正解
Include clear context and desired output. Example: “User is asking about late deliveries. Recommend next steps to resolve their issue.”
説明
Correct: Providing context and specifying output ensures relevant and actionable responses based on the conversation.
全体的な説明
Providing clear context and expected output guides the model to generate accurate, user-relevant recommendations for customer service interactions.
ドメイン
Design Applications
問題10
未回答
A Generative AI Engineer is working on a chatbot that summarizes customer queries for a support team. The chatbot occasionally leaks sensitive data in summaries. What guardrail technique is most effective?
Rely on the chatbot’s training to avoid sensitive data leakage.
説明
Incorrect: Training alone cannot guarantee the exclusion of sensitive information.
Reduce the model’s temperature to limit variability in summaries.
説明
Incorrect: Temperature adjustments do not address the risk of sensitive data leakage.
正解
Use postprocessing filters to detect and redact sensitive information from generated outputs.
説明
Correct: Postprocessing ensures sensitive data is removed from summaries before they are shared.
Manually review all summaries for sensitive data before sharing.
説明
Incorrect: Manual review is impractical for large-scale applications.
全体的な説明
Postprocessing filters ensure sensitive data is identified and redacted from summaries, maintaining user trust and compliance.
ドメイン
Governance
問題11
未回答
A Generative AI Engineer is tasked with masking sensitive user information in a customer support chatbot. What is the most effective approach to achieve this?
Manually filter user inputs before processing.
説明
Incorrect: Manual filtering is impractical for large-scale applications.
Use a summarization model to exclude sensitive details.
説明
Incorrect: Summarization models may not reliably identify all sensitive information.
Rely on the LLM’s training to avoid generating sensitive outputs.
説明
Incorrect: LLMs cannot guarantee the exclusion of sensitive data without explicit preprocessing.
正解
Implement regex-based patterns to identify and mask sensitive data like phone numbers and credit card details.
説明
Correct: Regex patterns efficiently detect and mask sensitive information, enhancing data privacy.
全体的な説明
Regex-based masking ensures sensitive data is identified and securely masked, maintaining compliance with privacy standards.
ドメイン
Governance
問題12
未回答
A Generative AI Engineer is tasked with selecting a model from a marketplace to perform entity recognition for legal documents. What factors should they prioritize in the model metadata? (Choose two)
Multilingual capabilities.
説明
Incorrect: Multilingual features are unnecessary for monolingual tasks like English legal documents.
正しい選択
Performance on entity recognition benchmarks.
説明
Correct: High performance on benchmarks ensures the model can accurately identify entities in legal documents.
Response generation speed.
説明
Incorrect: Response speed is less critical for entity recognition tasks compared to accuracy.
The number of training parameters.
説明
Incorrect: The parameter count is secondary to task-specific performance.
正しい選択
Fine-tuning capabilities for legal datasets.
説明
Correct: Fine-tuning ensures the model aligns with the specific requirements of legal document processing.
全体的な説明
Focusing on entity recognition benchmarks and fine-tuning capabilities ensures the model is effective for legal document tasks.
ドメイン
Application Development
問題13
未回答
A Generative AI Engineer is tasked with designing a system that converts long academic papers into concise summaries for students. The system should highlight key arguments and conclusions. What LLM configuration is most effective?
Use a generic LLM without fine-tuning.
説明
Incorrect: Generic models may generate summaries that lack domain-specific insights.
正解
Fine-tune a summarization LLM on academic texts to generate concise summaries.
説明
Correct: Fine-tuning on domain-specific data ensures accurate and relevant summaries tailored to academic content.
Reduce the model’s response length to ensure conciseness.
説明
Incorrect: Reducing response length does not guarantee meaningful summaries.
Increase the model’s temperature to produce more diverse summaries.
説明
Incorrect: Higher temperature introduces randomness, which can reduce summary accuracy.
全体的な説明
Fine-tuning a summarization LLM ensures that the generated summaries capture key arguments and conclusions accurately.
ドメイン
Application Development
問題14
未回答
A Generative AI Engineer needs to evaluate the performance of a RAG system trained on legal documents. What metrics and tools should be used? (Choose two)
正しい選択
NDCG (Normalized Discounted Cumulative Gain) to measure ranking quality.
説明
Correct: NDCG evaluates the relevance and ranking order of retrieved documents.
Latency to measure query processing speed.
説明
Incorrect: Latency measures response time but not retrieval relevance.
BLEU scores for evaluating output text similarity.
説明
Incorrect: BLEU is used for text generation tasks, not document retrieval.
正しい選択
Recall to measure how many relevant documents are retrieved.
説明
Correct: Recall is critical for evaluating the system’s ability to retrieve all relevant documents.
Token usage to track computational costs.
説明
Incorrect: Token usage does not directly measure retrieval performance.
全体的な説明
Combining recall and NDCG ensures the system retrieves relevant documents efficiently and ranks them accurately.
ドメイン
Data Preparation
問題15
未回答
A Generative AI Engineer is tasked with monitoring a production LLM application for a multilingual customer support system. What key metrics should they track? (Choose two)
Fine-tuning accuracy for each language.
説明
Incorrect: Fine-tuning metrics are relevant for training, not deployment monitoring.
Input-output length ratio.
説明
Incorrect: Input-output length ratio does not provide direct insights into application performance or language coverage.
BLEU scores for multilingual responses.
説明
Incorrect: BLEU evaluates language generation quality but is not critical for overall monitoring.
正しい選択
Latency, response accuracy, and language coverage.
説明
Correct: These metrics ensure responsiveness, correctness, and the system’s ability to handle multiple languages effectively.
正しい選択
Token usage and cost per query.
説明
Correct: Tracking token usage and costs helps optimize the system’s efficiency in production.
全体的な説明
Tracking latency, accuracy, language coverage, and costs ensures comprehensive monitoring of a multilingual customer support LLM.
ドメイン
Evaluation and Monitoring
問題16
未回答
A Generative AI Engineer is developing a RAG system to answer questions about company financial reports. Users have complained that answers are vague and lack citations. How should the engineer improve the system?
Increase the model temperature to encourage more creative responses.
説明
Incorrect: Higher temperature introduces variability but does not improve citation accuracy.
Fine-tune the model on financial report datasets.
説明
Incorrect: Fine-tuning may improve general relevance but does not inherently solve citation issues.
Use a summarization model to simplify the financial data.
説明
Incorrect: Simplification does not address the issue of vague answers or missing citations.
正解
Add a step in the pipeline to include relevant citations with retrieved content.
説明
Correct: Including citations ensures responses are transparent and build user trust.
全体的な説明
Adding citations improves transparency and trustworthiness, addressing user concerns about vague answers.
ドメイン
Application Development
問題17
未回答
A Generative AI Engineer must deploy an LLM application that uses Foundation Model APIs. The application needs to handle document summarization and integrate retrieval capabilities. What sequence should they follow to deploy the application effectively?
Deploy the endpoint first and configure the embedding model later.
説明
Incorrect: Embeddings must be configured before deployment for seamless functionality.
Use pre-trained summarization models without retrieval support.
説明
Incorrect: Pre-trained summarization models lack dynamic retrieval capabilities required for the application.
Skip embedding creation and rely on document metadata.
説明
Incorrect: Embedding creation is critical for vector search and semantic retrieval.
Skip retrieval capabilities and rely solely on the LLM for summarization.
説明
Incorrect: Retrieval capabilities enhance the accuracy and relevance of summaries.
正解
Configure Foundation Model API access, create embeddings for documents, build a vector store, and deploy the endpoint.
説明
Correct: This sequence ensures that document retrieval and summarization are integrated effectively with the LLM.
全体的な説明
Configuring APIs, embeddings, and vector stores ensures the LLM application handles summarization and retrieval seamlessly.
ドメイン
Assembling and Deploying Applications
問題18
未回答
A Generative AI Engineer must select an LLM for an FAQ retrieval system. The system must balance accuracy, cost efficiency, and scalability. Which criteria should guide the selection process?(Choose three)
正しい選択
Model size and architecture to control computational costs.
説明
Correct: Smaller, optimized models can reduce inference costs while maintaining scalability.
正しい選択
Latency metrics to ensure real-time responsiveness for user queries.
説明
Correct: Low latency ensures the system is responsive and user-friendly.
Token usage per query for cost tracking.
説明
Incorrect: Token usage impacts cost but does not directly reflect model accuracy or scalability.
正しい選択
Response perplexity to ensure fluent and natural outputs.
説明
Correct: Low perplexity indicates the model generates coherent and readable responses, enhancing user satisfaction.
Training dataset diversity for better generalization.
説明
Incorrect: Training data affects model generalization but does not directly influence deployment costs or scalability.
全体的な説明
Balancing latency, model size, and perplexity ensures the FAQ system is accurate, cost-effective, and scalable.
ドメイン
Evaluation and Monitoring
問題19
未回答
A Generative AI Engineer is tasked with selecting a chunking strategy for legal documents to optimize retrieval in a RAG system. The documents include lengthy paragraphs and footnotes. What strategy should they adopt?
正解
Divide the document into logical sections based on paragraphs, ensuring chunks remain within token limits.
説明
Correct: Logical chunking maintains coherence while staying within token constraints, improving retrieval quality.
Split the document into equal-sized chunks without considering content structure.
説明
Incorrect: Equal-sized chunks risk breaking meaningful sections, reducing relevance.
Overlap all chunks by 200 tokens.
説明
Incorrect: Overlapping creates redundancy without necessarily improving retrieval performance.
Process the entire document as a single chunk.
説明
Incorrect: Single chunks often exceed token limits, making them infeasible for processing.
全体的な説明
Logical chunking ensures that sections remain meaningful and fit within token limits, optimizing retrieval results.
ドメイン
Data Preparation
問題20
未回答
A Generative AI Engineer is tasked with controlling LLM costs for a RAG application deployed on Databricks. What strategies should they implement? (Choose two)
Rely on fine-tuning the largest model for all queries.
説明
Incorrect: Fine-tuning large models for all tasks is cost-prohibitive and inefficient.
Limit API calls by caching frequently retrieved outputs.
説明
Incorrect: Caching outputs reduces latency but does not significantly impact LLM inference costs.
正しい選択
Use smaller LLMs for non-complex queries while reserving larger models for critical tasks.
説明
Correct: Selecting appropriate model sizes based on query complexity optimizes cost-efficiency.
正しい選択
Optimize token usage to minimize input-output lengths for each query.
説明
Correct: Reducing token usage directly lowers inference costs.
Increase context length for more comprehensive outputs.
説明
Incorrect: Longer context increases token usage, raising costs.
全体的な説明
Optimizing token usage and selecting models based on task complexity are effective strategies for managing LLM costs in Databricks.
ドメイン
Evaluation and Monitoring
問題21
未回答
A Generative AI Engineer must select chain components for a system that answers user queries about company policies and cites specific policy sections. What components are essential?
A classification model to categorize user queries by policy topic.
説明
Incorrect: Classification does not address the need for citations or detailed answers.
正解
A retriever to fetch relevant policy sections and an LLM to generate responses with citations.
説明
Correct: Retrievers ensure relevant content is retrieved, and LLMs dynamically generate accurate answers with citations.
A decision tree for guiding users to policy answers.
説明
Incorrect: Decision trees are rigid and do not support dynamic queries or citations.
A summarization model to condense policy documents.
説明
Incorrect: Summarization lacks the specificity required for citations or query handling.
全体的な説明
Combining retrievers and LLMs ensures accurate query responses with properly cited policy references.
ドメイン
Design Applications
問題22
未回答
A Generative AI Engineer must deploy a Vector Search index for a knowledge base of scientific papers. The system must support real-time queries with low latency. What combination of tools and resources should they use? (Choose three)
正しい選択
FAISS for creating and querying the vector index.
説明
Correct: FAISS provides efficient indexing and querying capabilities, making it ideal for real-time Vector Search.
正しい選択
High-performance GPUs for low-latency computations.
説明
Correct: GPUs accelerate vector similarity calculations, enabling fast response times for real-time queries.
A summarization model trained on scientific datasets.
説明
Incorrect: While useful for downstream tasks, a summarizer is not required for the vector index itself.
正しい選択
Distributed databases to store raw documents.
説明
Correct: Distributed databases ensure scalable storage for large knowledge bases while separating raw data from indexed vectors.
Lightweight CPU infrastructure to reduce costs.
説明
Incorrect: CPUs are insufficient for handling computationally intensive vector search tasks.
全体的な説明
Building a Vector Search index requires FAISS for efficient indexing, GPUs for low-latency queries, and distributed databases for scalable document storage.
ドメイン
Assembling and Deploying Applications
問題23
未回答
How can metaprompts help in reducing private data exposure in an LLM application?
Metaprompts block all numerical outputs.
説明
Incorrect: Blocking numerical outputs is overly restrictive and not related to privacy protection.
Metaprompts adjust the temperature for less risky responses.
説明
Incorrect: Temperature adjustments do not directly address private data exposure.
Metaprompts reduce response length, minimizing information exposure.
説明
Incorrect: Reducing response length does not prevent sensitive information leakage.
正解
Metaprompts can instruct the model to avoid including specific types of sensitive information in its outputs.
説明
Correct: Metaprompts guide the model to recognize and avoid generating outputs containing private data.
全体的な説明
Metaprompts help guide LLMs to avoid exposing private data by explicitly defining rules or safeguards in the instructions.
ドメイン
Application Development
問題24
未回答
A Generative AI Engineer must evaluate the success of a summarization pipeline for legal documents. The generated summaries must be concise and include all critical legal points. Which metrics should the engineer prioritize?
Latency and perplexity to track speed and fluency.
説明
Incorrect: Latency and perplexity do not directly evaluate content relevance or coverage.
正解
ROUGE and recall to measure content relevance and coverage.
説明
Correct: ROUGE assesses overlap with reference summaries, while recall ensures critical points are included.
BLEU and response length to measure accuracy and conciseness.
説明
Incorrect: BLEU measures similarity, but response length alone does not ensure content relevance.
Precision and retrieval accuracy to optimize inputs.
説明
Incorrect: Precision and retrieval metrics do not evaluate summary quality.
全体的な説明
ROUGE and recall ensure the summaries are concise, relevant, and comprehensive, meeting the requirements for legal document analysis.
ドメイン
Evaluation and Monitoring
問題25
未回答
A Generative AI Engineer must deploy a Foundation Model API for a conversational agent. The API usage is expected to grow rapidly. How should the engineer optimize for scalability?
Implement rate limits without scaling the infrastructure.
説明
Incorrect: Rate limits control usage but do not improve scalability.
Reduce the context length to save computational resources.
説明
Incorrect: Reducing context length may degrade response quality without addressing scalability.
Use a fixed number of compute resources to handle peak demand.
説明
Incorrect: Fixed resources may lead to underutilization or system overload during varying workloads.
正解
Implement horizontal scaling with autoscaling policies to handle variable workloads.
説明
Correct: Horizontal scaling with autoscaling policies ensures the system can adapt to growing demand efficiently.
全体的な説明
Horizontal scaling ensures the infrastructure adapts to changing workloads while maintaining high performance and reliability.
ドメイン
Assembling and Deploying Applications
問題26
未回答
A Generative AI Engineer must preprocess legal contracts before using them in a retrieval system. What step is most critical for improving retrieval accuracy?
正解
Chunk the contracts by logical sections, such as clauses or exhibits, and ensure chunks fit within the model’s token limits.
説明
Correct: Logical chunking preserves the document’s structure and ensures chunks are processable by the model.
Split the contracts into equal-sized chunks.
説明
Incorrect: Arbitrary splitting may disrupt meaningful sections and reduce retrieval quality.
Randomly remove redundant sections.
説明
Incorrect: Random removal risks excluding critical information.
Retain the entire contract as a single document.
説明
Incorrect: Large documents often exceed token limits and hinder efficient processing.
全体的な説明
Chunking legal contracts by logical sections ensures the retrieval system maintains context and provides accurate responses.
ドメイン
Application Development
問題27
未回答
A Generative AI Engineer must deploy an LLM application using Foundation Model APIs for real-time customer support. What considerations are necessary for optimal serving?
Skip API rate limits to allow unrestricted queries.
説明
Incorrect: Unrestricted queries can overwhelm the system, reducing reliability.
正解
Ensure sufficient compute resources, manage API rate limits, and monitor latency.
説明
Correct: These considerations ensure efficient, reliable, and responsive application performance.
Reduce compute resources to minimize costs.
説明
Incorrect: Reducing resources may degrade performance and response times.
Use Foundation Model APIs without monitoring latency or compute resources.
説明
Incorrect: Neglecting resource management leads to potential performance bottlenecks.
全体的な説明
Managing compute resources, API rate limits, and latency ensures optimal performance and user satisfaction in real-time applications.
ドメイン
Assembling and Deploying Applications
問題28
未回答
A Generative AI Engineer is building a QA system to assist medical professionals. The system must retrieve answers from medical guidelines and provide explanations. What chain components are required?
正解
A retriever to fetch guideline sections and an LLM to generate responses with explanations.
説明
Correct: Retrievers ensure relevant content retrieval, and LLMs create contextually accurate explanations.
A summarization model to condense guideline content.
説明
Incorrect: Summarization lacks the ability to answer specific questions.
A rule-based system to map queries to guideline sections.
説明
Incorrect: Rule-based systems are too rigid for dynamic queries.
A classification model to categorize queries by topic.
説明
Incorrect: Classification does not provide detailed responses or explanations.
全体的な説明
Using retrievers and LLMs ensures that the system dynamically retrieves and explains answers from medical guidelines.
ドメイン
Design Applications
問題29
未回答
A Generative AI Engineer is tasked with choosing an embedding model for a search engine handling long research papers. What factor is most critical? (Choose two)
Cost of inference.
説明
Incorrect: While important, cost does not directly affect model performance for long documents.
正しい選択
Context length supported by the embedding model.
説明
Correct: Long context lengths allow better representation of lengthy research papers.
正しい選択
Semantic similarity accuracy.
説明
Correct: High accuracy ensures that search queries retrieve the most relevant results.
Training dataset size.
説明
Incorrect: Dataset size is secondary to task-specific evaluation metrics.
Token diversity.
説明
Incorrect: Token diversity is not a metric relevant to embeddings.
全体的な説明
Long context support and high semantic similarity accuracy ensure effective embeddings for handling long research papers.
ドメイン
Application Development
問題30
未回答
A Generative AI Engineer is deploying a model that requires both embeddings and an LLM for document summarization. The model must handle high throughput for real-time queries. What infrastructure should they prioritize?
Skip embedding storage and rely only on the LLM for summarization.
説明
Incorrect: Embedding storage is crucial for semantic understanding and efficient retrieval.
Use a local server with CPU-only resources to save costs.
説明
Incorrect: CPU-only resources cannot handle high-throughput requirements effectively.
正解
Deploy on a distributed cloud infrastructure with GPU acceleration for model inference and storage optimization for embeddings.
説明
Correct: Distributed cloud infrastructure ensures scalability, while GPU acceleration improves inference speed and storage optimization enhances retrieval performance.
Deploy the model on a single cloud instance with minimal scaling capabilities.
説明
Incorrect: Minimal scaling is insufficient for real-time, high-throughput demands.
全体的な説明
Distributed cloud infrastructure with GPUs and optimized storage ensures scalability and performance for real-time summarization tasks.
ドメイン
Assembling and Deploying Applications
問題31
未回答
A Generative AI Engineer is selecting source documents for training a RAG system that answers healthcare questions. What criteria should guide document selection?
Select documents with diverse but non-specialized medical content.
説明
Incorrect: General content may lack the specificity required for healthcare applications.
Prioritize lengthy documents to maximize training data size.
説明
Incorrect: Length alone does not ensure relevance or quality.
Include all publicly available medical texts regardless of relevance.
説明
Incorrect: Irrelevant texts dilute the system’s accuracy.
正解
Select documents with high-quality medical information relevant to the target domain.
説明
Correct: High-quality, relevant documents ensure reliable and accurate system responses.
全体的な説明
Choosing high-quality, relevant medical documents ensures the RAG system retrieves accurate answers aligned with healthcare queries.
ドメイン
Data Preparation
問題32
未回答
A Generative AI Engineer must augment prompts dynamically based on user input. The user queries a customer support chatbot about “late delivery.” What is the best way to handle this?
Rely only on pre-written responses.
説明
Incorrect: Pre-written responses cannot dynamically adapt to specific user inputs.
Use a generic prompt like “Explain the issue.”
説明
Incorrect: A generic prompt lacks context, reducing response accuracy.
Exclude all contextual information to keep the prompt concise.
説明
Incorrect: Excluding context risks generating irrelevant or unhelpful responses.
正解
Include relevant context such as the order date, ID, and expected delivery time in the prompt.
説明
Correct: Adding key details helps the LLM generate a precise and relevant response.
全体的な説明
Augmenting prompts with relevant context ensures the LLM generates precise and user-specific responses.
ドメイン
Application Development
問題33
未回答
A Generative AI Engineer is creating a pre- and post-processing pipeline for a PyFunc model. Why is this approach useful?
It minimizes API costs by batching inputs.
説明
Incorrect: API cost optimization is unrelated to pre- and post-processing logic.
正解
It allows data to be transformed before and after model inference, ensuring compatibility and optimized outputs.
説明
Correct: Pre- and post-processing pipelines handle input normalization and output formatting, enhancing system performance.
It reduces the need for retraining the model.
説明
Incorrect: Pre- and post-processing pipelines do not replace retraining for model improvements.
It automates hyperparameter tuning for the model.
説明
Incorrect: Hyperparameter tuning requires separate optimization processes.
全体的な説明
Pre- and post-processing pipelines streamline workflows by transforming inputs and outputs, improving compatibility and system efficiency.
ドメイン
Assembling and Deploying Applications
問題34
未回答
A Generative AI Engineer needs to design a prompt for a document summarization system that highlights key points and outputs summaries in bullet points. What should the prompt include?
Highlight the main ideas of the document in a concise paragraph.
説明
Incorrect: This instruction may lead to paragraph-style summaries rather than bullet points.
Create an abstract of the document for a general overview.
説明
Incorrect: Abstracts are not specific to key points or bullet formatting.
Generate a summary of the document.
説明
Incorrect: This instruction lacks specificity regarding the bullet point format.
正解
Summarize the document in bullet points highlighting the key points.
説明
Correct: This prompt explicitly defines the output format and key elements to include, ensuring precise results.
全体的な説明
Explicit prompts defining both the format (bullet points) and content requirements ensure that the summarization system outputs aligned results.
ドメイン
Design Applications
問題35
未回答
A Generative AI Engineer is deploying a pyfunc model that predicts loan approvals. The model requires pre- and post-processing. What steps should the engineer take to ensure usability?
Use only preprocessing without any post-processing.
説明
Incorrect: Post-processing is essential for making model outputs interpretable.
Pass raw inputs directly to the model for faster predictions.
説明
Incorrect: Preprocessing ensures data quality and improves prediction reliability.
Skip post-processing and return raw model scores.
説明
Incorrect: Raw scores may confuse users and lack actionable insights.
正解
Preprocess inputs (e.g., clean and standardize data), run predictions through the pyfunc model, and format outputs (e.g., "Approved" or "Denied") for user clarity.
説明
Correct: Pre- and post-processing ensure the model processes inputs effectively and presents outputs in a user-friendly format.
全体的な説明
A workflow combining preprocessing, pyfunc predictions, and post-processing ensures accurate and user-friendly loan approval results.
ドメイン
Assembling and Deploying Applications
問題36
未回答
A Generative AI Engineer is tasked with designing a pipeline to summarize legal documents accurately. How should they evaluate the effectiveness of the summarization model?
Focus solely on user feedback.
説明
Incorrect: User feedback is helpful but subjective and not sufficient for model evaluation.
正解
Use metrics such as ROUGE and BLEU scores to measure summarization quality.
説明
Correct: ROUGE and BLEU evaluate the accuracy and relevance of summaries compared to reference texts.
Measure response latency only.
説明
Incorrect: Latency does not directly indicate summarization quality.
Use token counts to measure the length of the summaries.
説明
Incorrect: Token counts do not evaluate the accuracy or relevance of generated summaries.
全体的な説明
ROUGE and BLEU are widely used metrics for evaluating the accuracy and quality of summarization models, ensuring reliable performance.
ドメイン
Application Development
問題37
未回答
What is the primary purpose of guardrails in Generative AI applications?
To reduce latency in model inference.
説明
Incorrect: Guardrails do not directly address performance optimization like latency.
To improve response diversity for creative tasks.
説明
Incorrect: Guardrails focus on safety and accuracy, not response diversity.
To limit model outputs to a fixed length.
説明
Incorrect: Guardrails are not primarily designed for length control.
正解
To ensure outputs are safe, accurate, and aligned with application requirements.
説明
Correct: Guardrails help mitigate risks such as hallucinations, toxic responses, and privacy breaches.
全体的な説明
Guardrails ensure that Generative AI applications produce outputs that are safe, ethical, and meet specific quality requirements.
ドメイン
Application Development
問題38
未回答
A Generative AI Engineer is creating an LLM-based application where documents for the retriever are chunked to 512 tokens each. The engineer prioritizes cost and latency over quality. Which configuration fulfills their need?
Context length 32768; smallest model is 14GB and embedding dimension 4096.
説明
Incorrect: This configuration is overly large and does not align with cost or latency priorities.
Context length 2048; smallest model is 11GB and embedding dimension 2560.
説明
Incorrect: Larger context length and embedding size increase latency and cost.
正解
Context length 512; smallest model is 0.13GB and embedding dimension 384.
説明
Correct: This matches the chunk size and uses the smallest model, minimizing both cost and latency.
Context length 514; smallest model is 0.44GB and embedding dimension 768.
説明
Incorrect: Context length of 514 exceeds the chunk size and adds unnecessary model complexity.
全体的な説明
A context length of 512 aligns perfectly with the application’s chunk size and reduces costs and latency due to the smaller model size.
ドメイン
Evaluation and Monitoring
問題39
未回答
A Generative AI Engineer is tasked with training a chatbot to summarize long technical manuals. Many manuals contain redundant examples that inflate the dataset size. What should the engineer prioritize during preprocessing?
Replace redundant examples with placeholders.
説明
Incorrect: Replacing content with placeholders does not add clarity and may confuse the model.
正解
Remove redundant examples while preserving unique, meaningful content.
説明
Correct: Removing redundancy reduces dataset size and ensures the model focuses on unique content, improving summary quality.
Retain all examples for completeness.
説明
Incorrect: Including redundant examples unnecessarily inflates the dataset without adding value.
Exclude entire manuals containing redundancy.
説明
Incorrect: Excluding entire manuals risks removing valuable content alongside redundancy.
全体的な説明
Eliminating redundant examples ensures concise, high-quality input, which improves summarization model training.
ドメイン
Data Preparation
問題40
未回答
A Generative AI Engineer must deploy a basic RAG application for a customer support system. The application requires embedding models for vector search, retrievers for document lookup, and an LLM for response generation. What are the steps to deploy this application?
Deploy the LLM first, then configure retrievers and embeddings post-deployment.
説明
Incorrect: LLM deployment must follow proper integration of embeddings and retrievers for effective responses.
Use an embedding model for storage and retrieval, skipping retrievers entirely.
説明
Incorrect: Retrievers are essential for precise document lookup in RAG systems.
Only configure the retriever and directly connect it to the LLM for responses.
説明
Incorrect: Retrievers alone cannot handle vector search or embeddings, limiting retrieval quality.
正解
Install dependencies, prepare embedding models, configure retrievers, and deploy an endpoint using model serving.
説明
Correct: This sequence ensures that all components, from embedding to deployment, are correctly configured and integrated.
全体的な説明
A proper sequence, including embedding, retrievers, and endpoint deployment, ensures a functional and optimized RAG application.
ドメイン
Assembling and Deploying Applications
問題41
未回答
A Generative AI Engineer is tasked with selecting an embedding model for a recommendation system. The system must process product descriptions and customer reviews. What factors are most critical for selecting the embedding model?
Tokenization efficiency to reduce computational costs.
説明
Incorrect: While important, tokenization does not directly affect semantic understanding.
Compatibility with pre-trained LLMs.
説明
Incorrect: Compatibility is not as critical as the embedding model’s ability to process relevant inputs.
Availability of public pre-trained embeddings.
説明
Incorrect: Pre-trained embeddings must also align with domain-specific requirements.
正解
Context length and semantic understanding of product descriptions and reviews.
説明
Correct: Embedding models with longer context lengths and strong semantic understanding perform better for complex inputs.
全体的な説明
Embedding models with long context lengths and robust semantic understanding improve the system’s ability to align reviews with product descriptions.
ドメイン
Application Development
問題42
未回答
A Generative AI Engineer is responsible for developing a chatbot to enable their company’s internal HelpDesk Call Center team to more quickly find related tickets and provide resolution. While creating the GenAI application work breakdown tasks for this project, they realize they need to start planning which data sources (either Unity Catalog volume or Delta table) they could choose for this application. They have collected several candidate data sources for consideration: call_rep_history: a Delta table with primary keys representative_id, call_id. This table is maintained to calculate representatives’ call resolution from fields call_duration and call_start_time. transcript Volume: a Unity Catalog Volume of all recordings as *.wav files, but also a text transcript as *.txt files. call_cust_history: a Delta table with primary keys customer_id, call_id. This table is maintained to calculate how much internal customers use the HelpDesk to make sure that the charge-back model is consistent with actual service use. call_detail: a Delta table that includes a snapshot of all call details updated hourly. It includes root_cause and resolution fields, but those fields may be empty for calls that are still active. maintenance_schedule: a Delta table that includes a listing of both HelpDesk application outages as well as planned upcoming maintenance downtimes. They need sources that could add context to best identify ticket root cause and resolution. Which TWO sources do that? (Choose two.)
正しい選択
call_detail
説明
Correct: This table contains root_cause and resolution fields, making it a primary source for identifying ticket resolutions.
call_rep_history
説明
Incorrect: This table tracks representative performance metrics and does not provide resolution context.
call_cust_history
説明
Incorrect: Customer usage data focuses on tracking service usage but does not aid in identifying ticket root causes or resolutions.
maintenance_schedule
説明
Incorrect: While it tracks outages and planned downtimes, this information does not directly help identify specific ticket root causes or resolutions.
正しい選択
transcript Volume
説明
Correct: Text transcripts provide detailed and contextual insights into calls, helping to identify root causes and resolutions.
全体的な説明
Using call_detail for its structured fields (root_cause and resolution) and transcript Volume for detailed call context ensures the chatbot has comprehensive data to resolve tickets efficiently.
ドメイン
Governance
問題43
未回答
A Generative AI Engineer is tasked with developing a multi-stage reasoning pipeline for a customer support chatbot. The chatbot must identify intent, retrieve relevant documents, and generate detailed responses. What is a critical design principle for the pipeline?
Minimize the number of tools to reduce complexity.
説明
Incorrect: Reducing tools can limit the chatbot's ability to handle complex tasks requiring multi-stage reasoning.
Use rule-based systems for document retrieval.
説明
Incorrect: Rule-based systems are rigid and may not adapt to diverse queries effectively.
正解
Ensure tools are interoperable and can share data seamlessly between stages.
説明
Correct: Interoperable tools enable smooth transitions between intent identification, retrieval, and response generation stages, avoiding bottlenecks.
Focus on generating responses without retrieval.
説明
Incorrect: Retrieval is essential for grounding responses in relevant documents.
全体的な説明
Multi-stage reasoning systems rely on interoperable tools to enable efficient workflows, ensuring smooth transitions between tasks like intent identification, retrieval, and response generation.
ドメイン
Design Applications
問題44
未回答
A Generative AI Engineer must select a model from a marketplace for generating personalized financial advice. The system must prioritize accuracy and compliance. What attributes of the model should guide the selection? (Choose two)
Select a model with low perplexity to ensure fluency.
説明
Incorrect: Fluency is secondary to domain accuracy and compliance.
正しい選択
Evaluate the model’s metadata for training domain and fine-tuning details.
説明
Correct: Metadata provides insights into the model’s suitability for financial tasks.
正しい選択
Prioritize models with high accuracy on financial datasets.
説明
Correct: High accuracy ensures reliability and alignment with user needs.
Choose a model with low latency for real-time responses.
説明
Incorrect: Latency is less critical for compliance and accuracy.
Focus on models with larger parameter counts for better performance.
説明
Incorrect: Parameter count alone does not guarantee domain relevance or accuracy.
全体的な説明
Reviewing metadata and prioritizing domain-specific accuracy ensures the selected model meets the requirements for personalized financial advice.
ドメイン
Application Development
問題45
未回答
A Generative AI Engineer is tasked with summarizing user reviews for a product. The summary must highlight common themes and sentiment. What is the most suitable model task?
Named entity recognition
説明
Incorrect: NER identifies entities like names or locations but does not summarize reviews.
Text classification
説明
Incorrect: Classification assigns reviews to categories but does not summarize their content.
正解
Text summarization
説明
Correct: Summarization condenses user reviews into a concise overview, capturing common themes and sentiment.
Sentiment analysis
説明
Incorrect: Sentiment analysis identifies emotional tone but does not summarize common themes.
全体的な説明
Text summarization effectively captures the essence of user reviews, providing concise insights into themes and sentiment.
ドメイン
Design Applications
