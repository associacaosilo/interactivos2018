function showMenuMobile() {
  document.getElementById('menu-retratil-mobile').classList.remove("menu-hide");
  document.getElementById('menu-retratil-mobile').classList.add("menu-show");
}

function hideMenuMobile() {
  document.getElementById('menu-retratil-mobile').classList.remove("menu-show");
  document.getElementById('menu-retratil-mobile').classList.add("menu-hide");
}

document.getElementById('show-menu-mobile').onclick = showMenuMobile;
document.getElementById('hide-menu-mobile').onclick = hideMenuMobile;
