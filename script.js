var i = 0;
var speed = 80;
var textToType = sayHello();

console.log(textToType.length);

function typeWriter() {
    if (i < textToType.length) {
        document.getElementById("greeting").innerHTML += textToType.charAt(i);
        i += 1;
        console.log(i);
        setTimeout(typeWriter, speed);
    }
}

function sayHello() {
    var date = new Date();
    var hours = date.getHours();
    var greetingText = "";

    switch (true) {
        case (hours >= 0 && hours < 4):
            greetingText = "Not feeling sleepy ?";
            break;

        case (hours >= 4 && hours < 12):
            greetingText = "Good morning !";
            break;

        case (hours >= 12 && hours < 18):
            greetingText = "Good afternoon !";
            break;

        case (hours >= 18 && hours <= 23):
            greetingText = "Good night !";
            break;

        default:
            greetingText = "Hello!";
    }

    return greetingText;
}

var colorIndex = 0;

function pickRandomColor() {

    var colors = ["#a0ab44", "#f8bfb9", "#f8bd76", "#b26c3e", "#f3a683",
        "#b1bb39", "#778beb", "#f78fb3", "#3dc1d3", "#786fa6", "#303952",
        "#ea8685", "#f5cd79", "#d98047", "#6db096"];

    //var colorIndex = Math.floor(Math.random() * colors.length);

    $("html body").animate({
        backgroundColor: colors[colorIndex],
    }, 1000);
    $("#newQuoteButton").animate({
        backgroundColor: colors[colorIndex]
    }, 500);
    $("#shareOnTwitter").animate({
        backgroundColor: colors[colorIndex]
    }, 500);

    // document.getElementById("newQuoteButton").style.background = colors[colorIndex];
    // document.body.style.backgroundColor = colors[colorIndex];

    if (colorIndex > colors.length) {
        colorIndex = 0;
    } else {
        colorIndex += 1;
    }
}


window.addEventListener("load", typeWriter);
window.addEventListener("DOMContentLoaded", getQuote);


function getQuote() {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        function (data) {
            var post = data.shift();
            $("#quote-content").html(post.content);
            $("#quote-title").text(post.title);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            $("#quote-content").html("Smile! Ever tried. Ever failed. No matter. Let's try again. :)");
            $("#quote-title").text("Someone famous");
        })
    $.ajaxSetup({ cache: false });
    pickRandomColor();
}

$('#newQuoteButton').on('click', function (e) {
    getQuote();
});

$('#shareOnTwitter').on('click', function (e) {

    var cleanQuoteText = $('#quote-content').text();
    var cleanQuoteTitle = $('#quote-title').text();

    var shareText = "\"" + cleanQuoteText + "\"" + " - " + cleanQuoteTitle;

    $("#shareOnTwitter").attr("href", "https://twitter.com/intent/tweet?hashtags=aQuoteForYou&text=" + encodeURIComponent(shareText));
});

