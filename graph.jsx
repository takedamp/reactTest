import{ GraphQLClient} from "graphql-request";
import {useEffect, useState} from "react"

// このコードを送信したい。

// query findRepos($login: String!){
//   user(login: $login){
//     id
//     login
//     name
//     location
//     avatarUrl
//     repositories(first: 100) {
//       totalCount
//       nodes {
//         name
//       }
//     }
//   }
// }

// const query = `
// query findRepos($login: String!){
//   user(login: $login){
//     id
//     login
//     name
//     location
//     avatarUrl
//     repositories(first: 100) {
//       totalCount
//       nodes {
//         name
//       }
//     }
//   }
// }
// `

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


function UserDetails({ data }){
  console.log(data);
  return(
    <div className="githubUser">
      <img
        src = {data.avatarUrl}
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

function List({ data = [], renderItem, renderEmpty }){
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key = {i}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}


// todo：所持しているアカウントの認証の実施、認証トークンの作成
const client = new GraphQLClient(
  "https://api.github.com/graphql",
  {
    // PERSONAL_ACCESS_TOKEN ⇒　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
    // 参照）トークン取得の教材p212 取得手順 
    // 参照）https://docs.github.com/ja/graphql/guides/forming-calls-with-graphql#personal-access-token
    // 作業を実施して、バックエンドからトークンを取得という指示となってしまった。　
    headers:{
      authorization: `Bearer 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`
    }
  }
);

// client
//   .request(query, {login: "moontahoe"})
//   .then(results => JSON.stringify(results, null, 2))
//   .then(console.log)
//   .catch(console.error)


export default function App() {
  const [login, setLogin] = useState("takedamp");
  const [userData, setUserData] = useState();

  const query = `
    query findRepos($login: String!){
      user(login: $login){
        id
        login
        name
        location
        avatarUrl
        repositories(first: 100) {
          totalCount
          nodes {
            name
          }
        }
      }
    }
  `

  useEffect(() => {
    client
      .request(query, { login })
      .then(({ user }) => user)
      .then(setUserData)
      .catch(console.error)
  },[client, query, login]);

  console.log(userData);

  if(!userData) return <p>loading...</p>
  
  return(
    <>
      {/* <SearchForm value={login} onSearch={setLogin} /> */}
      <UserDetails data={userData} />
      <p>{userData.repositories.totalCount} - repos </p>
      <List
        data={userData.repositories.nodes}
        renderItem={repo => <span>{repo.name}</span>}
      />
    </>
  )
}