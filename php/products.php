<?php
    header('Content-Type: text/xml');
    echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

    $db = mysqli_connect("localhost","root","","bneshipping&trading");
    if (mysqli_connect_errno())
    {
        echo "Failed to db to MySQL: " . mysqli_connect_error();
    }
    else
    {
        $itemsresult = mysqli_query($db,"SELECT * FROM inventory ORDER BY id ASC");

        $id = 'id';
        $itemname = 'name';
        $categories = 'categories';
        $imageurl = 'imageurl';
        $description = 'description';
        $cost = 'cost';

        echo '<response>';
            $currentCategory = $_GET['cat'];

            echo '<div id="productList"> ';
            
            while($rows = mysqli_fetch_assoc($itemsresult))
            {                   
                if(preg_match("/".$currentCategory."/i", $rows[$categories])){
                    echo '<div> ';
                            echo '<div class="item"> ';
                                echo '<div><h3 class="itemTitle">'.$rows[$itemname].'</h3></div> ';
                                echo '<div><img src='.$rows[$imageurl].' class="itemImg"></div> ';
                                echo '<div><h5 class="itemDesc">Desc: '.$rows[$description].'</h5></div> ';
                                echo '<div><h5 class="itemCost">Cost: '.$rows[$cost].'</h5></div> ';
                            echo '</div> ';
                    echo '</div> ';
                }
            }
            echo '</div> ';
        echo '</response>';
    }
?>