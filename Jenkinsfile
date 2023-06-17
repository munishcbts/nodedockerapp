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
                sh '------------------------------------------'
                sh 'echo ******* Mysql Server Deployed *******'
                sh '------------------------------------------'
            }
        }
        stage('Deploy: Application') { 
            steps {
                sh 'docker-compose up -d'
                sh '------------------------------------------'
                sh 'echo ******* Application Deployed *******'
                sh '------------------------------------------'
            }
        }
    }
}
