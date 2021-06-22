'use strict';

module.exports =function leftJoin(hash1, hash2) {

  let leftJoin = [];
  for(let i = 0; i < hash1.buckets.length -1; i++) {
    let localarr = [];
    if (hash1.buckets[i] !== undefined) {
      let key = (Object.keys(hash1.buckets[i].head.value)[0]);
      localarr.push(key);
      localarr.push(hash1.buckets[i].head.value[key]);
      if (hash2.contains(key)) {
        localarr.push(hash2.get(key));
      } else {
        localarr.push(null);
      }
      leftJoin.push(localarr);
    }
  }
  return leftJoin;
}

