const mobileMenu = document.getElementById("mobile-menu") as HTMLDialogElement
const openMenuButton = document.getElementById("open-menu-button")
const closeMenuButton = document.getElementById("close-menu-button")
const mobileLinks = document.querySelectorAll(".mobile-nav-links a")
const header = document.querySelector("header")

const openMenu = () => {
  if (mobileMenu && !mobileMenu.open) {
    mobileMenu.showModal()
    document.body.style.overflow = "hidden"
  }
}

const closeMenu = () => {
  if (mobileMenu && mobileMenu.open) {
    mobileMenu.close()
  }
}

const handleScroll = () => {
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 50)
  }
}

openMenuButton?.addEventListener("click", openMenu)
closeMenuButton?.addEventListener("click", closeMenu)
mobileLinks.forEach((link) => link.addEventListener("click", closeMenu))

mobileMenu?.addEventListener("close", () => {
  document.body.style.overflow = ""
})

mobileMenu?.addEventListener("click", (event) => {
  if (event.target === mobileMenu) {
    closeMenu()
  }
})

window.addEventListener("scroll", handleScroll, { passive: true })

handleScroll()
