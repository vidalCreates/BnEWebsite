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
    	$categoriesresult = mysqli_query($db,"SELECT * FROM categories ORDER BY id ASC");

        $id = 'id';
        $category = 'category';

        echo '<response>';
            $currentCategory = $_GET['cat'];

            echo '<div id="searchBarContainer"> ';
                echo '<form> ';
                    echo '<input type="text" id="searchBar"> ';
                echo '</form> ';
                echo '<span class="glyphicon glyphicon-search"></span> ';
            echo '</div> ';

            echo '<div id="categories"> ';
                echo '<ul> ';
                while($rows = mysqli_fetch_assoc($categoriesresult))
                {
                    echo '<li class="category vertAlign"> ';
                        echo '<button onclick="changeCategory(this.innerHTML);">'.$rows[$category].'</button> ';
                    echo '</li> ';
                }
                echo '</ul> ';
            echo '</div> ';

        echo '</response>';
    }
?>