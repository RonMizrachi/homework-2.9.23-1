function returnPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
}

function returnAlbums() {
  return fetch("https://jsonplaceholder.typicode.com/albums").then((response) =>
    response.json()
  );
}

function returnComments() {
  return fetch("https://jsonplaceholder.typicode.com/comments").then(
    (response) => response.json()
  );
}

async function displayData() {
  let a = await returnPosts();
  let b = await returnAlbums();
  let c = await returnComments();
  console.log(a);
  console.log(b);
  console.log(c);
}

displayData();
