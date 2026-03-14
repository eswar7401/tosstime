fetch("score.json")

.then(response => response.json())

.then(data => {

const board = document.getElementById("scoreboard");
const hall = document.getElementById("halloffame");

/* SCOREBOARD */

if(board){

data.sort((a,b)=> b.POINTS - a.POINTS);

data.forEach((team,index)=>{

let card=document.createElement("div");

card.className="card";

card.innerHTML=`

<h3>#${index+1} ${team.PARTICIPANTS}</h3>

<p>${team.POINTS} pts</p>

`;

board.appendChild(card);

});

}

/* HALL OF FAME */

if(hall){

data.sort((a,b)=> b.POINTS - a.POINTS);

let top3=data.slice(0,3);

top3.forEach((team,index)=>{

let div=document.createElement("div");

div.className="winner";

div.innerHTML=`

<h2>#${index+1}</h2>

<h3>${team.PARTICIPANTS}</h3>

<p>${team.POINTS} pts</p>

`;

hall.appendChild(div);

});

}

});