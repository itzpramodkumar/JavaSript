function reverseWords(str){
    let words=str.split(" ");
    let result=[];
    for (let i = words.length-1;i>=0; i--){
        result.push(words[i]);

    }
    return result.join(" ");

}
console.log(reverseWords("mera naam pramod mourya hai"));
