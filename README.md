## plantapp-iso

This is deployed on on Heroku at [https://plantapp-iso.herokuapp.com/].

Initialized with the React Starter Kit boilerplate (see the [RSK README](README_RST.md)).

- It's an [isomorphic] React app.
- Uses [GraphQL] for some of the content.
- The Plants data is served via an express api at [https://github.com/hillscottc/datahub]

### Run (dev)
```
npm start
```
The app will open your browser to [http://localhost:3001/]. Running ports:
> http://localhost:3000/ — Node.js server (build/server.js)
> http://localhost:3000/graphql — GraphQL server and IDE
> http://localhost:3001/ — BrowserSync proxy with HMR, React Hot Transform
> http://localhost:3002/ — BrowserSync control panel (UI)


### Deploy
```
$ npm run build -- --release
$ cd build
$ git commit -am 'latest build'
$ git push heroku master
```

[isomorphic]: http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/  
[GraphQL]: http://graphql.org/
