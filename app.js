const count = getCount();
const secondsPerDay = 60 * 60 * 24;

for (let i = 0; i < count; i++) {
	const seconds = i * secondsPerDay;
	console.log(seconds);
}

function getCount() {
	console.log('Counting');

	return 10;
}

console.log(secondsPerDay);

// for (let i = 0; i < 3; i++) {
//     if (i % 2 !== 0) {
//        continue;
//     }

//     console.log(i);
//     console.log('OK');
// }

// console.log('-----DONE-----')
