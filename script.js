
const buttons = document.querySelectorAll(".button");
//console.log(buttons)
const body = document.body;

buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener("click",function(e) {
        console.log(e.target)
        if(e.target.id=="grey")
        {
            body.style.backgroundColor = "#4f46e5"
        }
        if(e.target.id=="red")
        {
            body.style.backgroundColor = "red"
        }
        if(e.target.id=="green")
        {
            body.style.backgroundColor = "green"
        }
        if(e.target.id=="white")
        {
            body.style.backgroundColor = "white";
            body.style.color = "black";
        }
        if(e.target.id=="black")
        {
            body.style.backgroundColor = "black"
            body.style.color = "white";
            e.target.style.border = "2px solid white";
        }
    })
})