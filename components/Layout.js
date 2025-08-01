import Navigation from './Navigation';
import { ThemeProvider } from '../contexts/ThemeContext';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="layout">
        <Navigation />
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;