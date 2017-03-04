"use strict"

class Matrix{

  constructor(size){
    this.size = size
    this.data = []
    this.build()
  }

  build(){
    for(var y = 0; y < this.size; y++){
      this.data[y] = []
      for(var x = 0; x < this.size; x++){
        this.data[y][x] = 0
      }
    }
  }

  get(y,x){
    return this.data[y][x]
  }

  set(y,x,v){
    this.data[y][x] = v
  }

  traverse(callback){
    for(var y = 0; y < this.size; y++)
      for(var x = 0; x < this.size; x++)
        callback(this.data[y][x],y,x)
  }

  reset(){
    this.traverse((v,y,x) => {
      this.set(y,x,0)
    })
  }

}

module.exports = Matrix
