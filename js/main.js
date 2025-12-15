// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
const navMenu = document.querySelector(".nav-menu")

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex"
    if (navMenu.style.display === "flex") {
      navMenu.style.flexDirection = "column"
      navMenu.style.position = "absolute"
      navMenu.style.top = "100%"
      navMenu.style.left = "0"
      navMenu.style.right = "0"
      navMenu.style.background = "white"
      navMenu.style.padding = "1rem"
      navMenu.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"
    }
  })
}

// Search Functionality
const searchInput = document.getElementById("searchInput")
const calculatorCards = document.querySelectorAll(".calculators-grid .calculator-card")

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase()

    calculatorCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase()
      const description = card.querySelector("p").textContent.toLowerCase()

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.classList.remove("hidden")
      } else {
        card.classList.add("hidden")
      }
    })
  })
}

// Filter Tabs
const filterTabs = document.querySelectorAll(".filter-tab")
const calculatorsGrid = document.getElementById("calculatorsGrid")

if (filterTabs.length > 0) {
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      filterTabs.forEach((t) => t.classList.remove("active"))

      // Add active class to clicked tab
      tab.classList.add("active")

      const category = tab.getAttribute("data-category")

      // Filter calculator cards
      const cards = calculatorsGrid.querySelectorAll(".calculator-card")
      cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category")

        if (category === "all" || cardCategory === category) {
          card.classList.remove("hidden")
        } else {
          card.classList.add("hidden")
        }
      })
    })
  })
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Format currency
function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

// Format number with commas
function formatNumber(value, decimals = 0) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

// Calculate monthly payment (PMT function)
function calculateMonthlyPayment(principal, annualRate, years) {
  if (annualRate === 0) {
    return principal / (years * 12)
  }

  const monthlyRate = annualRate / 100 / 12
  const numberOfPayments = years * 12

  const payment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

  return payment
}

// Export utility functions for use in calculator pages
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    formatCurrency,
    formatNumber,
    calculateMonthlyPayment,
  }
}
