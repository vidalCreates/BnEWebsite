var xmlHttp2 = createXmlHttpRequestObject();

window.addEventListener("load",function(){	
	getProducts();
});

function createxmlHttpRequestObject(){
	var xmlHttp2;

	if(window.ActiveXObject)
	{
		try{
			xmlHttp2 = new ActiveXObject("Microsoft.xmlHttp2");
		}catch(e){
			xmlHttp2 = false;
		}
	}
	else{
		try{
			xmlHttp2 = new xmlHttpRequest();
		}catch(e){
			xmlHttp2 = false;
		}
	}

	if(!xmlHttp2){
		alert("ERROR!");
	}
	else{
		return xmlHttp2;
	}
}

function getProducts(){
	if(hosted&&((xmlHttp2.readyState == 0) || (xmlHttp2.readyState == 4))){
		category = currentCategory;
		xmlHttp2.open("GET","php/products.php?cat="+category,true);
		xmlHttp2.onreadystatechange = displayProductList;
		xmlHttp2.send(null);
	}
}

function displayProductList(){
	if(xmlHttp2.readyState == 4){
		if(xmlHttp2.status == 200){
			xmlResponse = xmlHttp2.responseText;
			document.getElementById("productListContainer").innerHTML = xmlResponse;
		}else{
			alert("ERROR2");
		}
	}
}
