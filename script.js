function showOutput(id) {

    let output = document.getElementById(id);

    if (id === "output1") {

        output.innerHTML =
            "<b>Output:</b><br>Cannot divide by zero";

    }

    else if (id === "output2") {

        output.innerHTML =
            "<b>Output:</b><br>" +
            "Result = 5<br>" +
            "Finally block executed";

    }

    else if (id === "output3") {

        output.innerHTML =
            "<b>Output:</b><br>" +
            "Exception: Age must be 18 or above";

    }

    else if (id === "output4") {

        output.innerHTML =
            "<b>Output:</b><br>" +
            "Eligible to vote";

    }

    output.style.display = "block";
}