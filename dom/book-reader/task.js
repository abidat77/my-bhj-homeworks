const fontSize = Array.from(document.getElementsByClassName('font-size'));
const book = Array.from(document.getElementsByClassName('book'))[0];
fontSize.forEach((A) => {
  A.addEventListener('click', (e) => {
    e.preventDefault();

    fontSize.forEach((element) => {
      element.classList.remove('font-size_active');
    });
    A.classList.add('font-size_active');
    book.classList.remove('book_fs-small', 'book_fs-big');

    let data = A.getAttribute('data-size');

    if (data === 'small') {
      book.classList.add('book_fs-small');
    } else if (data === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});