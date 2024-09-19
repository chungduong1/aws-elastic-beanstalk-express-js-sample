pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/your-repo/aws-elastic-beanstalk-express-js-sample.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    docker.image('node:16').inside {
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Deploy to AWS Elastic Beanstalk') {
            steps {
                // You can add a script or use a Jenkins plugin to deploy to AWS Elastic Beanstalk here.
                echo 'Deploying to AWS Elastic Beanstalk...'
            }
        }
    }
}
