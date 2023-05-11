const gracz1 = ""; const gracz2 = "";const gracz3 = "";const gracz4 = "";

var balans1 = document.getElementById("ba1"); var balans2 = document.getElementById("ba2");var balans3 = document.getElementById("ba3");
var balans4 = document.getElementById("ba4");

var bilans1 = 372000; var bilans2 = 372000; var bilans3 = 372000; var bilans4 = 372000;

var odkrywki = 
[0, -1000, 2000, -3000, 4000, -5000, 6000, -7000, 8000, -9000, 10000, -11000, 12000, -13000, 14000, -15000, 16000,-17000, 18000,
20000, -21000, 22000, -23000, 24000, -25000, 26000, -27000, 28000, -29000, 30000, -31000
]

odkrywki = odkrywki.sort(() => Math.random() - 0.5);

var liczbaoczek = 0; var liczbaoczek2 = 0; var liczbaoczek3 = 0; var liczbaoczek4 = 0;

let poziom = 0;

$('#a0').css('opacity', '1'); $('#b0').css('opacity', '1'); $('#c0').css('opacity', '1'); $('#e0').css('opacity', '1');

var targ = document.getElementById("targ");

var kaal = 
[0,1,0,1,1,0,1,1,0,/*8*/
1,1,1,1,0,1,1,0,/*16*/
1,0,1,1,1,1,1,0,/*24*/
1,1,0,1,0,1,1,/*31*/
]

var czyja = 
[0,0,0,0,0,0,0,0,0,/*8*/
0,0,0,0,0,0,0,0,/*16*/
0,0,0,0,0,0,0,0,/*24*/
0,0,0,0,0,0,0,/*31*/
]
var kupiona = 
[0,0,0,0,0,0,0,0,0,/*8*/
0,0,0,0,0,0,0,0,/*16*/
0,0,0,0,0,0,0,0,/*24*/
0,0,0,0,0,0,0,/*31*/
]

function jessie()
{
    if(licznik == 1){
        $('#dom'+liczbaoczek+'-1').css('opacity', '0'); $('#dom'+liczbaoczek+'-2').css('opacity', '0');
        $('#dom'+liczbaoczek+'-3').css('opacity', '0'); $('#dom'+liczbaoczek+'-4').css('opacity', '0');
        $('#h'+liczbaoczek).css('opacity', '1');
    }
    else if(licznik == 2){
        $('#dom'+liczbaoczek2+'-1').css('opacity', '0'); $('#dom'+liczbaoczek2+'-2').css('opacity', '0');
        $('#dom'+liczbaoczek2+'-3').css('opacity', '0'); $('#dom'+liczbaoczek2+'-4').css('opacity', '0');
        $('#h'+liczbaoczek2).css('opacity', '1');
    }
    else if(licznik == 3){
        $('#dom'+liczbaoczek3+'-1').css('opacity', '0'); $('#dom'+liczbaoczek3+'-2').css('opacity', '0');
        $('#dom'+liczbaoczek3+'-3').css('opacity', '0'); $('#dom'+liczbaoczek3+'-4').css('opacity', '0');
        $('#h'+liczbaoczek3).css('opacity', '1');
    }
    else if(licznik == 4){
        $('#dom'+liczbaoczek4+'-1').css('opacity', '0'); $('#dom'+liczbaoczek4+'-2').css('opacity', '0');
        $('#dom'+liczbaoczek4+'-3').css('opacity', '0'); $('#dom'+liczbaoczek4+'-4').css('opacity', '0');
        $('#h'+liczbaoczek4).css('opacity', '1');
    }
    if(kaal[liczbaoczek] == 6){
        if(licznik == 1){
            $('#ba1').html(bilans1 = bilans1 - cenydomow[liczbaoczek])
        }
        else if(licznik == 2){
            $('#ba2').html(bilans2 = bilans2 - cenydomow[liczbaoczek2])
        }
        else if(licznik == 3){
            $('#ba3').html(bilans3 = bilans3 - cenydomow[liczbaoczek3])
        }
        else if(licznik == 4){
            $('#ba4').html(bilans4 = bilans4 - cenydomow[liczbaoczek4])
        }
    }
        $('#targ').html('');
}

