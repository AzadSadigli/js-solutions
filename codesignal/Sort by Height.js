/*
* @author Azad Sadigli
*
* Sort by Height
*
*/


function sortByHeight(a) {
    let trees_indexes = [],
        subcnt = 0,
        sorted_list = [],
        arr_length = a.length;
    a.map((v,i) => {
        v === -1 ? trees_indexes.push(i) : ''
    })
    a = a.filter(v => v !== -1).sort(function(el1,el2){return el1 - el2});
    if(trees_indexes.length){
        for(let i = 0;i < arr_length;i++){
            if(trees_indexes.includes(i)){
                subcnt++
                sorted_list.push(-1)
            }else{
                sorted_list.push(a[i - subcnt])
            }
        }
    }else{
        sorted_list = a;
    }
    
    return sorted_list
}