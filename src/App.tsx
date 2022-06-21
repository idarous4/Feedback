import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import FeedbackForm from './components/FeedbackForm';
import SuggestionsPage from './components/SuggestionsPage';

function App() {
  
  return (
  <Router>
    <FeedbackForm/>
  </Router>
    
  )
}

export default App
