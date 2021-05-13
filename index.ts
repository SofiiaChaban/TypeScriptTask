import updateObjectInArray from './updateObjectInArray.js'

async function getPosts<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

const showData = async () => {
  let data;
  try {
    data = await getPosts<Post[]>("https://jsonplaceholder.typicode.com/posts");
  } catch (e) {
    console.log(e);
  }
  let postsContainer = document.getElementById('postsContainer');
  data.forEach((post) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let container = document.createElement('div');
    container.setAttribute('class', 'container');

    let postTitle = document.createElement('h2');
    postTitle.innerHTML = post.title;

    let postInfo = document.createElement('p');
    postInfo.innerHTML = `user #${post.userId}, post#${post.id}`;

    let postBody = document.createElement('p');
    postBody.innerHTML = post.body;
    container.append(postTitle);
    container.append(postInfo);
    container.append(postBody);
    card.append(container);
    postsContainer.append(card);
  });
}

showData();

type Test = {
  id: number,
  name: string;
}

let testArray: Test[] = [{ id: 0, name: "item1" }, { id: 1, name: "item2" }, { id: 2, name: "item3" }];

let updatedArray = updateObjectInArray<Test>(testArray, 1, { id: 8, name: "updatedItem" });

let updateFuncContainer = document.getElementById("updateFuncContainer");
let testArrayHTML = document.createElement("p");
testArrayHTML.innerHTML = `Orginal array: ${JSON.stringify(testArray)}`;
let updatedArrayHTML = document.createElement("p");
updatedArrayHTML.innerHTML = `Updated array: ${JSON.stringify(updatedArray)}`;

updateFuncContainer.appendChild(testArrayHTML);
updateFuncContainer.appendChild(updatedArrayHTML);


