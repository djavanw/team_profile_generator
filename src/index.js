function htmlBody (card) {
    return `<!DOCTYPE html>
<html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="./style.css">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <div class="jumbotron text-center" id="jumbo">
            <h1>My Team Profile</h1>
        </div>
        <div class="container" id="cont1">
            <div class="card-deck" id="cont2">
               ${card}
            </div>
        </div>
    </body>

</html>

    `
}
module.exports = htmlBody;