/* ============================================================
   AST Gaming – réglages du site (config.js)
   Ce fichier change les prix, le stock, les codes promo, etc.
   SANS toucher au code du site (index.html).
   À mettre à la racine du dépôt GitHub, à côté de index.html.
   Règles : garde les guillemets "" et les virgules, un seul
   signe « , » entre deux lignes. Lignes qui commencent par //
   = explications (elles ne font rien).
   ============================================================ */
window.AST_CONFIG = {

  // ---------- 1. LIVRAISON ----------
  DELAI: "3 à 4 semaines",          // délai affiché partout sur le site
  FRAIS: { 1: 3000, 2: 3000 },      // 1 = Bamako et Kati, 2 = autres villes (en FCFA)
  GRATUIT_DES: 75000,               // livraison offerte à partir de ce montant (FCFA)

  // ---------- 2. OFFRE DE LANCEMENT (compte à rebours) ----------
  // "fin" : date et heure de fin au format AAAA-MM-JJTHH:MM:SSZ
  // Pour la prolonger, change seulement la date.
  OFFRE: { fin: "2026-12-01T23:59:59Z", txt: "Offre de lancement", code: "AST7X" },

  // ---------- 3. CODES PROMO ----------
  // pct = pourcentage de réduction ; premiere: true = valable sur la 1re commande seulement
  // fin (facultatif) = date de fin propre à ce code
  CODES: {
    AST7X: { pct: 5, premiere: true }
    // , BIENVENUE10: { pct: 10, premiere: true, fin: "2027-01-31T23:59:59Z" }
  },
  // Codes influenceurs : "AST-" + le nom en majuscules. Exemple : ["moussa"] crée le code AST-MOUSSA
  INFLUENCEURS: [],
  POURCENT_INFLUENCEUR: 5,

  // ---------- 4. PRIX (en FCFA) ----------
  // Change juste le nombre après le numéro du produit.
  PRIX: {
    2: 26500,   // Attack Shark X3
    7: 28000,   // VXE Dragonfly R1
    3: 65000,   // AULA F75
    4: 80000,   // AULA HERO 68HE
    12: 25000,   // Clavier K61 60 %
    5: 40000,   // MCHOSE V9 Pro
    8: 7000,   // TANGZU Wan’er SG
    11: 12500,   // Casque gaming filaire
    6: 15000,   // Tapis topographique
    9: 15000,   // Tapis X-Raypad Equate Plus V2
    10: 15000,   // Tapis ATK Dragon japonais
    13: 75000,   // Attack Shark 68HE
    14: 60000,   // MAD 60 HE
    15: 30000,   // Attack Shark X11
    16: 5000,   // Contrôle Freak
    17: 3000,   // Precision Ring
    18: 5000   // Skin cover manette PS5
  },

  // Cartes cadeaux : [libellé, prix]. Tu peux changer les prix ou ajouter/enlever une ligne.
  CARTES: {
    20: [["10 $", 7000], ["20 $", 13500], ["25 $", 17000], ["50 $", 33500], ["100 $", 67000]],        // PlayStation
    21: [["1 000 V-Bucks", 6500], ["2 800 V-Bucks", 15500], ["5 000 V-Bucks", 24500], ["13 500 V-Bucks", 60500]],  // V-Bucks
    22: [["10 $", 7000], ["25 $", 17000], ["50 $", 33500], ["100 $", 67000]],                          // Apple
    23: [["10 $", 7000], ["25 $", 17000], ["50 $", 33500], ["100 $", 67000]]                           // Google Play
  },

  // ---------- 5. STOCK ----------
  // EN_STOCK : numéros des produits réellement en stock (affiche « En stock »).
  // Les autres affichent « Sur commande ». Exemple : EN_STOCK: [2, 15, 16],
  EN_STOCK: [],

  // EPUISE : produits ou couleurs épuisés (le bouton devient « Épuisé »).
  //   Produit entier :  2: true
  //   Une couleur :     "2-1": true   (produit 2, couleur n° 1 = Rouge, voir la liste plus bas)
  // Exemple : EPUISE: { 4: true, "2-1": true },
  EPUISE: {},

  // ---------- 6. VOS SETUPS / AVIS CLIENTS ----------
  // Ajoute de vrais avis (et une photo si tu en as une dans le dossier img, ex : "img/setup1.webp")
  // Exemple : AVIS: [ { n: "Moussa", t: "Livraison rapide, souris parfaite !", img: "img/setup1.webp" } ],
  AVIS: [],

  // ---------- 7. BARRE D'ANNONCES (en haut du site) ----------
  // Laisse vide pour garder les messages automatiques. Sinon, écris tes propres messages :
  // Exemple : ANNONCES: ["Livraison au Mali en 3 à 4 semaines 🚚", "Paiement par Orange Money 🧡"],
  ANNONCES: []
};

/* ============================================================
   LISTE DES PRODUITS (numéro – nom – couleurs avec leur numéro)
   Pour épuiser une couleur : "numéroProduit-numéroCouleur": true
   ============================================================
   2   Attack Shark X3                  0 = Orange ; 1 = Rouge ; 2 = Noir ; 3 = Blanc
   7   VXE Dragonfly R1                 0 = R1 SE Plus (noir) ; 1 = R1 Pro MAX (blanc)
   3   AULA F75                         0 = Bleu dégradé ; 1 = Violet blanc bleu ; 2 = Noir (Thunder Black) ; 3 = Vert cèdre
   4   AULA HERO 68HE                   0 = Rouge contour ; 1 = Rose ; 2 = Violet ; 3 = Noir
   12  Clavier K61 60 %                 0 = Noir ; 1 = Blanc
   5   MCHOSE V9 Pro                    0 = Blanc argent ; 1 = Blanc bleu ; 2 = Rouge ; 3 = Noir ; 4 = Noir rouge
   8   TANGZU Wan’er SG                 0 = Noir ; 1 = Bleu avec micro ; 2 = Blanc
   11  Casque gaming filaire            0 = Bleu ; 1 = Rouge
   6   Tapis topographique              0 = Lignes grises ; 1 = Lignes blanches
   9   Tapis X-Raypad Equate Plus V2    0 = Noir ; 1 = Rouge ; 2 = Rose ; 3 = Bleu
   10  Tapis ATK Dragon japonais        0 = Noir ; 1 = Blanc ; 2 = Gris ; 3 = Bleu ; 4 = Rouge ; 5 = Violet ; 6 = Vert ; 7 = Orange ; 8 = Rose
   13  Attack Shark 68HE                0 = Noir ; 1 = Blanc
   14  MAD 60 HE                        0 = Blanc RGB ; 1 = Blanc V2 ; 2 = Blanc relief Pro ; 3 = Noir 68 touches
   15  Attack Shark X11                 0 = Rouge ; 1 = Blanc ; 2 = Noir
   16  Contrôle Freak                   0 = Blanc ; 1 = Violet ; 2 = Noir
   17  Precision Ring                   0 = Noir souple ; 1 = Gris dur ; 2 = Mixte
   18  Skin cover manette PS5           0 = Camo noir ; 1 = Noir relief ; 2 = Bird ; 3 = Bomb ; 4 = Rainbow ; 5 = Camo gris ; 6 = Octopus
   20  Carte PlayStation                0 = Code numérique
   21  Carte V-Bucks                    0 = Code numérique
   22  Carte Apple                      0 = Code numérique
   23  Carte Google Play                0 = Code numérique
   ============================================================ */
