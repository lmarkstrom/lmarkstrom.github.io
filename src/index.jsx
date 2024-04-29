import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { Header, Footer } from './components';
import { About, Projects, Resume, Contact } from './containers';

const Root = () => {
  const [activeTab, setCurrentPage] = useState(0); 

  const setActiveTab = (index) => {
    setCurrentPage(index);
  };

  return (
    <React.StrictMode>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 && <About />}
      {activeTab === 1 && <Projects />}
      {activeTab === 2 && <Resume />}
      {activeTab === 3 && <Contact />}
      <Footer />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
