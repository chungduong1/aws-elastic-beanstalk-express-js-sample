pipeline {
    agent {
        docker {
            image 'node:16'
            args '--dns 8.8.8.8' // Adding DNS configuration for Docker
        }
    }
    environment {
        // Define version or environment variables, credentials here
        TITLE = '21593837 Project 2 Jenkins Pipeline'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install --save'
                }
                // Archive the generated Install Dependencies report (make sure the file exists in workspace)
                archiveArtifacts artifacts: '**/npminstall_report.json', allowEmptyArchive: true
            }
        }
        stage('Build') {
            steps {
                script {
                    echo "Building the ...${TITLE}"
                    // Assuming build_report.json is generated in this step
                    sh 'touch build_report.json' // For example purposes; replace with actual build command
                }
                // Archive the generated Build report
                archiveArtifacts artifacts: '**/build_report.json', allowEmptyArchive: true
            }
        }
        stage('Scan') {
            steps {
                script {
                    echo 'Scanning...'
                    snykSecurity(
                        snykInstallation: 'Snyk@latest', // Ensure the correct installation name
                        snykTokenId: 'snyk-api-token', // Use the correct credential ID
                        additionalArguments: '--all-projects --detection-depth=4' // Set high or critical to halt
                    )
                }
                // Archive the generated Snyk report
                archiveArtifacts artifacts: '**/snyk_report.json', allowEmptyArchive: true
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Testing the project...'
                    // Assuming test_report.json is generated in this step
                    sh 'touch test_report.json' // For example purposes; replace with actual test command
                }
                // Archive the generated Test report
                archiveArtifacts artifacts: '**/test_report.json', allowEmptyArchive: true
            }
        }
        stage('Deliver') { 
            steps {
                script {
                    echo 'Deliver the project...'
                    // Assuming deliver_report.json is generated in this step
                    sh 'touch deliver_report.json' // For example purposes; replace with actual delivery command
                }
                // Archive the generated Delivery report
                archiveArtifacts artifacts: '**/deliver_report.json', allowEmptyArchive: true
            }
        }
    }
    post {
        // Block executes AFTER all stages are executed
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
