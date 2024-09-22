pipeline {
    agent {
        docker {
            image 'node:16'
        }
    }

    stages {
        stage('Build') {
            steps {
                git url:'https://github.com/chungduong1/aws-elastic-beanstalk-express-js-sample',branch:'main'
                echo 'Building..'
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
