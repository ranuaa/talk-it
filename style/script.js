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


const tambahKomentar = document.querySelector('.submit')

tambahKomentar.addEventListener("click", tambahBaru);

function tambahBaru (){
  var divBaru = document.createElement("div")
  divBaru.classList.add('container', 'mt-2')

  var atas = document.createElement("div")
  atas.classList.add('d-flex', 'align-items-center', 'mb-2')

  var profilUser = document.createElement("img")
  profilUser.src = "../assets/usernon.png";
  var nama = document.createElement("h4")
  nama.classList.add('m-sm-2', 'jeneng-wong')
  nama.textContent = ("Anda Siapa?")


  var kotakanKomentar = document.createElement("div")
  kotakanKomentar.classList.add('container-fluid', 'ms-lg-3', 'komentare-wong')


  var isiKomentar = document.createElement("div")
  isiKomentar.classList.add('container', 'm-sm-3', 'bungkus-om')

  var tulisanKomentar = document.createElement("p")
  var komentare = document.getElementById("tulisan").value;

  tulisanKomentar.innerText = komentare;

  var ngisor = document.createElement("div")
  ngisor.classList.add('bwahh')
  
  var buttonLike = document.createElement('button')
  var buttonBalas = document.createElement("button")
  var buttonSimpan = document.createElement("button") 
  var buttonShare = document.createElement("button")

  buttonLike.classList.add('like')
  var suka = document.createElement("i")
  suka.classList.add('fa', 'fa-heart');
  buttonLike.appendChild(suka);
  
  buttonBalas.classList.add('bkak')
  buttonBalas.id = "reply";
  var bales = document.createElement("i")
  bales.classList.add('fa', 'fa-comment')
  buttonBalas.appendChild(bales);



  buttonSimpan.classList.add('bookmark')
  var simpen = document.createElement("i")
  simpen.classList.add('fa', 'fa-bookmark');
  buttonSimpan.appendChild(simpen);

  buttonShare.classList.add('share')
  var share = document.createElement("i")
  share.classList.add('fa', 'fa-share');
  buttonShare.appendChild(share);

  const date = new Date();
  

  var tanggal = document.createElement("i")
  tanggal.innerHTML= "Posted on " + date.toUTCString();

  ngisor.append(buttonLike,buttonBalas,buttonShare,buttonSimpan,tanggal);

  isiKomentar.append(tulisanKomentar, ngisor);

  kotakanKomentar.append(isiKomentar);

  atas.append(profilUser,nama)

  divBaru.append(atas,kotakanKomentar);
  

  document.getElementById("kabehKomentar").prepend(divBaru);
}

