 module.exports=function binarySearch(array, val) {
    let upper=array.length -1;
    let lower=0
    while(lower<=upper){
      let middel=lower+Math.floor((upper-lower)/2);
      if(array[middel]==val){
        return middel;
      }
      if(val<array[middel]){
        upper=middel -1;
      }else{
        lower=middel+1
      }
 
    }
    return -1;
 }