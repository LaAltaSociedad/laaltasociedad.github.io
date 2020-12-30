window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('loaded');

    const logo = document.querySelectorAll('path.loadinglogo');
    console.log(logo);
    logo[0].classList.add('preloadlogo');
    logo[1].classList.add('preloadlogo');
    logo[2].classList.add('preloadlogo');

    const main = document.querySelector('#main');
    main.classList.add('main');

    const tail = document.querySelector('#tail');
    tail.classList.add('tail');
  });
