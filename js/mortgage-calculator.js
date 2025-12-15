// Mortgage Calculator
function calculateMortgage() {
  // Get input values
  const homePrice = Number.parseFloat(document.getElementById("homePrice").value) || 0
  const downPayment = Number.parseFloat(document.getElementById("downPayment").value) || 0
  const interestRate = Number.parseFloat(document.getElementById("interestRate").value) || 0
  const loanTerm = Number.parseFloat(document.getElementById("loanTerm").value) || 0
  const propertyTax = Number.parseFloat(document.getElementById("propertyTax").value) || 0
  const homeInsurance = Number.parseFloat(document.getElementById("homeInsurance").value) || 0
  const pmi = Number.parseFloat(document.getElementById("pmi").value) || 0

  // Calculate loan amount
  const loanAmount = homePrice - downPayment

  // Calculate monthly payment (P&I)
  let principalInterest = 0
  if (interestRate > 0) {
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    principalInterest =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  } else {
    principalInterest = loanAmount / (loanTerm * 12)
  }

  // Calculate monthly tax and insurance
  const monthlyTax = propertyTax / 12
  const monthlyInsurance = homeInsurance / 12

  // Total monthly payment
  const monthlyPayment = principalInterest + monthlyTax + monthlyInsurance + pmi

  // Calculate totals
  const totalPayments = principalInterest * loanTerm * 12
  const totalInterest = totalPayments - loanAmount

  // Update DOM
  document.getElementById("monthlyPayment").textContent = formatCurrency(monthlyPayment)
  document.getElementById("principalInterest").textContent = formatCurrency(principalInterest)
  document.getElementById("monthlyTax").textContent = formatCurrency(monthlyTax)
  document.getElementById("monthlyInsurance").textContent = formatCurrency(monthlyInsurance)
  document.getElementById("monthlyPMI").textContent = formatCurrency(pmi)
  document.getElementById("loanAmount").textContent = formatCurrency(loanAmount)
  document.getElementById("totalInterest").textContent = formatCurrency(totalInterest)
  document.getElementById("totalPayment").textContent = formatCurrency(totalPayments)
}

// Share calculation
function shareCalculation() {
  const monthlyPayment = document.getElementById("monthlyPayment").textContent
  const text = `My estimated monthly mortgage payment is ${monthlyPayment}. Calculate yours at ${window.location.href}`

  if (navigator.share) {
    navigator
      .share({
        title: "Mortgage Calculator Results",
        text: text,
      })
      .catch((err) => console.log("Error sharing:", err))
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
      alert("Calculation copied to clipboard!")
    })
  }
}

// Add event listeners
document.getElementById("homePrice").addEventListener("input", calculateMortgage)
document.getElementById("downPayment").addEventListener("input", calculateMortgage)
document.getElementById("interestRate").addEventListener("input", calculateMortgage)
document.getElementById("loanTerm").addEventListener("input", calculateMortgage)
document.getElementById("propertyTax").addEventListener("input", calculateMortgage)
document.getElementById("homeInsurance").addEventListener("input", calculateMortgage)
document.getElementById("pmi").addEventListener("input", calculateMortgage)

// Initial calculation
calculateMortgage()

// Declare formatCurrency function
function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value)
}
