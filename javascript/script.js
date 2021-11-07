var menu_button = document.getElementById("menu_btn");
var close_button = document.getElementById("close_btn");

menu_button.addEventListener("click", open_menu);
close_button.addEventListener("click", close_menu);

function open_menu(){
    // alert("I am working")
    let menu_cont = document.getElementById("menu-items")
    menu_cont.style.display = "block";
    menu_button.style.display = "none";
    close_button.style.display = "block";
}

function close_menu(){
    // alert("I am working")
    let menu_cont = document.getElementById("menu-items")
    menu_cont.style.display = "none";
    menu_button.style.display = "block";
    close_button.style.display = "none";
}