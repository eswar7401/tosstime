fetch("score.json")
.then(response => response.json())
.then(data => {
const hall = document.getElementById("halloffame");

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