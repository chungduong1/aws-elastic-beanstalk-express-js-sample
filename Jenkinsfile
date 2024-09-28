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
                    # Remove old node_modules and package-lock.json
                    rm -rf node_modules package-lock.json
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
