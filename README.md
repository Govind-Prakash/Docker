<a href="https://hub.docker.com/u/govindprakash">
  <img width="100%" src="https://github.com/Govind-Prakash/Govind-Prakash/blob/main/Images/Docker-Banner.jpg?raw=true">
</a>

# Docker
This repository hosts Dockerfiles designed to streamline computational biology and simulation tasks. Whether you're working on genomics, proteomics, systems biology, or molecular simulations, these containerized solutions simplify software installation, dependency management, and environment setup. Ideal for researchers and developers seeking reproducibility and scalability in their workflows.

## Install Docker for linux

For Linux visit <a href="https://docs.docker.com/engine/install/ubuntu/">this website </a> and download the stable version of docker.The process issame for windows and linux, download the stable version only, for windows make sure the virtualisation option is on in settings, and if you dont have windos\ws 0 or higher you need to install further tools to support compatibility like <a href="URL">Docker Toolkit </a>.

## Uninstall old versions
```bash
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

## Set up the repositiory
1. Update the *apt* Package
```bash
sudo apt-get update
```

2. Install packages to allow *apt* to use a repository over HTTPS:
```bash
sudo apt-get install\
apt-transport-https\
ca-certificates\
software-properties-common
```
            

3. Install using the apt repository
```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```


4. Install the Docker packages

 ```bash
 sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
 ```

5. Verify that the installation is successful by running the hello-world image:

```bash
sudo docker run hello-world
```


This command downloads a test image and runs it in a container. When the container runs, it prints a confirmation message and exits.

You have now successfully installed and started Docker Engine. 







