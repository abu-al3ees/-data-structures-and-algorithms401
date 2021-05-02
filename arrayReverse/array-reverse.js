function reverseArray(arr) {
 
    let localarr = [];
    for(let i = arr.length -1; i >= 0; i--){
      localarr[localarr.length] = arr[i];
    }
    return localarr;
  }