import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.APP.api_host || "localhost",
  namespace: ENV.APP.api_namespace || ""
});
