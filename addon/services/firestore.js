import Service from "@ember/service";
import { inject as service } from "@ember/service";

export default Service.extend({
  firebase: service()
  instance: this.get('firebase').firestore()
});
