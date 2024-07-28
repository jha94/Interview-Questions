const isSubsequence = (s, t) => {
    if(s.length>t.length) return false;
    let subIndex = 0;
    for(let index=0;index<t.length;index++){
        if(s[subIndex]===t[index]){
            subIndex++
        }
    }
    return subIndex===s.length
}

console.log(isSubsequence("axc", "ahbgdc"))