export default class Validator {
  validateUsername(username) {
    const re = /^(?!.*\d{4})(?!^[_-\d])(?:(?![_-\d]$)[\w-])+$/;

    const checkNickname = re.test(username);

    if (!checkNickname) {
      throw new Error("имя пользователя не соответствует допустимым правилам");
    }

    return checkNickname;
  }
}