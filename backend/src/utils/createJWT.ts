import jwt from "jsonwebtoken";

const createJWT = (id: number): string => {
  console.log(process.env.JWT_TOKEN, "<<<");
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_TOKEN || ""
  );

  return token;
};

export default createJWT;
