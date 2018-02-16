
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


window.addEventListener("load", sayHello);

