//licznik jest po to, aby program wiedział czyja jest tura
alert("Żeby ruszyć pionkami treba kliknąć balans danego pionka.");
alert("A no i jeżeli chcesz przejść do następnego musisz kliknąć pole pokazujące oczka(nie pytaj czemu ono istnieje ani czemu jest na nim napisane klik)");
let bilans = ['', 372000, 372000, 372000, 372000]; let komuPrzekazacDzialke = 0;
let licznik = 1;
let innyGracz1 = licznik + 1; let innyGracz2 = licznik + 2; let innyGracz3 = licznik + 3;
// tu są zdefiniowane wszystkie selektory
const balans1 = document.querySelector("#ba1"); const balans2 = document.querySelector("#ba2"); const balans3 = document.querySelector("#ba3");
const balans4 = document.querySelector("#ba4"); const ceny = [balans1, balans2, balans3, balans4]; const podtr = document.querySelector("#podtran");
const balansWlascicielaDzialki = document.getElementById("ba"+kupiona[liczbaOczek[licznik]]); const targ = document.querySelector("#targ");
let balansPlusLicznik = document.getElementById("#ba"+licznik); const kosc = document.querySelector("#kosc"); const domy = document.querySelector("#domy");
const poziomeDzialki = document.querySelectorAll('dzialka2'); const pionoweDzialki = document.querySelectorAll('bocznadzialka2');
const przytr = document.querySelector("przymtran");
//a dokładniej dotąd
for(let element of ceny){
    element.addEventListener("click", tura);
}
let wiekszaSzansa = false; let czyMoznaKupicDzialke = true; let czynsz = ['', 0, 0, 0, 0];

const nagrody = [25000, 10000, 10000, 25000, 10000, 10000, 25000, 50000, 50000, 50000];

const tekstySzansy1 = ["przeprowadzasz świetną transakcję biznesową! od wszystkich pozostałych graczy odtrzymujesz", 
"Właśnie obchodzisz urodziny! od wszystkich pozostałych graczy otrzymujesz"];

const szansy1 = ['', 10000, 30000, 50000];

const tekstySzansy2 = ["Weź udział w wyścigu motorówek! aby wygrać 50k wyrzuć","Wyścig na prywatnym torze! aby wygrać 100k, wyrzuć", 
"Rozbij kasyno! aby wygrać 100k, wyrzuć", "Zainwestuj w giełdę! aby zarobić 100k wyrzuć", "Załóż własną firmę! aby zarobić 150k wyrzuć",
"Weź udział w wyścigu balonów! aby wygrać 150k wyrzuć"];

const tekstySzansy3 = ["Zabierz przyjaciół w luksusową podróż! płacisz wszystkim pozostałym graczom",
"Zabierz przyjaciół na wystawny obiad! płacisz wszystkim pozostałym graczom"];

const szansy3 = ['', 5000, 15000, 25000];

const tekstySzansy4 = ["Idziesz prosto do więzienia, nie przechodzisz przez start ani nie pobierasz premii", 
"Zaproszenie na ważną imprezę! zapłać 40k wybranemu graczowi za towarzystwo.", "Wysoko postawieni przyjaciele! zapłać 50k wybranemu graczowi za udział w jego premierze filmowej.",
"przepuściłeś sporą kwotę w szale wydawania pieniędzy! obniż status swojego pionka."];

let wydaneNagrody = 0; 
if(wydaneNagrody === 10){
    wydaneNagrody = 0; 
    alert("nagrody zostały zresetowane");
}

const tekstyNagrody = ["Wynajmij swój prywatny odrzutowiec", 'Zdobywasz tytuł "Biznesowy bohater dekady"!', "Wynajmij swój skuter wodny",
"Twój koń zajął pierwsze miejsce w wyścigu", "Zarabiasz na swoich oszczędnościach z zagranicznych kont.", "Twój szofer podwozi cię o 5 pól",
"Otrzymujesz odsetki od swoich milionów", "Sprzedaj swój sportowy samochód", "Sprzedaj jeden ze swoich wakacyjnych domów", 
'Zdobyłeś tytuł "milionera roku"'];

let czyJuzbylo = [false, false, false, false, false, false, false, false, false, false, 
    false, false, false, false, false, false, false, false, false, false, false, false];

let liczbaOczek = ['', 0, 0, 0, 0]; let poziom = ['', 1, 1, 1, 1]; let pionek = ['', "a", "b", "c", "e"];
//tu ustawiam pionkom widoczność 
$('#a0').css('opacity', '1'); $('#b0').css('opacity', '1'); $('#c0').css('opacity', '1'); $('#e0').css('opacity', '1');

