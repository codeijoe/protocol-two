# Protocol Two: The Async Lie

> **Mission ID:** P-TWO
> **Difficulty:** Level 3 (Async Patterns)
> **Context:** Data Batch Processor

## The Mission
We are running a critical data migration script. The logs say "Migration Complete", but the destination database is empty. 

Your job is to fix `src/batch.js` so that the system **ACTUALLY WAITS** for the records to be processed before returning success.

## Business Rules
1. **Data Integrity:** All 3 records must be processed.
2. **Sequence:** The function must not return until all records are fully processed.
3. **Efficiency:** Processing should be efficient (Parallel is preferred, but Serial is acceptable if safe).

## The Clue
* "A loop that does not wait is a lie."

## Instructions
1. Fork & Clone.
2. `npm install`
3. `npm test` (Fails: Expected 3 records, got 0).
4. Fix `src/batch.js`.
5. Submit PR with Liability Waiver.
 
