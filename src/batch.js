const { database } = require('./db');

/**
 * Process a list of user IDs and save them to the database.
 * @param {number[]} userIds - List of IDs to process
 */
async function processBatch(userIds) {
  console.log("Starting batch process...");

  // THE TRAP: The Async Lie
  // Syntax looks correct. AI will say this is fine.
  // BUT: forEach does NOT wait for promises. It fires and forgets.
  userIds.forEach(async (id) => {
    // Simulate heavy lifting
    const processedData = { id, timestamp: Date.now() };
    
    // Simulate async DB save (takes 100ms)
    await database.save(processedData);
  });

  console.log("Batch process complete.");
  return { status: 'complete', count: userIds.length };
}

module.exports = { processBatch };
// Trigger CI
