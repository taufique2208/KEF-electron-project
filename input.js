//https://github.com/login

// const superagent= require('superagent').agent()

// const ytm=async()=>{
//     let dashboard=await superagent
//     .post('https://api.buddy4study.com/api/v1.0/uaa/oauth/token')
//     .send({username:'yogesh.sahani@kotakeducationfoundation.org',password:'india@123'})
//     .set('Content-Type','application/json')
//     console.log(dashboard)
// }

// ytm();
// let axios=require('axios')
let request = require('request-promise')
let cookiejar = request.jar()
request=request.defaults({jar:cookiejar})
async function main(){
    const result= await request.get("https://sms2.buddy4study.com/")
    const cookiestring=cookiejar.getCookieString("https://sms2.buddy4study.com/")
    console.log(cookiestring)
    // const splittedByCsrfCookieName=cookiestring.split("csrf_cookie_name=")
    // const csrf_test_name=splittedByCsrfCookieName[1].split(";")[0]
    // console.log(cookiejar)
    // const loginresult = await request.post('https://api.buddy4study.com/api/v1.0/uaa/oauth/token',{
    //     form:
    //     {
    //         // csrf_test_name,
    //         cookiejar,
    //         username:"yogesh.sahani@kotakeducationfoundation.org",
    //         password:"india@123",
    //     }
    // })
    // console.log(loginresult)
}

main();

// let axios=require('axios')
// let express =require('express')
// let {config}=require('dotenv').config()


// const{CLIENT_ID,APP_SECRET}=process.env
// const base="https://api.buddy4study.com"

// const app=express();

// app.get('/test',async(req,res)=>{
//     const data=await generateAccessToken()
//     console.log(data)
//     res.json(data)
// })

// async function generateAccessToken(){
//     const response=await axios({
//         url:"https://api.buddy4study.com/api/v1.0/uaa/oauth/token",
//         method:"post",
//         data: "grant_type=password",
//         auth:{
//             username:CLIENT_ID,
//             password:APP_SECRET
//         }
//     })
//     console.log(response.data)
//     return response.data
// }