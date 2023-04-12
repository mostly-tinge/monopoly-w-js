var gracz1 = ""; 
var gracz2 = "";
var gracz3 = "";
var gracz4 = "";

var balans1 = 372000;
var balans2 = 372000;
var balans3 = 372000;
var balans4 = 0;

document.getElementById("b1").innerHTML = balans1;
document.getElementById("b2").innerHTML = balans2;
document.getElementById("b3").innerHTML = balans3;

var odkrywki = 
[
    0,
    -1000,
    2000,
    -3000,
    4000,
    -5000,
    6000,
    -7000,
    8000,
    -9000,
    10000,
   -11000,
    12000,
    -13000,
    14000,
    -15000,
    16000,
    -17000,
    18000,
    -19000,
    20000,
    -21000,
    22000,
    -23000,
    24000,
    -25000,
    26000,
    -27000,
    28000,
    -29000,
    30000,
    -31000,
]

odkrywki = odkrywki.sort(() => Math.random() - 0.5);

var liczbaoczek = 0;

var poziom = 0;

$('#a0').css('opacity', '0');

function tura()
{
    let rzutkostkami = Math.floor(Math.random()*10 + 2);
    $('#a'+liczbaoczek).css('opacity', '0')
    document.getElementById("b4").innerHTML = liczbaoczek = liczbaoczek + rzutkostkami;
    if (liczbaoczek > 32)
    {
        liczbaoczek = liczbaoczek - 32;
    }
    if(liczbaoczek == 32)
    {
        $('#a0').css('opacity', '1');
    }
    $('#a'+liczbaoczek).css('opacity', '1');
    let opacityValue = $('#a'+liczbaoczek).css('opacity');
    if(opacityValue == 1 )
    {
        let hamza = $('#od'+liczbaoczek).css('opacity');
        if(liczbaoczek < 8)
        {
            if(hamza != 0.99 && liczbaoczek != 2 && liczbaoczek != 5)
            {
                document.getElementById("b2").innerHTML = balans2 + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek).css('background-color', 'red');
            $('#od'+liczbaoczek).css('border-color', 'red');
            $('#od'+liczbaoczek).css('opacity', '0.99');
        }
        else if(liczbaoczek > 8 && liczbaoczek < 16)
        {
            if(hamza != 0.99 && liczbaoczek != 13)
            {
                document.getElementById("b2").innerHTML = balans2 + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek).css('opacity', '0.99');
        }
        else if(liczbaoczek > 16 && liczbaoczek < 24)
        {
            if(hamza != 0.99 && liczbaoczek != 18)
            {
                document.getElementById("b2").innerHTML = balans2 + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek).css('background-color', 'red');
            $('#od'+liczbaoczek).css('border-color', 'red');
            $('#od'+liczbaoczek).css('opacity', '0.99');
        }
        else if(liczbaoczek > 24)
        { 
            if(hamza != 0.99 && liczbaoczek != 27 && liczbaoczek != 29)
            {
                document.getElementById("b2").innerHTML = balans2 + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek).css('opacity', '0.99');
        }
    }
}
