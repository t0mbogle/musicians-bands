const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        let newBand = await Band.create({ name: "D12", genre: "rap" })

        expect(newBand).toBeInstanceOf(Object);
        expect(newBand.name).toBe("D12");
        expect(newBand.genre).toBe("rap");
    })

    test('can create a Musician', async () => {
        let newMusician = await Musician.create({ name: "Tom Misch", instrument: "Guitar" })

        expect(newMusician).toBeInstanceOf(Object);
        expect(newMusician.name).toBe("Tom Misch");
        expect(newMusician.instrument).toBe("Guitar");
    })
})