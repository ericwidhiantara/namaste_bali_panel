if sudo docker ps -a --format '{{.Names}}' | grep -q '^namaste_bali_panel$'; then
    sudo docker stop namaste_bali_panel && sudo docker rm namaste_bali_panel &&
    sudo npm install && sudo npm run build &&
    sudo docker build -t namaste_bali_panel . &&
    sudo docker run --name namaste_bali_panel -p 3001:3001 -d namaste_bali_panel
else
   sudo npm install && sudo npm run build &&
       sudo docker build -t namaste_bali_panel . &&
       sudo docker run --name namaste_bali_panel -p 3001:3001 -d namaste_bali_panel
fi
