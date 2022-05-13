import fetch from 'node-fetch';
import urls from '../config/urls.js';

const number_verification = {
  get: async (token, number) => {
    const r = await fetch(`${urls.reqres}number_verification/validate?number=${number}`, { method: 'GET',
       headers: { 
      'apikey': token
    }
  });
      return r;
    },
};

export default number_verification;