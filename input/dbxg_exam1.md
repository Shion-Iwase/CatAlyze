問題1
未回答
A Generative AI Engineer would like an LLM to generate formatted JSON from emails. This requires parsing and extracting the following information: order ID, date, and sender email. Here’s a sample email: Date: April 23, 2024 Time: 4:22 PM From: anjali.thayer@example.com To: support@company.com Subject: Shipment details Hey there, I have a shipment (order ID is CD34RFT). Can you please send me an update? Thank you, Anjali They need to write a prompt that will extract the relevant information in JSON format with the highest level of output accuracy. Which prompt will achieve this?
You will receive customer emails and need to extract date, sender email, and order ID. Return the extracted information in JSON format.
説明
Incorrect: Although it specifies JSON, the lack of an example can lead to ambiguous or inconsistent outputs.
You will receive customer emails and need to extract date, sender email, and order ID. Return the extracted information in a human-readable format.
説明
Incorrect: A human-readable format does not meet the requirement to output data in JSON.
正解
You will receive customer emails and need to extract date, sender email, and order ID. Return the extracted information in JSON format. Here’s an example: {“date”: “April 16, 2024”, “sender_email”: “john.doe@example.com”, “order_id”: “ORD98765”}.
説明
Correct: This prompt includes both clear instructions and an example JSON output, ensuring high accuracy.
You will receive customer emails and need to extract date, sender email, and order ID. You should return the date, sender email, and order ID information in JSON format.
説明
Incorrect: While this specifies JSON, it does not provide an example, which may reduce clarity for the LLM.
全体的な説明
Including an example of the desired JSON output format provides explicit guidance to the LLM, ensuring high accuracy and consistency.
ドメイン
Design Applications
問題2
未回答
A Generative AI Engineer is tasked with designing a reasoning system that evaluates legal contracts for potential risks. The system must highlight risky clauses, propose alternative language, and summarize key terms. What tools should be included? (Choose two)
正しい選択
An embedding model to semantically analyze contract clauses.
説明
Correct: Embeddings help understand clause context and identify risks.
A classification model to categorize clauses by risk level.
説明
Incorrect: Categorization alone does not provide alternative language or summaries.
A decision tree to guide users through contract sections.
説明
Incorrect: Decision trees are too rigid for dynamic risk evaluation and proposals.
正しい選択
A retrieval system to fetch legal precedents or alternative clause templates.
説明
Correct: Retrievers provide supporting content for proposed changes.
A visualization tool to highlight risky clauses interactively.
説明
Incorrect: Visualization improves usability but does not aid risk evaluation or proposals.
全体的な説明
Embeddings and retrieval systems enable dynamic risk evaluation, clause suggestions, and contract summarization effectively.
ドメイン
Design Applications
問題3
未回答
A small and cost-conscious startup in cancer research wants to build a RAG application using Foundation Model APIs. How can they build a quality application while remaining cost-efficient?
Limit the number of relevant documents available for retrieval.
説明
Incorrect: Reducing document availability may lower the application’s quality.
正解
Pick a smaller LLM that is domain-specific.
説明
Correct: Smaller, domain-specific LLMs reduce costs while maintaining relevance and accuracy.
Limit the number of queries a customer can send per day.
説明
Incorrect: This reduces usage but does not improve the application’s quality-cost balance.
Use the largest LLM for best performance.
説明
Incorrect: Larger models increase costs unnecessarily for the startup’s needs.
全体的な説明
Smaller, domain-specific LLMs strike a balance between quality and cost, catering to the startup’s specific needs.
ドメイン
Assembling and Deploying Applications
問題4
未回答
A Generative AI Engineer is building a RAG application that answers questions about internal documents for SnoPen AI. The source documents may contain irrelevant content, such as ads or non-company-specific information. Which approach is advisable to filter irrelevant information?
Keep all articles because the RAG application needs to understand non-company content to avoid answering questions about them.
説明
Incorrect: Retaining irrelevant documents increases noise and reduces retrieval quality.
Include in the system prompt that any information it sees will be about SnoPen AI, even if no data filtering is performed.
説明
Incorrect: A system prompt cannot compensate for a lack of proper document filtering.
正解
Include in the system prompt that the application is not supposed to answer any questions unrelated to SnoPen AI.
説明
Correct: This ensures that answers are scoped to company-specific content.
Consolidate all SnoPen AI-related documents into a single chunk in the vector database.
説明
Incorrect: Consolidating documents reduces granularity and retrieval precision.
全体的な説明
Including constraints in the system prompt ensures the application focuses solely on SnoPen AI-related questions.
ドメイン
Design Applications
問題5
未回答
What is an effective method to preprocess prompts using custom code before sending them to an LLM?
Rather than preprocessing prompts, it’s more effective to postprocess the LLM outputs to align the outputs to desired outcomes
説明
Incorrect: While postprocessing is useful, preprocessing ensures the prompt aligns with task requirements before being sent to the LLM.
正解
Write an MLflow PyFunc model that has a separate function to process the prompts
説明
Correct: Using an MLflow PyFunc model allows custom preprocessing of prompts before they are sent to the LLM, ensuring flexibility and task alignment.
Directly modify the LLM’s internal architecture to include preprocessing steps
説明
Incorrect: Modifying the LLM’s internal architecture is unnecessary and impractical for preprocessing prompts.
It is better not to introduce custom code to preprocess prompts as the LLM has not been trained with examples of the preprocessed prompts
説明
Incorrect: Preprocessing prompts is common and does not require retraining the LLM.
全体的な説明
A PyFunc model is a robust and scalable solution for preprocessing prompts, allowing custom logic to align inputs with desired outcomes.
ドメイン
Application Development
問題6
未回答
A Generative AI Engineer is developing a RAG application for a large dataset of customer support tickets. However, the application is producing incomplete responses, where the answers are cut off or lack sufficient detail. What strategy should the engineer apply to mitigate this issue? (Choose two)
正しい選択
Decrease the chunk size of documents to ensure more manageable context for the LLM.
説明
Correct: Decreasing chunk size ensures the LLM can fully process and retrieve relevant chunks within its context window, improving response completeness.
Increase the chunk size of documents to reduce fragmentation of context.
説明
Incorrect: Increasing chunk size risks exceeding token limits for the LLM, worsening the issue of incomplete responses.
Use a larger embedding model to improve the quality of embeddings and document retrieval.
説明
Incorrect: While a larger embedding model can enhance retrieval quality, it does not directly address incomplete responses caused by context limitations.
Limit the number of retrieved chunks to minimize response errors.
説明
Incorrect: Reducing the number of retrieved chunks may lead to incomplete context, exacerbating the issue.
正しい選択
Add segment labels (e.g., section headers) to the chunks to improve context relevance during retrieval.
説明
Correct: Including segment labels enhances the LLM's understanding of the chunked context, reducing the chances of incomplete or irrelevant responses.
全体的な説明
Decreasing the chunk size ensures that context fits within the LLM’s token limit, while adding segment labels provides clearer structure for the model to generate complete responses.
ドメイン
Data Preparation
問題7
未回答
A Generative AI Engineer is tasked with developing an application that is based on an open-source large language model (LLM). They need a foundation LLM with a large context window. Which model fits this need?
Llama2-70B
説明
Incorrect: Llama2-70B is powerful but does not have as large a context window as MPT-30B.
DistilBERT
説明
Incorrect: DistilBERT is a smaller, distilled version of BERT and does not have a large context window.
DBRX
説明
Incorrect: DBRX is not a known or relevant model for this use case.
正解
MPT-30B
説明
Correct: MPT-30B is an open-source LLM with a large context window, making it suitable for handling extensive input text.
全体的な説明
MPT-30B is an open-source model optimized for applications requiring a large context window, making it the best choice for this requirement.
ドメイン
Application Development
問題8
未回答
A Generative AI Engineer is developing a fraud detection system for an e-commerce platform. The system uses an LLM to flag suspicious transactions based on textual descriptions, customer history, and transaction metadata. The engineer wants to track multiple model experiments, record performance metrics, and ensure the selected model can be easily deployed for production. Which approach should they use?
Use a cloud-based document management system to track experiments and deployment steps.
説明
Incorrect: Cloud-based document systems are not designed for tracking machine learning experiments or deployments.
Use TensorFlow's built-in logging and deployment tools.
説明
Incorrect: TensorFlow's tools are useful for deep learning models but lack the general-purpose lifecycle management capabilities of MLflow.
Use a spreadsheet to manually record experiment results and maintain a log of model configurations.
説明
Incorrect: Manual tracking is error-prone, inefficient, and unsuitable for production-grade workflows.
Write custom Python scripts to store experiment logs in a local file system and deploy the model using Flask.
説明
Incorrect: Custom scripts lack the robustness and scalability provided by MLflow for tracking and deployment.
正解
Use MLflow to log model experiments, track performance metrics, and streamline deployment to production.
説明
Correct: MLflow is designed for managing the machine learning lifecycle, allowing experiment tracking, artifact logging, and easy deployment.
全体的な説明
MLflow provides a complete solution for tracking experiments, logging performance metrics, and deploying the selected model, making it ideal for building and deploying machine learning systems efficiently.
ドメイン
Application Development
問題9
未回答
A Generative AI Engineer is tasked with chunking and indexing legal texts for a RAG application. The legal texts contain lengthy sections, some exceeding token limits. What is the best chunking strategy?
Overlap all chunks by 30% to ensure context preservation.
説明
Incorrect: Excessive overlap creates redundancy without necessarily improving relevance.
正解
Split the text into logical sections based on headings and subheadings, ensuring chunks remain under token limits.
説明
Correct: Logical chunking preserves context and ensures compliance with token constraints.
Process each document as a single chunk.
説明
Incorrect: Single chunks exceeding token limits are infeasible for retrieval and processing.
Split the text into equal-sized chunks without considering structure.
説明
Incorrect: Equal-sized chunks risk breaking meaningful sections, reducing relevance.
全体的な説明
Logical chunking ensures meaningful content is preserved while adhering to token limits, optimizing retrieval quality.
ドメイン
Data Preparation
問題10
未回答
A Generative AI Engineer wants to build an LLM-based solution to help a restaurant improve its online customer experience with bookings by automatically handling common customer inquiries. The goal of the solution is to minimize escalations to human intervention and phone calls while maintaining a personalized interaction. To design the solution, the Generative AI Engineer needs to define the input data to the LLM and the task it should perform. Which input/output pair will support their goal?
正解
Input: Online chat logs; Output: Buttons that represent choices for booking details

