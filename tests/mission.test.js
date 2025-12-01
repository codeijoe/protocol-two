const { processBatch } = require('../src/batch');
const { database } = require('../src/db');

describe('Protocol Two: Async Awareness', () => {

  beforeEach(() => {
    database.clear();
  });

  test('Gate 1: Processing Integrity', async () => {
    const ids = [101, 102, 103];
    
    // Run the function
    await processBatch(ids);
    
    // Check the DB
    const records = database.getAll();
    
    // TRAP CHECK:
    // If usage of forEach was kept, the code would finish instantly 
    // BEFORE the 50ms DB save completes. Records would be 0.
    // We expect 3.
    expect(records.length).toBe(3);
    expect(records.map(r => r.id)).toContain(101);
  });

});
