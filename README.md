[![Netlify Status](https://api.netlify.com/api/v1/badges/110add6e-f95c-465e-a6ce-a81a543744ee/deploy-status)](https://app.netlify.com/sites/flickr-lookup/deploys)

# FLICKR-LOOKUP Gallery 
Simple react app that looks up images base on what the user enters into the search bar. 3 categories are already defined 'Cats' 'Dogs' and 'Computers'. This app uses the Flickr API so you would need to sign up at flickr.com to get a free apiKey. 
### Project Structure

    flickr-lookup-p7               # root folder
        ├── public                 # contains static files such as css and images
        ├── src                    # source directory where all the JS lives 
             ├── Components        # react components 
             ├── utils             # constains utility functions
             ├── App.js            # container react component
             ├── config.example.js # example config.js file. 
        ├── data.json              # contains data for protfolio
        ├── package.json          
        └── README.md

### Flickr apiKey setup
Apply for a non-commercial API key @ https://www.flickr.com/services/apps/create/apply/ . 
once you get the key, setup a .env which should look like this file as blueprint:

```sh
REACT_APP_FLICKR_API_KEY=<API KEY Goes Here>
```

### How to run
```sh
git clone <repo_link>
cd flickr-lookup-p7
npm install
npm start
```
