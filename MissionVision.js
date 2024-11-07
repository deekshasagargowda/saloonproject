import React, { useState } from 'react';
import './MissionVision.css';

function MissionVision() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const missionText = "At  Our Saloon, our mission is to provide exceptional beauty services that empower our clients to express their individuality and enhance their natural beauty. We are dedicated to delivering personalized experiences through skilled professionals, high-quality products, and a welcoming environment, ensuring every visit leaves our clients feeling refreshed, confident, and valued.";

  const visionText = "Our vision is to be the leading salon in our community, known for our innovative services, commitment to sustainability, and a culture that prioritizes the well-being of our clients and staff. We aspire to create a transformative beauty experience that not only meets but exceeds our clients' expectations, fostering long-lasting relationships and inspiring confidence in every individual who walks through our doors.";

  const handleMissionClick = () => {
    setModalContent(missionText);
    setShowModal(true);
  };

  const handleVisionClick = () => {
    setModalContent(visionText);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  return (
    <div>
      <div className="mission-vision-container">
        <div 
          onClick={handleMissionClick} 
          className="mission square">
          <div>
            <strong>Our Mission</strong>
            <p>Our vision is to be the leading salon in our community, known for our innovative services, commitment to sustainability, and a culture that prioritizes the well-being of our clients and staff. We aspire to create a transformative beauty experience that not only meets but exceeds our clients' expectations.</p> {/* Short description */}
          </div>
        </div>
        <div 
          onClick={handleVisionClick} 
          className="vision square">
          <div>
            <strong>Our Vision</strong>
            <p>At  Our Saloon, our mission is to provide exceptional beauty services that empower our clients to express their individuality and enhance their natural beauty. We are dedicated to delivering personalized experiences through skilled professionals, high-quality products, and a welcoming environment, ensuring every visit leaves our clients feeling refreshed, confident, and valued.</p> {/* Short description */}
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MissionVision;
