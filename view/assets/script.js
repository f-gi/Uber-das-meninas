let status = document.querySelector(".status");

status.addEventListener('click',function(){
    if (status.classList.contains('on')){
        status.classList.remove('on');
        status.classList.add('of');
        console.log('on');
    }
    if(status.classList.contains('of')){
        status.classList.remove('of');
        status.classList.add('on');
        console.log('of');
    }


    // on.classList.add("of");
    // on.classList.remove("on");
})
