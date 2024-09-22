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
                    // Ensure npm is available
                    sh 'node -v && npm -v'
                    
                    // Install dependencies
                    sh 'npm install --save'
                }
            }
        }
        stage('Build') {
            steps {
                git url:'https://github.com/chungduong1/aws-elastic-beanstalk-express-js-sample',branch:'main'
                echo 'Building..'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
