import {token, number, noApiKey, noNumber, notANumber, notValidNumber} from '../framework/config/const.js';
import api from '../framework/services/index.js';

describe('Проверяем валидность номера', () => {
  test('Проверить номер /GET 200', async () => {
    const response = await api().Number().get(token, number);
    expect(response.status).toEqual(200);
    });
  /* test.each`
    number                       | expected
    ${''}                        | ${noNumber}
    ${'qqq'}                     | ${notANumber}
    ${'5'}                       | ${notValidNumber}
  `('$number = $expected', async ({number, expected}) => {
    const response = await api().Number().get(token, number);
    let JSON = await response.json();
    expect(JSON).toEqual(expected);
    expect(response.status).toEqual(200);
  });
  test('Проверить номер без apikey /GET 200', async () => {
    const response = await api().Number().get('', number);
    expect(response.status).toEqual(401);
    let JSON = await response.json();
    expect(JSON).toEqual(noApiKey);
    }); */
}); 
