pipeline {
    agent {
        docker {
            image 'node:16'
        }
    }
    environment {
        SNYK_TOKEN = credentials('snyk-api-token') // Assuming you have stored the Snyk API token in Jenkins credentials
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
        
        stage('Security Scan') {
            steps {
                script {
                    // Install Snyk CLI
                    sh 'npm install -g snyk'
                    
                    // Run Snyk security scan and fail build if there are critical vulnerabilities
                    sh '''
                    snyk auth $SNYK_TOKEN
                    snyk test --severity-threshold=high || exit 1
                    '''
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
                script {
                    echo 'Running tests...'
                    // Add your test commands here, e.g., npm test
                }
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
