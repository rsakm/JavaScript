function chnageImg(){
    document.body.children[3].src =
      'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'
}

// const AllImg = document.images
const allImages = document.getElementsByTagName('img');

const clssElements = document.getElementsByClassName('html-css-javascript')

const idElement = document.getElementById('html');

const querySelElement = document.querySelector('#css-img');

const queryElemClss = document.querySelector('.html-css-javascript'); // Returns the first element of the specific class

const querSelAll= document.querySelectorAll('.html-css-javascript');  // Returns all the elements of the specific class in the form of NodeList


const allImgs = document.querySelectorAll('img');

const updatedImgUrl = [ 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM=']

    // allImgs.forEach((image,i)=>{
    //     image.src=updatedImgUrl[i]
    // });