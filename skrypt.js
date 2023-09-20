//licznik jest po to, aby program wiedział czyja jest tura
alert("Żeby ruszyć pionkami treba kliknąć balans danego pionka.");
alert("A no i jeżeli chcesz przejść do następnego musisz kliknąć pole pokazujące oczka(nie pytaj czemu ono istnieje ani czemu jest na nim napisane klik)");
let bilans = ['', 372000, 372000, 372000, 372000];

const balans1 = document.querySelector("#ba1"); const balans2 = document.querySelector("#ba2"); const balans3 = document.querySelector("#ba3");
const balans4 = document.querySelector("#ba4"); const ceny = document.querySelectorAll(".cena"); const podtr = document.querySelector("#podtran");
let balansPlusLicznik = doucment.querySelector("#ba"+licznik);
let licznik = 1; let wiekszaszansa = false; let czymoznakupic = true; let czynsz = ['', 0, 0, 0, 0];

let nagrody = [25000, 10000, 10000, 25000, 10000, 10000, 25000, 50000, 50000, 50000]; let transakcje = ['', 0, 0, 0, 0]

let wydaneszanse = 1; if(wydaneszanse == 10){wydaneszanse = 0; alert("szanse zostały zresetowane");}

let tekstyszansy1 = ["przeprowadzasz świetną transakcję biznesową! od wszystkich pozostałych graczy odtrzymujesz", 
"Właśnie obchodzisz urodziny! od wszystkich pozostałych graczy otrzymujesz"];

let szansy1 = ['', 10000, 30000, 50000];

let tekstyszansy2 = ["Weź udział w wyścigu motorówek! aby wygrać 50k wyrzuć","Wyścig na prywatnym torze! aby wygrać 100k, wyrzuć", 
"Rozbij kasyno! aby wygrać 100k, wyrzuć", "Zainwestuj w giełdę! aby zarobić 100k wyrzuć", "Załóż własną firmę! aby zarobić 150k wyrzuć",
"Weź udział w wyścigu balonów! aby wygrać 150k wyrzuć"];

let tekstyszansy3 = ["Zabierz przyjaciół w luksusową podróż! płacisz wszystkim pozostałym graczom",
"Zabierz przyjaciół na wystawny obiad! płacisz wszystkim pozostałym graczom"];

let szansy3 = ['', 5000, 15000, 25000];

let tekstyszansy4 = ["Idziesz prosto do więzienia, nie przechodzisz przez start ani nie pobierasz premii", 
"Zaproszenie na ważną imprezę! zapłać 40k wybranemu graczowi za towarzystwo.", "Wysoko postawieni przyjaciele! zapłać 50k wybranemu graczowi za udział w jego premierze filmowej.",
"przepuściłeś sporą kwotę w szale wydawania pieniędzy! obniż status swojego pionka."];

let wydanenagrody = 0; if(wydanenagrody == 10){wydanenagrody = 0; alert("nagrody zostały zresetowane");}

let tekstynagrody = ["Wynajmij swój prywatny odrzutowiec", 'Zdobywasz tytuł "Biznesowy bohater dekady"!', "Wynajmij swój skuter wodny",
"Twój koń zajął pierwsze miejsce w wyścigu", "Zarabiasz na swoich oszczędnościach z zagranicznych kont.", "Twój szofer podwozi cię o 5 pól",
"Otrzymujesz odsetki od swoich milionów", "Sprzedaj swój sportowy samochód", "Sprzedaj jeden ze swoich wakacyjnych domów", 
'Zdobyłeś tytuł "milionera roku"'];

let liczbaoczek = ['', 0, 0, 0, 0]; let poziom = ['', 1, 1, 1, 1]; let pionek = ['', "a", "b", "c", "e"];

$('#a0').css('opacity', '1'); $('#b0').css('opacity', '1'); $('#c0').css('opacity', '1'); $('#e0').css('opacity', '1');

let liczbadomow = ['', 0, 0, 0, 0]; let czydomjestzadarmo = false; let liczbaodmow = ['', 0, 0, 0, 0]; const targ = document.querySelector("#targ");

let kaal = [0, 0, 0, 0, 0, 0, 0, 0 ,0, /*8*/0, 0, 0, 0, 0, 0, 0, 0, /*16*/0, 0, 0, 0, 0, 0, 0, 0, /*24*/0, 0, 0, 0, 0, 0, 0,/*31*/];

let czyja = [0, 0, 0, 0, 0, 0, 0, 0, 0,/*8*/0, 0, 0, 0, 0, 0, 0, 0,/*16*/0, 0, 0, 0, 0, 0, 0, 0,/*24*/0, 0, 0, 0, 0, 0, 0,/*31*/];

let kupiona = [0, 0, 0, 0, 0, 0, 0, 0, 0,/*8*/0, 0, 0, 0, 0, 0, 0, 0,/*16*/0, 0, 0, 0, 0, 0, 0, 0,/*24*/0, 0, 0, 0 , 0, 0,/*31*/];
function jessie(){
    $('#dom'+liczbaoczek[licznik]+'-0').css('opacity', '0'); $('#dom'+liczbaoczek[licznik]+'-2').css('opacity', '0');
    $('#dom'+liczbaoczek[licznik]+'-1').css('opacity', '0'); $('#dom'+liczbaoczek[licznik]+'-3').css('opacity', '0');
    $('#h'+liczbaoczek[licznik]).css('opacity', '1');
    if(kaal[liczbaoczek[licznik]] == 4){
        kaal[liczbaoczek[licznik]]++;
        $('#ba'+licznik).html(bilans[licznik] = bilans[licznik] - cenydomow[liczbaoczek[licznik]]);
        targ.removeEventListener("click", jessie);
    }
    $('#targ').html('');
}

