pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                // sh 'echo hello world' 
                sh 'docker build -t munish/nodedockerapp .'
                sh 'docker-compose up'
                sh 'echo ******* Application Deployed Successfully *******'
            }
        }
    }
}
