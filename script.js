

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
            console.log("hee");
            break;

        default:
            greetingText = "Hello!";
    }

    console.log("hee");

    document.getElementById("greeting").innerHTML = greetingText;
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
    console.log(colorIndex);
}


window.addEventListener("load", sayHello);
window.addEventListener("DOMContentLoaded", getQuote);


function getQuote() {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        function (data) {
            var post = data.shift();
            $("#quote-content").html(post.content);
            $("#quote-title").text(post.title);
            console.log(post.content);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            $("#quote-content").html("Smile! Ever tried. Ever failed. No matter. Let's try again. :)");
            $("#quote-title").text("Someone famous");
        })
    $.ajaxSetup({ cache: false});
    pickRandomColor();
}

$('#newQuoteButton').on('click', function (e) {
    getQuote();
});

$('#shareOnTwitter').on('click', function (e) {

    var cleanQuoteText = $('#quote-content').text();
    var cleanQuoteTitle = $('#quote-title').text();

    var shareText = "\"" + cleanQuoteText + "\"" + " - " + cleanQuoteTitle;
    console.log(shareText);

    $("#shareOnTwitter").attr("href", "https://twitter.com/intent/tweet?hashtags=aQuoteForYou&text=" + encodeURIComponent(shareText));
});

/* jQuery(function ($) {
    $('#newQuoteButton').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success: function (data) {
                var post = data.shift(); // The data is an array of posts. Grab the first one.
                $('#quote-title').text(post.title);
                $('#quote-content').html(post.content);

                // If the Source is available, use it. Otherwise hide it.
                if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
                    $('#quote-source').html('Source:' + post.custom_meta.Source);
                } else {
                    $('#quote-source').text('');
                }
            },
            cache: false
        });
        pickRandomColor();
    });
}); */


