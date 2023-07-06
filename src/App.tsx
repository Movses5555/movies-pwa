import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { MoviePage } from './pages/MoviePage';
import { Layout } from './components/Layout';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/:id' element={ <MoviePage /> } />
      </Routes>
      <ToastContainer position='top-right'/>
    </Layout>
  );
}

export default App;
