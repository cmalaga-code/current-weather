import { useState, useEffect } from 'react';
import './App.css';
import TopSection from './TopSection'
import Card from './Card'

function App() {
  const [isMobileSize, setIsMobileSize] = useState(false);
  useEffect(() => {
      if (window.innerWidth <= 430) {
          setIsMobileSize(true);
      }
  }, [])
  return (
    <div className='app'>
      <TopSection isMobileSize={isMobileSize}/>
      <Card isMobileSize={isMobileSize}/>
    </div>
  );
}

export default App;
