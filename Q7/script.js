
function calculate() {
	
	let speed = parseInt(document.querySelector("#speed").value);
	let speedLimit = 60;
	if (speed < speedLimit) {

		console.log("not");
	}
else{
	console.log("your over speedding");
}

}