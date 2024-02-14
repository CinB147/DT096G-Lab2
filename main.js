function Iterator(arr) {
    this.index = 0; // Start with the first element
    this.array = arr;
}
Iterator.prototype.hasNext = function() {
    return this.index < this.array.length;
};
Iterator.prototype.next = function() {
    if (this.hasNext()) {
        return this.array[this.index++];
    }
};

const it = new Iterator([1, 2, 3, 5, 6, 7]);

while(it.hasNext()) {
    console.log(it.next());
}