let liczbaDomow = ['', 0, 0, 0, 0]; let czyDomJestZaDarmo = false; let liczbaOdmow = ['', 0, 0, 0, 0];

let ileJestDomow = [0, 0, 0, 0, 0, 0, 0, 0 , 0, /*8*/0, 0, 0, 0, 0, 0, 0, 0, /*16*/0, 0, 0, 0, 0, 0, 0, 0, /*24*/0, 0, 0, 0, 0, 0, 0,/*31*/];

let ileJestPodTranow = ['', 0, 0, 0, 0]; let ileJestPrzymTranow = ['', 0, 0, 0, 0];

let czyKupiona = [false, false, false, false, false, false, false, false, false,/*8*/false, false, false, false, false, false, false, false,
/*16*/false, false, false, false, false, false, false, false,/*24*/false, false, false, false, false, false, false,/*31*/];

let czyJestWWiezieniu = ['', false, false, false, false]; let przejscie = ['', false, false, false, false];

let kupiona = [0, 0, 0, 0, 0, 0, 0, 0, 0,/*8*/0, 0, 0, 0, 0, 0, 0, 0,/*16*/0, 0, 0, 0, 0, 0, 0, 0,/*24*/0, 0, 0, 0 , 0, 0,/*31*/];

const postep = document.getElementById('postep'); $(postep).toggleClass('dom1'); $(postep).toggleClass('klik'); postep.addEventListener("click", zapiszPostep); $(postep).html('Czy chcesz zapisać postęp?');
function zapiszPostep(){
    //każdy zapissny przedmiot jest nazwany tak samo jak jego odpowiednik, więc upchnąłem kod
    localStorage.setItem('liczbaDomow', liczbaDomow); localStorage.setItem('balanse', bilans); localStorage.setItem('komuPrzekazacDzialke', komuPrzekazacDzialke);
    localStorage.setItem('licznik', licznik); localStorage.setItem('wiekszaSzansa', wiekszaSzansa);
    localStorage.setItem('czyMoznaKupicDzialke', czyMoznaKupicDzialke);
    localStorage.setItem('czynsz', czynsz); localStorage.setItem('wydaneNagrody', wydaneNagrody);
    localStorage.setItem('liczbaOczek', liczbaOczek); localStorage.setItem('poziom', poziom);
    localStorage.setItem('pionek', pionek); localStorage.setItem('czyDomJestZaDarmo', czyDomJestZaDarmo);
    localStorage.setItem('liczbaOdmow', liczbaOdmow); localStorage.setItem('ileJestDomow', ileJestDomow);
    localStorage.setItem('czyKupiona', czyKupiona); localStorage.setItem('kupiona', kupiona);
    localStorage.setItem('czyJestWWiezieniu', czyJestWWiezieniu); localStorage.setItem('przejscie', przejscie);
    localStorage.setItem('ileJestPodTranow', ileJestPodTranow); localStorage.setItem('ileJestPrzymTranow', ileJestPrzymTranow);
    alert("Postęp zapisany");
}
function usunPostep(){
    localStorage.clear();
    alert("Postęp usunięty");
}
function przywrocPostep(){
    localStorage.getItem('liczbaDomow'); localStorage.getItem('balanse');
    localStorage.getItem('licznik'); localStorage.getItem('wiekszaSzansa');
    localStorage.getItem('czyMoznaKupicDzialke'); localStorage.getItem('czynsz');
    localStorage.getItem('wydaneNagrody'); localStorage.getItem('liczbOczek');
    localStorage.getItem('poziom'); localStorage.getItem('pionek');
    localStorage.getItem('czyDomJestZaDarmo'); localStorage.getItem('liczbaOdmow');
    localStorage.getItem('ileJestDomow'); localStorage.getItem('czyKupiona');
    localStorage.getItem('kupiona'); localStorage.getItem('czyJestWWiezieniu');
    localStorage.getItem('przejscie'); localStorage.getItem('ileJestPodTranow');
    localStorage.getItem('ileJestPrzymTranow');
    alert("Przywrócono postęp");
}
function zmianaPoziomu(){
    if(poziom[licznik] === 3 && liczbaOczek[licznik] > 31){
        liczbaOczek[licznik] -= 32;
        balansPlusLicznik.innerHTML = bilans[licznik] += 250000;
    }
    else if(poziom[licznik] === 2 && przejscie[licznik] === true && liczbaOczek[licznik] > 31){
        $('.p'+licznik).toggleClass('srebrny'); $('.p'+licznik).toggleClass('zloty');
        poziom[licznik] = 3;
        liczbaOczek[licznik] -= 32;
    }
    else if(liczbaOczek[licznik] > 31 && przejscie[licznik] === false){
        liczbaOczek[licznik] -= 32;
        poziom[licznik] = 2;
        $('.p'+licznik).toggleClass('srebrny');
        $('.p'+licznik).toggleClass('normalny'+licznik);
        przejscie[licznik] = true;
    }
}
const cenyDomow = [0, 10000, 0, 10000, 15000, 0, 15000, 15000, 0, 25000, 25000, 25000, 30000, 0, 30000, 30000, 0, 40000, 0, 40000, 40000, 
    45000, 45000, 45000, 0, 50000, 50000, 0, 50000, 0, 60000, 60000];
