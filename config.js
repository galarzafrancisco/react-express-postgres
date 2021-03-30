module.exports = {
    db: {
        mongoSession: {
            host: 'localhost',
            port: 4002,
            database: 'default',
            user: 'default',
            password: 'default',
            secret: '94fqjf09qvnq483y948275g092-6fm2gy8057tg93'
        },
        postgres: {
            host: 'localhost',
            port: 4001,
            database: 'default',
            user: 'default',
            password: '123456'
        }
    },
    server: {
        backend: {
            port: 4000
        },
        frontend: {
            port: 3000
        }
    },
}
