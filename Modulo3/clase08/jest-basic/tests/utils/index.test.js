
const {square} = require('../../src/utils')

describe('utils', function(){
    describe('square', function(){
        test('Retorna el cuadrado de 2', () => {
            const input = 2
            const output = 4

            const result = square(input)

            expect(result).toEqual(output)
        })
    })
})