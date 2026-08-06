// AUTO-GENERATED — imported practice questions for the Claude Certified Developer
// (Foundations) mock-exam set. Adapted from a public study artifact by Anas Riad;
// unofficial, not affiliated with or endorsed by Anthropic. Do not hand-edit.
export const ccdvImportedQuestionsEn = {
  "ccd-qa-1": {
    "question": "Which TWO statements about prompting modes are accurate? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Single-shot includes exactly one worked example\n- **✅ B.** Multi-shot examples guide the output on that call, at extra token cost\n- C. Zero-shot always outperforms few-shot once the task is well-specified\n- D. Multi-shot permanently fine-tunes the model on the examples\n\n**Correct:** A, B\n\nSingle-shot is one example; multi-shot adds several to shape output per call at token cost. Examples do not fine-tune the model, and zero-shot is not universally superior once specified."
  },
  "ccd-qa-2": {
    "question": "Match each prompt failure to the missing technique. Which TWO pairings are correct? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Output in the wrong shape → add an output constraint\n- **✅ B.** Drift across turns → tighten and complete the system prompt\n- C. Hallucinated structure → raise the temperature\n- D. Wrong shape → add more few-shot examples of reasoning\n\n**Correct:** A, B\n\nWrong shape signals a missing output constraint; drift signals an underspecified system prompt. A hallucinated structure needs few-shot examples (not temperature), and shape is not fixed by reasoning examples."
  },
  "ccd-qa-3": {
    "question": "Configuring Claude Code for a trusted refactor that must auto-approve edits, block destructive shell commands, and never read .env.production. Which TWO settings pieces are correct? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** allow [\"Bash(npm run:*)\"], deny [\"Bash(rm:*)\", \"Bash(git push:*)\"]\n- **✅ B.** deny [\"Read(.env.production)\"]\n- C. defaultMode \"bypassPermissions\"\n- D. allow [\"Bash(*)\", \"Edit(*)\"] with no destructive-command gate\n\n**Correct:** A, B\n\nAllowing safe commands while denying destructive ones gates shell execution, and denying Read(.env.production) enforces the path restriction at the settings layer. bypassPermissions removes the guard, and an unrestricted allow is the opposite of the requirement."
  },
  "ccd-qa-4": {
    "question": "A PreToolUse hook must block a disallowed read. Which TWO are true? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** It must use PreToolUse, because that fires before the tool executes\n- **✅ B.** Exiting with code 2 blocks the call, and text written to stderr becomes the message Claude sees\n- C. PostToolUse could also block, by inspecting the result and undoing the read\n- D. Exiting 0 with the reason on stdout is what signals the block\n\n**Correct:** A, B\n\nOnly PreToolUse can block, and the hook signals a block with exit code 2 plus a reason on stderr. PostToolUse runs after the tool, so it cannot prevent the read, and exit 0 allows the call."
  },
  "ccd-qa-5": {
    "question": "Which TWO success criteria are specific enough to build an eval against? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** A two-sentence summary that lists every action item and its owner\n- **✅ B.** A refund decision of exactly 'approve' or 'deny' with a one-line reason\n- C. A helpful, high-quality summary of the thread\n- D. A response that satisfies the user\n\n**Correct:** A, B\n\nGradeable criteria state a checkable output. 'Every action item and its owner' and a constrained 'approve/deny plus reason' can be graded; 'helpful' and 'satisfies the user' are too vague to check."
  },
  "ccd-qa-6": {
    "question": "Preparing a build for reuse and safe deployment. Which TWO practices matter most? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Pin the model version in production\n- **✅ B.** Version your prompts so a change can be attributed and rolled back\n- C. Always deploy on the newest model automatically to stay current\n- D. Keep prompts inline and unversioned to reduce overhead\n\n**Correct:** A, B\n\nPinning the model and versioning prompts make changes deliberate, attributable, and reversible. Auto-upgrading and unversioned inline prompts remove exactly the control that reuse and rollback depend on."
  },
  "ccd-qa-7": {
    "question": "Which TWO of these consume the context budget as a conversation grows? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Accumulated tool results\n- **✅ B.** Prior turns kept in history\n- C. The model's parameter count\n- D. The temperature setting\n\n**Correct:** A, B\n\nHistory and tool outputs both accumulate in the window and spend the fixed budget. Parameter count and temperature are model settings, not context the window holds."
  },
  "ccd-qa-8": {
    "question": "User-submitted text is concatenated straight into your prompt template and sometimes overrides your instructions. Which TWO help at the prompt layer? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Delimit and label the user text clearly as data\n- **✅ B.** Keep trusted instructions in the system prompt, separate from user content\n- C. Ask users nicely not to include instructions\n- D. Truncate all user input to a fixed short length\n\n**Correct:** A, B\n\nDelimiting user input as data and separating trusted instructions into the system prompt both blunt injection. A polite request is unenforceable, and blanket truncation mangles legitimate input."
  },
  "ccd-qa-9": {
    "question": "You must guarantee an agent can neither run rm nor read secrets/config.json, whatever it is asked. Which TWO settings pieces enforce this? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** deny [\"Bash(rm:*)\"]\n- **✅ B.** deny [\"Read(secrets/config.json)\"]\n- C. defaultMode \"bypassPermissions\"\n- D. allow [\"Bash(*)\"]\n\n**Correct:** A, B\n\nExplicit deny rules at the settings layer block the destructive command and the secret read regardless of the session. bypassPermissions removes guards, and an unrestricted Bash allow does the opposite."
  },
  "ccd-qa-10": {
    "question": "A hook must prevent a tool from writing outside the project directory. Which TWO are correct? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Use the PreToolUse event, since it fires before the write executes\n- **✅ B.** Exit with code 2 and put the reason on stderr to block it\n- C. Use PostToolUse and roll the write back afterwards\n- D. Exit 0 with the reason on stdout\n\n**Correct:** A, B\n\nOnly PreToolUse can block, and the hook signals a block with exit code 2 plus a reason on stderr. PostToolUse runs after the write, and exit 0 allows the call."
  },
  "ccd-qa-11": {
    "question": "Which TWO of these are gradeable success criteria you could build an eval against? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Output valid JSON with fields sentiment (positive/negative/neutral) and confidence (0-1)\n- **✅ B.** Classify the ticket into exactly one of five named categories\n- C. Produce a genuinely useful triage\n- D. Handle the ticket well\n\n**Correct:** A, B\n\nA constrained JSON schema and a one-of-five classification are checkable. 'Useful' and 'handle it well' are too vague to grade against."
  },
  "ccd-qa-12": {
    "question": "Shipping a reusable accelerator that must survive model updates. Which TWO practices matter most? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Pin the model version and upgrade deliberately after evals\n- **✅ B.** Version prompts so changes are attributable and reversible\n- C. Auto-adopt each new model on release to stay current\n- D. Keep prompts inline and unversioned to stay lightweight\n\n**Correct:** A, B\n\nPinning the model and versioning prompts make change deliberate and reversible, which is what surviving updates requires. Auto-adopting and unversioned inline prompts remove exactly that control."
  },
  "ccd-qa-13": {
    "question": "As a chat session lengthens, which TWO things grow inside the context window? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Retained prior turns\n- **✅ B.** Accumulated tool outputs\n- C. The model's weight count\n- D. The sampling seed\n\n**Correct:** A, B\n\nPrior turns and tool outputs both accumulate and spend the fixed budget. Weight count and sampling seed are not content the window stores."
  },
  "ccd-qa-14": {
    "question": "Support tickets are pasted verbatim into your prompt template and occasionally contain text that hijacks your instructions. Which TWO help at the prompt layer? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Wrap and label the ticket text clearly as data\n- **✅ B.** Keep your trusted instructions in the system prompt, apart from the ticket content\n- C. Add a note asking users not to embed instructions\n- D. Cut every ticket to a short fixed length\n\n**Correct:** A, B\n\nDelimiting the untrusted text as data and separating trusted instructions into the system prompt both reduce injection. A request is unenforceable, and truncation destroys legitimate content."
  },
  "ccd-qa-15": {
    "question": "You must guarantee an agent can neither run sudo commands nor read config/prod.key, whatever it is asked. Which TWO settings pieces enforce this? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** deny [\"Bash(sudo:*)\"]\n- **✅ B.** deny [\"Read(config/prod.key)\"]\n- C. defaultMode \"bypassPermissions\"\n- D. allow [\"Bash(*)\"]\n\n**Correct:** A, B\n\nSettings-layer deny rules block the privileged command and the secret read regardless of the session. bypassPermissions strips guards, and an unrestricted Bash allow does the opposite."
  },
  "ccd-qa-16": {
    "question": "A hook must stop the agent from deleting files outside /workspace. Which TWO are correct? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Use PreToolUse, because it fires before the delete executes\n- **✅ B.** Exit code 2 with the reason on stderr signals the block\n- C. Use PostToolUse and undo the delete after it runs\n- D. Exit 0 and print the reason to stdout\n\n**Correct:** A, B\n\nOnly PreToolUse can block, and the block is signalled by exit code 2 with the reason on stderr. PostToolUse runs after the delete, and exit 0 permits the call."
  },
  "ccd-qa-17": {
    "question": "You're packaging a reusable accelerator that must keep working across model updates. Which TWO practices matter most? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Pin the model version and upgrade deliberately after running evals\n- **✅ B.** Version the prompts so any change is attributable and reversible\n- C. Auto-adopt each new model the day it ships\n- D. Keep prompts inline and unversioned to stay lightweight\n\n**Correct:** A, B\n\nPinning the model and versioning prompts make change deliberate and reversible, which is what surviving updates needs. Auto-adopting and unversioned inline prompts remove that control."
  },
  "ccd-qa-18": {
    "question": "You are assembling a streamed response that includes a tool call. Which TWO statements are correct? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** A tool call's JSON arguments arrive incrementally across delta events and must be accumulated before parsing\n- **✅ B.** The end of the HTTP stream is not itself confirmation of a complete message; completion is signalled by the stop event\n- C. Each delta event is a complete, independently parseable JSON argument object\n- D. Tool calls are never included in streamed responses\n\n**Correct:** A, B\n\nStreaming delivers tool arguments in partial deltas that you accumulate, and completion is signalled by the stop event rather than the socket closing. Deltas are fragments, not standalone JSON, and tool calls absolutely stream."
  },
  "ccd-qa-19": {
    "question": "You submitted 80,000 requests to the Message Batches API. Which TWO describe how results work? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** You poll the batch for completion and then retrieve results within the processing window\n- **✅ B.** Individual requests can succeed or fail independently, so results must be checked per item\n- C. Results stream back to you live over a held-open connection as each item completes\n- D. If any single request errors, the whole batch is rolled back and refunded\n\n**Correct:** A, B\n\nBatches are asynchronous: you poll, then fetch results, and each item carries its own success or error. There is no held-open live stream, and one failed item does not roll back the batch."
  },
  "ccd-qa-20": {
    "question": "CLAUDE.md files exist at both the user level (~/.claude) and in the project repo. Which TWO are true? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Both are loaded, with personal preferences at user level and shared project conventions in the repo\n- **✅ B.** The project-level file is the one teammates receive via version control\n- C. Only one file can be active at a time, and the user-level file always wins\n- D. The user-level file is committed to the repo automatically\n\n**Correct:** A, B\n\nThe CLAUDE.md hierarchy layers user-level personal context with version-controlled project conventions, and it is the repo file that teammates share. They are not mutually exclusive, and nothing commits your user file for you."
  },
  "ccd-qa-21": {
    "question": "A triage assistant receives full customer records but only needs the message text and product name. Which TWO practices apply? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Send only the fields the task needs, stripping the rest before the API call\n- **✅ B.** Redact or tokenise identifiers that must pass through, so raw PII isn't in the prompt\n- C. Send the full record but instruct the model not to read the sensitive fields\n- D. Encrypt the API key more strongly\n\n**Correct:** A, B\n\nData minimisation means unneeded PII never leaves your system, and pass-through identifiers get redacted or tokenised. Telling the model to ignore fields still transmits them, and key encryption is unrelated to prompt contents."
  },
  "ccd-qa-22": {
    "question": "One API key is shared across dev, staging, and production, held in a team password note. Which TWO changes matter most? (Pick 2)",
    "answer": "**Select 2.**\n\n- **✅ A.** Separate keys per environment so a leaked dev key cannot touch production\n- **✅ B.** Move keys into a secrets manager with access control and rotation, out of shared notes\n- C. Rename the key so its environment is obvious\n- D. Base64-encode the key inside the note\n\n**Correct:** A, B\n\nPer-environment keys contain blast radius, and a secrets manager adds access control and rotation that a shared note cannot. Renaming is cosmetic and base64 is encoding, not protection."
  },
  "ccd-qa-23": {
    "question": "Your app pins claude-model-2026-06-15 in production. A new dated version is released with a documented breaking change to how it formats numbered lists. Which TWO are correct next steps?",
    "answer": "**Select 2.**\n\n- **✅ A.** Test the new version against your eval suite and downstream parser before promoting it\n- **✅ B.** Read the release notes for the specific breaking change and check whether your prompt or parser depends on the old formatting\n- C. Upgrade immediately in production, since a dated release is always safe to adopt without testing\n- D. Ignore the release notes since breaking changes only apply to floating aliases, not dated versions\n\n**Correct:** A, B\n\nA documented breaking change demands checking your specific dependency on the old behaviour and validating the new version against evals before promoting it. Dated versions are not automatically safe to adopt blind, and breaking changes affect anyone consuming that version, not just floating aliases."
  },
  "ccd-qa-24": {
    "question": "Which TWO are recognised agent design patterns for handling multi-step tasks?",
    "answer": "**Select 2.**\n\n- **✅ A.** A tool-use loop where the agent repeatedly calls tools and incorporates results until done\n- **✅ B.** Delegating a bounded subtask to a subagent that returns a compact result\n- C. Hard-coding every possible input as its own branch so no runtime decision is ever needed\n- D. Disabling all tools to force the model to reason purely from its own knowledge\n\n**Correct:** A, B\n\nThe tool-use loop and subagent delegation are established agent patterns for multi-step work. Branching every possible input by hand is the workflow approach taken to an unworkable extreme, and disabling tools removes the agentic capability rather than patterning it."
  },
  "ccd-qa-25": {
    "question": "Which TWO of these are examples of output constraints, as distinct from few-shot examples?",
    "answer": "**Select 2.**\n\n- **✅ A.** Specifying a maximum word count and a required set of JSON fields\n- **✅ B.** Requiring the response to omit any preamble and start directly with the answer\n- C. Showing three worked input-output pairs before the real task\n- D. Explaining the company's mission statement for context\n\n**Correct:** A, B\n\nA word limit and required field set, plus a no-preamble rule, are direct constraints on the shape of the output. Worked pairs are few-shot examples rather than constraints, and a mission-statement explanation is background context, not a constraint on output form."
  },
  "ccd-qa-26": {
    "question": "Which TWO scenarios genuinely justify the Batches API over synchronous calls?",
    "answer": "**Select 2.**\n\n- **✅ A.** Re-indexing a document library overnight with no user waiting on the result\n- **✅ B.** Scoring a backlog of 200,000 support tickets for a weekly dashboard\n- C. Answering a customer's question in a live chat widget\n- D. Validating a form field as the user types\n\n**Correct:** A, B\n\nBoth are large, latency-tolerant jobs with no one waiting on an immediate response, the batch sweet spot. Live chat and as-you-type validation both need an immediate synchronous response."
  },
  "ccd-qa-27": {
    "question": "A document-processing agent reads uploaded files from anonymous users before any human review. Which TWO practices reduce the risk of those files carrying manipulative embedded instructions?",
    "answer": "**Select 2.**\n\n- **✅ A.** Treat uploaded file content as untrusted data, isolated from the agent's own instructions\n- **✅ B.** Scope the agent's available actions tightly, so even a manipulated read cannot trigger a sensitive operation\n- C. Trust the content fully once the file passes a virus scan, since malware and prompt injection are the same category of risk\n- D. Increase the model's context window so it can read the whole file at once\n\n**Correct:** A, B\n\nIsolating untrusted file content from trusted instructions, plus tightly scoping available actions, are the two levers that blunt embedded manipulation. A virus scan addresses malware, not textual injection, which is a different risk entirely, and context window size has no bearing on injection resistance."
  }
};
