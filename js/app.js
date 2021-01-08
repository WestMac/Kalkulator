let number = document.querySelectorAll(".numberDiv");
let input = document.querySelector(".summary");
let operator = document.querySelectorAll('.operatorDiv');
let equal = document.querySelector('.equalDiv')

input.value = "";

for(let i = 0; i < number.length; i++){
	number[i].addEventListener('click', addNumber);
}

for(let i = 0; i < operator.length; i++){
	operator[i].addEventListener('click', addNumber);
}


function addNumber() {
		input.value += this.textContent

}

equal.addEventListener('click', function() {
	let sum = input.value

	sum = eval(sum);

	if(sum === Infinity) {
		alert("Nie dziel przez 0")
	} else {
		input.value = sum;
	}



})