function postawHotel(){
    $('#dom'+liczbaOczek[licznik]+'-0').css('opacity', '0'); $('#dom'+liczbaOczek[licznik]+'-2').css('opacity', '0');
    $('#dom'+liczbaOczek[licznik]+'-1').css('opacity', '0'); $('#dom'+liczbaOczek[licznik]+'-3').css('opacity', '0');
    $('#h'+liczbaOczek[licznik]).css('opacity', '1');
    if(ileJestDomow[liczbaOczek[licznik]] === 4){
        ileJestDomow[liczbaOczek[licznik]]++;
        $('#ba'+licznik).html(bilans[licznik] -= cenyDomow[liczbaOczek[licznik]]);
        targ.removeEventListener("click", postawHotel);
    }
    $('#targ').html('');$('#targ').toggleClass('klik');
}
function postawDom(){
    if(czyDomJestZaDarmo === false){
        $('#ba'+licznik).html(bilans[licznik] -= cenyDomow[liczbaOczek[licznik]]);
    }
    $('#dom'+liczbaOczek[licznik]+'-'+ileJestDomow[liczbaOczek[licznik]]).css('opacity', '1');
    ileJestDomow[liczbaOczek[licznik]]++;
    if(ileJestDomow[liczbaOczek[licznik]] === 4){
        targ.removeEventListener("click", postawDom); targ.addEventListener("click", postawHotel);
        $('#targ').html('Czy chcesz kupić hotel?');
    }
    if(ileJestDomow[liczbaOczek[licznik]] > 5){
        $('#targ').html('');
    }
    czyDomJestZaDarmo = false;
}

const cenyDzialek = [0, 5000, 0, 5000, 11000, 0, 15000, 20000, 0, 35000, 35000, 40000, 55000, 0, 55000, 60000, 0, 80000, 0, 80000, 90000, 
115000, 115000, 120000, 0, 145000, 145000, 0, 150000, 0, 170000, 200000];

const koloryDzialek = ['', 'darkred', 'chartreuse', 'fuchsia', 'navy']

function zmianaKoloruDzialki(){
    if(liczbaOczek[licznik] < 8 || (liczbaOczek[licznik] > 16 && liczbaOczek[licznik] < 24)){
        $('#od'+liczbaOczek[licznik]).css('background-color', 'red');
        $('#od'+liczbaOczek[licznik]).css('border-color', 'red');
    }
    else{
        $('#od'+liczbaOczek[licznik]).css('background-color', 'darkkhaki');
        $('#od'+liczbaOczek[licznik]).css('border-color', 'darkkhaki');
    }
    hamza = 0.99;
}

function zajmijDzialke(){
    $('#ba'+licznik).html(bilans[licznik] -= cenyDzialek[liczbaOczek[licznik]]);
    $('#k'+liczbaOczek[licznik]).css('color', koloryDzialek[licznik]);
    czyKupiona[liczbaOczek[licznik]] = true; 
    kupiona[liczbaOczek[licznik]] = licznik; targ.removeEventListener("click", zajmijDzialke);
    if(kupiona[liczbaOczek[licznik]] === licznik){
        $('#targ').html('Czy chcesz kupić domek?');
        targ.addEventListener("click", postawDom);
    }
}

function rzut(){
    const ktoryTekst = Math.floor(Math.random() * 6);
    const wynikRzutu = Math.floor(Math.random() * 10 + 2);
    alert(tekstySzansy2[ktoryTekst]);
    $('#targ').html(wynikRzutu);
    if((poziom[licznik] === 1 && wynikRzutu === 2) || (poziom[licznik] === 2 && wynikRzutu > 7 && wynikRzutu < 13) || (poziom[licznik] === 3 && wynikRzutu > 4 && wynikRzutu < 13)){
        alert("wygrałeś!");
        $('#targ').html(wynikRzutu);
        if(ktoryTekst === 0){
            $('#ba'+licznik).html(bilans[licznik] += 50000);
        }
        else if(ktoryTekst > 0 && sol < 4){
            $('#ba'+licznik).html(bilans[licznik] += 100000);
        }
        else{
            $('#ba'+licznik).html(bilans[licznik] += 150000);
        }
    }
}
 
