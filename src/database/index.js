// Set up database connection
const { Client } = require('pg');

const client = new Client({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to PostgreSQL');
  }
});
module.exports = client;


// these env variables aren't set so there's nothing to connect to...
  // how do i set it up?
  // need to do online?

// after set up need to import client wherever interacting with db
  // probably best to create new dir for this (app/api?)

  // pages/api/someEndpoint.js
  /**export default async function handler(req, res) {
    try {
      const { rows } = await client.query('SELECT * FROM your_table');
      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }**/