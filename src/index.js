
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//code to hit todo for every 10mins 
function hitURL() {
  // Replace 'YOUR_URL_HERE' with the URL you want to hit
  const url = 'https://easytodo-8nc2.onrender.com/';
  // Replace this with your code to make the HTTP request to the URL (e.g., using fetch, XMLHttpRequest, etc.)
  // For simplicity, I'll use fetch in this example.
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return `hit`;
    })
    .then(data => {
      // Process the response data if needed
      // console.log('Response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
// Set an initial delay of 7 minutes (600,000 milliseconds) before the first request
const intervalTime = 7 * 60 * 1000; // 10 minutes in milliseconds

// Call the hitURL() function immediately (for the first time)
hitURL();

// Set up the interval to call the hitURL() function every 10 minutes
setInterval(hitURL, intervalTime);
