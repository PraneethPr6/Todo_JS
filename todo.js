var array = new Set();
var pr;
var title_flag = false;
var subtask = new Map;
function plus(){
    document.getElementById("addnewlist").style.display = "block";
};
function addCard(){
    var card_title = document.getElementById("addbutton-add").value;
    createObj(card_title);
    closeCard();
}
function closeCard(){
    document.getElementById("addnewlist").style.display = "none";
}

function addList(){
    var todo_item = document.querySelector(".listinner").cloneNode(true);
    var card_item = document.getElementById("addnewinners").value;
    console.log(pr);
    todo_item.innerText =  card_item; 
    todo_item.style.display = "block";
    todo_item.setAttribute('id',`${Date.now()}`);
    todo_item.setAttribute('value',`${Date.now()}`);
    todo_item.setAttribute('style',"margin-left: 10px;");
    var done_item = document.createElement('button');
    done_item.setAttribute('id',`check-done-${Date.now()}`);
    done_item.setAttribute('class','mark-as-done-class');
    done_item.setAttribute('value',`${Date.now()}`);
    done_item.setAttribute('onclick','completedTask(this.value)');
    done_item.innerText = ' Mark Done';
    done_item.setAttribute('style','font-size:15 px;cursor:pointer; height:20px; border-radius:10px;')
    todo_item.appendChild(done_item);
    todo_item.setAttribute('onClick',"completedTask(this.value)");
     for(obj of array){
        for(prop in obj){
            if(obj.id == pr){
                obj.subtask.set(`${card_item}`,`${Date.now()}`);
                break;
            }
        }
    }
    document.getElementById(`${pr}`).getElementsByClassName('add-list-after-this')[0].appendChild(todo_item).appendChild(done_item);
    closeList();
}
function createObj(title){
    document.getElementById("headertwo").style.display = "none";
    var card_obj = {
        title: title,
        id: Date.now(),
        subtask
    };
    array.add(card_obj);
    createCard(card_obj.id);
};
function closeList(){
    document.getElementById('addnewcard').style.display = "none";
}
function addSubtask(val) {
    document.getElementById("addnewcard").style.display = "block";
    pr = val;
};
function deleteCard(val){
    var delete_div = document.getElementById(`${val}`);
    for(obj of array){
        for(prop in obj){
        if (obj.id==val)
        array.delete(obj);
        break;
        }
    }
    delete_div.parentNode.removeChild(delete_div);
    if(array.size==0){
        document.getElementById('headertwo').style.display = 'block';
    }
    
};

function createCard(){
    var first_card = document.querySelector('.card').cloneNode(true);
    display(first_card);
};
function completedTask(value){
    document.getElementById(`${value}`).style.textDecoration = 'line-through';
    document.getElementById(`${value}`).style.color = '#112D4E';
    document.getElementById(`check-done-${value}`).remove();
}
function display(card){
    document.getElementById('headertwo').style.display = 'none'
    array.forEach(element => {
        card.id = element.id;
        card.querySelector(".card-head").innerText = document.getElementById("listName").value;
        // card.querySelector(".card-head").innerHTML = element.title;
        card.querySelector(".card-head").setAttribute('value',`${element.id}`);
        card.setAttribute("value",`${element.id}`);
        card.setAttribute("display","block");
        card.setAttribute("min-height","300px");
        card.querySelector(".delete-button-in-card").setAttribute("value",`${element.id}`);
        card.querySelector(".delete-button-in-card").setAttribute("onClick","deleteCard(this.value)");
        card.querySelector(".add-button-in-card").setAttribute("value",`${element.id}`);
        card.querySelector(".add-button-in-card").setAttribute("onClick","addSubtask(this.value)");    
    });
    if(title_flag)
    card.style.display = 'none';
    else
    card.style.display = "block";
    document.getElementById("boxcontainer").appendChild(card);
}
function headerFunc(val){
    var card_header;
    for(let list of array){
        for(let id in list){
            if(list[id]==val){
                card_header = list.title;
                break;
            };
        };
    };
    document.querySelector("#name-app").style.display = 'none';
    document.querySelector("#add-button-text").style.display = 'none';
    for(let list of array){
            if(list.id==val){
                document.getElementById(`${list.id}`).style.display = 'block';
            }
            else {
                document.getElementById(`${list.id}`).style.display = 'none';
            }
    };
    document.getElementById('box-card').innerText = `${card_header}`;
    document.getElementById('box-card').style.display = 'flex'
    document.getElementById('back-button').style.display = 'block'
    title_flag = true;
};
function dispalyAll(){
    title_flag = false;
    document.querySelector("#name-app").style.display = 'block';
    document.querySelector("#add-button-text").style.display = 'inline-block';
    document.getElementById('back-button').style.display = 'none';
    for(let ele of array){
            document.getElementById(`${ele.id}`).style.display = 'block';
    };
    document.getElementById('box-card').innerText = ``;
    document.getElementById('box-card').style.display = 'none';
}
