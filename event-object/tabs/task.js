const tabs = document.getElementsByClassName('tab'); // [div, div, div]
const contents = document.getElementsByClassName('tab__content'); // [div, div, div]
const arrayTabs = Array.from(tabs);
const arrayContents = Array.from(contents);

arrayTabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    arrayTabs.forEach((t) => t.classList.remove('tab_active'));
    tab.classList.toggle('tab_active');

    arrayContents.forEach((t) => t.classList.remove('tab__content_active'));
    arrayContents[i].classList.toggle('tab__content_active');
  });
});