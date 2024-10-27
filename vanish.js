const runningInstances = {}; // Object to track running instances

export const vanishText = (className, vanishInSeconds) => {
    return () => {
        // Only run this code in the client
        if (typeof window !== 'undefined') {
            // Initialize the instance if it doesn't exist
            if (!runningInstances[className]) {
                runningInstances[className] = {
                    running: true,
                    index: 0,
                    words: document.querySelectorAll(`.${className}`), // Populate words here
                };
            }

            const instance = runningInstances[className];

            instance.index = 0; // Reset index for new runs
            instance.running = true; // Reset running state
            
            // Start the eraseText process
            function eraseText() {
                if (instance.running && instance.index < instance.words.length) {
                    instance.words[instance.index].classList.add('erased');
                    instance.index++; // Move to the next word
                    setTimeout(eraseText, vanishInSeconds * 1000); // Call the function again after specified seconds
                }
            }

            eraseText();
        }
    };
};

export const resetText = (className) => {
    return () => {
        // Only run this code in the client
        if (typeof window !== 'undefined') {
            // Get the current instance for the specific className
            const instance = runningInstances[className];
            if (instance) {
                instance.running = false; // Stop this specific instance
                instance.words.forEach(word => {
                    word.classList.remove('erased');
                });
                // Optionally, reset the index if you want to restart later
                instance.index = 0;
            }
        }
    };
};
