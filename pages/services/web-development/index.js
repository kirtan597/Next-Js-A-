import Head from 'next/head';
import Link from 'next/link';

export default function WebDevelopment() {
  return (
    <>
      <Head>
        <title>Web Development Services - MyWebsite</title>
        <meta name="description" content="Professional web development services using modern technologies" />
      </Head>
      
      <div className="page-container">
        <h1>Web Development Services</h1>
        <p className="page-intro">
          We create modern, scalable, and user-friendly web applications using the latest technologies and best practices.
        </p>
        
        <div className="tech-stack-grid">
          <div className="tech-card">
            <h2>🔥 MERN Stack</h2>
            <p>MongoDB, Express.js, React, Node.js</p>
            <ul>
              <li>Full-stack JavaScript development</li>
              <li>Real-time applications</li>
              <li>RESTful API development</li>
              <li>Modern React applications</li>
            </ul>
            <Link href="/services/web-development/mern" className="btn btn-primary">
              Learn More
            </Link>
          </div>

          <div className="tech-card">
            <h2>⚡ MEAN Stack</h2>
            <p>MongoDB, Express.js, Angular, Node.js</p>
            <ul>
              <li>Enterprise-grade applications</li>
              <li>Single Page Applications (SPA)</li>
              <li>TypeScript development</li>
              <li>Scalable backend solutions</li>
            </ul>
            <Link href="/services/web-development/mean" className="btn btn-primary">
              Learn More
            </Link>
          </div>

          <div className="tech-card">
            <h2>🏢 .NET Development</h2>
            <p>ASP.NET Core, C#, SQL Server</p>
            <ul>
              <li>Enterprise web applications</li>
              <li>Web APIs and microservices</li>
              <li>Cloud-native solutions</li>
              <li>High-performance applications</li>
            </ul>
            <Link href="/services/web-development/dotnet" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>

        <section className="development-process">
          <h2>Our Development Process</h2>
          <div className="process-steps">
            <div className="step">
              <h3>1. Discovery & Planning</h3>
              <p>We analyze your requirements and create a detailed project plan.</p>
            </div>
            <div className="step">
              <h3>2. Design & Prototyping</h3>
              <p>Create wireframes and prototypes to visualize the final product.</p>
            </div>
            <div className="step">
              <h3>3. Development</h3>
              <p>Build your application using best practices and modern technologies.</p>
            </div>
            <div className="step">
              <h3>4. Testing & Deployment</h3>
              <p>Thorough testing and smooth deployment to production.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}