kosc.addEventListener("click", nadajKlik); $('#kosc').toggleClass('klik');

const ceny1 = [7000, 15000, 30000, 50000, 60000, 80000]; const ceny2 = [15000, 30000, 50000, 80000, 95000, 125000];
const ceny3 = [20000, 50000, 90000, 140000, 165000, 215000]; const ceny4 = [25000, 65000, 110000, 170000, 200000, 270000];
const ceny5 = [35000, 90000, 150000, 230000, 270000, 350000]; const ceny6 = [40000, 100000, 170000, 260000, 305000, 395000];
const ceny7 = [50000, 125000, 210000, 320000, 375000, 485000]; const ceny8 = [65000, 160000, 250000, 370000, 430000, 550000];
$('.p1').toggleClass('normalny1'); $('.p2').toggleClass('normalny2'); $('.p3').toggleClass('normalny3'); $('.p4').toggleClass('normalny4');  $('#ba1').toggleClass('klik'); 

function nadajKlik(){
    if(licznik === 5){
        licznik = 1;
    }
    $('#ba'+licznik).toggleClass('klik');
    licznik++;
    if(licznik === 5){
        licznik = 1;
    }
    $('#ba'+licznik).toggleClass('klik'); 
}
function DajInnemuGraczowi(){
    for(let element of ceny){
        element.removeEventListener("click", DajInnemuGraczowi);
        element.addEventListener("click", tura);
    }
    balansPlusLicznik.innerHTML = bilans[licznik] -= 40000
    let danyBalans = this.toString();
    danyBalans.slice(2,3);
    this.innerHTML = bilans[danyBalans] += 40000;
    if(wiekszaSzansa === true){
        this.innerHTML = bilans[danyBalans] += 10000;
        balansPlusLicznik.innerHTML = bilans[licznik] -= 10000;
    }
    wiekszaSzansa = false;
}
function dom2(){
    domy.removeEventListener("click", dom);
    $('#domy').toggleClass('klik'); 
    $('#domy').toggleClass('dom1'); $('#domy').html('');
    czydomjestzadarmo = true;
} 
function dom(){
    liczbaDomow[licznik]++
    if(liczbadomow[licznik] > 0){
        $('#domy').toggleClass('dom1'); $('#domy').toggleClass('klik');
        domy.addEventListener("click", dom2); $('#domy').html('Czy chcesz wykorzystać darmowy dom?');
    }
}
function danieLubZabranieInnym(ileLacznie, odJednegoGracza){
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
function inicjacjaPozewu(){
    alert("pozew! Pobierz 50k od wybranego gracza")
    for(let element of ceny){
        element.removeEventListener("click", tura);
        element.addEventListener("click", pozew);
    }
}
function pozew(){
    let danyBalans = this.toString();
    balansPlusLicznik.innerHTML = bilans[licznik] += 50000;
    danyBalans.slice(2,3);
    bilans[danyBalans] -= 50000;
     for(let element of ceny){
        element.removeEventListener("click", pozew);
        element.addEventListener("click", tura);
        element.innerHTML = bilans[danyBalans];
    }
}
function mieszkanie(){
    alert("Wynajmujesz swoje mieszkanie przez 3 następne kolejki pobierasz 12k");
    czynsz[licznik] = czynsz[licznik] + 3;
}
function podroz(){
    let czyZnalezione = false;
    alert("Do przodu! Przejdź do najbliższej wolnej nieruchomości.");
    $('#'+pionek[licznik]+liczbaOczek[licznik]).css('opacity', '0');
    $('#od'+liczbaOczek[licznik]).css('opacity', '0.99');
    function zakonczPentle(){
        $('#kosc').html(i); liczbaOczek[licznik] = i;
        $('#od'+liczbaOczek[licznik]).css('opacity', '0.99');
        $('#'+pionek[licznik]+liczbaOczek[licznik]).css('opacity', '1'); czyZnalezione = true;
        zmianaKoloruDzialki();
    }
    for(i = liczbaOczek[licznik]; i < 32; i++){
        if(czyKupiona[i] === false && czyZnalezione === false && i > liczbaOczek[licznik] && i !== 13 && i !== 8 & i !== 16 && i !== 24 && i !== 27 && i !== 29 && i !== 32 && i !== 5){
            zakonczPentle();
        }
    }
    for(i = liczbaOczek[licznik]; i > 0; i--){
        if(czyZnalezione === false && czyKupiona[i] === false && i < liczbaOczek[licznik] && i !== 13 && i !== 8 & i !== 16 && i !== 24 && i !== 27 && i !== 29 && i !== 32 && i !== 5){
            zakonczPentle();
        }
    }
}
function akcja(){
    let wlasciciel = this.value;
    for(let element of poziomeDzialki){
        element.removeEventListener("click", akcja);
        $(element).toggleClass('klik');
    }
    for(let element of pionoweDzialki){
        element.removeEventListener("click", akcja);
        $(element).toggleClass('klik');
    }
    $('#podtran').toggleClass('klik'); $('#podtran').toggleClass('dom1'); podtr.removeEventListener("click", ukradniecie);
    $('#podtran').html('');
    $('#k'+wlasciciel).css('color', koloryDzialek[licznik]); 
    kupiona[wlasciciel] = licznik; czyKupiona[wlasciciel] = true;
}
function ukradniecie(){
    for(let i = 0; i < 31; i++){
        if(kupiona[i] !== licznik){
            $('#d'+i).toggleClass('klik');
        }
    }
    for(let element of poziomeDzialki){
        element.addEventListener("click", akcja);
    }
    for(let element of pionoweDzialki){
        element.addEventListener("click", akcja);
    }
    ileJestPodTranow[licznik]--;
}
function podtran(){
    alert("Podstępna transakcja! Wykradnij nieruchomość od wybranego gracza");
    $('#podtran').toggleClass('klik'); $('#podtran').toggleClass('dom1');
    podtr.addEventListener("click", ukradniecie)
    $('#podtran').html('Czy chcesz ukraść komuś działkę?');
    ileJestPodTranow[licznik] += 1;
}
function zlyrating(){
    alert("Zły rating kredytowy! Nie możesz kupić tej działki");
    czyMoznaKupicDzialke = false;
} 
function przymtran(){
    alert("Przymusowa transakcja! Zamień nieruchomość z wybranym graczem");
    $('#przymtran').toggleClass('klik'); $('#przymtran').toggleClass('dom1');
    przytr.addEventListener("click", wybranie);
    $('#przymtran').html('Czy chcesz zamienić z kimś działkę?');
    ileJestPrzymTranow[licznik] += 1;
}
function wybranie(){
    alert("najpierw wybierz cudzą działkę i wtedy wybierz działkę, którą dajesz w zamian");
    for(let element of ceny){
        element.removeEventListener("click", tura);
    }
    for(let element of pionoweDzialki){
        element.addEventListener("click", wybraniecudzego); 
    }
    for(let element of poziomeDzialki){
        element.addEventListener("click", wybraniecudzego); 
    }
    for(i = 0; i < 31; i++){
        $('#d'+i).toggleClass('klik');
    }
}
let doKogoMaNalezecDzialka;
function wybranieswojego(){
    let doZamiany = this.value;
    if(kupiona[doZamiany] === licznik){
        $('#k'+doZamiany).css("color", koloryDzialek[komuPrzekazacDzialke]);
        dokogoMaNalezecDzialka = kupiona[doZamiany];
        kupiona[doZamiany] = licznik; 
        czyKupiona[doZamiany] = true;
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
    if(kupiona[doZamiany2] !== licznik){
        ileJestPrzymTranow[licznik]--; 
        $('#k'+doZamiany2).css("color", koloryDzialek[doKogoMaNalezecDzialka]);
        kupiona[doZamiany2] = doKogoMaNalezecDzialka;
        czyKupiona[dozamiany2] = true;
        for(let element of pionoweDzialki){
            element.addEventListener("click", wybranieswojego);
            element.removeEventListener("click", wybraniecudzego);
        } 
        for(let element of poziomeDzialki){
            element.addEventListener("click", wybranieswojego);
            element.removeEventListener("click", wybraniecudzego);
        }
        for(let element of ceny){
            element.addEventListener("click", tura);
        }
    }else{
        alert("Wybierz cudzą działkę, a nie swoją!");
    }
}
function zestaw(){
    alert("Tym razem nic się nie dzieje");
}
function limo(){
    alert("Przejedź się limuzyną na start");
    $('#'+pionek[licznik]+liczbaOczek[licznik]).css('opacity', '0');
    liczbaOczek[licznik] = 32;
    $('#kosc').html(liczbaOczek[licznik]);
    zmianaPoziomu();
    if(liczbaOczek[licznik] === 32){
        liczbaOczek[licznik] = 0;
        $('#'+pionek[licznik]+liczbaOczek[licznik]).css('opacity', '1'); $('#targ').html('');
    }
}
function pierwszeLosowanie(){
    let los = Math.floor(Math.random() * 5);
    if(los === 0 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; prezent(); } else{los = Math.floor(Math.random() * 5);}
    if(los === 1 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; dom();} else{los = Math.floor(Math.random() * 5);}
    if(los === 2 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; dom(); } else{los = Math.floor(Math.random() * 5);}
    if(los === 3 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; gest();} else{los = Math.floor(Math.random() * 5);}
    if(los === 4 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; zlyrating();} else{los = Math.floor(Math.random() * 5);}
}
function drugieLosowanie(){
    let los = Math.floor(Math.random() * 6);
    if(los === 0 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; dom();} else{los = Math.floor(Math.random() * 6);}
    if(los === 1 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; podtran(); } else{los = Math.floor(Math.random() * 6);}
    if(los === 2 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; zestaw();} else{los = Math.floor(Math.random() * 6);}
    if(los === 3 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; podroz(); } else{los = Math.floor(Math.random() * 6);}
    if(los === 4 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; mieszkanie();} else{los = Math.floor(Math.random() * 6);}
    if(los === 5 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; dom(); } else{los = Math.floor(Math.random() * 6);}
}
function trzecieLosowanie(){
    let los = Math.floor(Math.random() * 6);
    if(los === 0 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; dom();} else{los = Math.floor(Math.random() * 6);}
    if(los === 1 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; pozew();} else{los = Math.floor(Math.random() * 6);}
    if(los === 2 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; udzialy(); } else{los = Math.floor(Math.random() * 6);}
    if(los === 3 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; limo();} else{los = Math.floor(Math.random() * 6);}
    if(los === 4 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; mieszkanie(); } else{los = Math.floor(Math.random() * 6);}
    if(los === 5 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; przymtran();} else{los = Math.floor(Math.random() * 6);}
}
function czwarteLosowanie(){
    let los = Math.floor(Math.random() * 5);
    if(los === 0 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; gest();} else{los = Math.floor(Math.random() * 5);}
    if(los === 1 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; gest();} else{los = Math.floor(Math.random() * 5);}
    if(los === 2 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; przymtran(); } else{los = Math.floor(Math.random() * 5);}
    if(los === 3 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; podroz();} else{los = Math.floor(Math.random() * 5);}
    if(los === 4 && czyJuzbylo[los] === false){ czyJuzbylo[los] = true; limo(); } else{los = Math.floor(Math.random() * 5);}
}
function coZrobicZPolem(){
    if(kupiona[liczbaOczek[licznik]] === 0 && czyKupiona[liczbaOczek[licznik]] === false && czyMoznaKupicDzialke === true){
        $('#targ').html('Czy chcesz kupić tą działke?'); targ.addEventListener("click", zajmijDzialke);
        $('#targ').toggleClass('klik'); targ.removeEventListener("click", postawDom);
    }
    else if(kupiona[liczbaOczek[licznik]] === licznik){
        $('#targ').html('Czy chcesz kupić domek?'); targ.addEventListener("click", postawDom); targ.removeEventListener("click", zajmijDzialke);
    }
}
function nagroda(){
    let los = Math.floor(Math.random()* 10); 
    balansPlusLicznik.innerHTML = bilans[licznik] += nagrody[wydaneNagrody] * poziom[licznik];
    alert(`${tekstyNagrody[los]} pobierz: ${nagrody[wydaneNagrody]* poziom[licznik]}`); wydaneNagrody++;
    $('#targ').html('');
}
function szansa(){
    let los = 3;
    if(innyGracz1 === 5){innyGracz1 = 1;}; if(innyGracz2 === 5){innyGracz2 = 1;} if(i === innyGracz2){innyGracz2 = 2;} 
    if(innyGracz3 === 5){innyGracz3 = 1;} if(innyGracz3 === 6){innyGracz3 = 2;} if(innyGracz3 === 7){innyGracz3 = 3;}
    if(los === 0){
        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] + szansy1[poziom[1]] + szansy1[poziom[2]] + szansy1[poziom[3]] + szansy1[poziom[4]] - szansy1[poziom[licznik]];
        document.getElementById("ba"+innyGracz1).innerHTML = bilans[innyGracz1] -= szansy1[poziom[l]];                   
        document.getElementById("ba"+innyGracz2).innerHTML = bilans[innyGracz2] -= szansy1[poziom[i]];                   
        document.getElementById("ba"+innyGracz3).innerHTML = bilans[innyGracz3] -= szansy1[poziom[c]];
        alert(tekstySzansy1[Math.floor(Math.random())]+szansy1[wydaneszanse]* poziom[licznik]);                                     
    }
    else if(los === 1){
        balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - szansy3[poziom[licznik]] * 3;
        document.getElementById("ba"+innyGracz1).innerHTML = bilans[innyGracz1] += szansy3[poziom[l]];                   
        document.getElementById("ba"+innyGracz2).innerHTML = bilans[innyGracz2] += szansy3[poziom[i]];                   
        document.getElementById("ba"+innyGracz3).innerHTML = bilans[innyGracz3] += szansy3[poziom[c]];
        alert(tekstySzansy3[Math.floor(Math.random())]+szansy3[wydaneszanse]* poziom[licznik]);
    }
    else if(los === 2){
        $('#targ').html('>Rzuć kostką i sprawdź czy wygrasz');
        targ.addEventListener("click", rzut); 
    }
    else{
        let ktoryTekst = Math.floor(Math.random() * 3);
        alert(tekstySzansy4[ktoryTekst]);
        if(ktoryTekst === 0){
            $('#'+pionek[licznik]+liczbaOczek[licznik]).css('opacity', '0');
            liczbaOczek[licznik] = 8;
            ('#'+pionek[licznik]+liczbaOczek[licznik]).css('opacity', '1');
        }
        else if(ktoryTekst === 1 || ktoryTekst === 2){
            for(let element of ceny){
                element.removeEventListener("click", tura);
                element.addEventListener("click", inicjacjaPozewu);
            }
            if(ktoryTekst === 2){
                wiekszaSzansa = true;
            }
        }
        else{
            if(poziom[licznik] > 1){
                poziom[licznik] -= 1;
            }
        }
    }
}
function tura(){
    let rzutKostkami = Math.floor(Math.random() * 10 + 2)
    if(ileJestPodTranow[licznik] === 0){
        $('#podtran').removeClass('klik'); $('#podtran').removeClass('dom1');
        podtr.removeEventListener("click", ukradniecie);
        $('#podtran').html('');
    }
    if(ileJestPrzymTranow[licznik] > 0){
        $('#przymtran').addClass('klik'); $('#przymtran').addClass('dom1');
        przytr.addEventListener("click", wybranie);
        $('#przymtran').html('Czy chcesz zamienić z kimś działkę?');
    }else{
        $('#przymtran').removeClass('klik'); $('#przymtran').removeClass('dom1');
        przytr.removeEventListener("click", wybranie);
        $('#przymtran').html('');
    }
    if(czynsz[licznik] > 0){
        balansPlusLicznik.innerHTML = bilans[licznik] += 12000;
        czynsz[licznik]--;
    }
    czyMoznaKupicDzialke = true; 
    let limuzyna = false;
    $('#'+pionek[licznik]+liczbaOczek[licznik]).css('opacity', '0');
    kosc.innerHTML = liczbaOczek[licznik] += rzutKostkami;
    if(liczbaOczek[licznik] === 32){
        $('#'+pionek[licznik]+liczbaOczek[licznik]).css('opacity', '1');
        liczbaOczek[licznik] = 0; $('#targ').html('');
    }
    zmianaPoziomu();
    $('#'+pionek[licznik]+liczbaOczek[licznik]).css('opacity', '1');
    if(liczbaOczek[licznik] === 24){
        $('#targ').html('');
        $('#'+pionek[licznik]+liczbaOczek[licznik]).css('opacity', '0');
        liczbaOczek[licznik] = 8;
        $('#'+pionek[licznik]+liczbaOczek[licznik]).css('opacity', '1');
        czyJestWWiezieniu[licznik] = 1;
        kosc = liczbaOczek[licznik];
    }
    $('#targ').html('')
    if(liczbaOczek[licznik] === 2 || liczbaOczek[licznik] === 13 || liczbaOczek[licznik] === 27){
        nagroda();
    }
    else if(liczbaOczek[licznik] === 5 || liczbaOczek[licznik] === 29 || liczbaOczek[licznik] === 18){
        szansa();
    }
    if(liczbaOczek[licznik] === 8 || liczbaOczek[licznik] === 16){
        $('#targ').html('');           
    }
    else{
        if(liczbaDomow[licznik] > 0){
           $('#domy').toggleClass('dom1'); $('#domy').toggleClass('klik');
           domy.addEventListener("click", dom2);
           $('#domy').html('Czy chcesz wykorzystać darmowy dom?');
        }
        let hamza = $('#od'+liczbaOczek[licznik]).css('opacity');
        zmianaKoloruDzialki();
        coZrobicZPolem();
        if(liczbaOczek[licznik] < 8){
            if(hamza !== 0.99){
                pierwszeLosowanie();
            }
            if(liczbaOczek[licznik] < 4){
                if(czyKupiona[liczbaOczek[licznik]] === true && kupiona[liczbaOczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny1[ileJestDomow[liczbaOczek[licznik]]];
                        
                    balansWlascicielaDzialki.innerHTML = bilans[kupiona[liczbaOczek[licznik]]] += ceny1[ileJestDomow[liczbaOczek[licznik]]];
                    $('#targ').html('');
                }
            }
            else if(liczbaOczek[licznik] > 3){
                if(czyKupiona[liczbaOczek[licznik]] === true && kupiona[liczbaOczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny2[ileJestDomow[liczbaOczek[licznik]]];
                        
                    balansWlascicielaDzialki.innerHTML = bilans[kupiona[liczbaOczek[licznik]]] += ceny2[ileJestDomow[liczbaOczek[licznik]]];
                    $('#targ').html('');
                }
            }
            if(limuzyna === true){
                limo(); limuzyna = false;
            }
        }
        else if(liczbaOczek[licznik] > 8 && liczbaOczek[licznik] < 16){
            if(hamza !== 0.99){
                drugieLosowanie()
            }
            if(liczbaOczek[licznik] < 12){
                if(czyKupiona[liczbaOczek[licznik]] === true && kupiona[liczbaOczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny3[ileJestDomow[liczbaOczek[licznik]]];

                    balansWlascicielaDzialki.innerHTML = bilans[kupiona[liczbaOczek[licznik]]] += ceny3[ileJestDomow[liczbaOczek[licznik]]];
                    $('#targ').html('');
                }
            }
            else if(liczbaOczek[licznik] > 11){
                if(czyKupiona[liczbaOczek[licznik]] === true && kupiona[liczbaOczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny4[ileJestDomow[liczbaOczek[licznik]]];  

                    balansWlascicielaDzialki.innerHTML = bilans[kupiona[liczbaOczek[licznik]]] += ceny4[ileJestDomow[liczbaOczek[licznik]]];
                    $('#targ').html('');
                }
            }
        }
        else if(liczbaOczek[licznik] > 16 && liczbaOczek[licznik] < 24){
            if(hamza !== 0.99){
                trzecieLosowanie();
            }
            if(liczbaOczek[licznik] < 21){
                if(czyKupiona[liczbaOczek[licznik]] === true && kupiona[liczbaOczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny5[ileJestDomow[liczbaOczek[licznik]]];

                    balansWlascicielaDzialki.innerHTML = bilans[kupiona[liczbaOczek[licznik]]] += ceny5[ileJestDomow[liczbaOczek[licznik]]];
                    $('#targ').html('')
                }
            }
            else if(liczbaOczek[licznik] > 20){
                if(czyKupiona[liczbaOczek[licznik]] === true && kupiona[liczbaOczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny6[ileJestDomow[liczbaOczek[licznik]]]; 

                    balansWlascicielaDzialki.innerHTML = bilans[kupiona[liczbaOczek[licznik]]] += ceny6[ileJestDomow[liczbaOczek[licznik]]];
                    $('#targ').html('')
                }
            }
        }
        else if(liczbaOczek[licznik] > 24){ 
            if(hamza !== 0.99){
                czwarteLosowanie();
            }
            if(liczbaOczek[licznik] < 29){
                if(czyKupiona[liczbaOczek[licznik]] === true && kupiona[liczbaOczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny7[ileJestDomow[liczbaOczek[licznik]]];

                    balansWlascicielaDzialki.innerHTML = bilans[kupiona[liczbaOczek[licznik]]] += ceny7[ileJestDomow[liczbaOczek[licznik]]];
                    $('#targ').html('')
                }
            }
            else if(liczbaOczek[licznik] > 28){
                if(czyKupiona[liczbaOczek[licznik]] === true && kupiona[liczbaOczek[licznik]] !== licznik){
                    balansPlusLicznik.innerHTML = bilans[licznik] -= ceny8[ileJestDomow[liczbaOczek[licznik]]];

                    balansWlascicielaDzialki.innerHTML = bilans[kupiona[liczbaOczek[licznik]]] += ceny8[ileJestDomow[liczbaOczek[licznik]]];
                    $('#targ').html('')
                }
            }
        }
        balans1.innerHTML = bilans[1]; balans2.innerHTML = bilans[2]; balans3.innerHTML = bilans[3]; balans4.innerHTML = bilans[4];
    }
}
balans1.innerHTML = bilans[1]; balans2.innerHTML = bilans[2]; balans3.innerHTML = bilans[3]; balans4.innerHTML = bilans[4];
if(bilans[0] || bilans[1] || bilans[2] || bilans[3] || bilans[4]  === 1_000_000){
    for(let element of ceny){
        element.removeEventListener("click", tura);
    }
    $('#podtran').removeClass('dom1');
    $('#przymtran').removeClass('dom1');
    $('#domy').removeClass('dom1');
    alert('Wygrana, jeden z graczy został milionerem');
}
