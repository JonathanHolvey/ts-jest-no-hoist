import { v4 as uuid } from 'uuid'
jest.mock('uuid')

uuid.mockReturnValue('a')

test('Module is auto-mocked', () => {
  expect(uuid()).toBe('a')
})
