import md5 from "md5";

const gravatar = (email) => {
  const BASE = "https://gravatar.com/avatar/";
  const formatEmail = email.trim().toLowerCase();
  const HASH = md5(formatEmail, { encoding: "binary" });

  return `${BASE}${HASH}?d=identicon`;
};

export default gravatar;
