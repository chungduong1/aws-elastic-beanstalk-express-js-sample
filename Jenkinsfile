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
          snykInstallation: 'snyk@latest',
          snykTokenId: '184b9f45-7325-4901-8769-66f4b51df73f',
          // place other parameters here
        )
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
