'use strict'

const Node=require('../linkedList/node.js');

class linkedList{
    constructor(){
        this.head=null;
    }

    append(value) {
        let current = this.head;
    
        while (current) {
    
          if (current.next === null) {
            current.next = new Node(value);
            return;
          }
          current = current.next;
        }
      }
      insert(value){
        let node=new Node(value);
        if(!this.head){
          this.head=node;
        }else{
          node.next=this.head;
          this.head=node;
        }
      }

      includes(value) {
        let current = this.head;
        while (current) {
          if (value === current.value) {
            return true;
          } else if (current.next === null) {
            return false;
          } else {
            current = current.next;
          }
        }
      }
    
      toString() {
        let current = this.head;
        let string = '';
        while (current) {
          let stringTwo = current.value;
          current = current.next;
          string += `{${stringTwo}} -> `;
        }
        string += '{null}';
        return string;
      }
    
    }
    


module.exports=linkedList;