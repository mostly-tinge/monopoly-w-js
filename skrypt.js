//licznik jest po to, aby program wiedział czyja jest tura
alert("Żeby ruszyć pionkami treba kliknąć balans danego pionka.");
alert("A no i jeżeli chcesz przejść do następnego musisz kliknąć pole pokazujące oczka(nie pytaj czemu ono istnieje ani czemu jest na nim napisane klik)");
let bilans = ['', 372_000, 372_000, 372_000, 372_000], komuPrzekazacDzialke = 0;
let licznik = 1;
// tu są zdefiniowane wszystkie selektory
const balans1 = document.getElementById('ba1');
const balans2 = document.getElementById('ba2');
const balans3 = document.getElementById('ba3');
const balans4 = document.getElementById('ba4');
let balanseGraczy = document.querySelectorAll(".balanse-graczy"), podtr = document.querySelector("#podtran");
const targ = document.querySelector("#targ");
const balansPlusLicznik = document.getElementById(`ba${licznik}`); const kosc = document.querySelector("#kosc"), domy = document.querySelector("#domy");
let poziomeDzialki = document.querySelectorAll('dzialka2'), pionoweDzialki = document.querySelectorAll('bocznadzialka2');

const przytr = document.getElementById("przymtran");
balanseGraczy.forEach(element => element.addEventListener("click", tura));
let wiekszaSzansa = false, czynsz = ['', 0, 0, 0, 0];

const tekstySzansy1 = ["przeprowadzasz świetną transakcję biznesową! od wszystkich pozostałych graczy odtrzymujesz", 
"Właśnie obchodzisz urodziny! od wszystkich pozostałych graczy otrzymujesz"];

const tekstySzansy2 = ["Weź udział w wyścigu motorówek! aby wygrać 50k wyrzuć","Wyścig na prywatnym torze! aby wygrać 100k, wyrzuć", 
"Rozbij kasyno! aby wygrać 100k, wyrzuć", "Zainwestuj w giełdę! aby zarobić 100k wyrzuć", "Załóż własną firmę! aby zarobić 150k wyrzuć",
"Weź udział w wyścigu balonów! aby wygrać 150k wyrzuć"];

const tekstySzansy3 = ["Zabierz przyjaciół w luksusową podróż! płacisz wszystkim pozostałym graczom",
"Zabierz przyjaciół na wystawny obiad! płacisz wszystkim pozostałym graczom"];

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

let czyJuzByloOdkryte = [false, false, false, false, false, false, false, false, false, false, 
    false, false, false, false, false, false, false, false, false, false, false, false];

let liczbaOczek = ['', 0, 0, 0, 0], poziom = ['', 1, 1, 1, 1], pionek = ['', "a", "b", "c", "e"];

$('#a0').css('opacity', '1'); $('#b0').css('opacity', '1'); $('#c0').css('opacity', '1'); $('#e0').css('opacity', '1');

let liczbaDarmowychDomow = ['', 0, 0, 0, 0], czyDomJestZaDarmo = false, liczbaOdmow = ['', 0, 0, 0, 0];

let ileJestDomowNaDzialce = [0, 0, 0, 0, 0, 0, 0, 0 , 0, /*8*/0, 0, 0, 0, 0, 0, 0, 0, /*16*/0, 0, 0, 0, 0, 0, 0, 0, /*24*/0, 0, 0, 0, 0, 0, 0,/*31*/];

let ileJestPodTranow = ['', 0, 0, 0, 0], ileJestPrzymTranow = ['', 0, 0, 0, 0];

let czyKupiona = [false, false, false, false, false, false, false, false, false,/*8*/false, false, false, false, false, false, false, false,
/*16*/false, false, false, false, false, false, false, false,/*24*/false, false, false, false, false, false, false,/*31*/];

let czyJestWWiezieniu = ['', false, false, false, false], przejscie = ['', false, false, false, false];

let kupionaPrzezKogo = [0, 0, 0, 0, 0, 0, 0, 0, 0,/*8*/0, 0, 0, 0, 0, 0, 0, 0,/*16*/0, 0, 0, 0, 0, 0, 0, 0,/*24*/0, 0, 0, 0 , 0, 0,/*31*/];

