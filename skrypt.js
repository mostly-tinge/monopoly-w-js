let czyLiczbaJestWybrana = false;
const czyUrzadzenieJestPionowo = window.matchMedia("(orientation:portrait)").matches;
/*console.log(czyUrzadzenieJestPionowo);
window.matchMedia("(orientation:portrait)").addEventListener("change", e => {
    if (e.matches) {
        console.log("pion");
    } else {
        console.log("poziom");
    }
})*/
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}
//console.log(isMobileDevice());
//do tego momentu są nie działąjące funkcje
let coSieKryjePodOdkrywkami = [prezent, dom, dom, gest, zlyrating, dom, podtran, nicSieNieDzieje,
    podroz, mieszkanie, dom, dom, inicjacjaPozewu, udzialy, limo, mieszkanie, przymtran, gest, gest, przymtran, podroz, limo];
coSieKryjePodOdkrywkami.sort(() => Math.random() - 0.5);
let ileJestGraczy = 1;
let bilans = ['', 372_000, 372_000, 372_000, 372_000];
const cenyDomow = [0, 10_000, 0, 10_000, 15_000, 0, 15_000, 15_000, 0, 25_000, 25_000, 25_000, 30_000, 0, 30_000, 30_000, 0, 40_000, 0, 40_000, 40_000,
    45_000, 45_000, 45_000, 0, 50_000, 50_000, 0, 50_000, 0, 60_000, 60_000];
let licznik = 1;//licznik jest po to, aby program wiedział czyja jest tura
const balans1 = document.getElementById('ba1'), balans2 = document.getElementById('ba2');
const balans3 = document.getElementById('ba3'), balans4 = document.getElementById('ba4');
const podtr = document.querySelector("#podtran"), targ = document.querySelector("#targ");
const balansPlusLicznik = document.getElementById(`ba${licznik}`), domy = document.querySelector("#domy");
const wszystkieDzialki = document.getElementsByClassName('dzialki'), pudłoZWiadomościami = document.getElementById('alert');
const poleIlosciGraczy = document.getElementById('pole-ilosci-graczy'), pudłoWyboru = document.getElementById('pudlo-wyboru');

function stworzTooltipa(textTooltipa, elementRodzic, gdzieScrollowac, callback, styl) {
    const toolTip = document.createElement('span'), toolTipArrow = document.createElement('div');
    const strzałkaIksa1 = document.createElement('p'), strzałkaIksa2 = document.createElement('p');
    const zamkniecieTooltipa = document.createElement('div');
    toolTip.innerText = textTooltipa;
    $(toolTip).addClass('tooltip');
    $(toolTipArrow).addClass('tooltip-arrow');
    $(strzałkaIksa1).addClass('strzałkaIksa');
    $(strzałkaIksa2).addClass('strzałkaIksa').addClass('strzałkaIksa2');
    $(zamkniecieTooltipa).addClass('zamkniecie_tooltipa');
    elementRodzic.appendChild(toolTip);
    toolTip.appendChild(toolTipArrow);
    toolTip.appendChild(strzałkaIksa1);
    toolTip.appendChild(strzałkaIksa2);
    toolTip.appendChild(zamkniecieTooltipa);
    elementRodzic.removeEventListener('click', tura);
    if (styl != null) {
        $(toolTip).css(styl[0], styl[1]);
    }
    const zamknijTooltipa = () => {
        if (toolTip) {
            toolTip.remove();
            setTimeout(() => gdzieScrollowac(), 100);
            callback();
        }
    }
    zamkniecieTooltipa.addEventListener('click', zamknijTooltipa);
    strzałkaIksa1.addEventListener('click', zamknijTooltipa);
    strzałkaIksa2.addEventListener('click', zamknijTooltipa);
}
setTimeout(() => stworzTooltipa('Kliknij na bilansy graczy, aby się poruszyć 1/5', balans1, scrollujDoGóry, pokażJakWybraćIloscGraczy, null), 0);
const pokażJakWybraćIloscGraczy = () => {
    setTimeout(() => stworzTooltipa('Tu ustaw liczbę graczy (musi być od 2 do 4) 2/5', pudłoWyboru, scrollujDoDolu, pokażPionki, null), 10);
}
function zacznijGre(){
    const potwierdzenie = document.getElementById('potwierdzenie');
    poleIlosciGraczy.disabled = false;
    potwierdzenie.disabled = false;
    pudłoZWiadomościami.innerHTML = '';
    potwierdzenie.addEventListener("click", potwierdźWybór);
}
const pokażPionki = () => {
    const odkrywka = document.getElementById('k7');
    const styl = ['font-size', '0.85rem'];
    const tekstyOdkrywek = document.getElementById('alert');
    function pokażTekstyOdkrywek(){
        tekstyOdkrywek.innerHTML = 'tak tu!';
        setTimeout(() => stworzTooltipa('Tutaj pojawiają się treść odkrywek 4/5................', tekstyOdkrywek, scrollujDoDolu, pokażJakKupićDziałke, null), 10); 
    }
    function pokażJakKupićDziałke(){
        pudłoZWiadomościami.innerText = '';
        setTimeout(() => stworzTooltipa('Tu można kupić działkę lub domy do niej 5/5', targ, scrollujDoGóry, zacznijGre, null), 10);      
    }
    setTimeout(() => stworzTooltipa('Odkrywki są odsłaniane po pierwszym wkroczeniu na pole i aktywują losowe wydarzenie 3/5', odkrywka, scrollujDoGóry, pokażTekstyOdkrywek, styl), 10);
}
const scrollujDoGóry = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
const scrollujDoDolu = () => {
    scrollTo({
        top: 700,
        left: 0,
        behavior: "smooth"
    })
}
let gracze = ['', balans1, balans2, balans3, balans4];
$(balans1).addClass('balans');
balans1.innerHTML = bilans[1];
function potwierdźWybór(){
    if(poleIlosciGraczy.value > 5 || poleIlosciGraczy.value < 1) return;
    ileJestGraczy = poleIlosciGraczy.value;
    for(let i = 4; i > ileJestGraczy; i--){
        gracze.pop();
        bilans.pop();
    };
    for(let i = 0; i < ileJestGraczy; i++){
        const cyfryPionkow = ['a', 'b', 'c', 'e'];
        console.log(`#${cyfryPionkow[i]}0`);
        setTimeout(() => $(`#${cyfryPionkow[i]}0`).css('opacity', '1'), 200);
    }
    gracze.forEach((ele, index) => {
        ele.innerHTML = bilans[index];
        $(ele).addClass('balans');
    });
    $('#ba1').addClass('klik');
    balans1.addEventListener("click", tura);
    $(pudłoWyboru).css('display', 'none');
}
const przytr = document.getElementById("przymtran");
let wiekszaSzansa = false, czynsz = ['', 0, 0, 0, 0];

