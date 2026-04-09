const menu = document.getElementById("menu");

menu.addEventListener("change", () => {
  document
    .querySelectorAll(".content")
    .forEach((el) => {
      el.style.display = "none";
    });

  const selected = document.getElementById(
    menu.value,
  );
  if (selected) selected.style.display = "block";
});

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
}

function K21() {
  const selected =
    document.getElementsByClassName("FunnelK21");
  selected[0].style.display = "flex";
  const andere = document.getElementsByClassName(
    "Funnel-Andere",
  );
  andere[0].style.display = "none";
}

function Andere() {
  const selected =
    document.getElementsByClassName(
      "Funnel-Andere",
    );
  if (selected.length)
    selected[0].style.display = "flex";
  const andere =
    document.getElementsByClassName("FunnelK21");
  andere[0].style.display = "none";
}
