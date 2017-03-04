"use strict"

var PatternAssociator = require("./src/PatternAssociator.js")

var p = new PatternAssociator(8)
p.learn([1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,1])
console.log(p.recall([1,1,1,1,0,0,0,0]))
