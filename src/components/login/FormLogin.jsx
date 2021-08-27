import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import Context from '../../context/Context';
import requestApi from '../../services/httpServise';
import * as L from './styles';
import github from '../../Assets/github.png';

function FormLogin() {
  const {
    setData,
    valueInputUser,
    setValueInputUser,
    setUserFollo,
  } = useContext(Context);

  const history = useHistory();

  function handleChange({ target }) {
    const newValue = target.value;
    setValueInputUser(newValue);
  }

  async function handleOnClick(event) {
    event.preventDefault();
    const response = await requestApi(`/${valueInputUser}`) || [];
    setData(response);
    if (response.length === 0) {
      history.push('/');
      swal('Usuário não encontardo!');
    } else {
      history.push('/home');
      setUserFollo(valueInputUser);
      setValueInputUser('');
    }
  }

  return (
    <L.FormConteiner>
      <img src={github} alt="git hub" />
      <L.FormLogin onSubmit={handleOnClick}>
        <L.InptuLogin
          placeholder="Usuário"
          id="usergithub"
          type="text"
          value={valueInputUser}
          onChange={handleChange}
        />
        <L.ButtonLogin
          type="submit"
          onClick={handleOnClick}
          disabled={!valueInputUser}
        >
          ENTRAR
        </L.ButtonLogin>
      </L.FormLogin>
    </L.FormConteiner>
  );
}

export default FormLogin;
