///////////////     HTML Helpers  ///////////////
const printTest = (desc, error) => {
    const card = document.createElement('div');
    card.className = `card ${!error ? 'bg-success' : 'bg-danger'}`;
    const cardBody = card.appendChild(document.createElement('div'));
    cardBody.className = 'card-body';
    const header = cardBody.appendChild(document.createElement('div'));
    header.className = 'd-inline';
    const h5 = header.appendChild(document.createElement('h5'));
    h5.className = 'me-2 d-inline';
    h5.innerText = !error ? 'PASS -' : 'FAIL -';
    const h5_2 = header.appendChild(document.createElement('h5'));
    h5_2.innerText = desc;
    h5_2.className = 'd-inline';
    document.getElementById(moduleName).appendChild(card);
    if (error) {
        const errorElement = cardBody.appendChild(document.createElement('div'));
        errorElement.className = 'card bg-light mt-3';
        const pre = errorElement.appendChild(document.createElement('pre'));
        const code = pre.appendChild(document.createElement('code'));
        code.innerText = error.stack;
    }
}

let moduleName = '';
const printModule = (module) => {
    const moduleElement = root.appendChild(document.createElement('div'));
    moduleElement.id = module;
    moduleElement.className = 'd-grid gap-2'
    moduleName = module;
    const h3 = moduleElement.appendChild(document.createElement('h3'));
    h3.innerText = module;
}

///////////////     DIY TESTER  ///////////////
const describe = (module, fn) => {
    printModule(module);
    console.info(`---- ${module} ----`);
    fn();
    console.info('\n\n');
}

const it = (desc, fn) => {
    try {
        fn();
        printTest(desc);
        console.log(`PASS - ${desc}`);
    } catch (error) {
        printTest(desc, error);
        console.log(`FAIL - ${desc}`);
        console.error(error);
    }
}

class _assert {
    isNot = false;
    constructor(value) {
        this.value = value;
    }
    not() {
        this.isNot = true;
        return this;
    }
    toBe(expected) {
        if(this.isNot && Object.is(this.value, expected)){
            throw new Error(`"\nNão esperado: ${JSON.stringify(expected)} \nRecebido: ${JSON.stringify(this.value)}\n`);
        }

        if (!Object.is(this.value, expected) && !this.isNot) {
            throw new Error(`"\nEsperado: ${JSON.stringify(expected)} \nRecebido: ${JSON.stringify(this.value)}\n`);
        }
    }

    toBeCloseTo(expected, precision = 2) {
        const roundedExpected = Number(expected.toFixed(precision));
        const roundedValue = Number(this.value.toFixed(precision));

        if(this.isNot && Object.is(roundedValue, roundedExpected)){
            throw new Error(`"\nNão esperado (aproximado): ${JSON.stringify(roundedExpected)} \nRecebido: ${JSON.stringify(roundedValue)}\n`);
        }

        if (!Object.is(roundedValue, roundedExpected) && !this.isNot) {
            throw new Error(`"\nEsperado: ${JSON.stringify(expected)} \nRecebido: ${JSON.stringify(this.value)}\n`);
        }
    }

    toEqual(expected) {
        if(this.isNot && JSON.stringify(this.value) === JSON.stringify(expected)){
            throw new Error(`"\nNão esperado: ${JSON.stringify(expected)} \nRecebido: ${JSON.stringify(this.value)}\n`);
        }
        
        if (JSON.stringify(this.value) !== JSON.stringify(expected) && !this.isNot) {
            throw new Error(`"\nEsperado: ${JSON.stringify(expected)} \nRecebido: ${JSON.stringify(this.value)}\n`);
        }
    }
}

const assert = (value) => new _assert(value);


// HTML
const root = document.getElementById('root');