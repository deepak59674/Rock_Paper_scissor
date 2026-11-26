let county=0;
let countc=0

function celebrateWin() {
    const container = document.getElementById("flower-container");
    const flowers = ["🌸", "🌺", "🌼", "🌻", "💮", "🌷","🌸", "🌺", "🌼", "🌻", "💮", "🌷"];
    for (let i = 0; i < 40; i++) {
        const flower = document.createElement("span");
        flower.classList.add("flower");
        flower.innerHTML = flowers[
            Math.floor(Math.random() * flowers.length)
        ];
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration =
            (2 + Math.random() * 3) + "s";
        flower.style.animationDelay =
            Math.random() * 1.5 + "s";
       container.appendChild(flower);
        setTimeout(() => {
            flower.remove();
        }, 5000);
    }
}

function updatescore()
{
  document.getElementById("comp").innerHTML="Computer count = "+`${countc}`
document.getElementById("your").innerHTML="Your count = "+`${county}`
}

const game=document.getElementById("game")
const result=document.getElementById('result')
const computertext=document.getElementById('computer')
const computer=['rock','paper','scissor']

const printer=(event)=>{
 
 const playerchoice = event.target.closest("[id]").id;
  let z= Math.floor(Math.random()*computer.length)
  if(playerchoice==computer[z])
  {
   result.innerHTML="Result : "+" Match draw"
    computertext.innerHTML='Computer choose - '+ `${playerchoice}` 
     game.removeEventListener('click',printer)
     return;
  }
  else if(playerchoice=='rock' && computer[z]=='scissor' || playerchoice=='scissor' && computer[z]=='paper' || playerchoice=='paper' && computer[z]=='rock')
  { county++;
    updatescore()
    result.innerHTML="Result : "+" YOU WIN"
   celebrateWin()
    computertext.innerHTML='Computer choose - '+ `${computer[z]}`
     game.removeEventListener('click',printer)
    
    return;
  }
  else 
  {countc++
    
     result.innerHTML="Result : "+" COMPUTER WIN"
      computertext.innerHTML='Computer choose - '+ `${computer[z]}`
       game.removeEventListener('click',printer)
       updatescore()
       return;
  }
  
}
game.addEventListener('click',printer)
const refresh=document.getElementById('refresh')
refresh.addEventListener('click',(event)=>{
    //  const playerchoice = event.target.closest("[id]").id;
  
    result.innerHTML="Result : "+""
    computertext.innerHTML='Computer choose '+ ``
    game.addEventListener('click',printer)
})


