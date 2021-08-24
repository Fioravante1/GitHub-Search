import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import requestApi from '../../services/httpServise';
import FormConteiner from './styles';
import github from '../../Assets/github.png';
import { Conteiner } from '../../styles/GlobalStyles';

function FormLogin() {
  const { setData, valueInputUser, setValueInputUser } = useContext(Context);

  const history = useHistory();

  function handleChange({ target }) {
    const newValue = target.value;
    setValueInputUser(newValue);
  }

  async function handleOnClick() {
    const response = await requestApi(`/${valueInputUser}`) || [];
    setData(response);
    history.push('/home');
  }

  return (
    <Conteiner>
      <FormConteiner>
        <img src={github} alt="git hub" />
        <form>
          <input
            placeholder="Usuário"
            id="usergithub"
            type="text"
            value={valueInputUser}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={handleOnClick}
          >
            ENTRAR
          </button>
        </form>
      </FormConteiner>
    </Conteiner>
  );
}

export default FormLogin;
