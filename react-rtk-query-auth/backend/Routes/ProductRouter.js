const router = require("express").Router();
const authenticate = require("../Middlewares/Auth")

router.get("/", authenticate, (req, res) => {
    res.status(200).json([
        {
            name: "Mobile",
            price: 1000,
        },
        {
            name: "Desktop",
            price: 2000
        }
    ])
});

module.exports = router;