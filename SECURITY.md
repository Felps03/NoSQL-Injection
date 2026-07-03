# Política de Segurança

## Sobre este projeto

Este repositório é uma **POC educacional** que demonstra, de propósito, uma vulnerabilidade de NoSQL Injection (rota `/auth/vulnerable/login`) lado a lado com sua mitigação (rota `/auth/safe/login`). Veja o [README](./README.md) para detalhes.

A vulnerabilidade na rota `/auth/vulnerable/login` **não é um bug** — é o objeto de estudo do projeto. Não é necessário reportá-la.

## Uso responsável

- Rode este projeto apenas em ambiente local ou controlado (sua máquina, um container isolado).
- Não exponha esta aplicação publicamente na internet.
- Não use este projeto contra sistemas de terceiros.
- Não trate este repositório como ferramenta ofensiva — o objetivo é conscientização defensiva.

## Reportando outras questões de segurança

Se você encontrar um problema de segurança **fora do escopo educacional** (por exemplo, algo nas dependências do projeto, no Dockerfile, ou um comportamento inesperado na rota segura que permita bypass da validação do Zod), abra uma [issue](https://github.com/Felps03/NoSQL-Injection/issues) descrevendo:

- o comportamento esperado vs. o observado;
- passos para reproduzir;
- versão do Node.js e do MongoDB usadas.

Não é necessário divulgação privada/coordenada — por se tratar de um projeto educacional sem dados reais de usuários, issues públicas são o canal adequado.
