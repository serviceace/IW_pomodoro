const pomodoro = document.querySelector('#pomodoro-timer');
const short = document.querySelector('#short-timer');
const long = document.querySelector('#long-timer');

const showDefaultTimer = () => {
		pomodoro.style.display = "block";
		short.style.display = "none";
		long.style.display = "none";
}

showDefaultTimer();
