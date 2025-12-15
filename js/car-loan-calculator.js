function calculateCarLoan() {
  const carPrice = Number.parseFloat(document.getElementById("carPrice").value) || 0
  const downPayment = Number.parseFloat(document.getElementById("downPayment").value) || 0
  const tradeIn = Number.parseFloat(document.getElementById("tradeIn").value) || 0
  const interestRate = Number.parseFloat(document.getElementById("interestRate").value) || 0
  const loanTerm = Number.parseFloat(document.getElementById("loanTerm").value) || 0

  const loanAmount = carPrice - downPayment - tradeIn
  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm)
  const totalPayments = monthlyPayment * loanTerm * 12
  const totalInterest = totalPayments - loanAmount
  const totalCost = carPrice + totalInterest

  document.getElementById("monthlyPayment").textContent = formatCurrency(monthlyPayment)
  document.getElementById("loanAmount").textContent = formatCurrency(loanAmount)
  document.getElementById("totalInterest").textContent = formatCurrency(totalInterest)
  document.getElementById("totalCost").textContent = formatCurrency(totalCost)
}

function shareCalculation() {
  const monthlyPayment = document.getElementById("monthlyPayment").textContent
  const text = `My estimated monthly car loan payment is ${monthlyPayment}. Calculate yours!`

  if (navigator.share) {
    navigator.share({ title: "Car Loan Calculator Results", text: text }).catch(() => {})
  } else {
    navigator.clipboard.writeText(text).then(() => alert("Copied to clipboard!"))
  }
}

function calculateMonthlyPayment(loanAmount, interestRate, loanTerm) {
  // Placeholder for calculateMonthlyPayment logic
  return (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1)
}

function formatCurrency(amount) {
  // Placeholder for formatCurrency logic
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" })
}

document.getElementById("carPrice").addEventListener("input", calculateCarLoan)
document.getElementById("downPayment").addEventListener("input", calculateCarLoan)
document.getElementById("tradeIn").addEventListener("input", calculateCarLoan)
document.getElementById("interestRate").addEventListener("input", calculateCarLoan)
document.getElementById("loanTerm").addEventListener("change", calculateCarLoan)

calculateCarLoan()
