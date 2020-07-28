var movieObj = [
    {name: "In Bruges",
    watched: true,
    evaluation: 5,
    }, 
    {name: "Frozen",
    watched: false,
    evaluation: 4.5,
    }, 
    {name: "Mad Max Fury Road",
    watched: true,
    evaluation: 5,
    }, 
    {name: "Les Miserables",
    watched: false,
    evaluation: 3.5,
    }
];
var result = [];
for (let i = 0; i < movieObj.length; i++) {
    if (movieObj[i].watched) {
        result.push("You have watched " + movieObj[i].name + " - " + movieObj[i].evaluation + " stars")
    } else {
        result.push("You have not watched" + movieObj[i].name + " - " + movieObj[i].evaluation + " stars")
    } 
    console.log(result)
}
//Keyword this
var comments = {
   data: ["Good Job!", "Bye!", "Lame"],
   print: function() {
       this.data.forEach(el => {
           console.log(el);
       });  
   }
};
comments.print();

