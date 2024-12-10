const all_numbers = require('./day1_data');
/* const all_numbers = `3   4
4   3
2   5
1   3
3   9
3   3`; */

let left_list = [];
let right_list = [];

// console.log(all_numbers.split('\n'));


all_numbers.split('\n').forEach((each_row) => {
    let splitted_numbers = each_row.split("   "); // Dividi la stringa in base agli spazi

    // console.log(splitted_numbers);

    left_list.push(splitted_numbers[0]); // Converti il primo numero in un array di cifre
    right_list.push(splitted_numbers[1]); // Converti il secondo numero in un array di cifre

});

// console.log("Left: ", left_list);
// console.log("Right: ", right_list);


let total_similarities_score = 0;
left_list.forEach((left_number, index) => {
    // console.log(left_number);

    const occurencies = (right_list.filter(right_number => right_number == left_number));

    console.log(occurencies);

    const result = left_number * occurencies.length
    console.log(result);

    total_similarities_score += result;

})

// Total distance calculated!
console.log(total_similarities_score);
