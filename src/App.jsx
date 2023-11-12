import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage';
import ContactCards from './Components/ContactCards';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact-cards/:id" element={<ContactCards />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
