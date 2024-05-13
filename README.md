# Let's Encrypt ACME Challenge Server

This is a simple server that can be used
to serve ACME challenge requests for Let's Encrypt.

## Requirements

- **Node.js -** Version 20
- **Environment variables:**

    - `LETSENCRYPT_CHALLENGE` - The challenge string that Let's Encrypt will request.

## Running

### Using Docker (Recommended)

In order to run the application using [Docker](https://www.docker.com/),
you must have Docker installed on your machine.

For running the application with Docker,
you will need to map port `80` to your host machine.

#### Docker CLI

- **Windows**

    ```shell
    > docker run -dp 8080:8080 \
        -e LETSENCRYPT_CHALLENGE="<Let's Encrypt challenge string>" \
        --name <container-name> \
        juansecu/letsencrypt-acme-challenge-server:v<version number>
    ```

- **MacOS/Linux**

    ```shell
    $ docker run -dp 8080:8080 \
        -e LETSENCRYPT_CHALLENGE="<Let's Encrypt challenge string>" \
        --name <container-name> \
        juansecu/letsencrypt-acme-challenge-server:v<version number>
    ```

#### Docker Compose

For running the application with Docker Compose, you can use
the [Docker Compose file](https://github.com/Juansecu/letsencrypt-acme-challenge-server/blob/main/docker-compose.yml)
provided in this repository for development and production,
but for production, you will also need to
remove the `build` property from the `http-server` service,
change the `image` property to `juansecu/letsencrypt-acme-challenge-server:v<version number>`.

You can run the application using the following command:

- **Docker Compose v1**

```shell
$ docker-compose up -d
```

- **Docker Compose v2**

```shell
$ docker compose up -d
```

### Using Node.js

For running the application with Node.js,
you will need to set the necessary environment variables
and follow the instructions below.

#### For Development

In order to run the application for development,
you will need to clone this repository
and run it using the following commands:

- **Windows**

    ```shell
    # --- INSTALLING DEPENDENCIES ---
    > npm install

    # --- RUNNING ---
    > npm run dev
    ```
  
- **MacOS/Linux**

    ```shell
    # --- INSTALLING DEPENDENCIES ---
    $ npm install

    # --- RUNNING ---
    $ npm run dev
    ```

#### For Production

In order to run the application for production,
you will only need to download the latest release
from the [releases page](https://github.com/Juansecu/letsencrypt-acme-challenge-server/releases),
set the necessary environment variables
and run the application using the following commands:

- **Windows**

    ```shell
    # --- INSTALLING DEPENDENCIES ---
    > npm install --production

    # --- RUNNING ---
    > npm start
    ```

- **MacOS/Linux**

    ```shell
    # --- INSTALLING DEPENDENCIES ---
    $ npm install --production

    # --- RUNNING ---
    $ npm start
    ```
