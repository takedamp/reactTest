import React, {useState, useEffect, useMemo, useAnyKeyToRender, useReducer} from 'react';

const firstUser = {
  id: "123-456",
  firstName: "ryoichiro",
  lastName: "takeda",
  city: "tsurugashima city",
  state: "japan",
  email: "aaa@gmail.com",
  admin: false
}

export default function UserData(){
    // const [user, setUser] = useState(firstUser);
    
    // reducer
    const [user, setUser] = useReducer(
      (user, newDetails) => ({ ...user, ...newDetails}),firstUser
    );

    // onClickイベントでfirstUserの中身が「admin: true」に書き換わってしまう
    return(
      <div>
        <h1>
          {user.firstName} {user.lastName} - {user.admin ? "Admin": "User"}
        </h1>
        <p>Email: {user.email}</p>
        <p>
          Location: {user.city},{user.state}
        </p>
        <button onClick={() => {
          // setUser({...user, admin: true})
          setUser({admin: true})
        }}>Make Admin</button>
      </div>
    )
}