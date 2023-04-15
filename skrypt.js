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

let poziom = 0;

$('#a0').css('opacity', '0');

var targ = document.getElementById("targ");

var kaal = 1;

var kaal2 = 1;

var kaal3 = 1;

var kaal4 = 1;

var kaal5 = 1;

var kaal6 = 1;

var kaal7 = 1;

var kaal8 = 1;

function walter()
{
    document.getElementById("b2").innerHTML = balans2 = balans2 - 10000;
    $('#dom'+liczbaoczek+'-'+kaal).css('opacity', '1');
    kaal++;
    if(kaal > 5)
    {
        document.getElementById("b2").innerHTML = balans2 = balans2 + 10000;
    }
}

function walter2()
{
    document.getElementById("b2").innerHTML = balans2 = balans2 - 15000;
    $('#dom'+liczbaoczek+'-'+kaal2).css('opacity', '1');
    kaal2++;
    if(kaal2 > 5)
    {
        document.getElementById("b2").innerHTML = balans2 = balans2 + 15000;
    }
}

function walter3()
{
    document.getElementById("b2").innerHTML = balans2 = balans2 - 25000;
    $('#dom'+liczbaoczek+'-'+kaal3).css('opacity', '1');
    kaal3++;
    if(kaal3 > 5)
    {
        document.getElementById("b2").innerHTML = balans2 = balans2 + 25000;
    }
}

function walter4()
{
    document.getElementById("b2").innerHTML = balans2 = balans2 - 30000;
    $('#dom'+liczbaoczek+'-'+kaal4).css('opacity', '1');
    kaal4++;
    if(kaal4 > 5)
    {
        document.getElementById("b2").innerHTML = balans2 = balans2 + 30000;
    }
}

function walter5()
{
    document.getElementById("b2").innerHTML = balans2 = balans2 - 40000;
    $('#dom'+liczbaoczek+'-'+kaal5).css('opacity', '1');
    kaal5++;
    if(kaal5 > 5)
    {
        document.getElementById("b2").innerHTML = balans2 = balans2 + 40000;
    }
}

function walter6()
{
    document.getElementById("b2").innerHTML = balans2 = balans2 - 45000;
    $('#dom'+liczbaoczek+'-'+kaal6).css('opacity', '1');
    kaal6++;
    if(kaal6 > 5)
    {
        document.getElementById("b2").innerHTML = balans2 = balans2 + 45000;
    }
}

function walter7()
{
    document.getElementById("b2").innerHTML = balans2 = balans2 - 55000;
    $('#dom'+liczbaoczek+'-'+kaal7).css('opacity', '1');
    kaal7++;
    if(kaal7 > 5)
    {
        document.getElementById("b2").innerHTML = balans2 = balans2 + 55000;
    }
}

function walter8()
{
    document.getElementById("b2").innerHTML = balans2 = balans2 - 60000;
    $('#dom'+liczbaoczek+'-'+kaal8).css('opacity', '1');
    kaal8++;
    if(kaal8 > 5)
    {
        document.getElementById("b2").innerHTML = balans2 = balans2 + 60000;
    }
}

function tura()
{
    let rzutkostkami = Math.floor(Math.random()*10 + 2);
    $('#a'+liczbaoczek).css('opacity', '0');
    document.getElementById("b4").innerHTML = liczbaoczek = liczbaoczek + rzutkostkami;
    if(liczbaoczek == 32)
    {
        $('#a0').css('opacity', '1');
        liczbaoczek = 0;
        $('#targ').html('');
        document.getElementById("b2").innerHTML = balans2 = balans2 - odkrywki[liczbaoczek];
    }
    if (liczbaoczek > 31)
    {
        liczbaoczek = liczbaoczek - 31;
    }
    $('#a'+liczbaoczek).css('opacity', '1');
    let opacityValue = $('#a'+liczbaoczek).css('opacity');
    if(opacityValue == 1 )
    {
        if(liczbaoczek == 16)
        {
            $('#targ').html('');
        }
        if(liczbaoczek == 24)
        {
            $('#targ').html('')
        }
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
            if(liczbaoczek != 2 && liczbaoczek != 5)
            {
                if(liczbaoczek < 4 && liczbaoczek > 0)
                {
                    $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                }
                else if(liczbaoczek >= 4 && liczbaoczek < 8)
                {
                    $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter2()">Czy chcesz kupić domek?</span>');
                }
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
                if(liczbaoczek > 8 && liczbaoczek < 12)
                {
                    $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter3()">Czy chcesz kupić domek?</span>');
                }
                else if(liczbaoczek > 11 && liczbaoczek < 16)
                {
                    $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter4()">Czy chcesz kupić domek?</span>');
                }
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
                if(liczbaoczek > 16 && liczbaoczek < 21)
                {
                    $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter5()">Czy chcesz kupić domek?</span>');
                }
                else if(liczbaoczek > 20 && liczbaoczek < 24)
                {
                    $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter6()">Czy chcesz kupić domek?</span>');
                }
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
                if(liczbaoczek > 24 && liczbaoczek < 29)
                {
                    $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter7()">Czy chcesz kupić domek?</span>');
                }
                else if(liczbaoczek > 28 && liczbaoczek < 32)
                {
                    $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter8()">Czy chcesz kupić domek?</span>');
                }
            }
            else
            {
                $('#targ').html('');
            }
        }
    }
    document.getElementById("b4").innerHTML = liczbaoczek;
}
