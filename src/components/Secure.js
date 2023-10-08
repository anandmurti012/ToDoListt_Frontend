// MyComponent.js

import React, { useEffect } from 'react';

const Secure = () => {
  useEffect(() => {
    // Function to append the script
    const appendScript = () => {
      // Create a script element
      const script = document.createElement('script');
      
      // Set the source to the server endpoint with the callback parameter
      script.src = 'https://todolist-82o3.onrender.com/?callback=myCallback';

      // Append the script to the head of the document
      document.head.appendChild(script);

      // Define the callback function
      window.myCallback = function(data) {
          console.log('Data received:', data);

          // You can do more with the received data here
      };

      // Clean up: remove the script tag and the callback function
      script.onload = function() {
          document.head.removeChild(script);
          delete window.myCallback;
      };
    };

    // Call the function to append the script
    appendScript();
  }, []); // Run this effect only once when the component mounts

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default Secure;
