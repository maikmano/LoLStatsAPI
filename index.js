const dotenv = require('dotenv')
dotenv.config();

const express = require('express')
const axios = require('axios')

const app = express()

app.get('/players/:region/:nick', async  (req, res) => {
  const { nick } = req.params
  const { region } = req.params
  const apiKey = process.env.API

  try{
     // Fazer a solicitação para obter o ID do player
      const { data: {id}} = await axios.get(`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nick}?api_key=${apiKey}`)

     //fazer a solicitação para obter perfil do player
      const { data } = await axios.get(`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${apiKey}`)
      console.log(data)

    // Extrair as informações desejadas
      const { summonerName, summonerLevel} = data[0]
      const solo = data.find(entry => entry.queueType === 'RANKED_SOLO_5x5')
      const flex = data.find(entry => entry.queueType === 'RANKED_FLEX_SR')
      const soloDuoWins = solo ? solo.wins : 0
      const soloDuoLosses = solo ? solo.losses : 0
      const flexWins = flex ? flex.wins : 0
      const flexLosses = flex ? flex.losses : 0
      const winrateSolo = (soloDuoWins / (soloDuoWins + soloDuoLosses)) * 100
      const winrateFlex = (flexWins / (flexWins + flexLosses)) * 100
     

    // Retorna as informações em formato JSON

    
      res.json({
        nick: summonerName,
        level: summonerLevel,
        tier: solo ? solo.tier + ' ' + solo.rank : null,  
        soloLP: solo ? solo.leaguePoints : null,  
        tierFlex: flex ? flex.tier + ' ' + flex.rank : null,
        flexLP: flex ? flex.leaguePoints : null,  
        winrate: isNaN(winrateSolo) ? null : `${winrateSolo.toFixed(2)}%`,
        winrateFlex: isNaN(winrateFlex) ? null : `${winrateFlex.toFixed(2)}%`,
        soloDuoWins,
        soloDuoLosses,
        flexWins,
        flexLosses
      })
      


  }catch(error){
      res.status(error.response.status).json({ error: error.response.data })

  }
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:3000')
})