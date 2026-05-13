pipeline {
    agent any

    stages {
        stage('Fetch Code') {
            steps {
                // บอก Jenkins ให้ไปดึงโค้ดโดยใช้ Token ที่เราฝากไว้
                checkout([$class: 'GitSCM', 
                    branches: [[name: '*/main']], 
                    userRemoteConfigs: [[url: 'https://github.com/benzandbellza/3nconnect_backend_elysiajs.git', 
                    credentialsId: 'github-token-dev']]])
            }
        }
        stages {
            stage('Fix Firewall') {
                steps {
                    // สั่งเปิด Port 22 และ Reload UFW
                    sh 'sudo ufw allow 22/tcp'
                    sh 'sudo ufw reload'
                    
                    // หรือถ้าไม่มั่นใจ สั่งปิดไปก่อนเลย
                    // sh 'sudo ufw disable'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                // Prisma generate จะรันใน Dockerfile builder stage อยู่แล้ว
                sh 'docker build -t 3nconnect_backend_elysiajs .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying ElysiaJS container...'
                // หยุด container เก่า (ถ้ามี) แล้วรัน container ใหม่พร้อม env file
                sh '''
                    docker stop 3nconnect_backend_elysiajs || true
                    docker rm 3nconnect_backend_elysiajs || true
                    docker run -d \
                        --name 3nconnect_backend_elysiajs \
                        --env-file .env \
                        -p 3000:3000 \
                        --restart unless-stopped \
                        3nconnect_backend_elysiajs
                '''
            }
        }
        
    }
}