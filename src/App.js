import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import Button from './components/Button';
import GlobalStyle from './components/GlobalStyle';
import HomePage from './pages/Home'
import NewsPage from './pages/News'
import 'antd/dist/antd.css';


function App() {
  const [dateTime,setDateTime]=useState('')
  return (
    <GlobalStyle>
      <div style={{ padding: 20 }}>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/news'>News</Link>
            </li>
          </ul>
        </nav>
        <input value={dateTime} type='date' onChange={e=>setDateTime(e.target.value)}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />

        </Routes>
        <Heading />
        <Paragraph />
        <Button />
      </div>
      
    </GlobalStyle>
  );
}

export default App;
