import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - MyWebsite</title>
        <meta name="description" content="Learn more about our company and team" />
      </Head>
      
      <div className="page-container">
        <h1>About Us</h1>
        <div className="content-section">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, MyWebsite has been at the forefront of digital innovation, 
              helping businesses establish and enhance their online presence. Our team of 
              experienced developers and consultants brings together years of expertise 
              in web development, SEO, and business consulting.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              We believe that every business deserves a strong digital presence. Our mission 
              is to provide high-quality, affordable web solutions that help our clients 
              achieve their goals and connect with their audience effectively.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
              <li>✅ Expert team with 5+ years of experience</li>
              <li>✅ Custom solutions tailored to your needs</li>
              <li>✅ Competitive pricing and flexible packages</li>
              <li>✅ Ongoing support and maintenance</li>
              <li>✅ Results-driven approach</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}