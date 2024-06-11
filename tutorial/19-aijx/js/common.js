const modleList = document.querySelector('.model_list')
const modleData = './db/modle.json'
const userData = './db/user.json'


async function gteModles() {
    const res = await fetch(modleData)
    const data = await res.json()
    const items = data.modle

    items.foreach(item => {
        const li = document.createElement('li')
        li.innerHTML = `<li>
                            <div class="photo">
                                <img src="../images/photo_01.png" alt="">
                            </div>
                            <div class="title">여자 1</div>
                        </li>`
         modleList.append(li)
    })

}

gteModles()


async function getUsers (){
    const res = await fetch(userData)
    const items = await res.json()

    items.foreach(item => {
        const tr = document.createElement('tr')
        tr.innerHTML = `<td>${item.id}</td>
						<td>${item.frist_name} ${item.last_name}</td>
						<td>${item.email}</td>
						<td>${item.gender}</td>
						<td>${item.ip_address}</td>`
         modleList.append(li)
    })
}

getUsers()