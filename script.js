const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('number');
const button = document.getElementById('submit');


const sendData = async () => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts' , {
        method:'POST',
        body:JSON.stringify({

            'Name':`${name.value}`,
            'Email':`${email.value}`,
            'Phone':`${phone.value}`
        }),
        headers:{
            'content-type':'application/json'
        }
        });

        const data = await response.json();
        console.log(data);
        
    } 
    catch (error) {

        console.log(error);
        
    }
    
}

const validateData=()=>{
    if(name.value!='' && email.value!='' && phone.value!='')
    {
        sendData();
        showData();
        alert('Submission Successfull')
    }
    else
    {
        alert('Please Enter Details First')
    }
}
button.addEventListener('click',validateData);

const showData=()=>{

    const container = document.querySelector('.cards_Container');
    container.insertAdjacentHTML('beforeend',`<div class="card">
            <ul>
               
                <li>${name.value}</li>
                <li>${email.value}</li>
                <li>${phone.value}</li>
            </ul>

        </div>`);

}

// toggle id field 


const update = document.querySelectorAll('#update');
const idField=document.getElementById('id_field');
update.forEach((number,index) => {

    update[index].addEventListener('click',showIdField);

});

function showIdField() {

    if (idField.style.display==='none')
    {
        idField.style.display='flex';
    }
    else
    {
        idField.style.display='none';
    }
    
}

// update request 

const new_data=document.getElementById('update_id_btn');
const id_data=document.getElementById('input_field');


const patch=async()=>{

    if(id_data.value !== '' && name.value !=='' && email.value !=='' && phone.value !=='')
    {

      const update= await fetch(`https://jsonplaceholder.typicode.com/posts/${id_data.value}`, {
          method:'PATCH',
          body:JSON.stringify({
              'id':id_data.value,
              'Name':name.value,
              'Email':email.value,
              'Number':phone.value
          }),
          headers:{
               'content-type':'application/json' 
          }
      });
      const data = await update.json();

      alert(`Data updated Sucessfully at ID.No : ${id_data.value}`);
      console.log(data);

    }
    else{
        alert('Complete all required fields')
    }

}

new_data.addEventListener('click',patch);


// delete request

const del_btn=document.getElementById('#del');


 const del_data = async() => {
   try {
     const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${id_data.value}`, {
         method:'DELETE'
     });

     if (response.ok)
     {
        console.log(`item deleted at ID.no ${id_data.value}`);
        alert(`item deleted at ID.no ${id_data.value}`);
     }
     const data= await response.json();
  
     console.log(data);
   } catch (error) {
    console.log(error)
   }
} 

del.addEventListener('click',del_data);

// js ends 