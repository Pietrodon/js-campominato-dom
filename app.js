//richiamo elementi html
const button = document.getElementById('start-game');
const sceltaLivello = document.getElementById('selec-level');
const griglia = document.querySelector('.grid')

// creazione elemento div 
const div = document.createElement('div')
// ascolto click sul bottone play
button.addEventListener('click', function(){
// console.log(sceltaLivello.value)
//verifica del livello scelto 
    if(sceltaLivello.value === 'easy'){
        for (let i = 1; i <101; i++) {
            console.log([i]); 
            // richiamo elemento creato e appendo i valori ciclati dal for
            const div = document.createElement('div');
            div.append([i]);
            // assegno la classe al mio cubo
            div.classList.add('cubo-easy');
            griglia.append(div);
            div.addEventListener('click',function(){
                div.classList.add('selezionato')
            })
        }
    } else if(sceltaLivello.value === 'normal'){
        for (let i = 1; i < 82; i++) {
            console.log([i]);
            const div = document.createElement('div');
            div.append([i]);
            div.classList.add('cubo-normal');
            griglia.append(div); 
            div.addEventListener('click',function(){
                div.classList.add('selezionato')
            })  
        }
    } else{
        for (let i = 1; i < 50; i++) {
            console.log([i]);
            const div = document.createElement('div');
            div.append([i]);
            div.classList.add('cubo-crazy');
            griglia.append(div); 
            div.addEventListener('click',function(){
                div.classList.add('selezionato')
            }) 
        }
    }
})
// funzione per estrarre numeri bomba
  function randomNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
   }
  
let bombNumber = (randomNumber(1,16));
console.log(bombNumber)

const bombeEstratte =[]

console.log(bombNumber)

 for (let i = 0; i <= 16; i++) {
        
 }
 console.log(bombNumber)
