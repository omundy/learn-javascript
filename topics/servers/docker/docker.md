<!-- paginate: true -->

← [Learn Javascript](../README.md)

# Docker

Use containerization to make deploying apps easier


<!--
Presentation comments ...
-->





---

## What is Docker?

- **Docker** is an open-source software designed to facilitate and simplify application development through "containerization".
- A **container** is a standardized environment that packages an application with its server dependencies.
- Containers are compact and portable units that can reproduce a specific filesystem, data, and application dependencies across any machine.



---

## Docker Images

- A **Docker image** is a "snapshot" (source code and dependencies needed to run) of a container at a specific point in time.
- An image is a template, so when you create a container it runs an instance of the image, including all the source code inside. [[1](https://phoenixnap.com/kb/docker-image-vs-container)]



---

## Dockerfile

- The details of an image and its environment are stored in a [**Dockerfile**](https://docs.docker.com/engine/reference/builder/).
- For example, [this file](https://github.com/jkrup/express-docker-up/blob/master/Dockerfile) contains information to install the dependencies for a node app and start the server.

```bash
FROM node:10-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js .
CMD ["node", "index.js"]
```


---

## Tutorials

- [Docker: Get Started](https://docs.docker.com/get-started/)



---

## Docker CLI

Command | Description
--- | ---
`docker images` | List all images
`docker ps -a` | List all containers
`docker ps -as` | List all containers with size
`docker ps` | List your running containers
`history | grep docker` | List past commands with "docker"
`docker -d` | Detach shell and run container in background
`docker system prune` | Remove all unused containers

Complete cleanup: stop everything, remove containers, then remove images.
```
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -q)
```

https://docs.docker.com/get-started/






---

## Use LSDTopoTools with Docker

From [Installing LSDTopoTools using Docker](https://lsdtopotools.github.io/LSDTT_documentation/LSDTT_installation.html)

1. Download and install Docker. Make sure its running.
2. Create and change into a directory for the docker containers on your desktop

```bash
cd Desktop
mkdir LSDTopoTools
cd LSDTopoTools
```

3. Pull the full LSDTopoTools container and run it, [making your folder a linked volume](https://blog.container-solutions.com/understanding-volumes-docker). `--rm` will automatically remove the container when it exits.

```bash
docker run --rm -it -v /Users/owenmundy/Desktop/LSDTopoTools:/LSDTopoTools lsdtopotools/lsdtt_pcl_docker
```

4. Inside the running instance (in Docker Desktop open CLI), start LSDTopoTools.

```bash
Start_LSDTT.sh
```

5. Get the test data - Run this once to add a data directory to the linked volume in your instance `/LSDTopoTools/data` (also is visible on your computer at `/Users/owenmundy/Desktop/LSDTopoTools/data`)

```bash
Get_LSDTT_example_data.sh
```

6. Change into the correct data directory and run your first analysis [Basic analyses in LSDTopoTools using the lsdtt-basic-metrics program](https://lsdtopotools.github.io/LSDTT_documentation/LSDTT_basic_usage.html). If you have installed LSDTopoTools correctly this will spit out some information to you screen and make a hillshade of the DEM, which is called WA_FirstExample_hs.bil.

```bash
cd /LSDTopoTools/data
cd ExampleTopoDatasets/BasicMetricsData
lsdtt-basic-metrics WA_BasicMetrics01.driver
```
