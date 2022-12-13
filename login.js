const superagent= require('superagent').agent()

const ytm=async()=>{
    let dashboard=await superagent
    .post('https://api.buddy4study.com/api/v1.0/uaa/oauth/token')
    .send({username:'yogesh.sahani@kotakeducationfoundation.org',password:'india@123'})
    .set('Content-Type','application/json')
    console.log(dashboard)
}

ytm();