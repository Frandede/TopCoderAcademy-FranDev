// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") {
    // If value is an empty string, delete the prop property from the album
    delete records[id][prop];
  } else if (prop === "tracks") {
    // If prop is "tracks" and it doesn't exist, create an empty array and add value to it
    if (!records[id].hasOwnProperty("tracks")) {
      records[id]["tracks"] = [value];
    } else {
      // If prop is "tracks" and value is not an empty string, add value to the end of the tracks array
      records[id]["tracks"].push(value);
    }
  } else {
    // If prop is not "tracks" and value is not an empty string, update or set the album's prop to value
    records[id][prop] = value;
  }

  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
