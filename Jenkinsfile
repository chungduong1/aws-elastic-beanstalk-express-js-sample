pipeline {
    agent {
        docker {
            image 'node:16'
        }
    }
    environment {
        SNYK_TOKEN = credentials('organisation-snyk-api-token')
    
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
                    try {
                        snykSecurity(
                            snykInstallation: 'Snyk@latest', // Ensure the installation name matches
                            snykTokenId: SNYK_TOKEN, // Use the credential ID
                            additionalArguments: '--all-projects --detection-depth=4' // Optional arguments
                        )
                    } catch (Exception e) {
                        echo "Snyk Security scan failed: ${e.message}"
                        currentBuild.result = 'FAILURE' // Mark the build as failed
                    }
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
