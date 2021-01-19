# Instrukcja

Żeby odpalić aplikację w środowisku developerskim należy:

1. Uruchomić Server:

```
cd api
yarn
yarn start
```

2. Uruchomić Clienta:

```
yarn
yarn start
```

Aplikacja będzie dostępna pod adresem [LINK](https://localhost:3000/)

# Funkcjonalności

1. Widok `home` przedstawiający wszystkie pobrane książki.

2. Komponent `book` przedstawiający pojedyńczą książkę wraz z jej danymi.

3. Możliwość dodania książki do koszyka poprzez naciśnięcie na nią na widoku 
`home`, a następnie wpisaniu odpowiedniej liczby do `inputa`.

4. Przycisk z ikoną wózka sklepowego umożliwiający przejście do koszyka.

4. Widok koszyka przedstawiający wszystkie dodane książki.

5. Możliwość przejścia z widoku koszyka do widoku płatności.

6. Widok formularza na stronie płatności.

7. Wysyłka danych po wypełnieniu formularza i naciśnięciu przycisku.

### Z dodatkowych funkcjonalności uwzględniłem:

1. Pole `dostępność` dla każdej książki, która reprezentuje ile sztuk można
wrzucić do koszyka i zamówić. Każda książka co render aplikacji generuje sobie 
losową liczbę z przedziału 0 - 10. Jeśli jednak użytkownik doda książkę do
koszyka lub ją z niej usunie wartość ta będzie na bieżąco aktualizowana. Przykład:
Dostępne książki: 3 -> Użytkownik dodaje 1 książkę do koszyka -> Już zawsze
aplikacja będzie pamiętać, że były 3 dostępne książki zamiast generować sobie
wartość z przedziału 0 - 10 (dopóki nie wyczyścimy local storage). Kiedy
użytkownik wypełni formularz te książki, które były w koszyku zostaną wyczyszczone,
a ich dostępność zostanie odpowiednio pomniejszona przez co nie będzie można
w nieskończoność zamawiać tych samych książek.

2. Paginacja.

3. Cache stron z książkami - jeśli aplikacja pobierze jakąś stronę z książkami jest ona
zapisywana przez co przy następnym odwiedzeniu tej strony nie trzeba znowu
fetchować danych.

4. Walidacje formularzy.

5. Modal z danymi książki po naciśnięciu na nią na stronie `home`.

6. Podsumowanie z ceną, ilością stron, ilością unikalnych książek oraz ilością
wszystkich książek.

7. RWD

8. Obsługa błędów przy braku łączności z `serverem`.

9. Zapisywanie zawartości koszyka do `localstorage`.

10. Deploy aplikacji [tutaj!](https://shopping-project-dawid-zebacki.netlify.app/)