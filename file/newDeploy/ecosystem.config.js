module.exports = {
  apps : [{
    name: 'dw_api_and_back',
    script: './apiDist/server.js',
    args: '',
    instances: 1,
    autorestart: false,
    restart_delay: 2000,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }, {
    name: 'dw_client',
    cwd: './client_build',
    script: './server.js',
    args: '',
    instances: 1,
    autorestart: false,
    restart_delay: 2000,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
