const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
       console.log('keys'); 
    }
    
})