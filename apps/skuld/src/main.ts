import express from 'express';
import * as path from 'path';
import router from './router';

import Surreal from 'surrealdb.js';

// const db = new Surreal('http://127.0.0.1:8000/rpc');

(async() => {
	try {
    Surreal.Instance.connect('http://127.0.0.1:8000/rpc');
		// Signin as a namespace, database, or root user
		await Surreal.Instance.signin({
			user: 'root',
			pass: 'root',
		});

    await Surreal.Instance.use('test', 'test');

    let task = await Surreal.Instance.create("task", {
      name: 'test',
      completed: []
    })

    // Select all people records
		let people = await Surreal.Instance.select("person");

    console.log(people)

	} catch (e) {
		console.error('ERROR', e);
	}
})()

const app = express();

// app.use(
//   "/docs",
//   express.static('node_modules/swagger-ui-dist/', {index: false}),
//   swaggerUi.serve,
//   swaggerUi.setup(undefined, {
//     swaggerOptions: {
//       url: "/assets/swagger.json",
//     },
//   })
// );

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(router);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
