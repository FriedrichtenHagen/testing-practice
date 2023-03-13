

({sum, capitalize, reverseString, calculator} = require("./index"))


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
test("test the caesar cypher", ()=> {
    expect(calculator.caesarCipher("Friedrich", 1)).toBe("Gsjfesjdi")
})
test("test the caesar cypher", ()=> {
    expect(calculator.caesarCipher("Friedrich", 4)).toBe("Jvmihvmgl")
})
test("test the caesar cypher", ()=> {
    expect(calculator.caesarCipher("Friedrich", 26)).toBe("Eqhdcqhbg")
})