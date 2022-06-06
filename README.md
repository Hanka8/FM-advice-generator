# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JS


### What I learned

how to animate on click

```
const animate = () => {
  btn.classList.remove("animate");
  void btn.offsetWidth;
  btn.classList.add("animate");
}
```

how to get JSON data from API

```
const getAdvice = async() => {
  const resp = await fetch("https://api.adviceslip.com/advice",  { cache: "no-cache" });
  //add { cache: "no-cache" } to prevent repeated response
  const data = await resp.json();
  const id = data.slip.id;
  const advice = data.slip.advice;
  adviceText.textContent = advice;
  adviceId.textContent = id;
}
```

## Author

- Frontend Mentor - [@Hanka8](https://www.frontendmentor.io/profile/Hanka8)
