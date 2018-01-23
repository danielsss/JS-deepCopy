"use strict";

class DeepCopy {
    constructor(ctx){
        this._ctx = ctx || null;
        this._copied = null;
    }

    /**
     * @description deep copy
     * @public
     * @param {Array|Object} ctx
     * @return copied value
     */
    copy(ctx){
        this._ctx = ctx;
        if(Array.isArray(this._ctx)){
            if(this._ctx.length === 0) return this._ctx;
            this._copied = this._toArray(this._ctx);
        }else if(typeof this._ctx === "object" && this._ctx !== null){
            if(Object.keys(this._ctx).length === 0) return this._ctx;
            this._copied = this._toObject(this._ctx);
        }else{
            throw new Error("The context must be an array or object");
        }
        return this._copied;
    }


    /**
     * @description copy getter
    */
    get diplicator(){
        return this.copy(this._ctx);
    }

    /**
     * @description Clean the context
     */
    clean(){
        this._ctx = null;
        this._copied = null;
        return this;
    }

    /**
     * @description clean getter
     */
    get cleaner(){
        this.clean();
        return this;
    }

    /**
     * @description deep copy array
     * @param {*} ctx 
     * @private
     * @returns copied array
     */
    _toArray(ctx){
        //Init copied to []
        let copied = [];

        for(let i = 0, len = ctx.length; i < len; i++){
            if(Array.isArray(ctx[i])) { 
                copied.push(this._toArray(ctx[i]));
            }else{
                copied.push(ctx[i]);
            }
        }
        return copied;
    }

    /**
     * @description Deep copy object
     * @param {Object} ctx 
     * @private
     * @returns Copied Object
     */
    _toObject(ctx){
        let copied = {};

        let keys = Object.keys(ctx);
        for(let i = 0, len = keys.length; i < len; i++){
            let key = keys[i];
            let typed = typeof ctx[key];
            if( typed === "object" && 
                ctx[key] !== null && 
                !Array.isArray(ctx[key]) ){
                copied[key] = this._toObject(ctx[key]);
            }else{
                copied[key] = ctx[key];
            }
        }

        return copied;
    }
}

module.exports = DeepCopy;