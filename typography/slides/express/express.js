const app = require('express')();

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)
);
app.get('/getRequest', (req, res) => {
    res.send('Hello this is a GET Method ')

});
app.post('/postRequest', (req, res) => {
    res.send('Hello this is a POST Method ')
    
});
