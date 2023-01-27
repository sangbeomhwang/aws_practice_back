class UserService {
  constructor({ userRepository, jwt }) {
    this.userRepository = userRepository;
    this.jwt = jwt;
    this.crypto = jwt.crypto;
  }

  async signup(userData) {
    try {
      const {userid, username, userpw, ...rest} = userData
      if (!userid || !userpw || !username) throw "내용이 없습니다";
      const hash = this.crypto
        .createHmac("sha256", "web7722")
        .update(userpw)
        .digest("hex");
      const user = await this.userRepository.addUser({
        userid,
        username,
        userpw: hash, 
        ...rest
      });
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
  async userCheck(user) {
    // console.log(`serv :`, user)
    try {
      const userCheck = await this.userRepository.findUser(user);
      return userCheck
    } catch (e) {
      throw new Error(e);
    }
  }
  async me(token) {
    try {
      const { userid } = this.jwt.verifyToken(token, "web7722");
      const user = await this.userRepository.getUserById(userid);
      console.log(user)
      return user
    } catch (e) {
      throw new Error(e);
    }
  }
  async putProfile(userData) {
    try {
      const {userpw, ...rest} = userData
      const hash = this.crypto
        .createHmac("sha256", "web7722")
        .update(userpw)
        .digest("hex");
      const user = await this.userRepository.updateProfile({
        userpw: hash, 
        ...rest
      });
      return user
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = UserService;
