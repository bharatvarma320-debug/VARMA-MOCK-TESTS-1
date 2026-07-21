<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>SSC GD Mock Test | VARMA TESTS</title>

<link rel="stylesheet" href="../css/style.css">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#f4f6fb;
padding:30px;
}

.login-box{
max-width:800px;
margin:auto;
background:#fff;
padding:30px;
border-radius:15px;
box-shadow:0 5px 20px rgba(0,0,0,.15);
position:relative;
overflow:hidden;
}

/* Watermark */


.login-box::before{
content:"";
position:absolute;
top:50%;
left:50%;
width:250px;
height:250px;
background:url("../images/varma-mock-tests.png") no-repeat center;
background-size:contain;
opacity:.05;
transform:translate(-50%,-50%);
pointer-events:none;
z-index:0;
}

.login-box>*{
position:relative;
z-index:1;
}

.header-bar{
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:2px solid #eee;
padding-bottom:15px;
margin-bottom:20px;
}

.header-bar h2{
color:#0d6efd;
}

.timer{
color:red;
font-size:20px;
font-weight:bold;
}

#section{
margin-bottom:15px;
color:#0d6efd;
font-size:20px;
}

#passage{
display:none;
border:1px solid #ddd;
background:#f8f9fa;
padding:15px;
border-radius:10px;
margin-bottom:20px;
max-height:220px;
overflow-y:auto;
white-space:pre-wrap;
line-height:1.6;
}

#question{
font-size:22px;
margin-bottom:20px;
color:#222;
}

#options{
display:flex;
flex-direction:column;
gap:12px;
}

#options label{
display:block;
padding:15px;
border:2px solid #ddd;
border-radius:8px;
cursor:pointer;
transition:.3s;
}

#options label:hover{
background:#eef5ff;
border-color:#0d6efd;
}

#options input{
margin-right:10px;
}

.btn-group{
display:flex;
justify-content:flex-end;
gap:15px;
margin-top:25px;
}

button{
padding:12px 25px;
border:none;
border-radius:8px;
cursor:pointer;
font-size:16px;
font-weight:600;
transition:.3s;
}

.btn-skip{
background:#6c757d;
color:white;
}

.btn-next{
background:#0d6efd;
color:white;
}

.btn-skip:hover{
background:#545b62;
}

.btn-next:hover{
background:#0b5ed7;
}

@media(max-width:768px){

body{
padding:10px;
}

.header-bar{
flex-direction:column;
gap:10px;
}

.btn-group{
flex-direction:column;
}

button{
width:100%;
}

#question{
font-size:18px;
}

}

</style>

</head>

<body>

<div class="login-box">

<div class="header-bar">
<h2>SSC GD Mock Test</h2>
<h3 id="timer" class="timer">Time Left: 80:00</h3>
</div>

<h3 id="section"></h3>

<div id="passage"></div>

<h3 id="question"></h3>

<div id="options"></div>

<div class="btn-group">
<button class="btn-skip" onclick="skipQuestion()">Skip</button>
<button class="btn-next" onclick="nextQuestion()">Next</button>
</div>

</div>

<script src="../js/ssc-gd.js"></script>

</body>
</html>