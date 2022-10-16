import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import './Login.css'



import { useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='container login'>
      <div className='img'>
        <img src='/images/logo.png'></img>
      </div>
      <Form >
        <div>
          <FloatingLabel
            controlId="username"
            label="Nombre de usuario"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Nombre de usuario"
              name="username"
            />
          </FloatingLabel>
        </div>
        <div>
          <FloatingLabel
            className="mb-3"
            label="Contraseña"
            controlId="contrasena"
          >
            <Form.Control
              type="text"
              placeholder="Contraseña"
              name="contrasena"
            />
          </FloatingLabel>
        </div>

        <div>
          <Button variant='primary' onClick={() => navigate(`/main`)}>Sign in</Button>
        </div>

      </Form>
    </div>

  );
}

export default Login