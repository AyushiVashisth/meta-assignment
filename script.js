document.addEventListener("DOMContentLoaded", function () {
    fetch("class.json")
      .then((response) => response.json())
      .then((data) => {
        const gridContainer = document.getElementById("gridContainer");
        data.forEach((item) => {
          const gridItem = document.createElement("div");
          gridItem.classList.add("grid-item");

          const img = document.createElement("img");
          img.src = item.image;
          img.alt = item.alt;
          gridItem.appendChild(img);

          const heading = document.createElement("h3");
          heading.textContent = item.heading;
          gridItem.appendChild(heading);

          const paragraph = document.createElement("p");
          paragraph.textContent = item.text;
          gridItem.appendChild(paragraph);

          const button = document.createElement("button");
          button.textContent = item.buttonText;
          gridItem.appendChild(button);

          gridContainer.appendChild(gridItem);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  });