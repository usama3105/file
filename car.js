var details = document.getElementById("details")
var info = [{
        id: 0,
        img: "img/hiace.jfif",
        name: "Travel Adapter",
        price: "Rs.1,599",
        desc: "Maybe if all these heads of state and government just agree upon one shape of input/output plug."
    },
    {
        id: 1,
        img: "img/swift.jfif",
        name: "Twelve South AirFly",
        price: "Rs.1,499",
        desc: "Simply put, it's a TikTok viral gadget that'll connect your AirPods—or any wireless headpho TV."
    },
    {
        id: 2,
        img: "img/wagon r.jfif",
        name: "Self-Cleaning Bottle",
        price: "Rs.2,599",
        desc: " LARQ's auto-bacterial-killing bottle will come in handy to purify 99 percent of bio-contaminants out of your water."
    },
    {
        id: 3,
        img: "img/brv.jfif",
        name: "Alto Audio Sunglasses",
        price: "Rs.2,299",
        desc: " Bose's classic-cool smart sunglasses, with open-ear audio built in to play music only for you, will  headphones."



    },
    {
        id: 4,
        img: "img/jeep1.jfif",
        name: " Portable UV Light ",
        price: "Rs.999",
        desc: "Just in case your voyage takes place during the cusp of yet another pandemic, this handy sanitizing light wand you can fit in a pocket will be able to rapidly ."
    },
    {
        id: 5,
        img: "img/land.jfif",
        name: "I-Type Instant Camera",
        price: "Rs.19,999",
        desc: "For the true lifetime traveler who wants nothing but the excitement of capturing beautiful sights, retouch-not-needed instan."
    },
    {
        id: 6,
        img: "img/sonata.jfif",
        name: "Adventure Flask Kit",
        price: "Rs.499",
        desc: "More than just a drinking vessel kit for passing around whiskey to your traveling mates during a makeshift happy hour, though ."
    },
    {
        id: 7,
        img: "img/sportage.jfif",
        name: "JBL 4 Portable Speaker",
        price: "Rs.3,999",
        desc: "Speaker convenient enough that you can clip onto your backpack or pant's belt loop is one that'll soundtrack your excursion. Not to mention JBL's Clip 4 is o audio."
    },
 


]

info.forEach((val) => {

    details.innerHTML += `<div class="card mx-2 mt-5 product-card  " style="width: 18rem;height:75vh;"data-aos="zoom-in-up">
        <img src="${val.img}" class="card-img-top mt-2" alt="..."style="height:42vh">
        <div class="card-body container-fluid ">
          <h5 class="card-title card-name ">${val.name} <br> <span class="card-price">${val.price}</span></h5>
          <p class="card-text"style="height:10vh">${val.desc}</p>
          <a href="#" class=" btn btn1 btn-primary"> Show More</a>
        </div>
      </div>`});