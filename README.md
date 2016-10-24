# react-news-swearing

A little project to learn react, creating an app to search the news and see who's swearing about it.

## How to view

  * Clone the repo: `git clone https://github.com/mrjackess/react-news-swearing.git my-new-project`
  * Install the dependencies: `cd my-new-project && npm install`
  * Start webpack-dev-server: `npm start`
  * Open and view in `http://localhost:8080/`

## Discontinued

Unfortunately, this is a project that won't be finished. Due to limitations with the twitter api around how to search, I can't actually make the kind of searches I wanted to. I attempted to edit how the project worked a bit by instead of seeing who was swearing about the news article, you could choose either the positive or negative tweet. In the end the fact that you can either search twitter for ALL the words or ANY of the words means I can't pick up the most relevant. AKA I cant search twitter for a list of words and if there are tweets with more of the words than others they'll get picked up first. Also Guardians api doesn't provide a key words array from a title for example which means you get stuck searching twitter for a lot of connecting words which aren't really relevant.

The next step for the project was to create a global store with redux as there are far too many connecting functions passing variable up to parents.

I've learnt a lot in this little project though so I'll leave it up to learn from and happily move onto bigger and better.
