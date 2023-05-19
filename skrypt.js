var bilans = [372000, 372000, 372000, 372000];

var balans1 = document.getElementById("ba1"); var balans2 = document.getElementById("ba2"); var balans3 = document.getElementById("ba3");
var balans4 = document.getElementById("ba4");

var licznik = 0;

var odkrywki = 
[0, -1000, 2000, -3000, 4000, -5000, 6000, -7000, 8000, -9000, 10000, -11000, 12000, -13000, 14000, -15000, 16000,-17000, 18000,
20000, -21000, 22000, -23000, 24000, -25000, 26000, -27000, 28000, -29000, 30000, -31000, 32000];

var nagrody = [25000, 10000, 10000, 25000, 10000, 10000, 25000, 50000, 50000, 50000];

var wydanenagrody = 0; if(wydanenagrody == 10){wydanenagrody = 0; alert("nagrody zostały zresetowane");}

var tekstynagrody = ["Wynajmij swój prywatny odrzutowiec", 'Zdobywasz tytuł "Biznesowy bohater dekady"!', "Wynajmij swój skuter wodny",
"Twój koń zajął pierwsze miejsce w wyścigu", "Zarabiasz na swoich oszczędnościach z zagranicznych kont.", "Twój szofer podwozi cię o 5 pól",
"Otrzymujesz odsetki od swoich milionów", "Sprzedaj swój sportowy samochód", "Sprzedaj jeden ze swoich wakacyjnych domów", 
'Zdobyłeś tytuł "milionera roku"'];

odkrywki = odkrywki.sort(() => Math.random() - 0.5); nagrody = nagrody.sort(() => Math.random() - 0.5);

var liczbaoczek = [0, 0, 0, 0]; var poziom = [1, 1, 1, 1]; var pionek = ["a", "b", "c", "d"];

$('#a0').css('opacity', '1'); $('#b0').css('opacity', '1'); $('#c0').css('opacity', '1'); $('#e0').css('opacity', '1');

var targ = document.getElementById("targ");

var kaal = 
[0,1,0,1,1,0,1,1,0,/*8*/
1,1,1,1,0,1,1,0,/*16*/
1,0,1,1,1,1,1,0,/*24*/
1,1,0,1,0,1,1,/*31*/
];

var czyja = 
[0,0,0,0,0,0,0,0,0,/*8*/
0,0,0,0,0,0,0,0,/*16*/
0,0,0,0,0,0,0,0,/*24*/
0,0,0,0,0,0,0,/*31*/
];
var kupiona = 
[0,0,0,0,0,0,0,0,0,/*8*/
0,0,0,0,0,0,0,0,/*16*/
0,0,0,0,0,0,0,0,/*24*/
0,0,0,0,0,0,0,/*31*/
];

function jessie()
{
    $('#dom'+liczbaoczek[licznik]+'-1').css('opacity', '0'); $('#dom'+liczbaoczek[licznik]+'-2').css('opacity', '0');
    $('#dom'+liczbaoczek[licznik]+'-3').css('opacity', '0'); $('#dom'+liczbaoczek[licznik]+'-4').css('opacity', '0');
    $('#h'+liczbaoczek[licznik]).css('opacity', '1');
    if(kaal[liczbaoczek[licznik]] == 5){
        $('#ba1').html(bilans[licznik] = bilans[licznik] - cenydomow[liczbaoczek[licznik]]);
        kaal[liczbaoczek[licznik]]++;
    }
    $('#targ').html('');
}

const cenydomow = [0, 10000, 0, 10000, 15000, 0, 15000, 15000, 0, 25000, 25000, 25000, 30000, 0, 30000, 30000, 0, 40000, 0, 40000, 40000, 
45000, 45000, 45000, 0, 50000, 50000, 0, 50000, 0, 60000, 60000];