const cenydomow = [0, 10000, 0, 10000, 15000, 0, 15000, 15000, 0, 25000, 25000, 25000, 30000, 0, 30000, 30000, 0, 40000, 0, 40000, 40000, 
45000, 45000, 45000, 0, 50000, 50000, 0, 50000, 0, 60000, 60000];

function walter(){
    if(czydomjestzadarmo == false){
        $('#ba'+licznik).html(bilans[licznik] = bilans[licznik] - cenydomow[liczbaoczek[licznik]]);
    }
    $('#dom'+liczbaoczek[licznik]+'-'+kaal[liczbaoczek[licznik]]).css('opacity', '1');
    kaal[liczbaoczek[licznik]]++;
    if(kaal[liczbaoczek[licznik]] == 4){
        targ.removeEventListener("click", walter); targ.addEventListener("click", jessie);
        $('#targ').html('Czy chcesz kupić hotel?');
    }
    if(kaal[liczbaoczek[licznik]] > 5){
        $('#targ').html('');
    }
    czydomjestzadarmo = false;
}

const cenydzialek = [0, 5000, 0, 5000, 11000, 0, 15000, 20000, 0, 35000, 35000, 40000, 55000, 0, 55000, 60000, 0, 80000, 0, 80000, 90000, 
115000, 115000, 120000, 0, 145000, 145000, 0, 150000, 0, 170000, 200000];

const kolorydzialek = ['', 'darkred', 'chartreuse', 'fuchsia', 'navy']

function gus(){
    $('#ba'+licznik).html(bilans[licznik] = bilans[licznik] - cenydzialek[liczbaoczek[licznik]]);
    $('#k'+liczbaoczek[licznik]).css('color', kolorydzialek[licznik]);
    czyja[liczbaoczek[licznik]] = 1; kupiona[liczbaoczek[licznik]] = licznik; targ.removeEventListener("click", gus);
    if(kupiona[liczbaoczek[licznik]] = licznik){
        $('#targ').html('Czy chcesz kupić domek?');
        targ.addEventListener("click", walter);
    }
}

function rzut(){
    let sol = Math.floor(Math.random() * 6);
    if(sol == 0){
        alert(tekstyszansy2[sol]);
    }
    else if(sol > 0 && sol < 4){
        alert(tekstyszansy2[sol]);
    }
    else{
        alert(tekstyszansy2[sol]);
    }
    let wynik = Math.floor(Math.random() * 10 + 2);
    $('#targ').html(wynik);
    if(poziom[licznik] == 1 && wynik == 2){
        alert("wygrałeś!");
        $('#targ').html(wynik);
        if(sol == 0){
            $('#ba'+licznik).html(bilans[licznik] = bilans[licznik] + 50000);
        }
        else if(sol > 0 && sol < 4){
            $('#ba'+licznik).html(bilans[licznik] = bilans[licznik] + 100000);
        }
        else{
            $('#ba'+licznik).html(bilans[licznik] = bilans[licznik] + 150000);
        } /* Chciałbym aby się nie powtarzało, ale sol musi być generowany odzielnie */
    }
    else if(poziom[licznik] == 2 && wynik > 7 && wynik < 13){
        alert("wygrałeś!");
        $('#targ').html(wynik);
        if(sol == 0){
            $('#ba'+licznik).html(bilans[licznik] = bilans[licznik] + 50000);
        }
        else if(sol > 0 && sol < 4){
            $('#ba'+licznik).html(bilans[licznik] = bilans[licznik] + 100000);
        }
        else{
            $('#ba'+licznik).html(bilans[licznik] = bilans[licznik] + 150000);
        } 
    }
    else if(poziom[licznik] == 3 && wynik > 4 && wynik < 13){
        alert("wygrałeś!");
        $('#targ').html(wynik);
        if(sol == 0){
            $(balansPlusLicznik).html(bilans[licznik] = bilans[licznik] + 50000);
        }
        else if(sol > 0 && sol < 4){
            $(balansPlusLicznik).html(bilans[licznik] = bilans[licznik] + 100000);
        }
        else{
            $(balansPlusLicznik).html(bilans[licznik] = bilans[licznik] + 150000);
        } 
    }
}

const kosc = document.querySelector("#kosc"); 
for(let element of ceny){
    element.addEventListener("click", tura);
}
kosc.addEventListener("click", function() {nadajKlik(); }); $('#kosc').toggleClass('klik'); $('#kosc').html('klik');

const ceny1 = [7000, 15000, 30000, 50000, 60000, 80000]; const ceny2 = [15000, 30000, 50000, 80000, 95000, 125000];
const ceny3 = [20000, 50000, 90000, 140000, 165000, 215000]; const ceny4 = [25000, 65000, 110000, 170000, 200000, 270000];
const ceny5 = [35000, 90000, 150000, 230000, 270000, 350000]; const ceny6 = [40000, 100000, 170000, 260000, 305000, 395000];
const ceny7 = [50000, 125000, 210000, 320000, 375000, 485000]; const ceny8 = [65000, 160000, 250000, 370000, 430000, 550000];

let czywwiezieniu = ['', false, false, false, false]; let przejscie = ['', false, false, false, false];
$('.p1').toggleClass('normalny1'); $('.p2').toggleClass('normalny2'); $('.p3').toggleClass('normalny3'); $('.p4').toggleClass('normalny4');  $('#ba1').toggleClass('klik'); 

