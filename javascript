const mongoose = require('mongoose');
const XLSX = require('node-xlsx');
const bookMode1 = require ('./books');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function printToexcel(){
    try{
        
        const books = await bookMode1.find().select('title pages');
        const data =[['title','pages']];
            for(const book of books){
                data.push([book.title, book.pages]);
            }

        const buffer = XLSX.build([{name: 'booksPages', data}]);
        require('fs').writeFileSync('books-pages.xlsx',buffer);

        console.log('written in xsl sheet!');

    }
    catch(error)
    {
        console.log(error);
    }
    finally{
        mongoose.disconnect();
    }
}

printToexcel();