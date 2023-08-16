# [clickme](https://silassentinel.github.io/)


# TODO

Add JS to keep right banner (post overview) in view

```JAVASCRIPT
const element = document.querySelector('#keepMeVisible');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        console.log("in view")
    } else {
      console.log("out of view")
    }
  });
});
observer.observe(element);
```
