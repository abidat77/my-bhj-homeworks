function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();
    if (bottom < 0) {
      return false;
    }
    if (top > window.innerHeight) {
      return false;
    }
    return true;
  }
  
  document.addEventListener('scroll', () => {
    const revel = document.querySelectorAll('.reveal');
    revel.forEach((element) => {
      if(isVisible(element)){
          element.classList.add('reveal_active')
      }else{
          element.classList.remove('reveal_active')
      }
    })
  }); 