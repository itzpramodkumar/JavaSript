function removeDuplicate(str){
    let seen={};
    let result="";
    for(let ch of str){
        if(!seen[ch]){
            seen[ch]=true;
            result=result+ch;

        }
    }
    return result;
}
console.log(removeDuplicate("programming"));
