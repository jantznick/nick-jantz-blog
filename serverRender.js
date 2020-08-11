import React from 'react';
import express from 'express';
import {
	StaticRouter
} from 'react-router-dom';
import {
	renderToString
} from 'react-dom/server';

import Routes from './app/routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
	const context = {};
	res.send(`<!DOCTYPE html>
				<head>
					<title>Nick Jantz Blog</title>
					<script src="/bundle.js" defer></script>
					<link href="/styles/style.css" rel="stylesheet">
				</head>
				<body>
					<div id="root">${renderToString(
						<StaticRouter location={req.url} context={context}>
							<Routes />
						</StaticRouter>)}
					</div>
				</body>
			</html>
    `);
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});