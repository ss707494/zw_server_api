module.exports = {
  apps : [{
    name: 'dw',
    script: './file/start.js',

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
