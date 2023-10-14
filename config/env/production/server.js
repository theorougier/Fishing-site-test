module.exports = ({ env }) => ({
    proxy: true,
    host: "0.0.0.0",
    port: process.env.PORT,
    url: env('https://rocky-chamber-63002-4fbee1292d17.herokuapp.com'),
    app: { 
      keys: env.array('APP_KEYS')
    },
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET'),
      },
    },
  })
  