function oblicz() {
    do {
        var liczba = prompt("Podaj liczbe dodatnią", "");
        if (isNaN(liczba)) {
            alert("to nie jest liczba");
            liczba = -999;
        } else if (liczba == "") {
            alert("może byś coś napisał?");
            liczba = -999;
        } else if (liczba < 0) {
            alert("dodatnią pajacu");
        } else if (liczba = null) {
            liczba = -999;
        } else {}
    } while (liczba < 0);
    alert("brawo, " + liczba + " to liczba dodatnia");
}
oblicz();