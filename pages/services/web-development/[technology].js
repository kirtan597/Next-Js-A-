import Head from 'next/head';
import { useRouter } from 'next/router';

const technologyData = {
  mern: {
    title: 'MERN Stack Development',
    description: 'Full-stack JavaScript development with MongoDB, Express.js, React, and Node.js',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    benefits: [
      'Single language across the entire stack',
      'Fast development cycle',
      'Rich ecosystem and community support',
      'Excellent for real-time applications',
      'SEO-friendly with server-side rendering'
    ],
    useCases: [
      'Social media platforms',
      'E-commerce websites',
      'Real-time chat applications',
      'Content management systems',
      'Single-page applications'
    ]
  },
  mean: {
    title: 'MEAN Stack Development',
    description: 'Enterprise-grade development with MongoDB, Express.js, Angular, and Node.js',
    technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
    benefits: [
      'TypeScript support for better code quality',
      'Powerful two-way data binding',
      'Modular architecture',
      'Great for large-scale applications',
      'Strong enterprise features'
    ],
    useCases: [
      'Enterprise web applications',
      'Customer relationship management',
      'Project management tools',
      'Business intelligence dashboards',
      'Complex data visualization'
    ]
  },
  dotnet: {
    title: '.NET Development',
    description: 'Enterprise web applications with ASP.NET Core, C#, and SQL Server',
    technologies: ['ASP.NET Core', 'C#', 'Entity Framework', 'SQL Server'],
    benefits: [
      'High performance and scalability',
      'Strong type safety',
      'Excellent tooling and IDE support',
      'Great for enterprise applications',
      'Robust security features'
    ],
    useCases: [
      'Enterprise resource planning',
      'Financial applications',
      'Healthcare management systems',
      'Government portals',
      'High-traffic web applications'
    ]
  }
};

export default function TechnologyPage() {
  const router = useRouter();
  const { technology } = router.query;
  
  const data = technologyData[technology];
  
  if (!data) {
    return (
      <div className="page-container">
        <h1>Technology Not Found</h1>
        <p>The requested technology page does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data.title} - MyWebsite</title>
        <meta name="description" content={data.description} />
      </Head>
      
      <div className="page-container">
        <h1>{data.title}</h1>
        <p className="page-intro">{data.description}</p>
        
        <div className="technology-content">
          <section className="tech-overview">
            <h2>Technology Stack</h2>
            <div className="tech-list">
              {data.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </section>

          <section className="benefits-section">
            <h2>Key Benefits</h2>
            <ul className="benefits-list">
              {data.benefits.map((benefit, index) => (
                <li key={index}>✅ {benefit}</li>
              ))}
            </ul>
          </section>

          <section className="use-cases-section">
            <h2>Perfect For</h2>
            <div className="use-cases-grid">
              {data.useCases.map((useCase, index) => (
                <div key={index} className="use-case-card">
                  <h3>{useCase}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project and see how we can help you achieve your goals.</p>
            <a href="/contact" className="btn btn-primary">Contact Us Today</a>
          </section>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = [
    { params: { technology: 'mern' } },
    { params: { technology: 'mean' } },
    { params: { technology: 'dotnet' } }
  ];

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      technology: params.technology
    }
  };
}