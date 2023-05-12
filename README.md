# Asynchronous Javascript (Async and Await)

## Lesson Objectives

- Async
- Await

## Intro

Have you ever wanted to wait for a function to finish before moving on to the next one? That's where `async` and `await` come in! `async` is a keyword that allows you to define an `asynchronous function` that returns a `promise`, and `await` is a keyword that allows you to *pause the execution* of an `asynchronous function` until a `promise` is fulfilled.

### Example

Let's say you have a `website` that displays a `list of photos`, and you want to fetch the data for the photos from an `API`. With `async` and `await`, you can make the `API` request and then display the photos in the order that they were `received`.

```js
const getPhotos = async () => {
  const response = await fetch('https://api.example.com/photos.json');
  const photos = await response.json();
  return photos;
}

async function displayPhotos() {
  const photos = await getPhotos();
  photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.thumbnailUrl;
    document.body.appendChild(img);
  });
}

displayPhotos();

```

In this example, we define an `async function` called `getPhotos()` that makes a `request` to an `API` for a *list of photos*. We then use the `await` keyword to pause the execution of the function until the `promise` returned by `fetch()` is fulfilled. Once the `promise` is fulfilled, we use the second `await` keyword to pause the execution of the function until the `promise` returned by `response.json()` is fulfilled.

The `getPhotos()` function returns the *list of photos* as a `promise`, which we then use in another `async function` called `displayPhotos()`. We use the `await` keyword to pause the execution of the function until the `promise` returned by `getPhotos()` is fulfilled.

Once the `promise` is fulfilled, we loop through the *list of photos* and create an `image element` for each one. We set the `src attribute` of each `image element` to the `thumbnail URL` of the `photo`, and then append the `image element` to the body of the `HTML document`.

By using `async` and `await`, we were able to make an `asynchronous request` to an `API`, pause the execution of our code until the request was fulfilled, and then *display the photos* in the order that they were received.

### Example without Fetch

Here's an example of an `async function` that doesn't use the `fetch() API`

```js
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function run() {
  console.log('Starting...');
  await delay(1000);
  console.log('One second later...');
  await delay(2000);
  console.log('Two more seconds later...');
  return 'Done!';
}

run().then(result => console.log(result));

```

In this example, we define an `async function` called `run()` that logs some messages to the console with a delay between them. We use a `helper function` called `delay()` that returns a `promise` that resolves after a specified amount of time.

We call `run()` using the `await` keyword to *pause the execution* of the `run()` function until the `promise` returned by each `call` to `delay()` is fulfilled. Once all the `promises` are fulfilled, the `run()` function returns a string, which we log to the console using the `then()` method.

By using `async` and `await`, we were able to write asynchronous code in a more synchronous style.

## Resources

- [Free Public API List](https://github.com/public-apis/public-apis)
