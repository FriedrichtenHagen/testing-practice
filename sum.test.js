({sum, capitalize, reverseString} = require("./index"))


test("adds 1+2 to equal 3", ()=> {
    expect(sum(1,2)).toBe(3)
})

test("capitalize the first letter", ()=> {
    expect(capitalize("friedrich")).toBe("Friedrich")
})

test("reverse a string", ()=> {
    expect(reverseString("friedrich")).toBe("hcirdeirf")
})