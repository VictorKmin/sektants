module.exports = async (req, res) => {
    const sektantModel = req.app.get('sektantModel');

    sektantModel.prestige = sektantModel.prestige + 25;

    res.render('blood', {
        features: [{prestige: sektantModel.prestige}]
    });
};