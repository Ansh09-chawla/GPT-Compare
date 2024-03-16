# seng513-202401-group-1

## Application Setup and Initialization Guide

Follow these instructions to build and run the Docker container for the GPT Compare application, which includes the initialization of the database with the schema and seeding scripts.

### Initialization Scripts

1. **Prepare Initialization Scripts**: Prepare the database initialization scripts and create a directory named `scripts` in the same directory as the `docker-compose.yml` file.
2. **Place SQL Scripts**: Inside the `scripts` directory, place the database schema (`init.sql`) and data seeding (`seed.sql`) SQL files. The PostgreSQL container is configured to automatically apply these scripts in alphabetical order when the Docker database image is built for the first time.

### Building and Running Containers

To build the Docker images and start the containers, run the following command in the terminal:

```bash
docker-compose up --build
```

This command builds the images for the application and starts the containers as defined in the `docker-compose.yml` file.

#### Recreating the Database

If the database needs to be recreated, use the following commands:

```bash
docker-compose down -v
docker-compose up --build
```

The `down -v` command removes the containers and their volumes, effectively resetting the database. Running `up --build` after this will rebuild the images and restart the containers, reapplying the initialization scripts.
