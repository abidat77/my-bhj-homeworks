const dropdowns = document.getElementsByClassName('dropdown');
Array.from(dropdowns).forEach((dropdown) => {
  const dropdownValue = document.querySelector('.dropdown__value');
  const dropdownList = document.querySelector('.dropdown__list');
  const dropdownItems = document.getElementsByClassName('dropdown__item');

  dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
  });

  Array.from(dropdownItems).forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault()
      dropdownValue.textContent = item.textContent;
      dropdownList.classList.remove('dropdown__list_active');
    });
  });
});