const gracz1 = ""; 
const gracz2 = "";
const gracz3 = "";
const gracz4 = "";

var balans1 = document.getElementById("ba1");
var balans2 = document.getElementById("ba2");
var balans3 = document.getElementById("ba3");
var balans4 = document.getElementById("ba4");

var bilans1 = 372000;
var bilans2 = 372000;
var bilans3 = 372000;
var bilans4 = 372000;

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
var liczbaoczek2 = 0;
var liczbaoczek3 = 0;
var liczbaoczek4 = 0;

let poziom = 0;

$('#a0').css('opacity', '1'); $('#b0').css('opacity', '1'); $('#c0').css('opacity', '1'); $('#e0').css('opacity', '1');

var targ = document.getElementById("targ");

var kaal = 1;  var kaal9 = 1; var kaal17 = 1;

var kaal2 = 1;  var kaal10 = 1; var kaal18 = 1;

var kaal3 = 1;  var kaal11 = 1; var kaal19 = 1;

var kaal4 = 1;  var kaal12 = 1; var kaal20 = 1;

var kaal5 = 1; var kaal13 = 1; var kaal21 = 1;

var kaal6 = 1; var kaal14 = 1; var kaal22 = 1;

var kaal7 = 1; var kaal15 = 1;

var kaal8 = 1; var kaal16 = 1;

var czyja = 0;  var czyja9 = 0; var czyja17 = 0;

var czyja2 = 0;  var czyja10 = 0; var czyja18 = 0;

var czyja3 = 0;  var czyja11 = 0; var czyja19 = 0;

var czyja4 = 0;  var czyja12 = 0; var czyja20 = 0;

var czyja5 = 0; var czyja13 = 0; var czyja21 = 0;

var czyja6 = 0; var czyja14 = 0; var czyja22 = 0;

var czyja7 = 0; var czyja15 = 0;

var czyja8 = 0; var czyja16 = 0;

function jessie()
{
    if(licznik == 1)
    {
        $('#dom'+liczbaoczek+'-1').css('opacity', '0');
        $('#dom'+liczbaoczek+'-2').css('opacity', '0');
        $('#dom'+liczbaoczek+'-3').css('opacity', '0');
        $('#dom'+liczbaoczek+'-4').css('opacity', '0');
        $('#h'+liczbaoczek).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        $('#dom'+liczbaoczek2+'-1').css('opacity', '0');
        $('#dom'+liczbaoczek2+'-2').css('opacity', '0');
        $('#dom'+liczbaoczek2+'-3').css('opacity', '0');
        $('#dom'+liczbaoczek2+'-4').css('opacity', '0');
        $('#h'+liczbaoczek2).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        $('#dom'+liczbaoczek3+'-1').css('opacity', '0');
        $('#dom'+liczbaoczek3+'-2').css('opacity', '0');
        $('#dom'+liczbaoczek3+'-3').css('opacity', '0');
        $('#dom'+liczbaoczek3+'-4').css('opacity', '0');
        $('#h'+liczbaoczek3).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        $('#dom'+liczbaoczek4+'-1').css('opacity', '0');
        $('#dom'+liczbaoczek4+'-2').css('opacity', '0');
        $('#dom'+liczbaoczek4+'-3').css('opacity', '0');
        $('#dom'+liczbaoczek4+'-4').css('opacity', '0');
        $('#h'+liczbaoczek4).css('opacity', '1');
    }
        if(kaal == 6)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 10000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 10000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 10000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 10000;
            }
        }
        else if(kaal2 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 10000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 10000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 10000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 10000;
            }
        }
        else if(kaal3 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 15000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 15000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 15000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 15000;
            }
        }
        else if(kaal4 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 15000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 15000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 15000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 15000;
            }
        }
        else if(kaal5 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 15000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 15000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 15000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 15000;
            }
        }
        else if(kaal6 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 25000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 25000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 25000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 25000;
            }
        }
        else if(kaal7 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 25000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 25000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 25000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 25000;
            }
        }
        else if(kaal8 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 25000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 25000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 25000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 25000;
            }
        }
        else if(kaal9 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 30000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 30000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 30000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 30000;
            }
        }
        else if(kaal10 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 30000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 30000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 30000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 30000;
            }
        }
        else if(kaal11 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 30000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 30000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 30000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 30000;
            }
        }
        else if(kaal12 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 40000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 40000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 40000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 40000;
            }
        }
        else if(kaal13 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 40000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 40000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 40000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 40000;
            }
        }
        else if(kaal14 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 40000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 40000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 40000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 40000;
            }
        }
        else if(kaal15 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 45000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 45000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 45000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 45000;
            }
        }
        else if(kaal16 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 45000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 45000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 45000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 45000;
            }
        }
        else if(kaal17 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 45000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 45000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 45000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 45000;
            }
        }
        else if(kaal18 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 55000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 55000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 55000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 55000;
            }
        }
        else if(kaal19 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 55000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 55000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 55000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 55000;
            }
        }
        else if(kaal20 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 55000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 55000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 55000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 55000;
            }
        }
        else if(kaal21 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 60000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 60000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 60000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 60000;
            }
        }
        else if(kaal22 == 5)
        {
            if(licznik == 1)
            {
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 60000;
            }
            else if(licznik == 2)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 60000;
            }
            else if(licznik == 3)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 60000;
            }
            else if(licznik == 4)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 60000;
            }
        }
        $('#targ').html('');
}

function walter()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 10000;
        $('#dom'+liczbaoczek+'-'+kaal).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 10000;
        $('#dom'+liczbaoczek2+'-'+kaal).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 10000;
        $('#dom'+liczbaoczek3+'-'+kaal).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 10000;
        $('#dom'+liczbaoczek4+'-'+kaal).css('opacity', '1');
    }
    kaal++;
    if(kaal > 5)
    {
        $('#targ').html('');
    }
    if(kaal == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
        kaal++
    }
}

function walter2()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 10000;
        $('#dom'+liczbaoczek+'-'+kaal2).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 10000;
        $('#dom'+liczbaoczek2+'-'+kaal2).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 10000;
        $('#dom'+liczbaoczek3+'-'+kaal2).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 10000;
        $('#dom'+liczbaoczek4+'-'+kaal2).css('opacity', '1');
    }
    if(kaal2 > 5)
    {
        $('#targ').html('');
    }
    kaal2++;
    if(kaal2 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter3()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 15000;
        $('#dom'+liczbaoczek+'-'+kaal3).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 15000;
        $('#dom'+liczbaoczek2+'-'+kaal3).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 15000;
        $('#dom'+liczbaoczek3+'-'+kaal3).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 15000;
        $('#dom'+liczbaoczek4+'-'+kaal3).css('opacity', '1');
    }
    if(kaal3 > 5)
    {
        $('#targ').html('');
    }
    kaal3++;
    if(kaal3 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter4()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 15000;
        $('#dom'+liczbaoczek+'-'+kaal4).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 15000;
        $('#dom'+liczbaoczek2+'-'+kaal4).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 15000;
        $('#dom'+liczbaoczek3+'-'+kaal4).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 15000;
        $('#dom'+liczbaoczek4+'-'+kaal4).css('opacity', '1');
    }
    if(kaal2 > 5)
    {
        $('#targ').html('');
    }
    kaal4++;
    if(kaal4 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter5()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 15000;
        $('#dom'+liczbaoczek+'-'+kaal5).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 15000;
        $('#dom'+liczbaoczek2+'-'+kaal5).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 15000;
        $('#dom'+liczbaoczek3+'-'+kaal5).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 15000;
        $('#dom'+liczbaoczek4+'-'+kaal5).css('opacity', '1');
    }
    if(kaal2 > 5)
    {
        $('#targ').html('');
    }
    kaal5++;
    if(kaal5 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter6()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 25000;
        $('#dom'+liczbaoczek+'-'+kaal6).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 25000;
        $('#dom'+liczbaoczek2+'-'+kaal6).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 25000;
        $('#dom'+liczbaoczek3+'-'+kaal6).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 25000;
        $('#dom'+liczbaoczek4+'-'+kaal6).css('opacity', '1');
    }
    if(kaal2 > 5)
    {
        $('#targ').html('');
    }
    kaal6++;
    if(kaal6 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter7()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 25000;
        $('#dom'+liczbaoczek+'-'+kaal7).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 25000;
        $('#dom'+liczbaoczek2+'-'+kaal7).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 25000;
        $('#dom'+liczbaoczek3+'-'+kaal7).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 25000;
        $('#dom'+liczbaoczek4+'-'+kaal7).css('opacity', '1');
    }
    if(kaal2 > 5)
    {
        $('#targ').html('');
    }
    kaal7++;
    if(kaal7 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter8()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 25000;
        $('#dom'+liczbaoczek+'-'+kaal8).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 25000;
        $('#dom'+liczbaoczek2+'-'+kaal8).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 25000;
        $('#dom'+liczbaoczek3+'-'+kaal8).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 25000;
        $('#dom'+liczbaoczek4+'-'+kaal8).css('opacity', '1');
    }
    if(kaal8 > 5)
    {
        $('#targ').html('');
    }
    kaal8++;
    if(kaal8 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter9()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 30000;
        $('#dom'+liczbaoczek+'-'+kaal9).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 30000;
        $('#dom'+liczbaoczek2+'-'+kaal9).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 30000;
        $('#dom'+liczbaoczek3+'-'+kaal9).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 30000;
        $('#dom'+liczbaoczek4+'-'+kaal9).css('opacity', '1');
    }
    if(kaal9 > 5)
    {
        $('#targ').html('');
    }
    kaal9++;
    if(kaal9 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter10()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 30000;
        $('#dom'+liczbaoczek+'-'+kaal10).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 30000;
        $('#dom'+liczbaoczek2+'-'+kaal10).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 30000;
        $('#dom'+liczbaoczek3+'-'+kaal10).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 30000;
        $('#dom'+liczbaoczek4+'-'+kaal10).css('opacity', '1');
    }
    if(kaal10 > 5)
    {
        $('#targ').html('');
    }
    kaal10++;
    if(kaal10 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter11()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 30000;
        $('#dom'+liczbaoczek+'-'+kaal11).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 30000;
        $('#dom'+liczbaoczek2+'-'+kaal11).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 30000;
        $('#dom'+liczbaoczek3+'-'+kaal11).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 30000;
        $('#dom'+liczbaoczek4+'-'+kaal11).css('opacity', '1');
    }
    if(kaal11 > 5)
    {
        $('#targ').html('');
    }
    kaal11++;
    if(kaal11 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter12()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 40000;
        $('#dom'+liczbaoczek+'-'+kaal12).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 40000;
        $('#dom'+liczbaoczek2+'-'+kaal12).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 40000;
        $('#dom'+liczbaoczek3+'-'+kaal12).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 40000;
        $('#dom'+liczbaoczek4+'-'+kaal12).css('opacity', '1');
    }
    if(kaal2 > 5)
    {
        $('#targ').html('');
    }
    kaal12++;
    if(kaal12 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter13()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 40000;
        $('#dom'+liczbaoczek+'-'+kaal13).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 40000;
        $('#dom'+liczbaoczek2+'-'+kaal13).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 40000;
        $('#dom'+liczbaoczek3+'-'+kaal13).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 40000;
        $('#dom'+liczbaoczek4+'-'+kaal13).css('opacity', '1');
    }
    if(kaal13 > 5)
    {
        $('#targ').html('');
    }
    kaal13++;
    if(kaal13 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter14()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 40000;
        $('#dom'+liczbaoczek+'-'+kaal14).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 40000;
        $('#dom'+liczbaoczek2+'-'+kaal14).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 40000;
        $('#dom'+liczbaoczek3+'-'+kaal14).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 40000;
        $('#dom'+liczbaoczek4+'-'+kaal14).css('opacity', '1');
    }
    if(kaal14 > 5)
    {
        $('#targ').html('');
    }
    kaal14++;
    if(kaal14 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter15()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 45000;
        $('#dom'+liczbaoczek+'-'+kaal15).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 45000;
        $('#dom'+liczbaoczek2+'-'+kaal15).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 45000;
        $('#dom'+liczbaoczek3+'-'+kaal15).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 45000;
        $('#dom'+liczbaoczek4+'-'+kaal15).css('opacity', '1');
    }
    if(kaal15 > 5)
    {
        $('#targ').html('');
    }
    kaal15++;
    if(kaal15 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter16()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 45000;
        $('#dom'+liczbaoczek+'-'+kaal16).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 45000;
        $('#dom'+liczbaoczek2+'-'+kaal16).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 45000;
        $('#dom'+liczbaoczek3+'-'+kaal16).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 45000;
        $('#dom'+liczbaoczek4+'-'+kaal16).css('opacity', '1');
    }
    if(kaal16 > 5)
    {
        $('#targ').html('');
    }
    kaal16++;
    if(kaal16 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter17()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 45000;
        $('#dom'+liczbaoczek+'-'+kaal17).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 45000;
        $('#dom'+liczbaoczek2+'-'+kaal17).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 45000;
        $('#dom'+liczbaoczek3+'-'+kaal17).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 45000;
        $('#dom'+liczbaoczek4+'-'+kaal17).css('opacity', '1');
    }
    if(kaal17 > 5)
    {
        $('#targ').html('');
    }
    kaal17++;
    if(kaal17 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter18()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 55000;
        $('#dom'+liczbaoczek+'-'+kaal18).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 55000;
        $('#dom'+liczbaoczek2+'-'+kaal18).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 55000;
        $('#dom'+liczbaoczek3+'-'+kaal18).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 55000;
        $('#dom'+liczbaoczek4+'-'+kaal18).css('opacity', '1');
    }
    if(kaal18 > 5)
    {
        $('#targ').html('');
    }
    kaal18++;
    if(kaal18 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter19()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 55000;
        $('#dom'+liczbaoczek+'-'+kaal19).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 55000;
        $('#dom'+liczbaoczek2+'-'+kaal19).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 55000;
        $('#dom'+liczbaoczek3+'-'+kaal19).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 55000;
        $('#dom'+liczbaoczek4+'-'+kaal19).css('opacity', '1');
    }
    if(kaal19 > 5)
    {
        $('#targ').html('');
    }
    kaal19++;
    if(kaal19 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}


function walter20()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 55000;
        $('#dom'+liczbaoczek+'-'+kaal20).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 55000;
        $('#dom'+liczbaoczek2+'-'+kaal20).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 55000;
        $('#dom'+liczbaoczek3+'-'+kaal20).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 55000;
        $('#dom'+liczbaoczek4+'-'+kaal20).css('opacity', '1');
    }
    if(kaal14 > 5)
    {
        $('#targ').html('');
    }
    kaal20++;
    if(kaal20 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter21()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 60000;
        $('#dom'+liczbaoczek+'-'+kaal21).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 60000;
        $('#dom'+liczbaoczek2+'-'+kaal21).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 60000;
        $('#dom'+liczbaoczek3+'-'+kaal21).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 60000;
        $('#dom'+liczbaoczek4+'-'+kaal21).css('opacity', '1');
    }
    if(kaal21 > 5)
    {
        $('#targ').html('');
    }
    kaal21++;
    if(kaal21 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

function walter22()
{
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 60000;
        $('#dom'+liczbaoczek+'-'+kaal22).css('opacity', '1');
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 60000;
        $('#dom'+liczbaoczek2+'-'+kaal22).css('opacity', '1');
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 60000;
        $('#dom'+liczbaoczek3+'-'+kaal22).css('opacity', '1');
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 60000;
        $('#dom'+liczbaoczek4+'-'+kaal22).css('opacity', '1');
    }
    if(kaal22 > 5)
    {
        $('#targ').html('');
    }
    kaal22++;
    if(kaal22 == 5)
    {
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
}

var kupiona1 = 0; var kupiona2 = 0; var kupiona3 = 0; var kupiona4 = 0; var kupiona5 = 0; var kupiona6 = 0; var kupiona7 = 0;
var kupiona8 = 0; var kupiona9 = 0; var kupiona10 = 0; var kupiona11 = 0; var kupiona12 = 0; var kupiona13 = 0; var kupiona14 = 0;
var kupiona15 = 0; var kupiona16 = 0; var kupiona17 = 0; var kupiona18 = 0; var kupiona19 = 0; var kupiona20 = 0; var kupiona21 = 0;
var kupiona22 = 0;

var cos = "chartreuse";

function gus() 
{
    kupiona1 = 1;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 5000;
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja = 1;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 5000;
        $('#d'+liczbaoczek).css('color', "chartreuse");
        czyja = 2;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 5000;
        $('#d'+liczbaoczek).css('color', 'fuchsia');
        czyja = 3;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 5000;
        $('#d'+liczbaoczek).css('color', 'black');
        czyja = 4;
    }
    if(kupiona1 == 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
    }
}

function gus2() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja2 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja2 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja2 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja2 = 4;
    }
    kupiona2 = 1;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 5000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 5000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 5000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 5000;
    }
    if(kupiona2 == 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter2()">Czy chcesz kupić domek?</span>');
    }
}

function gus3() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja3 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja3 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja3 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja3 = 4;
    }
    kupiona3 = 1;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 11000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 11000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 11000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 11000;
    }
    if(kupiona3 == 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter3()">Czy chcesz kupić domek?</span>');
    }
}

function gus4() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja4 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja4 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja4 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja4 = 4;
    }
    kupiona4++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 15000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 15000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 15000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 15000;
    }
    if(kupiona4 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter4()">Czy chcesz kupić domek?</span>');
    }
}

function gus5() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja5 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja5 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja5 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja5 = 4;
    }
    kupiona5++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 20000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 20000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 20000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 20000;
    }
    if(kupiona5 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter5()">Czy chcesz kupić domek?</span>');
    }
}

function gus6() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja6 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja6 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja6 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja6 = 4;
    }
    kupiona6++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 35000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 35000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 35000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 35000;
    }
    if(kupiona6 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter6()">Czy chcesz kupić domek?</span>');
    }
}

function gus7() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja7 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja7 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja7 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
    }
    kupiona7++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 35000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 35000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 35000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 35000;
    }
    if(kupiona7 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter7()">Czy chcesz kupić domek?</span>');
    }
}

function gus8() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja8 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja8 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja8 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja8 = 4;
    }
    kupiona8++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 40000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 40000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 40000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 40000;
    }
    if(kupiona8 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter8()">Czy chcesz kupić domek?</span>');
    }
}

