const searchDocument =require("../document/document")
const lib = searchDocument.default
const a3 = (s) => {
    try {
      let data = [];
      for (const element in lib) {
        let r = { element, n: 0 };
        for (const key in s) {
          if (element.toLocaleLowerCase().match(s[key].toLocaleLowerCase())) {
            r["n"] = r["n"] + 1;
          }
        }

        data = data.concat(r);
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  module.exports=a3