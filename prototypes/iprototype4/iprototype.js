//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function(){
    
    console.log('ready');
    
    $('form button#try').click(function(){
        console.log('store');
        var userMsg = document.q.userMsg.value;
        $('section.users p#change').text(userMsg);
        return false;
    })
    
    $('button.report').click(function(){
        console.log('click');
        $('section#overlay').css('visibility','visible');
        return false;
    })
    
    $('nav#close').click(function(){
        console.log('click');
        $('section#overlay').css('visibility','hidden');
    })
    
    $('form.respond').hide();
    
    $('button.reply').click(function(){
        $('form.respond').slideToggle();
    })
})