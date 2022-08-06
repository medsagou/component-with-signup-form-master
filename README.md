# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./design/active-states.jpg.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
no process just keep going when you get stuck.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [Modern css reset](https://piccalil.li/blog/a-modern-css-reset/) - piccalil


### What I learned


```html
<form class="form-container">
                <div class="error-icon-input-container">
                    <input name="first-name" type="text" class="form-elem | first-name" placeholder="First Name" state="no-error" required>
                    <p id="paraOne" class="error-msg | error-mas-first-Name" style="display: none;">First Name cannot be empty</p>
                    <img id="icon-1" src="./images/icon-error.svg" alt="" class="error-icon | icon-1" style="display: none;">
                </div>

                <div class="error-icon-input-container">
                    <input name="last-name" type="text" class="form-elem | last-name" placeholder="Last Name" state="no-error" required>
                    <p id="paraTwo" class="error-msg | error-mas-Last-Name" style="display: none;">Last Name cannot be empty</p>
                    <img id="icon-2" src="./images/icon-error.svg" alt="" class="error-icon | icon-2" style="display: none;">
                </div>

                <div class="error-icon-input-container">
                    <input name="email" type="email" class="form-elem | Email" placeholder="Email Address" state="no-error" required>
                    <p id="paraThree" class="error-msg | error-mas-email" style="display: none;">Looks like this is not an email</p>
                    <img id="icon-3" src="./images/icon-error.svg" alt="" class="error-icon | icon-3" style="display: none;">
                </div>

                <div class="error-icon-input-container">
                    <input name="password" type="password" class="form-elem | password" placeholder="Password" state="no-error" required>
                    <p id="paraFour" class="error-msg | error-mas-password" style="display: none;">Password cannot be empty</p>
                    <img id="icon-4" src="./images/icon-error.svg" alt="" class="error-icon | icon-4" style="display: none;">
                </div>
                <button id="submit-button" type="submit" class="submit-button"> Claim your free trial</button>
                <div class="text-below">
                    <p class="text-below-text">By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></p>
                </div>
            </form>
```
```css
/* text below */
.text-below{
  font-size: .7rem;
  color: var(--neutral-100);
}
.text-below-text{
  margin: auto;
  text-align: center;
  max-width: none;
  font-weight: var(--fw-700);
  margin-top: 0;
}


/* errer message */
.form-container{
  position: relative;
}
/* .form-elem[state="erreur"]{

  border: 2px solid hsl(358, 40%, 65%);
} */

.error-msg {
  text-align: end;
  color: hsl(0, 100%, 74%);
  font-style: italic;
}

.error-icon-input-container {
  position: relative;
  height: min-content;
}
.error-icon{
  position: absolute;
  width: 1.3rem;
  right: 1.5rem;
  top: 1.9rem;
}
```
```js
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
        iconNumber.style.display='none';
        paragraphe.style.display='none';
        input.style.border='1px solid  hsla(246, 25%, 77%, 0.5)';
        if(input == email){
            input.setAttribute('placeholder','Email Address');
            input.setAttribute('state','no-error');
        }
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

submitBtn.addEventListener('click', function() {
    blockOrNone(iconOne, paraOne, firstName);
    blockOrNone(iconTwo, paraTwo, lastName);
    blockOrNone(iconThree, paraThree, email);
    blockOrNone(iconFour, paraFour, password);
})

```

### Continued development

My first project with menu, Im so glad for finishing this work. Specialy the mobile version with the side menu on the right.


### Useful resources

- [W3schools](https://www.w3schools.com/) - This helped me for javaScript eventListener. I really liked this pattern and will use it going forward.
- [stackoverflow](https://stackoverflow.com/) - this website help me on the javascript when i get stock.
## Author

- Website - [Mohamed Sagou](https://github.com/medsagou)
- Frontend Mentor - [@medsagou](https://www.frontendmentor.io/profile/medsagou)
- Twitter - [@sagoumohamed](https://www.twitter.com/sagoumohamed)

## Acknowledgments

nothing for this project.
