import { Navigate } from "react-router-dom";

export default function PrivatePage ({children}){
    const auth=JSON.parse(localStorage.getItem('mywallet'));
    if(auth){
        return(
            <div>
            {children}
            </div>
        )}
        else{
            return <Navigate to='/'/>
        }
    

}