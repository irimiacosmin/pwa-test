import Utils from "./Utils.js";
export default class Batch {
    batchNumber;
    expiration;
    version = 1;
    serialNumbers = "430239925150";

    constructor(batch) {
        if (typeof batch !== undefined) {
            for (let prop in batch) {
                this[prop] = batch[prop];
            }
        }
        if (!this.batchNumber) {
            this.batchNumber = Utils.generateSerialNumber(6);
        }
    }

    generateViewModel() {
        return {label: this.batchNumber, value: this.batchNumber}
    }

    validate() {
        const errors = [];
        if (!this.batchNumber) {
            errors.push('Lot number is required.');
        }

        if (!this.expiration) {
            errors.push('Expiration date is required.');
        }

        return errors.length === 0 ? true : errors;
    }
}