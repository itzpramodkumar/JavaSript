function capitalWord(str){
    let words=str.toLowerCase().split(" ");
    let result=[];
    for(let word of words){
        result.push(word[0].toUpperCase()+word.slice(1));
    }
    return result.join(" ");

}
console.log(capitalWord("mera naam pramod mourya hai"))