const express = require('express');

const app = express();

app.set('port', process.env.PORT || 8000);

const router1 = new express.Router();
const router2 = express.Router();
const router3 = express.Router()

// app.use(router1);
// app.use(router2)

router1.get('/', (req, res) => { res.send('API is live')});
router1.get('/user', (req, res) => { res.send('/user calling')});
router1.get('/group', (req, res) => res.send('./group calling'));
router1.get('/post', (req, res) => res.send('./post calling'));
router2.get('/:username', (req, res) => res.send(JSON.stringify(req.params)));

router3.get('/', (req, res) => res.send('Update API is live from router 3'));

app.use('/apiV1', router1);
app.use('/users', router2);
app.use('/apiV2', router3);

app.listen(app.get('port'), function(){
    console.log(`Express Started on: http://localhost:${app.get('port')}`)
})