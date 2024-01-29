const a3 =require("./checkData")

const a2 = (s) => {
    try {
      let news = s.split(" ");
      let d = a3(news);
      let newdata = [];
      let c = 0;
      for (let index = news.length; index >= 0; index--) {
        for (const key in d) {
          if (index === d[key]["n"]) {
            newdata = newdata.concat(d[key]);
            c += 1;
            if (c >= 5) {
              return newdata;
            }
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  module.exports=a2