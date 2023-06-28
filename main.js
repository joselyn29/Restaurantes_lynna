const iconoMenu = document.querySelector('#menu-img'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e)=>(

    menu.classList.toggle('active1'),
    document.body.classList.toggle('opacity')


   
));
