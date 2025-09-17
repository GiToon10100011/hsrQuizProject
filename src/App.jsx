import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";
import AudioProvider from "./components/AudioManager";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap');

  ${reset}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  body{
    font-family: 'Noto Sans KR', 'Exo 2', sans-serif;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
      linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 100%);
    background-attachment: fixed;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.15), transparent),
      radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.1), transparent),
      radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.2), transparent),
      radial-gradient(1px 1px at 130px 80px, rgba(255, 255, 255, 0.15), transparent),
      radial-gradient(2px 2px at 160px 30px, rgba(255, 255, 255, 0.1), transparent);
    background-repeat: repeat;
    background-size: 200px 100px;
    animation: twinkle 4s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: -1;
  }

  @keyframes twinkle {
    0% { opacity: 0.3; }
    100% { opacity: 0.8; }
  }

  :root{
    --primary-purple: #7877C6;
    --secondary-pink: #FF77C6;
    --accent-blue: #4FC3F7;
    --dark-bg: #0f0f23;
    --card-bg: rgba(120, 119, 198, 0.1);
    --text-primary: #ffffff;
    --text-secondary: #B8B8D1;
    --gradient-primary: linear-gradient(135deg, #7877C6 0%, #FF77C6 100%);
    --gradient-secondary: linear-gradient(135deg, #4FC3F7 0%, #7877C6 100%);
    --shadow-glow: 0 0 20px rgba(120, 119, 198, 0.3);
    --orbitron-font: "Orbitron", monospace;
    --exo-font: "Exo 2", sans-serif;
  }
`;

function App() {
  return (
    <AudioProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AudioProvider>
  );
}

export default App;
