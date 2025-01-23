import jwt from 'jsonwebtoken';
import Student from '../Controllers/student.model.js';

const isStudent = async (req, res, next) => {
  // extract token from req.headers.authorization
  const authorization = req?.headers?.authorization;
  const splittedToken = authorization?.split(' ');

  const token = splittedToken?.length === 2 ? splittedToken[1] : null;

  //if not found token throw error
  if (!token) {
    return res.status(401).send({ message: 'Unauthorized.' });
  }

  let payload = null;
  try {
    const secretKey = 'sushilganduhokoteshwormabasxa';

    //decrypt token
    payload = jwt.verify(token, secretKey);
  } catch (error) {

    //if decryption failed, throw error
    //reasons: secretkey is different, token is expired, token is not from our system
    return res.status(401).send({ message: 'Unauthorized.' });
  }

  //  find Student using email from payload
    const student = await Student.findOne({ email: payload.email });

  if (!student) {
    return res.status(401).send({ message: 'Unauthorized.' });
  }

  next();
};

export default isStudent;
