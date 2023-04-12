const gracz1 = ""; 
const gracz2 = "";
const gracz3 = "";
const gracz4 = "";

const balans1 = 372000;
var balans2 = 372000;
const balans3 = 372000;
const balans4 = 0;

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

const domki1 =
[
    0,
    15000,
    30000,
    50000,
    60000,
]

const domki3 =
[
    0,
    15000,
    30000,
    50000,
    60000,
]

const domki4 =
[
    0,
    15000,
    30000,
    50000,
    60000,
]

var targ = document.getElementById("targ");

function walter()
{
    document.getElementById("b2").innerHTML = balans2 = balans2 - domki1[1];
}

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
                document.getElementById("b2").innerHTML = balans2 = balans2 + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek).css('background-color', 'red');
            $('#od'+liczbaoczek).css('border-color', 'red');
            $('#od'+liczbaoczek).css('opacity', '0.99');
            if( liczbaoczek != 2 && liczbaoczek != 5)
            {
                $('#targ').html('Czy chcesz kupić domek?');
                targ.addEventListener("click", function() {walter();});
                $('#targ').css('cursor', 'pointer');
            }
            else
            {
                $('#targ').html('');
            }
        }
        else if(liczbaoczek > 8 && liczbaoczek < 16)
        {
            if(hamza != 0.99 && liczbaoczek != 13)
            {
                document.getElementById("b2").innerHTML = balans2 = balans2 + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek).css('opacity', '0.99');
            if(liczbaoczek != 13)
            {
                $('#targ').html('czy chcesz kupić domek?');
            }
            else
            {
                $('#targ').html('');
            }
        }
        else if(liczbaoczek > 16 && liczbaoczek < 24)
        {
            if(hamza != 0.99 && liczbaoczek != 18)
            {
                document.getElementById("b2").innerHTML = balans2 = balans2 + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek).css('background-color', 'red');
            $('#od'+liczbaoczek).css('border-color', 'red');
            $('#od'+liczbaoczek).css('opacity', '0.99');
            if(liczbaoczek != 18)
            {
                $('#targ').html('czy chcesz kupić domek?');
            }
            else
            {
                $('#targ').html('');
            }
        }
        else if(liczbaoczek > 24)
        { 
            if(hamza != 0.99 && liczbaoczek != 27 && liczbaoczek != 29)
            {
                document.getElementById("b2").innerHTML = balans2 = balans2 + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek).css('opacity', '0.99');
            if(liczbaoczek != 27 && liczbaoczek != 29)
            {
                $('#targ').html('czy chcesz kupić domek?');
            }
            else
            {
                $('#targ').html('');
            }
        }
    }
    document.getElementById("b4").innerHTML = liczbaoczek;
}
