var nums = [200,0,-2,11,10];

function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
   for (let num of nums) {
     if (num > max_num) {
     // (Fill in the missing line here)
    // max_num = num ==> the highest value from array
    // max_num += num ==> -Infinity 
    // max_num += 1 ==> -Infinity 
    // num = max_num ==> -Infinity 
      max_num = num // Se o numero do array nums é maior do que max_num negativos infinitos, então a resposta é o maior valor que ele encontrar.
     }
    }
    return max_num;
}

console.log(find_max(nums)); // 200
