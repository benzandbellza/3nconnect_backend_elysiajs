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

        stage('Prepare Environment') {
            steps {
                echo 'Preparing runtime environment from Jenkins variables...'
                sh '''
                    set -eu

                    required_vars="
                    PROD_JWT_SECRET_TOKEN
                    APP_JWT_ALGO
                    PROD_CONNECTION_DATABASE_URL
                    PROD_CONNECTION_DIRECT_DATABASE_URL
                    PROD_SUPABASE_URL
                    PROD_SUPABASE_ANON_KEY
                    "

                    for var_name in $required_vars; do
                        eval "var_value=\${$var_name:-}"
                        if [ -z "$var_value" ]; then
                            echo "Missing required Jenkins variable: $var_name" >&2
                            exit 1
                        fi
                        echo "Verified Jenkins variable: $var_name"
                    done

                    cat <<EOF > .env
                    APP_HOSTNAME=localhost
                    APP_PORT=3000
                    APP_API_PREFIX=
                    APP_JWT_SECRET_TOKEN=${PROD_JWT_SECRET_TOKEN}
                    APP_JWT_ALGO=${APP_JWT_ALGO}
                    DATABASE_URL=${PROD_CONNECTION_DATABASE_URL}
                    DIRECT_URL=${PROD_CONNECTION_DIRECT_DATABASE_URL}
                    SUPABASE_URL=${PROD_SUPABASE_URL}
                    SUPABASE_ANON_KEY=${PROD_SUPABASE_ANON_KEY}
                    EOF

                    echo "Prepared .env from Jenkins variables"
                    grep -E '^(APP_HOSTNAME|APP_PORT|APP_API_PREFIX|APP_JWT_ALGO|DATABASE_URL|DIRECT_URL|SUPABASE_URL)=' .env | sed 's/=.*/=***masked***/'
                '''
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
                sh "test -s .env"

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
