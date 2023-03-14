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
            let codePoint = string.codePointAt(i)+shiftFactor
            if(codePoint>126){
                codePoint -= 94
            }
            shiftedString.push(codePoint)
        }
        let test = shiftedString.map(item => String.fromCodePoint(item))
        let result = test.join("")
        return result
    },

}
function analyzeArray(array){
    let average = 0
    let min = Infinity;
    let max = -Infinity;

    for(let i=0; i<array.length; i++){
        average += array[i]
        if(array[i]<min){
            min = array[i]
        }
        if(array[i]>max){
            max = array[i]
        }
    }
    average = average/array.length



    let info = {
        average: average,
        min: min,
        max: max,
        length: array.length,
    }
    return info
}

// UTF8 code points: 33-126

module.exports ={sum, capitalize, reverseString, calculator, analyzeArray}
