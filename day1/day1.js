const all_numbers = require('./day1_data');

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

left_list.sort();
right_list.sort();

// console.log(left_list);
// console.log(right_list);

let total_distance = 0;
left_list.forEach((left_number, index) => {
    const right_number = right_list[index];
    total_distance += (left_number > right_number) ? left_number - right_number : right_number - left_number;
    // console.log(`(${left_number} > ${right_number})`);
})

// Total distance calculated!
console.log(total_distance);
