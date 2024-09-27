pipeline {
    agent any
    stages {
        stage('Test Credentials') {
            steps {
                script {
                    def token = credentials('organisation-snyk-api-token')
                    echo "Token retrieved: ${token}" // This should print the token (be careful with sensitive data)
                }
            }
        }
    }
}
