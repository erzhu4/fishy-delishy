<!doctype html>
<html>
<title>Register</title>
<head>
    <link rel = "stylesheet"
          type = "text/css"
          href = "/css/main.css" />
    <script src="/js/main.js"></script>
</head>
<body>
    <h1>Register</h1>
    <form action="/user/create" method="post">
        {{ csrf_field() }}
        <label>Email<input name="email" type="text"></label>
        <label>Password<input name="password" type="password"></label>
        <label>Password Confirm<input name="password_confirm" type="password"></label>
        <button>Submit</button>
    </form>
</body>
</html>