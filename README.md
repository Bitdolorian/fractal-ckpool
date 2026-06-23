# Fractal CKPool

A high-performance mining pool solution based on the CKPool architecture, optimized for the Fractal network. This repository includes the core pool software, statistics daemon, and necessary build scripts.

## 📁 Project Structure

- **`ckpool/`**: The core mining pool engine (C-based). Handles stratum connections, job distribution, and share validation.
- **`ckstats/`**: The statistics and monitoring daemon. Tracks hashrate, worker performance, and pool health.
- **`bin/`**: Compiled binaries and helper scripts.
- **`data/`**: Runtime data storage (database files, logs).
- **`share/`**: Configuration examples, documentation, and shared resources.

## 🚀 Quick Start

### Prerequisites

Ensure you have the necessary build tools installed (Ubuntu/Debian example):
```bash
sudo apt-get update
sudo apt-get install -y build-essential autoconf libcurl4-openssl-dev libjansson-dev libssl-dev libgmp-dev make git   
