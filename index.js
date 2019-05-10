// This translates as: 

// 2 copies of the first book
// 2 copies of the second book
// 2 copies of the third book
// 1 copy of the fourth book
// 1 copy of the fifth book

// [2,2,2,1,1]

// position [0] is first title
// position [1] is second title
// position [2] is third title
// position [3] is fourth title
// position [4] is fifth title

export const calculateBasket = function (collection = []) {
    const booksOfFirstTitle = collection[0];
    const booksOfSecondTilte = collection[1];
    const booksOfThirdTitle = collection[2];
    const booksOfFourthTitle = collection[3];
    const booksOfFifthTitle = collection[4];

    return collection[0] * 8
}
