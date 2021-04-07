var num;  
function Roll(){
  document.getElementById('wrapper').className = "wrapper show";
    num = 1 + Math.round(Math.random() * 9);
    if(num === 1||3||5||7||9 ){
      Prize();
    }
    document.getElementById('msg');
    document.getElementById('roulette').removeAttribute('class');
    document.getElementById('roulette').classList.add(`number-${num}`);
  }
function Prize(){
  setTimeout(function(){
             document.getElementById('msg').innerText = "You have won " + num;
  document.getElementById('msg').className = "show";
             }, 2700);
}
function takePrize(){
  document.getElementById('wrapper').className = "wrapper hide";
  document.getElementById('msg').className = "";
}