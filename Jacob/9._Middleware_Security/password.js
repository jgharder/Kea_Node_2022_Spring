import bcrypt from "bcrypt";

const saltRounds = 12;
const plaintextPassword = "jacob123";
const hashedPassword =
  "$2b$12$8T710jn6uwh6rEfnNCAdVuNDl/kMhBdu9BW62.IX7FP/3YKvs8F36";

async function handlePasswords() {
  const hash = await bcrypt.hash(plaintextPassword, saltRounds);
  console.log(hash);
}

async function comparePasswords() {
  const isSame = await bcrypt.compare(plaintextPassword, hashedPassword);
  console.log(isSame);
}

handlePasswords();
comparePasswords();
export default {};
