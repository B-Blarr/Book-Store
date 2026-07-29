# Book-Store

A book catalogue with likes and comments, built without any framework.

👉 **[Open the Book-Store](https://benjaminblarr.de/bookstore/)**

![Book-Store Preview](assets/preview.png)

## About

The catalogue is rendered from a JavaScript data array. Every book can be
liked and commented on, and both survive a reload because they are stored in
LocalStorage.

The data therefore lives in two places at once. Likes and comments are read
back on load and merged with the book data, and the two have to stay in step,
otherwise a comment ends up under the wrong book.

## Features

- Catalogue rendered dynamically from a data array
- Like function per book
- Comments, persisted in LocalStorage
- Book details with author, year of release and genre

## Built with

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo" />
</p>

Persistence through LocalStorage.
