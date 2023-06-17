pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t munish/nodedockerapp .'
            }
        }
        stage('Deploy: Mysql') { 
            steps {
                sh 'docker-compose -f docker-compose-mysql.yml up -d'
                sh 'echo ------------------------------------------'
                sh 'echo ******* Mysql Server Deployed *******'
                sh 'echo ------------------------------------------'
            }
        }
        stage('Deploy: Application') { 
            steps {
                sh 'docker-compose up -d'
                sh 'echo ------------------------------------------'
                sh 'echo ******* Application Deployed *******'
                sh 'echo ------------------------------------------'
            }
        }
    }
}
