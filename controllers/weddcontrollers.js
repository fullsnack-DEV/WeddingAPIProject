//Requireing a  fs module to import the files

// Here we will be exporting all the HTTP MEthods

//getting all the wedding places available in the database
exports.getallweddingplaces = (req, res, next) => {
  //using try catch to handle the error
  try {
    //We will be also sending status code

    res.status(200).json({
      status: "Success",
      data: {
        message: "I am running well dont worry",
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
    console.log(err);
  }
};

//getting the One wedding place according to the ID specified
exports.getWeddingplace = (req, res, next) => {
  try {
    //We will be also sending status code

    res.status(200).json({
      status: "Success",
      data: {
        message: "I am running well",
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
    console.log(err);
  }
};
