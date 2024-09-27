pipeline {
    agent {
        docker {
            image 'node:16'
        }
    }
    environment {
        SNYK_TOKEN = credentials('organisation-snyk-api-token') // Reference the secret text credential
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
                    // Here you would add any build steps for your project
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                snykSecurity(
                    snykInstallation: 'Snyk@latest', // Ensure the installation name matches what you have in Jenkins
                    snykTokenId: 'organisation-snyk-api-token', // Use the credential ID here
                    additionalArguments: '--all-projects --detection-depth=4' // Optional arguments for Snyk scan
                )
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying the project...'
                    // Add your deployment commands here, e.g., eb deploy
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
