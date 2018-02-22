import { Component,OnInit  } from '@angular/core';
import { GetdataService } from './getdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:number;
  original=[];
  data = [];
  edittemplateFlag:boolean = false;
  endOfRecords:string = "";
  arrLength:number = 0;
  selectedItemName:string ='';
  selectedItemPrice:number;
  selectedItemId:number = 0;
selectedArray = [];
newitem = {
	
};
  constructor(private service:GetdataService) {}
   ngOnInit(){
    this.fetchData();
  }

  fetchData(){
  this.service.getData().subscribe(data => {
  this.original = data;
  this.data = data.slice(0,10);
  this.arrLength = this.data.length;
  });
  }
  
  add(newname,newprice,newurl){
  this.newitem = {
  itemid:this.arrLength++,
  itemname:newname.value,
  itemprice:newprice.value,
  itemimage:newurl.value
  }
  this.data.unshift(this.newitem);
  }

  loadMore(){
  if(this.data.length < this.original.length){  
     let len = this.data.length;
    for(var i = len; i < len+2; i++){
      this.data.push(this.original[i]);
      this.arrLength = this.data.length;
    }
   }
   if(this.data.length == this.original.length){
   this.endOfRecords = "End of records";
   }
  }

  remove(index){
   this.data.splice(index,1);
   this.arrLength = this.data.length;
  }

  edit(id){
	 this.edittemplateFlag = true;
	this.title = id;
	this.selectedArray = this.data.filter((item)=> item.itemid ==id);
	this.selectedItemName = this.selectedArray[0].itemname;
	this.selectedItemPrice = this.selectedArray[0].itemprice;
	this.selectedItemId = this.selectedArray[0].itemid;
}
updateList(name,price,id){
	this.data.forEach(function(item){
	if(item.itemid ==id){
	item.itemname = name;
	item.itemprice = price;
	}
	});
}
}