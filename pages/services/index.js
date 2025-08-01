import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - MyWebsite</title>
        <meta name="description" content="Explore our web development, SEO, and consulting services" />
      </Head>
      
      <div className="page-container">
        <h1>Our Services</h1>
        <p className="page-intro">
          We offer a comprehensive range of digital services to help your business thrive online.
        </p>
        
        <div className="services-grid">
          <div className="service-card">
            <h2>🚀 Web Development</h2>
            <p>
              Custom web applications built with modern technologies. We specialize in 
              full-stack development using various frameworks and technologies.
            </p>
            <div className="service-features">
              <h3>Technologies we work with:</h3>
              <ul>
                <li><Link href="/services/web-development/mern">MERN Stack</Link></li>
                <li><Link href="/services/web-development/mean">MEAN Stack</Link></li>
                <li><Link href="/services/web-development/dotnet">.NET Development</Link></li>
              </ul>
            </div>
            <Link href="/services/web-development" className="btn btn-primary">
              Learn More
            </Link>
          </div>

          <div className="service-card">
            <h2>📊 SEO Services</h2>
            <p>
              Improve your search engine rankings and increase organic traffic with 
              our comprehensive SEO strategies.
            </p>
            <div className="service-features">
              <h3>What we offer:</h3>
              <ul>
                <li>Keyword Research & Analysis</li>
                <li>On-page & Off-page Optimization</li>
                <li>Technical SEO Audits</li>
                <li>Content Strategy</li>
              </ul>
            </div>
            <Link href="/services/seo" className="btn btn-primary">
              Learn More
            </Link>
          </div>

          <div className="service-card">
            <h2>💼 Consulting</h2>
            <p>
              Strategic guidance to help you make informed decisions about your 
              digital transformation and business growth.
            </p>
            <div className="service-features">
              <h3>Consulting areas:</h3>
              <ul>
                <li>Digital Strategy</li>
                <li>Technology Assessment</li>
                <li>Process Optimization</li>
                <li>Growth Planning</li>
              </ul>
            </div>
            <Link href="/services/consulting" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}