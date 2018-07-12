
function calculate() {
	
	let math = parseInt(document.querySelector("#math").value);
	let english = parseInt(document.querySelector("#english").value);
	let computer = parseInt(document.querySelector("#computer").value);

	let mathMarks = 20;
	let englishMarks = 10;
	let computerMarks = 50;

	if (math > mathMarks && english > englishMarks && computer > computerMarks) {

		console.log("you are passed")
	}
	else{
		console.log("you are failed")
	}

}