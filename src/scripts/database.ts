import { createConnection } from "mysql";

let con = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restoran",
});

con.connect((err) => {
    if (err) console.error(err);
    console.log("Terhubung jir")
});

export function getDatabase(tableName: string) {
    return new Promise((resolve, reject) => {
        con.query(`SELECT * FROM ${tableName}`, (err, res) => {
            if (err) console.error(err);
            resolve({ res });
        })
    })
}