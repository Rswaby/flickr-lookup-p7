# FLICKR-LOOKUP Gallery 
Simple react app that looks up images base on what the user enters into the search bar. 3 categories are already defined 'Cats' 'Dogs' and 'Computers'. This app uses the Flickr API so you would need to sign up at flickr.com to get a free apiKey. 
### Project Structure

    flickr-lookup-p7            # root folder
        ├── public              # contains static files such as css and images
        ├── src                 #source directory where all the JS lives 
             ├── Components     # react components 
             ├── utils          # constains utility functions
             ├── App.js         # container react component
             ├── config.example # example config.js file. 
        ├── data.json           # contains data for protfolio
        ├── package.json          
        └── README.md

### Flickr apiKey setup
Apply for a non-commercial API key @ https://www.flickr.com/services/apps/create/apply/ . 
once you get the key, setup a config.js in the src directory use the config.example.js file as blueprint:

```javaScript
const apiKey = '<API KEY Goes Here>';
export default apiKey;
```

### How to run
```sh
git clone <repo_link>
cd flickr-lookup-p7
npm install
npm start
```
