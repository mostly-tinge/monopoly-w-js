var bilans = ['', 372000, 372000, 372000, 372000];

var balans1 = document.getElementById("ba1"); var balans2 = document.getElementById("ba2"); var balans3 = document.getElementById("ba3");
var balans4 = document.getElementById("ba4");

var licznik = 1;

var odkrywki = 
[0, -1000, 2000, -3000, 4000, -5000, 6000, -7000, 8000, -9000, 10000, -11000, 12000, -13000, 14000, -15000, 16000,-17000, 18000,
20000, -21000, 22000, -23000, 24000, -25000, 26000, -27000, 28000, -29000, 30000, -31000, 32000];

var nagrody = [25000, 10000, 10000, 25000, 10000, 10000, 25000, 50000, 50000, 50000];

var wydaneszanse = 1; if(wydaneszanse == 10){wydaneszanse = 0; alert("szanse zostały zresetowane");}

var tekstyszansy1 = ["przeprowadzasz świetną transakcję biznesową! od wszystkich pozostałych graczy odtrzymujesz", 
"Właśnie obchodzisz urodziny! od wszystkich pozostałych graczy otrzymujesz"];

var szansy1 = ['', 10000, 30000, 50000];

var tekstyszansy2 = ["Wyścig na prywatnym torze! aby wygrać 100k, wyrzuć", "Rozbij kasyno! aby wygrać 100k, wyrzuć", 
"Weź udział w wyścigu motorówek! aby wygrać 50k wyrzuć", "Załóż własną firmę! aby zarobić 150k wyrzuć", "Zainwestuj w giełdę! aby zarobić 100k wyrzuć",
"Weź udział w wyścigu balonów! aby wygrać 150k wyrzuć"];

var tekstyszansy3 = ["Zabierz przyjaciół w luksusową podróż! płacisz wszystkim pozostałym graczom", 
"Zabierz przyjaciół na wystawny obiad! płacisz wszystkim pozostałym graczom"];

var szansy3 = ['', 5000, 15000, 25000];

var tekstyszansy4 = ["Idziesz prosto do więzienia, nie przechodzisz przez start ani nie pobierasz premii", 
"Zaproszenie na ważną imprezę! zapłać 40k wybranemu graczowi za towarzystwo.", "Wysoko postawieni przyjaciele! zapłać 50k wybranemu graczowi za udział w jego premierze filmowej.",
"przepuściłeś sporą kwotę w szale wydawania pieniędzy! obniż status swojego pionka."];

var wydanenagrody = 0; if(wydanenagrody == 10){wydanenagrody = 0; alert("nagrody zostały zresetowane");}

var tekstynagrody = ["Wynajmij swój prywatny odrzutowiec", 'Zdobywasz tytuł "Biznesowy bohater dekady"!', "Wynajmij swój skuter wodny",
"Twój koń zajął pierwsze miejsce w wyścigu", "Zarabiasz na swoich oszczędnościach z zagranicznych kont.", "Twój szofer podwozi cię o 5 pól",
"Otrzymujesz odsetki od swoich milionów", "Sprzedaj swój sportowy samochód", "Sprzedaj jeden ze swoich wakacyjnych domów", 
'Zdobyłeś tytuł "milionera roku"'];

odkrywki = odkrywki.sort(() => Math.random() - 0.5); nagrody = nagrody.sort(() => Math.random() - 0.5);

var liczbaoczek = ['', 0, 0, 0, 0]; var poziom = ['', 1, 1, 1, 1]; var pionek = ['', "a", "b", "c", "d"];

$('#a0').css('opacity', '1'); $('#b0').css('opacity', '1'); $('#c0').css('opacity', '1'); $('#e0').css('opacity', '1');

var targ = document.getElementById("targ");

var kaal = [0,0,0,0,0,0,0,0,0,/*8*/0,0,0,0,0,0,0,0,/*16*/0,0,0,0,0,0,0,0,/*24*/0,0,0,0,0,0,0,/*31*/];

