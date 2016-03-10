//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {

    console.log('ready');

    $(function () {
        $("#tabs").tabs();
    });

    $('form button#try').click(function () {
        console.log('store1');
        var userMsg = document.q.userMsg.value;
        $('section.users p#change').text(userMsg);
        return false;
    });

    $('button.report').click(function () {
        console.log('click');
        $('section#overlay').css('visibility', 'visible');
        return false;
    });

    $('nav#close').click(function () {
        console.log('click');
        $('section#overlay').css('visibility', 'hidden');
    });

    $('section.usersReply').hide();

    $('button.reply').click(function () {
        $('section.usersReply').slideToggle();
    });

    $('section.usersReplies').hide();

    $('button.viewReplies').click(function () {
        $('section.usersReplies').slideToggle();
    });

    $('section.usersFavorites').hide();

    $('button.viewFavorites').click(function () {
        $('section.usersFavorites').slideToggle();
    });

    $('section.usersReply p#change1').hide();

    $('button.reply2').click(function () {
        console.log('store2');
        var userReply = document.r.userReply.value;
        $('section.usersReply p#change1').text(omg);
        return false;
    });

});