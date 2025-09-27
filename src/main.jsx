import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import mainLogo from "./components/imgVideos/mainLogo.jpg";

// const link = document.createElement("link");
// link.rel = "icon";
// link.type = "image/jpg";
// link.href = mainLogo;
// document.head.appendChild(link);

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
