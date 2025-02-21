async function makeRequest(){
  const response = await  fetch('https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000')
  const data = await response.json()
  console.log(data)

  return data;
}

makeRequest();