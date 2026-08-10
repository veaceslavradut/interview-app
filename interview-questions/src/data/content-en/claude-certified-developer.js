// Английские переводы: claude-certified-developer
import { ccdvImportedQuestionsEn } from '../ccdvImported-questions-en.js';
import { ccdvStudyQuestionsEn } from '../ccdvStudy-questions-en.js';

export const claudeCertifiedDeveloper = {
  title: 'Claude Certified Developer',
  description: 'Exam prep: Claude API foundations — models, prompting, tools, tokens',
  intro: `📚 **Anthropic's official prep material for the Claude Certified Developer: Foundations (CCDV‑F) exam:**

- Overview of Anthropic certifications (including Developer): [claude.com/blog/four-role-based-claude-certifications](https://claude.com/blog/four-role-based-claude-certifications)
- **Anthropic Academy** — courses and the official exam guide (the blueprint with domains and weights): [anthropic.skilljar.com](https://anthropic.skilljar.com)
- Learning resources: [anthropic.com/learn](https://www.anthropic.com/learn) · [claude.com/resources/courses](https://claude.com/resources/courses)
- Registration and testing (Pearson VUE): [pearsonvue.com/us/en/anthropic.html](https://www.pearsonvue.com/us/en/anthropic.html)

**Exam facts** (Anthropic Exam Guide v1.0, July 2026): code **CCDV‑F** · **53** items (multiple‑choice / multiple‑response — each item states how many to select) · **120** minutes · passing score **720** on a 100–1,000 scale · **$125** per attempt · valid **12 months** · delivered via **Pearson VUE** (online proctored or at a test centre) · retakes after 14/30/90 days, up to 4 attempts per rolling year · the score report gives pass/fail, the scaled score, and **percent‑correct by domain**.

**Blueprint — domain weights** (official; we size the material by these):

| Domain | Weight |
|---|---|
| Applications & Integration | 33.1% |
| Model Selection & Optimisation | 16.8% |
| Agents & Workflows | 14.7% |
| Prompt & Context Engineering | 11% |
| Tools & MCPs | 10.6% |
| Security & Safety | 8.1% |
| Claude Code | 3.1% |
| Eval, Testing & Debugging | 2.6% |

The section below is an unofficial practice tool for these topics, including a practice set of ~176 scenario questions adapted from a public study artifact (by **Anas Riad**). The exam fee is Anthropic's charge for the official exam — nothing here requires payment.`,
  questions: {
    'messages-api-architecture': {
      question: 'Which endpoint do Claude requests go through, and how are tools and structured output built into it?',
      answer: `Almost everything in the Claude API goes through a single endpoint — **\`POST /v1/messages\`** (the Messages API). It's not "a chat endpoint plus separate APIs for tools": **tool use and constraining the response format are features of that same endpoint**, not separate services.

A request contains at minimum:

- **\`model\`** — the model ID (e.g. \`claude-opus-5\`);
- **\`max_tokens\`** — a hard cap on response length;
- **\`messages\`** — the conversation: an array of \`{ role, content }\`, roles alternating \`user\`/\`assistant\`, the first entry always \`user\`.

On top of that come optional fields: \`system\` (the system prompt), \`tools\`, \`output_config\` (including \`format\` for structured output and \`effort\`), \`thinking\`, \`stream\`.

Supporting endpoints (Batches, Files, Token Counting, Models) **feed into** Messages API requests, but generation itself always goes through \`/v1/messages\`. The API is **stateless**: there is no server-side conversation state, so you send the full history on every request.`,
    },
    'what-is-a-token': {
      question: 'What is a token, and why can\'t you estimate prompt length with tiktoken?',
      answer: `A **token** is the smallest unit the model operates on: usually a piece of a word (a subword), a whole short word, punctuation, or whitespace. Billing and limits (context window, \`max_tokens\`, rate limits) are counted **in tokens**, not characters or words.

An important consequence for developers: **tokenization is model-specific**. The same text produces a different token count across model families.

Don't estimate length with **\`tiktoken\`** — it's OpenAI's tokenizer. It undercounts Claude tokens by ~15–20% on typical text, and by more on code and non-English input. The accurate count comes from **\`POST /v1/messages/count_tokens\`** (SDK: \`client.messages.count_tokens(...)\`), passing the same model you'll use for generation:

\`\`\`python
resp = client.messages.count_tokens(
    model="claude-opus-5",
    messages=[{"role": "user", "content": open("doc.md").read()}],
)
print(resp.input_tokens)
\`\`\`

The endpoint is stateless — to get the "delta" between two versions of a text, count each separately and subtract.`,
    },
    'context-window': {
      question: 'What is the context window, and how does stop_reason "model_context_window_exceeded" differ from "max_tokens"?',
      answer: `The **context window** is the maximum number of tokens the model can hold in a single request: it's the **sum** of the input (system + history + current message) and the generated output. Current models (Opus 5, Sonnet 5, Fable 5) have windows of **up to 1M tokens**; Haiku 4.5 has **200K**. Look up exact values via the Models API (\`max_input_tokens\`).

Don't confuse the two ceilings:

- **\`max_tokens\`** — the limit *you* set on **response length**. When it's hit you get \`stop_reason: "max_tokens"\` — the answer is truncated; raise the limit or switch to streaming.
- The **context window** — the model's overall limit. When it's exhausted you get \`stop_reason: "model_context_window_exceeded"\` — the history must be **compacted** or split.

Handle both separately:

\`\`\`python
if response.stop_reason == "model_context_window_exceeded":
    # window exhausted — compact or split the conversation
    ...
elif response.stop_reason == "max_tokens":
    # hit the response cap — raise max_tokens / stream
    ...
\`\`\``,
    },
    'temperature-determinism': {
      question: 'Does temperature 0 guarantee an identical answer to an identical prompt?',
      answer: `No. **Determinism is not guaranteed** even at \`temperature = 0\`. A low temperature only biases the choice toward the most likely tokens, but gives **no hard guarantee** of byte-identical output — a source of variation remains in the model's infrastructure. So don't build logic on "at 0 it's always the same."

What does **not** explain the difference: streaming being on, or the context-window size — those are separate things and don't affect wording.

A practical wrinkle on current models: on Opus 5 / Sonnet 5 / Fable 5 the sampling parameters **\`temperature\`, \`top_p\`, \`top_k\` are removed entirely** — passing them returns \`400\`. Behavior is now steered via **prompting** and the \`effort\` parameter, not temperature. If you previously needed "stability," get it with a tight prompt and low \`effort\`; if you needed "variety," ask for it explicitly in the prompt text.`,
    },
    'model-selection': {
      question: 'How do you choose a Claude model for a task?',
      answer: `The choice is a balance of **intelligence ↔ speed ↔ cost**. Rough guidance by current family (prices per 1M input/output tokens, at the time of writing):

| Model | ID | When to use | ~Price |
|---|---|---|---|
| Fable 5 | \`claude-fable-5\` | The hardest, long-horizon agentic work | $10 / $50 |
| Opus 5 | \`claude-opus-5\` | Complex code, agents, deep reasoning | $5 / $25 |
| Sonnet 5 | \`claude-sonnet-5\` | Balance of speed and quality — most tasks | $3 / $15 |
| Haiku 4.5 | \`claude-haiku-4-5\` | Simple tasks, maximum speed and low cost | $1 / $5 |

Practical rules:

- default to the **latest Opus** for your tier unless you deliberately chose otherwise — "downgrade to save money" should be a conscious decision;
- use the **exact ID strings** without appending date suffixes;
- for live characteristics (window, feature support) use the **Models API** (\`client.models.retrieve(id)\`) rather than guessing.

Don't pick a model by a name from memory — check the current list of IDs in the docs; it changes.`,
    },
    'thinking-and-effort': {
      question: 'What are adaptive thinking and the effort parameter? What happened to budget_tokens?',
      answer: `**Adaptive thinking** is a mode where the model **decides on its own** when and how deeply to "think" before answering, including between tool calls. Enable it with \`thinking: {type: "adaptive"}\`.

**\`effort\`** (inside \`output_config\`) is the main "thoroughness ↔ token spend" lever: levels **\`low\` / \`medium\` / \`high\` / \`xhigh\` / \`max\`**. Lower effort → fewer, more consolidated steps and shorter preambles; higher → more careful verification and reasoning. The default is \`high\`.

The fixed "thinking budget" **\`budget_tokens\` is deprecated**: on Opus 5 / Sonnet 5 / Fable 5 passing it returns \`400\`. \`effort\` conceptually replaces it.

\`\`\`python
client.messages.create(
    model="claude-opus-5",
    max_tokens=16000,
    thinking={"type": "adaptive"},
    output_config={"effort": "high"},  # low | medium | high | xhigh | max
    messages=[...],
)
\`\`\`

A nuance: on Opus 5 thinking is **on by default** (omitting \`thinking\` means adaptive), and the raw chain of thought is never returned — you can only get a short summary (\`display: "summarized"\`).`,
    },
    'prompt-structure': {
      question: 'How do you structure a prompt for Claude: system, role, examples?',
      answer: `Good prompt structure = a predictable result. The main techniques:

- **The system prompt (\`system\`)** sets the role, rules, and format: "you are an assistant that answers concisely." Keep it **stable** (this matters for caching — see prompt caching).
- **Few-shot examples** — one or two "input → desired output" samples in the \`messages\` history noticeably raise quality on non-trivial tasks. Zero-shot (no examples) is fine for simple, well-specified work.
- **Structure long context** — separate instructions, data, and the question with explicit sections (often XML-like tags such as \`<document>...</document>\`) so the model doesn't confuse what's what.
- **Don't overdo "CRITICAL / YOU MUST"** — modern models follow instructions literally, and aggressive wording makes a tool/behavior fire too often. Write "Use X when…", not "ALWAYS use X."

The key idea: describe **what** is needed and **when**, and show examples of the desired output — that works better than long lists of prohibitions.`,
    },
    'structured-output': {
      question: 'How do you reliably get valid JSON of a given schema from Claude?',
      answer: `The right way is **structured output** via \`output_config.format\` with a JSON schema (or strict tools with \`strict: true\`), **not** "prefilling" the assistant's answer.

\`\`\`python
response = client.messages.create(
    model="claude-opus-5",
    max_tokens=1024,
    output_config={"format": {"type": "json_schema", "schema": SCHEMA}},
    messages=[{"role": "user", "content": "Extract the name and email."}],
)
\`\`\`

Key points:

- **Prefill no longer works**: ending \`messages\` with a \`role: "assistant"\` message that starts the JSON **returns 400** on current models (Opus 5, Sonnet 5, Fable 5, the 4.6+ family). That's how people used to "force" the format — structured outputs replace it.
- For a fixed classification label, declaring a tool with an \`enum\` field is convenient.
- If \`stop_reason: "refusal"\` or \`"max_tokens"\` comes back, the output may not match the schema — check for that.
- The first generation with a new schema is slightly slower (schema compilation), then it's cached.

The SDK helper \`client.messages.parse()\` additionally validates the response against your schema automatically.`,
    },
    'prompt-caching': {
      question: 'How does prompt caching work, and what is its main constraint?',
      answer: `**Prompt caching is a prefix match.** The shared **prefix** of the request is cached, and **any byte change anywhere in the prefix invalidates the cache for everything after it**. Render order is \`tools\` → \`system\` → \`messages\`.

From this follows the golden rule: **stable content first, volatile content last**. A frozen system prompt and a deterministic tool list go up front; timestamps, per-request IDs, and the changing question go after the last cache breakpoint.

- The marker is \`cache_control: {type: "ephemeral"}\` on a block; the default TTL is **5 minutes**, or \`"1h"\`.
- The minimum cacheable prefix is model-dependent (e.g. 512 tokens on Opus 5) — shorter simply won't cache, with no error.
- **Verify hits** via \`usage.cache_read_input_tokens\`: if it's consistently 0 for an identical prefix, there's a "silent invalidator" — \`datetime.now()\` in the system prompt, unsorted JSON, a varying tool set.

Economics: a cache read ≈ 0.1× the input price, a write ≈ 1.25× (5 min) or 2× (1 hour) — it pays off from the second or third request.`,
    },
    'batch-api': {
      question: 'How do you process a large volume of requests more cheaply when the answer isn\'t needed instantly?',
      answer: `For **non-urgent** bulk processing there's the **Message Batches API** (\`POST /v1/messages/batches\`): requests run **asynchronously** at a **50%** discount on token cost.

- A batch can hold **up to 100,000** requests (or 256 MB).
- Most batches finish within an hour, at most **24 hours**; results are available for 29 days.
- All Messages API features are supported (tools, vision, caching).

\`\`\`python
batch = client.messages.batches.create(requests=[
    {"custom_id": "q1", "params": {"model": "claude-opus-5", "max_tokens": 1024,
        "messages": [{"role": "user", "content": "..."}]}},
    # ...
])
# poll until processing_status != "ended", then read results
\`\`\`

The key gotcha: results arrive **in any order** — key them by \`custom_id\`, never by position. Batches suit offline tasks (labeling, extraction, embeddings), not an interactive user-facing reply.`,
    },
    'tool-use-basics': {
      question: 'How does the tool use (function calling) loop work in the Messages API?',
      answer: `**Tool use** lets the model call your functions. You describe the tools, the model asks to call them, you execute and return the result — and so on in a loop.

1. You pass \`tools\` — each is \`{ name, description, input_schema }\`. **The description matters most**: the model decides *when* to call the tool from it (write "call this when…").
2. If the model wants to call a tool, the response comes with \`stop_reason: "tool_use"\` and a \`tool_use\` block (\`id\`, \`name\`, \`input\`).
3. You **execute** the function on your side and add a \`role: "user"\` message with a \`tool_result\` block whose **\`tool_use_id\`** matches the call's id.
4. Repeat until \`stop_reason: "end_turn"\`.

\`\`\`json
{ "type": "tool_result", "tool_use_id": "toolu_123",
  "content": "72°F, clear" }
\`\`\`

\`tool_choice\` steers behavior: \`auto\` (default), \`any\` (must call something), \`{type:"tool", name}\` (a specific one), \`none\`. The SDK's **tool runner** drives this loop for you; a manual loop is for when you want to own the logic entirely.`,
    },
    'tool-use-parallel-errors': {
      question: 'How do you handle multiple tool_use blocks in one response, and tool errors?',
      answer: `The model may request **several tools at once** — one response can contain multiple \`tool_use\` blocks. Handle them correctly:

- **Execute them all** (concurrently is fine) and return **all** \`tool_result\` blocks in a **single** \`role: "user"\` message. Splitting the results across messages silently trains the model to stop making parallel calls.
- Order: first add the assistant's full response to the history (\`response.content\` — with every \`tool_use\`), then one user message with all the results.

Tool errors **must not be silently dropped**. If a function fails, still return a \`tool_result\` for it, but with the flag **\`is_error: true\`** and an error message:

\`\`\`json
{ "type": "tool_result", "tool_use_id": "toolu_9",
  "content": "Service unavailable (503)", "is_error": true }
\`\`\`

The model sees the error and can adapt — try a different approach or ask for clarification. A missing result for a requested \`tool_use\` breaks the conversation.`,
    },
    'server-vs-client-tools': {
      question: 'How do server-side tools differ from client-side (user-defined) tools?',
      answer: `Tools come in two kinds — the difference is **who executes them**.

**Client-side (user-defined) tools** are executed by **you**: the model returns \`tool_use\`, you run the code on your side and send back a \`tool_result\`. These are your functions — database access, calling your API, sending an email. Anthropic's "schema-defined" tools like bash and text editor are also client-side: Anthropic defines the schema, but you run the commands.

**Server-side tools** run **on Anthropic's infrastructure** — there's no client-side execution loop. You just declare them in \`tools\`, and results arrive as blocks in the same response. Examples:

- **web search / web fetch** — searching and fetching web pages (for information newer than the training data);
- **code execution** — running code in an Anthropic-hosted sandbox.

A practical note for server-side tools: the server loop can hit its iteration limit and return \`stop_reason: "pause_turn"\` — then you simply re-send the message with the assistant's response, and generation continues from where it left off (don't add a "Continue" message).`,
    },
    'streaming': {
      question: 'When and why should you use response streaming?',
      answer: `**Streaming** delivers the response as it's generated via Server-Sent Events, rather than in one chunk at the end.

Two reasons to use it:

1. **UX** — in chat interfaces, text appears immediately instead of after a pause.
2. **Reliability (the main one for backends)** — long inputs/outputs and a large \`max_tokens\` on a **non**-streaming request risk hitting the SDK's **HTTP timeout**. Rule of thumb: if \`max_tokens\` is above ~16,000 — **stream**. On all current models, output up to 128K is only reachable with streaming.

\`\`\`python
with client.messages.stream(
    model="claude-opus-5", max_tokens=64000,
    messages=[{"role": "user", "content": "..."}],
) as stream:
    for text in stream.text_stream:
        print(text, end="")
    final = stream.get_final_message()  # the full response object
\`\`\`

If you don't need to handle individual events, use the \`get_final_message()\` / \`finalMessage()\` helper — it assembles the complete response for you. A separate nuance: when streaming reasoning (\`display: "summarized"\`), the default is a long "pause" — thinking blocks arrive empty if a summary isn't requested.`,
    },
    'stop-reasons-refusal': {
      question: 'What stop_reason values are there, and how do you correctly handle a refusal?',
      answer: `The **\`stop_reason\`** field in the response explains why the model stopped. The main values:

- **\`end_turn\`** — the response finished naturally;
- **\`max_tokens\`** — hit the response-length cap;
- **\`tool_use\`** — the model wants to call a tool;
- **\`pause_turn\`** — a server-side tool hit its iteration limit; the turn can be continued;
- **\`refusal\`** — the model declined for safety reasons;
- **\`stop_sequence\`** — a configured stop sequence fired.

The key rule: **check \`stop_reason\` before reading \`content\`**. When safety classifiers decline, the response comes back with **HTTP 200** and \`stop_reason: "refusal"\`, and the \`content\` array may be empty — code that unconditionally reads \`content[0].text\` breaks on a refusal.

\`\`\`python
if response.stop_reason == "refusal":
    handle_refusal()      # content is empty or partial
else:
    print(response.content[0].text)
\`\`\`

Refusal details (when present) live in \`stop_details\` — but that field is informational and can be \`null\` even on a refusal, so branch on \`stop_reason\` itself.`,
    },
    'sdk-and-auth': {
      question: 'How do you authenticate to the Claude API, and which SDK should you use?',
      answer: `The standard way is the **\`ANTHROPIC_API_KEY\` environment variable**, which the SDK picks up automatically: the zero-argument client constructor (\`Anthropic()\`) is ready to go. An alternative for local development is an OAuth profile via \`ant auth login\` (the SDK reads it from disk — no separate key needed).

The key **must not** live in code or a repository — only in environment variables or a secrets manager. A leaked key means compromised access to the whole account.

For calls, use the **official SDK for your language** (\`anthropic\` for Python, \`@anthropic-ai/sdk\` for TypeScript, etc.), not a hand-rolled HTTP client — unless you explicitly need raw HTTP. The SDK handles retries, typed errors, streaming, and tool helpers.

\`\`\`python
from anthropic import Anthropic
client = Anthropic()   # key from ANTHROPIC_API_KEY
\`\`\`

On a \`401\`, first check that the key is set and non-empty (an empty \`ANTHROPIC_API_KEY=""\` still "wins" its slot and is sent to the server empty).`,
    },
    'streaming-events': {
      question: 'What events make up a streamed response (SSE)?',
      answer: `When streaming, the response arrives as a stream of **Server-Sent Events**. The main event types:

- **\`message_start\`** — message metadata (once at the beginning);
- **\`content_block_start\`** — a content block began (text, thinking, tool_use);
- **\`content_block_delta\`** — the next chunk (\`text_delta\`, \`thinking_delta\`, \`input_json_delta\`);
- **\`content_block_stop\`** — the block finished;
- **\`message_delta\`** — message-level updates: \`stop_reason\` and \`usage\` arrive here;
- **\`message_stop\`** — the message is complete.

In practice: if you only need the final result, don't parse events by hand — use the \`get_final_message()\` / \`finalMessage()\` helper, which assembles the full object. For a chat UI, print \`text_delta\` as it arrives.

\`\`\`python
with client.messages.stream(model="claude-opus-5", max_tokens=1024,
        messages=[{"role": "user", "content": "Hi"}]) as stream:
    for text in stream.text_stream:
        print(text, end="")
\`\`\`

A nuance: with \`display: "summarized"\` the thinking events arrive empty unless a summary is requested — visually that looks like a pause before the answer.`,
    },
    'vision-images': {
      question: 'How do you send images to the model (vision), and what are the limits?',
      answer: `An image is passed as a **content block** \`type: "image"\` in the user message, with its source given by **URL** or **base64**:

\`\`\`python
{"type": "image", "source": {"type": "base64",
    "media_type": "image/png", "data": b64_string}}
\`\`\`

- JPEG, PNG, GIF, WebP are supported.
- The image block usually goes **before** the text block with the question.
- Images cost tokens — larger images cost more; if you don't need high resolution, downsample them on your side.
- The exact token count for a given image can be obtained via \`count_tokens\`.

Vision helps with screenshots, diagrams, documents, and UIs. As with text, **don't silently truncate** the input — if it doesn't fit the window, discuss chunking with the user rather than losing data quietly.`,
    },
    'pdf-documents': {
      question: 'How do you give the model a PDF, and why is the Files API useful?',
      answer: `A PDF is passed as a **block** \`type: "document"\`. Two ways:

1. **base64** directly in the request (\`source: {type: "base64", media_type: "application/pdf", data: ...}\`) — the block goes before the text;
2. via the **Files API**: upload the file once (\`client.beta.files.upload(...)\`), get a \`file_id\`, and reference it from multiple requests without re-sending (\`source: {type: "file", file_id: ...}\`).

The Files API is handy when one document is used across several requests: it saves bandwidth and upload tokens. The Files API needs a beta header (\`files-api-2025-04-14\`) — on both the upload and the request that references the file.

base64-PDF limits: up to 32 MB per request and a page-count cap. For long documents, split them or use the Files API. You can enable **citations** on documents (\`citations: {enabled: true}\`) so the answer references specific locations.`,
    },
    'multi-turn-stateless': {
      question: 'How do you run a multi-turn conversation if the API is stateless?',
      answer: `The Claude API **does not store** conversation state on the server — so **you send the full history on every request**. The conversation's "memory" lives on your side: you accumulate a \`messages\` array and send it in full.

Rules for the \`messages\` array:

- the first entry is **\`user\`**;
- roles **\`user\`/\`assistant\`** alternate (two of the same in a row are merged into one turn by the server);
- for each model reply, you add its \`assistant\` message to the history, then a new \`user\` message.

\`\`\`python
messages = [
    {"role": "user", "content": "My name is Alice."},
    {"role": "assistant", "content": "Nice to meet you!"},
    {"role": "user", "content": "What's my name?"},
]
resp = client.messages.create(model="claude-opus-5", max_tokens=256, messages=messages)
\`\`\`

Cost grows from this too: the longer the history, the more input tokens per request — that's where prompt caching (caching a stable prefix) and, for very long conversations, compaction help.`,
    },
    'rate-limits-and-errors': {
      question: 'Which Claude API errors are worth retrying, and how do you tell them apart?',
      answer: `Errors split into **retryable** and **not**:

| Code | Type | Retry? |
|---|---|---|
| 400 | invalid_request_error | no (fix the request) |
| 401 | authentication_error | no (the key) |
| 403 | permission_error | no |
| 404 | not_found_error | no (usually a typo in the model ID) |
| 429 | rate_limit_error | **yes** (see \`retry-after\`) |
| 500 / 529 | api_error / overloaded | **yes** (backoff) |

The SDK **itself** retries 429 and 5xx with exponential backoff (default \`max_retries=2\`). Distinguish types by **typed exception classes** (\`RateLimitError\`, \`BadRequestError\`, \`NotFoundError\` …), not by a substring in the message text. Catch from most specific to least:

\`\`\`python
try:
    resp = client.messages.create(...)
except anthropic.NotFoundError:   # 404 — bad model ID
    ...
except anthropic.RateLimitError:  # 429 — wait and retry
    ...
except anthropic.APIStatusError as e:
    print(e.status_code, e.message)
\`\`\``,
    },
    'tool-runner-vs-manual': {
      question: 'How does the tool runner differ from a manual tool-use loop?',
      answer: `The **tool runner** is an SDK helper that **drives the agentic loop for you**: it calls the API, notices a tool request, runs your function, returns the result, and repeats until the model stops. You write only the tool functions themselves.

A **manual loop** you write yourself: a while loop until \`stop_reason == "end_turn"\`, appending the full \`response.content\` to the history each iteration (to preserve \`tool_use\` blocks), running the tools, and returning all \`tool_result\` blocks in a single \`user\` message.

Which to choose:

- **Default to the tool runner.** It supports streaming, an iteration cap, and hooks (call approval, result interception) — "I need control" is rarely a reason to leave it.
- **A manual loop** — when you need full control over the logic, a custom transport, a request shape the SDK can't build, or you'd rather not take the beta dependency.

The key invariants of a manual loop: keep \`tool_use\` blocks in the history, and return a \`tool_result\` with a matching \`tool_use_id\` for every call.`,
    },
    'structured-output-limits': {
      question: 'What are the JSON-schema limitations for structured outputs?',
      answer: `Structured outputs (\`output_config.format\`) constrain the answer against a **JSON Schema**, but not the whole schema spec is supported.

**Supported:** basic types (object, array, string, integer, number, boolean, null), \`enum\`, \`const\`, \`anyOf\`, \`allOf\`, \`$ref\`/\`$def\`, string formats (\`date-time\`, \`date\`, \`email\`, \`uri\`, \`uuid\`, etc.). For objects, \`additionalProperties: false\` is **required**.

**Not supported:** recursive schemas, numeric constraints (\`minimum\`, \`maximum\`), string-length constraints (\`minLength\`, \`maxLength\`), complex array constraints.

Worth knowing:

- the first generation with a new schema is slightly slower (schema compilation), then it's cached for 24 hours;
- on \`stop_reason: "refusal"\` or \`"max_tokens"\` the output may not match the schema — check for that;
- structured outputs are **incompatible** with citations and with prefill;
- the recommended way in the SDK is \`client.messages.parse()\`, which validates the response against your schema automatically. The Python/TypeScript SDKs strip unsupported constraints from the schema and validate them client-side.`,
    },
    'models-api': {
      question: 'How do you find a model\'s current characteristics programmatically?',
      answer: `Don't rely on memory or construct IDs "from your head" — for **live** data there's the **Models API**:

- \`client.models.list()\` — list models (auto-paginates);
- \`client.models.retrieve("claude-opus-5")\` — retrieve one.

A model object has \`id\`, \`display_name\`, and (typed) \`max_input_tokens\` (the context window), \`max_tokens\` (the output cap), and \`capabilities\` — a tree of feature support (vision, thinking, effort, structured outputs …) with a \`supported\` flag at each leaf.

\`\`\`python
m = client.models.retrieve("claude-opus-5")
print(m.max_input_tokens, m.max_tokens)
print(m.capabilities["image_input"]["supported"])
\`\`\`

Use this when you need to answer "what's the window for X", "does X support vision/thinking", or to pick a model by capability at runtime. There is no separate \`context_window\` field — use \`max_input_tokens\`.`,
    },
    'prompt-caching-placement': {
      question: 'Where do you put cache breakpoints and volatile data in the prompt?',
      answer: `Because caching is a **prefix match**, placement is everything. Render order is \`tools\` → \`system\` → \`messages\`.

- **Stable first, volatile last.** A frozen system prompt and a deterministic tool list go first; timestamps, per-request IDs, and the changing question go **after** the last cache breakpoint.
- The **breakpoint** is \`cache_control: {type: "ephemeral"}\` on a block — on the last system-prompt block (caches tools + system) or on the last block of the latest turn in a multi-turn conversation.
- A large shared prefix + a varying "tail": put the breakpoint **at the end of the shared part**, not the whole prompt, or every request writes a fresh cache and nothing is read.
- At most **4** breakpoints per request.

\`\`\`json
"system": [
  {"type": "text", "text": "<large stable prompt>",
   "cache_control": {"type": "ephemeral"}}
]
\`\`\`

Don't interpolate \`current date: X\` / \`user: Y\` into the system prompt — that puts a variable at the front of the prefix and kills the cache for everything after it; pass such data later, in \`messages\`.`,
    },
    'cache-invalidation-levels': {
      question: 'What invalidates the prompt cache most severely?',
      answer: `The cache is tiered (tools → system → messages), and a change affects its own tier **and everything below**. Changes at the very front of the prefix hurt most:

- **Changing the tool set** (add/remove/reorder \`tools\`) — they render at position 0, so they invalidate the **entire** cache.
- **Switching models** — the cache is model-scoped, a full reset.
- **Changing the system prompt** — resets system and messages, but not tools.

Practical techniques for agents:

- need a "mode"? Don't swap the tool set on the fly — pass the mode in message content or via a dedicated tool;
- serialize \`tools\` deterministically (sort by name);
- for fork operations (summarization, a sub-agent), copy the parent's \`system\`/\`tools\`/\`model\` **verbatim**, or the fork misses the cache;
- switching models for a cheap sub-task? Keep the main loop on one model and hand the sub-task to a sub-agent.

Verify the effect via \`usage.cache_read_input_tokens\`.`,
    },
    'stop-sequences': {
      question: 'What are stop sequences, and how do they differ from max_tokens?',
      answer: `A **stop sequence** (\`stop_sequences\`) is a string that halts generation when the model produces it. It's a way to cut the answer by **content**, not by length.

- If a stop sequence fires, you get **\`stop_reason: "stop_sequence"\`**.
- That differs from **\`max_tokens\`** (hit the length cap) and from **\`end_turn\`** (the model finished on its own).

Example: when generating from a template, you can set a stop string so the model doesn't run past the needed fragment. But for structured output, stop strings aren't the reliable choice — **structured outputs** (\`output_config.format\`) are: stop sequences are brittle, whereas a schema guarantees valid JSON.

Bottom line: \`stop_sequence\` is a fine-grained control over the answer's boundary; for format prefer a schema, for a length cap use \`max_tokens\` (and streaming at large values).`,
    },
    'context-editing-vs-compaction': {
      question: 'How does context editing differ from compaction, and when do you use each?',
      answer: `Both fight context growth in long-running agents, but differently:

- **Compaction** — the server **summarizes** early history into a compact block as the conversation nears the window limit. It's important to append the full \`response.content\` back (including compaction blocks), not just the text.
- **Context editing** — **removes (clears)** stale tool results and/or thinking blocks (\`clear_tool_uses\`, \`clear_thinking\`) rather than summarizing them. The transcript gets lighter without a retelling.

How to choose:

- **context editing** — when old tool results are no longer relevant and can simply be dropped;
- **compaction** — when the conversation is about to hit the window and you can't lose the meaning of the history, so you need a summary;
- long-running agents often use both, and for state **between** sessions, the memory tool.

Don't conflate their types: context editing has its own clearing strategies, compaction is a separate summarization mechanism — they're different things.`,
    },
    'workflows-vs-agents': {
      question: 'How does a workflow differ from an agent, and when do you choose each?',
      answer: `These are two ways to build LLM systems, and the distinction matters:

- **Workflow** — LLMs and tools orchestrated through **predefined code paths** (predictable branching). Good for well-defined tasks that need control and predictability.
- **Agent** — a system where the **model dynamically directs** its own process and tool usage. Good for open-ended tasks where the number of steps isn't known in advance.

Anthropic's core principle is **start simple**: first try a single LLM call (perhaps with retrieval and in-context examples), then a workflow, and only reach for an agent when genuinely needed. Agents are more expensive, slower, and less predictable.

When should you go up to an agent? Check: the task is **genuinely multi-step** and hard to specify in advance; the value justifies the cost and latency; the model is capable of it; and **errors can be caught and rolled back** (tests, review). If any answer is "no," stay at a simpler tier.`,
    },
    'workflow-patterns': {
      question: 'What are the basic LLM workflow patterns?',
      answer: `Anthropic identifies several reusable orchestration patterns:

- **Prompt chaining** — the task is split into sequential steps, where each call processes the previous output. Good when the task decomposes cleanly.
- **Routing** — the input is classified and directed to a specialized branch/prompt. Useful when different request types need different handling.
- **Parallelization** — subtasks run simultaneously: *sectioning* (split into independent parts) or *voting* (multiple runs for consensus/diversity).
- **Orchestrator–workers** — a central "orchestrator" model dynamically breaks down the task and delegates subtasks to "worker" models, then combines results.
- **Evaluator–optimizer** — one model generates a response, another gives feedback in a loop until the result is good enough.

All are built from simple building blocks (a model call + tools) and give predictability where a full agent would be overkill.`,
    },
    'agent-when-and-risks': {
      question: 'When is a full agent justified, and what precautions are needed?',
      answer: `An agent is justified for **open-ended tasks** where you can't predict the required number of steps in advance, and where the value of the outcome covers the increased cost and latency. This requires substantial **trust in the model's decisions**.

Precautions:

- **Extensive testing in a sandbox** — run the agent in an isolated environment before giving it access to real actions.
- **Guardrails and rollback** — confirmation gates on irreversible/expensive actions, and a way to undo (tests, review, rollback).
- **Transparency** — show the planning steps so behavior can be traced.
- **Simplicity of design** — don't over-complicate; extra abstractions hurt reliability.

The key criterion before choosing an agent is the **cost of error**: if an error is easy to catch and roll back, the risk is acceptable; if an action is irreversible and costly, add a human in the loop or stay on a workflow.`,
    },
    'tool-design-aci': {
      question: 'How do you design tools for an agent (the agent–computer interface)?',
      answer: `The quality of an agent's tools (the ACI — **agent–computer interface**) matters as much as UX does for humans (HCI). Poorly described tools are the top reason an agent makes mistakes.

Anthropic's tool-design guidance:

- **Clear, prescriptive descriptions** — say not just what the tool does, but **when** to call it; include example usage and edge cases.
- **A format natural to the model** — use a data representation the model has seen often; avoid formatting overhead (heavy escaping, brittle structures).
- **"Poka-yoke"** — design the tool so it's **hard to use incorrectly** (mistake-proofing): clear required params, sensible defaults.
- **Test extensively** — run many real calls and fix the description based on observed errors.

And a general rule: keep the tool set **small and focused** — too many tools confuse the model. For large sets, use tool search (dynamically loading only the relevant schemas).`,
    },
    'what-is-claude-code': {
      question: 'What is Claude Code, and which surfaces does it run on?',
      answer: `**Claude Code** is an agentic coding tool: it reads your codebase, edits files, runs commands, and integrates with your dev tools. It understands the whole project and works across multiple files.

It's available on several **surfaces**, all using the same engine (your \`CLAUDE.md\` files, settings, and MCP servers work everywhere):

- **terminal (CLI)** — the full-featured command-line interface;
- **IDE extensions** (VS Code, JetBrains) — inline diffs, @-mentions, plan review;
- **desktop app** — visual diff review, parallel sessions;
- **web** ([claude.ai/code](https://claude.ai/code)) — run tasks in the cloud with no local setup.

Typical uses: build a feature, fix a bug, write tests, resolve conflicts, make a commit/PR. The CLI is **composable** in the Unix spirit — you can pipe (\`tail -200 app.log | claude -p "..."\`), run it in CI, and chain it with other tools. For fully custom agents there's the **Agent SDK** built on Claude Code's capabilities.`,
    },
    'claude-md-memory': {
      question: 'What is CLAUDE.md, and how does Claude Code memory work?',
      answer: `**\`CLAUDE.md\`** is a markdown file in your project that Claude Code reads **at the start of every session**. Put in it what the model should always know: coding standards, architecture decisions, preferred libraries, review checklists, build commands.

Claude Code memory is tiered:

- **Project \`CLAUDE.md\`** (at the repo root) — shared by the team, committed to git;
- **User memory** — personal preferences, shared across all your projects;
- nested \`CLAUDE.md\` files in subdirectories can refine instructions for their part of the code.

Separately there's **auto memory**: Claude Code saves useful learnings (build commands, debugging insights) across sessions on its own — you don't have to write them.

The practical point: \`CLAUDE.md\` is the "instructions for the assistant" that makes behavior predictable and removes the need to repeat context every session.`,
    },
    'claude-code-config': {
      question: 'How do you configure and extend Claude Code (settings, slash commands, hooks, subagents, MCP)?',
      answer: `Claude Code is configured through several mechanisms:

- **\`settings.json\`** — behavior and **permissions** config (what the model may do without asking — a tool/command allowlist), environment variables, hooks.
- **Slash commands and Skills** — reusable workflows you can share with the team (e.g. \`/review-pr\`, \`/deploy-staging\`).
- **Hooks** — shell commands run **before/after** Claude Code actions: auto-format after every edit, lint before a commit. Hooks are what implement "every time X" automations.
- **Subagents** — you can spawn multiple agents working on different parts of a task in parallel; a lead agent coordinates and merges results.
- **MCP (Model Context Protocol)** — an open standard for connecting external sources/tools (Google Drive, Jira, Slack, your own services). Through MCP, Claude Code reads docs and updates tickets.

In short: **instructions** come from \`CLAUDE.md\`, **permissions and hooks** from \`settings.json\`, **external tools** from MCP, and **scale** from subagents.`,
    },
    'why-evals': {
      question: 'Why do you need evals, and what is eval-driven development?',
      answer: `An **eval** is a set of test cases used to measure the quality of the model's answers objectively, not "by eye." Without evals you can't tell whether a prompt edit improved or worsened the result.

**Eval-driven development** is an iterative cycle:

\`\`\`
Test cases → preliminary prompt → iterate (test + refine) → final validation → ship
\`\`\`

Key principles:

- **SMART success criteria** — Specific, Measurable, Achievable, Relevant (e.g. "F1 ≥ 0.85 on 10,000 posts," not "the model classifies well").
- **Volume over perfection** — many automatically graded cases give a better signal than a few hand-graded ones.
- **Cover edge cases** — typos, sarcasm, ambiguity, long input, harmful input.
- **Multidimensional** — real apps evaluate across several axes at once: accuracy + tone + latency + cost.

Evals turn "prompt tweaking" from guesswork into a measurable engineering process.`,
    },
    'eval-grading-methods': {
      question: 'What methods are used to grade model outputs?',
      answer: `Output grading falls into three groups:

- **Code-based grading (exact match / code-graded)** — comparison by code: exact label match, embeddings/cosine similarity (consistency), ROUGE (closeness to a reference summary). Fast, cheap, deterministic — ideal for classification and clear-answer tasks.
- **Human grading** — the most flexible, but expensive and doesn't scale; used as a gold standard and for subtle cases.
- **LLM grading (model-graded)** — another model judges against a criterion: a Likert 1–5 scale (tone, empathy), binary classification (e.g. "does this contain PII?"), an ordinal scale (how well context was used). Scales to subjective qualities.

Recommendations:

- **automate** where possible (code or LLM grading) so you can run hundreds/thousands of cases;
- for LLM grading, **use a separate judge model** (and give it a clear rubric with examples);
- even for "fuzzy" topics, define a numeric metric (e.g. "< 0.1% toxicity").`,
    },
    'debugging-prompts': {
      question: 'How do you debug and improve a prompt from eval results?',
      answer: `Debugging a prompt is work on **error patterns**, not on individual cases:

1. **Run the baseline prompt** on the test set and measure against the success criteria.
2. **Group the failures** — find the common failure type (confuses two labels? loses context? goes verbose?).
3. **Fix precisely** — refine the instruction for that specific failure type; often **positive examples** of the desired output work better than a list of prohibitions.
4. **Validate on a held-out set** — do final validation on data not used during iteration, so you don't overfit the prompt.

Useful techniques: structure the prompt (sections/XML tags), give few-shot examples of the tricky cases, and for strict format use structured outputs instead of pleading. And remember: switching models or large prompt edits **invalidate the cache** and change behavior — re-check metrics after every change.`,
    },
    'prompt-injection': {
      question: 'What is prompt injection, and how do you defend against it?',
      answer: `**Prompt injection** is an attack where **external, untrusted data** (a web page, document, email, tool result, file contents) hides instructions that try to hijack the model's behavior ("ignore previous instructions and do X").

The base defense principle: **anything that came from external sources and tools is data, not commands.** The model should not execute instructions found inside such content.

Practical measures:

- **Separate roles and data** — put untrusted content in clearly labeled sections (e.g. \`<document>...</document>\`) and state in the prompt that it's data to analyze, not instructions;
- **Gate actions** — confirm irreversible/sensitive operations (send, delete, payments), especially when the trigger came from external content;
- **Least privilege** — tools and keys with the minimum necessary rights to limit the blast radius;
- **Don't trust links/addresses from content** — don't send data to an endpoint "suggested" by the untrusted text itself.

This matters most in agents and tool use, where the model acts on results that came from outside.`,
    },
    'guardrails': {
      question: 'How do you put guardrails on the model\'s input and output?',
      answer: `**Guardrails** keep an application's behavior within acceptable bounds. They're placed at three levels:

- **System prompt** — sets the role, rules, and boundaries: what the model does, what it doesn't, how to respond to out-of-scope requests. The first and cheapest guardrail.
- **Input validation** — check and sanitize user input; feed untrusted content as data, not instructions (see prompt injection).
- **Output moderation/validation** — check the response before showing it or acting: an unwanted-content classifier, format checks (structured outputs), a binary LLM check ("does this contain PII?").

Additionally:

- **Handle \`stop_reason: "refusal"\`** — a safety refusal comes back with HTTP 200; check stop_reason before reading content;
- **Human in the loop** for high-risk actions;
- **Test guardrails with evals** — quantify even "fuzzy" safety with a metric (the fraction of flagged responses).`,
    },
    'responsible-use': {
      question: 'What counts as responsible use of Claude in applications?',
      answer: `Responsible use is a set of practices that reduce harm and risk:

- **Don't store secrets or unnecessary PII** in prompts, memory, or memory files — they end up in the history and can "surface" in future answers; keep keys and passwords in environment variables/a secrets manager.
- **Be careful with personal data (PII/PHI)** — minimize collection, check the output for leaks of sensitive information, comply with regulations;
- **Human oversight for high stakes** — decisions with serious consequences (medical, financial, legal) shouldn't be executed by the model without a human check;
- **Transparency to the user** — indicate that they're interacting with AI, and don't present a probabilistic answer as a guaranteed fact;
- **Don't rely on the model as a source of truth** — it can "hallucinate"; for current/verifiable facts, give it tools (web search) and ask it to rely on sources;
- **Respect safety refusals** — if the model declined (\`refusal\`), don't try to work around it for a prohibited result.

These practices are part of the exam's "Security & Safety" domain and simply sound engineering sense.`,
    },
    ...ccdvImportedQuestionsEn,
    ...ccdvStudyQuestionsEn,
  },
};