function walter()
{
    $('#ba'+licznik).html(bilans[licznik] = bilans[licznik] - cenydomow[liczbaoczek[licznik]])
    $('#dom'+liczbaoczek[licznik]+'-'+kaal[liczbaoczek[licznik]]).css('opacity', '1');
    kaal[liczbaoczek[licznik]]++;
    if(kaal[liczbaoczek[licznik]] == 5){
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
    if(kaal[liczbaoczek[licznik]] > 6){
        $('#targ').html('');
    }
}

const cenydzialek = [0, 5000, 0, 5000, 11000, 0, 15000, 20000, 0, 35000, 35000, 40000, 55000, 0, 55000, 60000, 0, 80000, 0, 80000, 90000, 
115000, 115000, 120000, 0, 145000, 145000, 0, 150000, 0, 170000, 200000];

function gus() 
{
    $('#ba1').html(bilans[licznik] = bilans[licznik] - cenydzialek[liczbaoczek[licznik]])
    $('#d'+liczbaoczek[licznik]).css('color', 'darkred');
    czyja[liczbaoczek[licznik]] = 1;
    kupiona[liczbaoczek[licznik]] = 1;
    if(kupiona[liczbaoczek[licznik]]= 1){
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
    }
} 

$('#ba1').addClass('klik'); 

balans1.addEventListener("click", function() {tura1(); }); balans2.addEventListener("click", function() {tura2(); });
balans3.addEventListener("click", function() {tura3(); }); balans4.addEventListener("click", function() {tura4(); });

const ceny1 = [0, 7000, 15000, 30000, 50000, 60000, 80000]; const ceny2 = [0, 15000, 30000, 50000, 80000, 95000, 125000];
const ceny3 = [0, 20000, 50000, 90000, 140000, 165000, 215000]; const ceny4 = [0, 25000, 65000, 110000, 170000, 200000, 270000];
const ceny5 = [0, 35000, 90000, 150000, 230000, 270000, 350000]; const ceny6 = [0, 40000, 100000, 170000, 260000, 305000, 395000];
const ceny7 = [0, 50000, 125000, 210000, 320000, 375000, 485000]; const ceny8 = [0, 65000, 160000, 250000, 370000, 430000, 550000];

var czywwiezieniu1 = [false, false, false, false]; var przejscie = [false, false, false, false];

$('.p1').toggleClass('normalny'); Math.floor(Math.random()* 10 + 2);
function tura()
{
    let rzutkostkami = 24;
    $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '0');
    document.getElementById("kosc").innerHTML = liczbaoczek[licznik] = liczbaoczek[licznik] + rzutkostkami;
    if(liczbaoczek[licznik] == 32){
        $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '1');
        liczbaoczek[licznik] = 0;
        $('#targ').html('');
        document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] - odkrywki[liczbaoczek[licznik]];
    }
    if(poziom[licznik] == 3 && liczbaoczek[licznik] > 31){
        liczbaoczek[licznik] = liczbaoczek[licznik] - 32;
        document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] + 250000;
    }
    if(poziom[licznik] == 2 && przejscie[licznik] == true && liczbaoczek[licznik] > 31){
        $('.p'+licznik).toggleClass('srebrny');
        $('.p'+licznik).toggleClass('zloty');
        poziom[licznik] = 3;
        liczbaoczek[licznik] = liczbaoczek[licznik] - 32;
    }
    if(liczbaoczek[licznik] > 31 && przejscie[licznik] == false){
        liczbaoczek[licznik] = liczbaoczek[licznik] - 32;
        poziom[licznik] = 2;
        $('.p'+licznik).toggleClass('srebrny');
        $('.p'+licznik).toggleClass('normalny');
        przejscie[licznik] = true;
    }
    $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '1');
    if(liczbaoczek[licznik] == 24){
        $('#targ').html('');
        $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '0');
        liczbaoczek[licznik] = 8;
        $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '1');
        czywwiezieniu[licznik] = 1;
        document.getElementById("kosc").innerHTML = liczbaoczek[licznik];
    }
    let opacityValue = $('#'+pionek[licznik]+liczbaoczek[liczbaoczek2]).css('opacity');
    if(opacityValue == 1){
        if(liczbaoczek[licznik] == 8){
            $('#targ').html('');           
        }
        if(liczbaoczek[licznik] == 16){
            $('#targ').html('');
        }
        let hamza = $('#od'+liczbaoczek[licznik]).css('opacity');
        if(liczbaoczek < 8)
        {
            if(hamza != 0.99 && liczbaoczek[licznik] != 2 && liczbaoczek[licznik] != 5)
            {
                document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] + odkrywki[liczbaoczek[licznik]];
            }
            $('#od'+liczbaoczek[licznik]).css('background-color', 'red');
            $('#od'+liczbaoczek[licznik]).css('border-color', 'red');
            $('#od'+liczbaoczek[licznik]).css('opacity', '0.99');
            if(liczbaoczek[licznik] != 2 && liczbaoczek[licznik] != 5){
                if(liczbaoczek[licznik] < 4){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[liczbaoczek] - ceny1[kaal[liczbaoczek[licznik]]];
                        
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[1] = bilans[1] + ceny1[kaal[liczbaoczek]];
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
                        document.getElementById("ba1").innerHTML = bilans[0] = bilans[0] - ceny2[kaal[liczbaoczek]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek] == 2){
                            document.getElementById("ba2").innerHTML = bilans[1] = bilans[1] + ceny2[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 3){
                            document.getElementById("ba3").innerHTML = bilans[2] = bilans[2] + ceny2[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 4){
                            document.getElementById("ba4").innerHTML = bilans[3] = bilans[3] + ceny2[kaal[liczbaoczek]];
                        }
                    }
                }
            }
            else if(liczbaoczek == 2){
                let losuj2 = Math.floor(Math.random()* 10); 
                document.getElementById("ba1").innerHTML = bilans[0] = bilans[0] + nagrody[wydanenagrody] * poziom;
                alert(tekstynagrody[losuj2]+' pobierz: '+nagrody[wydanenagrody]* poziom);
                wydanenagrody++;
                $('#targ').html('');
            }
        }
        else if(liczbaoczek > 8 && liczbaoczek < 16)
        {
            if(hamza != 0.99 && liczbaoczek != 13)
            {
                document.getElementById("ba1").innerHTML = bilans[0] = bilans[0] + odkrywki[liczbaoczek];
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
                        document.getElementById("ba1").innerHTML = bilans[0] = bilans[0] - ceny3[kaal[liczbaoczek]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek] == 2){
                            document.getElementById("ba2").innerHTML = bilans[1] = bilans[1] + ceny3[kaal[liczbaoczek]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek] == 3){
                            document.getElementById("ba3").innerHTML = bilans[2] = bilans[2] + ceny3[kaal[liczbaoczek]];
                            $('#targ').html('');
                        }
                        else if(czyja[liczbaoczek] == 4){
                            document.getElementById("ba4").innerHTML = bilans[3] = bilans[3] + ceny3[kaal[liczbaoczek]];
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
                        document.getElementById("ba1").innerHTML = bilans[0] = bilans[0] - ceny4[kaal[liczbaoczek]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek] == 2){
                            document.getElementById("ba2").innerHTML = bilans[1] = bilans[1] + ceny4[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 3){
                            document.getElementById("ba3").innerHTML = bilans[2] = bilans[2] + ceny4[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 4){
                            document.getElementById("ba4").innerHTML = bilans[3] = bilans[3] + ceny4[kaal[liczbaoczek]];
                        }  
                    }
                }
            }
            else if(liczbaoczek == 13){
                let losuj = Math.floor(Math.random()* 10); 
                document.getElementById("ba1").innerHTML = bilans[0] = bilans[0] + nagrody[wydanenagrody] * poziom;
                alert(tekstynagrody[losuj]+' pobierz: '+nagrody[wydanenagrody]* poziom);
                wydanenagrody++;
                $('#targ').html('');
            }
        }
        else if(liczbaoczek > 16 && liczbaoczek < 24)
        {
            if(hamza != 0.99 && liczbaoczek != 18)
            {
                document.getElementById("ba1").innerHTML = bilans[0] = bilans[0] + odkrywki[liczbaoczek];
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
                        document.getElementById("ba1").innerHTML = bilans[0] = bilans[0] - ceny5[kaal[liczbaoczek]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek] == 2){
                            document.getElementById("ba2").innerHTML = bilans[1] = bilans[1] + ceny5[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 3){
                            document.getElementById("ba3").innerHTML = bilans[2] = bilans[2] + ceny5[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 4){
                            document.getElementById("ba4").innerHTML = bilans[3] = bilans[3] + ceny5[kaal[liczbaoczek]];
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
                        document.getElementById("ba1").innerHTML = bilans[0] = bilans[0] - ceny6[kaal[liczbaoczek]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek] == 2){
                            document.getElementById("ba2").innerHTML = bilans[1] = bilans[1] + ceny6[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 3){
                            document.getElementById("ba3").innerHTML = bilans[2] = bilans[2] + ceny6[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 4){
                            document.getElementById("ba4").innerHTML = bilans[3] = bilans[3] + ceny6[kaal[liczbaoczek]];
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
                document.getElementById("ba1").innerHTML = bilans[0] = bilans[0] + odkrywki[liczbaoczek];
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
                        document.getElementById("ba1").innerHTML = bilans[0] = bilans[0] - ceny7[kaal[liczbaoczek]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek] == 2){
                            document.getElementById("ba2").innerHTML = bilans[1] = bilans[1] + ceny7[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 3){
                            document.getElementById("ba3").innerHTML = bilans[2] = bilans[2] + ceny7[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 4){
                            document.getElementById("ba4").innerHTML = bilans[3] = bilans[3] + ceny7[kaal[liczbaoczek]];
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
                        document.getElementById("ba1").innerHTML = bilans[0] = bilans[0] - ceny8[kaal[liczbaoczek]];
                        $('#targ').html('');
                        if(czyja[liczbaoczek] == 2){
                            document.getElementById("ba2").innerHTML = bilans[1] = bilans[1] + ceny8[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 3){
                            document.getElementById("ba3").innerHTML = bilans[2] = bilans[2] + ceny8[kaal[liczbaoczek]];
                        }
                        else if(czyja[liczbaoczek] == 4){
                            document.getElementById("ba4").innerHTML = bilans[3] = bilans[3] + ceny8[kaal[liczbaoczek]];
                        } 
                    }
                }
            }
            else if(liczbaoczek == 27){
                let losujr = Math.floor(Math.random()* 10); 
                document.getElementById("ba1").innerHTML = bilans[0] = bilans[0] + nagrody[wydanenagrody] * poziom;
                alert(tekstynagrody[losujr]+' pobierz: '+nagrody[wydanenagrody]* poziom);
                wydanenagrody++;
                $('#targ').html('');
            }
            
        }
    }
    $('#ba1').toggleClass('klik');
    if(licznik == 4) {licznik = 1};

    if(czywwiezieniu2 == 0){
        $('#ba2').toggleClass('klik');
        licznik = 1;
    }
    else if(czywwiezieniu2 < 4){
        licznik = 1; 
        $('#ba3').toggleClass('klik');
        czywwiezieniu2++;
    }
    else{
        $('#ba2').toggleClass('klik');
        czywwiezieniu2 = 0;
    }

}
function tura1()
{
    
} 
$('.p2').toggleClass('normalny2');

document.getElementById("ba1").innerHTML = bilans[0]; document.getElementById("ba2").innerHTML = bilans[1];
document.getElementById("ba3").innerHTML = bilans[2]; document.getElementById("ba4").innerHTML = bilans[3];
