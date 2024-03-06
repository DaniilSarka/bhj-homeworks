document.addEventListener('DOMContentLoaded', function() {
  const fontSizeButtons = document.querySelectorAll('.font-size');

  fontSizeButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const size = this.getAttribute('data-size');

      document.querySelector('.book').classList.remove('book_fs-big', 'book_fs-small');
      document.querySelector('.book').classList.add('book_fs-' + size);

      fontSizeButtons.forEach(function(button) {
        button.classList.remove('font-size_active');
      });

      this.classList.add('font-size_active');
    });
  });
}); 


/*
document.addEventListener('DOMContentLoaded', function() {
    const fontSizeButtons = document.querySelectorAll('.font-size');
  
    fontSizeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const size = this.getAttribute('data-size');
  
        document.querySelector('.book').classList.remove('book_fs-big', 'book_fs-small');
        document.querySelector('.book').classList.add('book_fs-' + size);
  
        this.classList.add('font-size_active');
        this.parentElement.querySelector('.font-size').classList.remove('font-size_active');
      });
    });
  });
  */

  /*document.addEventListener('DOMContentLoaded', function() {
    const fontSizeButtons = document.querySelectorAll('.font-size');
  
    fontSizeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const size = this.getAttribute('data-size');
  
        document.querySelector('.book').classList.remove('book_fs-big', 'book_fs-small');
        document.querySelector('.book').classList.add('book_fs-' + size);
  
        fontSizeButtons.forEach(function(button) {
          button.classList.remove('font-size_active');
        });
  
        this.classList.add('font-size_active');
      });
    });
  });
  */


  /*const btn = Array.from(document.querySelectorAll('.font-size'));
  let size;
  
  btn.forEach(value => {
    value.addEventListener('click', selectBtn)
  })
  
  function selectBtn(event) {
    btn.forEach(value => {
      value.classList.remove('font-size_active')
    })
  
    this.classList.add('font-size_active');
    size = this.getAttribute('data-size');
    event.preventDefault()
  }
  */