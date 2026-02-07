let a="PPrppamoooodKKKKUmarMOurya";

let freq={};

for(let i=0;i<a.length;i++){
    let ch=a[i];
    if(freq[ch]){
        freq[ch]++;
    }else{  
        freq[ch]=1;
    }
}
for(let i=0; i< a.length ;i++){
    if(freq[a[i]] === 1){
        console.log(a[i]);
        break;
    }
}