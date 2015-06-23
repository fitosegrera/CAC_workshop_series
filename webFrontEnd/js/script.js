var state = false;

function butTest(){
	var but = document.getElementById('butId');
	var d1 = document.getElementById('d1');
	if (state == false) {
		but.innerHTML = "CLICKED!!!!";
		d1.style.backgroundColor = "black";
		state = true;
	} else{
		but.innerHTML = "click me";
		d1.style.backgroundColor = "red";
		state = false;
	}
	
}


