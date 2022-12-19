const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

let updateClock = ()=>{
	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();
	let ampm = 'AM';

	if (h > 24) {
		h = h - 24;
	};

	hours.innerText = h;
	minutes.innerText = m;
	seconds.innerText = s;

	setTimeout( ()=>{
		updateClock();
	}, 1000);

};


updateClock();