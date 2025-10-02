// Footer info
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Product Array
const products = [
  { id: "p1", name: "Laptop" },
  { id: "p2", name: "Smartphone" },
  { id: "p3", name: "Wireless Headphones" },
  { id: "p4", name: "Gaming Monitor" },
  { id: "p5", name: "Bluetooth Speaker" }
];

// Populate select
const productSelect = document.getElementById("productName");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});
