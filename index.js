#! /usr/bin/env node
const path = require('path')
const exec = require('child_process').exec;

//shared by each fn, just close over
const destinationPath = path.dirname(require.main.filename);
const templateName = process.argv[2];
const sourcePath = (process.env.NODE_ENV === 'TEST') ? 'assets' : 'node_modules/start-bootstrap-node/assets';
const assetPath = path.join(destinationPath, sourcePath, templateName);

function isValidTemplate() {
  exec(`ls ${assetPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`could not find template name ${templateName}`);
      return false;
    }      
    return true;
  });
}

function message() {
    exec(`echo "copied files/folders for template ${templateName} to your project."`, (error, stdout, stderr) => {
      console.log(stdout);
    });
}

function copyFiles() {
  if (!isValidTemplate) {
    return;
  }
  const assets = `${assetPath}/*`;
  exec(`cp -r ${assets} ${destinationPath};`, 
      (error, stdout, stderr) => {
      if (error) {
        console.error(`error while getting pwd: ${error}`);
        return;
      }
      message();
  })
}

isValidTemplate()
console.log("DESTINATION: ", destinationPath)
console.log("template", templateName)
console.log("assetPath", assetPath)