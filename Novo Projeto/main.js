function horario () {
    const resultado = document.querySelector('.resultado')
    const data = new Date();
    const diaSemana = data.getDay();
    const horaDia = data.getHours();
    
    let diaSemanaTexto;
    
    console.log(diaSemana);
    
    //Segunda
    if (diaSemana === 1 && horaDia >= 7 && horaDia <= 17) {
      resultado.innerHTML = ''
      const p = document.createElement('p')
      p.classList.add('resultado-on')
      p.innerHTML = 'Aberto • 07:00 às 18:00';
      resultado.appendChild(p)
    }
    
    //Terca
    else if ( diaSemana === 2 && horaDia >= 7 && horaDia <= 17) {
      resultado.innerHTML = ''
      const p = document.createElement('p')
      p.classList.add('resultado-on')
      p.innerHTML = 'Aberto • 07:00 às 18:00';
      resultado.appendChild(p)
    }
    
    // Quarta 
    else if (diaSemana === 3 && horaDia >= 7 && horaDia <= 22) {
      resultado.innerHTML = ''
      const p = document.createElement('p')
      p.classList.add('resultado-on')
      p.innerHTML = 'Aberto • 07:00 às 18:00';
      resultado.appendChild(p)
    }
    
    // Quinta
    else if (diaSemana === 4 && horaDia >=7 && horaDia <= 17) {
      const p = document.createElement('p')
      p.classList.add('resultado-on')
      p.innerHTML = 'Aberto • 07:00 às 18:00';
      resultado.appendChild(p)
    }
    
    // Sexta
    else if (diaSemana === 5 && horaDia >= 7 && horaDia <= 17) {
      const p = document.createElement('p')
      p.classList.add('resultado-on')
      p.innerHTML = 'Aberto • 07:00 às 18:00';
      resultado.appendChild(p)
    }
  
    // Sabado
    else if (diaSemana === 6 && horaDia >= 7 && horaDia <= 11) {
      const p = document.createElement('p')
      p.classList.add('resultado-on')
      p.innerHTML = 'Aberto • 07:00 às 12:00';
      resultado.appendChild(p)
    }
  
    // Domingo
  
    else {
      const p = document.createElement('p')
      p.classList.add('resultado-off')
      p.innerHTML = 'Fechado'
      resultado.appendChild(p)
    }
  
  }
  
  horario()

 //BUTAO MENU

 const btnMobile = document.querySelector('#btn-mobile');

 function toggleMenu () {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
 }
 btnMobile.addEventListener('click', toggleMenu) ;

 const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
});