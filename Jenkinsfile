pipeline {
    agent {
        docker {
            image 'node:16'
            args '--dns 8.8.8.8' // Adding DNS configuration for Docker
        }
    }
    enviroment {
        //define version or enviroment variables, credentials in here
        TITLE = '21593837 Project 2 Jenkins Pipeline'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install --save'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    echo "Building the ...${TITLE}"
                    
                }
            }
        }
        stage('Scan'){
            steps {
                script {
                        echo 'Scanning...'
                        snykSecurity(
                                snykInstallation: 'Snyk@latest', // Ensure the correct installation name
                                snykTokenId:  'snyk-api-token', // Use the correct credential ID
                                additionalArguments: '--all-projects --detection-depth=4' // set high or critical to halts
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
                }
            }
        }

        stage('Deliver') { 
            steps {
                script {
                    echo 'Deliver the project...'
                }
            }
        }
    }
    post {
        //block execute AFTER all stages executed
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
