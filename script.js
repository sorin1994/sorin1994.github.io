console.log("SCRIPT RULEAZA ✅");
// ========= CONFIG =========
const WA_NUMBER = "40773840399"; // fara +, fara spatii

// ========= PRODUSE =========
const products = [
  // Rufe - lichid
  { name: "ALIN DETERG,LICHID UNIVERSAL XXL100spalari/COD:897132842", category: "rufe", short: "Detergent lichid universal" },
  { name: "ALIN DETERG.ACTIVE 3EN1 ALIN 60 LV 3L/COD:897131913", category: "rufe", short: "Detergent rufe colorate" },
  { name: "ALIN DETERG.LICHID MARSELLA xxl 100 spalari,5l/897131784", category: "rufe", short: "Parfum exotic, rufe colorate" },
  { name: "ALIN DETERG.MARS.ALIN 55D 4x2750.55/SPALARI ,COD:897131746", category: "rufe", short: "Pentru pete dificile, sport" },
  { name: "ALIN DETERG.TRAD.ALIN LICHID/2x4000ML/BIPACK/COD:897132132", category: "rufe", short: "Detergent lichid de înaltă calitate pentru rufe colorate" },
{ name: "ALIN DETERG.COCO&MELOCOTON 2x4L 80+80BIPACK/COD:897132538", category: "rufe", short: "Aduceți prospețime și un parfum intens de fructe exotice" },


  // Rufe - pudra
  { name: "DETERG,PUDRA MARSELLA-SAC:9+1KG/COD:897105655", category: "rufe", short: "FamilyPack, economic" },
  { name: "DETERG.UNIVERSAL XXL10+1KG,119spalari/cod:897105044", category: "rufe", short: "Format mare, eficiență ridicată" },
  { name: "DETERGENT PUDRA MARSELLA 40doze,2,28/COD:897131654", category: "rufe", short: "Marsella, curățare profundă" },
  { name: "DETERGENT PUDRA COLONIA 40doze,2,28kg/cod:897131647", category: "rufe", short: "Colonia, prospețime" },
  { name: "DETERGENT PUDRA UNIVERSAL(14doze),0,8g/COD:897131630", category: "rufe", short: "Universal, format mic" },
{ name: "DETERG.PUDRA MAESELLAXXXL90doze5,130/cod:897131685", category: "rufe", short: "FamilyPack, economic" },
{ name: "DETERG.UNIVERSAL ALIN 55D 4x2750 ML/:cod:897131722", category: "rufe", short: "îndepărta petele dificile și murdăria invizibilă" },

  // Balsam rufe
  { name: "BALSAM DE RUFE ,concetratBLUE FLORAL XXL100sp-/COD:897131852", category: "rufe", short: "Parfum intens, catifelare" },
  { name: "BALSAM DE RUFE COMPLETE BLUE 80 spalari/COD:897131869", category: "rufe", short: "Miros persistent, țesături moi" },
{ name: "-ALIN Blue Azul Balsam de rufe (100 spălări) 2 L/COD:897131838", category: "rufe", short: "Miros persistent, țesături moi" },

  // Casa / Bucatarie
  { name: "DEGRESANT CONCENTRAT(CURATIRE GEN.) 4in /COD:897132842", category: "degresanti", short: "Curăță, degresează, dezinfectează, dezodorizează" },
  { name: "CURATA CRISTALE pt geamuri/GLASS CLEANER/COD.897116378", category: "casa", short: "Cu alcool, uscare rapidă" },
  { name: "DETERG,UNIVERSAL PENTRU BAIE 1,5LITRI/COD:897127626", category: "casa", short: "Curățare & igienizare" },
  { name: "Amoniac parfumat 1.5l-/COD:897131852", category: "casa", short: "Pentru covoare, tapițerii, oglinzi etc." },

  // Pardoseli
  { name: "DETERGENT PODELE PIN 1,5L.COD:897120115", category: "pardoseli", short: "Parfum revigorant de pin" },
  { name: "DETERG.PODELE FLORAL,1,5LCOD:897121273", category: "pardoseli", short: "Parfum floral elegant" },
  { name: "DETERGENT PODEA MARINE(parfum ocean)/cod:897116491", category: "pardoseli", short: "Parfum oceanic puternic" },

  // Vase
  { name: "DETERGENT VASE ,ORIGINAL MAXI PAK/COD:897131821", category: "vase", short: "Degresare intensivă" },
  { name: "DETERGENT VASE ,ORIGINAL MAXI PAK/COD:897112158", category: "vase", short: "Format mare, uz zilnic" },

  // Inalbitori (Lejie)
  { name: "Lejie cu detergent 2L COD:897111458", category: "casa", short: "Igienizare & curățare activă" },
  { name: "Lejie normal 4L", category: "casa", short: "Înălbitor clasic" },
  { name: "Lejie parfumată 2L", category: "casa", short: "Puterea clorului + miros plăcut" },
  { name: "Lejie parfum galben 2L", category: "casa", short: "Igienizare cu parfum fresh" },

  // Igiena personala
  { name: "Gel de duș Migdale & Miere 0.75L COD:897111809", category: "igiena", short: "Nutriție pentru piele uscată" },
  { name: "Gel de duș Ovăz 0.75L COD:897127732", category: "igiena", short: "Pentru piele sensibilă" },
  { name: "Gel de duș Cocos 0.75L COD:897127718", category: "igiena", short: "Aromă tropicală intensă" },
  { name: "Gel de duș Herbal 0.75L", category: "igiena", short: "Prospețime naturală" },
];

