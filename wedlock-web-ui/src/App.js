import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Store'
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Registration from './Login/Registration/Registration';
import ForgotPassword from './Login/ForgotPassword/ForgotPassword';
import Login from './Login/Login';
import ViewProfile from './Profile/ViewProfile';
import './App.scss';

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/restration" element={<Registration />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/profile" element={<ViewProfile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
