const form = document.querySelector('.form form');
const inputs = document.querySelectorAll('.form input');

form.addEventListener('submit', (e) => {
 e.preventDefault();
 inputs.forEach((input) => {
  // console.log(input.value);
  if (!input.value) {
   input.parentElement.classList.add('error');
  } else {
   input.parentElement.classList.remove('error');
   if (input.type == 'email') {
    if (validateEmail(input.value)) {
     input.parentElement.classList.remove('error');
    } else {
     input.parentElement.classList.add('error');
    }
   }
  }
 });
});

function validateEmail(email) {
 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return re.test(String(email).toLowerCase());
}

//I couldn't sort out the issue and correct it in the email validation. There has been no light for days. My apology for submitting an incomplete work.