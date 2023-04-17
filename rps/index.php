<head>
  <title>RPS</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div>
  <h1>Kamien | Papier | Nozyce</h1>
  <p>Zagraj przeciwko komputerowi</p> 
</div>
<div>
    <div>
        <div>
            <form method="post">
                <label for="">Wybierz</label>
                <select name="game" id="" class="form-control" title="Please Choose Your Weapen" required>
                    <option value="0">Wybierz</option>
                    <option value="K">Kamien</option>
                    <option value="P">Papier</option>
                    <option value="N">Nozyce</option>
                </select><br/>
                <input type="submit" name="sb" value="Start">
            </form>
        </div>
    </div>
</div>
<?php
if(isset($_POST['sb']) && $_POST['game']!='0')
{

function sortgame($comp,$you)
{
    //Draw Game
    if($comp==$you)
    {
        return 0;
    }

    //Cases
    if($you=='K' && $comp=='P')
    {
        return 1;
    }
    elseif($you=='P' && $comp=='K')
    {
        return -1;
    }

    if($you=='K' && $comp=='N')
    {
        return 1;
    }
    elseif($you=='N' && $comp=='K')
    {
        return -1;
    }

    if($you=='P' && $comp=='N')
    {
        return -1;
    }
    elseif($you=='N' && $comp=='P')
    {
        return 1;
    }
    
}

$str = 'PKN';
$shuffled = str_shuffle($str);

$result = sortgame(substr($shuffled,'0','1'),$_POST['game']);

$winner = '';

if($result==0)
{
    $winner = "Ty wybrales ".$_POST['game'].", a komputer wybral ".substr($shuffled,'0','1')."."." Remis!";
?>
<?php
}
elseif($result==1)
{
    $winner = "Ty wybrales ".$_POST['game'].", a komputer wybral ".substr($shuffled,'0','1')."."." Wygrales!";
?>
<?php
}
else
{
    $winner = "Ty wybrales ".$_POST['game'].", a komputer wybral ".substr($shuffled,'0','1')."."." Komputer wygral!";
?>
<?php
}

echo ".$winner.";
}
else
{
    echo "Wybierz kamien/papier/nozyce";
}
?>
