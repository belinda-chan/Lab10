import { Component, getDebugNode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Book System';

  bookTitle = '';
  pubDate = '';
  bookType = '';
  bookSummary = '';

  DB = [];
 

  //SaveBook 
  saveBook() {
    console.log("Here");
    
    this.DB.push({
      bookTitle: this.bookTitle,
      pubDate: new Date (this.pubDate),
      bookType: this.bookType,
      bookSummary: this.bookSummary
    });
    //reset the input feilds
    this.bookTitle = '';
    this.pubDate = '';
    this.bookType = '';
    this.bookSummary = '';
  }

  // GET NO OF BOOKS
  getNo():number{
    let number = this.DB.length;
    return number;
  }

  // GET NO HARD COVER
  getHardCover():number{
    let hardNo = 0;
    for (let i=0; i<this.DB.length; i+=1){
      if (this.DB[i].bookType === "Hard Cover"){
        hardNo++;
      }
      else {
      }
    }
    return hardNo;
  }

  //DELETE HARD COVER extra task

  deleteHardCover():void{
   
    for (let i=0;i<this.DB.length; i++){
      if (this.DB[i].bookType === "Hard Cover"){
        this.DB.splice(i,1);
        i--;
      }
      }
    
    }
  
  //CHANGE BOOK
  changeBook(book:string) {
    const index:number = this.DB.indexOf(book);
    if(index !== -1){
      if(this.DB[index].bookType ==="Hard Cover"){
        this.DB[index].bookType = "Paper Back"
        
        

        console.log(this.DB[index].bookType);
    }
    else if (this.DB[index].bookType === "Paper Back"){
      this.DB[index].bookType = "Hard Cover"
    }    

  }
}

  // DELETE CURRENT ROW
  deleteBook(book:string) {
     const index:number = this.DB.indexOf(book);
     if(index !== -1){
       this.DB.splice(index,1);
     }
    }        
  }
