/*
* @author Azad Sadigli
*
* Day 3: Intro to Conditional Statements
*
*/

function main() {
    const N = parseInt(readLine(), 10);
    let type = N % 2 === 0;
    let res = N >= 2 && N <= 5 && type ? 'Not Weird' : 'Weird';
    res = N >= 6 && N <= 20 ? 'Weird' : res;
    res = N > 20 && type ? 'Not Weird' : res;
    console.log(res);
}