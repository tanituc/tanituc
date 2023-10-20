import './index.css';
function Contact() {
  return (
    <div className="contact">
      <h2>Contacto</h2>
      <p>Puedes contactarme a través de los siguientes medios:</p>
      <ul>
        <li>Email: ejemplo@email.com</li>
        <li>Teléfono: (123) 456-7890</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">Tu Perfil</a></li>
      </ul>
    </div>
  );
}

export default Contact;
