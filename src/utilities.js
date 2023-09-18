const dummyUser = {
  username: "test@luxpmsoft.com",
  password: "test1234!",
};
const passwordPattern =
  /^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*])(?=.*[a-zA-Z])(?=.*\d).{6,12}$/;

module.exports = { dummyUser, passwordPattern };
