const model = require('./model')

// POST API
// const add = async (req, res) => {
//     const { name, rollno, email } = req.body;
//     try {
//         const Userdata = new model({
//             name,
//             rollno,
//             email,
//             image: req.file.filename,
//         })
//         const data = await Userdata.save()
//         res.status(200).send({ data })
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

const add = async (req, res) => {
    const { name, email, mobileno, address, password, city, gender, lang } = req.body;
    try {
        const Userdata = new model({
            name,
            email,
            mobileno,
            address,
            password,
            city,
            gender,
            lang,
            image: req.file ? req.file.filename : null,
        });

        const data = await Userdata.save();
        res.status(200).send({ data });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal server error" });
    }
};

// GET API
const getdata = async (req, res) => {
    try {
        const userData = await model.find()
        res.status(200).send({ userData })

    } catch (err) {
        res.status(400).send(err)
    }
}

// GET API ONLY FIND ONE
const getdataOnebyid = async (req, res) => {
    try {

        const userData = await model.findOne({ _id: req.params._id })
        res.status(200).send({ userData })

    } catch (err) {
        res.status(400).send(err)
    }
}

// DELETE API
const deleteuser = async (req, res) => {

    try {
        const data = await model.deleteOne({ _id: req.params._id })
        res.status(200).send({ data })
    } catch (err) {
        res.status(500).send(err)
    }
}

// const update = async (req, res) => {
//     const { name, rollno, email } = req.body;
//     try {
        

//         const data = await model.updateOne(
//             { _id: req.params._id }, 
//             {
//                 $set: {
//                     name,
//                     rollno,
//                     email,
//                     image: req.file.filename 
//                          }
//             }, 
//         );

//         if (data) {
//             res.status(200).send({ message: "User updated found" });
//         } else {
//             res.status(404).send({ message: "User not found" });
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ message: "Internal server error" });
//     }
// };

const update = async (req, res) => {
    const { name, email, mobileno, address, password, city, gender, lang } = req.body;
    try {
        const data = await model.updateOne(
            { _id: req.params._id },
            {
                $set: {
                    name,
                    email,
                    mobileno,
                    address,
                    password,
                    city,
                    gender,
                    lang,
                    image: req.file ? req.file.filename : undefined,
                }
            }
        );

        if (data.nModified > 0) {
            res.status(200).send({ message: "User updated successfully" });
        } else {
            res.status(404).send({ message: "User not found or data is the same" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal server error" });
    }
};




module.exports = { add, getdata, getdataOnebyid, deleteuser, update }