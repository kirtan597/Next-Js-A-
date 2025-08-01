import Head from 'next/head';

export default function SEO() {
  return (
    <>
      <Head>
        <title>SEO Services - MyWebsite</title>
        <meta name="description" content="Professional SEO services to boost your search engine rankings" />
      </Head>
      
      <div className="page-container">
        <h1>SEO Services</h1>
        <p className="page-intro">
          Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.
        </p>
        
        <div className="seo-services">
          <div className="service-section">
            <h2>🔍 Keyword Research & Analysis</h2>
            <p>
              We identify the most valuable keywords for your business and analyze your competition 
              to create a winning SEO strategy.
            </p>
            <ul>
              <li>Comprehensive keyword research</li>
              <li>Competitor analysis</li>
              <li>Search intent analysis</li>
              <li>Long-tail keyword identification</li>
            </ul>
          </div>

          <div className="service-section">
            <h2>🎯 On-Page Optimization</h2>
            <p>
              Optimize your website's content, structure, and HTML elements to improve 
              search engine rankings and user experience.
            </p>
            <ul>
              <li>Title tag optimization</li>
              <li>Meta description enhancement</li>
              <li>Header tag optimization</li>
              <li>Internal linking strategy</li>
              <li>Content optimization</li>
            </ul>
          </div>

          <div className="service-section">
            <h2>🔗 Off-Page SEO</h2>
            <p>
              Build your website's authority and credibility through strategic link building 
              and brand mentions across the web.
            </p>
            <ul>
              <li>Quality backlink acquisition</li>
              <li>Guest posting opportunities</li>
              <li>Local citation building</li>
              <li>Social media optimization</li>
              <li>Online reputation management</li>
            </ul>
          </div>

          <div className="service-section">
            <h2>⚡ Technical SEO</h2>
            <p>
              Ensure your website meets all technical requirements for optimal search engine 
              crawling and indexing.
            </p>
            <ul>
              <li>Site speed optimization</li>
              <li>Mobile responsiveness</li>
              <li>XML sitemap creation</li>
              <li>Schema markup implementation</li>
              <li>Core Web Vitals optimization</li>
            </ul>
          </div>
        </div>

        <section className="seo-process">
          <h2>Our SEO Process</h2>
          <div className="process-timeline">
            <div className="timeline-item">
              <h3>Month 1-2: Foundation</h3>
              <p>SEO audit, keyword research, and technical optimization</p>
            </div>
            <div className="timeline-item">
              <h3>Month 3-4: Content</h3>
              <p>Content optimization and creation based on target keywords</p>
            </div>
            <div className="timeline-item">
              <h3>Month 5-6: Authority</h3>
              <p>Link building and off-page optimization strategies</p>
            </div>
            <div className="timeline-item">
              <h3>Ongoing: Monitor & Improve</h3>
              <p>Regular monitoring, reporting, and strategy refinement</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}