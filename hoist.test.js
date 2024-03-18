const { v4: uuid } = require('uuid')
jest.mock('uuid')

uuid.mockReturnValue('a')

test('Module is auto-mocked', () => {
  expect(uuid()).toBe('a')
})
