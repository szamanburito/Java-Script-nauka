function wypisz() {

    var liczba1 = document.getElementById("pierwsze").value;
    var liczba2 = document.getElementById("drugie").value;
    var napis = "";

    for (i = liczba1; i <= liczba2; i++) {
        napis = napis + i + " ";
        setTimeout(1000)
    }
    document.getElementById("numery").innerHTML = napis;

}