const modleList = document.querySelector('.model_list')
const modleData = './db/modle.json'


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