var czyja = [0,0,0,0,0,0,0,0,0,/*8*/0,0,0,0,0,0,0,0,/*16*/0,0,0,0,0,0,0,0,/*24*/0,0,0,0,0,0,0,/*31*/];

var kupiona = [0,0,0,0,0,0,0,0,0,/*8*/0,0,0,0,0,0,0,0,/*16*/0,0,0,0,0,0,0,0,/*24*/0,0,0,0,0,0,0,/*31*/];

function jessie()
{
    $('#dom'+liczbaoczek[licznik]+'-0').css('opacity', '0'); $('#dom'+liczbaoczek[licznik]+'-2').css('opacity', '0');
    $('#dom'+liczbaoczek[licznik]+'-1').css('opacity', '0'); $('#dom'+liczbaoczek[licznik]+'-3').css('opacity', '0');
    $('#h'+liczbaoczek[licznik]).css('opacity', '1');
    if(kaal[liczbaoczek[licznik]] == 4){
        $('#ba'+licznik).html(bilans[licznik] = bilans[licznik] - cenydomow[liczbaoczek[licznik]]);
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
    if(kaal[liczbaoczek[licznik]] == 4){
        $('#targ').html('<span id="nienazwa" style="cursor:pointer;" onclick="jessie()">Czy chcesz kupić hotel?</span>');
    }
    if(kaal[liczbaoczek[licznik]] > 5){
        $('#targ').html('');
    }
}

const cenydzialek = [0, 5000, 0, 5000, 11000, 0, 15000, 20000, 0, 35000, 35000, 40000, 55000, 0, 55000, 60000, 0, 80000, 0, 80000, 90000, 
115000, 115000, 120000, 0, 145000, 145000, 0, 150000, 0, 170000, 200000];

var kolorydzialek = ['', 'darkred', 'chartreuse', 'fuchsia', 'navy']

function gus() 
{
    $('#ba'+licznik).html(bilans[licznik] = bilans[licznik] - cenydzialek[liczbaoczek[licznik]])
    $('#d'+liczbaoczek[licznik]).css('color', kolorydzialek[licznik]);
    czyja[liczbaoczek[licznik]] = 1;
    kupiona[liczbaoczek[licznik]] = licznik;
    if(kupiona[liczbaoczek[licznik]] = licznik){
        $('#targ').html('<span id="nazwa" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
    }
}

var kosc = document.getElementById("kosc");

balans1.addEventListener("click", function() {tura(); }); balans2.addEventListener("click", function() {tura(); });
balans3.addEventListener("click", function() {tura(); }); balans4.addEventListener("click", function() {tura(); });
kosc.addEventListener("click", function() {bozo(); }); $('#kosc').toggleClass('klik'); $('#kosc').html('klik');

const ceny1 = [7000, 15000, 30000, 50000, 60000, 80000]; const ceny2 = [15000, 30000, 50000, 80000, 95000, 125000];
const ceny3 = [20000, 50000, 90000, 140000, 165000, 215000]; const ceny4 = [25000, 65000, 110000, 170000, 200000, 270000];
const ceny5 = [35000, 90000, 150000, 230000, 270000, 350000]; const ceny6 = [40000, 100000, 170000, 260000, 305000, 395000];
const ceny7 = [50000, 125000, 210000, 320000, 375000, 485000]; const ceny8 = [65000, 160000, 250000, 370000, 430000, 550000];

var czywwiezieniu = ['',false, false, false, false]; var przejscie = ['', false, false, false, false];
Math.floor(Math.random()* 10 + 2)
$('.p1').toggleClass('normalny1'); $('.p2').toggleClass('normalny2'); $('.p3').toggleClass('normalny3'); $('.p4').toggleClass('normalny4');  $('#ba1').toggleClass('klik'); 

function bozo()
{
    licznik++;
    if(licznik == 1)
    {
        $('#ba4').toggleClass('klik'); 
        $('#ba1').toggleClass('klik');
    }
    else if(licznik == 2)
    {
        $('#ba1').toggleClass('klik'); 
        $('#ba2').toggleClass('klik'); 
    }
    else if(licznik == 3)
    {
        $('#ba2').toggleClass('klik'); 
        $('#ba3').toggleClass('klik'); 
    }
    else if(licznik == 4)
    {
        $('#ba3').toggleClass('klik'); 
        $('#ba4').toggleClass('klik'); 
    }
}

if(licznik == 5) {licznik == 1}; if(licznik == 6) {licznik == 2}; if(licznik == 7) {licznik == 3};

function tura()
{
    if(licznik == 4){licznik = 1;}
    let rzutkostkami = 5;
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
        $('.p'+licznik).toggleClass('normalny'+licznik);
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
    let opacityValue = $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity');
    if(opacityValue == 1){
        if(liczbaoczek[licznik] == 8){
            $('#targ').html('');           
        }
        if(liczbaoczek[licznik] == 16){
            $('#targ').html('');
        }
        let hamza = $('#od'+liczbaoczek[licznik]).css('opacity');
        if(liczbaoczek[licznik] < 8)
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
                        document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] - ceny1[kaal[liczbaoczek[licznik]]];
                        
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny1[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
                else if(liczbaoczek[licznik] > 3){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] - ceny2[kaal[liczbaoczek[licznik]]];
                        
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny2[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
            }
            else if(liczbaoczek[licznik] == 2){
                let losuj2 = Math.floor(Math.random()* 10); 
                document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] + nagrody[wydanenagrody] * poziom[licznik];
                alert(tekstynagrody[losuj2]+' pobierz: '+nagrody[wydanenagrody]* poziom[licznik]);
                wydanenagrody++;
                $('#targ').html('');
            }
            else if(liczbaoczek[licznik] == 5){
                $('#targ').html('');
                let los = Math.floor(Math.random() * 4);
                let l = licznik + 1; let i = licznik + 2; let c = licznik + 3;
                if(los == 0){
                    document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] + szansy1[poziom[1]] + szansy1[poziom[2]] + szansy1[poziom[3]] + szansy1[poziom[4]] - szansy1[poziom[licznik]];
                    document.getElementById("ba"+l).innerHTML = bilans[l] = bilans[l] - szansy1[poziom[l]];                   
                    document.getElementById("ba"+i).innerHTML = bilans[i] = bilans[i] - szansy1[poziom[i]];                   
                    document.getElementById("ba"+c).innerHTML = bilans[c] = bilans[c] - szansy1[poziom[c]];
                    alert(tekstyszansy1[Math.floor(Math.random())]+szansy1[wydaneszanse]* poziom[licznik]);                                     
                }
                else if(los == 1){
                    document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] - szansy3[poziom[licznik]] * 3;
                    document.getElementById("ba"+l).innerHTML = bilans[l] = bilans[l] + szansy3[poziom[l]];                   
                    document.getElementById("ba"+i).innerHTML = bilans[i] = bilans[i] + szansy3[poziom[i]];                   
                    document.getElementById("ba"+c).innerHTML = bilans[c] = bilans[c] + szansy3[poziom[c]];
                    alert(tekstyszansy3[Math.floor(Math.random())]+szansy3[wydaneszanse]* poziom[licznik]);
                }
                else if(los == 2)
                {
                    alert(tekstyszansy2[Math.floor(Math.random() * 6)]);
                    function rzut()
                    {
                        let wynik = Math.floor(Math.random() * 10 + 2);
                        $('#targ').html(wynik);
                        if(poziom[licznik] == 1)
                        {
                            
                        }
                    }
                    $('#targ').html('<span id="xD" style="cursor:pointer;" onclick="rzut()">*tekst zastępczy*</span>');

                }
                else if(los == 3)
                {
                    alert(tekstyszansy4[Math.floor(Math.random() * 4)]);
                }
            }
        }
        else if(liczbaoczek[licznik] > 8 && liczbaoczek[licznik] < 16)
        {
            if(hamza != 0.99 && liczbaoczek[licznik] != 13)
            {
                document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] + odkrywki[liczbaoczek[licznik]];
            }
            $('#od'+liczbaoczek[licznik]).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek[licznik]).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek[licznik]).css('opacity', '0.99');
            if(liczbaoczek[licznik] != 13){
                if(liczbaoczek[licznik] < 12){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] - ceny3[kaal[liczbaoczek[licznik]]];
                        
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny3[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
            }
                else if(liczbaoczek[licznik] > 11){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] - ceny4[kaal[liczbaoczek[licznik]]];
                        
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny4[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
            }
            else if(liczbaoczek[licznik] == 13){
                let losuj = Math.floor(Math.random()* 10); 
                document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] + nagrody[wydanenagrody] * poziom;
                alert(tekstynagrody[losuj]+' pobierz: '+nagrody[wydanenagrody]* poziom);
                wydanenagrody++;
                $('#targ').html('');
            }
        }
        else if(liczbaoczek[licznik] > 16 && liczbaoczek[licznik] < 24)
        {
            if(hamza != 0.99 && liczbaoczek[licznik] != 18)
            {
                document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek[licznik]).css('background-color', 'red');
            $('#od'+liczbaoczek[licznik]).css('border-color', 'red');
            $('#od'+liczbaoczek[licznik]).css('opacity', '0.99');
            if(liczbaoczek[licznik] != 18)
            {
                if(liczbaoczek[licznik] < 21){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] - ceny5[kaal[liczbaoczek[licznik]]];
                        
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny5[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
                else if(liczbaoczek[licznik] > 20){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] - ceny6[kaal[liczbaoczek[licznik]]];
                        
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny6[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
            }
            else{
                $('#targ').html('');
            }
        }
        else if(liczbaoczek[licznik] > 24)
        { 
            if(hamza != 0.99 && liczbaoczek[licznik] != 27 && liczbaoczek[licznik] != 29)
            {
                document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] + odkrywki[liczbaoczek];
            }
            $('#od'+liczbaoczek[licznik]).css('background-color', 'darkkhaki');
            $('#od'+liczbaoczek[licznik]).css('border-color', 'darkkhaki');
            $('#od'+liczbaoczek[licznik]).css('opacity', '0.99');
            if(liczbaoczek[licznik] != 27 && liczbaoczek[licznik] != 29)
            {
                if(liczbaoczek[licznik] < 29){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] - ceny7[kaal[liczbaoczek[licznik]]];
                        
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny7[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
                else if(liczbaoczek[licznik] > 28){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('<span id="nazwap" style="cursor:pointer;" onclick="gus()">Czy chcesz kupić tą działke?</span>');
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('<span id="nazwad" style="cursor:pointer;" onclick="walter()">Czy chcesz kupić domek?</span>');
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] - ceny4[kaal[liczbaoczek[licznik]]];
                        
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny4[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
            }
            else if(liczbaoczek[licznik] == 27){
                let losujr = Math.floor(Math.random()* 10); 
                document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] + nagrody[wydanenagrody] * poziom;
                alert(tekstynagrody[losujr]+' pobierz: '+nagrody[wydanenagrody]* poziom);
                wydanenagrody++;
                $('#targ').html('');
            }
            
        }
    if(czywwiezieniu[licznik] == 0){
        $('#ba'+licznik+ 1).toggleClass('klik');
    }
    else if(czywwiezieniu[licznik] < 4){ 
        $('#ba3').toggleClass('klik');
        czywwiezieniu[licznik]++;
    }
    else{
        $('#ba'+licznik).toggleClass('klik');
        czywwiezieniu[licznik] = 0;
    }
}
document.getElementById("ba1").innerHTML = bilans[1]; document.getElementById("ba2").innerHTML = bilans[2];
document.getElementById("ba3").innerHTML = bilans[3]; document.getElementById("ba4").innerHTML = bilans[4];
