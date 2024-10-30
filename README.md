Dump & Die for JavaScript

This utility function is designed to mimic PHP’s `dd()` (dump and die) functionality in JavaScript, making it easy to visualize variable contents and halt execution for debugging purposes.

Version

- 0.03 - Enhanced with Die functionality.

Author

- Al Rogatto
  - Email: al@rticons.com  

Description

The `dd()` function in JavaScript allows you to inspect the content of an array, object, or variable, then halt execution by throwing an error. This can be extremely helpful in debugging processes, especially when working with complex nested structures.

Usage

To use `dd()`, simply pass any variable you wish to inspect:

javascript
dd(myArray); // Inspects the contents of myArray and halts execution

Example: 
const testObj = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Elm St",
        city: "Somewhere",
        country: "Neverland"
    }
};
dd(testObj);

Expected result: 
    'name' => "John Doe"
    'age' => "30"
    'address' {
        'street' => "123 Elm St"
        'city' => "Somewhere"
        'country' => "Neverland"
    }

Installation
You can directly include the dd() function in your project or copy it to your preferred debugging library.

License
This project is licensed under the Apache 2.0 License.