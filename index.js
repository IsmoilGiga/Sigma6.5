let body = document.querySelector("body");

fetch("https://fakestoreapi.com/products?limit=10")
.then((res) => res.json())
.then((data) => {
      for (let i=0; i<10; i++)
        {
          let prod = data[i];

          let box = document.createElement("div");
          let img = document.createElement("img");
          let title = document.createElement("h3");
          let rating = document.createElement("p");
          let people = document.createElement("span");
          let price = document.createElement("p");

          box.classList.add("box");
          rating.classList.add("rating");
          price.classList.add("price")

          img.src = prod.image;
          title.textContent = prod.title;
          rating.textContent = prod.rating.rate;
          people.textContent = prod.rating.count;
          price.textContent = prod.price;

          box.appendChild(img);
          box.appendChild(title);
          box.appendChild(rating);
          box.appendChild(price);

          body.appendChild(box);
        }
});