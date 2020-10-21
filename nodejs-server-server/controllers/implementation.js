const request = require('request')
function generateToken(username,password,callback){
    request.post(
        'https://anypoint.mulesoft.com/accounts/login',
        {
          json: {
          "username" : username,
          "password" : password
      },
        },
        (error, res, body) => {
          if (error) {
            console.error(error)
            return
          }
          console.log(`statusCode: ${res.statusCode}`)
          console.log(body)
          callback(body)
        }
      )
}




function postVpc(username,password,generated,orgid){


    generateToken(username,password,(body)=>{
        request.post({
          "headers": { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` },
          "url": `https://anypoint.mulesoft.com/cloudhub/api/organizations/${orgid}/vpcs`,
          "body": JSON.stringify(generated)
      },
          (error, res, body) => {
            if (error) {
              console.error(error)
              return
            }
            console.log(`statusCode: ${res.statusCode}`)
            console.log(body)
          }
        )
      })

      
    /*const temp = generated
    //console.log("haihaihai")
    //console.log(temp)
    const token = generateToken(username,password)
    console.log("demooooo")
    console.log(token)
    */

}

function getVpc(username,password,orgid){


    generateToken(username,password,(body)=>{
        request.get({
            "headers" : {"content-type": "application/json","Authorization": `Bearer ${body.access_token}`},
            "url" : `https://anypoint.mulesoft.com/cloudhub/api/organizations/${orgid}/vpcs`

        },
        (error, res, body) => {
            if (error) {
              console.error(error)
              return
            }
            console.log(`statusCode: ${res.statusCode}`)
            console.log(body)
          }

        )
    })
}


function deleteVpc(username,password,orgid,vpcId){

    generateToken(username,password,(body)=>{
        request.delete({
            "headers" : {"content-type": "application/json","Authorization": `Bearer ${body.access_token}`},
            "url" : `https://anypoint.mulesoft.com/cloudhub/api/organizations/${orgid}/vpcs/${vpcId}`

        },
        (error, res, body) => {
            if (error) {
              console.error(error)
              return
            }
            console.log(`statusCode: ${res.statusCode}`)
            console.log(body)
          }

        )
    })
    
}

module.exports={postVpc,getVpc,deleteVpc}