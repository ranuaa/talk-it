$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    center: true,
    nav: true,
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:3,

        },
        1000:{
            items:3,
        }
    }
})
})


// var share = document.getElementsByClassName('share');

// for (var i = 0;i < share.length; i ++) {
//     share[i].addEventListener('click', function(){
//         alert("copy This Link To Share"+ ": " +window.location.href);
//     }, false);
// }

$(document).ready(function(){
    $(".share").click (function(){

        alert("copy This Link To Share"+ ": " +window.location.href);
    });

    $("#close").click(function(){
        $("#table").hide();
      });
      $(".bkak").click(function(){
        $("#table").show();
      });
});

var likeButton = document.querySelectorAll('.like');
likeButton.forEach(function(btn) {
  btn.addEventListener('click', function() {
    btn.classList.toggle('like2')
  });
});



const bookmarkButton = document.querySelectorAll('.bookmark');
bookmarkButton.forEach(function(btn) {
  btn.addEventListener('click', function() {
    btn.classList.toggle('bookmark2')
  });
});

$('.button').click(function () {
    $('#hamburger').html($('textarea').val());
  });



