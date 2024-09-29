# ASSIGNMENT 2: Automating CI/CD with Dockerized Jenkins: Secure Pipeline for Node.js Web Application Deployment

# Forked AWS Elastic Beanstalk Node.js Sample App

This repository contains a sample Node.js web application built using [Express](https://expressjs.com/), meant to be used as part of the AWS DevOps Learning Path.

# Jenkinsfile Creation and Security Integration
- Create Jenkinsfile
- Use Node 16 Docker image
- Integrated security tool Snyk to scan for vunerabilites in project
- Configure Jenkins pipeline to use the Jenkins form github
- Setup Jenkins to store logs and accessible
- Ensure pipeline run successfully.

## Modified Files
- Jenkinsfile - file for Jenkins run.
- build.js - Script for stage build
- test.js - Script for stage test
- package.json - addedd two scripts build, test

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

