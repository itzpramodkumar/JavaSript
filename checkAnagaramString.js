function isAnagram(str1,str2){
    if(str1.length !== str2.length) return false;
    let count={};
    for(let ch of str1){
        count[ch]=(count[ch] || 0)+1;
    }
    for (let ch of str2){
        if(!count[ch])return false;
        count[ch]--;
    }
    return true;
}
console.log(isAnagram("listen","silent"));
console.log(isAnagram("hello","world"));
 