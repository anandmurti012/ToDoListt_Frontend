function fetchData(callback) {
    // Generate a unique callback function name
    const callbackName = 'jsonpCallback_' + Math.round(100000 * Math.random());

    // Create a script element
    const script = document.createElement('script');

    // Set the source to the server endpoint with the callback parameter
    script.src = `https://todolist-82o3.onrender.com/?callback=${callbackName}`;

    // Attach the script to the document
    document.head.appendChild(script);

    // Define the callback function
    window[callbackName] = function (data) {
        // Process the received data
        callback(data);

        // Clean up: remove the script tag and the callback function
        document.head.removeChild(script);
        delete window[callbackName];
    };
}

// Example usage
fetchData(function (data) {
    console.log('Data received:', data);
});
