var pusher,
    channel,
    apiToken = '23864b471013b29dd295'

// Pusher connection
pusher = new Pusher(apiToken, {
  encrypted: true
})
//email_image image_upload
// Pusher channel and event subscription
channel = pusher.subscribe('email_image')
channel.bind('image_upload', function(data) {
  console.log(data)
  console.log(data.caption)
  console.log(data.image)

  // Put your code here to render incoming photos
})

// function renderPhoto(photoObject) {
//
// }




// var fakePhotos = {'image':'https://google.com', 'caption':'text'}

function renderPhoto(fake) {
  //creates image tag
  var img = document.createElement('img')
  img.setAttribute('src', fake.image)
  //creates div
  var div = document.createElement('div')
  div.classList.add('foo')


  div.appendChild(img)
  document.body.appendChild(div);
console.log(fake);
}
// renderPhoto(fakePhotos)
fetch('https://5f36d607.ngrok.io/posts')
  .then(function(data) {
    return data.json()
  })
  .then(function(photos) {
    // Put your code here to render existing photos

  })
