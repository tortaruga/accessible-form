# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

### Overview

I tried to handle the validation differently at first, by selecting all inputs at once instead of individually, and then using .forEach() to determine if the input was valid or not. It worked for everything except when it came to displaying the dialog when all input was valid, so I just started over with a different approach because I had ran out of ideas on how to fix my existing code and also of patience. I think this final version is a less messy, but just slightly.

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/accessible-form-tvKsr5mgd-](https://www.frontendmentor.io/solutions/accessible-form-tvKsr5mgd-)
- Live Site URL: [https://tortaruga.github.io/accessible-form/](https://tortaruga.github.io/accessible-form/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS

### What I learned

I learned that I hate validating forms.

### Continued development

Everything works fine, but I think my approach is a bit messy and the validating process could be done much more efficiently, so I will continue practicing. I also think I'm not good at giving good names to classes, variables and functions.

## Author

- Frontend Mentor - [@tortaruga](https://www.frontendmentor.io/profile/tortaruga)
