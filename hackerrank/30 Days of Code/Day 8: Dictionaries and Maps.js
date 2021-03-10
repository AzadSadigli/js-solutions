/*
* @author Azad Sadigli
*
* Day 8: Dictionaries and Maps
*
*/

function processData(input) {
    let list = input.split("\n"),new_list = [],res = '';
    for(let i = 1;i<=list[0];i++){
        let subarr = list[i].split(" ");
        new_list[subarr[0]] = subarr[1]
    }

    for(let i = (+list[0] + 1);i < list.length;i++){
        let sub = list[i],sub_res = '';
        if(new_list[sub]){
            sub_res = `${res ? '\n' : ''}${sub}=${new_list[sub]}`
        }
        if(!sub_res){
            sub_res = `${res ? '\n' : ''}Not found`;
        }
        res += sub_res;
    }
    
    console.log(res)
} 

processData("3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry")
