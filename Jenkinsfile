pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/VINODvoid/cryptoverse.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cryptoverse:latest .'
            }
        }
        stage('Push Docker Image') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-credentials-id', url: '']) {
                    sh 'docker push cryptoverse:latest'
                }
            }
        }
    }
}
