 
import { Router } from 'express'; 
const app = Router();
import controllers from '../controllers/index.js' 
  
app.use('/', controllers); 
  
export default app;