export class LocationModel {
    constructor(location = {}) {
        this.name = location.name || '';
    }
}