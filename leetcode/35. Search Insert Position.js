/*
* @author Azad Sadigli
*
* 35. Search Insert Position
*
*/

var searchInsert = function(nums, target) {
    let index = nums[0] > target ? 0 : nums.length;
    nums.map((v,i) => {
        index = target === v ? i : 
            (target > v && target < nums[i + 1] && i < (nums.length - 1) ? i + 1 : index);
    })
    return index
};