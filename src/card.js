function card (data) {
    let li = ""; 
    switch(data.getRole()) {
       case "Manager":
           li = `<li class="list-group-item">Office Number: ${data.officeNumber}</li>`
        break;
        case "Engineer":
            li = `<li class="list-group-item">Github: <a href="https://github.com/${data.ghName}">${data.ghName}</a></li>`
        break;
        default:
            li = `<li class="list-group-item">School: ${data.school}</li>`
    }
    return `
    <div class="card" id="cardSection">
        <div class="jumbotron" id="cardName">
            <h1>${data.name}</h1>
            <h2>${data.getRole()}</h2>
        </div>
        <div class="card-body" id="infoSection">
            <ul class="list-group">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                ${li}  
            </ul>
        </div>
    </div>
    `
}

module.exports = card;
//This is the actual template that will be used to generate the teamHtmlGenerated.html file.