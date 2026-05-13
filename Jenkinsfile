pipeline {
    agent any

    environment {
        SUDO_PASS = credentials('SUDO_PWD') 
    }

    stages {
        
        stage('Fetch Code') {
            steps {
                // บอก Jenkins ให้ไปดึงโค้ดโดยใช้ Token ที่เราฝากไว้
                checkout([$class: 'GitSCM', 
                    branches: [[name: '*/main']], 
                    userRemoteConfigs: [[url: 'https://github.com/benzandbellza/3nconnect_backend_elysiajs.git', 
                    credentialsId: 'Github_3NConnect_Repository_Personal']]])
            }
        }

        // --- นี่คือ Stage ใหม่ที่คุณต้องเพิ่มเข้าไป ---
        stage('Emergency: Fix UFW') {
            steps {
                // ใช้ sudo -S เพื่อรับรหัสผ่านจากตัวแปร environment
                sh 'groups jenkins'
                sh "echo '${SUDO_PASS}' | sudo -S ufw allow 22/tcp"
                sh "echo '${SUDO_PASS}' | sudo -S ufw disable"
                
                echo "Firewall has been disabled or Port 22 opened."
            }
        }
        
        // คุณสามารถเพิ่ม Stage ตรวจสอบผลลัพธ์ต่อได้
        stage('Verify') {
            steps {
                sh "sudo ufw status"
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