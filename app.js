const A = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];
console.log(A[0].length);
const allLongStrings = (a) => {
	let max = 0;
	const arraymax = [];
	for (i = 0; i < a.length; i++) {
		if (a[i].length > max) {
			max = a[i].length;
		}
	}
	for (i = 0; i < a.length; i++) {
		if (a[i].length == max) {
			arraymax.push(a[i]);
		}
	}
	return arraymax;
};
console.log(allLongStrings(A));

//A bài 2
const weight = [10, 30, 40, 50, 65, 76, 85];
const total = (a) => {
	let weigh1 = 0;
	let weigh2 = 0;
	for (i = 0; i < a.length; i++) {
		if (i % 2 == 0) {
			weigh1 = weigh1 + a[i];
		} else weigh2 = weigh2 + a[i];
	}
	const tong = [weigh1, weigh2];
	return tong;
};
console.log(total(weight));
// bai b

const button = document.querySelector(".btn");
const colors = ["blue", "grey", "black", "pink", "yellow", "purple"];
button.addEventListener("click", function () {
	const randomColor = colors[Math.floor(Math.random() * colors.length)];
	document.body.style.backgroundColor = randomColor;
});
// em không hiểu đề phần sau.
