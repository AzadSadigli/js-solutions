/*
* @author Azad Sadigli
*
* Day 9: Recursion 3
*
*/

function factorial(n) {
    let factorial = 1;
    for(let i = 1;i<=n;i++){
        factorial *= i;
    }
    return factorial
}