const cenydomow = [0, 10000, 0, 10000, 15000, 0, 15000, 15000, 0, 25000, 25000, 25000, 30000, 0, 30000, 30000, 0, 40000, 0, 40000, 40000, 
45000, 45000, 45000, 0, 50000, 50000, 0, 50000, 0, 60000, 60000]

function walter()
{
    if(licznik == 1){
        $('#ba1').html(bilans1 = bilans1 - cenydomow[liczbaoczek])
        $('#dom'+liczbaoczek+'-'+kaal[liczbaoczek]).css('opacity', '1');
    }
    else if(licznik == 2){
        $('#ba2').html(bilans2 = bilans2 - cenydomow[liczbaoczek2])
        $('#dom'+liczbaoczek2+'-'+kaal[liczbaoczek2]).css('opacity', '1');
    }
    else if(licznik == 3){
        $('#ba3').html(bilans3 = bilans3 - cenydomow[liczbaoczek3])
        $('#dom'+liczbaoczek3+'-'+kaal[liczbaoczek3]).css('opacity', '1');
    }
    else if(licznik == 4){
        $('#ba4').html(bilans4 = bilans4 - cenydzialek[liczbaoczek4])
        $('#dom'+liczbaoczek4+'-'+kaal[liczbaoczek4]).css('opacity', '1');
    }
    kaal[liczbaoczek]++;
    if(kaal[liczbaoczek] > 5){
        $('#targ').html('');
    }
    if(kaal[liczbaoczek] == 5){
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
        kaal[liczbaoczek]++
    }
}

const cos = "chartreuse";

const cenydzialek = [0, 5000, 0, 5000, 11000, 0, 15000, 20000, 0, 35000, 35000, 40000, 55000, 0, 55000, 60000, 0, 80000, 0, 80000, 90000, 
115000, 115000, 120000, 0, 145000, 145000, 0, 150000, 0, 170000, 200000];

function gus() 
{
    if(licznik == 1){
        $('#ba1').html(bilans1 = bilans1 - cenydzialek[liczbaoczek])
        $('#d'+liczbaoczek).css('color', 'darkred');
        czyja[liczbaoczek] = 1;
        kupiona[liczbaoczek] = 1;
    }
    else if(licznik == 2){
        $('#ba2').html(bilans2 = bilans2 - cenydzialek[liczbaoczek2])
        $('#d'+liczbaoczek2).css('color', "chartreuse");
        czyja[liczbaoczek2] = 2;
        kupiona[liczbaoczek2] = 1;
    }
    else if(licznik == 3){
        $('#ba3').html(bilans3 = bilans3 - cenydzialek[liczbaoczek3])
        $('#d'+liczbaoczek3).css('color', 'fuchsia');
        czyja[liczbaoczek3] = 3;
        kupiona[liczbaoczek3] = 1;
    }
    else if(licznik == 4){
        $('#ba4').html(bilans4 = bilans4 - cenydzialek[liczbaoczek4])
        $('#d'+liczbaoczek4).css('color', 'black');
        czyja[liczbaoczek4] = 4;
        kupiona[liczbaoczek4] = 1;
    }
    if(kupiona[liczbaoczek]= 1){
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
    }
}

var licznik = 1; 

$('#ba1').addClass('klik');

balans1.addEventListener("click", function() {tura1(); }); balans2.addEventListener("click", function() {tura2(); });
balans3.addEventListener("click", function() {tura3(); }); balans4.addEventListener("click", function() {tura4(); });

const ceny1 = [0, 7000, 15000, 30000, 50000, 60000, 80000]; const ceny2 = [0, 15000, 30000, 50000, 80000, 95000, 125000];
const ceny3 = [0, 20000, 50000, 90000, 140000, 165000, 215000]; const ceny4 = [0, 25000, 65000, 110000, 170000, 200000, 270000];
const ceny5 = [0, 35000, 90000, 150000, 230000, 270000, 350000]; const ceny6 = [0, 40000, 100000, 170000, 260000, 305000, 395000];
const ceny7 = [0, 50000, 125000, 210000, 320000, 375000, 485000]; const ceny8 = [0, 65000, 160000, 250000, 370000, 430000, 550000];

