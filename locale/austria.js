//! moment-holiday.js locale configuration
//! locale : Austria
//! author : Patrick Schubert : https://github.com/Twisterking

(function() {
  var moment = (typeof require !== 'undefined' && require !== null) && !require.amd ? require('moment') : this.moment;

  moment.holidays.austria = {
    "Neujahrstag": {
      date: '1/1',
      keywords: ['new', 'year']
    },
    "Karfreitag": {
      date: 'easter-2',
      keywords: ['good', 'friday']
    },
    "Ostersonntag": {
      date: 'easter',
      keywords: ['easter']
    },
    "Ostermontag": {
      date: 'easter+1',
      keywords: ['easter', 'monday']
    },
    "Heilige Drei Könige": {
      date: '1/6',
      keywords: ['konige'],
    },
    "Staatsfeiertag": {
      date: '5/1'
    },
    "Christi Himmelfahrt": {
      date: 'easter+39',
      keywords: ['ascension']
    },
    "Pfingsten": {
      date: 'easter+49',
      keywords: ['pentecost']
    },
    "Pfingstmontag": {
      date: 'easter+50',
      keywords: ['whit', 'monday']
    },
    "Fronleichnam": {
      date: 'easter+60',
      keywords: ['corpus', 'christi']
    },
    "Mariä Himmelfahrt": {
      date: '8/15',
      keywords: ['maria']
    },
    "Nationalfeiertag": {
      date: '10/26'
    },
    "Allerheiligen": {
      date: '11/1'
    },
    "Mariä Empfängnis": {
      date: '12/8'
    },
    "Weihnachten": {
      date: '12/24',
      keywords: ['christmas']
    },
    "Christtag": {
      date: '12/25'
    },
    "Stefanitag": {
      date: '12/26'
    }
  };

  if ((typeof module !== 'undefined' && module !== null ? module.exports : void 0) != null) { module.exports = moment; }
}).call(this);
