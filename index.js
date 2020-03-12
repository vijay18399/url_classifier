var BayesClassifier = require('bayes-classifier');
var classifier = new BayesClassifier();
var fs = require('fs');
var good = require('./good');
var bad = require('./bad'); 
classifier.addDocuments(good.good, `good`)
console.log("Learning Good Urls Completed") 
classifier.addDocuments(bad.bad, `bad`)
console.log("Learning Bad Urls Completed") 
console.log("Training Strated") 
classifier.train()
console.log("training Completed") 
console.log(classifier.classify(`google.com`)) 
var storeFile = `${__dirname}/model.json`
fs.writeFileSync(storeFile, JSON.stringify(classifier))
console.log("Execution Completed") 
 
