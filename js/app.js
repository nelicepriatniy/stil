//работа get In touch

const headerDrop = document.querySelector('.header-drop');

if(headerDrop) {
  const headerDropTriger = headerDrop.querySelector('.header-drop-top')
  headerDropTriger.onclick = ()=>{
    headerDrop.classList.toggle('active')
  }
  headerDrop.addEventListener('mouseleave', ()=>{
    headerDrop.classList.remove('active')

  })
}

//работа открытия меню второго уровня

const headerSecondLvlMenus = document.querySelectorAll('.header-btm-list-item');

if(headerSecondLvlMenus.length > 0) {
  for(let i = 0 ;headerSecondLvlMenus.length > i; i++) {
    headerSecondLvlMenus[i].addEventListener('mouseleave', ()=>{
      headerSecondLvlMenus[i].classList.add('remove')

    })
  }
}

(function(){
  let speed = -2; // Скорость скролла.
  
  let scroll = document.querySelector('.header-btm-list');
  
  let left = 0; // отпустили мышку - сохраняем положение скролла
  let drag = false;
  let coorX = 0; // нажали мышку - сохраняем координаты.
  
  scroll.addEventListener('mousedown', function(e) {
    drag = true;
    coorX = e.pageX - this.offsetLeft;
  });
  document.addEventListener('mouseup', function() {
    drag = false;
    left = scroll.scrollLeft;
  });
  scroll.addEventListener('mousemove', function(e) {
    if (drag) {
      this.scrollLeft = left + (e.pageX - this.offsetLeft - coorX)*speed;
    }
  });
  
  })();

// const menuSlider = new Swiper('.header-menu-slider', {
//   speed: 400,
//   spaceBetween: 8,
//   roundLengths: true,
//   freeMode: true,
//   slidesPerView: 'auto',
// });

const expCategories = document.querySelectorAll('.exp-category-item');

if(expCategories.length > 0) {
  expCategories[0].classList.add('active')
  for(let i = 0; expCategories.length > i; i++) {
    expCategories[i].onclick = ()=>{
      for(let o = 0; expCategories.length > o; o++) {
        expCategories[o].classList.remove('active')
      }
      expCategories[i].classList.add('active')
    }

  }
}

const headerBlockSlider = new Swiper('.header-block-slider', {
  speed: 400,
  spaceBetween: 8,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
});

const trandingSlider = new Swiper('.trending-slider', {
  speed: 400,
  spaceBetween: 24,
  slidesPerView: 4.5,
  navigation: {
    prevEl: '.trending-arrow-prev',
    nextEl: '.trending-arrow-next',
  }
});

const expSlider = new Swiper('.exp-slider', {
  speed: 400,
  spaceBetween: 32,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.exp-arrow-next',
  }
});

const specSlider = new Swiper('.spec-r-slider', {
  speed: 400,
  spaceBetween: 32,
  slidesPerView: 1,
  navigation: {
    nextEl: '.spec-arrow-next',
    prevEl: '.spec-arrow-prev',
  }
});

specSlider.on('slideChangeTransitionStart', ()=>{
  const specSlides = document.querySelectorAll('.spec-slider')
  const heading = specSlides[specSlider.activeIndex].getAttribute('data-heading')
  const text = specSlides[specSlider.activeIndex].getAttribute('data-text');
  const specHeading = document.querySelector('.spec-l-heading')
  const specText = document.querySelector('.spec-l-text')
  specHeading.innerHTML = heading;
  specText.innerHTML = text;
})