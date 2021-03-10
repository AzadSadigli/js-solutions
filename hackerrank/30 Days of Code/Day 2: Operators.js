/*
* @author Azad Sadigli
*
* Day 2: Operators
*
*/

function solve(meal_cost, tip_percent, tax_percent) {
    let tip_amount = meal_cost*tip_percent/100,
        tax_amount = meal_cost*tax_percent/100
    console.log(Math.round(meal_cost + tip_amount + tax_amount))
}