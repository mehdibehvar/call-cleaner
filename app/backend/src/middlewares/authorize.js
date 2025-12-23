function authorize(requiredRoles = []) {
  return (req, res, next) => { 
    if (!req.user.roles.some(role => requiredRoles.includes(role))) {
      return res.status(403).json({ message: `Forbidden. Requires roles: ${requiredRoles.join(', ')}` });
    }
    next();
  };
}

export default authorize;