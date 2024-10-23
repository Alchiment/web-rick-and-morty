import dbConn from "./database.js";
import axios from "axios";
import {SystemVars} from "../../constants/system-vars.constant.js";

/**
 * @returns {Promise<String>}
 */
async function preLoadDbCollections() {
    return new Promise(async (resolve, reject) => {
        const conn = await dbConn.getConnection();
        const collections = await conn.listCollections().toArray();
        const collectionNames = collections.map(col => col.name);

        if (!collectionNames.includes('characters')) {
            await conn.createCollection('characters');
        }

        if (!collectionNames.includes('comments')) {
            await conn.createCollection('comments');
        }

        resolve('Database and collections are set up');
    });
}

/**
 *
 * @param clear
 * @returns {Promise<String>} as well as reject the error, it should be displayed in the console
 */
async function loadCharactersFromEndpoint(clear = false) {
    return new Promise(async (resolve, reject) => {
        try {
            const conn = await dbConn.getConnection();
            const originCollections = await axios.get(`${SystemVars.API_RICK_MORTY}/character`);
            const characters = originCollections.data.results;
            const collection = conn.collection('characters');
            if (clear) {
                await collection.deleteMany({});
            }
            await collection.insertMany(characters);
            resolve('Characters loaded successfully');
        } catch (error) {
            reject('Error loading characters');
            console.error('Error loading characters:', error);
        }
    });
}

/**
 * @param importData {boolean} Flag to import data from the Ricky Morty API
 * @param clearData {boolean} Flag to delete all characters stored
 * @returns {Promise<void>}
 */
async function handleInitialDbData({importData = false, clearData = false}) {
    return new Promise(async (resolve, reject) => {
        const loadCollectionsResponse = await preLoadDbCollections();
        let importCharactersResponse = '';
        if (importData) {
            importCharactersResponse = await loadCharactersFromEndpoint(clearData);
        }
        const databaseConfigurationMsj = `Database configuration: Create Collection: ${loadCollectionsResponse}`;
        const importDataMsj = `Import data: ${importCharactersResponse || false}`;
        const clearDataMsj = `Clear data: ${clearData}`;
        resolve(`${databaseConfigurationMsj} | ${importDataMsj}, ${clearDataMsj}`);
    });
}

export default {
    handleInitialDbData
}