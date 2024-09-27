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
                    // Install project dependencies
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
                    echo 'Testing...'
                    snykSecurity(
                        snykInstallation: 'Snyk@latest', // Ensure this matches your Snyk installation name
                        snykTokenId: 'organisation-snyk-api-token', // Use the ID directly
                        additionalArguments: '--all-projects --detection-depth=4' // Optional arguments
                    )
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
