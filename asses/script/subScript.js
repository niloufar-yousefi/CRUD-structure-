
function myCreat() {
    console.log(2);
     const newTask = {
         job:document.getElementById('job').value,
         city:document.getElementById('city').value,
         fullName:document.getElementById('fullName').value,
         email:document.getElementById('email').value,
          image:document.getElementById('image').value
     }

     fetch('https://65325ff8d80bd20280f56efd.mockapi.io/api/niloofar/users', {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
         // Send your data in the request body as JSON
         body: JSON.stringify(newTask)
     }).then(res => {
         if (res.ok) {
             return res.json();
         }
         // handle error
     }).then(task => {
         // do something with the new task
         console.log(task);
     }).catch(error => {
         // handle error
     })
   
}