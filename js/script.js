const methodBtn = document.getElementById("methodBtn");
const methodOptions = document.getElementById("methodOptions");
const container = document.getElementsByClassName("container")[0];

let currentMethod = "";

// Show/Hide options
methodBtn.addEventListener("click", () => {
  methodOptions.classList.toggle("show");
});

// Handle selecting a method
methodOptions.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    currentMethod = e.target.textContent;
    methodBtn.textContent = currentMethod + " ▾";
    methodOptions.classList.remove("show");
  }

// insert text area based on current method
  if (currentMethod !== "GET") {
    let existingTextArea = document.querySelector("textarea");
    if (!existingTextArea){
    const textArea = document.createElement("textarea");
    textArea.style.display = "block";
    container.appendChild(textArea);
    }
  } else {
    let existingTextArea = document.querySelector("textarea");
    if (existingTextArea) {
    existingTextArea.remove();
    }
  }
});

const sendRequest = async () => {
    const input = document.getElementById("input").value;
    const results = document.getElementById("results");
    const errors = [];
    let response;
    let data;

    try {

    // check for empty fields & unselected methods

    if (!input) errors.push("Please provide a valid URL.");
    if (!currentMethod) errors.push("Please select a method.");
  
    if (errors.length) throw new Error(errors.join(" | "));

    // send request based on current method
    if (currentMethod !== "GET") {
      const textArea = document.querySelector("textarea").value;

      response = await fetch(input, {
      method: currentMethod,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(JSON.parse(textArea)) // convert string -> JS object -> JSON string
      });
    } else {
    response = await fetch(input);
    }
    data = await response.json();

    const resultElement = document.createElement("pre");
    resultElement.textContent = JSON.stringify(data, null, 2);

    results.innerHTML = ""; // clear previous
    results.appendChild(resultElement);

    } catch (error) {
      results.textContent = "Error: " + error.message;
    }
  };