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
const calculator = {
    add: (sum1, sum2)=>{
        return sum1+sum2
    }, 
    subtract: (sub1, sub2)=>{
        return sub1-sub2
    },
    caesarCipher: (string, shiftFactor)=>{
        let shiftedString = [];
        for(let i=0; i<string.length; i++){
            shiftedString.push(string.charCodeAt(i)+shiftFactor)
        }
        let test = shiftedString.map(item => String.fromCharCode(item))
        let result = test.join("")
        return result
    }
}




module.exports ={sum, capitalize, reverseString, calculator}
