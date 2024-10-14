document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is fully loaded!");

    const num1 = document.getElementById("num1");          // First number input
    const num2 = document.getElementById("num2");          // Second number input
    const operatorDown = document.getElementById("operatorDown");  // Down arrow button
    const operator = document.getElementById("operator");  // Operator display (should update)
    const operatorUp = document.getElementById("operatorUp");    // Up arrow button
    const result = document.getElementById("result");      // Result display
    const submit = document.getElementById("submit");      // Submit button

    let currentOperator = 0;
    const operators = ["+", "-", "x", "÷"];

    operatorDown.onclick = () => {
        if (currentOperator === 0) {
            currentOperator = 3;
        } else {
            currentOperator--;
        }
        operator.textContent = operators[currentOperator];
    };

    operatorUp.onclick = () => {
        if (currentOperator === 3) {
            currentOperator = 0;
        } else {
            currentOperator++;
        }
        operator.textContent = operators[currentOperator];
    };

    submit.onclick = () => {
        const num1value = parseFloat(num1.value);   // Convert num1 to number
        const num2value = parseFloat(num2.value);   // Convert num2 to number

        console.log("num1: ", num1value); // Log num1 value
        console.log("num2: ", num2value); // Log num2 value
        console.log("Current operator: ", operators[currentOperator]);

        if (isNaN(num1value) || isNaN(num2value)) {
            window.alert("Please enter valid numbers");
            return;
        }

        let calculated;

        switch (currentOperator) {
            case 0:  // "+"
                calculated = num1value + num2value;
                break;
            case 1:  // "-"
                calculated = num1value - num2value;
                break;
            case 2:  // "x"
                calculated = num1value * num2value;
                break;
            case 3:  // "÷"
                if (num2value === 0) {
                    window.alert("Error: Cannot divide by zero");
                    return;
                }
                calculated = num1value / num2value;
                break;
            default:
                window.alert("Error: Invalid operation");
                return;
        }

        console.log("calculated result: ", calculated); // Log the calculated result
        result.value = calculated;
    };


});
