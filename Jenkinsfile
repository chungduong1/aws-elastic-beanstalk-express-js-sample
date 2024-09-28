pipeline {
    agent {
        docker {
            image 'node:16'
            args '--dns 8.8.8.8' // Adding DNS configuration for Docker
        }
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
                    echo 'Building the project...'
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
}
