    Aplicatie de Magazin Online

- Un caz comun de utilizare a Redux este într-o aplicație de tip magazin online. 
- Într-o astfel de aplicație, vei avea stări globale care trebuie să fie accesibile de la mai multe niveluri ale aplicației, cum ar fi:

1. Produsele din coșul de cumpărături
2. Detaliile utilizatorului autentificat
3 .Filtrele de căutare aplicate pe produse
4. Folosind Redux, poți gestiona aceste stări într-un singur loc, fără a le transmite prin props din componentă în componentă. Reducerii și acțiunile din Redux vor gestiona actualizările stării pentru aplicația ta.

    Structura aplicației:

1. Store-ul Redux va ține starea globală a coșului de cumpărături.
2. Componentele React vor trimite acțiuni (de exemplu, pentru a adăuga sau elimina produse din coș).
3. Reducerii vor actualiza starea pe baza acțiunilor trimise.