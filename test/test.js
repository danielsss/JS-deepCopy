const should = require("should");
const DeepCopy = require("../lib");
const deep = new DeepCopy();
/*global describe, it*/

describe("Deep-Copy", function(){
    
    describe(`#Array:`, function(){
        it("Array deep copies and should returns an copied array", async ()=>{
            let arr = [1, 2, 3, ["a", "c"], 4];
            let arr1 = deep.cleaner.duplicator;
            should.notDeepEqual(arr, arr1);
            arr[0] = 100, arr[3][0] = "dddddd";

            should(arr).containDeep([100, ["dddddd"]]);
        });
    });
    describe(`#Object:`, function(){
        it("Object deep copies and should returns an copied object", async ()=>{
            let obj = {
                a: 1, b:2, c:3, d: {e: 5, f: 6, }, g:7
            };     
            let obj1 = deep.clean().copy(obj);
            should.notDeepEqual(obj, obj1);
            obj.a = 100;
            obj.d.e = 500;
            should(obj1).have.not.property("a", 100);
            should(obj1.d).have.not.property("e", 500);
            should(obj.d).have.property("e", 500);
        });
    });
});