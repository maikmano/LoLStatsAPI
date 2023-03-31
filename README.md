
# LoLStatsAPI

Uma breve descrição sobre o que esse projeto faz e para quem ele é

👋 Olá e bem-vindo à nossa API do League of Legends, onde você pode obter informações sobre os perfis dos jogadores, incluindo taxas de vitórias, níveis e classificações!


## 🚀 Início Rápido

Para usar nossa API, siga estas etapas:

- Clone este repositório.
- Instale as dependências com `npm install`.
- Crie um arquivo `.env` com sua chave da API da Riot.
- Inicie o servidor com `npm start`.
- Envie uma solicitação GET para http://localhost:3000/players/{region}/{summonerName}.

#### PARA SELECIONAR A REGIÃO,  [CLIQUE AQUI](https://developer.riotgames.com/docs/lol#data-dragon_data-assets)

    
## 🎯 Funções

Nossa API é construída com Node.js, Express e Axios. Ele permite que você obtenha as seguintes informações:

- Nome do invocador
- Nível do invocador
- Classificação do invocador na fila solo
- Classificação do invocador na fila flex
- LP do invocador na fila solo
- LP do invocador na fila flex
- Taxa de vitórias do invocador na fila solo
- Taxa de vitórias do invocador na fila flex
- Vitórias e derrotas totais do invocador na fila solo
- Vitórias e derrotas totais do invocador na fila flex
- A API da Riot é chamada para obter essas informações, que são então extraídas e formatadas por nossa API.
