import { IUser } from '../models/IUser';

export default   class UserService{
    private static Users: IUser[] = [
   {sno:1, name: 'Techinfoyt', age:25},
            {sno:2, name: 'Tushar', age: 28},
            {sno: 3, name: 'noname', age: 21},
    ]

     static getAllUsers(){
        return this.Users
    }
}