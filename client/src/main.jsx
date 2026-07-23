import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import PublicLayout from './layouts/PublicLayout.jsx'
import AppLayout from './layouts/AppLayout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import SimulationsPage from './pages/SimulationsPage.jsx'
import SimulationDetailPage from './pages/SimulationDetailPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="simulations" element={<SimulationsPage />} />
          <Route path="simulations/:slug" element={<SimulationDetailPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
