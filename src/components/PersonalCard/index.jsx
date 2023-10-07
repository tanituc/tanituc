import React from 'react';

function PersonalCard(props) {
  return (
    <div className="personal-card">
      <img src={props.image} alt="Foto de perfil" />
      <h2>{props.name}</h2>
      <p>Edad: {props.age}</p>
      <p>Correo electrónico: {props.email}</p>
    </div>
  );
}

export default PersonalCard;
