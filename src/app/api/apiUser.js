  const apiUser= {
  fetch:()=> new Promise(resolve=>setTimeout(()=>resolve({
    
      "id": "5a03638052fd231590d04eb5",
      "name": "John Kite",
      "points": 2000,
      "redeemHistory": [],
      "createDate": "new Date(1510171520852)"
    
  }),1000)) 
}  

/* const apiUser={
  fetch:()=>fetch('https://coding-challenge-api.aerolab.co/user/me', {method:'GET', headers:{
'Content-Type':'application/json',
'Accept':'application/json',
'Authorization':"Bearer Your token"
  }}).then(response=>response.json())
} *///Use in case to connect to server
  
export default apiUser;