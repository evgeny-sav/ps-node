# Library App
Learning: PluralSight Node.js Path/Node.js + Express Course by Jonathan Mills

## Requirements:
- NodeJS >= 7.1.0
- MongoDB v3.2

to instal all dependencies
```
$ npm install
$ bower install
```

to run MongoDB Server:
```
$ npm run mongo-server
```
to run Mongo:
```
$ npm run mongo
```

to run Node.js server
```
$ gulp serve            -- uses nodemon to run server and restarts server if detects any changes in JS files
```

Gulp tasks available
```
$ gulp codestyle         -- uses JSCS and JSHint to check Code Style
$ gulp inject            -- injects all JS and CSS dependencies into HTML file
```
