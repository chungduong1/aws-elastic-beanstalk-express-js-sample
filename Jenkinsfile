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
                    // Remove old node_modules and package-lock.json
                    sh 'rm -rf node_modules package-lock.json'
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
                            snykInstallation: 'Snyk@latest', // Ensure the correct installation name
                            snykTokenId:  'snyk-api-token', // Use the correct credential ID
                            additionalArguments: '--all-projects --detection-depth=4 --severity-threshold=high' // Optional arguments
                        )
                    } catch (Exception e) {
                        echo "Snyk Security scan failed: ${e.message}"
                        // Log the vulnerability details if needed, or handle as desired
                    }
                }
            }
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
