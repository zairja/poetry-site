'use client';

import React from 'react';

class OneTimeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        };
    }

    handleClick = () => {
        if (this.state.disabled) {
            return;
        }
        this.setState({ disabled: true });
        this.props.handleClick();
    };

    render() {
        const { disabled } = this.state;

        return (
            // wrap the button with the cursor style since pointer-events:none prevents it from applying directly
            <div style={{ cursor: disabled ? 'not-allowed' : 'pointer' }} >
                <button onClick={this.handleClick}
                    disabled={disabled}
                    aria-disabled={disabled}
                    className={this.props.className}
                >
                    {this.props.buttonText}
                </button>

            </div>
        );
    }
}

export default OneTimeButton;