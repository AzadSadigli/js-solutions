/*
* @author Azad Sadigli
*
* Day 10: Binary Numbers
*
*/

function main() {
    const n = parseInt(readLine(), 10);
    let binary_n = n.toString(2),
        cnt = 0,cnt_max = 0;
    for(let i = 0;i<binary_n.length;i++){
        if(binary_n[i] === "1"){
            cnt++
        }else{
            cnt = 0
        }
        cnt_max = cnt > cnt_max ? cnt : cnt_max;
    }

    console.log(cnt_max)
}