
var startingMinutes = 8.5; // default is 8.5 because it is epic
var paused = 0;
var time = startingMinutes * 60;


const chooseTime = document.getElementById('chosenTime');
chooseTime.innerHTML = 'Select boil type';


document.addEventListener('click', function (event){
    let type = event.target.getAttribute('data-click');
    if(!type) return;

    if (type == 'HardBoiled'){
        var startingMinutes = 10;
        chooseTime.innerHTML = 'You chose 10 minutes';
    }
    if(type == 'SoftBoiled'){
        var startingMinutes = 8;
        chooseTime.innerHTML = 'You chose 8 minutes';
    }
    if(type == 'Runny'){
        var startingMinutes = 6;
        chooseTime.innerHTML = 'You chose 6 minutes';
    }
    if(type == 'Default'){
        var startingMinutes = 8.5;
        chooseTime.innerHTML = 'You chose default time: 8½ minutes';
    }
    time = (startingMinutes || 0) * 60; //bruk 0 hvis ikke minutter er valgt
    
});


const countdownEl = document.getElementById('countdown');
const finished = document.getElementById('done');
finished.innerHTML.display="none";
var interval;


function start(){
    interval = setInterval(updateCountdown, 1000);
    document.getElementById("startbtn").disabled = true;
    document.getElementById("stopbtn").disabled = false;

}
function stop(){
    clearInterval(interval);
    document.getElementById("startbtn").disabled = false;
    document.getElementById("stopbtn").disabled = true;
}

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds; // get :01 instead of just :1
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    time = time < 0 ? 0:time; // set time to 0 so it does not get negative time
    if(time == 0){
        document.getElementById('endOfTimer').play();
    }
}

