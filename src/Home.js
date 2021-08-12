import React from 'react';

function Home(){
    return(
        <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
        </head>
        <body>
        <div style={{height:500, background:"blue", display:'flex', alignItems:"center", justifyContent:'center'}}>
            <h1 style={{background:"blue",color:'white'}}>Bienvenid@ al sitio.</h1>
        </div>
        <div style={{height:500, width:'50%', justifyContent:'center',margin:'auto'}}>
            <h1 style={{padding:'50px'}}>What is Lorem Ipsum?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dumm text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                   typesetting, remaining essentially unchanged.</p>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
        </body>
        </html>
    );
}

export default Home;