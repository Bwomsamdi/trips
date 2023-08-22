const map = L.map('map').setView([55.811953, 37.636374], 13);

const showMap = () => {
  if (map) {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([55.811953, 37.636374]).addTo(map)
  }
};

export {showMap};
