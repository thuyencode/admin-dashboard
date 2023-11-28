import 'iconify-icon'

const leftSidebar = document.querySelector('#left-sidebar')
const leftSidebarToggle = document.querySelector('#left-sidebar-toggle')

leftSidebarToggle.addEventListener('click', () => {
  if (leftSidebar.style.display === 'block') {
    leftSidebar.style.display = 'none'
    leftSidebarToggle.style.color = 'black'
  } else {
    leftSidebarToggle.style.color = 'white'
    leftSidebar.style.display = 'block'
  }
})
