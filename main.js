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

let string="";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML=="="){
            string = eval(string);
            document.querySelector(".display_input").value = string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            document.querySelector(".display_input").value = string;
        }
        else if(e.target.id =="back"){
            string = string.slice(0,-1);
            document.querySelector(".display_input").value = string;
        }
        // else if(){

        // }
        else{
        string += e.target.innerHTML;
        document.querySelector(".display_input").value = string;
        }
}
    
    );
});