# How I Use AI Coding Tools in My Daily Workflow

I use Claude Code, Cursor, and Codex as a fast pair — never as autopilot.
My loop on every ticket:

**1. Inspect first.**
Before writing anything, I have the AI map where the relevant logic actually
lives and what depends on it. This prevents "fix one thing, break another" in an
unfamiliar codebase.

**2. Plan small.**
I ask for a scoped plan tied to the ticket's acceptance criteria — not a
rewrite. Smallest correct change wins.

**3. Implement + read every line.**
The AI drafts; I review all of it. No blind paste. I reject anything I can't
explain.

**4. Verify.**
I run the app, test against the acceptance criteria, and check the edge cases
the ticket implies.

**5. Refine + hand off.**
Small, reviewable diff plus a short written summary so QA and the next dev
aren't guessing.

---

**Why it matters for maintenance work:** on live products, velocity is worthless
if it creates regressions. This loop gives speed *and* safety — small diffs,
clear handoffs, fewer surprises for QA.
