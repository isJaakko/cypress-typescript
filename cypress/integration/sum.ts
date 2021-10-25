import { sum } from '../../src'

describe('test ts alias', () => {
    it('sum', () => {
        expect(sum(1,1)).to.eq(2)
    })
})