import React from 'react';
import type { Card } from '../types/cardSchema';
import { CardView } from './CardView';

interface CardModalProps {
    card: Card;
    onClose: () => void;
}

export const CardModal: React.FC<CardModalProps> = ({ card, onClose }) => {
    return (
        <div 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 50,
                padding: '20px'
            }}
            onClick={onClose}
        >
            <div 
                style={{
                    backgroundColor: '#1e293b',
                    padding: '24px',
                    borderRadius: '16px',
                    maxWidth: '800px',
                    width: '100%',
                    display: 'flex',
                    gap: '24px',
                    position: 'relative',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'transparent',
                        border: 'none',
                        color: '#94a3b8',
                        fontSize: '24px',
                        cursor: 'pointer',
                        lineHeight: 1
                    }}
                    aria-label="Close"
                >
                    &times;
                </button>

                {/* Left Side: Large Image */}
                <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                    {card.imageUrl ? (
                        <img 
                            src={card.imageUrl} 
                            alt={card.name} 
                            style={{ 
                                width: '100%', 
                                maxWidth: '350px',
                                borderRadius: '12px',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }} 
                        />
                    ) : (
                        <div style={{ 
                            width: '350px', 
                            height: '500px', 
                            backgroundColor: '#334155', 
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#94a3b8'
                        }}>
                            No Image Available
                        </div>
                    )}
                </div>

                {/* Right Side: Detailed Info (using CardView or custom layout) */}
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', maxHeight: '80vh', overflowY: 'auto' }}>
                    <h2 style={{ color: '#f8fafc', marginTop: 0, marginBottom: '8px', fontSize: '24px' }}>
                        {card.name}
                    </h2>
                    <p style={{ color: '#94a3b8', margin: '0 0 20px 0', fontSize: '14px' }}>{card.id}</p>
                    
                    {/* We can reuse CardView here, but since CardView already has an image, we might want to hide the image inside CardView when rendered in Modal, or just render it as is. 
                        Let's modify CardView slightly or just render it directly. */}
                    <div style={{ transform: 'scale(1)', transformOrigin: 'top left', width: '100%' }}>
                        <CardView card={card} hideImage={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};
