const fs = require("fs");
const place = require("./data/places.json");

fs.mkdir("FavPlace", () => {
  place.forEach((data) => {
    fs.mkdir(`FavPlace/${data.name}`, () => {
      fs.writeFile(
        `FavPlace/${data.name}/details.txt`,
        `
        Favorite_place is ${data.favorite_place}
        Favorite_temple is ${data.favorite_temple}
        Vacation_spot is   ${data.vacation_spot}
        `,
        () => {
          console.log(`Folder and file for ${data.name} created successfully`);
        }
      );
    });
  });
});
