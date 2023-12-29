/*
var express = require('express')
var morgan=require('morgan');

var path=require('path');


var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

*/
var express = require('express');
var morgan = require('morgan');
var path = require('path');



var app = express();
app.use(morgan('combined'));

var articles= {
  'article-one': {
    heading:'HOME',
    content:'Home'
  },
  'article-two': {
    heading:'SUN',
    content:'Sun'
  },
  'article-three': {
    heading:'PLANETS',
    content:'Planets'
  },
  'article-four': {
    heading:'DWARF PLANETS',
    content:'Dwarf Planets'
  },
  'article-five': {
    heading:'ASTEROID BELT',
    content:'Asteroid Belt'
  }
};

function createTemplate(data) {
var heading= data.heading;
var content= data.content;
var HTMLtemplate=
`
<html>
    <head>

        <link href="/ui/style.css" rel="stylesheet"/>

    </head>
    <body background='https://ak6.picdn.net/shutterstock/videos/5498786/thumb/1.jpg?i10c=img'>
        <div class="container">
        <div>
           <a href="/article-one">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div id="content">
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return HTMLtemplate;
}

app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var port = 8080;
app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});
