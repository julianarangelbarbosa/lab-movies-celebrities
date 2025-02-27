const {Schema, model} = require('mongoose');

const moviesSchema = new Schema(
{
   title : { 
    type: String,
    require: true
   },
   genre: String,
   plot: String,  
   cast: [{type: Schema.Types.ObjectId, ref:'Celebrity'}],
},
{
    timestamps: true
}
)

//createdAt
//updatedAt

const Movie = model("Movie", moviesSchema);


module.exports = Movie;