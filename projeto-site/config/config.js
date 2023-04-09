module.exports = {
  production: {
    username: 'MarceloSantos',
    password: '#Gf71402730225',
    database: 'bd_marcelo',
        host: 'marcelo.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};