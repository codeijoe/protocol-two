// A simple in-memory database simulation
const storage = [];

const database = {
  save: (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        storage.push(data);
        resolve(true);
      }, 50); // Delay 50ms to simulate IO
    });
  },
  getAll: () => storage,
  clear: () => { storage.length = 0; }
};

module.exports = { database };