let wydaneNagrody = 0;
const koloryDzialek = ['', 'black', 'chartreuse', 'fuchsia', 'navy'];

let czyJuzByloOdkryte = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

let liczbaOczek = ['', 0, 0, 0, 0], poziom = ['', 1, 1, 1, 1], pionek = ['', "a", "b", "c", "e"];

//$('#a0').css('opacity', '1'); $('#b0').css('opacity', '1'); $('#c0').css('opacity', '1'); $('#e0').css('opacity', '1');

let liczbaDarmowychDomow = ['', 0, 0, 0, 0], czyDomJestZaDarmo = false;

let ileJestDomowNaDzialce = [0, 0, 0, 0, 0, 0, 0, 0, 0, /*8*/0, 0, 0, 0, 0, 0, 0, 0, /*16*/0, 0, 0, 0, 0, 0, 0, 0, /*24*/0, 0, 0, 0, 0, 0, 0,/*31*/];

let ileJestPodTranow = ['', 0, 0, 0, 0], ileJestPrzymTranow = ['', 0, 0, 0, 0];

let czyJestWWiezieniu = ['', false, false, false, false], przejscie = ['', false, false, false, false];

let kupionaPrzezKogo = [0, 0, 0, 0, 0, 0, 0, 0, 0,/*8*/0, 0, 0, 0, 0, 0, 0, 0,/*16*/0, 0, 0, 0, 0, 0, 0, 0,/*24*/0, 0, 0, 0, 0, 0, 0, 0/*31*/];

$('.p1').addClass('normalny1'); $('.p2').addClass('normalny2'); $('.p3').addClass('normalny3'); $('.p4').addClass('normalny4');

function zmianaPoziomu() {
    if (poziom[licznik] === 3 && liczbaOczek[licznik] > 31) {
        liczbaOczek[licznik] -= 32;
        balansPlusLicznik.innerHTML = bilans[licznik] += 250_000;
    }
    else if (poziom[licznik] === 2 && przejscie[licznik] === true && liczbaOczek[licznik] > 31) {
        $(`.p${licznik}`).removeClass('srebrny').addClass('zloty');
        poziom[licznik] = 3;
        liczbaOczek[licznik] -= 32;
    }
    else if (poziom[licznik] === 1 && liczbaOczek[licznik] > 31 && przejscie[licznik] === false) {
        liczbaOczek[licznik] -= 32;
        poziom[licznik] = 2;
        $(`.p${licznik}`).addClass('srebrny').removeClass(`normalny${licznik}`);
        przejscie[licznik] = true;
    }
}
function postawHotel() {
    let kopiaLicznika = licznik;
    if (kopiaLicznika === 1) {
        kopiaLicznika = 4;
    } else {
        kopiaLicznika--;
    }
    if(cenyDomow[liczbaOczek[kopiaLicznika]] > bilans[kopiaLicznika]) return $('#targ').html('Nie stać cię na hotel!');
    $(`#dom${liczbaOczek[kopiaLicznika]}-0`).css('opacity', '0'); $(`#dom${liczbaOczek[kopiaLicznika]}-2`).css('opacity', '0');
    $(`#dom${liczbaOczek[kopiaLicznika]}-1`).css('opacity', '0'); $(`#dom${liczbaOczek[kopiaLicznika]}-3`).css('opacity', '0');
    $(`#h${liczbaOczek[kopiaLicznika]}`).css('opacity', '1');
    ileJestDomowNaDzialce[liczbaOczek[kopiaLicznika]]++;
    $(`ba${licznik}`).html(bilans[kopiaLicznika] -= cenyDomow[liczbaOczek[kopiaLicznika]]);
    targ.removeEventListener("click", postawHotel);
    $('#targ').removeClass('klik').html('');
}
function postawDom() {
    let kopiaLicznika = licznik;
    if (kopiaLicznika === 1) {
        kopiaLicznika = ileJestGraczy;
    } else {
        kopiaLicznika--;
    }
    if(cenyDomow[liczbaOczek[kopiaLicznika]] > bilans[kopiaLicznika]) return $('#targ').html('Nie stać cię na dom!').removeClass('klik');
    if (czyDomJestZaDarmo === false) {
        $(`ba${licznik}`).html(bilans[kopiaLicznika] -= cenyDomow[liczbaOczek[kopiaLicznika]]);
    }
    $(`#dom${liczbaOczek[kopiaLicznika]}-${ileJestDomowNaDzialce[liczbaOczek[kopiaLicznika]]}`).css('opacity', '1');
    ileJestDomowNaDzialce[liczbaOczek[kopiaLicznika]]++;
    if (ileJestDomowNaDzialce[liczbaOczek[kopiaLicznika]] === 4) {
        targ.removeEventListener("click", postawDom);
        targ.addEventListener("click", postawHotel);
        $('#targ').html(`Czy chcesz kupić hotel? cena: ${cenyDomow[liczbaOczek[kopiaLicznika]]}`);
    }
    if (ileJestDomowNaDzialce[liczbaOczek[kopiaLicznika]] > 5) {
        $('#targ').html('');
    }
    czyDomJestZaDarmo = false;
}

