export const userRoutes = {
getAllUsers:"api/v1/users",
getMeUsers:"api/v1/users/me",
getUserById:"api/v1/users/:id",
createUser:"api/v1/users",
updateUserName:"api/v1/users/update-name",
updateUserEmail:"api/v1/users/update-email",
deleteUser:"api/v1/users/:id",
}


export const authRoutes = {
signup:"/api/v1/auth/signup",
loginWithPassword:"/api/v1/auth/password-login",
}