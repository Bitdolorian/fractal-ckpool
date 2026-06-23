module.exports = {
  apps: [{
    name: "ckstats-fb",
    script: "pnpm",
    args: "start",
    cwd: "/your/path-to/fractal-ckpool/ckstats",
    interpreter: "none",
    autorestart: true,
    env: {
      PORT: 3002
    }
  }]
}
