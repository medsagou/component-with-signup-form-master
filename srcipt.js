const iconOne = document.getElementById('icon-1');
const iconTwo = document.getElementById('icon-2');
const iconThree = document.getElementById('icon-3');
const iconFour = document.getElementById('icon-4');

const submitBtn = document.getElementById('submit-button');

const firstName = document.querySelector('input[name="first-name"]');
const lastName = document.querySelector('input[name="last-name"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

const paraOne = document.getElementById("paraOne");
const paraTwo = document.getElementById("paraTwo");
const paraThree = document.getElementById("paraThree");
const paraFour = document.getElementById("paraFour");

function check(input){
    if(input.value == ""){
        return false;
    }else{
        return true;
    }
}
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

function blockOrNone(iconNumber, paragraphe, input){
    const bolean = check(input);
    const email = document.querySelector('input[name="email"]');

    if(!bolean){
        iconNumber.style.display='block';
        paragraphe.style.display='block';
        input.style.border='2px solid hsl(0, 100%, 74%)';
        input.setAttribute('placeholder','');

        if(input == email){
            input.setAttribute('placeholder','email@example/com');
            input.setAttribute('state','error');
        }

    } else {
        if(input == email){
            if (isValidEmail(email.value)){
                input.setAttribute('placeholder','Email Address');
                input.setAttribute('state','no-error');
                iconNumber.style.display='none';
                paragraphe.style.display='none';
                input.style.border='1px solid  hsla(246, 25%, 77%, 0.5)';
            }else{
                iconNumber.style.display='block';
                paragraphe.style.display='block';
                input.style.border='2px solid hsl(0, 100%, 74%)';
                input.setAttribute('placeholder','email@example/com');
                input.setAttribute('state','error');
            }
        }else {
            iconNumber.style.display='none';
            paragraphe.style.display='none';
            input.style.border='1px solid  hsla(246, 25%, 77%, 0.5)';

            if(input==password){
                input.setAttribute('placeholder','Password');
            }
            if (input == firstName){
                input.setAttribute('placeholder','First Name');
            }
            if (input == lastName){
                input.setAttribute('placeholder','Last Name');
            }
        }

    }
}

submitBtn.addEventListener('click', function() {
    blockOrNone(iconOne, paraOne, firstName);
    blockOrNone(iconTwo, paraTwo, lastName);
    blockOrNone(iconThree, paraThree, email);
    blockOrNone(iconFour, paraFour, password);
})




// function check(f1,iconNumber){
//     const submitBtn = document.getElementById('submit-button');

//     f1.addEventListener('invalid', function (event) {
//       if (event.target.validity.valueMissing) {

//         event.target.setCustomValidity('');
//         iconNumber.style.display='block';

//       }else{
//       }
//     })
//     f1.addEventListener('change', function (event) {
//       event.target.setCustomValidity('');
//       iconNumber.style.display='none';
//     })
// }
