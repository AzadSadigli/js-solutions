/*
* @author Azad Sadigli
*
* Designer PDF Viewer
*
*/


function designerPdfViewer(h, word) {
    let alp_arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let word_arr = word.split(''),max_num = 0;
    for(let i = 0;i < word_arr.length;i++){
        max_num = max_num < h[alp_arr.indexOf(word_arr[i])] ? h[alp_arr.indexOf(word_arr[i])] : max_num;
        // console.log(alp_arr.indexOf(word_arr[i]))
    }
    let len = word_arr.length;
    return len * max_num
}