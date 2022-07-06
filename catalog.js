for (let i = 0; i < 20; i++) {
    console.log(i);
    const cakecode = `
  <div class="cakecard">
  <img src="cakes/cake${Math.floor(Math.random()*8)+2}.jpg" alt="Cake 1" class="cakeimg">
  <h4>
    Chocolate Cake ${
      i + 1
    }
  </h4>
  <p>
    $1.00
  </p>
  </div>`
    document.querySelector(".container").innerHTML += cakecode;
  }
  // document.querySelector(`.container`).innerHTML +=