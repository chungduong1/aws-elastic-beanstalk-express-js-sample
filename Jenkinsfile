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
                    echo 'Testing...'
                    // Snyk Security Scan
                    sh 'npm install -g snyk' // Install Snyk CLI
                    sh '''
                    snyk auth $SNYK_TOKEN
                    snyk test --severity-threshold=high || exit 1
                    '''
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
