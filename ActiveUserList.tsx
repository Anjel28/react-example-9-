//Filtering Before Itreating

import React from 'react';

interface user{
    id: number,
    name: string,
    isActive: boolean,
}

const ActiveUserList: React.FC = () =>{
    const users: user[] =[
         { id: 1, name: 'Alice', isActive: true },
    { id: 2, name: 'Bob', isActive: false },
    { id: 3, name: 'Charlie', isActive: true },
    ]

     const ActiveUsers = users.filter(user => user.isActive);

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="card">
                   <div className="btn btn-primary">

                   
                   
                     <div>
      <h2>Active Users</h2>
      </div>
      <ul>
        {ActiveUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
 
                </div>
            </div>
        </div>
        </>
    )
}


export default ActiveUserList;
