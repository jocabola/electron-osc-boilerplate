console.log('APP INITIALIZED');

MonitorComm.sendMessage('welcome');

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

btn1.addEventListener('click', () => {
    MonitorComm.sendMessage('Button1');
});

btn2.addEventListener('mousedown', () => {
    MonitorComm.sendMessage('Button2_down');
});

btn2.addEventListener('mouseup', () => {
    MonitorComm.sendMessage('Button2_up');
});