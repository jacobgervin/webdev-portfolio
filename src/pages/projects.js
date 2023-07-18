
import cocktailshopImg from "../images/cocktailshop-mockup.png"
import jocImg from "../images/joc.png"
import carshopImg from "../images/carshop.png"
import weatherappImg from "../images/weatherapp.png"
import ncPortfolio from "../images/nc-portfolio.png"
import myPortfolio from "../images/myportfolio.png"
export const PROJECTS = [
    {
        "id": "1",
        "name": "COCKTAILSHOP",
        "about": "This is a project I made in my react class. The assignment required us to make a webshop, where we fetched the product data from an already existent API.",
        "om": "Dette er et skoleprojekt, lavet i react. Opgaven forlangte at jeg skulle lave en webshop, som hentede produkter fra en allerede eksisterende API",
        "image": cocktailshopImg,
        techstack: ["REACT", "CSS", "HTML", "JAVASCRIPT", "TAILWIND"],
        "github": "https://github.com/jacobgervin/cocktailshop",
        "live": "https://cocktailshop.vercel.app/",
      },
      {
        "id": "2",
        "name": "JEWELRYWEBSHOP",
        "about": "This is a group project. The assignment required us to make a webshop in React, where we set up our own database and api to fetch products from. We used Wordpress as an headless CMS",
        "om": "Dette er et gruppe projekt, opgaven krævede at vi skulle lave en webshop i React, hvor vi opsatte vores egen database og API til at fetche produkter fra. Vi brugte wordpress som et headless CMS",
        "image": jocImg,
        techstack: ["REACT", "CSS", "HTML", "JAVASCRIPT", "TAILWIND", "WORDPRESS"],
        "github": "https://github.com/TheSpahThatSpies/smykkewebshop",
        "live": "https://smykkewebshop.vercel.app/",
      },
      {
        "id": "6",
        "name": "MY PORTFOLIO WEBSITE",
        "about": "This is my portfolio that I made in my free time for myself. This project was made using React.",
        "om": "Dette er min portfolio side, som jeg har lavet i min fritid. Den er lavet ved brug af React",
        "image": myPortfolio,
        techstack: ["REACT", "CSS", "HTML", "TAILWIND", "JAVASCRIPT"],
        "github": "https://github.com/jacobgervin/webdev-portfolio",
        "live": "#"
      },
      {
        "id": "4",
        "name": "WEATHERAPP",
        "about": "This is a personal project I made in my free time, for this project i used an API containing data about the weather around the world.",
        "om": "Dette er et personligt projekt jeg har lavet i min fritid. I dette projekt brugte jeg en eksisterende API med informationer omkring vejret",
        "image": weatherappImg,
        techstack: ["REACT", "CSS", "HTML", "TAILWIND", "JAVASCRIPT"],
        "github": "https://github.com/jacobgervin/weatherapp",
        "live": "https://weatherapp-umber-omega.vercel.app/"
      },
      {
        "id": "5",
        "name": "PORTFOLIO WEBSITE",
        "about": "This is a portfolio I made in my free time for a graphic designer. This project was made using React.",
        "om": " Dette er en portfolio jeg har lavet i min fritid for en grafisk designer",
        "image": ncPortfolio,
        techstack: ["REACT", "CSS", "HTML", "TAILWIND", "JAVASCRIPT"],
        "github": "https://github.com/jacobgervin/natasjaclemmensen",
        "live": "https://nc-portfolio.vercel.app/"
      },
      {
        "id": "3",
        "name": "CARSHOP",
        "about": "This is a project I made in my PHP class, the assignment required us to make a webshop using PHP, we were also required to implement CRUD functions. To access the dashboard use the following credentials: jacobgervin@gmail.com - Password",
        "om": "Dette er et projekt lavet som del af min PHP undervisning, kravene var en webshop udviklet i PHP, dertil skulle vi implementere CRUD funktionalitet. For at få adgang til dashboardet brug følgende oplysninger: jacobgervin@gmail.com - Password",
        "image": carshopImg,
        techstack: ["PHP", "CSS", "HTML", "BOOTSTRAP", "MYSQL"],
        "github": "https://github.com/jacobgervin/php-project",
        "live": "http://carshop.jacobgervin.dk/"
      },


]