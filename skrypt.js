function wyslij()
{
    var imie=document.getElementById('pole1').value;
    var nazwisko=document.getElementById('pole2').value;
    var email=document.getElementById('pole3').value;
    var usluga=document.getElementById('pole4').value;
    document.getElementById('komunikat1').innerHTML=imie+" "+nazwisko;
    document.getElementById('komunikat2').innerHTML=email;
    document.getElementById('komunikat3').innerHTML=usluga;

}