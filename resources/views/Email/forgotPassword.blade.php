<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Forgot Email</title>
</head>

<body>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi voluptate culpa eius aspernatur quos rem
        inventore maxime maiores. Ipsum esse voluptatem culpa eum ducimus, aut a autem delectus quas!</p>

    <div style="margin: 50px 0">
        <a href="{{ env('APP_URL_IP') }}/auth/update-password/{{ $data['token'] }}"
            style="text-decoration: none; 
                       padding: 10px 20px; 
                       border-radius: 12px; 
                       background-color: blue; 
                       color: white; 
                       text-transform: uppercase;">

            Update Password (Local)

        </a>
    </div>

</body>

</html>
