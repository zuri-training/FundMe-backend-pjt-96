const router = require("express").Router();
const undergraduate = require("../routes/undergraduates");

router.get('/', (req, res) => {
    res.status(200).json({message: 'It works'})
})
router.use("/", undergraduate);

module.exports = router;