説明
Using online chat logs as input to generate buttons representing choices for booking details aligns with the goal of minimizing escalations to human intervention and phone calls while maintaining personalized interactions. By providing predefined choices, the solution can automate responses to common inquiries and guide customers through the booking process.
Input: Customer reviews; Output: Classify review sentiment

説明
Classifying review sentiment based on customer reviews is not directly related to the goal of minimizing escalations to human intervention and phone calls while maintaining personalized interactions in the context of improving online customer experience with bookings. This task focuses on sentiment analysis rather than providing automated responses to inquiries.
Input: Online chat logs; Output: Cancellation options

説明
Generating cancellation options based on online chat logs as input does not directly support the goal of minimizing escalations to human intervention and phone calls while maintaining personalized interactions. While providing cancellation options is important, the primary focus should be on automating responses to common inquiries related to bookings.
Input: Online chat logs; Output: Group the chat logs by users, followed by summarizing each user’s interactions

説明
Grouping chat logs by users and summarizing interactions does not directly support the goal of minimizing escalations to human intervention and phone calls while maintaining personalized interactions. This task focuses more on organizing data rather than providing automated responses to common inquiries.
全体的な説明
Generating interactive options for booking inquiries aligns with the goal of minimizing escalations while maintaining personalization.
ドメイン
Design Applications
問題11
未回答
A Generative AI Engineer is building a system which will answer questions on latest stock news articles. Which will NOT help with ensuring the outputs are relevant to financial news?
Increase the compute to improve processing speed of questions to allow greater relevancy analysis.
説明
Incorrect: While compute speed improves performance, it does not directly impact content relevance.
正解
Implement a profanity filter to screen out offensive language.
説明
Correct: A profanity filter does not enhance relevance to financial news, as it is focused on language safety rather than domain-specific content.
Incorporate manual reviews to correct any problematic outputs prior to sending to the users.
説明
Incorrect: Manual reviews improve relevance by ensuring outputs are specific and appropriate.
Implement a comprehensive guardrail framework that includes policies for content filters tailored to the finance sector.
説明
Incorrect: Tailored content filters ensure relevance by filtering out inappropriate or irrelevant content.
全体的な説明
A profanity filter does not affect the relevance of financial news outputs, as it addresses only the appropriateness of language.
ドメイン
Governance
問題12
未回答
A Generative AI Engineer is tasked with deploying an application that takes advantage of a custom MLflow Pyfunc model to return some interim results. How should they configure the endpoint to pass the secrets and credentials?
正解
Add credentials using environment variables
説明
Correct: Environment variables are a secure and scalable way to pass secrets or credentials to an application.
Pass variables using the Databricks Feature Store API
説明
Incorrect: The Feature Store API is used for managing and retrieving feature data, not for passing secrets or credentials.
Use spark.conf.set()
説明
Incorrect: spark.conf.set() is typically used for Spark configuration and is not suitable for securely passing secrets or credentials.
Pass the secrets in plain text
説明
Incorrect: Passing secrets in plain text poses significant security risks and is not recommended.
全体的な説明
Environment variables ensure secure handling of secrets or credentials without exposing them in the code.
ドメイン
Assembling and Deploying Applications
問題13
未回答
A Generative AI Engineer is creating an agent-based LLM system for their favorite monster truck team. The system can answer text-based questions about the team, look up event dates via an API call, or query tables on the team’s latest standings. How could the Generative AI Engineer best design these capabilities into their system?
正解
Write a system prompt for the agent listing available tools and bundle it into an agent system that runs a number of calls to solve a query.
説明
Correct: Defining tools for the agent and using them to process different queries ensures the system can handle diverse question types effectively.
Instruct the LLM to respond with “RAG,” “API,” or “TABLE” depending on the query, then use text parsing and conditional statements to resolve the query.
説明
Incorrect: This method lacks scalability and doesn’t align with agent-based design.
Build a system prompt with all possible event dates and table information in the system prompt. Use a RAG architecture to lookup generic text questions and otherwise leverage the information in the system prompt.
説明
Incorrect: Including all information in the system prompt reduces efficiency and scalability.
Ingest PDF documents about the monster truck team into a vector store and query it in a RAG architecture.
説明
Incorrect: This approach only handles text-based questions and doesn’t address API or table queries.
全体的な説明
Using an agent with tools for handling text queries, API lookups, and table queries ensures flexibility and scalability for diverse system requirements.
ドメイン
Application Development
問題14
未回答
A Generative AI Engineer must evaluate prompt-response pairs for a customer support chatbot. What criteria are most important to ensure alignment with the model's task? (Choose two)
正しい選択
Response completeness, addressing all aspects of the query.
説明
Correct: Complete responses improve the chatbot’s usefulness and user satisfaction.
Prompt verbosity to provide context.
説明
Incorrect: Verbosity can dilute the focus of the query.
正しい選択
Prompt relevance to the customer’s query.
説明
Correct: Relevant prompts ensure the system generates meaningful responses.
Token usage efficiency to reduce computational costs.
説明
Incorrect: While important for cost, token usage does not ensure alignment.
Random sampling of responses for variety.
説明
Incorrect: Random sampling does not guarantee alignment or quality.
全体的な説明
Relevant prompts and complete responses ensure the chatbot aligns with its task, providing accurate and helpful outputs.
ドメイン
Data Preparation
問題15
未回答
A Generative AI Engineer is tasked with deploying a RAG application for customer support that integrates LLMs and a vector store. The application must comply with data privacy regulations. What compliance measures are critical? (Choose two)
正しい選択
Encrypt data at rest and in transit to protect sensitive information.
説明
Correct: Encryption ensures data security, meeting privacy regulations.
正しい選択
Use API key authentication to control access to the application.
説明
Correct: API key authentication ensures that only authorized users access the system.
Allow unrestricted access to the application during initial deployment.
説明
Incorrect: Unrestricted access compromises compliance and security.
Skip encryption and rely on private network access.
説明
Incorrect: Private networks alone do not guarantee data security or compliance.
Use public vector stores to simplify storage.
説明
Incorrect: Public vector stores may violate data privacy regulations by exposing sensitive data.
全体的な説明
Encryption and API key authentication are essential for ensuring compliance and security in customer support applications.
ドメイン
Assembling and Deploying Applications
問題16
未回答
A Generative AI Engineer is developing a patient-facing healthcare-focused chatbot. If the patient’s question is not a medical emergency, the chatbot should solicit more information and suggest relevant articles. If the question is urgent, it should direct the patient to emergency services. Given the input: “I have been experiencing severe headaches and dizziness for the past two days,” which response is most appropriate?
Headaches can be tough. Hope you feel better soon!
説明
Incorrect: This response is too casual and does not address the urgency of the symptoms.
Please provide your age, recent activities, and any other symptoms you have noticed along with your headaches and dizziness.
説明
Incorrect: While gathering more details is helpful, it is not appropriate given the potential emergency described.
正解
Please call your local emergency services.
説明
Correct: Severe headaches and dizziness could indicate a medical emergency, so directing the user to emergency services is the most appropriate response.
Here are a few relevant articles for your browsing. Let me know if you have questions after reading them.
説明
Incorrect: Providing articles alone does not address the severity of the symptoms.
全体的な説明
When symptoms suggest a potential emergency, the chatbot must prioritize safety by directing the user to contact emergency services.
ドメイン
Governance
問題17
未回答
A Generative AI Engineer created a RAG application for employees to retrieve answers from an internal knowledge base. Now they want to formally evaluate the system’s performance. How should they evaluate the system?
Benchmark multiple LLMs with the same data and pick the best LLM for the job.
説明
Incorrect: Benchmarking LLMs does not address retrieval-specific performance.
Use cosine similarity score to comprehensively evaluate the quality of the final generated answers.
説明
Incorrect: Cosine similarity measures retrieval quality but does not fully evaluate the generated answers.
Use an LLM-as-a-judge to evaluate the quality of the final answers generated.
説明
Incorrect: LLM-as-a-judge evaluation is subjective and less reliable than curated datasets.
正解
Curate a dataset to test retrieval and generation separately. Use MLflow’s built-in evaluation metrics for evaluation.
説明
Correct: Testing retrieval and generation separately ensures comprehensive evaluation of both components.
全体的な説明
Separately evaluating retrieval and generation with curated datasets and MLflow metrics provides a systematic approach to improving performance.
ドメイン
Evaluation and Monitoring
問題18
未回答
A Generative AI Engineer is creating an LLM system that retrieves news articles from the year 1918 related to a user query and summarizes them. However, the summaries often include explanations of how they were generated, which is undesirable. Which change should the engineer implement to resolve this?
正解
Provide few-shot examples of desired output format to the system and/or user prompt.
説明
Correct: Few-shot examples guide the LLM to produce only the desired summary format, mitigating undesired explanations.
Split the LLM output by newline characters to truncate away the summarization explanation.
説明
Incorrect: Splitting the output by newlines may cut off critical parts of the summary and does not address the root issue.
Revisit their document ingestion logic, ensuring that the news articles are being ingested properly.
説明
Incorrect: Ingestion logic determines input quality but is not responsible for undesired output explanations.
Tune the chunk size of news articles or experiment with different embedding models.
説明
Incorrect: Chunk size or embedding models impact retrieval quality but do not influence output formatting.
全体的な説明
Providing few-shot examples demonstrates the correct format, ensuring the LLM outputs concise summaries without additional explanations.
ドメイン
Design Applications
問題19
未回答
A Generative AI Engineer is designing an LLM-powered live sports commentary platform that provides real-time updates and analyses. This platform aims to generate summaries based on live game scores, rather than relying on potentially outdated articles. Which tool will enable access to real-time data for generating these game analyses?
正解
Feature Serving
説明
Correct: Feature Serving enables real-time access to data, making it suitable for live commentary and analyses.
Foundation Model APIs
説明
Incorrect: Foundation Model APIs provide LLM capabilities but do not ingest or serve real-time data.
AutoML
説明
Incorrect: AutoML is used for training and deploying models but does not focus on real-time data serving.
DatabricksIQ
説明
Incorrect: DatabricksIQ does not specialize in real-time data ingestion or serving for applications.
全体的な説明
Feature Serving is the ideal tool for accessing real-time data, ensuring the platform provides up-to-date analyses for users.
ドメイン
Assembling and Deploying Applications
問題20
未回答
What is the most suitable library for building a multi-step LLM-based workflow?
PySpark
説明
Incorrect: PySpark is a distributed computing framework and not intended for LLM-based workflow development.
TensorFlow
説明
Incorrect: TensorFlow is a deep learning framework but not specific to multi-step LLM-based workflows.
正解
LangChain
説明
Correct: LangChain is designed for building multi-step workflows involving LLMs, including tools for prompts, chains, and agents.
Pandas
説明
Incorrect: Pandas is used for data manipulation and analysis but does not support building LLM workflows.
全体的な説明
LangChain provides the tools needed for creating complex workflows with LLMs, making it the most suitable library for this task.
ドメイン
Application Development
問題21
未回答
A Generative AI Engineer is tasked with enhancing a RAG application that uses customer transaction data stored in Delta tables in the production environment. The team needs to test changes in the development environment using realistic data without compromising security or affecting production performance. What is the best approach in Databricks?
Point the development environment directly to the production Delta table for real-time testing.
説明
Incorrect: Direct access to production risks affecting live performance and compromising sensitive data.
Use a synthetic dataset generated within Databricks that mimics the schema and general characteristics of production data.
説明
Incorrect: Synthetic data may not capture the nuances of real-world data, leading to less reliable testing.
Use Databricks' Delta Sharing to provide limited query access to the production Delta table from the development environment.
説明
Incorrect: While Delta Sharing enables secure sharing, it is better suited for external partners or collaborators, not internal development workflows.
Copy the entire Delta table into the development environment without any modifications.
説明
Incorrect: Copying data without anonymization risks exposing sensitive information and increases storage and cost overhead.
正解
Use Databricks' Unity Catalog to create a development-specific view of the production data with access controls and data masking for sensitive fields.
説明
Correct: Unity Catalog supports creating secure views and masking rules, allowing development to access realistic data safely without compromising sensitive information.
全体的な説明
Using Unity Catalog to create a masked view of production data ensures the development environment is safe, secure, and compliant while providing realistic data for testing.
ドメイン
Governance
問題22
未回答
A Generative AI Engineer is using the code below to test setting up a vector store: from databricks.vector_search.client import VectorSearchClient vsc = VectorSearchClient() vsc.create_endpoint( name="vector_search_test", endpoint_type="STANDARD" ) Assuming they intend to use Databricks-managed embeddings with the default embedding model, what should be the next logical function call?
vsc.similarity_search()
説明
Incorrect: Similarity search requires an existing index and cannot be performed at this stage of the workflow.
vsc.create_direct_access_index()
説明
Incorrect: While suitable for general use, this option doesn’t align with the question’s focus on Databricks-managed embeddings.
正解
vsc.create_delta_sync_index()
説明
Correct: This function creates a Delta-synced index, ideal for managing embeddings in Databricks-managed workflows with default settings.
vsc.get_index()
説明
Incorrect: This retrieves an existing index, but no index has been created yet.
全体的な説明
Creating a Delta-synced index allows seamless embedding synchronization with Delta tables, aligning with Databricks-managed workflows and default embedding configurations.
ドメイン
Assembling and Deploying Applications
問題23
未回答
A Generative AI Engineer is creating an application requiring up-to-date news articles and stock prices. How should they architect the system?
Query the Delta table for stock prices and use an LLM to generate search queries for stock volatility analysis.
説明
Incorrect: Generating search queries does not streamline data retrieval and response generation.
Use an LLM to summarize news articles and lookup stock tickers to find stock prices.
説明
Incorrect: This process does not efficiently integrate data retrieval and generation.
Download and store news articles and stock prices in a vector store. Use a RAG architecture to retrieve and generate responses at runtime.
説明
Incorrect: RAG is effective for retrieval but does not incorporate real-time updates for stock prices.
正解
Create an agent with tools for SQL querying of Delta tables and web searching. Provide retrieved values to the LLM for response generation.
説明
Correct: An agent system with tools for SQL querying and web searching efficiently integrates structured and unstructured data retrieval for real-time responses.
全体的な説明
An agent-based architecture combining SQL queries and web search ensures real-time integration of stock prices and news for comprehensive responses.
ドメイン
Assembling and Deploying Applications
問題24
未回答
A Generative AI Engineer has been asked to build an LLM-based question-answering application. The application should take into account new documents that are frequently published. The engineer wants to build this application with the least cost, least development effort, and lowest operational cost. Which combination of chaining components and configuration meets these requirements?
The LLM needs to be frequently fine-tuned with the new documents in order to provide the most up-to-date answers.
説明
Incorrect: Frequent fine-tuning is costly and time-consuming, making it impractical for low-cost applications.
For the application a prompt, an agent, and a fine-tuned LLM are required. The agent is used by the LLM to retrieve relevant content that is inserted into the prompt which is given to the LLM to generate answers.
説明
Incorrect: Fine-tuning is not needed here and increases development effort unnecessarily.
For the question-answering application, prompt engineering and an LLM are required to generate answers.
説明
Incorrect: This setup would not allow retrieval of up-to-date documents, failing to meet the requirements.
正解
For the application a prompt, a retriever, and an LLM are required. The retriever output is inserted into the prompt which is given to the LLM to generate answers.
説明
Correct: This approach ensures the application dynamically retrieves and processes relevant documents with minimal complexity and cost.
全体的な説明
A prompt, retriever, and LLM setup achieves dynamic responses while minimizing cost and complexity, making it the ideal choice for this scenario.
ドメイン
Application Development
問題25
未回答
A Generative AI Engineer is building a RAG application that will rely on context retrieved from source documents that are currently in PDF format. These PDFs can contain both text and images. They want to develop a solution using the least amount of lines of code. Which Python package should be used to extract the text from the source documents?
flask
説明
Incorrect: Flask is a web framework and cannot extract text from PDFs.
beautifulsoup
説明
Incorrect: BeautifulSoup is used for parsing HTML and XML documents, not PDFs.
numpy
説明
Incorrect: Numpy is a numerical computation library and cannot process PDFs.
正解
unstructured
説明
Correct: The unstructured Python library is specifically designed for handling PDFs, including those with both text and images, and requires minimal coding effort.
全体的な説明
The unstructured library is designed to efficiently extract text and other structured data from PDFs with minimal code.
ドメイン
Data Preparation
問題26
未回答
A Generative AI Engineer is building a system that generates poem-like article summaries (e.g., haikus). The output doesn’t match the desired tone or style. Which approach will NOT improve the response?
Fine-tune the LLM on a dataset of desired tone and style.
説明
Incorrect: Fine-tuning tailors the model to consistently generate text in the desired tone or style.
正解
Use a neutralizer to normalize the tone and style of the underlying documents.
説明
Correct: Neutralizing input documents does not directly address the LLM's output tone or style.
Include few-shot examples in the prompt to the LLM.
説明
Incorrect: Few-shot examples train the LLM to emulate the desired style.
Provide the LLM with a prompt that explicitly instructs it to generate text in the desired tone and style.
説明
Incorrect: A clear prompt can significantly improve the generated tone and style.
全体的な説明
Neutralizing input documents affects their content but does not align the LLM's output tone or style with the desired result.
ドメイン
Application Development
問題27
未回答
A Generative AI Engineer has trained an LLM on Databricks and wants to deploy it. What is the easiest process for deploying the model on Databricks?
Wrap the LLM into a Flask app and serve using Gunicorn.
説明
Incorrect: Flask/Gunicorn setups are unnecessary for Databricks, which provides managed serving endpoints.
Log the model as a pickle object, upload to Unity Catalog Volume, register it with MLflow, and start a serving endpoint.
説明
Incorrect: Pickle is not the standard format for deploying models on Databricks.
正解
Log the model using MLflow during training, directly register it to Unity Catalog using the MLflow API, and start a serving endpoint.
説明
Correct: This is the standard and easiest process for deploying a model on Databricks.
Save the model locally, build a Docker image, and run a Docker container.
説明
Incorrect: While functional, this process is more complex than using MLflow.
全体的な説明
MLflow simplifies model deployment on Databricks by managing registration and serving processes seamlessly.
ドメイン
Assembling and Deploying Applications
問題28
未回答
A Generative AI Engineer is tasked with extracting content from a set of HTML-based user manuals. The manuals contain product details in nested tables. What is the most suitable tool for text extraction? (Choose two)
pytesseract for OCR-based text extraction.
説明
Incorrect: pytesseract is unnecessary for extracting text from HTML files.
正しい選択
LXML for faster parsing and processing of large HTML documents.
説明
Correct: LXML enhances efficiency for large-scale HTML processing.
正しい選択
BeautifulSoup for parsing HTML and extracting text from structured elements.
説明
Correct: BeautifulSoup is ideal for navigating and extracting structured content from HTML.
pdfplumber for extracting table data.
説明
Incorrect: pdfplumber is designed for PDFs, not HTML.
PyPDF2 for reading text from user manuals.
説明
Incorrect: PyPDF2 does not parse HTML content.
全体的な説明
Combining BeautifulSoup and LXML ensures robust and efficient extraction of structured text from HTML-based manuals.
ドメイン
Data Preparation
問題29
未回答
A Generative AI Engineer has been asked to design an LLM-based application that answers employee HR questions using HR PDF documentation. Which set of high-level tasks should the Generative AI Engineer's system perform?
Calculate averaged embeddings for each HR document, compare embeddings to user query to find the best document. Pass the best document with the user query into an LLM with a large context window to generate a response to the employee.
説明
Calculating averaged embeddings for each HR document and comparing them to the user query is not an efficient way to find the best document. Additionally, using an LLM with a large context window may not be necessary for generating responses to HR questions based on PDF documentation.
Use an LLM to summarize HR documentation. Provide summaries of documentation and user query into an LLM with a large context window to generate a response to the user.
説明
Using an LLM to summarize HR documentation may not provide accurate responses to employee HR questions, as the summarization may lose important details and context from the original documentation. Providing summaries of documentation and user queries directly to an LLM may not yield the desired results.
Create an interaction matrix of historical employee questions and HR documentation. Use ALS to factorize the matrix and create embeddings. Calculate the embeddings of new queries and use them to find the best HR documentation. Use an LLM to generate a response to the employee question based upon the documentation retrieved.
説明
Creating an interaction matrix of historical employee questions and HR documentation and using ALS to factorize the matrix may not be the most effective approach for generating responses to employee HR questions. This method may not capture the nuances and context required for accurate responses.
正解
Split HR documentation into chunks and embed into a vector store. Use the employee question to retrieve best-matched chunks of documentation, and use the LLM to generate a response to the employee based upon the documentation retrieved.
説明
Splitting HR documentation into chunks and embedding them into a vector store allows for efficient retrieval of relevant information based on employee questions. Using the LLM to generate responses based on the retrieved documentation chunks ensures that the responses are contextually relevant and accurate, making this approach the most suitable for the task at hand.
全体的な説明
Chunking HR documents and embedding them into a vector store ensures accurate retrieval and relevance for employee questions, making it the best solution.
ドメイン
Application Development
問題30
未回答
A Generative AI Engineer received the following business requirements for an external chatbot: The chatbot needs to know what types of questions the user asks and routes to appropriate models to answer the questions. For example, the user might ask about upcoming event details or ticket purchases. What is an ideal workflow for such a chatbot?
The chatbot should only process payments.
説明
Incorrect: This ignores the broader scope of user queries.
正解
The chatbot should be implemented as a multi-step LLM workflow. First, identify the type of question asked, then route the question to the appropriate model. If it’s an upcoming event question, send the query to a text-to-SQL model. If it’s about ticket purchasing, the customer should be redirected to a payment platform.
説明
Correct: A multi-step LLM workflow ensures flexibility and efficiency in handling diverse user queries.
There should be two different chatbots handling different types of user queries.
説明
Incorrect: Splitting functionality into separate chatbots is inefficient and increases complexity.
The chatbot should only look at previous event information.
説明
Incorrect: Limiting the chatbot to event history neglects other query types, such as ticket purchases.
全体的な説明
A multi-step LLM workflow allows the chatbot to handle diverse queries efficiently by identifying the query type and routing it appropriately.
ドメイン
Application Development
問題31
未回答
A Generative AI Engineer must evaluate the suitability of a model for summarizing academic research papers. The evaluation should consider semantic accuracy and domain relevance. What methods should they prioritize? (Choose two)
Evaluate token usage to optimize cost.
説明
Incorrect: Token usage is unrelated to relevance or semantic accuracy.
正しい選択
Use ROUGE for content overlap and domain-specific metrics for semantic accuracy.
説明
Correct: ROUGE evaluates content overlap, while domain-specific metrics ensure relevance and semantic fidelity.
Measure perplexity to evaluate fluency.
説明
Incorrect: Perplexity assesses language fluency but not semantic accuracy or domain relevance.
正しい選択
Perform human evaluation to assess the summaries for domain correctness.
説明
Correct: Human evaluation captures nuanced insights that automated metrics may miss.
Use BLEU to measure similarity with reference texts.
説明
Incorrect: BLEU is more suited to translation tasks, not academic summarization.
全体的な説明
Combining ROUGE with human evaluation ensures accurate and relevant summaries tailored to academic research.
ドメイン
Application Development
問題32
未回答
A team wants to serve a code generation model as an assistant for their software developers. It should support multiple programming languages. Quality is the primary objective. Which of the Databricks Foundation Model APIs, or models available in the Marketplace, would be the best fit?
正解
CodeLlama-34B
説明
Correct: CodeLlama-34B is specifically designed for code generation, supports multiple programming languages, and provides high-quality outputs for developer tasks.
BGE-large
説明
Incorrect: BGE-large is primarily an embedding model and is not suitable for code generation tasks.
MPT-7b
説明
Incorrect: MPT-7b is a general-purpose language model with a smaller capacity and is less specialized for code generation.
Llama2-70b
説明
Incorrect: While Llama2-70b is a powerful general-purpose model, it is not specialized for code generation tasks.
全体的な説明
CodeLlama-34B is a specialized code generation model that supports multiple programming languages, making it the best choice for the team's requirements.
ドメイン
Assembling and Deploying Applications
問題33
未回答
A Generative AI Engineer has successfully chunked unstructured documents and wants to store the chunks in a Vector Search index. The current dataframe has columns for the original document name and an array of text chunks. What is the most performant way to store this dataframe?
正解
Flatten the dataframe to one chunk per row, create a unique identifier for each row, and save to a Delta table.
説明
Correct: Flattening ensures efficient retrieval and storage of individual chunks, which is optimal for a Vector Search index.
Store each chunk as an independent JSON file in Unity Catalog Volume.
説明
Incorrect: JSON storage in Unity Catalog is less performant for large-scale retrieval than Delta tables.
First create a unique identifier for each document, then save to a Delta table.
説明
Incorrect: This does not address the need to store individual chunks.
Split the data into train and test sets, create a unique identifier for each document, then save to a Delta table.
説明
Incorrect: Splitting into train and test sets is unnecessary for storage in a Vector Search index.
全体的な説明
Flattening the dataframe to store individual chunks with unique identifiers optimizes retrieval in a Vector Search index.
ドメイン
Data Preparation
問題34
未回答
A Generative AI Engineer is building an LLM application that generates summaries of technical research articles. Which metric should they use to evaluate the quality of the summaries?
Latency
説明
Incorrect: Latency measures response time, not the accuracy or relevance of summaries.
正解
ROUGE
説明
Correct: ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is a metric specifically designed to evaluate summarization quality by comparing generated summaries to reference summaries.
BLEU
説明
Incorrect: BLEU is used for evaluating translation tasks, not summarization.
Word Count
説明
Incorrect: Word count does not evaluate quality; it only measures the length of the text.
全体的な説明
ROUGE evaluates summarization quality by measuring overlap in recall, precision, and F1 score between generated and reference summaries. It is a standard metric for this use case.
ドメイン
Evaluation and Monitoring
問題35
未回答
A Generative AI Engineer is designing a chatbot for a gaming company to engage users during online gameplay. Which metric would help increase engagement and retention?
Randomness
説明
Incorrect: Randomness may confuse users and reduce engagement.
Lack of relevance
説明
Incorrect: Irrelevant responses frustrate users and reduce engagement.
正解
Diversity of responses
説明
Correct: Diverse responses maintain user interest and increase retention.
Repetition of responses
説明
Incorrect: Repetitive responses bore users and lower retention.
全体的な説明
Diverse responses keep the chatbot engaging and help maintain user interest, improving retention during gameplay.
ドメイン
Evaluation and Monitoring
問題36
未回答
A Generative AI Engineer is tasked with developing a preprocessing pipeline for a custom LLM application that normalizes user queries and removes unnecessary symbols. Which approach should they use?
Use a Delta Live Table to preprocess user queries before passing them to the LLM.
説明
Incorrect: Delta Live Tables are designed for structured data pipelines, not for preprocessing user queries in real time.
Use a Spark job to normalize and preprocess user queries.
説明
Incorrect: While Spark is powerful, it is overkill for lightweight preprocessing tasks and adds unnecessary complexity.
正解
Write a PyFunc model to implement the preprocessing logic and integrate it with the LLM application.
説明
Correct: PyFunc models allow for modular and reusable custom Python-based preprocessing steps, making them ideal for query normalization.
Fine-tune the LLM to preprocess the user queries internally.
説明
Incorrect: Fine-tuning the LLM for preprocessing is resource-intensive and not practical compared to using PyFunc.
全体的な説明
PyFunc is an MLflow feature that enables custom preprocessing or postprocessing logic to be easily integrated with machine learning workflows. It is efficient, reusable, and ideal for query normalization tasks.
ドメイン
Application Development
問題37
未回答
A Generative AI Engineer is tasked with developing a RAG application for a small internal group of experts at their company. The application must answer sensitive and confidential questions using an internal knowledge base. High-quality answers are a priority, while latency and throughput are not concerns due to the small user group. Regulatory requirements prohibit transmitting any information to third parties. Which model meets all the requirements?
Dolly 1.5B
説明
Incorrect: Dolly is an open-source model that ensures data confidentiality, but its quality is limited compared to larger models like Llama2-70B, making it unsuitable for high-quality, expert-level answers.
OpenAI GPT-4
説明
Incorrect: While GPT-4 provides exceptional quality, it requires external API access, which violates the regulatory requirement of keeping data entirely internal.
BGE-large
説明
Incorrect: BGE-large is primarily an embedding model designed for semantic search and retrieval, not generating high-quality, detailed answers.
正解
Llama2-70B
説明
Correct: Llama2-70B is an open-source, high-quality model that supports on-premises deployment, ensuring data confidentiality while delivering the best possible quality for sensitive, expert-level queries.
全体的な説明
Llama2-70B is the best choice for this scenario, meeting the requirements of high-quality answers, data confidentiality, and regulatory compliance. It is open-source, deployable internally, and suited for expert-level applications.
ドメイン
Application Development
問題38
未回答
A Generative AI Engineer is designing a RAG application to help users answer questions about technical regulations as they learn a new sport. What sequence of steps should they follow to build and deploy this application?
正解
Ingest documents from a source → Index the documents and save to Vector Search → User submits queries against an LLM → LLM retrieves relevant documents → LLM generates a response → Evaluate model → Deploy it using Model Serving.
説明
Correct: This sequence follows the proper workflow, ensuring evaluation is completed before final deployment.
Ingest documents from a source → Index the documents and save to Vector Search → User submits queries against an LLM → LLM retrieves relevant documents → Evaluate model → LLM generates a response → Deploy it using Model Serving.
説明
Incorrect: This sequence evaluates the model too late in the process, which could lead to deploying an underperforming pipeline.
Ingest documents from a source → Index the documents and save to Vector Search → Evaluate model → Deploy it using Model Serving.
説明
Incorrect: This omits crucial steps like query submission and response generation.
User submits queries against an LLM → Ingest documents from a source → Index the documents and save to Vector Search → LLM retrieves relevant documents → LLM generates a response → Evaluate model → Deploy it using Model Serving.
説明
Incorrect: This sequence is illogical as queries cannot occur before documents are ingested and indexed.
全体的な説明
Following the proper sequence ensures the RAG application is correctly built, tested, and deployed to handle user queries effectively.
ドメイン
Assembling and Deploying Applications
問題39
未回答
A Generative AI Engineer is evaluating the quality of translations generated by an LLM-based translation application. Which metric should they use to assess the accuracy of the translations?
正解
BLEU
説明
Correct: BLEU (Bilingual Evaluation Understudy) is a widely used metric for assessing the quality of machine translations by comparing n-gram overlaps with reference translations.
Perplexity
説明
Incorrect: Perplexity measures how well a language model predicts text but does not evaluate translation quality.
Cosine Similarity
説明
Incorrect: Cosine similarity measures vector similarity and is not a standard metric for evaluating translations.
ROUGE
説明
Incorrect: ROUGE is primarily used for summarization tasks, not translation.
全体的な説明
BLEU is the standard metric for evaluating machine translation quality by measuring how closely the generated text matches reference translations using n-gram comparisons.
ドメイン
Evaluation and Monitoring
問題40
未回答
A Generative AI Engineer interfaces with an LLM designed to output “In Stock” if the product is available or “Out of Stock” if not. The engineer needs to implement a prompt to format the output correctly for call classification labels. Which prompt is most suitable?
You will be given a customer call transcript where the customer inquires about product availability. Respond with “In Stock” if the product is available or “Out of Stock” if not.
説明
Incorrect: While clear, this prompt does not format the output in the desired JSON structure.
正解
You will be given a customer call transcript where the customer asks about product availability. The outputs are either “In Stock” or “Out of Stock.” Format the output in JSON, for example: {“call_id”: “123”, “label”: “In Stock”}.
説明
Correct: This prompt provides clear instructions and the desired output format, ensuring consistency and accuracy for call classification.
Respond with “Out of Stock” if the customer asks for a product.
説明
Incorrect: This ignores the possibility of the product being available and does not address the full classification task.
Respond with “In Stock” if the customer asks for a product.
説明
Incorrect: This lacks specific instructions on how to determine availability or structure the response.
全体的な説明
The second prompt includes both clear instructions and the required JSON format, ensuring the output meets classification needs.
ドメイン
Design Applications
問題41
未回答
A Generative AI Engineer is developing an LLM application that users can use to generate personalized birthday poems based on their names. Which technique would be most effective in safeguarding the application, given the potential for malicious user inputs?
Reduce the time that the users can interact with the LLM
説明
Incorrect: Reducing interaction time does not mitigate malicious inputs or safeguard the application effectively.
Ask the LLM to remind the user that the input is malicious but continue the conversation with the user
説明
Incorrect: Continuing the conversation after identifying malicious inputs could lead to further security risks.
正解
Implement a safety filter that detects any harmful inputs and ask the LLM to respond that it is unable to assist
説明
Correct: Safety filters are designed to detect and handle harmful inputs, ensuring the application remains secure and responsible.
Increase the amount of compute that powers the LLM to process input faster
説明
Incorrect: Increasing compute power addresses performance, not security concerns related to malicious inputs.
全体的な説明
Safety filters detect harmful inputs and prevent the LLM from processing or responding to them, ensuring secure operation.
ドメイン
Governance
問題42
未回答
A Generative AI Engineer is tasked with augmenting user inputs for a chatbot that generates meal plans. The system must use user-provided ingredients and dietary restrictions to recommend meals. How should the input be augmented? (Choose two)
Use a classification model to categorize user inputs.
説明
Incorrect: Categorization alone does not enhance the chatbot’s ability to generate diverse plans.
正しい選択
Include additional context, such as portion sizes and meal preferences, in the prompt.
説明
Correct: Contextual details like portion sizes and preferences improve the quality of meal recommendations.
正しい選択
Add examples of similar meal plans in the prompt.
説明
Correct: Examples guide the model to generate more tailored and relevant outputs.
Summarize user inputs to condense key points.
説明
Incorrect: Summarization risks omitting critical details needed for meal plans.
Train a rule-based system for fixed meal plan recommendations.
説明
Incorrect: Rule-based systems lack flexibility for dynamic input augmentation.
全体的な説明
Contextual prompts and examples ensure the chatbot generates personalized and accurate meal plans based on user inputs.
ドメイン
Application Development
問題43
未回答
A Generative AI Engineer deployed an application but found that request volume is insufficient for provisioned throughput. How can they ensure cost-effectiveness for deployment?
正解
Deploy the model using pay-per-token throughput as it comes with cost guarantees.
説明
Correct: Pay-per-token ensures costs scale with usage, making it cost-effective for low request volumes.
Throttle incoming request batches manually to avoid rate-limiting issues.
説明
Incorrect: Throttling helps manage requests but does not optimize cost-effectiveness.
Change to a model with fewer parameters to reduce hardware constraints.
説明
Incorrect: Reducing model size may lower cost but does not directly address throughput-related cost issues.
Switch to using External Models instead.
説明
Incorrect: External models do not address cost-effectiveness for request throughput.
全体的な説明
Pay-per-token throughput ensures that costs align with usage, making it the best strategy for low request volumes.
ドメイン
Evaluation and Monitoring
問題44
未回答
A Generative AI Engineer is building a Generative AI system to recommend the best-matched team member for newly scoped projects. The match must consider project date availability and profile alignment with the project scope. Both the employee profile and project scope are stored as unstructured text. What system architecture should they use?
Create a tool for finding team member availability given project dates and another tool that uses an LLM to extract keywords from project scopes. Iterate through available team members’ profiles and perform keyword matching to find the best available team member.
説明
Incorrect: Keyword matching is simplistic and cannot handle the complexity of unstructured text.
Create a tool to find available team members given project dates. Create a second tool that can calculate a similarity score for a combination of team member profile and the project scope. Iterate through the team members and rank by best score to select a team member.
説明
Incorrect: This approach lacks scalability and efficiency, especially for large teams.
Create a tool for finding available team members given project dates. Embed all project scopes into a vector store, perform a retrieval using team member profiles to find the best team member.
説明
Incorrect: Embedding project scopes for retrieval using profiles is less effective than embedding team profiles and filtering based on project scope.
正解
Create a tool for finding available team members given project dates. Embed team profiles into a vector store and use the project scope and filtering to perform retrieval to find the available best-matched team members.
説明
Correct: Embedding team profiles in a vector store enables semantic matching, and retrieval ensures scalability and precision.
全体的な説明
Embedding team profiles into a vector store and using retrieval ensures precise and scalable matching for large datasets of team members and project scopes.
ドメイン
Assembling and Deploying Applications
問題45
未回答
A Generative AI Engineer is testing a simple prompt template in LangChain using the code below but is getting an error: from langchain.chains import LLMChain from langchain_community.llms import OpenAI from langchain_core.prompts import PromptTemplate prompt_template = "Tell me a {adjective} joke" prompt = PromptTemplate( input_variables=["adjective"], template=prompt_template ) llm = LLMChain(prompt=prompt) llm.generate([{"adjective": "funny"}]) Assuming the API key was properly defined, what change does the Generative AI Engineer need to make to fix their chain?
prompt_template = "Tell me a {adjective} joke" prompt = PromptTemplate( input_variables=["adjective"], template=prompt_template ) llm = LLMChain(prompt=prompt) llm.generate("funny")
説明
This fails because the generate method here improperly calls "funny" directly instead of mapping it to the input variable. It also does not address the root issue with the chain initialization.
正解
prompt_template = "Tell me a {adjective} joke" prompt = PromptTemplate( input_variables=["adjective"], template=prompt_template ) llm = LLMChain(llm=OpenAI(), prompt=prompt) llm.generate([{"adjective": "funny"}])
説明
This is the correct answer because the LLMChain must be initialized with both the PromptTemplate and the LLM instance (OpenAI()). This ensures the chain is connected to the language model for proper execution.
prompt_template = "Tell me a {adjective} joke" prompt = PromptTemplate( input_variables=["adjective"], template=prompt_template, llm=OpenAI() ) llm = LLMChain(prompt=prompt) llm.generate([{"adjective": "funny"}])
説明
The PromptTemplate cannot accept an LLM instance (e.g., OpenAI()) as an argument, so this will result in another error.
prompt_template = "Tell me a {adjective} joke" prompt = PromptTemplate( input_variables=["adjective"], template=prompt_template ) llm = LLMChain(prompt=prompt.format("funny")) llm.generate()
説明
This involves formatting the template manually, which circumvents the structured prompt framework of LangChain. This is a hack, not a fix.
全体的な説明
The error occurs because the LLMChain is not properly connected to an LLM instance, such as OpenAI(). In LangChain, the PromptTemplate defines the structure of the prompt and its input variables, while the LLMChain links this template to the LLM to enable output generation. Without an LLM instance, the chain cannot process prompts or produce responses, leading to failure. The correct solution involves initializing the LLMChain with both the PromptTemplate and the LLM. Other approaches fail because they either omit the required LLM connection, misplace components, or misuse the prompt formatting, which does not address the root issue.
ドメイン
Application Development
