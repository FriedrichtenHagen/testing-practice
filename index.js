function sum(a, b){
    return a+b
}
function capitalize(string){
    // first letter is capitalized
    return string.charAt(0).toUpperCase() + string.slice(1)
}
function reverseString(string){
    let reversedString = "";
    for(let i=string.length-1; i>=0; i--){
        reversedString += string[i]
    }
    return reversedString
}
module.exports ={sum, capitalize, reverseString}
