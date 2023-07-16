const { describe } = require('mocha');
const Calculator = require ('../calculator');
const {expect} = require ('chai');

describe ('testing sum of numbers', function () {
    let calculator;
    beforeEach (() => {
        calculator = new Calculator(); 
    });
    it ('sum of positive numbers', async () => {
        let result = await calculator.add (1, 2);
        expect(result).to.equal(3);
    });
    it ('sum of negative numbers', async () => {
        let result = await calculator.add (-1, -2);
        expect(result).to.equal(-3);
    });
    it ('the sum of a positive and a negative number', async () => {
        let result = await calculator.add (10, -20);
        expect(result).to.equal(-10);
    });
    it ('sum of positive number whith null', async () => {
        let result = await calculator.add (12, 0);
        expect(result).to.equal(12);
    });
    it ('sum of negative number whith null', async () => {
        let result = await calculator.add (-18, 0);
        expect(result).to.equal(-18);
    });
    it ('sum of float numbers', async () => {
        let result = await calculator.add (1.1, 2.2);
        expect(result).to.equal(3.3);
    });
    it ('sum of large  numbers', async () => {
        let result = await calculator.add (1234567890, 234567890);
        expect(result).to.equal(1469135780);
    });
});
describe('multiplication of numbers', function() {
    let calculator;
    beforeEach (() => {
        calculator = new Calculator(); 
    });
    it ('multiplication of positive numbers', async () => {
        let result = await calculator.multiply (123456789, 2456789);
        expect(result).to.equal(303307281190521);
    });
    it ('multiplication of negative numbers', async () => {
        let result = await calculator.multiply (-3, -3);
        expect(result).to.equal(9);
    });
    it ('multiplication of a positive and a negative number', async () => {
        let result = await calculator.multiply (2, -3);
        expect(result).to.equal(-6);
    });
    it ('multiplication of a positive whith null', async () => {
        let result = await calculator.multiply (26, 0);
        expect(result).to.equal(0);
    });
    it ('multiplication null by null', async () => {
        let result = await calculator.multiply (0, 0);
        expect(result).to.equal(0);
    });
    it ('multiplication of float numbers', async () => {
        let result = await calculator.multiply (45.612, 33.96);
        expect(result).to.equal(1548.98352);
    });
})
describe('difference of numbers', function() {
    let calculator;
    beforeEach (() => {
        calculator = new Calculator(); 
    });
    it ('difference of positive numbers', async () => {
        let result = await calculator.subtraction (2, 1);
        expect(result).to.equal(1);
    });
    it ('difference of negative numbers', async () => {
        let result = await calculator.subtraction (-2, -1);
        expect(result).to.equal(-1);
    });
    it ('difference of a positive and a negative number', async () => {
        let result = await calculator.subtraction (2, -1);
        expect(result).to.equal(3);
    });
    it ('difference of positive number whith null', async () => {
        let result = await calculator.subtraction (22, 0);
        expect(result).to.equal(22);
    });
    it ('difference of negative number whith null', async () => {
        let result = await calculator.subtraction (-33, 0);
        expect(result).to.equal(-33);
    });
    it ('difference of null whith positive number', async () => {
        let result = await calculator.subtraction (0, 22);
        expect(result).to.equal(-22);
    });
    it ('difference of null whith negative number', async () => {
        let result = await calculator.subtraction (0, -33);
        expect(result).to.equal(33);
    });
    it ('difference of float numbers', async () => {
        let result = await calculator.subtraction (3.3, 2.2);
        expect(result).to.equal(1.1);
    });
})
describe ('division of numbers', function() {
    let calculator;
    beforeEach (() => {
        calculator = new Calculator(); 
    });
    it ('division of positive numbers', async () => {
        let result = await calculator.divide (4, 2);
        expect(result).to.equal(2);
    });
    it ('division of negative numbers', async () => {
        let result = await calculator.divide (-3, -3);
        expect(result).to.equal(1);
    });
    it ('division of a positive and a negative number', async () => {
        let result = await calculator.divide (652, -10);
        expect(result).to.equal(-65.2);
    });
    it ('division of a positive whith null', async () => {
        let result = await calculator.divide (26, 0);
        expect(result).to.equal(Infinity);
    });
    it ('division null whith positive number', async () => {
        let result = await calculator.divide (0, 356);
        expect(result).to.equal(0);
    });
    it ('division of a float number by an integer', async () => {
        let result = await calculator.divide (123.45, 2);
        expect(result).to.equal(61.725);
    });
    it ('division of a float number by a float number', async () => {
        let result = await calculator.divide (24.68, 2.5);
        expect(result).to.equal(9.872);
    });
})
describe('exponentiation of numbers', function() {
    let calculator;
    beforeEach (() => {
        calculator = new Calculator(); 
    });
    it ('exponentiation of positive numbers', async () => {
        let result = await calculator.exponentiation (3);
        expect(result).to.equal(9);
    });
    it ('exponentiation of negative numbers', async () => {
        let result = await calculator.exponentiation (-12);
        expect(result).to.equal(144);
    });
    it ('exponentiation of null', async () => {
        let result = await calculator.exponentiation (0);
        expect(result).to.equal(0);
    });
    it ('exponentiation of a float number', async () => {
        let result = await calculator.exponentiation (12.3);
        expect(result).to.equal(151.29);
    });
});
