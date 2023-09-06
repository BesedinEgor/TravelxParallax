function mobileNav() {
  // Mobile nav button
  const navBtnOpen = document.querySelector("#modalOpen");
  const navBtnClose = document.querySelector("#modalClose");
  const navMobileOverlay = document.querySelector("#mobileOverlay");
  const nav = document.querySelector("#mobileNav");

  navBtnOpen.onclick = toggleMobileNav;
  navBtnClose.onclick = toggleMobileNav;
  navMobileOverlay.onclick = toggleMobileNav;

  function toggleMobileNav() {
    navMobileOverlay.classList.toggle("mobile-nav-overlay--open");
    nav.classList.toggle("mobile-nav--open");
    document.body.classList.toggle("no-scroll");
  }
}

export default mobileNav;
