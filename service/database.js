const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('startup');  // I need to make sure that client.db('startup') or something
const collection = db.collection('users'); // here is the collection called users

async function main() {
  try {
    // add all the following database code here - MAGIC HERE WITH CREATING USERS, CALLING THE DATABASE
  const user = { // This is a hardcoded example
  name: 'Clara',
  sounds: 'sound object goes here?'
};
const insertResult = await collection.insertOne(user);
const query = { name: 'Clara' };
await collection.updateMany(query, { $set: { sounds: 'changes' } });
  } finally {
    client.close();
  }
}

main();