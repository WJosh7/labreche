
	         var myImage = document.getElementById("image");
			 var imageArray = ["images/slide/item0.jpg","images/slide/item01.jpg",
			 "images/slide/item09.jpg","images/slide/item2.jpg","images/slide/item09.jpg",
			 "images/slide/item09.jpg","images/slide/item04.jpg","images/slide/item3.jpg",
			 "images/slide/item4.jpg","images/slide/item5.jpg","images/slide/item6.jpg",
			 "images/slide/item7.jpg","images/slide/item8.jpg","images/slide/item9.jpg",
			 "images/slide/item10.jpg","images/slide/item11.jpg","images/slide/item12.jpg",
			 "images/slide/item13.jpg","images/slide/item14.jpg","images/slide/item15.jpg",
			 "images/slide/item16.jpg","images/slide/item17.jpg","images/slide/item18.jpg",
			 "images/slide/item19.jpg","images/slide/item20.jpg","images/slide/item21.jpg",
			 "images/slide/item22.jpg","images/slide/item022.jpg","images/slide/item23.jpg",
			 "images/slide/item25.jpg","images/slide/item26.jpg","images/slide/item27.jpg",
			 "images/slide/item28.jpg","images/slide/item29.jpg","images/slide/item30.jpg",
			 "images/slide/item31.jpg","images/slide/item32.jpg","images/slide/item33.jpg",
			 "images/slide/item34.jpg","images/slide/item35.jpg","images/slide/item36.jpg",
			 "images/slide/item37.jpg","images/slide/item38.jpg","images/slide/item39.jpg",
			 "images/slide/item40.jpg","images/slide/item24.jpg"];
			 var imageIndex=0;
			 //function declaration
			 function changeImage()
			 {
			    //passing the image to the id of the image on the html
				image.setAttribute("src",imageArray[imageIndex]);
				imageIndex++;
				
				if(imageIndex >= imageArray.length)
                {
				
				  imageIndex = 0;
							
				}//endif			 
			 
			 }//end changeImage
			 
			 //slide interval handler 
			 var intervalHandle = setInterval(changeImage,2500);
			 image.onClick = function()
			 {
			    clearInterval(intervalHandle);
			 }
	   
