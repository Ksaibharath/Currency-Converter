function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;

  // Static sample exchange rates (you can update these or connect to API)
  const rates = {
    USD: { INR: 83, EUR: 0.92 },
    INR: { USD: 0.012, EUR: 0.011 },
    EUR: { USD: 1.09, INR: 90.5 }
  };

  if (from === to) {
    document.getElementById('result').innerText = `Result: ${amount.toFixed(2)} ${to}`;
    return;
  }

  const converted = amount * rates[from][to];
  document.getElementById('result').innerText = `Result: ${converted.toFixed(2)} ${to}`;
}
