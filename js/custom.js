/* Resumex — vanilla JS (jQuery + theia-sticky-sidebar removed; sticky is now pure CSS) */
(function () {
  'use strict';

  function hidePreloader() {
    var pre = document.getElementById('preloader');
    if (!pre || pre.dataset.hidden) return;
    pre.dataset.hidden = '1';
    pre.style.transition = 'opacity .6s ease';
    pre.style.opacity = '0';
    setTimeout(function () { pre.style.display = 'none'; }, 600);
  }

  window.addEventListener('load', function () { setTimeout(hidePreloader, 200); });
  // Safety net: never let the preloader trap the page
  setTimeout(hidePreloader, 3000);
})();

const heading = document.getElementById('heading');
const changeBtn = document.getElementById('push');
changeBtn.addEventListener('click', function() {
      if (heading.textContent == 'Niall Bethell') {
        heading.textContent = 'Big Chungus!';
      }else {heading.textContent = 'Niall Bethell';}
    });
function change() {
  const img = document.getElementById('me')
  if (img.src.includes('big-chungus.gif')) {
    img.src = 'img/img-profile.jpg';
  } else {
    img.src = 'img/big-chungus.gif';
  }
}