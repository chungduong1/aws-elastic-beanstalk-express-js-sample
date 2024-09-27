pipeline {
    agent {
        docker {
            image 'node:16'
        }
    }
    environment {
        SNYK_TOKEN = credentials('organisation-snyk-api-token') // Use the correct credential ID
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
                  snykInstallation: 'Snyk@latest', // Replace with your Snyk CLI installation name in Jenkins
                  snykTokenId: 'organisation-snyk-api-token', // Use the ID of your Snyk API token in Jenkins credentials
                  additionalArguments: '--all-projects --detection-depth=4' // Example: scan all projects with a detection depth of 4
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
