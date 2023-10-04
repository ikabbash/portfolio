pipeline {
    agent {
        label 'azure-vm'
    }
    
    stages {

        stage('SonarQube Analysis (SAST)') {
            steps {
                sh "/home/azureuser/.sonar/sonar-scanner-5.0.1.3006-linux/bin/sonar-scanner \
                        -Dsonar.projectKey=portfolio-project \
                        -Dsonar.sources=/home/azureuser/workspace/DevSecOps \
                        -Dsonar.host.url=http://sonarqube-devsecops.com \
                        -Dsonar.token=sqp_9c20c1a6d834d666ea40670147ed6db4176df96b"
            }
        }

        stage('Vulnerability Scan') {
            steps {
                parallel(
                    "Dependency Scan": {
                        dependencyCheck additionalArguments: '--format HTML', odcInstallation: 'DP-Check'
                    },
                    "Image Scan": {
                        sh "bash /home/azureuser/devsecops-tools/trivy-image-scan.sh"
                    },
                    // "OPA Conftest": {
                    //     sh ""
                    // }
                )
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
                sh 'kubectl rollout restart deployment -n react react-app-deployment'
            }
        }
    }
}
