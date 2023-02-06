const holes = document.querySelectorAll('.hole');
const mole = document.querySelector('.mole');
const scoreBoard = document.querySelector('#score');
let score = 0;

function run(){
  const i = Math.floor(Math.random() * holes.length)
  const hole = holes[i]
 
  
  //with one click, score++ will add one point
  mole.addEventListener("click", function(){
    this.classList.toggle("click")
    score++

    //adds score to the scoreboard ID
  document.getElementById('score').textContent = score;
  
  //evertime you tap it, it should move. 
    timer = setTimeout(function (padjump) {
      let timerId = null
      run()
    })
   
  })

  hole.appendChild(mole)
}
run()
