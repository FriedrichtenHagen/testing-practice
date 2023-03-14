
({sum, capitalize, reverseString, calculator, analyzeArray} = require("./index"))


test("adds 1+2 to equal 3", ()=> {
    expect(sum(1,2)).toBe(3)
})

test("capitalize the first letter", ()=> {
    expect(capitalize("friedrich")).toBe("Friedrich")
})

test("reverse a string", ()=> {
    expect(reverseString("friedrich")).toBe("hcirdeirf")
})

test("test the addition", ()=> {
    expect(calculator.add(1,4)).toBe(5)
})
test("test the subtraction", ()=> {
    expect(calculator.subtract(1,4)).toBe(-3)
})
test("shift 1", ()=> {
    expect(calculator.caesarCipher("Friedrich", 1)).toBe("Gsjfesjdi")
})
test("shift 4", ()=> {
    expect(calculator.caesarCipher("Friedrich", 4)).toBe("Jvmihvmgl")
})
test("shift tilde", ()=> {
    expect(calculator.caesarCipher("~", 1)).toBe("!")
})
test("test average", ()=> {
    expect(analyzeArray([2,4,3,9]).average).toBe(4.5)
})
test("test min", ()=> {
    expect(analyzeArray([2,4,3,9]).min).toBe(2)
})
test("test max", ()=> {
    expect(analyzeArray([2,4,3,9]).max).toBe(9)
})
test("test length", ()=> {
    expect(analyzeArray([2,4,3,9]).length).toBe(4)
})
