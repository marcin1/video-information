import uuid from 'node-uuid';

const storageKey = "videoInformationRecords";

let VideoRecordsApi = {
    set: function(data) {
        localStorage.setItem(storageKey, JSON.stringify(data));
    },
    fetch: function() {
        return JSON.parse(localStorage.getItem(storageKey));
    },
    get: function(id) {
        let records = get();
        let index = records.findIndex(x => x.id == id);
        if (index >= 0){
            return records[index];
        }
        return null;
    },
    insert: function(data) {
        data.id = uuid.v4();
        let records = get();
        records.push(data);
        set(data);
    },
    update: function(data) {
        let records = get();
        let index = records.findIndex(x => x.id == data.id);
        if (index >= 0) {
            records[index] = data;
            set(records);
        }
    },
    delete: function(id) {
        let records = get();
        let index = records.findIndex(x => x.id == id);
        if (index >= 0) {
            records.splice(index, 1);
            set(records);
        }
    }
}

export default VideoRecordsApi;