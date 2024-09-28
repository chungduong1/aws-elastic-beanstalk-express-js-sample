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
                    
                    // Display the contents of the log file in the Jenkins console output
                    sh 'cat install.log'
                }
                // Archive the install log
                archiveArtifacts artifacts: 'install.log', allowEmptyArchive: true
            }
        }
        stage('Build') {
            steps {
                script {
                    echo "Building the project: ${TITLE}"

                    // Log build steps with `-x` flag
                    sh '''
                        set -x
                        # Example build commands
                        echo "Starting build process..." > build.log
                        npm run build >> build.log 2>&1
                        set +x
                    '''
                    
                    // Display build log
                    sh 'cat build.log'
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
                        additionalArguments: '--all-projects --detection-depth=4'
                    )

                    // Assuming Snyk output is saved to snyk_report.json
                    sh 'cat snyk_report.json'
                }
                // Archive the Snyk report
                archiveArtifacts artifacts: 'snyk_report.json', allowEmptyArchive: true
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    
                    // Run tests and log output to test.log
                    sh 'npm test > test.log 2>&1'
                    
                    // Display test log
                    sh 'cat test.log'
                }
                // Archive the test log
                archiveArtifacts artifacts: 'test.log', allowEmptyArchive: true
            }
        }
        stage('Deliver') {
            steps {
                script {
                    echo 'Delivering the project...'
                    
                    // Log delivery steps
                    sh '''
                        echo "Starting delivery process..." > deliver.log
                        # Example delivery commands
                        echo "Delivering project files..." >> deliver.log
                    '''
                    
                    // Display delivery log
                    sh 'cat deliver.log'
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
