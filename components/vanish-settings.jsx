'use client';

import React, { useState, useId } from 'react';
import Collapse from './collapse';
import { resetText, vanishText } from 'vanish';
import OneTimeButton from './one-time-button';

const VanishSettings = () => {

  const demoClassName = 'vanish-demo';
  const [isExpanded, setIsExpanded] = useState(true);
  const handleReset = resetText(demoClassName); // Defunct, may remove altogether
  const vanishingTimeInputId = useId(); // Generate a unique ID for the input

  const handleVanishDemo = () => {
    const inputValue = document.getElementById(vanishingTimeInputId)?.value;
    const vanishInSeconds = parseFloat(inputValue) || 1; // Default to 1 second if input is empty or invalid
    vanishText(demoClassName, vanishInSeconds)();
  };

  const handleVanishReal = () => {
    window.scroll(0,0);
    const inputValue = document.getElementById(vanishingTimeInputId)?.value;
    const vanishInSeconds = parseFloat(inputValue) || 1; // Default to 1 second if input is empty or invalid
    vanishText('poem', vanishInSeconds)();    
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
              A line is erased every <label htmlFor={vanishingTimeInputId}><input id={vanishingTimeInputId} name="vanishingTimeInput"
                aria-label="input vanishing time in seconds" className="input-md"
                type="number" min="1" max="100" defaultValue={3} /> second(s)</label>.
            </li>
            <li>
              <em>Example text</em>:
              <div className="mx-8">
                <p className="vanish-demo line">The dead swans lay in the stagnant pool.</p>
                <p className="vanish-demo line">They lay. They rotted. They turned</p>
                <p className="vanish-demo line">Around occasionally.</p>
                <p className="vanish-demo line">Bits of flesh dropped off them from</p>
                <p className="vanish-demo line">Time to time. And sank into the pool&apos;s mire.</p>
                <p className="vanish-demo line">They also smelt a great deal.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="m-3">
          <div>
            <button name="demoButton" className="btn btn-secondary btn-md text-white" onClick={handleVanishDemo}>
              Try it! (Resets the example)
            </button>
          </div>
        </div>
        <div className="m-3">
          <OneTimeButton className="btn btn-accent btn-md text-primary" handleClick={handleVanishReal} buttonText="Apply for real..." />
        </div>
      </Collapse>
    </div>
  );
};

export default VanishSettings;
