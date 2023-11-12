                                  ***Dokumentacja***
   <h3>Opis funkcji</h3>                                                               
zapiszPostep() - 72 linia: zapisuje postęp
usunPostep() - 85 linia: usuwa postęp
przywrocPostep() - 88 linia: wczytuje postęp(Opcjonalnie można użyć, żeby cofnąć jakąś akcje.).
zmianaPoziomu() - 100 linia: ustawia poziom(Zaczyna się od 1) przy każdym przekroczeniu startu. Przy drugim poziomie pionek ma srebrną obwódke, a przy trzecim złotą. Przy przekroczeniu z trzecim poziomem dostaje się 250k(W oryginale można było wybrać pomiędzy kasą, a poziomem na niższych progach, ale uznałem to za niepotrzebne).

postawHotel() - 120 linia: Stawia hotel jeżeli gracz ma wykupione wszystkie domy.
postawDom() - 131 linia: Stawia dom jeżeli gracz posiada działke.
zmianaKoloruDzialki() - 152 linia: Ustawia kolor działki przy jej zajęciu(zarówne te normalne jak i te przez limuzyne).
zajmiejDzialke() - 164 linia: Zajmuje działke(Kolor ceny jest ten sam co właściciela działki).

rzut() - 175 linia: Jedna z możliwych funkcji do wylosowania przy wejściu na szanse. Losuje się liczbe, a potem jeżeli jest w zakresie(Zakres jest zależny od poziomu- im wyższy tym łatwiej trafić) wygrywa się kasę.
ndajKlik() - 203 linia: Nadaje cursor: pointer balansowi, który po kliknięciu wywołuje turę.
dajInnemuGraczowi() - 214 linia: Dajemy innemu graczowi kasę(Wielkość zależy od zmiennej wiekszaSzansa).

dom2() - 229 linia: Tak, kiedyś wymyśle lepszą nazwę i ustawie w poprawnej kolejności. Sprząta po funkcji dom.
dom() - 235 linia: Jedna z mozliwych funkcji po odkryciu odkrywki(Czyli karty znajdującej się na działce, która jest odkryta, kiedy ktoś na nią wejdzie po raz pierwszy.) daje darmowy temu kto ją wylosował.
danieLubZabranieInnym() - 242 linia: Bierze określoną sumę i ją daje ją po równo każdemu graczowi, albo zabiera od każdego po równo i daje aktywnemu graczowi w zależności gdzie jest wywołana.
gest() - 251 linia: Jedna z możliwych odkrywek, daje innym 20k i zabiera nam 60k.

prezent() - 255 linia: Także jedna z odkrywek, zabiera innym 20k i daje 60k.
udzialy() - 259 linia: Jedna z szans, daje nam 100k.
inicjacjaPozwu() - 263 linia: Przygotowuje do pozwu, jedna z możliwych odkrywek(notka dla siebie usuń wywołanie na 512).
mieszkanie() - 281 linia: Daje graczowi czynsz(12k) na początku swojej tury przez 3 kolejki.

podroz() - 285 linia: Kolejna odkrywka, przenosi nas na najbliższe wolne pole.
akcja() - 307 linia: .

<h3>Opis zmiennych</h3>
licznik- przechowuje numer gracza, który oznacza gracza w danej turze(od 1 do 4).
ceny1-8 - Ceny domów i hoteli.

