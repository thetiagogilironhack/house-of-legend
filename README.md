# House of Legends

### by Lídia Gonzalez and Tiago Gil

## Description

House of Legends is a simple and quick way for anyone who's interested in the game League of Legends to create their own champion build. <br>
This project also gives players usefull information about all of the champions and items in the game. <br>
Creating a build has never been easier!

![giphy (1)](https://media.giphy.com/media/FI9kkl5m07eIGhB4bA/giphy.gif)

## MVP

User actions in our project:

- Create a build: add a build with a title and items, that is linked to a champion.
- Update a build: update a build's win ratio by adding wins and losses.
- Delete a build: delete builds that have no more use.

![giphy (2)](https://media.giphy.com/media/uiPJ33aVIyql4xMjK1/giphy-downsized-large.gif)

## Backlog

Other features in our project:

- Filter all champions by name, role, house or all of them together.
- Filter all items by name, type or both of them.
- Filter all builds by champion name.
- Styling for buttons, inputs, droplists and scroll bars.

![giphy (3)](https://media.giphy.com/media/hp3IRVIP3vbJJvFC0o/giphy.gif)

## Routes

`App Routes`:

- `HomePage route path="/"`
- `ChampionsPage route path="/champions"`
- `ChampionDetailsPage route path="/champions/:championId"`
- `ItemsPage route path="/ItemsPage"`
- `MyBuildsPage route path="/MyBuildsPage"`
- `NewBuildPage route path="/NewBuildPage"`

![giphy (4)](https://media.giphy.com/media/3oz8xCXbQDReF34WWs/giphy.gif)

## Pages and Components

`Pages`:

- `Homepage.jsx`
- `ChampionsPage.jsx`
- `ChampionDetailsPage.jsx`
- `ItemsPage.jsx`
- `MyBuildsPage.jsx`
- `NewBuildPage.jsx`

`Components`:

- `Footer.jsx`
- `ImageSlider.jsx`
- `InfoBarColors.jsx`
- `Navbar.jsx`
- `SearchBar.jsx`

`Builds components`:

- `BoxDisplayBuild.jsx`
- `BoxDisplayChampion.jsx`
- `DeleteBuildButton.jsx`

## Models

- champions: {

  - house: String,
  - id: String,
  - key: Number,
  - name: String,
  - title: String,
  - blurb: String,
  - info: {
    - attack: Number,
    - defense: Number,
    - magic: Number,
    - difficulty: Number,
      },
  - skins: Array of Numbers,
  - tags: Array of Strings,
    },

- items: {

  - name: String,
  - id: Number,
  - gold: {
    - total: Number,
      },
  - tags: Array of Strings,
    },

- builds: {

  - title: "OP Ziggs Build",
  - champion: {
    - name: String,
    - key: Number,
      },
  - item1: {
  - name: String,
    - id: Number,
    - price: Number,
      },
  - item2: {
    - name: String,
    - id: Number,
    - price: Number,
      },
  - item3: {
    - name: String,
    - id: Number,
    - price: Number,
      },
  - item4: {
    - name: String,
    - id: Number,
    - price: Number,
      },
  - item5: {
    - name: String,
    - id: Number,
    - price: Number,
      },
  - item6: {
    - name: String,
    - id: Number,
    - price: Number
      },
  - win: Number,
  - loss: Number,
  - id: Number
    }

    ![giphy (5)](https://media.giphy.com/media/Mah9dFWo1WZX0WM62Q/giphy.gif)

## Links

- [Presentation Link](https://docs.google.com/presentation/d/1d03lTfKBQYyZaMoaGur5UV4n7lbN4BiZyCud6yQLNfU/edit#slide=id.p)
- [Github repository Link for front-end](https://github.com/thetiagogil/house-of-legend.git)
- [Github repository Link for back-end](https://github.com/thetiagogil/house-of-legend-backend.git)
- [Deployment Link for front-end](https://house-of-legends.netlify.app)
- [Deployment Link for back-end](https://house-of-legends-backend.adaptable.app/)

![giphy (1)](https://media.giphy.com/media/tQrJlriGulo7up5g3f/giphy.gif)

## Credits

All of the data from the API was taken from the [Data Dragon API](https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html) and from [League of Legends Official Website](https://www.leagueoflegends.com/en-us/).
