//licznik jest po to, aby program wiedział czyja jest tura
alert("Żeby ruszyć pionkami treba kliknąć balans danego pionka.");
alert("A no i jeżeli chcesz przejść do następnego musisz kliknąć pole pokazujące oczka(nie pytaj czemu ono istnieje ani czemu jest na nim napisane klik)");
let bilans = ['', 372000, 372000, 372000, 372000]; let komuPrzekazacDzialke = 0;

const balans1 = document.querySelector("#ba1"); const balans2 = document.querySelector("#ba2"); const balans3 = document.querySelector("#ba3");
const balans4 = document.querySelector("#ba4"); const ceny = [balans1, balans2, balans3, balans4]; const podtr = document.querySelector("#podtran");
let licznik = 1; let balansPlusLicznik = document.querySelector("#ba"+licznik); const balansWlascicielaDzialki = document.getElementById("ba"+czyja[liczbaoczek[licznik]]);
for(let element of ceny){
    element.addEventListener("click", tura);
}
let wiekszaszansa = false; let czymoznakupic = true; let czynsz = ['', 0, 0, 0, 0];

let nagrody = [25000, 10000, 10000, 25000, 10000, 10000, 25000, 50000, 50000, 50000]; let transakcje = ['', 0, 0, 0, 0]

let wydaneszanse = 1; if(wydaneszanse === 10){wydaneszanse = 0; alert("szanse zostały zresetowane");}

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

let wydanenagrody = 0; if(wydanenagrody === 10){wydanenagrody = 0; alert("nagrody zostały zresetowane");}

let tekstynagrody = ["Wynajmij swój prywatny odrzutowiec", 'Zdobywasz tytuł "Biznesowy bohater dekady"!', "Wynajmij swój skuter wodny",
"Twój koń zajął pierwsze miejsce w wyścigu", "Zarabiasz na swoich oszczędnościach z zagranicznych kont.", "Twój szofer podwozi cię o 5 pól",
"Otrzymujesz odsetki od swoich milionów", "Sprzedaj swój sportowy samochód", "Sprzedaj jeden ze swoich wakacyjnych domów", 
'Zdobyłeś tytuł "milionera roku"'];

let liczbaoczek = ['', 0, 0, 0, 0]; let poziom = ['', 1, 1, 1, 1]; let pionek = ['', "a", "b", "c", "e"];

$('#a0').css('opacity', '1'); $('#b0').css('opacity', '1'); $('#c0').css('opacity', '1'); $('#e0').css('opacity', '1');

let liczbadomow = ['', 0, 0, 0, 0]; let czydomjestzadarmo = false; let liczbaodmow = ['', 0, 0, 0, 0]; const targ = document.querySelector("#targ");

let ileJestDomow = [0, 0, 0, 0, 0, 0, 0, 0 ,0, /*8*/0, 0, 0, 0, 0, 0, 0, 0, /*16*/0, 0, 0, 0, 0, 0, 0, 0, /*24*/0, 0, 0, 0, 0, 0, 0,/*31*/];

let czyja = [0, 0, 0, 0, 0, 0, 0, 0, 0,/*8*/0, 0, 0, 0, 0, 0, 0, 0,/*16*/0, 0, 0, 0, 0, 0, 0, 0,/*24*/0, 0, 0, 0, 0, 0, 0,/*31*/];

let kupiona = [0, 0, 0, 0, 0, 0, 0, 0, 0,/*8*/0, 0, 0, 0, 0, 0, 0, 0,/*16*/0, 0, 0, 0, 0, 0, 0, 0,/*24*/0, 0, 0, 0 , 0, 0,/*31*/];
function postawHotel(){
    $('#dom'+liczbaoczek[licznik]+'-0').css('opacity', '0'); $('#dom'+liczbaoczek[licznik]+'-2').css('opacity', '0');
    $('#dom'+liczbaoczek[licznik]+'-1').css('opacity', '0'); $('#dom'+liczbaoczek[licznik]+'-3').css('opacity', '0');
    $('#h'+liczbaoczek[licznik]).css('opacity', '1');
    if(ileJestDomow[liczbaoczek[licznik]] === 4){
        ileJestDomow[liczbaoczek[licznik]]++;
        $('#ba'+licznik).html(bilans[licznik] -= cenydomow[liczbaoczek[licznik]]);
        targ.removeEventListener("click", postawHotel);
    }
    $('#targ').html('');
}

