const rotators = document.getElementsByClassName('rotator');
const arrayRotators = Array.from(rotators);

arrayRotators.forEach((rotator, i) => {
  const rotatorCase = Array.from(rotator.getElementsByClassName('rotator__case'));
  let index = 0;

  setInterval(() => {
    index = (index + 1) %  rotatorCase.length;
    rotator.textContent = rotatorCase[index].textContent;
  }, 1000);
});