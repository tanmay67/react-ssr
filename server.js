require('babel-register')({
  presets: ['react'],
});
require('es6-promise').polyfill();
import 'babel-polyfill';
import express from 'express';
import React from 'react';
import bodyparser from 'body-parser';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import App from './src/app';
import fetch from 'isomorphic-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(express.static('build/public'));

app.get('/api/news', (req, res) => {
  res.json([
    {
      id: 1,
      upvotes: 257,
      title: 'Fianto Duri, the complete tutorial',
      author: 'RubeusH',
      date: new Date(Date.now() - 15000000),
    },
    {
      id: 2,
      upvotes: 221,
      title: 'Untransfiguration classes to become compulsory at Hogwarts',
      author: 'Baddock',
      date: new Date(Date.now() - 45000000),
    },
    {
      id: 3,
      upvotes: 198,
      title: 'Cracking the Aurologist Interview ',
      author: 'Hetty',
      date: new Date(Date.now() - 900000),
    },
    {
      id: 4,
      upvotes: 171,
      title: 'ASK WN: What do you use to digitalize your scrolls?',
      author: 'Alphard',
      date: new Date(Date.now() - 40000000),
    },
    {
      id: 5,
      upvotes: 166,
      title: 'The Pragmatic Dragon Feeder',
      author: 'Baruffio',
      date: new Date(Date.now() - 10000000),
    },
    {
      id: 6,
      upvotes: 145,
      title: 'The complete quidditch statistics',
      author: 'Hbeery',
      date: new Date(Date.now() - 5000000),
    },
    {
      id: 7,
      upvotes: 126,
      title: 'Ordinary Wizarding Levels study guide',
      author: 'BathBabb',
      date: new Date(Date.now() - 600000),
    },
    {
      id: 8,
      upvotes: 114,
      title: 'Is muggle-baiting ever acceptable?',
      author: 'Falco',
      date: new Date(Date.now() - 60000000),
    },
    {
      id: 9,
      upvotes: 74,
      title: 'Conserving waterplants cheatsheet.',
      author: 'Otto',
      date: new Date(Date.now() - 3000000),
    },
    {
      id: 10,
      upvotes: 59,
      title: 'Could wizards prevent WW3?',
      author: 'Cuthbert',
      date: new Date(Date.now() - 6000000),
    },
    {
      id: 11,
      upvotes: 46,
      title: 'Show WN: Wand-Extinguishing Protection',
      author: 'Humphrey22',
      date: new Date(Date.now() - 50000),
    },
    {
      id: 12,
      upvotes: 30,
      title: 'Do you still use Alarte Ascendare?',
      author: 'Bellatrix1',
      date: new Date(Date.now() - 6000000),
    },
    {
      id: 13,
      upvotes: 10,
      title: 'Mailing lists WN readers ought to know about?',
      author: 'Dracod',
      date: new Date(Date.now() - 60000),
    },
    {
      id: 14,
      upvotes: 8,
      title: 'How to tell which spell used on a bug?',
      author: 'Lupin',
      date: new Date(),
    },
  ]);
});

app.get('*', async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App data={data} />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  const html = `

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
            ${helmet.title.toString()}
    </head>
    <body>
      <div id="root">
      ${content}
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

      <script src="client_bundle.js"></script>
      
    </body>
    </html>

  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`App running ${PORT}`);
});
