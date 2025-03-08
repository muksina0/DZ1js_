


// //1
  const p = document.querySelector('p')
  const str = prompt('напиши цвет ').trim()
   if (str === 'red') {
       document.body.style.backgroundColor = 'red';
       p.innerText='Фон изменён на RED'
   } else if( str ==='blue'){
       document.body.style.backgroundColor = 'blue';
       p.innerText='“Фон изменён на BLUE'
   } else if (str ==='green'){
      document.body.style.backgroundColor = 'green';
       p.innerText='“Фон изменён на GREEN'
  }else{
       prompt('Ошибка! Введите корректный цвет')
   }

   //2
  const red = document.querySelector('.red')
  const green = document.querySelector('.green')
  const yellow = document.querySelector('.yellow')


const color = prompt('Введите цвет светофора (Красный,Зелёный,Жёлтый)').toLowerCase().trim()

 if (color ==='red'){
     red.style.backgroundColor='red';
    alert('stop ')
 } else if (color ==='green'){
     green.style.backgroundColor='green';
     alert('go')
 } else if (color ==='yellow'){
     yellow.style.backgroundColor='yellow';
     alert('wait')
 }else {
     prompt('Введите цвет светофора (Красный,Зелёный,Жёлтый)')
 }