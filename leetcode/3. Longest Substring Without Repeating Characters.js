/*
* @author Azad Sadigli
*
* 3. Longest Substring Without Repeating Characters
*
*/ 


var lengthOfLongestSubstring = function(s) {
    if(s.length < 2) return s.length 
    let s_array = s.split(""),strings = [],length_list = [];
    for(let i = 0;i < s_array.length; i++){
        if(strings.includes(s_array[i])){
            strings = strings.slice(strings.indexOf(s_array[i]) + 1)
            strings.push(s_array[i])
        }else{
            strings.push(s_array[i])
        }
        length_list.push(strings.length)
    }
    return Math.max.apply(Math,length_list)
};