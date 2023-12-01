import get from 'lodash.get';

export default function exportData(state: any) {
  return {
    fraSluttbrukersystem: 'katteveiviser',
    eiendomByggested: {
      etasje: parseInt(get(state, 'living.floor'), 10),
    },
    ansvarsrett: {
      noeGreier: 'her',
    },
  };
}
