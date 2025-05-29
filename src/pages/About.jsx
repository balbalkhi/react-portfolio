function About() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About Me</h1>

      <img
        src="/src/assets/profile.jpg"
        alt="Basem Al Balkhi"
        style={{ width: '200px', borderRadius: '10px', marginBottom: '1rem' }}
      />

      <p>
        My name is <strong>Basem Al Balkhi</strong>. I am currently studying Software Engineering – Artificial Intelligence at Centennial College.
        With over a decade of experience in accounting (both in Saudi Arabia and Canada), I bring a unique perspective to the tech industry, combining financial insight with technical problem-solving.
      </p>

      <p>
        I’m passionate about continuous learning, creative thinking, and building meaningful digital solutions that align with real-world needs.
      </p>

      <a
        href="/src/assets/resume.pdf"
        download="Basem_AlBalkhi_Resume.pdf"
        style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}
      >
        📄 Download My Resume
      </a>
    </div>
  );
}

export default About;