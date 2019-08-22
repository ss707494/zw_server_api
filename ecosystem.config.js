module.exports = {
  apps : [{
    name: 'API',
    script: 'dist/server.js',

    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '128.14.236.90.ipssh.net',
      ref  : 'origin/master',
      repo : 'https://github.com/ss707494/zw_server_api.git',
      path : '/usr/ss707494/zw_project/pm2_deploy',
      'post-deploy' : 'yarn install && npm run babel && pm2 reload ecosystem.config.js --env production'
    }
  }
};
