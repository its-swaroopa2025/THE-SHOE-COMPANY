const btn = document.querySelector('#btn')
const nav = document.querySelector('#nav-menu')
const overlay = document.querySelector('#menu-overlay')
const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelectorAll('.nav-link')

function openMenu() {
  nav.classList.add('open-menu')
  overlay.classList.add('open-menu')
  menuIcon.textContent = '✕'
  btn.setAttribute('aria-expanded', 'true')
  document.body.style.overflow = 'hidden'
}

function closeMenu() {
  nav.classList.remove('open-menu')
  overlay.classList.remove('open-menu')
  menuIcon.textContent = '≡'
  btn.setAttribute('aria-expanded', 'false')
  document.body.style.overflow = ''
}

btn.addEventListener('click', () => {
  const isOpen = nav.classList.contains('open-menu')
  isOpen ? closeMenu() : openMenu()
})

// Tapping the dimmed background also closes the drawer
overlay.addEventListener('click', closeMenu)


navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu()
  })
})

// Close the drawer automatically if the viewport grows into desktop size
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    closeMenu()
  }
})
document.addEventListener('click', (e) => {
  const isOpen = nav.classList.contains('open-menu')
  if (!isOpen) return

  const clickedInsideNav = nav.contains(e.target)
  const clickedBtn = btn.contains(e.target)

  if (!clickedInsideNav && !clickedBtn) {
    closeMenu()
  }
})