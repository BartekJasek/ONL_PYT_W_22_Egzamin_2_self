![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709387-2b7ac180-571f-11eb-9b94-517aa6d501c9.png)

# Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

## Jak zacząć?

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj fork repozytorium (stworzony w punkcie 1) na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres możesz znaleźć na stronie forka repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .` 
Pamiętaj że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

Poszczególne zadania rozwiązuj w odpowiednich plikach.

### Poszczególne zadania rozwiązuj w odpowiednich plikach.

**Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.**


## JavaScript - zadanie 1. (2.5 pkt)

**Nie używajcie eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.**

Napiszcie funkcję biggestSumOfTwoElements(array), która przyjmuje tablicę z liczbami i zwraca sumę dwóch największych elementów z tej tablicy. 

Dla uproszczenia możemy założyć, że przekazana tablica zawiera wyłącznie liczby - nie trzeba robić walidacji.

Jeżeli tablica zawiera tylko jeden element, funkcja powinna zwrócić wartość tego elementu.  
Jeżeli tablica zawiera zero elementów, funkcja powinna zwrócić wartość logiczną **false**.

**Przykład:**
```js
biggestSumOfTwoElements([1,2,3,4]) // => 7
biggestSumOfTwoElements([]) // => false
biggestSumOfTwoElements([76]) // => 76
biggestSumOfTwoElements([23,45,17,12]) // => 68
```

## JavaScript - zadanie 2. (3.5 pkt)

**Nie używajcie eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.**

- Do każdego podpunktu stwórzcie odpowiednią funkcję o nazwie podanej w treści zadania.
- Każda funkcja niech zwraca tablicę wypełnioną odpowiednimi elementami. ( Pamiętacie, że zwracanie, a wyświetlanie to różnica? )

Wykonaj następujące polecenia:

1 - Szukanie nazw tagów:
- znajdźcie wszystkie elementy o klasie sample_class i zapiszcie je w zmiennej **task1EL**,
- stwórzcie funkcję getTag(elements) do której przekażecie jako argument znalezione elementy,
- stwórzcie w funkcji tablicę i wypełnijcie ją nazwami tagów. Pobierzcie je z elementów przekazanych jako argument.
- zwróćcie tablicę.

2 - Szukanie nazw klas:
- znajdźcie element o id sample_id i zapiszcie go w zmiennej **task2EL**
- stwórzcie funkcję getClass(element) do której przekażecie jako argument znaleziony element.
- stwórzcie w funkcji tablicę i wypełnij ją nazwami klas. Pobierz klasy z przekazanego jako argument elementu.
- zwróćcie tablicę.

3 - Szukanie tekstu:
- znajdźcie wszystkie elementy listy znajdujące się w elemencie o klasie sample_class_2 i zapiszcie je w zmiennej **task3EL**
- stwórzcie funkcję getInnerText(elements), do której przekażecie jako argument znalezione elementy.
- stwórzcie w funkcji tablicę i wypełnij ją tekstami pobranymi z elementów przekazanych jako argument.
- zwróćcie tablicę.

4 - Szukanie adresów linków:
- znajdźcie wszystkie linki i zapiszcie je w zmiennej **task4EL**,
- stwórzcie funkcję getAddress(elements), do której przekażecie jako argument znalezione elementy.
- stwórzcie w funkcji tablicę i wypełnij ją adresami (o ile link posiada adres) pobranymi z elementów przekazanych jako argument.
- zwróćcie tablicę.

5 - Szukanie tagów dzieci:
- znajdźcie wszystkie dzieci elementu o klasie sample_class_3 i zapiszcie je w zmiennej **task5EL**,
- do funkcji, która wyszukuje tagi elementów, przekażecie jako argument, znalezione dzieci.

## JavaScript - zadanie 3. (4pkt)

Korzystając z adresu https://fe-api-jquery.firebaseio.com/fe-api-jquery.json wczytajcie na stronę informacje o filmach. 

Kolejne filmy wstawcie do listy.  
Tytuły filmów wczytajcie do elementów h2, natomiast rok produkcji do elementów h3. 

Utwórzcie te elementy i wstawcie je do DOM. 

Zauważcie, że dane wczytywane z tego adresu są w postaci tablicy. 
Skorzystajcie z pętli, aby wczytać wszystkie filmy.

**Hint:**  
 Zobaczcie jak wygląda w konsoli obiekt, który otrzymujecie jako odpowiedź, zanim wstawicie content na stronę.



# Python - zadanie 1 &ndash; modele (2pkt)

W aplikacji `exam_app` znajdziesz plik `models.py`. Jest w nim utworzony model
`User`, posiadający 3 atrybuty:
* `username` &ndash; unikalne imię użytkownika,
* `password` &ndash; hasło użytkownika przechowywane jako tekst;
    **jest to uproszczenie na potrzeby egzaminu, nie stosuj tego nigdy w rzeczywistym kodzie!**
* `last_update` &ndash; data ostatniej modyfikacji modelu (uzupełniana automatycznie).

Dodaj model przechowujący ustawienia użytkownika:

* **Settings**:
    * `setting_key`: string, max 64 znaki,
    * `value`: string, max. 64 znaki.

Połącz nowo dodany model taką relacją, aby każdy użytkownik mógł mieć wiele właściwości.
Dana właściwość może należeć tylko do jednego użytkownika.

Pamiętaj o utworzeniu i wykonaniu migracji!


# Python - zadanie 2 &ndash; formularz i ciasteczka (6pkt)

Napisz widok, który udostępnisz pod adresem `/login`. Widok powinien zachować się następująco:

* po wejściu metodą GET:
    * wyświetlić formularz logowania, a w nim następujące pola:
        * `username` (pole typu tekstowego),
        * `password` (pole typu password).
* po wejściu metodą POST:
    * sprawdzić, czy istnieje użytkownik o takiej nazwie i takim haśle, jak w podano w formularzu,
    * jeśli istnieje:
        * **ustawić** ciasteczko o nazwie **logged_in**, 
        * ciasteczko powinno żyć 24h,
        * pokazać komunikat "Zalogowano".
    * jeśli nie istnieje:
        * **usunąć** ciasteczko o nazwie **logged_in**, 
        * pokazać komunikat "Błąd logowania".
    

Zadanie rozwiąż używając klas widoków.


# Python - zadanie 3 &ndash; widok (2pkt)

Napisz widok, który:
* będzie dostępny pod adresem: `/divide/{a}/{b}/`, gdzie a i b to liczby,
* po wejściu metodą **GET**, powinien wyświetlić na stronie wynik dzielenia `a` przez `b`,
* w przypadku dzielenia przez zero powinien wyświetlić na stronie komunikat "Nie można dzielić przez 0!".


