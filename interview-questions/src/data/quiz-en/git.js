// Английский перевод банка квиза: git. Порядок вариантов и опций — как в RU.
export const git = {
  'git-basics': [
    {
      question: 'What does the git pull command do?',
      options: [
        'Downloads changes from the remote repository and merges them into the current branch (fetch + merge)',
        'Sends local commits to the server',
        'Creates a new branch',
        'Undoes the last commit',
      ],
    },
    {
      question: 'Which three “areas” does a file pass through in Git before entering history?',
      options: [
        'Working directory → index (staging area) → repository (commit)',
        'Branch → tag → release',
        'Local disk → archive → cloud',
        'Push → pull → merge',
      ],
    },
  ],
  'merge-rebase': [
    {
      question: 'How does rebase differ from merge?',
      options: [
        'Rebase moves commits on top of another branch, making history linear; merge creates a merge commit, preserving the original history',
        'Merge rewrites history, rebase creates a merge commit',
        'Rebase works only with remote branches',
        'No difference — the commands are interchangeable',
      ],
    },
    {
      question: 'Why shouldn’t you rebase a public (shared) branch?',
      options: [
        'Rebase rewrites history — colleagues get conflicts as their local history diverges from the shared one',
        'Rebase deletes all tags in the repository',
        'Rebase is impossible for branches longer than 10 commits',
        'Public branches are protected from rebase at the Git protocol level',
      ],
    },
  ],
  'branching-strategies': [
    {
      question: 'What is characteristic of the Git Flow strategy?',
      options: [
        'Long-lived develop and main branches, separate feature/release/hotfix branches',
        'All commits go directly into main without branches',
        'One branch per developer, forever',
        'A ban on merging branches',
      ],
    },
    {
      question: 'What is trunk-based development?',
      options: [
        'Working with frequent small merges into the main branch (trunk), short-lived branches, feature flags',
        'Development in a trunk branch that is never merged into main',
        'Keeping each release in a separate repository',
        'A strategy that forbids any branches',
      ],
    },
  ],
  'fetch-vs-pull': [
    {
      question: 'How does git fetch differ from git pull?',
      options: [
        'fetch only downloads changes into tracking branches, while pull = fetch + merge/rebase into the current branch',
        'fetch merges changes immediately, and pull only downloads',
        'They are the same command',
        'fetch deletes local commits, pull does not',
      ],
    },
    {
      question: 'What does git pull --rebase do?',
      options: [
        'Replays local commits on top of the pulled ones, keeping history linear with no merge commit',
        'Creates a merge commit on every pull',
        'Deletes the remote branch',
        'Rolls back all local changes',
      ],
    },
  ],
  'reset-revert-checkout': [
    {
      question: 'What is safe to use for undoing an ALREADY-pushed commit?',
      options: [
        'git revert — creates a new commit that undoes the changes',
        'git reset --hard — rewrites history',
        'git checkout — deletes the commit',
        'git commit --amend',
      ],
    },
    {
      question: 'What does git reset --hard do?',
      options: [
        'Moves the branch pointer and wipes changes in the index and working directory (data is lost)',
        'Leaves changes in staging',
        'Leaves changes in the working directory but not in the index',
        'Creates a new commit that undoes',
      ],
    },
  ],
  'fast-forward-merge': [
    {
      question: 'When is a fast-forward merge possible?',
      options: [
        'When the target branch has had no new commits since the branch point (history is linear)',
        'Always, regardless of history',
        'Only when there are conflicts',
        'Only between different repositories',
      ],
    },
    {
      question: 'What does the --no-ff flag do on merge?',
      options: [
        'Always creates a merge commit, even when a fast-forward is possible',
        'Forbids merging when there are conflicts',
        'Merges without creating a commit',
        'Deletes the branch after merging',
      ],
    },
  ],
  'interactive-rebase-squash': [
    {
      question: 'What does git rebase -i let you do?',
      options: [
        'Squash, reword, edit, drop, and reorder commits before publishing',
        'Automatically deploy the application',
        'Merge two branches without conflicts',
        'Create a backup of the repository',
      ],
    },
    {
      question: 'When should you NOT rewrite history via rebase?',
      options: [
        'When the commits are already pushed and used by others',
        'When the commits are only local',
        'When it’s a personal, unpublished branch',
        'Before merging a PR',
      ],
    },
  ],
  'cherry-pick': [
    {
      question: 'What does git cherry-pick do?',
      options: [
        'Moves a single commit from one branch into the current one, creating a copy of it',
        'Merges an entire branch',
        'Removes a commit from history',
        'Creates a new branch from a tag',
      ],
    },
    {
      question: 'A typical scenario for using cherry-pick is…',
      options: [
        'Delivering a hotfix to several branches without dragging along the other changes',
        'Regular branch integration instead of merge',
        'Deleting commit history',
        'Creating a release tag',
      ],
    },
  ],
  'git-bisect': [
    {
      question: 'What is git bisect used for?',
      options: [
        'To find the commit that introduced a bug via binary search over history',
        'To merge two diverged branches',
        'To split a commit into several',
        'To speed up cloning a repository',
      ],
    },
    {
      question: 'What does git bisect run <script> do?',
      options: [
        'Automates the search: the script returns good/bad, and Git finds the culprit commit itself',
        'Runs all the project’s tests in parallel',
        'Rolls the repository back to the first commit',
        'Creates a pre-commit hook script',
      ],
    },
  ],
  'merge-conflicts': [
    {
      question: 'When does a merge conflict occur?',
      options: [
        'When two branches changed the same lines of the same file',
        'On every branch merge',
        'Only when working in detached HEAD',
        'When the repository has more than one branch',
      ],
    },
    {
      question: 'What must you do after manually resolving a conflict in a file?',
      options: [
        'git add <file>, then git commit (or git rebase --continue)',
        'git reset --hard',
        'Just save the file — Git will figure it out',
        'git push --force',
      ],
    },
  ],
  'detached-head': [
    {
      question: 'What is a detached HEAD?',
      options: [
        'A state where HEAD points directly at a commit rather than a branch',
        'A remote branch with no local copy',
        'A commit without a message',
        'A repository with no branches',
      ],
    },
    {
      question: 'What is dangerous about a detached HEAD?',
      options: [
        'The commits don’t belong to a branch and can be lost on switching',
        'You can’t make commits at all',
        'The whole history is automatically deleted',
        'The remote repository breaks',
      ],
    },
  ],
  'git-hooks': [
    {
      question: 'What are Git hooks?',
      options: [
        'Scripts automatically run by Git on certain events (commit, push, etc.)',
        'Remote branches for releases',
        'Version tags',
        'CI/CD configuration files',
      ],
    },
    {
      question: 'What is usually done in a pre-commit hook?',
      options: [
        'Run a linter, formatting, quick tests, a secrets check',
        'Deploy the application to production',
        'Create a release tag',
        'Delete commit history',
      ],
    },
  ],
  'committed-secrets': [
    {
      question: 'What should you do FIRST if you pushed a secret to a repository?',
      options: [
        'Immediately revoke/rotate the secret — it’s already compromised',
        'Just delete the last commit',
        'Nothing, if the repository is private',
        'Rename the file with the secret',
      ],
    },
    {
      question: 'Which tool removes a secret from the ENTIRE repository history?',
      options: ['git filter-repo or BFG Repo-Cleaner', 'git commit --amend', 'git revert', 'git stash'],
    },
  ],
};
