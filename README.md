# react boilerplate

## 로컬 Docker
Docker 빌드
```
$> docker build -f Dockerfile.local -t react-docker:latest .
```

Docker 실행
stdin_open # docker run -i
tty        # docker run -t
```
$> docker run -i -t -p 3000:3000 react-docker:latest
```