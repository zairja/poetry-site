const runningInstances = {}; // Object to track running instances

export const vanishText = (className, vanishInSeconds) => {
    return () => {
        // Only run this code in the client
        if (typeof window !== 'undefined') {

            resetText(className)();

            // Check if an instance is already running; return early if so
            if (runningInstances[className] && runningInstances[className].running) {
                return;
            }

            // Initialize or reset the instance
            runningInstances[className] = {
                running: true,
                index: 0,
                words: document.querySelectorAll(`.${className}`), // Select elements on each call
            };

            const instance = runningInstances[className];

            function eraseText() {
                if (instance.running && instance.index < instance.words.length) {
                    instance.words[instance.index].classList.add('erased');
                    instance.index++; // Move to the next word
                    setTimeout(eraseText, vanishInSeconds * 1000); // Call the function again after specified seconds
                } else {
                    instance.running = false; // Mark instance as finished
                }
            }

            setTimeout(eraseText, vanishInSeconds * 1000);
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
                // Reset the index for potential future calls
                instance.index = 0;
            }
        }
    };
};
