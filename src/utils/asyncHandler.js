const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

// Another option to write the above code

// const asyncHandler = (function) => async (req, res, next) => {
//     try {
//         await function(req, res, next)

//     } catch (error) {
//         res.status(err.code || 500).json({ success: false, message: err.message});

//     }
// }
