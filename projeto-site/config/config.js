module.exports = {
  production: {
    username: 'marcelo.lsantos',
    password: '#Gf71402730225',
    database: 'ac2MarceloSantos',
    host: 'localhost',
    dialect: 'mysql',
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