// these are the routes that are private and only accessible when the user is authenticated

export const privatesRoutes = ["/dashboard"];

// these Are the routes that are protected and only accessible when the user is not authenticated

export const protectedRoutes = ["/auth/signin", "/auth/signup"];

// this is the default route that the user will be redirected to when they are authenticated

export const DEFAULT_SIGNIN = "/dashboard";

// no need to add public routes as they are accessible to everyone bu default
