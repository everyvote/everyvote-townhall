## Install node.js
http://nodejs.org/

Node.js installs:
- npm
- node

## Install grunt and bower
    npm install -g grunt-cli bower
    (no need to install these locally, global is fine)
    
## Install all dependencies for the app
    cd (into repo's folder)
    npm install
    bower install
    (no virtualenv problems)
    
## You should be able to run
   grunt serve
   ( the above gathers all the angular files and serves them on http://localhost:9000 )
