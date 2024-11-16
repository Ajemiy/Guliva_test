import React from 'react'

interface CardProps {
  title: string;
  description: string;
}

const FeatureCard:React.FC<CardProps> = ({title, description}) => {
  return (
    <div>
            <h3>{title}</h3>
            <p>{description}</p>
    </div>
  )
}

export default FeatureCard
