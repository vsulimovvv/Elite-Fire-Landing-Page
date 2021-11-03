const swiper = new Swiper(".face-panel__box", {
  slidesPerView: 1,
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

// * LengthSlider
// rangeSliderLength();

construcror();

function construcror() {
  function rangeSliderLength() {
    const rangeSlider = document.querySelector('.input-range');
    const length = document.querySelector('.length-output');
    const fill = document.querySelector('.fill');
    const totalPriceEl = document.querySelector('#total-price');
    const checkInputs = document.querySelectorAll('.check__input');
    // console.log(checkInputs)

    // let totalPrice = 0;

    function setFilBg() {
      fill.style.width = rangeSlider.value * 10 + '%'
    }

    totalPriceEl.textContent = `${rangeSlider.value * 10000} ₽`;
    // totalPrice = `${rangeSlider.value * 10000} ₽`
    // checkInputs.forEach(input => {
    //   console.log(input.checked)
    //   if (input.checked) {
    //     // totalPrice + 5000
    //     totalPrice += 5000;
    //   }
    // });


    // ₽
    rangeSlider.addEventListener('input', e => {
      length.textContent = rangeSlider.value;
      totalPriceEl.textContent = `${rangeSlider.value * 10000} ₽`;


      // totalPriceEl.textContent = totalPrice;

      // totalPriceEl.textContent
      setFilBg();
    });
  };

  rangeSliderLength();
}

const rangeSliderForPrice = () => {
  const rangeSlider = document.querySelectorAll('.range-slider');

  rangeSlider.forEach(item => {
    if (item) {
      noUiSlider.create(item, {
        start: [100, 1000],
        connect: true,
        step: 1,
        range: {
          'min': [50],
          'max': [1200]
        }
      });

      const input0 = document.getElementById('input-0');
      const input1 = document.getElementById('input-1');

      const inputs = [input0, input1];

      item.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
      });

      const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        item.noUiSlider.set(arr);
      };

      inputs.forEach((el, index) => {
        el.addEventListener('change', e => {
          setRangeSlider(index, e.currentTarget.value);
        });
        el.addEventListener('input', e => {
          setRangeSlider(index, e.currentTarget.value);
        });
      });
    };
  });
};
rangeSliderForPrice();


// 
// function updateCount() {
//   const totalPrice = document.querySelector('#total-price');
//   let count = parseInt(totalPrice.textContent);
//   let speed = 250;

//   let targetValue = `${rangeSlider.value * 10000}`
//   console.log('targetValue', targetValue)
//   console.log('count', count)

//   const inc = +targetValue / speed;
//   console.log(inc)

// if (count < +targetValue) {
//   totalPrice.textContent = `${Math.ceil(count + inc)} ₽`;
//   setTimeout(updateCount, 1);
// } else if (count >= +targetValue) {
//   totalPrice.textContent = `${Math.ceil(count - inc)} ₽`;
//   count = `${Math.ceil(count - inc)} ₽`;
//   setTimeout(updateCount, 1);
// } else {

// count.textContent = `${+targetValue}`;
// }

// if (count < +targetValue) {
//   totalPrice.textContent = `${Math.ceil(count + inc)} ₽`;
//   setTimeout(updateCount, 1);
// } else {

//   count.textContent = `${+targetValue}`;
// }


// updateCount();

const showMenu = () => {
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
};
showMenu();

// const modals = () => {
//   function bindModal(openBtn, modal, close, overlay = 'overaly') {
//     const openBtnEl = document.querySelector(openBtn);
//     const modalEl = document.querySelector(modal);
//     const closeEl = document.querySelector(close);
//     const overlayEl = document.querySelector(overlay);
//     const body = document.querySelector('body');


//     if (modalEl) {
//       openBtnEl.addEventListener('click', e => {
//         if (e.target) {
//           e.preventDefault()
//         }

//         modalEl.classList.add('active');
//         overlayEl.classList.add('active');
//         body.classList.add('no-scroll');
//       });

//       closeEl.addEventListener('click', e => {
//         modalEl.classList.remove('active');
//         overlayEl.classList.remove('active');
//         body.classList.remove('no-scroll');
//       });

//       modalEl.addEventListener('click', e => {
//         if (e.target === modalEl) {
//           modalEl.classList.remove('active');
//           overlayEl.classList.remove('active');
//           body.classList.remove('no-scroll');
//         }
//       })
//     };
//   };

//   bindModal('.menu', '.menu__toggle', '.cart__close', '.overlay');

// };
// modals();