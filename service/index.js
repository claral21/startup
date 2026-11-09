const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

// The users are saved in memory and disappear whenever the service is restarted.
let users = [];
const soundsmap = new Map();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.username, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ username: user.username });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('username', req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    req.user = user;   // handlers can now use req.user
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// GetSounds // I think this one's done
apiRouter.get('/sounds', verifyAuth, (req, res) => {
  res.send(soundsmap.get(req.user.username) ?? []);
});

// SubmitSounds // I think this one's done too
apiRouter.post('/sounds', verifyAuth, (req, res) => {
  const { soundname, soundpath } = req.body;
  updateSounds(soundname, soundpath, req.user.username);
  res.send(soundsmap.get(req.user.username));
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// updateScores considers a new score for inclusion in the high scores.
function updateSounds(newSoundname, soundfile, currentuser) {
  let found = false;
  //   key: "Clara",
  //   value: [{soundname: "Ducky" soundpath: "/ducky.m4a"}, {soundname: "Rattle" soundpath: "/rattle.m4a"}]
  //   }
  // for the current user's sounds, if the sound name is found, don't add
  const currentsoundlist = soundsmap.get(currentuser) ?? [];
  for (const soundobject of currentsoundlist) {
    if (newSoundname == soundobject.soundname) {
        found = true
        break;
    }
  }
  if (!found) {
    const newsound = { soundname: newSoundname, soundpath: soundfile };
    const updatedsoundlist = [...currentsoundlist, newsound]; 
    soundsmap.set(currentuser, updatedsoundlist)
  }
}

async function createUser(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  users.push(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

