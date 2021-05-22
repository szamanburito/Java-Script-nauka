function wypisz() {

    var liczba1 = document.getElementById("pierwsze").value;
    var liczba2 = document.getElementById("drugie").value;
    var napis = "";

    if (liczba2 > liczba1) document.getElementById("numery").innerHTML = Pierwsza jest za duża;
    else(liczba2 == liczba1) document.getElementById("numery").innerHTML = "Liczby są takie same";
    else {
        for (i = liczba1; i <= liczba2; i++) {
            napis = napis + i + " ";
        }
        document.getElementById("numery").innerHTML = napis;
    }
}