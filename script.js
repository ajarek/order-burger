 const images = [...document.querySelectorAll('.img')]
 let click = 0
 let arr = [190, 190, 150, 80, 50, -80]
 let arr1 = [50, 110, 150, 130, 120, 20]
 const container = document.querySelector('.container')

 function movement() {
     click++
     for (let i = 0; i < images.length; i++) {

         images[i].style.bottom = `${arr[i]}px`
         images[i].style.transition = `3s`;
     }
     if (click > 1) {
         for (let i = 0; i < images.length; i++) {

             images[i].style.bottom = `${arr1[i]}px`
             images[i].style.transition = `3s`;
         }
         click = 0
     }
 }
 container.addEventListener('click', movement)