module.exports = async (req, res) => {

    try {
        const sektantModel = req.app.get('sektantModel');
        const {name, surname, country, phoneNumber, age} = {
            name: req.body.name,
            surname: req.body.surname,
            country: req.body.country,
            phoneNumber: req.body.phoneNumber,
            age: req.body.age,
        };
        const Sektant = await sektantModel.create({
            name,
            surname,
            country,
            phoneNumber,
            age,
            prestige: 20,
            health: 100
        });

        res.json({
            success: true,
            message: Sektant
        });

    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
};