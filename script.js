
function sayHello(){
    var date = new Date(); 
    var hours = date.getHours();
    var greetingText = "";

    switch(true) {
        case (hours>=0 && hours<4):  
            greetingText = "Not feeling sleepy ?";
            break;

        case (hours>=4 && hours<12):
            greetingText = "Good morning !";
            break;

        case (hours>=12 && hours<18):
            greetingText = "Good afternoon !";
            break;

        case (hours>=18 && hours<=23):
            greetingText = "Good night !";
            console.log("hee");
            break;
        
        default:
            greetingText = "Hello!";
    }

    console.log("hee");
    
    document.getElementById("greeting").innerHTML = greetingText;
}

function pickRandomColor(){
    var colors = ["#a0ab44", "#f8bfb9", "#f8bd76", "#b26c3e", "#f3a683",
                "#b1bb39", "#778beb", "#f78fb3", "#3dc1d3", "#786fa6", "#303952",
                "#ea8685", "#f5cd79", "#d98047", "#6db096"];

    var colorIndex = Math.floor(Math.random() * colors.length);

    //console.log(colors[colorIndex]);
    document.body.style.backgroundColor = colors[colorIndex];
}


window.addEventListener("load", sayHello);
window.addEventListener("load", pickRandomColor);

