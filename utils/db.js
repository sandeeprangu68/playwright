const mysql = require('mysql2/promise');

async function getConnection() {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'myapp'
    });
}

async function getUserByEmail(email) {
    const connection = await getConnection();

    try {
        const [rows] = await connection.execute(
            'SELECT * FROM users WHERE email = ?',
            [email] // ✅ use dynamic value
        );

        console.log(rows); // ✅ log before return
        return rows;

    } catch (error) {
        console.error('DB Error:', error);
        throw error;
    } finally {
        await connection.end(); // ✅ always close connection
    }
}

module.exports = { getUserByEmail };


// 🔹 Optional: Run directly for testing
if (require.main === module) {
    (async () => {
        await getUserByEmail('john@example.com'); // 👉 provide email here
    })();
}