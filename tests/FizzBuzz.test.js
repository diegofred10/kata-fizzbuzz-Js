import { FizzBuzz } from "../src/scripts/FizzBuzz";

describe('FizzBuzz', () => {
    test('should return Fizz if divisible by three', () => {
        //Given 
        let numb =3;
        //When
        const result = FizzBuzz(numb);
        //Then
        expect(result). toBe("Fizz");
         
    });
    test('should return Buzz if divisible by five',()=>{
        let numb = 5
        const result = FizzBuzz(numb);
        expect(result).toBe("Buzz");
    });
    test('should return FizzBuzz if divisible and five',() => {
        let numb = 15;
        const result = FizzBuzz(numb);
        expect(result).toBe("FizzBuzz");
    });

});