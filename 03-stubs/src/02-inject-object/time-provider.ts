import moment from 'moment';

export class RealTimeProvider {
  getDay() {
    return moment().day();
  }
};
