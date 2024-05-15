import React, { useEffect } from 'react';
import './Confetti.css';

const Confetti = ({ show }) => {
    useEffect(() => {
        if (show) {
            const confettiContainer = document.getElementById('confetti-container');
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.animationDelay = `${Math.random() * 2}s`;
                confettiContainer.appendChild(confetti);
            }
            setTimeout(() => {
                confettiContainer.innerHTML = '';
            }, 1000);
        }
    }, [show]);

    return <div id="confetti-container" />;
};

export default Confetti;
