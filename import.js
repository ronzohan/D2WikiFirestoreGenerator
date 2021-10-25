// Imports  
const { initializeApp, restore } = require('firestore-export-import');
const serviceAccount = require('./serviceAccount.json');

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('runes.json', 'utf8'));
const options = {
    firestore: {
        projectId: 'd2wiki'
    },
  }
  
initializeApp(serviceAccount);

restore('runes.json')
    .then(value => { console.log(value) })
    .catch(error => { console.log(error) });