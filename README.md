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
 

Installation

    Clone the repository:

    git clone https://github.com/Bitdolorian/fractal-ckpool.git
    cd fractal-ckpool
     

    Build the core pool (ckpool):

    cd ckpool
    ./autogen.sh
    ./configure
    make
    sudo make install
    cd ..
     

    Build the statistics daemon (ckstats):

    cd ckstats
    ./autogen.sh
    ./configure
    make
    sudo make install
    cd ..
     

⚙️ Configuration

Before running the pool, you must configure the ckpool.conf file (usually located in /etc/ or the share/ directory).

Key Configuration Parameters:

    url: The stratum URL for miners to connect to.

    coin: Set to fractal or the specific coin daemon name.

    db: PostgreSQL database connection string for share logging.

    stats: IP/Port for the ckstats listener.

See share/example.conf for a full configuration template.
🏃‍♂️ Running the Pool

It is recommended to run the pool and stats daemon as separate processes or via a process manager (like systemd or screen).

    Start the Stats Daemon:

    ./ckstats/ckstats -c path/to/ckpool.conf
     

    Start the Pool:

    ./ckpool/ckpool -c path/to/ckpool.conf
     

🛠️ Troubleshooting

    Empty Directories: If ckpool or ckstats appear empty after cloning, ensure submodules are initialized:

    git submodule update --init --recursive
     

    (Note: This repository now includes these files directly, so this step may not be required for recent clones.)

    Build Errors: Ensure libcurl, jansson, and openssl development headers are installed.

📄 License

This project is licensed under the MIT License (or specify the license used by the original CKPool, often GPL).
🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
