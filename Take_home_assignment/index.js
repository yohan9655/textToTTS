const express = require('express')
const app = express()
const port = process.env.PORT || 3030;
app.use(express.static(__dirname))
// Redirects to the audio url
app.get('/', (req, res) => {
    res.redirect('/audio');
});

app.get('/audio', (req, res) => {
    res.sendFile(__dirname +'/static/pollytest.html')
});
// All url is redirected to /audio
app.get('*', (req, res) => {
    res.redirect('/audio');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
