import React, { useState, useEffect } from 'react';
import { IUsers } from '../models/IUsers';
import { UsersService } from '../services/UsersService';

interface IState{
  loading: boolean,
  users: IUsers [],
  errorMsg: string,
}

const Users: React.FC = () => {
  const [state, setState] = useState<IState>({
    loading:false,
    users: [] as IUsers[],
    errorMsg: ' ',
  })


  //network request
  useEffect(()  =>{
    setState({...state, loading:true})
    UsersService.getAllUsers()
    .then((res) => setState({
      ...state, loading:false, users:res.data
    }))
    .catch(err =>setState({
      ...state, loading:false, errorMsg: err.message
    }))
    //eslint-disable-next-line
  },[])

  const {loading, users, errorMsg} = state
return(
    <>
    <div className="container">
      <h1>Data From APIS</h1>
      {errorMsg && (<p>{errorMsg}</p>)}
      {loading && <h1>Loading...</h1>}
      <table>
        <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>UserName</td>
              <td>Email</td>
            </tr>
        </thead>
        <tbody>
     {
     
     }
        </tbody>
      </table>
    </div>
    </>
)
}

export default Users;