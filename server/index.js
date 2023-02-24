const express= require('express')
const cors= require('cors')

require('dotenv').config()

const {Configuration, OpenAIApi}= require('openai')

const configuration= new Configuration({
    apiKey: process.env.OPENAI_SECRET_KEY,
})

const openai= new OpenAIApi(configuration)

const app= express()
app.use(express.json())
//cors--to connect this server to react application
app.use(cors({origin: true}))

app.get('/',(req,res)=>{
    return res.send('hello')
})
app.post('/chat',async(req,res)=>{
    const{ prompt}= req.body;
    //generate respo from chatGPT
    try{
        const completion= await openai.createCompletion({
            model: 'text-davinci-003',//txt to command
            prompt: prompt,
        })//response--data choices--
        return res.send(completion.data.choices[0].text);
    }
    catch(error){
        return res.send(`Error: ${error.message}`)
    }
})
const port= 8000
app.listen(port || process.env.PORT, ()=>
    console.log('listening')
)
