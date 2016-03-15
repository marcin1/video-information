import uuid from 'node-uuid';

const storageKey = "videoInformationRecords";


var mockData = [
    {
        id: uuid.v4(),
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ante odio. Phasellus ut placerat libero. Aenean dictum ipsum elit, eget sollicitudin orci consequat non. Nullam ut eleifend nisi, et aliquet massa. In imperdiet scelerisque fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam in laoreet mi. Aliquam nec eleifend libero, sit amet viverra lorem. Fusce convallis, dui eget pharetra mollis, purus justo commodo tortor, sit amet ultricies nulla est in lectus.',
        thumbnailUrl: 'http://getuikit.com/docs/images/placeholder_200x100.svg',
        snapshotUrl: 'http://getuikit.com/docs/images/placeholder_200x100.svg'
    },
    {
        id: uuid.v4(),
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ante odio. Phasellus ut placerat libero. Aenean dictum ipsum elit, eget sollicitudin orci consequat non. Nullam ut eleifend nisi, et aliquet massa. In imperdiet scelerisque fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam in laoreet mi. Aliquam nec eleifend libero, sit amet viverra lorem. Fusce convallis, dui eget pharetra mollis, purus justo commodo tortor, sit amet ultricies nulla est in lectus.',
        thumbnailUrl: 'http://gallery.thesemite.com/var/resizes/Nepal-2012/IMG_0848.jpg?m=1342483091',
        snapshotUrl: 'http://gallery.thesemite.com/var/resizes/Nepal-2012/IMG_0848.jpg?m=1342483091'
    },
    {
        id: uuid.v4(),
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ante odio. Phasellus ut placerat libero. Aenean dictum ipsum elit, eget sollicitudin orci consequat non. Nullam ut eleifend nisi, et aliquet massa. In imperdiet scelerisque fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam in laoreet mi. Aliquam nec eleifend libero, sit amet viverra lorem. Fusce convallis, dui eget pharetra mollis, purus justo commodo tortor, sit amet ultricies nulla est in lectus.',
        thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Typography_Line_Terms.svg/2000px-Typography_Line_Terms.svg.png',
        snapshotUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Typography_Line_Terms.svg/2000px-Typography_Line_Terms.svg.png'
    },
    {
        id: uuid.v4(),
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ante odio. Phasellus ut placerat libero. Aenean dictum ipsum elit, eget sollicitudin orci consequat non. Nullam ut eleifend nisi, et aliquet massa. In imperdiet scelerisque fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam in laoreet mi. Aliquam nec eleifend libero, sit amet viverra lorem. Fusce convallis, dui eget pharetra mollis, purus justo commodo tortor, sit amet ultricies nulla est in lectus.',
        thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dubai-CN-Sears-towers.svg/2000px-Dubai-CN-Sears-towers.svg.png',
        snapshotUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dubai-CN-Sears-towers.svg/2000px-Dubai-CN-Sears-towers.svg.png'
    },
    {
        id: uuid.v4(),
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ante odio. Phasellus ut placerat libero. Aenean dictum ipsum elit, eget sollicitudin orci consequat non. Nullam ut eleifend nisi, et aliquet massa. In imperdiet scelerisque fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam in laoreet mi. Aliquam nec eleifend libero, sit amet viverra lorem. Fusce convallis, dui eget pharetra mollis, purus justo commodo tortor, sit amet ultricies nulla est in lectus.',
        thumbnailUrl: 'http://getuikit.com/docs/images/placeholder_200x100.svg',
        snapshotUrl: 'http://getuikit.com/docs/images/placeholder_200x100.svg'
    },
    {
        id: uuid.v4(),
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ante odio. Phasellus ut placerat libero. Aenean dictum ipsum elit, eget sollicitudin orci consequat non. Nullam ut eleifend nisi, et aliquet massa. In imperdiet scelerisque fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam in laoreet mi. Aliquam nec eleifend libero, sit amet viverra lorem. Fusce convallis, dui eget pharetra mollis, purus justo commodo tortor, sit amet ultricies nulla est in lectus.',
        thumbnailUrl: 'http://getuikit.com/docs/images/placeholder_200x100.svg',
        snapshotUrl: 'http://getuikit.com/docs/images/placeholder_200x100.svg'
    },
];

let VideoRecordsApi = {
    set: function(data) {
        localStorage.setItem(storageKey, JSON.stringify(data));
    },
    fetch: function() {
        return JSON.parse(localStorage.getItem(storageKey));
    },
    get: function(id) {
        let records = this.fetch();
        let index = records.findIndex(x => x.id == id);
        if (index >= 0){
            return records[index];
        }
        return null;
    },
    insert: function(data) {
        data.id = uuid.v4();
        let records = this.fetch();
        records.push(data);
        this.set(records);
    },
    update: function(data) {
        let records = this.fetch();
        let index = records.findIndex(x => x.id == data.id);
        if (index >= 0) {
            records[index] = data;
            this.set(records);
        }
    },
    delete: function(id) {
        let records = this.fetch();
        let index = records.findIndex(x => x.id == id);
        if (index >= 0) {
            let id = records[index].id;
            records.splice(index, 1);
            this.set(records);
            return id;
        }
        return null;
    },
    fetchData: function(page, pageSize) {
        let videoRecords = this.fetch();
        if (videoRecords == null) {
            this.set(mockData);
            videoRecords = mockData;
        }
        let result = {
            totalPages: Math.floor((videoRecords.length + pageSize - 1) / pageSize),
            videoRecordsList: videoRecords.slice(page * pageSize, (page + 1) * pageSize),
            page: page,
            pageSize: pageSize
        }
        return result;
    }
}

export default VideoRecordsApi;