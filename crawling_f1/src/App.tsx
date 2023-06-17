import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routers/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => {
          let Element = route.element;
          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <Element />
              }
            />
          );
          // }
        })}
        <Route path="home" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
