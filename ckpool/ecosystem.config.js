module.exports = {
  apps: [{
    name: 'ckpool-fb',
    script: '/your/path-to/fractal-ckpool/ckpool/src/ckpool',
    args: '-c /your/path-to/fractal-ckpool/ckpool/src/ckpool.conf -n ckpool-fractal',
    interpreter: 'none',
    autorestart: true,
    restart_delay: 5000,
    log_type: 'json'
  }]
}
