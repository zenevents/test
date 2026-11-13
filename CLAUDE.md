# Site Debi's Kitchen (debiskitchen.ch)

Site statique publié par GitHub Pages sur debiskitchen.ch (fichier `CNAME`, DNS chez Infomaniak).
Pages : accueil (`index.html`), `traiteur/`, `franchise/`, `chai/`, `contact/`. Styles communs dans `style.css`,
assemblage des adresses e-mail dans `site.js`. Pas d'étape de compilation.

## Menu du foodtruck (page d'accueil)

Le programme et les plats sont dans le `<script>` de `index.html` :
- `dishes` : une fiche par plat (nom, description, allergènes, prix). Chaque plat n'est décrit qu'une fois.
- `weeks` : le programme, une entrée par semaine (du lundi au vendredi).
  Une fermeture s'écrit avec `closed` à la place de `dish` (ex. fêtes 2026 : 21 déc–8 janv, reprise le 11 janv 2027).

Seuls les plats inscrits dans `weeks` sont affichés ; les semaines passées disparaissent toutes seules.
Ordre des fiches : le pad thaï d'abord, puis les plats dans l'ordre où ils seront servis selon le programme.
Les fiches du satay et du basilic (pad kra pao) sont toujours affichées, même hors programme ;
les autres plats n'apparaissent que lorsqu'ils sont programmés.

### Rotation des plats (règle donnée par Debi)

Cycle de 6 semaines, puis on recommence. Les 5 premières semaines sont toujours les mêmes,
seule la 6e change :

1. Pad thaï
2. Satay
3. Pad thaï
4. Basilic (pad kra pao)
5. Pad thaï
6. Un plat à CHF 22 (curry japonais, japchae, laksa, gà façon « bì » ou bún ; le phở bò est à CHF 25)

### Prix

- CHF 19 par défaut.
- CHF 22 : curry japonais, japchae, laksa, gà façon « bì », bún.
- CHF 25 : phở bò.
- +1 CHF sans contenant personnel. Desserts CHF 6 (+2 CHF de consigne), boissons CHF 4.

## Produits

- Poulet IP Suisse (Genève), certifié halal. Le mot « halal » (sous-titre du menu et bloc Origine) renvoie au certificat
  `docs/certificat-halal-volailles-2026.pdf` (Mosquée de Lausanne pour Volailles Importations SA) :
  à remplacer chaque année par le nouveau certificat (il est renouvelé d'année en année).
- Tofu Bio Bourgeon.

## Contacts affichés

- E-mail : info@debiskitchen.ch (confirmé par Debi)
- Téléphone événements : +41 76 629 99 00 (confirmé)
- WhatsApp foodtruck : 076 026 40 57
- Instagram : https://www.instagram.com/debiskitchen.ch/ · Facebook : https://www.facebook.com/debiskitch.ch

## Avis Google

Badge statique (section `#avis` de `index.html`) : note et nombre d'avis mis à jour à la main
quand Debi les communique (dernière valeur : 4,7 – 165 avis).

## Page personnelle `complements/`

Calculatrice personnelle de Debi (ses compléments alimentaires), sans lien avec Debi's Kitchen :
pas de menu, pas de lien depuis le site, `noindex`. Elle ne doit JAMAIS contenir de données dans le code
(le dépôt est public) : Debi importe son fichier Excel, et tout reste dans le localStorage de son navigateur.
Formule reprise de son fichier : cp restants = arrondi((poids pot ouvert − poids pot vide) / poids d'1 cp), min 0 ;
boîtes à commander = arrondi au-dessus((cp/jour × jours − (cp restants + boîtes neuves × cp/boîte)) / cp/boîte), min 0.
