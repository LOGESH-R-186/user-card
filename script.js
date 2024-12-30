let main=document.querySelector('body')
async function card() {

    let response= await fetch('https://api.github.com/users')    
    let finalresponse= await response.json()
    console.log(finalresponse)
    finalresponse.map(value =>
    {
        let section =document.createElement("section") 
       let img =document.createElement('img')
       let userId=document.createElement('h3')
       let username=document.createElement('h3')
       let more=document.createElement('button')
    img.src=value.avatar_url
    userId.innerHTML="Id :"+value.id
    username.innerHTML="Name : "+value.login
     more.innerHTML="more details"
    section.append(img,userId,username,more)
    main.append(section)

      
    }
    )
    
}
card()