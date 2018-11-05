module.exports = async (req, res) => {
    try {

        const sektantModel = req.app.get('sektantModel')
        const name = req.params.id;
        await sektantModel.findOneAndDelete({name});
        res.end('deleted');

    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
};