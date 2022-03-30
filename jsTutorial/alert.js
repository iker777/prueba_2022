
function alertFunction(){
   let n = +prompt('Te digo si tu número es primo')
   for(let i = 2; i <= n; i++){
      if(n == i){
         alert(`Tu número ${n} no es primo`)
         break
      }
      if(n % i == 0){
         alert(`Tu número no es primo porque puede dividirse entre ${i}`)
         break
      }
   }
} // NO FUNCIONA, ESTÁ A MEDIAS