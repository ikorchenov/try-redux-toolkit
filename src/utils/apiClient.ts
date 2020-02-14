import request from 'superagent';

export const agent = request.agent().use(req => {
  req.url = `https://api.github.com${req.url}`;
});
