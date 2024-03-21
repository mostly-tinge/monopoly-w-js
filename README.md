                                                              Dokumentacja
  <h3><a href="https://mostly-tinge.github.io/monopoly-w-js/" target="_blank">Link do strony z monopoly</a></h3>
   <h3>Opis funkcji</h3>                                                               
<p>zapiszPostep() - 48 linia: zapisuje postęp</p>
<p>usunPostep() - 60 linia: usuwa postęp</p>
<p>przywrocPostep() - 64 linia: wczytuje postęp(Opcjonalnie można użyć, żeby cofnąć jakąś akcje.).</p>
<p>zmianaPoziomu() - 77 linia: ustawia poziom(Zaczyna się od 1) przy każdym przekroczeniu startu. Przy drugim poziomie pionek ma srebrną obwódke, a przy trzecim złotą. Przy przekroczeniu z trzecim poziomem dostaje się 250k(W oryginale można było wybrać pomiędzy kasą, a poziomem na niższych progach, ale uznałem to za niepotrzebne).</p>

<p>postawHotel() - 96 linia: Stawia hotel jeżeli gracz ma wykupione wszystkie domy.</p>
<p>postawDom() - 111 linia: Stawia dom jeżeli gracz posiada działke.</p>
<p>zmianaKoloruOdkrywki() - 134 linia: Ustawia kolor działki przy jej zajęciu(zarówne te normalne jak i te przez limuzyne).</p>
<p>zajmijDzialke() - 144 linia: Zajmuje działke(Ustawia kolor ceny ten sam co gracza).</p>

<p>nadajKlikBilansom() - 163 linia: Nadaje cursor: pointer balansowi i ustawia licznik.</p>
<p>dajInnemuGraczowi() - 173 linia: Daje innemu graczowi 40 tyś lub 50 tyś </p>
<p>dom() - 190 linia: Daje graczowi dom</p>

<p>dom2() - 198 linia: Tak, kiedyś wymyśle lepszą nazwę i ustawie w poprawnej kolejności. Sprząta po funkcji dom.</p>
<p>danieLubZabranieInnym() - 204 linia: Bierze określoną sumę i ją daje ją po równo każdemu graczowi, albo zabiera od każdego po równo i daje aktywnemu graczowi w zależności gdzie jest wywołana.</p>
<p>gest() - 214 linia: Jedna z możliwych odkrywek, daje innym 20k i zabiera graczowi 60k.</p>

<p>prezent() - 218 linia: Jedna z odkrywek, zabiera innym 20k i daje 60k.</p>
<p>udzialy() - 222 linia: Jedna z szans, daje nam 100k.</p>
<p>inicjacjaPozwu() - 226 linia: Przygotowuje do pozwu, jedna z możliwych odkrywek.</p>
<p>pozew() - 242 linia: Pobiera 50k od wybranego gracza</p>
<p>mieszkanie() - 252 linia: Daje graczowi czynsz(12k) na początku swojej tury przez 3 kolejki.</p>

<p>podroz() - 256 linia: Kolejna odkrywka, przenosi nas na najbliższe wolne pole.</p>
<p>podTran() - 280 linia: Przygotowuje do podstępnej tranzakcji.</p>
<p>ukradniecie() - 286 linia: Nadaje działką eventListenery i cursor: pointer działką</p>
<p>akcja() - 305 linia: Wreszcie dokonuje podtranu</p>

<p>zlyRating() - 317 linia: jedna z odkrywek, nie pozwala kupić działki</p>
<p>przymTran() - 322 linia: Daje graczowi przystępną tranzakcję</p>
<p>wybranie() - 328 linia: Inicjuje przymtran nadając eventlistenery i pointery i wyjaśnia jak to zrobić</p>
<p>wybranieCudzego() - 340 linia: Zamienia cudzą działkę na gracza</p>

<p>wybranieSwojego() - 350 linia: Zamienia naszą działke na cudzą i pozbywa się listenerów i pointerów.</p>
<p>zestaw() - 369 linia: Nic nie robi, nie było takiej w oryginale, ale bardzo chciałem dodać nic nie robiącą odkrywkę</p>
<p>limo() - 371 linia: Przesuwa pionek na start, z premią oczywiście</p>
<p>losowanie() - 383 linia: Losuje odkrywkę</p>

<p>coZrobicZPolem() - 388 linia: Daje graczowi kupic hotel, domek lub działke</p>
<p>nagroda() - 404 linia: Losuje nagrodę</p>
<p>szansa() - 429 linia: Losuje Szansę</p>

<p>tura() - 527 linia: Wykonuje turę gracza i sprawdza czy któryś zbankrutował, albo został milionerem</p>

21.03 '24 wersja 1.1 - dodano tryb 2 i trzech graczy i naprawiono rozjedżanie się pól po prawej.
