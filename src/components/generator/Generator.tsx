import React from 'react';

const Generator = () => {
    /* -------------------------------
            GENERATOR EXERCISES
       ------------------------------- */

    // generator function test
    function* generate() {
        yield 1;
        yield 2;
        yield 3;

        return 4;
    }

    const test = generate();

    //start generator function
    console.log('generatore', test.next());
    // suspended function and do something (console.log(after 1))
    console.log('after 1');
    // start another next
    console.log('generatore', test.next());
    // suspended function and do something (console.log(after 2))
    console.log('after 2');
    // start another next
    console.log('generatore', test.next());
    // suspended function and do something (console.log(after 3))
    console.log('after 3');
    // start another next
    console.log('generatore', test.next());
    // finished function
    console.log('after 4', 'true means that generator function has finished');

    //generator function multiplying numbers
    function* testGenerator(max: number) {
        let n = 0;
        while(n < max) {
            n++;
            yield n * n;
        }
    }

    const numbers = testGenerator(10);
    let renderNumbers = [];

    // @ts-ignore
    for (const n of numbers) {
        console.log(n);
        renderNumbers.push(n);
    }

    // takes random unique names
    function* uniqueNameGenerator(array: string[]) {
        const available = array;

        while (available.length) {
            const randomIndex = Math.floor(Math.random() * available.length);

            const value = available[randomIndex];
            available.splice(randomIndex, 1);

            yield value;
        }
    }

    const names = ['magda', 'karol', 'hubert', 'ola'];
    const uniqueRandomName = uniqueNameGenerator(names);

    let renderNames = [];

    // @ts-ignore
    for (const name of uniqueRandomName) {
        console.log(name);
        renderNames.push(name);
    }

    return (
        <div>
            <h6>Unique random names</h6>
            {renderNames.map(name => <p key={Math.random()}>{name}</p>)}
            <h6>multiplying numbers</h6>
            {renderNumbers.map(number => <p key={Math.random()}>{number}</p>)}
        </div>
    );
}

export default Generator;