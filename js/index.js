const bur_open = document.querySelector('.navbar__sub_list')
const btn = document.querySelector('.site_header__burger');
const body = document.querySelector('body');
const site_headi = document.querySelector('.site_header');
const site_hero = document.querySelector('main');
btn.addEventListener('click', () => {
  bur_open.classList.toggle('open');
  body.classList.toggle('overflow');
  site_headi.classList.toggle('bgcol');
  btn.classList.toggle('exit');
  site_hero.classList.toggle('dis_non');
});
window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 650px)").matches) {
    bur_open.classList.remove('open');
    site_headi.classList.remove('bgcol');
    btn.classList.remove('exit');
    body.classList.remove('overflow');
    site_hero.classList.remove('dis_non');
  }
});
site_head.addEventListener("scroll", () => {
  if (document.scrollTop > 0) {
    site_headi.classList.toggle('bgcol');
  }
});
