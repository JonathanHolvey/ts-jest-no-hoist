jest.mock('uuid')
const { v4: uuid } = require('uuid')

uuid.mockReturnValue('a')

test('Module is auto-mocked', () => {
  expect(uuid()).toBe('a')
})