const cenydomow = [0, 10000, 0, 10000, 15000, 0, 15000, 15000, 0, 25000, 25000, 25000, 30000, 0, 30000, 30000, 0, 40000, 0, 40000, 40000, 
45000, 45000, 45000, 0, 50000, 50000, 0, 50000, 0, 60000, 60000];

function postawDom(){
    if(czydomjestzadarmo === false){
        $('#ba'+licznik).html(bilans[licznik] -= cenydomow[liczbaoczek[licznik]]);
    }
    $('#dom'+liczbaoczek[licznik]+'-'+kaal[liczbaoczek[licznik]]).css('opacity', '1');
    ileJestDomow[liczbaoczek[licznik]]++;
    if(ileJestDomow[liczbaoczek[licznik]] === 4){
        targ.removeEventListener("click", postawDom); targ.addEventListener("click", postawHotel);
        $('#targ').html('Czy chcesz kupić hotel?');
    }
    if(ileJestDomow[liczbaoczek[licznik]] > 5){
        $('#targ').html('');
    }
    czydomjestzadarmo = false;
}

const cenydzialek = [0, 5000, 0, 5000, 11000, 0, 15000, 20000, 0, 35000, 35000, 40000, 55000, 0, 55000, 60000, 0, 80000, 0, 80000, 90000, 
115000, 115000, 120000, 0, 145000, 145000, 0, 150000, 0, 170000, 200000];

const kolorydzialek = ['', 'darkred', 'chartreuse', 'fuchsia', 'navy']

function zmianaKoloruDzialki(){
    if(liczbaoczek[licznik] < 8 || (liczbaoczek[licznik] > 16 && liczbaoczek[licznik] < 24)){
        $('#od'+liczbaoczek[licznik]).css('background-color', 'red');
        $('#od'+liczbaoczek[licznik]).css('border-color', 'red');
    }
    else{
        $('#od'+liczbaoczek[licznik]).css('background-color', 'darkkhaki');
        $('#od'+liczbaoczek[licznik]).css('border-color', 'darkkhaki');
    }
    $('#od'+liczbaoczek[licznik]).css('opacity', '0.99');
}

function zajmijDzialke(){
    $('#ba'+licznik).html(bilans[licznik] -= cenydzialek[liczbaoczek[licznik]]);
    $('#k'+liczbaoczek[licznik]).css('color', kolorydzialek[licznik]);
    czyja[liczbaoczek[licznik]] = 1; 
    kupiona[liczbaoczek[licznik]] = licznik; targ.removeEventListener("click", zajmijDzialke);
    if(kupiona[liczbaoczek[licznik]] === licznik){
        $('#targ').html('Czy chcesz kupić domek?');
        targ.addEventListener("click", postawDom);
    }
}

function rzut(){
    let sol = Math.floor(Math.random() * 6);
    alert(tekstyszansy2[sol]);
    let wynik = Math.floor(Math.random() * 10 + 2);
    $('#targ').html(wynik);
    if(poziom[licznik] === 1 && wynik === 2){
        alert("wygrałeś!");
        $('#targ').html(wynik);
        if(sol === 0){
            $('#ba'+licznik).html(bilans[licznik] += 50000);
        }
        else if(sol > 0 && sol < 4){
            $('#ba'+licznik).html(bilans[licznik] += 100000);
        }
        else{
            $('#ba'+licznik).html(bilans[licznik] += 150000);
        } /* Chciałbym aby się nie powtarzało, ale sol musi być generowany odzielnie */
    }
    else if(poziom[licznik] === 2 && wynik > 7 && wynik < 13){
        alert("wygrałeś!");
        $('#targ').html(wynik);
        if(sol === 0){
            $('#ba'+licznik).html(bilans[licznik] += 50000);
        }
        else if(sol > 0 && sol < 4){
            $('#ba'+licznik).html(bilans[licznik] += 100000);
        }
        else{
            $('#ba'+licznik).html(bilans[licznik] += 150000);
        } 
    }
    else if(poziom[licznik] === 3 && wynik > 4 && wynik < 13){
        alert("wygrałeś!");
        $('#targ').html(wynik);
        if(sol === 0){
            $(balansPlusLicznik).html(bilans[licznik] += 50000);
        }
        else if(sol > 0 && sol < 4){
            $(balansPlusLicznik).html(bilans[licznik] += 100000);
        }
        else{
            $(balansPlusLicznik).html(bilans[licznik] += 150000);
        } 
    }
}

