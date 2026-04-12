let selectedFunnel = null;
let selectedProduct = null;
let K21 = document.getElementById(
  "Bioritmix K21",
);
let AngebotK21 =
  document.getElementById("Angebot01");
let AngebotAndere =
  document.getElementById("Angebot02");

let gewicht = document.getElementById("gewicht");
let gelenke = document.getElementById("gelenke");

// Event listener for radio buttons

const options = document.querySelectorAll(
  'input[name="funnel"]',
);

options.forEach((option) => {
  option.addEventListener("change", function () {
    selectedFunnel = this.value;

    Angebot();
    showContent();
  });
});

// Event listener for product selection

const menu = document.getElementById("menu");

menu.addEventListener("change", () => {
  document
    .querySelectorAll(".content")
    .forEach((el) => {
      el.style.display = "none";
    });

  selectedProduct = menu.value;
  showContent();
  Bioritmix();
});

function Angebot() {
  if (selectedFunnel === "K21") {
    AngebotK21.style.display = "block";
    AngebotAndere.style.display = "none";
  } else if (selectedFunnel === "Andere") {
    AngebotAndere.style.display = "block";
    AngebotK21.style.display = "none";
  } else {
    AngebotK21.style.display = "none";
    AngebotAndere.style.display = "none";
  }
}

function showContent() {
  if (selectedFunnel === "K21") {
    K21.style.display = "block";
    const productEl = document.getElementById(
      selectedProduct,
    );
    if (productEl)
      productEl.style.display = "none";
  } else if (selectedFunnel === "Andere") {
    const productEl = document.getElementById(
      selectedProduct,
    );
    if (productEl)
      productEl.style.display = "block";
    K21.style.display = "none";
  }
}

// Event listener for logik selection

const menuLogik =
  document.getElementById("menu-logik");

menuLogik.addEventListener("change", () => {
  document
    .querySelectorAll(".content-logik")
    .forEach((el) => {
      el.style.display = "none";
    });

  const selected = document.getElementById(
    menuLogik.value,
  );
  if (selected) selected.style.display = "block";
});

function Bioritmix() {
  document
    .querySelectorAll(".content-logik")
    .forEach((el) => {
      el.style.display = "none";
    });

  const selected =
    document.getElementById("Bioritmix");
  if (selected) selected.style.display = "block";

  let anyVisible = false;

  if (selectedFunnel === "K21") {
    if (
      selectedProduct === "SLIMJET" ||
      selectedProduct === "Ideal Fit" ||
      selectedProduct === "Ideal Fit Turbo"
    ) {
      gewicht.classList.remove("hidden");
      gewicht.classList.add("flex");
      anyVisible = true;
    } else {
      gewicht.classList.remove("flex");
      gewicht.classList.add("hidden");
    }

    if (
      selectedProduct === "ArtiZynt (Kapseln)" ||
      selectedProduct ===
        "Flexosamine / ArtiZynt Gel" ||
      selectedProduct === "Orosteel"
    ) {
      gelenke.classList.remove("hidden");
      gelenke.classList.add("flex");
      anyVisible = true;
    } else {
      gelenke.classList.remove("flex");
      gelenke.classList.add("hidden");
    }
  } else {
    gewicht.classList.remove("flex");
    gewicht.classList.add("hidden");
    gelenke.classList.remove("flex");
    gelenke.classList.add("hidden");
  }

  if (!anyVisible && selected) {
    selected.style.display = "none";
  }
}
