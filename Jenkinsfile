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
                    echo 'Testing...'
                    try {
                        snykSecurity(
                            snykInstallation: 'Snyk@latest', // Ensure the correct installation name
                            snykTokenId:  'snyk-api-token', // Use the correct credential ID
                            additionalArguments: '--all-projects --detection-depth=4' // Optional arguments
                        )
                    } catch (Exception e) {
                        echo "Snyk Security scan failed: ${e.message}"
                        currentBuild.result = 'UNSTABLE' // Mark the build as unstable
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
        unstable {
            echo 'Pipeline succeeded with vulnerabilities found!'
            // Here, you could add notification logic to alert the team about vulnerabilities
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
