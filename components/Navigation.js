import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      closeMenu();
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  const isActivePath = (path) => {
    return router.pathname === path || router.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          MyWebsite
        </Link>

        <div className="nav-actions">
          <ThemeToggle />
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              href="/" 
              className={`nav-link ${isActivePath('/') && router.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          
          <li className="nav-item">
            <Link 
              href="/about" 
              className={`nav-link ${isActivePath('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          
          <li className={`nav-item dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
            <button 
              className={`nav-link dropdown-toggle ${isActivePath('/services') ? 'active' : ''}`}
              onClick={() => toggleDropdown('services')}
            >
              Services
              <span className="dropdown-arrow">▼</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <div className="dropdown-item has-submenu">
                  <Link href="/services/web-development">Web Development</Link>
                  <ul className="submenu">
                    <li>
                      <Link href="/services/web-development/mern">
                        MERN Stack
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/web-development/mean">
                        MEAN Stack
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/web-development/dotnet">
                        .NET Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link href="/services/seo" className="dropdown-item">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="dropdown-item">
                  Consulting
                </Link>
              </li>
            </ul>
          </li>
          
          <li className="nav-item">
            <Link 
              href="/contact" 
              className={`nav-link ${isActivePath('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;