

let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".display_input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector(".display_input").value = string;
    } else if (e.target.id == "back") {
      string = string.slice(0, -1);
      document.querySelector(".display_input").value = string;
    }
      else{
        string += e.target.innerHTML;
        document.querySelector(".display_input").value = string;
      }
    }
    );

});
