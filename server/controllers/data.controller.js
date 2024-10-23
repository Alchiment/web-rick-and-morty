import dbState from '../utils/db/initial_db.js';

export async function configureDb(req, res) {
    const clearData = !!req.body.clearData;
    const importData = !!req.body.importData;
    const response = await dbState.handleInitialDbData({
        importData,
        clearData
    });
    res.json(response);
}