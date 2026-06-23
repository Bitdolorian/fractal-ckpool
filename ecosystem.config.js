module.exports = {
  apps: [
    {
      name: "fractal-bitcoin",
      script: "/your/path-to/fractal-ckpool/bin/bitcoind",
      args: "-daemon=0 -datadir=/your/path-to/fractal-ckpool/data/",
      interpreter: "none",
      autorestart: true,
      log_type: "json"
    }
  ]
}
