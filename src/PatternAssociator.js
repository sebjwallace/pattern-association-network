"use strict"

var Matrix = require('./Matrix.js')

class PatternAssociator{

  constructor(size){

    this.weights = new Matrix(size)

  }

  learn(yv,xv){

    this.weights.traverse((v,y,x) => {
      var a = yv[y] && xv[x] ? 1 : 0
      this.weights.set(y,x,v+a)
    })

  }

  recall(yv){

    var ov = []

    this.weights.traverse((v,y,x) => {
      var a = yv[y] && v ? 1 : 0
      ov[x] = (ov[x] || 0) + a
    })

    for(var i = 0; i < ov.length; i++)
      ov[i] = ov[i] >= 2 ? 1 : 0

    return ov

  }

}

module.exports = PatternAssociator
