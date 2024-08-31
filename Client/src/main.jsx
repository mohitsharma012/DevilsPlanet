import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter,Navigate } from 'react-router-dom'

import IndexPage from './Pages/indexPage'
import LoginPage from './Pages/loginPage'
import SignUp from './Pages/SignUp'
import DashboardPage from './Pages/dashboardPage'
import ProductListingPage from './Pages/ProductListingPage'
import ProductDetailPage from './Pages/ProductDetailPage'
import ErrorPage from './Pages/404/errorPage'

const router = createBrowserRouter([
  { path: '/', element: <IndexPage /> },
  { path: '/product/:productId', element: <ProductDetailPage /> },
  { path: '/allproducts', element: <ProductListingPage PageHeading="All Products" category="ALL"  /> },
  { path: '/men', element: <ProductListingPage PageHeading="Men" category="MEN" /> },
  { path: '/women', element: <ProductListingPage PageHeading="Women" category="WOMEN" /> },
  { path: '/login', element: <LoginPage /> },
  { path : '/signup', element: <SignUp /> },
  { path : '/dashboard', element: <DashboardPage /> },
  { path : '*', element: <ErrorPage /> },

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />    
  </StrictMode>,
)
