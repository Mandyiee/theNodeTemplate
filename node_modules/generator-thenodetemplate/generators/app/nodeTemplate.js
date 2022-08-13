array = [`const mongoose = require('mongoose')
require('dotenv').config()

async function connectDB () {
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true,useUnifiedTopology: true})

mongoose.connection.once('open', function () {
    console.log('connection has been mande')
}).on('error', function(error) {
    console.log('connection error', error)
})
}

module.exports = connectDB`, `const mongoose = require('mongoose')
      
module.exports = mongoose.model('',)`, `require('dotenv').config()
const express = require('express')
const router = express.Router()
    
router.get('/', (req, res) => {
   res.render('index')
  })
    
module.exports = router`, `<!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>document</title>
      
      </head>
      <body>
        
      </body>
    </html>
      `, `const express = require('express')
const path  = require('path')
const app = express()
const connectDB = require('./connection/db')
const PORT = process.env.PORT || 3000
const indexRouter = require('./routes/index')
    
    
connectDB()
    
app.set('view engine', 'ejs')
    
app.use(express.urlencoded({extended: true}))
    
app.use(express.static(path.join(__dirname, 'public')))
    
app.use('/', indexRouter)
    
app.listen(PORT, () => console.log('server has started'))`, `NODE_ENV=development
  PORT=8080
  MONGO_URI=`]

const fs = require('fs')
const prompt = require('prompt-sync')();
const os = require('node:os');
const path = require('node:path');
const { execFile } = require('node:child_process');
const process = require('process');
const Generator = require('yeoman-generator');

function effect(folder) {
  process.chdir(folder)
  const order1 = execFile('npm', ['init', '-y'], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
    const order2 = execFile('npm', ['i', 'express', 'ejs', 'dotenv'], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      console.log(stdout);
      const order3 = execFile('npm', ['i', 'nodemon', '-D'], (error, stdout, stderr) => {
        if (error) {
          throw error;
        }
        console.log(stdout);

      });
    });
  });
  
}


function create() {
  console.log('what is the name of your folder')
  const folder = prompt();
  homeFolder = path.join(os.homedir(), 'nodeProject')
  try {
    fs.exists(homeFolder, (exists) => {
      if (exists) {
        const newFolder = path.join(homeFolder, folder)
        fs.mkdir(newFolder, (err) => {
          if (err) {
            let connection = path.join(newFolder, 'connection')
            fs.mkdir(connection, (err) => {
              if (err) {
                fs.writeFile(connection + '/db.js', array[0], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(connection + '/db.js', array[0], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            let models = path.join(newFolder, 'models')
            fs.mkdir(models, (err) => {
              if (err) {
                fs.writeFile(models + '/models.js', array[1], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(models + '/models.js', array[1], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            let routes = path.join(newFolder, 'routes')
            fs.mkdir(routes, (err) => {
              if (err) {
                fs.writeFile(routes + '/routes.js', array[2], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(routes + '/routes.js', array[2], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            let views = path.join(newFolder, 'views')
            fs.mkdir(views, (err) => {
              if (err) {
                fs.writeFile(views + '/views.ejs', array[3], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(views + '/views.ejs', array[3], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            fs.writeFile(newFolder + '/server.js', array[4], function(err) {
              if (err) {
                return console.error(err);
              }
            });
            fs.writeFile(newFolder + '/.env', array[5], function(err) {
              if (err) {
                return console.error(err);
              }
            });
            effect(newFolder)
            return
          } else {
            let connection = path.join(newFolder, 'connection')
            fs.mkdir(connection, (err) => {
              if (err) {
                fs.writeFile(connection + '/db.js', array[0], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(connection + '/db.js', array[0], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            let models = path.join(newFolder, 'models')
            fs.mkdir(models, (err) => {
              if (err) {
                fs.writeFile(models + '/models.js', array[1], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(models + '/models.js', array[1], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            let routes = path.join(newFolder, 'routes')
            fs.mkdir(routes, (err) => {
              if (err) {
                fs.writeFile(routes + '/routes.js', array[2], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(routes + '/routes.js', array[2], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            let views = path.join(newFolder, 'views')
            fs.mkdir(views, (err) => {
              if (err) {
                fs.writeFile(views + '/views.ejs', array[3], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(views + '/views.ejs', array[3], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            fs.writeFile(newFolder + '/server.js', array[4], function(err) {
              if (err) {
                return console.error(err);
              }
            });
            fs.writeFile(newFolder + '/.env', array[5], function(err) {
              if (err) {
                return console.error(err);
              }
            });
            effect(newFolder)
          }
        })
      } else {
        fs.mkdirSync(homeFolder)
        const newFolder = path.join(homeFolder, folder)
        fs.mkdir(newFolder, (err) => {
          if (err) {
            let connection = path.join(newFolder, 'connection')
            fs.mkdir(connection, (err) => {
              if (err) {
                fs.writeFile(connection + '/db.js', array[0], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(connection + '/db.js', array[0], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            let models = path.join(newFolder, 'models')
            fs.mkdir(models, (err) => {
              if (err) {
                fs.writeFile(models + '/models.js', array[1], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(models + '/models.js', array[1], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            let routes = path.join(newFolder, 'routes')
            fs.mkdir(routes, (err) => {
              if (err) {
                fs.writeFile(routes + '/routes.js', array[2], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(routes + '/routes.js', array[2], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            let views = path.join(newFolder, 'views')
            fs.mkdir(views, (err) => {
              if (err) {
                fs.writeFile(views + '/views.ejs', array[3], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(views + '/views.ejs', array[3], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            fs.writeFile(newFolder + '/server.js', array[4], function(err) {
              if (err) {
                return console.error(err);
              }
            });
            fs.writeFile(newFolder + '/.env', array[5], function(err) {
              if (err) {
                return console.error(err);
              }
            });
            effect(newFolder)
            return
          } else {
            let connection = path.join(newFolder, 'connection')
            fs.mkdir(connection, (err) => {
              if (err) {
                fs.writeFile(connection + '/db.js', array[0], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(connection + '/db.js', array[0], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            let models = path.join(newFolder, 'models')
            fs.mkdir(models, (err) => {
              if (err) {
                fs.writeFile(models + '/models.js', array[1], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(models + '/models.js', array[1], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            let routes = path.join(newFolder, 'routes')
            fs.mkdir(routes, (err) => {
              if (err) {
                fs.writeFile(routes + '/routes.js', array[2], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(routes + '/routes.js', array[2], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            let views = path.join(newFolder, 'views')
            fs.mkdir(views, (err) => {
              if (err) {
                fs.writeFile(views + '/views.ejs', array[3], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
                return
              } else {
                fs.writeFile(views + '/views.ejs', array[3], function(err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              }
            })
            fs.writeFile(newFolder + '/server.js', array[4], function(err) {
              if (err) {
                return console.error(err);
              }
            });
            fs.writeFile(newFolder + '/.env', array[5], function(err) {
              if (err) {
                return console.error(err);
              }
            });
            effect(newFolder)
          }
        })
      }
    });
  } catch (e) {

  }



}


module.exports = class extends Generator {
  method() {
    create()
    this.log('Your folder is ready');
  }
};