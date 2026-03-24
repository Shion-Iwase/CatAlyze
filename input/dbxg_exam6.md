問題1
未回答
A Generative AI Engineer is building a chatbot for troubleshooting software issues. What guardrail strategy can prevent the chatbot from suggesting harmful actions?
Reduce the length of chatbot responses.
説明
Incorrect: Shorter responses do not inherently reduce harmful content.
正解
Use predefined filters to exclude unsafe or potentially harmful responses.
説明
Correct: Guardrails like predefined filters help ensure the chatbot avoids generating unsafe suggestions.
Allow the chatbot to generate unrestricted responses.
説明
Incorrect: Unrestricted responses increase the risk of generating harmful suggestions.
Prioritize response speed over accuracy.
説明
Incorrect: Speed does not ensure safety or relevance.
全体的な説明
Predefined filters act as guardrails, preventing unsafe suggestions and ensuring the chatbot remains reliable and safe to use.
ドメイン
Application Development
問題2
未回答
A Generative AI Engineer must design a chain for a chatbot that uses LangChain to process user inputs, retrieve relevant data, and generate conversational responses. What should the chain include? (Choose two)
Pretrained embeddings without retrievers.
説明
Incorrect: Embeddings alone cannot retrieve or process user inputs dynamically.
Hardcoded templates for fixed responses.
説明
Incorrect: Hardcoded templates lack flexibility for diverse user queries.
正しい選択
A prompt template for structuring user inputs, a retriever for relevant data, and an LLM for generating responses.
説明
Correct: These components enable structured inputs, accurate retrieval, and dynamic response generation.
正しい選択
A classifier to identify user intents for retrieval.
説明
Correct: Classification improves retrieval by aligning user intents with data.
A summarization model to reduce response length.
説明
Incorrect: Summarization may remove critical details, reducing response quality.
全体的な説明
Combining prompt templates, retrievers, LLMs, and classifiers ensures a dynamic and context-aware chatbot chain using LangChain.
ドメイン
Assembling and Deploying Applications
問題3
未回答
A Generative AI Engineer is designing a RAG application that ingests legal documents from multiple public sources. What governance steps should be taken to ensure legal compliance with the data sources?
Skip verifying licenses for non-commercial applications.
説明
Incorrect: Legal compliance is critical regardless of the application’s commercial status.
Assume all public data can be used commercially without verification.
説明
Incorrect: Public availability does not equate to permissibility for commercial use.
Use the data without licensing verification but cite the sources in application outputs.
説明
Incorrect: Citation alone does not address the legal risks of unverified data usage.
正解
Verify the licensing terms of each data source and ensure they permit commercial use.
説明
Correct: Ensuring proper licensing mitigates legal risks related to unauthorized use of public data.
全体的な説明
Verifying licensing terms ensures the application complies with legal requirements, avoiding potential liabilities.
ドメイン
Governance
問題4
未回答
A Generative AI Engineer is designing a QA system for a technical support platform. The system must include safeguards to avoid generating inaccurate troubleshooting steps. What is the most effective solution?
Train the LLM on technical manuals and support guides.
説明
Incorrect: Training improves domain knowledge but does not address the risk of inaccuracies.
Use a summarization model to condense troubleshooting guides.
説明
Incorrect: Summarization does not prevent inaccuracies in generated outputs.
Reduce the model’s temperature to limit randomness.
説明
Incorrect: Temperature adjustments reduce variability but do not inherently improve accuracy.
正解
Implement LLM guardrails, such as verification steps and retrieval-based augmentation.
説明
Correct: Guardrails like retrieval-based augmentation ensure the system generates accurate and verifiable troubleshooting steps.
全体的な説明
Implementing guardrails like verification and retrieval ensures accurate, contextually relevant troubleshooting responses.
ドメイン
Application Development
問題5
未回答
A Generative AI Engineer is tasked with creating a pipeline to store structured text extracted from scanned receipts in Delta Lake tables. What sequence ensures consistency and efficiency?
Write raw extracted text into Delta Lake without defining a schema.
説明
Incorrect: Writing unstructured text without a schema risks inconsistencies and poor data usability.
正解
Define a schema, apply OCR to extract text, and write structured data to Delta Lake using Spark.
説明
Correct: Defining a schema ensures consistency, OCR allows text extraction, and Spark enables scalable data writing.
Use regex on the raw text and write results directly to Delta Lake.
説明
Incorrect: Regex alone cannot handle all complexities of structured text like receipts.
Manually clean and load data into Delta Lake tables.
説明
Incorrect: Manual steps are time-intensive and inefficient for large-scale pipelines.
全体的な説明
A structured pipeline using a schema, OCR, and Spark ensures reliable, scalable, and efficient data ingestion into Delta Lake tables.
ドメイン
Data Preparation
問題6
未回答
A Generative AI Engineer is deploying a RAG application for legal document analysis. The system must support multi-user access with restricted permissions. What access control measures should they implement?
正解
Use role-based access control (RBAC) to assign permissions based on user roles.
説明
Correct: RBAC provides granular control over user access, ensuring secure multi-user functionality.
Deploy the application without access controls to simplify development.
説明
Incorrect: Access controls are essential for security and compliance in multi-user systems.
Rely on network-level restrictions without authentication.
説明
Incorrect: Network restrictions alone do not provide robust access control.
Use a shared access key for all users.
説明
Incorrect: Shared keys compromise security and lack individualized access tracking.
全体的な説明
RBAC ensures secure and controlled multi-user access, meeting the requirements for legal document analysis systems.
ドメイン
Assembling and Deploying Applications
問題7
未回答
A Generative AI Engineer must prepare text from a series of fragmented documents and write the chunked text into Delta Lake tables using Unity Catalog. What is the correct sequence of operations?
Define the schema after writing the data into Delta Lake tables.
説明
Incorrect: Schemas must be defined before writing data for proper structuring.
正解
Chunk the text → Define a Delta Lake schema → Batch the chunks → Write them into Delta Lake tables.
説明
Correct: This sequence ensures data is chunked, structured, and efficiently written into Delta Lake tables.
Use a summarization model to preprocess the text before storage.
説明
Incorrect: Summarization condenses text but does not address chunking or Delta Lake requirements.
Write all text as a single batch into Delta Lake tables without chunking.
説明
Incorrect: Unstructured input leads to inefficient storage and processing.
全体的な説明
This workflow ensures efficient data preparation, chunking, and storage in Delta Lake tables for Unity Catalog.
ドメイン
Data Preparation
問題8
未回答
A Generative AI Engineer is tasked with deploying an LLM in a RAG application on Databricks. The team needs to monitor both system performance and cost. Which combination of tools and techniques should they use? (Choose three)
正しい選択
MLflow to track retrieval metrics like precision and recall.
説明
Correct: MLflow logs retrieval performance, enabling the team to monitor and improve relevance.
正しい選択
Inference logging to track token usage and response latency for each query.
説明
Correct: Inference logging provides insights into costs and system responsiveness, helping balance performance and expenses.
正しい選択
GPU utilization monitoring to optimize hardware performance.
説明
Correct: Monitoring GPU usage ensures that resources are used efficiently, reducing unnecessary costs.
Increasing context length to reduce token usage.
説明
Incorrect: Longer context lengths may increase token usage, raising costs.
Fine-tuning the LLM on Databricks.
説明
Incorrect: Fine-tuning enhances accuracy but does not directly monitor performance or cost.
全体的な説明
Combining inference logging, MLflow, and GPU monitoring provides a comprehensive view of system performance and cost, enabling optimization.
ドメイン
Evaluation and Monitoring
問題9
未回答
A Generative AI Engineer is building a RAG system to retrieve answers from legal documents. The documents include extraneous information like case timestamps and redundant metadata. What preprocessing strategy should they implement?
Exclude documents with metadata entirely.
説明
Incorrect: Discarding all documents with metadata risks losing valuable legal content.
Remove all metadata from the documents during preprocessing.
説明
Incorrect: While removing metadata is helpful, some metadata, like case titles or critical dates, might still be relevant.
Process all documents without filtering metadata to retain completeness.
説明
Incorrect: Retaining all metadata reduces retrieval precision and may lead to poor-quality outputs.
正解
Filter out irrelevant metadata while retaining case-specific information like case names and citations.
説明
Correct: Filtering ensures only relevant information is retained, improving the retrieval quality without losing context.
全体的な説明
Removing only extraneous metadata ensures the RAG system focuses on meaningful content, improving both retrieval and generated answers.
ドメイン
Data Preparation
問題10
未回答
A Generative AI Engineer must deploy a multi-user RAG application that analyzes scientific research articles. The application should support concurrent queries while protecting sensitive data. What measures should they implement? (Choose two)
正しい選択
Use role-based access control (RBAC) to manage user permissions.
説明
Correct: RBAC ensures secure, role-specific access to application features.
Skip concurrency testing and deploy with default settings.
説明
Incorrect: Concurrency testing ensures reliable performance under load.
正しい選択
Encrypt data at rest and in transit to protect sensitive content.
説明
Correct: Encryption prevents unauthorized access to sensitive data during storage and communication.
Use public vector stores to simplify deployment.
説明
Incorrect: Public vector stores may compromise data privacy and security.
Use shared access keys for user authentication.
説明
Incorrect: Shared keys are less secure and do not provide individualized access control.
全体的な説明
RBAC and encryption ensure secure and compliant multi-user access to sensitive data in RAG applications.
ドメイン
Assembling and Deploying Applications
問題11
未回答
A Generative AI Engineer must filter a dataset of emails for a RAG application that extracts customer complaints. Many emails contain greetings, sign-offs, and irrelevant information. What is the best preprocessing step?
正解
Remove standard greetings and sign-offs during preprocessing.
説明
Correct: Removing irrelevant text ensures that the system focuses on meaningful content, such as complaints or queries.
Exclude emails shorter than 50 words.
説明
Incorrect: Filtering by length may remove valid complaints that are concise.
Retain all text to preserve context.
説明
Incorrect: Retaining irrelevant text reduces the system’s efficiency and retrieval quality.
Group emails based on their similarity score before filtering.
説明
Incorrect: Clustering does not address the removal of irrelevant sections like greetings or sign-offs.
全体的な説明
Filtering out greetings and sign-offs ensures the dataset focuses on meaningful text, improving RAG system efficiency and response quality.
ドメイン
Data Preparation
問題12
未回答
A Generative AI Engineer is tasked with creating a multilingual chatbot for e-commerce. What factor should they prioritize when selecting an LLM?
Model size.
説明
Incorrect: Larger models may not always perform better on multilingual tasks.
Latency.
説明
Incorrect: While important, latency alone does not address multilingual capability.
正解
Multilingual performance benchmarks.
説明
Correct: Multilingual benchmarks ensure the model handles diverse languages effectively for a global audience.
Token length support.
説明
Incorrect: Token length is secondary for short, conversational interactions.
全体的な説明
Prioritizing multilingual benchmarks ensures the LLM can handle a wide range of languages effectively for global e-commerce scenarios.
ドメイン
Application Development
問題13
未回答
What is the primary benefit of registering a model’s signature when deploying an endpoint?
It enables real-time logging of model performance.
説明
Incorrect: Logging is separate from the function of model signatures.
It reduces latency during inference.
説明
Incorrect: Signatures ensure compatibility but do not impact latency directly.
正解
It ensures that the model receives inputs and returns outputs in the correct format.
説明
Correct: Model signatures define the expected input and output structure, ensuring compatibility during inference.
It increases model training efficiency.
説明
Incorrect: Model signatures are unrelated to training processes.
全体的な説明
Model signatures define input and output formats, ensuring that the model operates correctly during deployment and inference.
ドメイン
Assembling and Deploying Applications
問題14
未回答
A Generative AI Engineer is tasked with improving the quality of a RAG system by addressing inflammatory outputs in its responses. What is the most effective action to mitigate offensive outputs?
正解
Curate upstream data through manual review before ingestion.
説明
Correct: Curating upstream data ensures that the training and retrieval sources are free of problematic content.
Restrict access to the data sources to a limited number of users.
説明
Incorrect: Limiting access does not directly prevent offensive outputs.
Inform the user of the expected RAG behavior.
説明
Incorrect: Informing users sets expectations but does not mitigate offensive outputs.
Increase the frequency of upstream data updates.
説明
Incorrect: More frequent updates may not address the quality of the data itself.
全体的な説明
Properly curated data is essential for mitigating offensive outputs and improving RAG system quality.
ドメイン
Governance
問題15
未回答
A Generative AI Engineer is building a pipeline for multi-turn dialogue generation in a customer support chatbot. Which approach minimizes errors over multiple turns?
Use random sampling to increase diversity in responses.
説明
Incorrect: Random sampling risks incoherence and reduces conversational consistency.
Reset the context after every turn.
説明
Incorrect: Resetting context leads to disjointed conversations and user frustration.
Limit dialogue length to a fixed number of turns.
説明
Incorrect: Limiting dialogue length may prematurely end relevant conversations.
正解
Use memory or state tracking to retain user context across turns.
説明
Correct: Memory ensures the chatbot retains relevant context, reducing errors and improving coherence.
全体的な説明
State tracking ensures the chatbot maintains continuity and coherence throughout multi-turn interactions.
ドメイン
Application Development
問題16
未回答
When designing a multi-turn chatbot, why is it important to track conversation state across turns?
To reduce response length by limiting context size.
説明
Incorrect: State tracking does not inherently reduce response length.
To prioritize speed over context.
説明
Incorrect: Speed should not compromise the accuracy or coherence of responses.
To increase randomness in responses.
説明
Incorrect: Randomness does not contribute to coherence or relevance.
正解
To ensure context is preserved, leading to coherent and relevant responses.
説明
Correct: State tracking allows the chatbot to retain key information from previous turns, improving dialogue quality.
全体的な説明
Tracking state ensures the chatbot generates contextually aware responses, improving user satisfaction and system effectiveness.
ドメイン
Application Development
問題17
未回答
A Generative AI Engineer needs to monitor the performance of a deployed LLM in production. What key metrics should they prioritize?
正解
Latency, throughput, and error rate.
説明
Correct: These metrics ensure the system's responsiveness, capacity, and reliability in production.
Accuracy and F1 score.
説明
Incorrect: These are task-specific evaluation metrics, not general deployment monitoring metrics.
BLEU and perplexity.
説明
Incorrect: These metrics focus on language quality and training performance, not operational monitoring.
Token usage and input-output length ratios.
説明
Incorrect: While useful for cost analysis, these metrics do not monitor deployment performance directly.
全体的な説明
Latency, throughput, and error rate provide critical insights into the operational performance of a deployed LLM.
ドメイン
Evaluation and Monitoring
問題18
未回答
A Generative AI Engineer needs to design a prompt for an LLM to provide personalized fitness advice. The advice should include a recommended workout routine, calorie target, and hydration tips. What is the most effective prompt?
Generate fitness advice based on user data.
説明
This prompt is too vague and does not provide clear instructions on how the fitness advice should be personalized. It lacks specificity in terms of the workout routine, calorie target, and hydration tips, which are essential components of effective personalized fitness advice.
正解
Provide personalized fitness advice, including a workout routine, daily calorie target, and hydration tips, based on user inputs.
説明
This prompt clearly outlines the specific requirements for the personalized fitness advice, including a workout routine, daily calorie target, and hydration tips based on user inputs. It ensures that the LLM understands the need for personalized recommendations tailored to individual user needs.
Summarize the user’s fitness goals into actionable steps.
説明
While summarizing the user's fitness goals into actionable steps is important, this prompt does not explicitly mention the need for a workout routine, daily calorie target, and hydration tips. It may not provide the LLM with enough information to generate comprehensive personalized fitness advice.
Explain general fitness principles to the user.
説明
Explaining general fitness principles to the user is not the same as providing personalized fitness advice that includes a workout routine, daily calorie target, and hydration tips. This prompt does not address the specific requirements for personalized recommendations and may result in generic advice that does not meet the user's individual needs.
全体的な説明
Explicit prompts detailing required fields ensure the LLM generates personalized, comprehensive fitness advice.
ドメイン
Design Applications
問題19
未回答
A Generative AI Engineer is tasked with designing a multi-agent system to automate customer queries about order statuses, delivery times, and refunds. Which tools are required to expose agent functions effectively?
Apply embeddings to represent order details semantically.
説明
Incorrect: Embeddings assist retrieval but do not handle function exposure.
Train a rule-based system to handle each type of query.
説明
Incorrect: Rule-based systems lack the flexibility needed for multi-agent tasks.
Use a summarization model to condense customer queries.
説明
Incorrect: Summarization does not address agent capability exposure.
正解
Build a prompt template that specifies agent capabilities and provides examples for each function.
説明
Correct: Clear prompt templates ensure the model accurately exposes and uses agent functions.
全体的な説明
Prompt templates provide clear instructions, ensuring the system effectively exposes and utilizes agent functions.
ドメイン
Application Development
問題20
未回答
A Generative AI Engineer must deploy a Generative AI application that performs real-time language translation. Which factor is most critical for selecting the LLM?
Multilingual training data only.
説明
Incorrect: While helpful, training data alone does not guarantee real-time performance or accuracy.
High token limits.
説明
Incorrect: Token limits are useful for long documents but are not the primary consideration for translation tasks.
Large model size.
説明
Incorrect: Larger models may increase latency, reducing suitability for real-time applications.
正解
Low latency and high translation accuracy.
説明
Correct: Low latency ensures real-time responses, and high accuracy ensures translation quality.
全体的な説明
Prioritizing low latency and accuracy ensures the LLM delivers high-quality translations in real-time, suitable for this application.
ドメイン
Application Development
問題21
未回答
A Generative AI Engineer is tasked with designing a pipeline to generate personalized travel itineraries based on user preferences. The system must consider budget, preferred destinations, and activity types. What is the best approach? (Choose two)
Use a rule-based system to match users with predefined itineraries.
説明
Incorrect: Rule-based systems lack the flexibility needed for personalization.
Use a classification model to categorize user preferences by travel type.
説明
Incorrect: Categorization does not generate full itineraries.
Use a summarization model to condense user inputs into concise descriptions.
説明
Incorrect: Summarization does not create detailed plans.
正しい選択
Use an embedding model to represent user preferences and destinations contextually.
説明
Correct: Embeddings capture the relationship between user preferences and available options.
正しい選択
Use an LLM to generate complete itineraries tailored to user inputs.
説明
Correct: LLMs dynamically create personalized travel plans based on contextual information.
全体的な説明
Combining embeddings and LLMs ensures dynamic and contextually relevant travel itineraries tailored to user needs.
ドメイン
Design Applications
問題22
未回答
A team is deploying a RAG application to assist in legal document review. The application frequently retrieves irrelevant documents despite using embeddings. What adjustment should the engineer prioritize to improve document retrieval accuracy?
Add pre-trained classification models for better retrieval.
説明
Incorrect: Classification models do not improve semantic similarity in retrieval tasks.
Increase the chunk size of documents to include more context.
説明
Incorrect: Larger chunks may dilute relevance by including unrelated sections.
Implement random sampling to generate diverse retrieval results.
説明
Incorrect: Random sampling increases the likelihood of retrieving irrelevant documents.
正解
Use a retriever optimized for semantic similarity and train the embedding model on domain-specific data.
説明
Correct: An optimized retriever and domain-specific embeddings align document retrieval with the specialized language and structure of legal texts.
全体的な説明
Domain-specific embeddings and an optimized retriever improve retrieval accuracy, ensuring relevant legal documents are surfaced efficiently.
ドメイン
Assembling and Deploying Applications
問題23
未回答
A retrieval-based AI system retrieves too many irrelevant documents. What preprocessing step should an engineer prioritize?
Randomly remove some documents to reduce system load.
説明
Incorrect: Random removal risks discarding useful information.
Focus on documents with fewer tokens.
説明
Incorrect: Document length does not guarantee relevance.
正解
Filter documents based on relevance metrics or keywords before passing them to the LLM.
説明
Correct: Filtering ensures the system processes only high-quality, relevant content, improving response accuracy.
Increase the document chunk size to include more context.
説明
Incorrect: Larger chunks may introduce noise and reduce relevance.
全体的な説明
Filtering irrelevant documents ensures the retrieval system focuses on high-quality inputs, improving downstream AI system performance.
ドメイン
Application Development
問題24
未回答
A Generative AI Engineer is tasked with designing a multi-user application where different teams access the same LLM. How can the engineer ensure appropriate access controls?
正解
Assign role-based permissions that control access to specific functionalities of the application.
説明
Correct: Role-based permissions ensure that each user or team can access only the parts of the application relevant to their role, enhancing security.
Implement temperature settings for user-specific queries.
説明
Incorrect: Temperature settings affect randomness, not access control.
Enable all users to access the full application.
説明
Incorrect: Universal access increases the risk of data exposure and misuse.
Use encryption to restrict unauthorized actions.
説明
Incorrect: Encryption protects data at rest or in transit but does not manage access permissions.
全体的な説明
Role-based permissions provide robust access controls, ensuring that users interact with only the parts of the application appropriate to their needs.
ドメイン
Governance
問題25
未回答
A Generative AI Engineer is tasked with creating an AI pipeline to recommend movies based on user preferences. The recommendations must consider genres, user watch history, and ratings. How should the pipeline be structured?
Use a summarization model to highlight key points from user preferences.
説明
Incorrect: Summarization is insufficient for dynamic recommendation tasks.
正解
Use a retriever for user watch history and an LLM to generate personalized recommendations.
説明
Correct: Retrievers access relevant data, and LLMs dynamically generate tailored outputs.
Use a classification model to predict user ratings for movies.
説明
Incorrect: Classification does not generate personalized recommendations.
Use a rule-based system to match users with movies.
説明
Incorrect: Rule-based systems lack flexibility for diverse preferences.
全体的な説明
A combination of retrievers and LLMs enables dynamic, context-aware movie recommendations based on user inputs.
ドメイン
Design Applications
問題26
未回答
A Generative AI Engineer is building an AI tool for summarizing meeting transcripts. The tool must identify key points, action items, and decisions. What model task is best suited for this requirement?
Named entity recognition
説明
Incorrect: NER identifies entities like names or dates but does not summarize content.
正解
Text summarization
説明
Correct: Summarization condenses meeting transcripts into concise overviews, capturing key points and decisions.
Text classification
説明
Incorrect: Classification maps content to categories but cannot summarize meeting transcripts.
Sentiment analysis
説明
Incorrect: Sentiment analysis determines tone but does not identify meeting-specific outputs like decisions or action items.
全体的な説明
Summarization is the most suitable task for condensing meeting transcripts into concise, actionable outputs like key points, decisions, and action items.
ドメイン
Design Applications
問題27
未回答
A Generative AI Engineer is creating a chain in LangChain to answer customer questions about technical manuals. The system should handle lengthy manuals with a 4,096-token limit. How should the engineer structure the chain?
Skip retrievers and directly query the entire document.
説明
Incorrect: Direct queries are inefficient and less accurate without a retrieval mechanism.
Summarize manuals into short paragraphs before querying.
説明
Incorrect: Summarization may lose critical details required for precise answers.
正解
Use chunking to divide manuals into manageable sections, a retriever to fetch relevant chunks, and an LLM to generate answers.
説明
Correct: Chunking ensures token limits are respected, while retrievers and LLMs enable accurate responses.
Process entire manuals without chunking.
説明
Incorrect: Processing lengthy documents without chunking exceeds token limits, causing failures.
全体的な説明
Chunking, retrieval, and LLMs ensure token limits are respected and responses remain accurate and detailed.
ドメイン
Assembling and Deploying Applications
問題28
未回答
A Generative AI Engineer is designing a system to generate meeting summaries. Each summary should include participants, key decisions, and next steps. What prompt structure is most effective? (Choose two)
Use a generic prompt like Summarize the meeting.
説明
Incorrect: Generic prompts risk omitting key fields or providing incomplete summaries.
Focus on condensing the text into fewer words.
説明
Incorrect: Conciseness does not ensure inclusion of all required elements.
正しい選択
Add an example: Participants: Alice, Bob; Decisions: Approve budget; Next Steps: Schedule follow-up.
説明
Correct: Examples improve clarity and guide the model toward desired output structure.
Use a high-temperature setting to generate creative responses.
説明
Incorrect: High temperature may introduce irrelevant or unpredictable content.
正しい選択
Specify fields in the prompt: Provide a summary with participants, key decisions, and next steps.
説明
Correct: A detailed prompt ensures the LLM includes all required fields in the output.
全体的な説明
Specifying fields and providing examples ensure the LLM generates structured meeting summaries aligned with user requirements.
ドメイン
Application Development
問題29
未回答
A Generative AI Engineer must extract text from a batch of scanned legal documents in PNG format for training a RAG system. What is the best extraction tool for this task?
BeautifulSoup for parsing text.
説明
Incorrect: BeautifulSoup is used for HTML parsing, not OCR tasks.
pdfplumber for parsing text.
説明
Incorrect: pdfplumber is designed for PDFs, not image-based documents.
PyPDF2 for reading scanned images.
説明
Incorrect: PyPDF2 cannot handle image files like PNG.
正解
pytesseract for OCR-based text extraction from images.
説明
Correct: pytesseract is a robust OCR tool for extracting text from scanned images like PNG files.
全体的な説明
pytesseract enables accurate text extraction from image files, making it ideal for scanned legal documents in PNG format.
ドメイン
Data Preparation
問題30
未回答
A Generative AI Engineer must design a prompt template for an agent that performs database queries. The template should expose available functions such as create_record, update_record, and delete_record. What prompt structure is most effective?
Summarize the database schema and let the model infer functions.
説明
Incorrect: Summarizing the schema does not guarantee accurate function use.
Instruct the model to perform actions based on its training data.
説明
Incorrect: Relying on training data may result in outdated or incomplete outputs.
Use a generic instruction like "Manipulate database records as needed."
説明
Incorrect: Generic instructions lack clarity and can lead to unpredictable outputs.
正解
Provide a list of available functions (create_record, update_record, delete_record) and instructions for using them.
説明
Correct: Explicitly listing functions ensures the model understands the available actions and their usage.
全体的な説明
Providing a clear list of functions and instructions ensures the model correctly interacts with the database according to the requirements.
ドメイン
Application Development
問題31
未回答
A Generative AI Engineer must ensure that their deployed RAG application adheres to enterprise compliance standards for data governance. What steps are critical? (Choose two)
正しい選択
Use audit logs to track endpoint queries and responses.
説明
Correct: Audit logs provide visibility into system usage, supporting compliance and troubleshooting.
正しい選択
Register all models to Unity Catalog for centralized governance.
説明
Correct: Unity Catalog enables governance and compliance tracking for enterprise applications.
Skip metadata configuration for deployed models.
説明
Incorrect: Metadata configuration is critical for governance and tracking compliance standards.
Rely only on LLMs without embedding models.
説明
Incorrect: Embeddings and retrieval systems are essential for effective RAG applications.
Use public vector stores to reduce costs.
説明
Incorrect: Public vector stores may compromise data security and compliance.
全体的な説明
Registering models and using audit logs ensure governance and compliance for enterprise-grade RAG applications.
ドメイン
Assembling and Deploying Applications
問題32
未回答
A Generative AI Engineer must deploy a Retrieval-Augmented Generation (RAG) application for e-commerce customer support. What are the critical steps to set up this system?
1. Build a retriever → 2. Preprocess customer queries → 3. Deploy a summarizer → 4. Store embeddings in a database.
説明
Incorrect: Retrieval workflows require embeddings and indexing to be set up first.
1. Fine-tune the LLM on customer reviews → 2. Build a retriever → 3. Generate embeddings → 4. Deploy the system.
説明
Incorrect: Embeddings and indexing must precede retriever development for effective retrieval.
正解
1. Generate embeddings for product descriptions → 2. Store embeddings in a Vector Search index → 3. Integrate the retriever with an LLM → 4. Deploy an endpoint for the pipeline.
説明
Correct: This sequence ensures product descriptions are indexed for retrieval and combined with an LLM for dynamic customer query responses.
1. Train a classification model for product categories → 2. Deploy a retriever → 3. Summarize queries → 4. Store outputs.
説明
Incorrect: Classification models are not required for RAG systems focused on retrieval and generation.
全体的な説明
The correct sequence includes embedding generation, indexing, retrieval integration, and deploying an endpoint to serve customer queries dynamically.
ドメイン
Assembling and Deploying Applications
問題33
未回答
A Generative AI Engineer must deploy a Retrieval-Augmented Generation (RAG) application for technical documentation. What is the first step in the deployment process?
Configure the endpoint for inference.
説明
Incorrect: Endpoint configuration is a later deployment step.
Register the model in Unity Catalog.
説明
Incorrect: Registration comes later and is not foundational to the retrieval pipeline.
正解
Create vector embeddings for the technical documents.
説明
Correct: Embedding the documents is the first step to enable effective similarity-based retrieval.
Fine-tune the LLM for summarization.
説明
Incorrect: Fine-tuning enhances performance but does not precede document embedding.
全体的な説明
Creating embeddings is the foundation of the retrieval process, enabling RAG applications to search and retrieve relevant documents effectively.
ドメイン
Assembling and Deploying Applications
問題34
未回答
A Generative AI Engineer needs to generate responses to user queries that align with a company’s branding and tone. What approach ensures the LLM aligns with these requirements? (Choose two)
Adjust the model temperature to achieve desired creativity.
説明
Incorrect: Temperature adjustments affect randomness but do not enforce tone or branding.
正しい選択
Use metaprompts to explicitly define the desired tone and style.
説明
Correct: Metaprompts guide the model to generate outputs consistent with the company’s branding.
正しい選択
Fine-tune the LLM on company documents and communication guidelines.
説明
Correct: Fine-tuning ensures the model aligns with the company’s branding and tone.
Use a summarization model to simplify responses.
説明
Incorrect: Summarization does not address tone or branding.
Train a classification model to label responses by tone.
説明
Incorrect: Classification does not modify responses to align with branding.
全体的な説明
Combining fine-tuning with metaprompts ensures the LLM generates responses aligned with the company’s tone and branding.
ドメイン
Application Development
問題35
未回答
A Generative AI Engineer is evaluating the cost performance of a Databricks-deployed LLM system for a question-answering application. The team needs to ensure scalability for increased traffic. What are the most effective strategies to monitor and optimize costs? (Choose three)
正しい選択
Scale GPU resources dynamically based on demand.
説明
Correct: Dynamic scaling ensures resource allocation matches traffic, avoiding unnecessary costs during low demand.
Fine-tune the LLM to handle higher throughput.
説明
Incorrect: Fine-tuning enhances model performance but does not directly address scalability costs.
正しい選択
Monitor token usage per query to identify cost-heavy operations.
説明
Correct: Token usage tracking identifies areas where costs can be optimized, such as by reducing unnecessary tokens.
正しい選択
Use inference logging to analyze trends in cost and performance under high traffic.
説明
Correct: Inference logging provides a detailed view of system behavior, enabling cost and performance adjustments.
Increase retrieval batch sizes to improve precision.
説明
Incorrect: Larger batch sizes do not directly optimize cost and may reduce relevance.
全体的な説明
Monitoring token usage, inference logging, and dynamic GPU scaling ensures cost-effective scalability for high-traffic applications.
ドメイン
Evaluation and Monitoring
問題36
未回答
A Generative AI Engineer has provisioned a throughput model serving endpoint for a RAG application. They currently use a microservice to log incoming requests and outgoing responses to a remote server but are looking for a native Databricks feature to perform the same task. Which feature should they use?
正解
Inference Tables
説明
Correct: Inference Tables are specifically designed to log and monitor requests and responses for deployed model endpoints.
Lakeview
説明
Incorrect: Lakeview monitors Delta Lake but does not handle inference logs.
DBSQL
説明
Incorrect: DBSQL (Databricks SQL) is for querying data but not suitable for endpoint logging.
Vector Search
説明
Incorrect: Vector Search is used for semantic retrieval, not request/response logging.
全体的な説明
Inference Tables provide built-in support for tracking request/response logs, making them the ideal replacement for custom microservices.
ドメイン
Evaluation and Monitoring
問題37
未回答
A Generative AI Engineer is tasked with filtering a dataset of academic papers for a RAG system. The papers include irrelevant sections like acknowledgments and appendices. What is the best approach?
Retain all sections for completeness.
説明
Incorrect: Retaining irrelevant sections adds unnecessary noise to the retrieval process.
正解
Filter out irrelevant sections like acknowledgments and appendices during preprocessing.
説明
Correct: Removing irrelevant sections reduces noise and improves retrieval quality.
Use the entire paper to maximize context for retrieval.
説明
Incorrect: Using the entire paper risks including irrelevant content that dilutes relevance.
Merge all sections into a single document for consistency.
説明
Incorrect: Merging sections reduces clarity and retrieval efficiency.
全体的な説明
Preprocessing academic papers by filtering irrelevant sections ensures higher-quality retrieval in RAG systems.
ドメイン
Data Preparation
問題38
未回答
A Generative AI Engineer needs to assess the quality of an LLM's output for generating product descriptions. What qualitative assessment should they focus on?
Number of unique words used.
説明
Incorrect: Word variety does not ensure quality or relevance.
Response generation speed.
説明
Incorrect: Speed is secondary to quality in product description tasks.
Length and style consistency.
説明
Incorrect: While helpful, length and style alone do not guarantee quality.
正解
Relevance, creativity, and factual accuracy.
説明
Correct: These factors ensure the generated product descriptions are accurate, engaging, and aligned with the input data.
全体的な説明
Evaluating relevance, creativity, and factual accuracy ensures high-quality product descriptions that meet user expectations.
ドメイン
Application Development
問題39
未回答
A Generative AI Engineer is building a travel chatbot. The chatbot must answer user queries about destinations, suggest activities, and recommend accommodations. What is the best model task for this use case?
正解
Retrieval-augmented generation (RAG)
説明
Correct: RAG combines document retrieval with generation, ensuring responses are accurate and based on relevant information.
Text classification
説明
Incorrect: Classification categorizes inputs but does not generate responses or retrieve relevant documents.
Named entity recognition
説明
Incorrect: NER identifies entities but cannot answer queries or provide recommendations.
Summarization
説明
Incorrect: Summarization condenses information but does not address user queries holistically.
全体的な説明
Retrieval-augmented generation (RAG) ensures chatbot responses are grounded in retrieved knowledge, enabling accurate and personalized recommendations for users.
ドメイン
Design Applications
問題40
未回答
A Generative AI Engineer is tasked with coding a simple chain using LangChain to query a customer database. The chain must extract user details based on their email ID. What components are essential?
A rule-based system for hardcoded email queries.
説明
Incorrect: Rule-based systems lack flexibility for dynamic inputs.
正解
A retriever to query the database, an LLM to process responses, and a prompt template for query generation.
説明
Correct: These components ensure effective querying and response generation based on user inputs.
A summarization model to condense query results.
説明
Incorrect: Summarization is unnecessary for extracting specific details like user information.
A classification model to categorize user emails.
説明
Incorrect: Categorization does not help retrieve user details from a database.
全体的な説明
Combining retrievers, LLMs, and prompt templates ensures dynamic querying and accurate response generation using LangChain.
ドメイン
Assembling and Deploying Applications
問題41
未回答
A Generative AI Engineer is designing an application to generate customer reviews based on feedback forms. Some inputs contain sensitive data. How should the engineer manage this?
Process the feedback directly without masking and monitor the outputs.
説明
Incorrect: Processing unmasked data risks exposing sensitive information in outputs.
Use a summarization model to generalize sensitive details.
説明
Incorrect: Summarization does not guarantee the removal of sensitive data.
Allow sensitive inputs but ensure the model avoids generating sensitive outputs.
説明
Incorrect: Models cannot reliably exclude sensitive data without explicit preprocessing.
正解
Mask sensitive data like names and contact information in the input before processing.
説明
Correct: Masking ensures sensitive data is excluded, maintaining privacy and compliance.
全体的な説明
Masking sensitive data at the input stage ensures privacy and compliance with data protection standards.
ドメイン
Governance
問題42
未回答
A Generative AI Engineer needs to deploy an LLM for product recommendations. The system must balance cost efficiency and response latency. What strategy should they implement?
Use the largest pre-trained model available.
説明
Incorrect: Large models are costly and may introduce unnecessary latency.
Deploy multiple models to process the same query simultaneously.
説明
Incorrect: This increases cost and complexity without adding efficiency.
Focus solely on reducing latency by increasing compute resources.
説明
Incorrect: Increasing compute resources without optimizing the model is not cost-efficient.
正解
Use a smaller fine-tuned model for inference while caching frequent queries.
説明
Correct: Smaller models reduce costs and latency, while caching improves performance for repeated queries.
全体的な説明
Combining fine-tuning, model size optimization, and caching ensures a cost-effective, low-latency recommendation system.
ドメイン
Application Development
問題43
未回答
A Generative AI Engineer is building a RAG (Retrieval-Augmented Generation) system for a legal firm. The system retrieves relevant clauses from contracts and summarizes them for lawyers. Which component is most critical to ensure relevant clauses are retrieved?
Build a rule-based system for clause extraction.
説明
Incorrect: Rule-based systems are inflexible and cannot handle nuanced queries effectively.
正解
Implement a vector database for semantic retrieval of clauses.
説明
Correct: Vector databases enable semantic search, retrieving clauses based on meaning rather than exact keyword matches.
Use a keyword-based search algorithm.
説明
Incorrect: Keyword searches are rigid and may miss relevant clauses that use rephrased language or synonyms.
Fine-tune an LLM for legal documents.
説明
Incorrect: Fine-tuned LLMs generate summaries but depend on effective retrieval for relevant input.
全体的な説明
Vector databases ensure retrieval of contextually relevant clauses, providing accurate inputs for generating high-quality summaries.
ドメイン
Design Applications
問題44
未回答
A Generative AI Engineer must evaluate a deployed RAG application using MLflow. Which evaluation metrics are most relevant?
Throughput and cost per query.
説明
Incorrect: These metrics evaluate operational efficiency, not application quality.
Training loss and validation accuracy.
説明
Incorrect: These metrics are relevant for model training, not post-deployment evaluation.
Latency and error rates.
説明
Incorrect: These are deployment performance metrics, not evaluation metrics for quality assessment.
正解
Retrieval relevance metrics like precision and recall, and response accuracy metrics like BLEU or ROUGE.
説明
Correct: These metrics collectively assess retrieval and generation quality, ensuring comprehensive evaluation.
全体的な説明
Precision, recall, and BLEU/ROUGE provide a holistic view of retrieval and generation quality in a RAG application.
ドメイン
Evaluation and Monitoring
問題45
未回答
A Generative AI Engineer must create metaprompts for a language model to prevent generating toxic content in a social media moderation system. What should the metaprompts emphasize?
正解
Contextual filtering to block any toxic or harmful phrases.
説明
Correct: Metaprompts should guide the model to recognize and filter out toxic language.
Random sampling to reduce repetition.
説明
Incorrect: Randomness increases variability and may inadvertently introduce toxic content.
Response diversity to improve engagement.
説明
Incorrect: Diversity is unrelated to toxicity prevention.
Shorter prompts to minimize complexity.
説明
Incorrect: Shorter prompts do not inherently prevent toxic outputs.
全体的な説明
Metaprompts emphasizing contextual filtering ensure the model avoids generating harmful or toxic content.
ドメイン
Application Development
