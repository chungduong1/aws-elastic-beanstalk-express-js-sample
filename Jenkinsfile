pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/chungduong1/aws-elastic-beanstalk-express-js-sample.git'
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
                // Add your deployment steps here
                echo 'Deploying to AWS Elastic Beanstalk...'
            }
        }
    }
}
