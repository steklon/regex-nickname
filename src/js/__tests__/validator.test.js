import Validator from "../usernameValidator";

test("проверка валидного имени пользователя", () => {
  expect(new Validator().validateUsername('he-111_0o')).toBe(true);
});

describe('проверка не валидного имени пользователя', () => {
  test("имя начинается с символа _", () => {
    expect(() => new Validator().validateUsername('_hE-111_0o')).toThrow();
  });

  test("имя заканчивается символом _", () => {
    expect(() => new Validator().validateUsername('hE-111_0o_')).toThrow();
  });

  test("имя содержит более трех чисел подряд", () => {
    expect(() => new Validator().validateUsername('hE-1114_0o')).toThrow();
  });

  test("имя начинается с символа -", () => {
    expect(() => new Validator().validateUsername('-hE-111_0o')).toThrow();
  });

  test("имя заканчивается символом -", () => {
    expect(() => new Validator().validateUsername('hE-111_0o-')).toThrow();
  });

  test("имя содержит не допустимые буквы", () => {
    expect(() => new Validator().validateUsername('hлл-111_0o')).toThrow();
  });

  test("имя начинается с цифры", () => {
    expect(() => new Validator().validateUsername('5hE-111_0o')).toThrow();
  });

  test("имя заканчивается цифрой", () => {
    expect(() => new Validator().validateUsername('hE-111_0o6')).toThrow();
  });

  test("имя содержит недопустимый символ", () => {
    expect(() => new Validator().validateUsername('hE-11@1_0o')).toThrow();
  });

  test("имя начинается с недопустимого символа", () => {
    expect(() => new Validator().validateUsername('@hE-111_0o')).toThrow();
  });

  test("имя заканчивается недопустимым символом", () => {
    expect(() => new Validator().validateUsername('hE-111_0o*')).toThrow();
  });

  test("имя - пустая строка", () => {
    expect(() => new Validator().validateUsername('')).toThrow();
  });
});