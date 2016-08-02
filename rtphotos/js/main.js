var pusher,
    channel,
    apiToken = '23864b471013b29dd295'


    function renderPhoto(fake) {
      //creates image tag
      var img = document.createElement('img')
      img.setAttribute('src', fake.image)
      img.classList.add('img-thumbnail')

      var captionText = document.createTextNode(fake.caption)
      var caption = document.createElement('h6')
      caption.classList.add('text-center')
      caption.appendChild(captionText)
      //creates div
      var div = document.createElement('div')
      div.classList.add('foo')
      div.classList.add('col-xs-3')
      div.appendChild(img)
      div.appendChild(caption)
      document.body.appendChild(div);
    }
// Pusher connection
pusher = new Pusher(apiToken, {
  encrypted: true
})
//email_image image_upload
// Pusher channel and event subscription
channel = pusher.subscribe('email_image')
channel.bind('image_upload', function(data) {

console.log(data);
 renderPhoto(data)
  // Put your code here to render incoming photos
})

// function renderPhoto(photoObject) {
//
// }




// var fakePhotos = {'image':'https://google.com', 'caption':'text'}


// renderPhoto(fakePhotos)
fetch('https://shrouded-hamlet-68398.herokuapp.com/photos')
  .then(function(data) {
    return data.json()
  })
  .then(function(photos) {

    photos.forEach(function(photo){

      console.log(photo.image);
         renderPhoto(photo)
    })

    // Put your code here to render existing photos

  })
