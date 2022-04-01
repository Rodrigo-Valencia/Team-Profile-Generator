const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Test', 10, 'test@test.com', 'githubusername');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github username', () => {
    const engineer = new Engineer('Test', 10, 'test@test.com', 'githubusername');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Test', 10, 'test@test.com', 'githubusername');

    expect(engineer.getRole()).toEqual("Engineer");
});