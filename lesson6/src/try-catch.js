function sayHello(msg) {
    if (typeof msg !== 'string') {
        throw new Error('Invalid argument type. should be string');
    }
    console.log('Hello ' + msg);
}

let arg = 123;
try {
    sayHello(arg);
} catch (error) {
    if (error.message.includes('Invalid argument type')) {
        arg = arg.toString();
        sayHello(arg);
    } else
        throw error;
}

sayHello('World');

