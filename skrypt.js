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

var odkrywki = new Array(22)
odkrywki[0] = - 1000;
odkrywki[1] = 2000;
odkrywki[2] = - 3000;
odkrywki[3] = 4000;
odkrywki[4] = - 5000;
odkrywki[5] = 6000;
odkrywki[6] = - 7000;
odkrywki[7] = 8000;
odkrywki[8] = - 9000;
odkrywki[9] = 10000;
odkrywki[10] = - 11000;
odkrywki[11] = 1200;
odkrywki[12] = - 13000;
odkrywki[13] = 14000;
odkrywki[14] = - 15000;
odkrywki[15] = 16000;
odkrywki[16] = - 17000;
odkrywki[17] = 18000;
odkrywki[18] = - 19000;
odkrywki[19] = 20000;
odkrywki[20] = - 21000;
odkrywki[21] = 22000;
odkrywki[22] = - 23000;
odkrywki[23] = 24000;
odkrywki[24] = - 25000;
odkrywki[25] = 26000;
odkrywki[26] = - 27000;
odkrywki[27] = 28000;
odkrywki[28] = - 29000;
odkrywki[29] = 30000;
odkrywki[30] = - 31000;
odkrywki[31] = 32000;
odkrywki[31] = - 33000;

odkrywki = odkrywki.sort(() => Math.random() - 0.5);

var liczbaoczek = 0;

var rzutkostkami = Math.floor(Math.random()*10 + 2);

var poziom = 0;

$('#a0').css('opacity', '0');

function tura()
{
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