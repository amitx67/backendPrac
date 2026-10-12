const asyncHandler = (asyncHandler) => { (req, rs, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => (next (err)))
}}

export {asyncHandler}