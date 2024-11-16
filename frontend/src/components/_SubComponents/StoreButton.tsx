import React from 'react'

interface CardProps {
  brand: string;
  img: string;
}

const FeatureCard:React.FC<CardProps> = ({brand, img}) => {
  return (
    <button>
        <img src={img} alt={brand} />
    </button>
  )
}

export default FeatureCard
