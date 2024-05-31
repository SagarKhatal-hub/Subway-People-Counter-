let count = 0;

function increment(){

	count += 1;	
	let countEl = document.getElementById("count-el")
	countEl.textContent = count
	console.log(count)
}

function save(){
let entry = count + " - "	
let saveEl = document.getElementById("save-el")
saveEl.textContent += entry
}

