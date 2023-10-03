pipeline {
    agent {
        label 'azure-vm'
    }
    

    stages {

        stage('SonarQube Analysis (SAST)') {
            steps {
                sh "sonar-scanner \
                -Dsonar.projectKey=portfolio \
                -Dsonar.sources=. \
                -Dsonar.host.url=http://sonarqube-devsecops.com \
                -Dsonar.token=sqp_772016229b5f9d55fb71d392ca91cc65be3b9ad4"
            }
        }


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