const kosc = document.querySelector("#kosc"); 
kosc.addEventListener("click", function() {nadajKlik(); }); $('#kosc').toggleClass('klik');

const ceny1 = [7000, 15000, 30000, 50000, 60000, 80000]; const ceny2 = [15000, 30000, 50000, 80000, 95000, 125000];
const ceny3 = [20000, 50000, 90000, 140000, 165000, 215000]; const ceny4 = [25000, 65000, 110000, 170000, 200000, 270000];
const ceny5 = [35000, 90000, 150000, 230000, 270000, 350000]; const ceny6 = [40000, 100000, 170000, 260000, 305000, 395000];
const ceny7 = [50000, 125000, 210000, 320000, 375000, 485000]; const ceny8 = [65000, 160000, 250000, 370000, 430000, 550000];

let czywwiezieniu = ['', false, false, false, false]; let przejscie = ['', false, false, false, false];
$('.p1').toggleClass('normalny1'); $('.p2').toggleClass('normalny2'); $('.p3').toggleClass('normalny3'); $('.p4').toggleClass('normalny4');  $('#ba1').toggleClass('klik'); 

function nadajKlik(){
    licznik++;
    if(licznik === 1){
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
        element.addEventListener("click", tura);
    }
    balansPlusLicznik.innerHTML = bilans[licznik] -= 40000
    let danyBalans = this.toString();
    danyBalans.slice(2,3);
    this.innerHTML = bilans[danyBalans] += 40000;
    if(wiekszaszansa === true){
        this.innerHTML = bilans[danyBalans] += 10000;
        balansPlusLicznik.innerHTML = bilans[licznik] -= 10000;
    }
    wiekszaszansa = false;
}
const domy = document.querySelector("#domy");
function dom2(){
    domy.removeEventListener("click", dom);
    $('#domy').toggleClass('klik'); 
    $('#domy').toggleClass('dom1'); $('#domy').html('');
    czydomjestzadarmo = true;
} 
function dom(){
    liczbadomow[licznik]++
    if(liczbadomow[licznik] > 0){
        $('#domy').toggleClass('dom1'); $('#domy').toggleClass('klik');
        domy.addEventListener("click", dom2); $('#domy').html('Czy chcesz wykorzystać darmowy dom?');
    }
}
function danieLubZabranieInnym(ileLacznie, odJednegoGracza){
    let innyGracz1 = licznik + 1; let innyGracz2 = licznik + 2; let innyGracz3 = licznik + 3;
    if(innyGracz1 === 5){innyGracz1 = 1;} if(innyGracz2 === 5){innyGracz2 = 1;} if(innyGracz2 === 6){innyGracz2 = 2;} if(innyGracz3 === 5){innyGracz3 = 1;} 
    if(innyGracz3 === 6){innyGracz3 = 2;} if(innyGracz3 === 7){innyGracz3 = 3;}
    balansPlusLicznik.innerHTML = bilans[licznik] -=  ileLacznie;
    document.getElementById("ba"+innyGracz1).innerHTML = bilans[innyGracz1] += odJednegoGracza;
    document.getElementById("ba"+innyGracz2).innerHTML = bilans[innyGracz2] += odJednegoGracza;
    document.getElementById("ba"+innyGracz3).innerHTML = bilans[innyGracz3] += odJednegoGracza;
}

