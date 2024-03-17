 
import { Router } from 'express'; 
const app = Router();
import config from '../config/config.js';
import { CognitoIdentityProviderClient, ListUsersCommand } from "@aws-sdk/client-cognito-identity-provider"; 
const client = new CognitoIdentityProviderClient({ 
    "accessKeyId": config.AWS.accessKeyId, // Your access key ID
    "secretKeyId": config.AWS.secretAccessKey, // Your secret access key
    "region": "ap-south-1" });


app.get('/signup', (req, res) => { 
    res.render('signup'); 
});

app.get('/', (req, res) => { 
    res.render('login'); 
});

app.post('/signup', async (req, res) => { 
    try {
        // a client can be shared by different commands
        const input = { // ListUsersRequest
            UserPoolId: "ap-south-1_xcxMV5mzj", // required
        };
        const command = new ListUsersCommand(input);
        const response = await client.send(command);
        console.log('users', JSON.stringify(response, null, 4))
    }
    catch(error){
        console.error('Error from signup route ', error);
    }
});
  
export default app;