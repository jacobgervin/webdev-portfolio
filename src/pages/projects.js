
import cocktailshopImg from "../images/cocktailshop-mockup.png"
import jocImg from "../images/joc.png"
import carshopImg from "../images/carshop.png"
import weatherappImg from "../images/weatherapp.png"
export const PROJECTS = [
    {
        "id": "1",
        "name": "COCKTAILSHOP",
        "about": "This is a project I made in my react class. The assignment required us to make a webshop, where we fetched the product data from an already existent API.",
        "image": cocktailshopImg,
        techstack: ["REACT", "CSS", "HTML", "JAVASCRIPT", "BOOTSTRAP"],
        "github": "https://github.com/jacobgervin/cocktailshop",
        "live": "https://cocktailshop.vercel.app/",
      },
      {
        "id": "2",
        "name": "JEWELRYWEBSHOP",
        "about": "This is a group project. The assignment required us to make a webshop in react, where we set up our own database and api to fetch products from. We used Wordpress as an headless CMS",
        "image": jocImg,
        techstack: ["REACT", "CSS", "HTML", "JAVASCRIPT", "TAILWIND", "WORDPRESS"],
        "github": "https://github.com/TheSpahThatSpies/smykkewebshop",
        "live": "https://smykkewebshop.vercel.app/",
      },
      {
        "id": "3",
        "name": "CARSHOP",
        "about": "This is a project I made in my PHP class, the assignment required us to make a webshop using PHP, we were also required to implement CRUD functions",
        "image": carshopImg,
        techstack: ["PHP", "CSS", "HTML", "BOOTSTRAP", "MYSQL"],
        "github": "https://github.com/jacobgervin/php-project",
        "live": "http://carshop.jacobgervin.dk/"
      },
      {
        "id": "4",
        "name": "WEATHERAPP",
        "about": "This is a personal project I made in my free time, for this project i used an API containing data about the weather around the world.",
        "image": weatherappImg,
        techstack: ["REACT", "CSS", "HTML", "TAILWIND", "JAVASCRIPT"],
        "github": "https://github.com/jacobgervin/weatherapp",
        "live": "https://weatherapp-umber-omega.vercel.app/"
      }


]