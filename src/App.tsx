import './App.css';
import MainPage from './components/main-page/main-page';
import ModalFormLogin from './components/modal-forms/modal-form-login/modal-form-login';
import ModalFormSignup from './components/modal-forms/modal-form-signup/modal-form-signup';

function App() {
  return (
    <>
      <MainPage/>
      <ModalFormLogin isVisible={false} />
      <ModalFormSignup isVisible={false} />
    </>
  );
}

export default App
