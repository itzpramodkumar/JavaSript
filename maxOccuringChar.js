 function maxOccuring(str){
let freq={};
let maxCount=0;
let maxChar=""
for ( let ch of str){
    freq[ch]=(freq[ch] || 0)+1;
    if(freq[ch]>maxCount){
        maxCount=freq[ch];
        maxChar=ch;
    }
}
return maxChar;
 }
 console.log(maxOccuring("javaScript"));