function zmianaKoloruOdkrywki() {
    czyJuzByloOdkryte[liczbaOczek[licznik]] = true;
    if (liczbaOczek[licznik] < 8 || (liczbaOczek[licznik] > 16 && liczbaOczek[licznik] < 24)) {
        $(`#od${liczbaOczek[licznik]}`).css('background-color', 'red').css('border-color', 'red');
    }
    else if (liczbaOczek[licznik] > 24 || (liczbaOczek[licznik] > 8 && liczbaOczek[licznik] < 16)) {
        $(`#od${liczbaOczek[licznik]}`).css('background-color', 'darkkhaki').css('border-color', 'darkkhaki');
    }
}

function zajmijDzialke() {
    const cenyDzialek = [0, 5_000, 0, 5_000, 11_000, 0, 15_000, 20_000, 0, 35_000, 35_000, 40_000, 55_000, 0, 55_000, 60_000, 0, 80_000, 0, 80_000, 90_000,
        115_000, 115_000, 120_000, 0, 145_000, 145_000, 0, 150_000, 0, 170_000, 200_000];
    let kopiaLicznika = licznik;
    if (kopiaLicznika === 1) {
        kopiaLicznika = ileJestGraczy;
    } else {
        kopiaLicznika--;
    }
    if(cenyDzialek[liczbaOczek[kopiaLicznika]] > bilans[kopiaLicznika]) return $('#targ').html('Nie stać cię na działke!');
    $(`ba${licznik}`).html(bilans[kopiaLicznika] -= cenyDzialek[liczbaOczek[kopiaLicznika]]);
    $(`#k${liczbaOczek[kopiaLicznika]}`).css('color', koloryDzialek[kopiaLicznika]);
    kupionaPrzezKogo[liczbaOczek[kopiaLicznika]] = kopiaLicznika;
    targ.removeEventListener("click", zajmijDzialke);
    if(cenyDomow[liczbaOczek[kopiaLicznika]] > bilans[kopiaLicznika]) return $('#targ').html('Nie stać cię na domek!');
    if (kupionaPrzezKogo[liczbaOczek[kopiaLicznika]] === kopiaLicznika) {
        $('#targ').addClass('klik').html(`Czy chcesz kupić domek? cena: ${cenyDomow[liczbaOczek[kopiaLicznika]]}`);
        targ.addEventListener("click", postawDom);
    }
}
function czyGraczZbankrutowal() {
    for (let i = 1; i <= ileJestGraczy; i++) {
        if (bilans[i] <= 0){
            $(gracze[i]).removeClass('balans');
            $(gracze[i]).removeClass('klik');
            gracze[i].innerText = '';
            gracze[i].id = 'ba99';
            gracze.splice(i, 1);
            bilans.splice(i, 1);
            ileJestGraczy--;
            if(gracze.length !== 2){
                gracze[licznik].addEventListener('click', tura);
                $(gracze[licznik]).addClass('klik');
            }
        }
    }
    if(gracze.length === 2){
        let kopiaGraczy = gracze.slice(1, gracze.length);
        pudłoZWiadomościami.innerText = 'wygrana';
        kopiaGraczy.forEach(ele => ele.removeEventListener('click', tura));
    }
    zmianaKlasy();
    return czyZbankrutowal;
}
function nadajKlikBilansom() {
    gracze[licznik].removeEventListener('click', tura);
    $(gracze[licznik]).removeClass('klik');
    licznik++;
    if (licznik == Number(ileJestGraczy) + 1) {
        licznik = 1;
    }
    gracze[licznik].addEventListener('click', tura);
    $(gracze[licznik]).addClass('klik');
}
function dajInnemuGraczowi() {
    const numerBilansu = this.id.slice(2, 3);
    if (numerBilansu == licznik) return
    gracze[licznik].addEventListener('click', tura);
    for (let i = 1; i <= ileJestGraczy; i++) {
        document.getElementById(`ba${i}`).removeEventListener('click', dajInnemuGraczowi);
    }
    document.getElementById(`ba${licznik}`).innerHTML = bilans[licznik] -= 40000;
    this.innerHTML = bilans[numerBilansu] += 40000;
    if (wiekszaSzansa) {
        this.innerHTML = bilans[numerBilansu] += 10000;
        document.getElementById(`ba${licznik}`).innerHTML = bilans[licznik] -= 10000;
    }
    wiekszaSzansa = false;
    nadajKlikBilansom();
}
function dom() {
    pudłoZWiadomościami.innerText = ('Dostajesz darmowy dom do wykorzystania');
    liczbaDarmowychDomow[licznik]++;
    if (liczbaDarmowychDomow[licznik] > 0) {
        $('#domy').addClass('karta').addClass('klik').html('Czy chcesz wykorzystać darmowy dom?');
        domy.addEventListener("click", dom2);
    }
}
function dom2() {
    domy.removeEventListener("click", dom);
    $('#domy').removeClass('klik').removeClass('karta').html('');
    czyDomJestZaDarmo = true;
    liczbaDarmowychDomow[licznik]--;
}
function danieLubZabranieInnym(odJednegoGracza) {
    for (let i = 1; i <= ileJestGraczy; i++) {
        if (i === licznik) continue;
        document.getElementById(`ba${i}`).innerHTML = bilans[licznik] -= odJednegoGracza;
        document.getElementById(`ba${i}`).innerHTML = bilans[i] += odJednegoGracza;
    }
    czyGraczZbankrutowal();
}