function nadajKlik(){
    licznik++;
    if(licznik == 1){
        $('#ba4').toggleClass('klik'); 
        $('#ba1').toggleClass('klik');
    }
    else if(licznik === 2){
        $('#ba1').toggleClass('klik'); 
        $('#ba2').toggleClass('klik'); 
    }
    else if(licznik === 3){
        $('#ba2').toggleClass('klik'); 
        $('#ba3').toggleClass('klik'); 
    }
    else if(licznik === 4){
        $('#ba3').toggleClass('klik'); 
        $('#ba4').toggleClass('klik'); 
    }
    else if(licznik === 5){
        $('#ba4').toggleClass('klik'); 
        $('#ba1').toggleClass('klik');
        licznik = 1;
    }
}
function gog(){
    for(let element of ceny){
        element.removeEventListener("click", gog);
    }
    balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - 40000
    if(this === ba1){
        balans1.innerHTML = bilans[1] = bilans[1] + 40000;
        if(wiekszaszansa === true){
         balans1.innerHTML = bilans[1] = bilans[1] + 10000;
         balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - 10000;
        }
    }
    else if(this === ba2){
        balans2.innerHTML = bilans[2] = bilans[2] + 40000;
        if(wiekszaszansa === true){
         balans2.innerHTML = bilans[2] = bilans[2] + 10000;
         balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - 10000;
        }
    }
    else if(this === ba3){
        balans3.innerHTML = bilans[3] = bilans[3] + 40000;
        if(wiekszaszansa === true){
         balans3.innerHTML = bilans[3] = bilans[3] + 10000;
         balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - 10000;
        }
    }
    else if(this === ba4){
        balans4.innerHTML = bilans[4] = bilans[4] + 40000;
        if(wiekszaszansa === true){
         balans4.innerHTML = bilans[4] = bilans[4] + 10000;
         balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - 10000;
        }
    }
    wiekszaszansa = false;
    for(let element of ceny){
        element.addEventListener("click", tura);
    }
}
const domy = document.querySelector("#domy");
function dom2(){
    domy.removeEventListener("click", dom);
    $('#domy').toggleClass('klik'); $('#domy').toggleClass('dom1'); $('#domy').html('');
    czydomjestzadarmo = true;
} 
function dom(){
    liczbadomow[licznik]++
    if(liczbadomow[licznik] > 0){
        $('#domy').toggleClass('dom1'); $('#domy').toggleClass('klik');
        domy.addEventListener("click", dom2); $('#domy').html('Czy chcesz wykorzystać darmowy dom?');
    }
}
function gest(){
    let s = licznik + 1; let ss = licznik + 2; let sss = licznik + 3;
    alert("Masz gest! daj każdemu z pozostałych graczy 20k");
    if(s == 5){s = 1;} if(ss == 5){ss = 1;} if(ss == 6){ss = 2;} if(sss == 5){sss = 1;} if(sss == 6){sss = 2;} if(sss == 7){sss = 3;}
    balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - 60000;
    document.getElementById("ba"+s).innerHTML = bilans[s] = bilans[s] + 20000;
    document.getElementById("ba"+ss).innerHTML = bilans[ss] = bilans[ss] + 20000;
    document.getElementById("ba"+sss).innerHTML = bilans[sss] = bilans[sss] + 20000;
}
function prezent(){
    let q = licznik + 1; let qq = licznik + 2; let qqq = licznik + 3;
    alert("Prezent ślubny! pobierz od każdego gracza 20k");
    if(q == 5){q = 1;} if(qq == 5){qq = 1;} if(qq == 6){qq = 2;} if(qqq == 5){qqq = 1;} if(qqq == 6){qqq = 2;} if(qqq == 7){qqq = 3;}
    balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] + 60000;
    document.getElementById("ba"+q).innerHTML = bilans[q] = bilans[q] - 20000;
    document.getElementById("ba"+qq).innerHTML = bilans[qq] = bilans[qq] - 20000;
    document.getElementById("ba"+qqq).innerHTML = bilans[qqq] = bilans[qqq] - 20000;
}
function udzialy(){
    alert("Wystrzałowe udziały! Pobierz 100k")
    balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] + 100000;
}
function pozew(){
    alert("pozew! Pobierz 50k od wybranego gracza")
    balans1.addEventListener("click", pozew1); balans2.addEventListener("click", pozew2);
    balans3.addEventListener("click", pozew3); balans4.addEventListener("click", pozew4);
    for(let element of ceny){
        element.removeEventListener("click", tura);
    }
}
function pozew(){
    for(let element of ceny){
        element.removeEventListener("click", pozew);
        element.addEventListener("click", tura);
    }
    balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] + 50000;
    if(this === ba1){
        balans1.innerHTML = bilans[1] = bilans[1] - 50000;
    }
    else if(this === ba2){
        balans2.innerHTML = bilans[2] = bilans[2] - 50000;
    }
    else if(this === ba3){
        balans3.innerHTML = bilans[3] = bilans[3] - 50000;
    }
    else if(this === ba4){
        balans4.innerHTML = bilans[4] = bilans[4] - 50000;
    }
}
function mieszkanie(){
    alert("Wynajmujesz swoje mieszkanie przez 3 następne kolejki pobierasz 12k");
    czynsz[licznik] = czynsz[licznik] + 3;
}
let czyznalezione = false; let kosc2 = document.querySelector("kosc").value;
function podroz(){
    czyznalezione = false;
    alert("Do przodu! Przejdź do najbliższej wolnej nieruchomości.");
    $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '0');
    let oczka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31]; 
    for(i = liczbaoczek[licznik]; i < 32; i++){
        if(czyja[i] == 0 && czyznalezione == false && i > liczbaoczek[licznik] && i != 13 && i != 8 & i != 16 && i != 24 && i != 27 && i != 29 && i != 32){
            if(liczbaoczek[licznik] > 0 && liczbaoczek[licznik] < 8){
                $('#od'+liczbaoczek[licznik]).css('background-color', 'red');
                $('#od'+liczbaoczek[licznik]).css('border-color', 'red'); 
            }
            else if(liczbaoczek[licznik] > 8 && liczbaoczek[licznik] < 16){
                $('#od'+liczbaoczek[licznik]).css('background-color', 'darkkhaki');
                $('#od'+liczbaoczek[licznik]).css('border-color', 'darkkhaki');
            }
            else if(liczbaoczek[licznik] > 16 && liczbaoczek[licznik] < 24){
                $('#od'+liczbaoczek[licznik]).css('background-color', 'red');
                $('#od'+liczbaoczek[licznik]).css('border-color', 'red');
            }
            else if(liczbaoczek[licznik] > 24 && liczbaoczek[licznik] < 32){
                $('#od'+liczbaoczek[licznik]).css('background-color', 'darkkhaki');
                $('#od'+liczbaoczek[licznik]).css('border-color', 'darkkhaki');
            }
            $('#'+pionek[licznik]+oczka[i]).css('opacity', '1'); czyznalezione = true;
            $('#kosc').html(i); liczbaoczek[licznik] = i;
            $('#od'+liczbaoczek[licznik]).css('opacity', '0.99');
        }
    }
    for(i = liczbaoczek[licznik]; i > 0; i--){
        if(czyznalezione === false && czyja[i] === 0 && i < liczbaoczek[licznik] && i != 13 && i != 8 & i != 16 && i != 24 && i != 27 && i != 29 && i != 32){
            if(liczbaoczek[licznik] > 0 && liczbaoczek[licznik] < 8){
                $('#od'+liczbaoczek[licznik]).css('background-color', 'red');
                $('#od'+liczbaoczek[licznik]).css('border-color', 'red'); 
            }
            else if(liczbaoczek[licznik] > 8 && liczbaoczek[licznik] < 16){
                $('#od'+liczbaoczek[licznik]).css('background-color', 'darkkhaki');
                $('#od'+liczbaoczek[licznik]).css('border-color', 'darkkhaki');
            }
            else if(liczbaoczek[licznik] > 16 && liczbaoczek[licznik] < 24){
                $('#od'+liczbaoczek[licznik]).css('background-color', 'red');
                $('#od'+liczbaoczek[licznik]).css('border-color', 'red');
            }
            else{
                $('#od'+liczbaoczek[licznik]).css('background-color', 'darkkhaki');
                $('#od'+liczbaoczek[licznik]).css('border-color', 'darkkhaki');
            }
            $('#'+pionek[licznik]+oczka[i]).css('opacity', '1');
            czyznalezione = true;
            $('#kosc').html(i);//document.getElementById("kosc").innerHTML = liczbaoczek[licznik] = i;
            liczbaoczek[licznik] = i;
        }
    }
}
const dzialka20 = document.querySelectorAll('dzialka2'); const dzialka3 = document.querySelectorAll('bocznadzialka2');
const dzialka = ['#d1', '#d2', '#d3', '#d4', '#d5', '#d6', '#d7', '#d8', '#d9', '#d10', '#d11', '#d12', '#d13', '#d14', '#d15', 
'#d16', '#d17', '#d18', '#d19', '#d20', '#d21', '#d22', '#d23', '#d24', '#d25', '#d26', '#d27', '#d28', '#d29', '#d30', '#d31'];
function akcja(){
    let wlasciciel = this.value;
        for(i = 0; i < 31; i++){
            $(dzialka[i]).toggleClass('klik');
        }
        for(let dz5 of dzialka3){
            dz5.removeEventListener("click", akcja);
        }
        for(let dz6 of dzialka20){
            dz6.removeEventListener("click", akcja);
        }
    $('#podtran').toggleClass('klik'); $('#podtran').toggleClass('dom1'); podtr.removeEventListener("click", ukradniecie);
    $('#podtran').html('');
    $('#k'+wlasciciel).css('color', kolorydzialek[licznik]); kupiona[wlasciciel] = licznik; czyja[wlasciciel] = 1;
}
function ukradniecie(){
    for(i = 0; i < 31; i++){
        $(dzialka[i]).toggleClass('klik');
    }
    for(let dz3 of dzialka3){
        dz3.addEventListener("click", akcja);
    }
    for(let dz4 of dzialka20){
        dz4.addEventListener("click", akcja);
    }
    for(i = 0; i < 31; i++){
        if(kupiona[i] == licznik){
            $(dzialka[i]).toggleClass('klik');
        }
    }
    czysajakiespodtrany[licznik]--;
}
let czysajakiespodtrany = ['', 0, 0, 0, 0];
function podtran(){
    alert("Podstępna transakcja! Wykradnij nieruchomość od wybranego gracza");
    $('#podtran').toggleClass('klik'); $('#podtran').toggleClass('dom1');
    podtr.addEventListener("click", ukradniecie)
    $('#podtran').html('Czy chcesz ukraść komuś działkę?');
    czysajakiespodtrany[licznik] = czysajakiespodtrany[licznik] + 1;
}
function zlyrating(){
    alert("Zły rating kredytowy! Nie możesz kupić tej działki");
    czymoznakupic = false;
}
let czysajakiesprzymtrany = ['', 0, 0, 0, 0]; const przytr = document.querySelector("przymtran");
function przymtran(){
    alert("Przymusowa transakcja! Zamień nieruchomość z wybranym graczem");
    $('#przymtran').toggleClass('klik'); $('#przymtran').toggleClass('dom1');
    przytr.addEventListener("click", wybranie);
    $('#przymtran').html('Czy chcesz zamienić z kimś działkę?');
    czysajakiesprzymtrany[licznik] = czysajakiesprzymtrany[licznik] + 1;
}
function wybranie(){
    alert("najpierw wybierz cudzą działkę, a potem kliknij bilans gracza do, którego należała i wtedy wybierz działkę, którą dajesz w zamian")
    for(let dz5 of dzialka3){
        dz5.addEventListener("click", wybraniecudzego); 
    }
    for(let dz6 of dzialka20){
        dz6.addEventListener("click", wybraniecudzego); 
    }
    for(i = 0; i < 31; i++){
        $(dzialka[i]).toggleClass('klik');
    }
}
function wybranieswojego(){
    let dozamiany = this.value; $('#k'+dozamiany).css("color", kolorydzialek[komuprzekazacdzialke]); alert("jd"); 
    kupiona[dozamiany] = licznik; czyja[dozamiany] = 1;
    $('#przymtran').toggleClass('klik'); $('#przymtran').toggleClass('dom1');
    przytr.removeEventListener("click", wybranieswojego); $('#przymtran').html('');
    for(let dz5 of dzialka3){
        dz5.removeEventListener("click", wybranieswojego); 
    }
    for(let dz6 of dzialka20){
        dz6.removeEventListener("click", wybranieswojego);
    }
    kupiona[dozamiany] = komuprzekazacdzialke;
}
function wybraniecudzego(){
    let dozamiany2 = this.value; czysajakiesprzymtrany[licznik]--; $('#k'+dozamiany2).css("color", kolorydzialek[licznik]);
    kupiona[dozamiany2] = licznik; czyja[dozamiany2] = 1;
    for(let dz5 of dzialka3){
        dz5.addEventListener("click", wybranieswojego); 
    }
    
    for(let dz6 of dzialka20){
        dz6.addEventListener("click", wybranieswojego);
    }
    
    for(let dz5 of dzialka3){
        dz5.removeEventListener("click", wybraniecudzego); 
    }
    
    for(let dz6 of dzialka20){
        dz6.removeEventListener("click", wybraniecudzego);
    }
    
    for(let element of ceny){
        element.removeEventListener("click", tura);
    }
    balans1.addEventListener("click", argument1); balans2.addEventListener("click", argument2);
    balans3.addEventListener("click", argument3); balans4.addEventListener("click", argument4);
}
let komuprzekazacdzialke = 0;
function argument1(){komuprzekazacdzialke = 1}; function argument2(){komuprzekazacdzialke = 2}; 
function argument3(){komuprzekazacdzialke = 3}; function argument4(){komuprzekazacdzialke = 4};
function zestaw(){
    alert("Tym razem nic się nie dzieje");
}
function limo(){
    alert("Przejedź się limuzyną na start");
    $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '0');
    liczbaoczek[licznik] = 32;
    $('#kosc').html(liczbaoczek[licznik]);
    if(poziom[licznik] == 3 && liczbaoczek[licznik] > 31){
        liczbaoczek[licznik] = liczbaoczek[licznik] - 32;
        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] + 250000;
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
        $('.p'+licznik).toggleClass('normalny'+licznik); przejscie[licznik] = true;
    }
    if(liczbaoczek[licznik] == 32){
        liczbaoczek[licznik] = 0;
        $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '1'); $('#targ').html('');
    }
}

