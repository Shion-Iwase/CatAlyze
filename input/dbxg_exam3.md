問題1
未回答
A Generative AI Engineer must choose an LLM for a customer support chatbot. The chatbot should balance performance and cost while handling common queries effectively. Which metric should guide the selection?
Token limit of the LLM.
説明
Incorrect: Token limit affects input size but does not balance performance and cost.
正解
Latency and inference cost per query.
説明
Correct: Latency ensures responsiveness, and inference cost determines economic viability for deployment.
BLEU scores for text generation.
説明
Incorrect: BLEU evaluates language quality but is not specific to cost or performance trade-offs.
Model size in terms of parameters.
説明
Incorrect: Model size alone does not indicate the balance between cost and performance.
全体的な説明
Latency and inference cost metrics ensure that the LLM meets the performance and cost requirements of a customer support chatbot.
ドメイン
Evaluation and Monitoring
問題2
未回答
A Generative AI Engineer is tasked with designing a RAG system for retrieving technical documentation and generating user-friendly responses. Users report that some responses include irrelevant details. What should the engineer prioritize to improve the system?
Fine-tune the model on technical query data.
説明
Incorrect: Fine-tuning improves general performance but does not fix retrieval issues.
Increase the model temperature to reduce redundancy.
説明
Incorrect: Temperature adjustments do not address retrieval relevance.
正解
Refine the retrieval strategy by filtering results based on relevance scores.
説明
Correct: Filtering retrieval results improves the system’s ability to generate focused and relevant responses.
Use a summarization model to simplify retrieval results.
説明
Incorrect: Simplification may still include irrelevant details.
全体的な説明
Refining the retrieval strategy ensures that the system retrieves only the most relevant content, reducing irrelevant details in responses.
ドメイン
Application Development
問題3
未回答
A Generative AI Engineer has developed an LLM application to answer questions about internal company policies. The engineer must ensure that the application doesn’t hallucinate or leak confidential data. Which approach should NOT be used to mitigate hallucination or confidential data leakage?
Add guardrails to filter outputs from the LLM before it is shown to the user.
説明
Incorrect: Guardrails effectively filter inappropriate or hallucinated outputs.
Use a strong system prompt to ensure the model aligns with your needs.
説明
Incorrect: System prompts provide explicit instructions to prevent hallucinations and align model behavior.
正解
Fine-tune the model on your data, hoping it will learn what is appropriate and not.
説明
Correct: Fine-tuning cannot reliably mitigate hallucination or prevent data leakage and is not a suitable standalone solution.
Limit the data available based on the user’s access level.
説明
Incorrect: Restricting data access reduces the risk of confidential information leakage.
全体的な説明
Fine-tuning alone is unreliable for preventing hallucinations or ensuring security. Guardrails, access control, and system prompts are more effective.
ドメイン
Governance
問題4
未回答
A Generative AI Engineer is designing an LLM-powered tool for summarizing legal contracts. The model often generates hallucinated clauses. What solution should they implement?
Increase the context length to capture more document content.
説明
Incorrect: Increasing context length may not prevent hallucinations and can increase computational costs.
Apply a summarization model pre-trained on legal datasets.
説明
Incorrect: Pre-trained models help improve quality but do not inherently prevent hallucinations.
Use a classification model to validate generated summaries.
説明
Incorrect: Classification models do not address the source of hallucinations directly.
正解
Write a metaprompt instructing the model to generate summaries only based on the provided text.
説明
Correct: Metaprompts help constrain the model’s outputs, reducing the risk of hallucination.
全体的な説明
Metaprompts guide the LLM to focus strictly on source content, reducing the likelihood of hallucinations in contract summaries.
ドメイン
Application Development
問題5
未回答
An AI model generates recommendations for customer queries but frequently suggests irrelevant products. What adjustment should an engineer prioritize?
正解
Improve embeddings to better capture query-product semantic similarity.
説明
Correct: Improving embeddings ensures better alignment between customer queries and product suggestions.
Reduce response length to avoid irrelevant recommendations.
説明
Incorrect: Shorter responses do not guarantee improved relevance.
Increase the model’s temperature during inference.
説明
Incorrect: Increasing temperature adds randomness, which may worsen relevance.
Add more parameters to the model.
説明
Incorrect: Adding parameters does not directly improve query-product alignment.
全体的な説明
High-quality embeddings improve the semantic alignment between queries and products, addressing issues of irrelevance in recommendations.
ドメイン
Application Development
問題6
未回答
A Generative AI Engineer must create a system that provides multi-turn dialogue capabilities for a customer support chatbot. The chatbot should maintain context across conversations and handle follow-up queries. What tool is essential for maintaining context?
A retriever to fetch relevant past conversations.
説明
Incorrect: Retrievers can retrieve content but do not inherently store context dynamically.
A summarization model to condense conversation history.
説明
Incorrect: Summarization reduces history details, which may compromise context accuracy.
正解
A memory module integrated into the LLM workflow to store and retrieve past interactions.
説明
Correct: Memory modules allow the chatbot to store conversational history, enabling context-aware responses.
A classification model to predict user intents in each query.
説明
Incorrect: Classification aids intent identification but does not maintain conversational context.
全体的な説明
Memory modules enable dynamic storage and retrieval of past interactions, ensuring continuity and context-aware dialogue.
ドメイン
Design Applications
問題7
未回答
A Generative AI Engineer is integrating a conversational AI model into a web application for restaurant reservations. The system must return concise responses to user queries. How should they optimize the prompt?
Rely on the LLM’s temperature setting alone to reduce response length.
説明
Incorrect: Temperature affects randomness but does not directly control response length.
Allow the user to choose response length dynamically.
説明
Incorrect: While helpful, dynamic length control does not optimize the default system behavior.
Use default prompts without modifications.
説明
Incorrect: Default prompts may produce longer responses that are not concise.
正解
Specify in the prompt that the responses should be brief, such as “Provide a short confirmation message for the reservation.”
説明
Correct: Including specific length-related instructions ensures concise and relevant responses.
全体的な説明
Including clear instructions about response length in the prompt ensures the system generates concise and effective messages.
ドメイン
Application Development
問題8
未回答
A Generative AI Engineer is tasked with preparing a large technical document for a RAG system. The document contains appendices, tables of contents, and redundant footnotes that are irrelevant to the task. What preprocessing step should the engineer take?
正解
Remove irrelevant sections like appendices and tables of contents during preprocessing.
説明
Correct: Removing extraneous sections reduces noise and improves retrieval performance by focusing on relevant content.
Keep the entire document intact for completeness.
説明
Incorrect: Retaining irrelevant sections increases retrieval noise and degrades performance.
Highlight irrelevant sections to flag them but keep them in the document.
説明
Incorrect: Flagging does not improve system performance; irrelevant content still occupies space.
Merge all sections of the document into a single chunk.
説明
Incorrect: Merging content reduces clarity and risks exceeding token limits.
全体的な説明
Preprocessing ensures the removal of irrelevant sections, enhancing the quality of document retrieval for RAG applications.
ドメイン
Data Preparation
問題9
未回答
A Generative AI Engineer must design a system that generates customer response templates based on common queries. The templates should include a greeting, resolution, and follow-up action. What pipeline components are necessary?
A rule-based system to select predefined templates.
説明
Incorrect: Rule-based systems lack flexibility for dynamic query handling.
A classification model to label queries by type.
説明
Incorrect: Classification does not generate full response templates.
正解
An LLM to generate templates dynamically based on queries.
説明
Correct: LLMs can generate detailed templates tailored to specific queries.
A summarization model to condense user queries.
説明
Incorrect: Summarization does not create structured response templates.
全体的な説明
LLMs dynamically create structured templates with greetings, resolutions, and follow-ups, meeting user requirements.
ドメイン
Design Applications
問題10
未回答
A Generative AI Engineer must deploy a simple chain using LangChain to enable document retrieval and summarization. Why is LangChain well-suited for this task?
正解
It provides modular tools for connecting retrievers, embedding models, and language models into a unified pipeline.
説明
Correct: LangChain simplifies the creation of end-to-end chains for tasks like retrieval and summarization by offering modular components.
It automatically fine-tunes models for retrieval-based tasks.
説明
Incorrect: LangChain integrates models but does not handle fine-tuning.
It reduces computational costs by optimizing embeddings.
説明
Incorrect: LangChain focuses on workflow design, not computational cost reduction.
It enhances security for sensitive data by encrypting model outputs.
説明
Incorrect: LangChain does not provide built-in security features for model outputs.
全体的な説明
LangChain's modular tools enable developers to build complete retrieval and summarization pipelines efficiently, making it an excellent choice for such tasks.
ドメイン
Assembling and Deploying Applications
問題11
未回答
A Generative AI Engineer must deploy a LangChain-based application for retrieving legal documents and generating summaries. What is the primary role of LangChain in this system?
Managing cloud resources for scalable deployment.
説明
Incorrect: LangChain focuses on workflows, not resource management.
Visualizing data flows in the application.
説明
Incorrect: LangChain is not a visualization tool.
Automating the fine-tuning of LLMs.
説明
Incorrect: LangChain does not fine-tune models but integrates pre-trained ones.
正解
Orchestrating the workflow by connecting retrievers, LLMs, and preprocessing steps.
説明
Correct: LangChain simplifies the orchestration of complex workflows, such as retrieval and summarization.
全体的な説明
LangChain connects retrievers, preprocessors, and LLMs in a unified pipeline, making it ideal for building modular retrieval and summarization workflows.
ドメイン
Assembling and Deploying Applications
問題12
未回答
A Generative AI Engineer must implement guardrails for a chatbot handling sensitive customer data. What is the most critical step?
Shorten the responses to avoid excessive detail.
説明
Incorrect: Short responses do not inherently prevent data leakage.
Train the chatbot on smaller datasets.
説明
Incorrect: Dataset size does not address privacy concerns directly.
正解
Filter responses to detect and block any potential private data leakage.
説明
Correct: Filtering prevents sensitive information from being included in chatbot responses, ensuring privacy.
Enable unrestricted response generation.
説明
Incorrect: Unrestricted responses increase the risk of data leakage.
全体的な説明
Filtering responses for private data ensures compliance with privacy standards and prevents sensitive data exposure.
ドメイン
Application Development
問題13
未回答
A Generative AI Engineer must identify source documents to train a RAG system for answering technical support questions. What factors should they prioritize?
Availability of free or public domain documents.
説明
Incorrect: Public availability does not ensure alignment with technical support needs.
Diversity of sources over content relevance.
説明
Incorrect: Relevance to the task outweighs the need for diverse but unrelated sources.
正解
Relevance and quality of content based on the system’s technical support requirements.
説明
Correct: High-quality, relevant content ensures the system retrieves accurate and useful answers.
Length of documents to maximize training data.
説明
Incorrect: Length alone does not guarantee relevance or quality.
全体的な説明
Selecting high-quality, relevant documents ensures the system retrieves accurate answers aligned with technical support requirements.
ドメイン
Data Preparation
問題14
未回答
A Generative AI Engineer is optimizing an LLM-based system for summarizing academic papers. The summaries often miss key points from the results section. What strategy should they use?
Include the entire paper in the prompt for context.
説明
Incorrect: Overloading the prompt with unnecessary context can reduce performance and increase costs.
Summarize without prompts to save computation.
説明
Incorrect: Lack of prompts results in unstructured and unreliable summaries.
Use vague prompts like “Summarize this paper.”
説明
Incorrect: Vague prompts fail to direct the model to prioritize key sections.
正解
Include section-specific instructions in the prompt, such as “Focus on the results section.”
説明
Correct: Targeted instructions ensure the model emphasizes important parts of the document.
全体的な説明
Adding section-specific instructions ensures the model focuses on critical information, such as the results section, improving summary relevance.
ドメイン
Application Development
問題15
未回答
A Generative AI Engineer is tasked with identifying problematic text in a dataset feeding a RAG application. Some documents contain inappropriate language. What mitigation strategy should they implement?
Replace inappropriate words with placeholders in the ingested documents.
説明
Incorrect: Placeholder replacements may still retain some problematic context.
Allow all documents to be ingested and rely on output monitoring.
説明
Incorrect: Post-ingestion monitoring does not prevent problematic content from affecting the system.
正解
Use a filtering tool to detect and remove inappropriate language before ingestion.
説明
Correct: Filtering ensures that problematic text does not enter the RAG system, maintaining quality and ethical standards.
Rely on the LLM to ignore inappropriate language during processing.
説明
Incorrect: LLMs cannot inherently differentiate or exclude problematic content without explicit instructions.
全体的な説明
Pre-ingestion filtering removes problematic text, ensuring the dataset's quality and ethical compliance.
ドメイン
Governance
問題16
未回答
A Generative AI Engineer must evaluate a dataset for legal risks before using it to train a language model. What key factor should they consider?
正解
Licensing terms that dictate permissible usage and any restrictions on data applications.
説明
Correct: Licensing terms determine how the dataset can be used legally, including restrictions on commercial use or modifications.
The size of the dataset to ensure it meets training requirements.
説明
Incorrect: Dataset size is unrelated to legal risks.
The model architecture being used for training.
説明
Incorrect: Model architecture is unrelated to the dataset's legal compliance.
The presence of sensitive information in the dataset.
説明
Incorrect: While important, licensing terms are the primary legal consideration.
全体的な説明
Reviewing licensing terms ensures the dataset is used in accordance with its legal permissions, avoiding potential disputes or violations.
ドメイン
Governance
問題17
未回答
Which indicator should be considered to evaluate the safety of the LLM outputs when qualitatively assessing LLM responses for a translation use case?
The ability to generate responses in code
説明
Incorrect: Generating code is unrelated to evaluating safety in translation tasks.
The latency of the response and the length of text generated
説明
Incorrect: Latency and text length are performance metrics, not safety indicators.
正解
The accuracy and relevance of the responses
説明
Correct: Accuracy and relevance are key indicators of safety, ensuring that the outputs meet the task requirements without errors or harmful content.
The similarity to the previous language
説明
Incorrect: Safety is not about maintaining linguistic similarity but ensuring relevance and appropriateness of translations.
全体的な説明
Accurate and relevant outputs ensure safe and effective responses in translation use cases by aligning with the user’s needs and context.
ドメイン
Evaluation and Monitoring
問題18
未回答
A Generative AI Engineer is designing a system that converts job descriptions into candidate evaluation criteria. The system must generate a structured checklist for each job description. What components should be included in the pipeline?
正解
Use an embedding model for job descriptions and an LLM to generate evaluation criteria.
説明
Correct: Embeddings capture semantic meaning, and LLMs generate structured outputs from descriptions.
Use a summarization model to condense job descriptions into shorter forms.
説明
Incorrect: Summaries do not translate into evaluation criteria.
Use a classification model to label job descriptions by category.
説明
Incorrect: Classification does not generate detailed evaluation checklists.
Use a rule-based system to extract criteria.
説明
Incorrect: Rule-based systems lack flexibility for diverse job descriptions.
全体的な説明
Combining embeddings and LLMs ensures the pipeline generates accurate and structured evaluation criteria.
ドメイン
Design Applications
問題19
未回答
A Generative AI Engineer must control access to a deployed model serving endpoint. What techniques can they use to ensure secure access?
Deploy the model on a private network without additional access controls.
説明
Incorrect: A private network alone does not ensure endpoint security for external integrations.
正解
Implement API key authentication and role-based access controls (RBAC).
説明
Correct: API keys and RBAC ensure secure and granular access control to model serving endpoints.
Restrict access to specific IP addresses but skip authentication.
説明
Incorrect: IP restrictions alone do not provide robust authentication mechanisms.
Use a public endpoint with a shared access key for all users.
説明
Incorrect: Shared keys compromise security and do not provide individualized access controls.
全体的な説明
API keys and RBAC provide robust security, ensuring only authorized users can access the deployed model endpoint.
ドメイン
Assembling and Deploying Applications
問題20
未回答
A Generative AI Engineer must evaluate the cost-effectiveness of two LLMs for generating responses in a production chatbot. What metrics should they compare? (Choose two)
Model size in terms of parameters.
説明
Incorrect: Model size alone does not directly indicate cost-effectiveness.
BLEU and perplexity for output quality.
説明
Incorrect: These metrics evaluate quality, not cost.
Token limit and input size flexibility.
説明
Incorrect: These are functional constraints but do not measure cost-effectiveness.
正しい選択
Cost per query and latency.
説明
Correct: These metrics provide a direct comparison of operational costs and responsiveness.
正しい選択
Throughput under high-load scenarios.
説明
Correct: Throughput measures the system’s capacity to handle queries efficiently at scale.
全体的な説明
Comparing cost per query, latency, and throughput ensures a comprehensive evaluation of the cost-effectiveness of LLMs.
ドメイン
Evaluation and Monitoring
問題21
未回答
A Generative AI Engineer must implement guardrails to prevent an AI chatbot from leaking sensitive customer information. What is the most effective approach?
Reduce the token length of responses to avoid excessive detail.
説明
Incorrect: Reducing response length does not address the risk of sensitive data leakage.
Rely on user feedback to detect sensitive data leakage.
説明
Incorrect: Relying on feedback is reactive and does not prevent issues during inference.
正解
Use prompt-based filters to detect and block sensitive data during inference.
説明
Correct: Filters can identify sensitive information and prevent it from being included in responses.
Enable temperature-based randomness in outputs.
説明
Incorrect: Randomness increases the variability of responses, potentially exposing sensitive data.
全体的な説明
Prompt-based filters actively monitor and block sensitive content, ensuring responses remain secure and compliant with privacy standards.
ドメイン
Application Development
問題22
未回答
A Generative AI Engineer has developed a RAG application designed to answer questions about a series of fantasy novels discussed on the author’s web forum. The novels have been chunked and embedded into a vector store containing metadata like page numbers, chapter titles, and book names. User queries retrieve relevant chunks, which are then processed by an LLM for generating responses. Initially, the engineer used intuition to select chunking strategies and configurations but now wants a systematic approach to optimize these settings. Which TWO approaches should the engineer adopt to refine the chunking strategy and parameters? (Choose two.)
Add a classifier for user queries that predicts which book will best contain the answer. Use this to filter retrieval.
説明
Incorrect: While helpful for narrowing retrieval, a classifier does not optimize the chunking strategy itself.
正しい選択
Choose an appropriate evaluation metric (e.g., recall or NDCG) and test chunking strategies such as splitting chunks by paragraphs or chapters. Select the strategy with the highest performance metric.
説明
Correct: Using evaluation metrics provides a structured way to identify the most effective chunking strategies.
正しい選択
Create an LLM-as-a-judge metric to assess how well previous questions are answered by specific chunks. Use this metric to optimize chunking parameters.
説明
Correct: An LLM-as-a-judge approach allows the engineer to systematically evaluate and refine chunk relevance and sizes.
Pass known questions and best answers to an LLM and instruct it to identify optimal token counts. Use a summary statistic (mean, median, etc.) to determine chunk sizes.
説明
Incorrect: LLM-driven token suggestions lack a structured approach for robust chunk optimization.
Change embedding models and compare performance.
説明
Incorrect: Experimenting with embedding models improves semantic alignment but does not directly optimize chunking strategies.
全体的な説明
A systematic evaluation using metrics like recall and NDCG, combined with LLM-as-a-judge metrics, ensures the best chunking strategy is selected for optimal performance.
ドメイン
Evaluation and Monitoring
問題23
未回答
A Generative AI Engineer must deploy an endpoint for a RAG application. The endpoint must handle real-time queries and integrate retrieval, embeddings, and LLMs. What sequence of steps should the engineer follow? (Choose two)
Fine-tune the LLM before deploying the endpoint.
説明
Incorrect: Fine-tuning is not necessary for endpoint deployment.
正解
Train embeddings → Create vector store → Integrate retrieval → Deploy the endpoint.
説明
Correct: This sequence ensures all components are ready for real-time query handling.
Use retrieval without vector search for simpler implementation.
説明
Incorrect: Vector search enhances retrieval quality, making it essential.
Skip training embeddings and directly create a vector store.
説明
Incorrect: Without embeddings, vector stores cannot represent document semantics.
Deploy the endpoint before configuring embeddings.
説明
Incorrect: Embeddings must be ready before endpoint deployment.
全体的な説明
Proper sequencing ensures an efficient and fully integrated endpoint for real-time RAG applications.
ドメイン
Assembling and Deploying Applications
問題24
未回答
A Generative AI Engineer is tasked with designing a system for generating personalized workout routines. The system should consider user goals, preferences, and activity history. What is the most effective pipeline design?
Use embeddings to represent user inputs semantically.
説明
Incorrect: Embeddings alone do not generate actionable plans.
Use a rule-based system to map inputs to predefined workouts.
説明
Incorrect: Rule-based systems lack flexibility for diverse user inputs.
正解
Use an LLM to generate workout routines based on inputs, supported by a retriever for user activity history.
説明
Correct: Combining an LLM and a retriever ensures dynamic, personalized outputs tailored to user preferences and goals.
Use a classification model to categorize user preferences.
説明
Incorrect: Categorization does not generate personalized workout plans.
全体的な説明
A combination of an LLM and retriever ensures personalized and dynamic workout routines based on user inputs.
ドメイン
Application Development
問題25
未回答
A Generative AI Engineer is designing a conversational agent using Foundation Model APIs. The system must handle variable query loads efficiently. How can the engineer optimize performance?
正解
Use autoscaling to dynamically adjust resources based on query load.
説明
Correct: Autoscaling ensures resource availability matches workload demands, maintaining performance.
Reduce API rate limits to restrict user queries.
説明
Incorrect: Rate limiting does not optimize system resource utilization.
Fix resource allocation at the maximum expected load.
説明
Incorrect: Fixed allocation leads to underutilization during low load and bottlenecks during spikes.
Skip monitoring performance metrics to simplify deployment.
説明
Incorrect: Monitoring metrics is critical for detecting and addressing performance issues.
全体的な説明
Autoscaling dynamically adjusts resources to match workload demands, ensuring consistent and efficient performance.
ドメイン
Assembling and Deploying Applications
問題26
未回答
A Generative AI Engineer is tasked with creating a prompt for generating job interview questions. The questions should focus on assessing problem-solving skills and teamwork. What is the best prompt structure?
Summarize common skills assessed during job interviews.
説明
Incorrect: Summarization does not generate interview questions.
Provide a list of common problem-solving scenarios.
説明
Incorrect: Listing scenarios does not generate well-structured questions.
正解
Design a set of job interview questions that evaluate problem-solving and teamwork abilities, providing clear and concise queries.
説明
Correct: This prompt ensures the LLM generates questions tailored to the specific skills being assessed.
Generate general interview questions for job candidates.
説明
Incorrect: General prompts do not focus on problem-solving or teamwork skills.
全体的な説明
Explicit prompts that specify the skills and structure needed ensure the generated questions are focused and relevant.
ドメイン
Application Development
問題27
未回答
A marketing agency needs an AI tool to generate engaging headlines for advertisements. The headlines should target specific demographics like "young professionals" or "retirees." What should the prompt include for best results? (Choose two)
Avoid specifying tone to encourage creativity.
説明
Incorrect: Lack of tone guidance risks inconsistency and misalignment with target demographics.
正しい選択
Provide a few-shot example of successful headlines.
説明
Correct: Examples guide the AI by showcasing high-performing outputs.
Use a generic prompt like "Write engaging headlines for ads."
説明
Incorrect: Generic prompts may produce irrelevant or inconsistent headlines.
正しい選択
Specify the tone, target audience, and desired outcome. Example: “Write a headline targeting young professionals. Tone: professional and motivating. Outcome: highlight career growth opportunities.”
説明
Correct: Including tone, audience, and goals ensures the AI generates headlines tailored to campaign needs.
全体的な説明
Combining clear instructions (tone, audience, goals) with examples ensures the AI generates consistent, high-quality headlines that resonate with the intended audience.
ドメイン
Design Applications
問題28
未回答
A Generative AI Engineer must design a prompt to extract meeting summaries. Each summary should include action items, participants, and decisions made. What is the best prompt design?
Summarize the meeting transcript into a concise report.
説明
Incorrect: Concise reports may omit essential elements like action items or participants.
Provide an overview of the meeting discussion.
説明
Incorrect: Overviews lack detail and structure for actionable summaries.
Highlight the key points of the meeting in a bullet-point format.
説明
Incorrect: Bullet points alone may not include all required fields.
正解
Extract a meeting summary including action items, participants, and decisions made, based on the transcript.
説明
Correct: This prompt explicitly defines required elements, ensuring the model generates structured, complete summaries.
全体的な説明
Explicit prompts defining required fields ensure the model generates structured, actionable meeting summaries.
ドメイン
Design Applications
問題29
未回答
A Generative AI Engineer is designing a pyfunc model to process financial data with pre- and post-processing steps. The model must clean the input, perform predictions, and format results for users. What workflow ensures this functionality?
Apply predictions first and handle pre- and post-processing in a separate pipeline.
説明
Incorrect: Separating steps reduces efficiency and integration of the workflow.
Directly input raw data into the model and rely on post-processing for cleanup.
説明
Incorrect: Preprocessing is critical to remove noise and ensure input quality.
正解
Preprocess financial data (e.g., normalize values), apply the prediction model, and post-process outputs into user-friendly formats like JSON.
説明
Correct: This workflow ensures data is clean, predictions are accurate, and results are presented in a structured format for end users.
Skip post-processing and return raw model outputs to users.
説明
Incorrect: Raw outputs may lack context and usability for end users.
全体的な説明
Including preprocessing, model inference, and post-processing steps ensures the model processes data effectively and outputs user-ready results.
ドメイン
Assembling and Deploying Applications
問題30
未回答
A Generative AI Engineer must build a QA system for a retail company. The system should retrieve answers about product inventory and availability. What tools should the pipeline include?
正解
A retriever to fetch inventory data and an LLM to generate responses.
説明
Correct: Retrievers ensure relevant inventory data is fetched, and the LLM dynamically crafts accurate responses.
An embedding model to represent inventory data semantically.
説明
Incorrect: Embeddings alone do not generate query responses.
A summarization model to condense product descriptions.
説明
Incorrect: Summarization does not address retrieval or inventory queries.
A classification model to categorize products.
説明
Incorrect: Categorization does not fulfill the need for dynamic question answering.
全体的な説明
A combination of retrievers and LLMs ensures accurate answers to inventory-related queries, meeting user requirements.
ドメイン
Application Development
問題31
未回答
A Generative AI Engineer must deploy a PyFunc model that preprocesses input text by cleaning noisy characters and post-processes the output by formatting the result into a JSON structure. Where should the preprocessing and post-processing steps be implemented?
As standalone Python scripts outside the PyFunc model.
説明
Incorrect: External scripts add unnecessary complexity and risk inconsistency during deployment.
Using a data preprocessing library such as Pandas.
説明
Incorrect: While Pandas is useful for data transformation, it cannot directly integrate with PyFunc model workflows.
正解
Inside the PyFunc wrapper’s predict function, as part of the model logic.
説明
Correct: PyFunc models are designed to encapsulate pre- and post-processing within the predict function, ensuring all operations are performed seamlessly within the model workflow.
At the deployment server level via a custom API wrapper.
説明
Incorrect: While feasible, placing these operations at the server level complicates maintenance and debugging.
全体的な説明
PyFunc models allow custom pre- and post-processing logic to be encapsulated within the predict function, ensuring streamlined and integrated workflows during inference.
ドメイン
Assembling and Deploying Applications
問題32
未回答
A Generative AI Engineer must protect a generative application from adversarial user inputs designed to crash the system. What is the best defensive strategy?
Monitor user inputs and log suspicious activity.
説明
Incorrect: Monitoring helps detect issues but does not prevent adversarial inputs.
Lower the model’s response complexity to limit crash risks.
説明
Incorrect: Reducing response complexity does not address input-based vulnerabilities.
正解
Implement input validation rules to check for unacceptable patterns and formats.
説明
Correct: Input validation prevents adversarial inputs from compromising system stability and security.
Train the model on a dataset designed to handle adversarial inputs.
説明
Incorrect: Training alone cannot prevent all forms of malicious input attacks.
全体的な説明
Input validation rules ensure the application can handle adversarial inputs securely, protecting system stability.
ドメイン
Governance
問題33
未回答
A Generative AI Engineer is evaluating retrieval performance for a RAG application using scientific documents. Which metrics are best suited for this evaluation?
Token usage to evaluate computational costs.
説明
Incorrect: Token usage is unrelated to retrieval quality.
正解
Precision and recall to measure relevance and coverage of retrieved results.
説明
Correct: Precision ensures retrieved documents are relevant, while recall measures how many relevant documents are retrieved.
BLEU to measure textual similarity.
説明
Incorrect: BLEU evaluates text similarity in tasks like translation, not retrieval.
Latency to measure speed of retrieval.
説明
Incorrect: Latency measures performance but not relevance or coverage.
全体的な説明
Precision and recall are key metrics for evaluating the relevance and completeness of retrieval performance in a RAG application.
ドメイン
Data Preparation
問題34
未回答
A Generative AI Engineer is tasked with coding a LangChain application to automate querying a product catalog. The system must retrieve product details based on natural language queries. What components are necessary for the chain? (Choose two)
正しい選択
A prompt template to structure user queries for the LLM.
説明
Correct: Prompt templates ensure consistent and coherent interaction with the model.
A pre-trained sentiment analysis model.
説明
Incorrect: Sentiment analysis is unrelated to retrieving product details.
正しい選択
A retriever to fetch product details from the catalog.
説明
Correct: Retrievers ensure the chain can access relevant data for natural language queries.
A summarization model to condense results.
説明
Incorrect: Summarization is not needed for querying structured product details.
A rule-based classifier to categorize queries.
説明
Incorrect: Rule-based classifiers are too rigid for dynamic product catalog queries.
全体的な説明
Combining retrievers and prompt templates ensures accurate and efficient responses to natural language queries.
ドメイン
Assembling and Deploying Applications
問題35
未回答
A Generative AI Engineer is designing a pyfunc model that includes pre- and post-processing for sentiment analysis. What components should the engineer include?
Pass raw text to the model without preprocessing.
説明
Incorrect: Raw text may include noise, degrading prediction accuracy.
Skip the model step and rely only on preprocessing.
説明
Incorrect: Preprocessing alone does not perform sentiment analysis.
正解
Preprocess input text (e.g., clean text, tokenize), call the model for sentiment prediction, and post-process the output into user-friendly labels.
説明
Correct: Pre- and post-processing steps ensure input text is clean and output predictions are formatted for user understanding.
Use the model output directly without post-processing.
説明
Incorrect: Post-processing converts raw predictions into interpretable results.
全体的な説明
Preprocessing, model inference, and post-processing together ensure high-quality sentiment analysis with interpretable outputs.
ドメイン
Assembling and Deploying Applications
問題36
未回答
A Generative AI Engineer must select an LLM for a question-answering system about medical guidelines. The system needs high accuracy and explainable outputs. Which LLM attribute should they prioritize?
正解
Model size and domain-specific fine-tuning.
説明
Correct: Domain-specific fine-tuning ensures high accuracy for medical guidelines, and explainable outputs require a focused model.
Pre-trained embeddings on generic text.
説明
Incorrect: Generic embeddings lack the domain-specific focus necessary for medical accuracy.
High perplexity to ensure diverse responses.
説明
Incorrect: High perplexity introduces randomness, reducing reliability in medical contexts.
Response speed and low latency.
説明
Incorrect: Speed is secondary to accuracy and explainability in medical applications.
全体的な説明
Prioritizing domain-specific fine-tuning ensures that the LLM delivers accurate and explainable outputs for medical guideline queries.
ドメイン
Application Development
問題37
未回答
A RAG system retrieves irrelevant historical data during queries. How should the engineer improve the relevance of retrieved documents?
Filter based on keyword matches in queries.
説明
Incorrect: Keyword-based filtering may miss contextually relevant documents due to synonym usage or rephrased content.
Increase the document chunk size to improve coverage.
説明
Incorrect: Larger chunks may include irrelevant information, reducing retrieval relevance.
Retain all documents regardless of age.
説明
Incorrect: Retaining all documents, including outdated ones, reduces overall relevance and accuracy.
正解
Apply timestamp-based filtering to exclude outdated documents.
説明
Correct: Timestamp filtering ensures the system prioritizes recent and contextually relevant content, improving accuracy.
全体的な説明
Timestamp-based filtering ensures retrieved content remains up-to-date and relevant, addressing issues of outdated information.
ドメイン
Data Preparation
問題38
未回答
A Generative AI Engineer is deploying a LLM-based RAG application for financial document analysis. The application must minimize costs while processing lengthy documents. Which strategies are most effective? (Choose three)
正しい選択
Enable inference logging to monitor query costs.
説明
Correct: Inference logging provides insights into cost drivers, enabling optimization strategies.
正しい選択
Use a smaller LLM with high context length support to handle long inputs efficiently.
説明
Correct: Smaller LLMs with sufficient context length reduce computational demands, lowering costs while maintaining performance.
Reduce the retrieval set size to minimize processing overhead.
説明
Incorrect: Reducing retrieval size may compromise the quality of retrieved results.
正しい選択
Optimize token usage by batching multiple queries into a single request.
説明
Correct: Batching reduces the number of API calls or inference runs, improving cost efficiency.
Increase context length to maximize token usage for each query.
説明
Incorrect: Increasing context length can lead to higher token usage and increased costs.
全体的な説明
Combining smaller models, batching, and inference logging ensures cost-effective performance for processing lengthy financial documents.
ドメイン
Evaluation and Monitoring
問題39
未回答
A Generative AI Engineer must register a pyfunc model that predicts employee attrition to Unity Catalog. The model includes preprocessing for data normalization and postprocessing for interpretable outputs. What steps should the engineer take?
Skip logging to MLflow and directly register the model to Unity Catalog.
説明
Incorrect: MLflow logging is essential for tracking model details before registration.
Skip metadata configuration and use default settings for registration.
説明
Incorrect: Metadata provides critical context for effective governance and discoverability.
正解
Log the model to MLflow, configure metadata (e.g., schema, version, tags), and register it to Unity Catalog.
説明
Correct: Logging and metadata configuration ensure the model is properly tracked and governed within Unity Catalog.
Use MLflow for logging but avoid registering the model to Unity Catalog.
説明
Incorrect: Unity Catalog enables centralized governance and compliance tracking.
全体的な説明
Logging to MLflow and registering to Unity Catalog ensures the model is properly managed, tracked, and governed.
ドメイン
Assembling and Deploying Applications
問題40
未回答
A Generative AI Engineer is tasked with fine-tuning a model to identify key topics in technical documents. The dataset contains unnecessary metadata such as timestamps and author names. How should the engineer handle preprocessing?
Exclude all numerical data, including timestamps.
説明
Incorrect: Some numerical data, like dates, may be relevant and should not be excluded without consideration.
Process the dataset without filtering.
説明
Incorrect: Ignoring irrelevant metadata risks degrading the system’s overall performance.
Retain metadata to provide context.
説明
Incorrect: Retaining metadata can confuse the model and degrade topic identification performance.
正解
Remove all irrelevant metadata during preprocessing.
説明
Correct: Removing unnecessary metadata reduces noise, helping the model focus on the actual document content.
全体的な説明
Removing metadata ensures the focus remains on relevant document content, enhancing topic identification accuracy.
ドメイン
Data Preparation
問題41
未回答
LangChain is commonly used for integrating LLMs with retrieval systems. Which key feature of LangChain makes it ideal for this task?
Its primary focus on model fine-tuning.
説明
Incorrect: LangChain does not handle fine-tuning; it is focused on orchestration.
Its built-in visualization tools for output comparison.
説明
Incorrect: LangChain is not a visualization tool, and this feature is irrelevant to retrieval integration.
正解
Its ability to create structured workflows that combine document retrieval and generative capabilities.
説明
Correct: LangChain simplifies combining retrieval-based inputs with generative tasks, improving application design.
Its use of open-source pre-trained embeddings.
説明
Incorrect: While LangChain can leverage embeddings, this is not its defining feature.
全体的な説明
LangChain’s ability to orchestrate workflows between retrieval and generation tasks makes it an excellent choice for Generative AI applications.
ドメイン
Application Development
問題42
未回答
A Generative AI Engineer is tasked with developing an AI tool for generating marketing content. The tool must create product descriptions optimized for e-commerce platforms. What should the prompt include? (Choose two)
正しい選択
Provide few-shot examples of successful descriptions.
説明
Correct: Examples help the model generate descriptions aligned with proven e-commerce strategies.
正しい選択
Specify product details, tone, and length. Example: "Create a description for a smartwatch. Tone: professional. Length: 100 words."
説明
Correct: Including product details, tone, and length ensures the output is optimized for the platform's needs.
Use a generic prompt like "Write a product description."
説明
Incorrect: Generic prompts may produce inconsistent results that do not align with e-commerce requirements.
Avoid specifying tone to encourage creativity.
説明
Incorrect: Tone guidance ensures consistency and alignment with the platform's branding.
全体的な説明
Combining clear instructions (tone, length, details) with examples ensures product descriptions are tailored to the platform and resonate with the target audience.
ドメイン
Design Applications
問題43
未回答
A Generative AI Engineer is tasked with chunking a lengthy novel for a RAG application. The novel includes chapters, dialogues, and descriptive passages. Which chunking strategy will optimize retrieval quality?
Split the text into chunks of a fixed token size (e.g., 500 tokens).
説明
Incorrect: Fixed-size chunks risk breaking context, reducing coherence.
Include the entire novel as one chunk for context preservation.
説明
Incorrect: Entire novel chunks exceed token limits and reduce processing feasibility.
正解
Split the text by chapters and further divide each chapter into sections based on paragraphs.
説明
Correct: Dividing by chapters and paragraphs maintains logical structure and adheres to token limits.
Overlap chunks with a 50% overlap to ensure content redundancy.
説明
Incorrect: Excessive overlap can create redundant data without improving retrieval quality.
全体的な説明
Logical chunking by chapters and paragraphs ensures meaningful content for retrieval and alignment with model constraints.
ドメイン
Data Preparation
問題44
未回答
A Generative AI Engineer needs to generate embeddings for a question-answer retrieval system. User queries are short, while documents are long. Which embedding model strategy is most effective?
正解
Use a dual encoder with separate embeddings for queries and documents.
説明
Correct: Dual encoders optimize retrieval by aligning short queries with longer document representations.
Rely on pre-trained embeddings without customization.
説明
Incorrect: Pre-trained embeddings may not align with the specific domain or task requirements.
Use a single encoder for both queries and documents.
説明
Incorrect: Single encoders are less effective for handling significant differences in input length.
Use a classification model instead of an embedding model.
説明
Incorrect: Classification models are not designed for retrieval tasks.
全体的な説明
A dual encoder ensures that both short queries and long documents are effectively represented, improving retrieval performance.
ドメイン
Application Development
問題45
未回答
A Generative AI Engineer is integrating an LLM into a sales analytics platform. The LLM must suggest actions based on customer purchase patterns. Which feature is critical for success?
Choosing the largest available LLM for broader capabilities.
説明
Incorrect: Larger models are unnecessary if they are not domain-specific.
Using a default pre-trained LLM without modification.
説明
Incorrect: Default models are not specialized for purchase pattern analysis.
正解
Fine-tuning on purchase history data for better predictions.
説明
Correct: Fine-tuning ensures the LLM aligns with domain-specific data, improving its recommendation accuracy.
Relying solely on embeddings without inference capabilities.
説明
Incorrect: Embeddings alone do not provide actionable recommendations.
全体的な説明
Fine-tuning on domain-specific data ensures the LLM generates actionable insights aligned with customer purchase patterns.
ドメイン
Application Development
