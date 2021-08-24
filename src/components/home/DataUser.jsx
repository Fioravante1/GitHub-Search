import React, { useContext } from 'react';
import Context from '../../context/Context';
import { DataContainer } from './styles';

function DataUser() {
  const {
    data,
    // valueInputUser,
    // infoFollowers,
    // setInfoFollowers,
    // infoFollowing,
    // setInfoFollowing,
    // setInfoRepos,
    // infoRepos,
  } = useContext(Context);

  // useEffect(() => {
  //   async function requestData() {
  //     const responseFollowers = await requestApi(`/${valueInputUser}/followers`);
  //     const responseFollowing = await requestApi(`/${valueInputUser}/following`);
  //     const responseRepos = await requestApi(`/${valueInputUser}/repos`);
  //     setInfoFollowers(responseFollowers);
  //     setInfoFollowing(responseFollowing);
  //     setInfoRepos(responseRepos);
  //   }
  //   requestData();
  // }, [valueInputUser]);

  return (
    <DataContainer>
      <div className="data__user">
        <h2>{data.followers}</h2>
        <p>Seguidores</p>
      </div>
      <div className="data__user">
        <h2>{data.following}</h2>
        <p>Seguindo</p>
      </div>
      <div className="data__user">
        <h2>{data.public_repos}</h2>
        <p>Repos</p>
      </div>
    </DataContainer>
  );
}

export default DataUser;
