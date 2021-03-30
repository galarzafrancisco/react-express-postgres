#!/bin/bash

SSH_KEY_PATH=/home/franciscogalarza/.ssh/id_rsa

# Check for updates
ssh-agent bash -c "ssh-add $SSH_KEY_PATH; git fetch"
if [[ $(git status | grep behind) ]]; then
    # The repo is behind
    echo "Repo is behind. Starting to deploy the new version..."
else
    # Up to date. Exit the script.
    exit 0
fi

# Step 0: Get container name and image name of current app running
old_app_container_id=$(docker ps -a | grep bank-backend | awk '{ print $1 }')
old_app_image_id=$(docker images | grep bank-backend | awk '{ print $3 }')
old_app_image_tag=$(docker images | grep bank-backend | awk '{ print $2 }')

# Step 1: Pull
ssh-agent bash -c "ssh-add $SSH_KEY_PATH; git pull"

# Step 2: Start postgres
cd db
./run.sh
cd ..

# Step 2: Build
# 2.1 Build Frontend
# cd frontend
# npm install
# npm run build
# cd ..
# 2.2 Put frontend files in the backend server
cp -r frontend/build/* backend/static
# 2.3 Build Backend
cd backend
./build.sh

# Step 3: Stop and remove old app container
docker stop $old_app_container_id
docker rm $old_app_container_id

# Step 4: Run new app
./run.sh

# Step 5: Get the container id of the new app
new_app_container_id=$(docker ps | grep bank-backend | awk '{ print $1 }')

# Step 6: Restart 2 times
sleep 30
docker restart $new_app_container_id
sleep 60
docker restart $new_app_container_id

# Step 7: Remove old app image
# docker rmi $old_app_image_id

# Step 7: End
cd ..
echo "Done"