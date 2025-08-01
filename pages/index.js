import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - MyWebsite</title>
        <meta name="description" content="Welcome to our website" />
      </Head>
      
      <div className="page-container">
        <section className="hero">
          <h1>Welcome to MyWebsite</h1>
          <p>Your one-stop solution for web development, SEO, and consulting services.</p>
          <div className="hero-buttons">
            <a href="/services" className="btn btn-primary">Our Services</a>
            <a href="/contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </section>

        <section className="features">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🚀 Web Development</h3>
              <p>Modern, responsive websites built with cutting-edge technologies like MERN, MEAN, and .NET.</p>
            </div>
            <div className="feature-card">
              <h3>📊 SEO Services</h3>
              <p>Boost your online visibility and drive organic traffic to your website.</p>
            </div>
            <div className="feature-card">
              <h3>💼 Consulting</h3>
              <p>Expert advice to help grow your business and optimize your digital presence.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}