const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030;
app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.redirect('/audio');
});

app.get('/audio', (req, res) => {
    res.sendFile(__dirname +'/static/pollytest.html')
});
app.get('*', (req, res) => {
    res.redirect('/audio');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
