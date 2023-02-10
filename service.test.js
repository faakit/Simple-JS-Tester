///////////////     TESTS       ///////////////
describe('formataCpf', () => {
    it('should be able to formatCpf', () => {
        const cpf = '12345678900';
        const formattedCpf = formataCpf(cpf);
        assert(formattedCpf).toBe('123.456.789-00');
    })
})

describe('validaCpf', () => {
    it('should be true on valid CPF', () => {
        const valid = validaCpf('86830314038');
        const valid2 = validaCpf('61906828040')

        assert(valid).toBe(true);
        assert(valid2).toBe(true);
        assert(valid2).not().toBe(false);
    })

    it('should be false on invalid CPF', () => {
        const notValid = validaCpf('12345678900');
        const notValid2 = validaCpf('22a');
        const notValid3 = validaCpf('11111111111')
        const notValid4 = validaCpf('86830314032')

        assert(notValid).toBe(false);
        assert(notValid2).toBe(false);
        assert(notValid3).toBe(false);
        assert(notValid4).toBe(false);
    })

    it('should fail', () => {
        assert(true).toBe(false);
    })
})


describe('encheLinguiça', () => {
    it('must return this array', () => {
        const result = stringArray();

        assert(result).toEqual(['hello', 'world']);
    })

    it('must return something close to 0.3', () => {
        const result = strangerFloats();

        assert(result).toBeCloseTo(0.3);
    })

    it('must not be 0.3 (:/)', () => {
        const result = strangerFloats()

        assert(result).not().toBe(0.3);
    })

    it('must fail on wrong not', () => {
        const result = strangerFloats()

        assert(result).not().toBeCloseTo(0.3);
    })
})


describe('simple tests', () => {
    it('should be true', () => {
        assert(true).toBe(true);
    });

    it('should be equal arrays', () => {
        const array = [1, 2, 3];
        const array2 = [1, 2, 3];

        assert(array).toEqual(array2);
    });

    it('0.1 + 0.2 should be 0.3', () => {
        assert(0.1 + 0.2).toBeCloseTo(0.3);
    });

    it('should fail', () => {
        assert(0.1 + 0.2).toBe(0.3);        
    });
})