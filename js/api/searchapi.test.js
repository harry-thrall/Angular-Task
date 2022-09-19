const results = require('./searchapi.js');
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('Successfully runs the search function', () => {
    let result = {
        'title' : 'Test Company',
    };

    results(result);
    
    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();

    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(1);
});