function losowanie(){
    let los = Math.floor(Math.random() * 22);
    if(los == 0 && czy0juzbylo == false){ czy0juzbylo = true; dom(); } else{los = Math.floor(Math.random() * 22);}
    if(los == 1 && czy1juzbylo == false){czy1juzbylo = true; dom();} else{los = Math.floor(Math.random() * 22);}
    if(los == 2 && czy2juzbylo == false){ czy2juzbylo = true; dom(); } else{los = Math.floor(Math.random() * 22);}
    if(los == 3 && czy3juzbylo == false){czy3juzbylo = true; dom();} else{los = Math.floor(Math.random() * 22);}
    if(los == 4 && czy4juzbylo == false){ czy4juzbylo = true; dom(); } else{los = Math.floor(Math.random() * 22);}
    if(los == 5 && czy5juzbylo == false){czy5juzbylo = true; gest();} else{los = Math.floor(Math.random() * 22);}
    if(los == 6 && czy6juzbylo == false){czy6juzbylo = true; gest();} else{los = Math.floor(Math.random() * 22);}
    if(los == 7 && czy7juzbylo == false){czy7juzbylo = true; prezent();} else{los = Math.floor(Math.random() * 22);}
    if(los == 8 && czy8juzbylo == false){ czy8juzbylo = true; pozew(); } else{los = Math.floor(Math.random() * 22);}
    if(los == 9 && czy9juzbylo == false){czy9juzbylo = true; udzialy();} else{los = Math.floor(Math.random() * 22);}
    if(los == 10 && czy10juzbylo == false){ czy10juzbylo = true; podroz(); } else{los = Math.floor(Math.random() * 22);}
    if(los == 11 && czy11juzbylo == false){czy11juzbylo = true; mieszkanie();} else{los = Math.floor(Math.random() * 22);}
    if(los == 12 && czy12juzbylo == false){ czy12juzbylo = true; mieszkanie(); } else{los = Math.floor(Math.random() * 22);}
    if(los == 13 && czy13juzbylo == false){czy13juzbylo = true; zlyrating();} else{los = Math.floor(Math.random() * 22);}
    if(los == 14 && czy14juzbylo == false){czy14juzbylo = true; podtran();} else{los = Math.floor(Math.random() * 22);}
    if(los == 15 && czy15juzbylo == false){czy15juzbylo = true; podroz();} else{los = Math.floor(Math.random() * 22);}
    if(los == 16 && czy16juzbylo == false){ czy16juzbylo = true; przymtran(); } else{los = Math.floor(Math.random() * 22);}
    if(los == 17 && czy17juzbylo == false){czy17juzbylo = true; zestaw();} else{los = Math.floor(Math.random() * 22);}
    if(los == 18 && czy18juzbylo == false){ czy18juzbylo = true; limo(); } else{los = Math.floor(Math.random() * 22);}
    if(los == 19 && czy19juzbylo == false){czy19juzbylo = true; limo();} else{los = Math.floor(Math.random() * 22);}
    if(los == 20 && czy20juzbylo == false){ czy20juzbylo = true; gest(); } else{los = Math.floor(Math.random() * 22);}
    if(los == 21 && czy21juzbylo == false){czy21juzbylo = true; udzialy();} else{los = Math.floor(Math.random() * 22);}

}
function zmianaKoloru(){
    if(liczbaoczek[licznik] < 8 || (liczbaoczek[licznik] > 16 && liczbaoczek[licznik] < 24)){
        $('#od'+liczbaoczek[licznik]).css('background-color', 'red');
        $('#od'+liczbaoczek[licznik]).css('border-color', 'red');
        $('#od'+liczbaoczek[licznik]).css('opacity', '0.99');
    }
    else{
        $('#od'+liczbaoczek[licznik]).css('background-color', 'darkkhaki');
        $('#od'+liczbaoczek[licznik]).css('border-color', 'darkkhaki');
        $('#od'+liczbaoczek[licznik]).css('opacity', '0.99');
    }
}
function tura(){
    if(liczbadomow[licznik] > 0){
        $('#domy').toggleClass('dom1'); $('#domy').toggleClass('klik');
        domy.addEventListener("click", dom2);
        $('#domy').html('Czy chcesz wykorzystać darmowy dom?');
    }
    if(czysajakiespodtrany[licznik] == 0){
        $('#podtran').removeClass('klik'); $('#podtran').removeClass('dom1');
        podtr.removeEventListener("click", ukradniecie);
        $('#podtran').html('');
    }
    if(czysajakiesprzymtrany[licznik] == 1){
        $('#przymtran').toggleClass('klik'); $('#przymtran').toggleClass('dom1');
        przytr.addEventListener("click", wybranie);
        $('#przymtran').html('Czy chcesz zamienić z kimś działkę?');
    }
    if(czynsz[licznik] > 0){
        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] + 12000;
        czynsz[licznik]--;
    }
    czymoznakupic = true; let limuzyna = false;
    let rzutkostkami = Math.floor(Math.random() * 10 + 2);
    $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '0');
    document.getElementById("kosc").innerHTML = liczbaoczek[licznik] = liczbaoczek[licznik] + rzutkostkami;
    if(liczbaoczek[licznik] == 32){
        $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '1');
        liczbaoczek[licznik] = 0; $('#targ').html('');
    }
    if(poziom[licznik] == 3 && liczbaoczek[licznik] > 31){
        liczbaoczek[licznik] = liczbaoczek[licznik] - 32;
        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] + 250000;
    }
    if(poziom[licznik] == 2 && przejscie[licznik] == true && liczbaoczek[licznik] > 31){
        $('.p'+licznik).toggleClass('srebrny'); $('.p'+licznik).toggleClass('zloty');
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
        if(liczbaoczek[licznik] < 8){
            if(hamza != 0.99 && liczbaoczek[licznik] != 2 && liczbaoczek[licznik] != 5){
                losowanie();
            }
              zmianaKoloru();
            if(liczbaoczek[licznik] != 2 && liczbaoczek[licznik] != 5){
                if(liczbaoczek[licznik] < 4){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0 && czymoznakupic == true){
                        $('#targ').html('Czy chcesz kupić tą działke?'); targ.addEventListener("click", gus);
                        $('#targ').toggleClass('klik'); targ.removeEventListener("click", walter);
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('Czy chcesz kupić domek?'); targ.addEventListener("click", walter); targ.removeEventListener("click", gus);
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - ceny1[kaal[liczbaoczek[licznik]]];
                        
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny1[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
                else if(liczbaoczek[licznik] > 3){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('Czy chcesz kupić tą działke?'); targ.addEventListener("click", gus);
                        $('#targ').toggleClass('klik'); targ.removeEventListener("click", walter);
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('Czy chcesz kupić domek?'); targ.addEventListener("click", walter); targ.removeEventListener("click", gus);
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - ceny2[kaal[liczbaoczek[licznik]]];
                        
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny2[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
            }
            else if(liczbaoczek[licznik] == 2){
                let losuj2 = Math.floor(Math.random()* 10); 
                document.getElementById("ba"+licznik).innerHTML = bilans[licznik] = bilans[licznik] + nagrody[wydanenagrody] * poziom[licznik];
                alert(tekstynagrody[losuj2]+' pobierz: '+nagrody[wydanenagrody]* poziom[licznik]); wydanenagrody++;
                $('#targ').html('');
            }
            else if(liczbaoczek[licznik] == 5){
                $('#targ').html('');
                let los = 3;
                let l = licznik + 1; let i = licznik + 2; let c = licznik + 3;
                if(l == 5){l = 1;}; if(i == 5){i = 1;} if(i == 6){i = 2;} if(c == 5){c = 1;} if(c == 6){c = 2;} if(c == 7){c = 3;}
                if(los == 0){
                    balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] + szansy1[poziom[1]] + szansy1[poziom[2]] + szansy1[poziom[3]] + szansy1[poziom[4]] - szansy1[poziom[licznik]];
                    document.getElementById("ba"+l).innerHTML = bilans[l] = bilans[l] - szansy1[poziom[l]];                   
                    document.getElementById("ba"+i).innerHTML = bilans[i] = bilans[i] - szansy1[poziom[i]];                   
                    document.getElementById("ba"+c).innerHTML = bilans[c] = bilans[c] - szansy1[poziom[c]];
                    alert(tekstyszansy1[Math.floor(Math.random())]+szansy1[wydaneszanse]* poziom[licznik]);                                     
                }
                else if(los == 1){
                    balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - szansy3[poziom[licznik]] * 3;
                    document.getElementById("ba"+l).innerHTML = bilans[l] = bilans[l] + szansy3[poziom[l]];                   
                    document.getElementById("ba"+i).innerHTML = bilans[i] = bilans[i] + szansy3[poziom[i]];                   
                    document.getElementById("ba"+c).innerHTML = bilans[c] = bilans[c] + szansy3[poziom[c]];
                    alert(tekstyszansy3[Math.floor(Math.random())]+szansy3[wydaneszanse]* poziom[licznik]);
                }
                else if(los == 2){
                    $('#targ').html('<span id="xD" style="cursor:pointer;" onclick="rzut()">Rzuć kostką i sprawdź czy wygrasz</span>');
                }
                else if(los == 3){
                    let kolejnazmienna = 2;
                    alert(tekstyszansy4[kolejnazmienna]);
                    if(kolejnazmienna == 0){
                        $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '0');
                        liczbaoczek[licznik] = 8;
                        $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '1');
                    }
                    else if(kolejnazmienna > 0 && kolejnazmienna < 3){
                        balans1.addEventListener("click", gog1); balans2.addEventListener("click", gog2);
                        balans3.addEventListener("click", gog3); balans4.addEventListener("click", gog4);
                         for(let element of ceny){
                            element.removeEventListener("click", tura);
                        }
                        if(kolejnazmienna == 2){
                            wiekszaszansa = true;
                        }
                    }
                    else if(kolejnazmienna == 3){
                        if(poziom[licznik] > 1){
                            poziom[licznik] = poziom[licznik] - 1;
                        }
                    }
                }
            }
            if(limuzyna == true){
                limo(); limuzyna = false;
            }
        }
        else if(liczbaoczek[licznik] > 8 && liczbaoczek[licznik] < 16){
            if(hamza != 0.99 && liczbaoczek[licznik] != 13){
                losowanie()
            }
            zmianaKoloru();
            if(liczbaoczek[licznik] != 13){
                if(liczbaoczek[licznik] < 12){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('Czy chcesz kupić tą działke?'); targ.addEventListener("click", gus);
                        $('#targ').toggleClass('klik'); targ.removeEventListener("click", walter);
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                       $('#targ').html('Czy chcesz kupić domek?'); targ.addEventListener("click", walter); targ.removeEventListener("click", gus);
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - ceny3[kaal[liczbaoczek[licznik]]];
                        
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny3[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
            }
                else if(liczbaoczek[licznik] > 11){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('Czy chcesz kupić tą działke?'); targ.addEventListener("click", gus);
                        $('#targ').toggleClass('klik'); targ.removeEventListener("click", walter);
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('Czy chcesz kupić domek?'); targ.addEventListener("click", walter); targ.removeEventListener("click", gus);
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - ceny4[kaal[liczbaoczek[licznik]]];    
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny4[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
            }
            else if(liczbaoczek[licznik] == 13){
                let losuj = Math.floor(Math.random()* 10); 
                balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] + nagrody[wydanenagrody] * poziom;
                alert(tekstynagrody[losuj]+' pobierz: '+nagrody[wydanenagrody]* poziom);
                wydanenagrody++;
                $('#targ').html('');
            }
        }
        else if(liczbaoczek[licznik] > 16 && liczbaoczek[licznik] < 24){
            if(hamza != 0.99 && liczbaoczek[licznik] != 18){
                losowanie();
            }
            zmianaKoloru();
            if(liczbaoczek[licznik] != 18){
                if(liczbaoczek[licznik] < 21){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0 && czymoznakupic == true){
                        $('#targ').html('Czy chcesz kupić tą działke?'); targ.addEventListener("click", gus);
                        $('#targ').toggleClass('klik'); targ.removeEventListener("click", walter);
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                       $('#targ').html('Czy chcesz kupić domek?'); targ.addEventListener("click", walter); targ.removeEventListener("click", gus);
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - ceny5[kaal[liczbaoczek[licznik]]];                      
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny5[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
                else if(liczbaoczek[licznik] > 20){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('Czy chcesz kupić tą działke?'); targ.addEventListener("click", gus);
                        $('#targ').toggleClass('klik'); targ.removeEventListener("click", walter);
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('Czy chcesz kupić domek?'); targ.addEventListener("click", walter); targ.removeEventListener("click", gus);
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - ceny6[kaal[liczbaoczek[licznik]]];                      
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny6[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
            }
            else{
                $('#targ').html('');
            }
        }
        else if(liczbaoczek[licznik] > 24){ 
            if(hamza != 0.99 && liczbaoczek[licznik] != 27 && liczbaoczek[licznik] != 29){
                losowanie();
            }
            zmianaKoloru();
            if(liczbaoczek[licznik] != 27 && liczbaoczek[licznik] != 29){
                if(liczbaoczek[licznik] < 29){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('Czy chcesz kupić tą działke?'); targ.addEventListener("click", gus);
                        $('#targ').toggleClass('klik'); targ.removeEventListener("click", walter);
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('Czy chcesz kupić domek?'); targ.addEventListener("click", walter); targ.removeEventListener("click", gus);
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - ceny7[kaal[liczbaoczek[licznik]]];
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny7[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
                else if(liczbaoczek[licznik] > 28){
                    if(kupiona[liczbaoczek[licznik]] == 0 && czyja[liczbaoczek[licznik]] == 0){
                        $('#targ').html('Czy chcesz kupić tą działke?'); targ.addEventListener("click", gus);
                        $('#targ').toggleClass('klik'); targ.removeEventListener("click", walter);
                    }
                    if(czyja[liczbaoczek[licznik]] == licznik){
                        $('#targ').html('Czy chcesz kupić domek?'); targ.addEventListener("click", walter); targ.removeEventListener("click", gus);
                    }
                    else if(czyja[liczbaoczek[licznik]] != 0 && czyja[liczbaoczek[licznik]] != licznik){
                        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - ceny4[kaal[liczbaoczek[licznik]]];
                        document.getElementById("ba"+czyja[liczbaoczek[licznik]]).innerHTML = bilans[czyja[liczbaoczek[licznik]]] = bilans[czyja[liczbaoczek[licznik]]] + ceny4[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('');
                    }
                }
            }
            else if(liczbaoczek[licznik] == 27){
                let losujr = Math.floor(Math.random()* 10); 
                balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] + nagrody[wydanenagrody] * poziom;
                alert(tekstynagrody[losujr]+' pobierz: '+nagrody[wydanenagrody]* poziom);
                wydanenagrody++; $('#targ').html('');
            }
         else if(liczbaoczek[licznik] == 29){
                $('#targ').html('');
                let los = 3;
                let l = licznik + 1; let i = licznik + 2; let c = licznik + 3;
                if(l == 5){l = 1;}; if(i == 5){i = 1;} if(i == 6){i = 2;} if(c == 5){c = 1;} if(c == 6){c = 2;} if(c == 7){c = 3;}
                if(los == 0){
                    balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] + szansy1[poziom[1]] + szansy1[poziom[2]] + szansy1[poziom[3]] + szansy1[poziom[4]] - szansy1[poziom[licznik]];
                    document.getElementById("ba"+l).innerHTML = bilans[l] = bilans[l] - szansy1[poziom[l]];                   
                    document.getElementById("ba"+i).innerHTML = bilans[i] = bilans[i] - szansy1[poziom[i]];                   
                    document.getElementById("ba"+c).innerHTML = bilans[c] = bilans[c] - szansy1[poziom[c]];
                    alert(tekstyszansy1[Math.floor(Math.random())]+szansy1[wydaneszanse]* poziom[licznik]);                                     
                }
                else if(los == 1){
                    balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - szansy3[poziom[licznik]] * 3;
                    document.getElementById("ba"+l).innerHTML = bilans[l] = bilans[l] + szansy3[poziom[l]];                   
                    document.getElementById("ba"+i).innerHTML = bilans[i] = bilans[i] + szansy3[poziom[i]];                   
                    document.getElementById("ba"+c).innerHTML = bilans[c] = bilans[c] + szansy3[poziom[c]];
                    alert(tekstyszansy3[Math.floor(Math.random())]+szansy3[wydaneszanse]* poziom[licznik]);
                }
                else if(los == 2){
                    $('#targ').html('<span id="xD" style="cursor:pointer;" onclick="rzut()">*Później coś wymyśle*</span>');
                }
                else if(los == 3){
                    let kolejnazmienna = 2;
                    alert(tekstyszansy4[kolejnazmienna]);
                    if(kolejnazmienna == 0){
                        $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '0');
                        liczbaoczek[licznik] = 8;
                        $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '1');
                    }
                    else if(kolejnazmienna > 0 && kolejnazmienna < 3){
                        balans1.addEventListener("click", gog1); balans2.addEventListener("click", gog2);
                        balans3.addEventListener("click", gog3); balans4.addEventListener("click", gog4);
                         for(let element of ceny){
                            element.removeEventListener("click", tura);
                            }
                        if(kolejnazmienna == 2){
                            wiekszaszansa = true;
                        }
                    }
                    else if(kolejnazmienna == 3){
                        if(poziom[licznik] > 1){
                            poziom[licznik] = poziom[licznik] - 1;
                        }
                  }
            }
         }
        balans1.innerHTML = bilans[1]; balans2.innerHTML = bilans[2]; balans3.innerHTML = bilans[3]; balans4.innerHTML = bilans[4];
}
balans1.innerHTML = bilans[1]; balans2.innerHTML = bilans[2]; balans3.innerHTML = bilans[3]; balans4.innerHTML = bilans[4];
