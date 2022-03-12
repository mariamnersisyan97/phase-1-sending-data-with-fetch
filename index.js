// function submitData(firstName, email){
    
//     fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json'
//         },
//         body:JSON.stringify({
//             "name": firstName,
//             "email": email
//         })
//     })
//   };

const body = document.querySelector('body');
  function submitData(firstName, email){
      const configObject ={
        method: 'POST',
         headers: {
            'Content-Type': 'application/json',
             Accept: 'application/json'
         },
        body:JSON.stringify({
           "name": firstName,
           "email": email
        })

      };
      return fetch('http://localhost:3000/users', configObject)
      .then(res => res.json())
      .then(body => newInfo(body.id))
      .catch(errorReq)
  }
  function newInfo(newID) {
      document.querySelector('body').innerHTML = newID
  }

  function errorReq(error){
      document.body.innerHTML = error.message
  }