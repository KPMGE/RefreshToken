#!/bin/bash

# Runs a container with postgres with the password 'root' and exposes the port 5432
echo "Starting postgres container running on port 5432..."
sudo docker run -it -d --rm -p 5432:5432 -e POSTGRES_PASSWORD=root --name pg_container postgres:alpine
echo "All done!"
