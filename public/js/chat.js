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


})