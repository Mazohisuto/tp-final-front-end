// Obtén el modal
var modal = document.getElementById('myModal');

// Obtén la imagen del modal y el caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Obtén todas las imágenes y asígnales un evento click
var images = document.querySelectorAll('.gallery-item img');
images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Obtén el elemento de cierre
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() { 
    modal.style.display = "none";
}