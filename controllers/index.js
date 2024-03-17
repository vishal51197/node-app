 
import { Router } from 'express'; 
const app = Router(); 

app.get('/signup', (req, res) => { 
    res.render('signup'); 
});

app.get('/', (req, res) => { 
    res.render('login'); 
});

app.post('/', (req, res) => { 
    console.log('req received', req.body);
});
  
export default app;