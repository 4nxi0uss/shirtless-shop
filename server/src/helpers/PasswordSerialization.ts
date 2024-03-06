import * as bcrypt from "bcrypt";

export default class PasswordSerialization {
  /**
   * @param {number} saltRounds
   * @returns {string}
   */
  getSalt(saltRounds: number): string {
    const passSalt = bcrypt.genSaltSync(saltRounds);

    return passSalt;
  }

  /**
   * @param {string} plainPassword
   * @param {string} salt
   * @returns {string}
   */
  getHash(plainPassword: string, salt: string): string {
    const passHash = bcrypt.hashSync(plainPassword, salt);

    return passHash;
  }

  /**
   * @param {string} pass
   * @param {string} hash
   * @returns {boolean}
   */
  comparePassword(pass: string, hash: string): boolean {
    const res = bcrypt.compareSync(pass, hash);

    return res;
  }

  /**
   * @param {string} plainPassword
   * @returns {string}
   */
  hashPassword(plainPassword: string): string {
    const saltR = process.env.SALT_ROUND;

    const salt = this.getSalt(Number(saltR));
    const hash = this.getHash(plainPassword, salt);

    return hash;
  }
}
