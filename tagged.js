const author = "some author";
      const statement = "some statement";
      const quote = highlight`here is the ${statement} by ${author} and it could not be more true`;
      console.log(quote);

      function highlight(text,...vars){
          let awesomeText = text.map((item, index)=>{
              return `${item} <strong class="blue">${vars[index] || ""}</strong>;
          });
          return awesomeText.join("");
      }

      const result = document.getElementById("result");
      result.innerHTML=quote;