export const logger = ((req, res, next) => {
    console.log("Time", Date.now());
    next();
})