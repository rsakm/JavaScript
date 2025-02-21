

// fetch("https://dummyjson.com/products")
// .then((response)=> response.json())
// .then((data)=> console.log(data)).catch(console.log);

fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil',
      category:"stationary",
      /* other product data */
    }

)
  })
  .then(res => res.json())
  .then(console.log)
  .catch(console.log)