var dog,happyDodImg,dogImg,foods,foodsStock,database

function preload()
{
  dogImg=loadImage("images/dogImg.png")
  happyDodImg=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700)
  database=firebase.database()
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImg)
  dog.scale=0.1
  foodsStock=database.ref('food')
  foodsStock.on("value",readStock)
}
function readStock(data){
  foods=data.val()
}


function draw() {  
  background(0)
  text("food remaining"+foods,170,200)
if(keyWentDown(UP_ARROW)){
  writeStock(foods)
  dog.addImage(happyDodImg)
}
  drawSprites();
  //add styles here

}
function writeStock(x){
if(x<=0){
  x=0
}
else{
  x=x-1
}
database.ref('/').update({
  food:x
})
}



