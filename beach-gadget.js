var details = document.getElementById("details")
var info = [{
        id: 0,
        img: "img/beach-shelter.webp",
        name: "Sun Shelter",
        price: "Rs.7,000",
        desc: "Maybe if all these heads of state and government just agree upon one shape of input/output plug."
    },
    {
        id: 1,
        img: "img/sand-free-mat.webp",
        name: "Beach Mat",
        price: "1,500",
        desc: "Make the most of your trip to the seaside with CGear Original Mat, a sandless beach blanket."
    },
    {
        id: 2,
        img: "img/beach-table.webp",
        name: "Beach Table",
        price: "Rs.5,000",
        desc: " LARQ's auto-bacterial-killing bottle will come in handy to purify 99 percent of bio-contaminants out of your water."
    },
    {
        id: 3,
        img: "img/beach-cooler.png",
        name: "Beach Cooler",
        price: "Rs.3,000",
        desc: " A beach cooler that can be carried as a backpack? It’s possible with YETI’s Hopper M20 Soft Backpack Cooler."



    },
    {
        id: 4,
        img: "img/inflatable-sofa.webp",
        name: " Inflatable Sofa ",
        price: "Rs.6,000",
        desc: "Sturdy, portable, and ridiculously easy to inflate, Lamzac the Original takes beach lounging to a whole new level."
    },
    {
        id: 5,
        img: "img/sunblock.webp",
        name: "Sun Block",
        price: "Rs.500",
        desc: "For the true lifetime traveler who wants nothing but the excitement of capturing beautiful sights, retouch-not-needed instan."
    },
    {
        id: 6,
        img: "img/beach-chair.webp",
        name: "Beach Lounger ",
        price: "Rs. 4,000",
        desc: "With an adjustable padded headrest, classy wooden armrests, and its own insulated cooler pocket, Sunnylife."
    },
    {
        id: 7,
        img: "img/waterproof-caamera.webp",
        name: "Waterproof Camera",
        price: "Rs. 20,000",
        desc: "Tough TG-6 is a rugged 12-megapixel digital camera designed to survive in Waterproof, shockproof."
    },
 


]

info.forEach((val) => {

    details.innerHTML += `<div class="card mx-2 mt-5 product-card  " style="width: 18rem;height:75vh;"data-aos="zoom-in-up">
        <img src="${val.img}" class="card-img-top mt-2" alt="..."style="height:42vh">
        <div class="card-body container-fluid ">
          <h5 class="card-title card-name">${val.name} <br> <span class="card-price">${val.price}</span></h5>
          <p class="card-text"style="height:10vh">${val.desc}</p>
          <a href="#" class=" btn btn1 btn-primary"> Show More</a>
        </div>
      </div>`});