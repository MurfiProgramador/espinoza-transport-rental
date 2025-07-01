document.addEventListener("DOMContentLoaded", () => {
  const vehicles = {
    hilux: {
      title: "Camioneta Toyota Hilux",
      image: "https://i.imgur.com/NI8g9EW.jpeg",
      description: "Equipada para minería con jaula antivuelco, circulina y pértiga",
      specs: ["Diesel", "5 pasajeros"],
      pdfUrl: "https://www.toyotaperu.com.pe/sites/default/files/2024-12/catalogo-camioneta-hilux.pdf"
    },
    sprinter: {
      title: "Bus Mercedes Sprinter",
      image: "https://i.imgur.com/kKymjeG.png",
      description: "Transporte de personal con aire acondicionado y asientos reclinables",
      specs: ["Diesel", "16 pasajeros"],
      pdfUrl: "https://mercedes-benz.motorysa.com/uploads/sprinter_415_cdi_pasajeros_0281670916.pdf"
    },
    hino: {
      title: "Camión Ligero Hino",
      image: "https://i.imgur.com/wQy3HFf.jpeg",
      description: "Ideal para transporte de equipos y materiales en zonas industriales",
      specs: ["Diesel", "3 hasta 8 toneladas"],
      pdfUrl: "https://hinostacatarina.com/wp-content/uploads/2021/10/Serie-300-Modelos-716-816.pdf"
    },
    solati: {
      title: "Hyundai Solati",
      image: "https://i.imgur.com/YctANcv.png",
      description: "Solati H350 Bus para supervisión y transporte ejecutivo",
      specs: ["Diesel", "18 pasajeros"],
      pdfUrl: "https://hyundaicamiones.pe/wp-content/uploads/2024/10/FT-H350-Solati-Septiembre-2024-1.pdf"
    },
    county: {
      title: "County Bus",
      image: "https://i.imgur.com/FDX7Jey.png",
      description: "Transporte de personal para proyectos mineros de gran escala",
      specs: ["Diesel", "45 pasajeros"],
      pdfUrl: "https://hyundaicamiones.pe/wp-content/uploads/2021/10/FT-bus-county-web.pdf"
    },
    volvo: {
      title: "Volvo VM",
      image: "https://i.imgur.com/rq7Ro17.png",
      description: "Transporte de carga y la distribución urbana de mercancías.",
      specs: ["Diesel", "4 hasta 12  Toneladas"],
      pdfUrl: "https://www.volvotrucks.com.ar/es-ar/trucks/models/volvo-vm.html"
    }
  };

  const modal = document.getElementById("vehicle-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalSpecs = document.getElementById("modal-specs");
  const modalLink = document.getElementById("modal-link");
  const modalClose = document.getElementById("modal-close");

  document.querySelectorAll(".view-vehicle").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const vehicleKey = link.getAttribute("data-vehicle");
      const vehicle = vehicles[vehicleKey];
      if (vehicle) {
        modalTitle.textContent = vehicle.title;
        modalImage.src = vehicle.image;
        modalImage.alt = vehicle.title;
        modalDescription.textContent = vehicle.description;
        modalSpecs.innerHTML = "";
        vehicle.specs.forEach(spec => {
          const span = document.createElement("span");
          span.className = "bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm";
          span.textContent = spec;
          modalSpecs.appendChild(span);
        });
        modalLink.href = vehicle.pdfUrl;
        modal.classList.remove("hidden");
      }
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
