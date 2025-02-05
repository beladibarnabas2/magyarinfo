function szamitas(){
    let jegy = parseInt(document.getElementById('jegy').value)
    let napok = parseInt(document.data.nap.value)
    let egyeb = parseInt(document.getElementById('adatok').value)
    let osszeg = (napok + egyeb)*jegy

    document.getElementById('osszeg').innerHTML = `Fizetendő összeg: ${osszeg} Ft`

}
