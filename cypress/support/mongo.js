const { MongoClient } = require('mongodb');

require('dotenv').config()

const mongoUri = process.env.MONGO_URI;

const client = new MongoClient(mongoUri);

async function connect() {
    await client.connect();
    return client.db('markdb'); // 'markdb' como string
}

async function disconnect() {
    await client.close(); // Método correto para fechar a conexão
}

module.exports = { connect, disconnect };
