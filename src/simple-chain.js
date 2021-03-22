const chainMaker = {
  'chain':[],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position<=0 || position>this.chain.length){
      this.chain=[];
      throw Error;
    }
    else{
      this.chain.splice(position-1,1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result='';
    for(let i=0;i<this.chain.length;i++){
      result+=`( ${this.chain[i]} )~~`;
    }
    let arr=result.split('');
    arr.splice(result.length-2,2);
    this.chain=[];
   return arr.join(''); 
  }
};

module.exports = chainMaker;
