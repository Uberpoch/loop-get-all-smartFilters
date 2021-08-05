const axios = require('axios');

exports.getSmarts = async() => {
  axios.get(url, {
      headers: { 
          'Authorization': `Bearer ${token}`,
          'User_Agent': `Nathan UF`
        }
  })
  .catch(error => {
      console.log(error);
  })
  .then(res => {
    return res.data;
  }) 
};