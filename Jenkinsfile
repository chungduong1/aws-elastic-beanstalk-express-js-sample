pipeline {
    agent {
        docker {
            image 'node:16' // Or use a version compatible with your setup

        }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'docker --version' // Check if Docker is available
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
                script {
                    echo 'Running tests...'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying the project...'
                }
            }
        }
    }
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
