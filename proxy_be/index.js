const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors()); // Sử dụng middleware CORS

app.get('/crawl', async (req, res) => {
    try {
        const url = req.query.url;
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
        res.status(500).send('Lỗi khi tải dữ liệu');
    }
});




app.listen(PORT, () => {
    console.log(`Proxy server đang lắng nghe tại http://localhost:${PORT}`);
});
