export let userData = {
    user1:{
        userid: 0,
        fullName: "Testing User",
        email: "Test@validemail.com",
        password: "password",
    },
}
export function checkUsername_password(userName, password){
    for(const user in userData){
        let currUser = userData[user];
        if(currUser.email === userName){
            if(currUser.password === password){
                return currUser.userid;
            }
        }
    }
    return -1;
}
export function getNumUsers(){
    let numUsers = 0;
    for(let user in userData){
        numUsers++;
    }
    return numUsers;
}
export function addToUserData(user){
    userData[user.userid] = user;
}