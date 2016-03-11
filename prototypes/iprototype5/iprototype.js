//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {

    console.log('ready');

    $(function () {
        $("#tabs").tabs();
    });
    
    //fake new section creation with replacement text
    $('form button#try').click(function () {
        console.log('store1');
        var userMsg = document.q.userMsg.value;
        $('section.users p#change').text(userMsg);
        return false;
    });

    //report button
    $('button.report').click(function () {
        console.log('click');
        $('section#overlay').css('visibility', 'visible');
        return false;
    });

    //close report overlay
    $('nav#close').click(function () {
        console.log('click');
        $('section#overlay').css('visibility', 'hidden');
    });

    //hiding usersReply, somehow code it to change
    $('section.usersReply1').hide();
    $('section.usersReply2').hide();
    $('section.usersReply3').hide();
    $('section.usersReply4').hide();

    //****************************************
    //targeting reply button in feed to toggle reply form
    $('button.reply#go1').click(function () {
        $('section.usersReply1').slideToggle();
    });
    
    $('button.reply#go2').click(function () {
        $('section.usersReply2').slideToggle();
    });
    
    $('button.reply#go3').click(function () {
        $('section.usersReply3').slideToggle();
    });
    
    $('button.reply#go4').click(function () {
        $('section.usersReply4').slideToggle();
    });

    //hiding usersReplies in your feed
    $('section.usersReplies').hide();

    //toggling seeing replies on your posts 1
    $('button.viewReplies1').click(function () {
        $('section.usersReplies#onlythis').slideToggle();
    });
    
    //toggling seeing replies on your posts 2
    $('button.viewReplies2').click(function () {
        $('section.usersReplies#nowthis').slideToggle();
    });

    //hiding usersFavorites on tab 3
    $('section.usersFavorites').hide();

    //targeting view favs button to show favorite posts' replies
    $('button.viewFavorites').click(function () {
        $('section.usersFavorites').slideToggle();
    });
    
    //changable text for reply
    $('section.usersReply p#change1').hide();

    //attempting to change text
    $('button.reply2').click(function () {
        console.log('store2');
        var userReply = document.r.userReply.value;
        $('section.usersReply p#change1').text(omg);
        return false;
    });

});