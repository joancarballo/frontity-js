# frontity-js
Joan Carballo's proves site for Frontity Demo from JSNation Workshop directed by Michael Burridge https://twitter.com/michaelburridge

![Frontity image - Joan Carballo](https://repository-images.githubusercontent.com/272520615/0d56b280-afd2-11ea-90a1-bd470d6b1e79)

## How To

### Launch a development server

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

The site will automatically reload if you make changes inside the `packages` folder. You will see the build errors in the console.

> Have a look at our [Quick Start Guide](https://docs.frontity.org/getting-started/quick-start-guide)

### Create a production-ready build

```
npx frontity build
```

Builds the app for production to the `build` folder.

This will create a `/build` folder with a `server.js` (a [serverless function](https://vercel.com/docs/v2/serverless-functions/introduction)) file and a `/static` folder with all your javascript files and other assets.

Your app is ready to be deployed.

> Get more info about [Frontity's architecture](https://docs.frontity.org/architecture)

### Deploy

With the files generated in the _build_ you can deploy your project

#### As a node app

Use `npx frontity serve` to run it like a normal Node app.

This command generates (and runs) a small web server that uses the generated `server.js` and `/static` to serve your content

#### As a serverless service

Upload your `static` folder to a CDN and your `server.js` file to a serverless service, like Now or Netlify.

> Get more info about [how to deploy](https://docs.frontity.org/deployment) a Frontity project

---