$('.p1').toggleClass('normalny1'); $('.p2').toggleClass('normalny2'); $('.p3').toggleClass('normalny3'); $('.p4').toggleClass('normalny4');  $('#ba1').toggleClass('klik'); 

const postep = document.getElementById('postep'); $
(postep).addClass('dom1'); $(postep).addClass('klik'); 
$(postep).html('Czy chcesz zapisać postęp?'); postep.addEventListener("click", zapiszPostep);

function zapiszPostep(){
    //każdy zapissny przedmiot jest nazwany tak samo jak jego odpowiednik, więc upchnąłem kod
    localStorage.setItem('liczbaDarmowychDomow', liczbaDarmowychDomow); localStorage.setItem('balanse', bilans); localStorage.setItem('komuPrzekazacDzialke', komuPrzekazacDzialke);
    localStorage.setItem('licznik', licznik); localStorage.setItem('wiekszaSzansa', wiekszaSzansa);
    localStorage.setItem('czynsz', czynsz); localStorage.setItem('wydaneNagrody', wydaneNagrody);
    localStorage.setItem('liczbaOczek', liczbaOczek); localStorage.setItem('poziom', poziom);
    localStorage.setItem('pionek', pionek); localStorage.setItem('czyDomJestZaDarmo', czyDomJestZaDarmo);
    localStorage.setItem('liczbaOdmow', liczbaOdmow); localStorage.setItem('ileJestDomowNaDzialce', ileJestDomowNaDzialce);
    localStorage.setItem('czyKupiona', czyKupiona); localStorage.setItem('kupionaPrzezKogo', kupionaPrzezKogo);
    localStorage.setItem('czyJestWWiezieniu', czyJestWWiezieniu); localStorage.setItem('przejscie', przejscie);
    localStorage.setItem('ileJestPodTranow', ileJestPodTranow); localStorage.setItem('ileJestPrzymTranow', ileJestPrzymTranow);
    alert("Postęp zapisany");
}
function usunPostep(){
    localStorage.clear();
    alert("Postęp usunięty");
}
function przywrocPostep(){
    localStorage.getItem('liczbaDarmowychDomow'); localStorage.getItem('balanse');
    localStorage.getItem('licznik'); localStorage.getItem('wiekszaSzansa');
    localStorage.getItem('czynsz');
    localStorage.getItem('wydaneNagrody'); localStorage.getItem('liczbOczek');
    localStorage.getItem('poziom'); localStorage.getItem('pionek');
    localStorage.getItem('czyDomJestZaDarmo'); localStorage.getItem('liczbaOdmow');
    localStorage.getItem('ileJestDomowNaDzialce'); localStorage.getItem('czyKupiona');
    localStorage.getItem('kupionaPrzezKogo'); localStorage.getItem('czyJestWWiezieniu');
    localStorage.getItem('przejscie'); localStorage.getItem('ileJestPodTranow');
    localStorage.getItem('ileJestPrzymTranow'); localStorage.getItem('ileJestPodTranow');
    alert("Przywrócono postęp");
}
function zmianaPoziomu(){
    if(poziom[licznik] === 3 && liczbaOczek[licznik] > 31){
        liczbaOczek[licznik] -= 32;
        balansPlusLicznik.innerHTML = bilans[licznik] += 250000;
    }
    else if(poziom[licznik] === 2 && przejscie[licznik] === true && liczbaOczek[licznik] > 31){
        $(`.p${licznik}`).removeClass('srebrny'); 
        $(`.p${licznik}`).addClass('zloty');
        poziom[licznik] = 3;
        liczbaOczek[licznik] -= 32;
    }
    else if(poziom[licznik] === 1 && liczbaOczek[licznik] > 31 && przejscie[licznik] === false){
        liczbaOczek[licznik] -= 32;
        poziom[licznik] = 2;
        $(`.p${licznik}`).addClass('srebrny');
        $(`.p${licznik}`).removeClass(`normalny${licznik}`);
        przejscie[licznik] = true;
    }
}
const cenyDomow = [0, 10_000, 0, 1000, 15000, 0, 15000, 15000, 0, 25000, 25000, 25000, 30000, 0, 30000, 30000, 0, 40000, 0, 40000, 40000, 
    45000, 45000, 45000, 0, 50000, 50000, 0, 50000, 0, 60000, 60000];
