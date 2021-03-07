/*
* @author Azad Sadigli
*
* commonCharacterCount
*
*/

function commonCharacterCount(s1, s2) {
    let s1_array = s1.split(''),
        s2_array = s2.split(''),
        cnt = 0,
        already_choosen = [];
    
    let countElement = (arr,elem) => {
        let cnt = 0;
        arr.map(v => {cnt += v === elem ? 1 : 0; })
        return cnt
    }

    s2_array.map(v => {
        if(s1_array.includes(v) && countElement(already_choosen,v) < countElement(s1_array,v)){
            already_choosen.push(v)
            cnt++
        }
    });
    
    return cnt
}