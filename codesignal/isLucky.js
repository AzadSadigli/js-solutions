/*
* @author Azad Sadigli
*
* isLucky
*
*/

function isLucky(n) {
    let part_one = 0,
        part_two = 0,
        string_n = n.toString();
    for(let i = 0;i < string_n.length;i++){
        if(i < string_n.length/2){
            part_one += +string_n[i];
        }else{
            part_two += +string_n[i];
        }
    }
    return part_one === part_two
}