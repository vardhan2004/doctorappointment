import React from 'react';
import '../styles/services.css'; // Import the CSS file
import img1 from '../images/s3.jpg'
import img2 from '../images/s2.jpg'
const Services = () => {
    const servicesData = [
        {
          id: 1,
          name: 'Equipment Services',
          description: 'Explore our state-of-the-art medical equipment and facilities.',
          imageUrl: img2, 
          details: [
            'Advanced imaging technology',
            'Surgical robots for precision procedures',
            'High-tech monitoring devices',
          ],
        },
        {
          id: 2,
          name: 'Infrastructure',
          description: 'Learn about our modern and efficient hospital infrastructure.',
          imageUrl: img1,
          details: [
            'Spacious and comfortable patient rooms',
            'Well-equipped operation theaters',
            'Emergency response systems',
          ],
        },
    ];
    
        
    return (
        <div className="app-container ">
        <h1 className="main-title">Hospital Services</h1>

        <section className="services-section">
            {servicesData.map((service) => (
            <div key={service.id} className="service-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul>
                {service.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
                </ul>
                <img
                src={service.imageUrl}
                alt={service.name}
                className="service-image"
                />
            </div>
            ))}
        </section>
        </div>
    );
    };

export default Services;
