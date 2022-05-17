const token = '5K0s5nsmRs8kAQEVdH1mCAFufVNe5XD3';
const number ='14158586273';
const noApiKey = {
    "message": "No API key found in request"
    };

const noNumber = {
    "success": false,
    "error": {
    "code": 210,
    "type": "no_phone_number_provided",
     "info": "Please specify a phone number. [Example: 14158586273]"
     }
    };

const notANumber = {
    "success": false,
    "error": {
    "code": 211,
    "type": "non_numeric_phone_number_provided",
    "info": "Please specify a numeric phone number. [Example: 14158586273]"
    }
    };

const notValidNumber =  {
        "valid": false,
        "number": "5",
        "local_format": "",
        "international_format": "",
        "country_prefix": "",
        "country_code": "",
        "country_name": "",
        "location": "",
        "carrier": "",
        "line_type": null
        };

export {token, number, noApiKey, noNumber, notANumber, notValidNumber};