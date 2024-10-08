pipeline {
    agent {
        docker {
            image 'node:16'
            args '--dns 8.8.8.8' // Adding DNS configuration for Docker
        }
    }
    environment {
        TITLE = '21593837 Project 2 Jenkins Pipeline'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Starting to install dependencies...'

                    // Enable verbose logging and write output to log file
                    sh 'npm install --save --verbose > install.log 2>&1'
                }
                // Archive the install log
                archiveArtifacts artifacts: 'install.log', allowEmptyArchive: true
            }
        }
        stage('Build') {
            steps {
                script {
                    echo "Building the project: ${TITLE}"
                     sh 'npm run build > build.log 2>&1' // Run build and log output to build.log
                }
                // Archive the build log
                archiveArtifacts artifacts: 'build.log', allowEmptyArchive: true
            }
        }
        stage('Scan') {
            steps {
                script {
                    echo 'Scanning the project with Snyk...'

                    // Capture Snyk scan output
                    snykSecurity(
                        snykInstallation: 'Snyk@latest',
                        snykTokenId: 'snyk-api-token',
                        additionalArguments: '--all-projects --detection-depth=4 --severity-threshold=critical'
                    )
                }
                // Archive the Snyk report
                archiveArtifacts artifacts: 'snyk_report.json', allowEmptyArchive: true
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    sh 'npm test > test.log 2>&1' // Run tests and log output to test.log
                    
                    // Run tests and log output to test.log
                    
                }
                // Archive the test log
                archiveArtifacts artifacts: 'test.log', allowEmptyArchive: true
            }
        }
        stage('Deliver') {
            steps {
                script {
                    echo 'Delivering the project...'
                    // Start the application in the background
                    sh 'nohup node app.js > deliver.log 2>&1 &'
                    sleep 5 // Wait for a short period to allow the app to start
                    
                }
                // Archive the delivery log
                archiveArtifacts artifacts: 'deliver.log', allowEmptyArchive: true
            }
        }
    }
    post {
        always {
            echo 'Pipeline finished!'
        }
        failure {
            echo 'Pipeline failed!'
        }
        success {
            echo 'Pipeline succeeded!'
        }
    }
}
