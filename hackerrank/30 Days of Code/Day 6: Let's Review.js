/*
* @author Azad Sadigli
*
* Day 6: Let's Review
*
*/

function processData(input) {
    let strings = input.split("\n"),total_res = '';
    for(let i = 1;i< strings.length; i++){
        let sub_string1 = '',sub_string2 = '',
            br = i < (strings.length - 1) ? '\n' : '';
        for(let j = 0;j<strings[i].length;j++){
            sub_string1 += j % 2 === 0 ? strings[i][j] : '';
            sub_string2 += j % 2 > 0 ? strings[i][j] : '';
        }
        total_res += sub_string1 + ' ' + sub_string2 + br
    }
    console.log(total_res)
} 