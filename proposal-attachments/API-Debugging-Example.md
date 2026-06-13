# Debugging Walkthrough: Tracing a Bug From UI to Database

**Symptom:** A data table rendered stale/incorrect values after an update, even
though the save "succeeded."

**How I traced it (UI → API → data layer):**

- Confirmed the UI was sending the correct payload (network tab / request
  inspection).
- Checked the API response — the write succeeded, but the returned object didn't
  reflect the change.
- Traced to the data layer: the read was hitting a cached/earlier value, so the
  refetch returned old data.

**Fix:** Invalidated the cached query on mutation success so the table refetched
fresh data. Small, contained change — no schema or API contract changes needed.

**Verification:** Reproduced the original bug, applied the fix, confirmed the
table updated immediately, and checked that the adjacent flows sharing the same
query weren't affected.

---

**Takeaway:** Most "frontend" bugs in data-heavy SaaS are actually data-flow
bugs. I trace the full path before touching code.
