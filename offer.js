const comingDate = new Date("Sep 22, 2020 00:00:00");

const d = document.getElementById('d');
const h = document.getElementById('h');
const m = document.getElementById('m');
const s = document.getElementById('s');

let x = setInterval(function(){
  let now = new Date();
  let des = comingDate.getTime() - now.getTime();
  let days = Math.floor(des / (1000 * 60 * 60 * 24));
  let hours = Math.floor(des % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let mins = Math.floor(des % (1000 * 60 * 60) / (1000 * 60));
  let secs = Math.floor(des % (1000 * 60) / 1000);
  
  d.innerHTML = days;
  h.innerHTML = hours;
  m.innerHTML = mins;
  s.innerHTML = secs;
  
  if(x <　0) clearInterval(x);
}, 1000);

function getTrueNumber(x){
  if(x < 10){
    return '0'+x;
  }
  else{
    return x;
  }
}