function postawHotel(){
    $(`#dom${liczbaOczek[licznik]}-0`).css('opacity', '0'); $(`#dom${liczbaOczek[licznik]}-2`).css('opacity', '0');
    $(`#dom${liczbaOczek[licznik]}-1`).css('opacity', '0'); $(`#dom${liczbaOczek[licznik]}-3`).css('opacity', '0');
    $(`#h${liczbaOczek[licznik]}`).css('opacity', '1');
    ileJestDomowNaDzialce[liczbaOczek[licznik]]++;
    $(balansPlusLicznik).html(bilans[licznik] -= cenyDomow[liczbaOczek[licznik]]);
    targ.removeEventListener("click", postawHotel);
    $('#targ').html('');
    $('#targ').toggleClass('klik');
}
function postawDom(){
    if(czyDomJestZaDarmo === false){
        $(balansPlusLicznik).html(bilans[licznik] -= cenyDomow[liczbaOczek[licznik]]);
    }
    $(`#dom${liczbaOczek[licznik]}-${ileJestDomowNaDzialce[liczbaOczek[licznik]]}`).css('opacity', '1');
    ileJestDomowNaDzialce[liczbaOczek[licznik]]++;
    if(ileJestDomowNaDzialce[liczbaOczek[licznik]] === 4){
        targ.removeEventListener("click", postawDom); 
        targ.addEventListener("click", postawHotel);
        $('#targ').html('Czy chcesz kupić hotel?');
    }
    if(ileJestDomowNaDzialce[liczbaOczek[licznik]] > 5){
        $('#targ').html('');
    }
    czyDomJestZaDarmo = false;
}

const cenyDzialek = [0, 5_000, 0, 5_000, 11_000, 0, 15_000, 20_000, 0, 35_000, 35_000, 40_000, 55_000, 0, 55_000, 60_000, 0, 80_000, 0, 80_000, 90_000, 
115_000, 115_000, 120_000, 0, 145_000, 145_000, 0, 150_000, 0, 170_000, 200_000];

function zmianaKoloruOdkrywki(){
    czyJuzByloOdkryte[liczbaOczek[licznik]] = true;
    if(liczbaOczek[licznik] < 8 || (liczbaOczek[licznik] > 16 && liczbaOczek[licznik] < 24)){
        $(`#od${liczbaOczek[licznik]}`).css('background-color', 'red');
        $(`#od${liczbaOczek[licznik]}`).css('border-color', 'red');
    }else{
        $(`#od${liczbaOczek[licznik]}`).css('background-color', 'darkkhaki');
        $(`#od${liczbaOczek[licznik]}`).css('border-color', 'darkkhaki');
    }
}

function zajmijDzialke(){
    const koloryDzialek = ['', 'darkred', 'chartreuse', 'fuchsia', 'navy'];
    $(balansPlusLicznik).html(bilans[licznik] -= cenyDzialek[liczbaOczek[licznik]]);
    $(`#k${liczbaOczek[licznik]}`).css('color', koloryDzialek[licznik]);
    czyKupiona[liczbaOczek[licznik]] = true; 
    kupionaPrzezKogo[liczbaOczek[licznik]] = licznik; 
    targ.removeEventListener("click", zajmijDzialke);
    if(kupionaPrzezKogo[liczbaOczek[licznik]] === licznik){
        $('#targ').html('Czy chcesz kupić domek?');
        targ.addEventListener("click", postawDom);
    }
}
 
