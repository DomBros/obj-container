# Containers for Development (part 1)

## Task 1: Install Rancher Desktop

> Warning!
> 
> Do this task only if you didn't install Rancher Desktop, Docker or Docker Desktop before.
> If you are not sure whether you installed Docker run `docker --version` in PowerShell. If command/cmdlet has not been found then you don't have Docker installed on your machine.

### Po co?

Because it's free and the simplest solution to run containers on Windows

### Steps

1. Download the installer from the [Rancher Desktop](https://github.com/rancher-sandbox/rancher-desktop/releases/download/v1.8.1/Rancher.Desktop.Setup.1.8.1.msi) website.
1. Run the installer and install the software. You may be prompted to restart your system.
1. Start Rancher Desktop and wait for the Rancher Desktop components to finish downloading.

## Task 2: Check Docker installation

### Why?

To be sure that all Rancher Desktop components are installed correctly

### Steps

1. Open PowerShell (nie jako administrator)
1. Run command `docker --version`:

   Example:

    ```bash
    PS> docker --version
    Docker version 23.0.1-rd, build 393499b
    ```

1. Run test container using command `docker run hello-world`:

    Example:

    ```bash
    PS> docker run hello-world
    Unable to find image 'hello-world:latest' locally
    latest: Pulling from library/hello-world
    2db29710123e: Pull complete
    Digest: sha256:4e83453afed1b4fa1a3500525091dbfca6ce1e66903fd4c01ff015dbcb1ba33e
    Status: Downloaded newer image for hello-world:latest

    Hello from Docker!
    This message shows that your installation appears to be working correctly.

    To generate this message, Docker took the following steps:
    1. The Docker client contacted the Docker daemon.
    2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
        (amd64)
    3. The Docker daemon created a new container from that image which runs the
        executable that produces the output you are currently reading.
    4. The Docker daemon streamed that output to the Docker client, which sent it
        to your terminal.

    To try something more ambitious, you can run an Ubuntu container with:
    $ docker run -it ubuntu bash

    Share images, automate workflows, and more with a free Docker ID:
    https://hub.docker.com/

    For more examples and ideas, visit:
    https://docs.docker.com/get-started/
    ```

## Task 3: Run application in container

### Steps

1. Open `./app/packages/frontend` directory in PowerShell
1. Build frontend container from Dockerfile:

    ```bash
    docker buildx build -t my-frontend .
    ```

1. Run frontend container:

    ```bash
    docker run -p 8080:80 my-frontend
    ```

1. Open [http://localhost:8080](http://localhost:8080) in browser to view running frontend application

1. Open new PowerShell window and go to `./app/packages/api` directory

1. Build API container from Dockerfile:

    ```bash
    docker buildx build -t my-api .
    ```

1. Run backend container:

    ```bash
    docker run -p 8888:8888 my-api
    ```

1. Close frontend application using Ctrl-C

1. Close backend application using:

    ```bash
    docker ps
    docker kill <backend-container-id>
    ```

## Task 4: Run both containers in single PowerShell session

### Steps

1. Open `./app` directory in PowerShell
1. Run containers with Docker Compose:

    ```bash
    docker-compose up --build
    ```

1. Open [http://localhost:8080](http://localhost:8080) in browser to view application running