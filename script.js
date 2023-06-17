function convert() {
    // Get the input value
    var amount = document.getElementById("amount").value;
  
    // Perform the conversion
    var rate = 0.018; // Use the current exchange rate between INR and CAD
    var result = amount * rate;
  
    // Display the result
    document.getElementById("result").innerHTML = "Converted amount in CAD: " + result.toFixed(2);
  }
  