function nadajKlikBilansom(){
    //licznik++;
    if(licznik === 5){
        licznik = 1;
    }
    //$('#ba'+licznik).toggleClass('klik');
}
function DajInnemuGraczowi(){
    balanseGraczy.forEach(element => {
        element.removeEventListener("click", DajInnemuGraczowi);
        element.addEventListener("click", tura);
    })
    balansPlusLicznik.innerHTML = bilans[licznik] -= 40000;
    let danyBilans = this.id;
    const numerBilansu = danyBilans.slice(2, 3);
    this.innerHTML = bilans[numerBilansu] += 40000;
    if(wiekszaSzansa){
        this.innerHTML = bilans[numerBilansu] += 10000;
        balansPlusLicznik.innerHTML = bilans[licznik] -= 10000;
    }
    wiekszaSzansa = false;
}
function dom2(){
    domy.removeEventListener("click", dom);
    $('#domy').removeClass('klik'); 
    $('#domy').removeClass('dom1'); 
    $('#domy').html('');
    czyDomJestZaDarmo = true;
    liczbaDarmowychDomow[licznik]--;
} 
function dom(){
    alert('Dostajesz darmowy dom do wykorzystania');
    liczbaDarmowychDomow[licznik]++;
    if(liczbaDarmowychDomow[licznik] > 0){
        $('#domy').addClass('dom1'); 
        $('#domy').addClass('klik');
        domy.addEventListener("click", dom2); 
        $('#domy').html('Czy chcesz wykorzystać darmowy dom?');
    }
}
function danieLubZabranieInnym(ileLacznie, odJednegoGracza){
    let innyGracz1 = licznik + 1, innyGracz2 = licznik + 2, innyGracz3 = licznik + 3;
    if(innyGracz1 === 5){innyGracz1 = 1;} if(innyGracz2 === 5){innyGracz2 = 1;} if(innyGracz2 === 6){innyGracz2 = 2;} if(innyGracz3 === 5){innyGracz3 = 1;} 
    if(innyGracz3 === 6){innyGracz3 = 2;} if(innyGracz3 === 7){innyGracz3 = 3;}
    balansPlusLicznik.innerHTML = bilans[licznik] -=  ileLacznie;
    document.getElementById(`ba${innyGracz1}`).innerHTML = bilans[innyGracz1] += odJednegoGracza;
    document.getElementById(`ba${innyGracz2}`).innerHTML = bilans[innyGracz2] += odJednegoGracza;
    document.getElementById(`ba${innyGracz3}`).innerHTML = bilans[innyGracz3] += odJednegoGracza;
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
    alert("pozew! Pobierz 50k od wybranego gracza");
    balanseGraczy.forEach(element => {
        element.removeEventListener("click", tura);
        element.addEventListener("click", pozew);
    })
}
function pozew(){
    balansPlusLicznik.innerHTML = bilans[licznik] += 50_000;
    const numerBilansu = this.id.slice(2, 3);
    this.innerHTML = bilans[numerBilansu] -= 50_000;
    balanseGraczy.forEach(element => {
        element.addEventListener("click", tura);
        element.removeEventListener("click", pozew);
    })
}
function mieszkanie(){
    alert("Wynajmujesz swoje mieszkanie przez 3 następne kolejki pobierasz 12k");
    czynsz[licznik] += 3;
}
function podroz(){
    let czyZnalezione = false;
    alert("Do przodu! Przejdź do najbliższej wolnej nieruchomości.");
    $(`#${pionek[licznik]+liczbaOczek[licznik]}`).css('opacity', '0');
    function zakonczPentle(i){ 
        liczbaOczek[licznik] = i;
        zmianaKoloruOdkrywki();
        coZrobicZPolem();
        losowanie();
        $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '1'); 
        czyZnalezione = true;
    }
    for(let i = liczbaOczek[licznik]; i < 32; i++){
        if(czyKupiona[i] === false && czyZnalezione === false && i > liczbaOczek[licznik] && i !== 13 && i !== 8 & i !== 16 && i !== 24 && i !== 27 && i !== 29 && i !== 32 && i !== 5 && i !== 2){
            zakonczPentle(i);
        }
    }
    for(let i = liczbaOczek[licznik]; i > 0; i--){
        if(czyZnalezione === false && czyKupiona[i] === false && i < liczbaOczek[licznik] && i !== 13 && i !== 8 & i !== 16 && i !== 24 && i !== 27 && i !== 29 && i !== 32 && i !== 5 && i !== 2){
            zakonczPentle(i);
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
    if(ileJestPodTranow[licznik] === 0){
        $('#podtran').removeClass('klik'); 
        $('#podtran').removeClass('dom1');
        $('#podtran').html('');
        podtr.removeEventListener("click", ukradniecie);
    } 
    $(`#k${wlasciciel}`).css('color', koloryDzialek[licznik]); 
    kupionaPrzezKogo[wlasciciel] = licznik; 
    czyKupiona[wlasciciel] = true;
}
function ukradniecie(){
    balansPlusLicznik.forEach(ele => ele.removeEventListener('click', tura));
    for(let i = 0; i < 31; i++){
        if(kupionaPrzezKogo[i] !== licznik){
            $(`#d${i}`).addClass('klik');
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
    alert("Podstępna transakcja! Wykradnij nieruchomość od wybranego gracza, możesz ją wykorzystać w każdym momencie");
    $('#podtran').addClass('klik'); 
    $('#podtran').addClass('dom1');
    podtr.addEventListener("click", ukradniecie)
    $('#podtran').html('Czy chcesz ukraść komuś działkę?');
    ileJestPodTranow[licznik] += 1;
}
function zlyrating(){
    alert("Zły rating kredytowy! Nie możesz kupić tej działki");
    $('#targ').html('');
    targ.removeEventListener('click', zajmijDzialke);
} 
function przymtran(){
    alert("Przymusowa transakcja! Zamień nieruchomość z wybranym graczem, możesz ją wykorzystać w każdym momencie");
    $('#przymtran').toggleClass('klik'); $('#przymtran').toggleClass('dom1');
    przytr.addEventListener("click", wybranie);
    $('#przymtran').html('Czy chcesz zamienić z kimś działkę?');
    ileJestPrzymTranow[licznik] += 1;
}
function wybranie(){
    alert("najpierw wybierz cudzą działkę i wtedy wybierz działkę, którą dajesz w zamian");
    balanseGraczy.forEach(element => element.removeEventListener("click", tura));
    for(let element of pionoweDzialki){
        element.addEventListener("click", wybraniecudzego); 
    }
    for(let element of poziomeDzialki){
        element.addEventListener("click", wybraniecudzego); 
    }
    for(i = 0; i < 31; i++){
        $(`#d${i}`).toggleClass('klik');
    }
}
let doKogoMaNalezecDzialka;
function wybranieswojego(){
    let doZamiany = this.value;
    if(kupionaPrzezKogo[doZamiany] === licznik){
        $(`#k${doZamiany}`).css("color", koloryDzialek[komuPrzekazacDzialke]);
        dokogoMaNalezecDzialka = kupionaPrzezKogo[doZamiany];
        kupionaPrzezKogo[doZamiany] = licznik; 
        czyKupiona[doZamiany] = true;
        $('#przymtran').removeClass('klik'); 
        $('#przymtran').removeClass('dom1');
        przytr.removeEventListener("click", wybranieswojego); 
        $('#przymtran').html('');
        for(let element of pionoweDzialki){
            element.removeEventListener("click", wybranieswojego); 
        }
        for(let element of poziomeDzialki){
            element.removeEventListener("click", wybranieswojego);
        }
        kupionaPrzezKogo[dozamiany] = komuPrzekazacDzialke;
        }else{
            alert("Wybierz swoją działke, a nie cudzą, albo niczyją");
        }
}
function wybraniecudzego(){
    let doZamiany2 = this.value;
    if(kupionaPrzezKogo[doZamiany2] === licznik) return alert("Wybierz cudzą działkę, a nie swoją!");
    ileJestPrzymTranow[licznik]--; 
    $(`#k${doZamiany2}`).css("color", koloryDzialek[doKogoMaNalezecDzialka]);
    kupionaPrzezKogo[doZamiany2] = doKogoMaNalezecDzialka;
    czyKupiona[doZamiany2] = true;
    for(let element of pionoweDzialki){
        element.addEventListener("click", wybranieswojego);
        element.removeEventListener("click", wybraniecudzego);
    } 
    for(let element of poziomeDzialki){
        element.addEventListener("click", wybranieswojego);
        element.removeEventListener("click", wybraniecudzego);
    }
    balanseGraczy.forEach(element => element.addEventListener("click", tura))
}

const zestaw = () => alert("Tym razem nic się nie dzieje");

function limo(){
    alert("Przejedź się limuzyną na start");
    $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '0');
    console.log($(`#od${liczbaOczek[licznik]}`).css('opacity'));
    liczbaOczek[licznik] = 32;
    zmianaPoziomu();
    liczbaOczek[licznik] = 0;
    $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '1'); 
    $('#targ').html('');
}
let coSieKryjePodOdkrywkami = [limo, gest, gest, gest, dom, dom, dom
    //prezent, dom, dom, gest, zlyrating, dom, podtran, zestaw, podroz, mieszkanie, dom, dom, inicjacjaPozewu, udzialy, limo, mieszkanie, przymtran,gest, gest, przymtran, podroz, limo
];
coSieKryjePodOdkrywkami.sort(() => Math.random() - 0.5);
function losowanie(){
    const los = Math.floor(Math.random() * coSieKryjePodOdkrywkami.length);
    coSieKryjePodOdkrywkami[los]();
    coSieKryjePodOdkrywkami.splice(los, 1);
}
function coZrobicZPolem(){
    if(kupionaPrzezKogo[liczbaOczek[licznik]] === 0 && czyKupiona[liczbaOczek[licznik]] === false){
        $('#targ').html('Czy chcesz kupić tą działke?'); 
        targ.addEventListener("click", zajmijDzialke);
        $('#targ').removeClass('klik'); 
        targ.removeEventListener("click", postawDom);
    }
    else if(kupionaPrzezKogo[liczbaOczek[licznik]] === licznik){
        $('#targ').html('Czy chcesz kupić domek?'); 
        targ.addEventListener("click", postawDom); 
        targ.removeEventListener("click", zajmijDzialke);
    }
}
function nagroda(){
    const nagrody = [25_000, 10_000, 10_000, 25_000, 10_000, 10_000, 25_000, 50_000, 50_000, 50_000];
    const los = Math.floor(Math.random()* 10); 
    balansPlusLicznik.innerHTML = bilans[licznik] += nagrody[wydaneNagrody] * poziom[licznik];
    alert(`${tekstyNagrody[los]} pobierz: ${nagrody[wydaneNagrody]* poziom[licznik]}`); 
    if(los === 5){
        $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '0');
        liczbaOczek[licznik] += 5;
        $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '1');
        zmianaKoloruOdkrywki();
        losowanie();
        kosc.innerHTML = liczbaOczek[licznik]
    }
    wydaneNagrody++;
    $('#targ').html('');
}
function szansa(){
    const szansy1 = ['', 10_000, 30_000, 50_000], szansy3 = ['', 5000, 15_000, 25_000];
    let innyGracz1 = licznik + 1, innyGracz2 = licznik + 2, innyGracz3 = licznik + 3;
    const los = 3;
    function rzut(){
        const ktoryTekst = Math.floor(Math.random() * 6);
        const wynikRzutu = Math.floor(Math.random() * 10 + 2);
        alert(tekstySzansy2[ktoryTekst]);
        $('#targ').html(wynikRzutu);
        if((poziom[licznik] === 1 && wynikRzutu === 2) || (poziom[licznik] === 2 && wynikRzutu > 7 && wynikRzutu < 13) || (poziom[licznik] === 3 && wynikRzutu > 4 && wynikRzutu < 13)){
            alert("wygrałeś!");
            $('#targ').html(wynikRzutu);
            if(ktoryTekst === 0){
                $(balansPlusLicznik).html(bilans[licznik] += 50000);
            }
            else if(ktoryTekst > 0 && los < 4){
                $(balansPlusLicznik).html(bilans[licznik] += 100000);
            }else{
                $(balansPlusLicznik).html(bilans[licznik] += 150000);
            }
            balanseGraczy.forEach(ele => ele.addEventListener('click', tura));
        }
    }
    if(innyGracz1 === 5){innyGracz1 = 1;}; if(innyGracz2 === 5){innyGracz2 = 1;} if(innyGracz2 = 6){innyGracz2 = 2;} 
    if(innyGracz3 === 5){innyGracz3 = 1;} if(innyGracz3 === 6){innyGracz3 = 2;} if(innyGracz3 === 7){innyGracz3 = 3;}
    switch (los) {
        case 0:
            balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] + szansy1[poziom[1]] + szansy1[poziom[2]] + szansy1[poziom[3]] + szansy1[poziom[4]] - szansy1[poziom[licznik]];
            document.getElementById(`ba${innyGracz1}`).innerHTML = bilans[innyGracz1] -= szansy1[poziom[l]];                   
            document.getElementById(`ba${innyGracz2}`).innerHTML = bilans[innyGracz2] -= szansy1[poziom[i]];                   
            document.getElementById(`ba${innyGracz3}`).innerHTML = bilans[innyGracz3] -= szansy1[poziom[c]];
            alert(tekstySzansy1[Math.floor(Math.random())]+szansy1[wydaneszanse]* poziom[licznik]); 
            break;
        case 1:
            balansPlusLicznik.innerHTML = bilans[licznik] = bilans[licznik] - szansy3[poziom[licznik]] * 3;
            document.getElementById("ba"+innyGracz1).innerHTML = bilans[innyGracz1] += szansy3[poziom[l]];                   
            document.getElementById(`ba${innyGracz2}`).innerHTML = bilans[innyGracz2] += szansy3[poziom[i]];                   
            document.getElementById(`ba${innyGracz3}`).innerHTML = bilans[innyGracz3] += szansy3[poziom[c]];
            alert(tekstySzansy3[Math.floor(Math.random())]+szansy3[wydaneszanse]* poziom[licznik]);
            break;
        case 2:
            balanseGraczy.forEach(ele => ele.removeEventListener('click', tura));
            $('#targ').html('Rzuć kostką i sprawdź czy wygrasz');
            targ.addEventListener("click", rzut); 
            break;
        default:
            const ktoryTekst = Math.floor(Math.random() * 3);
            alert(tekstySzansy4[ktoryTekst]);
            if(ktoryTekst === 0){
                //$('#'+pionek[licznik]+liczbaOczek[licznik]).css('opacity', '0');
                //liczbaOczek[licznik] = 8;
                $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '1');
            }
            else if(ktoryTekst === 1 || ktoryTekst === 2){
                balanseGraczy.forEach(element => {
                element.removeEventListener("click", tura);
                element.addEventListener("click", DajInnemuGraczowi);
            })
            if(ktoryTekst === 2){
                wiekszaSzansa = true;
            }
            }else{
                if(poziom[licznik] > 1){
                    poziom[licznik] -= 1;
                }
            }
        break;
    }
}
function tura(){
    const balansWlascicielaDzialki = document.getElementById(`ba${kupionaPrzezKogo[liczbaOczek[licznik]]}`);
    const ceny1 = [7000, 15000, 30000, 50000, 60000, 80000], ceny2 = [15000, 30000, 50000, 80000, 95000, 125000];
    const ceny3 = [20000, 50000, 90000, 140000, 165000, 215000], ceny4 = [25000, 65000, 110000, 170000, 200000, 270000];
    const ceny5 = [35000, 90000, 150000, 230000, 270000, 350000], ceny6 = [40000, 100000, 170000, 260000, 305000, 395000];
    const ceny7 = [50000, 125000, 210000, 320000, 375000, 485000], ceny8 = [65000, 160000, 250000, 370000, 430000, 550000];
    const rzutKostkami = 1;//Math.floor(Math.random() * 10 + 2)
    if(ileJestPodTranow[licznik] === 0){
        $('#podtran').removeClass('klik'); 
        $('#podtran').removeClass('dom1');
        podtr.removeEventListener("click", ukradniecie);
        $('#podtran').html('');
    }
    if(ileJestPrzymTranow[licznik] > 0){
        $('#przymtran').addClass('klik'); 
        $('#przymtran').addClass('dom1');
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
    $('#'+pionek[licznik]+liczbaOczek[licznik]).css('opacity', '0');
    kosc.innerHTML = liczbaOczek[licznik] += rzutKostkami;
    if(liczbaOczek[licznik] === 32){
        $(`#${pionek[licznik]+liczbaOczek[licznik]}`).css('opacity', '1');
        liczbaOczek[licznik] = 0; 
        $('#targ').html('');
        return
    }
    zmianaPoziomu();
    $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '1');
    if(liczbaOczek[licznik] === 24){
        alert('idziesz do więzienia!');
        $('#targ').html('');
        $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '0');
        liczbaOczek[licznik] = 8;
        $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '1');
        czyJestWWiezieniu[licznik] = 1;
        kosc = liczbaOczek[licznik];
        return
    }
    let czyPionekJestNaNormalnejDzialce = true;
    $('#targ').html('')
    if(liczbaOczek[licznik] === 2 || liczbaOczek[licznik] === 13 || liczbaOczek[licznik] === 27){
        nagroda();
        czyPionekJestNaNormalnejDzialce = false;
        targ.removeEventListener("click", zajmijDzialke);
    }
    else if(liczbaOczek[licznik] === 5 || liczbaOczek[licznik] === 29 || liczbaOczek[licznik] === 18){
        szansa();
        czyPionekJestNaNormalnejDzialce = false;
        targ.removeEventListener("click", zajmijDzialke);
    }
    else if(liczbaOczek[licznik] === 8 || liczbaOczek[licznik] === 16){
        $('#targ').html('');
        czyPionekJestNaNormalnejDzialce = false;
        targ.removeEventListener("click", zajmijDzialke);
    }

    if(czyPionekJestNaNormalnejDzialce === false) return
    if(liczbaDarmowychDomow[licznik] > 0){
        $('#domy').addClass('dom1'); 
        $('#domy').addClass('klik');
        domy.addEventListener("click", dom2);
        $('#domy').html('Czy chcesz wykorzystać darmowy dom?');
    }
    coZrobicZPolem();
    if(czyJuzByloOdkryte[liczbaOczek[licznik]] === false){
        zmianaKoloruOdkrywki();
        console.log(czyJuzByloOdkryte[liczbaOczek[licznik]]);
        losowanie();
    }
    if(liczbaOczek[licznik] < 8){
        if(liczbaOczek[licznik] < 4){
            if(czyKupiona[liczbaOczek[licznik]] === true && kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik){
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny1[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                        
                balansWlascicielaDzialki.innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny1[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('');
            }
        }else{
            if(czyKupiona[liczbaOczek[licznik]] === true && kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik){
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny2[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                        
                balansWlascicielaDzialki.innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny2[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('');
            }
        }
    }
    else if(liczbaOczek[licznik] > 8 && liczbaOczek[licznik] < 16){
        if(liczbaOczek[licznik] < 12){
            if(czyKupiona[liczbaOczek[licznik]] === true && kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik){
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny3[ileJestDomowNaDzialce[liczbaOczek[licznik]]];

                balansWlascicielaDzialki.innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny3[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('');
            }
        }else{
            if(czyKupiona[liczbaOczek[licznik]] === true && kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik){
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny4[ileJestDomowNaDzialce[liczbaOczek[licznik]]];  

                balansWlascicielaDzialki.innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny4[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('');
            }
        }
    }
    else if(liczbaOczek[licznik] > 16 && liczbaOczek[licznik] < 24){
        if(liczbaOczek[licznik] < 21){
            if(czyKupiona[liczbaOczek[licznik]] === true && kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik){
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny5[ileJestDomowNaDzialce[liczbaOczek[licznik]]];

                balansWlascicielaDzialki.innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny5[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('')
            }
        }else{
            if(czyKupiona[liczbaOczek[licznik]] === true && kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik){
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny6[ileJestDomowNaDzialce[liczbaOczek[licznik]]]; 

                balansWlascicielaDzialki.innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny6[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('')
            }
        }
    }
    else{ 
        if(liczbaOczek[licznik] < 29){
            if(czyKupiona[liczbaOczek[licznik]] === true && kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik){
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny7[ileJestDomowNaDzialce[liczbaOczek[licznik]]];

                balansWlascicielaDzialki.innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny7[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('')
            }
        }else{
            if(czyKupiona[liczbaOczek[licznik]] === true && kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik){
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny8[ileJestDomowNaDzialce[liczbaOczek[licznik]]];

                balansWlascicielaDzialki.innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny8[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('')
            }
        }
    }
nadajKlikBilansom();
}
balans1.innerHTML = bilans[1]; balans2.innerHTML = bilans[2]; balans3.innerHTML = bilans[3]; balans4.innerHTML = bilans[4];
bilans.forEach(ele => {
    if(ele === 1_000_000){
        balanseGraczy.forEach(element => element.removeEventListener("click", tura));
        $('#podtran').removeClass('dom1');
        $('#przymtran').removeClass('dom1');
        $('#domy').removeClass('dom1');
        alert('Wygrana, jeden z graczy został milionerem');
    }
    else if(ele === 0){
        //kiedy gracz zbankrutuje;
    }
})
