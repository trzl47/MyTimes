#!/usr/bin/env bash
docker-compose -f docker-compose-build.yml up --build -d && \
docker system prune --volumes && \
mkdir services/mytimes-nginx/build && \
cp -r services/react/build/client services/mytimes-nginx/build && \
docker build -t trzl/portfolio:mytimes-react.1 -f ./services/mytimes-nginx/build.Dockerfile ./services/mytimes-nginx && \
# docker push trzl/portfolio:mytimes-react.1 && \
docker build -t trzl/portfolio:mytimes-proxy.1 -f ./services/reverseproxy/Dockerfile ./services/reverseproxy && \
# docker push trzl/portfolio:mytimes-proxy.1 && \
docker-compose down && \
docker system prune --volumes && \
sudo rm -rf services/mytimes-nginx/build && \
sudo rm -rf services/react/build/client && \
echo "Build complete!"