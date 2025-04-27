# Basic HTPP Client

## Overview
This is a basic browser-based HTTP client built using HTML, CSS, and Javascript.
It allows users to select an http method (GET, POST, PUT, DELETE) and send requests to any URL.

## Installation
1. Clone the repository:

```bash
git clone https://github.com/Yacine-Sellaoui/simple-http-client.git
cd simple-http-client
```

2. Run the project: You have several options:
- **Option 1**:\
Open the `index.html` file directly in your browser.
*(Right-click -> Open with -> Browser)*.\
**Note**: Some features (like sending requests) might not work properly due to browser security policies when opened this way.

- **Option 2**:\
If you are using **Visual Studio Code**, install the **Live Server extension**.
Then right-click on `index.html` and select "**Open with Live Server**"

## Usage
1. Select the HTTP method you want to use (GET, POST, PUT, DELETE).
2. Enter any publicly accessible URL.
3. Provide a request body for POST and PUT methods.
4. click "Send Request" to submit your request and view the response body.

## Notes
- CORS Warning:\
If you are sending requests to your **own backend server**,make sure you correctly configure **CORS settings** on yourserver.
Otherwise, the browser will block the request forsecurity reasons.

## License
This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
