// Fichier : produits/iphone.js
// Données des produits iPhone pour iPhone Congo Store

function getProduitsIphone() {
    return [
        {
            id: 1,
            nom: "iPhone 15 Pro Max",
            prix: 1299,
            description: "Écran Super Retina XDR 6,7 pouces, puce A17 Pro, appareil photo pro 48 MP, titane.",
            image: "https://via.placeholder.com/300x200?text=iPhone+15+Pro+Max",
            specs: {
                écran: "6,7 pouces Super Retina XDR (120 Hz)",
                processeur: "A17 Pro (3 nm)",
                stockage: "256 Go",
                caméra: "48 MP + téléobjectif x5",
                batterie: "Jusqu'à 29 h de lecture vidéo"
            },
            note: 4.9,
            avis: 245,
            en_stock: true
        },
        {
            id: 2,
            nom: "iPhone 15 Pro",
            prix: 1099,
            description: "Écran 6,1 pouces, puce A17 Pro, triple appareil photo, design titane.",
            image: "https://via.placeholder.com/300x200?text=iPhone+15+Pro",
            specs: {
                écran: "6,1 pouces Super Retina XDR (120 Hz)",
                processeur: "A17 Pro",
                stockage: "128 Go",
                caméra: "48 MP + téléobjectif x3",
                batterie: "Jusqu'à 23 h"
            },
            note: 4.8,
            avis: 189,
            en_stock: true
        },
        {
            id: 3,
            nom: "iPhone 15 Plus",
            prix: 899,
            description: "Grand écran 6,7 pouces, puce A16, appareil photo 48 MP, excellente autonomie.",
            image: "https://via.placeholder.com/300x200?text=iPhone+15+Plus",
            specs: {
                écran: "6,7 pouces Super Retina XDR",
                processeur: "A16 Bionic",
                stockage: "128 Go",
                caméra: "48 MP + ultra grand-angle",
                batterie: "Jusqu'à 26 h"
            },
            note: 4.7,
            avis: 112,
            en_stock: true
        },
        {
            id: 4,
            nom: "iPhone 15",
            prix: 799,
            description: "Écran 6,1 pouces, puce A16, appareil photo 48 MP, Dynamic Island.",
            image: "https://via.placeholder.com/300x200?text=iPhone+15",
            specs: {
                écran: "6,1 pouces Super Retina XDR",
                processeur: "A16 Bionic",
                stockage: "128 Go",
                caméra: "48 MP",
                batterie: "Jusqu'à 20 h"
            },
            note: 4.6,
            avis: 203,
            en_stock: true
        },
        {
            id: 5,
            nom: "iPhone 14 Pro Max",
            prix: 1099,
            description: "Écran 6,7 pouces, puce A16, appareil photo 48 MP, toujours l'excellence.",
            image: "https://via.placeholder.com/300x200?text=iPhone+14+Pro+Max",
            specs: {
                écran: "6,7 pouces Super Retina XDR (120 Hz)",
                processeur: "A16 Bionic",
                stockage: "256 Go",
                caméra: "48 MP",
                batterie: "Jusqu'à 28 h"
            },
            note: 4.8,
            avis: 156,
            en_stock: false
        },
        {
            id: 6,
            nom: "iPhone 14 Pro",
            prix: 999,
            description: "Écran 6,1 pouces, puce A16, Dynamic Island, appareil photo pro.",
            image: "https://via.placeholder.com/300x200?text=iPhone+14+Pro",
            specs: {
                écran: "6,1 pouces Super Retina XDR (120 Hz)",
                processeur: "A16 Bionic",
                stockage: "128 Go",
                caméra: "48 MP",
                batterie: "Jusqu'à 23 h"
            },
            note: 4.7,
            avis: 134,
            en_stock: true
        },
        {
            id: 7,
            nom: "iPhone 14",
            prix: 699,
            description: "Écran 6,1 pouces, puce A15, excellent rapport qualité-prix.",
            image: "https://via.placeholder.com/300x200?text=iPhone+14",
            specs: {
                écran: "6,1 pouces Super Retina XDR",
                processeur: "A15 Bionic",
                stockage: "128 Go",
                caméra: "12 MP",
                batterie: "Jusqu'à 19 h"
            },
            note: 4.5,
            avis: 98,
            en_stock: true
        },
        {
            id: 8,
            nom: "iPhone SE (3e génération)",
            prix: 429,
            description: "Compact, puce A15, Touch ID, parfait pour un premier iPhone.",
            image: "https://via.placeholder.com/300x200?text=iPhone+SE",
            specs: {
                écran: "4,7 pouces Retina HD",
                processeur: "A15 Bionic",
                stockage: "64 Go",
                caméra: "12 MP",
                batterie: "Jusqu'à 15 h"
            },
            note: 4.4,
            avis: 87,
            en_stock: true
        },
        {
            id: 9,
            nom: "iPhone 13",
            prix: 599,
            description: "Écran 6,1 pouces, puce A15, double appareil photo, toujours performant.",
            image: "https://via.placeholder.com/300x200?text=iPhone+13",
            specs: {
                écran: "6,1 pouces Super Retina XDR",
                processeur: "A15 Bionic",
                stockage: "128 Go",
                caméra: "12 MP (double)",
                batterie: "Jusqu'à 19 h"
            },
            note: 4.6,
            avis: 211,
            en_stock: true
        },
        {
            id: 10,
            nom: "iPhone 13 mini",
            prix: 499,
            description: "Le petit format puissant, écran 5,4 pouces, puce A15.",
            image: "https://via.placeholder.com/300x200?text=iPhone+13+mini",
            specs: {
                écran: "5,4 pouces Super Retina XDR",
                processeur: "A15 Bionic",
                stockage: "128 Go",
                caméra: "12 MP",
                batterie: "Jusqu'à 17 h"
            },
            note: 4.5,
            avis: 76,
            en_stock: false
        }
    ];
}
