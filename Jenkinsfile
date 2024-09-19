pipeline {
    agent {
        docker {
            image 'node:16'
            label 'docker-node16'
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                // Check out the source code
                checkout scm

                // Install dependencies
                sh 'npm install --save'
            }
        }

        stage('Build') {
            steps {
                // Run build command if needed
                // e.g., sh 'npm run build'
                echo 'Build stage can be added here if needed'
            }
        }

        stage('Test') {
            steps {
                // Run tests
                // e.g., sh 'npm test'
                echo 'Test stage can be added here if needed'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the application
                // e.g., sh './deploy.sh'
                echo 'Deploy stage can be added here if needed'
            }
        }
    }

    post {
        always {
            // Cleanup and notifications
            echo 'This will always run after the build'
        }
        success {
            echo 'This will run only if the build is successful'
        }
        failure {
            echo 'This will run only if the build fails'
        }
    }
}

