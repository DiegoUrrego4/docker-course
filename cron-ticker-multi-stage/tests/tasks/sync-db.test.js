const { syncDB: syncDbTest } = require("../../tasks/sync-db");


describe('Pruebas en Sync-DB', () => {
    test('debe de ejecutar el proceso dos veces', () => {
        syncDbTest();
        const times = syncDbTest();
        console.log('Se llamó ', times)

        expect(times).toBe(2);
    })
});