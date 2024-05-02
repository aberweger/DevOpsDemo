pipeline {
    agent any

    // Definition von Umgebungsvariablen
    environment {
        MY_ENV_VARIABLE = 'value'
    }

    stages {
        stage('Initialize') {
            steps {
                script {
                    // Einfache Ausgabe zur Initialisierung
                    echo 'Initializing the build process'
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application'
                // Simuliere den Build-Prozess
                sh 'echo Building...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests'
                // Simuliere das Ausführen von Tests
                sh 'echo Running unit tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to production'
                // Simuliere einen Deployment-Schritt
                sh 'echo Deploying to production environment...'
            }
        }
    }

    post {
        always {
            echo 'This will always run, regardless of the build outcome.'
        }
        success {
            echo 'Build succeeded!'
            // Archiviere simulierte Artefakte
            sh 'echo Archiving artifacts...'
        }
        failure {
            echo 'Build failed!'
            // Simuliere das Senden einer Benachrichtigung
            sh 'echo Sending failure notification...'
        }
    }
}