function gest() {
    pudłoZWiadomościami.innerText = ("Masz gest! daj każdemu z pozostałych graczy 20k");
    danieLubZabranieInnym(20000);
}
function prezent() {
    pudłoZWiadomościami.innerText = ("Prezent ślubny! pobierz od każdego gracza 20k");
    danieLubZabranieInnym(-20000);
}
function udzialy() {
    pudłoZWiadomościami.innerText = ("Wystrzałowe udziały! Pobierz 100k")
    balansPlusLicznik.innerHTML = bilans[licznik] += 100000;
}
function inicjacjaPozewu() {
    let kopiaLicznika = licznik;
    if (kopiaLicznika === ileJestGraczy + 1) {
        licznik = 1;
    }
    $(gracze[kopiaLicznika]).removeClass('klik');
    kopiaLicznika--;
    if (kopiaLicznika === 0) {
        kopiaLicznika = 1;
    }
    setTimeout(() => {
        for (let i = 1; i <= ileJestGraczy; i++) {
        gracze[i].addEventListener('click', pozew);
        $(gracze[i]).removeClass('klik');
        gracze[i].removeEventListener('click', tura);
        }
    }, 0);
    gracze[kopiaLicznika].removeEventListener('click', pozew);
    pudłoZWiadomościami.innerText = ("pozew! Pobierz 50k od wybranego gracza");
    targ.removeEventListener("click", zajmijDzialke);
    targ.removeEventListener("click", postawDom);
    $(targ).removeClass('klik');
}
function zmianaKlasy(){
    for(i = 1; i < gracze.length; i++){
        if(gracze[i] === undefined) continue;
        gracze[i].id = `ba${i}`;
    }
    gracze.forEach((ele, index) => {
        ele.innerHTML = bilans[index];
    });
}
function pozew() {
    let kopiaLicznika = licznik - 1;
    if (kopiaLicznika === ileJestGraczy + 1) {
        kopiaLicznika = 1;
    }
    if(kopiaLicznika === 0) {
        kopiaLicznika = ileJestGraczy;
    }
    const numerBilansu = this.id[2];
    if (numerBilansu == kopiaLicznika) return;
    if (bilans[numerBilansu] < 50_000) {
        const buforZmiennejGracza = bilans[numerBilansu];
        this.innerHTML = bilans[numerBilansu] -= (50_000 - bilans[numerBilansu]);
        document.getElementById(`ba${licznik}`).innerHTML = bilans[kopiaLicznika] += buforZmiennejGracza;
    } else {
        document.getElementById(`ba${licznik}`).innerHTML = bilans[kopiaLicznika] += 50_000;
        this.innerHTML = bilans[numerBilansu] -= 50_000;
    }
    for (let i = 1; i <= ileJestGraczy; i++) {
        gracze[i].removeEventListener('click', pozew);
    }
    gracze[licznik].addEventListener("click", tura);
    $(gracze[licznik]).addClass('klik');
    czyGraczZbankrutowal();
    pudłoZWiadomościami.innerText = '';
    targ.addEventListener("click", zajmijDzialke);
    targ.addEventListener("click", postawDom);
}
function mieszkanie() {
    pudłoZWiadomościami.innerText = ("Wynajmujesz swoje mieszkanie przez 3 następne kolejki pobierasz 12k");
    czynsz[licznik] += 3;
}
function podroz() {
    let czyZnalezione = false;
    pudłoZWiadomościami.innerText = ("Do przodu! Przejdź do najbliższej wolnej nieruchomości.");
    $(`#${pionek[licznik] + liczbaOczek[licznik]}`).css('opacity', '0');
    function zakonczPentle(i) {
        liczbaOczek[licznik] = i;
        zmianaKoloruOdkrywki();
        coZrobicZPolem();
        losowanie();
        $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '1');
        czyZnalezione = true;
    }
    for (let i = liczbaOczek[licznik]; i < 32; i++) {
        if (kupionaPrzezKogo[i] === 0 && czyZnalezione === false && i > liczbaOczek[licznik] && i !== 13 && i !== 8 & i !== 16 && i !== 24 && i !== 27 && i !== 29 && i !== 32 && i !== 5 && i !== 2) {
            zakonczPentle(i);
        }
    }
    if (czyZnalezione === true) return;
    for (let i = liczbaOczek[licznik]; i > 0; i--) {
        if (czyZnalezione === false && kupionaPrzezKogo[i] === 0 && i < liczbaOczek[licznik] && i !== 13 && i !== 8 & i !== 16 && i !== 24 && i !== 27 && i !== 29 && i !== 32 && i !== 5 && i !== 2) {
            zakonczPentle(i);
        }
    }
}
function podtran() {
    pudłoZWiadomościami.innerText = ("Podstępna transakcja! Wykradnij nieruchomość od wybranego gracza, możesz ją wykorzystać w dowolnym momencie");
    $('#podtran').addClass('klik').addClass('karta').html('Czy chcesz ukraść komuś działkę?');
    podtr.addEventListener("click", ukradniecie);
    ileJestPodTranow[licznik] += 1;
}
function ukradniecie() {
    let kopiaLicznika = licznik - 1;
    if (kopiaLicznika === ileJestGraczy + 1) {
        licznik = 1;
    }
    ileJestPodTranow[kopiaLicznika]--;
    if (ileJestPodTranow[kopiaLicznika] === 0) {
        $('#podtran').removeClass('klik').removeClass('karta').html('');
        podtr.removeEventListener("click", ukradniecie);
    }
    for (let i = 1; i <= ileJestGraczy; i++) {
        gracze[i].removeEventListener('click', tura);
    }
    for (let i = 1; i < 32; i++) {
        if (kupionaPrzezKogo[i] !== kopiaLicznika) {
            $(`#d${i}`).addClass('klik');
        }
    }
    for (const element of wszystkieDzialki) {
        element.addEventListener("click", akcja);
    }
    function akcja() {
        const wlasciciel = this.value;
        if (kupionaPrzezKogo[wlasciciel] === kopiaLicznika) return;
        $(`#k${wlasciciel}`).css('color', koloryDzialek[kopiaLicznika]);
        kupionaPrzezKogo[wlasciciel] = kopiaLicznika;
        for (const element of wszystkieDzialki) {
            element.removeEventListener("click", akcja);
            $(element).removeClass('klik');
        }
    }
}
function zlyrating() {
    pudłoZWiadomościami.innerText = ("Zły rating kredytowy! Nie możesz kupić tej działki");
    targ.removeEventListener('click', zajmijDzialke);
    $(targ).removeClass('klik').html('');
}
function przymtran() {
    pudłoZWiadomościami.innerText = ("Przymusowa transakcja! Zamień nieruchomość z wybranym graczem, możesz ją wykorzystać w dowolnym momencie");
    $('#przymtran').addClass('klik').addClass('karta').html('Czy chcesz zamienić z kimś działkę?');
    przytr.addEventListener("click", wybranie);
    ileJestPrzymTranow[licznik] += 1;
}
function wybranie() {
    pudłoZWiadomościami.innerText = ("najpierw wybierz cudzą działkę i wtedy wybierz działkę, którą dajesz w zamian");
    for (let i = 1; i <= ileJestGraczy; i++) {
        gracze[i].removeEventListener('click', tura);
    }
    for (const element of wszystkieDzialki) {
        element.addEventListener("click", wybraniecudzego);
    }
    for (i = 1; i < 32; i++) {
        $(`#d${i}`).addClass('klik');
    }
}
function wybraniecudzego() {
    if (kupionaPrzezKogo.reduce(arg => arg + arg) === 0) return;
    const doZamiany2 = this.value;
    if (kupionaPrzezKogo[doZamiany2] === licznik - 1) return;
    ileJestPrzymTranow[licznik - 1]--;
    $(`#k${doZamiany2}`).css("color", koloryDzialek[licznik - 1]);
    for (const element of wszystkieDzialki) {
        element.addEventListener("click", wybranieswojego);
        element.removeEventListener("click", wybraniecudzego);
    }
    function wybranieswojego() {
        const doZamiany = this.value;
        if (kupionaPrzezKogo[doZamiany] !== licznik - 1) return;
        $(`#k${doZamiany}`).css("color", koloryDzialek[kupionaPrzezKogo[doZamiany2]]);
        kupionaPrzezKogo[doZamiany] = kupionaPrzezKogo[doZamiany2];
        kupionaPrzezKogo[doZamiany2] = licznik - 1;
        if (ileJestPrzymTranow[licznik - 1] === 0) {
            $('#przymtran').removeClass('klik').removeClass('karta').html('');
            przytr.removeEventListener("click", wybranieswojego);
        }
        for (const element of wszystkieDzialki) {
            element.removeEventListener("click", wybranieswojego);
        }
        for (let i = 1; i < 32; i++) {
            $(`#d${i}`).removeClass('klik');
        }
    }
}