function gus9() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja9 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja9 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja9 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja9 = 4;
    }
    kupiona9++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 55000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 55000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 55000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 55000;
    }
    if(kupiona9 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter9()">Czy chcesz kupić domek?</span>');
    }
}

function gus10() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja10 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja11 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja11 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja11 = 4;
    }
    kupiona10++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 55000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 55000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 55000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 55000;
    }
    if(kupiona10 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter10()">Czy chcesz kupić domek?</span>');
    }
}

function gus11() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja11 = 1
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja11 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja11 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja11 = 4;
    }
    kupiona11++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 60000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 60000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 60000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 60000;
    }
    if(kupiona11 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter11()">Czy chcesz kupić domek?</span>');
    }
}

function gus12() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja12 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja12 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja12 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja12 = 4;
    }
    kupiona12++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 80000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 80000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 80000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 80000;
    }
    if(kupiona12 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter12()">Czy chcesz kupić domek?</span>');
    }
}

function gus13() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja13 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja13 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja13 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja13 = 4;
    }
    kupiona13++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 80000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 80000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 80000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 80000;
    }
    if(kupiona13 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter13()">Czy chcesz kupić domek?</span>');
    }
}

function gus14() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja14 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja14 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja14 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja14 = 4;
    }
    kupiona14++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 90000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 90000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 90000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 90000;
    }
    if(kupiona14 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter14()">Czy chcesz kupić domek?</span>');
    }
}

function gus15() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja15 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja15 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja15 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja15 = 4;
    }
    kupiona15++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 115000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 115000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 115000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 115000;
    }
    if(kupiona15 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter15()">Czy chcesz kupić domek?</span>');
    }
}

function gus16() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja16 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja16 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja16 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja16 = 4;
    }
    kupiona16++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 115000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 115000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 115000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 115000;
    }
    if(kupiona16 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter16()">Czy chcesz kupić domek?</span>');
    }
}

function gus17() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja17 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja17 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja17 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja17 = 4;
    }
    kupiona17++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 120000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 120000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 120000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 120000;
    }
    if(kupiona17 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter17()">Czy chcesz kupić domek?</span>');
    }
}

function gus18() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja18 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja18 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja18 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja18 = 4;
    }
    kupiona18++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 145000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 145000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 145000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 145000;
    }
    if(kupiona18 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter18()">Czy chcesz kupić domek?</span>');
    }
}

function gus19() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja19 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja19 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja19 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja19 = 4;
    }
    kupiona19++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 145000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 145000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 145000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 145000;
    }
    if(kupiona19 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter19()">Czy chcesz kupić domek?</span>');
    }
}

function gus20() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja20 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja20 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja20 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja20 = 4;
    }
    kupiona20++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 150000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 150000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 150000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 150000;
    }
    if(kupiona20 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter20()">Czy chcesz kupić domek?</span>');
    }
}

function gus21() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja21 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja21 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja21 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja21 = 4;
    }
    kupiona21++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 170000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 170000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 170000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 170000;
    }
    if(kupiona21 >= 1)
    {
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter21()">Czy chcesz kupić domek?</span>');
    }
}

function gus22() 
{
    if(licznik == 1)
    {
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja22 = 1;
    }
    else if(licznik == 2)
    {
        $('#d'+liczbaoczek2).css('color', 'chartreuse');
        czyja22 = 2;
    }
    else if(licznik == 3)
    {
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja22 = 3;
    }
    else if(licznik == 4)
    {
        $('#d'+liczbaoczek4).css('color', 'navy');
        czyja22 = 4;
    }
    kupiona22++;
    if(licznik == 1)
    {
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 200000;
    }
    else if(licznik == 2)
    {
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 200000;
    }
    else if(licznik == 3)
    {
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 200000;
    }
    else if(licznik == 4)
    {
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 200000;
    }
}

var licznik = 1; 

$('#ba1').addClass('klik');

balans1.addEventListener("click", function() {tura1(); });
balans2.addEventListener("click", function() {tura2(); });
balans3.addEventListener("click", function() {tura3(); });
balans4.addEventListener("click", function() {tura4(); });

