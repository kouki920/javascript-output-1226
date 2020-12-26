class Concentration{
  constructor(){
    
     this.table = document.querySelector('table');
    
      
      this.tr = document.createElement('tr');
      this.tr.classList.add('tr_box');


    this.createRandom();
    this.createRandom();
    this.createRandom();
    this.createRandom();
    this.createRandom();
    this.tdHidden();
  }
  

  createRandom(){
    this.td = document.createElement('td');
    this.td.classList.add('tdfuck');
    this.tr.appendChild(this.td);
    this.table.appendChild(this.tr);

    for(let i = 0; i < 5; i++){
      this.td.textContent = Math.floor(Math.random()*i+1);
    }
   
  }
  
  tdHidden(){
    let table = document.getElementById('table');
    for (let row of table.rows) {
      for(let cell of row.cells){
        cell.addEventListener('click',()=>{
    
          if(cell.textContent == 1){
            cell.classList.add('td_hidden');
            
          }
      })
    }
  }
}
}

const items = [
  new Concentration(),
  new Concentration(),
  new Concentration(),
  new Concentration(),
  new Concentration(),
]


// class Concentration {

//   constructor (table){
//     this.table = table;
//   }

//   createRandom (n) {
//     let tr = this.table.insertRow ();
//     for (let i = 0; i < n; i++)
//       tr.insertCell ().textContent = i * Math.random () |0;
//   }

//   tdHidden (e) {
//     if (e.textContent == '1')
//       e.classList.add ('td_hidden');
//   }

//   handleEvent (event) {
//     let e = event.target;
//     if (this.table == e.closest ('table'))
//       this.tdHidden (e.closest ('td'));
//   }

//   static create (table, rows, cells) {
//     let obj = new this (table);

//     for (let i = 0; i < rows; i++)
//       obj.createRandom (cells);

//     table.addEventListener ('click', obj, false);
//     return obj;
//   }
// }

// const a = Concentration.create (document.querySelector ('table'), 20, 10);
// const items = a.table.rows;



