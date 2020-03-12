var BayesClassifier = require('bayes-classifier');
var classifier = new BayesClassifier();
var fs = require('fs');
var good = require('./good');
var bad = require('./bad');
//console.log(good);
//console.log(bad);
 
classifier.addDocuments(good.good, `good`)
classifier.addDocuments(bad.bad, `bad`)
classifier.train()
console.log(classifier.classify(`google.com`)) 
var storeFile = `${__dirname}/model.json`
fs.writeFileSync(storeFile, JSON.stringify(classifier))
 
