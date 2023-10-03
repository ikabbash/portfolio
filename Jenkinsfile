pipeline {
    agent {
        label 'azure-vm'
    }
    
    stages {

        stage('Docker build') {
            steps {
                sh 'docker build -t portfolio .'
            }
        }
        
    }
}
