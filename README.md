# start-bootstap-node

##TODO (WIP)
- Write script that copies a template's `routes/`, `views/`, and `public` folders to user's project `/`
  - npm install --save-dev start-bootstrap-node
  - use-template {templateName}
  Open question: what do we do if folders/files already exist in user's local? Should we name them "${templateName}_routes" to be minimize conflicts and abort if conflicts exist?
- Optionally copy app.js file -- which passes the template_name as an env variable -- and replace 
  - use-template {templateName} --include app.js
Just in general make the primary use case a new project, but avoid potential conflicts when a user has local files


## Commands
1. Try out: 
`TEMPLATE=${template_name} node app.js`
Where template name is one of the following:
- creative
- new age
- etc.

Then nav to localhost:3000
