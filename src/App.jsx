


import Header from "./components/Header"
import { FeedbackProvider } from './components/context/FeedbackContext';
import FeedbackList from "./components/FeedbackList";
import Feedbacklength from "./components/Feedbacklength";
import Feedbackform from "./components/Feedbackform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import { ThemeProvider } from "./components/context/Feedbacktheme";




const App = () => {



  return (
    <ThemeProvider>
      <BrowserRouter>
        <FeedbackProvider>
          <Header text="Review App" bgColor="blue" textColor="white" />
          <div className="container">
            <Routes>
              <Route path="/" element={
                <>
                  <Feedbackform />

                  <Feedbacklength />

                  <FeedbackList />

                </>
              } />

              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </FeedbackProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App