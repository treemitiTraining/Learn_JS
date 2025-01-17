function createImage() {

    let imageWrapper = document.getElementById('imageWrapper');
    let img = new Image(300, 400);
    let setAttribute = imageWrapper.appendChild(img)

    setAttribute.setAttribute('src', 'https://images.unsplash.com/photo-1735767976699-6096acda642d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

    setAttribute.setAttribute('alt', 'test')
    setAttribute.setAttribute('style', 'aspect-ratio:4/3 ');


    let p = document.createElement('p')
    let wrapper = document.getElementById('imageWrapper')

    wrapper.appendChild(p).innerText = "ABC"
    p.setAttribute('class', "row")
}

