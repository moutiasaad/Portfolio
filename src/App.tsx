import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { ProjectPage } from './components/Project/ProjectPage'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer></Footer>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
