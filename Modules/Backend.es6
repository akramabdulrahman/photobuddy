var entries = require('Modules/Entries');
var records = require('Modules/Records');

var EntryRecord = records.EntryRecord;

function getEntries() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(entries);
		}, 0);
	});
}

function updateEntry(id, entry) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			entries.forEach(function (it, idx) {
				if (it.id) {
					entries[idx] = it;
				}
			});

			resolve();
		}, 0);
	});
}

function createEntry(id, entry) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      entries.push(new EntryRecord(entry));
    }, 0);
  });
}

module.exports = {
	getEntries: getEntries,
	updateEntry: updateEntry,
  createEntry: createEntry
};