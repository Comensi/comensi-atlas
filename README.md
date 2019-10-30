# Community-atlas.net  - The Comensi Neighbourhood atlas platform

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)

This repository contains a [Gatsby](https://www.gatsbyjs.org) website for https://www.community-atlas.net. 

## Adding content

Content for the site can be added via the [CMS interface](https://www.community-atlas.net/admin). 
You will need need to ask for access first. 

Content can also be added as markdown files in the, or you can go a bit deeper by checking out the source and running it locally. For both of these methods, it's best to know a little about [Gatsby](https://www.gatsbyjs.org)


## Editing the base site
You will need to have node.js (2.8 or higher installed, along with yarn) 

### Access Locally
```
$ git clone https://github.com/Comensi/comensi-atlas.git
$ cd comensi-atlas
$ yarn
$ npm run start
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

