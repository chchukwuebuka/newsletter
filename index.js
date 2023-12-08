const form = document.querySelector('form');
const cardEl = document.querySelector('.container');
const cardEls = document.querySelector('.success-message');
const emailError = document.querySelector('.invalid-email');
const successIn = document.querySelector('.success-in');
const email = document.getElementById('email').value;


form.addEventListener('submit', (e) => {
    e.preventDefault()
    cardEl.classList.add('hide');
    cardEls.classList.remove('hide');
});

cardEls.addEventListener('click', () => {
  cardEl.classList.remove('hide');
    cardEls.classList.add('hide');
    successIn.textContent = 'emmanuel.henry71@gmail.com'
})

  function validate(){ 
        const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        if(regex.test(email)) {
          emailError.textContent = 'valid email'
          return true
  
        } else {
          emailError.textContent = "valid email required*"
          return false
        }
      };

