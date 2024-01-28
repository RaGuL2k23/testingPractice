import { capitalize, calculator , reverseString,caesarCipher,analyzeArray} from "./testingPracticeProject";

test(" capitalize return capitalized String", () => {
  expect(capitalize("rocky2005")).toBe("ROCKY2005");
});

test("reverseString return revesed string", () => {
  expect(reverseString("rocky")).toBe("ykcor");
});
test("calculator obj to have a,s,d,m", () => {
  expect(calculator.add(4, 4)).toBe(8);
  expect(calculator.subtract(40,30)).toBe(10);
  expect(calculator.multipy(4, 2)).toBeCloseTo(8);
  expect(calculator.divide(48, 2)).toBeCloseTo(24);
});

test('caesarCipher of 4',()=>{
    expect(caesarCipher('ragul',4)).toBe('VEKYP');
})

test('analise array ',()=>{
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.min).toBe(1);expect(object.max).toBe(8);
    expect(object.average).toBe(4);expect(object.length).toBe(6);
})