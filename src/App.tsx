import './App.css';
import ModalFormLogin from './components/modal-forms/modal-form-login/modal-form-login';
import ModalFormSignup from './components/modal-forms/modal-form-signup/modal-form-signup';

function App() {
  return (
    <>
      <ModalFormLogin isVisible={false} />
      <ModalFormSignup isVisible={true} />
    </>
  );
}

export default App
