window.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  // * ==== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.menu__toggle');
    const menu = document.querySelector('.menu__list');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    const links = document.querySelectorAll('.menu__link');

    menuBtn.addEventListener('click', e => {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', e => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    links.forEach(l => {
      l.addEventListener('click', e => {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    })
  })();

  const swiper = new Swiper(".face-panel__box", {
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const swipers = new Swiper(".slider", {
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  construcror();

  function construcror() {
    const construcrorEl = document.querySelector('.constructor__details');
    const totalPriceEl = document.querySelector('#total-price');
    const length = document.querySelector('.length-output');
    const fill = document.querySelector('.fill');
    const rangeSlider = document.querySelector('.input-range');

    function setFilBg() {
      fill.style.width = rangeSlider.value * 10 + '%'
    }
    setFilBg();

    totalPriceEl.textContent = rangeSlider.value * 10000;

    construcrorEl.addEventListener('input', e => {
      setFilBg();
      let currentValue = e.target.value;
      let priceFromRange = 10000;

      if (e.target.classList.contains('input-range')) {
        length.textContent = currentValue;

        price = currentValue * priceFromRange;
      }

      totalPriceEl.textContent = price;
    });
  }

  //* Show scroll top
  function scrollTop() {
    const scrollTopEl = document.getElementById('scroll-top');
    if (this.scrollY >= 560) {
      scrollTopEl.classList.add('show-scroll');
    } else {
      scrollTopEl.classList.remove('show-scroll');
    }
  }

  // * ==== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');

      if (modalEl) {
        openBtnEl.forEach(el => {
          el.addEventListener('click', e => {

            if (e.target) {
              e.preventDefault()
            }

            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        })

        closeEl.forEach(btn => {
          btn.addEventListener('click', e => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        })

        modalEl.addEventListener('click', e => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        })
      };
    };
    bindModal('.btn-back-call', '.popup--back-call', '.popup__close');
    bindModal('.btn-request', '.popup--request', '.popup__close');
  }());

  window.addEventListener('scroll', scrollTop);
})