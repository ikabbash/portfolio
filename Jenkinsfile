pipeline {
    agent {
        label 'azure-vm'
    }
    

    stages {

        stage('SonarQube Analysis (SAST)') {
            steps {
                sh ".sonar/sonar-scanner-5.0.1.3006-linux/bin/sonar-scanner \
                        -Dsonar.projectKey=portfolio-project \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://sonarqube-devsecops.com \
                        -Dsonar.token=sqp_9c20c1a6d834d666ea40670147ed6db4176df96b"
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
