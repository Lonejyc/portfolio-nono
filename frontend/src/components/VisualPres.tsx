import React from 'react'
import Image from 'next/image'

interface VisualPresProps {
    title: string;
    description: string;
    image: string;
}

const VisualPres: React.FC<VisualPresProps> = ({ title, description, image }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Image src={image} alt={title} width={500} height={500} />
        </div>
    );
};

export default VisualPres;