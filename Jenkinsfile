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

        stage('Deploy application') {
            steps {
                sh 'sudo kubectl apply -f k8s-manifests/service.yaml'
                sh 'sudo kubectl apply -f k8s-manifests/virtualserver.yaml'
                sh 'sudo kubectl apply -f k8s-manifests/deployment.yaml'
            }
        }
    }
}
