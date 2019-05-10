const {calculateBasket} = require('./index');

// a series of 5 books
// pricing model: 

describe('when all books are of the same title', () => {
    test('one book of any of the 5 titles is 8 euros', () => {
        expect(calculateBasket([1])).toBe(8)
    });
});

// 2 books of the same title are 16 euros
// 3 books of the same title are 24 euros
// 4 books of the same title are 32 euros
// 5 books of the same title are 40 euros


// if you buy 2 different titles of the series you get 5% on those 2 titles
// if you buy 3 different titles, you get a 10% discount
//if you buy 4 different titles, you get a 20% discount
// if you buy the whole collection of 5 titles, you get 25% discount

// if you buy 4 books of which 3 are different titles, you get a 10% discount
// on the 3 that form part of the set, but the fourth book still costs 8 EUR
  


