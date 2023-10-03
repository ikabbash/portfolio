pipeline {
    agent {
        label 'azure-vm'
    }
    
    
    stages {

        stage('Docker Build') {
            steps {
                sh 'docker build -t portfolio:latest .'
            }
        }

        stage('Docker Push') {
            steps {
                sh 'docker tag portfolio:latest localhost:5000/portfolio:latest'
                sh 'docker push localhost:5000/portfolio:latest'
            }
        }

        stage('Fake Testing') {
            steps {
                sh 'echo "Haha I am testing"'
            }
        }

        stage('Deploy Application') {
            steps {
                sh 'sudo kubectl apply -f k8s-manifests/service.yaml'
                sh 'sudo kubectl apply -f k8s-manifests/virtualserver.yaml'
                sh 'sudo kubectl apply -f k8s-manifests/deployment.yaml'
            }
        }
    }
}
