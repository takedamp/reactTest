import {React, LoadingSpinner, useEffect, useState} from 'react';
import { FixedSizeList } from 'react-window';
// import faker from 'faker';
// ⇒　最新のreactでは使えない。
// import { faker } from '@faker-js/faker';

// const bigList = [...Array(50)].map(() => ({
//   name: faker.person.fullName(),
//   // faker.name.findName() ⇒　古いfakerコンポーネントのみで使用できる
//   email: faker.internet.email(),
//   avatar: faker.image.avatar()
//   // faker.internet.avatar() ⇒　古いfakerコンポーネントから使用できる
// }));

// console.log(bigList);

function useFetch(uri){

  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!uri) return;
    fetch(uri)
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  }, [uri]);

  return{
    loading,
    data,
    error
  }
}

function GitHubUser({ login }){
  const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);

  console.log(data);

  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if(loading) return <h1>loading...</h1>
  if(data)
  return(
    <div className="githubUser">
      <img
        src = {data.avatar_url}
        alt={data.login}
        style={{width:200}}
      />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  )
}


function SearchForm(value){
  const [loginId, setLogin] = useState(value.value);
  console.log(`loginId:${loginId}`)

  const newId = (e) => {
    setLogin(e);
  }

  return(
    <>
      <input 
        value={loginId}
        onChange = {e => newId(e.target.value)}
      ></input>
    </>
  )
}

// ログインIDの入力フォームであるSearchFromコンポーネントが実装することが出来ればログイン情報が更新されるたびに
export default function App(){
  const [login, setLogin] = useState("moonhighway");
  // const [login, setLogin] = useState();
  console.log(`loginApp:${login}`)
  
  const newId = (e) => {
    setLogin(e);
  }

  return(
    <>
      <SearchForm 
        value = {login} 
        onSearch = {setLogin} 
      />
      <GitHubUser login={login} />
    </>
  )
}

// export default function app(){
//   const renderRow = ({ index, style}) => (
//     <div style = {{ ...style, ...{display: "flex" } }}>
//       <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
//       <p>
//         {bigList[index].name} - {bigList[index].email}
//       </p>
//     </div>
//   );

//   return (
//     <FixedSizeList
//       height = {window.innerHeight}
//       width = {window.innerWidth - 20}
//       itemCount = {bigList.length}
//       itemSize = {50}
//     >
//       {renderRow}
//     </FixedSizeList>
//   )
// }