import './App.css';
import FormLogin from './components/modal-forms/modal-form-login/form-login';
import FormSignup from './components/modal-forms/modal-form-signup/form-signup';

function App() {
  return (
    <>
      <FormLogin isVisible={true} />
      <FormSignup isVisible={false} />
    </>
  );
}

export default App
