import LogComponent from './component1';

const logger = new LogComponent();
logger.log("log: " + new Date());

const exampleFunc = (x, y) => { return x * y };
alert(exampleFunc(2, 5));