function tura1()
{
    let rzutkostkami =  9;
    $('#a'+liczbaoczek).css('opacity', '0');
    document.getElementById("kosc").innerHTML = liczbaoczek = liczbaoczek + rzutkostkami;
    if(liczbaoczek == 32){
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
            if(liczbaoczek != 2 && liczbaoczek != 5){
                if(liczbaoczek < 4){
                    if(kupiona[liczbaoczek] == 0 && czyja[liczbaoczek] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek] == 1){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek] != 0 && czyja[liczbaoczek] != 1){
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - ceny1[kaal[liczbaoczek]];
                        $('#targ').html('');  
                    }
                    else if(czyja[liczbaoczek] == 2){
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny1[kaal[liczbaoczek]];
                        $('#targ').html('');
                    }
                    else if(czyja[liczbaoczek] == 3){
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny1[kaal[liczbaoczek]];
                        $('#targ').html('');
                    }
                    else if(czyja[liczbaoczek] == 4){
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny1[kaal[liczbaoczek]];
                        $('#targ').html('');
                    }
                }
                else if(liczbaoczek > 3){
                    if(kupiona[liczbaoczek] == 0 && czyja[liczbaoczek] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek] == 1){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek] != 0 && czyja[liczbaoczek] != 1){
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - ceny2[kaal[liczbaoczek]];
                        $('#targ').html('');   
                    }
                    else if(czyja[liczbaoczek] == 2){
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny2[kaal[liczbaoczek]];
                        $('#targ').html('');
                    }
                    else if(czyja[liczbaoczek] == 3){
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny2[kaal[liczbaoczek]];
                        $('#targ').html('');
                    }
                    else if(czyja[liczbaoczek] == 4){
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny2[kaal[liczbaoczek]];
                        $('#targ').html('');
                    }
                }
                else{
                    $('#targ').html('');
                }
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
            if(liczbaoczek != 13){
                if(liczbaoczek < 12){
                    if(kupiona[liczbaoczek] == 0 && czyja[liczbaoczek] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek] == 1){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek] != 0 && czyja[liczbaoczek] != 1){
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - ceny3[kaal[liczbaoczek]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny3[kaal[liczbaoczek]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny3[kaal[liczbaoczek]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny3[kaal[liczbaoczek]];
                            $('#targ').html('');
                        }  
                    }
                }
                else if(liczbaoczek > 11){
                    if(kupiona[liczbaoczek] == 0 && czyja[liczbaoczek] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek] == 1){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek] != 0 && czyja[liczbaoczek] != 1){
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - ceny4[kaal[liczbaoczek]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny4[kaal[liczbaoczek]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny4[kaal[liczbaoczek]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny4[kaal[liczbaoczek]];
                            $('#targ').html('');
                        }  
                    }
                }
            }
            else{
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
                if(liczbaoczek < 21){
                    if(kupiona[liczbaoczek] == 0 && czyja[liczbaoczek] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek] == 1){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek] != 0 && czyja[liczbaoczek] != 1){
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - ceny5[kaal[liczbaoczek]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny5[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny5[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny5[kaal[liczbaoczek]];
                        }
                    }
                }
                else if(liczbaoczek > 20){
                    if(kupiona[liczbaoczek] == 0 && czyja[liczbaoczek] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek] == 1){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek] != 0 && czyja[liczbaoczek] != 1){
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - ceny6[kaal[liczbaoczek]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny6[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny6[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny6[kaal[liczbaoczek]];
                        }
                    }
                }
            }
            else{
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
                if(liczbaoczek < 29){
                    if(kupiona[liczbaoczek] == 0 && czyja[liczbaoczek] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek] == 1){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek] != 0 && czyja[liczbaoczek] != 1){
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - ceny7[kaal[liczbaoczek]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny7[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny7[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny7[kaal[liczbaoczek]];
                        }   
                    }
                }
                else if(liczbaoczek > 28){
                    if(kupiona[liczbaoczek] == 0 && czyja[liczbaoczek] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek] == 1){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek] != 0 && czyja[liczbaoczek] != 1){
                        document.getElementById("ba1").innerHTML = bilans1 = bilans1 - ceny8[kaal[liczbaoczek]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny8[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny8[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny8[kaal[liczbaoczek]];
                        } 
                    }
                }
            }
            else{
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
    let rzutkostkami2 = 2;
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
            if(liczbaoczek2 != 2 && liczbaoczek2 != 5){
                if(liczbaoczek2 < 4){
                    if(kupiona[liczbaoczek2] == 0 && czyja[liczbaoczek2] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja[liczbaoczek2] == 2){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek2] != 0 && czyja[liczbaoczek2] != 2){
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - ceny1[kaal[liczbaoczek2]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek2] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny1[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny1[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny1[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                    }
                }
                else if(liczbaoczek2 > 3){
                    if(kupiona[liczbaoczek2] == 0 && czyja[liczbaoczek2] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek2] == 2){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek2] != 0 && czyja[liczbaoczek2] != 2){
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - ceny2[kaal[liczbaoczek2]]; 
                        $('#targ').html('');
                        if(czyja[liczbaoczek2] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny2[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny2[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny2[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                    }
                }
            }
            else{
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
            if(liczbaoczek2 != 13){
                if(liczbaoczek2 < 12){
                    if(kupiona[liczbaoczek2] == 0 && czyja[liczbaoczek2] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja[liczbaoczek2] == 2){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek2] != 0 && czyja[liczbaoczek2] != 2){
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - ceny3[kaal[liczbaoczek2]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek2] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny3[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny3[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny3[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                    }
                }
                else if(liczbaoczek2 > 11){
                    if(kupiona[liczbaoczek2] == 0 && czyja[liczbaoczek2] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek2] == 2){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek2] != 0 && czyja[liczbaoczek2] != 2){
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - ceny4[kaal[liczbaoczek2]]; 
                        $('#targ').html('');
                        if(czyja[liczbaoczek2] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny4[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny4[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny4[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                    }
                }
            }
            else{
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
            if(liczbaoczek2 != 18){
                if(liczbaoczek2 < 21){
                    if(kupiona[liczbaoczek2] == 0 && czyja[liczbaoczek2] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja[liczbaoczek2] == 2){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek2] != 0 && czyja[liczbaoczek2] != 2){
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - ceny5[kaal[liczbaoczek2]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek2] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny5[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny5[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny5[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                    }
                }
                else if(liczbaoczek2 > 20){
                    if(kupiona[liczbaoczek2] == 0 && czyja[liczbaoczek2] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek2] == 2){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek2] != 0 && czyja[liczbaoczek2] != 2){
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - ceny6[kaal[liczbaoczek2]]; 
                        $('#targ').html('');
                        if(czyja[liczbaoczek2] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny6[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny6[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny6[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                    }
                }
            }
            else{
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
            if(liczbaoczek2 != 27 && liczbaoczek2 != 29){
                if(liczbaoczek2 < 29){
                    if(kupiona[liczbaoczek2] == 0 && czyja[liczbaoczek2] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja[liczbaoczek2] == 2){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek2] != 0 && czyja[liczbaoczek2] != 2){
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - ceny7[kaal[liczbaoczek2]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek2] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny7[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny7[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny7[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                    }
                }
                else if(liczbaoczek2 > 29){
                    if(kupiona[liczbaoczek2] == 0 && czyja[liczbaoczek2] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek2] == 2){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek2] != 0 && czyja[liczbaoczek2] != 2){
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - ceny8[kaal[liczbaoczek2]]; 
                        $('#targ').html('');
                        if(czyja[liczbaoczek2] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny8[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny8[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek2] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny8[kaal[liczbaoczek2]];
                            $('#targ').html('');
                        }
                    }
                }
            }
            else{
                $('#targ').html('');
            }
        }
    }
    $('#ba2').toggleClass('klik');
    $('#ba3').toggleClass('klik');
    licznik = 2;
}

function tura3()
{
    let rzutkostkami3 = 2;
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
            if(liczbaoczek3 != 2 && liczbaoczek3 != 5)
            {
                if(liczbaoczek3 < 4){
                    if(kupiona[liczbaoczek3] == 0 && czyja[liczbaoczek3] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja[liczbaoczek3] == 3){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek3] != 0 && czyja[liczbaoczek3] != 3){
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - ceny1[kaal[liczbaoczek3]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek3] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny1[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny1[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny1[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                    }
                }
                else if(liczbaoczek3 > 3){
                    if(kupiona[liczbaoczek3] == 0 && czyja[liczbaoczek3] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek3] == 3){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek3] != 0 && czyja[liczbaoczek3] != 3){
                        document.getElementById("ba2").innerHTML = bilans2 = bilans2 - ceny2[kaal[liczbaoczek3]]; 
                        $('#targ').html('');
                        if(czyja[liczbaoczek3] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny2[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 2){
                            document.getElementById("ba3").innerHTML = bilans2 = bilans2 + ceny2[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny2[kaal[liczbaoczek3]];
                            $('#targ').html('');
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
                if(liczbaoczek3 < 12){
                    if(kupiona[liczbaoczek3] == 0 && czyja[liczbaoczek3] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja[liczbaoczek3] == 3){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek3] != 0 && czyja[liczbaoczek3] != 3){
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - ceny3[kaal[liczbaoczek3]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek3] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny3[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny3[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny3[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                    }
                }
                else if(liczbaoczek3 > 11){
                    if(kupiona[liczbaoczek3] == 0 && czyja[liczbaoczek3] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek3] == 3){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek3] != 0 && czyja[liczbaoczek3] != 3){
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - ceny4[kaal[liczbaoczek3]]; 
                        $('#targ').html('');
                        if(czyja[liczbaoczek3] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny4[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny4[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny4[kaal[liczbaoczek3]];
                            $('#targ').html('');
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
                if(liczbaoczek3 < 21){
                    if(kupiona[liczbaoczek3] == 0 && czyja[liczbaoczek3] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja[liczbaoczek3] == 3){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek3] != 0 && czyja[liczbaoczek3] != 3){
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - ceny5[kaal[liczbaoczek3]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek3] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny5[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny5[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny5[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                    }
                }
                else if(liczbaoczek3 > 20){
                    if(kupiona[liczbaoczek3] == 0 && czyja[liczbaoczek3] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek3] == 3){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek3] != 0 && czyja[liczbaoczek3] != 3){
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - ceny6[kaal[liczbaoczek3]]; 
                        $('#targ').html('');
                        if(czyja[liczbaoczek3] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny6[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny6[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny6[kaal[liczbaoczek3]];
                            $('#targ').html('');
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
                if(liczbaoczek3 < 29){
                    if(kupiona[liczbaoczek3] == 0 && czyja[liczbaoczek3] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja[liczbaoczek3] == 3){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek3] != 0 && czyja[liczbaoczek3] != 3){
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - ceny7[kaal[liczbaoczek3]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek3] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny7[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny7[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny7[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                    }
                }
                else if(liczbaoczek3 > 29){
                    if(kupiona[liczbaoczek3] == 0 && czyja[liczbaoczek3] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek3] == 3){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek3] != 0 && czyja[liczbaoczek3] != 3){
                        document.getElementById("ba3").innerHTML = bilans3 = bilans3 - ceny8[kaal[liczbaoczek3]]; 
                        $('#targ').html('');
                        if(czyja[liczbaoczek3] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny8[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny8[kaal[liczbaoczek3]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek3] == 4){
                            document.getElementById("ba4").innerHTML = bilans4 = bilans4 + ceny8[kaal[liczbaoczek3]];
                            $('#targ').html('');
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
    }}
    
function tura4()
{
    let rzutkostkami4 = 9;
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
                if(liczbaoczek4 < 4){
                    if(kupiona[liczbaoczek4] == 0 && czyja[liczbaoczek4] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja[liczbaoczek4] == 4){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek4] != 0 && czyja[liczbaoczek4] != 4){
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - ceny1[kaal[liczbaoczek4]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek4] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny1[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny1[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny1[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                    }
                }
                else if(liczbaoczek4 > 3){
                    if(kupiona[liczbaoczek4] == 0 && czyja[liczbaoczek4] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek4] == 4){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek4] != 0 && czyja[liczbaoczek4] != 4){
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - ceny2[kaal[liczbaoczek4]]; 
                        $('#targ').html('');
                        if(czyja[liczbaoczek4] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny2[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny2[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny2[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                    }
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
                if(liczbaoczek4 < 12){
                    if(kupiona[liczbaoczek4] == 0 && czyja[liczbaoczek4] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja[liczbaoczek4] == 4){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek4] != 0 && czyja[liczbaoczek4] != 4){
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - ceny3[kaal[liczbaoczek4]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek4] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny3[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny3[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny3[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                    }
                }
                else if(liczbaoczek4 > 11){
                    if(kupiona[liczbaoczek4] == 0 && czyja[liczbaoczek4] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek4] == 4){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek4] != 0 && czyja[liczbaoczek4] != 4){
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - ceny4[kaal[liczbaoczek4]]; 
                        $('#targ').html('');
                        if(czyja[liczbaoczek4] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny4[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny4[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny4[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                    }
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
                if(liczbaoczek4 < 21){
                    if(kupiona[liczbaoczek4] == 0 && czyja[liczbaoczek4] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja[liczbaoczek4] == 4){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek4] != 0 && czyja[liczbaoczek4] != 4){
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - ceny5[kaal[liczbaoczek4]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek4] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny5[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny5[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny5[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                    }
                }
                else if(liczbaoczek4 > 20){
                    if(kupiona[liczbaoczek4] == 0 && czyja[liczbaoczek4] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek4] == 4){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek4] != 0 && czyja[liczbaoczek4] != 4){
                        document.getElementById("ba3").innerHTML = bilans4 = bilans4 - ceny6[kaal[liczbaoczek4]]; 
                        $('#targ').html('');
                        if(czyja[liczbaoczek4] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny6[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny6[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny6[kaal[liczbaoczek4]];
                            $('#targ').html('');
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
                if(liczbaoczek4 < 29){
                    if(kupiona[liczbaoczek4] == 0 && czyja[liczbaoczek4] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    else if(czyja[liczbaoczek4] == 4){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek4] != 0 && czyja[liczbaoczek4] != 4){
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - ceny1[kaal[liczbaoczek4]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek4] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny1[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny1[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny1[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                    }
                }
                else if(liczbaoczek4 > 29){
                    if(kupiona[liczbaoczek4] == 0 && czyja[liczbaoczek4] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek4] == 4){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek4] != 0 && czyja[liczbaoczek4] != 4){
                        document.getElementById("ba4").innerHTML = bilans4 = bilans4 - ceny8[kaal[liczbaoczek4]]; 
                        if(czyja[liczbaoczek4] == 1){
                            document.getElementById("ba1").innerHTML = bilans1 = bilans1 + ceny8[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 2){
                            document.getElementById("ba2").innerHTML = bilans2 = bilans2 + ceny8[kaal[liczbaoczek4]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek4] == 3){
                            document.getElementById("ba3").innerHTML = bilans3 = bilans3 + ceny8[kaal[liczbaoczek4]];
                            $('#targ').html('');
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
    }}
document.getElementById("ba1").innerHTML = bilans1; document.getElementById("ba2").innerHTML = bilans2;
document.getElementById("ba3").innerHTML = bilans3; document.getElementById("ba4").innerHTML = bilans4;


                                
                            
                               
                        
               
