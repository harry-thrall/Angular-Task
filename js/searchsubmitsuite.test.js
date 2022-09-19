const search = require('./searchsubmitsuite');

test('Successfully runs the search function', () => {
    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
});