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