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

export function getDatabase(tableName: string, filter: string = "") {
    return new Promise((resolve, reject) => {
        con.query(`SELECT * FROM ${tableName} ${filter}`, (err, res) => {
            if (err) console.error(err);
            resolve({ res });
        })
    })
}

export function getMenuDB(kategori: string) {
    if (kategori === "semua") {
        return getDatabase("menu");
    } else {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM menu where kategori = '${kategori}'`, (err, res) => {
                if (err) console.error(err);
                resolve({ res });
            })
        })
    }
}