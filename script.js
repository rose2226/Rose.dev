document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle")
  const mainNav = document.getElementById("main-nav")
  const navLinks = document.querySelectorAll(".nav-link")

  // Toggle mobile navigation
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open")
    navToggle.classList.toggle("open")
  })

  // Close mobile nav when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mainNav.classList.contains("open")) {
        mainNav.classList.remove("open")
        navToggle.classList.remove("open")
      }
    })
  })

  // The smooth scrolling part is less critical for external links,
  // but kept for any potential internal anchors within a page.
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Only prevent default if it's an internal anchor on the current page
      if (this.pathname === window.location.pathname) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
})
