pipeline {
    agent {
        label 'azure-vm'
    }
    
    stages {

        stage('SonarQube Analysis - SAST') {
            steps {
                sh "/home/azureuser/.sonar/sonar-scanner-5.0.1.3006-linux/bin/sonar-scanner \
                        -Dsonar.projectKey=portfolio-project \
                        -Dsonar.sources=/home/azureuser/workspace/DevSecOps \
                        -Dsonar.host.url=http://sonarqube-devsecops.com \
                        -Dsonar.token=sqp_245fced3fa8542bf7f2bdf63021ae3193b233290"
            }
        }

        stage('Vulnerability Scan - Docker') {
            steps {
                parallel(
                    "Dependency Scan": {
                        dependencyCheck additionalArguments: '--format HTML', odcInstallation: 'DP-Check'
                    },
                    "Image Scan": {
                        sh "bash /home/azureuser/devsecops-tools/trivy-image-scan.sh"
                    },
                    "OPA Conftest": {
                        sh "conftest test --policy /home/azureuser/devsecops-tools/docker.rego /home/azureuser/workspace/DevSecOps/Dockerfile"
                    }
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

        stage('Vulnerability Scan - Kubernetes') {
            steps {
                sh "bash /home/azureuser/devsecops-tools/kubesec-scan.sh"
            }
        }

        stage('Deploy Application') {
            steps {
                sh 'sudo kubectl rollout restart deployment -n react react-app-deployment'
            }
        }

        stage('OWASP ZAP - DAST') {
            steps {
                sh 'docker run --network host -v $(pwd):/zap/wrk/:rw -t owasp/zap2docker-weekly zap-baseline.py -t http://ikabbash.com -r report.html'
            }
        }
    }
}
