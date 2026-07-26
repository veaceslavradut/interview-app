// Английские переводы: git
export const git = {
    title: 'Git',
    description: 'Version control system',
    questions: {
      'git-basics': {
        question: 'What is Git? Core concepts and commands.',
        answer: `**Git** is a distributed version control system: every developer has a full copy of the repository with its history.

**Three zones:**

- **Working Directory** — working files;
- **Staging Area (index)** — changes prepared for commit;
- **Repository (.git)** — commit history.

**Main commands:**

\`\`\`bash
git clone <url>              # clone
git status                   # state
git add file / git add .     # to staging
git commit -m "message"      # commit
git push / git pull          # send / receive (fetch + merge)
git fetch                    # fetch without merging

git branch feature-x         # create a branch
git switch feature-x         # switch (= checkout)
git merge feature-x          # merge a branch
git log --oneline --graph    # history

git stash / git stash pop    # set changes aside
git diff / git diff --staged # view changes
\`\`\`

**Key concepts**: a commit is a snapshot of state, identified by a SHA-1 hash; a branch is just a pointer to a commit; HEAD is a pointer to the current commit/branch.

**Undoing changes**: \`git restore file\` (working changes), \`git reset --soft/--hard\` (moving the branch), \`git revert\` (a new undo commit — safe for shared branches).`,
      },
      'merge-rebase': {
        question: 'What is the difference between merge and rebase?',
        answer: `Both commands combine changes from branches, but in different ways:

**merge** — creates a merge commit with two parents; history is preserved as is:

\`\`\`bash
git switch main
git merge feature    # merge commit, branching is visible in history
\`\`\`

- history is truthful but "branchy";
- safe: existing commits are not modified.

**rebase** — "replays" a branch's commits on top of another branch, **rewriting** them (new SHAs):

\`\`\`bash
git switch feature
git rebase main      # feature commits rewritten on top of main
git switch main
git merge feature    # fast-forward — linear history
\`\`\`

- linear, clean history;
- commits are recreated — conflicts are resolved one commit at a time.

**The golden rule of rebase**: **never rebase published (shared) branches** — rewriting history breaks your colleagues' work (divergence from origin, force push).

**In practice:**

- a local branch before push — rebase onto main to bring it up to date;
- merging into main — merge (or squash-merge in a PR);
- \`git rebase -i\` — interactive commit cleanup (squash, reword) before a PR;
- \`git pull --rebase\` — update without extra merge commits.`,
      },
      'branching-strategies': {
        question: 'What branching strategies do you know?',
        answer: `**Git Flow** — the classic heavyweight model:

- permanent branches: \`main\` (releases) and \`develop\`;
- temporary: \`feature/*\` (from develop), \`release/*\`, \`hotfix/*\` (from main);
- suits versioned products with long release cycles;
- downsides: complexity, long-lived branches → big conflicts, poor fit with CI/CD.

**GitHub Flow** — a simple model:

- one permanent branch \`main\` (always deployable);
- features in short-lived branches → Pull Request → code review → merge → deploy;
- suits continuous delivery (web applications).

**Trunk-Based Development**:

- everyone commits to \`main\` (trunk) directly or via very short-lived branches (< 1-2 days);
- unfinished features are hidden behind **feature flags**;
- requires mature CI (fast tests on every commit);
- recommended by DORA/Accelerate practices for elite teams.

**GitLab Flow** — a compromise: main + environment branches (staging, production) or release branches.

**Extras**: commit conventions (Conventional Commits: \`feat:\`, \`fix:\`), mandatory code review via PR/MR, protected branches, semantic versioning for releases.

The trend: the more often you deploy, the shorter the branches and the simpler the model.`,
      },
      'fetch-vs-pull': {
        question: 'How does git fetch differ from git pull?',
        answer: `Both retrieve changes from a remote repository, but differently:

- **\`git fetch\`** — downloads new commits and updates the **remote-tracking branches** (\`origin/main\`) **without touching** your working branch or working directory. Safe: you can see what changed (\`git log main..origin/main\`) before merging.
- **\`git pull\`** = \`git fetch\` + an automatic **\`git merge\`** (or \`git rebase\` with \`pull --rebase\`) of the remote branch into the current one. So pull immediately changes your working branch.

In essence: \`fetch\` is "see what's new without changing anything locally," \`pull\` is "get it and merge right away." \`pull --rebase\` keeps history linear by replaying your local commits on top of the pulled ones, without a merge commit. A cautious workflow — \`fetch\` first, review the diff, then \`merge\`/\`rebase\`.`,
      },
      'reset-revert-checkout': {
        question: 'How do you undo changes in Git? What is the difference between reset --soft, --mixed, and --hard?',
        answer: `Three different undo tools:

- **\`git revert <commit>\`** — creates a **new** commit that undoes the changes of the specified one. History is preserved — safe for **published** (pushed) commits.
- **\`git reset\`** — moves the branch pointer back, "removing" commits from history. Dangerous for already-pushed commits (rewrites history).
- **\`git checkout <commit> -- <file>\`** / **\`git restore\`** — restores specific files without touching history.

The \`reset\` modes differ in what happens to the index and the working directory:

- **\`--soft\`** — moves only the branch pointer; the commits' changes remain **staged** (ready for a new commit). Handy for "reassembling" the last commits.
- **\`--mixed\`** (default) — moves the pointer and resets the **index**, but the changes remain in the working directory (unstaged).
- **\`--hard\`** — moves the pointer and **erases** changes in both the index and the working directory. Data is lost — the most dangerous mode.

Rule: undoing something published — \`revert\`; local unpushed history — \`reset\`.`,
      },
      'fast-forward-merge': {
        question: 'What is a fast-forward merge?',
        answer: `A **fast-forward** merge is possible when the target branch (e.g., \`main\`) has had **no new commits** since the feature branch diverged — that is, history is linear. Then Git simply **moves the \`main\` pointer** forward to the feature branch's commit, **without creating a merge commit**. History stays flat, as if the commits were made directly on \`main\`.

If \`main\` has its own new commits (histories diverged), a fast-forward is not possible — Git creates a **merge commit** with two parents (a three-way merge).

Controlling the behavior:

- **\`--ff\`** (default) — fast-forward if possible;
- **\`--no-ff\`** — always create a merge commit, even when ff is possible. This preserves an explicit trace that there was a separate branch (often used for feature branches so history shows the grouping of work);
- **\`--ff-only\`** — merge only if a fast-forward is possible, otherwise refuse (protects against unexpected merge commits).`,
      },
      'interactive-rebase-squash': {
        question: 'What is an interactive rebase (git rebase -i) and when should you squash commits?',
        answer: `**\`git rebase -i <base>\`** opens a list of commits for editing history before publishing. You can:

- **squash / fixup** — combine several commits into one;
- **reword** — change a commit message;
- **edit** — stop and fix a commit;
- **drop** — remove a commit;
- **reorder** — change the order.

**Squash** is appropriate to "tidy up" a branch's history before merging: combine intermediate commits like "wip", "fix typo", "review fixes" into one meaningful commit. Then \`main\` gets a clean, atomic history — one commit per logical change (which simplifies \`revert\` and \`bisect\`).

**When NOT to squash / rewrite history:** if the commits are already **pushed and used by others** — rebase rewrites hashes and breaks history for colleagues. Rule: interactive rebase is only for **local, not-yet-published** commits (or your own personal branches by agreement). Many teams squash automatically when merging a PR (squash merge), leaving one commit per task in main.`,
      },
      'cherry-pick': {
        question: 'What does git cherry-pick do and when is it used?',
        answer: `**\`git cherry-pick <commit>\`** transfers a **single commit** (or range) from one branch into the current one, creating a copy of it with a new hash — without merging the whole branch.

When it is used:

- a **hotfix** needs to be delivered to several branches (e.g., from \`main\` into \`release/1.x\`) without bringing the rest of the changes;
- to grab one specific useful commit from someone else's/experimental branch;
- to recover a needed commit after a complex history rewrite.

Pitfalls: cherry-pick **duplicates** the change under a new hash, so a later full merge of the same branch may cause conflicts or "repeated" changes. So it isn't overused for regular integration — merge/rebase is for that, and cherry-pick is reserved for a targeted transfer. On a conflict the process stops just like with a merge, and it's resolved manually.`,
      },
      'git-bisect': {
        question: 'How do you find the commit that introduced a bug (git bisect)?',
        answer: `**\`git bisect\`** finds the commit that introduced a bug via **binary search** through history — in \`log₂(N)\` steps instead of checking every commit.

The process:

1. \`git bisect start\`;
2. \`git bisect bad\` — mark the current (broken) commit;
3. \`git bisect good <commit>\` — mark a known-working commit in the past;
4. Git switches to the **middle** commit between them; you test (run a test) and say \`git bisect good\` or \`git bisect bad\`;
5. each answer halves the range until the **first bad** commit remains;
6. \`git bisect reset\` — return to the original state.

The check can be **automated**: \`git bisect run <script>\` — the script returns 0 (good) or a non-zero code (bad), and Git finds the culprit commit itself. Especially useful on a large history where it's unclear which change broke the behavior.`,
      },
      'merge-conflicts': {
        question: 'How do you resolve merge conflicts?',
        answer: `A **conflict** arises when two branches changed the **same lines** of one file (or one deleted a file while the other changed it) — Git cannot automatically decide which version to keep.

How to resolve:

1. Git marks the conflicting spots in the file with markers \`<<<<<<<\`, \`=======\`, \`>>>>>>>\` (your version, separator, their version);
2. \`git status\` shows the conflicting files;
3. manually (or in a merge tool / IDE) edit the file, keeping the desired result and removing the markers;
4. \`git add <file>\` — mark the conflict resolved;
5. finish: \`git commit\` (for a merge) or \`git rebase --continue\` (for a rebase). To abort everything — \`git merge --abort\` / \`git rebase --abort\`.

How to reduce the frequency of conflicts: sync with the main branch more often (short-lived branches), make small focused changes, agree on formatting across the team. For recurring similar conflicts, \`git rerere\` helps (it remembers resolutions).`,
      },
      'detached-head': {
        question: 'What is a detached HEAD and why is it dangerous?',
        answer: `Normally **HEAD** points to a branch (and that to the latest commit). A **detached HEAD** is the state where HEAD points **directly at a specific commit** rather than a branch. It happens with \`git checkout <commit-hash>\`, \`git checkout <tag>\`, or moving onto \`origin/main\` without a local branch.

Why it's dangerous: commits made in a detached HEAD **belong to no branch**. As soon as you switch to another branch, there are no references to those commits — they become "dangling" and will eventually be removed by Git's garbage collector. So the work can be **lost**.

The state itself is fine for "look at / build an old version." But if you started committing and want to keep the work — create a branch: \`git switch -c new-branch\` (or \`git branch new-branch <hash>\`) while the commits are still reachable. Recently lost commits can often be recovered via \`git reflog\`.`,
      },
      'git-hooks': {
        question: 'What are Git hooks and what are they used for?',
        answer: `**Git hooks** are scripts that Git runs automatically on certain lifecycle events (in the \`.git/hooks\` directory or via tools like Husky/pre-commit). They are split into client-side and server-side.

Common client-side hooks:

- **\`pre-commit\`** — before creating a commit: run a linter, formatting, fast tests, a check for accidental secrets. A non-zero exit code cancels the commit.
- **\`commit-msg\`** — check the message format (e.g., Conventional Commits).
- **\`pre-push\`** — before a push: run tests so you don't push something broken.

Server-side (on the repository side):

- **\`pre-receive\` / \`update\`** — check incoming changes (policies, blocking force-push to protected branches);
- **\`post-receive\`** — triggers after acceptance (notifications, CI/CD, deploy).

Why: to automate quality checks and shared team rules locally, before code reaches the shared repository. Note: local hooks in \`.git/hooks\` are not committed, so for shared rules teams use hook managers (Husky, pre-commit) that are versioned in the repository.`,
      },
      'committed-secrets': {
        question: 'What do you do if you accidentally committed secrets (passwords, keys)?',
        answer: `The first thing to understand: if the commit is **pushed**, the secret is considered **compromised** — removing it from history does not undo the fact that it could have been seen or cloned.

The order of actions:

1. **Immediately revoke/rotate the secret** (rotate the key, password, token) — this comes first and matters more than cleaning history;
2. **remove the secret from history**, not just from the last commit (otherwise it stays in earlier ones). Tools: **\`git filter-repo\`** (recommended) or BFG Repo-Cleaner — they rewrite history, removing the file/line from all commits;
3. if the branch is shared — coordinate with the team: rewriting history requires a **force-push** and re-cloning by everyone;
4. **prevent a recurrence**: keep secrets in environment variables / secret managers (Vault), add files to \`.gitignore\`, enable secret scanners (git-secrets, gitleaks) in pre-commit and CI.

The key point: rotating the secret is always mandatory; cleaning history is only a supplement that reduces further leakage.`,
      },
    },
  };
