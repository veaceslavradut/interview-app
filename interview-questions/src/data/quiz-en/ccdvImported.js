// AUTO-GENERATED from quiz/ccdvImported.en.json (the English master the RU quiz
// was translated from). English override for the 148 imported CCD quiz slots.
export const ccdvImportedEn = {
  "ccd-quiz-1": [
    {
      "question": "Two runs of the same prompt at temperature 0 return slightly different wording. Which explanation is correct?",
      "options": [
        "Sampling can still introduce variation; temperature 0 favours the likeliest tokens but does not hard-guarantee identical output",
        "This is impossible at temperature 0, so one of the two calls must have silently used a different model version or returned a cached response from an earlier request",
        "Streaming was left on for one of the calls",
        "The two calls used different context windows"
      ]
    }
  ],
  "ccd-quiz-2": [
    {
      "question": "A multi-turn session grows until a request exceeds the window mid-generation. What happens?",
      "options": [
        "The output is truncated and the response carries a context-window-exceeded stop reason",
        "The request is silently accepted and the model drops whichever earlier turns it judges least relevant to make room for the rest",
        "The window auto-expands for that call",
        "The call returns a 200 with empty content"
      ]
    }
  ],
  "ccd-quiz-3": [
    {
      "question": "You have many trivial calls and occasional hard ones, and want to pay for deep reasoning only when it helps. Which fits?",
      "options": [
        "Adaptive thinking, with effort scaled to the task",
        "Extended thinking pinned to maximum effort on every call, so quality is never at risk on the genuinely hard ones",
        "Fast mode on every call",
        "A larger model tier for all calls"
      ]
    }
  ],
  "ccd-quiz-4": [
    {
      "question": "A large, stable system prompt is sent on every call in a high-volume app. What does prompt caching do, and what is its limit?",
      "options": [
        "It reuses the stable prefix at reduced cost, but the cache expires and must be refreshed, and only the unchanged prefix benefits",
        "It makes all later calls free regardless of what changes in the prompt",
        "It reduces output-token cost specifically",
        "It only works in batch mode"
      ]
    }
  ],
  "ccd-quiz-5": [
    {
      "question": "Prompt-only formatting keeps failing on untested inputs that break your parser. Best next step?",
      "options": [
        "Constrain output in the API: JSON schema for the response and strict tool use for arguments",
        "Expand the prompt with an exhaustive set of formatting rules and several reminders, then retry any input whose output fails to parse until it eventually conforms to the schema",
        "Lower temperature to 0 and trust the output",
        "Switch to a bigger model"
      ]
    }
  ],
  "ccd-quiz-6": [
    {
      "question": "When should a streamed turn be written into conversation history?",
      "options": [
        "Only after message_stop",
        "Once the first content_block_start event arrives, so the stored history stays current with the model in real time",
        "After the first token",
        "Whenever the socket closes for any reason"
      ]
    }
  ],
  "ccd-quiz-7": [
    {
      "question": "Two tools are both described as retrieving information and Claude often calls the wrong one. Best single fix?",
      "options": [
        "Add to each description a clear statement of when NOT to use it",
        "Give each tool a richer, strongly-typed input schema with distinctive parameter names so the model has more signal to tell them apart",
        "Delete one of the tools",
        "Increase the model tier"
      ]
    }
  ],
  "ccd-quiz-8": [
    {
      "question": "You're wiring an agent whose tool can irreversibly modify a customer system. Where does the human checkpoint belong?",
      "options": [
        "In the design, gating the irreversible action before the loop is built",
        "After the first production write, added once you have watched the agent behave on real traffic and can place the gate precisely",
        "Only in the retry handler",
        "It can be skipped if tests passed"
      ]
    }
  ],
  "ccd-quiz-9": [
    {
      "question": "Production sessions turn out short and numerous, unlike the long dev sessions, and in-context memory now fails early. Which model most likely fits?",
      "options": [
        "External storage that persists state across the many short sessions",
        "Keep in-context memory but raise max_tokens each session so history has more room to accumulate before it fails",
        "Stateless for every session",
        "Summarised in-context memory"
      ]
    }
  ],
  "ccd-quiz-10": [
    {
      "question": "Before writing multimodal ingestion, you estimate image cost. Which statement is accurate?",
      "options": [
        "Visual tokens scale with image dimensions and the per-image ceiling varies by model tier, so a high-resolution original can cost many times a thumbnail",
        "All images cost a flat token amount regardless of size or model",
        "Images are billed only on output tokens",
        "Describing images in text is always cheaper than sending them"
      ]
    }
  ],
  "ccd-quiz-11": [
    {
      "question": "You connect three MCP servers to reuse maintained tools. What must you manage?",
      "options": [
        "Each server's tool definitions load into context whether or not they are used, adding cost",
        "Once connected, the servers take over tool routing and your hand-written custom tools can no longer be registered in the same application",
        "All three must use stdio",
        "The context window permanently grows"
      ]
    }
  ],
  "ccd-quiz-12": [
    {
      "question": "Across a multi-turn exchange using extended thinking, what must happen to thinking blocks?",
      "options": [
        "They must be returned unchanged",
        "They should be summarised and re-sent so history stays compact while preserving the reasoning for later turns",
        "They should be deleted before the next call",
        "They belong in the system prompt"
      ]
    }
  ],
  "ccd-quiz-13": [
    {
      "question": "Your settings auto-approve edits. Mid-refactor the agent proposes editing a deployment-config file that several production services read. Where should a human gate sit for this one action?",
      "options": [
        "A human reviews and approves this specific change before the write executes, because a wrong value is hard to undo and reaches systems beyond the file",
        "Nowhere; the settings already auto-approve edits",
        "Add bypassPermissions so the agent never pauses",
        "Review it after the write, in the next pull request"
      ]
    }
  ],
  "ccd-quiz-14": [
    {
      "question": "A developer wants a review-checklist Skill to load when they ask for a review in the Claude Code terminal. What must be configured?",
      "options": [
        "Place SKILL.md in .claude/skills with a description that matches review requests",
        "Define the agent as an API resource that lists the skill and set the managed-agents beta header on the calls, writing the skill so its steps do not depend on any local files",
        "Send the code-execution and skills beta headers on every request",
        "Set settingSources explicitly for the Agent SDK"
      ]
    }
  ],
  "ccd-quiz-15": [
    {
      "question": "A scheduled headless job uses the Agent SDK and expects the Skill to load from the repo. What must be configured?",
      "options": [
        "Enable filesystem sources by setting settingSources explicitly so the agent loads skills from the project, rather than relying on a default, and confirm the current default against the Agent SDK reference",
        "Place SKILL.md in .claude/skills and rely on the terminal default",
        "Set the managed-agents beta header",
        "Send the code-execution and skills beta headers"
      ]
    }
  ],
  "ccd-quiz-16": [
    {
      "question": "A SKILL.md runs on the author's machine but breaks when a teammate clones the repo, because step 1 calls /Users/alexmorgan/projects/deploy-utils/validate.sh. Correct fix?",
      "options": [
        "Reference the script from the project root via CLAUDE_PROJECT_DIR so it resolves wherever the repo is cloned",
        "Replace it with another absolute path that points to a shared network drive everyone can reach",
        "Use a home-directory shortcut like ~/projects/deploy-utils/validate.sh",
        "Remove the step so the skill no longer calls an external script"
      ]
    }
  ],
  "ccd-quiz-17": [
    {
      "question": "A security-scanning MCP server must be deployed to every developer's Claude Code installation across the org. Which transport and scope fit?",
      "options": [
        "HTTP + Enterprise (managed settings)",
        "stdio + Local, installed once on each machine and shared informally so each developer keeps control of their own copy",
        "HTTP + Project (.mcp.json)",
        "stdio or HTTP + Local"
      ]
    }
  ],
  "ccd-quiz-18": [
    {
      "question": "In the failure-handling section of a design doc, what is the core task?",
      "options": [
        "Enumerate the errors production will throw, mark each retriable or terminal, and define the user-facing outcome when recovery fails",
        "Wrap every external call in an automatic retry loop that keeps trying until it succeeds, since most production failures are transient and clear on their own within a few attempts",
        "Raise the request timeout",
        "Switch to a larger model for resilience"
      ]
    }
  ],
  "ccd-quiz-19": [
    {
      "question": "When should hard cost and latency budgets be set?",
      "options": [
        "Before the architecture is decided",
        "After the system is built and profiled under real traffic, when you finally have accurate numbers to base the ceilings on",
        "Only once costs exceed forecast",
        "At the first incident review"
      ]
    }
  ],
  "ccd-quiz-20": [
    {
      "question": "Naming the trust boundary on paper turns least privilege into something you can…?",
      "options": [
        "Enforce with a hook, rather than a setting you remember to add later",
        "Guarantee automatically, because documenting the boundary is itself what applies the restriction at runtime across every tool the agent can reach",
        "Skip, if the model is well-behaved",
        "Defer entirely to the security team"
      ]
    }
  ],
  "ccd-quiz-21": [
    {
      "question": "You must grade thousands of open-ended summaries where exact-match won't work. Sound approach?",
      "options": [
        "An LLM-as-judge scoring against explicit criteria, validated against a human-labelled sample",
        "Trust each summary's own stated confidence and grade on that, since the model has the most context on whether it succeeded",
        "Exact-string match to a reference",
        "Eyeball a handful and extrapolate"
      ]
    }
  ],
  "ccd-quiz-22": [
    {
      "question": "An agent returns a wrong answer. What most directly isolates whether the tool, the model, or the orchestration failed?",
      "options": [
        "A trace of the run",
        "Re-reading the final answer closely to infer from its wording where the reasoning must have gone wrong",
        "Rerunning it a few times",
        "Swapping in a bigger model"
      ]
    }
  ],
  "ccd-quiz-23": [
    {
      "question": "An MCP connection trace shows 401 on both the first attempt and the retry, with the credential read as a plaintext value from a file at a known path. Correct fix?",
      "options": [
        "Rotate the rejected key so the connection can authenticate, and move the credential out of the file into a runtime environment variable so it is never stored in plaintext again",
        "Rotate the key and write the new value back into the same credentials file, since a fresh key is what the service will accept",
        "Switch this service from API-key auth to OAuth",
        "Add a retry with backoff so a third attempt can succeed"
      ]
    }
  ],
  "ccd-quiz-24": [
    {
      "question": "A regulated client requires that data never leave their existing cloud. How should this drive platform choice?",
      "options": [
        "Run on the provider (Bedrock or Vertex) that keeps data inside the client's cloud and compliance boundary",
        "Default to the first-party API, since it is always cheapest and gets new models first, then layer network controls on top to satisfy the auditors",
        "Only local self-hosting can ever be compliant",
        "Pick whichever platform has the newest model"
      ]
    }
  ],
  "ccd-quiz-25": [
    {
      "question": "A regression test flakes because it compares the model's output to a fixed expected string. Best fix?",
      "options": [
        "Assert on the structure or key facts of the output rather than an exact string, since generation is non-deterministic",
        "Pin temperature to 0 and assume output is now byte-identical every run, keeping the exact-string assertion in place",
        "Retry the test until it happens to pass",
        "Move the test to the largest model tier"
      ]
    }
  ],
  "ccd-quiz-26": [
    {
      "question": "A workload is simple and latency-sensitive and does not need step-by-step reasoning. Which setting fits?",
      "options": [
        "Skip extended thinking, enabling it only where a reasoning pass changes the answer",
        "Turn on maximum-effort extended thinking so even the simple answers are extra reliable and you never regret it later",
        "Always route to the largest model",
        "Pin adaptive thinking to its highest effort permanently"
      ]
    }
  ],
  "ccd-quiz-27": [
    {
      "question": "In a long agent session the same instruction prefix is re-sent every turn. What reduces the repeated input cost?",
      "options": [
        "Cache checkpoints on the stable prefix",
        "Lowering max_tokens each turn so responses are shorter, which brings the per-turn input cost down as the session goes on",
        "Switching the session to batch mode",
        "Adding more few-shot examples"
      ]
    }
  ],
  "ccd-quiz-28": [
    {
      "question": "Over a long conversation the model's output format slowly drifts from what you asked. Which technique addresses this failure type?",
      "options": [
        "Complete and tighten the system prompt so the format rule is stated durably",
        "Add three few-shot examples of the desired reasoning steps to every user message so the model re-anchors on structure each turn",
        "Raise the temperature",
        "Switch models partway through"
      ]
    }
  ],
  "ccd-quiz-29": [
    {
      "question": "Where do durable role and safety rules hold most reliably against later user turns?",
      "options": [
        "The system prompt",
        "Repeated verbatim inside every assistant response, so the model is continually reminded of them throughout the conversation",
        "The final user message",
        "A tool result"
      ]
    }
  ],
  "ccd-quiz-30": [
    {
      "question": "Your parser occasionally breaks on output that is valid JSON but includes a prose preamble. Most robust production handling?",
      "options": [
        "Constrain to JSON-only and validate against a schema, repairing or rejecting malformed output before it flows downstream",
        "Set temperature to 0, which removes formatting variation entirely so a preamble can never appear again",
        "Trust the output and parse it directly",
        "Increase max_tokens"
      ]
    }
  ],
  "ccd-quiz-31": [
    {
      "question": "An agent calls a search tool far more often than a create tool, even when creation is intended. Their descriptions overlap. Best first fix?",
      "options": [
        "Rewrite the descriptions so each states its distinct purpose and when not to use it",
        "Reorder the tools so the create tool is listed first, since the model tends to prefer whichever tool appears earlier in the list",
        "Remove the search tool",
        "Raise the temperature"
      ]
    }
  ],
  "ccd-quiz-32": [
    {
      "question": "You can write out the exact fixed sequence of steps a task always follows. Which architecture is right, and why?",
      "options": [
        "A workflow, because the path is known and coding it avoids the cost and nondeterminism of an agent",
        "An agent, because agents are more capable and future-proof and you can always constrain it later if the extra latency and cost become a problem in production",
        "A single mega-prompt containing all steps",
        "Independent, unordered calls"
      ]
    }
  ],
  "ccd-quiz-33": [
    {
      "question": "An agent that can issue refunds is going to production, and refunds are irreversible. Correct design choice?",
      "options": [
        "A human approval gate before the refund executes, wired in at design time",
        "Detailed logging and alerting, so if a wrong refund goes out the on-call engineer is notified within minutes and can begin the reversal",
        "A low temperature to reduce risky behaviour",
        "A polite system-prompt reminder to be careful"
      ]
    }
  ],
  "ccd-quiz-34": [
    {
      "question": "A research agent must read 40 documents and produce one cited synthesis, but everything in one context degrades quality. Best approach?",
      "options": [
        "Have subagents extract from each document in isolation, then synthesise from the compact extracts",
        "Load all 40 at once and raise max_tokens as high as the model allows so nothing has to be left out of the single context",
        "Use only the documents that fit comfortably",
        "Lower the temperature"
      ]
    }
  ],
  "ccd-quiz-35": [
    {
      "question": "A one-off image is analysed once; a logo is reused across thousands of requests. How should each be supplied?",
      "options": [
        "Inline the one-off as base64, and put the reused logo behind the Files API so it isn't re-uploaded each call",
        "Inline both as base64 every time, since inlining is simplest and the extra bytes on the reused asset are negligible at scale",
        "Describe both in text to avoid image tokens",
        "Batch both regardless of latency needs"
      ]
    }
  ],
  "ccd-quiz-36": [
    {
      "question": "Across turns you use extended thinking. What is the requirement on the returned thinking blocks?",
      "options": [
        "Send them back unchanged on the next turn",
        "Compress them into a short summary so the growing history doesn't blow the context budget, while still keeping the reasoning available",
        "Delete them before the next call",
        "Relocate them into the system prompt"
      ]
    }
  ],
  "ccd-quiz-37": [
    {
      "question": "You point Claude Code at an unfamiliar third-party repo you don't fully trust. What permission posture fits the first pass?",
      "options": [
        "Read-only plan mode to explore and propose before any edits",
        "bypassPermissions, so exploration is fast and uninterrupted, on the reasoning that you'll review everything in the final diff before merging anyway",
        "Approve every file read manually",
        "Disable all tools"
      ]
    }
  ],
  "ccd-quiz-38": [
    {
      "question": "A service calls the Messages API and wants a Skill to run as part of the request. What must be configured?",
      "options": [
        "Send the code-execution and skills beta headers, and write the skill so its steps don't depend on local files or tools",
        "Place SKILL.md in .claude/skills and let the terminal pick it up",
        "Set settingSources explicitly for the Agent SDK",
        "Set the managed-agents beta header and list the skill on an agent resource"
      ]
    }
  ],
  "ccd-quiz-39": [
    {
      "question": "A product team wants one Skill to run inside a long-running agent that Anthropic hosts, reachable by an agent ID across sessions. What's required?",
      "options": [
        "Define the agent as an API resource that lists the skill and set the managed-agents beta header, writing the skill to avoid local-file dependencies since it runs in Anthropic's sandbox",
        "Place SKILL.md in .claude/skills",
        "Set settingSources explicitly",
        "Send only the code-execution header"
      ]
    }
  ],
  "ccd-quiz-40": [
    {
      "question": "A plugin's SKILL.md hardcodes a tool at /Users/dev/tools/lint.sh and fails for teammates. Best fix?",
      "options": [
        "Reference it from the project root via CLAUDE_PROJECT_DIR",
        "Point every teammate's machine at a shared network mount at that same absolute path and document the mount in the README so setups stay consistent",
        "Use a home-directory shortcut like ~/tools/lint.sh",
        "Delete the step so the skill no longer calls the script"
      ]
    }
  ],
  "ccd-quiz-41": [
    {
      "question": "A local SQLite inspection tool you use only on your own machine. Which transport and scope fit?",
      "options": [
        "stdio + Local",
        "HTTP + Enterprise via managed settings, so it is centrally governed and consistently available to you across every environment you might ever work in",
        "HTTP + Project (.mcp.json)",
        "HTTP + Local"
      ]
    }
  ],
  "ccd-quiz-42": [
    {
      "question": "Writing the failure-handling section of a design doc, what must you decide for each error?",
      "options": [
        "Whether it is retriable or terminal, and what the user gets when it can't be recovered",
        "The exact library and language for the retry, so the section is concrete enough for an engineer to build from without any further design work",
        "Whether it is worth logging at all",
        "Which larger model tier to fail over to"
      ]
    }
  ],
  "ccd-quiz-43": [
    {
      "question": "In the cost-and-latency section of a design doc, what is the 'reliability floor'?",
      "options": [
        "The minimum reliability the design must hold and cannot trade away for cost or speed",
        "The lowest cost reachable if you are willing to accept as many dropped requests and timeouts as that price requires",
        "The cheapest model available",
        "The p99 latency target"
      ]
    }
  ],
  "ccd-quiz-44": [
    {
      "question": "In the trust-boundary section, which content should be treated as untrusted?",
      "options": [
        "Anything the agent reads that someone else can write, such as fetched web pages and tool output",
        "Only text arriving over an unencrypted connection, since transport security is what determines whether input can be trusted",
        "The developer's own system prompt",
        "Compiled application constants"
      ]
    }
  ],
  "ccd-quiz-45": [
    {
      "question": "A page fetched by a summariser contains hidden text telling the agent to email a file to an external address. Most effective mitigation?",
      "options": [
        "Least privilege: the summariser has no email capability, so injected instructions can't reach a send action, and untrusted content is kept separate from instructions",
        "Add a system-prompt line telling the model to ignore instructions embedded in fetched pages",
        "Scan fetched pages for the word 'ignore'",
        "Switch to a larger model"
      ]
    }
  ],
  "ccd-quiz-46": [
    {
      "question": "An agent's answer is wrong. The trace shows the tool returned correct data. Where is the failure?",
      "options": [
        "In the model's use of the data, not the tool",
        "In the integration layer, because whenever a final answer is wrong the fault lies in how the tool output was parsed and handed back to the model",
        "In the network",
        "In the API key configuration"
      ]
    }
  ],
  "ccd-quiz-47": [
    {
      "question": "A committed credentials file exposed an API key. Two things are true: the key is being rejected, and it's stored in plaintext. Correct fix?",
      "options": [
        "Rotate the key and move it out of the file into an environment variable referenced at runtime",
        "Rotate the key and re-commit the new value to the same file so the app keeps working with no code changes, then restrict who can read the repo",
        "Switch the service to OAuth",
        "Add a retry with backoff so a later attempt succeeds"
      ]
    }
  ],
  "ccd-quiz-48": [
    {
      "question": "Your team already runs everything on AWS and needs Claude in the same account for governance. How should that shape platform choice?",
      "options": [
        "Use Amazon Bedrock so Claude runs within the existing AWS governance and data boundary",
        "Use the first-party API and rebuild your governance tooling around it, since staying on one vendor's native platform is worth the migration regardless of where your data lives today",
        "Self-host only, as that is the sole compliant option",
        "Pick whichever platform shipped the newest model"
      ]
    }
  ],
  "ccd-quiz-49": [
    {
      "question": "A CI check re-runs the same summariser twice and asserts the two outputs are byte-identical. It fails at random. Best fix?",
      "options": [
        "Assert on structure and key facts instead of an exact match, since generation is non-deterministic",
        "Set temperature to 0 and keep the byte-identical assertion, treating the output as fully reproducible now",
        "Loop the check until it passes",
        "Run the check on the biggest model tier"
      ]
    }
  ],
  "ccd-quiz-50": [
    {
      "question": "A high-volume endpoint answers trivial FAQ-style questions and must feel snappy. Which reasoning setting fits?",
      "options": [
        "Leave extended thinking off, enabling it only where a reasoning pass would change the answer",
        "Run maximum-effort extended thinking everywhere so even trivial answers are extra safe and you never regret it",
        "Send every call to the largest model",
        "Keep adaptive thinking pinned to its highest effort at all times"
      ]
    }
  ],
  "ccd-quiz-51": [
    {
      "question": "A coding agent resends the same large, unchanging repo-guidelines block on every turn. What cuts the repeated input cost?",
      "options": [
        "Cache checkpoints on the stable block",
        "Trimming max_tokens each turn so replies get shorter and the per-turn input cost drops over the session",
        "Moving the agent to batch mode",
        "Adding a few more examples to the block"
      ]
    }
  ],
  "ccd-quiz-52": [
    {
      "question": "Ten turns into a conversation, the assistant starts ignoring the JSON format you specified at the start. Which technique fixes this failure type?",
      "options": [
        "State the format rule durably in the system prompt and tighten what was underspecified",
        "Attach three few-shot reasoning examples to every user turn so the model keeps re-anchoring on the format",
        "Bump the temperature up",
        "Swap to a different model mid-conversation"
      ]
    }
  ],
  "ccd-quiz-53": [
    {
      "question": "You keep restating the tone and safety rules inside each user message, and later turns still override them. Where should those rules live?",
      "options": [
        "In the system prompt",
        "Restated in full inside every assistant reply so the model is reminded of them continuously through the chat",
        "In the last user message before output",
        "In a tool result"
      ]
    }
  ],
  "ccd-quiz-54": [
    {
      "question": "You feed Claude's output into a typed API client that rejects anything but strict JSON, yet the model sometimes prepends a sentence. Most robust handling?",
      "options": [
        "Require JSON-only, validate against a schema, and repair or reject malformed output before the client sees it",
        "Drop temperature to 0, which fully removes formatting variation so no sentence can ever slip in again",
        "Feed the raw output to the client and let it parse",
        "Raise max_tokens so the sentence has room"
      ]
    }
  ],
  "ccd-quiz-55": [
    {
      "question": "Claude keeps invoking lookup_user when a task actually needs search_orders, and the two descriptions read almost the same. Best first fix?",
      "options": [
        "Rewrite each description to state its distinct purpose and when not to use it",
        "List search_orders before lookup_user, since the model tends to favour whichever tool comes first",
        "Delete lookup_user",
        "Turn the temperature up"
      ]
    }
  ],
  "ccd-quiz-56": [
    {
      "question": "A nightly ETL always runs the same five steps in the same fixed order. Which architecture is right, and why?",
      "options": [
        "A workflow, since the path is fully known and coding it avoids an agent's cost and nondeterminism",
        "An agent, since agents are more capable and future-proof and you can rein it in later if the added latency and cost hurt in production",
        "One large prompt holding all five steps",
        "Five independent calls with no ordering"
      ]
    }
  ],
  "ccd-quiz-57": [
    {
      "question": "An agent can permanently delete customer records, and deletion cannot be undone. Correct design choice?",
      "options": [
        "A human approval gate before the delete runs, built in at design time",
        "Thorough audit logging and alerts, so a wrong delete pages the on-call engineer within minutes to start recovery",
        "A low temperature to keep it cautious",
        "A firm system-prompt instruction to double-check before deleting"
      ]
    }
  ],
  "ccd-quiz-58": [
    {
      "question": "You must turn 60 PDFs into one brief that cites exact figures, but putting them all in one context ruins quality. Best approach?",
      "options": [
        "Use subagents to extract from each PDF in isolation, then synthesise from the compact extracts",
        "Feed all 60 in at once and push max_tokens as high as the model permits so nothing is left out",
        "Include only the PDFs that fit comfortably",
        "Reduce the temperature"
      ]
    }
  ],
  "ccd-quiz-59": [
    {
      "question": "A product photo is analysed once; a brand watermark image rides on every single request. How should each be supplied?",
      "options": [
        "Inline the one-off photo as base64, and serve the repeated watermark through the Files API so it isn't re-uploaded each call",
        "Inline both as base64 on every call, since inlining is simplest and the repeated bytes are negligible at scale",
        "Convert both to text descriptions",
        "Send both through the Batches API regardless of latency"
      ]
    }
  ],
  "ccd-quiz-60": [
    {
      "question": "You use extended thinking across several turns. What is required of the thinking blocks?",
      "options": [
        "They must be returned unchanged on the next turn",
        "They should be condensed into a summary so a growing history won't overflow the budget, while the reasoning stays available",
        "They should be stripped out before the next call",
        "They should be moved into the system prompt"
      ]
    }
  ],
  "ccd-quiz-61": [
    {
      "question": "You open an inherited legacy repo you didn't write and don't fully trust. What permission posture fits the first pass?",
      "options": [
        "Read-only plan mode, to explore and propose before touching anything",
        "bypassPermissions, so the exploration runs uninterrupted, on the logic that you'll review the whole diff before merging anyway",
        "Manual approval on every file read",
        "All tools disabled"
      ]
    }
  ],
  "ccd-quiz-62": [
    {
      "question": "A backend service calls the Messages API and wants a Skill to run as part of that request. What must be configured?",
      "options": [
        "Send the code-execution and skills beta headers, and author the skill so its steps need no local files or tools",
        "Drop SKILL.md into .claude/skills and rely on the terminal to find it",
        "Set settingSources explicitly, as the Agent SDK requires",
        "Set the managed-agents beta header and list the skill on an agent resource"
      ]
    }
  ],
  "ccd-quiz-63": [
    {
      "question": "A team wants one Skill to run inside a long-running agent that Anthropic hosts, addressed by an agent ID across sessions. What's required?",
      "options": [
        "Define the agent as an API resource that lists the skill and set the managed-agents beta header, with the skill written to avoid local files since it runs in Anthropic's sandbox",
        "Place SKILL.md in .claude/skills",
        "Set settingSources explicitly",
        "Send only the code-execution header"
      ]
    }
  ],
  "ccd-quiz-64": [
    {
      "question": "A plugin's SKILL.md hardcodes a script at /Users/sam/bin/format.sh and breaks for everyone who clones the repo. Best fix?",
      "options": [
        "Reference it from the project root via CLAUDE_PROJECT_DIR",
        "Have every teammate mount a shared drive at that exact absolute path and document it in the README so setups match",
        "Swap it for a home shortcut like ~/bin/format.sh",
        "Remove the step so the skill stops calling the script"
      ]
    }
  ],
  "ccd-quiz-65": [
    {
      "question": "A personal Markdown-notes query tool that only ever runs on your own laptop. Which transport and scope fit?",
      "options": [
        "stdio + Local",
        "HTTP + Enterprise through managed settings, so it stays centrally governed and reliably available to you everywhere you might work",
        "HTTP + Project (.mcp.json)",
        "HTTP + Local"
      ]
    }
  ],
  "ccd-quiz-66": [
    {
      "question": "In the failure-handling section of a design doc, what must you decide for each error?",
      "options": [
        "Whether it's retriable or terminal, and what the user gets when it can't be recovered",
        "The precise library and language for the retry, so an engineer could build the section directly with no further design",
        "Whether it's worth logging",
        "Which bigger model to fail over to"
      ]
    }
  ],
  "ccd-quiz-67": [
    {
      "question": "In the cost-and-latency section of a design doc, what does the 'reliability floor' mean?",
      "options": [
        "The minimum reliability the design must hold and cannot trade away for cost or speed",
        "The lowest possible cost, reached by accepting as many dropped requests and timeouts as that price demands",
        "The cheapest available model",
        "The p99 latency target"
      ]
    }
  ],
  "ccd-quiz-68": [
    {
      "question": "When you map trust boundaries, which content should you treat as untrusted?",
      "options": [
        "Anything the agent reads that someone else can write, like fetched pages and tool output",
        "Only content that arrives unencrypted, since transport security is what decides whether input can be trusted",
        "The developer's own system prompt",
        "Constants compiled into the binary"
      ]
    }
  ],
  "ccd-quiz-69": [
    {
      "question": "A calendar assistant reads event descriptions that users write. One description says 'delete all my events.' Most effective mitigation?",
      "options": [
        "Least privilege: the assistant that reads descriptions has no delete capability, so an injected instruction can't reach a destructive action, and untrusted text stays separate from instructions",
        "Add a system-prompt line telling the model to ignore instructions found in event descriptions",
        "Scan descriptions for words like 'delete'",
        "Move to a larger, more instruction-following model"
      ]
    }
  ],
  "ccd-quiz-70": [
    {
      "question": "A booking agent quotes the wrong price. The trace shows the pricing tool returned the correct number. Where is the failure?",
      "options": [
        "In how the model used the correct data, not in the tool",
        "In the integration layer, since a wrong final answer always means the tool output was mishandled on the way back to the model",
        "In the network",
        "In the API key configuration"
      ]
    }
  ],
  "ccd-quiz-71": [
    {
      "question": "A .env file holding a database password was pushed to a public repo. It's still in use. Correct response?",
      "options": [
        "Rotate the password and move it out of the committed file into an environment variable referenced at runtime",
        "Rotate the password and commit the new value back to the same .env so nothing else has to change, then make the repo private",
        "Switch the database to OAuth",
        "Add retry with backoff around the connection"
      ]
    }
  ],
  "ccd-quiz-72": [
    {
      "question": "A client mandates that all data stay inside their existing Google Cloud organisation. How should that shape platform choice?",
      "options": [
        "Run Claude through Google Vertex AI so it stays within the client's cloud and governance boundary",
        "Use the first-party API and recreate the client's governance controls around it, since staying on the native platform is worth the migration wherever the data currently sits",
        "Insist on self-hosting as the only compliant path",
        "Choose whichever platform released the newest model"
      ]
    }
  ],
  "ccd-quiz-73": [
    {
      "question": "A production assistant's behaviour changed overnight with no deploy. The config references the model by a floating alias rather than a dated version string. What happened, and what is the fix?",
      "options": [
        "The alias moved to a newer model release; pin a dated version and promote upgrades deliberately after evals",
        "The API silently retrained the model on your traffic; opt out of training in the console",
        "A cache served stale completions; clear the prompt cache",
        "Temperature drifted upward over time; reset it to the configured value"
      ]
    }
  ],
  "ccd-quiz-74": [
    {
      "question": "Finance asks for per-feature Claude spend, but you currently have no numbers at all. What is the first practical step?",
      "options": [
        "Read the usage field returned on each API response and record input/output tokens per feature",
        "Estimate from character counts, since tokens are roughly four characters each and the approximation is close enough for accounting",
        "Divide the monthly invoice evenly across features",
        "Enable extended thinking to get more detailed billing"
      ]
    }
  ],
  "ccd-quiz-75": [
    {
      "question": "You enabled prompt caching but the hit rate is near zero. The prompt is assembled as: [today's date] + [user profile] + [20k-token policy manual] + [question]. Why?",
      "options": [
        "The dynamic date and profile sit before the manual, so the prefix is never identical between calls; move stable content first and dynamic content after it",
        "Caching needs the Batches API and cannot work on synchronous calls",
        "20k tokens exceeds the maximum cacheable prefix size",
        "Caching only applies to output tokens, so input assembly is irrelevant"
      ]
    }
  ],
  "ccd-quiz-76": [
    {
      "question": "One endpoint serves both trivial lookups and occasional gnarly multi-constraint planning. You want one configuration that spends reasoning only where warranted. Which option?",
      "options": [
        "Adaptive thinking, letting effort scale with the task",
        "Extended thinking locked to the maximum effort level, so the hard cases are always covered and the easy ones simply finish a little slower",
        "Fast mode on all calls",
        "Two separate deployments with a human routing between them"
      ]
    }
  ],
  "ccd-quiz-77": [
    {
      "question": "Under burst load some calls return 429 rate-limit errors and some return 529 overloaded errors. Correct client behaviour?",
      "options": [
        "Retry with exponential backoff and jitter, respecting any retry-after guidance, and shed or queue non-urgent work",
        "Retry 429s in a tight loop since the limit resets quickly, and treat 529s as permanent failures to surface to users at once",
        "Immediately fail over every call to a different model tier",
        "Raise max_tokens so each call does more and you need fewer of them"
      ]
    }
  ],
  "ccd-quiz-78": [
    {
      "question": "An inspector app sends four photos of the same site and asks Claude to compare them. How is this structured?",
      "options": [
        "All four as image blocks in one message alongside the text instruction, so the model sees them together",
        "Four separate conversations, one per image, then a fifth call to merge the four answers, since a message can hold at most one image",
        "As URLs pasted into the prompt text",
        "Only as a PDF, since multiple raw images are unsupported"
      ]
    }
  ],
  "ccd-quiz-79": [
    {
      "question": "A support tool reuses one long-running Claude conversation for all customers to 'preserve context.' What is wrong with this design?",
      "options": [
        "One customer's details leak into another's answers; each user or case needs its own conversation with only its own context",
        "Nothing, provided the context window is large enough to hold all the customers' histories at once",
        "It is only a problem for latency, since a long conversation responds slower",
        "It breaks prompt caching"
      ]
    }
  ],
  "ccd-quiz-80": [
    {
      "question": "A RAG assistant answers confidently but users can't tell which retrieved document supports which claim. Best improvement?",
      "options": [
        "Instruct the model to ground each claim in the supplied passages and cite which passage supports it, and validate that cited passages actually exist",
        "Raise the retrieval count from 5 to 50 passages so more supporting material is always present somewhere in the context",
        "Lower the temperature so answers sound less confident",
        "Move the passages into the system prompt"
      ]
    }
  ],
  "ccd-quiz-81": [
    {
      "question": "Your Python service uses the Anthropic SDK. A teammate says using the SDK means you're no longer calling the REST API. What is accurate?",
      "options": [
        "The SDK wraps the same REST API, adding typed helpers, retries, and auth handling; the underlying HTTP calls are identical",
        "The SDK speaks a proprietary binary protocol that bypasses HTTP entirely, which is why it is faster than raw REST calls",
        "The SDK runs the model locally",
        "The SDK is required; raw REST calls are not supported"
      ]
    }
  ],
  "ccd-quiz-82": [
    {
      "question": "Free-text user input flows into a prompt that also contains your instructions. Beyond delimiting, what is the input-sanitization step?",
      "options": [
        "Strip or neutralise control-like content in the user text, such as markup that mimics your delimiters or role labels, before it enters the prompt",
        "Spell-check and grammar-correct the user text so the model reads it more accurately and is less likely to misinterpret the request",
        "Convert the text to uppercase so instructions stand out",
        "Hash the user text and include only the hash"
      ]
    }
  ],
  "ccd-quiz-83": [
    {
      "question": "Your RAG pipeline embeds entire 30-page documents as single chunks. Retrieval 'works' but answers are vague and the context fills instantly. What is the fix?",
      "options": [
        "Chunk documents into smaller, semantically coherent passages so retrieval returns focused, relevant pieces instead of whole documents",
        "Keep whole-document chunks but raise the retrieval count so the model has even more full documents to draw from on each question",
        "Switch the embedding model to a larger one",
        "Ask the model to ignore irrelevant parts"
      ]
    }
  ],
  "ccd-quiz-84": [
    {
      "question": "A day-long agent session must continue, but history has grown near the window limit and old tool outputs are mostly stale. Which lever fits?",
      "options": [
        "Compact the history: summarise or prune stale turns and tool outputs while preserving decisions and open state",
        "Start deleting the system prompt and tool definitions first, since they are the largest single blocks in the window",
        "Raise max_tokens",
        "Increase the temperature to make replies shorter"
      ]
    }
  ],
  "ccd-quiz-85": [
    {
      "question": "A hard-coded five-step workflow handles invoices, but a new supplier's invoices arrive in unpredictable formats and the workflow breaks on them. What does this signal architecturally?",
      "options": [
        "Inputs now fall outside the codeable path, so the variable part warrants an agent that can decide steps at runtime",
        "The workflow needs more steps: enumerate every supplier format as its own branch and add a branch each time a new one appears",
        "The model tier is too small",
        "The workflow should be replaced by a single large prompt"
      ]
    }
  ],
  "ccd-quiz-86": [
    {
      "question": "In a manager/supervisor hierarchy, what is the manager's job?",
      "options": [
        "Decompose the goal, delegate subtasks to specialised subagents, and integrate their results",
        "Execute every subtask itself while the subagents observe and provide feedback on its work at each step",
        "Enforce the API rate limits across the team of agents",
        "Cache the subagents' prompts"
      ]
    }
  ],
  "ccd-quiz-87": [
    {
      "question": "Your team is hand-rolling state passing, retries, and branching between eight agent steps, and it's becoming spaghetti. What are frameworks like LangGraph, Strands, or PydanticAI for?",
      "options": [
        "They provide the orchestration layer: graph or typed control flow, explicit state, and retries, so you stop hand-rolling the plumbing",
        "They fine-tune the model so it internalises the eight steps and no orchestration code is needed at all afterwards",
        "They replace the need for tool schemas",
        "They are vector databases for retrieval"
      ]
    }
  ],
  "ccd-quiz-88": [
    {
      "question": "During a Claude Code session, a side-quest (auditing a dependency tree) threatens to flood the main conversation with output. What is the idiomatic move?",
      "options": [
        "Hand the audit to a subagent, which works in its own context and returns just the findings to the main thread",
        "Run the audit in the main thread but ask for terse output, keeping everything in one place so nothing is lost between contexts",
        "Abort the audit and do it manually later",
        "Open a second terminal and paste results across"
      ]
    }
  ],
  "ccd-quiz-89": [
    {
      "question": "One tool queries your internal database from the backend; another reads the highlighted text in the user's browser tab. What distinguishes them?",
      "options": [
        "The database tool is server-side, executed by your backend; the highlight reader must be client-side, executed where the user's state lives",
        "Both must be server-side, since tools always execute on the server that hosts the agent and the browser state is fetched over an API",
        "Both are built-in tools",
        "The difference is only their schema format"
      ]
    }
  ],
  "ccd-quiz-90": [
    {
      "question": "In an agent harness, a wire-transfer tool must never run on the model's say-so alone. Which tool-usage pattern applies?",
      "options": [
        "An approval pattern: the harness intercepts the call and requires explicit confirmation before dispatching it",
        "Prompt-level guidance: a firm system-prompt paragraph explaining the gravity of transfers so the model self-restricts reliably",
        "Naming the tool something less inviting",
        "Lowering the temperature on calls that mention money"
      ]
    }
  ],
  "ccd-quiz-91": [
    {
      "question": "An MCP server should offer users a named, parameterised 'weekly-report' template they can invoke on demand. Which MCP primitive is this?",
      "options": [
        "A prompt",
        "A tool, since anything the user triggers by name is by definition an action the server performs on their behalf",
        "A resource",
        "A transport"
      ]
    }
  ],
  "ccd-quiz-92": [
    {
      "question": "You wrote a formatting Skill but Claude rarely loads it, even on obviously relevant tasks. First thing to check?",
      "options": [
        "The skill's description, since Claude loads a skill by matching the description against the task",
        "The skill's file size, since larger SKILL.md files rank higher in the loader and small ones are skipped",
        "Whether the skill is written in YAML rather than markdown",
        "The model's temperature"
      ]
    }
  ],
  "ccd-quiz-93": [
    {
      "question": "You need current exchange rates inside Claude answers. The capability already exists as a maintained internal MCP server other teams use. Build a custom tool anyway?",
      "options": [
        "No; connect the maintained server and spend your effort elsewhere, accepting its tool definitions in your context",
        "Yes; a hand-written custom tool is always preferable to a shared server because you control the schema end to end and avoid a network dependency",
        "No; paste today's rates into the system prompt each morning",
        "Yes, but only as a Skill"
      ]
    }
  ],
  "ccd-quiz-94": [
    {
      "question": "A CI pipeline must run Claude Code on every pull request with no human attached. Which invocation fits?",
      "options": [
        "Headless print mode with the prompt passed non-interactively",
        "Interactive mode with an expect-script that answers the confirmation prompts the way a human operator would",
        "The desktop app on a virtual display",
        "Streaming mode in an attached terminal session"
      ]
    }
  ],
  "ccd-quiz-95": [
    {
      "question": "One incident: a user typed instructions to make the assistant produce disallowed content. Another: a fetched webpage carried hidden text redirecting the agent. How do these differ?",
      "options": [
        "The first is a jailbreak attempt via direct user input; the second is prompt injection via untrusted third-party content, and each is mitigated at a different layer",
        "They are the same attack, since in both cases text changed the model's behaviour, so one mitigation covers both identically",
        "The first is harmless because the user is authenticated",
        "The second is impossible if the page loaded over HTTPS"
      ]
    }
  ],
  "ccd-quiz-96": [
    {
      "question": "Your safety review asks why you have a content policy in the system prompt AND output filtering AND tool-level least privilege. What principle are you applying?",
      "options": [
        "Guardrail layering: no single control is relied on, so a bypass of one layer is caught by another",
        "Redundancy for its own sake, which the review should flag as waste since the strongest single control makes the other two unnecessary",
        "Defense by obscurity",
        "Compliance theatre required by the auditor"
      ]
    }
  ],
  "ccd-quiz-97": [
    {
      "question": "A teammate 'slightly improves' the extraction prompt and ships it directly; accuracy quietly drops for a week. What process change prevents this?",
      "options": [
        "Run the eval suite on every prompt change and gate the deploy on the results, treating prompts like code",
        "Restrict prompt edits to senior engineers, whose judgement makes regressions unlikely enough that a formal gate adds little",
        "Freeze the prompt permanently",
        "Have the model self-assess whether the new prompt is better"
      ]
    }
  ],
  "ccd-quiz-98": [
    {
      "question": "A weather agent reports the wrong city. The trace shows the model called get_weather with city='Paris, Texas' while the user asked about Paris, France; the tool returned correct data for what it was asked. Where is the fault?",
      "options": [
        "In the model's argument construction, an output-layer failure, not in the tool or the integration",
        "In the integration layer, since the harness should have corrected the city argument before dispatching the call to the tool",
        "In the tool, which should have guessed the intended city",
        "In the network between harness and tool"
      ]
    }
  ],
  "ccd-quiz-99": [
    {
      "question": "A stakeholder says 'the bot should understand customer intent.' Before building anything, what is the right next step?",
      "options": [
        "Translate this into concrete functional requirements: which intents, what fields to extract, and what counts as a correct classification",
        "Start building immediately and let the model's general capability handle whatever 'intent' turns out to mean",
        "Pick the largest model so intent understanding is as strong as possible regardless of scope",
        "Write the system prompt first and derive requirements from what it ends up doing"
      ]
    }
  ],
  "ccd-quiz-100": [
    {
      "question": "A Claude feature has shipped and is live. Which activity belongs to the operate-and-maintain phase of the life cycle, not an earlier phase?",
      "options": [
        "Monitoring production quality and cost, and triaging regressions as the model or usage pattern shifts",
        "Writing the initial functional requirements",
        "Selecting which model tier to prototype with",
        "Designing the eval suite for the first release"
      ]
    }
  ],
  "ccd-quiz-101": [
    {
      "question": "The same feature must work inside claude.ai, through the API, and inside Claude Code. A teammate assumes one well-written prompt will behave identically everywhere. What's the flaw?",
      "options": [
        "Each surface wraps the prompt in different default context and instruction placement, so identical wording can still behave differently across them",
        "There is no flaw; a single prompt is guaranteed to behave identically across every interface",
        "Only the API supports system prompts",
        "Claude Code ignores system prompts entirely"
      ]
    }
  ],
  "ccd-quiz-102": [
    {
      "question": "A plugin your app depends on requires plugin B at version 2.x, but you've pinned plugin B at 1.x elsewhere in the project. What kind of problem is this?",
      "options": [
        "A plugin dependency conflict that must be resolved by aligning versions or isolating the plugins before either can be trusted in production",
        "A harmless duplication, since plugins do not share state and version numbers are cosmetic",
        "A pure performance issue that only affects load time",
        "Something only the model can resolve at runtime by picking whichever version seems newer"
      ]
    }
  ],
  "ccd-quiz-103": [
    {
      "question": "You invoke Claude through a third-party vendor's hosted endpoint rather than the first-party API. Which statement is accurate?",
      "options": [
        "The Messages API request and response shape stays consistent, but authentication, available headers, and some access patterns can differ by vendor",
        "Third-party vendors run a completely different model that merely shares the same name",
        "Streaming is only available through the first-party API",
        "Tool use is unavailable when invoked through a third-party vendor"
      ]
    }
  ],
  "ccd-quiz-104": [
    {
      "question": "A single large system prompt is followed by a per-user profile block that changes daily, then the user's question. You want to cache as much as possible without caching stale profile data. What's the right move?",
      "options": [
        "Place a cache breakpoint after the stable system prompt and a separate one after the profile block, so each stable segment is cached independently",
        "Cache the whole assembled prompt as one block, accepting that the profile section forces a full cache miss every time it changes",
        "Disable caching entirely since any dynamic content anywhere in the prompt invalidates the whole mechanism",
        "Move the profile block after the user's question so it no longer matters where it sits"
      ]
    }
  ],
  "ccd-quiz-105": [
    {
      "question": "A 2,000-line 'do everything' prompt-handling function has become unreadable and every change risks breaking something else. What is the appropriate response?",
      "options": [
        "Refactor incrementally into smaller, well-named functions with clear responsibilities, backed by tests, rather than rewriting from scratch",
        "Leave it alone since prompt-handling code is inherently unstructurable",
        "Rewrite it entirely from a blank file in one sitting with no tests",
        "Add a large explanatory comment at the top and continue extending the function as before"
      ]
    }
  ],
  "ccd-quiz-106": [
    {
      "question": "Two engineers each add a Claude-calling feature to the same file over the same sprint with no code review step. What SDLC practice is missing?",
      "options": [
        "Code review integrated into the merge process, catching conflicting assumptions before they reach production",
        "A larger context window, which would have let one engineer see the other's changes automatically",
        "A more capable model, which would have resolved the conflicting assumptions on its own",
        "Prompt caching, which prevents merge conflicts"
      ]
    }
  ],
  "ccd-quiz-107": [
    {
      "question": "A colleague claims 'zero-shot' means the model has zero context about the task. What's the accurate description?",
      "options": [
        "Zero-shot means no worked examples are given, though task instructions can still be detailed; the model has no example demonstrations to pattern-match against",
        "Zero-shot means the system prompt must be empty",
        "Zero-shot means the model ignores the user's question entirely",
        "Zero-shot only applies to classification tasks, never open-ended generation"
      ]
    }
  ],
  "ccd-quiz-108": [
    {
      "question": "A dashboard needs to show tokens streaming in over a persistent connection, with the server able to push updates without the client re-requesting. Which underlying technology is being described?",
      "options": [
        "A websocket, which keeps a persistent bidirectional connection open",
        "A one-off synchronous REST call repeated on a polling interval",
        "The Message Batches API",
        "A CDN cache"
      ]
    }
  ],
  "ccd-quiz-109": [
    {
      "question": "A legal-document summarizer must catch subtle contractual nuance, and an internal wiki search bot just needs to find the right page fast. How should tiers differ?",
      "options": [
        "Use a higher-capability tier for the nuanced legal task and a faster, cheaper tier for the simpler retrieval-style task",
        "Use the same tier for both, since consistency across features matters more than matching capability to task difficulty",
        "Use the cheapest tier for both to control cost uniformly",
        "Use the highest tier for both to avoid any risk of missing something"
      ]
    }
  ],
  "ccd-quiz-110": [
    {
      "question": "You're deciding between running an agent yourself on your own infrastructure versus using an Anthropic-hosted managed agent deployment. What's the core tradeoff?",
      "options": [
        "Self-hosting gives you full control over infrastructure and data flow at the cost of operating it yourself; a managed deployment reduces operational burden at the cost of less infrastructure control",
        "There is no meaningful difference; both options run identically with identical operational responsibilities",
        "Self-hosting is always cheaper regardless of the team's operational capacity",
        "Managed deployment is only available for non-agentic use cases"
      ]
    }
  ],
  "ccd-quiz-111": [
    {
      "question": "An assistant confidently states a statistic that sounds authoritative but cannot be traced to any source you gave it. What practice would have caught this before it reached the user?",
      "options": [
        "Skepticism toward confident output: validate specific claims against your source material rather than trusting fluent, confident phrasing",
        "Nothing; if the phrasing is confident and fluent, the content is reliable",
        "Raising the temperature, since more varied phrasing tends to self-correct factual errors",
        "Switching to a smaller model, which hallucinates less than larger ones"
      ]
    }
  ],
  "ccd-quiz-112": [
    {
      "question": "Your API client currently does `json.loads(response)` with no try/except. What is the minimum defensive-parsing improvement?",
      "options": [
        "Wrap the parse in error handling, validate the parsed structure against an expected schema, and define a fallback for malformed output",
        "Nothing needs to change as long as the prompt asks for JSON",
        "Increase max_tokens so the JSON is less likely to be malformed",
        "Add more few-shot examples of JSON output only, with no code-level changes at all"
      ]
    }
  ],
  "ccd-quiz-113": [
    {
      "question": "A request reaches your Claude-powered admin panel with a valid session cookie. Before letting it delete a user account, what must you additionally verify?",
      "options": [
        "Authorization: that this specific authenticated identity is permitted to perform this specific action, not merely that they are logged in at all",
        "Nothing further; a valid session cookie is sufficient proof the action should proceed",
        "Only that the request is over HTTPS",
        "Only that the model itself agrees the action seems reasonable"
      ]
    }
  ],
  "ccd-quiz-114": [
    {
      "question": "Your content policy is enforced only by a single line in the system prompt. What is the recommended improvement per secure-by-design principles?",
      "options": [
        "Layer independent enforcement: policy guidance in the prompt plus output-side filtering plus scoped tool permissions, so no single control is a single point of failure",
        "Make the system-prompt line longer and more emphatic, since a sufficiently detailed instruction is an adequate standalone control",
        "Remove the system-prompt line since it adds no value on its own",
        "Rely on the user to self-police what they ask for"
      ]
    }
  ],
  "ccd-quiz-115": [
    {
      "question": "You want a guarantee that a specific shell command can never run, no matter what the agent decides mid-session. Which mechanism actually provides a guarantee, as opposed to a strong suggestion?",
      "options": [
        "A hook that deterministically intercepts and blocks the command before execution",
        "A detailed system-prompt paragraph forbidding that command",
        "Choosing a model known for being cautious",
        "Setting a lower temperature for that session"
      ]
    }
  ],
  "ccd-quiz-116": [
    {
      "question": "Your team wants to know, after the fact, exactly which service account accessed a sensitive internal tool and when. What capability does this require?",
      "options": [
        "Authorized access monitoring and logging tied to identity, so actions can be attributed and reviewed after the fact",
        "A larger context window, so the model remembers who called it",
        "A single shared service account for simplicity",
        "Prompt caching on the tool's description"
      ]
    }
  ],
  "ccd-quiz-117": [
    {
      "question": "You are designing a tool set for an agent and want to minimise wrong-tool selection from the start, before any bugs appear in production. Which practice addresses this proactively?",
      "options": [
        "Write each tool's description to be mutually distinct, including when not to use it, and keep the tool set focused rather than sprawling",
        "Add as many tools as possible upfront so the agent has maximum flexibility for any future task",
        "Give every tool an identical, generic description so the agent isn't biased toward any one of them",
        "Rely on the model's general judgement and skip writing descriptions with much detail"
      ]
    }
  ],
  "ccd-quiz-118": [
    {
      "question": "A tool call fails because the downstream service is temporarily down. What should the tool return to the agent?",
      "options": [
        "A structured error indicating the failure is transient and retriable, distinct from a permanent or invalid-input failure",
        "An empty string with no further information",
        "The same generic error message regardless of whether the failure is temporary or permanent",
        "A silently truncated partial result with no indication anything went wrong"
      ]
    }
  ],
  "ccd-quiz-119": [
    {
      "question": "An MCP server exposes a large static company glossary that Claude should be able to read into context when relevant, without the model needing to invoke an action to fetch it each time. Which MCP primitive fits best?",
      "options": [
        "A resource",
        "A tool, since any content the model uses must be fetched through an explicit tool call",
        "A prompt template",
        "A transport setting"
      ]
    }
  ],
  "ccd-quiz-120": [
    {
      "question": "A capability needs to call three different internal REST services with complex auth, be reused across five separate Claude applications, and be maintained by a dedicated platform team. Which approach fits best?",
      "options": [
        "An MCP server, maintained centrally and connected to by each of the five applications",
        "A Skill duplicated into each of the five applications' repositories",
        "Five separate hand-written custom tools, one per application, kept manually in sync",
        "One shared, hardcoded block of instructions pasted into each application's system prompt"
      ]
    }
  ],
  "ccd-quiz-121": [
    {
      "question": "A task's steps are mostly fixed, but one step occasionally needs the agent to choose between two valid approaches based on data it hasn't seen before. How should this be architected?",
      "options": [
        "A workflow overall, with a small bounded agentic decision point only at the one variable step",
        "A fully autonomous agent for every step, since any variability anywhere means the whole task should be agentic",
        "A rigid workflow with no agentic step, requiring a human to manually pick the approach every time",
        "Two entirely separate hard-coded workflows, one per possible approach, chosen at random"
      ]
    }
  ],
  "ccd-quiz-122": [
    {
      "question": "A capability is purely a set of written instructions and reference examples for how to format a specific report, used only within Claude Code by one team, with no external system to call. Which approach fits, and why not an MCP server?",
      "options": [
        "A Skill; there is no external capability or live system to expose, so a server would add operational overhead for no benefit",
        "An MCP server, because any reusable capability should default to a server regardless of whether it calls anything external",
        "A custom tool, since tools are the default choice whenever multiple people will use something",
        "Hard-coded into CLAUDE.md with no other structure, since it's team-specific"
      ]
    }
  ],
  "ccd-quiz-123": [
    {
      "question": "A prompt buries the single most important instruction in the middle of six paragraphs of background. The model keeps missing it. What is the most direct fix?",
      "options": [
        "Move the critical instruction to the beginning or end of the prompt, where models attend most reliably, and trim unnecessary background",
        "Repeat the six paragraphs of background twice so the instruction gets more total exposure",
        "Switch to a lower temperature so the model reads more carefully",
        "Add the instruction as a sixth occurrence in the middle so it appears more often"
      ]
    }
  ],
  "ccd-quiz-124": [
    {
      "question": "Two independent subagents each need a large shared reference document to complete their separate parts of a task, but the documents should not pollute each other's follow-up reasoning with the other's intermediate steps.",
      "options": [
        "Give each subagent its own isolated context containing the shared reference, so their intermediate reasoning never crosses over",
        "Run both subagents in a single shared context so they can see each other's reasoning as it happens",
        "Give the reference document to only one subagent and have it verbally summarise the whole thing to the other",
        "Skip giving the document to either and let both reason from general knowledge instead"
      ]
    }
  ],
  "ccd-quiz-125": [
    {
      "question": "A moderation feature must flag live chat messages in under a second, and separately re-score the entire message archive once a month for a compliance report. How should these two needs be split?",
      "options": [
        "Synchronous calls for live moderation; the Batches API for the monthly archive re-score",
        "Batches API for both, since consolidating everything onto one API path simplifies the codebase",
        "Synchronous calls for both, accepting the higher cost on the monthly re-score to avoid maintaining two code paths",
        "Streaming for the monthly re-score, since streaming is the cheapest option regardless of urgency"
      ]
    }
  ],
  "ccd-quiz-126": [
    {
      "question": "A new model version is released with materially better reasoning but a documented change to how it escapes special characters in code output. Your pipeline parses that output with regex tuned to the old escaping. What is the safe migration path?",
      "options": [
        "Test the new version against your parser and eval suite in staging, update the regex if needed, then promote deliberately",
        "Upgrade in production immediately, since better reasoning always outweighs a small formatting difference",
        "Ignore the new version permanently to avoid ever touching the parser again",
        "Turn off the parser and pass raw output straight to users"
      ]
    }
  ],
  "ccd-quiz-127": [
    {
      "question": "You want to forecast next quarter's Claude spend for a feature that's growing 15% month over month. What inputs does a sound cost model need?",
      "options": [
        "Historical token usage per request, the growth rate, and current per-token pricing, projected forward",
        "Only the current month's total invoice, extrapolated by guesswork",
        "The number of engineers on the team",
        "The size of the context window, regardless of how much of it is actually used per call"
      ]
    }
  ],
  "ccd-quiz-128": [
    {
      "question": "An agent has both a client-side tool (reads the user's current form input) and a server-side tool (queries a production database). A refactor accidentally swaps their execution locations. What breaks first?",
      "options": [
        "The tool meant to read live client state can no longer see it once it's forced to run server-side, since the server has no visibility into the user's in-browser state",
        "Nothing breaks, since tools are interchangeable regardless of where they execute",
        "Only latency changes; both tools still function identically otherwise",
        "The database tool becomes faster once running client-side"
      ]
    }
  ],
  "ccd-quiz-129": [
    {
      "question": "A single tool named handle_request currently does lookup, validation, and notification all in one call, and the agent frequently gets confused about what result it will get back. What is the most direct fix?",
      "options": [
        "Split it into three focused tools, each with one clear responsibility and a description that reflects it",
        "Rename the tool to something more exciting so it's memorable to the model",
        "Add a fourth responsibility so it's clearly the 'do everything' tool",
        "Leave the tool as is but add a longer usage example in the system prompt"
      ]
    }
  ],
  "ccd-quiz-130": [
    {
      "question": "A workflow currently branches on eleven different document types with a dedicated code path for each, and a twelfth type just appeared with no existing path. The team's instinct is to add a twelfth branch. What should you consider instead?",
      "options": [
        "Whether the branching factor itself signals this is now agent territory, since new document types keep appearing faster than branches can be written",
        "Immediately writing the twelfth branch, since workflows should always be extended to cover every new case as it appears",
        "Deleting all eleven existing branches and starting over with no clear replacement",
        "Ignoring the twelfth document type entirely until a branch is convenient to write"
      ]
    }
  ],
  "ccd-quiz-131": [
    {
      "question": "You're deciding whether to build a custom agent loop from scratch or use the Claude Agent SDK. Your team has no existing orchestration code and a tight deadline. What does the SDK offer that changes the calculus?",
      "options": [
        "Built-in handling for the tool-use loop, context management, and common agent patterns, reducing what you must build and test yourself",
        "A completely different model with different capabilities than the raw API",
        "Guaranteed lower per-token pricing versus calling the API directly",
        "Automatic conversion of any workflow into an agent regardless of whether that fits the task"
      ]
    }
  ],
  "ccd-quiz-132": [
    {
      "question": "A tone-of-voice instruction sits in the system prompt, and a conflicting tone instruction appears in the user's message. Which generally takes precedence, and why does this matter for design?",
      "options": [
        "The system prompt is the higher-priority, more durable placement, so critical constraints belong there rather than relying on user messages to enforce them",
        "The user message always overrides the system prompt with no exceptions in any case",
        "Whichever instruction is longer wins",
        "Neither takes precedence; the model picks arbitrarily and this is unpredictable by design"
      ]
    }
  ],
  "ccd-quiz-133": [
    {
      "question": "Your instructions ask the model to 'be concise,' but responses stay long regardless. What refinement is more likely to work?",
      "options": [
        "Replace the vague adjective with a specific constraint, such as a maximum sentence or word count",
        "Repeat the word 'concise' several times in the same sentence for emphasis",
        "Remove the instruction entirely, since vague adjectives never influence length at all",
        "Switch to a different model tier without changing the instruction"
      ]
    }
  ],
  "ccd-quiz-134": [
    {
      "question": "An agent's context contains the full text of 12 API responses from earlier tool calls, most of which are no longer relevant to the current step, and quality is degrading. What is the appropriate context management move?",
      "options": [
        "Prune the stale tool outputs, keeping only what remains relevant to the current step, to reclaim budget and reduce noise",
        "Leave all 12 in place since removing any tool output risks losing information the agent might need eventually",
        "Add a 13th tool call to compensate",
        "Switch to a smaller model so the existing context fits more comfortably"
      ]
    }
  ],
  "ccd-quiz-135": [
    {
      "question": "Your application's schema for a structured extraction task has 40 optional fields, and the model frequently fills in plausible-looking but incorrect values for fields that weren't actually present in the source document. What design issue does this point to?",
      "options": [
        "The schema likely needs a way to represent 'field not found' explicitly, rather than forcing a value into every field regardless of whether it's supported by the input",
        "The model tier is too small and should simply be upgraded",
        "The document input format is unsupported",
        "The schema has too few fields and should be expanded further"
      ]
    }
  ],
  "ccd-quiz-136": [
    {
      "question": "Multiple features in your app each maintain their own separate conversation with Claude for the same end user, and none of them share any awareness of the others. A user complains the assistant 'forgets' things between features. What's the actual architecture answer here?",
      "options": [
        "This may be an intentional design tradeoff: some features genuinely warrant separate, isolated conversations, and cross-feature memory is a distinct feature to design deliberately if wanted, not an automatic default",
        "Every feature must always share one giant conversation so nothing is ever forgotten",
        "The context window is too small and must be increased before anything else can be considered",
        "This is always a bug that must be fixed by merging all conversations"
      ]
    }
  ],
  "ccd-quiz-137": [
    {
      "question": "A user directly asks your assistant, in plain conversation, to roleplay as an unrestricted version of itself with no rules. Is this the same category of risk as a webpage with hidden malicious instructions, and does it need the same fix?",
      "options": [
        "No; this is a jailbreak attempt via direct conversation, addressed through policy and refusal training, whereas the webpage case is injection via untrusted content, addressed through isolation and least privilege",
        "Yes; both are identical attacks solved by the exact same single technical control",
        "No; the direct request is not a risk at all since the user is a legitimate, authenticated party",
        "Yes, but only because both involve text"
      ]
    }
  ],
  "ccd-quiz-138": [
    {
      "question": "Your team is deciding where to place a content-policy check: only once, at the very end after the full response is generated, or additionally earlier in the pipeline. What does layering suggest?",
      "options": [
        "Check at multiple points, since an end-only check misses the chance to prevent an issue earlier and provides no depth if that single check is bypassed or misses something",
        "A single end-of-pipeline check is always sufficient and additional checks are pure redundancy with no value",
        "Policy checks should only ever run on user input, never on the model's own output",
        "Policy checks are unnecessary if the system prompt already states the policy"
      ]
    }
  ],
  "ccd-quiz-139": [
    {
      "question": "A contractor's temporary access to your Claude API key needs to end automatically when their contract does, without anyone remembering to manually revoke it. What capability addresses this?",
      "options": [
        "Scoped, time-limited credentials or access grants tied to identity, rather than a long-lived shared key with indefinite validity",
        "A stronger password on the shared key",
        "Asking the contractor to delete the key from their notes when they leave",
        "Increasing the rate limit on the key so contractor usage doesn't interfere with production traffic"
      ]
    }
  ],
  "ccd-quiz-140": [
    {
      "question": "A multi-step agent produces a wrong final report. The trace shows the retrieval tool returned the correct documents, and the model's summary of them is accurate, but a formatting tool downstream truncated the summary mid-sentence before it reached the user. Where is the fault?",
      "options": [
        "In the formatting tool or its integration into the pipeline, since both retrieval and model reasoning were correct up to that point",
        "In the model's reasoning, since a wrong final report always originates from the model regardless of what the trace shows",
        "In the retrieval tool, since it's the earliest step and therefore always the first thing to suspect",
        "In the user's original request, since it must have been ambiguous"
      ]
    }
  ],
  "ccd-quiz-141": [
    {
      "question": "An error handler currently catches every exception type identically and always tells the user to 'try again later,' whether the cause is a bad user input, a rate limit, or a permanent server error. What is the improvement?",
      "options": [
        "Classify errors by type and recoverability, and choose the recovery strategy and user-facing message per category rather than one generic response",
        "Keep the single generic message, since users don't need to know the distinction between error types",
        "Log the errors in more detail internally without changing what the user is ever told",
        "Remove error handling entirely and let exceptions surface raw to the user"
      ]
    }
  ],
  "ccd-quiz-142": [
    {
      "question": "You're choosing a transport for an MCP server that will be called by a client on a different machine over the network, with no requirement for a persistent open connection between calls. Which fits best, and why not stdio?",
      "options": [
        "An HTTP-based transport, since it supports request-based network communication; stdio assumes a local subprocess sharing standard input and output on the same machine",
        "stdio, since it works over any network as long as both machines are on the same subnet",
        "Either works identically regardless of whether the client and server share a machine",
        "A raw TCP socket is the only valid choice for any MCP server"
      ]
    }
  ],
  "ccd-quiz-143": [
    {
      "question": "Your MCP server currently returns raw, unvalidated data straight from an upstream API to Claude, including occasional malformed records. What server-side practice would improve robustness?",
      "options": [
        "Validate and normalise the data before returning it, so malformed upstream records don't reach the model as if they were clean",
        "Pass everything through unchanged, since validation is solely the responsibility of whichever application calls the server",
        "Stop returning any data at all if the upstream service is ever imperfect",
        "Cache the malformed records so they are returned consistently every time"
      ]
    }
  ],
  "ccd-quiz-144": [
    {
      "question": "A capability must call a live, authenticated internal API and also needs to be reachable identically from three unrelated internal tools your company builds. Weighing Skills, custom tools, and MCP, which fits, and what rules out a Skill here?",
      "options": [
        "An MCP server; a Skill is instructional content and cannot itself make authenticated live API calls on its own",
        "A Skill, since Skills can natively perform any authenticated API call given the right description",
        "A custom tool duplicated by hand into each of the three consuming tools",
        "None of the three approaches fit a live authenticated API"
      ]
    }
  ],
  "ccd-quiz-145": [
    {
      "question": "A team wants to add Claude-based text classification to an existing synchronous request-handling pipeline that currently blocks on every I/O call. What foundational concern should be addressed before adding the new blocking API call?",
      "options": [
        "Whether the pipeline should move to asynchronous, non-blocking I/O so a slow classification call doesn't stall unrelated requests",
        "Whether the classification labels should be stored as strings or integers",
        "Whether the git branch naming convention should change",
        "Whether the team's code editor supports syntax highlighting for the new code"
      ]
    }
  ],
  "ccd-quiz-146": [
    {
      "question": "Which of these activities most clearly belongs to the design phase rather than the build or operate phases of the systems life cycle?",
      "options": [
        "Deciding the overall architecture, including workflow-versus-agent tradeoffs and model tier selection, before writing implementation code",
        "Fixing a production incident that occurred last night",
        "Writing the actual integration code against the chosen API",
        "Monitoring live cost dashboards after launch"
      ]
    }
  ],
  "ccd-quiz-147": [
    {
      "question": "A requirement states 'the system must respond quickly.' What is missing that would make this usable for design and testing?",
      "options": [
        "A concrete, measurable target, such as a specific latency percentile under a specific load, so it can be checked objectively",
        "Nothing; 'quickly' is specific enough to design and test against directly",
        "A list of every possible future feature the system might ever need",
        "The name of the engineer responsible for writing the code"
      ]
    }
  ],
  "ccd-quiz-148": [
    {
      "question": "An agent's memory currently holds every tool call and result from the entire session with no pruning, and by turn 40 the agent starts repeating earlier mistakes it should have already learned from. What does this suggest about how memory is being used?",
      "options": [
        "Raw accumulation without summarisation or structuring may bury the useful signal in volume, so what's kept needs curating, not just retained indefinitely",
        "Memory should be disabled entirely, since any memory clearly makes agents worse over time",
        "The agent needs a larger context window and nothing else needs to change",
        "The problem is unrelated to memory and is purely a model-capability issue"
      ]
    }
  ]
};
