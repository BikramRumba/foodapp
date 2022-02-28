// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useContext } from "react";
// /* We will be using firebase to provide infromation for
// authentication *

// const AuthContext = React.createContext()

// export function useAuth(){
//     return useContext(AuthContext)
// }


// function AuthProvider({children}) {
// const [currentUser, setCurrentUser] = useState();

//     function signup (name, email, password){
//         return auth.createUserWithEmailAndPassword(name, email, password)
//     }

// useEffect(()=> {
//     /* THis function will unsubscribe when we unmount this method */
//    const unsubscribe = auth.onAuthStateChanged(user => {
//         setCurrentUser(user)
//     });
//     return unsubscribe
// }, [])
    



//     const value = {
//         currentUser,
//         signup
//     }

//   return(
//       <AuthContext.Provider value={value}>
//         {props.children}
//       </AuthContext.Provider>
//     );
// }

// export default AuthContextProvider;
