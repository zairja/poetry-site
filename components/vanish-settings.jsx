'use client';

import React, { useState, useId } from 'react';
import Collapse from './collapse';
import { resetText, vanishText } from 'vanish';

const VanishSettings = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleReset = resetText('vanish-demo');
  const vanishingTimeInputId = useId(); // Generate a unique ID for the input

  const handleVanish = () => {
    const inputValue = document.getElementById(vanishingTimeInputId)?.value;
    const vanishInSeconds = parseFloat(inputValue) || 1; // Default to 1 second if input is empty or invalid
    vanishText('vanish-demo', vanishInSeconds)(); 
  };

  return (
    <div className="mt-20 mb-8">
      <button className="btn btn-md btn-secondary text-white" onClick={() => setIsExpanded(prev => !prev)}>
        {isExpanded ? 'hide' : 'show'} options to disappear
      </button>
      <Collapse isExpanded={isExpanded}>
        <div className="m-3">
          <ul>
            <li>
              A line is erased every <input id={vanishingTimeInputId} className="input-md" type="number" min="1" max="100" defaultValue={3} /> second(s).
            </li>
            <li>
              <em>Example text</em>:
              <div className="mx-8">
                <p className="vanish-demo word">The dead swans lay in the stagnant pool.</p>
                <p className="vanish-demo word">They lay. They rotted. They turned</p>
                <p className="vanish-demo word">Around occasionally.</p>
                <p className="vanish-demo word">Bits of flesh dropped off them from</p>
                <p className="vanish-demo word">Time to time. And sank into the pool's mire.</p>
                <p className="vanish-demo word">They also smelt a great deal.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="m-3">
          <button className="btn btn-secondary btn-sm text-white mx-4" onClick={handleVanish}>
            Try it!
          </button>
          <button className="btn btn-secondary btn-sm text-white mx-4" onClick={handleReset}>
            Reset the example
          </button>
          <button className="btn btn-primary btn-sm text-white mx-4">
            Apply for real...
          </button>
        </div>
      </Collapse>
    </div>
  );
};

export default VanishSettings;
