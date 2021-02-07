$(()=>{
    $("#chatFormDiv").hide();

    $("#chatDiv").click((e) => {
        $("#chatFormDiv:hover").css({
            cursor: 'default'
        })
        if (e.target.id === 'minim' || e.target.id === 'minimBox') {
            $("#chatFormDiv").hide(1000);
        }
        else{
            $("#chatFormDiv").show(1000);
        }
    });

    const socket = io();

    $('#write').submit((e) => {
        e.preventDefault();
        socket.emit('msgFromClient', $('#chat').val());
        $('#chat').val('');
    })
    socket.on('msgFromServer', (serverMessage) => {
        let $newLi = $('<li>',{
            text: `${serverMessage}`,
            class: 'chatLi'
        })
        $('#messages').append($newLi);
    })


// toggle navbar menu on click

  $(".mobile-nav-toggle").click((e) => {

    if ($("#mainNav").hasClass( "iAmHere" )) {
        $("#mainNav").css({visibility: "hidden"});
        $("#mainNav").css({height: "0"});
        $("#mainNav").removeClass("iAmHere");
    }
    else  {
        $("#mainNav").css({visibility: "visible"});
        $("#mainNav").css({height: "auto"});
        $("#mainNav").addClass("iAmHere");
    }
    
});


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

}) // end jQuery