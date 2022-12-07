FROM gcr.io/tot-ti-corp-arqdevops-dev/cicd/secaas/base/node:12-latest

COPY ./node_modules node_modules
COPY package.json .
COPY src src
COPY docker/entrypoint.sh .

CMD ["/bin/sh","entrypoint.sh"]
