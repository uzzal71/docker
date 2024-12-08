## Docker Install Command for Linux
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

## Uninstall Docker Engine
1. Uninstall the Docker Engine, CLI, containerd, and Docker Compose packages:
```bash
 sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
```

2. Images, containers, volumes, or custom configuration files on your host aren't automatically removed. To delete all images, containers, and volumes:
```bash
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

3. Remove source list and keyrings
```bash
sudo rm /etc/apt/sources.list.d/docker.list
sudo rm /etc/apt/keyrings/docker.asc
```

## Docker nginx
```bash
docker run -d nginx
```


```bash
docker ps
```