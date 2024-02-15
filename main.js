function Iterator(arr) {
    this.index = 0; // Start with the first element
    this.array = arr;
}
Array.prototype.get = function(){
    return new Iterator(this);
}
Iterator.prototype.hasNext = function() {
    return this.index < this.array.length;
};
Iterator.prototype.next = function() {
    if (this.hasNext()) {
        return this.array[this.index++];
    }
};

const arr =  [1,2,4,5,9,7,5];
const it = arr.get();

while(it.hasNext()) {
    console.log(it.next());
}