function expand(check){
    if(check===true){
document.getElementById("Calculator_body").style.width="45vw";
document.getElementsByClassName("buttons")[0].style=[
"width: 40vw;",
];
document.getElementById("scientific_div").style.display="block";
document.getElementById("tu").innerHTML= "<button class=\"btn\">x<sup>y</sup></button>";
    }
    else {
    document.getElementById("Calculator_body").style.width="20%";
    document.getElementsByClassName("buttons")[0].style=["width: 20vw;"];
    document.getElementById("scientific_div").style.display="none";
    document.getElementById("tu").innerHTML= "<button class=\"btn\" onclick=expand(true)>&#8689</button>";

};
}
