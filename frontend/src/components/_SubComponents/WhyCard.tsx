import React from 'react'

interface CardProps {
  img: string
  title: string;
  description: string;
}

const WhyCard:React.FC<CardProps> = ({img, title, description}) => {
  return (
    <div>
      <li>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    </div>
  )
}

export default WhyCard
