import { MongoClient } from "mongodb";
import {systemVars} from "../../constants/system-vars.constant.js";

const strConnection = systemVars.STR_CONN_DB || '';
const dbName = systemVars.DB_NAME || '';
const client = new MongoClient(strConnection);
let conn;

async function openConnection() {
    if (conn) { return conn; }
    conn = (await client.connect()).db(dbName);
}

async function getConnection() {
    return conn;
}

const connection = {
    openConnection,
    getConnection
}

export default connection;