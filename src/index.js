import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './services/reducers/postsSlice';
import usersReducer from './services/reducers/usersSlice';
import favoritesReducer from './services/reducers/favoritesSlice';
import chooseReducer from './services/reducers/chooseSlice';
import { BrowserRouter } from 'react-router-dom';


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    favorites: favoritesReducer,
    choose: chooseReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

