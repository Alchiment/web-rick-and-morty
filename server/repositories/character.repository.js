import dbConn from "../utils/db/database.js";

/**
 *
 * @param filter {Object}
 * @param filter.name {String}
 * @param filter.status {String} alive | dead | unknown
 * @param filter.species {String} human | alien | other
 * @param filter.gender {String} female, male, genderless, unknown
 * @returns {Promise<Array>}
 */
export async function fetchQueryCharacters(filter) {
    const conn = await dbConn.getConnection();
    let condition = {};
    if (filter) {
        Object.keys(filter).forEach(key => {
            condition[key] = {$regex: filter[key], $options: 'i'};
        });
    }
    condition['$or'] = [
        {starred: {$exists: false}}, {starred: false}
    ];
    return await conn.collection('characters').find(condition).toArray();
}

/**
 *
 * @returns {Promise<Array>}
 */
export async function fetchCharactersStarred() {
    const conn = await dbConn.getConnection();
    return await conn.collection('characters').find({
        "starred": true
    }).toArray();
}