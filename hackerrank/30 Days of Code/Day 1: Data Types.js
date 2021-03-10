/*
* @author Azad Sadigli
*
* Day 1: Data Types
*
*/


function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    let n_i = parseInt(readLine()),
        n_d = parseFloat(readLine()),
        n_s = readLine();
    // Read and save an integer, double, and String to your variables.

    // Print the sum of both integer variables on a new line.
    console.log(n_i + i)
    // Print the sum of the double variables on a new line.
    console.log((n_d + d).toFixed(1))
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + n_s)

}