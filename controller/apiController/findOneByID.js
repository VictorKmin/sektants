module.exports = async (req, res) => {
    try {
        const sektantModel = req.app.get('sektantModel');

        const id = req.params.id;
        const sektant = await sektantModel.findById(id);
        res.json(sektant)

    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
}