import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! Redirecting to Home.');
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact Me</h1>

      <div style={{ marginBottom: '1rem' }}>
        <p><strong>Name:</strong> Basem Al Balkhi</p>
        <p><strong>Email:</strong> basemalbalkhi@email.com</p>
        <p><strong>Phone:</strong> +1-647-913-5551</p>
        <p><strong>Location:</strong> Toronto, Canada</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
          style={{ display: 'block', margin: '0.5rem 0', padding: '0.5rem' }}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
          style={{ display: 'block', margin: '0.5rem 0', padding: '0.5rem' }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Contact Number"
          onChange={handleChange}
          style={{ display: 'block', margin: '0.5rem 0', padding: '0.5rem' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
          style={{ display: 'block', margin: '0.5rem 0', padding: '0.5rem' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          rows="5"
          style={{ display: 'block', margin: '0.5rem 0', padding: '0.5rem', width: '100%' }}
        ></textarea>

        <button
          type="submit"
          style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;