function nicSieNieDzieje(){
    pudłoZWiadomościami.innerText = ("Tym razem nic się nie dzieje");
}

function limo() {
    pudłoZWiadomościami.innerText = ("Przejedżasz limuzyną na start");
    $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '0');
    liczbaOczek[licznik] = 32;
    zmianaPoziomu();
    liczbaOczek[licznik] = 0;
    $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '1');
    $('#targ').html('');
}
function losowanie() {
    const los = Math.floor(Math.random() * coSieKryjePodOdkrywkami.length);
    coSieKryjePodOdkrywkami[los]();
    coSieKryjePodOdkrywkami.splice(los, 1);
}
function coZrobicZPolem() {
    if (kupionaPrzezKogo[liczbaOczek[licznik]] === 0) {
        $('#targ').addClass('klik').html('Czy chcesz kupić tą działke?');
        targ.addEventListener("click", zajmijDzialke);
        targ.removeEventListener("click", postawDom);
    }
    else if (kupionaPrzezKogo[liczbaOczek[licznik]] === licznik) {
        $('#targ').html('Czy chcesz kupić domek?');
        targ.addEventListener("click", postawDom);
        if (ileJestDomowNaDzialce[liczbaOczek[licznik]] === 4) {
            targ.removeEventListener("click", postawDom);
            targ.addEventListener("click", postawHotel);
            $('#targ').html('Czy chcesz postawić hotel?');
        }
    }
}
function nagroda() {
    const tekstyNagrody = ["Wynajmij swój prywatny odrzutowiec", 'Zdobywasz tytuł "Biznesowy bohater dekady"!', "Wynajmij swój skuter wodny",
        "Twój koń zajął pierwsze miejsce w wyścigu", "Zarabiasz na swoich oszczędnościach z zagranicznych kont.", "Twój szofer podwozi cię o 5 pól",
        "Otrzymujesz odsetki od swoich milionów", "Sprzedaj swój sportowy samochód", "Sprzedaj jeden ze swoich wakacyjnych domów",
        'Zdobyłeś tytuł "milionera roku"'];
    const nagrody = [25_000, 10_000, 10_000, 25_000, 10_000, 10_000, 25_000, 50_000, 50_000, 50_000];
    const los = Math.floor(Math.random() * 10);
    const balansPlusLicznik = document.getElementById(`ba${licznik}`);//musiałem to tu dać, inaczej nie działa
    balansPlusLicznik.innerHTML = bilans[licznik] += nagrody[wydaneNagrody] * poziom[licznik];
    pudłoZWiadomościami.innerText = (`${tekstyNagrody[los]} otrzymujesz: ${nagrody[wydaneNagrody] * poziom[licznik]}`);
    if (los === 5) {
        $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '0');
        liczbaOczek[licznik] += 5;
        $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '1');
        zmianaKoloruOdkrywki();
        losowanie();
    }
    wydaneNagrody++;
    if (wydaneNagrody === 10) {
        wydaneNagrody = 0;
        pudłoZWiadomościami.innerText = ("nagrody zostały zresetowane");
    }
    $('#targ').html('');
    nadajKlikBilansom();
}
function szansa() {
    const tekstySzansy1 = ["Przeprowadzasz świetną transakcję biznesową! od wszystkich pozostałych graczy odtrzymujesz ",
        "Właśnie obchodzisz urodziny! od wszystkich pozostałych graczy otrzymujesz "];

    const tekstySzansy2 = ["Weź udział w wyścigu motorówek! aby wygrać 50k zagraj", "Wyścig na prywatnym torze! aby wygrać 100k, zagraj",
        "Rozbij kasyno! aby wygrać 100k, zagraj", "Zainwestuj w giełdę! aby zarobić 100k zagraj", "Załóż własną firmę! aby zarobić 150k zagraj",
        "Weź udział w wyścigu balonów! aby wygrać 150k zagraj"];

    const tekstySzansy3 = ["Zabierz przyjaciół w luksusową podróż! płacisz wszystkim pozostałym graczom ",
        "Zabierz przyjaciół na wystawny obiad! płacisz wszystkim pozostałym graczom "];

    const tekstySzansy4 = ["Idziesz prosto do więzienia", "Zaproszenie na ważną imprezę! zapłać 40k wybranemu graczowi za towarzystwo.",
        "Wysoko postawieni przyjaciele! zapłać 50k wybranemu graczowi za udział w jego premierze filmowej.",
        "Przepuściłeś sporą kwotę w szale wydawania pieniędzy! obniż status swojego pionka."];
    const szansy1 = ['', 10_000, 30_000, 50_000], szansy3 = ['', 5000, 15_000, 25_000];
    const los = Math.floor(Math.random() * 3);
    function rzut() {
        const ktoryTekst = Math.floor(Math.random() * 6);
        const wynikRzutu = Math.floor(Math.random() * 10 + 2);
        pudłoZWiadomościami.innerText = (tekstySzansy2[ktoryTekst]);
        $('#targ').html(wynikRzutu).removeClass('klik');
        if ((poziom[licznik] === 1 && wynikRzutu === 2) || (poziom[licznik] === 2 && wynikRzutu > 7 && wynikRzutu < 13) || (poziom[licznik] === 3 && wynikRzutu > 4 && wynikRzutu < 13)) {
            pudłoZWiadomościami.innerText = ("wygrałeś!");
            if (ktoryTekst === 0) {
                $(`ba${licznik}`).html(bilans[licznik] += 50000);
            }
            else if (ktoryTekst > 0 && los < 4) {
                $(`ba${licznik}`).html(bilans[licznik] += 100000);
            } else {
                $(`ba${licznik}`).html(bilans[licznik] += 150000);
            }
            for (let i = 1; i <= ileJestGraczy; i++) {
                gracze[i].addEventListener('click', tura);
            }
        }
        targ.removeEventListener('click', rzut);
        nadajKlikBilansom();
    }
    switch (los) {
        case 0:
            pudłoZWiadomościami.innerText = (`${tekstySzansy1[Math.floor(Math.random())]} 10000 od 1 poziomu 30000 od 2 poziomu, a od 3 50000`);
            for (let i = 1; i <= ileJestGraczy; i++) {
                if (i === licznik) continue;
                document.getElementById(`ba${i}`).innerHTML = bilans[licznik] += szansy1[poziom[i]];
                document.getElementById(`ba${i}`).innerHTML = bilans[i] -= szansy1[poziom[i]];
            }
            nadajKlikBilansom();
            break;
        case 1:
            pudłoZWiadomościami.innerText = (`${tekstySzansy3[Math.floor(Math.random())]} 5000 od 1 poziomu 15000 od 2 poziomu, a od 3 25000`);
            for (let i = 1; i <= ileJestGraczy; i++) {
                if (i === licznik) continue;
                document.getElementById(`ba${i}`).innerHTML = bilans[licznik] -= szansy3[poziom[licznik]];
                document.getElementById(`ba${i}`).innerHTML = bilans[i] += szansy3[poziom[i]];
            }
            break;
        case 2:
            pudłoZWiadomościami.innerText = ('Masz szansę na wygraną, kliknij na targ, żeby zagrać. Im większy poziom tym większa sznsa');
            for (let i = 1; i <= ileJestGraczy; i++) {
                gracze[i].removeEventListener('click', tura);
            }
            $('#targ').html('Rzuć kostką').addClass('klik');
            targ.addEventListener("click", rzut);
            break;
        case 3:
            const ktoryTekst = Math.floor(Math.random() * 3);
            pudłoZWiadomościami.innerText = (tekstySzansy4[ktoryTekst]);
            switch (ktoryTekst) {
                case 0:
                    $('#' + pionek[licznik] + liczbaOczek[licznik]).css('opacity', '0');
                    liczbaOczek[licznik] = 8;
                    $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '1');
                    nadajKlikBilansom();
                    break;
                case 1:
                case 2:
                    for (let i = 1; i <= ileJestGraczy; i++) {
                        const balansPlusLicznik = document.getElementById(`ba${i}`);
                        balansPlusLicznik.addEventListener('click', dajInnemuGraczowi);
                        balansPlusLicznik.removeEventListener('click', tura);
                    }
                    break;
                case 2:
                    wiekszaSzansa = true;
                    break;
                case 3:
                    if (poziom[licznik] > 1) {
                        poziom[licznik] -= 1;
                    }
                    nadajKlikBilansom();
                    break;
            }
        break;
    }
    czyGraczZbankrutowal();
}
function tura() {
    targ.removeEventListener('click', postawDom);
    targ.removeEventListener('click', postawHotel);
    targ.removeEventListener('click', zajmijDzialke);
    $(targ).removeClass('klik');
    $(pudłoZWiadomościami).html('');
    const ceny1 = [7000, 15000, 30000, 50000, 60000, 80000], ceny2 = [15_000, 30_000, 50_000, 80_000, 95_000, 125_000];
    const ceny3 = [20000, 50000, 90000, 140_000, 165_000, 215_000], ceny4 = [25_000, 65_000, 110_000, 170_000, 200_000, 270_000];
    const ceny5 = [35000, 90000, 150_000, 230_000, 270_000, 350_000], ceny6 = [40_000, 100_000, 170_000, 260_000, 305_000, 395_000];
    const ceny7 = [50_000, 125_000, 210_000, 320_000, 375000, 485_000], ceny8 = [65_000, 160_000, 250_000, 370_000, 430_000, 550_000];
    const rzutKostkami = Math.floor(Math.random() * 10 + 2);
    if (ileJestPodTranow[licznik] === 0) {
        $('#podtran').removeClass('klik').removeClass('karta').html('');
        podtr.removeEventListener("click", ukradniecie);
    } else {
        $('#podtran').addClass('klik').addClass('karta').html('Czy chcesz ukraść komuś działkę?');
        podtr.addEventListener("click", ukradniecie);
    }
    if (ileJestPrzymTranow[licznik] > 0) {
        $('#przymtran').addClass('klik').addClass('karta').html('Czy chcesz zamienić z kimś działkę?');
        przytr.addEventListener("click", wybranie);
    } else {
        $('#przymtran').removeClass('klik').removeClass('karta').html('');
        przytr.removeEventListener("click", wybranie);
    }
    if (czynsz[licznik] > 0) {
        balansPlusLicznik.innerHTML = bilans[licznik] += 12000;
        czynsz[licznik]--;
    }
    $('#' + pionek[licznik] + liczbaOczek[licznik]).css('opacity', '0');
    liczbaOczek[licznik] += rzutKostkami;
    zmianaPoziomu();
    $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '1');
    if (liczbaOczek[licznik] === 24) {
        pudłoZWiadomościami.innerText = ('idziesz do więzienia!');
        $('#targ').html('');
        $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '0');
        liczbaOczek[licznik] = 8;
        $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '1');
        czyJestWWiezieniu[licznik] = 1;
        nadajKlikBilansom();
        return
    }
    let czyPionekJestNaNormalnejDzialce = true;
    $('#targ').html('');
    if (liczbaOczek[licznik] === 0) {
        $(`#${pionek[licznik]}${liczbaOczek[licznik]}`).css('opacity', '1');
        liczbaOczek[licznik] = 0;
        $('#targ').html('');
        czyPionekJestNaNormalnejDzialce = false;
    }
    if (liczbaOczek[licznik] === 2 || liczbaOczek[licznik] === 13 || liczbaOczek[licznik] === 27) {
        nagroda();
        czyPionekJestNaNormalnejDzialce = false;
        targ.removeEventListener("click", zajmijDzialke);
    }
    else if (liczbaOczek[licznik] === 5 || liczbaOczek[licznik] === 29 || liczbaOczek[licznik] === 18) {
        szansa();
        czyPionekJestNaNormalnejDzialce = false;
        targ.removeEventListener("click", zajmijDzialke);
    }
    else if (liczbaOczek[licznik] === 8 || liczbaOczek[licznik] === 16) {
        $('#targ').html('');
        czyPionekJestNaNormalnejDzialce = false;
        targ.removeEventListener("click", zajmijDzialke);
        nadajKlikBilansom();
    }

    if (czyPionekJestNaNormalnejDzialce === false) return
    if (liczbaDarmowychDomow[licznik] > 0) {
        $('#domy').addClass('karta').addClass('klik').html('Czy chcesz wykorzystać darmowy dom?');
        domy.addEventListener("click", dom2);
    } else {
        $('#domy').removeClass('karta').removeClass('klik').html('');
        domy.removeEventListener("click", dom2);
    }
    coZrobicZPolem();
    if (czyJuzByloOdkryte[liczbaOczek[licznik]] === false) {
        zmianaKoloruOdkrywki();
        losowanie();
    }
    if (liczbaOczek[licznik] < 8) {
        if (liczbaOczek[licznik] < 4) {
            if (kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik && kupionaPrzezKogo[liczbaOczek[licznik]] !== 0) {
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny1[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                document.getElementById(`ba${kupionaPrzezKogo[liczbaOczek[licznik]]}`).innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny1[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('');
            }
        } else {
            if (kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik && kupionaPrzezKogo[liczbaOczek[licznik]] !== 0) {
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny2[ileJestDomowNaDzialce[liczbaOczek[licznik]]];

                document.getElementById(`ba${kupionaPrzezKogo[liczbaOczek[licznik]]}`).innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny2[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('');
            }
        }
    }
    else if (liczbaOczek[licznik] > 8 && liczbaOczek[licznik] < 16) {
        if (liczbaOczek[licznik] < 12) {
            if (kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik && kupionaPrzezKogo[liczbaOczek[licznik]] !== 0) {
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny3[ileJestDomowNaDzialce[liczbaOczek[licznik]]];

                document.getElementById(`ba${kupionaPrzezKogo[liczbaOczek[licznik]]}`).innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny3[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('');
            }
        } else {
            if (kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik && kupionaPrzezKogo[liczbaOczek[licznik]] !== 0) {
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny4[ileJestDomowNaDzialce[liczbaOczek[licznik]]];

                document.getElementById(`ba${kupionaPrzezKogo[liczbaOczek[licznik]]}`).innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny4[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('');
            }
        }
    }
    else if (liczbaOczek[licznik] > 16 && liczbaOczek[licznik] < 24) {
        if (liczbaOczek[licznik] < 21) {
            if (kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik && kupionaPrzezKogo[liczbaOczek[licznik]] !== 0) {
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny5[ileJestDomowNaDzialce[liczbaOczek[licznik]]];

                document.getElementById(`ba${kupionaPrzezKogo[liczbaOczek[licznik]]}`).innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny5[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('');
            }
        } else {
            if (kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik && kupionaPrzezKogo[liczbaOczek[licznik]] !== 0) {
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny6[ileJestDomowNaDzialce[liczbaOczek[licznik]]];

                document.getElementById(`ba${kupionaPrzezKogo[liczbaOczek[licznik]]}`).innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny6[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('');
            }
        }
    }
    else if (liczbaOczek[licznik] > 24) {
        if (liczbaOczek[licznik] < 29) {
            if (kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik && kupionaPrzezKogo[liczbaOczek[licznik]] !== 0) {
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny7[ileJestDomowNaDzialce[liczbaOczek[licznik]]];

                document.getElementById(`ba${kupionaPrzezKogo[liczbaOczek[licznik]]}`).innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny7[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('');
            }
        } else {
            if (kupionaPrzezKogo[liczbaOczek[licznik]] !== licznik && kupionaPrzezKogo[liczbaOczek[licznik]] !== 0) {
                balansPlusLicznik.innerHTML = bilans[licznik] -= ceny8[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                document.getElementById(`ba${kupionaPrzezKogo[liczbaOczek[licznik]]}`).innerHTML = bilans[kupionaPrzezKogo[liczbaOczek[licznik]]] += ceny8[ileJestDomowNaDzialce[liczbaOczek[licznik]]];
                $('#targ').html('');
            }
        }
    }
    if (document.getElementById("ba"+ licznik) >= 1_000_000 || document.getElementById("ba"+ (licznik + 1)) >= 1_000_000) {
        for (let i = 1; i <= ileJestGraczy; i++) {
            gracze[i].removeEventListener('click', tura);
            $(`ba${i}`).removeClass('klik');
        }
        $('#podtran').removeClass('karta').html('');
        $('#przymtran').removeClass('karta').html('');
        $('#domy').removeClass('karta').html('');
        pudłoZWiadomościami.innerText = ('Wygrana, jeden z graczy został milionerem');
    } else {
        nadajKlikBilansom();
    }
    gracze.forEach((ele, index) => ele.innerHTML = bilans[index]);
}
