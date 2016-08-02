var pusher,
    channel,
    apiToken = '23864b471013b29dd295'


    function renderPhoto(fake) {
      //creates image tag
      console.log(fake.image);
      var img = document.createElement('img')
      img.setAttribute('src', 'https://5f36d607.ngrok.io/photos' + fake.image)
      //creates div
      var div = document.createElement('div')
      div.classList.add('foo')
      div.appendChild(img)
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

console.log(data.image);
// renderPhoto(data)
  // Put your code here to render incoming photos
})

// function renderPhoto(photoObject) {
//
// }




// var fakePhotos = {'image':'https://google.com', 'caption':'text'}


// renderPhoto(fakePhotos)
fetch('https://5f36d607.ngrok.io/photos')
  .then(function(data) {
    return data.json()
  })
  .then(function(photos) {
    console.log(photos.image);
    // renderPhoto(photos)
    // Put your code here to render existing photos

  })
