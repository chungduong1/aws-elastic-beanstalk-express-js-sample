pipeline {
    agent {
        docker {
            image 'node:16'
            args '--dns 8.8.8.8' // Adding DNS configuration for Docker
        }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install --save'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    echo 'Building the project...'
                }
            }
        }
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
        stage('Deliver') { 
            steps {
                script {
                    echo 'Deliver the project...'
                }
            }
        }
    }
}
