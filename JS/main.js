var liczba = prompt("wpisz liczbe")

function naszaLiczba() {
    return (liczba >= 0) ? liczba : -liczba;
}
alert("Wartość bezwzględna z liczby " + liczba + " wynosi " + naszaLiczba());