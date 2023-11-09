// const jwt = require("jsonwebtoken");

// function auth(req, res, next) {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       res.status(401).json({ error: "Unauthorized" });
//     }

//       const verified = jwt.verify(token, process.env.JWT_Secret);
//       req.user = verified.user;

//   } catch (err) {
//     console.log(err);
//     res.status(401).json({ error: "Unauthorized" });
//   }
// }

// module.exports = auth;
