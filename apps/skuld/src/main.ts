import express from 'express';
import * as path from 'path';
import { Task } from '@schedulus/shared';

import Surreal from 'surrealdb.js';

const db = new Surreal('http://127.0.0.1:8000/rpc');

(async() => {
	try {
		// Signin as a namespace, database, or root user
		await db.signin({
			user: 'root',
			pass: 'root',
		});

    await db.use('test', 'test');

    // Select all people records
		let people = await db.select("person");

    console.log(people)

	} catch (e) {
		console.error('ERROR', e);
	}
})()

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ id: 'test-id' } as Task);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
