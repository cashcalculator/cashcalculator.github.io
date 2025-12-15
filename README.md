# Cash Calculator

A comprehensive financial calculator website built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies - just clean, fast, and private calculations.

## Features

- **15+ Financial Calculators** including mortgage, loans, investments, tax, retirement, and health calculators
- **100% Client-Side** - All calculations happen in your browser for complete privacy
- **No Dependencies** - Pure vanilla JavaScript, HTML, and CSS
- **Mobile Responsive** - Works perfectly on all devices
- **SEO Optimized** - Structured data and semantic HTML
- **Fast Loading** - Lightweight and optimized for performance

## Calculators Included

### Loan Calculators
- Mortgage Calculator
- Car Loan Calculator
- Home Equity Loan Calculator
- Personal Loan Calculator
- Student Loan Calculator

### Financial Calculators
- Tax Calculator
- Tax Return Calculator
- Investment Calculator
- 401k Calculator
- Pension Calculator
- Payment Calculator

### Health & Other
- BMI Calculator
- CD Calculator
- Payroll Calculator
- Macro Calculator

## Installation

### Option 1: Direct Download
1. Download all files from this repository
2. Open `index.html` in your web browser
3. No build process needed!

### Option 2: Deploy to GitHub Pages
1. Fork this repository
2. Go to Settings > Pages
3. Select your branch and save
4. Your site will be live at `https://yourusername.github.io/cash-calculator/`

### Option 3: Deploy Anywhere
Upload the files to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Azure Static Web Apps
- Or any web server

## File Structure

\`\`\`
/
├── index.html              # Homepage
├── privacy.html            # Privacy Policy
├── terms.html             # Terms of Use
├── css/
│   ├── styles.css         # Main stylesheet
│   └── calculator.css     # Calculator page styles
├── js/
│   ├── main.js           # Main JavaScript utilities
│   └── *-calculator.js   # Individual calculator scripts
└── calculators/          # Individual calculator pages
    ├── mortgage.html
    ├── car-loan.html
    ├── tax.html
    └── ... (15+ calculators)
\`\`\`

## Privacy

All calculations are performed client-side in your browser. We do not collect, store, or transmit any of your personal financial information. Your data never leaves your device.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit CSS custom properties in `css/styles.css`:
\`\`\`css
:root {
  --color-primary: #0070f3;
  --color-secondary: #10b981;
  --color-accent: #f59e0b;
  /* ... more colors */
}
\`\`\`

### Fonts
Change fonts in HTML `<head>`:
\`\`\`html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
\`\`\`

### Calculations
Each calculator has its own JavaScript file in the `js/` folder. Formulas are clearly commented and can be adjusted as needed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Disclaimer

This website provides calculators for informational purposes only. Results should not be considered financial, legal, or professional advice. Always consult with qualified professionals before making financial decisions.

## Support

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript
