function scrollToProduct() {
  document.getElementById("product").scrollIntoView({
    behavior: "smooth"
  });
}

function changeVariant() {
  const variant = document.getElementById("variant").value;
  const image = document.getElementById("productImage");

  if (variant === "default") {
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9a7CaHTjaMWZwYJOgiHuJRNafuNyb4FiQ2g&s";
  } else if (variant === "alt1") {
    // placeholder, keep same for now
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9a7CaHTjaMWZwYJOgiHuJRNafuNyb4FiQ2g&s";
  }
}
