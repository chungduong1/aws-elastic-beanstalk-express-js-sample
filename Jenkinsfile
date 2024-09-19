pipeline {
    agent {
        docker {
            image 'node:16'
            args '-u root' // Use root to avoid permission issues
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
