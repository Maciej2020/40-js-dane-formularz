let btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
   let fname = document.getElementById('fname');
   let lname = document.getElementById('lname');
   let phone = document.getElementById('tel');

   document.getElementById('name').textContent = fname.value;
   document.getElementById('surname').textContent = lname.value;
   document.getElementById('phone').textContent = phone.value;
})