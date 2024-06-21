let _box = document.getElementById('box')
let _liDesk = document.querySelectorAll('#_desk li')
let _liMob = document.querySelectorAll('#_mob li')
let _page = 1
let _page2 = 1
let _data =  document.getElementById('_data')
let x = window.matchMedia("(min-width: 768px)")

//load fetch
if(x.matches){
    _getDate1()
}else{
    _getDate2()
}
//resize fetch


_liDesk.forEach((element, index) => {
    element.addEventListener('click', () => {
        _page = element.innerText
        //styling li
        _liDesk.forEach((val, i) => {            
            if (i == index) {
                val.style.color = 'rgb(186,86,86)'
                val.style.textDecoration = 'underline'
            } else {
                val.style.color = 'rgb(112,112,144)'
                val.style.textDecoration = 'none'
            }
        })
        //pagination fetch       
        _getDate1()
       
    })
})

//pagination fetch desk
function _getDate1(){
    _data.innerHTML = ''
    const url = new URL('https://65325ff8d80bd20280f56efd.mockapi.io/api/niloofar/users');
    url.searchParams.append('page', _page);
    url.searchParams.append('limit', 4);
    fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(tasks => {
        console.log(tasks);
        // mockapi returns first 10 tasks that are not completed        
        for (let index = 0; index < tasks.length; index++) {  
            let x = tasks[index]          
                       
            let _article = document.createElement('article')
            _data.appendChild(_article)
            _article.innerHTML = `
            <div>
                <img src=${x.image} alt='#'/>                 
            </div>          
             <div>  
                <b><p>Job:${x.job}</p></b>  
                <b><p>City: ${x.city}</p> </b> <hr></hr>            
                <p>Fullname: ${x.fullName}</p>               
                <p>Email: ${x.email}</p>                
                <p>Click to more</p>
             </div>            
            `            
        }
     
    }).catch(error => {
        // handle error
    })
}

_liMob.forEach((element, index) => {
    element.addEventListener('click', () => {
        _page2 = element.innerText
        //styling li
        _liMob.forEach((val, i) => {            
            if (i == index) {
                val.style.color = 'rgb(186,86,86)'
                val.style.textDecoration = 'underline'
            } else {
                val.style.color = 'rgb(112,112,144)'
                val.style.textDecoration = 'none'
            }
        })
        //pagination fetch       
        _getDate2()       
    })
})

//pagination fetch mobile
function _getDate2() {
    _data.innerHTML = ''
    const url = new URL('https://65325ff8d80bd20280f56efd.mockapi.io/api/niloofar/users');
    url.searchParams.append('page', _page2);
    url.searchParams.append('limit', 2);
    fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(tasks => {
        // mockapi returns first 10 tasks that are not completed
        console.log(tasks);
        for (let index = 0; index < tasks.length; index++) { 
            let x = tasks[index]  
                                   
            let _article = document.createElement('article')
            _data.appendChild(_article)
            _article.innerHTML = `
            <div>
                <img src=${x.image} alt='#'/>                 
            </div>          
             <div>  
                <b><p>Job:${x.job}</p></b>  
                <b><p>City: ${x.city}</p> </b> <hr></hr>            
                <p>Fullname: ${x.fullName}</p>               
                <p>Email: ${x.email}</p>                
                <p>Click to more</p>
             </div>            
            `            
        }
    }).catch(error => {
        // handle error
    })
}

