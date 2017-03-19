#!/usr/bin/env node
const path = require('path')
const destinationPath = path.dirname(require.main.filename);
const templateName = argv[0];
const assetPath = path.join(destinationPath, 'node_modules/start-bootstrap-node/assets', templateName);

const exec = require('child_process').exec;

function isValidTemplate() {
  exec(`ls ${assetPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`could not find template name ${templateName}`);
      return false;
    }      
  });
  return true;
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
  })
}