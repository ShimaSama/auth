const sqlite3 = require('sqlite3').verbose()
const argon2 = require('argon2')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, async (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        await db.run(`CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            password text 
        )`)
	
        //const walrusPassword1 = await argon2.hash('bob')
        //const tinaPassword2 = await argon2.hash('tina')

        //const insert = 'INSERT INTO user (name, password) VALUES (?, ?)'
        //await db.run(insert, ["bob", walrusPassword1])
        //await db.run(insert, ["tina", tinaPassword2])
    }
})

module.exports = db
