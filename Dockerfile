# seleciona a imagem base
FROM node:24-slim

LABEL MAINTAINER="Felipe Santos - @felps03"

# seta o diretório pra usar, como um cd /usr/src/app. Isso é importante pra não ter problemas de permissão

WORKDIR /usr/src/app

# seta variáveis de ambiente que poderão ser acessadas dentro da aplicação
ENV PORT=3333
ENV NODE_ENV=production

# copia todos os packages json (é importante existir o package-lock) para instalar os módulos
COPY package*.json ./

# instala TODAS as dependências (incluindo devDependencies): o script "build" ainda depende do
# Babel para gerar dist/. Isso será simplificado quando o Babel for removido (próxima fase)
RUN npm ci

# copia tudo do direitorio local (pc de vcs) para o diretório local (workdir do Docker) da imagem
COPY . .

# gera o build transpilado em dist/, exigido pelo script "start" atual (node dist/server.js)
RUN npm run build

# expõe para a rede fora do docker a porta da variável definida (nesse caso, 3333)
EXPOSE $PORT

# roda comandos do CMD, mais rápido do que o RUN, mas poderia ser RUN também
CMD [ "npm", "start" ]