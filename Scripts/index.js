export default function run () {

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
window.addEventListener('scroll', function() {
    observer.observe(element);
});
}
