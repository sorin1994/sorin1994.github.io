window.addEventListener("DOMContentLoaded", () => {
  console.log("SCRIPT RULEAZA ✅");

  // ========= CONFIG =========
  const WA_NUMBER = "40773840399"; // fara +, fara spatii

  // ========= PRODUSE =========
  const products = [
    // Rufe - lichid
    { name: "ALIN DETERG,LICHID UNIVERSAL XXL100spalari/COD:897131814", category: "rufe", short: "Detergent lichid universal" , price: "38,00 Ron" },
    { name: "ALIN DETERG.ACTIVE 3EN1 ALIN 60 LV 3L/COD:897131913", category: "rufe", short: "Detergent rufe colorate" , price: "27,50 Ron" },
    { name: "ALIN DETERG.LICHID MARSELLA xxl 100 spalari,5l/897131784", category: "rufe", short: "Parfum exotic, rufe colorate" , price: "38,00 Ron" },
    { name: "ALIN DETERG.MARS.ALIN 55D 4x2750.55/SPALARI ,COD:897131746", category: "rufe", short: "Pentru pete dificile, sport" , price: "23,49 Ron" },
    { name: "ALIN DETERG.TRAD.ALIN LICHID/2x4000ML/BIPACK/COD:897132132", category: "rufe", short: "Detergent lichid de înaltă calitate pentru rufe colorate" , price: "60,00 Ron" },
    { name: "ALIN DETERG.COCO&MELOCOTON 2x4L 80+80BIPACK/COD:897132538", category: "rufe", short: "Aduceți prospețime și un parfum intens de fructe exotice" , price: "60,00 Ron" },

    // Rufe - pudra
    { name: "DETERG,PUDRA MARSELLA-SAC:9+1KG/COD:897105655", category: "rufe", short: "FamilyPack, economic" , price: "60,00 Ron" },
    { name: "DETERG.UNIVERSAL XXL10+1KG,119spalari/cod:897105044", category: "rufe", short: "Format mare, eficiență ridicată" , price: "65,00 Ron" },
    { name: "DETERGENT PUDRA MARSELLA 40doze,2,28/COD:897131654", category: "rufe", short: "Marsella, curățare profundă" , price: "21,24 Ron" },
    { name: "DETERGENT PUDRA COLONIA 40doze,2,28kg/cod:897131647", category: "rufe", short: "Colonia, prospețime" , price: "21,24 Ron" },
    { name: "DETERGENT PUDRA UNIVERSAL(14doze),0,8g/COD:897131630", category: "rufe", short: "Universal, format mic" , price: "7,38 Ron" },
    { name: "DETERG.PUDRA MAESELLAXXXL90doze5,130/cod:897131685", category: "rufe", short: "FamilyPack, economic" , price: "41,88 Ron" },
    { name: "DETERG.UNIVERSAL ALIN 55D 4x2750 ML/:cod:897131722", category: "rufe", short: "îndepărta petele dificile și murdăria invizibilă" , price: "23,49 Ron" },

    // Balsam rufe
    { name: "BALSAM DE RUFE ,concetratBLUE FLORAL XXL100sp-/COD:897131852", category: "rufe", short: "Parfum intens, catifelare" , price: "12,15 Ron" },
    { name: "BALSAM DE RUFE COMPLETE BLUE 80 spalari/COD:897131869", category: "rufe", short: "Miros persistent, țesături moi" , price: "9,00 Ron" },
    { name: "-ALIN Blue Azul Balsam de rufe (100 spălări) 2 L/COD:897131838", category: "rufe", short: "Miros persistent, țesături moi" , price: "12,15 Ron" },

    // Casa / Bucatarie
    { name: "DEGRESANT CONCENTRAT(CURATIRE GEN.) 4in /COD:897132842", category: "degresanti", short: "Curăță, degresează, dezinfectează, dezodorizează" , price: "9,94 Ron" },
    { name: "CURATA CRISTALE pt geamuri/GLASS CLEANER/COD.897116378", category: "casa", short: "Cu alcool, uscare rapidă" , price: "8,74 Ron" },
    { name: "DETERG,UNIVERSAL PENTRU BAIE 1,5LITRI/COD:897127626", category: "casa", short: "Curățare & igienizare" , price: "9,36 Ron" },
    { name: "Amoniac parfumat 1.5l-/COD:897114596", category: "casa", short: "Pentru covoare, tapițerii, oglinzi etc." , price: "7,50 Ron" },

    // Pardoseli
    { name: "DETERGENT PODELE PIN 1,5L.COD:897120115", category: "pardoseli", short: "Parfum revigorant de pin" , price: "7,50 Ron" },
    { name: "DETERG.PODELE FLORAL,1,5LCOD:897121273", category: "pardoseli", short: "Parfum floral elegant" , price: "7,50 Ron" },
    { name: "DETERGENT PODEA MARINE(parfum ocean)/cod:897116491", category: "pardoseli", short: "Parfum oceanic puternic" , price: "7,50 Ron" },

    // Vase
    { name: "DETERGENT VASE ,ORIGINAL MAXI PAK/COD:897131821", category: "vase", short: "Degresare intensivă" , price: "8.66 Ron" },
    { name: "DETERGENT VASE ,ORIGINAL MAXI PAK/COD:897112158", category: "vase", short: "Format mare, uz zilnic" , price: "6,35 Ron" },

    // Inalbitori (Lejie)
    { name: "Lejia cu Detergent 2L înălbitor cu detergent COD:897111458", category: "casa", short: "Igienizare & curățare activă" , price: "11,18 Ron" },
    { name: "Lejie normal 4L COD:897127602", category: "casa", short: "Înălbitor clasic" , price: "20,66 Ron" },
    { name: "Lejia cu Detergent 2L înălbitor cu detergent COD:897112455", category: "casa", short: "Puterea clorului + miros plăcut" , price: "10,00 Ron" },
    { name: "Lejia cu Detergent 2L înălbitor cu detergent parfumat COD:897111465", category: "casa", short: "Igienizare cu parfum fresh" , price: "11,06 Ron" },

    // Igiena personala
    { name: "Gel de duș Migdale & Miere 0.75L COD:897111809", category: "igiena", short: "Nutriție pentru piele uscată" , price: "7,64 Ron" },
    { name: "Gel de duș Ovăz 0.75L COD:897127732", category: "igiena", short: "Pentru piele sensibilă" , price: "7,64 Ron" },
    { name: "Gel de duș Argan 0.75L COD:897127749", category: "igiena", short: "Aromă tropicală intensă" , price: "7,64 Ron" },
    { name: "Gel de duș Herbal 0.75LCOD:897127725", category: "igiena", short: "Prospețime naturală" , price: "7,64 Ron" },
{ name: "Săpun lichid și gel de duș 0.75L COD:897127718", category: "igiena", short: "Prospețime naturală" , price: "7,64 Ron" },  
];

  // ========= ELEMENTE UI =========
  const grid = document.getElementById("productGrid");
  const search = document.getElementById("search");
  const category = document.getElementById("category");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Dacă nu există grid, nu are sens să continuăm
  if (!grid) {
    console.error("NU GASESC #productGrid in pagina. Verifica index.html (id='productGrid').");
    return;
  }

  // ========= HELPERS =========
  function waLink(message) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Incarca inteligent o imagine:
   * incearca .png/.jpg/.jpeg/.webp -> fallback no-image.jpg
   * basePath e ceva de genul: "images/01" (fara extensie)
   */
  function setSmartImage(imgEl, basePath) {
    const candidates = [
      `${basePath}.png`,
      `${basePath}.PNG`,
      `${basePath}.jpg`,
      `${basePath}.JPG`,
      `${basePath}.jpeg`,
      `${basePath}.JPEG`,
      `${basePath}.webp`,
      `${basePath}.WEBP`,
      `images/no-image.jpg`,
    ];

    let idx = 0;

    const tryNext = () => {
      if (idx >= candidates.length) return;
      imgEl.src = candidates[idx++];
    };

    imgEl.onerror = tryNext;
    tryNext();
  }

  // ✅ Compatibil pe telefoane/browsere mai vechi (fără replaceAll)
  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ========= RENDER =========
  function render(list) {
    grid.innerHTML = "";

    if (!list.length) {
      grid.innerHTML = `<div class="note">Nu am găsit produse. Încearcă alt cuvânt.</div>`;
      return;
    }

    list.forEach((p) => {
      // IMPORTANT: indexul original -> ca sa ramana "01,02,03" corect chiar si dupa filtrare
      const originalIndex = products.indexOf(p);
      const imgNumber = originalIndex + 1;

      // padding pentru 01, 02, 03
      const padded = String(imgNumber).padStart(2, "0");

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
          <div class="price">${p.price ? p.price : "Cere ofertă"}</div>

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

      // Incarca imaginea: images/01(.png/.jpg/.jpeg/.webp)
      const imgEl = document.getElementById(imgId);
      setSmartImage(imgEl, `images/${padded}`);
    });
  }

  function applyFilters() {
    const q = (search?.value || "").trim().toLowerCase();
    const c = category?.value || "all";

    const list = products.filter((p) => {
      const text = (p.name + " " + (p.short || "")).toLowerCase();
      const matchesQ = !q || text.includes(q);
      const matchesC = c === "all" || p.category === c;
      return matchesQ && matchesC;
    });

    render(list);
  }

  // ========= EVENTS =========
  if (search) search.addEventListener("input", applyFilters);
  if (category) category.addEventListener("change", applyFilters);

  // Quick order -> WhatsApp
  const quickOrderForm = document.getElementById("quickOrderForm");
  if (quickOrderForm) {
    quickOrderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg =
        (document.getElementById("quickMessage")?.value || "").trim() ||
        "Vreau o ofertă pentru produsele ALIN.";
      window.open(waLink(`Salut! ${msg}`), "_blank");
    });
  }

  // Initial
  render(products);
});