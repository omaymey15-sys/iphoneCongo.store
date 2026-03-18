// ========== INITIALISATION ==========
let produitsIphone = [];
let produitsSamsung = [];
let produitsAccessoires = [];
let tousProduits = [];
let filtresActifs = {
    categorie: 'all',
    recherche: '',
    tri: 'default'
};

// ========== CHARGER LES PRODUITS ==========
function chargerProduits() {
    if (typeof getProduitsIphone !== 'undefined') {
        produitsIphone = getProduitsIphone();
    }
    if (typeof getProduitsSamsung !== 'undefined') {
        produitsSamsung = getProduitsSamsung();
    }
    if (typeof getProduitsAccessoires !== 'undefined') {
        produitsAccessoires = getProduitsAccessoires();
    }
    
    tousProduits = [...produitsIphone, ...produitsSamsung, ...produitsAccessoires];
    afficherProduits();
}

// ========== AFFICHER LES PRODUITS ==========
function afficherProduits() {
    afficherCategorieIphone();
    afficherCategorieSamsung();
    afficherCategorieAccessoires();
}

function afficherCategorieIphone() {
    const grid = document.getElementById('iphoneGrid');
    const categorie = document.getElementById('iphoneCategorie');
    
    if (!grid) return;
    
    let produits = filtrerProduits(produitsIphone);
    
    if (produits.length === 0) {
        categorie.style.display = 'none';
        return;
    }
    
    categorie.style.display = 'block';
    grid.innerHTML = produits.map(produit => creerCarteProduit(produit)).join('');
}

function afficherCategorieSamsung() {
    const grid = document.getElementById('samsungGrid');
    const categorie = document.getElementById('samsungCategorie');
    
    if (!grid) return;
    
    let produits = filtrerProduits(produitsSamsung);
    
    if (produits.length === 0) {
        categorie.style.display = 'none';
        return;
    }
    
    categorie.style.display = 'block';
    grid.innerHTML = produits.map(produit => creerCarteProduit(produit)).join('');
}

function afficherCategorieAccessoires() {
    const grid = document.getElementById('accessoiresGrid');
    const categorie = document.getElementById('accessoiresCategorie');
    
    if (!grid) return;
    
    let produits = filtrerProduits(produitsAccessoires);
    
    if (produits.length === 0) {
        categorie.style.display = 'none';
        return;
    }
    
    categorie.style.display = 'block';
    grid.innerHTML = produits.map(produit => creerCarteProduit(produit)).join('');
}

// ========== FILTRER LES PRODUITS ==========
function filtrerProduits(produits) {
    let filtres = produits;
    
    // Filtrer par recherche
    if (filtresActifs.recherche) {
        filtres = filtres.filter(p => 
            p.nom.toLowerCase().includes(filtresActifs.recherche.toLowerCase()) ||
            p.description.toLowerCase().includes(filtresActifs.recherche.toLowerCase())
        );
    }
    
    // Trier
    if (filtresActifs.tri === 'price-asc') {
        filtres.sort((a, b) => a.prix - b.prix);
    } else if (filtresActifs.tri === 'price-desc') {
        filtres.sort((a, b) => b.prix - a.prix);
    } else if (filtresActifs.tri === 'rating') {
        filtres.sort((a, b) => b.note - a.note);
    }
    
    return filtres;
}

// ========== CRÉER UNE CARTE PRODUIT ==========
function creerCarteProduit(produit) {
    const enStockClass = produit.en_stock ? '' : 'out-of-stock';
    const enStockTexte = produit.en_stock ? 'EN STOCK' : 'RUPTURE';
    
    return `
        <div class="produit-card ${enStockClass}" onclick="ouvrirModal(${produit.id})">
            <div class="produit-stock-badge">${enStockTexte}</div>
            <div class="produit-image">
                <img src="${produit.image}" alt="${produit.nom}" onerror="this.src='assets/placeholder.jpg'">
            </div>
            <h4>${produit.nom}</h4>
            <div class="produit-rating">
                <i class="fas fa-star"></i> ${produit.note} (${produit.avis} avis)
            </div>
            <p class="prix">${produit.prix}$</p>
            <p class="description">${produit.description}</p>
            <button class="btn btn-secondary" onclick="event.stopPropagation(); commanderProduit('${produit.nom}', ${produit.prix})">Commander</button>
        </div>
    `;
}

// ========== MODAL ==========
const modal = document.getElementById('productModal');
const closeBtn = document.querySelector('.close');

function ouvrirModal(produitId) {
    const produit = tousProduits.find(p => p.id === produitId);
    
    if (!produit) return;
    
    document.getElementById('modalImage').src = produit.image;
    document.getElementById('modalNom').textContent = produit.nom;
    document.getElementById('modalPrix').textContent = `${produit.prix}$`;
    document.getElementById('modalDescription').textContent = produit.description;
    
    // Afficher les specs
    const specsDiv = document.getElementById('modalSpecs');
    let specsHTML = '<div class="specs-list">';
    for (let [key, value] of Object.entries(produit.specs)) {
        specsHTML += `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${Array.isArray(value) ? value.join(', ') : value}</p>`;
    }
    specsHTML += '</div>';
    specsDiv.innerHTML = specsHTML;
    
    modal.style.display = 'block';
}

if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ========== COMMANDE PRODUIT ==========
function commanderProduit(nom, prix) {
    alert(`Produit: ${nom}\nPrix: ${prix}$\n\nMerci de votre intérêt! Contactez-nous pour finaliser votre commande.`);
}

// ========== ÉVÉNEMENTS FILTRES ==========
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const sortSelect = document.getElementById('sortSelect');

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        filtresActifs.recherche = e.target.value;
        afficherProduits();
    });
}

if (categorySelect) {
    categorySelect.addEventListener('change', function(e) {
        filtresActifs.categorie = e.target.value;
        afficherProduits();
    });
}

if (sortSelect) {
    sortSelect.addEventListener('change', function(e) {
        filtresActifs.tri = e.target.value;
        afficherProduits();
    });
}

// ========== MENU MOBILE ==========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = 'linear-gradient(135deg, #007AFF, #FF6B35)';
        navLinks.style.gap = '0';
        navLinks.style.zIndex = '99';
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        if (navLinks) navLinks.style.display = 'none';
    });
});

// ========== FORMULAIRE DE CONTACT ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nom = this.children[0].children[0].value;
        const email = this.children[1].children[0].value;
        
        alert(`Merci ${nom}!\n\nVotre message a été envoyé avec succès.\nNous vous répondrons sur ${email} dans les 24h.`);
        
        this.reset();
    });
}

// ========== INITIALISATION AU CHARGEMENT ==========
window.addEventListener('load', function() {
    chargerProduits();
    console.log('✅ Site iPhone Congo Store chargé avec succès!');
    console.log('📦 Produits chargés:', tousProduits.length);
});
