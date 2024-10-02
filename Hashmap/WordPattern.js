var isIsomorphic = function (s, t) {
  for (let index = 0; index < s.length; index++) {
    if (s.indexOf(s[index]) !== t.indexOf(t[index])) {
      console.log(s.indexOf(s[index]));
      console.log(t.indexOf(t[index]));
    }
  }
  return true;
};

isIsomorphic("foo", "bar");
