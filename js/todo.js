debugger;
let txt = document.getElementById('task')
let btnAdd= document.getElementById('btnAdd');

let myUl=document.getElementsByTagName('UL');

let idNo=1;



btnAdd.addEventListener('click', addData);

function addData(){
    for(i=0; i < myUl.length; i++){

        if(txt.value==""){
            alert('Add task here');
            txt.focus()
        }
        else
        {
            let newli=document.createElement('li');
            newli.setAttribute('class', 'list-group-item d-flex align-items-center border-0 mb-2 rounded');
            newli.style.backgroundColor= '#dae2e7';
            
            newli.setAttribute('id', idNo);
            
        
            let newspan=document.createElement('span');
            newspan.setAttribute('class','w-100');
            newspan.setAttribute('id', idNo);

            newspan.innerText=txt.value;

            newli.appendChild(newspan);
            


            let btncheck=document.createElement('button');
            btncheck.setAttribute('class', 'border-0 btn-transition btn btn-outline-success');
            btncheck.setAttribute('id', idNo);

            let checkicon=document.createElement('i');
            checkicon.setAttribute('class','bi bi-check');
            btncheck.appendChild(checkicon);    
            newli.appendChild(btncheck);

            btncheck.addEventListener('click', function(){
                if(newli.id==btncheck.id){
                    
                    newspan.style.textDecoration='line-through';

                }
            })

            let btndelete=document.createElement('button');
            btndelete.setAttribute('class', 'border-0 btn-transition btn btn-outline-danger');
            btndelete.setAttribute('id', idNo);

            let deleteicon=document.createElement('i');
            deleteicon.setAttribute('class','bi bi-trash');
            btndelete.appendChild(deleteicon);    
            newli.appendChild(btndelete);

            btndelete.addEventListener('click', function(){
                if(newli.id==btndelete.id){
                    
                    newli.parentNode.removeChild(newli);

                }
            })


            idNo++;

        
            myUl[i].appendChild(newli);

            txt.value='';

            txt.focus();
        }
    
    }
    
}
