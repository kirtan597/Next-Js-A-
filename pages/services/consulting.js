import Head from 'next/head';

export default function Consulting() {
  return (
    <>
      <Head>
        <title>Business Consulting - MyWebsite</title>
        <meta name="description" content="Strategic business consulting for digital transformation and growth" />
      </Head>
      
      <div className="page-container">
        <h1>Business Consulting</h1>
        <p className="page-intro">
          Strategic guidance to help you make informed decisions about your digital transformation and business growth.
        </p>
        
        <div className="consulting-areas">
          <div className="consulting-card">
            <h2>📊 Digital Strategy</h2>
            <p>
              Develop a comprehensive digital strategy that aligns with your business objectives 
              and drives measurable results.
            </p>
            <div className="service-details">
              <h3>What we cover:</h3>
              <ul>
                <li>Digital transformation roadmap</li>
                <li>Technology stack assessment</li>
                <li>User experience strategy</li>
                <li>Digital marketing integration</li>
                <li>ROI optimization</li>
              </ul>
            </div>
          </div>

          <div className="consulting-card">
            <h2>🔧 Technology Assessment</h2>
            <p>
              Evaluate your current technology infrastructure and recommend improvements 
              for better performance and scalability.
            </p>
            <div className="service-details">
              <h3>What we analyze:</h3>
              <ul>
                <li>Current system architecture</li>
                <li>Performance bottlenecks</li>
                <li>Security vulnerabilities</li>
                <li>Scalability requirements</li>
                <li>Integration opportunities</li>
              </ul>
            </div>
          </div>

          <div className="consulting-card">
            <h2>⚙️ Process Optimization</h2>
            <p>
              Streamline your business processes and workflows to improve efficiency 
              and reduce operational costs.
            </p>
            <div className="service-details">
              <h3>Areas of focus:</h3>
              <ul>
                <li>Workflow automation</li>
                <li>Data management systems</li>
                <li>Communication processes</li>
                <li>Quality assurance</li>
                <li>Resource allocation</li>
              </ul>
            </div>
          </div>

          <div className="consulting-card">
            <h2>📈 Growth Planning</h2>
            <p>
              Create sustainable growth strategies that leverage technology and digital 
              channels to expand your market reach.
            </p>
            <div className="service-details">
              <h3>Strategic planning:</h3>
              <ul>
                <li>Market analysis and positioning</li>
                <li>Competitive landscape review</li>
                <li>Revenue stream optimization</li>
                <li>Customer acquisition strategy</li>
                <li>Scalability planning</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="consulting-approach">
          <h2>Our Consulting Approach</h2>
          <div className="approach-steps">
            <div className="step-card">
              <h3>1. Discovery Session</h3>
              <p>We start by understanding your business, challenges, and goals through detailed discussions and analysis.</p>
            </div>
            <div className="step-card">
              <h3>2. Assessment & Analysis</h3>
              <p>Comprehensive evaluation of your current situation, identifying opportunities and potential roadblocks.</p>
            </div>
            <div className="step-card">
              <h3>3. Strategy Development</h3>
              <p>Create a customized strategy with actionable recommendations and clear implementation timelines.</p>
            </div>
            <div className="step-card">
              <h3>4. Implementation Support</h3>
              <p>Ongoing guidance and support during the implementation phase to ensure successful execution.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's schedule a consultation to discuss how we can help you achieve your business objectives.</p>
          <a href="/contact" className="btn btn-primary">Schedule Consultation</a>
        </section>
      </div>
    </>
  );
}