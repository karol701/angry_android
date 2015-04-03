// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

window.setTimeout(function () {
    $(".speak").removeClass("speak").addClass("speak_happy");
    $( "p" ).text( "Choose better phone" );
},2000);

window.setTimeout(function () {
var clicks = 0;
alert("aaa");
$("#phone1").click( function() {
    if(clicks == 0){
        $(".eyebrows").removeClass("eyebrows").addClass("angry_eyebrows");
        $(".speak_happy").removeClass("speak_happy").addClass("speak_angry");
        $( "p" ).text( "Nope ..., choose the better one" );
        $("#right_arm").removeClass("arms").addClass("arms_direct");
    }
    else if(clicks == 1){
        $(".eyebrows").removeClass("eyebrows").addClass("angry_eyebrows");
        $(".speak_happy").removeClass("speak_happy").addClass("speak_angry");
        $( "p" ).text( "You're stupid or sth!" );
        $("#right_arm").removeClass("arms_direct").addClass("arms_up");
    }
    else if(clicks == 2){
        $(".eyebrows").removeClass("eyebrows").addClass("angry_eyebrows");
        $(".speak_happy").removeClass("speak_happy").addClass("speak_angry");
        $( "p" ).text( "Last chance Moth***ker" );
        $("#right_arm").removeClass("arms_up").addClass("arms_direct");
    }
    else{
        $(".eyebrows").removeClass("eyebrows").addClass("angry_eyebrows");
        $(".eyes").removeClass("eyes").addClass("angry_eyes");
        $(".speak_happy").removeClass("speak_happy").addClass("speak_angry");
        $( "p" ).text( "You messed up with the wrong Android bro, time to pay...");
        window.setTimeout(function (){
            window.open('http://www.youtube.com/watch?v=s2g1YIThZUw');
        },3000);
    }
    ++clicks;
})

$("#phone2").click( function() {
    $(".angry_eyebrows").removeClass("angry_eyebrows").addClass("eyebrows");
    $(".speak_angry").removeClass("speak_angry").addClass("speak_happy");
    $( "p" ).text( "That's right" );
})

},3000);



