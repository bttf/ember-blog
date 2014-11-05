Forget the acronyms. This is a node.js application composed of several tools and libraries as part of its stack. I'd rather not piggyback on the acronym parade and label this as a 'MEEN stack' or 'NEME stack'. 

I will also dispel the illusion that this is a failsafe, foolproof guide. I built this stack whilst learning these technologies on the way, and am certain that there are many potential improvements needed. Nevertheless, it works, it is stable, it has basic security and looks to be scalable with reasonable configuration. Part of the reason for sharing this is to receive constructive criticism and feedback, in addition to sharing my findings and guiding others.

This stack is comprised of three key components:

* MongoDB - Where all your data is persisted; the back in backend.
* Express/Node.js - API server handling requests from clients and I/O with DB
* Ember.js - Client-side JS application

Let's start with **MongoDB**:

1. Take a look at [https://www.mongodb.org/downloads](https://www.mongodb.org/downloads) to find out the latest version of MongoDB available.
2. Since I prefer the command-line approach (and I hope you do too), run the following command with the version set accordingly.

    ``$ curl -O http://downloads.mongodb.org/linux/mongodb-linux-x86_64-2.6.4.tgz``

3. Untar the tarball, add its bin/ folder to your PATH via .bashrc, source the .bashrc and create the directories **/data/db** (that's an absolute path), if they don't already exist. That is the default path that MongoDB will use; it is possible to configure it otherwise. Also, make sure to change the owner/permissions of /data/db accordingly so that the mongod process will be able to read and write to it.

  ```
  $ tar zxvf mongodb-linux-x86_64-2.6.4.tgz
  $ cp -R mongodb-linux-x86_64-2.6.4/ ~/mongodb
  $ echo 'export PATH=$HOME/mongodb/bin:$PATH' >> ~/.bashrc
  $ . ~/.bashrc
  $ sudo mkdir -p /data/db
  $ sudo chown -R bttf:bttf /data  #we will be running mongod under 'bttf' user
  ```
4. I won't go into the specifics of enabling authentication for mongod, but this tutorial should cover the bulk of it: [http://docs.mongodb.org/manual/tutorial/enable-authentication/](http://docs.mongodb.org/manual/tutorial/enable-authentication/)

Next is **node.js**

1. Installing node.js locally is preferred, as it avoids us having to use sudo, and helps keep permissions and ownership straightforward with globally installed modules. Find [one of the methods shown here](https://gist.github.com/isaacs/579814) that suits your taste and proceed. (*The gist is a little outdated; all of the methods have a separate step for installing npm. You can safely ignore these*)

Next is **Express**

1. Install [Express' application generator](https://github.com/expressjs/generator) via:

  ```
  npm install -g express-generator
  ```
2. Create your new express app directory; I'm calling mine chewbonga:

  ```
  express chewbonga
  ```
3. cd into your new directory and run an 'npm install'.

Let's move on to the meat and potatoes of our Express API server.

There are three main areas that we need to implement on our API server:

* Enabling CRUD operations with MongoDB
* Sending and receiving formatted JSON
* Authentication

**CRUD'ing** with **Express** and **MongoDB**

1. Since we are going to be interfacing with MongoDB, we will need something to help us interface with it, something like an ORM, something like [mongoose](https://github.com/LearnBoost/mongoose). In your project dir, run:

  ```
  npm install -S mongoose
  ```

2. Let's add the necessary lines to **app.js** for it to connect to our MongoDB instance on startup:

  ``
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017');
  ``
3. Stop and think about what sort of **models** you'll need to create; that is, logically categorized things that your app will need to persist on the database. Off the top of my head, I can think of two necessary for my blog:
  * Articles
  * Users

4. So, let's create a **models/** folder in our project root directory, and create out first model: **article.js**

```
▾ models/
    articles.js  
```

5. In it, you want to follow the convention for defining a model in mongoose. Here is how I defined my article model:

  ```
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  
  var ArticleSchema = new Schema({
    title: String,
    body: String,
    tags: []
    created: Date,
    modified: Date
  });

  module.exports = mongoose.model('Article', ArticleSchema);
  ```
