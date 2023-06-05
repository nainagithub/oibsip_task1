// Append a value to the input field
function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
  // Clear the input field
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  // Calculate the result of the expression
  function calculate() {
    try {
      const result = eval(document.getElementById("result").value);
      document.getElementById("result").value = result;
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }

  
  
      function toggleButtonColor(button) {
        button.style.backgroundColor = ("#DBA6F7");
      }

