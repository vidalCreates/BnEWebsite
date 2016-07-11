var xmlHttp = createXmlHttpRequestObject();
var currentCategory = "All";


function createXmlHttpRequestObject(){
	var xmlHttp;

	if(window.ActiveXObject)
	{
		try{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			xmlHttp = false;
		}
	}
	else{
		try{
			xmlHttp = new XMLHttpRequest();
		}catch(e){
			xmlHttp = false;
		}
	}

	if(!xmlHttp){
		alert("ERROR!");
	}
	else{
		return xmlHttp;
	}
}

function getCategories(){
	if((xmlHttp.readyState == 0) || (xmlHttp.readyState == 4)){
		category = currentCategory;
		xmlHttp.open("GET","categories.php?cat="+category,true);
		xmlHttp.onreadystatechange = displayCategories;
		xmlHttp.send(null);
	}
}

function displayCategories(){
	if(xmlHttp.readyState == 4){
		if(xmlHttp.status == 200){
			xmlResponse = xmlHttp.responseText;
			document.getElementById("categoriesContainer").innerHTML = xmlResponse;
		}else{
			alert("ERROR!");
		}
	}
}

function changeCategory(ele){
	currentCategory = ele;
	getProducts();
}