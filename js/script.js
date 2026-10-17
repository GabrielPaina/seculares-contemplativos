/*SCRIPT DO MENU HAMBÚRGUER*/

document.addEventListener('DOMContentLoaded', () => {
  
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.getElementById('menu');

  if (menuBtn && menu) {
    /*Abre e fecha o menu ao clicar*/
    menuBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const aberto = menu.classList.toggle('open');
      this.setAttribute('aria-expanded', aberto);
    });

    /*Fecha o menu automaticamente*/
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

});