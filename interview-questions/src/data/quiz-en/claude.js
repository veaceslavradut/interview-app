// Английский перевод банка квиза: claude-certified-developer (оригинальная часть).
// Порядок вариантов и опций — как в RU (правильный ответ авторски на index 0).
export const claudeCertifiedDeveloperEn = {
  'messages-endpoint': [
    {
      question: 'Which endpoint do generation requests to the Claude API go through?',
      options: [
        'POST /v1/messages — a single Messages API with tool use and structured output built in',
        'A separate /v1/chat endpoint, with tools via /v1/tools',
        'GET /v1/complete for each request',
        'Over a WebSocket connection with no REST endpoint',
      ],
    },
    {
      question: 'Which statement about the Messages API is correct?',
      options: [
        'The API is stateless: the whole conversation history must be sent again in each request',
        'The server keeps the conversation state; sending only the new message is enough',
        'The first message in messages must be assistant',
        'max_tokens limits only the input, not the output',
      ],
    },
  ],
  'how-llm-works': [
    {
      question: 'How does a large language model form a response at a basic level?',
      options: [
        'It predicts the next token, one at a time, based on a probability distribution',
        'It looks up a ready answer in a database by keywords',
        'It runs a branching algorithm the developer wrote in advance',
        'It compiles the prompt into machine code and executes it',
      ],
    },
    {
      question: 'Which of the following is an LLM limitation worth remembering?',
      options: [
        'The model can “hallucinate” — confidently produce plausible but incorrect facts',
        'The model always returns only factually verified data',
        'The model has direct access to the live internet without tools',
        'The model is deterministic and always gives the same output for one prompt',
      ],
    },
  ],
  'token-counting': [
    {
      question: 'How do you correctly count the number of tokens in a prompt for Claude?',
      options: [
        'Via the count_tokens endpoint, passing the same model as for generation',
        'With the tiktoken library — it is accurate for any model',
        'By dividing the number of characters by 4',
        'By the number of words in the text',
      ],
    },
    {
      question: 'Why can’t you estimate a Claude prompt’s length with tiktoken?',
      options: [
        'It is OpenAI’s tokenizer; it undercounts for Claude, and tokenization also depends on the model',
        'tiktoken always overcounts by exactly double',
        'tiktoken works only with images',
        'There is no reason, tiktoken is fine',
      ],
    },
    {
      question: 'What is a token?',
      options: [
        'The smallest unit of text for the model: part of a word, a short word, a sign, or a space',
        'One Unicode character',
        'One whole word, always exactly one',
        'A secret key for API authorization',
      ],
    },
  ],
  'context-vs-maxtokens': [
    {
      question: 'How does the stop_reason "model_context_window_exceeded" differ from "max_tokens"?',
      options: [
        'The first — the context window is exhausted (compact/split the history); the second — the set response-length limit was reached',
        'They are the same with different names',
        'The first — the model refused to answer, the second — a network error',
        'The first concerns the input, the second only speed',
      ],
    },
    {
      question: 'What is a model’s context window?',
      options: [
        'The maximum tokens per request — the sum of the input (system + history + message) and the generated output',
        'A limit only on the response length, set by max_tokens',
        'The number of concurrent requests per minute',
        'The prompt-cache size in megabytes',
      ],
    },
    {
      question: 'What is counted toward the context window’s tokens?',
      options: [
        'Both the whole input (system + history + message) and the generated output — together',
        'Only the system prompt',
        'Only the last user message',
        'Only the generated response',
      ],
    },
  ],
  'determinism': [
    {
      question: 'Does temperature 0 guarantee a byte-for-byte identical response to the same prompt?',
      options: [
        'No: temperature 0 biases the choice toward likely tokens, but determinism is not guaranteed',
        'Yes, at 0 the response is always identical',
        'Yes, but only if streaming is turned off',
        'Yes, if the context window is the same',
      ],
    },
    {
      question: 'What is true about sampling parameters on current models (Opus 5, Sonnet 5, Fable 5)?',
      options: [
        'temperature, top_p, and top_k are removed — passing them returns a 400; behaviour is set by the prompt and effort',
        'temperature is mandatory in every request',
        'It is allowed to set temperature, top_p, and top_k at once',
        'top_k was replaced by budget_tokens',
      ],
    },
  ],
  'system-prompt': [
    {
      question: 'What is the system prompt (the system field) for?',
      options: [
        'It sets the model’s role, rules, and response format for the whole conversation',
        'It passes the secret API key',
        'It limits the maximum number of response tokens',
        'It selects the model the request goes to',
      ],
    },
    {
      question: 'Why should the system prompt be kept stable (unchanged)?',
      options: [
        'It is at the start of the prefix — any change invalidates the prompt cache for everything after it',
        'Otherwise the model refuses to answer',
        'A stable system prompt speeds up tokenization',
        'It is a JSON format requirement',
      ],
    },
  ],
  'few-shot': [
    {
      question: 'What is few-shot prompting?',
      options: [
        'Including one or a few “input → desired output” examples in the prompt',
        'Sending a request without any instructions',
        'Limiting the response to a few tokens',
        'Running the model on several GPUs at once',
      ],
    },
    {
      question: 'When are few-shot examples especially useful?',
      options: [
        'On non-trivial tasks where you need to set the response format and style by example',
        'Only for the simplest “hello” requests',
        'When you need to reduce the request cost',
        'Never — examples always worsen the result',
      ],
    },
  ],
  'prompt-structure-xml': [
    {
      question: 'How is it recommended to structure long context in a prompt?',
      options: [
        'Separate instructions, data, and the question with explicit sections (often XML-like tags)',
        'Merge everything into one solid paragraph with no separators',
        'Put everything into the max_tokens field',
        'Pass data only via a file name',
      ],
    },
    {
      question: 'Why are aggressive phrasings like “CRITICAL: YOU MUST” harmful on current models?',
      options: [
        'Models follow instructions literally, and such pressure makes behaviour/a tool fire too often',
        'Such phrases are forbidden and return a 400',
        'They increase the token bill tenfold',
        'The model ignores them entirely, so it is pointless',
      ],
    },
  ],
  'structured-output': [
    {
      question: 'How do you reliably get valid JSON of a given schema from Claude?',
      options: [
        'Via output_config.format with a JSON schema (structured outputs) or strict tools',
        'Start the assistant response with “{” (prefill) — the most reliable way',
        'Ask “return only JSON” in the prompt — that is always enough',
        'Via a separate /v1/json endpoint',
      ],
    },
    {
      question: 'What happened to “prefill” (starting the assistant response to force a format) on current models?',
      options: [
        'It is no longer supported: ending messages with an assistant message returns a 400',
        'It is the only working way to get JSON',
        'Prefill speeds up the response twofold',
        'Nothing changed, it is still recommended',
      ],
    },
    {
      question: 'How do you conveniently restrict a response to a fixed set of class labels?',
      options: [
        'Declare a tool with an enum field of allowed values (or set a schema via structured outputs)',
        'List the labels in max_tokens',
        'Set temperature = 0',
        'Send each label as a separate request',
      ],
    },
  ],
  'model-choice': [
    {
      question: 'Which model is reasonable for simple tasks focused on speed and cost?',
      options: [
        'Haiku 4.5 (claude-haiku-4-5)',
        'Fable 5 — the most powerful and expensive',
        'Opus 5 for any task',
        'No need to choose a model, there is only one',
      ],
    },
    {
      question: 'How do you learn a model’s “live” characteristics (window, feature support)?',
      options: [
        'Via the Models API (client.models.retrieve(id)), not from memory',
        'Construct an ID with a date suffix and guess',
        'Compute it from the per-token price',
        'The characteristics can’t be learned programmatically',
      ],
    },
    {
      question: 'Which model is usually taken for complex code and deep agentic tasks?',
      options: [
        'Opus 5 (and for the heaviest, long-running tasks — Fable 5)',
        'Haiku 4.5 as the most capable',
        'Any — the quality is the same',
        'Only the lowest-priced model',
      ],
    },
  ],
  'model-ids': [
    {
      question: 'How do you correctly specify a model identifier?',
      options: [
        'With the exact string without appending date suffixes (e.g. claude-opus-5)',
        'By appending the current date to the alias (claude-opus-5-20260101)',
        'With any similar string — the API will guess',
        'With the model’s numeric index',
      ],
    },
    {
      question: 'What happens with a typo in the model ID?',
      options: [
        'The request returns a 404 (not_found_error)',
        'The API silently picks the nearest model',
        'The request runs on the most expensive model',
        'The response comes back empty but with status 200',
      ],
    },
  ],
  'thinking-effort': [
    {
      question: 'What does the effort parameter do?',
      options: [
        'It controls thoroughness and token spend: low / medium / high / xhigh / max',
        'It sets a fixed thinking-token budget in units',
        'It turns streaming on or off',
        'It selects a model by price',
      ],
    },
    {
      question: 'What happened to the fixed “thinking budget” budget_tokens?',
      options: [
        'Deprecated: on Opus 5 / Sonnet 5 / Fable 5 it returns a 400; adaptive thinking + effort replaced it',
        'It remained the only way to enable thinking',
        'It was renamed to temperature',
        'It became a mandatory field of every request',
      ],
    },
    {
      question: 'What is adaptive thinking?',
      options: [
        'A mode where the model itself decides when and how deeply to think before answering',
        'A fixed number of thinking tokens set by the developer',
        'A separate smarter model invoked as a tool',
        'A mode that disables any reasoning for speed',
      ],
    },
  ],
  'fast-mode': [
    {
      question: 'What is fast mode?',
      options: [
        'A higher-output-speed mode of the same model at a premium price (research preview, Opus 5 / 4.8)',
        'Switching to a less capable model for speed',
        'Disabling thinking on any model',
        'A free accelerated tier for all models',
      ],
    },
  ],
  'prompt-caching-rule': [
    {
      question: 'What is the main rule of prompt caching?',
      options: [
        'The cache is a prefix match: stable content up front, changing content at the end; any prefix change invalidates the cache',
        'The end of the request is cached, so timestamps go at the start',
        'The cache doesn’t depend on content and lives forever',
        'Only the model’s response is cached, not the prompt',
      ],
    },
    {
      question: 'How do you check that the prompt cache actually works?',
      options: [
        'Watch usage.cache_read_input_tokens: if it is consistently 0 with the same prefix, there is a “silent invalidator”',
        'Measure the response time with a stopwatch',
        'Count the characters in the system prompt',
        'You can’t check — cache hits aren’t visible',
      ],
    },
    {
      question: 'What is the prompt-assembly order that matters for caching?',
      options: ['tools → system → messages', 'messages → system → tools', 'system → messages → tools', 'The order is random and doesn’t affect the cache'],
    },
  ],
  'caching-invalidator': [
    {
      question: 'Which of the following is a typical “silent invalidator” of the cache?',
      options: [
        'datetime.now() or a UUID in the system prompt / unsorted JSON',
        'A stable system prompt with no variables',
        'A deterministic, sorted list of tools',
        'A constant model across all requests',
      ],
    },
    {
      question: 'What is the default cache TTL and what other options are there?',
      options: [
        'By default 5 minutes; you can set “1h” (1 hour)',
        'By default 24 hours, no other options',
        'The cache lives forever, there is no TTL',
        'The TTL is always exactly 30 seconds',
      ],
    },
  ],
  'caching-economics': [
    {
      question: 'How do cache read and write prices compare with regular input?',
      options: [
        'A cache read ≈ 0.1× the input price, a write is more expensive (≈1.25× for 5 min, ≈2× for 1 hour)',
        'A cache read is 10× more expensive than regular input',
        'A cache write is free, a read at full price',
        'Both reads and writes are always free',
      ],
    },
  ],
  'batch-api': [
    {
      question: 'What does the Message Batches API give for unhurried bulk processing?',
      options: [
        'Asynchronous processing with a 50% token discount; results arrive in arbitrary order (match by custom_id)',
        'Instant responses at above-normal cost',
        'Synchronous streaming with an order guarantee',
        'Free processing with no limits',
      ],
    },
    {
      question: 'By which field must you match batch results to requests?',
      options: [
        'By custom_id — the result order is arbitrary, you can’t rely on position',
        'By array index — the order is guaranteed',
        'By the request’s creation time',
        'By the response content',
      ],
    },
  ],
  'tool-use-loop': [
    {
      question: 'How do you correctly return the result of an invoked tool?',
      options: [
        'A role: "user" message with a tool_result block whose tool_use_id matches the call’s id',
        'A role: "assistant" message with plain text',
        'A separate HTTP request to /v1/tools',
        'It’s enough to ignore the call, the model will understand',
      ],
    },
    {
      question: 'The model returned several tool_use blocks in one response. How do you handle them?',
      options: [
        'Execute all and return all tool_results in one user message',
        'Return the results one by one in separate messages',
        'Handle only the first and discard the rest',
        'Send each result as a separate request with a new history',
      ],
    },
    {
      question: 'At which stop_reason does the model ask to call a tool?',
      options: ['tool_use', 'end_turn', 'max_tokens', 'refusal'],
    },
  ],
  'tool-definition': [
    {
      question: 'What does a custom tool definition consist of?',
      options: [
        'name, description, and input_schema (JSON Schema of the input parameters)',
        'Only name and a ready answer',
        'A URL and an HTTP method',
        'A function name and its Python source code',
      ],
    },
    {
      question: 'What matters most in a tool definition for call quality?',
      options: [
        'A clear description prescribing WHEN to call the tool',
        'A one-letter name as short as possible',
        'No description, so as not to confuse the model',
        'The maximum number of optional parameters',
      ],
    },
  ],
  'tool-choice': [
    {
      question: 'What does the tool_choice parameter with {type: "any"} set?',
      options: [
        'The model must call at least one tool',
        'The model cannot call tools',
        'The model must call a specific named tool',
        'The model decides whether to call a tool (the default behaviour)',
      ],
    },
    {
      question: 'Which tool_choice value forces the model to call a SPECIFIC tool?',
      options: ['{type: "tool", name: "name"}', '{type: "auto"}', '{type: "any"}', '{type: "none"}'],
    },
  ],
  'tool-errors': [
    {
      question: 'A tool failed with an error. What do you return to the model?',
      options: [
        'A tool_result with is_error: true and the error text — you can’t lose the result',
        'Nothing, just don’t respond to that call',
        'A plain assistant text response with an apology',
        'An empty tool_result with no error flag',
      ],
    },
    {
      question: 'What happens if you don’t return a tool_result for a requested tool_use?',
      options: [
        'The conversation breaks — the model expects a result for each call',
        'Nothing, the model continues as if nothing happened',
        'The API automatically substitutes an empty result',
        'The request returns a cached response',
      ],
    },
  ],
  'server-vs-client-tools': [
    {
      question: 'How do server tools differ from client tools?',
      options: [
        'Server ones (web search, code execution) run on Anthropic’s side; client ones you execute and send a tool_result',
        'Client ones are executed by Anthropic, server ones by you',
        'No difference, they are synonyms',
        'Server tools work only offline',
      ],
    },
    {
      question: 'Which tool is a SERVER one (runs on Anthropic’s infrastructure)?',
      options: [
        'web search / web fetch and code execution',
        'Your function that queries your own database',
        'A client-side bash tool',
        'Sending an email via your SMTP',
      ],
    },
  ],
  'tool-runner': [
    {
      question: 'What does the tool runner in the SDK do?',
      options: [
        'It automatically loops: call the API → execute the tool → return the result → repeat',
        'It compiles tools into binary code',
        'It spell-checks tool descriptions',
        'It stores the conversation history on the server',
      ],
    },
    {
      question: 'When is a manual loop usually needed instead of the tool runner?',
      options: [
        'When you need full control over the loop logic or can’t take a beta dependency',
        'Always — the tool runner doesn’t work',
        'Only for server tools',
        'When there is more than one tool',
      ],
    },
  ],
  'pause-turn': [
    {
      question: 'What does stop_reason "pause_turn" mean?',
      options: [
        'A server tool reached its iteration limit; you must resend the message with the assistant response and generation continues',
        'The model finished the response for good',
        'The max_tokens limit was reached',
        'An authentication error occurred',
      ],
    },
    {
      question: 'What should you NOT do when handling pause_turn?',
      options: [
        'Append a message like “Continue” — the API already understands it needs to continue',
        'Resend the assistant response in the history',
        'Check stop_reason before continuing',
        'Preserve the previous tool_use blocks',
      ],
    },
  ],
  'compaction': [
    {
      question: 'What is compaction for in long conversations?',
      options: [
        'The server compresses early history into a summary so it doesn’t hit the context window',
        'It compresses images before sending',
        'It speeds up tokenization via the cache',
        'It removes the system prompt from the request',
      ],
    },
    {
      question: 'What is critical when using compaction?',
      options: [
        'Adding back the whole response.content (including compaction blocks), not just the text',
        'Sending only the response text, discarding the blocks',
        'Disabling prompt caching',
        'Using only the Haiku model',
      ],
    },
  ],
  'context-editing': [
    {
      question: 'What does context editing do and how does it differ from compaction?',
      options: [
        'It removes (clears) old tool results/thinking blocks rather than summarizing them',
        'It summarizes the history into a short summary',
        'It encrypts the context before sending',
        'They are two names for the same mechanism',
      ],
    },
  ],
  'memory-tool': [
    {
      question: 'What is the memory tool for?',
      options: [
        'So Claude can save and read information across sessions via a memory-file directory',
        'To increase the server’s RAM',
        'To cache prompts longer than 1 hour',
        'To store API keys',
      ],
    },
    {
      question: 'What must you NOT store in memory/memory files?',
      options: [
        'API keys, passwords, tokens, and other secrets',
        'User preferences about the response format',
        'Notes about the task context',
        'Intermediate reasoning results',
      ],
    },
  ],
  'mcp-connector': [
    {
      question: 'What does the MCP connector do in the Messages API?',
      options: [
        'It lets the model call a remote MCP server’s tools — Anthropic’s server makes the connection',
        'It compresses the conversation context',
        'It replaces the Batch API',
        'It stores the conversation history locally',
      ],
    },
  ],
  'roles-alternate': [
    {
      question: 'Which rule is correct for the messages array?',
      options: [
        'The first message is user; the user/assistant roles alternate',
        'The first must be assistant',
        'Roles can go in any order with no restriction on the first element',
        'The messages array must consist only of system messages',
      ],
    },
    {
      question: 'What happens if you put an assistant message first?',
      options: [
        'The request returns a 400 (the first message must be user)',
        'The API silently swaps the messages',
        'The response comes back empty but with status 200',
        'Nothing, it’s allowed',
      ],
    },
  ],
  'auth': [
    {
      question: 'How are requests to the Claude API usually authenticated?',
      options: [
        'Via the ANTHROPIC_API_KEY environment variable (or an OAuth profile, ant auth login) that the SDK reads',
        'With a login and password in the request body',
        'Without authentication — the API is open',
        'Only via a cookie in the browser',
      ],
    },
    {
      question: 'Where must you NOT place the API key?',
      options: [
        'In source code/a repository — only in environment variables or a secret store',
        'In the ANTHROPIC_API_KEY environment variable',
        'In a secure secret manager',
        'In an OAuth profile on disk (ant auth login)',
      ],
    },
  ],
  'streaming-when': [
    {
      question: 'When is streaming especially important for a backend?',
      options: [
        'With large max_tokens (roughly >16000) — otherwise a non-streaming request risks hitting an HTTP timeout',
        'Only for short classification responses',
        'Streaming harms reliability and is best avoided',
        'Streaming is needed exclusively for images',
      ],
    },
    {
      question: 'How do you get the full response object from a stream if you don’t need individual events?',
      options: [
        'Use the get_final_message() / finalMessage() helper',
        'Concatenate the strings yourself and parse as JSON',
        'Send a repeat non-streaming request',
        'You can’t get the full response with streaming',
      ],
    },
  ],
  'max-tokens': [
    {
      question: 'What does the max_tokens parameter set?',
      options: [
        'A hard cap on the generated response length',
        'The maximum size of the input prompt',
        'The number of retry attempts on error',
        'The cache size in tokens',
      ],
    },
    {
      question: 'What happens if the response hits max_tokens?',
      options: [
        'A stop_reason "max_tokens" arrives, the response is truncated — raise the limit or stream',
        'The API automatically doubles the limit and continues',
        'The request fails with a 400',
        'The response comes back complete, the limit is ignored',
      ],
    },
  ],
  'errors-retry': [
    {
      question: 'Which Claude API HTTP errors make sense to retry?',
      options: [
        '429 (rate limit) and 5xx/529 (overload) — they are transient; the SDK retries them automatically',
        '400 and 401 — always worth retrying',
        '404 — a retry is guaranteed to help',
        'No errors should be retried',
      ],
    },
    {
      question: 'How do you correctly distinguish error types in the SDK?',
      options: [
        'By typed exception classes (RateLimitError, BadRequestError, etc.), not by the message text',
        'By matching a substring of the message string',
        'By the response length',
        'All errors are the same, no need to distinguish',
      ],
    },
  ],
  'stop-reason-refusal': [
    {
      question: 'How do you correctly handle a possible refusal?',
      options: [
        'Check stop_reason before reading content: a refusal returns HTTP 200, stop_reason "refusal", and possibly empty content',
        'Catch an exception — a refusal arrives as HTTP 400',
        'Always read content[0].text; refusal doesn’t affect it',
        'A refusal is impossible, there is nothing to handle',
      ],
    },
    {
      question: 'Which of these values is NOT a typical stop_reason?',
      options: ['rate_limited', 'end_turn', 'tool_use', 'max_tokens'],
    },
  ],
  'vision': [
    {
      question: 'How do you pass an image to a vision-capable model?',
      options: [
        'A content block of type: "image" with source by URL or base64',
        'Just insert the file path into the prompt text',
        'Via a separate /v1/vision endpoint',
        'Images can’t be passed',
      ],
    },
  ],
  'pdf-files': [
    {
      question: 'How do you give a PDF document to the model?',
      options: [
        'A block of type: "document" (base64 or via the Files API by file_id)',
        'By inserting the binary content directly into a text field',
        'Only by rendering the PDF into images by hand',
        'The model doesn’t accept PDF in any form',
      ],
    },
    {
      question: 'What is the Files API for?',
      options: [
        'Upload a file once and reference it by file_id from several requests without resending',
        'Store the conversation history on the server',
        'Speed up text tokenization',
        'Automatically translate documents',
      ],
    },
  ],
  'citations': [
    {
      question: 'What does enabling citations on a document (citations: {enabled: true}) give?',
      options: [
        'The response is split into blocks, and cited ones carry references to the source (cited_text, position in the document)',
        'The document is automatically shortened',
        'The response is encrypted',
        'The model starts inventing sources',
      ],
    },
  ],
  'prompt-engineering-def': [
    {
      question: 'What is prompt engineering?',
      options: [
        'Formulating the input (instructions, context, examples) so as to get the desired model response',
        'Writing the model’s code at a low level',
        'Configuring the servers the model runs on',
        'Training the model on your data from scratch',
      ],
    },
    {
      question: 'What is zero-shot prompting?',
      options: [
        'A request with no examples — the model does the task from a single instruction',
        'A request with many “input → output” examples',
        'A request that always returns an empty response',
        'A request with no system prompt',
      ],
    },
  ],
  'context-window-sizes': [
    {
      question: 'What is the order of magnitude of the context window on current top models (Opus 5, Sonnet 5, Fable 5)?',
      options: ['Up to 1M tokens', 'Exactly 4096 tokens', '8K tokens for all models', 'There is no window — input is unlimited'],
    },
    {
      question: 'What is true about the context-window size across models?',
      options: [
        'It depends on the model (e.g. Haiku 4.5 — 200K, top models — up to 1M); the exact value is given by the Models API',
        'The window is the same for all models',
        'The window always equals max_tokens',
        'The developer sets the window in each request',
      ],
    },
  ],
  'effort-default': [
    {
      question: 'What is the default effort value if you don’t set it?',
      options: ['high', 'low', 'max', 'effort is mandatory, there is no default'],
    },
    {
      question: 'How does effort affect the model’s behaviour?',
      options: [
        'Lower effort — fewer, more concise steps, shorter preambles; higher — more thorough reasoning and checking',
        'effort affects only the response colour',
        'effort sets the number of retry attempts',
        'effort selects the response language',
      ],
    },
  ],
  'opus5-thinking-default': [
    {
      question: 'What is true about thinking on Opus 5 if the thinking field is not set?',
      options: [
        'Thinking is on by default (omitting thinking = adaptive)',
        'Thinking is always off until you enable it explicitly',
        'The model returns a 400 error',
        'Thinking turns on only at effort=max',
      ],
    },
    {
      question: 'Is the model’s “raw” chain of thought exposed?',
      options: [
        'No: the raw chain of thought isn’t returned; you can get only a summary (display: "summarized")',
        'Yes, it’s always returned in full',
        'Yes, but only on the Haiku model',
        'It’s returned if you set temperature=0',
      ],
    },
  ],
  'maxtokens-defaults': [
    {
      question: 'Why is streaming needed for large max_tokens?',
      options: [
        'A non-streaming request with large max_tokens risks hitting the SDK’s HTTP timeout',
        'Streaming increases the output limit',
        'Without streaming the response comes back encrypted',
        'Streaming is mandatory for any request',
      ],
    },
    {
      question: 'Up to what output size (128K) is a response reachable on current models, and how?',
      options: [
        'Up to 128K — but only with streaming (a non-streaming request will hit a timeout)',
        'Up to 128K with no conditions and in non-streaming mode',
        'A maximum of 4096 output tokens',
        '128K is reachable only via the Batch API',
      ],
    },
  ],
  'streaming-events': [
    {
      question: 'In which stream event do stop_reason and usage arrive?',
      options: ['message_delta', 'content_block_start', 'message_start', 'content_block_delta'],
    },
    {
      question: 'What does the get_final_message() / finalMessage() helper do?',
      options: [
        'Assembles the full response object from the stream if individual events aren’t needed',
        'Sends a repeat request',
        'Stops generation early',
        'Counts the tokens in the response',
      ],
    },
  ],
  'caching-details': [
    {
      question: 'How many cache breakpoints (cache_control) are allowed per request?',
      options: ['No more than 4', 'Exactly 1', 'No more than 100', 'As many as you like'],
    },
    {
      question: 'What is true about the minimum cacheable prefix?',
      options: [
        'It depends on the model; too short a prefix simply isn’t cached, with no error',
        'A prefix of any length is cached, even one token',
        'The minimum is always exactly 10000 tokens',
        'The minimum is set by the developer in the request',
      ],
    },
  ],
  'caching-invalidation-tiers': [
    {
      question: 'What invalidates the prompt cache COMPLETELY (including tools)?',
      options: [
        'Changing the tool set or changing the model',
        'Changing only the last user message',
        'Adding a new user message at the end',
        'Changing tool_choice from auto to any',
      ],
    },
  ],
  'usage-fields': [
    {
      question: 'What does the usage.cache_read_input_tokens field show?',
      options: [
        'How many input tokens were served from the cache (at the reduced price) in this request',
        'How many tokens were generated in the response',
        'The total number of requests per minute',
        'The model’s context-window size',
      ],
    },
    {
      question: 'Why can’t you silently truncate a long input to fit the window?',
      options: [
        'It silently loses data; better discuss chunking/summarization than cut invisibly',
        'Truncating the input speeds up the response and is always safe',
        'The API will fill in the truncated data itself',
        'Truncating the input doubles the output limit',
      ],
    },
  ],
  'batch-limits': [
    {
      question: 'What are the ballpark figures for the Batch API?',
      options: [
        'Up to 100,000 requests per batch; most finish within an hour, at most 24 hours; results are available for 29 days',
        'Up to 10 requests; a result in seconds',
        'No limits on count or time',
        'Only 1 request at a time, but free',
      ],
    },
  ],
  'parallel-single-message': [
    {
      question: 'Why must all tool_results be returned in ONE user message?',
      options: [
        'Splitting results across different messages “teaches” the model to stop making parallel calls',
        'Otherwise the request returns a 400',
        'To save tokens twofold',
        'The SSE format requires it',
      ],
    },
    {
      question: 'What does disable_parallel_tool_use: true in tool_choice set?',
      options: [
        'The model will call at most one tool per response',
        'The model must call all tools at once',
        'It disables tools entirely',
        'It speeds up parallel calls',
      ],
    },
  ],
  'tool-choice-none': [
    {
      question: 'What does tool_choice {type: "none"} set?',
      options: [
        'The model cannot call tools in this request',
        'The model must call at least one tool',
        'The model will call a specific named tool',
        'The default behaviour — the model decides',
      ],
    },
  ],
  'server-tool-details': [
    {
      question: 'What limitation does the server web-fetch tool have?',
      options: [
        'It fetches only URLs already present in the conversation',
        'It can open any site on the user’s request without restrictions',
        'It runs on your machine',
        'It works only with local files',
      ],
    },
    {
      question: 'What is true about server code execution?',
      options: [
        'The code runs in an isolated sandbox on Anthropic’s side (with no internet access)',
        'The code runs right on your server',
        'It is the same as a client bash tool',
        'It requires a manual tool_result loop from you',
      ],
    },
  ],
  'tool-description-when': [
    {
      question: 'How do you improve tool-call accuracy via its description?',
      options: [
        'Be prescriptive: state WHEN to call the tool (“call when the user asks about X”)',
        'Leave the description empty',
        'Write a one-letter name',
        'List the function’s source code in the description',
      ],
    },
  ],
  'structured-schema-rules': [
    {
      question: 'What is mandatory for objects in a structured-outputs schema?',
      options: ['additionalProperties: false', 'minLength for each string', 'maximum for each number', 'A recursive self-reference'],
    },
    {
      question: 'What is structured outputs NOT compatible with?',
      options: ['With citations and with prefill', 'With streaming', 'With tools', 'With token counting'],
    },
  ],
  'parse-helper': [
    {
      question: 'What does the client.messages.parse() helper do?',
      options: [
        'It automatically validates the response against the given JSON schema',
        'It splits the prompt into tokens',
        'It translates the response into another language',
        'It compresses the conversation history',
      ],
    },
  ],
  'refusal-http-status': [
    {
      question: 'With which HTTP status does a response arrive on a classifier refusal?',
      options: [
        'HTTP 200 (success), but with stop_reason "refusal" and possibly empty content',
        'HTTP 400',
        'HTTP 403',
        'HTTP 500',
      ],
    },
    {
      question: 'What is true about the stop_details field?',
      options: [
        'It is informational and may be null even on a refusal — branch by stop_reason',
        'It is always populated for any stop_reason',
        'It contains the response text',
        'Its presence guarantees a successful response',
      ],
    },
  ],
  'models-api-fields': [
    {
      question: 'Which field of a model object gives the context-window size?',
      options: ['max_input_tokens (there is no separate context_window field)', 'context_window', 'max_tokens', 'window_size'],
    },
    {
      question: 'What is the Models API for?',
      options: [
        'Learning a model’s “live” characteristics and feature support instead of guessing',
        'Sending generation requests',
        'Storing the conversation history',
        'Computing cost in dollars',
      ],
    },
  ],
  'vision-formats': [
    {
      question: 'Which image formats does vision support?',
      options: ['JPEG, PNG, GIF, WebP', 'Only BMP', 'Only SVG', 'Any binary files'],
    },
    {
      question: 'Where is the image block usually placed relative to the question text?',
      options: ['Before the text block', 'After the text block', 'In the system prompt', 'In the max_tokens field'],
    },
  ],
  'files-api-purpose': [
    {
      question: 'What is the Files API for?',
      options: [
        'Upload a file once and reference it by file_id from several requests without resending',
        'Store the conversation history on the server',
        'Speed up tokenization',
        'Automatically translate documents',
      ],
    },
  ],
  'hallucination': [
    {
      question: 'What is a model “hallucination”?',
      options: [
        'A confidently produced but factually incorrect answer',
        'A network error during the request',
        'Exceeding the token limit',
        'The model refusing to answer',
      ],
    },
    {
      question: 'How do you reduce the risk of incorrect facts in a response?',
      options: [
        'Give the model tools (e.g. web search) and ask it to rely on sources',
        'Raise max_tokens to the maximum',
        'Always set temperature=0',
        'Disable the system prompt',
      ],
    },
  ],
  'system-vs-user': [
    {
      question: 'How does the system prompt differ from a user message?',
      options: [
        'The system one sets the role/rules for the whole conversation; the user one is a concrete request in the current turn',
        'They are the same field with different names',
        'The system prompt is executed as code',
        'The user message selects the model for the request',
      ],
    },
  ],
  'cost-optimization': [
    {
      question: 'Which technique does NOT help reduce request cost?',
      options: [
        'Putting a changing timestamp at the start of the system prompt',
        'Caching a stable prefix (prompt caching)',
        'Using the Batch API for unhurried tasks',
        'Taking a simpler model (e.g. Haiku) for simple tasks',
      ],
    },
  ],
  'mcp-requires-both': [
    {
      question: 'What is needed to connect an MCP server in the Messages API?',
      options: [
        'Declare both mcp_servers (the server address) and a tools entry with mcp_toolset referencing it by name',
        'Only mcp_servers is enough',
        'Only an mcp_toolset entry in tools is enough',
        'Nothing — MCP works automatically',
      ],
    },
  ],
  'pricing-io': [
    {
      question: 'What is true about the cost of input and output tokens?',
      options: [
        'Output tokens are usually more expensive than input (the price is set separately per 1M in/out)',
        'Input tokens are always more expensive than output',
        'Input and output are billed the same for all models',
        'Tokens are free, you pay per request',
      ],
    },
    {
      question: 'Does the token count for the same text depend on the model?',
      options: [
        'Yes, tokenization depends on the model — count via count_tokens with the right model',
        'No, the token count is the same for all models',
        'The token count depends only on the language, not the model',
        'Tokens are counted as characters divided by 4',
      ],
    },
  ],
  'rate-limits-concept': [
    {
      question: 'What are Claude API rate limits usually measured in?',
      options: [
        'Requests per minute (RPM) and tokens per minute/day (TPM/TPD)',
        'Only the number of response characters',
        'Megabytes of traffic per hour',
        'The number of open WebSocket connections',
      ],
    },
    {
      question: 'Which header hints how long to wait before retrying on a 429?',
      options: ['retry-after', 'content-length', 'x-model-id', 'cache-control'],
    },
  ],
  'sdk-retries': [
    {
      question: 'How many retries does the SDK do by default on 429/5xx?',
      options: ['2 (max_retries=2) with exponential backoff', '0 — no retries', '100 — until it wins', 'Infinitely, until it gets a response'],
    },
  ],
  'consecutive-roles': [
    {
      question: 'What happens with two consecutive user messages in messages?',
      options: [
        'The server merges them into one turn — that’s allowed',
        'The request returns a 400 error',
        'The second message is ignored',
        'The roles are automatically renamed',
      ],
    },
  ],
  'effort-xhigh': [
    {
      question: 'Which effort level is recommended for complex code and agentic tasks?',
      options: [
        'xhigh (and a minimum of high for most intelligence-heavy tasks)',
        'low — it’s the best for code',
        'effort doesn’t affect code',
        'Only medium, the other levels are forbidden for code',
      ],
    },
    {
      question: 'What is worth remembering about effort = max?',
      options: [
        'It can give a boost, but sometimes has diminishing returns and “overthinking” — worth testing',
        'It is always strictly better than the other levels',
        'It disables thinking',
        'It is free unlike the other levels',
      ],
    },
  ],
  'tool-id-matching': [
    {
      question: 'What must match between a tool_result and its tool_use?',
      options: ['tool_use_id', 'The model name', 'The message role', 'The max_tokens value'],
    },
    {
      question: 'What must you add to the history on each iteration of a manual tool-use loop?',
      options: [
        'The whole assistant response.content (to keep the tool_use blocks)',
        'Only the text part of the response',
        'Only the request identifier',
        'Nothing — no history is needed',
      ],
    },
  ],
  'agent-loop': [
    {
      question: 'What is an “agent” in the context of tools?',
      options: [
        'A loop where the model itself decides to call tools until it completes the task',
        'A separate Anthropic server for storing history',
        'A short name for the system prompt',
        'A background process that trains the model',
      ],
    },
    {
      question: 'Is a client execution loop needed for server tools?',
      options: [
        'No: server tools run on Anthropic’s infrastructure, and the result comes in the same response',
        'Yes, you must execute them yourself and send a tool_result',
        'Yes, but only for web search',
        'No, but you need to open a WebSocket',
      ],
    },
  ],
  'schema-first-latency': [
    {
      question: 'Why is the first request with a new JSON schema slightly slower?',
      options: [
        'The schema is compiled once; after that a cache is used (about 24 hours)',
        'The first request always goes to the slowest model',
        'The schema is sent in parts',
        'It is a bug that shouldn’t happen',
      ],
    },
  ],
  'memory-persistence': [
    {
      question: 'Why is the memory tool valuable for long-running scenarios?',
      options: [
        'It lets you save and read information across sessions (memory files)',
        'It doubles the context window',
        'It speeds up tokenization',
        'It replaces the Batch API',
      ],
    },
  ],
  'context-window-note': [
    {
      question: 'What do you do on stop_reason "model_context_window_exceeded"?',
      options: [
        'Compact the history (compaction) or split the conversation — the window is exhausted',
        'Just resend the same request unchanged',
        'Reduce max_tokens to zero',
        'Change the API key',
      ],
    },
  ],
  'safety-refusal-topics': [
    {
      question: 'How should you treat a possible model refusal?',
      options: [
        'Handle it as a normal outcome: check stop_reason and show the user correctly, without reading empty content',
        'Consider it a server failure and file a complaint',
        'Ignore stop_reason and always read content[0]',
        'Retry the same request until it wins',
      ],
    },
  ],
  'count-tokens-model': [
    {
      question: 'What is important to pass to count_tokens for an accurate count?',
      options: [
        'The same model that will be used for generation',
        'Only the text length in characters',
        'The API key in the request body',
        'The temperature value',
      ],
    },
  ],
  'haiku-output-cap': [
    {
      question: 'What is true about the output-token cap across models?',
      options: [
        'It depends on the model (some up to 128K, Haiku lower); large values require streaming',
        'For all models the cap is exactly 4096',
        'The output cap is unlimited',
        'The cap is set only via the Batch API',
      ],
    },
  ],
  'image-token-cost': [
    {
      question: 'What is true about the cost of images in vision?',
      options: [
        'Images spend tokens; large images cost more — downscale them when the resolution isn’t needed',
        'Images are always free',
        'An image costs exactly 1 token',
        'An image’s cost doesn’t depend on its size',
      ],
    },
  ],
  'batch-order': [
    {
      question: 'In what order do Batch API results arrive?',
      options: [
        'In arbitrary order — match by custom_id',
        'Strictly in the order the requests were sent',
        'In alphabetical order of the responses',
        'From the longest to the shortest',
      ],
    },
  ],
  'raw-http-auth': [
    {
      question: 'What is true about using the official SDK vs manual HTTP?',
      options: [
        'The SDK handles retries, typed errors, streaming, and helpers — use it by default',
        'Manual HTTP is always preferable to the SDK',
        'The SDK doesn’t support tools',
        'The SDK works only with one model',
      ],
    },
  ],
  'workflow-vs-agent': [
    {
      question: 'How does a workflow differ from an agent?',
      options: [
        'A workflow is orchestrated by predefined code; an agent — the model itself dynamically directs the process and tool choice',
        'A workflow is smarter than an agent and always preferable',
        'An agent is cheaper and more predictable than a workflow',
        'They are the same thing',
      ],
    },
    {
      question: 'Which principle does Anthropic recommend when choosing a solution’s complexity?',
      options: [
        'Start with the simplest (a single LLM call) and add complexity only when truly needed',
        'Always start with a full agent',
        'Always use the most complex architecture',
        'Avoid tools at all costs',
      ],
    },
  ],
  'workflow-patterns': [
    {
      question: 'What does the prompt-chaining pattern describe?',
      options: [
        'The task is split into sequential steps, where each call processes the previous one’s result',
        'The input is classified and routed to a specialized branch',
        'Subtasks run in parallel',
        'One model evaluates another’s answer in a loop',
      ],
    },
    {
      question: 'What does the routing pattern describe?',
      options: [
        'The input is classified and routed to a specialized prompt/branch',
        'The task runs in strictly sequential steps',
        'A central model delegates subtasks to workers',
        'The response is encrypted before sending',
      ],
    },
    {
      question: 'What does the orchestrator–workers pattern describe?',
      options: [
        'A central model dynamically splits the task and delegates subtasks to worker models, then assembles the result',
        'One linear prompt with no branching',
        'Double-checking the answer by a human',
        'Caching a stable prefix',
      ],
    },
  ],
  'evaluator-optimizer': [
    {
      question: 'What does the evaluator–optimizer pattern describe?',
      options: [
        'One model generates a response, another gives feedback in a loop until the result is good enough',
        'The input is routed by type',
        'Subtasks run in parallel for diversity',
        'Tools are loaded dynamically',
      ],
    },
  ],
  'when-agent': [
    {
      question: 'When is a full agent justified?',
      options: [
        'For open-ended tasks where the number of steps can’t be predicted, with enough trust in the model’s decisions and sandbox testing',
        'For any trivial task like extracting one field',
        'Always, because an agent is cheaper than a single call',
        'Only when tools are forbidden',
      ],
    },
    {
      question: 'Which precaution matters for an agent with real actions?',
      options: [
        'Sandbox testing and confirmation gates on irreversible actions',
        'Disabling logging to speed things up',
        'Giving all tools the broadest possible permissions',
        'Removing the system prompt',
      ],
    },
  ],
  'aci-tool-design': [
    {
      question: 'What matters when designing tools for an agent (ACI)?',
      options: [
        'A clear prescriptive description with examples, a format natural for the model, and protection against misuse (poka-yoke)',
        'A name as short as possible with no description',
        'The most complex data format possible',
        'As many tools at once as possible',
      ],
    },
  ],
  'claude-code-what': [
    {
      question: 'What is Claude Code?',
      options: [
        'An agentic development tool: it reads the codebase, edits files, runs commands, works in the terminal/IDE/desktop/web',
        'A separate model available only via the API',
        'A library for counting tokens',
        'A configuration-file format',
      ],
    },
  ],
  'claude-md': [
    {
      question: 'What is CLAUDE.md in Claude Code?',
      options: [
        'A project markdown file read at the start of each session: code standards, decisions, preferences',
        'A file with secret API keys',
        'A log of all requests to the model',
        'A compiled binary of the tool',
      ],
    },
    {
      question: 'What is true about Claude Code’s memory?',
      options: [
        'It is multi-level (project and user CLAUDE.md), plus auto memory saves findings across sessions',
        'Memory is stored only on Anthropic’s server and is inaccessible to the project',
        'CLAUDE.md is overwritten with random data on every request',
        'Memory works only on the web',
      ],
    },
  ],
  'claude-code-config': [
    {
      question: 'Where in Claude Code do you set permissions (what can be done without asking)?',
      options: [
        'In settings.json (an allowlist of tools/commands, environment variables, hooks)',
        'In CLAUDE.md itself as plain text',
        'Permissions can’t be set',
        'Only via the ANTHROPIC_API_KEY variable',
      ],
    },
    {
      question: 'What do hooks implement in Claude Code?',
      options: [
        'Shell commands before/after actions (auto-format after an edit, lint before a commit)',
        'Storing the conversation history',
        'Counting tokens',
        'Selecting a model by price',
      ],
    },
    {
      question: 'What is MCP for in Claude Code?',
      options: [
        'Connecting external sources and tools (Google Drive, Jira, Slack, your own services) via an open standard',
        'Speeding up tokenization',
        'Storing CLAUDE.md in the cloud',
        'Replacing git',
      ],
    },
  ],
  'why-evals': [
    {
      question: 'Why are evals needed when developing with LLMs?',
      options: [
        'To objectively measure response quality and see whether a prompt edit improved the result',
        'To speed up response generation',
        'To reduce the prompt size',
        'Evals aren’t needed, quality is obvious at a glance',
      ],
    },
    {
      question: 'Which criteria should evaluation goals meet (SMART)?',
      options: [
        'Specific, measurable, achievable, relevant (e.g. “F1 ≥ 0.85”)',
        'Vague and qualitative (“works well”)',
        'As ambitious as possible with no regard for the model’s abilities',
        'Secret, so they can’t be checked',
      ],
    },
  ],
  'eval-grading': [
    {
      question: 'Which grading method best suits classification tasks with a clear answer?',
      options: [
        'A code check for exact match',
        'Only manual human grading',
        'Only a subjective Likert scale',
        'It can’t be graded',
      ],
    },
    {
      question: 'What is recommended for LLM (model-graded) evaluation of responses?',
      options: [
        'Use a separate judge model with a clear rubric and automate where possible',
        'Judge with the same model in the same request with no criteria',
        'Grade one or two examples and that’s enough',
        'Avoid numeric metrics for “fuzzy” topics',
      ],
    },
  ],
  'debugging-prompt': [
    {
      question: 'How do you correctly improve a prompt based on eval results?',
      options: [
        'Group failures by type, edit precisely, and check on a held-out set so as not to “overfit”',
        'Change the prompt at random until the first successful run',
        'Always just increase max_tokens',
        'Evaluate the prompt on the same examples it was edited on',
      ],
    },
  ],
  'prompt-injection': [
    {
      question: 'What is prompt injection?',
      options: [
        'Hidden instructions in external untrusted data trying to hijack the model’s behaviour',
        'A network error while sending the prompt',
        'A way to speed up the model’s response',
        'A structured-output format',
      ],
    },
    {
      question: 'What is the basic principle of protection against prompt injection?',
      options: [
        'Treat everything from external sources and tools as data, not commands, and don’t execute instructions found there',
        'Trust instructions from documents if they sound convincing',
        'Send data to the endpoint specified in the content itself',
        'Give tools the broadest possible permissions',
      ],
    },
  ],
  'guardrails-safety': [
    {
      question: 'What counts as an application’s guardrails?',
      options: [
        'Rules in the system prompt, input validation, and output moderation/checking',
        'Only increasing max_tokens',
        'Disabling stop_reason handling',
        'Storing keys in the prompt',
      ],
    },
    {
      question: 'What counts as responsible use of the model?',
      options: [
        'Not storing secrets/excess PII in prompts and memory, adding a human in the loop for high stakes, not passing a probabilistic answer off as fact',
        'Storing passwords right in the system prompt for convenience',
        'Executing any actions without human review',
        'Ignoring safety refusals and working around them',
      ],
    },
  ],
};
