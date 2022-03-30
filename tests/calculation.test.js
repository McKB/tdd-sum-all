// describe
// this is a group of tests
const describe = require('mocha').describe

// it
// each individual test
const it = require('mocha').it

// expect
// part 3 of each test
const expect = require('chai').expect

// define function to be tested
const sumAll = require('../calculation.js')

describe('calculation.js test suite', () => {
    describe('sumAll tests', () => {
        it('returns the sum of the numbers in the array provided correctly', () => {
            // step one: set up MOCK data
            const mockData = [10, 20, 30, 40]
            const expectedResult = 100

            // use mock data in actual function and record result
            const actualResult = sumAll(mockData)

            // compare the result and expected result in an ASSERTION
            expect(actualResult).to.equal(expectedResult)
        })
        it('it works with negative numbers', () => {
            const mockData = [5, -5, 250]
            const expectedResult = 250
            const actualResult = sumAll(mockData)

            expect(actualResult).to.equal(expectedResult)
        })
    })
})
