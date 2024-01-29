const converter = (req, res, next) => {
  try {
    
    if(req._parsedUrl.pathname!=="/favicon.ico"){if (req._parsedUrl.pathname.length > 0) {
      let s = req._parsedUrl.pathname;
      
      if (s.match("%20")) {
        s = s.replaceAll(/%20/g, " ");
      }

      if (s.match("/")) {
        s = s.slice(1);
    

        if (s.match("/")) {
          s = s.split("/").filter((e) => {
            return e !== "";
          });
          s=s[s.length-1]
          
        }
      }
      req.userdata = s;
      next();
    }}
  } catch (error) {
    console.log(error, "Internal error");
  }
};

module.exports = converter;
