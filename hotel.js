var details = document.getElementById("details")
var info = [{
        id: 0,
        img: "img/hunza-hotel.jpeg",
        name: "Khan Hotel (Hunza)",
        price: "Per day (Rs. 4,000)",
        desc: "Maybe if all these heads of state and government just agree upon one shape of input/output plug."
    },
    {
        id: 1,
        img: "img/lahore-hotel.jpg",
        name: "Serena Hotel (Naran)",
        price: "Per Day (Rs. 4,500)",
        desc: "Simply put, it's a TikTok viral gadget that'll connect your AirPods—or any wireless headpho TV."
    },
    {
        id: 2,
        img: "img/marriot-hotel.jpg",
        name: "Marriot Hotel (Swat)",
        price: "Per Day (Rs. 5,000)",
        desc: " LARQ's auto-bacterial-killing bottle will come in handy to purify 99 percent of bio-contaminants out of your water."
    },
    {
        id: 3,
        img: "img/gilgit-hotel.jpg",
        name: "Shugran Hotel (Muree)",
        price: "Per Day (Rs. 3,000)",
        desc: " Bose's classic-cool smart sunglasses, with open-ear audio built in to play music only for you, will  headphones."



    },
    {
        id: 4,
        img: "img/luxus-hotel.jpg",
        name: " Baloch Hotel (gawadar) ",
        price: "Per Day (Rs. 2,500)",
        desc: "Just in case your voyage takes place during the cusp of yet another pandemic, this handy sanitizing light wand you can fit in a pocket will be able to rapidly ."
    },
    {
        id: 5,
        img: "img/serena-hotel.jpg",
        name: "Kurmat Valley",
        price: "Per Day (Rs. 3,000)",
        desc: "For the true lifetime traveler who wants nothing but the excitement of capturing beautiful sights, retouch-not-needed instan."
    },
    {
        id: 6,
        img: "img/chilass-hotel.jpg",
        name: "Hotel-Chillas (Chilass) ",
        price: "Per Day (Rs. 5,000)",
        desc: "More than just a drinking vessel kit for passing around whiskey to your traveling mates during a makeshift happy hour, though ."
    },
    {
        id: 7,
        img: "img/nellum-hotel.jpg",
        name: "Khan-Hotel (Nellum)",
        price: "Per Day (Rs. 6,000)",
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