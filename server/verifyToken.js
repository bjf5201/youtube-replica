import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  // take access token from cookie
  const token = req.cookies.access_token
  // if no token, return error
  if(!token) return next(createError(401, "You need to sign in to perform this action."))

  jwt.verify(token, process.env.JWT, (err, user)=> {
    if(err) return next(createError(403, "You are not authorized to perform this action."));
    req.user = user;
    next()
  })
}