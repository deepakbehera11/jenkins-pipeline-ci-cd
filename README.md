# Simple Jenkins Pipeline for CI/CD
## Objective:
#### Set up a basic Jenkins pipeline to automate the process of building and deploying an application.
## Tools:
#### Jenkins, Docker
## Setup & Usage
#### - Connecting EC2 server
#### - Installing jenkins
#### - Installing plugins in jenkins
#### - Installing Docker in EC2 srever
# I
#### Creating PAT- Personal Access Token in GitHub for authorisation
#### Create a new repo in GitHub, cloning the repo on the EC2 server 
#### Creating a sample code of app.js, package.js, dockerfile, and jenkinsfile
#### Pushing changes to the repo
# 3
#### Adding GitHub server and credentials-PAT from GitHub 
#### Creating a job
#### Assigning source code management as Git
#### Executing shell in Build step with cmd
- docker build . -t 
- docker run -p 8080:8080 -d  
#### Finally Build the job
#### Killing the docker container and editing the app.js to check the upated job
#### Again build job 

![](https://github.com/deepakbehera11/jenkins-pipeline-ci-cd/blob/5a5f115dffeb21d6b1cc282f3f2b0f5bd2cd3b05/asset/Screenshot%202025-06-04%20205051.png)
