const defaultParameters = { data: {} };

const __mock = {
  reset() {
    return Object.assign(__mock.instance, {
      get: jest.fn(() => Promise.resolve(defaultParameters)),
      post: jest.fn(() => Promise.resolve(defaultParameters))
    });
  },
  instance: {}
};

__mock.reset();

module.exports = {
  __mock,
  create() {
    return __mock.instance;
  }
};
