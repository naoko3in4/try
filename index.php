<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Password Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <input type="text" id="result">
        <div id="btn">パスワードを 生成する</div>
        
        <form action="passList.php" method="post">
            <span>パスワードの使用先</span>
            <input type="hidden" id="tmp" name="tmp">
            <input type="text" id="useFor" name="useFor"> 
            <input type="checkbox" id="button">保存する
            <input type="submit" id="passSubmit">
        </form>
        <fieldset>
            <!-- <legend>オプション</legend> -->
            <p>文字数:(<span id="label">8</span>)<input type="range" id="slider" value="8" min="4" max="20"></p> 
            <p>
                <input type="checkbox" id="numbers">数字を含む
                <input type="checkbox" id="symbols">記号を含む
            </p>
        </fieldset> 
        <!-- <button id="button">get</button> -->
    </div>
    <script src="main.js" ></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    
</body>
</html>