function tura1()
{
    let rzutkostkami = 4;
    $('#a'+liczbaoczek).css('opacity', '0');
    document.getElementById("kosc").innerHTML = liczbaoczek = liczbaoczek + rzutkostkami;
    if(liczbaoczek == 32)
    {
        $('#a0').css('opacity', '1');
        liczbaoczek = 0;
        $('#targ').html('');
        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - odkrywki[liczbaoczek];
    }
    if(liczbaoczek > 31)
    {
        liczbaoczek = liczbaoczek - 32;
    }
    $('#a'+liczbaoczek).css('opacity', '1');
    let opacityValue = $('#a'+liczbaoczek).css('opacity');
    if(opacityValue == 1)
    {
        if(liczbaoczek == 8)
        {
            $('#targ').html('');           
        }
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
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek).css('background-color', 'red');
            $('#od'+liczbaoczek).css('border-color', 'red');
            $('#od'+liczbaoczek).css('opacity', '0.99');
            if(liczbaoczek != 2 && liczbaoczek != 5)
            {
                if(liczbaoczek == 1)
                {
                    if(kupiona1 == 0 && czyja == 0)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja == 1)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja != 0 && czyja != 1)
                    {
                        $('#targ').html('');
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 7000;
                        if(kaal == 2)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 8000;
                        }
                        else if(kaal == 3)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 23000;
                        }
                        else if(kaal == 4)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 43000;
                        }
                        else if(kaal == 5)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 53000;
                        }
                        else if(kaal == 6)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 73000;
                        }
                        if(czyja == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 7000;

                            if(kaal == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 8000;
                            }
                            else if(kaal == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 23000;
                            }
                            else if(kaal == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 43000;
                            }
                            else if(kaal == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 53000;
                            }
                            else if(kaal == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 73000;
                            }
                        }
                        else if(czyja == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 7000;

                            if(kaal == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 8000;
                            }
                            else if(kaal == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 23000;
                            }
                            else if(kaal == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 43000;
                            }
                            else if(kaal == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 53000;
                            }
                            else if(kaal == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 73000;
                            }
                        }
                        else if(czyja == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 7000;

                            if(kaal == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 8000;
                            }
                            else if(kaal == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 23000;
                            }
                            else if(kaal == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 43000;
                            }
                            else if(kaal == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 53000;
                            }
                            else if(kaal == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 73000;
                            }
                        }
                    }
                }
                else if(liczbaoczek == 3)
                {
                    if(kupiona2 == 0)
                    {
                        if(kupiona1 == 0 && czyja2 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus2()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja2 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter2()">Czy chcesz kupić domek?</span>');
                        }
                    else if(czyja2 != 0 && czyja2 != 1)
                    {
                        $('#targ').html('');
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 7000;
                        if(kaal2 == 2)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 7000;
                        }
                        else if(kaal2 == 3)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 23000;
                        }
                        else if(kaal2 == 4)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 43000;
                        }
                        else if(kaal2 == 5)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 53000;
                        }
                        else if(kaal2 == 6)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 73000;
                        }
                        if(czyja2 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 7000;

                            if(kaal2 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 8000;
                            }
                            else if(kaal2 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 23000;
                            }
                            else if(kaal2 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 43000;
                            }
                            else if(kaal2 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 53000;
                            }
                            else if(kaal2 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 73000;
                            }
                        }
                        else if(czyja2 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 7000;
                            if(kaal2 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 8000;
                            }
                            else if(kaal2 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 23000;
                            }
                            else if(kaal2 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 43000;
                            }
                            else if(kaal2 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 53000;
                            }
                            else if(kaal2 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 73000;
                            }
                        }
                        else if(czyja2 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 7000;

                            if(kaal2 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 8000;
                            }
                            else if(kaal2 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 23000;
                            }
                            else if(kaal2 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 43000;
                            }
                            else if(kaal2 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 53000;
                            }
                            else if(kaal2 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 73000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek == 4)
                {
                    if(kupiona3 == 0)
                    {
                    if(kupiona3 == 0 && czyja3 == 0)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus3()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja3 == 1)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter3()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja3 != 0 && czyja3 != 1)
                    {
                        $('#targ').html('');
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 15000;
                        if(kaal3 == 2)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 15000;
                        }
                        else if(kaal3 == 3)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 35000;
                        }
                        else if(kaal3 == 4)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 65000;
                        }
                        else if(kaal3 == 5)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 80000;
                        }
                        else if(kaal3 == 6)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 110000;
                        }
                        if(czyja3 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;

                            if(kaal3 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;
                            }
                            else if(kaal3 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                            }
                            else if(kaal3 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                            }
                            else if(kaal3 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 80000;
                            }
                            else if(kaal3 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 110000;
                            }
                        }
                        else if(czyja3 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;

                            if(kaal3 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;
                            }
                            else if(kaal3 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                            }
                            else if(kaal3 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                            }
                            else if(kaal3 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 80000;
                            }
                            else if(kaal3 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 110000;
                            }
                        }
                        else if(czyja3 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;

                            if(kaal3 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;
                            }
                            else if(kaal3 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                            }
                            else if(kaal3 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                            }
                            else if(kaal3 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 80000;
                            }
                            else if(kaal3 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 110000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek == 6)
                {
                    if(kupiona4 == 0)
                    {
                        if(kupiona4 == 0 && czyja4 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus4()">Czy chcesz kupić tą działke?</span>');
                        }
                    else if(czyja4 == 1)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter4()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja4 != 0 && czyja4 != 1)
                    {
                        $('#targ').html('');
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 15000;
                        if(kaal4 == 2)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 15000;
                        }
                        else if(kaal4 == 3)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 35000;
                        }
                        else if(kaal4 == 4)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 65000;
                        }
                        else if(kaal4 == 5)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 80000;
                        }
                        else if(kaal4 == 6)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 110000;
                        }
                        if(czyja4 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;

                            if(kaal4 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;
                            }
                            else if(kaal4 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                            }
                            else if(kaal4 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                            }
                            else if(kaal4 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 80000;
                            }
                            else if(kaal4 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 110000;
                            }
                        }
                        else if(czyja4 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;

                            if(kaal4 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;
                            }
                            else if(kaal4 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                            }
                            else if(kaal4 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                            }
                            else if(kaal4 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 80000;
                            }
                            else if(kaal4 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 110000;
                            }
                        }
                        else if(czyja4 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;

                            if(kaal4 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;
                            }
                            else if(kaal4 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                            }
                            else if(kaal4 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                            }
                            else if(kaal4 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 80000;
                            }
                            else if(kaal4 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 110000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek == 7)
                {
                    if(kupiona5 == 0)
                    {
                        if(kupiona5 == 0 && czyja5 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus5()">Czy chcesz kupić tą działke?</span>');
                        }
                    else if(czyja5 == 1)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter5()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja5 != 0 && czyja5 != 1)
                    {
                        $('#targ').html('');
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 7000;
                        if(kaal5 == 2)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 7000;
                        }
                        else if(kaal5 == 3)
                        {
                            document.getElementById("ba1").innerHTML = bilans1= bilans1 - 23000;
                        }
                        else if(kaal5 == 4)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 43000;
                        }
                        else if(kaal5 == 5)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 53000;
                        }
                        else if(kaal5 == 6)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 73000;
                        }
                        if(czyja5 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans1 = bilans1 + 15000;

                            if(kaal5 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;
                            }
                            else if(kaal5 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                            }
                            else if(kaal5 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                            }
                            else if(kaal5 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 80000;
                            }
                            else if(kaal5 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 110000;
                            }
                        }
                        else if(czyja5 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;

                            if(kaal5 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;
                            }
                            else if(kaal5 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                            }
                            else if(kaal5 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                            }
                            else if(kaal5 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 80000;
                            }
                            else if(kaal5 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 110000;
                            }
                        }
                        else if(czyja5 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;

                            if(kaal5 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;
                            }
                            else if(kaal5 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                            }
                            else if(kaal5 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                            }
                            else if(kaal5 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 80000;
                            }
                            else if(kaal5 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 110000;
                            }
                        }
                    }
                    }
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
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek).css('opacity', '0.99');
            if(liczbaoczek != 13)
            {
                if(liczbaoczek == 9)
                {
                    if(kupiona6 == 0)
                    {
                        if(kupiona6 == 0 && czyja6 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus6()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja6 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter6()">Czy chcesz kupić domek?</span>');
                        }
                    else if(czyja6 != 0 && czyja6 != 1)
                    {
                        $('#targ').html('');
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 20000;
                        if(kaal6 == 2)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 30000;
                        }
                        else if(kaal6 == 3)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 70000;
                        }
                        else if(kaal6 == 4)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 120000;
                        }
                        else if(kaal6 == 5)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 145000;
                        }
                        else if(kaal6 == 6)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 195000;
                        }
                        if(czyja6 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 20000;

                            if(kaal6 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 30000;
                            }
                            else if(kaal6 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 70000;
                            }
                            else if(kaal6 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                            }
                            else if(kaal6 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                            }
                            else if(kaal6 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                            }
                        }
                        else if(czyja6 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 20000;

                            if(kaal6 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 30000;
                            }
                            else if(kaal6 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 70000;
                            }
                            else if(kaal6 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                            }
                            else if(kaal6 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                            }
                            else if(kaal6 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                            }
                        }
                        else if(czyja6 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 20000;

                            if(kaal6 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 30000;
                            }
                            else if(kaal6 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 70000;
                            }
                            else if(kaal6 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                            }
                            else if(kaal6 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                            }
                            else if(kaal6 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek == 10)
                {
                    if(kupiona7 == 0)
                    {
                        if(kupiona7 == 0 && czyja7 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus7()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja7 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter7()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja7 != 0 && czyja7 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 20000;
                            if(kaal7 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 30000;
                            }
                            else if(kaal7 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 70000;
                            }
                            else if(kaal7 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 120000;
                            }
                            else if(kaal7 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 145000;
                            }
                            else if(kaal7 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 195000;
                            }
                            if(czyja7 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 20000;

                                if(kaal7 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 30000;
                                }
                                else if(kaal7 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 70000;
                                }
                                else if(kaal7 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal7 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                                }
                                else if(kaal7 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                            }
                            else if(czyja7 == 2)
                            {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 20000;

                            if(kaal7 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 30000;
                            }
                            else if(kaal7 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 70000;
                            }
                            else if(kaal7 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                            }
                            else if(kaal7 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                            }
                            else if(kaal7 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                            }
                            }
                            else if(czyja7 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 20000;

                                if(kaal7 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 30000;
                                }
                                else if(kaal7 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 70000;
                                }
                                else if(kaal7 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal7 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal7 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                            }
                        }
                    }   
                }
                else if(liczbaoczek == 11)
                {
                    if(kupiona8 == 0)
                    {
                        if(kupiona8 == 0 && czyja8 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus8()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja8 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter8()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja8 != 0 && czyja8 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 20000;
                            if(kaal8 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 30000;
                            }
                            else if(kaal8 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 70000;
                            }
                            else if(kaal8 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 120000;
                            }
                            else if(kaal8 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 145000;
                            }
                            else if(kaal8 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 195000;
                            }
                            if(czyja8 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 20000;

                                if(kaal8 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 30000;
                                }
                                else if(kaal8 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 70000;
                                }
                                else if(kaal8 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal8 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                                }
                                else if(kaal8 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                            }
                            else if(czyja8 == 2)
                            {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 20000;

                            if(kaal8 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 30000;
                            }
                            else if(kaal8 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 70000;
                            }
                            else if(kaal8 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                            }
                            else if(kaal8 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                            }
                            else if(kaal8 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                            }
                            }
                            else if(czyja8 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 20000;

                                if(kaal8 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 30000;
                                }
                                else if(kaal8 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 70000;
                                }
                                else if(kaal8 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal8 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal8 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                            }
                        }
                    }   
                }
            
                else if(liczbaoczek == 12)
                {
                    if(kupiona9 == 0 && czyja9 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus9()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja9 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter9()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja9 != 0 && czyja9 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 25000;
                            if(kaal9 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 40000;
                            }
                            else if(kaal9 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 85000;
                            }
                            else if(kaal9 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 145000;
                            }
                            else if(kaal9 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 175000;
                            }
                            else if(kaal9 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 245000;
                            }
                            
                            if(czyja9 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 25000;
                                if(kaal9 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                }
                                else if(kaal9 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 85000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                                }
                                else if(kaal9 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 175000;
                                }
                                else if(kaal9 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 245000;
                                }
                            }
                            
                            else if(czyja9 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 25000;
                                if(kaal9 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                }   
                                else if(kaal9 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 85000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                                }
                                else if(kaal9 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 175000;
                                }
                                else if(kaal9 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 245000;
                                }
                            }
                            
                            else if(czyja9 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 25000;

                                if(kaal9 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                }
                                else if(kaal9 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 85000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal9 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 175000;
                                }
                                else if(kaal9 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 245000;
                                }
                            }
                        }  
                }
            
                else if(liczbaoczek == 14)
                {
                    if(kupiona10 == 0 && czyja10 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus10()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja10 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter10()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja10 != 0 && czyja10 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 25000;
                            if(kaal10 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 40000;
                            }
                            else if(kaal10 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 85000;
                            }
                            else if(kaal10 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 145000;
                            }
                            else if(kaal10 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 175000;
                            }
                            else if(kaal10 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 245000;
                            }
                            
                            if(czyja10 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 25000;
                                if(kaal10 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                }
                                else if(kaal10 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 85000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                                }
                                else if(kaal10 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 175000;
                                }
                                else if(kaal10 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 245000;
                                }
                            }
                            
                            else if(czyja10 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 25000;
                                if(kaal10 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                }
                                else if(kaal10 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 85000;
                                }
                                else if(kaal10 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                                }
                                else if(kaal10 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 175000;
                                }
                                else if(kaal10 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 245000;
                                }
                            }
                            
                            else if(czyja10 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 25000;

                                if(kaal10 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                }
                                else if(kaal10 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 85000;
                                }
                                else if(kaal10 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal10 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 175000;
                                }
                                else if(kaal10 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 245000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek == 15)
                {
                    if(kupiona11 == 0 && czyja11 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus11()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja11 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter11()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja11 != 0 && czyja11 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 25000;
                            if(kaal11 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 40000;
                            }
                            else if(kaal11 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 85000;
                            }
                            else if(kaal11 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 145000;
                            }
                            else if(kaal11 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 175000;
                            }
                            else if(kaal11 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 245000;
                            }
                            
                            if(czyja11 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 25000;
                                if(kaal11 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                }
                                else if(kaal11 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 85000;
                                }
                                else if(kaal11 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                                }
                                else if(kaal11 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 175000;
                                }
                                else if(kaal11 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 245000;
                                }
                            }
                            
                            else if(czyja11 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 25000;
                                if(kaal11 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                }
                                else if(kaal11 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 85000;
                                }
                                else if(kaal11 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                                }
                                else if(kaal11 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 175000;
                                }
                                else if(kaal11 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 245000;
                                }
                            }
                            else if(czyja11 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 25000;

                                if(kaal11 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                }
                                else if(kaal11 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 85000;
                                }
                                else if(kaal11 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal11 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 175000;
                                }
                                else if(kaal11 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 245000;
                                }
                            }
                        }  
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
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek).css('background-color', 'red');
            $('#od'+liczbaoczek).css('border-color', 'red');
            $('#od'+liczbaoczek).css('opacity', '0.99');
            if(liczbaoczek != 18)
            {
                if(liczbaoczek == 17)
                {
                    if(kupiona12 == 0 && czyja12 == 0)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus12()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja12 == 3)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter12()">Czy chcesz kupić domek?</span>');
                    }
                        else if(czyja12 != 0 && czyja12 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 35000;
                            if(kaal12 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 55000;
                            }
                            else if(kaal12 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 115000;
                            }
                            else if(kaal12 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 195000;
                            }
                            else if(kaal12 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 235000;
                            }
                            else if(kaal12 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 315000;
                            }
                            
                            if(czyja12 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                                if(kaal12 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 55000;
                                }
                                else if(kaal12 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 115000;
                                }
                                else if(kaal12 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                                else if(kaal12 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 235000;
                                }
                                else if(kaal12 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 315000;
                                }
                            }
                            
                            else if(czyja12 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                                if(kaal12 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 55000;
                                }
                                else if(kaal12 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 115000;
                                }
                                else if(kaal12 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                                }
                                else if(kaal12 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 235000;
                                }
                                else if(kaal12 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 315000;
                                }
                            }
                            
                            else if(czyja12 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                                if(kaal12 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 55000;
                                }
                                else if(kaal12 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 115000;
                                }
                                else if(kaal12 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                                else if(kaal12 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 235000;
                                }
                                else if(kaal12 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 315000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek == 19)
                {
                    if(kupiona13 == 0 && czyja13 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus13()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja13 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter13()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja13 != 0 && czyja13 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 35000;
                            if(kaal13 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 55000;
                            }
                            else if(kaal13 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 115000;
                            }
                            else if(kaal13 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 195000;
                            }
                            else if(kaal13 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 235000;
                            }
                            else if(kaal13 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 315000;
                            }
                            
                            if(czyja13 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                                if(kaal13 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 55000;
                                }
                                else if(kaal13 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 115000;
                                }
                                else if(kaal13 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                                else if(kaal13 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 235000;
                                }
                                else if(kaal13 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 315000;
                                }
                            }
                            
                            else if(czyja13 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                                if(kaal13 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 55000;
                                }
                                else if(kaal13 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 115000;
                                }
                                else if(kaal13 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                                }
                                else if(kaal13 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 235000;
                                }
                                else if(kaal13 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 315000;
                                }
                            }
                            
                            else if(czyja13 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                                if(kaal13 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 55000;
                                }
                                else if(kaal13 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 115000;
                                }
                                else if(kaal13 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                                else if(kaal13 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 235000;
                                }
                                else if(kaal13 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 315000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek == 20)
                {
                    if(kupiona14 == 0 && czyja14 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus14()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja14 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter14()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja14 != 0 && czyja14 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 35000;
                            if(kaal14 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 55000;
                            }
                            else if(kaal14 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 115000;
                            }
                            else if(kaal14 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 195000;
                            }
                            else if(kaal14 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 235000;
                            }
                            else if(kaal14 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 315000;
                            }
                            
                            if(czyja14 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                                if(kaal14 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 55000;
                                }
                                else if(kaal14 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 115000;
                                }
                                else if(kaal14 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                                else if(kaal14 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 235000;
                                }
                                else if(kaal14 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 315000;
                                }
                            }
                            
                            else if(czyja14 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                                if(kaal14 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 55000;
                                }
                                else if(kaal14 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 115000;
                                }
                                else if(kaal14 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                                }
                                else if(kaal14 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 235000;
                                }
                                else if(kaal14 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 315000;
                                }
                            }
                            
                            else if(czyja14 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                                if(kaal14 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 55000;
                                }
                                else if(kaal14 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 115000;
                                }
                                else if(kaal14 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                                else if(kaal14 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 235000;
                                }
                                else if(kaal14 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 315000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek == 21)
                {
                    if(kupiona15 == 0 && czyja15 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus15()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja15 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter15()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja15 != 0 && czyja15 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 40000;
                            if(kaal15 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 60000;
                            }
                            else if(kaal15 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 120000;
                            }
                            else if(kaal15 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 220000;
                            }
                            else if(kaal15 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 265000;
                            }
                            else if(kaal15 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 355000;
                            }
                            
                            if(czyja15 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 60000;
                                }
                                else if(kaal15 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal15 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 220000;
                                }
                                else if(kaal15 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 265000;
                                }
                                else if(kaal15 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 355000;
                                }
                            }
                            
                            else if(czyja15 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 60000;
                                }
                                else if(kaal15 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                                }
                                else if(kaal15 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 220000;
                                }
                                else if(kaal15 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 265000;
                                }
                                else if(kaal15 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 355000;
                                }
                            }
                            
                            else if(czyja15 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 60000;
                                }
                                else if(kaal15 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal15 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 220000;
                                }
                                else if(kaal15 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 265000;
                                }
                                else if(kaal15 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 355000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek == 22)
                {
                    if(kupiona16 == 0 && czyja16 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus16()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja16 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter16()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja16 != 0 && czyja16 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 40000;
                            if(kaal16 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 60000;
                            }
                            else if(kaal16 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 120000;
                            }
                            else if(kaal16 == 4)
                            {
                                document.getElementById("ba11").innerHTML = bilans1 = bilans1 - 220000;
                            }
                            else if(kaal16 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 265000;
                            }
                            else if(kaal16 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 355000;
                            }
                            
                            if(czyja16 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                if(kaal16 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 60000;
                                }
                                else if(kaal16 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal16 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 220000;
                                }
                                else if(kaal16 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 265000;
                                }
                                else if(kaal16 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 355000;
                                }
                            }
                            
                            else if(czyja16 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                if(kaal16 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 60000;
                                }
                                else if(kaal16 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                                }
                                else if(kaal16 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 220000;
                                }
                                else if(kaal16 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 265000;
                                }
                                else if(kaal16 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 355000;
                                }
                            }
                            
                            else if(czyja16 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                if(kaal16 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 60000;
                                }
                                else if(kaal16 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal16 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 220000;
                                }
                                else if(kaal16 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 265000;
                                }
                                else if(kaal16 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 355000;
                                }
                            }
                        }
                }
                else if(liczbaoczek == 23)
                {
                    if(kupiona17 == 0 && czyja17 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus17()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja17 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter17()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja17 != 0 && czyja17 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 40000;
                            if(kaal17 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 60000;
                            }
                            else if(kaal17 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 120000;
                            }
                            else if(kaal17 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 220000;
                            }
                            else if(kaal17 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 265000;
                            }
                            else if(kaal17 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 355000;
                            }
                            
                            if(czyja17 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                if(kaal17 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 60000;
                                }
                                else if(kaal17 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal17 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 220000;
                                }
                                else if(kaal17 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 265000;
                                }
                                else if(kaal17 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 355000;
                                }
                            }
                            
                            else if(czyja17 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                if(kaal17 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 60000;
                                }
                                else if(kaal17 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                                }
                                else if(kaal17 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 220000;
                                }
                                else if(kaal17 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 265000;
                                }
                                else if(kaal17 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 355000;
                                }
                            }
                            
                            else if(czyja17 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                if(kaal17 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 60000;
                                }
                                else if(kaal17 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal17 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 220000;
                                }
                                else if(kaal17 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 265000;
                                }
                                else if(kaal17 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 355000;
                                }
                            }
                        }
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
                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek).css('opacity', '0.99');
            if(liczbaoczek != 27 && liczbaoczek != 29)
            {
                if(liczbaoczek == 25)
                {
                    if(kupiona18 == 0 && czyja18 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus18()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja18 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter18()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja18 != 0 && czyja18 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 50000;
                            if(kaal18 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 75000;
                            }
                            else if(kaal18 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 160000;
                            }
                            else if(kaal18 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 270000;
                            }
                            else if(kaal18 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 325000;
                            }
                            else if(kaal18 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 435000;
                            }
                            
                            if(czyja18 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 50000;
                                if(kaal18 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 75000;
                                }
                                else if(kaal18 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 160000;
                                }
                                else if(kaal18 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 270000;
                                }
                                else if(kaal18 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 325000;
                                }
                                else if(kaal18 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 435000;
                                }
                            }
                            
                            else if(czyja18 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 50000;
                                if(kaal18 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 75000;
                                }
                                else if(kaal18 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 160000;
                                }
                                else if(kaal18 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 270000;
                                }
                                else if(kaal18 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 325000;
                                }
                                else if(kaal18 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 435000;
                                }
                            }
                            
                            else if(czyja15 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 50000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 75000;
                                }
                                else if(kaal18 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 160000;
                                }
                                else if(kaal18 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 270000;
                                }
                                else if(kaal18 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 325000;
                                }
                                else if(kaal18 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 435000;
                                }
                            }
                        }
                }
                else if(liczbaoczek == 26)
                {
                    if(kupiona19 == 0 && czyja19 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus19()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja19 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter19()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja19 != 0 && czyja19 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 50000;
                            if(kaal19 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 75000;
                            }
                            else if(kaal19 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 160000;
                            }
                            else if(kaal19 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 270000;
                            }
                            else if(kaal19 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 325000;
                            }
                            else if(kaal19 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 435000;
                            }
                            
                            if(czyja19 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 50000;
                                if(kaal19 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 75000;
                                }
                                else if(kaal19 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 160000;
                                }
                                else if(kaal19 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 270000;
                                }
                                else if(kaal19 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 325000;
                                }
                                else if(kaal19 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 435000;
                                }
                            }
                            
                            else if(czyja19 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 50000;
                                if(kaal19 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 75000;
                                }
                                else if(kaal19 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 160000;
                                }
                                else if(kaal19 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 270000;
                                }
                                else if(kaal19 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 325000;
                                }
                                else if(kaal19 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 435000;
                                }
                            }
                            
                            else if(czyja19 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 50000;
                                if(kaal19 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 75000;
                                }
                                else if(kaal19 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 160000;
                                }
                                else if(kaal19 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 270000;
                                }
                                else if(kaal19 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 325000;
                                }
                                else if(kaal19 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 435000;
                                }
                            }
                        }
                }
                else if(liczbaoczek == 28)
                {
                    if(kupiona20 == 0 && czyja20 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus20()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja20 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter20()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja20 != 0 && czyja20 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 50000;
                            if(kaal20 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 75000;
                            }
                            else if(kaal20 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 160000;
                            }
                            else if(kaal20 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 270000;
                            }
                            else if(kaal20 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 325000;
                            }
                            else if(kaal20 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 435000;
                            }
                            
                            if(czyja20 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 50000;
                                if(kaal20 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 75000;
                                }
                                else if(kaal20 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 160000;
                                }
                                else if(kaal20 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 270000;
                                }
                                else if(kaal20 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 325000;
                                }
                                else if(kaal20 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 435000;
                                }
                            }
                            
                            else if(czyja20 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 50000;
                                if(kaal20 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 75000;
                                }
                                else if(kaal20 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 160000;
                                }
                                else if(kaal20 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 270000;
                                }
                                else if(kaal20 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 325000;
                                }
                                else if(kaal20 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 435000;
                                }
                            }
                            
                            else if(czyja20 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 50000;
                                if(kaal20 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 75000;
                                }
                                else if(kaal20 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 160000;
                                }
                                else if(kaal20 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 270000;
                                }
                                else if(kaal20 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 325000;
                                }
                                else if(kaal20 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 435000;
                                }
                            }
                        }
                }
                else if(liczbaoczek == 30)
                {
                    if(kupiona21 == 0 && czyja21 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus21()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja21 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter21()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja21 != 0 && czyja21 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 65000;
                            if(kaal21 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 95000;
                            }
                            else if(kaal21 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 185000;
                            }
                            else if(kaal21 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 305000;
                            }
                            else if(kaal21 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 365000;
                            }
                            else if(kaal21 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 485000;
                            }
                            
                            if(czyja21 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                                if(kaal21 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 95000;
                                }
                                else if(kaal21 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 185000;
                                }
                                else if(kaal21 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 305000;
                                }
                                else if(kaal21 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 365000;
                                }
                                else if(kaal21 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 485000;
                                }
                            }
                            
                            else if(czyja21 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                                if(kaal21 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 95000;
                                }
                                else if(kaal21 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 185000;
                                }
                                else if(kaal21 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 305000;
                                }
                                else if(kaal21 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 365000;
                                }
                                else if(kaal21 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 485000;
                                }
                            }
                            
                            else if(czyja21 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                                if(kaal21 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 95000;
                                }
                                else if(kaal21 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 185000;
                                }
                                else if(kaal21 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 305000;
                                }
                                else if(kaal21 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 365000;
                                }
                                else if(kaal21 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 485000;
                                }
                            }
                        }
                }
                else if(liczbaoczek == 31)
                {
                    if(kupiona22 == 0 && czyja22 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus22()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja22 == 1)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter22()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja22 != 0 && czyja22 != 1)
                        {
                            $('#targ').html('');
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 65000;
                            if(kaal22 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 95000;
                            }
                            else if(kaal22 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 185000;
                            }
                            else if(kaal22 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 305000;
                            }
                            else if(kaal22 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 365000;
                            }
                            else if(kaal22 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 - 485000;
                            }
                            
                            if(czyja22 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                                if(kaal22 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 95000;
                                }
                                else if(kaal22 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 185000;
                                }
                                else if(kaal22 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 305000;
                                }
                                else if(kaal22 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 365000;
                                }
                                else if(kaal22 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 485000;
                                }
                            }
                            
                            else if(czyja22 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                                if(kaal22 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 95000;
                                }
                                else if(kaal22 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 185000;
                                }
                                else if(kaal22 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 305000;
                                }
                                else if(kaal22 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 365000;
                                }
                                else if(kaal22 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 485000;
                                }
                            }
                            
                            else if(czyja22 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                                if(kaal22 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 95000;
                                }
                                else if(kaal22 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 185000;
                                }
                                else if(kaal22 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 305000;
                                }
                                else if(kaal22 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 365000;
                                }
                                else if(kaal22 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 485000;
                                }
                            }
                        }
                }
            }
            else
            {
                $('#targ').html('');
            }
            }
    }
    $('#ba1').toggleClass('klik');
    $('#ba2').toggleClass('klik');
    if(licznik == 4) {licznik = 1};
}
function tura2()
{
    let rzutkostkami2 = 4;
    $('#b'+liczbaoczek2).css('opacity', '0');
    document.getElementById("kosc").innerHTML = liczbaoczek2 = liczbaoczek2 + rzutkostkami2;
    if(liczbaoczek2 == 32)
    {
        $('#b0').css('opacity', '1');
        liczbaoczek2 = 0;
        $('#targ').html('');
        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - odkrywki[liczbaoczek2];
    }
    if(liczbaoczek2 > 31)
    {
        liczbaoczek2 = liczbaoczek2 - 32;
    }
    $('#b'+liczbaoczek2).css('opacity', '1');
    let opacityValue2 = $('#b'+liczbaoczek2).css('opacity');
    if(opacityValue2 == 1)
    {
        if(liczbaoczek2 == 8)
        {
            $('#targ').html('');           
        }
        if(liczbaoczek2 == 16)
        {
            $('#targ').html('');
        }
        if(liczbaoczek2 == 24)
        {
            $('#targ').html('')
        }
        let hamza2 = $('#od'+liczbaoczek2).css('opacity');
        if(liczbaoczek2 < 8)
        {
            if(hamza2 != 0.99 && liczbaoczek2 != 2 && liczbaoczek2 != 5)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + odkrywki[liczbaoczek2];
            }
            $('#od'+liczbaoczek2).css('background-color', 'red');
            $('#od'+liczbaoczek2).css('border-color', 'red');
            $('#od'+liczbaoczek2).css('opacity', '0.99');
            if(liczbaoczek2 != 2 && liczbaoczek2 != 5)
            {
                if(liczbaoczek2 == 1)
                {
                    if(kupiona1 == 0 && czyja == 0)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja == 2)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja != 0 && czyja != 2)
                    {
                        $('#targ').html('');
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 7000;
                        if(kaal == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 8000;
                        }
                        else if(kaal == 3)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 23000;
                        }
                        else if(kaal == 4)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 43000;
                        }
                        else if(kaal == 5)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 53000;
                        }
                        else if(kaal == 6)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 73000;
                        }
                        if(czyja == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 7000;

                            if(kaal == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 8000;
                            }
                            else if(kaal == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 23000;
                            }
                            else if(kaal == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 43000;
                            }
                            else if(kaal == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 53000;
                            }
                            else if(kaal == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 73000;
                            }
                        }
                        else if(czyja == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 7000;

                            if(kaal == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 8000;
                            }
                            else if(kaal == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 23000;
                            }
                            else if(kaal == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 43000;
                            }
                            else if(kaal == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 53000;
                            }
                            else if(kaal == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 73000;
                            }
                        }
                        else if(czyja == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 7000;

                            if(kaal == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 8000;
                            }
                            else if(kaal == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 23000;
                            }
                            else if(kaal == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 43000;
                            }
                            else if(kaal == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 53000;
                            }
                            else if(kaal == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 73000;
                            }
                        }
                    }
                }
                else if(liczbaoczek2 == 3)
                {
                    if(kupiona2 == 0)
                    {
                        if(kupiona1 == 0 && czyja2 == 0)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus2()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja2 == 2)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter2()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja2 != 0 && czyja2 != 2)
                    {
                        $('#targ').html('');
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 7000;
                        if(kaal2 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 7000;
                        }
                        else if(kaal2 == 3)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 23000;
                        }
                        else if(kaal2 == 4)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 43000;
                        }
                        else if(kaal2 == 5)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 53000;
                        }
                        else if(kaal2 == 6)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 73000;
                        }
                        if(czyja2 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 7000;

                            if(kaal2 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 8000;
                            }
                            else if(kaal2 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 23000;
                            }
                            else if(kaal2 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 43000;
                            }
                            else if(kaal2 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 53000;
                            }
                            else if(kaal2 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 73000;
                            }
                        }
                        else if(czyja2 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 7000;

                            if(kaal2 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 8000;
                            }
                            else if(kaal2 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 23000;
                            }
                            else if(kaal2 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 43000;
                            }
                            else if(kaal2 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 53000;
                            }
                            else if(kaal2 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 73000;
                            }
                        }
                        else if(czyja2 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 7000;

                            if(kaal2 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 8000;
                            }
                            else if(kaal2 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 23000;
                            }
                            else if(kaal2 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 43000;
                            }
                            else if(kaal2 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 53000;
                            }
                            else if(kaal2 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 73000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek2 == 4)
                {
                    if(kupiona3 == 0)
                    {
                    if(kupiona3 == 0 && czyja3 == 0)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus3()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja3 == 2)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter3()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja3 != 0 && czyja3 != 2)
                    {
                        $('#targ').html('');
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 15000;
                        if(kaal3 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 15000;
                        }
                        else if(kaal3 == 3)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 35000;
                        }
                        else if(kaal3 == 4)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 65000;
                        }
                        else if(kaal3 == 5)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 80000;
                        }
                        else if(kaal3 == 6)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 110000;
                        }
                        if(czyja3 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;

                            if(kaal3 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;
                            }
                            else if(kaal3 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                            }
                            else if(kaal3 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                            }
                            else if(kaal3 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 80000;
                            }
                            else if(kaal3 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 110000;
                            }
                        }
                        else if(czyja3 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;

                            if(kaal3 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;
                            }
                            else if(kaal3 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                            }
                            else if(kaal3 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                            }
                            else if(kaal3 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 80000;
                            }
                            else if(kaal3 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 110000;
                            }
                        }
                        else if(czyja3 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;

                            if(kaal3 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;
                            }
                            else if(kaal3 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                            }
                            else if(kaal3 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                            }
                            else if(kaal3 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 80000;
                            }
                            else if(kaal3 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 110000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek2 == 6)
                {
                    if(kupiona4 == 0)
                    {
                        if(kupiona4 == 0 && czyja4 == 0)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus4()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja4 == 2)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter4()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja4 != 0 && czyja4 != 2)
                    {
                        $('#targ').html('');
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 15000;
                        if(kaal4 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 15000;
                        }
                        else if(kaal4 == 3)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 35000;
                        }
                        else if(kaal4 == 4)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 65000;
                        }
                        else if(kaal4 == 5)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 80000;
                        }
                        else if(kaal4 == 6)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 110000;
                        }
                        if(czyja4 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;

                            if(kaal4 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;
                            }
                            else if(kaal4 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                            }
                            else if(kaal4 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                            }
                            else if(kaal4 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 80000;
                            }
                            else if(kaal4 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 110000;
                            }
                        }
                        else if(czyja4 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;

                            if(kaal4 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;
                            }
                            else if(kaal4 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                            }
                            else if(kaal4 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                            }
                            else if(kaal4 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 80000;
                            }
                            else if(kaal4 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 110000;
                            }
                        }
                        else if(czyja4 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;

                            if(kaal4 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;
                            }
                            else if(kaal4 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                            }
                            else if(kaal4 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                            }
                            else if(kaal4 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 80000;
                            }
                            else if(kaal4 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 110000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek2 == 7)
                {
                    if(kupiona5 == 0)
                    {
                        if(kupiona5 == 0 && czyja5 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus5()">Czy chcesz kupić tą działke?</span>');
                        }
                    else if(czyja5 == 2)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter5()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja5 != 0 && czyja5 != 2)
                    {
                        $('#targ').html('');
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 7000;
                        if(kaal5 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 7000;
                        }
                        else if(kaal5 == 3)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 23000;
                        }
                        else if(kaal5 == 4)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 43000;
                        }
                        else if(kaal5 == 5)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 53000;
                        }
                        else if(kaal5 == 6)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 73000;
                        }
                        if(czyja5 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;

                            if(kaal5 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;
                            }
                            else if(kaal5 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                            }
                            else if(kaal5 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                            }
                            else if(kaal5 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 80000;
                            }
                            else if(kaal5 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 110000;
                            }
                        }
                        else if(czyja5 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;

                            if(kaal5 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;
                            }
                            else if(kaal5 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                            }
                            else if(kaal5 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                            }
                            else if(kaal5 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 80000;
                            }
                            else if(kaal5 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 110000;
                            }
                        }
                        else if(czyja5 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;

                            if(kaal5 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;
                            }
                            else if(kaal5 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                            }
                            else if(kaal5 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                            }
                            else if(kaal5 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 80000;
                            }
                            else if(kaal5 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 110000;
                            }
                        }
                    }
                    }
                }
            }
            else
            {
                $('#targ').html('');
            }
        }
        else if(liczbaoczek2 > 8 && liczbaoczek2 < 16)
        {
            if(hamza2 != 0.99 && liczbaoczek2 != 13)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + odkrywki[liczbaoczek2];
            }
            $('#od'+liczbaoczek2).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek2).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek2).css('opacity', '0.99');
            if(liczbaoczek2 != 13)
            {
                if(liczbaoczek2 == 9)
                {
                    if(kupiona6 == 0)
                    {
                        if(kupiona6 == 0 && czyja6 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus6()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja6 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter6()">Czy chcesz kupić domek?</span>');
                        }
                    else if(czyja6 != 0 && czyja6 != 2)
                    {
                        $('#targ').html('');
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 20000;
                        if(kaal6 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 30000;
                        }
                        else if(kaal6 == 3)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 70000;
                        }
                        else if(kaal6 == 4)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 120000;
                        }
                        else if(kaal6 == 5)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 145000;
                        }
                        else if(kaal6 == 6)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 195000;
                        }
                        if(czyja6 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 20000;

                            if(kaal6 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 30000;
                            }
                            else if(kaal6 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 70000;
                            }
                            else if(kaal6 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                            }
                            else if(kaal6 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                            }
                            else if(kaal6 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                            }
                        }
                        else if(czyja6 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 20000;

                            if(kaal6 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 30000;
                            }
                            else if(kaal6 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 70000;
                            }
                            else if(kaal6 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                            }
                            else if(kaal6 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                            }
                            else if(kaal6 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                            }
                        }
                        else if(czyja6 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 20000;

                            if(kaal6 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 30000;
                            }
                            else if(kaal6 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 70000;
                            }
                            else if(kaal6 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                            }
                            else if(kaal6 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                            }
                            else if(kaal6 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek2 == 10)
                {
                    if(kupiona7 == 0)
                    {
                        if(kupiona7 == 0 && czyja7 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus7()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja7 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter7()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja7 != 0 && czyja7 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 20000;
                            if(kaal7 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 30000;
                            }
                            else if(kaal7 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 70000;
                            }
                            else if(kaal7 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 120000;
                            }
                            else if(kaal7 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 145000;
                            }
                            else if(kaal7 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 195000;
                            }
                            if(czyja7 == 1)
                            {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 20000;

                            if(kaal7 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 30000;
                            }
                            else if(kaal7 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 70000;
                            }
                            else if(kaal7 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                            }
                            else if(kaal7 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                            }
                            else if(kaal7 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                            }
                            }
                            else if(czyja7 == 3)
                            {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 20000;

                            if(kaal7 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 30000;
                            }
                            else if(kaal7 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 70000;
                            }
                            else if(kaal7 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                            }
                            else if(kaal7 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                            }
                            else if(kaal7 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                            }
                            }
                            else if(czyja7 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 20000;

                                if(kaal7 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 30000;
                                }
                                else if(kaal7 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 70000;
                                }
                                else if(kaal7 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal7 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal7 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                            }
                        }
                    }   
                }
                else if(liczbaoczek2 == 11)
                {
                    if(kupiona8 == 0)
                    {
                        if(kupiona8 == 0 && czyja8 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus8()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja8 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter8()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja8 != 0 && czyja8 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 20000;
                            if(kaal8 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 30000;
                            }
                            else if(kaal8 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 70000;
                            }
                            else if(kaal8 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 120000;
                            }
                            else if(kaal8 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 145000;
                            }
                            else if(kaal8 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 195000;
                            }
                            if(czyja8 == 1)
                            {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 20000;

                            if(kaal8 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 30000;
                            }
                            else if(kaal8 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 70000;
                            }
                            else if(kaal8 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                            }
                            else if(kaal8 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                            }
                            else if(kaal8 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                            }
                            }
                            else if(czyja8 == 3)
                            {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 20000;

                            if(kaal8 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 30000;
                            }
                            else if(kaal8 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 70000;
                            }
                            else if(kaal8 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                            }
                            else if(kaal8 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                            }
                            else if(kaal8 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                            }
                            }
                            else if(czyja8 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 20000;

                                if(kaal8 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 30000;
                                }
                                else if(kaal8 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 70000;
                                }
                                else if(kaal8 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal8 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal8 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                            }
                        }
                    }   
                }
            
                else if(liczbaoczek2 == 12)
                {
                    if(kupiona9 == 0 && czyja9 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus9()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja9 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter9()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja9 != 0 && czyja9 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 25000;
                            if(kaal9 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 40000;
                            }
                            else if(kaal9 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 85000;
                            }
                            else if(kaal9 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 145000;
                            }
                            else if(kaal9 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 175000;
                            }
                            else if(kaal9 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 245000;
                            }
                            
                            if(czyja9 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 20000;
                                if(kaal9 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 30000;
                                }
                                else if(kaal9 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 70000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal9 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                                }
                                else if(kaal9 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                            }
                            
                            else if(czyja9 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 20000;
                                if(kaal9 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 30000;
                                }
                                else if(kaal9 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 70000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal9 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                                }
                                else if(kaal9 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                            }

                            else if(czyja9 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 20000;

                                if(kaal9 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 30000;
                                }
                                else if(kaal9 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 70000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal9 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal9 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                            }
                        }  
                }
            
                else if(liczbaoczek2 == 14)
                {
                    if(kupiona10 == 0 && czyja10 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus10()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja10 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter10()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja10 != 0 && czyja10 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 25000;
                            if(kaal10 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 40000;
                            }
                            else if(kaal10 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 85000;
                            }
                            else if(kaal10 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 145000;
                            }
                            else if(kaal10 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 175000;
                            }
                            else if(kaal10 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 245000;
                            }
                            
                            if(czyja10 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 20000;
                                if(kaal10 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 30000;
                                }
                                else if(kaal10 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 70000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal10 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                                }
                                else if(kaal10 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                            }
                            
                            else if(czyja10 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 20000;
                                if(kaal10 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 30000;
                                }
                                else if(kaal10 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 70000;
                                }
                                else if(kaal10 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal10 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                                }
                                else if(kaal10 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                            }
                            
                            else if(czyja10 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 20000;

                                if(kaal10 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 30000;
                                }
                                else if(kaal10 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 70000;
                                }
                                else if(kaal10 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal10 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal10 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek2 == 15)
                {
                    if(kupiona11 == 0 && czyja11 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus11()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja11 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter11()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja11 != 0 && czyja11 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 20000;
                            if(kaal11 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 30000;
                            }
                            else if(kaal11 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 70000;
                            }
                            else if(kaal11 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 120000;
                            }
                            else if(kaal11 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 145000;
                            }
                            else if(kaal11 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 195000;
                            }
                            
                            if(czyja11 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 20000;
                                if(kaal11 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 30000;
                                }
                                else if(kaal11 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 70000;
                                }
                                else if(kaal11 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal11 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                                }
                                else if(kaal11 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                            }
                            
                            else if(czyja11 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 20000;
                                if(kaal11 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 30000;
                                }
                                else if(kaal11 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 70000;
                                }
                                else if(kaal11 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal11 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                                }
                                else if(kaal11 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                            }
                            else if(czyja11 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 20000;

                                if(kaal11 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 30000;
                                }
                                else if(kaal11 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 70000;
                                }
                                else if(kaal11 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal11 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal11 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                            }
                        }  
                }
            }
            else
            {
                $('#targ').html('');
            }
        }
        else if(liczbaoczek2 > 16 && liczbaoczek2 < 24)
        {
            if(hamza2 != 0.99 && liczbaoczek2 != 18)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + odkrywki[liczbaoczek2];
            }
            $('#od'+liczbaoczek2).css('background-color', 'red');
            $('#od'+liczbaoczek2).css('border-color', 'red');
            $('#od'+liczbaoczek2).css('opacity', '0.99');
            if(liczbaoczek2 != 18)
            {
                if(liczbaoczek2 == 17)
                {
                    if(kupiona12 == 0 && czyja12 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus12()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja12 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter12()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja12 != 0 && czyja12 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 35000;
                            if(kaal12 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 55000;
                            }
                            else if(kaal12 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 115000;
                            }
                            else if(kaal12 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 195000;
                            }
                            else if(kaal12 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 235000;
                            }
                            else if(kaal12 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 315000;
                            }
                            
                            if(czyja12 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                                if(kaal12 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 55000;
                                }
                                else if(kaal12 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 115000;
                                }
                                else if(kaal12 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                                else if(kaal12 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 235000;
                                }
                                else if(kaal12 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 315000;
                                }
                            }
                            
                            else if(czyja12 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                                if(kaal12 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 55000;
                                }
                                else if(kaal12 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 115000;
                                }
                                else if(kaal12 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                                else if(kaal12 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 235000;
                                }
                                else if(kaal12 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 315000;
                                }
                            }
                            
                            else if(czyja12 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                                if(kaal12 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 55000;
                                }
                                else if(kaal12 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 115000;
                                }
                                else if(kaal12 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                                else if(kaal12 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 235000;
                                }
                                else if(kaal12 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 315000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek2 == 19)
                {
                    if(kupiona13 == 0 && czyja13 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus13()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja13 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter13()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja13 != 0 && czyja13 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 35000;
                            if(kaal13 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 55000;
                            }
                            else if(kaal13 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 115000;
                            }
                            else if(kaal13 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 195000;
                            }
                            else if(kaal13 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 235000;
                            }
                            else if(kaal13 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 315000;
                            }
                            
                            if(czyja13 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                                if(kaal13 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 55000;
                                }
                                else if(kaal13 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 115000;
                                }
                                else if(kaal13 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                                else if(kaal13 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 235000;
                                }
                                else if(kaal13 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 315000;
                                }
                            }
                            
                            else if(czyja13 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                                if(kaal13 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 55000;
                                }
                                else if(kaal13 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 115000;
                                }
                                else if(kaal13 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                                else if(kaal13 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 235000;
                                }
                                else if(kaal13 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 315000;
                                }
                            }
                            
                            else if(czyja13 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                                if(kaal13 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 55000;
                                }
                                else if(kaal13 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 115000;
                                }
                                else if(kaal13 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                                else if(kaal13 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 235000;
                                }
                                else if(kaal13 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 315000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek2 == 20)
                {
                    if(kupiona14 == 0 && czyja14 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus14()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja14 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter14()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja14 != 0 && czyja14 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 35000;
                            if(kaal14 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 55000;
                            }
                            else if(kaal14 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 115000;
                            }
                            else if(kaal14 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 195000;
                            }
                            else if(kaal14 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 235000;
                            }
                            else if(kaal14 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 315000;
                            }
                            
                            if(czyja14 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                                if(kaal14 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 55000;
                                }
                                else if(kaal14 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 115000;
                                }
                                else if(kaal14 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                                else if(kaal14 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 235000;
                                }
                                else if(kaal14 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 315000;
                                }
                            }
                            
                            else if(czyja14 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                                if(kaal14 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 55000;
                                }
                                else if(kaal14 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 115000;
                                }
                                else if(kaal14 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                                else if(kaal14 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 235000;
                                }
                                else if(kaal14 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 315000;
                                }
                            }
                            
                            else if(czyja14 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                                if(kaal14 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 55000;
                                }
                                else if(kaal14 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 115000;
                                }
                                else if(kaal14 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                                else if(kaal14 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 235000;
                                }
                                else if(kaal14 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 315000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek2 == 21)
                {
                    if(kupiona15 == 0 && czyja15 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus15()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja15 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter15()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja15 != 0 && czyja15 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 40000;
                            if(kaal15 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 60000;
                            }
                            else if(kaal15 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 120000;
                            }
                            else if(kaal15 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 220000;
                            }
                            else if(kaal15 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 265000;
                            }
                            else if(kaal15 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 355000;
                            }
                            
                            if(czyja15 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 60000;
                                }
                                else if(kaal15 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal15 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 220000;
                                }
                                else if(kaal15 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 265000;
                                }
                                else if(kaal15 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 355000;
                                }
                            }
                            
                            else if(czyja15 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 60000;
                                }
                                else if(kaal15 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal15 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 220000;
                                }
                                else if(kaal15 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 265000;
                                }
                                else if(kaal15 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 355000;
                                }
                            }
                            
                            else if(czyja15 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 60000;
                                }
                                else if(kaal15 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal15 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 220000;
                                }
                                else if(kaal15 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 265000;
                                }
                                else if(kaal15 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 355000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek2 == 22)
                {
                    if(kupiona16 == 0 && czyja16 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus16()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja16 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter16()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja16 != 0 && czyja16 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 40000;
                            if(kaal16 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 60000;
                            }
                            else if(kaal16 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 120000;
                            }
                            else if(kaal16 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 220000;
                            }
                            else if(kaal16 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 265000;
                            }
                            else if(kaal16 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 355000;
                            }
                            
                            if(czyja16 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                if(kaal16 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 60000;
                                }
                                else if(kaal16 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal16 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 220000;
                                }
                                else if(kaal16 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 265000;
                                }
                                else if(kaal16 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 355000;
                                }
                            }
                            
                            else if(czyja16 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                if(kaal16 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 60000;
                                }
                                else if(kaal16 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal16 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 220000;
                                }
                                else if(kaal16 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 265000;
                                }
                                else if(kaal16 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 355000;
                                }
                            }
                            
                            else if(czyja16 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                if(kaal16 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 60000;
                                }
                                else if(kaal16 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal16 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 220000;
                                }
                                else if(kaal16 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 265000;
                                }
                                else if(kaal16 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 355000;
                                }
                            }
                        }
                }
                else if(liczbaoczek2 == 23)
                {
                    if(kupiona17 == 0 && czyja17 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus17()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja17 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter17()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja17 != 0 && czyja17 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 40000;
                            if(kaal17 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 60000;
                            }
                            else if(kaal17 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 120000;
                            }
                            else if(kaal17 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 220000;
                            }
                            else if(kaal17 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 265000;
                            }
                            else if(kaal17 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 355000;
                            }
                            
                            if(czyja17 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                if(kaal17 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 60000;
                                }
                                else if(kaal17 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal17 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 220000;
                                }
                                else if(kaal17 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 265000;
                                }
                                else if(kaal17 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 355000;
                                }
                            }
                            
                            else if(czyja17 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                if(kaal17 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 60000;
                                }
                                else if(kaal17 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal17 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 220000;
                                }
                                else if(kaal17 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 265000;
                                }
                                else if(kaal17 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 355000;
                                }
                            }
                            
                            else if(czyja17 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                if(kaal17 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 60000;
                                }
                                else if(kaal17 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal17 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 220000;
                                }
                                else if(kaal17 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 265000;
                                }
                                else if(kaal17 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 355000;
                                }
                            }
                        }
                }
            }
            else
            {
                $('#targ').html('');
            }
        }
        else if(liczbaoczek2 > 24)
        { 
            if(hamza2 != 0.99 && liczbaoczek2 != 27 && liczbaoczek2 != 29)
            {
                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + odkrywki[liczbaoczek2];
            }
            $('#od'+liczbaoczek2).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek2).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek2).css('opacity', '0.99');
            if(liczbaoczek2 != 27 && liczbaoczek2 != 29)
            {
                if(liczbaoczek2 == 25)
                {
                    if(kupiona18 == 0 && czyja18 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus18()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja18 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter18()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja18 != 0 && czyja18 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 50000;
                            if(kaal18 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 75000;
                            }
                            else if(kaal18 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 160000;
                            }
                            else if(kaal18 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 270000;
                            }
                            else if(kaal18 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 325000;
                            }
                            else if(kaal18 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 435000;
                            }
                            
                            if(czyja18 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 50000;
                                if(kaal18 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 75000;
                                }
                                else if(kaal18 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 160000;
                                }
                                else if(kaal18 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 270000;
                                }
                                else if(kaal18 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 325000;
                                }
                                else if(kaal18 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 435000;
                                }
                            }
                            
                            else if(czyja18 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 50000;
                                if(kaal18 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 75000;
                                }
                                else if(kaal18 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 160000;
                                }
                                else if(kaal18 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 270000;
                                }
                                else if(kaal18 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 325000;
                                }
                                else if(kaal18 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 435000;
                                }
                            }
                            
                            else if(czyja15 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 50000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 75000;
                                }
                                else if(kaal18 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 160000;
                                }
                                else if(kaal18 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 270000;
                                }
                                else if(kaal18 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 325000;
                                }
                                else if(kaal18 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 435000;
                                }
                            }
                        }
                }
                else if(liczbaoczek2 == 26)
                {
                    if(kupiona19 == 0 && czyja19 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus19()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja19 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter19()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja19 != 0 && czyja19 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 50000;
                            if(kaal19 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 75000;
                            }
                            else if(kaal19 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 160000;
                            }
                            else if(kaal19 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 270000;
                            }
                            else if(kaal19 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 325000;
                            }
                            else if(kaal19 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 435000;
                            }
                            
                            if(czyja19 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 50000;
                                if(kaal19 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 75000;
                                }
                                else if(kaal19 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 160000;
                                }
                                else if(kaal19 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 270000;
                                }
                                else if(kaal19 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 325000;
                                }
                                else if(kaal19 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 435000;
                                }
                            }
                            
                            else if(czyja19 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 50000;
                                if(kaal19 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 75000;
                                }
                                else if(kaal19 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 160000;
                                }
                                else if(kaal19 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 270000;
                                }
                                else if(kaal19 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 325000;
                                }
                                else if(kaal19 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 435000;
                                }
                            }
                            
                            else if(czyja19 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 50000;
                                if(kaal19 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 75000;
                                }
                                else if(kaal19 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 160000;
                                }
                                else if(kaal19 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 270000;
                                }
                                else if(kaal19 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 325000;
                                }
                                else if(kaal19 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 435000;
                                }
                            }
                        }
                }
                else if(liczbaoczek2 == 28)
                {
                    if(kupiona20 == 0 && czyja20 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus20()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja20 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter20()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja20 != 0 && czyja20 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 50000;
                            if(kaal20 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 75000;
                            }
                            else if(kaal20 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 160000;
                            }
                            else if(kaal20 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 270000;
                            }
                            else if(kaal20 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 325000;
                            }
                            else if(kaal20 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 435000;
                            }
                            
                            if(czyja20 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 50000;
                                if(kaal20 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 75000;
                                }
                                else if(kaal20 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 160000;
                                }
                                else if(kaal20 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 270000;
                                }
                                else if(kaal20 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 325000;
                                }
                                else if(kaal20 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 435000;
                                }
                            }
                            
                            else if(czyja20 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 50000;
                                if(kaal20 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 75000;
                                }
                                else if(kaal20 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 160000;
                                }
                                else if(kaal20 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 270000;
                                }
                                else if(kaal20 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 325000;
                                }
                                else if(kaal20 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 435000;
                                }
                            }
                            
                            else if(czyja20 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 50000;
                                if(kaal20 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 75000;
                                }
                                else if(kaal20 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 160000;
                                }
                                else if(kaal20 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 270000;
                                }
                                else if(kaal20 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 325000;
                                }
                                else if(kaal20 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 435000;
                                }
                            }
                        }
                }
                else if(liczbaoczek2 == 30)
                {
                    if(kupiona21 == 0 && czyja21 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus21()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja21 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter21()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja21 != 0 && czyja21 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 65000;
                            if(kaal21 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 95000;
                            }
                            else if(kaal21 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 185000;
                            }
                            else if(kaal21 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 305000;
                            }
                            else if(kaal21 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 365000;
                            }
                            else if(kaal21 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 485000;
                            }
                            
                            if(czyja21 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                                if(kaal21 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 95000;
                                }
                                else if(kaal21 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 185000;
                                }
                                else if(kaal21 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 305000;
                                }
                                else if(kaal21 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 365000;
                                }
                                else if(kaal21 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 485000;
                                }
                            }
                            
                            else if(czyja21 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                                if(kaal21 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 95000;
                                }
                                else if(kaal21 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 185000;
                                }
                                else if(kaal21 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 305000;
                                }
                                else if(kaal21 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 365000;
                                }
                                else if(kaal21 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 485000;
                                }
                            }
                            
                            else if(czyja21 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                                if(kaal21 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 95000;
                                }
                                else if(kaal21 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 185000;
                                }
                                else if(kaal21 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 305000;
                                }
                                else if(kaal21 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 365000;
                                }
                                else if(kaal21 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 485000;
                                }
                            }
                        }
                }
                else if(liczbaoczek2 == 31)
                {
                    if(kupiona22 == 0 && czyja22 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus22()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja22 == 2)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter22()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja22 != 0 && czyja22 != 2)
                        {
                            $('#targ').html('');
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 65000;
                            if(kaal22 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 95000;
                            }
                            else if(kaal22 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 185000;
                            }
                            else if(kaal22 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 305000;
                            }
                            else if(kaal22 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 365000;
                            }
                            else if(kaal22 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 - 485000;
                            }
                            
                            if(czyja22 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                                if(kaal22 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 95000;
                                }
                                else if(kaal22 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 185000;
                                }
                                else if(kaal22 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 305000;
                                }
                                else if(kaal22 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 365000;
                                }
                                else if(kaal22 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 485000;
                                }
                            }
                            
                            else if(czyja22 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                                if(kaal22 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 95000;
                                }
                                else if(kaal22 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 185000;
                                }
                                else if(kaal22 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 305000;
                                }
                                else if(kaal22 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 365000;
                                }
                                else if(kaal22 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 485000;
                                }
                            }
                            
                            else if(czyja22 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                                if(kaal22 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 95000;
                                }
                                else if(kaal22 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 185000;
                                }
                                else if(kaal22 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 305000;
                                }
                                else if(kaal22 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 365000;
                                }
                                else if(kaal22 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 485000;
                                }
                            }
                        }
                }
            }
            else
            {
                $('#targ').html('');
            }
        }
    }
    $('#ba2').toggleClass('klik');
    $('#ba3').toggleClass('klik');
    licznik = 2;
if(licznik == 2) {alert("2")}
if(licznik == 3) {alert("3")}
if(licznik == 4) {alert("4")}
}

function tura3()
{
    let rzutkostkami3 = 4;
    $('#c'+liczbaoczek3).css('opacity', '0');
    document.getElementById("kosc").innerHTML = liczbaoczek3 = liczbaoczek3 + rzutkostkami3;
    if(liczbaoczek3 == 32)
    {
        $('#c0').css('opacity', '1');
        liczbaoczek3 = 0;
        $('#targ').html('');
        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - odkrywki[liczbaoczek3];
    }
    if(liczbaoczek3 > 31)
    {
        liczbaoczek3 = liczbaoczek3 - 32;
    }
    $('#c'+liczbaoczek3).css('opacity', '1');
    let opacityValue3 = $('#c'+liczbaoczek3).css('opacity');
    if(opacityValue3 == 1)
    {
        if(liczbaoczek3 == 8)
        {
            $('#targ').html('');           
        }
        if(liczbaoczek3 == 16)
        {
            $('#targ').html('');
        }
        if(liczbaoczek3 == 24)
        {
            $('#targ').html('')
        }
        let hamza3 = $('#od'+liczbaoczek3).css('opacity');
        if(liczbaoczek3 < 8)
        {
            $('#od'+liczbaoczek3).css('background-color', 'red');
            $('#od'+liczbaoczek3).css('border-color', 'red');
            $('#od'+liczbaoczek3).css('opacity', '0.99');
            if(hamza3 != 0.99 && liczbaoczek3 != 2 && liczbaoczek3 != 5)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + odkrywki[liczbaoczek3];
            }
            if(liczbaoczek3 == 1)
            {
                    if(kupiona1 == 0 && czyja == 0)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja == 3)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja != 0 && czyja != 3)
                    {
                        $('#targ').html('');
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 7000;
                        if(kaal == 2)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 7000;
                        }
                        else if(kaal == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 23000;
                        }
                        else if(kaal == 4)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 43000;
                        }
                        else if(kaal == 5)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 53000;
                        }
                        else if(kaal == 6)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 73000;
                        }
                        if(czyja == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 7000;

                            if(kaal == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 8000;
                            }
                            else if(kaal == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 23000;
                            }
                            else if(kaal == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 43000;
                            }
                            else if(kaal == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 53000;
                            }
                            else if(kaal == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 73000;
                            }
                        }
                        else if(czyja == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 7000;

                            if(kaal == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 8000;
                            }
                            else if(kaal == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 23000;
                            }
                            else if(kaal == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 43000;
                            }
                            else if(kaal == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 53000;
                            }
                            else if(kaal == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 73000;
                            }
                        }
                        else if(czyja == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 7000;

                            if(kaal == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 8000;
                            }
                            else if(kaal == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 23000;
                            }
                            else if(kaal == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 43000;
                            }
                            else if(kaal == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 53000;
                            }
                            else if(kaal == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 73000;
                            }
                        }
                    }
                }
                else if(liczbaoczek3 == 3)
                {
                    if(kupiona2 == 0)
                    {
                        if(kupiona1 == 0 && czyja2 == 0)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus2()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja2 == 3)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter2()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja2 != 0 && czyja2 != 3)
                    {
                        $('#targ').html('');
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 7000;
                        if(kaal2 == 2)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 7000;
                        }
                        else if(kaal2 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 23000;
                        }
                        else if(kaal2 == 4)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 43000;
                        }
                        else if(kaal2 == 5)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 53000;
                        }
                        else if(kaal2 == 6)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 73000;
                        }
                        if(czyja2 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 7000;

                            if(kaal2 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 8000;
                            }
                            else if(kaal2 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 23000;
                            }
                            else if(kaal2 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 43000;
                            }
                            else if(kaal2 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 53000;
                            }
                            else if(kaal2 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 73000;
                            }
                        }
                        else if(czyja2 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 7000;

                            if(kaal2 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 8000;
                            }
                            else if(kaal2 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 23000;
                            }
                            else if(kaal2 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 43000;
                            }
                            else if(kaal2 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 53000;
                            }
                            else if(kaal2 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 73000;
                            }
                        }
                        else if(czyja2 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 7000;

                            if(kaal2 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 8000;
                            }
                            else if(kaal2 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 23000;
                            }
                            else if(kaal2 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 43000;
                            }
                            else if(kaal2 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 53000;
                            }
                            else if(kaal2 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 73000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek3 == 4)
                {
                    if(kupiona3 == 0)
                    {
                        if(kupiona3 == 0 && czyja3 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus3()">Czy chcesz kupić tą działke?</span>');
                        }
                    else if(czyja3 == 3)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter3()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja3 != 0 && czyja3 != 3)
                    {
                        $('#targ').html('');
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 15000;
                        if(kaal3 == 2)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 15000;
                        }
                        else if(kaal3 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 35000;
                        }
                        else if(kaal3 == 4)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 65000;
                        }
                        else if(kaal3 == 5)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 80000;
                        }
                        else if(kaal3 == 6)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 110000;
                        }
                        if(czyja3 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;

                            if(kaal3 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;
                            }
                            else if(kaal3 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                            }
                            else if(kaal3 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                            }
                            else if(kaal3 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 80000;
                            }
                            else if(kaal3 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 110000;
                            }
                        }
                        else if(czyja3 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;

                            if(kaal3 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;
                            }
                            else if(kaal3 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                            }
                            else if(kaal3 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                            }
                            else if(kaal3 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 80000;
                            }
                            else if(kaal3 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 110000;
                            }
                        }
                        else if(czyja3 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;

                            if(kaal3 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;
                            }
                            else if(kaal3 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                            }
                            else if(kaal3 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                            }
                            else if(kaal3 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 80000;
                            }
                            else if(kaal3 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 110000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek3 == 6)
                {
                    if(kupiona4 == 0)
                    {
                        if(kupiona4 == 0 && czyja4 == 0)
                        {   
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus4()">Czy chcesz kupić tą działke?</span>');
                        }
                    else if(czyja4 == 3)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter4()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja4 != 0 && czyja4 != 3)
                    {
                        $('#targ').html('');
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 15000;
                        if(kaal4 == 2)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 15000;
                        }
                        else if(kaal4 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 35000;
                        }
                        else if(kaal4 == 4)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 65000;
                        }
                        else if(kaal4 == 5)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 80000;
                        }
                        else if(kaal4 == 6)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 110000;
                        }
                        if(czyja4 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;

                            if(kaal4 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;
                            }
                            else if(kaal4 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                            }
                            else if(kaal4 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                            }
                            else if(kaal4 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 80000;
                            }
                            else if(kaal4 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 110000;
                            }
                        }
                        else if(czyja4 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;

                            if(kaal4 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;
                            }
                            else if(kaal4 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                            }
                            else if(kaal4 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                            }
                            else if(kaal4 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 80000;
                            }
                            else if(kaal4 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 110000;
                            }
                        }
                        else if(czyja4 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;

                            if(kaal4 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;
                            }
                            else if(kaal4 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                            }
                            else if(kaal4 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                            }
                            else if(kaal4 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 80000;
                            }
                            else if(kaal4 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 110000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek3 == 7)
                {
                    if(kupiona5 == 0)
                    {
                        if(kupiona5 == 0 && czyja5 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus5()">Czy chcesz kupić tą działke?</span>');
                        }
                    else if(czyja5 == 3)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter5()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja5 != 0 && czyja5 != 3)
                    {
                        $('#targ').html('');
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 15000;
                        if(kaal5 == 2)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 15000;
                        }
                        else if(kaal5 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 35000;
                        }
                        else if(kaal5 == 4)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 65000;
                        }
                        else if(kaal5 == 5)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 80000;
                        }
                        else if(kaal5 == 6)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 110000;
                        }
                        if(czyja5 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;

                            if(kaal5 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;
                            }
                            else if(kaal5 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                            }
                            else if(kaal5 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                            }
                            else if(kaal5 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 80000;
                            }
                            else if(kaal5 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 110000;
                            }
                        }
                        else if(czyja5 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;

                            if(kaal5 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;
                            }
                            else if(kaal5 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                            }
                            else if(kaal5 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                            }
                            else if(kaal5 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 80000;
                            }
                            else if(kaal5 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 110000;
                            }
                        }
                        else if(czyja5 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;

                            if(kaal5 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 15000;
                            }
                            else if(kaal5 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                            }
                            else if(kaal5 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                            }
                            else if(kaal5 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 80000;
                            }
                            else if(kaal5 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 110000;
                            }
                        }
                    }
                    }
                }
            }
            else
            {
                $('#targ').html('');
            }
        }
        else if(liczbaoczek3 > 8 && liczbaoczek3 < 16)
        {
            if(hamza3 != 0.99 && liczbaoczek3 != 13)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + odkrywki[liczbaoczek3];
            }
            $('#od'+liczbaoczek3).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek3).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek3).css('opacity', '0.99');
            if(liczbaoczek3 != 13)
            {
                if(liczbaoczek3 == 9)
                {
                    if(kupiona6 == 0)
                    {
                        if(kupiona6 == 0 && czyja6 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus6()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja6 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter6()">Czy chcesz kupić domek?</span>');
                        }
                    else if(czyja6 != 0 && czyja6 != 3)
                    {
                        $('#targ').html('');
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 20000;
                        if(kaal6 == 2)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 30000;
                        }
                        else if(kaal6 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 70000;
                        }
                        else if(kaal6 == 4)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 120000;
                        }
                        else if(kaal6 == 5)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 145000;
                        }
                        else if(kaal6 == 6)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 195000;
                        }
                        if(czyja6 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 20000;

                            if(kaal6 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 30000;
                            }
                            else if(kaal6 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 70000;
                            }
                            else if(kaal6 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                            }
                            else if(kaal6 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                            }
                            else if(kaal6 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                            }
                        }
                        else if(czyja6 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 20000;

                            if(kaal6 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 30000;
                            }
                            else if(kaal6 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 70000;
                            }
                            else if(kaal6 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                            }
                            else if(kaal6 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                            }
                            else if(kaal6 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                            }
                        }
                        else if(czyja6 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 20000;

                            if(kaal6 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 30000;
                            }
                            else if(kaal6 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 70000;
                            }
                            else if(kaal6 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                            }
                            else if(kaal6 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                            }
                            else if(kaal6 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek3 == 10)
                {
                    if(kupiona7 == 0)
                    {
                        if(kupiona7 == 0 && czyja7 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus7()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja7 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter7()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja7 != 0 && czyja7 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 20000;
                            if(kaal7 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 30000;
                            }
                            else if(kaal7 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 70000;
                            }
                            else if(kaal7 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 120000;
                            }
                            else if(kaal7 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 145000;
                            }
                            else if(kaal7 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 195000;
                            }
                                if(czyja7 == 1)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 20000;

                                if(kaal7 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 30000;
                                }
                                else if(kaal7 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 70000;
                                }
                                else if(kaal7 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal7 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                                }
                                else if(kaal7 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                            }
                            else if(czyja7 == 2)
                            {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 20000;

                            if(kaal7 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 30000;
                            }
                            else if(kaal7 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 70000;
                            }
                            else if(kaal7 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                            }
                            else if(kaal7 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                            }
                            else if(kaal7 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                            }
                            }
                            else if(czyja7 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 20000;

                                if(kaal7 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 30000;
                                }
                                else if(kaal7 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 70000;
                                }
                                else if(kaal7 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal7 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal7 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                            }
                        }
                    }   
                }
                else if(liczbaoczek3 == 11)
                {
                    if(kupiona8 == 0)
                    {
                        if(kupiona8 == 0 && czyja8 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus8()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja8 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter8()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja8 != 0 && czyja8 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 20000;
                            if(kaal8 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 30000;
                            }
                            else if(kaal8 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 70000;
                            }
                            else if(kaal8 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 120000;
                            }
                            else if(kaal8 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 145000;
                            }
                            else if(kaal8 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 195000;
                            }
                                if(czyja8 == 1)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 20000;

                                if(kaal8 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 30000;
                                }
                                else if(kaal8 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 70000;
                                }
                                else if(kaal8 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal8 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                                }
                                else if(kaal8 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                            }
                            else if(czyja8 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 20000;

                            if(kaal8 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 30000;
                            }
                            else if(kaal8 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 70000;
                            }
                            else if(kaal8 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                            }
                            else if(kaal8 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                            }
                            else if(kaal8 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                            }
                            }
                            else if(czyja8 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 20000;

                                if(kaal8 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 30000;
                                }
                                else if(kaal8 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 70000;
                                }
                                else if(kaal8 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal8 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal8 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                            }
                        }
                    }   
                }
            
                else if(liczbaoczek3 == 12)
                {
                    if(kupiona9 == 0 && czyja9 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus9()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja9 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter9()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja9 != 0 && czyja9 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 25000;
                            if(kaal9 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 40000;
                            }
                            else if(kaal9 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 85000;
                            }
                            else if(kaal9 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans2 - 145000;
                            }
                            else if(kaal9 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 175000;
                            }
                            else if(kaal9 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 245000;
                            }
                            
                            if(czyja9 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 25000;
                                if(kaal9 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                }
                                else if(kaal9 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 85000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                                }
                                else if(kaal9 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 175000;
                                }
                                else if(kaal9 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 245000;
                                }
                            }
                            
                            else if(czyja9 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 25000;
                                if(kaal9 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                }   
                                else if(kaal9 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 85000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                                }
                                else if(kaal9 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 175000;
                                }
                                else if(kaal9 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 245000;
                                }
                            }
                            
                            else if(czyja9 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 25000;

                                if(kaal9 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                }
                                else if(kaal9 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 85000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal9 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 175000;
                                }
                                else if(kaal9 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 245000;
                                }
                            }
                        }  
                }
            
                else if(liczbaoczek3 == 14)
                {
                    if(kupiona10 == 0 && czyja10 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus10()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja10 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter10()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja10 != 0 && czyja10 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 25000;
                            if(kaal10 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 40000;
                            }
                            else if(kaal10 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 85000;
                            }
                            else if(kaal10 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 145000;
                            }
                            else if(kaal10 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 175000;
                            }
                            else if(kaal10 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 245000;
                            }
                            
                            if(czyja10 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 25000;
                                if(kaal10 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                }
                                else if(kaal10 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 85000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                                }
                                else if(kaal10 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 175000;
                                }
                                else if(kaal10 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 245000;
                                }
                            }
                            
                            else if(czyja10 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 25000;
                                if(kaal10 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                }
                                else if(kaal10 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 85000;
                                }
                                else if(kaal10 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                                }
                                else if(kaal10 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 175000;
                                }
                                else if(kaal10 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 245000;
                                }
                            }
                            
                            else if(czyja10 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 25000;

                                if(kaal10 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                }
                                else if(kaal10 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 85000;
                                }
                                else if(kaal10 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal10 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 175000;
                                }
                                else if(kaal10 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 245000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek3 == 15)
                {
                    if(kupiona11 == 0 && czyja11 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus11()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja11 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter11()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja11 != 0 && czyja11 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 25000;
                            if(kaal11 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 40000;
                            }
                            else if(kaal11 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 85000;
                            }
                            else if(kaal11 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 145000;
                            }
                            else if(kaal11 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 175000;
                            }
                            else if(kaal11 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 245000;
                            }
                            
                            if(czyja11 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 25000;
                                if(kaal11 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                }
                                else if(kaal11 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 85000;
                                }
                                else if(kaal11 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                                }
                                else if(kaal11 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 175000;
                                }
                                else if(kaal11 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 245000;
                                }
                            }
                            
                            else if(czyja11 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 25000;
                                if(kaal11 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                }
                                else if(kaal11 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 85000;
                                }
                                else if(kaal11 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                                }
                                else if(kaal11 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 175000;
                                }
                                else if(kaal11 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 245000;
                                }
                            }
                            else if(czyja11 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 25000;

                                if(kaal11 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                }
                                else if(kaal11 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 85000;
                                }
                                else if(kaal11 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 145000;
                                }
                                else if(kaal11 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 175000;
                                }
                                else if(kaal11 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 245000;
                                }
                            }
                        }  
                }
            }
            else
            {
                $('#targ').html('');
            }
        }  
        else if(liczbaoczek3 > 16 && liczbaoczek3 < 24)
        {
            if(hamza3 != 0.99 && liczbaoczek3 != 18)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + odkrywki[liczbaoczek3];
            }
            $('#od'+liczbaoczek3).css('background-color', 'red');
            $('#od'+liczbaoczek3).css('border-color', 'red');
            $('#od'+liczbaoczek3).css('opacity', '0.99');
            if(liczbaoczek3 != 18)
            {
                if(liczbaoczek3 == 17)
                {
                    if(kupiona12 == 0 && czyja12 == 0)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus12()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja12 == 3)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter12()">Czy chcesz kupić domek?</span>');
                    }
                        else if(czyja12 != 0 && czyja12 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 35000;
                            if(kaal12 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 55000;
                            }
                            else if(kaal12 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 115000;
                            }
                            else if(kaal12 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 195000;
                            }
                            else if(kaal12 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 235000;
                            }
                            else if(kaal12 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 315000;
                            }
                            
                            if(czyja12 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                                if(kaal12 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 55000;
                                }
                                else if(kaal12 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 115000;
                                }
                                else if(kaal12 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                                else if(kaal12 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 235000;
                                }
                                else if(kaal12 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 315000;
                                }
                            }
                            
                            else if(czyja12 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                                if(kaal12 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 55000;
                                }
                                else if(kaal12 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 115000;
                                }
                                else if(kaal12 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                                }
                                else if(kaal12 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 235000;
                                }
                                else if(kaal12 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 315000;
                                }
                            }
                            
                            else if(czyja12 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                                if(kaal12 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 55000;
                                }
                                else if(kaal12 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 115000;
                                }
                                else if(kaal12 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                                else if(kaal12 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 235000;
                                }
                                else if(kaal12 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 315000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek3 == 19)
                {
                    if(kupiona13 == 0 && czyja13 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus13()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja13 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter13()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja13 != 0 && czyja13 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 35000;
                            if(kaal13 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 55000;
                            }
                            else if(kaal13 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 115000;
                            }
                            else if(kaal13 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 195000;
                            }
                            else if(kaal13 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 235000;
                            }
                            else if(kaal13 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 315000;
                            }
                            
                            if(czyja13 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                                if(kaal13 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 55000;
                                }
                                else if(kaal13 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 115000;
                                }
                                else if(kaal13 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                                else if(kaal13 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 235000;
                                }
                                else if(kaal13 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 315000;
                                }
                            }
                            
                            else if(czyja13 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                                if(kaal13 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 55000;
                                }
                                else if(kaal13 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 115000;
                                }
                                else if(kaal13 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                                }
                                else if(kaal13 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 235000;
                                }
                                else if(kaal13 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 315000;
                                }
                            }
                            
                            else if(czyja13 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                                if(kaal13 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 55000;
                                }
                                else if(kaal13 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 115000;
                                }
                                else if(kaal13 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                                else if(kaal13 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 235000;
                                }
                                else if(kaal13 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 315000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek3 == 20)
                {
                    if(kupiona14 == 0 && czyja14 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus14()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja14 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter14()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja14 != 0 && czyja14 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 35000;
                            if(kaal14 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 55000;
                            }
                            else if(kaal14 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 115000;
                            }
                            else if(kaal14 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 195000;
                            }
                            else if(kaal14 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 235000;
                            }
                            else if(kaal14 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 315000;
                            }
                            
                            if(czyja14 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                                if(kaal14 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 55000;
                                }
                                else if(kaal14 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 115000;
                                }
                                else if(kaal14 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                                else if(kaal14 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 235000;
                                }
                                else if(kaal14 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 315000;
                                }
                            }
                            
                            else if(czyja14 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                                if(kaal14 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 55000;
                                }
                                else if(kaal14 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 115000;
                                }
                                else if(kaal14 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                                }
                                else if(kaal14 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 235000;
                                }
                                else if(kaal14 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 315000;
                                }
                            }
                            
                            else if(czyja14 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 35000;
                                if(kaal14 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 55000;
                                }
                                else if(kaal14 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 115000;
                                }
                                else if(kaal14 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 195000;
                                }
                                else if(kaal14 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 235000;
                                }
                                else if(kaal14 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 315000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek3 == 21)
                {
                    if(kupiona15 == 0 && czyja15 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus15()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja15 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter15()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja15 != 0 && czyja15 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 40000;
                            if(kaal15 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 60000;
                            }
                            else if(kaal15 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 120000;
                            }
                            else if(kaal15 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 220000;
                            }
                            else if(kaal15 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 265000;
                            }
                            else if(kaal15 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 355000;
                            }
                            
                            if(czyja15 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 60000;
                                }
                                else if(kaal15 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal15 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 220000;
                                }
                                else if(kaal15 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 265000;
                                }
                                else if(kaal15 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 355000;
                                }
                            }
                            
                            else if(czyja15 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 60000;
                                }
                                else if(kaal15 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                                }
                                else if(kaal15 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 220000;
                                }
                                else if(kaal15 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 265000;
                                }
                                else if(kaal15 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 355000;
                                }
                            }
                            
                            else if(czyja15 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 60000;
                                }
                                else if(kaal15 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal15 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 220000;
                                }
                                else if(kaal15 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 265000;
                                }
                                else if(kaal15 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 355000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek3 == 22)
                {
                    if(kupiona16 == 0 && czyja16 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus16()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja16 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter16()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja16 != 0 && czyja16 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 40000;
                            if(kaal16 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 60000;
                            }
                            else if(kaal16 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 120000;
                            }
                            else if(kaal16 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 220000;
                            }
                            else if(kaal16 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 265000;
                            }
                            else if(kaal16 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 355000;
                            }
                            
                            if(czyja16 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                if(kaal16 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 60000;
                                }
                                else if(kaal16 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal16 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 220000;
                                }
                                else if(kaal16 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 265000;
                                }
                                else if(kaal16 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 355000;
                                }
                            }
                            
                            else if(czyja16 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                if(kaal16 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 60000;
                                }
                                else if(kaal16 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                                }
                                else if(kaal16 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 220000;
                                }
                                else if(kaal16 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 265000;
                                }
                                else if(kaal16 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 355000;
                                }
                            }
                            
                            else if(czyja16 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                if(kaal16 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 60000;
                                }
                                else if(kaal16 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal16 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 220000;
                                }
                                else if(kaal16 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 265000;
                                }
                                else if(kaal16 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 355000;
                                }
                            }
                        }
                }
                else if(liczbaoczek3 == 23)
                {
                    if(kupiona17 == 0 && czyja17 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus17()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja17 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter17()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja17 != 0 && czyja17 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 40000;
                            if(kaal17 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 60000;
                            }
                            else if(kaal17 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 120000;
                            }
                            else if(kaal17 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 220000;
                            }
                            else if(kaal17 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 265000;
                            }
                            else if(kaal17 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 355000;
                            }
                            
                            if(czyja17 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                if(kaal17 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 60000;
                                }
                                else if(kaal17 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal17 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 220000;
                                }
                                else if(kaal17 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 265000;
                                }
                                else if(kaal17 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 355000;
                                }
                            }
                            
                            else if(czyja17 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                if(kaal17 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 60000;
                                }
                                else if(kaal17 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                                }
                                else if(kaal17 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 220000;
                                }
                                else if(kaal17 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 265000;
                                }
                                else if(kaal17 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 355000;
                                }
                            }
                            
                            else if(czyja17 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 40000;
                                if(kaal17 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 60000;
                                }
                                else if(kaal17 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 120000;
                                }
                                else if(kaal17 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 220000;
                                }
                                else if(kaal17 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 265000;
                                }
                                else if(kaal17 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 355000;
                                }
                            }
                        }
                }
            }
            else
            {
                $('#targ').html('');
            }
        }
        else if(liczbaoczek3 > 24)
        { 
            if(hamza3 != 0.99 && liczbaoczek3 != 27 && liczbaoczek3 != 29)
            {
                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + odkrywki[liczbaoczek3];
            }
            $('#od'+liczbaoczek3).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek3).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek3).css('opacity', '0.99');
            if(liczbaoczek3 != 27 && liczbaoczek3 != 29)
            {
                if(liczbaoczek3 == 25)
                {
                    if(kupiona18 == 0 && czyja18 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus18()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja18 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter18()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja18 != 0 && czyja18 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 50000;
                            if(kaal18 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 75000;
                            }
                            else if(kaal18 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 160000;
                            }
                            else if(kaal18 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 270000;
                            }
                            else if(kaal18 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 325000;
                            }
                            else if(kaal18 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 435000;
                            }
                            
                            if(czyja18 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 50000;
                                if(kaal18 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 75000;
                                }
                                else if(kaal18 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 160000;
                                }
                                else if(kaal18 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 270000;
                                }
                                else if(kaal18 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 325000;
                                }
                                else if(kaal18 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 435000;
                                }
                            }
                            
                            else if(czyja18 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 50000;
                                if(kaal18 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 75000;
                                }
                                else if(kaal18 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 160000;
                                }
                                else if(kaal18 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 270000;
                                }
                                else if(kaal18 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 325000;
                                }
                                else if(kaal18 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 435000;
                                }
                            }
                            
                            else if(czyja15 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 50000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 75000;
                                }
                                else if(kaal18 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 160000;
                                }
                                else if(kaal18 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 270000;
                                }
                                else if(kaal18 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 325000;
                                }
                                else if(kaal18 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 435000;
                                }
                            }
                        }
                }
                else if(liczbaoczek3 == 26)
                {
                    if(kupiona19 == 0 && czyja19 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus19()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja19 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter19()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja19 != 0 && czyja19 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 50000;
                            if(kaal19 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 75000;
                            }
                            else if(kaal19 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 160000;
                            }
                            else if(kaal19 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 270000;
                            }
                            else if(kaal19 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 325000;
                            }
                            else if(kaal19 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 435000;
                            }
                            
                            if(czyja19 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 50000;
                                if(kaal19 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 75000;
                                }
                                else if(kaal19 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 160000;
                                }
                                else if(kaal19 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 270000;
                                }
                                else if(kaal19 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 325000;
                                }
                                else if(kaal19 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 435000;
                                }
                            }
                            
                            else if(czyja19 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 50000;
                                if(kaal19 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 75000;
                                }
                                else if(kaal19 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 160000;
                                }
                                else if(kaal19 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 270000;
                                }
                                else if(kaal19 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 325000;
                                }
                                else if(kaal19 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 435000;
                                }
                            }
                            
                            else if(czyja19 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 50000;
                                if(kaal19 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 75000;
                                }
                                else if(kaal19 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 160000;
                                }
                                else if(kaal19 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 270000;
                                }
                                else if(kaal19 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 325000;
                                }
                                else if(kaal19 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 435000;
                                }
                            }
                        }
                }
                else if(liczbaoczek3 == 28)
                {
                    if(kupiona20 == 0 && czyja20 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus20()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja20 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter20()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja20 != 0 && czyja20 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 50000;
                            if(kaal20 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 75000;
                            }
                            else if(kaal20 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 160000;
                            }
                            else if(kaal20 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 270000;
                            }
                            else if(kaal20 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 325000;
                            }
                            else if(kaal20 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 435000;
                            }
                            
                            if(czyja20 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 50000;
                                if(kaal20 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 75000;
                                }
                                else if(kaal20 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 160000;
                                }
                                else if(kaal20 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 270000;
                                }
                                else if(kaal20 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 325000;
                                }
                                else if(kaal20 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 435000;
                                }
                            }
                            
                            else if(czyja20 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 50000;
                                if(kaal20 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 75000;
                                }
                                else if(kaal20 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 160000;
                                }
                                else if(kaal20 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 270000;
                                }
                                else if(kaal20 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 325000;
                                }
                                else if(kaal20 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 435000;
                                }
                            }
                            
                            else if(czyja20 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 50000;
                                if(kaal20 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 75000;
                                }
                                else if(kaal20 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 160000;
                                }
                                else if(kaal20 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 270000;
                                }
                                else if(kaal20 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 325000;
                                }
                                else if(kaal20 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 435000;
                                }
                            }
                        }
                }
                else if(liczbaoczek3 == 30)
                {
                    if(kupiona21 == 0 && czyja21 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus21()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja21 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter21()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja21 != 0 && czyja21 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 65000;
                            if(kaal21 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 95000;
                            }
                            else if(kaal21 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 185000;
                            }
                            else if(kaal21 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 305000;
                            }
                            else if(kaal21 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 365000;
                            }
                            else if(kaal21 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 485000;
                            }
                            
                            if(czyja21 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                                if(kaal21 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 95000;
                                }
                                else if(kaal21 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 185000;
                                }
                                else if(kaal21 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 305000;
                                }
                                else if(kaal21 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 365000;
                                }
                                else if(kaal21 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 485000;
                                }
                            }
                            
                            else if(czyja21 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                                if(kaal21 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 95000;
                                }
                                else if(kaal21 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 185000;
                                }
                                else if(kaal21 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 305000;
                                }
                                else if(kaal21 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 365000;
                                }
                                else if(kaal21 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 485000;
                                }
                            }
                            
                            else if(czyja21 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                                if(kaal21 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 95000;
                                }
                                else if(kaal21 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 185000;
                                }
                                else if(kaal21 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 305000;
                                }
                                else if(kaal21 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 365000;
                                }
                                else if(kaal21 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 485000;
                                }
                            }
                        }
                }
                else if(liczbaoczek3 == 31)
                {
                    if(kupiona22 == 0 && czyja22 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus22()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja22 == 3)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter22()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja22 != 0 && czyja22 != 3)
                        {
                            $('#targ').html('');
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 65000;
                            if(kaal22 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 95000;
                            }
                            else if(kaal22 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 185000;
                            }
                            else if(kaal22 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 305000;
                            }
                            else if(kaal22 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 365000;
                            }
                            else if(kaal22 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 - 485000;
                            }
                            
                            if(czyja22 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                                if(kaal22 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 95000;
                                }
                                else if(kaal22 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 185000;
                                }
                                else if(kaal22 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 305000;
                                }
                                else if(kaal22 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 365000;
                                }
                                else if(kaal22 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 485000;
                                }
                            }
                            
                            else if(czyja22 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                                if(kaal22 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 95000;
                                }
                                else if(kaal22 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 185000;
                                }
                                else if(kaal22 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 305000;
                                }
                                else if(kaal22 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 365000;
                                }
                                else if(kaal22 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 485000;
                                }
                            }
                            
                            else if(czyja22 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 65000;
                                if(kaal22 == 2)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 95000;
                                }
                                else if(kaal22 == 3)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 185000;
                                }
                                else if(kaal22 == 4)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 305000;
                                }
                                else if(kaal22 == 5)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 365000;
                                }
                                else if(kaal22 == 6)
                                {
                                    document.getElementById("ba4").innerHTML = bilans4 = bilans4 + 485000;
                                }
                            }
                        }
                }
            }
            else
            {
                $('#targ').html('');
            }
        }
    $('#ba3').toggleClass('klik');
    $('#ba4').toggleClass('klik');
    licznik++;
    if(licznik == 2) {alert("2")}
    if(licznik == 3) {alert("3")}
    if(licznik == 4) {alert("4")}
    }
    
function tura4()
{
    let rzutkostkami4 = 4;
    $('#e'+liczbaoczek4).css('opacity', '0');
    document.getElementById("kosc").innerHTML = liczbaoczek4 = liczbaoczek4 + rzutkostkami4;
    if(liczbaoczek4 == 32)
    {
        $('#e0').css('opacity', '1');
        liczbaoczek4 = 0;
        $('#targ').html('');
        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - odkrywki[liczbaoczek4];
    }
    if(liczbaoczek4 > 31)
    {
        liczbaoczek4 = liczbaoczek4 - 32;
    }
    $('#e'+liczbaoczek4).css('opacity', '1');
    let opacityValue4 = $('#e'+liczbaoczek4).css('opacity');
    if(opacityValue4 == 1)
    {
        if(liczbaoczek4 == 8)
        {
            $('#targ').html('');           
        }
        if(liczbaoczek4 == 16)
        {
            $('#targ').html('');
        }
        if(liczbaoczek4 == 24)
        {
            $('#targ').html('')
        }
        let hamza4 = $('#od'+liczbaoczek4).css('opacity');
        if(liczbaoczek4 < 8)
        {
            if(hamza4 != 0.99 && liczbaoczek4 != 2 && liczbaoczek4 != 5)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + odkrywki[liczbaoczek4];
            }
            $('#od'+liczbaoczek4).css('background-color', 'red');
            $('#od'+liczbaoczek4).css('border-color', 'red');
            $('#od'+liczbaoczek4).css('opacity', '0.99');
            if(liczbaoczek4 != 2 && liczbaoczek4 != 5)
            {
                if(liczbaoczek4 == 1)
                {
                    if(kupiona1 == 0 && czyja == 0)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja == 4)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja != 0 && czyja != 4)
                    {
                        $('#targ').html('');
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 7000;
                        if(kaal == 2)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 7000;
                        }
                        else if(kaal == 3)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 23000;
                        }
                        else if(kaal == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 43000;
                        }
                        else if(kaal == 5)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 53000;
                        }
                        else if(kaal == 6)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 73000;
                        }
                        if(czyja == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 7000;

                            if(kaal == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 8000;
                            }
                            else if(kaal == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 23000;
                            }
                            else if(kaal == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 43000;
                            }
                            else if(kaal == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 53000;
                            }
                            else if(kaal == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 73000;
                            }
                        }
                        else if(czyja == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 7000;

                            if(kaal == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 8000;
                            }
                            else if(kaal == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 23000;
                            }
                            else if(kaal == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 43000;
                            }
                            else if(kaal == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 53000;
                            }
                            else if(kaal == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 73000;
                            }
                        }
                        else if(czyja == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 7000;

                            if(kaal == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 8000;
                            }
                            else if(kaal == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 23000;
                            }
                            else if(kaal == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 43000;
                            }
                            else if(kaal == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 53000;
                            }
                            else if(kaal == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 73000;
                            }
                        }
                    }
                }
                else if(liczbaoczek4 == 3)
                {
                    if(kupiona2 == 0)
                    {
                        if(kupiona1 == 0 && czyja2 == 0)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus2()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja2 == 4)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter2()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja2 != 0 && czyja2 != 4)
                    {
                        $('#targ').html('');
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 7000;
                        if(kaal2 == 2)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 7000;
                        }
                        else if(kaal2 == 3)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 23000;
                        }
                        else if(kaal2 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 43000;
                        }
                        else if(kaal2 == 5)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 53000;
                        }
                        else if(kaal2 == 6)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 73000;
                        }
                        if(czyja2 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 7000;

                            if(kaal2 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 8000;
                            }
                            else if(kaal2 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 23000;
                            }
                            else if(kaal2 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 43000;
                            }
                            else if(kaal2 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 53000;
                            }
                            else if(kaal2 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 73000;
                            }
                        }
                        else if(czyja2 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 7000;

                            if(kaal2 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 8000;
                            }
                            else if(kaal2 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 23000;
                            }
                            else if(kaal2 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 43000;
                            }
                            else if(kaal2 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 53000;
                            }
                            else if(kaal2 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 73000;
                            }
                        }
                        else if(czyja2 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 7000;

                            if(kaal2 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 8000;
                            }
                            else if(kaal2 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 23000;
                            }
                            else if(kaal2 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 43000;
                            }
                            else if(kaal2 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 53000;
                            }
                            else if(kaal2 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 73000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek4 == 4)
                {
                    if(kupiona3 == 0)
                    {
                        if(kupiona3 == 0 && czyja3 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus3()">Czy chcesz kupić tą działke?</span>');
                        }
                    else if(czyja3 == 4)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter3()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja3 != 0 && czyja3 != 4)
                    {
                        $('#targ').html('');
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 15000;
                        if(kaal3 == 2)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 15000;
                        }
                        else if(kaal3 == 3)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 35000;
                        }
                        else if(kaal3 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 65000;
                        }
                        else if(kaal3 == 5)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 80000;
                        }
                        else if(kaal3 == 6)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 110000;
                        }
                        if(czyja3 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;

                            if(kaal3 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;
                            }
                            else if(kaal3 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                            }
                            else if(kaal3 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                            }
                            else if(kaal3 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 80000;
                            }
                            else if(kaal3 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 110000;
                            }
                        }
                        else if(czyja3 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;

                            if(kaal3 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;
                            }
                            else if(kaal3 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                            }
                            else if(kaal3 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                            }
                            else if(kaal3 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 80000;
                            }
                            else if(kaal3 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 110000;
                            }
                        }
                        else if(czyja3 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;

                            if(kaal3 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;
                            }
                            else if(kaal3 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                            }
                            else if(kaal3 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                            }
                            else if(kaal3 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 80000;
                            }
                            else if(kaal3 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 110000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek4 == 6)
                {
                    if(kupiona4 == 0)
                    {
                        if(kupiona4 == 0 && czyja4 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus4()">Czy chcesz kupić tą działke?</span>');
                        }
                    else if(czyja4 == 4)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter4()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja4 != 0 && czyja4 != 4)
                    {
                        $('#targ').html('');
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 15000;
                        if(kaal4 == 2)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 15000;
                        }
                        else if(kaal4 == 3)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 35000;
                        }
                        else if(kaal4 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 65000;
                        }
                        else if(kaal4 == 5)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 80000;
                        }
                        else if(kaal4 == 6)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 110000;
                        }
                        if(czyja4 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;

                            if(kaal4 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;
                            }
                            else if(kaal4 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                            }
                            else if(kaal4 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                            }
                            else if(kaal4 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 80000;
                            }
                            else if(kaal4 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 110000;
                            }
                        }
                        else if(czyja4 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;

                            if(kaal4 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;
                            }
                            else if(kaal4 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                            }
                            else if(kaal4 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                            }
                            else if(kaal4 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 80000;
                            }
                            else if(kaal4 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 110000;
                            }
                        }
                        else if(czyja4 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;

                            if(kaal4 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;
                            }
                            else if(kaal4 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                            }
                            else if(kaal4 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                            }
                            else if(kaal4 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 80000;
                            }
                            else if(kaal4 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 110000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek4 == 7)
                {
                    if(kupiona5 == 0)
                    {
                        if(kupiona5 == 0 && czyja5 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus5()">Czy chcesz kupić tą działke?</span>');
                        }
                    else if(czyja5 == 4)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter5()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja5 != 0 && czyja5 != 4)
                    {
                        $('#targ').html('');
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 15000;
                        if(kaal5 == 2)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 15000;
                        }
                        else if(kaal5 == 3)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 35000;
                        }
                        else if(kaal5 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 65000;
                        }
                        else if(kaal5 == 5)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 80000;
                        }
                        else if(kaal5 == 6)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 110000;
                        }
                        if(czyja5 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;

                            if(kaal5 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 15000;
                            }
                            else if(kaal5 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                            }
                            else if(kaal5 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                            }
                            else if(kaal5 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 80000;
                            }
                            else if(kaal5 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 110000;
                            }
                        }
                        else if(czyja5 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;

                            if(kaal5 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 15000;
                            }
                            else if(kaal5 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                            }
                            else if(kaal5 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                            }
                            else if(kaal5 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 80000;
                            }
                            else if(kaal5 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 110000;
                            }
                        }
                        else if(czyja5 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;

                            if(kaal5 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 15000;
                            }
                            else if(kaal5 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                            }
                            else if(kaal5 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                            }
                            else if(kaal5 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 80000;
                            }
                            else if(kaal5 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 110000;
                            }
                        }
                    }
                }
            }
            else
            {
                $('#targ').html('');
            }
            }
        }
        else if(liczbaoczek4 > 8 && liczbaoczek4 < 16)
        {
            if(hamza4 != 0.99 && liczbaoczek4 != 13)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + odkrywki[liczbaoczek4];
            }
            $('#od'+liczbaoczek4).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek4).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek4).css('opacity', '0.99');
            if(liczbaoczek4 != 13)
            {
                if(liczbaoczek4 == 9)
                {
                    if(kupiona6 == 0)
                    {
                        if(kupiona6 == 0 && czyja6 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus6()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja6 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter6()">Czy chcesz kupić domek?</span>');
                        }
                    else if(czyja6 != 0 && czyja6 != 4)
                    {
                        $('#targ').html('');
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 20000;
                        if(kaal6 == 2)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 30000;
                        }
                        else if(kaal6 == 3)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 70000;
                        }
                        else if(kaal6 == 4)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 120000;
                        }
                        else if(kaal6 == 5)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 145000;
                        }
                        else if(kaal6 == 6)
                        {
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 195000;
                        }
                        if(czyja6 == 1)
                        {
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 20000;

                            if(kaal6 == 2)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 30000;
                            }
                            else if(kaal6 == 3)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 70000;
                            }
                            else if(kaal6 == 4)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                            }
                            else if(kaal6 == 5)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                            }
                            else if(kaal6 == 6)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                            }
                        }
                        else if(czyja6 == 2)
                        {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 20000;

                            if(kaal6 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 30000;
                            }
                            else if(kaal6 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 70000;
                            }
                            else if(kaal6 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                            }
                            else if(kaal6 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                            }
                            else if(kaal6 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                            }
                        }
                        else if(czyja6 == 3)
                        {
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 20000;

                            if(kaal6 == 2)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 30000;
                            }
                            else if(kaal6 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 70000;
                            }
                            else if(kaal6 == 4)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                            }
                            else if(kaal6 == 5)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                            }
                            else if(kaal6 == 6)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                            }
                        }
                    }
                    }
                }
                else if(liczbaoczek4 == 10)
                {
                    if(kupiona7 == 0)
                    {
                        if(kupiona7 == 0 && czyja7 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus7()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja7 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter7()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja7 != 0 && czyja7 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 20000;
                            if(kaal7 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 30000;
                            }
                            else if(kaal7 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 70000;
                            }
                            else if(kaal7 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 120000;
                            }
                            else if(kaal7 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 145000;
                            }
                            else if(kaal7 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 195000;
                            }
                            if(czyja7 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 20000;

                                if(kaal7 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 30000;
                                }
                                else if(kaal7 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 70000;
                                }
                                else if(kaal7 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal7 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                                }
                                else if(kaal7 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                            }
                            else if(czyja7 == 2)
                            {
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 20000;

                            if(kaal7 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 30000;
                            }
                            else if(kaal7 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 70000;
                            }
                            else if(kaal7 == 4)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                            }
                            else if(kaal7 == 5)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                            }
                            else if(kaal7 == 6)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                            }
                            }
                            else if(czyja7 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 20000;

                                if(kaal7 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 30000;
                                }
                                else if(kaal7 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 70000;
                                }
                                else if(kaal7 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal7 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                                }
                                else if(kaal7 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                            }
                        }
                    }   
                }
                else if(liczbaoczek4 == 11)
                {
                    if(kupiona8 == 0)
                    {
                        if(kupiona8 == 0 && czyja8 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus8()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja8 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter8()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja8 != 0 && czyja8 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 20000;
                            if(kaal8 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 30000;
                            }
                            else if(kaal8 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 70000;
                            }
                            else if(kaal8 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 120000;
                            }
                            else if(kaal8 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 145000;
                            }
                            else if(kaal8 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 195000;
                            }
                            if(czyja8 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 20000;

                                if(kaal8 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 30000;
                                }
                                else if(kaal8 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 70000;
                                }
                                else if(kaal8 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal8 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                                }   
                                else if(kaal8 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                            }
                            else if(czyja8 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 20000;

                                if(kaal8 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 30000;
                                }
                                else if(kaal8 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 70000;
                                }
                                else if(kaal8 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                                }
                                else if(kaal8 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                                }
                                else if(kaal8 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                                }
                            }
                            else if(czyja8 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 20000;

                                if(kaal8 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 30000;
                                }
                                else if(kaal8 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 70000;
                                }
                                else if(kaal8 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal8 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                                }
                                else if(kaal8 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                            }
                        }
                    }   
                }
            
                else if(liczbaoczek4 == 12)
                {
                    if(kupiona9 == 0 && czyja9 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus9()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja9 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter9()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja9 != 0 && czyja9 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 25000;
                            if(kaal9 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 40000;
                            }
                            else if(kaal9 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 85000;
                            }
                            else if(kaal9 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 145000;
                            }
                            else if(kaal9 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 175000;
                            }
                            else if(kaal9 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 245000;
                            }
                            
                            if(czyja9 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 25000;
                                if(kaal9 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                }
                                else if(kaal9 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 85000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                                }
                                else if(kaal9 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 175000;
                                }
                                else if(kaal9 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 245000;
                                }
                            }
                            
                            else if(czyja9 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 25000;
                                if(kaal9 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                }   
                                else if(kaal9 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 85000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                                }
                                else if(kaal9 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 175000;
                                }
                                else if(kaal9 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 245000;
                                }
                            }
                            
                            else if(czyja9 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 25000;

                                if(kaal9 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                }
                                else if(kaal9 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 85000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                                }
                                else if(kaal9 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 175000;
                                }
                                else if(kaal9 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 245000;
                                }
                            }
                        }  
                }
            
                else if(liczbaoczek4 == 14)
                {
                    if(kupiona10 == 0 && czyja10 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus10()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja10 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter10()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja10 != 0 && czyja10 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans3 = bilans3 - 25000;
                            if(kaal10 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans3 = bilans3 - 40000;
                            }
                            else if(kaal10 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans3 = bilans3 - 85000;
                            }
                            else if(kaal10 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 145000;
                            }
                            else if(kaal10 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 175000;
                            }
                            else if(kaal10 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 245000;
                            }
                            
                            if(czyja10 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 25000;
                                if(kaal10 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                }
                                else if(kaal10 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 85000;
                                }
                                else if(kaal9 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                                }
                                else if(kaal10 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 175000;
                                }
                                else if(kaal10 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 245000;
                                }
                            }
                            
                            else if(czyja10 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 25000;
                                if(kaal10 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                }
                                else if(kaal10 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 85000;
                                }
                                else if(kaal10 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                                }
                                else if(kaal10 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 175000;
                                }
                                else if(kaal10 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 245000;
                                }
                            }
                            
                            else if(czyja10 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 25000;

                                if(kaal10 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                }
                                else if(kaal10 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 85000;
                                }
                                else if(kaal10 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                                }
                                else if(kaal10 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 175000;
                                }
                                else if(kaal10 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 245000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek4 == 15)
                {
                    if(kupiona11 == 0 && czyja11 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus11()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja11 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter11()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja11 != 0 && czyja11 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 25000;
                            if(kaal11 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 40000;
                            }
                            else if(kaal11 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 85000;
                            }
                            else if(kaal11 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 145000;
                            }
                            else if(kaal11 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 175000;
                            }
                            else if(kaal11 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 245000;
                            }
                            
                            if(czyja11 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 25000;
                                if(kaal11 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                }
                                else if(kaal11 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 85000;
                                }
                                else if(kaal11 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 145000;
                                }
                                else if(kaal11 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 175000;
                                }
                                else if(kaal11 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 245000;
                                }
                            }
                            
                            else if(czyja11 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 25000;
                                if(kaal11 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                }
                                else if(kaal11 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 85000;
                                }
                                else if(kaal11 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 145000;
                                }
                                else if(kaal11 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 175000;
                                }
                                else if(kaal11 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 245000;
                                }
                            }
                            else if(czyja11 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 25000;

                                if(kaal11 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                }
                                else if(kaal11 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 85000;
                                }
                                else if(kaal11 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 145000;
                                }
                                else if(kaal11 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 175000;
                                }
                                else if(kaal11 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 245000;
                                }
                            }
                        }  
                }
            }
            else
            {
                $('#targ').html('');
            }
            }
        }
        else if(liczbaoczek4 > 16 && liczbaoczek4 < 24)
        {
            if(hamza4 != 0.99 && liczbaoczek4 != 18)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + odkrywki[liczbaoczek4];
            }
            $('#od'+liczbaoczek4).css('background-color', 'red');
            $('#od'+liczbaoczek4).css('border-color', 'red');
            $('#od'+liczbaoczek4).css('opacity', '0.99');
            if(liczbaoczek4 != 18)
            {
                if(liczbaoczek4 == 17)
                {
                    if(kupiona12 == 0 && czyja12 == 0)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus12()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja12 == 4)
                    {
                        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter12()">Czy chcesz kupić domek?</span>');
                    }
                        else if(czyja12 != 0 && czyja12 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 35000;
                            if(kaal12 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 55000;
                            }
                            else if(kaal12 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 115000;
                            }
                            else if(kaal12 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 195000;
                            }
                            else if(kaal12 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 235000;
                            }
                            else if(kaal12 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 315000;
                            }
                            
                            if(czyja12 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                                if(kaal12 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 55000;
                                }
                                else if(kaal12 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 115000;
                                }
                                else if(kaal12 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                                else if(kaal12 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 235000;
                                }
                                else if(kaal12 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 315000;
                                }
                            }
                            
                            else if(czyja12 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                                if(kaal12 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 55000;
                                }
                                else if(kaal12 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 115000;
                                }
                                else if(kaal12 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                                }
                                else if(kaal12 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 235000;
                                }
                                else if(kaal12 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 315000;
                                }
                            }
                            
                            else if(czyja12 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                                if(kaal12 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 55000;
                                }
                                else if(kaal12 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 115000;
                                }
                                else if(kaal12 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                                else if(kaal12 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 235000;
                                }
                                else if(kaal12 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 315000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek4 == 19)
                {
                    if(kupiona13 == 0 && czyja13 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus13()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja13 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter13()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja13 != 0 && czyja13 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 35000;
                            if(kaal13 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 55000;
                            }
                            else if(kaal13 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 115000;
                            }
                            else if(kaal13 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 195000;
                            }
                            else if(kaal13 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 235000;
                            }
                            else if(kaal13 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 315000;
                            }
                            
                            if(czyja13 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                                if(kaal13 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 55000;
                                }
                                else if(kaal13 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 115000;
                                }
                                else if(kaal13 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                                else if(kaal13 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 235000;
                                }
                                else if(kaal13 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 315000;
                                }
                            }
                            
                            else if(czyja13 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                                if(kaal13 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 55000;
                                }
                                else if(kaal13 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 115000;
                                }
                                else if(kaal13 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                                }
                                else if(kaal13 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 235000;
                                }
                                else if(kaal13 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 315000;
                                }
                            }
                            
                            else if(czyja13 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans4 + 35000;
                                if(kaal13 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 55000;
                                }
                                else if(kaal13 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 115000;
                                }
                                else if(kaal13 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                                else if(kaal13 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 235000;
                                }
                                else if(kaal13 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 315000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek4 == 20)
                {
                    if(kupiona14 == 0 && czyja14 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus14()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja14 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter14()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja14 != 0 && czyja14 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 35000;
                            if(kaal14 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 55000;
                            }
                            else if(kaal14 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 115000;
                            }
                            else if(kaal14 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 195000;
                            }
                            else if(kaal14 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 235000;
                            }
                            else if(kaal14 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 315000;
                            }
                            
                            if(czyja14 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 35000;
                                if(kaal14 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 55000;
                                }
                                else if(kaal14 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 115000;
                                }
                                else if(kaal14 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 195000;
                                }
                                else if(kaal14 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 235000;
                                }
                                else if(kaal14 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 315000;
                                }
                            }
                            
                            else if(czyja14 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 35000;
                                if(kaal14 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 55000;
                                }
                                else if(kaal14 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 115000;
                                }
                                else if(kaal14 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 195000;
                                }
                                else if(kaal14 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 235000;
                                }
                                else if(kaal14 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 315000;
                                }
                            }
                            
                            else if(czyja14 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 35000;
                                if(kaal14 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 55000;
                                }
                                else if(kaal14 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 115000;
                                }
                                else if(kaal14 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 195000;
                                }
                                else if(kaal14 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 235000;
                                }
                                else if(kaal14 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 315000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek4 == 21)
                {
                    if(kupiona15 == 0 && czyja15 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus15()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja15 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter15()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja15 != 0 && czyja15 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 40000;
                            if(kaal15 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 60000;
                            }
                            else if(kaal15 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 120000;
                            }
                            else if(kaal15 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 220000;
                            }
                            else if(kaal15 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 265000;
                            }
                            else if(kaal15 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 355000;
                            }
                            
                            if(czyja15 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 60000;
                                }
                                else if(kaal15 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal15 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 220000;
                                }
                                else if(kaal15 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 265000;
                                }
                                else if(kaal15 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 355000;
                                }
                            }
                            
                            else if(czyja15 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 60000;
                                }
                                else if(kaal15 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                                }
                                else if(kaal15 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 220000;
                                }
                                else if(kaal15 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 265000;
                                }
                                else if(kaal15 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 355000;
                                }
                            }
                            
                            else if(czyja15 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 60000;
                                }
                                else if(kaal15 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal15 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 220000;
                                }
                                else if(kaal15 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 265000;
                                }
                                else if(kaal15 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 355000;
                                }
                            }
                        }  
                }
                else if(liczbaoczek4 == 22)
                {
                    if(kupiona16 == 0 && czyja16 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus16()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja16 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter16()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja16 != 0 && czyja16 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans3 - 40000;
                            if(kaal16 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 60000;
                            }
                            else if(kaal16 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 120000;
                            }
                            else if(kaal16 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 220000;
                            }
                            else if(kaal16 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 265000;
                            }
                            else if(kaal16 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 355000;
                            }
                            
                            if(czyja16 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                if(kaal16 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 60000;
                                }
                                else if(kaal16 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal16 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 220000;
                                }
                                else if(kaal16 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 265000;
                                }
                                else if(kaal16 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 355000;
                                }
                            }
                            
                            else if(czyja16 == 3)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                if(kaal16 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 60000;
                                }
                                else if(kaal16 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                                }
                                else if(kaal16 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 220000;
                                }
                                else if(kaal16 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 265000;
                                }
                                else if(kaal16 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 355000;
                                }
                            }
                            
                            else if(czyja16 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                if(kaal16 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 60000;
                                }
                                else if(kaal16 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal16 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 220000;
                                }
                                else if(kaal16 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 265000;
                                }
                                else if(kaal16 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 355000;
                                }
                            }
                        }
                }
                else if(liczbaoczek4 == 23)
                {
                    if(kupiona17 == 0 && czyja17 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus17()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja17 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter17()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja17 != 0 && czyja17 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 40000;
                            if(kaal17 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 60000;
                            }
                            else if(kaal17 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 120000;
                            }
                            else if(kaal17 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 220000;
                            }
                            else if(kaal17 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans3 = bilans4 - 265000;
                            }
                            else if(kaal17 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 355000;
                            }
                            
                            if(czyja17 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 40000;
                                if(kaal17 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 60000;
                                }
                                else if(kaal17 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 120000;
                                }
                                else if(kaal17 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 220000;
                                }
                                else if(kaal17 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 265000;
                                }
                                else if(kaal17 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 355000;
                                }
                            }
                            
                            else if(czyja17 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 40000;
                                if(kaal17 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 60000;
                                }
                                else if(kaal17 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 120000;
                                }
                                else if(kaal17 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 220000;
                                }
                                else if(kaal17 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 265000;
                                }
                                else if(kaal17 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 355000;
                                }
                            }
                            
                            else if(czyja17 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 40000;
                                if(kaal17 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 60000;
                                }
                                else if(kaal17 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 120000;
                                }
                                else if(kaal17 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 220000;
                                }
                                else if(kaal17 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 265000;
                                }
                                else if(kaal17 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 355000;
                                }
                            }
                        }
                }
            }
            else
            {
                $('#targ').html('');
            }
        }
        else if(liczbaoczek4 > 24)
        { 
            if(hamza4 != 0.99 && liczbaoczek4 != 27 && liczbaoczek4 != 29)
            {
                document.getElementById("ba4").innerHTML = bilans4 = bilans4 + odkrywki[liczbaoczek4];
            }
            $('#od'+liczbaoczek4).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek4).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek4).css('opacity', '0.99');
            if(liczbaoczek4 != 27 && liczbaoczek4 != 29)
            {
                if(liczbaoczek4 == 25)
                {
                    if(kupiona18 == 0 && czyja18 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus18()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja18 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter18()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja18 != 0 && czyja18 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 50000;
                            if(kaal18 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 75000;
                            }
                            else if(kaal18 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 160000;
                            }
                            else if(kaal18 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 270000;
                            }
                            else if(kaal18 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 325000;
                            }
                            else if(kaal18 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 435000;
                            }
                            
                            if(czyja18 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 50000;
                                if(kaal18 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 75000;
                                }
                                else if(kaal18 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 160000;
                                }
                                else if(kaal18 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 270000;
                                }
                                else if(kaal18 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 325000;
                                }
                                else if(kaal18 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 435000;
                                }
                            }
                            
                            else if(czyja18 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 50000;
                                if(kaal18 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 75000;
                                }
                                else if(kaal18 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 160000;
                                }
                                else if(kaal18 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 270000;
                                }
                                else if(kaal18 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 325000;
                                }
                                else if(kaal18 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 435000;
                                }
                            }
                            
                            else if(czyja15 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 50000;
                                if(kaal15 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 75000;
                                }
                                else if(kaal18 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 160000;
                                }
                                else if(kaal18 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 270000;
                                }
                                else if(kaal18 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 325000;
                                }
                                else if(kaal18 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 435000;
                                }
                            }
                        }
                }
                else if(liczbaoczek4 == 26)
                {
                    if(kupiona19 == 0 && czyja19 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus19()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja19 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter19()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja19 != 0 && czyja19 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 50000;
                            if(kaal19 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 75000;
                            }
                            else if(kaal19 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 160000;
                            }
                            else if(kaal19 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4- 270000;
                            }
                            else if(kaal19 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 325000;
                            }
                            else if(kaal19 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 435000;
                            }
                            
                            if(czyja19 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 50000;
                                if(kaal19 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 75000;
                                }
                                else if(kaal19 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 160000;
                                }
                                else if(kaal19 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 270000;
                                }
                                else if(kaal19 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 325000;
                                }
                                else if(kaal19 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 435000;
                                }
                            }
                            
                            else if(czyja19 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 50000;
                                if(kaal19 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 75000;
                                }
                                else if(kaal19 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 160000;
                                }
                                else if(kaal19 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 270000;
                                }
                                else if(kaal19 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 325000;
                                }
                                else if(kaal19 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 435000;
                                }
                            }
                            
                            else if(czyja19 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 50000;
                                if(kaal19 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 75000;
                                }
                                else if(kaal19 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 160000;
                                }
                                else if(kaal19 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 270000;
                                }
                                else if(kaal19 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 325000;
                                }
                                else if(kaal19 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 435000;
                                }
                            }
                        }
                }
                else if(liczbaoczek4 == 28)
                {
                    if(kupiona20 == 0 && czyja20 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus20()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja20 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter20()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja20 != 0 && czyja20 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 50000;
                            if(kaal20 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 75000;
                            }
                            else if(kaal20 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 160000;
                            }
                            else if(kaal20 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 270000;
                            }
                            else if(kaal20 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 325000;
                            }
                            else if(kaal20 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 435000;
                            }
                            
                            if(czyja20 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 50000;
                                if(kaal20 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 75000;
                                }
                                else if(kaal20 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 160000;
                                }
                                else if(kaal20 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 270000;
                                }
                                else if(kaal20 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 325000;
                                }
                                else if(kaal20 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 435000;
                                }
                            }
                            
                            else if(czyja20 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 50000;
                                if(kaal20 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 75000;
                                }
                                else if(kaal20 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 160000;
                                }
                                else if(kaal20 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 270000;
                                }
                                else if(kaal20 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 325000;
                                }
                                else if(kaal20 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 435000;
                                }
                            }
                            
                            else if(czyja20 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 50000;
                                if(kaal20 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 75000;
                                }
                                else if(kaal20 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 160000;
                                }
                                else if(kaal20 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 270000;
                                }
                                else if(kaal20 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 325000;
                                }
                                else if(kaal20 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 435000;
                                }
                            }
                        }
                }
                else if(liczbaoczek4 == 30)
                {
                    if(kupiona21 == 0 && czyja21 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus21()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja21 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter21()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja21 != 0 && czyja21 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 65000;
                            if(kaal21 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 95000;
                            }
                            else if(kaal21 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 185000;
                            }
                            else if(kaal21 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 305000;
                            }
                            else if(kaal21 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 365000;
                            }
                            else if(kaal21 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 485000;
                            }
                            
                            if(czyja21 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                                if(kaal21 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 95000;
                                }
                                else if(kaal21 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 185000;
                                }
                                else if(kaal21 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 305000;
                                }
                                else if(kaal21 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 365000;
                                }
                                else if(kaal21 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 485000;
                                }
                            }
                            
                            else if(czyja21 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                                if(kaal21 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 95000;
                                }
                                else if(kaal21 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 185000;
                                }
                                else if(kaal21 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 305000;
                                }
                                else if(kaal21 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 365000;
                                }
                                else if(kaal21 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 485000;
                                }
                            }
                            
                            else if(czyja21 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                                if(kaal21 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 95000;
                                }
                                else if(kaal21 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 185000;
                                }
                                else if(kaal21 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 305000;
                                }
                                else if(kaal21 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 365000;
                                }
                                else if(kaal21 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 485000;
                                }
                            }
                        }
                }
                else if(liczbaoczek4 == 31)
                {
                    if(kupiona22 == 0 && czyja22 == 0)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="gus22()">Czy chcesz kupić tą działke?</span>');
                        }
                        else if(czyja22 == 4)
                        {
                            $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter22()">Czy chcesz kupić domek?</span>');
                        }
                        else if(czyja22 != 0 && czyja22 != 4)
                        {
                            $('#targ').html('');
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 65000;
                            if(kaal22 == 2)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 95000;
                            }
                            else if(kaal22 == 3)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 185000;
                            }
                            else if(kaal22 == 4)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 305000;
                            }
                            else if(kaal22 == 5)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 365000;
                            }
                            else if(kaal22 == 6)
                            {
                                document.getElementById("ba4").innerHTML = bilans4 = bilans4 - 485000;
                            }
                            
                            if(czyja22 == 1)
                            {
                                document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 65000;
                                if(kaal22 == 2)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 95000;
                                }
                                else if(kaal22 == 3)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 185000;
                                }
                                else if(kaal22 == 4)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 305000;
                                }
                                else if(kaal22 == 5)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 365000;
                                }
                                else if(kaal22 == 6)
                                {
                                    document.getElementById("ba1").innerHTML = bilans1 = bilans1 + 485000;
                                }
                            }
                            
                            else if(czyja22 == 2)
                            {
                                document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 65000;
                                if(kaal22 == 2)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 95000;
                                }
                                else if(kaal22 == 3)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 185000;
                                }
                                else if(kaal22 == 4)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 305000;
                                }
                                else if(kaal22 == 5)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 365000;
                                }
                                else if(kaal22 == 6)
                                {
                                    document.getElementById("ba2").innerHTML = bilans2 = bilans2 + 485000;
                                }
                            }
                            
                            else if(czyja22 == 3)
                            {
                                document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 65000;
                                if(kaal22 == 2)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 95000;
                                }
                                else if(kaal22 == 3)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 185000;
                                }
                                else if(kaal22 == 4)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 305000;
                                }
                                else if(kaal22 == 5)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 365000;
                                }
                                else if(kaal22 == 6)
                                {
                                    document.getElementById("ba3").innerHTML = bilans3 = bilans3 + 485000;
                                }
                            }
                        }
                }
            }
            else
            {
                $('#targ').html('');
            }
        }
            $('#ba4').toggleClass('klik');
    $('#ba1').toggleClass('klik');
    licznik++;
if(licznik == 2) {alert("2")}
if(licznik == 3) {alert("3")}
if(licznik == 4) {alert("4")}
        }
document.getElementById("ba1").innerHTML = bilans1;
document.getElementById("ba2").innerHTML = bilans2;
document.getElementById("ba3").innerHTML = bilans3;
document.getElementById("ba4").innerHTML = bilans4;