// ========= ELEMENTE UI =========
const grid = document.getElementById("productGrid");
const search = document.getElementById("search");
const category = document.getElementById("category");
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// ========= HELPERS =========
function waLink(message){
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Incarca inteligent o imagine:
 * incearca .jpg -> .jpeg -> .png -> .webp -> fallback no-image.jpg
 * basePath e ceva de genul: "images/1" (fara extensie)
 */
function setSmartImage(imgEl, basePath){
  const candidates = [
  `${basePath}.png`,
  `${basePath}.PNG`,
  `${basePath}.jpg`,
  `${basePath}.JPG`,
  `${basePath}.jpeg`,
  `${basePath}.JPEG`,
  `${basePath}.webp`,
  `${basePath}.WEBP`,
  `images/no-image.jpg`
];

  let idx = 0;

  const tryNext = () => {
    if (idx >= candidates.length) return;
    imgEl.src = candidates[idx++];
  };

  imgEl.onerror = tryNext;
  tryNext();
}

function escapeHtml(str){
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ========= RENDER =========
function render(list){
  grid.innerHTML = "";

  if(!list.length){
    grid.innerHTML = `<div class="note">Nu am găsit produse. Încearcă alt cuvânt.</div>`;
    return;
  }

  list.forEach((p) => {
    // IMPORTANT: indexul original -> ca sa ramana "01,02,03" corect chiar si dupa filtrare
    const originalIndex = products.indexOf(p);
const imgNumber = originalIndex + 1;

// padding pentru 01, 02, 03
const padded = String(imgNumber).padStart(2, '0');

const imgId = `pimg-${imgNumber}`;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="thumb">
        <img id="${imgId}" alt="${escapeHtml(p.name)}" loading="lazy" />
      </div>

      <div class="card-body">
        <div class="card-title">${escapeHtml(p.name)}</div>
        ${p.short ? `<div class="card-meta">${escapeHtml(p.short)}</div>` : ""}
        <div class="price">Cere ofertă</div>

        <div class="card-actions">
          <a class="btn btn-primary small" target="_blank" rel="noopener"
            href="${waLink(`Salut! Vreau: ${p.name}. Îmi spuneți prețul și disponibilitatea?`)}">
            Comandă
          </a>
          <a class="btn btn-ghost small" target="_blank" rel="noopener"
            href="${waLink(`Salut! Vreau detalii despre: ${p.name}.`)}">
            Detalii
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);

    // Incarca imaginea: images/1(.jpg/.jpeg/.png/.webp)
    const imgEl = document.getElementById(imgId);
    setSmartImage(imgEl, `images/${padded}`);
  });
}

function applyFilters(){
  const q = (search?.value || "").trim().toLowerCase();
  const c = category?.value || "all";

  const list = products.filter(p => {
    const text = (p.name + " " + (p.short || "")).toLowerCase();
    const matchesQ = !q || text.includes(q);
    const matchesC = (c === "all") || (p.category === c);
    return matchesQ && matchesC;
  });

  render(list);
}

// ========= EVENTS =========
if (search) search.addEventListener("input", applyFilters);
if (category) category.addEventListener("change", applyFilters);

// Quick order -> WhatsApp
const quickOrderForm = document.getElementById("quickOrderForm");
if (quickOrderForm){
  quickOrderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = (document.getElementById("quickMessage")?.value || "").trim()
      || "Vreau o ofertă pentru produsele ALIN.";
    window.open(waLink(`Salut! ${msg}`), "_blank");
  });
}

// Initial
render(products);