pipeline {
    agent {
        docker {
            image 'node:16'

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
