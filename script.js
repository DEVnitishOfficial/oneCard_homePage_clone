const  toggleBtn = document.querySelector('.toggle_btn');
const togglBtnIcon =  document.querySelector('.toggle_btn i')
const dropdownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
 dropdownMenu.classList.toggle('open')
 // console.log(dropdownMenu);
 const isOpen = dropdownMenu.classList.contains('open')  // here isOpen containing a boolean value either true of false
 togglBtnIcon.classList = isOpen
 ?'fas fa-xmark'
 :'fas fa-bars'
}
