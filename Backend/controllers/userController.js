const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken")

exports.register = async (req, res) => {
    try {
        const { email, userName, password, passwordVerify } = req.body;

        // Validation

        if (!email || !userName || !password || !passwordVerify ) {
            return res.status(400).json({ errorMessage: "Please enter all required fields" })
        }

        if (password.length < 8) {
            return res.status(400).json({ errorMessage: "Please enter a password of at least 8 characters" })
        }

        if (password !== passwordVerify) {
            return res.status(400).json({ errorMessage: "Please enter the same password twice" })
        }

        const existingUser = await User.findOne( {email: email} );
        
        if (existingUser) {
            return res.status(400).json({ errorMessage: "An account with this email already exists" })
        }

        // Hash creation
        bcrypt.hash(password, 10, function(err, hash) {
            try {
            const createdUser = new User({
                email,
                userName,
                password: hash,
                });

            // Save created user
            createdUser.save()

            const token = JWT.sign(
            {
                user: createdUser._id,
            }, process.env.JWT_Secret
            )
            res.cookie("token", token, {
                httpOnly: true
            })
            .send()
        } catch {
            res.status(
            { errorMessage: "Could not register, please try again later." })
        }
    });
              
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
}

// // SIGNUP
// exports.signup = (req, res) => {
//   const { email, userName, password } = req.body;

//   bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash(password, salt, function (err, hash) {
//       try {
//         User.findOne({ $or: [{ email: email }, { userName: userName }] })
//           .then((existingUser) => {
//             if (existingUser) {
//               res.status(422).json({
//                 message: "Naudotojas jau egzistuoja, vietoj jo prisijunkite.",
//               });
//             } else {
//               const createdUser = new User({
//                 email,
//                 userName,
//                 password: hash,
//                 highScore: 0,
//               });

//               createdUser
//                 .save()
//                 .then((doc) => {
//                   res
//                     .status(201)
//                     .json({ message: `Vartotojas sėkmingai sukurtas.` });
//                 })
//                 .catch((err) => res.status(404).json({ message: err.message }));
//             }
//           })
//           .catch((err) => res.status(404).json({ message: err.message }));
//       } catch {
//         res
//           .status(500)
//           .json({ error: "Užsiregistruoti nepavyko, bandykite vėliau." });
//       }
//     });
//   });
// };

// // LOGIN
// exports.login = async (req, res) => {
//   try {
//     const { userName, password } = req.body;

//     // validate
//     if (!userName || !password) {
//       return res.status(400).json({message: "Įveskite visus privalomus laukus."});
//     }

//     const existingUser = await User.findOne({ userName });
//     if (!existingUser) {
//       return res.status(401).json({message: "Neteisingas vartotjojo vardas arba slaptažodis."});
//     }

//     const passwordCorrect = await bcrypt.compare(
//       password,
//       existingUser.password
//     );
//     if (!passwordCorrect) {
//       return res.status(401).json({ message: "Neteisingas vartotjojo vardas arba slaptažodis."});
//     }

//     res
//       .send(`${existingUser.userName}.${existingUser.highScore}`);
//   } catch {
//     res.status(500).json({message: "Prisijungti nepavyko, bandykite vėliau."});
//   }
// };



// // LOGOUT
// exports.logout = (req, res) => {
//   res
//     .cookie("token", "", {
//       httpOnly: true,
//       expires: new Date(0),
//     })
//     .send("Loged out");
// };
