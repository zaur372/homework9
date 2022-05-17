import number_verification from './service.js';

const api = () => ({
    Number: () => ({ ...number_verification }),
});

export default api;