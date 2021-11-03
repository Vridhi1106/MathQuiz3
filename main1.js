player_display_1 = localStorage.getItem("player1");
player_display_2 = localStorage.getItem("player2");

score1= 0
score2= 0

document.getElementById("playr_1_score").innerHTML=score1;
document.getElementById("playr_2_score").innerHTML=score2;

document.getElementById("playr_1").innerHTML=player_display_1 + " : ";
document.getElementById("playr_2").innerHTML=player_display_2 + " : " ;

document.getElementById("QT").innerHTML=player_display_1;
document.getElementById("AT").innerHTML=player_display_2;

function send(){

    no_one_input= document.getElementById("no1").value;
    no_two_input= document.getElementById("no2").value;
 
    ques= "<h4> Q. &nbsp; " + no_one_input + " x " + no_two_input + "</h4> <br>";
    ans= "<h4> ANS. <input id='answer' placeholder='Add answer here' type='text'> </h4> <br> ";
    button= "<button id='check_btn' onclick= 'check()'> Check </button>";
  
    row= ques + ans + button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("no1").value= "";
    document.getElementById("no2").value= "";
   
}