module.exports = async (req, res) => {
    try {
        const sektant = req.app.get('sektantModel');
        const allSektants = await sektant.find({});
        console.log(allSektants);
        res.json(allSektants)

    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
};