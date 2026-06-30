pipeline {
    agent any

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

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                // Prisma generate จะรันใน Dockerfile builder stage อยู่แล้ว
                sh "echo 'APP_HOSTNAME'=localhost > .env"
                sh "echo 'APP_PORT'=3000 >> .env"
                sh "echo 'APP_API_PREFIX'= >> .env"
                sh "echo 'APP_JWT_SECRET_TOKEN=${env.PROD_JWT_SECRET_TOKEN}' >> .env"
                sh "echo 'APP_JWT_ALGO=${env.APP_JWT_ALGO}' >> .env"
                sh "echo 'DATABASE_URL=${env.PROD_CONNECTION_DATABASE_URL}' >> .env"
                sh "echo 'DIRECT_URL=${env.PROD_CONNECTION_DIRECT_DATABASE_URL}' >> .env"
                sh "echo 'SUPABASE_URL=${env.PROD_SUPABASE_URL}' >> .env"
                sh "echo 'SUPABASE_ANON_KEY=${env.PROD_SUPABASE_ANON_KEY}' >> .env"

                sh 'docker build -t 3nconnect_backend_elysiajs .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying ElysiaJS container...'
                // หยุด container เก่า (ถ้ามี) แล้วรัน container ใหม่พร้อม env file
                
                sh "cat .env"

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