function gest(){
    alert("Masz gest! daj każdemu z pozostałych graczy 20k");
    danieLubZabranieInnym(60000, 20000);
}
function prezent(){
    alert("Prezent ślubny! pobierz od każdego gracza 20k");
    danieLubZabranieInnym(-60000, -20000);
}
function udzialy(){
    alert("Wystrzałowe udziały! Pobierz 100k")
    balansPlusLicznik.innerHTML = bilans[licznik] += 100000;
}
function pozew1(){
    alert("pozew! Pobierz 50k od wybranego gracza")
    for(let element of ceny){
        element.removeEventListener("click", tura);
        element.addEventListener("click", pozew2);
    }
}
function pozew2(){
    balansPlusLicznik.innerHTML = bilans[licznik] += 50000;
    let danyBalans = this.toString();
    danyBalans.slice(2,3);
    bilans[danyBalans] -= 50000;
     for(let element of ceny){
        element.removeEventListener("click", pozew2);
        element.addEventListener("click", tura);
        element.innerHTML = bilans[danyBalans];
    }
}
function mieszkanie(){
    alert("Wynajmujesz swoje mieszkanie przez 3 następne kolejki pobierasz 12k");
    czynsz[licznik] = czynsz[licznik] + 3;
}
let czyznalezione = false;
function podroz(){
    czyznalezione = false;
    alert("Do przodu! Przejdź do najbliższej wolnej nieruchomości.");
    $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '0');
    let oczka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31]; 
    for(i = liczbaoczek[licznik]; i < 32; i++){
        if(czyja[i] === 0 && czyznalezione === false && i > liczbaoczek[licznik] && i !== 13 && i !== 8 & i !== 16 && i !== 24 && i !== 27 && i !== 29 && i !== 32){
            zmianaKoloruDzialki();
            $('#'+pionek[licznik]+oczka[i]).css('opacity', '1'); czyznalezione = true;
            $('#kosc').html(i); liczbaoczek[licznik] = i;
            $('#od'+liczbaoczek[licznik]).css('opacity', '0.99');
        }
    }
    for(i = liczbaoczek[licznik]; i > 0; i--){
        if(czyznalezione === false && czyja[i] === 0 && i < liczbaoczek[licznik] && i !== 13 && i !== 8 & i !== 16 && i !== 24 && i !== 27 && i !== 29 && i !== 32){
            zmianaKoloruDzialki();
            $('#'+pionek[licznik]+oczka[i]).css('opacity', '1');
            czyznalezione = true;
            $('#kosc').html(i);
            liczbaoczek[licznik] = i;
        }
    }
}
const poziomeDzialki = document.querySelectorAll('dzialka2'); const pionoweDzialki = document.querySelectorAll('bocznadzialka2');
const dzialka = ['#d1', '#d2', '#d3', '#d4', '#d5', '#d6', '#d7', '#d8', '#d9', '#d10', '#d11', '#d12', '#d13', '#d14', '#d15', 
'#d16', '#d17', '#d18', '#d19', '#d20', '#d21', '#d22', '#d23', '#d24', '#d25', '#d26', '#d27', '#d28', '#d29', '#d30', '#d31'];
function akcja(){
    let wlasciciel = this.value;
        for(let i = 0; i < 31; i++){
            $(dzialka[i]).toggleClass('klik');
        }
        for(let dz5 of poziomeDzialki){
            element.removeEventListener("click", akcja);
        }
        for(let element of pionoweDzialki){
            element.removeEventListener("click", akcja);
        }
    $('#podtran').toggleClass('klik'); $('#podtran').toggleClass('dom1'); podtr.removeEventListener("click", ukradniecie);
    $('#podtran').html('');
    $('#k'+wlasciciel).css('color', kolorydzialek[licznik]); 
    kupiona[wlasciciel] = licznik; czyja[wlasciciel] = 1;
}
function ukradniecie(){
    for(let i = 0; i < 31; i++){
        $(dzialka[i]).toggleClass('klik');
    }
    for(let dz3 of poziomeDzialki){
        element.addEventListener("click", akcja);
    }
    for(let element of pionoweDzialki){
        element.addEventListener("click", akcja);
    }
    for(i = 0; i < 31; i++){
        if(kupiona[i] === licznik){
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
    czysajakiespodtrany[licznik] += 1;
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
    czysajakiesprzymtrany[licznik] += 1;
}
function wybranie(){
    alert("najpierw wybierz cudzą działkę, a potem kliknij bilans gracza do, którego należała i wtedy wybierz działkę, którą dajesz w zamian")
    for(let element of pionoweDzialki){
        element.addEventListener("click", wybraniecudzego); 
    }
    for(let element of poziomeDzialki){
        element.addEventListener("click", wybraniecudzego); 
    }
    for(i = 0; i < 31; i++){
        $(dzialka[i]).toggleClass('klik');
    }
}
function wybranieswojego(){
    let doZamiany = this.value;
    if(kupiona[doZamiany] === licznik){
        $('#k'+dozamiany).css("color", kolorydzialek[komuPrzekazacDzialke]);
        kupiona[dozamiany] = licznik; 
        czyja[dozamiany] = 1;
        $('#przymtran').toggleClass('klik'); $('#przymtran').toggleClass('dom1');
        przytr.removeEventListener("click", wybranieswojego); $('#przymtran').html('');
        for(let element of pionoweDzialki){
            element.removeEventListener("click", wybranieswojego); 
        }
        for(let element of poziomeDzialki){
            element.removeEventListener("click", wybranieswojego);
        }
        kupiona[dozamiany] = komuPrzekazacDzialke;
        }else{
            alert("Wybierz swoją działke, a nie cudzą, albo niczyją");
        }
}
function wybraniecudzego(){
    let doZamiany2 = this.value;
    if(kupiona[doZamiany] !== licznik){
        czysajakiesprzymtrany[licznik]--; 
        $('#k'+dozamiany2).css("color", kolorydzialek[licznik]);
        kupiona[dozamiany2] = licznik; 
        czyja[dozamiany2] = 1;
        for(let element of pionoweDzialki){
            element.addEventListener("click", wybranieswojego);
            element.removeEventListener("click", wybraniecudzego);
        } 
        for(let element of poziomeDzialki){
            element.addEventListener("click", wybranieswojego);
            element.removeEventListener("click", wybraniecudzego);
        }
        for(let element of ceny){
            element.removeEventListener("click", tura);
            element.addEventListener("click", ktoMaDostacDzialke);
        }
    }else{
        alert("Wybierz cudzą działkę, a nie swoją!");
    }
}
function ktoMaDostacDzialke(){
    let danyBalans = this.toString();
    danyBalans.slice(2,3);
    komuPrzekacDzialke = danyBalans;
    for(let element of ceny){
        element.removeEventListener("click", ktoMaDostacDzialke);
    }
}
function zestaw(){
    alert("Tym razem nic się nie dzieje");
}
function limo(){
    alert("Przejedź się limuzyną na start");
    $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '0');
    liczbaoczek[licznik] = 32;
    $('#kosc').html(liczbaoczek[licznik]);
    if(poziom[licznik] === 3 && liczbaoczek[licznik] > 31){
        liczbaoczek[licznik] -= 32;
        balansPlusLicznik.innerHTML = bilans[licznik] += 250000;
    }
    if(poziom[licznik] === 2 && przejscie[licznik] === true && liczbaoczek[licznik] > 31){
        $('.p'+licznik).toggleClass('srebrny');
        $('.p'+licznik).toggleClass('zloty');
        poziom[licznik] = 3;
        liczbaoczek[licznik] -= 32;
    }
    if(liczbaoczek[licznik] > 31 && przejscie[licznik] === false){
        liczbaoczek[licznik] -= 32;
        poziom[licznik] = 2;
        $('.p'+licznik).toggleClass('srebrny');
        $('.p'+licznik).toggleClass('normalny'+licznik); przejscie[licznik] = true;
    }
    if(liczbaoczek[licznik] === 32){
        liczbaoczek[licznik] = 0;
        $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '1'); $('#targ').html('');
    }
}
let czyJuzbylo = [false, false, false, false, false, false, false, false, false, false, 
    false, false, false, false, false, false, false, false, false, false, false, false];
