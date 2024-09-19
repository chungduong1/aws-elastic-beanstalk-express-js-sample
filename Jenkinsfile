pipeline {
    agent {
        docker {
            image 'node:16'
            args '-u root' // Run the container as the root user
        }
    }
    stages {
        stage('Build') {
            steps {
                // Install dependencies using npm
                sh 'npm install'
            }
        }
    }
}
