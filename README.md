# Containers for Development (part 1)

## Task 1: Install Rancher Desktop

> Warning!
> 
> Do this task only if you didn't install Rancher Desktop, Docker or Docker Desktop before.
> If you are not sure whether you installed Docker run `docker --version` in PowerShell. If command/cmdlet has not been found then you don't have Docker installed on your machine.

### Po co?

Bo jest to najprostszy sposób uruchomienia kontenerów na Windows

### Kroki

1. Pobierz instalator ze strony [Rancher Desktop](https://github.com/rancher-sandbox/rancher-desktop/releases/download/v1.8.1/Rancher.Desktop.Setup.1.8.1.msi)
1. Uruchom instalator i zainstaluj oprogramowanie. Możesz zostać poproszony o restart systemu
1. Uruchom Rancher Desktop i poczekaj aż pobranie komponentów Rancher Desktop zostanie zakończone

## Task 2: Check Docker installation

### Po co?

Żeby mieć pewność, że komponenty potrzebne do uruchomienia kontenerów zostały poprawnie zainstalowane

### Kroki

1. Uruchom PowerShell (nie jako administrator)
1. Wykonaj komendę `docker --version`:

   Przykład:

    ```bash
    PS> docker --version
    Docker version 23.0.1-rd, build 393499b
    ```

1. Uruchom testowy kontener korzystając z komendy `docker run hello-world`:

    Przykład:

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

### Po co?

Bo to nasza pierwsza aplikacja, którą chcemy uruchomić

### Kroki

1. 