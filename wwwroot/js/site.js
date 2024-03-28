


//logJson();
let title = document.getElementById("title");
let ip = document.getElementById("ip");
let content = document.getElementById("content");


document.getElementById("btnSend").addEventListener("click", (e) => {


    let url = `/Home/GetIP?ip=${ip.value}`;
    //console.log(url);
    if (ip.value != "") {
        try {
            const response = fetch(url);
            response.then(data => {
                console.log(data)
                return data.json();
            }).then(body => {
                const json = JSON.parse(body)

                if (json.status == "fail") {
                    content.innerHTML = `<div class="p-3 text-danger-emphasis bg-danger-subtle border border-primary-subtle rounded-3">
    Error en la solicitud. Ingrese un valor valido.
  </div>`
                    return
                }


                console.log(body)
              
                let listItems = ''

                Object.entries(json).forEach((entry) => {
                    const [key, value] = entry;
                    listItems += `<li class="list-group-item">${key}: ${value}</li> `;

                });

                //console.log(listItems)
                content.innerHTML = listItems;





                updateDom(title, json.country)





                //console.log(body)


            });
        } catch (err) {
            alert(err); // Failed to fetch
        }
    } else {
        content.innerHTML = `<div class="p-3 text-danger-emphasis bg-danger-subtle border border-primary-subtle rounded-3">
    Ingrese una IP
  </div>`
    }



});


let updateDom = (node, message) => {
    node.innerHTML = message;
}