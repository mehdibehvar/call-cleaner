export const userRoutes = {
getAllUsers:"api/v1/users",
getMeUsers:"api/v1/users/me",
getUserById:"api/v1/users/:id",
createUser:"api/v1/users",
updateUser:"api/v1/users/:id",
deleteUser:"api/v1/users/:id",
}


export const authRoutes = {
signup:"/api/v1/auth/signup",
loginWithPassword:"/api/v1/auth/password",
}