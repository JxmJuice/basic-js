module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth=1,currentDepth;
    arr.forEach(el => {
      currentDepth=1;
      if(Array.isArray(el)){
        currentDepth+=this.calculateDepth(el);
        if(currentDepth>maxDepth){
          maxDepth=currentDepth;
        }
      }
    });
    return maxDepth;
  }
};
