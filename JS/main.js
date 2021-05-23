var numer = Math.floor(Math.random() * 4) + 1;

function schowaj() {
    $("slider").fadeOut(500);
}

function changephoto() {
    numer++;
    if (numer > 4) numer = 1;

    var plik = "<img src=\"../../Photos/slide" + numer + ".jpg\" />";

    document.getElementById("slider").innerHTML = plik;
    $("#slider").fadeIn(500);

    setTimeout("changephoto()", 5000);
    setTimeout("schowaj()", 4500);
} 