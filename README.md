                                  ***Dokumentacja***
   <h3>Opis funkcji</h3>                                                               
<p>zapiszPostep() - 72 linia: zapisuje postęp</p>
<p>usunPostep() - 85 linia: usuwa postęp</p>
<p>przywrocPostep() - 88 linia: wczytuje postęp(Opcjonalnie można użyć, żeby cofnąć jakąś akcje.).</p>
<p>zmianaPoziomu() - 100 linia: ustawia poziom(Zaczyna się od 1) przy każdym przekroczeniu startu. Przy drugim poziomie pionek ma srebrną obwódke, a przy trzecim złotą. Przy przekroczeniu z trzecim poziomem dostaje się 250k(W oryginale można było wybrać pomiędzy kasą, a poziomem na niższych progach, ale uznałem to za niepotrzebne).</p>

<p>postawHotel() - 120 linia: Stawia hotel jeżeli gracz ma wykupione wszystkie domy.</p>
<p>postawDom() - 131 linia: Stawia dom jeżeli gracz posiada działke.</p>
<p>zmianaKoloruDzialki() - 152 linia: Ustawia kolor działki przy jej zajęciu(zarówne te normalne jak i te przez limuzyne).</p>
<p>zajmiejDzialke() - 164 linia: Zajmuje działke(Kolor ceny jest ten sam co właściciela działki).</p>

<p>rzut() - 175 linia: Jedna z możliwych funkcji do wylosowania przy wejściu na szanse. Losuje się liczbe, a potem jeżeli jest w zakresie(Zakres jest zależny od poziomu- im wyższy tym łatwiej trafić) wygrywa się kasę.</p>
<p>nadajKlik() - 203 linia: Nadaje cursor: pointer balansowi, który po kliknięciu wywołuje turę.</p>
<p>dajInnemuGraczowi() - 214 linia: Dajemy innemu graczowi kasę(Wielkość zależy od zmiennej wiekszaSzansa).</p>

<p>dom2() - 229 linia: Tak, kiedyś wymyśle lepszą nazwę i ustawie w poprawnej kolejności. Sprząta po funkcji dom.</p>
<p>dom() - 235 linia: Jedna z mozliwych funkcji po odkryciu odkrywki(Czyli karty znajdującej się na działce, która jest odkryta, kiedy ktoś na nią wejdzie po raz pierwszy.) daje darmowy temu kto ją wylosował.</p>
<p>danieLubZabranieInnym() - 242 linia: Bierze określoną sumę i ją daje ją po równo każdemu graczowi, albo zabiera od każdego po równo i daje aktywnemu graczowi w zależności gdzie jest wywołana.
</p>
<p>gest() - 251 linia: Jedna z możliwych odkrywek, daje innym 20k i zabiera nam 60k.</p>

<p>prezent() - 255 linia: Także jedna z odkrywek, zabiera innym 20k i daje 60k.</p>
<p>udzialy() - 259 linia: Jedna z szans, daje nam 100k.</p>
<p>inicjacjaPozwu() - 263 linia: Przygotowuje do pozwu, jedna z możliwych odkrywek(notka dla siebie usuń wywołanie na 512).</p>
<p>mieszkanie() - 281 linia: Daje graczowi czynsz(12k) na początku swojej tury przez 3 kolejki.</p>

<p>podroz() - 285 linia: Kolejna odkrywka, przenosi nas na najbliższe wolne pole.</p>
<p>akcja() - 307 linia: Konwertuje daną działkę na gracza i sprząta(daj ten sam if co w wybranieSwojego</p>
<p>ukradniecie() - 322 linia: Nadaje działką eventListenery i cursor: pointer</p>
<p>podtran() - 336 linia: Daje graczowi podstępną tranzakcję</p>

<p>zlyRating() - 343 linia: jedna z odkrywek, nie pozwala kupić działki</p>
<p>przymTran() - 347 linia: Daje graczowi przystępną tranzakcję</p>
<p>wybranie() - 354 linia: Inicjuje przymtran i wyjaśnia jak to zrobić</p>
<p>wybranieSwojego() - 366 linia: Zamienia cudzą działkę na gracza</p>

<p>wybranieCudzego() - 385 linia: </p>

<h3>Opis zmiennych</h3>
<p>licznik- przechowuje numer gracza, który oznacza gracza w danej turze(od 1 do 4).</p>
<p>ceny1-8 - Ceny domów i hoteli.</p>
<p>bilans- balans graczy</p>
<p>komuPrzekazacDzialke- wykorzytywane w podtranach i przymtranach do nadania graczowi działki</p>
<p>wydane nagrody- </p>