function pierwszeLosowanie(){
    let ktoraCyfra = Math.floor(Math.random() * 7);
    if(ktoraCyfra == 0 && czyJuzbylo[ktoraCyfra] === false){ czyJuzbylo[ktoraCyfra] = true; console.log('dom'); dom(); } //else{los = Math.floor(Math.random() * 7);}
    if(ktoraCyfra == 1 && czyJuzbylo[ktoraCyfra] === false){ czyJuzbylo[ktoraCyfra] = true; console.log('dom');  dom();} //else{los = Math.floor(Math.random() * 7);}
    if(ktoraCyfra == 2 && czyJuzbylo[ktoraCyfra] === false){ czyJuzbylo[ktoraCyfra] = true; console.log('dom');  dom(); } //else{los = Math.floor(Math.random() * 7);}
    if(ktoraCyfra == 3 && czyJuzbylo[ktoraCyfra] === false){ czyJuzbylo[ktoraCyfra] = true; console.log('dom');  dom();}// else{los = Math.floor(Math.random() * 7);}
    if(ktoraCyfra == 4 && czyJuzbylo[ktoraCyfra] === false){ czyJuzbylo[ktoraCyfra] = true; console.log('dom');  dom(); } //else{los = Math.floor(Math.random() * 7);}
    if(ktoraCyfra == 5 && czyJuzbylo[ktoraCyfra] === false){ czyJuzbylo[ktoraCyfra] = true; console.log('gest');  gest();}// else{los = Math.floor(Math.random() * 7);}
    if(ktoraCyfra == 6 && czyJuzbylo[ktoraCyfra] === false){ czyJuzbylo[ktoraCyfra] = true; console.log('gest');  gest();} //else{los = Math.floor(Math.random() * 7);}
    console.log(ktoraCyfra); 
    console.log(liczbadomow[licznik]);
    console.log(czyJuzbylo);
}
function drugieLosowanie(){
    let los = Math.floor(Math.random() * 7);
    if(los == 0 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; prezent();} else{los = Math.floor(Math.random() * 7);}
    if(los == 1 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; pozew1(); } else{los = Math.floor(Math.random() * 7);}
    if(los == 2 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; udzialy();} else{los = Math.floor(Math.random() * 7);}
    if(los == 3 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; podroz(); } else{los = Math.floor(Math.random() * 7);}
    if(los == 4 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; mieszkanie();} else{los = Math.floor(Math.random() * 7);}
    if(los == 5 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; mieszkanie(); } else{los = Math.floor(Math.random() * 7);}
    if(los == 6 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; zlyrating();} else{los = Math.floor(Math.random() * 7);}
}
function trzecieLosowanie(){
    let los = Math.floor(Math.random() * 7);
    if(los == 0 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; podtran();} else{los = Math.floor(Math.random() * 7);}
    if(los == 1 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; podroz();} else{los = Math.floor(Math.random() * 7);}
    if(los == 2 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; przymtran(); } else{los = Math.floor(Math.random() * 7);}
    if(los == 3 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; zestaw();} else{los = Math.floor(Math.random() * 7);}
    if(los == 4 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; limo(); } else{los = Math.floor(Math.random() * 7);}
    if(los == 5 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; limo();} else{los = Math.floor(Math.random() * 7);}
    if(los == 6 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; gest(); } else{los = Math.floor(Math.random() * 7);}
    if(los == 7 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; udzialy();} else{los = Math.floor(Math.random() * 7);}
}
function coZrobicZPolem(){
    if(kupiona[liczbaoczek[licznik]] === 0 && czyja[liczbaoczek[licznik]] === 0 && czymoznakupic === true){
        $('#targ').html('Czy chcesz kupić tą działke?'); targ.addEventListener("click", zajmijDzialke);
        $('#targ').toggleClass('klik'); targ.removeEventListener("click", postawDom);
    }
    else if(czyja[liczbaoczek[licznik]] === licznik){
        $('#targ').html('Czy chcesz kupić domek?'); targ.addEventListener("click", postawDom); targ.removeEventListener("click", zajmijDzialke);
    }
}
function nagroda(){
    let losuj2 = Math.floor(Math.random()* 10); 
    balansPlusLicznik.innerHTML = bilans[licznik] += nagrody[wydanenagrody] * poziom[licznik];
    alert(`${tekstynagrody[losuj2]} pobierz: ${nagrody[wydanenagrody]* poziom[licznik]}`); wydanenagrody++;
    $('#targ').html('');
}
function szansa(){
    let los = 3;
    let l = licznik + 1; let i = licznik + 2; let c = licznik + 3;
    if(l === 5){l = 1;}; if(i === 5){i = 1;} if(i === 6){i = 2;} if(c === 5){c = 1;} if(c === 6){c = 2;} if(c === 7){c = 3;}
    if(los === 0){
        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] + szansy1[poziom[1]] + szansy1[poziom[2]] + szansy1[poziom[3]] + szansy1[poziom[4]] - szansy1[poziom[licznik]];
        document.getElementById("ba"+l).innerHTML = bilans[l] -= szansy1[poziom[l]];                   
        document.getElementById("ba"+i).innerHTML = bilans[i] -= szansy1[poziom[i]];                   
        document.getElementById("ba"+c).innerHTML = bilans[c] -= szansy1[poziom[c]];
        alert(tekstyszansy1[Math.floor(Math.random())]+szansy1[wydaneszanse]* poziom[licznik]);                                     
    }
    else if(los === 1){
        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - szansy3[poziom[licznik]] * 3;
        document.getElementById("ba"+l).innerHTML = bilans[l] += szansy3[poziom[l]];                   
        document.getElementById("ba"+i).innerHTML = bilans[i] += szansy3[poziom[i]];                   
        document.getElementById("ba"+c).innerHTML = bilans[c] += szansy3[poziom[c]];
        alert(tekstyszansy3[Math.floor(Math.random())]+szansy3[wydaneszanse]* poziom[licznik]);
    }
    else if(los === 2){
        $('#targ').html('>Rzuć kostką i sprawdź czy wygrasz');
        targ.addEventListener("click", rzut); 
    }
    else{
        let kolejnazmienna = 2;
        alert(tekstyszansy4[kolejnazmienna]);
        if(kolejnazmienna === 0){
            $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '0');
            liczbaoczek[licznik] = 8;
            ('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '1');
        }
        else if(kolejnazmienna === 1 || kolejnazmienna === 2){
            for(let element of ceny){
                element.removeEventListener("click", tura);
                element.addEventListener("click", gog);
            }
                if(kolejnazmienna === 2){
                    wiekszaszansa = true;
                }
            }
        else{
            if(poziom[licznik] > 1){
                poziom[licznik] = poziom[licznik] - 1;
            }
        }
    }
}
function tura2(){
    if(czysajakiespodtrany[licznik] === 0){
        $('#podtran').removeClass('klik'); $('#podtran').removeClass('dom1');
        podtr.removeEventListener("click", ukradniecie);
        $('#podtran').html('');
    }
    if(czysajakiesprzymtrany[licznik] === 1){
        $('#przymtran').toggleClass('klik'); $('#przymtran').toggleClass('dom1');
        przytr.addEventListener("click", wybranie);
        $('#przymtran').html('Czy chcesz zamienić z kimś działkę?');
    }
    if(czynsz[licznik] > 0){
        balansPlusLicznik.innerHTML = bilans[licznik] += 12000;
        czynsz[licznik]--;
    }
    czymoznakupic = true; 
    let limuzyna = false;
    $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '0');
    document.getElementById("kosc").innerHTML = liczbaoczek[licznik] += rzutkostkami;
    if(liczbaoczek[licznik] === 32){
        $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '1');
        liczbaoczek[licznik] = 0; $('#targ').html('');
    }
    if(poziom[licznik] === 3 && liczbaoczek[licznik] > 31){
        liczbaoczek[licznik] -= 32;
        balansPlusLicznik.innerHTML = bilans[licznik] += 250000;
    }
    if(poziom[licznik] === 2 && przejscie[licznik] === true && liczbaoczek[licznik] > 31){
        $('.p'+licznik).toggleClass('srebrny'); $('.p'+licznik).toggleClass('zloty');
        poziom[licznik] = 3;
        liczbaoczek[licznik] -= 32;
    }
    if(liczbaoczek[licznik] > 31 && przejscie[licznik] === false){
        liczbaoczek[licznik] -= 32;
        poziom[licznik] = 2;
        $('.p'+licznik).toggleClass('srebrny');
        $('.p'+licznik).toggleClass('normalny'+licznik);
        przejscie[licznik] = true;
    }
    $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '1');
    if(liczbaoczek[licznik] === 24){
        $('#targ').html('');
        $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '0');
        liczbaoczek[licznik] = 8;
        $('#'+pionek[licznik]+liczbaoczek[licznik]).css('opacity', '1');
        czywwiezieniu[licznik] = 1;
        document.getElementById("kosc").innerHTML = liczbaoczek[licznik];
    }
    $('#targ').html('')
    if(liczbaoczek[licznik] === 2 || liczbaoczek[licznik] === 13 || licznaoczek[licznik] === 27){
        nagroda();
    }
    else if(liczbaoczek[licznik] === 5 || liczbaoczek[licznik] === 29 || liczbaoczek[licznik] === 18){
        szansa();
    }
    if(liczbaoczek[licznik] === 8 || liczbaoczek[licznik] === 16){
        $('#targ').html('');           
    }
    else{
        if(liczbadomow[licznik] > 0){
           $('#domy').toggleClass('dom1'); $('#domy').toggleClass('klik');
           domy.addEventListener("click", dom2);
           $('#domy').html('Czy chcesz wykorzystać darmowy dom?');
        }
        let hamza = $('#od'+liczbaoczek[licznik]).css('opacity');
        zmianaKoloruDzialki();
        coZrobicZPolem()
        if(liczbaoczek[licznik] < 8){
            if(hamza !== 0.99){
                pierwszeLosowanie();
            }
            if(liczbaoczek[licznik] < 4){
                if(czyja[liczbaoczek[licznik]] !== 0 && czyja[liczbaoczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny1[kaal[liczbaoczek[licznik]]];
                        
                    balansWlascicielaDzialki.innerHTML = bilans[czyja[liczbaoczek[licznik]]] += ceny1[kaal[liczbaoczek[licznik]]];
                    $('#targ').html('')
                }
                else if(liczbaoczek[licznik] > 3){
                    if(czyja[liczbaoczek[licznik]] !== 0 && czyja[liczbaoczek[licznik]] !== licznik){
                        balansPlusLicznik.innerHTML = bilans[licznik] -= ceny2[kaal[liczbaoczek[licznik]]];
                        
                        balansWlascicielaDzialki.innerHTML = bilans[czyja[liczbaoczek[licznik]]] += ceny2[kaal[liczbaoczek[licznik]]];
                        $('#targ').html('')
                    }
                }
            }
            if(limuzyna === true){
                limo(); limuzyna = false;
            }
        }
        else if(liczbaoczek[licznik] > 8 && liczbaoczek[licznik] < 16){
            if(hamza !== 0.99){
                drugieLosowanie()
            }
            if(liczbaoczek[licznik] < 12){
                if(czyja[liczbaoczek[licznik]] !== 0 && czyja[liczbaoczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny3[kaal[liczbaoczek[licznik]]];
                    balansWlascicielaDzialki.innerHTML = bilans[czyja[liczbaoczek[licznik]]] += ceny3[kaal[liczbaoczek[licznik]]];
                    $('#targ').html('');
                }
            }
            else if(liczbaoczek[licznik] > 11){
                if(czyja[liczbaoczek[licznik]] !== 0 && czyja[liczbaoczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny4[kaal[liczbaoczek[licznik]]];    
                    balansWlascicielaDzialki.innerHTML = bilans[czyja[liczbaoczek[licznik]]] += ceny4[kaal[liczbaoczek[licznik]]];
                    $('#targ').html('');
                }
            }
        }
        else if(liczbaoczek[licznik] > 16 && liczbaoczek[licznik] < 24){
            if(hamza !== 0.99){
                trzecieLosowanie();
            }
            if(liczbaoczek[licznik] < 21){
                if(czyja[liczbaoczek[licznik]] !== 0 && czyja[liczbaoczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny5[kaal[liczbaoczek[licznik]]];                      
                    balansWlascicielaDzialki.innerHTML = bilans[czyja[liczbaoczek[licznik]]] += ceny5[kaal[liczbaoczek[licznik]]];
                    $('#targ').html('')
                }
            }
            else if(liczbaoczek[licznik] > 20){
                if(czyja[liczbaoczek[licznik]] !== 0 && czyja[liczbaoczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny6[kaal[liczbaoczek[licznik]]];                      
                    balansWlascicielaDzialki.innerHTML = bilans[czyja[liczbaoczek[licznik]]] += ceny6[kaal[liczbaoczek[licznik]]];
                    $('#targ').html('')
                }
            }
        }
        else if(liczbaoczek[licznik] > 24){ 
            if(hamza !== 0.99){
                czwarteLosowanie();
            }
            if(liczbaoczek[licznik] < 29){
                if(czyja[liczbaoczek[licznik]] !== 0 && czyja[liczbaoczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny7[kaal[liczbaoczek[licznik]]];
                    balansWlascicielaDzialki.innerHTML = bilans[czyja[liczbaoczek[licznik]]] += ceny7[kaal[liczbaoczek[licznik]]];
                    $('#targ').html('')
                }
            }
            else if(liczbaoczek[licznik] > 28){
                if(czyja[liczbaoczek[licznik]] !== 0 && czyja[liczbaoczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny8[kaal[liczbaoczek[licznik]]];
                    balansWlascicielaDzialki.innerHTML = bilans[czyja[liczbaoczek[licznik]]] += ceny8[kaal[liczbaoczek[licznik]]];
                    $('#targ').html('')
                }
            }
        }
        balans1.innerHTML = bilans[1]; balans2.innerHTML = bilans[2]; balans3.innerHTML = bilans[3]; balans4.innerHTML = bilans[4
    }
}
balans1.innerHTML = bilans[1]; balans2.innerHTML = bilans[2]; balans3.innerHTML = bilans[3]; balans4.innerHTML = bilans[4];
