const axios = require('axios');

(async () => {
    const request = {
        method: 'get',
        url: 'https://itlean.atlassian.net/rest/api/3/issue/HYU2154-1478/comment',
        headers: { 
          'Accept': 'application/json', 
          'Authorization': 'Basic d2VsbGluZ3Rvbi5saXNib2FAaXRsZWFuLmNvbS5icjpRUDhiN016WjA5RXE4ZWJDVEN1dEU2Njc='
        }
      }
    const teste = await axios(request)
    console.log(teste.data)
})()