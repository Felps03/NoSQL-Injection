# seleciona a imagem base
FROM node:26-slim

LABEL MAINTAINER="Felipe Santos - @felps03"

# seta o diretório pra usar, como um cd /usr/src/app. Isso é importante pra não ter problemas de permissão

WORKDIR /usr/src/app

# seta variáveis de ambiente que poderão ser acessadas dentro da aplicação
ENV NODE_ENV=production
ENV PORT=3333

# copia todos os packages json (é importante existir o package-lock) para instalar os módulos
COPY package*.json ./

# instala apenas as dependências de produção, sem Babel: o app roda direto de src/ (ESM nativo)
RUN npm ci --omit=dev

# copia tudo do diretório local (pc de vcs) para o diretório local (workdir do Docker) da imagem
COPY . .

# expõe para a rede fora do docker a porta da variável definida (nesse caso, 3333)
EXPOSE 3333

# roda comandos do CMD, mais rápido do que o RUN, mas poderia ser RUN também
CMD ["npm", "start"]
